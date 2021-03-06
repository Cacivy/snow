(function () {
    var defaultConfig = {
        max: 100,
        speed: 0,
        top: true
    }

    function snow(_dom, obj) {
        if (!_dom || _dom.nodeType !== 1) {
            console.warn('This is a not allowed element!')
            return;
        }
        
        const
            config = Object.assign(defaultConfig, obj),
            width = _dom.clientWidth,
            height = _dom.clientHeight
        let
            canvas = document.createElement("canvas"),
            context = canvas.getContext("2d"),
            max = config.max,
            num = 0,
            list = [];

        canvas.width = width;
        canvas.height = height;
        canvas.style.position = "absolute",
            canvas.style.left = canvas.style.top = "0";
        context.fillStyle = "#fff";

        const create = function (isTop) {
            let obj = {
                x : Math.random() * width,
                y : Math.random() * height,
                vy : 1 + 3 * Math.random(),
                vx : .5 - Math.random(),
                r : 1 + 2 * Math.random()
            }

            obj.y = isTop ? 0 : config.top ? -obj.y : obj.y;

            return obj;
        }

        const fill = function () {
            context.clearRect(0, 0, width, height)
            list.forEach((x, i) => {
                context.beginPath();
                x.x += x.vx;
                x.y += x.vy;
                context.arc(x.x, x.y, x.r, 0, 2 * Math.PI, !1),
                context.stroke();
                context.closePath();
                context.fill();

                if (x.y > height) {
                    list.splice(i , 1);
                    list.push(create(true))
                }
            })

            setTimeout(function() {
                requestAnimationFrame(fill);
            }, config.speed)
        }

        while(max > num) {
            num++;
            list.push(create())
        }

        requestAnimationFrame(fill);

        _dom.append(canvas);
    }

    window.snow = snow;
})()