---
title: "使用HiLog打印日志是否有长度限制"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-performance-analysis-kit-58
---

使用HiLog进行日志打印时，最多支持4096字节，超出部分将被截断。

利用HiLog封装日志打印工具类，解决日志信息过长的问题。

示例如下：

封装LogUtil类：

```
import { hilog } from '@kit.PerformanceAnalysisKit';

const HILOG_MAX_BYTES = 4096;

// Split the string by byte limit.
function splitByByteLimit(str: string, limit: number): string[] {
  const result: string[] = [];
  let start = 0;
  while (start < str.length) {
    let end = start;
    let byteLen = 0;
    while (end < str.length) {
      const code = str.charCodeAt(end);
      let charBytes: number;
      if (code < 0x80) {
        charBytes = 1;
      } else if (code < 0x800) {
        charBytes = 2;
      } else if (code < 0xD800 || code > 0xDFFF) {
        charBytes = 3;
      } else {
        charBytes = 4;
        end++;
      }
      if (byteLen + charBytes > limit) break;
      byteLen += charBytes;
      end++;
    }
    result.push(str.substring(start, end));
    start = end;
  }
  return result;
}

function printSegments(level: string, logTag: string, content: string): void {
  const segments = splitByByteLimit(content, HILOG_MAX_BYTES);
  for (const seg of segments) {
    switch (level) {
      case 'error':
        hilog.error(0x0000, logTag, '%{public}s', seg);
        break;
      case 'debug':
        hilog.debug(0x0000, logTag, '%{public}s', seg);
        break;
      case 'info':
        hilog.info(0x0000, logTag, '%{public}s', seg);
        break;
    }
  }
}

class LogUtil {
  private static instance: LogUtil;

  private constructor() {
  }

  public static getInstance(): LogUtil {
    if (!LogUtil.instance) {
      LogUtil.instance = new LogUtil();
    }
    return LogUtil.instance;
  }

  public logError(logTag: string, content: string) {
    printSegments('error', logTag, content);
  }

  public logDebug(logTag: string, content: string) {
    printSegments('debug', logTag, content);
  }

  public logInfo(logTag: string, content: string) {
    printSegments('info', logTag, content);
  }
}

export default LogUtil;
```

使用：

```
import LogUtil from './LogUtilClass';

@Entry
@Component
struct HiLogIsThereALengthLimit {

  build() {
    Row() {
      Column() {
        Button('hilog util')
          .onClick(() => {
            let str = 'Long log content';
            let utilInfo = LogUtil.getInstance();
            utilInfo.logInfo('testTag', str);
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
