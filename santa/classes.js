class Factory{
    // TODO 1, 2, 3, 4, 9, 10
    constructor(){
        this.manoList = [];
    }

    addMano(mano){
        this.manoList.push(mano); //fontos ide is a this
        createRow(mano);
    }

    createId(){
        return this.manoList.length //a hossza lesz az index ami az id lesz
    }
    manoProducts(product,id){
        for(let i = 0; i < this.manolist.length; i++){
            if(this.manolist[i].id == id){
                this.manolist[i].addProduct(product);
                this.showProducts(this.manolist[i].id);
            }
        }
    }
   }
   
   class Companion{
    // TODO 5

    constructor(id,keresztnev,vezeteknev,reszleg){ //kell minden is
        this.id = id;
        this.keresztnev = keresztnev;
        this.vezeteknev = vezeteknev;
        this.reszleg = reszleg;
        this.productList=[];

    }

    getName(){//nem kell parameter, mert latja a parametereket
       // return this.keresztnev+" "+this.vezeteknev;
       return this.vezeteknev+" "+this.keresztnev;
    }

    addProducts(product){
        this.productList.push(product);
    }
   }