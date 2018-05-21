---
title: ubuntu防火墙开启及端口开启
date: 2018-05-15 17:33:57
tags: Linux
---
环境系统： ubuntu

工具：xshell

1.测试远程主机的端口是否开启（windows命令行下执行）

telnet 192.168.1.103 80
远程访问主机的80端口，测试主机的80端口是否开启

2.查看本地的端口开启情况(ubuntu下执行)

sudo ufw status

3.打开80端口(ubuntu下执行)

sudo ufw allow 80

4.防火墙开启(ubuntu下执行)

sudo ufw enable
　　
5.防火墙重启(ubuntu下执行)

sudo ufw reload

6.防火墙关闭(ubuntu下执行)

sudo ufw disable
　　
