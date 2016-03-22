$(document).ready(function(){
    
  $(".design-goals").click(function() {
            $("html,body").animate(
                    {scrollTop:$("#design-goals-periscope").offset().top-85}, 1200
            )
        });
    
     $(".social-media").click(function() {
            $("html,body").animate(
                    {scrollTop:$("#periscope-text").offset().top-85}, 1200
            )
        });
    
     $(".navbar-brand").click(function() {
            $("html,body").animate(
                    {scrollTop:$("body").offset().top}, 1200
            )
        });
    
     $(".top").click(function() {
            $("html,body").animate(
                    {scrollTop:$("body").offset().top}, 1200
            )
        });

    
    
});