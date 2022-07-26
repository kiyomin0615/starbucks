const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// window는 하나의 브라우저 창(탭) 객체
// _.throttle(함수, 시간): 함수 실행 횟수 제한
// gsap.to(요소, 지속시간, 애니메이션옵션): 애니메이션 적용
window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        // 배지 숨기기
        gsap.to(badgeEl, 0.6, {
            opacity: 0,
            display: 'none'
        });
        // 버튼 보이기
        gsap.to(toTopEl, 0.2, {
            x: 0
        })
    } else {
        // 배지 보이기
        gsap.to(badgeEl, 0.6, {
            opacity: 1,
            display: 'block'
        });
        // 버튼 숨기기
        gsap.to(toTopEl, 0.2, {
            x: 100
        })
    }
}, 300));

toTopEl.addEventListener('click', function () {
    gsap.to(window, 0.7, {
        scrollTo: 0
    })
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * 0.7, // 0.7s 1.4s 2.1s 2.8s
        opacity: 1,
    });
});

// Swiper(선택자, 슬라이드옵션)
new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    autoplay: true,
    loof: true
});
new Swiper('.promotion .swiper', {
    direction: 'horizontal',
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데
    loop: true,
    // autoplay: {
    //     delay: 5000 // ms
    // }
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소
        clickable: true // 페이지 번호 요소가 클릭(상호작용) 가능한지 여부
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});
new Swiper('.awards .swiper', {
    direction: 'horizontal',
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let promotionHidden = false;

promotionToggleBtn.addEventListener('click', function () {
    promotionHidden = !promotionHidden; // true, false 전환
    if (promotionHidden) {
        // 숨김 처리!
        promotionEl.classList.add('hidden');
    } else {
        // 보임 처리!
        promotionEl.classList.remove('hidden');
    }
});

function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject (selector, delay, size) {
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1, // 무한 반복
        yoyo: true, // 반복을 위한 애니메이션 역재생
        ease: Power1.easeInOut,
        delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, // 보여짐 여부를 감시할 요소 지정
            trieggerHook: 0.8
        })
        .setClassToggle(spyEl, 'show') // 감시할 요소에 show 클래스 토글
        .addTo(new ScrollMagic.Controller());
});