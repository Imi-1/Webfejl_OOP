class ArrayList{
    /**
     * Ez tárolja el a arraylist hosszát
     * @type (Number)
     */
    #lenght
    #state

    get Count(){
        return this.#lenght
    }

    constructor(){
        this.#lenght=0;
        this.#state={}
    }

    Add(item){
        const index = this.#lenght; //hossz eltarolasa
        this.#state[index]=item;//a belso objektum tulajdonsaganak megadjuk a bemeneti erteket
        Object.defineProperty(this, index,{
            get: function(){
                return this.#state[index]
            },
            set: function(value){
                this.#state[index]=value
            },
            writable:true
        } )// az aktualis indexxel el akarjuk erni a hozzaadott elemet a peldanyon keresztul

        this.#lenght++
    }

    Clear(){
        this.#lenght=0;
        this.#state={};
    }

}

const kakas = {};
Object.defineProperty(kakas, "nev",{
    value:"geza",
    writable:true
} 

)
kakas.nev="asd"
console.log(kakas)


const pers={}
pers.a="Ferenc";
pers["a"]="Feri";
pers[0]="tojás"

console.log(pers)