$("#nav-button").click(function(){
    if($("#nav-button").attr('aria-expanded') == "false"){
        $("#nav-button").attr('aria-expanded','true');
        $("#nav-menu").slideDown(800);
    }
    else{
        $("#nav-button").attr('aria-expanded','false');
        $("#nav-menu").slideUp(800);
    }
    
});
