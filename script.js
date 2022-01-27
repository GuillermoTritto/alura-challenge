var campoTexto = document.querySelector("#input-texto");
var encriptar = document.querySelector("#btn-encriptar");
var desencriptar = document.querySelector("#btn-desencriptar");
var resultado = document.querySelector("#msg");
var btnCopiar = document.querySelector("#btn-copy");

encriptar.addEventListener("click", function(event)
{
    event.preventDefault();
    var mensajeEncriptado = encriptarMensaje(campoTexto.value);
    console.log(mensajeEncriptado);
    resultado.value = mensajeEncriptado;
});

desencriptar.addEventListener("click", function(event)
{
    event.preventDefault();
    var mensajeDesencriptado = desencriptarMensaje(campoTexto.value);
    resultado.value = mensajeDesencriptado;
});

btnCopiar.addEventListener("click", function(event)
{
    event.preventDefault();
    copiar(resultado);
    campoTexto.value = " ";
})

function encriptarMensaje(mensaje)
{ 
    var textoEncriptado = "";
    for(var i = 0; i<mensaje.length; i++)
    {
        if(mensaje[i] == "a")
        {
            textoEncriptado += "ai";
        }
        else if(mensaje[i] == "e")
        {
            textoEncriptado += "enter";
        }
        else if(mensaje[i] == "i")
        {
            textoEncriptado += "imes"
        }
        else  if(mensaje[i] == "o")
        {
            textoEncriptado += "ober";
        }
       else if(mensaje[i] == "u")
        {
            textoEncriptado += "ufat";
        }
        else 
        {
            textoEncriptado += mensaje[i];
        }
    }
    return textoEncriptado;
}

function desencriptarMensaje(mensaje)
{
  var desebncriptaA = mensaje.replace(/ai/g, "a");
  desencriptaE = desebncriptaA.replace(/enter/g, "e");
  desencriptaI = desencriptaE.replace(/imes/g, "i");
  desencriptaO = desencriptaI.replace(/ober/g, "o");
  textoDesencriptado = desencriptaO.replace(/ufat/g, "u");
  return textoDesencriptado;
}

function copiar (texto)
{
   texto.select();
   document.execCommand("copy");

}

/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertiido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/