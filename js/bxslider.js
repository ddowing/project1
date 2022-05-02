$(function () {
  $(".bxslider").bxSlider({
    mode: "horizontal",
    speen: 5000,
    slideWidth: 640,
    nextText: '<i class="fa-solid fa-chevron-right"></i>',
    prevText: '<i class="fa-solid fa-chevron-left"></i>',
  });

  /*
  // pagers=페이저 버튼을 넣을 변수(빈 그릇)
  var pagers = "";
  // pagers를 넣을 html 요소 (..custom_pager)
  var pagersWrap = $(".photo-list-wrap .custom-pager");
  // 슬라이더들
  // (불러온 이유: 슬라이더 개수를 알고 싶고, 개수를 알아야 슬라이더 개수만큼 페이저 버튼을 생성할 수 있으므로)
  var mySliders = $(".photo-list-wrap .photo-list-slider");
  // 대상.each(함수)
  mySliders.each(function (i, j) {
    if (i < mySliders.length - 3) {
      pagers += "<span>" + (i+1) + "</span>";
    }
    pagersWrap.html(pagers);
  });
  // 페이저 버튼을 클릭하면 할 일
  $(".custom-pager span").click(function () {
    var idx = $(this).index();
    customeSlide.goToSlide(idx);
  });
  */
}); 
