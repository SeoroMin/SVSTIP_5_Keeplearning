// 버튼 토글 코드
const togg = document.querySelector('.navbar_toggle')
const menu = document.querySelector('.navbar_menu')
const info = document.querySelector('.navbar_info')

togg.addEventListener('click', () => {
    menu.classList.toggle('active');
    info.classList.toggle('active');
});