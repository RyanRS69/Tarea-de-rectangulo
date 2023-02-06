class Ceular extends Dispositivo{
    camara;
    numT;
    gb;
    Almacenamiento;
    Ram;

    constructor(camara, numT, gb, Almacenamiento, Ram){
        this.camara = camara;
        this.numT = numT;
        this.gb = gb;
        this.Almacenamiento = Almacenamiento;
        this.Ram = Ram;
    }
    actualizarnumT = function (newNT){
        this.numT = newNT;
    }
    cambiarAlm = function (newAl){
        this.Almacenamiento = newAl;
    }
}