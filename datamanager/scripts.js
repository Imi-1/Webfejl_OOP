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
        this.#updateCallback(this.#array)
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

    filterAge(age){
        const age_result = [];
        for(const elem of this.#array){
            if(elem.eletkor === age){
                age_result.push(elem);
            }
        }
        this.#updateCallback(age_result);
    }

    /**
     * 
     * @param {function(Person):boolean}callback
     */
    filter(callback){
        const result =[]
        for(const elem of this.#array){
            if(callback(elem)){
                result.push(elem)
            }
        }
        this.#updateCallback(result)
    }   


    orderBy(compareCallback) {
        const result = []
        for(const i of this.#array){
            result.push(i);
        }
        for(let i = 0; i < result.length - 1; i++){
            for(let j = i + 1; j < result.length; j++){
                if(compareCallback(result[i], result[j]) > 0){
                    const tmp = result[i];
                    result[i] = result[j];
                    result[j] = tmp;
                }
            }
        }
        this.#updateCallback(result);
}
}


class Datatable{
    #tbody
    /**
     * @param {Datamanager} dataManager
     */
    constructor(dataManager){
        const table = document.createElement("table")
        document.body.appendChild(table)

        const thead = document.createElement('thead');
        table.appendChild(thead);

        const headerRow = document.createElement('tr');
        thead.appendChild(headerRow);
        
        const thName = document.createElement('th');
        thName.innerHTML = 'Név';
        headerRow.appendChild(thName);

        dataManager.orderBy((a, b) => a.nev.localeCompare(b.nev));

        const thAge = document.createElement('th');
        thAge.innerHTML = 'Életkor';
        headerRow.appendChild(thAge);

        dataManager.orderBy((a, b) => b.eletkor - a.eletkor);


        this.#tbody = document.createElement("tbody")
        table.appendChild(this.#tbody)

        dataManager.setUpdateCallback((person) => {
            this.#renderTable(person);
        })

    }

    #renderTable(person){
        this.#tbody.innerHTML = '';
        for (const pers of person){
            const tr = document.createElement('tr');
            this.#tbody.appendChild(tr);
            
            const td1 = document.createElement("td");
            td1.innerHTML = pers.nev;
            tr.appendChild(td1);
            const td2 = document.createElement("td");
            td2.innerHTML = pers.eletkor;
            tr.appendChild(td2);
        }
    }
}




const dataManager = new Datamanager([{eletkor:4,nev:"saci"},{eletkor:5,nev:"saci cica"},{eletkor:6,nev:"dagadt saci cica"}])
const dataTable = new Datatable(dataManager)

const input1 = document.createElement("input");
document.body.appendChild(input1);

const input2 = document.createElement("input");
document.body.appendChild(input2);

input1.addEventListener('input', (e) =>{
    dataManager.filterName(input1.value);
});

input2.addEventListener('input', (e) =>{
    const age_input = Number(input2.value);
    dataManager.filter((pers) =>{
        return pers.eletkor===age_input
    })
});




const input3=document.createElement("input")
input3.type="file";
document.body.appendChild(input3)

input3.addEventListener('change', (e) =>{
    const file = e.target.files[0]
    
    const reader = new FileReader()
    reader.readAsText(file)

    reader.onload = (e) =>{
        const fileContent= reader.result
        console.log(fileContent)

        const splitting =fileContent.split("\n")

        for(const i of splitting){
            const data = i.split(";")
            const pers = {
                nev: data[0],
                eletkor: Number(data[1])
            }
            dataManager.add(pers)
        }

    }

});
