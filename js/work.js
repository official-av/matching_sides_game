alert("Hello!");
var n = 5;

var start = function () {
    var count = n;
    while (count != 0) {
        var top_position = Math.floor(Math.random() * 80);
        var left_position = Math.floor(Math.random() * 60);
        var tagx = document.getElementById("left");
        var result = document.createElement("img");
        tagx.appendChild(result);
        tagx.style.position = "relative";
        result.style.position = "relative";
        result.setAttribute("src", "smiley.png");
        result.style.top = top_position + "px";
        result.style.left = left_position + "px";
        result.setAttribute("height", "20%");

        count--;
    }
    var res = document.getElementById("left");
    for (var i = 0; res.childNodes[i] != res.lastChild; i++) {
        console.log("yo");
        res.childNodes[i].addEventListener("click", function () {
            alert("Wrong Answer!game over!!");
            start;
        });
    }

    var clone = document.getElementById("left").cloneNode(true);
    document.getElementById("left").parentElement.appendChild(clone);
    var right = document.body.lastChild;
    right.removeChild(right.lastChild);
    n += 5;

    document.getElementById("left").lastChild.removeEventListener("click", function () {
        alert("Wrong Answer!game over!!");
        start;
    });
    document.getElementById("left").lastChild.addEventListener("click", function () {
        document.getElementById("left").parentElement.removeChild(document.getElementById("left").parentElement.lastChild);
        while (tagx.firstChild) {
            tagx.removeChild(tagx.lastChild)
        };
    });
    document.getElementById("left").lastChild.addEventListener("click", start);
};