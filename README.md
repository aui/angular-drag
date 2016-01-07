# angular-drag

基于 AngularJS 的拖拽指令

1. 支持 GPU 加速
2. 支持边界限制
3. 支持设置拖拽把柄
4. 移动端与 PC 端通用

## 使用

支持使用 script 标签或者 webpack、requirejs、seajs 调用：

### script

调用

```html
<script src="lib/angular.js"></script>
<script src="dist/angular-drag.js"></script>
<script>
    var app = angular.module('app', ['angular-drag']);
</script>
```

### webpack

安装
``` shell
npm install angular-drag
```

调用
```js
require('angular-drag');
var app = angular.module('app', ['angular-drag']);
```

> angular-drag 依赖 `angular` 与 `jquery` 两个全局模块

## 指令

1. `drag` 被拖拽的元素
2. `drag-handle` 触发拖拽的把柄（可选）

## 示例

1. 简单的可拖拽元素

```html
<div drag class="example">
    hello world
</div>
```

2. 自定义拖拽的把柄

```html
<div drag class="example">
    <div drag-handle></div>
    <p>hello world</p>
</div>
```

在线演示：<https://aui.github.io/angular-drag/example/index.html>

## 许可

[MIT](./LICENSE)