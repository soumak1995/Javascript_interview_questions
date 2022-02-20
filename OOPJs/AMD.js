//var a= 1
a.toString()//"1"
//1.toString() - error
(1).toString()//"1"

var people=(function(){
     var name="will",
     function sayName() {
         console.log(name)
     }
     return {
         sayName
     }
})();