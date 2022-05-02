const btt=document.querySelector('#back-to-top')
window.addEventListener('scroll',()=>{
    let scrollTop = window.scrollY;
    // 조건에 따라 보이는 클래스를 추가/삭제
    // scrollTop 값이 300보다 클때
    // scrollTop 값이 300미만일 때 숨겨주세요.
    if(scrollTop>300){
        // btt.className='visible';
        btt.classList.add('visible');
        
    }
    else{
        btt.classList.remove('visible');
    }
},false)

btt.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(btt.getAttribute('href')).scrollIntoView({behavior:'smooth'});
})

/* ---------------------
콘텐츠 3 - 맞춤관광
--------------------- */
var button=$('#content3 .box1 li')
button.hover(
    function(){
        $(this).addClass('on')
    }, 
    function(){
        $(this).removeClass('on')
    })
