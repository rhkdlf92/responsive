$(window).on("load", function(){

  let $img = $(".main-visual ul li .main-image"),
      $text = $(".main-visual ul li .main-text"),
      $btn = $(".main-btn a"),
      oldImg=0,
      newImg=0,
      oldText=0,
      newText=0,
      count = $img.length;

  // ✅ 초기 배경색
  $(".main-visual").css("background-color", "#d9f0e8");

  // ✅ 첫 슬라이드 즉시 표시 (딜레이 제거)
  $img.eq(0).addClass("imgVisible");
  $text.eq(0).addClass("textVisible");
  $btn.eq(0).addClass("active");
  $(".main-visual ul li").eq(0).addClass("active");

  // --- 기존 코드 ---
  function changeImg(newImg){ 
    if(oldImg != newImg){
      $btn.eq(oldImg).removeClass("active");
      $btn.eq(newImg).addClass("active");
      $img.eq(oldImg).removeClass("imgVisible");
      $img.eq(newImg).addClass("imgVisible");
      
      $(".main-visual ul li").eq(oldImg).removeClass("active");
      $(".main-visual ul li").eq(newImg).addClass("active");
    }
    oldImg = newImg;
  };

  function changeText(newText){ 
    if(oldText != newText){
      $text.eq(oldText).removeClass("textVisible");
      $text.eq(newText).addClass("textVisible");
    };
    oldText = newText;
  };

  function autoImg(){
    newImg++;
    if(newImg>count-1){ newImg=0; }
    changeImg(newImg);
  };
  function autoText(){
    newText++;
    if(newText>count-1){ newText=0; }
    changeText(newText);
  };

  let timerImg = setInterval(autoImg, 4000); 
  let timerText = setInterval(autoText, 4000);

  $btn.click(function(){
    newImg=$(this).index();
    changeImg(newImg);
    newText=$(this).index();
    changeText(newText);
  });

  $("main").mouseenter(function(){
    clearInterval(timerImg);
    clearInterval(timerText);
  }).mouseleave(function(){
    timerImg = setInterval(autoImg,4000); 
    timerText = setInterval(autoText,4000);
  });

});