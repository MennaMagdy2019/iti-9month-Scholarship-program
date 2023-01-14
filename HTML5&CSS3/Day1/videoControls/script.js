var vid = document.getElementsByTagName("video")[0]
var speedVideo = document.getElementsByClassName("speedVideo")[0];
var timeVideo = document.getElementsByClassName("timeVideo")[0];
var controlTime= document.getElementsByClassName("controlTime")[0];
var mutedVideo = document.getElementsByClassName("mutedVideo")[0];
/**************timeVideoControl********/
timeVideo.oninput = function(){
   timeVideototal=vid.duration;
   timeVideo.max=Math.floor(vid.duration);
   if(timeVideototal>60){
   var timeVideomin= Math.floor(timeVideototal/60)
   var timeVideosec = Math.floor(timeVideototal%60);
   if(timeVideosec<9){timeVideosec="0"+timeVideosec}

    
   vid.currentTime = timeVideo.value;
   if(vid.currentTime>60){
    var timeminutes= Math.floor(vid.currentTime/60)
    var timesec = vid.currentTime%60;
    if(timesec<9){timesec="0"+timesec}
    controlTime.innerHTML = timeminutes+":"+Math.floor(timesec) + "/"+timeVideomin+":"+timeVideosec
   }
   else{
    controlTime.innerHTML = vid.currentTime + "/"+timeVideomin+":"+timeVideosec
   }
}
else{
    controlTime.innerHTML = vid.currentTime + "/"+Math.floor(vid.duration)
}
    console.log(vid.currentTime)
}
/**************speedVideoControl********/
speedVideo.oninput = function(){
    vid.playbackRate = speedVideo.value
    console.log(speedVideo.value)
}

/**************mutedVideoControl********/
mutedVideo.oninput = function(){
    vid.volume = mutedVideo.value
    console.log(vid.volume)
}
/***********playfn **********/
function play(){
    vid.play();
}
function stop(){
    vid.pause()
}

function start(){
    vid.currentTime =0;
}

function minustime() {
    vid.currentTime -=5
}

function plustime() {
    vid.currentTime +=5
   
}
function end(){
    vid.currentTime = vid.duration;
    timeVideo.value = vid.duration;
   // console.log("done")
}

