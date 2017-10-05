$(document).ready(function(){
  // bxsiderの設定
      $('.bxslider').bxSlider({
        auto: true//自動切り替えの有無
      //  pause:6000,//停止時間※デフォルトは4000
      //  speed:1000,//動くスピード※デフォルトは500
      //  minSlides: 3,//一度に表示させる画像の最小値
      //  maxSlides: 4,//一度に表示させる画像の数
      //  slideWidth: 250,
      //  slideMargin: 10,
      //  pager: false,
      //  controls: false
      });


// モバイルのトップのボタン操作      
  // 検索ボックスを閉じる
  $("#close").click(function(){
    $("#sidebar-search-box").collapse("hide");
  });
  $("#search-btn").click(function(){
    $("#sidebar-search-box").collapse("show");
  });

  // メニュー閉じる
  $("#menu-close").click(function(){
    $(".reponsive-menu-container").collapse("hide");
  });
  $("$menu-btn").click(function(){
    $(".reponsive-menu-container").collapse("show");
  });
});
