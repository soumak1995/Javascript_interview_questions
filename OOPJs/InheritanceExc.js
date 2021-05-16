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
HtmlSlectElement.prototype.constructor = HtmlSlectElement