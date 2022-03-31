var campoTexto = document.querySelector("#input-texto");
var encriptar = document.querySelector("#btn-encriptar");
var desencriptar = document.querySelector("#btn-desencriptar");
var caracterErrado = document.querySelector("#error-caracter");
var resultado = document.querySelector("#msg");
var btnCopiar = document.querySelector("#btn-copy");
var caracteresAdmitidos = "qwertyuiopasd fghjklñzxcvbnm,;.:!";

campoTexto.addEventListener("input", function(){
    var entrada = this.value;
    if (cadenaValida(entrada)) {
        btnEncriptar.disabled = false;
        btnDesencriptar.disabled = false;
      caracterErrado.classList.add("invisible");
    } else {
        btnEncriptar.disabled = true;
        btnDesencriptar.disabled = true;
      caracterErrado.classList.remove("invisible");
    }
});

function cadenaValida(inputString){
  var validString = true;
  for(var x=0; x<inputString.length; x++){
      if (!caracteresAdmitidos.includes(inputString[x])) {
        validString = false;
      }
    }
  return validString;
  }



encriptar.addEventListener("click", function(event)
{
    event.preventDefault();
    var mensajeEncriptado = encriptarMensaje(campoTexto.value);
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