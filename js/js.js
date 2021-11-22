class Merk{
    constructor(naam) {
        this.naam= naam;
    }
}

class Soort{
    constructor(geslacht) {
        this.geslacht=geslacht;
    }
}
class Kleur{
    constructor(benamingKleur) {
        this.benamingKleur;
    }
}
class Size{
    constructor(afmetingWiel) {
        this.afmetingWiel= afmetingWiel;
    }
}
class Acties{
    constructor(beweging, uitvoering) {
        this.beweging= beweging;
        this.uitvoering= uitvoering;
    }
    toString(){
        this.beweging + "25km/u" + this.uitvoering + "ring ring" ;
    }

}
class Snelheid{
    constructor(snelheid) {
        this.snelheid= snelheid;
    }
}
