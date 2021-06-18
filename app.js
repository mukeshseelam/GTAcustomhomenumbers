const navbar = document.getElementById('navbar');
navbar.classList.add('top');
let scrolled = false;
window.onscroll = function() {
    if (window.pageYOffset > 20) {
        navbar.classList.remove('top');
        if (!scrolled) {
            navbar.style.transform = 'translateY(0px)';
            navbar.style.transition = 'all .5s ease';
        }
        setTimeout(() => {
            navbar.style.transform = 'translateY(0)';
            navbar.style.transition = 'all .2s ease';
            navbar.style.boxShadow = '1px 0px 2px rgba(102, 102, 102, .5)';
            scrolled = true;
        }, 200);
    } else {
        navbar.classList.add('top');
        scrolled = false;
    }
}




const get_mobile_menu_open = document.getElementById('list-items-mobile-view');
const mobile_burger1 = document.getElementById('r1');
const mobile_burger2 = document.getElementById('r2');

document.getElementById('toggle-open').addEventListener('click', (e) => {

    get_mobile_menu_open.style.height = '100%';


    document.body.style.overflow = 'hidden';

    get_mobile_menu_open.classList.remove('close-animation')
    get_mobile_menu_open.classList.add('open-animation');
    mobile_burger1.style.transform = 'translateY(6px) rotate(-45deg)';
    mobile_burger1.style.transition = "all 1s ease";
    mobile_burger2.style.transform = 'translateY(-7px) rotate(45deg)';
    mobile_burger2.style.transition = "all 1s ease";
    document.getElementById('toggle-open').style.display = 'none';
    document.getElementById('toggle-close').style.display = 'block';

    e.preventDefault();
})

document.getElementById('toggle-close').addEventListener('click', (e) => {
    get_mobile_menu_open.classList.remove('open-animation')
    get_mobile_menu_open.classList.add('close-animation');
    document.body.style.overflow = 'scroll';
    get_mobile_menu_open.style.height = '0%';
    mobile_burger1.style.transform = 'translateY(0px) rotate(0deg)';
    mobile_burger1.style.transition = "all 1s ease";
    mobile_burger2.style.transform = 'translateY(0px) rotate(0deg)';
    mobile_burger2.style.transition = "all 1s ease";
    document.getElementById('toggle-open').style.display = 'block';
    document.getElementById('toggle-close').style.display = 'none';
    console.log('working')
    e.preventDefault();
})