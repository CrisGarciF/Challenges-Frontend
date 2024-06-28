const d = document;

const checkComplete = () =>{
    const i = d.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTaske)

    return i 
}

const completeTaske = (e) =>{
    const  elemento = e.target;
    elemento.classList.toggle("fas");
    elemento.classList.toggle("completeIcon");
    elemento.classList.toggle("far");
}

export default checkComplete;