(function($){
    $(function(){
        $(".jq_nav_icon").click(function(){
            $(".nav_background").slideToggle();
            $(".nav_background").slideToggle();
            $("nav ul").fadeToggle();
        });
        $(".jq--image-hamburger").click(function(){
            if($(".jq_hamburger").attr("src") == "img/hamburger_menu.jpg")
            {
                $($(".jq_hamburger").attr("src","img/cross.jpg"));
            } 
            else 
            {
                $($(".jq_hamburger").attr("src","img/hamburger_menu.jpg"));
            }  
        });
        $(".jq_image_hamburger").click(function(){
            if($(".jq_image_hamburger").attr("src") == "img/hamburger_menu.jpg")
            {
                $($(".jq_image_hamburger").attr("src","img/cross.jpg"));
            } 
            else 
            {
                $($(".jq_image_hamburger").attr("src","img/hamburger_menu.jpg"));
            }  
        });
    });
})(jQuery);