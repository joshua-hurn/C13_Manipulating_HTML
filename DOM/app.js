document.addEventListener("DOMContentLoaded", function () {
    // Number 1
    let newButton = document.createElement("button");
    newButton.textContent = "Number 1";
    newButton.addEventListener("click", function () {
        alert("Hello");
    });
    document.body.appendChild(newButton);

    // Number 2
    const num2Btn = document.querySelector("#num2-btn");
    const num2Text = document.getElementById("num2-text");
    num2Btn.addEventListener("click", function () {
        alert(num2Text.value);
    });

    // Number 3
    const num3Div = document.getElementById("num3-div");
    num3Div.addEventListener("mouseenter", function () {
        num3Div.style.backgroundColor = "red";
    });

    num3Div.addEventListener("mouseleave", function () {
        num3Div.style.backgroundColor = "black";
    });

    // Number 4
    const num4P = document.getElementById("num4-p");
    num4P.addEventListener("click", function () {
        num4P.style.color = random_rgba();
    });

    // Number 5
    const num5Btn = document.getElementById("num5-btn");
    const num5Div = document.getElementById("num5-div");
    num5Btn.addEventListener("click", function () {
        const newSpan = document.createElement("span");
        newSpan.textContent = "Josh";
        num5Div.appendChild(newSpan);
    });


    // Number 6
    const num6Btn = document.getElementById("num6-btn");
    const num6Ul = document.getElementById("num6-ul");
    const friendArr = ["Josh", "Barniey", "Alfonzo", "Wesker", "Redfield", "Besker", "Mario", "Bowser", "Wario", "Waluigi"];
    let friendCounter = 0;

    num6Btn.addEventListener("click", function () {
        if (friendCounter < friendArr.length) {
            const newLi = document.createElement("li");
            newLi.textContent = friendArr[friendCounter];
            num6Ul.appendChild(newLi);
    
            friendCounter++    
        } else {
            num6Btn.disabled = "true";
        }
    });
});

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}