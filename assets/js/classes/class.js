

// Ejemplos clases
class Persona {

    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' Instancias';
    }

    static mensaje (){
        console.log('Metodo Estatico');
    }


    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(_nombe = 'Sin nombre', _codigo = 'Sin codigo', _frase = 'Sin frase'){
        
        //if( !_nombe) throw Error('Necesitamos los datos');

        this.codigo = _codigo;
        this.nombre = _nombe;
        this.frase = _frase;
        Persona._conteo++;
    }

    // metodo set
    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    // Metodos get
    get getComidaFavorita(){
        return `la comida favorita de ${this.nombre } es ${this.comida}`;
    }

    // Metodos
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi id es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

const spiderman = new Persona('Peter Parker','Spider', 'Soy tu amigo');
//const iroman = new Persona('Tony Stark','Itoman', 'Soy tu amigo Iro');
spiderman.quienSoy();
//console.log(iroman);
//iroman.miFrase();

spiderman.setComidaFavorita = 'Torta de jamon';

//console.log(spiderman.getComidaFavorita);
//console.log(spiderman);
//Persona._conteo = 2;
console.log('Conteo statico', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();