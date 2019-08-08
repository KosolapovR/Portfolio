window.onload = function(){
    
    var send_box = document.getElementById('succes_send');
    if(send_box){
         var opacity = 1;
       setTimeout(function(){
          
          var id = setInterval(function(){
              send_box.style = "opacity: " + opacity;
              opacity -= 0.01;
              if(opacity == 0){
                  clearInterval(id);
                  send_box.style="display:none";
              }
          }, 20);
           
           
       }, 1000);
        
    }else{
        console.log("отсутствует");
    }
    
};