window.onload=function  () {

     const designWidh=750;
     const fontSize=100;
     function resizeFont(){

         var CW = document.documentElement.
               clientWidth;
        var radio = CW/designWidh;

        var newFontSize= fontSize*radio;

        document.querySelector("html").style.fontSize= newFontSize + "px";


     }

     resizeFont();
     window.onresize= resizeFont;
}