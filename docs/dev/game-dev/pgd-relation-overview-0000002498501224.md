---
title: "Relation概述"
original_url: /docs/dev/game-dev/pgd-relation-overview-0000002498501224
format: md
---


Relation是用于表示实体与目标的关系，在PGD中可通过该模块自定义关系。

方便后续说明，引入A -R-&gt; B（V）为表示一个关系对，说明A与B之间存在某种关系R，关系对中存在值V，其中V可以为空。

关系支持如下特性：

* 一种关系可关联多个目标，例如A -R1-&gt; B（V），A -R1-&gt; C（V），A -R1-&gt; D（V），B，C和D表示三个目标。
* A与B之间可存在多种关系，例如A -R1-&gt; B（V），A -R2-&gt; B（V），A -R3-&gt; B（V），R1，R2和R3表示三种关系。
* 相同关系和相同目标多个添加会被覆盖，例如A -R-&gt; B（V1），A -R-&gt; B（V2），关系中值V1被V2覆盖。

![](./img/afd940f6.png)

使用关系功能一定程度上对性能存在影响，建议谨慎使用。
