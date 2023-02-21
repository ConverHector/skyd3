const cambiosPorOferta = [
    {
        nameOferta: 'Promocion 2x1',
        datesActive: [
            'February 20 2023',
            'February 21 2023',
        ],
        banner: 'promo2x1',
        infoH2: 'Obtén 2X1 + descuento adicional al contratar un paquete Sky Silver o Sky Gold',
        prepago: {
            active: false,
        },
        silver: {
            active: true,
            textPromo: `
                <p class="info">Obtén</p>
                <p class="price">2X1</p>
                <p class="price-description">+ Descuento Adicional*</p>
                <p class="info-description">al contratar con 2 equipos*</p>
            `
        },
        gold: {
            active: true,
            textPromo: `
                <p class="info">Obtén</p>
                <p class="price">2X1</p>
                <p class="price-description">+ Descuento Adicional*</p>
                <p class="info-description">al contratar con 2 equipos*</p>
            `
        },
        platinum: {
            active: false,
        },

        legales: `PROMOCIÓN 2X1 + DESCUENTO ADICIONAL: Del 10 al 28 de febrero del 2023 al contratar, cualquiera de los paquetes de programación denominados: SKY SILVER o SKY GOLD, con 2 Equipos decodificadores de señales (sin funcionalidad de grabación), de acuerdo con su método de pago obtiene los siguientes beneficios: Pagando con efectivo y tarjeta de débito: Incentivo 1. Un descuento de $206.00, aplicable sobre el precio de Pago Oportuno, durante los 2 primeros meses del servicio. Incentivo 2. Un descuento de $106.00, aplicable sobre el precio en Pago Oportuno, a partir del 3° mes y hasta el mes 12° (aplicable sobre el precio de Pago Oportuno). Incentivo 3. 6 meses gratis del Canal a la Carta denominado Afizzionados o el Paquete a la Carta denominado 
        “Universal+”. Pagando con tarjeta de crédito: Incentivo 1. Un descuento de $206.00, aplicable sobre el precio de Pago Oportuno, durante los 4 primeros meses del servicio. Incentivo 2. Un descuento de $106.00, aplicable sobre el precio en Pago Oportuno, a partir del 5° mes y hasta el mes 12° 
        (aplicable sobre el precio de Pago Oportuno). Incentivo 3. 6 meses gratis del Canal a la Carta denominado Afizzionados o el Paquete a la Carta denominado “Universal+”.Aplica únicamente para el servicio de televisión restringida (single play) sin empaquetar con otro servicOS (Combos) y solo para cuentas residenciales.`
    },

    {
        nameOferta: 'Promocion Upgrade',
        datesActive: [
            'February 22',
            'February 23',
        ],
        banner: 'promoUpgrade',
        infoH2: 'Contrata un paquete Sky Silver o Sky Gold y disfruta por 3 meses más programación por el mismo precio',
        prepago: {
            active: false,
        },
        silver: {
            active: true,
            textPromo: `
                <p class="info">Obtén</p>
                <p class="price">3 meses</p>
                <p class="price-description">de programación de Sky Gold</p>`
        },
        gold: {
            active: true,
            textPromo: `
                <p class="info">Obtén</p>
                <p class="price">3 meses</p>
                <p class="price-description">de programación de Sky Platinum</p>
            `
        },
        platinum: {
            active: false,
        },

        legales: `PROMOCIÓN 3 MESES DE PROGRAMACIÓN: La promoción consistente en ofrecer a clientes nuevos pospago que contraten un paquete de programación Sky Silver o Sky Gold con 1, 3 y 4 equipos sin grabación y que paguen con efectivo o tarjeta de débito un upgrade de programación por 3 meses. En la contratación de Sky Silver el cliente recibe 3 meses gratis de Sky Gold y si contrata Sky Gold recibe 3 meses gratis de Sky Platinum. La vigencia de la promoción es del 9 al 28 de febrero del 2023. La promoción aplica únicamente para el servicio de televisión restringida 
        (single play) y cuentas residenciales. Una vez que finalice el periodo del beneficio, el cliente 
        regresará a la programación contratada. Consulta términos y condiciones en la página oficial de SKY: www.sky.com.mx`
    },

    {
        nameOferta: 'Promocion Bundesliga Fan Travel',
        datesActive: [
            'February 24 2023',
            'February 25 2023',
        ],
        banner: 'promoBundesliga',
        infoH2: 'en espera',
        prepago: {
            active: false,
        },
        silver: {
            active: true,
            textPromo: 'la mejor oferta silver'
        },
        gold: {
            active: true,
            textPromo: 'la mejor oferta'
        },
        platinum: {
            active: true,
            textPromo: 'la mejor oferta x2'
        },

        legales: 'legales legales si si si si si si si'
    },

    {
        nameOferta: 'Promocion ultra',
        datesActive: [
            'February 28 2023',
            'March 1 2023',
        ],
        banner: 'promoUltra',
        infoH2: 'Contrata un Paquete Sky Platinum con equipo de grabación Ultra a precio especial durante 12 meses',
        prepago: {
            active: false,
        },
        silver: {
            active: false,
        },
        gold: {
            active: false,
        },
        platinum: {
            active: true,
            textPromo: `
                <p class="info">Obtén</p>
                <p class="price-description">el Paquete Ultra</p>
                <p class="price-description">a precio especial x 12 meses</p>  
            `
        },

        legales: `PROMOCIÓN ULTRA: Del 12 de febrero al 31 de marzo del 2023 al contratar, un paquete denominado SKY PLATINUM, obtén sin costo adicional un equipo con funcionalidad de grabación SKY ULTRA por 1 año. Transmisión en 4K sólo para clientes residenciales a partir de Sky Platinum que tengan contratado equipo Sky Ultra y tengan televisión 4K, consulta los canales disponibles en 4K en www.sky.com.mx. La promoción aplica únicamente para el servicio de televisión restringida 
        (single play) sin empaquetar con otro servicio (Combos) y solo para cuentas residenciales. Consulta 
        términos y condiciones en la página oficial de SKY: www.sky.com.mx`
    },

    {
        nameOferta: 'Promocion 30%',
        datesActive: [
            'February 26 2023',
            'February 27 2023',
        ],
        banner: 'promo30',
        infoH2: 'Obtén 30% de descuento al contratar un Paquete Sky Silver o Sky Gold*',
        prepago: {
            active: false,
        },
        silver: {
            active: true,
            textPromo: `
                <p class="info">Obtén</p>
                <p class="price">30%</p>
                <p class="price-description">de descuento al contratar</p>  
            `
        },
        gold: {
            active: true,
            textPromo: `
            <p class="info">Obtén</p>
            <p class="price">30%</p>
            <p class="price-description">de descuento al contratar</p> 
            `
        },
        platinum: {
            active: false,
        },

        legales: `PROMOCIÓN 30% DE DESCUENTO: Del 1 al 28 de febrero del 2023 al contratar, cualquiera de los paquetes de programación denominados: SKY SILVER o SKY GOLD, con 1,3 y 4 equipos decodificadores de señal (sin funcionalidad de grabación), y realizar el pago del servicio en efectivo o tarjeta de débito, el cliente obtendrá un descuento del 30% en su segunda mensualidad (el descuento aplica sobre el precio de Pago Oportuno). La promoción aplica únicamente para el servicio de televisión restringida (single play) sin empaquetar con otro servicio (Combos) y solo para cuentas residenciales. Consulta términos y condiciones en la página oficial de SKY: www.sky.com. mx
        `
    }
]

const banner = document.querySelector('.banner__paquetes')
const allCardsContainer = document.querySelectorAll('.cardsPaquetesTV__container .col')
const headerH2 = document.querySelector('.banner__paquetes h2')
const legales = document.querySelector('.cardsPaquetesTV .terms-conditions')


const dates = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const date = new Date()
const monthToday = dates[date.getMonth()]
const todayDateNumber = date.getDate()
const year = date.getFullYear()
const todayIs = `${monthToday} ${todayDateNumber} ${year}`

const promoToday = cambiosPorOferta.filter(
    oferta => oferta.datesActive.includes(todayIs))

if (promoToday.length > 0) {
    changeImgBanner(banner, promoToday[0].banner)
    changeH2(headerH2, promoToday[0].infoH2)
    changeLegales(legales, promoToday[0].legales)
    if(promoToday[0].nameOferta === 'Promocion ultra'){
        cardsPaquetes.scrollItem( true);
    }
    allCardsContainer.forEach(
        card => changeOfertasCards(card,promoToday[0])
    )

}

function changeImgBanner(banner, urlImg) {
    banner.classList.add(`${urlImg}`)
}

function changeH2(elementH2, text) {
    elementH2.innerText = text
}

function changeLegales(elementLegales, text) {
    elementLegales.innerHTML = text
}

function changeOfertasCards(elementCard, info){
    const whoPromoCardChanges = elementCard.dataset.plan
    const promoCard =
        document.querySelector(`[data-plan="${whoPromoCardChanges}"]`)
    console.log(promoCard); 
    const selectorPromoBottomCard = 
        document.querySelector(`[data-plan="${whoPromoCardChanges}"] .ofertaCard`)

    if(info[whoPromoCardChanges].active){
        const lineSky = `<div class='line__sky'></div>`
        selectorPromoBottomCard.innerHTML = `
        ${lineSky}
        <p>${info[whoPromoCardChanges].textPromo}</p>`
    }else{
        promoCard.removeChild(selectorPromoBottomCard)
    }
}
