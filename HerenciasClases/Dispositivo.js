class Dispositivo {
    Marca;
    Modelo;
    #NS;
    Procesador;
    Ram;
    Almacenamiento;

    constructor(Marca, Modelo, NS, Procesador, Ram, Almacenamiento){
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.#NS = NS;
        this.Procesador = Procesador;
        this.Almacenamiento = Almacenamiento;

    }

    actNS = function(NuevoNS){
        this.#NS = NuevoNS;
    }

}

