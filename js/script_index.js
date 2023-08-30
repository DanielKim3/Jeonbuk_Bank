//컨텐츠2 이미지 슬라이드
let moving = $(".slide-track >.full-track"),
  imgWidth = moving.find(".img-slide").width(),
  setIntervalId = undefined;
function left() {
  moving.find(".img-slide:last").insertBefore(moving.find(".img-slide:first"));
  moving.css({ left: -imgWidth }).stop().animate({ left: 0 }, 500);
}
function right() {
  moving.animate({ left: -imgWidth }, 500, function () {
    $(this)
      .children(".img-slide:first")
      .insertAfter($(this).children(".img-slide:last"));
    $(this).css({ left: 0 });
  });
}

$(".prev-button").click(function () {
  left();
  return false;
});
$(".next-button").click(function () {
  right();
  return false;
});

//이미지 슬라이드 배너

$(function () {
  //변수지정
  let banner = $(".box-size>li"),
    button = $(".slide-button>li"),
    current = 0,
    timer = undefined;

  //슬라이드
  function imgslide() {
    timer = setInterval(function () {
      const prev = banner.eq(current);
      const prevBtn = button.eq(current);
      move(prev, 0, "-100%");
      prevBtn.removeClass("on");
      current++;
      if (current == banner.size()) {
        current = 0;
      }
      const next = banner.eq(current);
      const nextBtn = button.eq(current);
      move(next, "100%", 0);
      nextBtn.addClass("on");
    }, 4000);
  }
  function move(tg, start, end) {
    tg.css("left", start).stop().animate({ left: end }, 1000);
  }

  imgslide();

  //멈춤
  $(".article-box1").on({
    "mouseover focus": function () {
      clearInterval(timer);
    },
    "mouseout blur": function () {
      imgslide();
    },
  });

  //페이저버튼
  button.click(function () {
    let tg = $(this);
    let i = tg.index();

    button.removeClass("on");
    tg.addClass("on");

    if (current > i) {
      move2(i);
    } else {
      move1(i);
    }
  });

  function move1(i) {
    if (current == i) return;
    const currentEl = banner.eq(current);
    const nextEl = banner.eq(i);
    currentEl.css("left", "0").stop().animate({ left: "100%" }, 2000);
    nextEl.css("left", "-100%").stop().animate({ left: 0 }, 2000);
    current = i;
  }
  function move2(i) {
    if (current == i) return;
    const currentEl = banner.eq(current);
    const nextEl = banner.eq(i);
    currentEl.css("left", "0").stop().animate({ left: "100%" }, 2000);
    nextEl.css("left", "-100%").stop().animate({ left: 0 }, 2000);
    current = i;
  }
});

/* if(idx> $(".article-box1 ul li").length-6){
  $(".article-box1 ul").animate({
  "left":0
},0);



var gall  = setInterval(setInterval, 2000);
  var inter = true;
  var idx = 6;
  
   function setInterval(){
     
      $(".article-box1 box-size").animate({
        "left":-300*idx+"px"
      },300);
     $(".slide-button li").eq(idx-1).addClass("on").siblings().removeClass("on");
     idx++;
     if(idx> $(".article-box1 ul li").length-6){
       $(".article-box1 ul").animate({
         "left":0
       },0);
       idx=0;
       
     }
   }
      
   $(".article-box1 , .slide-button").hover(function(){
     if(inter==true){
       clearInterval(gall);
       inter=false;
     }
   },function(){
     if(inter==false){
       gall  = setInterval(setInterval, 2000);
       inter=true;
     }
     
   });
      
   
   $(".slide-button li").on('click',function(){
     $(this).addClass("on").siblings().removeClass("on");
     idx = $(this).index()+1;
     $(".article-box1 ul").animate({
        "left":-100*idx+"px"
      },1000);
   }
     
   }); */
