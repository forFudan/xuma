<!-- omit in toc -->
# 徐码iOS安装方法

## 准备工作

你需要在电脑上的 Rime 中成功部署输入法（目的是预先生成 bin 文件）。

## 安装 iRime

在 App store 中下载 iRime 输入法。

下载完毕后，进入 App，点击「电脑快传」。

在电脑浏览器上输入对应的 ip 地址。

进入文件管理系统。

## 复制文件

假设你的徐码方案文件名叫「xuma」，

将电脑上 ```Rime/build/```文件夹中的以下文件复制到对应的手机文件夹```Rime/build/```下：

```
xuma.schema.yaml
xuma.prism.bin
xuma.reverse.bin
xuma.table.bin
```

同时，将电脑上 ```Rime/build/```文件夹中```xuma.schema.yaml```再复制一份到手机文件夹根目录下。

## 更改 default.custom.yaml

删除手机根目录下的```default.custom.yaml```文件。

将电脑根目录```Rime/```文件夹中的```default.custom.yaml```复制到手机根目录下。

## 部署

手机上回到主界面，点击「部署」。成功后即可使用徐码了。
