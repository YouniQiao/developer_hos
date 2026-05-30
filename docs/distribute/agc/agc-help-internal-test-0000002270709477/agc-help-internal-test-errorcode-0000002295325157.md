---
title: "错误码"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-internal-test-errorcode-0000002295325157
---

#### 下载错误码

| 错误码 | 描述 | 解决方案 |
| --- | --- | --- |
| 10000 | DeepLink格式错误 | 请检查DeepLink格式，确保符合如下规则：   * DeepLink正确格式为：store://enterprise/manifest?url= encodeURIComponent（描述文件下载URL） * 描述文件下载URL使用HTTPS协议。 * 描述文件下载URL以“.json5”结尾。 * 描述文件下载URL的域名与描述文件内deployDomain字段值一致。 错误示例：描述文件下载URL“https://hosta/xxx/xxx.json5”的域名为hosta，而deployDomain字段值为hostb 。  正确示例：描述文件下载URL“https://host/xxx/xxx.json5”的域名为host，而deployDomain字段值为host 。 |
| 10001 | 描述文件大小超限 | 请检查描述文件大小，确保不超过1MB。 |
| 10002 | 描述文件下载出错 | 描述文件下载URL网络不可达，请检查描述文件下载URL是否可被正常访问。  您可将描述文件下载URL复制至浏览器中进行下载验证。 |
| 10003 | 描述文件解析出错 | 请检查描述文件内容格式，确保为JSON格式，具体可参见上文[描述文件内容示例](https://developer.huawei.com/consumer/cn/doc/app/agc-help-internal-test-release-app-0000002260691994#ZH-CN_TOPIC_0000002260691994__li9224131214449)。 |
| 10004 | 描述文件存在空值字段 | 请检查描述文件内容，确保所有字段不为空。 |
| 10005 | bundleName字段值不符合规范 | 请检查bundleName字段值，确保符合如下规范：   * 必须为以点号（.）分隔的字符串，且至少包含三段，每段中仅允许使用英文字母、数字、下划线（\_），如“harmony\_11.huawei.com ”。 首段以英文字母开头，非首段以数字或英文字母开头，每一段以数字或者英文字母结尾，如“harmony99.huawei.11\_com”。  不允许多个点号（.）连续出现，如“harmony..huawei.com ”。 * 长度为7~128个字符，且不可包含敏感词，不能将保留字符作为独立段呈现。以保留字符harmony为例，包名不能为harmony.huawei.com、com.harmony.huawei、com.huawei.harmony。 保留字符包括如下：    + oh   + ohos   + harmony   + harmonyos   + openharmony   + system |
| 10006 | minAPIVersion和targetAPIVersion字段值不符合规则 | * 请确保字段值格式正确。可使用正则表达式自查：^\\d+\\.\\d+\\.\\d+\\(\\d+\\)$ 错误示例：     ```   "minAPIVersion": "5.0.0.12",   "targetAPIVersion": "5.0.0.12"   ```     正确示例：     ```   "minAPIVersion": "5.0.0(12)",   "targetAPIVersion": "5.0.0(12)"   ```  * 请检查设备SDK版本，确保设备SDK版本大于等于minAPIVersion的值。 |
| 10007 | bundleType字段值不符合规则 | 当前bundleType值固定为“app”（大小写敏感），请检查字段值拼写。 |
| 10008 | icons字段值不符合规则 | 请检查icons的URL，确保符合如下规则：  说明：  normal和large的URL规则相同。   * URL使用HTTPS协议。 * URL不带参数，且以png、webp、jpg、jpeg、gif、svg、bmp等后缀结尾。 * URL域名与deployDomain值一致。 说明：  deployDomain：应用、图标及描述文件的部署域名，需要与icons、packageUrl以及描述文件自身下载URL中的域名一致，且不可包含协议头或端口号，否则会导致下载失败。  错误示例：     ```   "deployDomain": "host",   "icons": {     "normal": "https://hostA/xxx",     "large": "https://hostA/xxx"   },	   ```     正确示例：     ```   "deployDomain": "host",   "icons": {     "normal": "https://host/xxx",     "large": "https://host/xxx"   },	   ``` |
| 10009 | modules字段值不符合规则 | 请检查modules字段值，确保符合如下规则：   * modules不为空，或数组长度不为0。 错误示例1：     ```   "modules": [],   ```     错误示例2：     ```   "modules":""   ```     正确示例：     ```   "modules": [     ````{       "name": "module",       "type": "entry",       "deviceTypes": [         "tablet",         "2in1",         "phone"      ],       "packageUrl": "https://host:port/uri",       "packageHash": "hash..."     }````   ],   ``` * 按设备类型过滤后，modules不为空，至少有一个可安装的module。例如，实际安装设备为手机，则必须至少有一个module的deviceType值包含phone。 * 按设备类型过滤后，modules下必须至少包含一个HAP包。例如，实际安装设备为手机，则deviceType值包含phone的modules中必须至少有一个是HAP包，不能全部是应用内HSP包。 |
| 10010 | deviceTypes字段值不符合规则 | 请检查deviceTypes与实际安装设备的类型是否匹配，确保deviceTypes的值包含实际安装设备的类型。  错误示例：  实际设备类型是手机，描述文件的deviceTypes配置为tablet和2in1  ``` "deviceTypes": [   "tablet",   "2in1", ], ```  正确示例：  实际设备类型是手机，描述文件的deviceTypes配置为tablet、2in1和phone  ``` "deviceTypes": [   "tablet",   "2in1",   "phone" ], ``` |
| 10011 | packageUrl字段值不符合规则 | 请检查packageUrl字段值，确保符合如下规则：   * packageUrl使用HTTPS协议。 * packageUrl不带参数，且以hap或hsp等后缀结尾。 错误示例：     ```   "packageUrl": "https://host/xxx/xxx/entry"   ```     正确示例：     ```   "packageUrl": "https://host/xxx/xxx/entry.hap"   ``` * packageUrl域名与deployDomain值一致。 错误示例：     ```   "deployDomain": "hostA",   "modules":[{     …     "packageUrl": "https://hostB/xxx",     …     }]   ```     正确示例：     ```   "deployDomain": "host",   "modules":[{     …     "packageUrl": "https://host/xxx",     …     }]   ``` |
| 10012 | modules中name字段不符合规则 | 请检查modules中各模块的name是否冲突，要求各模块名唯一。  错误示例：   ``` "modules": [   {      "name": "module",      ...    },    {      "name": "module",     ...    }  ], ```   正确示例：   ``` "modules": [   {      "name": "module1",      ...    },    {      "name": "module2",     ...    }  ], ``` |
| 10013 | 描述文件处理出错 | 系统错误，请稍后重试。 |
| 10014 | 描述文件验证出错 | 系统错误，请稍后重试。 |
| 10015 | 获取安装包信息出错 | packageUrl网络不可达，请检查packageUrl是否可被正常访问。  您可将packageUrl复制至浏览器中进行下载验证。 |
| 10016 | 安装包大小超限 | 请检查安装包大小，单个HAP/HSP限制大小4GB。 |
| 10017 | 安装包下载出错 | 若安装包较大，下载耗时较长，请保证下载过程中设备的网络正常。 |
| 10018 | 加载描述文件出错 | 系统错误，请稍后重试。 |
| 10019 | 描述文件验签失败 | * 请检查描述文件的签名密钥与安装包的签名密钥，确保二者保持一致。 * 请使用签名工具进行本地验证。 |
| 10020 | 安装包完整性校验失败 | * 请使用SHA256计算packageHash，并确保packageHash与对应安装包的Hash值一致。 * 若确认packageHash正确，可能是网络问题导致安装包下载不完整。请尝试重试。 |
| 10021 | 安装包证书校验失败 | * 请检查是否使用了正确的[发布证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-cert-0000002283336729)和[指定设备发布Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-internaltest-profile-0000002283260129)打包安装包。 * 请确保设备UDID在指定设备发布Profile指定的设备列表内。 |
| 10022 | 安装包解压出错 | * 请确保安装包为HAP或应用内HSP。 * 请检查设备是否有足够可用的存储空间。 |
| 10023 | 安装包内文件读取出错 | 请确保安装包为HAP或应用内HSP。 |
| 10024 | 安装包信息与描述文件信息不一致 | * 请检查描述文件的bundleName值与安装包module.json文件内bundleName值是否一致。 错误示例：    + 描述文件：      ```     "bundleName": "com.huawei.enterprise.demoA"     ```   + module.json：      ```     "bundleName": "com.huawei.enterprise.demoB"     ``` 正确示例：    + 描述文件：      ```     "bundleName": "com.huawei.enterprise.demo"     ```   + module.json：      ```     "bundleName": "com.huawei.enterprise.demo"     ```  * 请检查描述文件的versionCode值与安装包module.json文件内versionCode是否一致。 错误示例：    + 描述文件：      ```     "versionCode": 1000001,     ```   + module.json：      ```     "versionCode": 1000000,     ``` 正确示例：    + 描述文件：      ```     "versionCode": 1000000,     ```   + module.json：      ```     "versionCode": 1000000,     ```  * 请检查描述文件的minAPIVersion值与安装包module.json中minAPIVersion是否一致。 错误示例：    + 描述文件：      ```     "minAPIVersion": 5.0.0(12)     ```   + module.json：      ```     "minAPIVersion": 50000011     ``` 正确示例：    + 描述文件：      ```     "minAPIVersion": 5.0.0(12)     ```   + module.json：      ```     "minAPIVersion": 50000012     ``` |
| 10025 | 安装包校验出错 | 系统错误，请稍后重试。 |
| 10026 | 身份校验不通过 | 请确认设备的身份验证功能（设备华为账号、生物识别和密码 ）是否正常，以及使用者本人的合法性，确认无误后再重试。 |
| 10027 | 任务状态不一致 | 已有任务在下载中，触发相同包名的下载任务，但新任务的描述文件与正在进行中的任务不一致，需要等待正在进行中的任务完成。 |
| 99999 | 系统未知错误 | 请稍后重试。 |
| 17700018 | 安装失败，依赖的模块不存在 | 在应用描述文件中配置应用安装所需的所有依赖模块。 |
| 17700048 | 代码签名校验失败 | * 请检查代码签名文件对应的module是否包含在安装包路径之中。 * 请检查提供的代码签名文件的路径是否合法。 * 请使用和安装包匹配的代码签名文件。 |
| 17700054 | 权限校验失败导致应用安装失败 | * 请排查是否申请了MDM类型的权限，MDM类型的权限仅针对应用类型为MDM的应用开放。 * 请排查申请的权限是否为开放权限。 |
| 17700015 | 多个HAP配置信息不同导致应用安装失败 | * 请确认多个HAP中配置文件app下面的字段是否一致，或者检查工程的signingConfigs配置是否一致。 * 请确认已安装版本和待安装版本HAP配置信息是否一致，如不一致请升级版本号。 |

#### 安装错误码

请参见：`https://gitee.com/openharmony/docs/blob/master/zh-cn/application-dev/reference/apis-ability-kit/errorcode-bundle.md`
