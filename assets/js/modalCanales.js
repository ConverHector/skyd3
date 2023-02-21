const modalCanalesGold = document.createElement('div')
const modalCanalesPlatinum = document.createElement('div')
const modalCanalesBlack = document.createElement('div')
const modalCanalesSilver = document.createElement('div')
const modalCanalesPrepago = document.createElement('div')

const body2 = document.querySelector('body')


modalCanalesGold.classList.add('modal__canales', 'fadeIn')
modalCanalesPlatinum.classList.add('modal__canales', 'fadeIn')
modalCanalesBlack.classList.add('modal__canales', 'fadeIn')
modalCanalesSilver.classList.add('modal__canales', 'fadeIn')
modalCanalesPrepago.classList.add('modal__canales', 'fadeIn')

modalCanalesGold.setAttribute("id", "modal_gold");
modalCanalesPlatinum.setAttribute("id", "modal_platinum");
modalCanalesBlack.setAttribute("id", "modal_black");
modalCanalesSilver.setAttribute("id", "modal_silver");
modalCanalesPrepago.setAttribute("id", "modal_prepago");



modalCanalesGold.setAttribute('show', 'false')
modalCanalesPlatinum.setAttribute('show', 'false')
modalCanalesBlack.setAttribute('show', 'false')
modalCanalesSilver.setAttribute('show', 'false')
modalCanalesPrepago.setAttribute('show', 'false')


modalCanalesPrepago.innerHTML = `
<div class="modal__canales-container">
    <div class="modal__canales-title">
        <div class="modal__canales-titleContainer">
            <div class="modal__canales-logo">
                <img src="assets/img/logos/SKY_prepago_logo.png" alt="logo sky prepago" class="logoModal">
                <p class="color_yellow">CANALES</p>
            </div>

        </div>
        <img src="assets/img/iconos/Close.svg" alt="logo close" class="img__close">
    </div>
    <div class='container__img'>
        <img src="assets/img/canales-completos-vetvHD.png" alt="canales silver">
    </div>
</div>`

modalCanalesSilver.innerHTML = `
<div class="modal__canales-container">
    <div class="modal__canales-title">
        <div class="modal__canales-titleContainer">
            <div class="modal__canales-logo">
                <img src="assets/img/logos/SKY_Silver_logo.png" alt="logo sky silver" class="logoModal">
                <p class="color__silver">CANALES</p>
            </div>

        </div>
        <img src="assets/img/iconos/Close.svg" alt="logo close" class="img__close">
    </div>
    <div class="modal__body">
        <div class="modal__seccion">
            <p class="modal__seccion-title">Mosaicos</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-adultos.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-cinema-premium.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-cinema.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-deportes.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-entretenimiento-2.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-entretenimiento.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-mundo.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-musica.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-ninos.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-noticias.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-sky-view.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-tv-nacional.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-tv-nacional2.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-sky-secrets.png" alt="canal">             
            </div>
        </div>

        <div class="modal__seccion">
            <p class="modal__seccion-title">TV Nacional</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/tv-abierta/canal-5.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-7hd.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-adn40.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-aztecauno.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-aztecauno2.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-canal14.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-canal22.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-canalonce.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-congreso.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-fototv.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-galatvhd.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-imagen.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-lasestrellas.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-lasestrellas2.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-localview.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-localview2.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-localview3.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-tvmexiquense.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-tvunam.png" alt="canal">
            </div>
        </div>

        <div class="modal__seccion">
            <p class="modal__seccion-title">Entretenimiento</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/Entretenimiento/canal-aehd.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-aplus.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-axnhd.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-bitme.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-distritocomedia.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-e.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-eurochannel.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-fxhd.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-gourmet.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-hhdiscoveryhd.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-holatv.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-maschic.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-sony.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-starchannel.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-telemundoint.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-tlnovelas.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-tntseries.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-u.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-wb.png" alt="canal">           
                
            </div>
        </div>

        <div class="modal__seccion">
            <p class="modal__seccion-title">Mundo y Cultura</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/mundoycultura/canal-canal222.png" alt="canal">
                <img src="assets/img/sky-canales/mundoycultura/canal-discoveryhd.png" alt="canal">
                <img src="assets/img/sky-canales/mundoycultura/canal-enlace.png" alt="canal">
                <img src="assets/img/sky-canales/mundoycultura/canal-historyhd.png" alt="canal">
                <img src="assets/img/sky-canales/mundoycultura/canal-ingeniotv.png" alt="canal">
                <img src="assets/img/sky-canales/mundoycultura/canal-mariavision.png" alt="canal">
                <img src="assets/img/sky-canales/mundoycultura/canal-natgeohd.png" alt="canal">
                
            </div>
        </div> 

        <div class="modal__seccion">
            <p class="modal__seccion-title">Niños</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/ninos/canal-babyFirst.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-cartoonito.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-cartoonnetwork.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-discoverykidshd.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-disney.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-disneyjr.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-nickelodeonhd.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-oncekids.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-zoomoo.png" alt="canal">
                
            </div>
        </div>

        <div class="modal__seccion">
            <p class="modal__seccion-title">Cinema</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/Cine/canal-amc.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-aniversario.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-depelicula.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-europa.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-filmarts.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-cinemax.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-golden-plus.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-golden.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-spacehd.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-tnthd.png" alt="canal">

                
            </div>
        </div>


        <div class="modal__seccion">
            <p class="modal__seccion-title">Deportes</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/deportes/adrenalina-sports-network.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-espn-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-espn2-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-foxsports2hd.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-foxsportshd-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-nflhd.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-outdoorhd.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-skysports-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-skysports-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-skysports-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-tracesportshd.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-tudn-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-ubeat-1.png" alt="canal">
            </div>
        </div>

        <div class="modal__seccion">
            <p class="modal__seccion-title">Noticias</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/Noticias/canal-justiciatv.png" alt="canal">
                <img src="assets/img/sky-canales/Noticias/canal-localnews.png" alt="canal">
                <img src="assets/img/sky-canales/Noticias/canal-wobi.png" alt="canal">               
            </div>
        </div>

        <div class="modal__seccion">
            <p class="modal__seccion-title">Eventos</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/Eventos/canal-sky-event.png" alt="canal">
                <img src="assets/img/sky-canales/Eventos/canal-sky-premiere.png" alt="canal">
                <img src="assets/img/sky-canales/Eventos/canal-sky-premiere2.png" alt="canal">                             
            </div>
        </div>


        <div class="modal__seccion">
            <p class="modal__seccion-title">Adultos</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/Adultos/canal-hustlertv.png" alt="canal">
                <img src="assets/img/sky-canales/Adultos/canal-tvhot.png" alt="canal">
                <img src="assets/img/sky-canales/Adultos/canal-vxtremo.png" alt="canal">  
            </div>
        </div>      

                     
    </div>
</div>`


modalCanalesGold.innerHTML = `
<div class="modal__canales-container">
    <div class="modal__canales-title">
        <div class="modal__canales-titleContainer">
            <div class="modal__canales-logo">
                <img src="assets/img/logos/SKY_Gold_logo.png" alt="logo sky gold" class="logoModal">
                <p class="color_yellow">CANALES</p>
            </div>

        </div>
        <img src="assets/img/iconos/Close.svg" alt="logo close" class="img__close">
    </div>
    <div class="modal__body">
        <div class="modal__seccion">
            <p class="modal__seccion-title">Mosaicos</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-adultos.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-cinema-premium.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-cinema.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-deportes.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-entretenimiento-2.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-entretenimiento.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-mundo.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-musica.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-ninos.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-noticias.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-sky-view.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-tv-nacional.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-tv-nacional2.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-sky-secrets.png" alt="canal">             
            </div>
        </div>

        <div class="modal__seccion">
            <p class="modal__seccion-title">TV Nacional</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/tv-abierta/canal-5.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-7hd.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-adn40.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-aztecauno.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-aztecauno2.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-canal14.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-canal22.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-canalonce.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-congreso.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-fototv.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-galatvhd.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-imagen.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-lasestrellas.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-lasestrellas2.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-localview.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-localview2.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-localview3.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-tvmexiquense.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-tvunam.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-elfinanciero.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-excelsior.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-milenio.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-teleformula.png" alt="canal">
            </div>
        </div>

        <div class="modal__seccion">
            <p class="modal__seccion-title">Entretenimiento</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/Entretenimiento/canal-aehd.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-aplus.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-axnhd.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-bitme.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-distritocomedia.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-e.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-eurochannel.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-fxhd.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-gourmet.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-hhdiscoveryhd.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-holatv.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-maschic.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-sony.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-starchannel.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-telemundoint.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-tlnovelas.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-tntseries.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-u.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-wb.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-a3s.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-comedycentral.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-lifetime.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-syfy.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-tlc.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-multimediosplus.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-universal.png" alt="canal">        
                
            </div>
        </div>

        <div class="modal__seccion">
        <p class="modal__seccion-title">Mundo y Cultura</p>
        <div class="modal__section-canales">
            <img src="assets/img/sky-canales/mundoycultura/canal-canal222.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-discoveryhd.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-enlace.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-historyhd.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-ingeniotv.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-mariavision.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-natgeohd.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-antena3.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-history2.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-tve.png" alt="canal">
            
        </div>
    </div>      

        <div class="modal__seccion">
            <p class="modal__seccion-title">Niños</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/ninos/canal-babyFirst.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-cartoonito.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-cartoonnetwork.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-discoverykidshd.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-disney.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-disneyjr.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-nickelodeonhd.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-oncekids.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-zoomoo.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-nickjr.png" alt="canal">
               
                
            </div>
        </div>

        <div class="modal__seccion">
            <p class="modal__seccion-title">Cinema</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/Cine/canal-amc.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-aniversario.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-depelicula.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-europa.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-filmarts.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-cinemax.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-golden-plus.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-golden.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-spacehd.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-tnthd.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-tcm.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-studio.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-paramount.png" alt="canal">
                
            </div>
        </div>


        <div class="modal__seccion">
            <p class="modal__seccion-title">Deportes</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/deportes/adrenalina-sports-network.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-espn-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-espn2-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-foxsports2hd.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-foxsportshd-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-nflhd.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-outdoorhd.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-skysports-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-skysports-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-skysports-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-tracesportshd.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-tudn-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-ubeat-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-foxsports3hd.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-futtv.png" alt="canal">
                
            </div>
        </div>

        <div class="modal__seccion">
            <p class="modal__seccion-title">Noticias</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/Noticias/canal-justiciatv.png" alt="canal">
                <img src="assets/img/sky-canales/Noticias/canal-localnews.png" alt="canal">
                <img src="assets/img/sky-canales/Noticias/canal-wobi.png" alt="canal">
                <img src="assets/img/sky-canales/Noticias/canal-cnn-espanol.png" alt="canal">
                              
            </div>
        </div>

        <div class="modal__seccion">
            <p class="modal__seccion-title">Eventos</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/Eventos/canal-sky-event.png" alt="canal">
                <img src="assets/img/sky-canales/Eventos/canal-sky-premiere.png" alt="canal">
                <img src="assets/img/sky-canales/Eventos/canal-sky-premiere2.png" alt="canal">                             
            </div>
        </div>


        <div class="modal__seccion">
            <p class="modal__seccion-title">Adultos</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/Adultos/canal-hustlertv.png" alt="canal">
                <img src="assets/img/sky-canales/Adultos/canal-tvhot.png" alt="canal">
                <img src="assets/img/sky-canales/Adultos/canal-vxtremo.png" alt="canal">  
            </div>
        </div>      

                
    </div>
</div>`

modalCanalesPlatinum.innerHTML = `
<div class="modal__canales-container">
    <div class="modal__canales-title">
        <div class="modal__canales-titleContainer">
            <div class="modal__canales-logo">
                <img src="assets/img/logos/SKY_Platinum_logo.png" alt="logo sky platinum" class="logoModal">
                <p class="color_gray">CANALES</p>
            </div>

        </div>
        <img src="assets/img/iconos/Close.svg" alt="logo close" class="img__close">
    </div>
    <div class="modal__body">
        <div class="modal__seccion">
        <p class="modal__seccion-title">Mosaicos</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-adultos.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-cinema-premium.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-cinema.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-deportes.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-entretenimiento-2.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-entretenimiento.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-mundo.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-musica.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-ninos.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-noticias.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-sky-view.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-tv-nacional.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-tv-nacional2.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-sky-secrets.png" alt="canal">             
            </div>
        </div>

        <div class="modal__seccion">
            <p class="modal__seccion-title">TV Nacional</p>
            <div class="modal__section-canales">
            <img src="assets/img/sky-canales/tv-abierta/canal-5.png" alt="canal">
            <img src="assets/img/sky-canales/tv-abierta/canal-7hd.png" alt="canal">
            <img src="assets/img/sky-canales/tv-abierta/canal-adn40.png" alt="canal">
            <img src="assets/img/sky-canales/tv-abierta/canal-aztecauno.png" alt="canal">
            <img src="assets/img/sky-canales/tv-abierta/canal-aztecauno2.png" alt="canal">
            <img src="assets/img/sky-canales/tv-abierta/canal-canal14.png" alt="canal">
            <img src="assets/img/sky-canales/tv-abierta/canal-canal22.png" alt="canal">
            <img src="assets/img/sky-canales/tv-abierta/canal-canalonce.png" alt="canal">
            <img src="assets/img/sky-canales/tv-abierta/canal-congreso.png" alt="canal">
            <img src="assets/img/sky-canales/tv-abierta/canal-fototv.png" alt="canal">
            <img src="assets/img/sky-canales/tv-abierta/canal-galatvhd.png" alt="canal">
            <img src="assets/img/sky-canales/tv-abierta/canal-imagen.png" alt="canal">
            <img src="assets/img/sky-canales/tv-abierta/canal-lasestrellas.png" alt="canal">
            <img src="assets/img/sky-canales/tv-abierta/canal-lasestrellas2.png" alt="canal">
            <img src="assets/img/sky-canales/tv-abierta/canal-localview.png" alt="canal">
            <img src="assets/img/sky-canales/tv-abierta/canal-localview2.png" alt="canal">
            <img src="assets/img/sky-canales/tv-abierta/canal-localview3.png" alt="canal">
            <img src="assets/img/sky-canales/tv-abierta/canal-tvmexiquense.png" alt="canal">
            <img src="assets/img/sky-canales/tv-abierta/canal-tvunam.png" alt="canal">
            <img src="assets/img/sky-canales/tv-abierta/canal-elfinanciero.png" alt="canal">
            <img src="assets/img/sky-canales/tv-abierta/canal-excelsior.png" alt="canal">
            <img src="assets/img/sky-canales/tv-abierta/canal-milenio.png" alt="canal">
            <img src="assets/img/sky-canales/tv-abierta/canal-teleformula.png" alt="canal">
            </div>
        </div>

        <div class="modal__seccion">
            <p class="modal__seccion-title">Entretenimiento</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/Entretenimiento/canal-aehd.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-aplus.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-axnhd.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-bitme.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-distritocomedia.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-e.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-eurochannel.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-fxhd.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-gourmet.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-hhdiscoveryhd.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-holatv.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-maschic.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-sony.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-starchannel.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-telemundoint.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-tlnovelas.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-tntseries.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-u.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-wb.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-a3s.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-comedycentral.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-lifetime.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-syfy.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-tlc.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-multimediosplus.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-universal.png" alt="canal"> 
                <img src="assets/img/sky-canales/Entretenimiento/canal-glitz.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-food.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-id.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-tbs.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-tlc.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-discoveryturbo.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-trutv.png" alt="canal">
                
            </div>
        </div>

        <div class="modal__seccion">
        <p class="modal__seccion-title">Mundo y Cultura</p>
        <div class="modal__section-canales">
            <img src="assets/img/sky-canales/mundoycultura/canal-canal222.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-discoveryhd.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-enlace.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-historyhd.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-ingeniotv.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-mariavision.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-natgeohd.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-antena3.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-history2.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-tve.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-animalplanet.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-discoverythea.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-discoveryworld.png" alt="canal">
            
            
        </div>
    </div> 

        <div class="modal__seccion">
            <p class="modal__seccion-title">Niños</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/ninos/canal-babyFirst.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-cartoonito.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-cartoonnetwork.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-discoverykidshd.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-disney.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-disneyjr.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-nickelodeonhd.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-oncekids.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-zoomoo.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-nickjr.png" alt="canal">
                
            </div>
        </div>

        <div class="modal__seccion">
            <p class="modal__seccion-title">Cinema</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/Cine/canal-amc.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-aniversario.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-depelicula.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-europa.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-filmarts.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-cinemax.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-golden-plus.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-golden.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-spacehd.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-tnthd.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-tcm.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-studio.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-paramount.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-goldenmultiplex.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-isat.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-a3.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-cinecanal.png" alt="canal">
                
                
            </div>
        </div>


        <div class="modal__seccion">
            <p class="modal__seccion-title">Deportes</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/deportes/adrenalina-sports-network.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-espn-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-espn2-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-foxsports2hd.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-foxsportshd-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-nflhd.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-outdoorhd.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-skysports-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-skysports-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-skysports-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-tracesportshd.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-tudn-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-ubeat-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-foxsports3hd.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-futtv.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-espn3.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-espnextra.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-golfchannel.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-skysports-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-skysports-1.png" alt="canal">

              
            </div>
        </div>

        <div class="modal__seccion">
            <p class="modal__seccion-title">Noticias</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/Noticias/canal-bbc-world.png" alt="canal">
                <img src="assets/img/sky-canales/Noticias/canal-cnbc.png" alt="canal">
                <img src="assets/img/sky-canales/Noticias/canal-cnn-espanol.png" alt="canal">
                <img src="assets/img/sky-canales/Noticias/canal-cnn-internacional.png" alt="canal">
                <img src="assets/img/sky-canales/Noticias/canal-foxnews.png" alt="canal">
                <img src="assets/img/sky-canales/Noticias/canal-justiciatv.png" alt="canal">
                <img src="assets/img/sky-canales/Noticias/canal-localnews.png" alt="canal">
                <img src="assets/img/sky-canales/Noticias/canal-wobi.png" alt="canal">               
            </div>
        </div>

        <div class="modal__seccion">
            <p class="modal__seccion-title">Eventos</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/Eventos/canal-sky-event.png" alt="canal">
                <img src="assets/img/sky-canales/Eventos/canal-sky-premiere.png" alt="canal">
                <img src="assets/img/sky-canales/Eventos/canal-sky-premiere2.png" alt="canal">                             
            </div>
        </div>


        <div class="modal__seccion">
            <p class="modal__seccion-title">Adultos</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/Adultos/canal-hustlertv.png" alt="canal">
                <img src="assets/img/sky-canales/Adultos/canal-tvhot.png" alt="canal">
                <img src="assets/img/sky-canales/Adultos/canal-vxtremo.png" alt="canal">  
            </div>
        </div>      

        
    </div>
</div>
`

modalCanalesBlack.innerHTML = `
<div class="modal__canales-container">
    <div class="modal__canales-title">
        <div class="modal__canales-titleContainer">
            <div class="modal__canales-logo">
                <img src="assets/img/logos/sky-black-logo.svg" alt="logo sky platinum">
                <p class="color_black">CANALES</p>
            </div>

        </div>
        <img src="assets/img/iconos/Close.svg" alt="logo close" class="img__close">
    </div>
    <div class="modal__body">
        <div class="modal__seccion">
            <p class="modal__seccion-title">Mosaicos</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-adultos.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-cinema-premium.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-cinema.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-deportes.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-entretenimiento-2.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-entretenimiento.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-mundo.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-musica.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-ninos.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-noticias.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-sky-view.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-tv-nacional.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-mosaico-tv-nacional2.png" alt="canal">
                <img src="assets/img/sky-canales/Mosaicos/canal-sky-secrets.png" alt="canal">             
            </div>
        </div>

        <div class="modal__seccion">
            <p class="modal__seccion-title">TV Nacional</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/tv-abierta/canal-5.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-7hd.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-adn40.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-aztecauno.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-aztecauno2.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-canal14.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-canal22.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-canalonce.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-congreso.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-fototv.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-galatvhd.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-imagen.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-lasestrellas.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-lasestrellas2.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-localview.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-localview2.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-localview3.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-tvmexiquense.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-tvunam.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-elfinanciero.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-excelsior.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-milenio.png" alt="canal">
                <img src="assets/img/sky-canales/tv-abierta/canal-teleformula.png" alt="canal">
            </div>
        </div>

        <div class="modal__seccion">
            <p class="modal__seccion-title">Entretenimiento</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/Entretenimiento/canal-aehd.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-aplus.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-axnhd.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-bitme.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-distritocomedia.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-e.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-eurochannel.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-fxhd.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-gourmet.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-hhdiscoveryhd.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-holatv.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-maschic.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-sony.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-starchannel.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-telemundoint.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-tlnovelas.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-tntseries.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-u.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-wb.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-a3s.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-comedycentral.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-lifetime.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-syfy.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-tlc.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-multimediosplus.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-universal.png" alt="canal"> 
                <img src="assets/img/sky-canales/Entretenimiento/canal-glitz.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-food.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-id.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-tbs.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-tlc.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-discoveryturbo.png" alt="canal">
                <img src="assets/img/sky-canales/Entretenimiento/canal-trutv.png" alt="canal">           
                
            </div>
        </div>

        <div class="modal__seccion">
        <p class="modal__seccion-title">Mundo y Cultura</p>
        <div class="modal__section-canales">
            <img src="assets/img/sky-canales/mundoycultura/canal-canal222.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-discoveryhd.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-enlace.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-historyhd.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-ingeniotv.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-mariavision.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-natgeohd.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-antena3.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-history2.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-tve.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-animalplanet.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-discoverythea.png" alt="canal">
            <img src="assets/img/sky-canales/mundoycultura/canal-discoveryworld.png" alt="canal">
            
        </div>
    </div> 

        <div class="modal__seccion">
            <p class="modal__seccion-title">Niños</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/ninos/canal-babyFirst.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-cartoonito.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-cartoonnetwork.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-discoverykidshd.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-disney.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-disneyjr.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-nickelodeonhd.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-oncekids.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-zoomoo.png" alt="canal">
                <img src="assets/img/sky-canales/ninos/canal-nickjr.png" alt="canal">
                    
            </div>
        </div>

        <div class="modal__seccion">
            <p class="modal__seccion-title">Cinema</p>
            <div class="modal__section-canales">
            <img src="assets/img/sky-canales/Cine/canal-amc.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-aniversario.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-depelicula.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-europa.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-filmarts.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-cinemax.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-golden-plus.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-golden.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-spacehd.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-tnthd.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-tcm.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-studio.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-paramount.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-goldenmultiplex.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-isat.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-a3.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-cinecanal.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-hbo.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-hbo2.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-hbofamily.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-hbomundi.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-hboplus.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-hbopop.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-hbosignature.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-hboxtreme.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-universalpremiere.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-universalcinema.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-universalcrime.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-universalcomedy.png" alt="canal">
                <img src="assets/img/sky-canales/Cine/canal-universalreality.png" alt="canal">



                
            </div>
        </div>


        <div class="modal__seccion">
            <p class="modal__seccion-title">Deportes</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/deportes/adrenalina-sports-network.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-espn-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-espn2-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-foxsports2hd.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-foxsportshd-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-nflhd.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-outdoorhd.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-skysports-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-skysports-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-skysports-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-tracesportshd.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-tudn-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-ubeat-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-foxsports3hd.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-futtv.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-espn3.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-espnextra.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-golfchannel.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-skysports-1.png" alt="canal">
                <img src="assets/img/sky-canales/deportes/canal-skysports-1.png" alt="canal">
            </div>
        </div>

        <div class="modal__seccion">
            <p class="modal__seccion-title">Noticias</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/Noticias/canal-bbc-world.png" alt="canal">
                <img src="assets/img/sky-canales/Noticias/canal-cnbc.png" alt="canal">
                <img src="assets/img/sky-canales/Noticias/canal-cnn-espanol.png" alt="canal">
                <img src="assets/img/sky-canales/Noticias/canal-cnn-internacional.png" alt="canal">
                <img src="assets/img/sky-canales/Noticias/canal-foxnews.png" alt="canal">
                <img src="assets/img/sky-canales/Noticias/canal-justiciatv.png" alt="canal">
                <img src="assets/img/sky-canales/Noticias/canal-localnews.png" alt="canal">
                <img src="assets/img/sky-canales/Noticias/canal-mosaico-noticias.png" alt="canal">
                <img src="assets/img/sky-canales/Noticias/canal-wobi.png" alt="canal">               
            </div>
        </div>

        <div class="modal__seccion">
            <p class="modal__seccion-title">Eventos</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/Eventos/canal-golden-premiere.png" alt="canal">
                <img src="assets/img/sky-canales/Eventos/canal-sky-event.png" alt="canal">
                <img src="assets/img/sky-canales/Eventos/canal-sky-premiere.png" alt="canal">
                <img src="assets/img/sky-canales/Eventos/canal-sky-premiere2.png" alt="canal">                             
            </div>
        </div>


        <div class="modal__seccion">
            <p class="modal__seccion-title">Adultos</p>
            <div class="modal__section-canales">
                <img src="assets/img/sky-canales/Adultos/canal-hustlertv.png" alt="canal">
                <img src="assets/img/sky-canales/Adultos/canal-tvhot.png" alt="canal">
                <img src="assets/img/sky-canales/Adultos/canal-vxtremo.png" alt="canal">  
            </div>
        </div>      

       
        
    </div>


</div>`

body2.appendChild(modalCanalesGold)
body2.appendChild(modalCanalesPlatinum)
body2.appendChild(modalCanalesBlack)
body2.appendChild(modalCanalesSilver)
body2.appendChild(modalCanalesPrepago)



const btns__showModals = document.querySelectorAll('.btn__showModals')

btns__showModals.forEach(btn_showModal => {
    btn_showModal.addEventListener('click',showModal)
});

function showModal(){
    const modal = this.getAttribute('modal')
    const modal__paquete = document.querySelector('#'+modal)
    const closeIcon = document.querySelector('#'+modal + ' .img__close')
    console.log(modal__paquete);
    closeIcon.addEventListener('click', closeModal)
    if(modal__paquete.getAttribute('show') === 'false'){
        document.body.style.overflowY = 'hidden'
        modal__paquete.style.display = 'block'
        modal__paquete.setAttribute('show','true')
    }
    function closeModal(){
        if(modal__paquete.getAttribute('show') === 'true'){
            document.body.style.overflowY = 'auto'
            modal__paquete.style.display = 'none'
            modal__paquete.setAttribute('show','false')
        }
    }
}

