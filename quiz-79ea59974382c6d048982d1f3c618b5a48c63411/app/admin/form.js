/**
 * felel a form mukodesert
 */
class FormController{

    #formFieldArray

    #manager

    constructor(manager, fieldConfiguration){
        const form = document.createElement("form")
        this.#formFieldArray=[]
        document.body.appendChild(form)
        this.#manager=manager
        for(const config of fieldConfiguration){
            const formField = new FormField(config.id, config.label)
            this.#formFieldArray.push(formField)
            form.appendChild(formField.getFormField())
        }
        const button = document.createElement("button")
        button.textContent = "Elkuld"
        form.appendChild(button)
        form.addEventListener("submit", (e) =>{
            e.preventDefault()
            if(this.#validateAllFields()){
                const value = this.#getValueObject()
                const answers = [
                    value.answer1,
                    value.answer2,
                    value.answer3,
                    value.answer4,
                ]
                const question = new Question (value.questionText,answers, value.rightAnswer)
                this.#manager.add(question)
                e.target.reset()
            }

        })

    }
    #validateAllFields(){
        let valid = true
        for(const field of this.#formFieldArray){
            field.error = ""
            if(field.value === ""){
                field.error="Mezo kitoltese kotelezo"
                valid=false
            }
        }

        return valid
    }


    #getValueObject(){
        let type= "{"
        const result ={}
        for(const field of this.#formFieldArray){
            result[field.id]=field.value
            type += `${field.id}: ${typeof field.value},`
        }
        type += "}"
        console.log(type)
        return result
    }
}

class FormField{
    /**
     * @type {string}
     */
    #id

    #label

    #input
    #errorField

    get id(){
        return this.#id
    }

    get value(){
        return this.#input.value
    }

    set error(value){
        this.#errorField.textContent = value
    }

    constructor(id, lableContent){
        this.#id=id
        this.#label=Gomszab.makeLabel(id, lableContent)
        this.#input=Gomszab.makeInput(id)
        this.#errorField=Gomszab.makeErrorField()

    }

    
    getFormField(){
        const div = Gomszab.makeDiv([this.#label,this.#input, this.#errorField])
        return div
    }
}
