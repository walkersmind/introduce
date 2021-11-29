let currentScrollY; // 현재 스크롤 위치
const height = document.height;

const introPage = document.getElementsByClassName('introPage');
const introPageScrollY = introPage[0].offsetTop; // introPage 높이

const portfolioPage = document.getElementsByClassName('portfolioPage');
const portfolioPageScrollY = portfolioPage[0].offsetTop; // portfolioePage 높이

const informationPage = document.getElementsByClassName('informationPage');
const informationPageScrollY = informationPage[0].offsetTop; // informationPage 높이

const topArrow = document.getElementsByClassName('topArrow')[0];
const downArrow = document.getElementsByClassName('downArrow')[0];

const arrowPageDown = downArrow.addEventListener('click', function(){
    window.scroll(0, portfolioPageScrollY)
}) // 첫 페이지 클릭 이동

window.addEventListener('scroll', function(){ // pullPageScroll 기능
    currentScrollY = window.pageYOffset;

    if (currentScrollY < portfolioPageScrollY && currentScrollY > innerHeight / 5){
        window.scroll(0, portfolioPageScrollY)
        topArrow.style.display = "none";
    }
    else if (currentScrollY > portfolioPageScrollY + (innerHeight / 5 ) && currentScrollY < informationPageScrollY) {
        window.scroll(0, informationPageScrollY)
        topArrow.style.display = "none";
    }
    else if (currentScrollY >= informationPageScrollY && currentScrollY > portfolioPageScrollY){ // topArrow 이동 및 표시
        topArrow.style.display = "block";
        downArrow.style.display = "none"; 
        const arrowPageTop = topArrow.addEventListener('click', function(){
            window.scroll(0, introPageScrollY)
            topArrow.style.display = "none";
        })
    }
});

