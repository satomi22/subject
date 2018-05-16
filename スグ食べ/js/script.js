// JavaScript Document


/*----------------
モバイルの時のボタン
-----------------*/
$(".btn-trigger").on("touchstart",function(){
  $(this).toggleClass("active");
	$(".header-nav").fadeToggle(500);
});




/*----------------
ページトップボタン
-----------------*/
$(".btn-pageTop>a").on("click",function(){
  $("html,body").animate({scrollTop:0},1000);
});
