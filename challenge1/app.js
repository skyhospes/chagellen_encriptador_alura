
var visual = document.querySelector(".visualEncriptador");
var visualResultado = document.querySelector(".resultado")
var btnEncriptar = document.querySelector(".btn1");
var btnDesencriptar = document.querySelector(".btn2");
var textoResultado = document.querySelector(".textoMostrado");
var btncopiar = document.querySelector(".btn-copiar");
var animation = document.querySelector(".salidatext");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btncopiar.onclick = copia;


function encriptar(){
    ocultarVisual();
    textoResultado.textContent = encriptador(guardartext());
    mostrarResultado();
    animation.classList.add("animacion");
}

function desencriptar(){
    ocultarVisual();
    textoResultado.textContent = desencriptador(guardartext());
    mostrarResultado();
    animation.classList.add("animacion");
}

function guardartext(){
    var text = document.querySelector(".text");
    return text.value;
}

function ocultarVisual (){
    visual.classList.add("vertexto");
}

function mostrarResultado(){
    visualResultado.classList.remove("vertexto");
}

function encriptador(mensaje){

    var ingreso = mensaje;
    var textoFinal = "";

    for(var i = 0; i < ingreso.length; i++){

        if(ingreso[i] == "a"){
            textoFinal =textoFinal + "ai"
        }

        else if(ingreso[i] == "e"){
            textoFinal =textoFinal + "enter"
        }

        else if(ingreso[i] == "i"){
            textoFinal =textoFinal + "imes"
        }

        else if(ingreso[i] == "o"){
            textoFinal =textoFinal + "over"
        }

        else if(ingreso[i] == "u"){
            textoFinal =textoFinal + "ufat"
        }

        else{
            textoFinal = textoFinal + ingreso[i];
        }

    }
    return textoFinal;
}

function desencriptador(mensaje){

    var ingreso = mensaje;
    var textoFinal = "";

    for(var i = 0; i < ingreso.length; i++){

        if(ingreso[i] == "a"){
            textoFinal =textoFinal + "a"
            i = i + 1;
        }

        else if(ingreso[i] == "e"){
            textoFinal =textoFinal + "e"
            i = i + 4;
        }

        else if(ingreso[i] == "i"){
            textoFinal =textoFinal + "i"
            i = i + 3;
        }

        else if(ingreso[i] == "o"){
            textoFinal =textoFinal + "o"
            i = i + 3;
        }

        else if(ingreso[i] == "u"){
            textoFinal =textoFinal + "u"
            i = i + 3;
        }

        else{
            textoFinal = textoFinal + ingreso[i];
        }

    }
    return textoFinal;
}

function copia() {

    var content = document.querySelector(".textoMostrado");
    
    navigator.clipboard.writeText(content.innerHTML);
    document.querySelector(".text").value = " ";
    location.reload()
    //document.querySelector(".text").focus();

    //alert("Copied!");
}





