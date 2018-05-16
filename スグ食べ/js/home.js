// JavaScript Document

$(function(){
    $('.bxslider').bxSlider();
});

/**/
$(window).on("load scroll",function(){  //windowがload,scrollしたら動作
let $main = $("#main"),  //id="main"
$homeHeader = $(".home .header"),  //class	
$distance = $main.offset().top,  //document内の要素top位置を取得
$scrollval = $(window).scrollTop(),  //ブラウザで表示されているtop位置を取得
$navH = $(".header").outerHeight();  //要素の高さを数値で取得

console.log($distance);
console.log($scrollval);

if($scrollval>$distance){  //表示されている位置がid="main"を過ぎたら
$homeHeader.addClass("fix");  //fixクラスを追加
$main.css("margin.top",$navH);  //id="main"要素にmargin-topを追加
}else{
$homeHeader.removeClass("fix");  //fixクラスを解除	
$main.css("margin-top",0);  //id="main"要素のmargin-topを0にする
}
});
