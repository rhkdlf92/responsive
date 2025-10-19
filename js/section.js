document.addEventListener("DOMContentLoaded", function () {
  
  //section1
  const topBoxes = document.querySelectorAll(".box-top-inner");
  const ulLists = document.querySelectorAll(".recommend-box-bottom ul");
  const bottomBox = document.querySelector(".recommend-box-bottom");
  let currentIndex = 0;

  topBoxes[0].classList.add("active");
  ulLists[0].classList.add("active");

  topBoxes.forEach((box, index) => {
    box.addEventListener("mouseenter", function () {
      if (window.innerWidth > 767) {
        topBoxes.forEach(b => b.classList.remove("active"));
        ulLists.forEach(ul => ul.classList.remove("active"));
        box.classList.add("active");
        ulLists[index].classList.add("active");
        currentIndex = index;
      }
    });
  });

  bottomBox.addEventListener("mouseleave", function () {
    if (window.innerWidth > 767) {
      ulLists.forEach(ul => ul.classList.remove("active"));
      ulLists[currentIndex].classList.add("active");
    }
  });

  function init() {
    const winW = window.innerWidth;
    if (winW <= 767) {
      topBoxes.forEach(b => b.classList.remove("active"));
      ulLists.forEach(ul => ul.classList.remove("active"));
      topBoxes[0].classList.add("active");
      ulLists[0].classList.add("active");
    } else {
    }
  }

  init();

  window.addEventListener("resize", init);

  //section2
  const timeButtons = document.querySelectorAll(".tdeal");
  const dealLists = document.querySelectorAll(".time-box ul");

  timeButtons[0].classList.add("active");
  dealLists[0].classList.add("active");

  function handleTimeDealClick(e) {
    e.preventDefault();
    const winW = window.innerWidth;

    if (winW >= 768 && winW <= 1199) return;

    timeButtons.forEach(b => b.classList.remove("active"));
    dealLists.forEach(ul => ul.classList.remove("active"));

    const index = Array.from(timeButtons).indexOf(e.currentTarget);
    timeButtons[index].classList.add("active");
    dealLists[index].classList.add("active");
  }

  timeButtons.forEach(btn => {
    btn.addEventListener("click", handleTimeDealClick);
  });

});


//footer
$(document).ready(function () {
  const breakpoint = 767;

  $(".policy-info-tit").click(function (e) {
    e.preventDefault();

    if ($(window).width() <= breakpoint) {
      const $policyInfo = $(this).next(".policy-info");
      const $icon = $(this).find(".material-symbols-outlined");

      $policyInfo.toggleClass("active");
      $icon.toggleClass("flip");
    }
  });

  $(window).on("resize", function () {
    if ($(window).width() > breakpoint) {
      $(".policy-info").addClass("active");
      $(".policy-info-tit .material-symbols-outlined").removeClass("flip");
    } else {
      $(".policy-info").removeClass("active");
      $(".policy-info-tit .material-symbols-outlined").removeClass("flip");
    }
  }).trigger("resize");


  //scroll animation

    let ani = $(".ani");

    $.fn.scrollMoving = function(){
    let elementTop = $(this).offset().top; 
    let elementBottom = elementTop + $(this).outerHeight(); 
    let viewportTop = $(window).scrollTop(); 
    let viewportBottom = viewportTop + $(window).height(); 
    return (viewportTop < elementBottom) && (elementTop < viewportBottom);
  };
  $(window).on('load scroll',function(){
    
    ani.each(function(){
      if($(this).scrollMoving()){
        $(this).addClass("moving");
      }else{
        $(this).removeClass("moving");
      };
    });
  });

});

