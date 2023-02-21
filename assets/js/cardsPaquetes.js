const cardsVetvInternet = document.querySelector('.skyHDInternet__container-cards')
// console.log(cardsVetvInternet);

const cardsInfoPaquetes = [
    {
        imgTitle: 'Logo_Silver.png',
        color: 'silver',
        canales: '206',
        indice: '2',
        newPlan: true,
        description:[
            {
                descriptionNum: '73',
                descriptionText:'Videos HD'
            },{
                descriptionNum: '17',
                descriptionText:'Videos SD'
            },{
                descriptionNum: '14',
                descriptionText:'Mosaicos'
            },{
                descriptionNum: '27',
                descriptionText:'Pago por Evento'
            },{
                descriptionNum: '75',
                descriptionText:'Audio/Musicales'
            }
            

        ],        
        precio: '349',
        precioLista: '429'
    },
    {
        imgTitle: 'sky-gold-logo.svg',
        color: 'gold',
        canales: '230',
        indice: '2',
        description:[
            {
                descriptionNum: '89',
                descriptionText:'Videos HD'
            },{
                descriptionNum: '25',
                descriptionText:'Videos SD'
            },{
                descriptionNum: '14',
                descriptionText:'Mosaicos'
            },{
                descriptionNum: '27',
                descriptionText:'Pago por Evento'
            },{
                descriptionNum: '75',
                descriptionText:'Audio/Musicales'
            }
            

        ],        
        precio: '399',
        precioLista: '569'
    },
    {
        imgTitle: 'sky-platinum-logo.svg',
        color: 'platinum',
        canales: '253',
        indice: '4',
        description:[
            {
                descriptionNum: '108',
                descriptionText:'Videos HD'
            },{
                descriptionNum: '29',
                descriptionText:'Videos SD'
            },{
                descriptionNum: '14',
                descriptionText:'Mosaicos'
            },{
                descriptionNum: '27',
                descriptionText:'Pago por Evento'
            },{
                descriptionNum: '75',
                descriptionText:'Audio/Musicales'
            }
            

        ],        
        precio: '529',
        precioLista: '649'
    },
    {
        imgTitle: 'sky-black-logo.svg',
        color: 'black',
        canales: '271',
        indice: '4',
        description:[
            {
                descriptionNum: '108',
                descriptionText:'Videos HD'
            },{
                descriptionNum: '29',
                descriptionText:'Videos SD'
            },{
                descriptionNum: '14',
                descriptionText:'Mosaicos'
            },{
                descriptionNum: '27',
                descriptionText:'Pago por Evento'
            },{
                descriptionNum: '75',
                descriptionText:'Audio/Musicales'
            }
            

        ],        
        precio: '924',
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
        indice,
        description,
        precio,
        precioLista,
        newPlan
    }, contenedor, twoElements, index, animation) {

    let cardVetvnIternet = document.createElement('div')
    cardVetvnIternet.classList.add('col')


    
    cardVetvnIternet.innerHTML = `
    ${newPlan ? '<div class="nuevo__paqueteLegend">NUEVO PAQUETE</div>' : ''}
    <div class="paquetes__card border__${color} ${!newPlan ? 'spaceTop' : ''}">
        <div class="title bg__${color}">
            <img src="assets/img/logos/logoskywhite/${imgTitle}" alt="logo paquete">
        </div>
        <div class="body">
            <p class="canales">Hasta <span class="color__${color}">${canales}</span> canales de vídeo</p>
            <div class="description__paquete">
                <p class="description">
                    <span class="accepIcon icon__${color}"></span>
                    <span class="color__${color} text">${description[0].descriptionNum}</span>
                    ${description[0].descriptionText} 
                </p>
                <p class="description">
                    <span class="accepIcon icon__${color}"></span>
                    <span class="color__${color} text">${description[1].descriptionNum}</span>
                    ${description[1].descriptionText} 
                </p>
                <p class="description">
                    <span class="accepIcon icon__${color}"></span>
                    <span class="color__${color} text">${description[2].descriptionNum}</span>
                    ${description[2].descriptionText} 
                </p>
                <p class="description">
                    <span class="accepIcon icon__${color}"></span>
                    <span class="color__${color} text">${description[3].descriptionNum}</span>
                    ${description[3].descriptionText} 
                </p>
                <p class="description">
                    <span class="accepIcon icon__${color}"></span>
                    <span class="color__${color} text">${description[4].descriptionNum}</span>
                    ${description[4].descriptionText} 
                </p>
            </div>

            <div class="separator"></div>
            <p class="priceTitle">
                Pago oportuno
            </p>
            <p class="price">
                $${precio}<sup>(${indice})</sup>
            </p>
            <p class="duration">
                Al mes
            </p>

            <p class="priceList__title">
                Precio de la lista<sup>(3)</sup>
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
    contenedor.appendChild(cardVetvnIternet)
}
