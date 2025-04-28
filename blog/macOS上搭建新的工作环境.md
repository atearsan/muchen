---
title: macOS上搭建新的工作环境
description: 换新电脑，在macOS上搭建新的工作环境
---
## 背景
之前的电脑是Intel芯片的MacBook Pro，最近新入手了Apple M芯片的MacBook Pro，需要迁移工作环境，过程比预期的麻烦点，记录下相关的事情。

这里的“麻烦”，主要是因为旧的电脑用的很多年了，很多本地环境搭建好了很习惯了，新电脑从零恢复到原有顺手的环境需要一个时间。

## 迁移方案
### macOS 迁移助理
搜索过两个macOS之间迁移的方案，发现可以用苹果的“迁移助理”可以无缝迁移，但是根据网友的反馈存在以下问题：
- 问题xx
- 问题xx
另外，以前用“时间胶囊”进行系统重装恢复，踩了坑，白白浪费几个小时。
所以本次还是选择手动迁移。

### 手动迁移
#### 数据迁移
数据迁移比较简单，我用固态硬盘，复制粘贴，基本1～2小时内可以搞定所有，比时间胶囊快多了。

#### 软件迁移 ✅
考虑到一些环境配置或软件配置的原因，新的系统创建的用户名也和旧的保持一致。另外，macOS版本及芯片不一样，所以软件根据实际需求慢慢下载安装最新版本。

根据我的实际需求，分为日常实用、产品、开发几个方面。


## 我的软件列表

以前电脑上安装了很多软件，这次只优先安装了实用频率最高的。

**基础软件**
- ClashVerge
- Chrome
- [Snipase（截图）](https://www.snipaste.com/)
- Skim（PDF）
- Typora v0.11.18（MarkDown）
- WPS Office
- 微信
- Keka（压缩解压）
- Axure RP 9
- ToDesk（远程协助）
- File Zilla（FTP）
- [Obsidian（MarkDown / 知识库）](https://obsidian.md/)

**开发工具**
- VS Code
- DBeaver（数据库管理）
- Sourcetree
- [RStudio（R开发）](https://posit.co/download/rstudio-desktop/)
- IntelliJ IDEA
- [Trace - 国际版（AI编程）](https://www.trae.ai/) 
- [Windsurf（AI编程）](https://windsurf.com/editor)
- [apifox（API调试）](https://apifox.com/)

**开发环境**
- [R（R开发）](https://posit.co/download/rstudio-desktop/)
- [MySQL 8.0.42-Arm64](https://dev.mysql.com/downloads/mysql/)
- [Zulu JDK 8](https://www.azul.com/downloads/?version=java-8-lts&os=macos&architecture=arm-64-bit&package=jdk#zulu)
- [Node v20.19.1 ARM64 (LTS)](https://nodejs.org/en/download/)
- Git
- [Homebrew](https://brew.sh/zh-cn/)
- [Redis](https://redis.io/docs/latest/operate/oss_and_stack/install/archive/install-redis/install-redis-on-mac-os/)
- [Oh My Zsh](https://ohmyz.sh/)

## macOS 配置
### 终端 - 代理

- `.zshrc` 代理配置（别名）：
``` bash
alias proxy="
export https_proxy=http://127.0.0.1:7897;
export http_proxy=http://127.0.0.1:7897;
export all_proxy=socks5://127.0.0.1:7897;"

alias unproxy="
unset https_proxy;
unset http_proxy;
unset all_proxy"
```

- 终端临时代理（退出失效）：
``` bash
export https_proxy=http://127.0.0.1:7897 http_proxy=http://127.0.0.1:7897 all_proxy=socks5://127.0.0.1:7897
```

### Homebrew

Apple M芯片安装Homebrew需额外添加到环境变量：
``` bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

  
### 终端 - Redis别名

- `.zshrc` redis 别名配置：
``` bash
# redis-server
alias redis="redis-server"
```
