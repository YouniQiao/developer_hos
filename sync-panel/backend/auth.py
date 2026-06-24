"""鉴权模块：密码校验、token 生成与 FastAPI 鉴权依赖。

策略：
  - 未登录可读（GET 请求不经过 require_auth）。
  - 写操作（POST / DELETE）通过 dependencies=[Depends(require_auth)] 强制鉴权。
密码来自环境变量 SYNC_PANEL_PASSWORD。
"""
import os
import secrets

from fastapi import Header, HTTPException

import models


def verify_password(password: str) -> bool:
    """比对传入密码与环境变量 SYNC_PANEL_PASSWORD（常量时间比较）。"""
    expected = os.environ.get("SYNC_PANEL_PASSWORD", "")
    if not expected:
        return False
    return secrets.compare_digest(password, expected)


def create_token(label: str = "web") -> str:
    """生成随机 token 并存入 auth_tokens 表，返回 token 字符串。"""
    token = secrets.token_urlsafe(32)
    models.add_token(token, label=label)
    return token


def require_auth(authorization: str = Header(default="")):
    """FastAPI 依赖：校验 Authorization: Bearer <token>。

    也接受裸 token（无 Bearer 前缀）。校验失败返回 401。
    校验通过返回 token 字符串。
    """
    if not authorization:
        raise HTTPException(status_code=401, detail="未提供认证令牌")
    parts = authorization.split()
    if len(parts) == 2 and parts[0].lower() == "bearer":
        token = parts[1]
    else:
        token = authorization.strip()
    if not token or not models.get_token(token):
        raise HTTPException(status_code=401, detail="认证令牌无效或已过期")
    return token
