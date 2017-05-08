(function () {

    'use strict';
    var bloody;

    window.addEventListener('load', function () {
        document.getElementById("character").style.bottom = 0;
        document.getElementById("character").style.left = 0;
        bloody = document.getElementById("character");
    });

    function up() {
        var id = window.setInterval(function () {
            document.getElementById("character").style.bottom = parseInt(document.getElementById("character").style.bottom, 10) + 10 + 'px';
            if (document.getElementById("character").style.bottom >= '80px') {
                clearInterval(id);
                document.getElementById("character").style.bottom = "0px";

            }
        }, 50);
    }

    function left() {
        var id = window.setTimeout(function () {
            bloody.style.left = (parseInt(bloody.style.left, 10)) - 5 + "px";
            bloody.src = "http://navgurukul.org/bloodynasreen/left.png";
            if (parseInt(bloody.style.left) <= -20) {
                clearInterval(id);
                bloody.style.left = "-20px";
            }
        }, 50);
    }

    function right() {
        var id = window.setTimeout(function () {
            bloody.src = "http://navgurukul.org/bloodynasreen/right.png";
            if (parseInt(document.getElementById("character").style.left, 10) >= window.innerWidth - bloody.width -20) {
            } else {
                bloody.style.left = (parseInt(bloody.style.left, 10)) + 5 + "px";
            }
        }, 50);
    }

    function punch() {
        bloody.src = "http://navgurukul.org/bloodynasreen/punch.gif";
        setTimeout(function () {
            bloody.src = "http://navgurukul.org/bloodynasreen/front.png";
        }, 500);
    }


    function keypress(event) {
        if (event.keyCode === 37) {
            left();
        } else if (event.keyCode === 39) {
            right();
        } else if (event.keyCode === 38) {
            up();
        } else if (event.keyCode === 80) {
            punch();
        }

    }

    window.addEventListener("keydown", keypress);

}());
