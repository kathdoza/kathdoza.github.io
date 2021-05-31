window.addEventListener('load', function() {
    particlesJS("particles-js", {
        "particles":{
            "number":{
                "value":80,
                "density":{"enable":true,"value_area":800}
            },
            "color":{"value":"#1da8aa"},
            "opacity":{
                "value":1,
                "random":false,
                "anim":{
                    "enable":false,
                    "speed":1,
                    "opacity_min":0.1,
                    "sync":false}
            },
            "size":{
                "value":3,
                "random":true,
                "anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}
            },
            "line_linked":{
                "enable":true,
                "distance":150,
                "color":"#1da8aa",
                "opacity":0.75,
                "width":1
            },
            "move":{
                "enable":true,
                "speed":6,
                "direction":"none",
                "random":false,
                "straight":false,
                "out_mode":"out",
                "bounce":false,
                "attract":{"enable":false,"rotateX":600,"rotateY":1200}
            }
        },
        "interactivity":{
            "detect_on":"canvas",
            "events":{
                "onhover":{"enable":true,"mode":"repulse"},
                "onclick":{"enable":true,"mode":"push"},"resize":true
            },
        },
        "retina_detect":true
    });

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })
})