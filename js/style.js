$(document).ready(function(){
  // 検索ボックスを閉じる
  $("#close").click(function(){
    $("#sidebar-search-box").hide();
  });
  $("#search-btn").click(function(){
    $("#sidebar-search-box").show();
  });
});
