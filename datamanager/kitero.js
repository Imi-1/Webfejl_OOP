const sum1 = (a,b) => {
    return a+b;
}
console.log(sum1(3,5))

const obj ={}

obj.calculate1=sum1;
obj.calculate1(3,5)
console.log(obj.calculate1(3,5))


obj.calculate2= (c) => {
    const a = 3
    const b = 5

    const cica=c(a,b)
    return cica
}






obj.calculate3 = (a,b,callback) => {
    const res = callback(a,b)
    return res
}

console.log(obj.calculate3(3,5,(szam1,szam2)=>{
    return szam1+szam2
}))

const thisFunction = () => {

    const a = 10
    const res1= obj.calculate2((szam1,szam2)=>{
        return (szam1+szam2)*a
    })

    console.log(res1)
}

thisFunction()