---
title: "算法介绍"
displayed_sidebar: contentDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/content/algorithm-introduction-0000001270645741
---

# 算法介绍

<strong>sha256</strong> <strong>生成文件签名JAVA实现：</strong>

```
private static final char[] HEX_DIGITS ={'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'};

/**
 * 计算sha256
 *
 * @param bytes 二进制数组
 * @return String
 */
public static String digest(byte[] bytes) throws NoSuchAlgorithmException {
    MessageDigest messagedigest = MessageDigest.getInstance("SHA-256");
    messagedigest.update(bytes);
    return bufferToHex(messagedigest.digest());
}

/**
 * 计算二进制数据
 *
 * @param bytes 二进制数组
 * @return String
 */
private static String bufferToHex(byte[] bytes) {
    return bufferToHex(bytes, 0, bytes.length);
}

/**
 * 计算二进制数据
 *
 * @param bytes 二进制数组
 * @param m 长度1
 * @param n 长度2
 * @return hex值
 */
private static String bufferToHex(byte[] bytes, int m, int n) {
    StringBuffer stringBuffer = new StringBuffer(2 * n);
    int k = m + n;
    for (int l = m; l < k; l++) {
        appendHexPair(bytes[l], stringBuffer);
    }
    return stringBuffer.toString();
}

/**
 * 字符缓冲处理
 *
 * @param bt 字符
 * @param stringBuffer 字符串缓冲区
 */
private static void appendHexPair(byte bt, StringBuffer stringBuffer) {
    char c0 = HEX_DIGITS[(bt & 0xf0) >> 4];
    char c1 = HEX_DIGITS[bt & 0xf];
    stringBuffer.append(c0);
    stringBuffer.append(c1);
}
```

<strong>sha256</strong> <strong>生成文件签名Python实现：</strong>

```
import sys
import hashlib

def sha256file(fpath, batch_size):
  with open(fpath, 'rb') as f:
    hash = hashlib.sha256()
    offset = 0
    for chunk in iter(lambda: f.read(batch_size), b''):
      if chunk != '':
        chunk_digest=sha256chunk(chunk)
        print 'offset:', offset, 'sha256:', chunk_digest
        offset += len(chunk)
      hash.update(chunk)
    return hash.hexdigest()

def sha256chunk(buf):
  hash = hashlib.sha256()
  hash.update(buf)
  return hash.hexdigest()

if __name__ == '__main__':
  if len(sys.argv) >= 2:
    digest = sha256file(sys.argv[1], 10*1024*1024)
    print 'file sha256:', digest
```