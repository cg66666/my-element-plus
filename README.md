# mobile_vue3

## 项目简介

本项目简易功能的中台项目

## 技术构架

### 前端构架

基础框架 vue3+vite+typescript
ui 组件库 element plus

## 项目亮点

### 1、实现通过 json 对象来配置菜单，包括子菜单分级展开、菜单图标（elemenu-plus 内图标库）、点击菜单路由跳转

### 2、实现简单的 echart 配置。在坐标轴中，可以二维展示指标数据，实现手动控制选择展示某一维度指标

### 3、实现通过 json 对象来配置 el-form 表单，可配置表单数据格式自定义，也可配置 element-plus 组件或自定义组件布局，也可对变量进行自定义校验

### 4、手写 eventBus，采用单例设计模式，用于实现表单组件件不同内容的联动

### 5、通过 pinia，实现 form 表单实例与 form 数据的规范化操作。在组件中只能通过函数去实现数据的读取与修改操作，将数据源与操作隔离

## 开发环境搭建

安装运行前端依赖

```sh
npm install
npm run dev
```
