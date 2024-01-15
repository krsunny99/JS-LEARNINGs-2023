//LEXICAL SCOPE -->
//ANy inner function have the access to use it's outer function scope but vic-versa is not possible  



function callSunny(){
    var sunny = 'true'
    
}

console.log(sunny)
callSunny()