

var colors = ["yellow", "aqua", "green","beige", "pink","purple"];

    var colorIndex = 0;
    function Color() {
        var col = document.getElementById("body");
        if( colorIndex >= colors.length ) {
            colorIndex = 0;
        }
        col.style.backgroundColor = colors[colorIndex];
        colorIndex++;
    }
   