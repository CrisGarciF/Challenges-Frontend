const d = document;

export function valida(input){
    const tipoInput = input.dataset.tipo;
    if(validadores[tipoInput]){
        validadores[tipoInput](input)
    }

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML =""
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = MostrarmensajesError(tipoInput, input)
    }
}

const tipoErrores = [
    "valueMissing",
    "typeMismatch",
    "patterMismatch",
    "customError",
]

const mensajesError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio"
    },
    email:{
        valueMissing: "El campo correo no puede estar vacio",
        typeMismatch: "El correo no es valido",
    },
    password: {
        valueMissing: "El campo contraseña no puede estar vacio",
        patterMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
    },
    nacimiento:{
        valueMissing: "El campo fecha no puede estar vacio",
        customError: "Debes tener al menos 18 años",
    },
    numero:{
        valueMissing: "El campo no puede estar vacio",
        patterMismatch: "El formato requerido es XXXXXXXXXX 10 numeros",
    },
    direccion:{
        valueMissing: "El campo no puede estar vacio",
        patterMismatch: "La direccion debe contener de 10 a 40 dijitos",
    },
    cuidad:{
        valueMissing: "El campo no puede estar vacio",
        patterMismatch: "La cuidad debe contener de 1 a 40 dijitos",
    },
    estado:{
        valueMissing: "El campo no puede estar vacio",
        patterMismatch: "La estado debe contener de 1 a 40 dijitos",
    },
}

const validadores = {
    nacimiento: input => validarNAcimiento(input)
}

function MostrarmensajesError(tipoInput, input){
    let mensaje = ""
    tipoErrores.forEach( error =>{
        if(input.validity[error]){
            mensaje = mensajesError[tipoInput][error]
        }
    })
    return mensaje
}


function validarNAcimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje = ""
    if(!mayorEdad(fechaCliente)){
        mensaje = "Debes tener al menos 18 años";
    }

    input.setCustomValidity(mensaje)
}

function mayorEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());
    return diferenciaFechas < fechaActual;
}