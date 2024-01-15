//CLOSURE - if there is a method that contain's an inner function and if the inner function contain 
//           the variables of the outer function then the variable of outer function will remain in the memory
//           even after execution of the outer function this is called CLOSURE


//          whenever we create a program in js then first of all it's in call  stack GLOBAL EXECUTION STACK is created 
//          and all the global variable is listed in it and the a particular FUNCTION stack is created for all the functions and 
//          in which all the all the local variables of that function were listed and once the function get executed all the local variables were
//           removed from the memory.

//1st Program

/*
function callAPI(method){
     return function getApiMethod(url){
        return `The called method is ${method} and url is ${url}`
     }
}

const url='http://www.mychannel.com'
let CallApiResult = callAPI('GET')
console.log(CallApiResult('url'))
*/

//2nd program

/*
let count =0
function upDateCount(){
    count++;
    console.log(count)

}

count = 10
upDateCount()
upDateCount()
upDateCount()


function upDateCount(){
    let count =0
    count++;


}

upDateCount()
upDateCount()
upDateCount()


function upDateCount(){
    let count =0
    return function(){
        count++;
        console.log(count)
    }

}

let updateCountValue = upDateCount()
updateCountValue()
updateCountValue()

*/

//3

function updateCartWrapper(){

    let _count = 0

       function updateCart(val){
            _count += val  
       }

       return{
                increment(){
                    updateCart(1)
                },

                decrement(){
                    updateCart(-1)
                },

                value(){
                    return _count
                }
       }
}

const updateCartWrapperValue = updateCartWrapper()

updateCartWrapperValue.increment()
updateCartWrapperValue.increment()
updateCartWrapperValue.increment()
console.log(updateCartWrapperValue.value())

