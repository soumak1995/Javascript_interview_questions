
function mixin(target,...sources){
    Object.assign(target,...sources)
}
const canEat = {
    eat :function(){
        this.hunger--;
        console.log('eating ..')
    }
}

const canWalk = {
    walk :function(){
        console.log('Walking ..')
    }
}
function Person(){
  
}
mixin(Person.prototype,canEat,canWalk)
const person1 =new Person();
console.log(person1.prototype)