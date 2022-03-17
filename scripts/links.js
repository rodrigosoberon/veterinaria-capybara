let mensajeAlerta = "Está función no está disponible aún por estar fuera del alcance de la etapa actual del proyecto."
let botones = document.querySelectorAll('[id=mi-boton]');
let linkTarjetas =  document.getElementsByClassName("card-link");

function alertaClick(){
    alert(mensajeAlerta);
}

for (let i = 0; i < botones.length; i++) {
    const boton = botones[i];
    boton.addEventListener("click", alertaClick);
}

for (let i=0; i < linkTarjetas.length; i++){
    const link = linkTarjetas[i];
    link.addEventListener("click", alertaClick);
}
