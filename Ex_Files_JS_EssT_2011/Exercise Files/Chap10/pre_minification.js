"use strict";
// jshint -W030:false
// This is some JavaScript to run through a minifier

// create some variables
var currentPos = 0;
var intervalHandle;
var animateBox;
// here's where we jump the box out of the current place in the page.
function beginAnimate() {
   document.getElementById("join").style.position = "absolute";
   document.getElementById("join").style.left = "0px";
   document.getElementById("join").style.top = "100px";
   // cause the animateBox function to be called
   // this uses setinterval, which calls repeatedly
   // 20 times a second (50 milliseconds)
   intervalHandle = setInterval(animateBox,50);
}

animateBox = function() {
   // set new position
   currentPos+=5;
   document.getElementById("join").style.left = currentPos + "px";
   // check that it hasn't moved off the screen
   if ( currentPos > 900) {
      // clear interval
      clearInterval(intervalHandle);
      // reset custom inline styles
      document.getElementById("join").style.position = "";
      document.getElementById("join").style.left = "";
      document.getElementById("join").style.top = "";
   }
};

// when page has finished loading, wait 5 seconds then
// call the beginAnimate function
window.onload =  function() {
   setTimeout(beginAnimate,5000);
};


// using closure compiler
var currentPos=0,intervalHandle,animateBox;function beginAnimate(){document.getElementById("join").style.position="absolute";document.getElementById("join").style.left="0px";document.getElementById("join").style.top="100px";intervalHandle=setInterval(animateBox,50);}
animateBox=function(){currentPos+=5;document.getElementById("join").style.left=currentPos+"px";900<currentPos&&(clearInterval(intervalHandle),document.getElementById("join").style.position="",document.getElementById("join").style.left="",document.getElementById("join").style.top="");};window.onload=function(){setTimeout(beginAnimate,5E3);};
animateBox=function(){currentPos+=5;document.getElementById("join").style.left=currentPos+"px";900<currentPos&&(clearInterval(intervalHandle),document.getElementById("join").style.position="",document.getElementById("join").style.left="",document.getElementById("join").style.top="");};window.onload=function(){setTimeout(beginAnimate,5E3);};
