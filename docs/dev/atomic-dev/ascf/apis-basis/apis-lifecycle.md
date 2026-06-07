---
title: "生命周期"
original_url: /docs/dev/atomic-dev/ascf/apis-basis/apis-lifecycle
format: md
---


## has.getLaunchOptionsSync

has.getLaunchOptionsSync(): Object

иҺ·еҸ–е…ғжңҚеҠЎеҗҜеҠЁж—¶зҡ„еҸӮж•°гҖӮдёҺ[Appе®ҡд№үзҡ„еӣһи°ғеҸӮж•°](/docs/dev/atomic-dev/ascf/logical-layer/logical-layer-app)дёҖиҮҙгҖӮ

**иө·е§ӢзүҲжң¬пјҡ** 1.0.0

**иҝ”еӣһеҖјпјҡ**

иҝ”еӣһObjectеҜ№иұЎпјҢеҢ…жӢ¬д»ҘдёӢеӯ—ж®өгҖӮ

| еҸӮж•° | зұ»еһӢ | жҸҸиҝ° |
| --- | --- | --- |
| path | string | еҗҜеҠЁе…ғжңҚеҠЎйЎөйқўзҡ„и·Ҝеҫ„гҖӮ |
| scene | string | еңәжҷҜеҖјгҖӮ |
| query | Object | еҗҜеҠЁе…ғжңҚеҠЎйЎөйқўзҡ„еҸӮж•°гҖӮ |
| referrerInfo | Object | жқҘжәҗдҝЎжҒҜгҖӮ |

**referrerInfoиҜҙжҳҺпјҡ**

| еҸӮж•° | зұ»еһӢ | жҸҸиҝ° |
| --- | --- | --- |
| packageName | string | жқҘжәҗеә”з”ЁжҲ–е…ғжңҚеҠЎзҡ„еҢ…еҗҚгҖӮ |
| extraData | Object | жқҘжәҗеә”з”ЁжҲ–е…ғжңҚеҠЎдј иҝҮжқҘзҡ„еҸӮж•°гҖӮ |

**зӨәдҫӢпјҡ**

```
const launchOptions = has.getLaunchOptionsSync();
console.info(launchOptions.path);
```

## has.getEnterOptionsSync

has.getEnterOptionsSync(): Object

иҺ·еҸ–е…ғжңҚеҠЎеҗҜеҠЁж—¶зҡ„еҸӮж•°гҖӮеҰӮжһңеҪ“еүҚжҳҜеҶ·еҗҜеҠЁпјҢеҲҷиҝ”еӣһеҖјдёҺ[App](/docs/dev/atomic-dev/ascf/logical-layer/logical-layer-app).onLaunchзҡ„еӣһи°ғеҸӮж•°дёҖиҮҙпјӣеҰӮжһңеҪ“еүҚжҳҜзғӯеҗҜеҠЁпјҢеҲҷиҝ”еӣһеҖјдёҺ[App](/docs/dev/atomic-dev/ascf/logical-layer/logical-layer-app).onShowдёҖиҮҙгҖӮ

**иө·е§ӢзүҲжң¬пјҡ** 1.0.4

**иҝ”еӣһеҖјпјҡ**

иҝ”еӣһObjectеҜ№иұЎпјҢеҢ…жӢ¬д»ҘдёӢеӯ—ж®өгҖӮ

| еҸӮж•° | зұ»еһӢ | жҸҸиҝ° |
| --- | --- | --- |
| path | string | еҗҜеҠЁе…ғжңҚеҠЎйЎөйқўзҡ„и·Ҝеҫ„гҖӮ |
| scene | string | еңәжҷҜеҖјгҖӮ |
| query | Object | еҗҜеҠЁе…ғжңҚеҠЎйЎөйқўзҡ„еҸӮж•°гҖӮ |
| referrerInfo | Object | жқҘжәҗдҝЎжҒҜгҖӮ |

**referrerInfoиҜҙжҳҺпјҡ**

| еҸӮж•° | зұ»еһӢ | жҸҸиҝ° |
| --- | --- | --- |
| packageName | string | жқҘжәҗеә”з”ЁжҲ–е…ғжңҚеҠЎзҡ„еҢ…еҗҚгҖӮ |
| extraData | Object | жқҘжәҗеә”з”ЁжҲ–е…ғжңҚеҠЎдј иҝҮжқҘзҡ„еҸӮж•°гҖӮ |

**зӨәдҫӢпјҡ**

```
const enterOptions = has.getEnterOptionsSync();
console.info(enterOptions.path);
```
