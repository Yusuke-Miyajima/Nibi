window.onload = function() {
    var popup = document.getElementById('js-popup');
    if(!popup) return;
    popup.classList.add('is-show');
  
    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn');
  
    closePopUp(blackBg);
    closePopUp(closeBtn);
  
    function closePopUp(elem) {
      if(!elem) return;
      elem.addEventListener('click', function() {
        popup.classList.remove('is-show');
      })
    }
}

$(document).ready(function(){
  musics = $("#musics").data("musics")
  music_settings = $("#music-settings").data("music-settings")
  $(".changepage-checkbox").on("click", function(){
    var id = parseInt($(this).data("id"));
    // ページアニメーション
    changePage(id);

    // 音楽を再生
    var check_el = document.getElementById("check" + id);
    if (check_el.checked) {
        playAudio(id);
    } else {
        playAudio(id - 1);
    }
  });
});

// 文字表示速度
let typTime=150;
// フェードイン速度
let fadeTime=500;

let num1=0;

let currentAudio = new Audio();
let musics = undefined;
let music_settings = undefined;
  
function changePage(id){
    var check_el = document.getElementById("check" + id);
    if(num1 == id) {
        if(check_el.checked) {
            let element1=document.getElementById("page" + (id * 2));
            let element2=document.getElementById("page" + (id * 2 + 1));
            element1.classList.add("typingBox" + id);
            element2.classList.add("typingBox" + id);	
        
            $('.typingBox' + id).children().addBack().contents().each(function() {
                if (this.nodeType == 3) {
                    $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
                }
            });
            // ここから一文字ずつフェードインさせる記述
            $('.typingBox' + id).css({'opacity': 1});
            for (var i = 0; i <= $('.typingBox' + id).children().length; i++) {
                $('.typingBox' + id).children('span:eq('+i+')').delay(typTime * i).animate({'opacity':1},fadeTime);
            };	
        }
        num1 = id + 1;
    }   
}
  
function playAudio(id) {
    var music_stop_pages = [3, 12];
    if (music_stop_pages.includes(id * 2) || music_stop_pages.includes(id * 2 + 1)){
        // stop audio
        if (!currentAudio.paused) {
            currentAudio.pause();
        }
        return;
    }
    var setting = music_settings[id * 2];
    if (setting == undefined) {
        setting = music_settings[id * 2 + 1];
    }
    if (setting != undefined) {
        var music_id = setting.music;
        music_file = musics[parseInt(music_id) - 1].file
        // Stop audio
        if (!currentAudio.paused) {
            currentAudio.pause();
        }
        // Start new audio
        setTimeout(function(){
            currentAudio.src = "/audio/" + music_file;
            currentAudio.currentTime = 0;
            currentAudio.play();
        }, setting.start_after * 1000)
    }
}

function changeDisabled59(){
      if(num1==59) {
      if(check59.checked) {
          let element118=document.getElementById('page130');
          element118.classList.add("typingBox59");
              
          $('.typingBox59').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox59').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox59').children().size(); i++) {
                  $('.typingBox59').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=60;
      }
  }
  