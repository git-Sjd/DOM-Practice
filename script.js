var navBar = document.getElementById("navBar");
console.log(navBar)

var para = document.getElementsByClassName("Para")
console.log(para)

var tag = document.getElementsByTagName("header")
console.log(tag)

// if(para.length === 2){
//     alert("There are five components in header")
// }
// else{
//     alert("Hello")
// }

var para1 = document.querySelector('.Para p')
console.log(para1)

var para2 = document.querySelectorAll(".Para p")
console.log(para2)

var heading = document.getElementById('cardHeading')

setTimeout(function(){
    heading.innerText ="This is the Demo"

}, 3000)

var cardImg = document.getElementById('cardImg')

setTimeout(function(){
    cardImg.src ="https://i.pinimg.com/736x/f0/08/96/f00896b2e5b724a1c981e0b53f9c7cac.jpg"
    cardImg.alt ="winter"
    
},3000)

// var heading = document.getElementById('card')
// heading.innerHTML = "<h2>Heading Chnages<h2> <p>This is the defination of the cars<p>"

var emptyDiv = document.getElementById("emptyDiv")

setTimeout(function(){
    emptyDiv.innerHTML = "<h1>New Cards example<h1> <img src=https://media.istockphoto.com/id/1164386039/photo/howrah-bridge-on-river-ganges-at-kolkata-at-twilight-with-moody-sky.jpg?s=612x612&w=0&k=20&c=CHrNWdInFSDyERdvgd0f8935hZcBQU6lbYCE4LlXqUY= alt=HowrahBrideg> </img> <p>This is the beautiful picture of howrah bride which is in Kolkata. This is one of the main center of attraction for people coming to visit koltata. This whole bridge made up of steel and it is without any piller in the middle</p>"

}, 6000)

var timer = document.getElementById("timer")
timer.innerHTML = "Time Change"
