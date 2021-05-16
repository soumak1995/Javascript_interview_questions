
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
function person(){

}
mixin(Person.prototype,canEat,canWalk)
const person =new Person();
console.log(person)