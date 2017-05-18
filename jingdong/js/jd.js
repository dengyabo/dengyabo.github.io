

var btn1=document.querySelectorAll(".lunbodian li");
var con1=document.querySelectorAll(" .banner-main .banner-kuang li");
var cont1=document.querySelector(".banner-main");
var jz1=document.querySelector(".l-jz");
var jz2=document.querySelector(".r-jz");
var num=0;
console.log(btn1)

Array.from(btn1).forEach(function (ele,index) {
    ele.onmouseover=function () {
        num=index;
        for (var b = 0; b < btn1.length; b++) {
            btn1[b].style.background = "#fff";
            con1[b].style.zIndex =1;
        }
        this.style.background = "red";
        con1[index].style.zIndex = 2;
    }
})
var t=setInterval(move,2000);
function move() {
    num++;
    if (num == btn1.length) {
        num = 0;
    }if (num == -1) {
        num =btn1.length-1;
    }
    for (var b = 0; b < btn1.length; b++) {
        btn1[b].style.background = "#fff";
        con1[b].style.zIndex = 1;
    }
    btn1[num].style.background = "red";
    con1[num].style.zIndex = 2;
}
cont1.onmouseover=function(){
    clearInterval(t);
}
cont1.onmouseout=function () {
    t=setInterval(move,2000)
}
jz2.onclick=function () {
    move()
}
jz1.onclick=function () {
    num-=2;
    move()
}
