class Person{

    #birth
    #name
    #mood

    get birth(){
        return this.#birth
    }

    get name(){
        return this.#name
    }

    set name(value){
        this.#name=value
    }

    set mood(value){
        this.#mood=value
    }

    constructor(birth,name,mood){
        this.#birth=birth
        this.#name=name
        this.#mood=mood

    }

}
const person= new Person("202","Sanyi","brrrr")
person.mood="szigmakos"

class PersonView{
    #person
    #span


    set footer(feet){
        this.#span.textContent=feet
   
    }

    constructor(person){
        const span=document.createElement("span")
        this.#span=span
        this.#person=person
        const div= document.createElement("div")
        div.innerText=`${this.#person.birth} - ${this.#person.name}`
        document.body.appendChild(div)
        document.body.appendChild(span)
    }
    
}

const personview= new PersonView(person)

console.log(person)

const personviewsigma= new PersonView(person)
personviewsigma.footer="foot"

console.log(person)



