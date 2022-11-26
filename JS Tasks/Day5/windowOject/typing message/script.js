function typingMessage(msg)
{
   var i=0,timerId;
   timerId = window.setInterval(function() {
       document.write(msg.charAt(i++));
       if(i>msg.length)
       {
        window.clearInterval(timerId)
       }
   },100);
}

typingMessage("Hello Hello world world");


setTimeout(function(){
    window.close()
},5000);