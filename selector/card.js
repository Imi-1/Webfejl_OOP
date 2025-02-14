/**
 * Egy entitas amit a manager osztalyunk kezelni fog.
 */
class Card{
    /**
     * @type {string}
     */
    #text

    /**
     * @type {boolean}
     */
    #correct

    /**
     * @returns {string} a kartya szoveges tartalma
     */
    get text(){
        return this.#text
    }

    /**
     * @returns {boolean} A válasz igazság értéke
     */
    get correct(){
        return this.#correct
    }

    /**
     * 
     * @param {string} text A kártya szövege
     * @param {boolean} correct A kártya iga-e
     */
    constructor(text,correct){
        this.#text=text
        this.#correct=correct
    }
}