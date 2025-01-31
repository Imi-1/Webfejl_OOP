/**
 * @typedef {{nev:string, eletkor:number}}Person
 * @callback UpdateCallback
 * @param {Person[]} persons
 * @returns {void}
 */


class Datamanager{
    /**
     * @type {Person[]}
     */
    #array

    /**
     * @type {UpdateCallback}
     */
    #updateCallback

    /**
     * 
     * @param {Person[]} array 
     */
    constructor(array=[]){
        this.#array=array
        this.#updateCallback = () =>{}
    }

    /**
     * 
     * @param {UpdateCallback} callback 
     */
    setUpdateCallback(callback){
        this.#updateCallback=callback
        this.#updateCallback(this.#array)
    }


    /**
     * 
     * @param {Person[]} item 
     */
    add(item){
        this.#array.push(item)
    }


    /**
     * 
     * @param {number} age 
     */
    filterAge(age){
        const result =[]
        for(const elem of this.#array){
            if(elem.eletkor===age){
                result.push(elem)
            }
        }
        this.#updateCallback(result)

    }

    /**
     * 
     * @param {string} name 
     */
    filterName(name){
        const result =[]
        for(const elem of this.#array){
            if(elem.nev.includes(name)){
                result.push(elem)
            }
        }
        this.#updateCallback(result)
    }

}


class Datatable{
    /**
     * @param {Datamanager} dataManager
     */
    constructor(dataManager){
        const table = document.createElement("table")
        document.body.appendChild(table)

        const tbody = document.createElement("tbody")
        table.appendChild(tbody)

        dataManager.setUpdateCallback((person) => {

            tbody.innerHTML=""

            for(const pers of person){
                const tr= document.createElement("tr")
                tbody.appendChild(tr)

                const td1= document.createElement("td")
                td1.innerHTML=pers.nev
                tr.appendChild(td1)

                const td2= document.createElement("td")
                td2.innerHTML=pers.eletkor
                tr.appendChild(td2)

            }
        })

    }
}
const dataManager = new Datamanager([{eletkor:4,nev:"saci"},{eletkor:5,nev:"saci cica"},{eletkor:6,nev:"dagadt saci cica"}])
const dataTable = new Datatable(dataManager)

const input = document.createElement("input");
document.body.appendChild(input);

input.addEventListener("input",(e)=>{

    e.currentTarget.value=filterAge(),filterName()
})