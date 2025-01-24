fun({nev:"cirmi"})

function fun(param){
    console.log(param.nev)
}

const csirke = fun;
csirke({nev:"cirmi cicia"});

const funa = function(param){
    console.log(param.nev)
}

const funb = function(){
    console.log(this.nev)
}

const tojas = funb.bind({nev:"cirmi cica nagy"})
tojas();

const func = (param) =>{
    console.log(param.nev)
}

const obj = {
    funa:(param) => {console.log(param.nev)},
    funb:(param) => {console.log(param.eletkor)}
}

const pers ={
    nev:"Cirmi",
    eletkor:5
}

obj.funa(pers)
obj.funb(pers)