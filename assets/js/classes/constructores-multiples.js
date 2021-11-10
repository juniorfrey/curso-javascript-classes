

class Persona{

    static porObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo(){
        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const nombre = 'Melissa', apellido = 'Florez', pais = 'Colombia';

const per = {
    nombre : 'Fredys', 
    apellido : 'Fernandez', 
    pais : 'Colombia'
}

const persona1 = new Persona(nombre, apellido, pais);
const persona2 = Persona.porObjeto(per);

persona1.getInfo();
persona2.getInfo();