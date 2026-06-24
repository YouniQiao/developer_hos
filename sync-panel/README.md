# 文档同步审批工作台 (sync-panel)

监控华为 HarmonyOS 开发者文档上游变更，提供可视化审批工作台：
自动检测新增 / 删除 / 修改的文档 → 人工审批 → 执行合入（含回滚）。
每日定时同步并通过飞书机器人通知待处理变更。

线上地址：<https://sync.developer.harmonyos.cool>

## 项目结构

```
sync-panel/
├── backend/                # FastAPI 后端（端口 8766）
│   ├── main.py             # API 入口，路由总览见文件头部注释
│   ├── config.py           # 路径、华为 API 端点、并发等配置
│   ├── models.py           # SQLite CRUD（sync_batches / changes / ignore_rules / auth_tokens）
│   ├── sync_runner.py      # 同步检测核心：目录树比对 + 内容指纹比对
│   ├── executor.py         # 执行合入（approved → done）
│   ├── rollback.py         # 回滚已执行合入
│   ├── progress.py         # 执行进度（内存）
│   ├── auth.py             # 密码 + token 鉴权
│   ├── scheduler.py        # APScheduler 定时任务（每日 03:00 同步）
│   ├── notifier.py         # 飞书 webhook 通知
│   ├── requirements.txt
│   └── sync_panel.db       # SQLite 数据库（运行时生成）
├── frontend/               # React + Vite + Tailwind 前端
│   ├── src/
│   └── package.json
├── nginx/sync-panel.conf   # Nginx 站点配置
├── systemd/sync-panel.service  # systemd 服务单元
└── README.md
```

## 本地开发

### 后端

```bash
cd backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt

# 设置登录密码（必填）
export SYNC_PANEL_PASSWORD=your-password
# 可选：飞书通知 webhook
export FEISHU_WEBHOOK_URL=https://open.feishu.cn/open-apis/bot/v2/hook/xxxxx

python main.py   # 启动在 http://localhost:8766
```

> 注意：`config.py` 中 `REPO_DIR`、`MAP_FILE` 等路径默认指向本机仓库，
> 部署到服务器时需改为服务器上的实际路径。

### 前端

```bash
cd frontend
npm install
npm run dev      # 开发服务器 http://localhost:5173（已配置 /api 代理到 8766）
npm run build    # 产物输出到 frontend/dist/
```

### 手动触发一次同步

```bash
cd backend
python sync_runner.py              # 全量
python sync_runner.py --sample 20  # 抽样 20 篇
python notifier.py <batch_id>      # 对某次同步结果发飞书通知
```

## 部署（腾讯云 Ubuntu 24.04，已有 nginx + certbot）

假设项目部署到 `/opt/sync-panel`，仓库克隆到 `/opt/developer_hos`。

### 1. 准备代码

```bash
sudo mkdir -p /opt/sync-panel
sudo chown $USER:$USER /opt/sync-panel
# 将 backend/ 与 frontend/ 复制/克隆到 /opt/sync-panel/
```

### 2. 构建前端

```bash
cd /opt/sync-panel/frontend
npm install && npm run build
# 将构建产物作为静态根：nginx 指向 /opt/sync-panel/frontend/
# （即让 index.html 位于 /opt/sync-panel/frontend/index.html）
cp -r dist/* .  # 或调整 nginx root 指向 /opt/sync-panel/frontend/dist
```

### 3. 安装后端依赖

```bash
cd /opt/sync-panel/backend
sudo python3 -m pip install -r requirements.txt   # 若系统 Python 受 PEP 668 限制：
# sudo apt install python3-fastapi python3-uvicorn python3-httpx python3-apscheduler ...
# 或用 venv：python3 -m venv .venv && . .venv/bin/activate && pip install -r requirements.txt
```

> 用 venv 时，systemd 的 `ExecStart` 改为
> `/opt/sync-panel/backend/.venv/bin/python main.py`。

### 4. 调整配置

- 编辑 `backend/config.py`，把 `REPO_DIR` / `MAP_FILE` 改为服务器路径
  （如 `/opt/developer_hos` 与 `/opt/developer_hos/content-map.json`）。
- 编辑 `systemd/sync-panel.service` 中的 `SYNC_PANEL_PASSWORD`（务必修改默认值），
  填入 `FEISHU_WEBHOOK_URL`（可选）。

### 5. 安装 systemd 服务

```bash
sudo cp systemd/sync-panel.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now sync-panel
sudo systemctl status sync-panel
```

### 6. 配置 Nginx + HTTPS

```bash
sudo cp nginx/sync-panel.conf /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/sync-panel.conf /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# 签发证书（certbot 会自动改写配置，启用 443 并把 80 跳转到 HTTPS）
sudo certbot --nginx -d sync.developer.harmonyos.cool
```

### 7. DNS

将 `sync.developer.harmonyos.cool` A 记录指向 `43.153.184.64`。

## 定时同步说明

- `scheduler.py` 使用 `BackgroundScheduler`，每日 **03:00 (Asia/Shanghai)** 触发
  `sync_runner.run_sync()`。
- 同步完成后，若存在 `pending` 变更，调用 `notifier.notify_sync_complete()` 发飞书通知；
  无 pending 变更则静默跳过。
- 未配置 `FEISHU_WEBHOOK_URL` 时通知模块静默跳过，不影响同步。
- 调度器随 FastAPI lifespan 启动 / 关闭，无需额外进程。
