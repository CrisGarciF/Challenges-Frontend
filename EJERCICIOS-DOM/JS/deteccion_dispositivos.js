const d = document,
n = navigator,
ua = n.userAgent;

export default function userDiviceInfo(id) {
    const $id = d.getElementById(id),
    isMobil = {
        android: ()=> ua.match(/android/),
        ios: ()=> ua.match(/iphone|ipad|ipod/i),
        windows: ()=> ua.match(/windows phone/i),
        any : function (){
            return this.android() || this.ios() || this.windows();
        },
    },
    isDesktop = {
        linux: ()=> ua.match(/linux/i),
        mac: ()=> ua.match(/mac os/i),
        windows:()=> ua.match(/windows nt/i),
        any: function(){
            return this.linux() || this.mac() || this.windows();
        },
    },
    isBrower = {
        chrome: ()=> ua.match(/chrome/i),
        safari:()=> ua.match(/safari/i),
        firefox:()=> ua.match(/firefox/i),
        opera:()=> ua.match(/opera|opera mini/i),
        ie:()=> ua.match(/msie|iemobile/i),
        edge:()=> ua.match(/edge/i),
        any: function(){
            return (this.ie()||this.edge()||this.chrome()||this.safari()||this.firefox()||this.opera());
        },
    };

    $id.innerHTML = `
    <ul>
    <li>User Agent:<b> ${ua} </b> </li>
    <li>Plataforma:<b> ${isMobil.any()?isMobil.any():isDesktop.any()} </b> </li>
    <li>Navegador:<b> ${isBrower.any()} </b> </li>
    </ul>
    `;

    /* Contenido Exclsuivo */
    if(isBrower.chrome()){
        $id.innerHTML += `<p> <mark> Este contenido solo se ve en Chrome </mark> </p>`;
    }

    if(isBrower.firefox()){
        $id.innerHTML += `<p> <mark> Este contenido solo se ve en Firefox </mark> </p>`;
    }

    /* Redirecciones */
    /* if(isMobil.android()){
        window.location.href = "https://jonmircha.com";
    }

    if(isMobil.ios()){
        window.location.href = "https://www.mangatigre.net/";
    } */
}