const btnNavbar = document.querySelector('.menu__hamburger')
const barMenu = document.querySelectorAll('.menu__hamburger span')
const barMenu1 = document.querySelector('.menu__hamburger span:nth-last-child(1)')
const barMenu2 = document.querySelector('.menu__hamburger span:nth-last-child(2)')
const barMenu3 = document.querySelector('.menu__hamburger span:nth-last-child(3)')
const menuMobile = document.querySelector('.navbar__links-containerMobile')
const closeIconMenu = document.querySelector('.close-menuHamburger')
const body = document.querySelector('body')
const navbar = document.querySelector('.navbar__Container')


navbar.dataset.status = 'noScroll'


btnNavbar.addEventListener('click', showCloseMenu)
closeIconMenu.addEventListener('click', showCloseMenu)


function showCloseMenu() {
    if (btnNavbar.dataset.openmenu === 'false') {
        barMenu1.style.transform = 'rotate(-45deg) translate(-3px, -3px)'
        barMenu2.style.opacity = '0'
        barMenu2.style.transform = 'rotate(-45deg) translate(-7px, 7px)'
        barMenu3.style.transform = 'rotate(45deg) translate(-2px, -1px)'
        body.style.overflowY = 'hidden'
        barMenu.forEach(bar => {
            // bar.style.background = '#ffffff'
        });
        menuMobile.style.display = 'block'
        menuMobile.style.postion = 'absolute' 
        menuMobile.style.zIndex = '99'
        navbar.dataset.status === 'noScroll' ? menuMobile.style.top = '0px' : menuMobile.style.top = '0px'
        // menuMobile.style.top = '0px'
        btnNavbar.dataset.openmenu = 'true'
    } else {
        body.style.overflowY = 'auto'

        barMenu.forEach(bar => {
            bar.style.transform = 'none'
        });
        menuMobile.classList.remove('fadeInLeft')
        menuMobile.classList.add('fadeOutLeft')
        setTimeout(() => {
            menuMobile.style.display = 'none'
            menuMobile.classList.remove('fadeOutLeft')
            btnNavbar.dataset.openmenu = 'false'
            barMenu2.style.opacity = '1'

        }, 150);

    }
}


window.addEventListener('load', setup);

const get = document.querySelector.bind(document);
const query = document.querySelector.bind(document);
const getAll = document.querySelectorAll.bind(document)

function setup() {
    console.log('aksdnfbhjasbdjh');

    let modalRoot = get('.modalContact');
    let buttons = getAll('.btnContact');
    let modal = query('.banner__form-modal');
    let closeModal = get('.closeIcon__modal')

    modalRoot.addEventListener('click', rootClick);
    //   button.addEventListener('click', openModal);
    buttons.forEach(button => button.addEventListener('click', openModal))
    modal.addEventListener('click', modalClick);
    closeModal.addEventListener('click',rootClick)

    function rootClick() {
        modalRoot.classList.remove('visible');
        // document.body.style.overflow = 'auto'
        // console.log('click');
    }

    function openModal() {
        modalRoot.classList.add('visible');
        // document.body.style.overflow = 'hidden'
    }

    function modalClick(e) {
        //   console.log('cliiiiiick');
        // e.preventDefault();
        e.stopPropagation();
        // e.stopImmediatePropagation();
        return false;
    }

}

/* ----------------mostrar quitar elelemntos del dom segun las campañas */
const suiteParams = window.sharedObj || ''
const campainID = suiteParams.campaignId || "";
const campainsSinNumeroContacto = [
    'SKY3_16M_PREPAGO',
    'SKY3_15M_COMBOS',
    'VETV3_06M_PAQUETES',
    'VETV3_01M_EXACTA',
    'SKY3_10M_URL',
    'SKY3_07M_TELEFONO',
    'SKY3_14M_SPORTS',
    'VETV3_04M_GEO',
    'SKY3_13M_BLUETELECOMM+GEN',
    'SKY3_08M_PRECIO',
    'VETV3_08M_CONTACTO',
    'SKY3_05M_GEO',
    'SKY3_06M_TV',
    'SKY3_04M_GEN',
    'SKY3_11M_PAQUETES',
    'VETV3_07M_TV',
    'VETV3_09M_PRECIOS',
    'VETV3_10M_GEN',
    'VETV3_02M_FRASE',
    'SKY3_09_GEN_TV',
    'VETV3_03M_URL',
    'SKY3_12M_BLUETELECOMM',
    'SKY3_03M_FRASE'
]
const navbarAtencionClientesButton = [...document.querySelectorAll('.contact__client')]



if(esCampainValida(campainsSinNumeroContacto,campainID)){
    hiddeContacts(navbarAtencionClientesButton)
}


function hiddeContacts(arrayContact){
    console.log(arrayContact);
    arrayContact.forEach(contactElement => contactElement.setAttribute('style','display:none!important'))
}



function esCampainValida(arrayCampain, campainID) {
    return arrayCampain.includes(campainID)
}
