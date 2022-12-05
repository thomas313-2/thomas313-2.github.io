let enlaces =  document.getElementsByClassName("enlace");

for(let i = 0; i < enlaces.length; i++){
    enlaces[i].addEventListener("click", mostrarContenido, false);
}

function mostrarContenido(){
    let abajo = "fa-angle-down";
    let arriba = "fa-angle-up";
    let id = this.id;
    let mostrarContenido = document.getElementById(id).className;
    if(mostrarContenido[18] == "d"){
        let numero = id.slice(7);
        let info = document.getElementById("info_"+numero);
        info.style.display = "block";
        document.getElementById(id).style.display = "none";
        document.getElementById(id + ".1").style.display = "block";
    }else{
        let numero = id.slice(7);
        if(numero.length == 4){
            numero = (numero[0] + numero[1]);
        }else{
            numero = numero[0];
        }
        console.log(numero);
        let info = document.getElementById("info_"+numero);
        info.style.display = "none";
        document.getElementById(id).style.display = "none";
        let id_bajo = id.slice(0, id.length-2);
        document.getElementById(id_bajo).style.display = "block";
    }
}