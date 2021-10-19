const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

function snowButton() {
    document.getElementById("body").style.backgroundImage = "url(./images/shuksan.jpg)";
 }

 function desertButton() {
    document.getElementById("body").style.backgroundImage = "url(./images/desert3.jpg)";
 }