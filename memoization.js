function memoization(){
    const cache={};
    return function(num){
          if(num in cache){
              console.log("cached value");
              return cache[num]
          }else{
              cache[num]=num+10
              return cache[num]
          }
    }
}
var memoizedFunc=memoization()
memoizedFunc(20)//
memoizedFunc(20)//