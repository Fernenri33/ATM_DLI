function presionar_tecla() {
    tecla_espacio = event.keyCode;
    if(tecla_espacio == 32){
        document.getElementById('miBoton').click();
    }
    
}
window.onkeydown = presionar_tecla;