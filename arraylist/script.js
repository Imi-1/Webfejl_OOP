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
            get: ()=>{
                return this.#state[index]
            },
            set: (value)=>{
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

class ArrayHtmlElement extends HTMLElement{
    #tbody

    constructor(){
        super()
    }

    connectedCallback(){
        const table = document.createElement("table")
        this.appendChild(table)

        this.#tbody = document.createElement("tbody")
        table.appendChild(this.#tbody)

        const thead = document.createElement("thead")
        table.appendChild(thead)

    }

    /**
     * 
     * @param {{nev:string, eletkor:number}} param 
     */
    addpersonRow(param){
        const tr = document.createElement("tr")
        this.#tbody.appendChild(tr)

        const td1 = document.createElement("td")
        td1.innerHTML=param.nev
        tr.appendChild(td1)

        const td2 = document.createElement("td")
        td2.innerHTML=param.eletkor
        tr.appendChild(td2)
    }
}

customElements.define("array-table", ArrayHtmlElement)
const arraytable = new ArrayHtmlElement();
document.body.appendChild(arraytable)


arraytable.addpersonRow({nev:"cirmi",eletkor:5})

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