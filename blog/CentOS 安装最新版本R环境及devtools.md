---
title: CentOS 安装最新版本R环境及devtools
description: CentOS 安装最新版本R环境及devtools
keywords:
  - Linux安装R
  - CentOS安装R
  - Linux R环境
  - "ft2build.h: No such file or directory"
  - configuration failed for package ‘textshaping’
  - dependency ‘textshaping’ is not available for package ‘ragg’
  - "fatal error: hb.h: No such file or directory"
  - dependency ‘ragg’ is not available for package ‘pkgdown’
  - devtools安装报错失败
---
      
> 使用`CentOS`默认的包管理器安装`R`的时候，安装版本是`3.6.0 (2019-04-26)`，目前最新版是`4.3.3 (2024-02-29)`。本文介绍怎么在`CentOS`下安装最新版`R`。

## 安装R
1、启用Linux (EPEL)扩展仓库
``` shell
# Enable the Extra Packages for Enterprise Linux (EPEL) repository
sudo yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
```
2、启用可选仓库
``` shell
sudo yum install yum-utils
sudo yum-config-manager --enable "rhel-*-optional-rpms"
```
3、指定R版本
我本地是`4.2.3`版本，所以服务器配置的和本地一致。（当前最新版本是`4.3.3`）
``` shell
export R_VERSION=4.2.3
```
4、下载R
``` shell
curl -O https://cdn.rstudio.com/r/centos-7/pkgs/R-${R_VERSION}-1-1.x86_64.rpm
```
5、安装R
``` shell
sudo yum install R-${R_VERSION}-1-1.x86_64.rpm
```
6、验证R是否安装成功
``` shell
/opt/R/${R_VERSION}/bin/R --version
```
7、创建R符合链接
>仅第一次安装需要

``` shell
sudo ln -s /opt/R/${R_VERSION}/bin/R /usr/local/bin/R
sudo ln -s /opt/R/${R_VERSION}/bin/Rscript /usr/local/bin/Rscript
```

## devtools安装
>我在`CentOS 8`中直接安装`install.packages("devtools")`报错了， 因为没有`gtk3`环境，这里一起记录下解决方式

``` shell
# Linux Shell
# 安装 gtk3
sudo yum install gtk3-devel
# 安装 libtiff
sudo yum install libtiff-devel
```

在`R`命令窗口中执行以下命令
``` R
# R 脚本命令
# 依次执行下面命令，最后可以成功安装 devtools
install.packages("textshaping")
install.packages("ragg")
install.packages("devtools")
```

## 参考
[Install R - posit Documentation](https://docs.posit.co/resources/install-r/#specify-r-version)
[R语言中安装devtools失败及解决办法](https://zhuanlan.zhihu.com/p/583600465)
[ragg - ft2build.h: No such file or directory](https://github.com/r-lib/ragg/issues/86)

## 其他安装方式（不推荐）

### 包管理器
使用包管理器安装是最简单的，但是版本是`3.6.0 (2019-04-26)`，因此不建议使用：
``` shell
sudo yum install R
```

### 源码编译安装
太麻烦了，不建议