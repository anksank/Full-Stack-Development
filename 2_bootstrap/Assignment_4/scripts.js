$(document).ready(function(){
    $("#myCarousel").carousel({interval: 2000});
    $("#carousel-button").click(function(){
        if($("#carousel-button").children("span").hasClass("fa-pause")){
            $("#myCarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass("fa-pause");
            $("#carousel-button").children("span").addClass("fa-play");
        }
        else if($("#carousel-button").children("span").hasClass("fa-play")){
            $("#myCarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass("fa-play");
            $("#carousel-button").children("span").addClass("fa-pause");
        }
        else ;
    });

    $("#loginLink").click(function(){
        $('#loginModal').modal('toggle');
    });

    $("#reserverTableLink").click(function(){
        $('#reserveTableModal').modal('toggle');
    });
});
