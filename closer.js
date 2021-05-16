function counter(){
    let count=0;
    this.incrementCount=function(){
         count++;
         console.log(count)
    }
    this.decCount=function(){
        count--;
        console.log(count)
   }
}
let c=new counter();
c.incrementCount();
c.incrementCount();
c.incrementCount();
//setTime-out Closer example
function randomFunc(){
     for(var i = 0; i < 2; i++){
     (function(i){
         setTimeout(()=>console.log(i),1000);
       })(i);
     }
   }
   
   randomFunc(); 

   //Just In Time Compailation
   //code->persing->compailation->exicution
   //__proto__ is an object in every class instance that points to the prototype it was created from
   //In reality, the only true difference between prototype and __proto__ is that the former is a property of a class constructor, while the latter is a property of a class instance. 