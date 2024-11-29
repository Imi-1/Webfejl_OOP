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
        this.name="Géza";
    }

    getName(){
        return this.name;
    }
}

class Student{
    constructor(school){
        this.school=school;
        Person.call(this);
    }
}

const geza=new Person("Géza");

Object.setPrototypeOf(Student.prototype, Person.prototype);

console.log(geza.getName());
