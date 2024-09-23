let cantidad = document.getElementById("cantidad");
let contrasena = document.getElementById("contrasena");
let mensaje = document.getElementById("mensaje");
let color = document.getElementById("color")

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.!@#$%^&*()";

function generar(){
    let numDigitado = parseInt(cantidad.value);
    if(numDigitado >= 8){
        
        let password = ""
        for (let i = 0; i < numDigitado; i++){
            let caracAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
            password += caracAleatorio;
        }

        contrasena.value = password;

        let tieneLetra = /[A-Za-z]/.test(password);
        let tieneNum = /[0-9]/.test(password);
        let tieneSimbolo = /[.!@#$%^&*()]/.test(password);
        if (tieneLetra && tieneNum && tieneSimbolo){
            mensaje.innerText = "La contraseña es segura";
            color.style.backgroundColor = "green";
        } else if (tieneLetra && (tieneNum || tieneSimbolo)){
            mensaje.innerText = "La contraseña es moderada";
            color.style.backgroundColor = "orange";
        } else {
            mensaje.innerText = "La contraseña es insegura";
            color.style.backgroundColor = "red";
        }


    } else{
        alert("Para una contraseña segura, la cantidad debe ser mayor o igual a 8. Por favor intente de nuevo. ");
    }

}

function limpiar(){
    cantidad.value = "";
    contrasena.value = "";
    mensaje.innerText = "";
    color.style.backgroundColor = "transparent";
}
