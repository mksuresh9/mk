function add(a,b){
    return a+b;
}

 var thunk= function(){
        return add(10,15);
 };
 console.log(thunk());



 //example2:


 function addasync(x,y,cb){
     setTimeout(function(){
         cb(x+y);
     },2000);
 }

 var thunk = function(cb){
     addasync(5,10,cb);
 };

 thunk(function(sum){
   console.log(sum);
 })