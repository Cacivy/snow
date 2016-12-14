# Snow
It's a simple snow animate by canvas;

### How to do?

download [snow.js](https://github.com/Cacivy/snow/blob/master/snow.js)

```html
<script src="snow.js"></script>
<script>
    // 获取要"下雪"的元素
    var element = document.querySelector('.masthead')
    var config = {
        max: 100, // 雪量大小
        speed: 0, // 下雪速度，建议 0~100
        top: true // 是否从顶部开始下雪
    }
    new snow(element, config)
</script>
```

### TODO

- [ ] 贝塞尔曲线设置速度变化

### Thanks
https://aerotwist.com/