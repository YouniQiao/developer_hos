import React, { useState, useMemo } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import rawData from '@site/src/data/device-support.json';

interface DeviceEntry {
  v: string;  // API version
  t: string;  // device type (Phone/Tablet/PC/2in1/TV)
  n: string;  // device name
  m: string;  // model codes
}

interface DeviceVersionMap {
  deviceName: string;
  deviceType: string;
  modelCodes: string;
  versions: string[];
}

const DATA = rawData.devices as DeviceEntry[];
const UPDATE_TIME = rawData.updateTime;
const SOURCE_URL = 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/support-device';

// Build inverted index: device name → versions
function buildDeviceIndex(): DeviceVersionMap[] {
  const map = new Map<string, DeviceVersionMap>();
  for (const entry of DATA) {
    const key = entry.n;
    if (!map.has(key)) {
      map.set(key, {
        deviceName: entry.n,
        deviceType: entry.t,
        modelCodes: entry.m,
        versions: [],
      });
    }
    map.get(key)!.versions.push(entry.v);
  }
  return Array.from(map.values()).sort((a, b) => a.deviceName.localeCompare(b.deviceName));
}

// Build version → devices index
function buildVersionIndex(): { version: string; devices: DeviceEntry[] }[] {
  const map = new Map<string, DeviceEntry[]>();
  const order = new Map<string, number>();
  for (const entry of DATA) {
    if (!map.has(entry.v)) {
      map.set(entry.v, []);
      order.set(entry.v, order.size);
    }
    map.get(entry.v)!.push(entry);
  }
  // Sort versions newest first (by position in original page = newer first)
  return Array.from(map.entries())
    .sort((a, b) => (order.get(a[0]) ?? 99) - (order.get(b[0]) ?? 99))
    .map(([version, devices]) => ({ version, devices }));
}

// ---- Search Device Mode ----

function SearchDeviceMode({ deviceIndex }: { deviceIndex: DeviceVersionMap[] }) {
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('全部');

  const deviceTypes = useMemo(() => {
    const types = new Set(deviceIndex.map(d => d.deviceType));
    return ['全部', ...Array.from(types).sort()];
  }, [deviceIndex]);

  const results = useMemo(() => {
    if (!query.trim() && typeFilter === '全部') return [];
    const q = query.trim().toLowerCase();
    return deviceIndex.filter(d => {
      const matchType = typeFilter === '全部' || d.deviceType === typeFilter;
      const matchQuery = !q || d.deviceName.toLowerCase().includes(q) || d.modelCodes.toLowerCase().includes(q);
      return matchType && matchQuery;
    });
  }, [query, typeFilter, deviceIndex]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1 relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="输入设备名称或型号代码…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-secondary-800 border border-secondary-700 rounded-lg text-sm focus:outline-none focus:border-primary text-white placeholder:text-text-400"
          />
        </div>
        <select
          value={typeFilter}
          onChange={e => setTypeFilter(e.target.value)}
          className="px-4 py-2.5 bg-secondary-800 border border-secondary-700 rounded-lg text-sm text-white focus:outline-none focus:border-primary"
        >
          {deviceTypes.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      {query.trim() || typeFilter !== '全部' ? (
        results.length > 0 ? (
          <div className="space-y-2">
            <p className="text-xs text-text-400 mb-3">找到 {results.length} 个设备</p>
            {results.map((d, i) => (
              <div key={i} className={`rounded-lg p-4 ${i % 2 === 0 ? 'bg-secondary-800' : ''}`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm">{d.deviceName}</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-secondary-700 text-text-400">{d.deviceType}</span>
                    </div>
                    <p className="text-xs text-text-400 font-mono truncate">{d.modelCodes}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 justify-end flex-shrink-0">
                    {d.versions.map(v => (
                      <span key={v} className={`text-xs px-2 py-1 rounded font-mono ${
                        v === d.versions[0] ? 'bg-primary/20 text-primary font-semibold' : 'bg-secondary-700 text-text-400'
                      }`}>
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-text-400 text-sm text-center py-12">未找到匹配的设备</p>
        )
      ) : (
        <p className="text-text-400 text-sm text-center py-12">输入设备名称开始查询</p>
      )}
    </div>
  );
}

// ---- Browse Version Mode ----

function BrowseVersionMode({ versionIndex }: { versionIndex: { version: string; devices: DeviceEntry[] }[] }) {
  const [selectedVersion, setSelectedVersion] = useState(versionIndex[0]?.version ?? '');

  const selectedDevices = useMemo(() => {
    return versionIndex.find(v => v.version === selectedVersion)?.devices ?? [];
  }, [selectedVersion, versionIndex]);

  // Group by device type
  const grouped = useMemo(() => {
    const map = new Map<string, DeviceEntry[]>();
    const typeOrder = ['Phone', 'Tablet', 'PC/2in1', 'TV'];
    for (const d of selectedDevices) {
      if (!map.has(d.t)) map.set(d.t, []);
      map.get(d.t)!.push(d);
    }
    return typeOrder.filter(t => map.has(t)).map(t => ({ type: t, devices: map.get(t)! }));
  }, [selectedDevices]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {versionIndex.map(v => (
          <button
            key={v.version}
            onClick={() => setSelectedVersion(v.version)}
            className={`text-xs px-3 py-1.5 rounded-md font-mono transition-colors ${
              selectedVersion === v.version
                ? 'bg-primary text-white'
                : 'bg-secondary-800 text-text-400 hover:bg-secondary-700'
            }`}
          >
            {v.version} <span className="opacity-60 ml-1">({v.devices.length})</span>
          </button>
        ))}
      </div>

      <p className="text-xs text-text-400 mb-4">
        {selectedVersion} 共支持 {selectedDevices.length} 款设备
      </p>

      <div className="space-y-6">
        {grouped.map(group => (
          <div key={group.type}>
            <h3 className="text-sm font-semibold mb-2 text-text-400 flex items-center gap-2">
              <span className={`inline-block w-2 h-2 rounded-full ${
                group.type === 'Phone' ? 'bg-blue-500' :
                group.type === 'Tablet' ? 'bg-purple-500' :
                group.type === 'PC/2in1' ? 'bg-emerald-500' :
                'bg-amber-500'
              }`} />
              {group.type}
              <span className="text-xs font-normal">({group.devices.length})</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {group.devices.map((d, i) => (
                <div key={i} className="bg-secondary-800 rounded-lg p-3">
                  <div className="text-sm font-medium truncate">{d.n}</div>
                  <div className="text-xs text-text-400 font-mono mt-1 truncate">{d.m}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- Main Component ----

function DeviceSupportSearchInner() {
  const [mode, setMode] = useState<'search' | 'browse'>('search');

  const deviceIndex = useMemo(() => buildDeviceIndex(), []);
  const versionIndex = useMemo(() => buildVersionIndex(), []);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <p className="text-text-400 text-sm mb-3">
        查询各 API 版本支持的设备型号。可按设备名查兼容版本，或按版本浏览支持设备列表。
      </p>
      <p className="text-xs text-text-400 mb-6">
        数据更新时间：{UPDATE_TIME}。
        <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" className="ml-2 text-primary hover:underline">
          数据来源 →
        </a>
      </p>

      {/* Mode toggle */}
      <div className="flex gap-2 mb-6 bg-secondary-800 rounded-lg p-1 w-fit">
        <button
          onClick={() => setMode('search')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            mode === 'search' ? 'bg-primary text-white' : 'text-text-400 hover:text-white'
          }`}
        >
          查设备
        </button>
        <button
          onClick={() => setMode('browse')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            mode === 'browse' ? 'bg-primary text-white' : 'text-text-400 hover:text-white'
          }`}
        >
          查版本
        </button>
      </div>

      {/* Content */}
      <div className="bg-secondary-900 rounded-xl p-6">
        {mode === 'search' ? (
          <SearchDeviceMode deviceIndex={deviceIndex} />
        ) : (
          <BrowseVersionMode versionIndex={versionIndex} />
        )}
      </div>

      <p className="text-xs text-text-400 italic mt-6">
        说明：数据来源于华为开发者官网，各版本支持的设备可能存在差异。
      </p>
    </div>
  );
}

// ---- Wrapper ----

export default function DeviceSupportSearch(): JSX.Element {
  return (
    <BrowserOnly>
      {() => <DeviceSupportSearchInner />}
    </BrowserOnly>
  );
}
