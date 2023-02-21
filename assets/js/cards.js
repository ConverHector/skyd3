const cardsVetvInternet = document.querySelector('.skyCombos__container-cards')
// console.log(cardsVetvInternet);

const cardsInfoPaquetes = [
    {
        imgTitle: 'sky-gold-logo.svg',
        color: 'gold',
        canales: '230',
        smallDescription: 'HD:88 | SD:25',
        precio: '545',
        term: '5',
        precioLista: '520'
    },
    {
        imgTitle: 'sky-platinum-logo.svg',
        color: 'platinum',
        canales: '253',
        smallDescription: 'HD:88 | SD:25',
        precio: '635',
        term: '8',
        precioLista: '685'
    },
    {
        imgTitle: 'sky-black-logo.svg',
        color: 'black',
        canales: '271',
        smallDescription: 'HD:88 | SD:25',
        precio: '1,029',
        term: '8',
        precioLista: '1054'
    },
]



createCards(cardsInfoPaquetes, cardsVetvInternet, true, 'backInRight')



function createCards(cards, containerPadre, twoElements, animation) {
    cards.forEach((cardInfo, index) => {
        createCardBody(cardInfo, containerPadre, twoElements, index, animation)
    });
}


function createCardBody(
    { 
        imgTitle,
        color,
        canales,
        smallDescription,
        // description,
        precio,
        term,
        precioLista
    }, contenedor, twoElements, index, animation) {

    let cardVetvnIternet = document.createElement('div')
    cardVetvnIternet.classList.add('col')


    
    cardVetvnIternet.innerHTML = `
    <div class="paquetes__card border__${color}">
        <div class="title bg__${color}">
            <img src="assets/img/logos/logoskywhite/${imgTitle}" alt="logo paquete">
        </div>
        <div class="body">
            <p class="canales">Hasta <span class="color__${color}">${canales}</span> canales de vídeo</p>
            <p class="smallDescription">${smallDescription}</p>
            <div class='blutelecom__section'>
                <img src="assets/img/iconos/moreIcons/plus-${color}.svg" class="iconMore">
                <img src="assets/img/logos/bluetelecom-logo.png" class="bluetelecomicon">
            </div>

            <p class='infoBlutelecom color__${color}'>Internet inalámbrico <span>100GB</span><br> en velocidad de hasta <span>5 Mbps<sup>(6)</sup></span></p>
            
            <div class="description__paquete">
                
            </div>

            <div class="separator"></div>
            <p class="priceTitle">
                Pago oportuno
            </p>
            <p class="price">
                $${precio}<sup>(${term})</sup>
            </p>
            <p class="duration">
                Al mes
            </p>

            <p class="priceList__title">
                Precio de la lista<sup>(6)</sup>
            </p>

            <p class="priceList">
                $${precioLista}
            </p>

            <div class="butons">
                <button class="btn__prelandingPinkBorder btn__showModals" modal="modal_${color}">
                    Ver canales
                </button>

                <button class="btn__pink" data-ic-popup="form-popup.html" onclick="gtag('send', 'event', 'LO QUIERO', 'clic', 'LO QUIERO', 0);">
                    Lo quiero
                </button>
            </div>
        </div>
        
    </div>
    `
    // console.log(contenedor);
    contenedor.appendChild(cardVetvnIternet)
}
