window.onload = function(){
   

    var 
        html = document.documentElement,
        body = document.body,
        send_box = document.getElementById('succes_send'),
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
        
    }
    
    //MOBILE MENU
    
    function fade_menu(){

        //отображаем элементы
        li1.style="display:block !important";
        li2.style="display:block !important";
        li3.style="display:block !important";
        li4.style="display:block !important";
        
      
        
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
               
               menu_humberger.classList.add('displayN');
                 menu_humberger.classList.remove('displayB');
                 close_menu.classList.remove('displayN');
                 close_menu.classList.add('displayB');
               
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
                menu_humberger.classList.add('displayB');
                 menu_humberger.classList.remove('displayN');
                 close_menu.classList.remove('displayB');
                 close_menu.classList.add('displayN');
                
                if(li2_posY <= 40){
                    
                    //скрываем элементы когда меню свернулось
                    li1.style="display:none !important";
                    li2.style="display:none !important";
                    li3.style="display:none !important";
                    li4.style="display:none !important";
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
    
    
    //ПРОКРУТКА СТРАНИЦЫ
    function scroll(elem){
        var attr_name = elem.getAttribute('data');
        var target = document.getElementById(attr_name);
       
        var scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
        
        var id = setInterval(function(){
          
            
            var correction = 0;
            if(scrollHeight < target.offsetTop + target.getBoundingClientRect().height + (document.documentElement.clientHeight - target.getBoundingClientRect().height)){
            correction = target.offsetTop - (scrollHeight - document.documentElement.clientHeight);
            }
            
            
               window.scrollBy(0, 20);
            console.log(target.offsetTop + " " + window.pageYOffset + " "  + correction);
            
             
           
           if(Math.round(window.pageYOffset + correction) >= target.offsetTop){
                clearInterval(id);
           }
       
        }, 5)
        
    }
    var contact = document.getElementById('contact'),
        a_contact = document.getElementById('a_contact'),
        a_works = document.getElementById('a_works'),
        a_about = document.getElementById('a_about'),
        hire_contact = document.getElementById('hire_contact'),
        view_works = document.getElementById('view_works');
    
    //отработка нажатия на иконку мыши
    
    var mouse_icon = document.getElementsByClassName('mouse');
    
    
   
    
    
    
    // обработчики событий
     mouse_icon[0].addEventListener("click", function(){
           var id = setInterval(function(){
            if(window.pageYOffset >= document.documentElement.clientHeight){
                clearInterval(id);
            }     
               window.scrollBy(0, 20);
        }, 12)
     });
    
    a_contact.addEventListener("click", function(){scroll(this);});
    a_works.addEventListener("click", function(){scroll(this);});
    a_about.addEventListener("click", function(){scroll(this);});
    hire_contact.addEventListener("click", function(){scroll(this);});
    view_works.addEventListener("click", function(){scroll(this);});
  
    menu_mobile.addEventListener("click", fade_menu);
};