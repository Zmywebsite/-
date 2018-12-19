function heidegger() {
    var show = document.getElementById("show");
    show.style.display = "none";
}

$(function(){
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true
    });
});

$(document).ready(function(){
    /*自制的小屏下拉菜单*/
    $("#menu").click(function(){
        /*$("#show").toggleClass("none");*/
        $("#show").slideToggle("slow");
    });

});

