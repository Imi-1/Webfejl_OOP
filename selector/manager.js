/**
 * @callback NextCardCallback
 * @param {string} text a kirenderelendo kartya szovege
 * 
 * @callback AppendCardTOSolutionCallback
 * @param {string} text A kárta szövege
 * 
 * @callback FinishCallback
 * @param {string} result
 */
class Manager{
    /**
     * @type {Card[]}
     */
    #array

    /**
     * @type {Object} Az igaznak vélt állításokat fogja eltárolni
     */
    #solution

    /**
     * @type {Number} Az aktuális kártya száma
     */
    #currentCardNumber

    /**
     * @type {NextCardCallback}
     */
    #nextCardCallback

    /**
     *  @type {AppendCardTOSolutionCallback}
     */
    #appendCardToSolutionCallback


    /**
     * @type {FinishCallback}
     */
    #finishSolution


    /**
     * 
     * @param {Card[]} array 
     */
    constructor(array){
        this.#array=array
        this.#solution=[]
        this.#currentCardNumber=0
    }


    setNextCardCallback(callback){
        this.#nextCardCallback=callback
    }

    setAppendCardToSolutionCallback(callback){
        this.#appendCardToSolutionCallback=callback
    }

    setFinishCallback(callback){
        this.#finishSolution=callback
    }

    /**
     * 
     * @param {string?} answer 
     */
    nextCard(answer){
        if(answer){//Ha a kartyara kattintva lepunk, eltaroljuk az aktualis valaszt
           this.#solution[this.#currentCardNumber]=answer
            this.#appendCardToSolutionCallback(answer)//A solution objektumban csak akkor lesz ertek amikor igaznak veltuk
            
        }
        this.#currentCardNumber++
        if(this.#currentCardNumber < this.#array.length){
            this.#nextCardCallback(this.#array[this.#currentCardNumber].text)
        }
        else{
            let sum=0
            for(const index in this.#array){
                if(this.#array[index].correct){
                    if(this.#solution[index]){
                        sum++
                    }
                }
                else{
                    if(!this.#solution[index]){
                        sum++
                    }
                }
            }
            const result = `A feladatban ekért pontszám az ${this.#array.length}/${sum}`
            this.#finishSolution(result)
        }

    }

    
        /**
         * felhuzza az els kartyat(megmutatja az els kartya tartalmat)
         */
        start(){
            this.#nextCardCallback(this.#array[0].text)
        }


}