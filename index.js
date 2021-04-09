
function getRandomInt(min, max) {
    document.getElementById("num").innerText = Math.floor(Math.random()*(max.value-min.value+1))+Number(min.value);
}
function colorChange(){
    $("#num").css("color", "rgba(230, 100, 100, 0.8)");
    $("#ya").empty();
    $("#ya").append("恭喜中獎");
    setTimeout('$("#num").css("color", "rgba(0, 0, 0, 0.8)");', 500);
    setTimeout('$("#num").css("color", "rgba(230, 100, 100, 0.8)");', 1000);
    setTimeout('$("#num").css("color", "rgba(0, 0, 0, 0.8)");', 1500);
    setTimeout('$("#num").css("color", "rgba(230, 100, 100, 0.8)");', 2000);
    setTimeout('$("#num").css("color", "rgba(0, 0, 0, 0.8)");', 2500);
}
function result(){
    setTimeout("getRandomInt(start, end);", 50)
    setTimeout("getRandomInt(start, end);", 100)
    setTimeout("getRandomInt(start, end);", 150)
    setTimeout("getRandomInt(start, end);", 200)
    setTimeout("getRandomInt(start, end);", 250)
    setTimeout("getRandomInt(start, end);", 300)
    setTimeout("getRandomInt(start, end);", 350)
    setTimeout("getRandomInt(start, end);", 400)
    setTimeout("getRandomInt(start, end);", 450)
    setTimeout("getRandomInt(start, end);", 500)
    setTimeout("getRandomInt(start, end);", 550)
    setTimeout("getRandomInt(start, end);", 600)
    setTimeout("getRandomInt(start, end);", 800)
    setTimeout("getRandomInt(start, end);", 1000)
    setTimeout("getRandomInt(start, end);", 1200)
    setTimeout("getRandomInt(start, end);", 1400)
    setTimeout("getRandomInt(start, end);", 1600)
    setTimeout("getRandomInt(start, end);", 1800)
    setTimeout("getRandomInt(start, end);", 2000)
    setTimeout("getRandomInt(start, end);", 2200)
    setTimeout("getRandomInt(start, end);", 2500)
    setTimeout("getRandomInt(start, end);", 3000)
    setTimeout("getRandomInt(start, end);", 3500)
    setTimeout("getRandomInt(start, end);", 4000)
    setTimeout("colorChange();",4500)
    // document.getElementById("num").innerText = getRandomInt(end);


}
