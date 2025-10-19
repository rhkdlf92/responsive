$(function(){

  //각 메인메뉴 호버시
  $(".main").hover(function(){
    $(this).find(".sub").stop().slideDown();
  }, function(){
    $(this).find(".sub").stop().slideUp();
  });

  //햄버거 버튼
  const HTML = $("html");
  const BODY = $("body");
  const trBtn = $(".trigger");
  const modal = $(".tr-modal");
  const closeBtn = $(".tr-modal-top .close-btn");
  const goTopBtn = $(".goto-top");

  trBtn.on("click", function(e){
    e.preventDefault();

  const winW = $(window).width();

    if(winW <= 1199){
      modal.animate({ left: "0" }, 300);
      HTML.css("overflow", "hidden");
      BODY.css("overflow", "hidden");
    } else {
      BODY.toggleClass("trOpen");
    }
  });

  closeBtn.on("click", function(e){
    e.preventDefault();
    modal.animate({ left: "-120%" }, 300, function(){
      HTML.css("overflow", "auto");
      BODY.css("overflow", "auto");
    });
  });


  //태블릿 서브메뉴 토글
  $(".tab-main > a").on("click", function(e){
    e.preventDefault();

  $(".tab-main > a").not(this).removeClass("active").next(".tab-sub").slideUp(300);

  $(this).toggleClass("active");
  $(this).next(".tab-sub").stop().slideToggle(300);
  });


  //scroll-header
  $(window).on("scroll", function(){

    let scroll = $(this).scrollTop();
    
    if(scroll > 60){
      BODY.addClass("scrolling");
      goTopBtn.addClass("On")
    }else{
      BODY.removeClass('scrolling');
      goTopBtn.removeClass("On")
    };
  });
});
