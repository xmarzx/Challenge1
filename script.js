

function encriptar(){
    
    var texto=document.getElementById("inputTexto").value.toLowerCase();
    if(texto==''){
        alert("El textarea no puede estar vacío");
        }

    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("persona").style.display="none";
    document.getElementById("texto1").style.display="none";
    document.getElementById("derecha").style.height="86%";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("btn-copiar").style.display="show";
    document.getElementById("btn-copiar").style.display="inherit";
    
}

function desencriptar(){
   
    var texto=document.getElementById("inputTexto").value.toLowerCase();
    if(texto==''){
        alert("El textarea no puede estar vacío");  
        }
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("persona").style.display="none";
    document.getElementById("texto1").style.display="none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("btn-copiar").style.display="show";
    document.getElementById("btn-copiar").style.display="inherit";
}

function copiar(){
    var contenido= document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("Mensaje copiado");
}
