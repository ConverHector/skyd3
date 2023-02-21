const cardsSkyHdInternet = document.querySelector('.skyHDInternet__container-cards')

const cardsInfoSkyHdInternet = [
    {
        header: 'assets/img/logos/sky-gold-logo.svg',
        color: 'bg-yellow',
        moreIcon: 'assets/img/iconos/plusyellow.png',
        canales: 113,
        canalesHD: 'HD:88 | SD:25',
        comparator: {
            megasLeft: 5,
            priceLeft: 460,
            megasRight: 10,
            priceRight: 640,
            promoPrice: true
        }
    }, {
        header: 'assets/img/logos/sky-platinum-logo.svg',
        color: 'bg-gris',
        moreIcon: 'assets/img/iconos/plusgris.png',
        canales: 137,
        canalesHD: 'HD: 107 | SD: 30',
        comparator: {
            megasLeft: 5,
            priceLeft: 635,
            megasRight: 10,
            priceRight: 730,
        }
    }, {
        header: 'assets/img/logos/sky-black-logo.svg',
        color: 'bg-black',
        moreIcon: 'assets/img/iconos/plusBlack.png',
        canales: 155,
        canalesHD: 'HD: 122 | SD: 33',
        comparator: {
            megasLeft: 5,
            priceLeft: '1,029',
            megasRight: 10,
            priceRight: '1,124',
        }
    }
]

createCards(cardsInfoSkyHdInternet, cardsSkyHdInternet, false, 'backInDown1')

function createCards(cards, containerPadre, twoElements, animation) {
    cards.forEach((cardInfo, index) => {
        createCardBody(cardInfo, containerPadre, twoElements, index, animation)
    });
}


function createCardBody(
    { color,
        header,
        canales,
        moreIcon,
        canalesHD,
        comparator
    }, contenedor, twoElements, index, animation) {

    let cardVetvnIternet = document.createElement('div')
    if (twoElements) {
        cardVetvnIternet.classList.add('col-6', 'col-md-6', 'col-lg-4')
    } else {
        cardVetvnIternet.classList.add('col-4', 'col-md-4')
    }
    cardVetvnIternet.innerHTML = `
        <div class='card__Combos animate' data-delay=${0.2 * index} data-animation=${animation}>
            <div class="card__Combos-header ${color}">
            <img src="${header} " alt="logo plan">
            </div>
            <div class="card__Combos-body">
            <p class="canales">
                ${canales} totales canales de video
            </p>
            <p class="canales-info">
                ${canalesHD}
            </p>
            <img src="${moreIcon}" alt=" icono more" class="more-icon">
            <p class="canales-description">
                Internet
            </p>
            <img src="assets/img/logos/bluetelecom-logo.png" alt="icono bluetelecom" class="icono-bluetelecom">
            <p class="megas-info">
                100GB
            </p>
            
            <div class="comparator-price">
                <div class="price">
                    <p class="price-megas">${comparator.megasLeft}</p>

                    ${comparator.promoPrice ? 
                    `<div class='container__pricePromos'>
                        <div class='notPrice'>
                            <p>
                                $545
                            </p>
                        </div>

                        <div class='priceOriginal'>
                            <p>
                                <span>$</span>${comparator.priceLeft}<sup class='numberSup'>1<sup> 
                            </p>
                        </div>
                    </div>
                    <p class='text__mount'>al mes</p>`
                        :
                    `<div class="price-content">
                        <span>$</span>
                        <p class="price-cifra">${comparator.priceLeft}<br> <span class="price-megas">al mes</span></p>
                
                    </div>`
                }
                    
                </div>
                <div class="price">
                    <p class="price-megas">${comparator.megasRight}</p>
                    <div class="price-content">
                        <span>$</span>
                        <p class="price-cifra">${comparator.priceRight} <br> <span class="price-megas">al mes</span> </p>
        
                    </div>
                </div>
            </div>
            <a data-ic-popup="form-popup.html">
                <button class="btn__rosa-redondo btn-rosa-card">Lo quiero</button>
            </a>
        </div>
    `
    contenedor.appendChild(cardVetvnIternet)
}
