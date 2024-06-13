// let count = 0;
// document.getElementById("decreasebtn").onclick = function(){
// count-=1;
//  document.getElementById("counterlabel").innerHTML = count
// }
// document.getElementById("resetbtn").onclick = function(){
//     count=0;
//  document.getElementById("counterlabel").innerHTML = count
// }
// document.getElementById("increasebtn").onclick = function(){
//     count+=1;
//  document.getElementById("counterlabel").innerHTML = count
// }
let count = 0;
let counterLabel = document.getElementById("counterlabel");

document.getElementById("decreasebtn").onclick = function(){
    count -= 1;
    counterLabel.innerHTML = count;
    updateTextColor();
}

document.getElementById("resetbtn").onclick = function(){
    count = 0;
    counterLabel.innerHTML = count;
    updateTextColor();
}

document.getElementById("increasebtn").onclick = function(){
    count += 1;
    counterLabel.innerHTML = count;
    updateTextColor();
}

function updateTextColor() {
    if (count < 0) {
        counterLabel.style.color = "red";
    } else if (count > 0) {
        counterLabel.style.color = "green";
    } else {
        counterLabel.style.color = "black"; 
    }
}




