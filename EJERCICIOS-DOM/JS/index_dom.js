import hamburgerMenu from "./menu_hamburgesas.js";
import { digitalClock, alarm} from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";
import countdowm from "./cuenta_regresiva.js";
import scrollTopButton from "./btn_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_resopnsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDiviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import searchFilters from "./filtro_busquedas.js";
const d = document;

d.addEventListener("DOMContentLoaded",e=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("../ASSETS/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdowm("countdowm", "Mar 23,2024 03:23:19", "Feliz Cumpleaños");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube", "(min-width: 1024px)", `<a href="https://www.youtube.com/watch?v=SZHohr_mETo&ab_channel=Genzix" target="_blank" rel="noopener">Ver Video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/SZHohr_mETo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    responsiveMedia("gmaps","(min-width: 1024px)", `<a href="https://goo.gl/maps/E9uD8wyRFzkkuPgS9" target="_blank" rel="noopener">Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.9587765323536!2d116.56614771997904!3d40.43191170631141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f121d7687f2ccf%3A0xd040259b950522df!2sMuralla%20China!5e0!3m2!1ses!2sco!4v1680557067653!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("responsive-tester");
    userDiviceInfo("user-divice");
    searchFilters(".card-filter",".card");
});

d.addEventListener("keydown",e=>{
    shortcuts(e);
    moveBall(e, ".ball", ".stage")
})

darkTheme(".dark-theme-btn","dark-mode");
networkStatus();