# Snow
It's a simple snow animate by canvas;

### How to do?

download [snow.js](https://github.com/Cacivy/snow/blob/master/snow.js)

```html
<script src="snow.js"></script>
<script>
    // 获取要"下雪"的元素
    var node = document.querySelector('.masthead')
    // max: 雪量大小 speed: 下雪速度，建议 0~100
    var config = {max: 100, speed: 10}
    var snow = new snow(node, config)
</script>
```

### TODO

- [ ] 贝塞尔曲线设置速度变化

### Thanks
https://aerotwist.com/