const scrollFooter = document.querySelector('.footerScroll')
const scrollHeader = document.querySelector('.banner')
const telephoneBanner = document.querySelector('.telephone-banner')

// const scrollHeader2 = document.querySelector('.banner')
const navbarMenu = document.querySelector('.navbar__Container')
const barsMenuHamburguer = document.querySelectorAll('.menu__hamburger span')
const navigatorAfter = document.querySelector('li.active')

const elementForAnimate = document.querySelectorAll('.animate')

const textLinksNavbar = document.querySelectorAll('.navbar .navbar__links li a')

const contacTelephone = document.querySelector('.contacTelephone')


const options = {
    // root: document.querySelector('body'),
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5,
}

const opcionsAnimate = {
    // root: document.querySelector('body'),
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.2,
}

const optionsNavbar = {

    rootMargin: '0px 0px 0px 0px',
    threshold: 0.85
}

const observer2 = new IntersectionObserver(callback, options)

const navbarShowHidden = new IntersectionObserver(showNavbar, optionsNavbar)


const observer = new IntersectionObserver(callback, options)

observer.observe(scrollHeader)

const observerAnimate = new IntersectionObserver(addAnimate, opcionsAnimate)

elementForAnimate.forEach(element => {
    observerAnimate.observe(element)
})



function callback(entries, observer) {
    if (!entries[0].isIntersecting) {
        scrollFooter.style.position = 'sticky'
        scrollFooter.style.bottom = '0'
        scrollFooter.classList.add('zoomInDown')
        // telephoneBanner.style.display = 'flex'
        // telephoneBanner.style.position = 'fixed'
    } else {
        scrollFooter.style.position = 'relative'
        scrollFooter.classList.remove('zoomInDown')
        // telephoneBanner.style.display = 'none'
    }
}


function addAnimate(elementsAnimates, observer) {
    elementsAnimates.forEach(elementForAnimated => {
        if (elementForAnimated.isIntersecting) {
            elementForAnimated.target.style.animation =
                `${elementForAnimated.target.dataset.animation} 0.8s ${elementForAnimated.target.dataset.delay}s forwards ease-out`
        } else {
            elementForAnimated.target.style.animation = `none`
        }
    })

}



navbarShowHidden.observe(scrollHeader)

function showNavbar(entries, observer2) {
    if (!entries[0].isIntersecting) {
        // console.log('work');
        navbarMenu.style.position = 'fixed'
        navbarMenu.style.top = '0px'
        // navbarMenu.style.background = '#ffff'
        navbarMenu.style.boxShadow = '0px 3px 6px #3b455929'
        // navbarMenu.style.padding = '12px 0px'
        // navigatorAfter.style.setProperty("--active-navigator","#e86317")
        // contacTelephone.style.borderRadius = '0px 0px 56px 56px'
        // contacTelephone.style.padding = '10px'
        contacTelephone.style.top = '0px'
        barsMenuHamburguer.forEach(
            barMenuHamburguer => barMenuHamburguer.style.background = '#707070'
        )
        // textLinksNavbar.forEach(textLink => textLink.style.color = 'var(--gris-titulos)')

        navbar.dataset.status = 'Scroll'
    } else {
        navbarMenu.style.position = 'absolute'
        // navbarMenu.style.background = 'transparent'
        navbarMenu.style.top = '0px'
        navbarMenu.style.boxShadow = 'none'
        barsMenuHamburguer.forEach(barMenuHamburguer => barMenuHamburguer.style.background = '#707070')
        navbar.dataset.status = 'noScroll'
        // contacTelephone.style.borderRadius = '56px 56px 56px 56px'
        contacTelephone.style.padding = '10px'
        contacTelephone.style.top = '0'
        // textLinksNavbar.forEach(textLink => textLink.style.color = '#ffffff')
        // navigatorAfter.style.setProperty("--active-navigator","#ffffff")
    }
}