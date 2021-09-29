$(document).ready(function(){
    $("[data-filter]").click(function(){
        $("[data-filter-type]").hide()
        $("[data-filter-type=" + $(this).data("filter") + "]").show()
        // var attr = $(this).attr("data-filter")

        // $(".filter").removeClass("active");
        // $(this).addClass("active");

        // $(".item").hide();
        // if(attr == "church"){
        //     $("." + attr).show();
        // }
        // else if(attr == "community-mobile-app"){
        //     $("." + attr).show();
        // }
        // else if(attr == "content-creators-podcasters"){
        //     $("." + attr).show();
        // }
        // else if(attr == "festival"){
        //     $("." + attr).show();
        // }
        // else if(attr == "free-time-magazine-app"){
        //     $("." + attr).show();
        // }
        // else if(attr == "museum"){
        //     $("." + attr).show();
        // }
        // else if(attr == "smart-city-app"){
        //     $("." + attr).show();
        // }
        // else if(attr == "theater-philharmonic"){
        //     $("." + attr).show();
        // }
        // else if(attr == "tourism-travel-mobile-app"){
        //     $("." + attr).show();
        // }
        // else{
        //     $(".item").show();
        // }
    })
});