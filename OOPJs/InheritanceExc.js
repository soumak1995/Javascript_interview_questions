function HtmlElement(){
   this.click= function(){

   }
}
HtmlElement.prototype.focus=function(){
  
}

function HtmlSlectElement(){
    this.Items=[];
    this.addItem=function(){

    }
    this.removeItems=function(){
        
    }
}

HtmlSlectElement.prototype = new HtmlElement()
HtmlSlectElement.prototype.constructor =
  HtmlSlectElement(
    //__proto__ is the actual object that is used in the lookup chain to resolve methods, etc. 
    //prototype is the object that is used to build __proto__ when you create an object with new:

//     new Foo()
//   ).__proto__ === Foo.prototype;
// new Foo().prototype === undefined