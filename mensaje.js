function encriptar(texto) {
    let textoEncriptado = "";
    texto = texto.toLowerCase();
    textoEncriptado = texto.replaceAll('e', 'enter');
    textoEncriptado = textoEncriptado.replaceAll('i', 'imes');
    textoEncriptado = textoEncriptado.replaceAll('a', 'ai');
    textoEncriptado = textoEncriptado.replaceAll('o', 'ober');
    textoEncriptado = textoEncriptado.replaceAll('u', 'ufat');
    return textoEncriptado;
}


function desencriptar(textoEncriptado) {
    let original = "";
    textoEncriptado = textoEncriptado.toLowerCase();

    original = textoEncriptado.replaceAll('enter', 'e');
    original = original.replaceAll('imes', 'i');
    original = original.replaceAll('ai', 'a');
    original = original.replaceAll('ober', 'o');
    original = original.replaceAll('ufat', 'u');

    return original;
}

function validarTexto() {
    const textarea = document.getElementById('text-area');
    const valorTextArea = textarea.value.trim();
    const regexp = /^([a-z\s]+)$/;
    if (regexp.test(valorTextArea)) {
        document.getElementById('encriptar').disabled = false;
        document.getElementById('desencriptar').disabled = false;
        document.getElementById('encriptar').classList.remove('boton-deshabilitado');
        document.getElementById('desencriptar').classList.remove('boton-deshabilitado');
    } else {
        
        document.getElementById('encriptar').disabled = true;
        document.getElementById('desencriptar').disabled = true;
        document.getElementById('encriptar').classList.add('boton-deshabilitado');
        document.getElementById('desencriptar').classList.add('boton-deshabilitado');
    }
}

function mostrarMensajeEncriptado() {
    let textarea = document.getElementById("text-area");
    let textareaResultado = textarea.value;
    let textoencriptado = encriptar(textareaResultado);
    let resultado = document.getElementById("resultado-texto");
    desaparecerSeccion();
    resultado.innerHTML = textoencriptado;
}

function mostrarMensajeDesencriptado() {
    let textarea = document.getElementById("text-area");
    let cadenaEncriptada = textarea.value;

    let textoDesencriptado = desencriptar(cadenaEncriptada);
    let cadenaDesencriptada = document.getElementById("resultado-texto");
    desaparecerSeccion();
    cadenaDesencriptada.innerHTML = textoDesencriptado;
}

async function copiarTexto() {
    let parrafoResultadoTexto = document.getElementById("resultado-texto");
    let contenido = parrafoResultadoTexto.innerHTML
    await navigator.clipboard.writeText(contenido);
    alert(`El texto ${contenido} ha sido copiado al portapapeles`);

}

function desaparecerSeccion() {
    let seccionDefecto = document.getElementById('seccion-defecto');
    let seccionResultado = document.getElementById('seccion-resultado');
    seccionDefecto.classList.add('desaparecer');
    seccionResultado.classList.remove('desaparecer');
}