

class Singleton{


    static instancia; // undefined
    nombre = '';

    constructor(_nombre = ''){
        

        if(!!Singleton.instancia){
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = _nombre;

        return this;
    }

}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Pantera negra');
console.log(` Nombre en la instancia 1 es :  ${instancia1.nombre}` );
console.log(` Nombre en la instancia 2 es :  ${instancia2.nombre}` );
console.log(` Nombre en la instancia 3 es :  ${instancia3.nombre}` );