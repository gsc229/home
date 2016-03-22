$(document).ready(function(){
    
  $(".design-goals").click(function() {
            $("html,body").animate(
                    {scrollTop:$("#design-goals-periscope").offset().top-85}, 600
            )
        });
    
     $(".social-media").click(function() {
            $("html,body").animate(
                    {scrollTop:$("#periscope-text").offset().top-85}, 600
            )
        });
    
     $(".navbar-brand").click(function() {
            $("html,body").animate(
                    {scrollTop:$("body").offset().top}, 600
            )
        });
    
     $(".top").click(function() {
            $("html,body").animate(
                    {scrollTop:$("body").offset().top}, 600
            )
        });

    
    
});