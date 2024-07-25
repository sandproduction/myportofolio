const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')
const logo = document.querySelector('.logo')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

window.onscroll=function(){
    const header=document.querySelector('header')
    const fixedNav = header.offsetTop

    console.log(fixedNav)
    console.log(window.pageYOffset)
    console.log(window.innerHeight)

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed')
    }else{
        header.classList.remove('navbar-fixed')
    }
}

function getBackgroundColor(element) {
    return window.getComputedStyle(element, null).getPropertyValue('background-color');
}

function getLuminance(rgb) {
    let rgbArray = rgb.match(/\d+/g).map(Number);
    return 0.299 * rgbArray[0] + 0.587 * rgbArray[1] + 0.114 * rgbArray[2];
}

function setTextColorBasedOnBackground(element, backgroundColor) {
    let luminance = getLuminance(backgroundColor);

    if (luminance < 128) {
        element.classList.remove('text-primary');
        element.classList.add('text-white');
    } else {
        element.classList.remove('text-white');
        element.classList.add('text-primary');
    }
}

function updateLogoTextColor() {
    let logoElement = document.querySelector('.logo');
    let sections = document.querySelectorAll('section');
    let logoRect = logoElement.getBoundingClientRect();
    let foundBackground = false;

    sections.forEach(section => {
        let sectionRect = section.getBoundingClientRect();
        if (logoRect.top >= sectionRect.top && logoRect.bottom <= sectionRect.bottom) {
            let backgroundColor = getBackgroundColor(section);
            console.log(backgroundColor)
            setTextColorBasedOnBackground(logoElement, backgroundColor);
            foundBackground = true;
        }
    });

    // Jika tidak ada background yang ditemukan (misalnya di awal halaman)
    if (!foundBackground) {
        let initialBackgroundColor = getBackgroundColor(document.body); // Asumsi warna background body
        if (initialBackgroundColor === 'rgba(0, 0, 0, 0)') {
            initialBackgroundColor = 'rgb(255, 255, 255)'; // Asumsi latar belakang putih jika transparan
        }
        setTextColorBasedOnBackground(logoElement, initialBackgroundColor);
    }
}

window.addEventListener('scroll', updateLogoTextColor);
window.addEventListener('load', updateLogoTextColor);
