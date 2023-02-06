class PC extends Computadora{
    fuenteP;
    nGab;
    SO;
    constructor(fuenteP, nGab, SO){
        this.fuenteP = fuenteP;
        this.nGab = nGab;
        this.SO = SO;
    }
    actualizarNG = function(newNG){
        this.nGab = newNG;
    }
}