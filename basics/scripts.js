// function Player(nickname){
//     this.nickname=nickname;
//     this.palyedMatch=0;
// }

// Player.prototype.play=
// function(){
// this.palyedMatch++;
// console.log(this.nickname,this.palyedMatch)
// }


// Player.prototype.getTierLevel=
// function(){
//     if(this.palyedMatch < 4){
//         return"A";
//     }
//     else if(this.palyedMatch < 7 && this.palyedMatch > 3){
//         return"B";
//     }
//     else{
//         return"C";
//     }
    
// }


class Player{
    constructor(nickname){
        this.nickname=nickname;
        this.palyedMatch=0;
    }

    play(){
        this.palyedMatch++;
        console.log(this.nickname,this.palyedMatch)
    }

    getTierLevel(){
        if(this.palyedMatch < 4){
                    return"A";
                }
                else if(this.palyedMatch < 7 && this.palyedMatch > 3){
                    return"B";
                }
                else{
                    return"C";
                }
    }
}
const gomszab=new Player("Gomszab");
console.log(gomszab);
gomszab.play()
gomszab.play()
gomszab.play()
gomszab.play()

console.log(gomszab.getTierLevel())


class Person{
    constructor(name){
        this.name=name;
    }

    getName(){
        return this.name;
    }
}

class Student extends Person{
    constructor(school,name){
        super(name);
        this.school=school;
    }
}

const geza=new Student("Bólyai","Géza");
console.log(geza.getName());


// class Animal{
//     constructor(hangja,csinalja){
//         this.hangja=hangja;
//         this.csinalja=csinalja;
//     }

//     kiir() {
//         console.log(`A/Az ${this.nev} azt mondja, hogy ${this.hangja} és ${this.csinalja}.`);
//     }
// }

// class Bird extends Animal{
//     constructor(nev) {
//         super("csirip","repül")
//         this.nev=nev;
//     }
// }


// class Mammal extends Animal{
//     constructor(nev) {
//         super("woof","jár")
//         this.nev=nev;
//     }
// }


// const kismadar=new Bird("cigánycsuk");
// const nagykutya=new Mammal("bulldog");

// kismadar.kiir();
// nagykutya.kiir();

class Animal{
    constructor(nev){
        this.nev=nev;
    }

    hang() {
        console.log(`A/Az${this.nev} tud hangot kiadni.`);
    }
}

class Bird extends Animal{
    constructor(nev) {
       super(nev);
    }

    csinal(){
        console.log(`A/Az${this.nev} tud repülni.`);
    }
}


class Mammal extends Animal{
    constructor(nev) {
        super(nev);
    }

    csinal(){
        console.log(`A/Az${this.nev} tud járni.`);
    }
}


const kismadar=new Bird("cigánycsuk");
const nagykutya=new Mammal("bulldog");


kismadar.hang();
kismadar.csinal();

nagykutya.hang();
nagykutya.csinal();