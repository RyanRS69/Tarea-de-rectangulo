class Rectangulo {
    base;
    altura;

    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }    

    area = function (){
    return this.base * this.altura;
    }
}

var rec = new Rectangulo(3, 8);

console.log(rec.area());

//this is my code Ryan Rocha Salgado x_x