$(document).ready(function(){
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
