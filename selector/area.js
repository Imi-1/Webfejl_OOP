class Area{
    /**
     * @type {HTMLDivElement} az adott area peldany teruletenek az eleme
     */
    #div;

    get div(){
        return this.#div;
    }

    /**
     * 
     * @param {string} cssclass beallitja az adott terulet css osztalyat
     */
    constructor(cssclass,manager){
        const container=this.#getcontainer()
        this.#div=document.createElement('div')
        this.#div.className=cssclass
        container.appendChild(this.#div)
        manager.setFinishCallback((eredmeny)=>{
            container.innerHTML=""
            const div = document.createElement("div")
            div.className="result"
            div.textContent=eredmeny
            container.appendChild(div)
        })

    }
    /**
     * megnezi hogy endelkezik-e container classal rendelkezo div element
     * @return {HTMLDivElement} az area szulo div containere
     */
    #getcontainer(){
        let container = document.querySelector('.container')
            if(!container){
                container=document.createElement("div")
                container.className = 'container'
                document.body.appendChild(container)
            }
            return container;
    }
}




/**
 * Ez fogja tatalmazni a paklit (mindig egy darab kártya jelenít meg)
 */
class DeckArea extends Area{
    /**
     * 
     * @param {string} cssclass 
     * @param {Manager} manager 
     */
    constructor(cssclass,manager){
        super(cssclass,manager)
        manager.setNextCardCallback((kartyaszoveg)=>{
            this.div.innerHTML=""
            const skipbutton = document.createElement("button")
            skipbutton.textContent="skip"
            skipbutton.addEventListener("click", () =>{
                manager.nextCard()
            })
            this.div.appendChild(skipbutton)
            const cardElement = document.createElement("div")
            cardElement.textContent=kartyaszoveg
            cardElement.className="largecard"
            cardElement.addEventListener("click",()=>{
                manager.nextCard(kartyaszoveg)
            })
            this.div.appendChild(cardElement)

        })
    }
}

/**
 * Ez tartalmazza az iganak vélt kártyáinkat
 * @param {Manager} manager
 * @param {string} cssclass
 */
class SolutionArea extends Area{
    constructor(cssclass,manager){
        super(cssclass,manager)
        manager.setAppendCardToSolutionCallback((kartyaszoveg)=>{
            const card = document.createElement('div')
            card.className="card"
            card.textContent=kartyaszoveg
            this.div.appendChild(card)
        })
    }
}