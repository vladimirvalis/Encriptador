const inputTexto = document.querySelector(".inputTexto");
const mensaje = document.querySelector(".mensaje");

/* 
La letra "a" es reemplazada por "ai"
La letra "e" es reemplazada por "enter"
La letra "i" es reemplazada por "imes"
La letra "o" es reemplazada por "ober"
La letra "u" es reemplazada por "ufat"
*/

function botonEncriptador(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}

function botonDesencriptador(){
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensaje.value = textoDesencriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}

function encriptar(texto){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    texto = texto.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(texto.includes(matrizCodigo[i][0])){
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return texto;
}

function desencriptar(texto){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    texto = texto.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(texto.includes(matrizCodigo[i][1])){
            texto = texto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return texto;
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    alert("Texto copiado")
}