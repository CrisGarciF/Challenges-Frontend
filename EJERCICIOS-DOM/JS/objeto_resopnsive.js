const d = document,
w = window;

export default function responsiveMedia(id, mq, mobilecontent, desktopContent){
    let breakpoint = w.matchMedia(mq);

    const responsive = (e) =>{
        if(e.matches){
            d.getElementById(id).innerHTML = desktopContent;
        }else{
            d.getElementById(id).innerHTML = mobilecontent;
        }
    };

    breakpoint.addListener(responsive);
    responsive(breakpoint);
}