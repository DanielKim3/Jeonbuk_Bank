$(window).scroll(function () {
  var sct = $(window).scrollTop(),
    skill = $("#skill").offset();
  if (sct > skill.top - 150) {
    var leftMain = $(".leftMain>div");

    leftMain.each(function () {
      var progressWrap = $(this).find(".progress_bar");
      var progressBar = progressWrap.find(".bar");
      var progressText = progressWrap.find(".num");
      var progressNum = progressText.attr("data-num");

      //움직일대상.animate({속성:속성값},시간); - 애니메이트주는방법
      progressBar.animate(
        {
          width: progressNum + "%",
        },
        2000
      );

      //setInterval(할일, 시간);
      // % = 움직일려고 하는 넓이/전체넓이 * 100
      setInterval(textNum, 1000 / 10);

      function textNum() {
        var currentWidth = (progressBar.width() / progressWrap.width()) * 100;
        progressText.text(Math.ceil(currentWidth) + "%");
      }
    });
  }
});

/* 
 $(documnet).ready(function(){


 
 $list.on('click',function(event){
    event.preventDefault();
    nowIdx = $list.index(this);

    $list.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

    $listImg.fadeOut();
    $listImg.eq(nowIdx).fadeIn();
  });


  $viewOpen.on('click',function(event){

    event.preventDefault();
    var src = $(this).attr('href');

    $viewImg.find('div').css({
      backgroundImage : 'url('+src+')'
    });

    $viewImg.parent().fadeIn();
  });

  $viewClose.on('click',function(event){
    event.preventDefault();
    $viewImg.scrollTop(0)
    $view.fadeOut();
  });
  
  $view.on('click',function(){
    $viewImg.scrollTop(0)
    $view.fadeOut();
  }); 
 }); 
   */

$(function () {
  var tab = $(".mnu li "),
    tabPannel = $(".tabs-pannel");

  //링크를 클릭하면 할 일
  tab.click(function (e) {
    e.preventDefault();

    tabPannel.hide();

    var $target = $(this);
    var $i = $target.index();

    tabPannel.eq($i).show();
  });
});

$(document).ready(function () {
  $("#projects .container .mnu li a").on("click", function () {
    // 해당 요소를 클릭하는 내 자신의 index 번호를 가져온다. [0], [1]
    const num = $("#projects .container .mnu li a").index($(this));
    // 기존에 적용되어 있는 on class 삭제
    $("#projects .container .mnu li").removeClass("on");
    $("#projects .container .view .monitor").removeClass("on");
    // 다음 요소 클릭시 on class 추가
    $("#projects .container .mnu li:eq(" + num + ")").addClass("on");
    $("#projects .container .view .monitor:eq(" + num + ")").addClass("on");
  });
});

/* 모니터에 호버하면 내려감 */
$(".monitor-wrap").hover(
  function () {
    var ah = $(this).innerHeight();
    var img = $(this).find("img");
    var imgh = img.innerHeight();

    img.stop().animate({ top: ah - imgh }, 3000);
  },
  function () {
    var img = $(this).find("img");
    img.stop().animate({ top: 0 }, 3000);
  }
);
