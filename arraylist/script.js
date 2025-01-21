class ArrayList{
    /**
     * Ez tárolja el a arraylist hosszát
     * @type (Number)
     */
    #length
    #state

    get Count(){
        return this.#length
    }

    constructor(){
        this.#length=0;
        this.#state={}
    }

    Add(item){
        const index = this.#length; //hossz eltarolasa
        this.#state[index]=item;//a belso objektum tulajdonsaganak megadjuk a bemeneti erteket
        Object.defineProperty(this, index,{
            get: function(){
                return this.#state[index]
            },
            set: function(value){
                this.#state[index]=value
            },
            configurable:true,
            enumerable:true
        } )// az aktualis indexxel el akarjuk erni a hozzaadott elemet a peldanyon keresztul

        this.#length++
    }

    Clear(){
        this.#length=0;
        this.#state={};

        for (let i in this) {
            if (this.hasOwnProperty(i)) {
                delete this[i]; // töröljük a kulcsokat
            }
        }
    }

    Contains(item) {
        for (let i = 0; i < this.#length; i++) {
            if (this[i] === item) { // Ha találunk egy egyezést, visszaadjuk az igaz értéket
                return true;
            }
        }
        return false; // Ha nincs egyezés, visszaadjuk a hamis értéket
    }

}

const list = new ArrayList();

const nev1 = {nev: "waa"};
const nev2 = {nev: "wee"};
const szam1 = {szam: 7};
const szam2 = {szam: 5};

list.Add(nev1);
list.Add(nev2);
list.Add(szam1);

console.log(list.Contains(nev1)); // true
console.log(list.Contains(nev2)); // true
console.log(list.Contains(szam1)); // true
console.log(list.Contains(szam2)); // false


// const kakas = {};
// Object.defineProperty(kakas, "nev",{
//     value:"geza",
//     writable:true
// } 

// )
// kakas.nev="asd"
// console.log(kakas)


// const pers={}
// pers.a="Ferenc";
// pers["a"]="Feri";
// pers[0]="tojás"

// console.log(pers)