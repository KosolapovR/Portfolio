window.onload = function(){
   
    var send_box = document.getElementById('succes_send'),
        menu_mobile = document.getElementById('menu-mobile'),
        title = document.getElementsByClassName('title'),
        menu_humberger = document.getElementById('menu-humberger'),
        close_menu = document.getElementById('close-menu'),
        
        li1 =  document.getElementById('li1'),
        li2 =  document.getElementById('li2'),
        li3 =  document.getElementById('li3'),
        li4 =  document.getElementById('li4'),
        
      //отслеживание нажатия меню    
        menu_clicked = false,
        
      //устанавливаем положение элементов li по оси Y, свернутое меню
        li1_posY = parseInt(window.getComputedStyle(li1).getPropertyValue('top')), 
        li2_posY = parseInt(window.getComputedStyle(li2).getPropertyValue('top')), 
        li3_posY = parseInt(window.getComputedStyle(li3).getPropertyValue('top')), 
        li4_posY = parseInt(window.getComputedStyle(li4).getPropertyValue('top')), 
        title_posY = parseInt(window.getComputedStyle(title[0]).getPropertyValue('padding-top'));
    

    //POP-UP EMAIL
    
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
    
    //MOBILE MENU
    
    function fade_menu(){

        //отображаем элементы
        li1.style="display:block";
        li2.style="display:block";
        li3.style="display:block";
        li4.style="display:block";
        
      
        
        //устанавливаем положение элементов li по оси Y, когда меню развернуто
        if(menu_clicked){
            li1.style.top = "40px";
            li2.style.top = "80px";
            li3.style.top = "120px";
            li4.style.top = "160px";
        }
        
      
        var id = setInterval(function(){
            
            if(!menu_clicked)
//блок разворачивания меню:
            {
                menu_humberger.style.display="none";
                close_menu.style.display="block";
                if(li2_posY >= 80)
                {
                  menu_clicked = true;
                  clearInterval(id);   
                }
                else
                    //выполняем иттерацию пока не развернем меню
                {
                    li2_posY +=1;
                    li3_posY += 2;
                    li4_posY += 3;
                    title_posY += 4;
                    li2.style.top = li2_posY + "px";
                    li3.style.top = li3_posY + "px";
                    li4.style.top = li4_posY + "px";
                    title[0].style.paddingTop = title_posY + "px";
                   
                }
                
            }else
//блок cворачивания меню:
            {
                menu_humberger.style.display="block";
                close_menu.style.display="none";
                
                if(li2_posY <= 40){
                    
                    //скрываем элементы когда меню свернулось
                    li1.style="display:none";
                    li2.style="display:none";
                    li3.style="display:none";
                    li4.style="display:none";
                     menu_clicked = false;
                  
                    clearInterval(id);
                }
                else
                    //выполняем иттерацию пока не свернем меню
                {
                   
                    li2_posY -= 1;
                    li3_posY -= 2;
                    li4_posY -= 3;
                    title_posY -= 4;
                    
                    li2.style.top = li2_posY + "px";
                    li3.style.top = li3_posY + "px";
                    li4.style.top = li4_posY + "px";
                    title[0].style.paddingTop = title_posY + "px";  
                }     
            }
        }, 8);    
    }
    
    menu_mobile.addEventListener("click", fade_menu);
    
};