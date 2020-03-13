console.log("Hello World");
var stringHello="Hello"; 
var division = function (a, b) {
        var response;     
         if(b!=0) {         
             response = a / b;     
            }      else {         
        response = "infini";     
    }     
    return response; } 
console.log(stringHello); 
for(var i=0;i<10; i++) {     
    console.log(division(10, i)); 
    }