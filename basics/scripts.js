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

class Student{
    constructor(school,name){
        this.school=school;
        Person.call(this,name);
    }
}



const geza=new Person("Géza");

Object.setPrototypeOf(Student.prototype, Person.prototype);

console.log(geza.getName());


// class Animal{
//     constructor(hangja,csinalja){
//         this.hangja=hangja;
//         this.csinalja=csinalja;
//     }

//     kiir() {
//         console.log(`A/Az ${this.nev} azt mondja, hogy "${this.hangja}" és "${this.csinalja}".`);
//     }
// }

// class Bird{
//     constructor(nev) {
//         Animal.call(this,"csirip","repül")
//         this.nev=nev;
//     }
// }
// Object.setPrototypeOf(Bird.prototype, Animal.prototype);


// class Mammal{
//     constructor(nev) {
//         Animal.call(this,"woof","jár")
//         this.nev=nev;
//     }
// }
// Object.setPrototypeOf(Mammal.prototype, Animal.prototype);




// const kismadar=new Bird("cigánycsuk");
// const nagykutya=new Mammal("bulldog");

// kismadar.kiir();
// nagykutya.kiir();




class Animal{
    
}

class Bird{
    constructor(nev,hangja,csinalja){
        this.hangja="csirip";
        this.csinalja="repül";
        this.nev=nev;
    }

    kiir() {
        console.log(`A/Az ${this.nev} azt mondja, hogy "${this.hangja}" és "${this.csinalja}".`);
    }
}
Object.setPrototypeOf(Bird.prototype, Animal.prototype);


class Mammal{
    constructor(nev,hangja,csinalja,){
        this.hangja="woof";
        this.csinalja="jár";
        this.nev=nev;
    }

    kiir() {
        console.log(`A/Az ${this.nev} azt mondja, hogy "${this.hangja}" és "${this.csinalja}".`);
    }
}
Object.setPrototypeOf(Mammal.prototype, Animal.prototype);




const kismadar=new Bird("cigánycsuk");
const nagykutya=new Mammal("bulldog");

kismadar.kiir();
nagykutya.kiir();