/**
 * @type {{
*   firstName: string;
*   lastName: string;
*   products: string[];
*   area: string;
* }[]}
*/
const companionList = [
   {
       firstName: 'Géza',
       lastName: 'Kiss',
       area: 'plastic',
       products: ['kisauto', 'barbibaba']
   },
   {
       firstName: 'Ferenc',
       lastName: 'Tóth',
       area: 'paper',
       products: ['könyv']
   },
   {
       firstName: 'Gábor',
       lastName: 'Nagy',
       area: 'plastic',
       products: ['zokni']
   },
]
const factory = new Factory();

document.getElementById('companion').addEventListener('submit',function(e){
   e.preventDefault();
   const form =  e.currentTarget
   addCompanion(form, factory);
});

document.getElementById('product').addEventListener('submit',function(e){
   e.preventDefault();
   const form = e.currentTarget;
   addProductForm(form, factory)
   
});

/**
* table render
*/
function initTable(){
   // TODO 6

   for(let i=0; i < companionList.length; i++){
      const currentElement= companionList[i]; //belerakom a lista aktualis elemet
      const companion =new Companion(i, currentElement.firstName, currentElement.lastName, currentElement.area) //companionba blerakom a konstruktor cuccait, a konstruktort azt meghivtuk mert mar kesz volt

         for(const j of currentElement.products){//a foron belul vegigmegyek a products tombokon is
            companion.addProducts(j);//a compainon peldanynak meghivjuk az addproducts fuggvenyet es beletesszuk az aktualis produktumot
         }

      factory.addMano(companion);
      }

      console.log(companion);
}  


initTable()

/**
* 
* eventlistener callback for the button click of companion
* 
* @param {EventTarget} e 
*/
function checkEventListener(e){
   const row = e.currentTarget.parentElement.parentElement;
   const companionId = row.id;
   factory.manoProducts(row.id)
   // TODO 10
}