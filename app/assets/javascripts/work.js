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
  
  // 文字表示速度
      let typTime=150;
  // フェードイン速度
      let fadeTime=500;
  
      let num1=0;
  
  
  function changeDisabled00(){
      if(num1==0) {
          if(check001.checked) {
          let element0=document.getElementById('page019');
          let element1=document.getElementById('page1');
          element0.classList.add("typingBox0");
          element1.classList.add("typingBox0");	
          
          $('.typingBox0').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox0').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox0').children().size(); i++) {
                  $('.typingBox0').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
          };	
          }
                  num1=1;
      }
  }

    function changePage(id){
        if(check1.checked) {
            let element2=document.getElementById('page' + (id * 2));
            let element3=document.getElementById('page' + (id * 2 + 1));
            element2.classList.add("typingBox"+id);
            element3.classList.add("typingBox"+id);	
        
            $('.typingBox'+id).children().andSelf().contents().each(function() {
                if (this.nodeType == 3) {
                    $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
                }
            });
            // ここから一文字ずつフェードインさせる記述
            $('.typingBox'+id).css({'opacity':1});
                for (var i = 0; i <= $('.typingBox'+id).children().size(); i++) {
                    $('.typingBox'+id).children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
            };	
        }
        num1 += 1;
    }
  
  function changeDisabled(){
      if(num1==1) {
          if(check1.checked) {
              let element2=document.getElementById('page2');
              let element3=document.getElementById('page3');
              element2.classList.add("typingBox");
              element3.classList.add("typingBox");	
          
              $('.typingBox').children().andSelf().contents().each(function() {
                      if (this.nodeType == 3) {
                          $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
                      }
              });
          // ここから一文字ずつフェードインさせる記述
              $('.typingBox').css({'opacity':1});
                  for (var i = 0; i <= $('.typingBox').children().size(); i++) {
                      $('.typingBox').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
          num1=2;
      }
  }
  
  
  function changeDisabled2(){
      if(num1==2) {
      if(check2.checked) {
          let element4=document.getElementById('page4');
          let element5=document.getElementById('page5');
          element4.classList.add("typingBox2");
          element5.classList.add("typingBox2");
              
          
          $('.typingBox2').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox2').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox2').children().size(); i++) {
                  $('.typingBox2').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=3;
      }
  }
  
  function changeDisabled3(){
      if(num1==3) {
      if(check3.checked) {
          let element6=document.getElementById('page6');
          let element7=document.getElementById('page7');
          element6.classList.add("typingBox3");
          element7.classList.add("typingBox3");
              
          
          $('.typingBox3').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox3').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox3').children().size(); i++) {
                  $('.typingBox3').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=4;
      }
  }
  
  function changeDisabled4(){
      if(num1==4) {
      if(check4.checked) {
          let element8=document.getElementById('page8');
          let element9=document.getElementById('page9');
          element8.classList.add("typingBox4");
          element9.classList.add("typingBox4");
              
          
          $('.typingBox4').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox4').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox4').children().size(); i++) {
                  $('.typingBox4').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=5;
      }
  }
  
  function changeDisabled5(){
      if(num1==5) {
      if(check5.checked) {
          let element10=document.getElementById('page10');
          let element11=document.getElementById('page11');
          element10.classList.add("typingBox5");
          element11.classList.add("typingBox5");
              
          
          $('.typingBox5').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox5').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox5').children().size(); i++) {
                  $('.typingBox5').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=6;
      }
  }
  
  function changeDisabled6(){
      if(num1==6) {
      if(check6.checked) {
          let element12=document.getElementById('page12');
          let element13=document.getElementById('page13');
          element12.classList.add("typingBox6");
          element13.classList.add("typingBox6");
              
          
          $('.typingBox6').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox6').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox6').children().size(); i++) {
                  $('.typingBox6').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=7;
      }
  }
  
  function changeDisabled7(){
      if(num1==7) {
      if(check7.checked) {
          let element14=document.getElementById('page14');
          let element15=document.getElementById('page15');
          element14.classList.add("typingBox7");
          element15.classList.add("typingBox7");
              
          
          $('.typingBox7').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox7').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox7').children().size(); i++) {
                  $('.typingBox7').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=8;
      }
  }
  
  function changeDisabled8(){
      if(num1==8) {
      if(check8.checked) {
          let element16=document.getElementById('page16');
          let element17=document.getElementById('page17');
          element16.classList.add("typingBox8");
          element17.classList.add("typingBox8");
              
          
          $('.typingBox8').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox8').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox8').children().size(); i++) {
                  $('.typingBox8').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=9;
      }
  }
  function changeDisabled9(){
      if(num1==9) {
      if(check9.checked) {
          let element18=document.getElementById('page18');
          let element19=document.getElementById('page19');
          element18.classList.add("typingBox9");
          element19.classList.add("typingBox9");
              
          
          $('.typingBox9').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox9').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox9').children().size(); i++) {
                  $('.typingBox9').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=10;
      }
  }
  function changeDisabled10(){
      if(num1==10) {
      if(check10.checked) {
          let element20=document.getElementById('page20');
          let element21=document.getElementById('page21');
          element20.classList.add("typingBox10");
          element21.classList.add("typingBox10");
              
          
          $('.typingBox10').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox10').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox10').children().size(); i++) {
                  $('.typingBox10').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=11;
      }
  }function changeDisabled11(){
      if(num1==11) {
      if(check11.checked) {
          let element22=document.getElementById('page22');
          let element23=document.getElementById('page23');
          element22.classList.add("typingBox11");
          element23.classList.add("typingBox11");
              
          
          $('.typingBox11').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox11').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox11').children().size(); i++) {
                  $('.typingBox11').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=12;
      }
  }function changeDisabled12(){
      if(num1==12) {
      if(check12.checked) {
          let element24=document.getElementById('page24');
          let element25=document.getElementById('page25');
          element24.classList.add("typingBox12");
          element25.classList.add("typingBox12");
              
          
          $('.typingBox12').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox12').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox12').children().size(); i++) {
                  $('.typingBox12').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=13;
      }
  }function changeDisabled13(){
      if(num1==13) {
      if(check13.checked) {
          let element26=document.getElementById('page26');
          let element27=document.getElementById('page27');
          element26.classList.add("typingBox13");
          element27.classList.add("typingBox13");
              
          
          $('.typingBox13').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox13').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox13').children().size(); i++) {
                  $('.typingBox13').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=14;
      }
  }function changeDisabled14(){
      if(num1==14) {
      if(check14.checked) {
          let element28=document.getElementById('page28');
          let element29=document.getElementById('page29');
          element28.classList.add("typingBox14");
          element29.classList.add("typingBox14");
              
          
          $('.typingBox14').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox14').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox14').children().size(); i++) {
                  $('.typingBox14').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=15;
      }
  }function changeDisabled15(){
      if(num1==15) {
      if(check15.checked) {
          let element30=document.getElementById('page30');
          let element31=document.getElementById('page31');
          element30.classList.add("typingBox15");
          element31.classList.add("typingBox15");
              
          
          $('.typingBox15').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox15').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox15').children().size(); i++) {
                  $('.typingBox15').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=16;
      }
  }function changeDisabled16(){
      if(num1==16) {
      if(check16.checked) {
          let element32=document.getElementById('page32');
          let element33=document.getElementById('page33');
          element32.classList.add("typingBox16");
          element33.classList.add("typingBox16");
              
          
          $('.typingBox16').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox16').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox16').children().size(); i++) {
                  $('.typingBox16').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=17;
      }
  }function changeDisabled17(){
      if(num1==17) {
      if(check17.checked) {
          let element34=document.getElementById('page34');
          let element35=document.getElementById('page35');
          element34.classList.add("typingBox17");
          element35.classList.add("typingBox17");
              
          
          $('.typingBox17').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox17').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox17').children().size(); i++) {
                  $('.typingBox17').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=18;
      }
  }function changeDisabled18(){
      if(num1==18) {
      if(check18.checked) {
          let element36=document.getElementById('page36');
          let element37=document.getElementById('page37');
          element36.classList.add("typingBox18");
          element37.classList.add("typingBox18");
              
          
          $('.typingBox18').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox18').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox18').children().size(); i++) {
                  $('.typingBox18').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=19;
      }
  }function changeDisabled19(){
      if(num1==19) {
      if(check19.checked) {
          let element38=document.getElementById('page38');
          let element39=document.getElementById('page39');
          element38.classList.add("typingBox19");
          element39.classList.add("typingBox19");
              
          
          $('.typingBox19').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox19').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox19').children().size(); i++) {
                  $('.typingBox19').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=20;
      }
  }function changeDisabled20(){
      if(num1==20) {
      if(check20.checked) {
          let element40=document.getElementById('page40');
          let element41=document.getElementById('page41');
          element40.classList.add("typingBox20");
          element41.classList.add("typingBox20");
              
          
          $('.typingBox20').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox20').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox20').children().size(); i++) {
                  $('.typingBox20').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=21;
      }
  }
  function changeDisabled21(){
      if(num1==21) {
      if(check21.checked) {
          let element42=document.getElementById('page42');
          let element43=document.getElementById('page43');
          element42.classList.add("typingBox21");
          element43.classList.add("typingBox21");
              
          
          $('.typingBox21').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox21').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox21').children().size(); i++) {
                  $('.typingBox21').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=22;
      }
  }
      function changeDisabled22(){
      if(num1==22) {
      if(check22.checked) {
          let element44=document.getElementById('page44');
          let element45=document.getElementById('page45');
          element44.classList.add("typingBox22");
          element45.classList.add("typingBox22");
              
          
          $('.typingBox22').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox22').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox22').children().size(); i++) {
                  $('.typingBox22').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=23;
      }
  }
  function changeDisabled23(){
      if(num1==23) {
      if(check9.checked) {
          let element46=document.getElementById('page46');
          let element47=document.getElementById('page47');
          element46.classList.add("typingBox23");
          element47.classList.add("typingBox23");
              
          
          $('.typingBox23').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox23').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox23').children().size(); i++) {
                  $('.typingBox23').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=24;
      }
  }function changeDisabled24(){
      if(num1==24) {
      if(check24.checked) {
          let element48=document.getElementById('page48');
          let element49=document.getElementById('page49');
          element48.classList.add("typingBox24");
          element49.classList.add("typingBox24");
              
          
          $('.typingBox24').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox24').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox24').children().size(); i++) {
                  $('.typingBox24').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=25;
      }
  }function changeDisabled25(){
      if(num1==25) {
      if(check25.checked) {
          let element50=document.getElementById('page50');
          let element51=document.getElementById('page51');
          element50.classList.add("typingBox25");
          element51.classList.add("typingBox25");
              
          
          $('.typingBox25').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox25').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox25').children().size(); i++) {
                  $('.typingBox25').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=26;
      }
  }function changeDisabled26(){
      if(num1==26) {
      if(check26.checked) {
          let element52=document.getElementById('page52');
          let element53=document.getElementById('page53');
          element52.classList.add("typingBox26");
          element53.classList.add("typingBox26");
              
          
          $('.typingBox26').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox26').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox26').children().size(); i++) {
                  $('.typingBox26').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=27;
      }
  }function changeDisabled27(){
      if(num1==27) {
      if(check9.checked) {
          let element54=document.getElementById('page54');
          let element55=document.getElementById('page55');
          element54.classList.add("typingBox27");
          element55.classList.add("typingBox27");
              
          
          $('.typingBox27').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox27').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox27').children().size(); i++) {
                  $('.typingBox27').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=28;
          }
  }function changeDisabled28(){
      if(num1==28) {
      if(check28.checked) {
          let element56=document.getElementById('page56');
          let element57=document.getElementById('page57');
          element56.classList.add("typingBox28");
          element57.classList.add("typingBox28");
              
          
          $('.typingBox28').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox28').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox28').children().size(); i++) {
                  $('.typingBox28').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=29;
      }
  }function changeDisabled29(){
      if(num1==29) {
      if(check29.checked) {
          let element58=document.getElementById('page58');
          let element59=document.getElementById('page59');
          element58.classList.add("typingBox29");
          element59.classList.add("typingBox29");
              
          
          $('.typingBox29').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox29').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox29').children().size(); i++) {
                  $('.typingBox29').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=30;
          }
  }function changeDisabled30(){
      if(num1==30) {
      if(check30.checked) {
          let element60=document.getElementById('page60');
          let element61=document.getElementById('page61');
          element60.classList.add("typingBox30");
          element61.classList.add("typingBox30");
              
          
          $('.typingBox30').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox30').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox30').children().size(); i++) {
                  $('.typingBox30').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=31;
      }
  }function changeDisabled31(){
      if(num1==31) {
      if(check31.checked) {
          let element62=document.getElementById('page62');
          let element63=document.getElementById('page63');
          element62.classList.add("typingBox31");
          element63.classList.add("typingBox31");
              
          
          $('.typingBox31').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox31').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox31').children().size(); i++) {
                  $('.typingBox31').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=32;
      }
  }function changeDisabled32(){
      if(num1==32) {
      if(check9.checked) {
          let element64=document.getElementById('page64');
          let element65=document.getElementById('page65');
          element64.classList.add("typingBox32");
          element65.classList.add("typingBox32");
              
          
          $('.typingBox32').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox32').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox32').children().size(); i++) {
                  $('.typingBox32').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=33;
      }
  }function changeDisabled33(){
      if(num1==33) {
      if(check33.checked) {
          let element66=document.getElementById('page66');
          let element67=document.getElementById('page67');
          element66.classList.add("typingBox33");
          element67.classList.add("typingBox33");
              
          
          $('.typingBox33').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox33').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox33').children().size(); i++) {
                  $('.typingBox33').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=34;
      }
  }function changeDisabled34(){
      if(num1==34) {
      if(check34.checked) {
          let element68=document.getElementById('page68');
          let element69=document.getElementById('page69');
          element68.classList.add("typingBox34");
          element69.classList.add("typingBox34");
              
          
          $('.typingBox34').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox34').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox34').children().size(); i++) {
                  $('.typingBox34').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=35;
      }
  }function changeDisabled35(){
      if(num1==35) {
      if(check35.checked) {
          let element70=document.getElementById('page70');
          let element71=document.getElementById('page71');
          element70.classList.add("typingBox35");
          element71.classList.add("typingBox35");
              
          
          $('.typingBox35').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox35').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox35').children().size(); i++) {
                  $('.typingBox35').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=36;
      }
      }
  function changeDisabled36(){
      if(num1==36) {
      if(check36.checked) {
          let element72=document.getElementById('page72');
          let element73=document.getElementById('page73');
          element72.classList.add("typingBox36");
          element73.classList.add("typingBox36");
              
          
          $('.typingBox36').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox36').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox36').children().size(); i++) {
                  $('.typingBox36').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=37;
      }
      }
  function changeDisabled37(){
      if(num1==37) {
      if(check37.checked) {
          let element74=document.getElementById('page74');
          let element75=document.getElementById('page75');
          element74.classList.add("typingBox37");
          element75.classList.add("typingBox37");
              
          
          $('.typingBox37').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox37').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox37').children().size(); i++) {
                  $('.typingBox37').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=38;
      }
  }function changeDisabled38(){
      if(num1==38) {
      if(check38.checked) {
          let element76=document.getElementById('page76');
          let element77=document.getElementById('page77');
          element76.classList.add("typingBox38");
          element77.classList.add("typingBox38");
              
          
          $('.typingBox38').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox38').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox38').children().size(); i++) {
                  $('.typingBox38').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=39;
      }
  }function changeDisabled39(){
      if(num1==39) {
      if(check39.checked) {
          let element78=document.getElementById('page78');
          let element79=document.getElementById('page79');
          element78.classList.add("typingBox39");
          element79.classList.add("typingBox39");
              
          
          $('.typingBox39').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox39').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox39').children().size(); i++) {
                  $('.typingBox39').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=40;
      }
  }function changeDisabled40(){
      if(num1==40) {
      if(check40.checked) {
          let element80=document.getElementById('page80');
          let element81=document.getElementById('page81');
          element80.classList.add("typingBox40");
          element81.classList.add("typingBox40");
              
          
          $('.typingBox40').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox40').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox40').children().size(); i++) {
                  $('.typingBox40').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=41;
      }
  }function changeDisabled41(){
      if(num1==41) {
      if(check9.checked) {
          let element82=document.getElementById('page82');
          let element83=document.getElementById('page83');
          element82.classList.add("typingBox41");
          element83.classList.add("typingBox41");
              
          
          $('.typingBox41').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox41').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox41').children().size(); i++) {
                  $('.typingBox41').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=42;
      }
  }function changeDisabled42(){
      if(num1==42) {
      if(check42.checked) {
          let element85=document.getElementById('page85');
          let element84=document.getElementById('page84');
          element85.classList.add("typingBox42");
          element84.classList.add("typingBox42");
              
          
          $('.typingBox42').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox42').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox42').children().size(); i++) {
                  $('.typingBox42').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=43;
      }
  }function changeDisabled43(){
      if(num1==43) {
      if(check43.checked) {
          let element87=document.getElementById('page87');
          let element86=document.getElementById('page86');
          element87.classList.add("typingBox43");
          element86.classList.add("typingBox43");
              
          
          $('.typingBox43').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox43').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox43').children().size(); i++) {
                  $('.typingBox43').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=44;
      }
  }function changeDisabled44(){
      if(num1==44) {
      if(check44.checked) {
          let element88=document.getElementById('page88');
          let element89=document.getElementById('page89');
          element88.classList.add("typingBox44");
          element89.classList.add("typingBox44");
              
          
          $('.typingBox44').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox44').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox44').children().size(); i++) {
                  $('.typingBox44').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=45;
      }
  }function changeDisabled45(){
      if(num1==45) {
      if(check45.checked) {
          let element90=document.getElementById('page90');
          let element91=document.getElementById('page91');
          element90.classList.add("typingBox45");
          element91.classList.add("typingBox45");
              
          
          $('.typingBox45').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox45').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox45').children().size(); i++) {
                  $('.typingBox45').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=46;
          }
          
      }
      function changeDisabled46(){
      if(num1==46) {
      if(check46.checked) {
          let element92=document.getElementById('page92');
          let element93=document.getElementById('page93');
          element92.classList.add("typingBox46");
          element93.classList.add("typingBox46");
              
          
          $('.typingBox46').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox46').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox46').children().size(); i++) {
                  $('.typingBox46').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=47;
      }
  }
      function changeDisabled47(){
      if(num1==47) {
      if(check47.checked) {
          let element94=document.getElementById('page94');
          let element95=document.getElementById('page95');
          element94.classList.add("typingBox47");
          element95.classList.add("typingBox47");
              
          
          $('.typingBox47').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox47').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox47').children().size(); i++) {
                  $('.typingBox47').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=48;
      }
  }function changeDisabled48(){
      if(num1==48) {
      if(check48.checked) {
          let element96=document.getElementById('page96');
          let element97=document.getElementById('page97');
          element96.classList.add("typingBox48");
          element97.classList.add("typingBox48");
              
          
          $('.typingBox48').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox48').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox48').children().size(); i++) {
                  $('.typingBox48').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=49;
      }
  }function changeDisabled49(){
      if(num1==49) {
      if(check49.checked) {
          let element98=document.getElementById('page98');
          let element99=document.getElementById('page99');
          element98.classList.add("typingBox49");
          element99.classList.add("typingBox49");
              
          
          $('.typingBox49').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox49').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox49').children().size(); i++) {
                  $('.typingBox49').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=50;
      }
  }function changeDisabled50(){
      if(num1==50) {
      if(check50.checked) {
          let element100=document.getElementById('page100');
          let element101=document.getElementById('page101');
          element100.classList.add("typingBox50");
          element101.classList.add("typingBox50");
              
          
          $('.typingBox50').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox50').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox50').children().size(); i++) {
                  $('.typingBox50').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=51;
      }
  }function changeDisabled51(){
      if(num1==51) {
      if(check51.checked) {
          let element102=document.getElementById('page102');
          let element103=document.getElementById('page103');
          element102.classList.add("typingBox51");
          element103.classList.add("typingBox51");
              
          
          $('.typingBox51').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox51').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox51').children().size(); i++) {
                  $('.typingBox51').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=52;
      }
  }
  function changeDisabled52(){
      if(num1==52) {
      if(check52.checked) {
          let element104=document.getElementById('page104');
          let element105=document.getElementById('page105');
          element104.classList.add("typingBox52");
          element105.classList.add("typingBox52");
              
          
          $('.typingBox52').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox52').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox52').children().size(); i++) {
                  $('.typingBox52').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=53;
      }
  }
  function changeDisabled53(){
      if(num1==53) {
      if(check53.checked) {
          let element106=document.getElementById('page106');
          let element107=document.getElementById('page107');
          element106.classList.add("typingBox53");
          element107.classList.add("typingBox53");
              
          
          $('.typingBox53').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox53').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox53').children().size(); i++) {
                  $('.typingBox53').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=54;
      }
  }
  function changeDisabled54(){
      if(num1==54) {
      if(check54.checked) {
          let element108=document.getElementById('page108');
          let element109=document.getElementById('page109');
          element108.classList.add("typingBox54");
          element109.classList.add("typingBox54");
              
          
          $('.typingBox54').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox54').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox54').children().size(); i++) {
                  $('.typingBox54').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=55;
      }
  }
  function changeDisabled55(){
      if(num1==55) {
      if(check55.checked) {
          let element110=document.getElementById('page110');
          let element111=document.getElementById('page111');
          element110.classList.add("typingBox55");
          element111.classList.add("typingBox55");
              
          
          $('.typingBox55').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox55').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox55').children().size(); i++) {
                  $('.typingBox55').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=56;
      }
  }
  function changeDisabled56(){
      if(num1==56) {
      if(check56.checked) {
          let element112=document.getElementById('page112');
          let element113=document.getElementById('page113');
          element112.classList.add("typingBox56");
          element113.classList.add("typingBox56");
              
          
          $('.typingBox56').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox56').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox56').children().size(); i++) {
                  $('.typingBox56').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=57;
      }
  }
  function changeDisabled57(){
      if(num1==57) {
      if(check57.checked) {
          let element114=document.getElementById('page114');
          let element115=document.getElementById('page115');
          element114.classList.add("typingBox57");
          element115.classList.add("typingBox57");
              
          
          $('.typingBox57').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox57').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox57').children().size(); i++) {
                  $('.typingBox57').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=58;
      }
  }function changeDisabled58(){
      if(num1==58) {
      if(check58.checked) {
          let element116=document.getElementById('page116');
          let element117=document.getElementById('page117');
          element116.classList.add("typingBox58");
          element117.classList.add("typingBox58");
              
          
          $('.typingBox58').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
              }
          });
          // ここから一文字ずつフェードインさせる記述
          $('.typingBox58').css({'opacity':1});
              for (var i = 0; i <= $('.typingBox58').children().size(); i++) {
                  $('.typingBox58').children('span:eq('+i+')').delay(typTime*i).animate({'opacity':1},fadeTime);
              };	
          }
                      num1=59;
      }
  }function changeDisabled59(){
      if(num1==59) {
      if(check59.checked) {
          let element118=document.getElementById('page118');
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
  