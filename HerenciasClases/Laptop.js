class Laptop extends Computadora{
    pantalla;
    bateria;
    camara;

    constructor(pantalla, bateria, camara){
        
    }
    
    actualizarDatos = function(pan, bat){
           this.pantalla = pan;
           this.bateria = bat;
        }
}