const d = document;

export default function responsiveTester(from) {
    const $from = d.getElementById(from);
    let tester;

    d.addEventListener("submit",(e)=> {
        if(e.target === $from){
            e.preventDefault();
            tester = window.open($from.direccion.value,"tester",`innerWidth=${$from.ancho.value}, innerHeight=${$from.alto.value}`);
        }
    });

    d.addEventListener("click",e=>{
        if(e.target === $from.cerrar) tester.close();
    });
}