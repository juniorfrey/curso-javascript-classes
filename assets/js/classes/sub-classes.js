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

    renombre(_nombre){
        console.log(`Tu nuevo nombre es: ${_nombre} y antes te llamabas ${this.nombre}`) ;
    }
}

class Heroe extends Persona{
    clan = 'Sin clan';

    constructor(_nombre, _codigo, _frase, _clan){
        super(_nombre, _codigo, _frase);
        this.clan = _clan;
    }

    quienSoy(name){
        //console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.renombre(name);
    }
}

const spiderman = new Heroe('Peter Parker','Spider', 'Soy tu amigo','ClanEs');
console.log(spiderman);
spiderman.quienSoy('Fredys');