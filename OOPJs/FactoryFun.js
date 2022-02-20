function createCircle(radius) {
    return {
       radius,
       draw: function(){
           console.log(this.radius);
       }
    }
}

const circle =createCircle(1);
circle.draw();

