<!-- omit in toc -->
# Rime·徐码·2022新版·二重注解·增广常用字符集·forFudan定制

forFudan <https://zhuyuhao.com/xuma>

2022年3月31日 初版

2022年11月8日 更新

[繁体版本请移步至此处。](/readme_trad.md)

- [1. 介绍](#1-介绍)
  - [1.1. 徐码·尔雅输入法·2022年新版](#11-徐码尔雅输入法2022年新版)
  - [1.2. 简明教程](#12-简明教程)
  - [1.3. RIME平台](#13-rime平台)
  - [1.4. 本方案](#14-本方案)
  - [1.5. 繁体版本](#15-繁体版本)
  - [1.6. 其他方案](#16-其他方案)
- [2. 使用](#2-使用)
  - [2.1. Windows / Macos / 安卓安装方法](#21-windows--macos--安卓安装方法)
  - [2.2. iOS 安装方法](#22-ios-安装方法)
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
- [4. 手感优化方案·更少的Z和X（征求意见稿）](#4-手感优化方案更少的z和x征求意见稿)
  - [4.1. 更新日志](#41-更新日志)
  - [4.2. 动机](#42-动机)
  - [4.3. 最终按鍵頻率](#43-最终按鍵頻率)
    - [4.3.1. 简体文本](#431-简体文本)
    - [4.3.2. 繁体文本](#432-繁体文本)
  - [4.4. 改动](#44-改动)
  - [4.5. 重码](#45-重码)
  - [4.6. 方案名](#46-方案名)
  - [4.7. 字根圖](#47-字根圖)

## 1. 介绍

### 1.1. 徐码·尔雅输入法·2022年新版

徐码·尔雅输入法是由徐国银先生发明的一种优秀的形码输入法方案，特点为双编码。优点包括：繁简通打、支持CJK大字集、低重码、全码简码一致、字词编码一致等。

本方案为2022年新版。QQ群: 761401688

### 1.2. 简明教程

[点击此处阅读我所写的《徐码繁简通打输入法·尔雅输入法·2022版·简明教程》来了解和学习徐码。](tutorial_simp.md)

[點擊此處閱讀我所寫的《徐碼繁簡通打輸入法·爾雅輸入法·2022版·簡明教程》來瞭解和學習徐碼。](tutorial.md)

### 1.3. RIME平台

徐码的使用可依托第三方输入法平台，其中RIME的开源性、定制化，使其成为了挂载平台的首选之一。

可在官网下载安装：<https://rime.im/>

### 1.4. 本方案

本方案使用了徐码最新的字根和规则，根据官方码表（2022年4月11日版），进行部分调整，具有以下特点：

- 提供86965个汉字的完整拆分（二重注解）。
- 调整了部分一级简码和二级简码（简体）。
- 二级简码快速标点符号输入。
- 增加了词库，包括成语和古诗词。
- 使用了自定义字符集，约一万字，包括GB2312汉字、國語常用字、其它常用汉字等。支持用户自定义修改。
- 四叶草拼音反查（反查引导符为 `），地址：<https://github.com/fkxxyz/rime-cloverpinyin>
- 提供全码词语屏蔽的同时保留简码词。
- 全码后置。

![詞語拆分](/resources/詞語拆分.png)

### 1.5. 繁体版本

[本方案也提供繁体版本的定制。繁体版本部分特点请移步至此处。](/readme_trad.md)

### 1.6. 其他方案

[局外人徐码三重注解方案](https://github.com/Ace-Who/rime-xuma)，此方案基于上一版本的徐码（更新至2021年）深度定制。

## 2. 使用

### 2.1. Windows / Macos / 安卓安装方法

在安装了 Rime（小狼毫、鼠须管、同文）后，将 [/schema](https://github.com/forFudan/xuma/tree/main/schema) 文件夹下的所有文件复制到 Rime 目录下。同时在 default.custom.yaml 文件中加入以下内容：

```
patch:
  schema_list:
    - schema: xuma2022forfudan
    - schema: xuma2022forfudan_ergo
```

点击「部署」之后即可使用。

### 2.2. iOS 安装方法

[点击此文档查看。](/iOS_installation.md)

### 2.3. 具体文件介绍

文件介绍：

- xuma2022forfudan.schema.yaml 方案文件
- xuma2022forfudan.dict.yaml 字典文件
- rime.lua 脚本设定
- lua/forfudan_freq_filter.lua 字符集过滤脚本。可在第38行添加自定字符。
- opencc/... 單字拆分表
- build/clover... 已编译好的四叶草拼音文件。或者自行安装。<https://github.com/fkxxyz/rime-cloverpinyin>

## 3. 方案特点

### 3.1. 单字拆分二重注解

本方案提供86965个汉字的拆分，囊括了GBK中所有字符。

拆分提示中包括二重注解：

1. 该汉字的完整拆分。
2. 该汉字的全码。使用大小写字母区分大小码，便于初学者分辨主、副根字。

![拆分](/resources/拆分.png)

### 3.2. 单字简码调整

本方案根据汉字的字频，调整了一级、二级、三级单字简码。

其中，一级简码调整如下（共8个）：

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
| i  | 极  | 李  | 寸  | 权  | 巧  | 丰  | 工  | 模  | 林  | 杜  | 查  | 來   | 末  | 想  | 整  | 才  | 机  | 板  | 三  | 松  | 检  | 木  | 未  | 样  | 校  | 过  |
| j  | 去  | 教  | 車  | 起  | 考  | 夫  | 古  | 趣  | 寺  | 封  | 都  | 赴   | 规  | 趟  | 尤  | 故  | 犬  | 志  | 胡  | 赵  | 士  | 土  | 下  | 增  | 雨  | 走  |
| k  | 累  | 邮  | 男  | 电  | 里  | 晓  | 题  | 最  | 时  | 甲  | 旧  | 显   | 曼  | 冒  | 禺  | 师  | 晚  | 思  | 明  | 田  | 曰  | 日  | 晏  | 畔  | 由  | 早  |
| l  | 蚂  | 卜  | 叔  | 紧  | 歧  | 非  | 遽  | 蝶  | 虹  | 虾  | 桌  | 卡   | 贞  | 步  | 点  | 临  | 虎  | 虑  | 肯  | 螅  | 龄  | 些  | 蛇  | 业  | 虔  | 止  |
| m  | 幽  | 贝  | 遝  | 岂  | 置  | 贼  | 同  | 黑  | 财  | 巾  | 赐  | 则   | 皿  | 峭  | 帜  | 败  | 罗  | 贩  | 购  | 刚  | 内  | 山  | 崇  | 赠  | 赔  | 罚  |
| n  | 县  | 眼  | 助  | 眠  | 国  | 因  | 骨  | 瞒  | 团  | 見  | 髃  | 眦   | 門  | 瞿  | 回  | 眨  | 且  | 睡  | 削  | 具  | 囚  | 目  | 瞎  | 圈  | 骸  | 闊  |
| o  | 吗  | 跟  | 别  | 吧  | 号  | 呀  | 吴  | 哎  | 味  | 器  | 忠  | 虽   | 员  | 嗯  | 品  | 吃  | 吹  | 听  | 跑  | 只  | 响  | 口  | 踪  | 蹲  | 咬  | 嗨  |
| p  | 么  | 银  | 长  | 第  | 镇  | 年  | 钱  | 错  | 矢  | 等  | 复  | 怎   | 制  | 牛  | 知  | 铁  | 气  | 笑  | 生  | 符  | 答  | 先  | 管  | 乎  | 镜  | 简  |
| q  | 凡  | 争  | 尔  | 色  | 写  | 風  | 危  | 饵  | 朵  | 几  | 鲁  | 外   | 负  | 馉  | 名  | 饰  | 欠  | 农  | 解  | 风  | 馀  | 魚  | 久  | 夕  | 鱼  | 鳊  |
| r  | 私  | 廷  | 委  | 反  | 质  | 秬  | 后  | 垂  | 杂  | 九  | 香  | 利   | 毛  | 看  | 种  | 必  | 千  | 所  | 手  | 乔  | 穆  | 禾  | 丸  | 心  | 夭  | 爪  |
| s  | 服  | 很  | 胁  | 包  | 德  | 祭  | 须  | 腊  | 膝  | 周  | 得  | 徙   | 微  | 鸟  | 够  | 胜  | 股  | 循  | 忽  | 匈  | 脸  | 月  | 乌  | 行  | 用  | 衍  |
| t  | 公  | 鼻  | 川  | 分  | 何  | 代  | 使  | 希  | 体  | 做  | 但  | 仆   | 仙  | 俱  | 保  | 片  | 你  | 任  | 身  | 父  | 八  | 化  | 住  | 伙  | 位  | 自  |
| u  | 泉  | 白  | 惯  | 怪  | 会  | 舆  | 鬼  | 惜  | 毁  | 臼  | 个  | 企   | 帛  | 鳥  | 向  | 性  | 懈  | 卑  | 鼠  | 介  | 人  | 仑  | 今  | 奥  | 惊  | 追  |
| v  | 迎  | 比  | 务  | 貂  | 毕  | 昏  | 印  | 猎  | 条  | 犹  | 备  | 处   | 爵  | 猾  | 各  | 疑  | 爱  | 入  | 食  | 猴  | 皆  | 金  | 留  | 逃  | 狡  | 冬  |
| w  | 永  | 字  | 安  | 被  | 主  | 穿  | 广  | 度  | 空  | 社  | 神  | 鹿   | 麻  | 祖  | 宫  | 疾  | 疯  | 究  | 察  | 义  | 容  | 它  | 廊  | 穴  | 衣  | 实  |
| x  | 冰  | 决  | 数  | 弟  | 精  | 关  | 烦  | 并  | 差  | 美  | 单  | 普   | 米  | 着  | 总  | 炸  | 次  | 遂  | 前  | 准  | 冷  | 火  | 為  | 善  | 羊  | 料  |
| y  | 离  | 孪  | 望  | 变  | 靖  | 奕  | 斋  | 亥  | 新  | 童  | 章  | 立   | 市  | 音  | 就  | 产  | 亢  | 意  | 韵  | 六  | 方  | 言  | 文  | 辛  | 識  | 迹  |
| z  | 治  | 词  | 为  | 记  | 计  | 头  | 兴  | 户  | 江  | 法  | 间  | 让   | 门  | 消  | 问  | 海  | 学  | 话  | 调  | 谁  | 论  | 洛  | 议  | 说  | 该  | 之  |

### 3.4. 词语简码调整

本方案根据词语的词频，调整了一级、二级词语简码。

值得注意的是，在官方码表中，二简二选词语取两个字首码。这导致词语全码简码不一致。在本方案中，统一调整取消这种取码方式。

关于简码词的设置有一些原则：

- 词频越靠前，设置简词的可能性越高。
- 如果简词的第一个字在二简一选位，则优先放在二简。例：「毕竟」，因为「毕」是二简字，所以「毕竟」也设成二简而不是一简。
- 接上，如果简词的频率过高，仍然设在一简。例：「如果」，虽然「如」是二简字，但是「如果」的词频太高，所以放在了一简位上。

一简码位都有二选简词和三选简词。一码简词全码后置。

二简码位不一定有两个简词。如果一个词没有重码，那么将它设在二简位只省了一个按键，还会增加记忆负担，故而二简词只在以下情况下会设置：

1. 一个词的词频非常高，故而提供简码位。
2. 一个词存在重码，设置简码以避免选重。
3. 一个词的全码输入时不符合人体工学。如：「前往」的全码 `xssw` 全部使用左手无名指。

简词二选会后置全码，用以避重。

三选则不会后置全码，这样做是为了减少记忆负担。因此，如果词A频率更高，但没有重码，词B频率更低，但有重码，会将词A设置在二简三选位，全简都可出词。

部分二简三选位安排了部分大中城市和国家名,可通过 Tab 键上屏。例如：

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
- 《》，书名号，mm
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
- 台湾的「国语常用字」
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

一键屏蔽全码词语，同时保留简码词。热键为「Shift+Ctrl+D」。

## 4. 手感优化方案·更少的Z和X（征求意见稿）

**注意，本方案正在测试中，并经常收集意见，可能有大量更新！**

### 4.1. 更新日志

2022年12月8日：更新「而」「且」「厂」三字根码位分别为`Gj`、`Ne`、`Gh`，增加舒适度。

### 4.2. 动机

徐码中，不少常用字根分布在 Z 键和 X 键 上，导致此两键的频率畸重，这个情况在打简体时尤甚，对左手的小指造成了很大的负担。因此，我对徐码的方案进行了调整，以达到以下目的。

- 大量减少 Z 键和 X 键的使用频率，解放左手小指。
- 在 GB2312 和 GBK 字集中，降低静态重码和动态重码(字频加权)。
- 改动字根时不过分影响记忆。小码尽量使用拼音中的字母帮助记忆(若无法达到,使用中间的`hjks`四键，因爲這四鍵頻率不高)。非音托用粗体显示。一般的，借用`k`代替`ch`和`k`入聲尾，借用`j`代替`i`，借用`s`代替`z`或`x`。
- 尽量让大小码分布在左右手上，增加双手互击。
- 尽量选择中间一排的按键。

### 4.3. 最终按鍵頻率

以下为本改动方案的最终按键频率。

#### 4.3.1. 简体文本

单字全码派，字母按键频率按照从多到少排序为:
`uviwgsobkjleftdcmpyharqnxz`
左手小指频率为：2.44% + 2.21% + 1.11% = 5.76%。

字词全码派，字母按键频率按照从多到少排序为:
`wugibfslktojevpycdxhrqanmz`
左手小指频率为：2.35% + 2.29% + 1.59% = 6.23%。

#### 4.3.2. 繁体文本

单字全码派，字母按键频率按照从多到少排序为:
`uvigsjwolbkytefhdmpanrcqxz`
左手小指频率为：2.95% + 2.18% + 0.78% = 5.91%。

字词全码派，字母按键频率按照从多到少排序为:
`ugsjwliotbyvfkenphadrmxcqz`
左手小指频率为：2.85% + 1.96% + 1.11% = 5.92%。

### 4.4. 改动

首先，将Z键上的副根全部移走。X键上只留下「米」「羊」「冫」三根（我实在移不走了），改动的有：

- **「辶」由`Zd`改为`Wk`。解放小拇指。「辶」音`chuo`，借用`k`代替`ch`。**
- 「讠」由`Zy`改为`Wn`。解放小拇指。
- 「之」由`Zz`改为`Wh`。解放小拇指。
- 「户」由`Zh`改为`Wf`。解放小拇指。
- 「门」由`Zm`改为`Wm`。解放小拇指。
- 「灬」和「四点」由`Xh`改为`Sh`。解放无名指。
- 「為」由`Xw`改为`Ww`。解放无名指。

其次，將小码爲x和z的字根全部進行調整，解放小拇指的有：

- **「子」由`Bz`改为`Bj`。解放小拇指，选取字母`j`可以分散双手。**
- **「走」由`Jz`改为`Js`。解放小拇指，选取字母`s`可以分散双手。**
- 「自」由`Tz`改为`Ti`。解放小拇指。
- 「乂」由`Ti`改为`Ty`。把碼位讓給「自」。
- 「長」由`Ez`改为`Eh`。解放小拇指，选取字母`h`可以分散双手。
- 「至」由`Fz`改为`Fh`。解放小拇指，选取字母`h`可以分散双手。
- 「早」由`Kz`改为`Ka`。解放小拇指。
- 「止」由`Lz`改为`Li`。解放小拇指。
- 「𧾷」由`Oz`改为`Ol`。同「足」字的全码一致。解放小拇指。
- 「爪」由`Rz`改为`Ra`。解放小拇指。
- 「豸」由`Vz`改为`Vc`。解放小拇指。

解放無名指的有：

- **「麻」由`Wx`改为`Wo`。让出码位给「门」。**
- **「夕」由`Qx`改为`Qk`。解放无名指，选取字母`k`可以分散双手。**
- **「辛」由`Yx`改为`Ys`。解放无名指，可以分散双手。**
- 「小」由`Cx`改为`Ci`。解放无名指，`i`在拼音中。
- 「西」由`Ex`改为`Ei`。解放无名指，`i`在拼音中。
- 「穴」由`Wx`改为`We`。解放无名指。
- 「心」由`Rx`改为`Ri`。解放无名指，可以分散双手。
- 「行」由`Sx`改为`Si`。解放无名指，可以分散双手。

爲了降低重碼，提升手感，還有以下改動：

- **「刀」由`Dd`改为`Dh`。降重，选取字母`h`可以分散双手。**
- **「习」由`Ci`改为`Cs`。把`Ci`让给高频字「小」。**
- **「礻」由`Ws`改为`Wj`。降重。**
- **「而」由`Ge`改为`Gj`。降重，选取字母`j`可以分散双手。**
- 「且」由`Nq`改为`Ne`，提升手感。
- 「水」由`As`改为`Ah`。提升手感，`h`在拼音中，可以分散双手。
<!-- - 「三」由`Is`改为`Ia`。降重。 -->
- 「刂」由`Ld`改为`La`。降重。
- 「酉」由`Ey`改为`Eo`。提升手感，降重。
- 「面」由`Gm`改为`Ga`。降重。
- 「耳」由`He`改为`Hr`。降重。
- 「丌」由`Hj`改为`Hi`。降重。
- 「〇」由`Ol`改为`Oo`。它就是个圈。
- 「白」由`Ub`改为`Ui`。降重。
- 「鼠」由`Us`改为`Uh`。降重。
- 「厂」由`Gc`改为`Gh`。「厂」音原为`han`，降重且分散双手。

其他的调整有：

- 增加「微」字头（即`彳山攵`），码位为`Su`。因为`SMPr`的重码太多。
- 恢復「春」字头（即`𡗗`），码位为`Fu`。因为新徐码对于「𡗗」的拆分违反了取大原则，拆作了`一夫`，却应当拆作`三人`（同两根，同不变形，同交，同全合笔顺，`三人`取大优先）。但是若拆成`三人`，不仅手感不好，且增加重码。设置字根「春」字头（即`𡗗`）于`Fu`码位可以降重。
- 增加「兑」字根（即`丷口儿`），码位为`Yd`。因为「说」是高频字，第二码是X，更改后提升手感，且能降低重码。

### 4.5. 重码

改动后，静态重码率如下：

GB2312重碼：320 -> 298
常用8000繁簡重碼：367 -> 350
GBK重碼：2883 -> 2838
全字集**大約**重碼：43017 -> 42129

动态重码率（字频加权）：

GB2312动态重码率：0.06%。即只打全码的情况下，每万字选重一次。

### 4.6. 方案名

本方案同原版方案并列安装，名为`xuma2022forfudan_ergo`。

### 4.7. 字根圖

本方案字根图待制作。

<!-- ![徐碼字根鍵位圖ForFudan調整](/resources/徐碼字根鍵位圖ForFudan調整.jpg) -->
