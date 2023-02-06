class Computadora extends Dispositivo{
    tarjetaG;
    puertos;
    SO;

    constructor(tarjetaG, puertos, SO){
        this.tarjetaG = tarjetaG;
        this.puertos = puertos;
        this.SO = SO;
    }
    actualizarSO = function (newSO){
        this.SO = newSO;
    }

    actualizarTG = function (newTG){
        this.tarjetaG = newTG;
    }
}