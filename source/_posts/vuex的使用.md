---
title: vuex
date: 20200725
tags: vuex vue
---

由hl项目总结vuex的用法:
目录结构如下图所示:
![BUG](images/目录.png)

参考vuex官网: [https://vuex.vuejs.org/zh/](https://vuex.vuejs.org/zh/)

>1.辅助函数的使用

```
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex';
```
在vue的页面中引用辅助函数

mapState,mapGetters在computed中引用

```
computed: {
	...mapState('newMaterial', ['outboundAppLevel4List'])
},
```
mapMutations,mapActions在methods中引用
```
methods: {
	...mapActions('newMaterial', ['queryLevel4List','querysmSectiontList']),
 }
```