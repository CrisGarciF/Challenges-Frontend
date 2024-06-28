const d = document;

export default function countdowm(id, limitDate, finalMenssage){
const $countdowm = d.getElementById(id),
countdowmDate = new Date(limitDate).getTime();

let countdowmTempo = setInterval(() => {
    let now = new Date().getTime(),
    limitTime = countdowmDate - now,
    days = Math.floor(limitTime /(1000 * 60 * 60 * 24)),
    hours= ("0" + Math.floor((limitTime %(1000 * 60 * 60 * 24))/(1000*60*60))).slice(-2),
    minutes = ("0" + Math.floor((limitTime %(1000 * 60 * 60))/(1000*60))).slice(-2),
    seconds = ("0" + Math.floor((limitTime %(1000 * 60))/(1000))).slice(-2);

    $countdowm.innerHTML = `<h3>Faltan: ${days} dias ${hours} Horas ${minutes} Minutos ${seconds} Segundos</h3>`
    if(limitTime < 0){
        clearInterval(countdowmTempo);
        $countdowm.innerHTML = `<h3>${finalMenssage}</h3>`
    }
}, 1000);
}