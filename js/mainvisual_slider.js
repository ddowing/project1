/* ------------------------
0. 변수 지정
------------------------ */
var visualWrap = $('.photo-slider-wrap'),
    visual = visualWrap.find('.photo-slider>.photo'),
    visualCount = visual.length,
    leftBtn = visualWrap.find('.pager>.slider-control>.prev'),
    rightBtn = visualWrap.find('.pager>.slider-control>.next'),
    pauseBtn = visualWrap.find('.pager>.slider-control>.pause'),
    current=0,
    setIntervalId;

/* ------------------------
1. 슬라이드 위치설정 함수
------------------------ */
let visualPos = visual.each(function(i){
    $(this).css('left', i * 100 + '%');
})

/* ------------------
2. timer() 각 함수로 인덱스 번호를 전달
   1초마다 반복 실행
------------------ */
timer();
function timer(){
    setIntervalId = setInterval(function(){
        var prev = visual.eq(current);
        move(prev, 0, "-100%");
        current++;
        if (current == visual.length){
            current = 0;
        }
        var next = visual.eq(current);
        move (next, "100%", "0%");
        cnt(current);
    }, 10000)
}

/* ------------------
3. move() 위치이동 
  호출하는 쪽에서 값을 전달해줘야함
------------------ */
function move(tg, start, end){
    tg.css('left', start).stop().animate({left:end}, 1000);
}
/* ------------------
4. 배너위에 마우스오버시 일시정지 함수
------------------ */
visualWrap.hover(
    function(){
        clearInterval(setIntervalId);
    },
    function(){
        timer();
    },
);
pauseBtn.hover(
    function(){
        clearInterval(setIntervalId);
    },
    function(){
        timer();
    },
)
/* ------------------
5. 좌우(컨트롤)버튼추가
------------------ */
rightBtn.click(function(){
    var prev = visual.eq(current);
    move(prev, 0, "-100%");
    current++;
    if (current == visualCount){
        current = 0;
    }
    var next = visual.eq(current);
    move(next, "100%", "0%");
    cnt(current);
    return false;
})
leftBtn.click(function(){
    var prev = visual.eq(current);
    move(prev, 0, "100%");
    current--;
    if(current == -visualCount){
        current = 0;
    }
    var next = visual.eq(current);
    move(next, "-100%", "0%");
    cnt(current);
    return false;
})

/* ------------------
8. 카운터 동적생성
------------------ */
var counter = $(".counter > span.current");
function cnt(num) {
    counter.html(`${num + 1}`)
    if(num == -1){
        num = 9;
    }
    console.log(num)
}