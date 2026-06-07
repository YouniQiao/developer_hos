---
title: "如何判断是否为主线程"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-68
format: md
---


通过Process获取当前的进程号和线程号。如果二者相同，表示当前执行环境为主线程。

**参考代码：**

```
import { process } from '@kit.ArkTS'

function isMainThread(): boolean {
  return process.pid == process.tid;
}
```

对于Native侧，通过getpid()方法获取进程ID，通过syscall方式获取线程ID。

**参考代码：**

```
#include <unistd.h>
#include <thread>
#include <sys/syscall.h>

bool isMainThread() {
  pid_t pid = getpid();
  pid_t tid = syscall(SYS_gettid);
  if (pid == tid) {
    return true;
  } else {
    return false;
  }
}
```
