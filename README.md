<!-- omit in toc -->
# Rime·徐码·CJK汉字拆分·二重注解·自定义常用字集·附加forFudan人体工学调整版

forFudan <https://zhuyuhao.com/xuma>

- 2022年3月31日 初版
- 2022年11月8日 更新
- 2023年1月15日 更新

[繁体版本请移步至此处。](/readme_trad.md)

- [1. 介绍](#1-介绍)
  - [1.1. 徐码·尔雅输入法·2023年新版](#11-徐码尔雅输入法2023年新版)
  - [1.2. 徐码教程](#12-徐码教程)
  - [1.3. RIME平台](#13-rime平台)
  - [1.4. 本方案](#14-本方案)
- [2. 使用](#2-使用)
  - [2.1. Windows / Macos / 安卓安装方法](#21-windows--macos--安卓安装方法)
  - [2.3. 具体文件介绍](#23-具体文件介绍)
- [3. 方案特点](#3-方案特点)
  - [3.1. 单字拆分二重注解](#31-单字拆分二重注解)
  - [3.2. 单字简码调整](#32-单字简码调整)
  - [3.3. 二級簡碼矩陣](#33-二級簡碼矩陣)
  - [3.4. 词语简码调整](#34-词语简码调整)
  - [3.5. 标点符号二简快速输入](#35-标点符号二简快速输入)
  - [3.6. 增广常用字符集](#36-增广常用字符集)
  - [3.7. 一键切换字符集](#37-一键切换字符集)
  - [3.8. 使用 \` 键引导四叶草拼音输入和反查](#38-使用--键引导四叶草拼音输入和反查)
  - [3.9. 全码后置](#39-全码后置)
  - [3.10. 全码词语屏蔽](#310-全码词语屏蔽)
- [4. 非官方·手感优化方案·更少的Z和X·拆分提示](#4-非官方手感优化方案更少的z和x拆分提示)
  - [4.1. 动机和算法](#41-动机和算法)
  - [4.2. 重码數據](#42-重码數據)
  - [4.3. 手感數據](#43-手感數據)
    - [4.3.1. 简体文本调整版数据](#431-简体文本调整版数据)
    - [4.3.2. 简体文本原码表数据](#432-简体文本原码表数据)
    - [4.3.3. 繁体文本调整版数据](#433-繁体文本调整版数据)
  - [4.4. 改动](#44-改动)
  - [4.5. 方案名](#45-方案名)
  - [4.6. 字根圖](#46-字根圖)
  - [4.7. 更新日志](#47-更新日志)

## 1. 介绍

### 1.1. 徐码·尔雅输入法·2023年新版

徐码·尔雅输入法是由徐国银先生发明的一种优秀的形码输入法方案，特点为双编码。优点包括：繁简通打、支持CJK大字集、低重码、全码简码一致、字词编码一致等。

本方案为2023年1月15日新版。官方网站：<http://xumax.cn/> 官方QQ群: 761401688

这里对比一下五笔、郑码、徐码、仓颉在不同汉字字符集下的单字全码的重码数量。更多比较见此页面 <https://zhuyuhao.com/chinese-input-schemes-statistics/>。

其中：

- GB2312 是大陆的简体字集，共有简体汉字 6764 个。
- 「通规」是指《通用规范汉字表》中的 8105 个简体汉字。
- 「国字」是指《常用国字标准字体表》和《次常用国字标准字体表》中的 11151 个繁体汉字。
- BIG5 是台湾的繁体字集，共有繁体汉字 13069 个。
- GBK 是大陆的繁简字集，共有繁简汉字 21003 个。其中，「通规」是指《通用规范汉字表》中的8105个汉字。GB2312共有汉字6764个。Big是台湾的繁体字集，共13069个汉字。GBK共21003个汉字。
- **动态重码率**指的是用字频对重码字进行加权。
- **动态选重率**指的是用字频对重码字中除却首选的汉字进行加权。这里的假设是用户可以记住首选字，并默认将之上屏。因此只有在二选或三选时才需要选重。更能反映实际输入体验。

|形码方案|GB2312-简|通规-简|国字-繁|BIG5-繁|GBK-繁简通|通规动态重码率|通规动态选重率|
| --- | --- | --- | --- | --- | --- | --- |--- |
|郑码|563|843|1628|2206|6590|7.50%|0.59%|
|五笔86|537|787|1691|2236|6582|7.77%|0.34%|
|五笔98|515|763|1612|2150|6368|8.56%|0.37%|
|五筆06·新世紀|532|831|1806|2373|6610|7.90%|0.31%|
|徐码13|324|508|783|1089|2872|3.52%|0.10%|
|徐码22|320|495|809|1104|2899|3.49%|0.10%|
|徐码22·forFudan手感优化|300|476|809|1096|2858|2.98%|0.08%|
|仓颉五代（最长五码）|422|498|744|978|2893|12.07%|0.89%|

### 1.2. 徐码教程

[点击此处阅读我所写的《徐码输入法简明教程》（简体版）来了解和学习徐码。](tutorial_simp.md)

[點擊此處閱讀我所寫的《徐碼輸入法簡明教程》（繁體版）來瞭解和學習徐碼。](tutorial.md)

![字根图](/resources/徐码简化字字根图.jpg)

### 1.3. RIME平台

徐码的使用可依托第三方输入法平台，其中RIME的开源性、定制化，使其成为了挂载平台的首选之一。

可在官网下载安装：<https://rime.im/>

### 1.4. 本方案

本方案使用了徐码最新的字根和规则，根据官方码表（2022年4月11日版），进行部分调整，具有以下特点：

- 提供至CJK-H区汉字的完整拆分和编码提示。
- 为简化字调整了部分一级简码和二级简码。
- 二级简码快速标点符号输入。
- 扩充了繁简词库，包括成语和古诗词。
- 使用了自定义字符集，约一万字，包括GB2312汉字、國語常用字、其它常用汉字等。支持用户自定义修改。
- 四叶草拼音反查（反查引导符为 `），地址：<https://github.com/fkxxyz/rime-cloverpinyin>
- 提供四码只出单字功能，适合单字派。

![詞語拆分](/resources/詞語拆分.png)

## 2. 使用

### 2.1. Windows / Macos / 安卓安装方法

在安装了 Rime（小狼毫、鼠须管、同文）后，将 [/schema](https://github.com/forFudan/xuma/tree/main/schema) 文件夹下的所有文件复制到 Rime 目录下。同时在 default.custom.yaml 文件中加入以下内容：

```yaml
patch:
  schema_list:
    - schema: xuma2023forfudan
```

点击「部署」之后即可使用。

### 2.3. 具体文件介绍

文件介绍：

- xuma2023forfudan.schema.yaml 方案文件
- xuma2023forfudan.dict.yaml 字典文件
- rime.lua 脚本设定
- lua/forfudan_freq_filter.lua 字符集过滤脚本。可在第38行添加自定字符。
- opencc/... 單字拆分表
- build/clover... 已编译好的四叶草拼音文件。或者自行安装。<https://github.com/fkxxyz/rime-cloverpinyin>

## 3. 方案特点

### 3.1. 单字拆分二重注解

本方案提供至CJK-H区汉字的全字拆分。拆分提示中包括二重注解：

1. 该汉字的完整拆分（所有部件）。
2. 该汉字的全码。使用大小写字母区分大小码，便于初学者分辨主、副根字。

用户还可通过「Shift+Ctrl+C」切换拆分状态。

![拆分](/resources/拆分.png)

### 3.2. 单字简码调整

本方案根据简化字体系下的字频数据，调整了一级、二级、三级单字简码。其中，一级简码调整如下（共8个）：

- A「以」改为「能」。否则「能」字需要`asv`三码出字。
- C「发」改为「好」。因为「好」字频更高。且让出了二简位给同样高频的「她」字。
- D「那」改为「对」。否则高频「对」字需要`dico`四码出字。
- H「在」改为「有」。否则高频「有」字需要`hsv`三码出字。
- M「同」改为「见」。否则高频「见」字需要`mve`三码出字。
- N「国」改为「当」。否则高频「当」字需要`nbu`三码出字。
- S「得」改为「然」。
- Z「为」改为「没」。否则「没」字需要三码出字，且`zqs`会在左手小指，非常不便。

二级简码也作部分调整，比如：

- xq 码位由「将」改为「次」，否则需要`xqqs`四码出字。

特别的，部分字频不高的繁体字和传承字字根移到三选。这样可以腾出一个二简码位用于高频字。例如：

- 「艮0.00%」移到三选，同时将码位让给「司0.05%」
- 「巳0.00%」移到三选，同时将码位让给「通0.06%」
- 「殳0.00%」移到三选，同时将码位让给「解0.07%」
- 「冊0.00%」移到三选，同时将码位让给「内0.08%」
- 「韋0.00%」移到三选，同时将码位让给「尽0.04%」
- 「戊0.00%」移到三选，同时将码位让给「太0.10%」
- 「缶0.00%」移到三选，同时将码位让给「年0.18%」
- 「歹0.00%」移到三选，同时将码位让给「五0.06%」
- 「臣0.01%」移到三选，同时将码位让给「打0.15%」
- 「瓜0.01%」移到三选，同时将码位让给「后0.34%」
- 「虫0.01%」移到三选，同时将码位让给「些0.20%」
- 「申0.00%」移到三选，同时将码位让给「明0.15%」
- 「烏0.01%」移到三选，同时将码位让给「今0.07%」
- 「馬0.09%」移到三选，同时将码位让给「现0.22%」
- 「弋0.00%」移到三选，同时将码位让给「式0.03%」
- 「匕0.00%」移到三选，同时将码位让给「条0.05%」
- 「舟0.00%」移到三选，同时将码位让给「种0.14%」
- 「髟0.00%」移到三选，同时将码位让给「妻0.01%」

同时，我们为这些字根增加**替身码**，重复其小码即可实现输入。例如：

- 艮 `bgg`
- 巳 `dss`
- 殳 `qss`
- 冊 `muu`
- 韋 `dww`
- 戊 `fww`
- 缶 `pff`
- 歹 `gdd`
- 臣 `fee`
- 瓜 `rgg`
- 虫  `lvv`
- 申 `kss`
- 烏 `uww`
- 馬 `emm`
- 弋 `fii`
- 匕 `vii`
- 舟 `roo`
- 髟 `ebb`

特别的，所有字根都可以通过**替身码**实现输入。

### 3.3. 二級簡碼矩陣

本方案二級簡碼矩陣如下：

|    | a   | b   | c   | d   | e   | f   | g   | h   | i   | j   | k   | l    | m   | n   | o   | p   | q   | r   | s   | t   | u   | v   | w   | x   | y   | z   |
|:---|:----|:----|:----|:----|:----|:----|:----|:----|:----|:----|:----|:-----|:----|:----|:----|:----|:----|:----|:----|:----|:----|:----|:----|:----|:----|:----|
| a  | 出  | 幻  | 幼  | 盈  | 骠  | 参  | 卫  | 骤  | 厶  | 奘  | 骡  |     | 马  | 乃  | 台  | 收  | 驺  | 骄  | 水  | 驳  | 以  | 允  | 及  | 骥  | 幺  | 骗  |
| b  | 即  | 书  | 孙  | 陂  | 也  | 飛  | 司  | 随  | 乙  | 陵  | 阳  | 疏   | 矛  | 阻  | 亟  | 君  | 隐  | 孤  | 阴  | 飞  | 队  | 降  | 院  | 灵  | 予  | 子  |
| c  | 始  | 她  | 丝  | 经  | 续  | 练  | 线  | 媒  | 习  | 结  | 细  | 力   | 母  | 组  | 如  | 少  | 绝  | 妖  | 约  | 办  | 给  | 女  | 娘  | 小  | 羽  | 边  |
| d  | 屈  | 巴  | 劝  | 刀  | 那  | 民  | 弓  | 展  | 已  | 己  | 引  |      | 观  | 眉  | 又  | 皮  | 欢  | 尾  | 通  | 难  | 韐  | 尸  | 尽  | 弹  | 弦  | 違  |
| e  | 动  | 妻  | 无  | 丁  | 二  | 甫  | 干  | 弄  | 琳  | 瑚  | 理  | 刊   | 现  | 真  | 可  | 珠  | 索  | 表  | 青  | 进  | 十  | 王  | 玉  | 西  | 酉  | 長  |
| f  | 报  | 成  | 车  | 把  | 打  | 找  | 戈  | 拔  | 式  | 持  | 提  | 到   | 摆  | 挡  | 或  | 致  | 七  | 势  | 示  | 区  | 输  | 指  | 太  | 拦  | 牙  | 至  |
| g  | 求  | 不  | 厂  | 五  | 而  | 天  | 元  | 开  | 于  | 春  | 更  | 正   | 面  | 辰  | 否  | 殊  | 确  | 歼  | 豕  | 雁  | 原  | 石  | 兀  | 来  | 碎  | 还  |
| h  | 节  | 艺  | 甚  | 取  | 耳  | 藏  | 革  | 若  | 左  | 基  | 在  | 蓝   | 英  | 菌  | 右  | 董  | 其  | 斯  | 世  | 花  | 茶  | 获  | 瓦  | 联  | 荒  | 落  |
| i  | 极  | 李  | 寸  | 权  | 巧  | 丰  | 工  | 模  | 林  | 杜  | 查  | 來   | 末  | 想  | 整  | 才  | 机  | 板  | 三  | 松  | 春  | 木  | 未  | 样  | 校  | 过  |
| j  | 去  | 教  | 車  | 起  | 考  | 夫  | 古  | 趣  | 寺  | 封  | 都  | 赴   | 规  | 趟  | 尤  | 故  | 犬  | 志  | 胡  | 赵  | 士  | 土  | 下  | 增  | 雨  | 走  |
| k  | 累  | 邮  | 男  | 电  | 里  | 晓  | 题  | 最  | 时  | 甲  | 旧  | 显   | 曼  | 冒  | 禺  | 师  | 晚  | 思  | 明  | 田  | 曰  | 日  | 晏  | 畔  | 由  | 早  |
| l  | 蚂  | 卜  | 叔  | 紧  | 歧  | 非  | 遽  | 蝶  | 虹  | 虾  | 桌  | 卡   | 贞  | 步  | 点  | 临  | 虎  | 虑  | 肯  | 螅  | 龄  | 些  | 蛇  | 业  | 虔  | 止  |
| m  | 幽  | 贝  | 遝  | 岂  | 置  | 贼  | 同  | 黑  | 财  | 巾  | 赐  | 则   | 皿  | 峭  | 帜  | 败  | 罗  | 贩  | 购  | 刚  | 内  | 山  | 崇  | 赠  | 赔  | 罚  |
| n  | 县  | 眼  | 助  | 眠  | 国  | 因  | 骨  | 瞒  | 团  | 見  | 髃  | 眦   | 門  | 瞿  | 回  | 眨  | 且  | 睡  | 削  | 具  | 囚  | 目  | 瞎  | 圈  | 骸  | 闊  |
| o  | 吗  | 跟  | 别  | 吧  | 号  | 呀  | 吴  | 哎  | 味  | 器  | 忠  | 虽   | 员  | 嗯  | 品  | 吃  | 吹  | 听  | 跑  | 只  | 响  | 口  | 踪  | 蹲  | 咬  | 嗨  |
| p  | 么  | 银  | 长  | 第  | 镇  | 年  | 钱  | 错  | 矢  | 等  | 复  | 怎   | 制  | 牛  | 知  | 铁  | 气  | 笑  | 生  | 符  | 答  | 先  | 管  | 乎  | 镜  | 简  |
| q  | 凡  | 争  | 尔  | 色  | 写  | 風  | 危  | 饵  | 朵  | 几  | 鲁  | 外   | 负  | 馉  | 名  | 饰  | 欠  | 农  | 解  | 风  | 馀  | 魚  | 久  | 夕  | 鱼  | 鳊  |
| r  | 私  | 廷  | 委  | 反  | 质  | 秬  | 后  | 垂  | 杂  | 九  | 香  | 利   | 毛  | 看  | 种  | 必  | 千  | 所  | 手  | 乔  | 穆  | 禾  | 丸  | 心  | 夭  | 爪  |
| s  | 服  | 很  | 胁  | 包  | 德  | 祭  | 微  | 腊  | 膝  | 周  | 得  | 徙   | 岛  | 鸟  | 够  | 胜  | 股  | 循  | 忽  | 匈  | 脸  | 月  | 乌  | 行  | 用  | 衍  |
| t  | 公  | 鼻  | 川  | 分  | 何  | 代  | 使  | 希  | 体  | 做  | 但  | 仆   | 仙  | 俱  | 保  | 片  | 你  | 任  | 身  | 父  | 八  | 化  | 住  | 伙  | 位  | 自  |
| u  | 泉  | 白  | 惯  | 怪  | 会  | 舆  | 鬼  | 惜  | 毁  | 臼  | 个  | 企   | 帛  | 鳥  | 向  | 性  | 懈  | 卑  | 鼠  | 介  | 人  | 仑  | 今  | 奥  | 惊  | 追  |
| v  | 迎  | 比  | 务  | 貂  | 毕  | 昏  | 印  | 猎  | 条  | 犹  | 备  | 处   | 爵  | 猾  | 各  | 疑  | 爱  | 入  | 食  | 猴  | 皆  | 金  | 留  | 逃  | 狡  | 冬  |
| w  | 永  | 字  | 安  | 被  | 主  | 穿  | 广  | 度  | 空  | 社  | 神  | 鹿   | 麻  | 祖  | 宫  | 疾  | 疯  | 究  | 察  | 义  | 容  | 它  | 廊  | 穴  | 衣  | 实  |
| x  | 冰  | 决  | 数  | 弟  | 精  | 关  | 烦  | 并  | 差  | 美  | 单  | 普   | 米  | 着  | 总  | 炸  | 次  | 遂  | 前  | 准  | 冷  | 火  | 為  | 善  | 羊  | 料  |
| y  | 离  | 孪  | 望  | 变  | 靖  | 奕  | 斋  | 亥  | 新  | 童  | 章  | 立   | 市  | 音  | 就  | 产  | 亢  | 意  | 韵  | 六  | 方  | 言  | 文  | 辛  | 識  | 迹  |
| z  | 治  | 词  | 为  | 记  | 计  | 头  | 兴  | 户  | 江  | 法  | 间  | 让   | 门  | 消  | 问  | 海  | 学  | 话  | 调  | 谁  | 论  | 洛  | 议  | 说  | 该  | 之  |

### 3.4. 词语简码调整

本方案根据简化字体系下的词频，调整了一级、二级词语简码。

值得注意的是，在官方码表中，二简二选词语取两个字首码。这导致词语全码简码不一致。在本方案中，统一调整取消这种取码方式。

关于简码词的设置有一些原则：

- 词频越靠前，设置简词的可能性越高。
- 如果简词的第一个字在二简一选位，则优先放在二简。例：「毕竟」，因为「毕」是二简字，所以「毕竟」也设成二简而不是一简。
- 接上，如果简词的频率过高，仍然设在一简。例：「如果」，虽然「如」是二简字，但是「如果」的词频太高，所以放在了一简位上。

一简码位都有二选简词和三选简词。

二简码位不一定有两个简词。如果一个词没有重码，那么将它设在二简位只省了一个按键，还会增加记忆负担，故而二简词只在以下情况下会设置：

1. 一个词的词频非常高，故而提供简码位。
2. 一个词的全码输入时不符合人体工学。如：「前往」的全码 `xssw` 全部使用左手无名指。

部分二简三选位安排了部分大中城市和国家名。例如：

- ok 三选：中国
- xv 三选：北京
- ls 三选：上海
- gf 三选：天津

### 3.5. 标点符号二简快速输入

对于一些使用频率不高的二简码位，提供标点符号的快速输入，包括：

- 「」，单方引号，aj
- 『』，双方引号，ak
- “”，双圆引号，ah
- ‘’，单圆引号，ai
- 〔〕，六角引号，al
- ：，冒号，mm
- 《》，书名号，sm
- ！，感叹号，gg
- ？，问号，ww
- ——，破折号，pp
- ……，省略号，sl
- ×，隐讳符，yh
- □，缺字符，qz
- 々，叠字符，dz，也可以通过 qwu 输入。
- ·，间隔符，yy
- §，章节号，zj
- 、，顿号，nn
- ，，逗号，oo
- 。，句号，jj
- 全角空格，dl

![标点](/resources/标点.png)

### 3.6. 增广常用字符集

本方案使用了自定的常用字符，将常用字一网打尽，避免了 RIME 内置字符集「GB2312字太少，GBK字太多」的问题。包括了以下一万个左右的字符：

- GB2312 全部字符
- 台湾的「国字常用字」
- 注音符号
- 「〇」符号
- 「镕」等 GB2312 未收录的常用简化字
- 「喆裏墻粧嫺綫綉滙峯」等「国语常用字」未收录的常用繁体字
- 「咲雫乭」等常见日韩汉字
- 日语假名

![注音假名](/resources/注音假名.png)

### 3.7. 一键切换字符集

在输入过程中，用户可选择两种切换字集的方式：

- 通过「Shift+Ctrl+O」在常用字符集和CJK大字符集之间进行切换（过滤）。
- 通过「Shift+Ctrl+I」将常用字符集优先显示（优先）。

用户还可通过「Shift+Ctrl+F」进行简入繁出输入。

### 3.8. 使用 ` 键引导四叶草拼音输入和反查

按下 ` 键，可以随时使用四叶草拼音输入词语，并实现反查。四叶草拼音：<https://github.com/fkxxyz/rime-cloverpinyin>

![反查](/resources/反查.png)

### 3.9. 全码后置

对于已经设置简码的单字和词语，会后置它们的全码，将一选位让给其他字词。

### 3.10. 全码词语屏蔽

一键屏蔽四码词语，同时保留简码词。热键为「Shift+Ctrl+D」。适合保留简码词的全码单字派。

## 4. 非官方·手感优化方案·更少的Z和X·拆分提示

### 4.1. 动机和算法

徐码中，不少常用字根分布在 Z 键和 X 键 上，导致此两键的频率畸重，这个情况在打简体时尤甚，对左手的小指造成了很大的负担。因此，我对徐码的方案进行了调整，以达到以下目的:

- 大量减少 Z 键和 X 键的使用频率，解放左手小指。
- 在 GB2312 和 GBK 字集中，降低静态重码和动态重码(字频加权)。
- 改动字根时不过分影响记忆。小码尽量使用拼音中的字母帮助记忆(若无法达到,使用中间一行的`asdfghjkl`九键)。一般的，借用`k`代替`ch`和`k`入聲尾，借用`j`代替`i`，借用`s`代替`z`，借用`ks`代替`x`。
- 尽量让大小码分布在左右手上，增加双手互击。
- 尽量选择中间一排的按键。

本优化利用了程序，其算法为:

- 对每一个字根，确定其小码的候选列表，为其汉语拼音中的字母，加上中间一行字母，减去`z`和`x`，对于高频成字字根，还要减去同手的按键，增加互击。
- 对每一个字根，寻找静态重码最低的小码。
- 在GB2312字集内，不断随机选出字根，重复上述操作。
- 当重码降至不能再降以后，再次在GBK范围内进行遍历，且保证GB2312重码不增。
- 当重码降至不能再降以后，再次在GB2312范围内进行遍历，寻找动态重码率和手感提升的解。

### 4.2. 重码數據

改动后，静态重码率如下：

- GB2312重碼：320 降至 300
- 常用8000繁簡重碼：367 降至 341
- GBK重碼：2883 降至 2842
- 全字集**大約**（因爲我還有四千箇字没拆完）重碼：43019 降至 42173

动态重码率（当代汉语简体字字频加权）：

GB2312动态重码率：0.0499%。即只打**全码**，不打簡碼的情况下，每万字选重只有5次。

GB2312中，除卻不變的重碼字：

- 原徐碼獨有的重碼字爲：媾缅 缝终 酞裁 掭威 恶蕲 此柴 踊嗵 铺镖 铒钳 钤铂 急怨 馑饵 舱舶 徵微徽 仪俯 逾怔 裰初 剪前 漏记 诵涌 溻谒 溃闾 澹讽

- 新方案獨有的重碼字爲：袈迦 臂襞 辟避 拆逝 鸷热 裘逑 钛链 镶 锎锏 舔适 鹧庹 庶遮 鹑烹 注润

### 4.3. 手感數據

以下为本改动方案的最终按键频率。

注意到，原码表中，`z` 键的使用率竟排在前五（~5%）。调整版中，`z` 键使用率降至最末（~1%）。

#### 4.3.1. 简体文本调整版数据

单字全码派，字母按键频率按照从多到少排序为:
`uviwgskobjefltmdpacyhnqxrz`

左手: 54.94%
下排: 22.66%
中排: 36.03%
上排: 41.31%
左小: 5.95%
左無: 12.59%
左中: 10.20%
左食: 26.19%
右食: 23.13%
右中: 10.82%
右無: 8.18%
右小: 2.93%

字词全码派，字母按键频率按照从多到少排序为:
`wugbiksftlojvepycdxharqnmz`

左手: 57.69%
下排: 21.10%
中排: 36.86%
上排: 42.04%
左小: 6.32%
左無: 14.28%
左中: 10.05%
左食: 27.04%
右食: 20.21%
右中: 9.78%
右無: 8.84%
右小: 3.48%

#### 4.3.2. 简体文本原码表数据

单字全码派，字母按键频率按照从多到少排序为:
`uvgbzdosefitxwjklcymprqhan`

左手: 59.98%
下排: 28.62%
中排: 32.63%
上排: 38.76%
左小: 8.87%
左無: 11.68%
左中: 12.21%
左食: 27.23%
右食: 21.50%
右中: 7.25%
右無: 8.16%
右小: 3.10%

字词全码派，字母按键频率按照从多到少排序为:
`bguzftsovekjwxdlpycirqmhan`

左手: 61.66%
下排: 27.39%
中排: 34.63%
上排: 37.99%
左小: 9.87%
左無: 12.23%
左中: 10.93%
左食: 28.64%
右食: 19.75%
右中: 7.10%
右無: 7.95%
右小: 3.55%

#### 4.3.3. 繁体文本调整版数据

单字全码派，字母按键频率按照从多到少排序为:
`uvgisjowklbetfymdahpnqcxrz`

左手: 52.72%
下排: 22.05%
中排: 37.40%
上排: 40.55%
左小: 5.88%
左無: 12.22%
左中: 9.01%
左食: 25.61%
右食: 25.29%
右中: 9.91%
右無: 9.11%
右小: 2.97%

字词全码派，字母按键频率按照从多到少排序为:
`ugsjwliotbvkyfenphadxmrcqz`

左手: 53.51%
下排: 20.46%
中排: 38.63%
上排: 40.91%
左小: 5.87%
左無: 13.29%
左中: 8.52%
左食: 25.82%
右食: 24.48%
右中: 9.11%
右無: 9.68%
右小: 3.22%

### 4.4. 改动

首先，将Z键上的副根全部移走。X键上只留下「米」「羊」「冫」三根（我实在移不走了），改动的有7箇：

- **「辶」由`Zd`改为`Wk`。解放小拇指。「辶」音`chuo`，借用`k`代替`ch`。**
- 「讠」由`Zy`改为`Wn`。解放小拇指。
- 「之」由`Zz`改为`Wh`。解放小拇指。
- 「户」由`Zh`改为`Wf`。解放小拇指。
- 「门」由`Zm`改为`Wm`。解放小拇指。
- 「灬」和「四点」由`Xh`改为`Sh`。解放无名指。
- ***「為」由`Xw`改为`Ww`。解放无名指。***

其次，將小码爲x和z的字根全部進行調整，解放小拇指和無名指，同時對其他字根進行優化，負責降重和改善手感，以下按照字根大碼排序。加粗的表示没有音託，斜體表示繁體根：

<!-- - **「马」由`Am`改为`Al`。降重，把二簡位讓給现。** -->
1. 「水」由`As`改为`Ah`。提升手感，`h`在拼音中，可以分散双手。
1. **「子」由`Bz`改为`Bj`。解放小拇指，选取字母`j`可以分散双手。**
1. **「习」由`Ci`改为`Cs`。把`Ci`让给高频字「小」。**
1. 「小」由`Cx`改为`Ci`。解放无名指，`i`在拼音中。
1. **「刀」由`Dd`改为`Dh`。降重，选取字母`h`可以分散双手。**<!-- - ***「馬」由`Em`改为`El`。降重。*** -->
1. 「西」由`Ex`改为`Ei`。解放无名指，`i`在拼音中。
1. 「酉」由`Ey`改为`Eo`。提升手感，降重。
1. 「長」由`Ez`改为`Eh`。解放小拇指，选取字母`h`可以分散双手。
1. **「甫」由`Ef`改为`Ej`。降重，分散双手，減少「铺镖」重碼。**
1. **「戊」由`Fw`改为`Fj`。降重。**
1. 「至」由`Fz`改为`Fh`。解放小拇指，选取字母`h`可以分散双手。
1. 「厂」由`Gc`改为`Gh`。「厂」音原为`han`，降重且分散双手。<!-- - **「而」由`Ge`改为`Gj`。降重，选取字母`j`可以分散双手。** -->
1. 「面」由`Gm`改为`Ga`。降重。
1. 「耳」由`He`改为`Hr`。降重。
1. 「丌」由`Hj`改为`Hi`。降重。<!-- - **「寸」由`Ic`改为`Ia`。降重。**- **「三」由`Is`改为`Id`。降重。** --><!-- - **「尤」由`Jo`改为`Jd`。降重。** -->
1. **「走」由`Jz`改为`Js`。解放小拇指，选取字母`s`可以分散双手。**
1. 「早」由`Kz`改为`Ka`。解放小拇指。
1. 「刂」由`Ld`改为`La`。降重。
1. 「止」由`Lz`改为`Li`。解放小拇指。
1. 「黑」由`Mh`改为`Me`，提升手感，降重。
1. 「且」由`Nq`改为`Ne`，提升手感。
1. 「〇」由`Ol`改为`Oo`。它就是个圈。
1. **「𧾷」由`Oz`改为`Ol`。同「足」字的全码一致。解放小拇指。**
1. **「夕」由`Qx`改为`Qk`。解放无名指，选取字母`k`可以分散双手。**<!-- - **「鱼」由`Qy`改为`Qh`。** -->
1. 「爪」由`Rz`改为`Ra`。解放小拇指。
1. 「心」由`Rx`改为`Ri`。解放无名指，可以分散双手。<!-- - **「九」由`Rj`改为`Rh`。降重，把二簡讓給「近」。** -->
1. **「戶」由`Rh`改为`Rf`。**<!-- - **「瓜」由`Rg`改为`Rk`。** -->
1. **「彳」由`Sr`改为`Sm`。減少「徊徜膛」重碼**<!-- - **「乌」由`Sw`改为`Sl`。** -->
1. 「行」由`Sx`改为`Si`。解放无名指，可以分散双手。
1. 「自」由`Tz`改为`Ti`。解放小拇指。
1. 「乂」由`Ti`改为`Tk`。把碼位讓給「自」。
1. 「白」由`Ub`改为`Ui`。降重。<!-- - 「鼠」由`Us`改为`Uh`。降重。 --><!-- - **「烏」由`Uw`改为`Ul`。降重。** -->
1. 「豸」由`Vz`改为`Vc`。解放小拇指。
1. **「匕」由`Vi`改为`Vk`。降重。**<!-- - **「礻」由`Ws`改为`Wj`。降重。** -->
1. 「穴」由`Wx`改为`We`。解放无名指。
1. **「麻」由`Wx`改为`Wo`。让出码位给「门」。**
1. **「辛」由`Yx`改为`Ys`。解放无名指，可以分散双手。**
<!-- - **「立」由`Yl`改为`Yf`。降重，可以分散双手。**
- **「文」由`Yw`改为`Ys`。降重。** -->

其他的调整有：

- 增加「微」字头（即`彳山攵`），码位为`Su`。因为`SMPr`的重码太多。
- 恢復「春」字头（即`𡗗`），码位为`Fu`。因为新徐码对于「𡗗」的拆分违反了取大原则，拆作了`一夫`，却应当拆作`三人`（同两根，同不变形，同交，同全合笔顺，`三人`取大优先）。但是若拆成`三人`，不仅手感不好，且增加重码。设置字根「春」字头（即`𡗗`）于`Fu`码位可以降重。
- 增加「咼」字根，码位为`Nu`，同「冎」字根一致。原因是兩字基本不存在對立，還能顯著提高繁體輸入的手感，之前高頻的「過」「回」「問」前兩碼都是`NO`，設置簡碼不方便。

### 4.5. 方案名

本方案同原版方案并列安装，名为`xuma2022forfudan_ergo`。

### 4.6. 字根圖

本方案字根图如下（调整的字根放在最后）：

![徐碼字根鍵位圖ForFudan調整](/resources/徐碼字根鍵位圖ForFudan調整.jpg)

### 4.7. 更新日志

2022年12月16日

- 調整恢復部分字根碼位。使得同原徐碼的區别不會太大。
- GB2312 重碼定在320箇。
- 本方案以後不會再多更改。

2022年12月11日

- 調整「文」「甫」「⼻」字根碼位。
- 不改變大碼的情况下，重碼已經降到極致。以後只攷慮大碼的調整。

2022年12月10日

- 更新字根，大幅降低重碼。
- 提供拆分。
- 增加CJK-H區的漢字的編碼。

2022年12月8日：

- 更新「而」「且」「厂」三字根码位分别为`Gj`、`Ne`、`Gh`。
- 恢復「三」爲`Is`，删除「兑」字根。
