$(".click").click(function (e) { 
    if($(".menu-nav").css("display")=="none"){
    $(".menu-nav").css("display", "flex");
    }else{
    $(".menu-nav").css("display", "none");
    }
    
});