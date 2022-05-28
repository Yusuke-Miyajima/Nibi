// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery3
//= require playlist
//= require shop
//= require top
//= require work
//= require dragandswap

$(document).ready(function(){
  var dragAndSwap = new DragAndSwap({
    containers: ['.music-container'],
    element: '.dragable',
    isEnabled: true,
    swapBetweenContainers: true,
    onChange: function (boxes) {
    }
  });

  const setCookie = (name, json)=>{
    let cookies = '';
    let expire = '';
    let period = '';

    //Cookieの保存名と値を指定
    cookies = name + '=' + JSON.stringify(json) + ';';

    //Cookieを保存するパスを指定
    cookies += 'path=/ ;';

    //Cookieを保存する期間を指定
    period = 365; //保存日数
    expire = new Date();
    expire.setTime(expire.getTime() + 1000 * 3600 * 24 * period);
    expire.toUTCString();
    cookies += 'expires=' + expire + ';';

    //Cookieを保存する
    document.cookie = cookies;
};

  $(".keepBtn").on("click", function(){
    var settings = {};
    $(".music-setting-el").each(function(index, element){
      var page = $(element).data("page");
      var music = $(element).find(".music").attr("id");
      settings[page] = music;
    });
    setCookie("music_settings", settings);
    console.log(settings);
  });
});