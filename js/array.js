// ARRAY

//1

// arr = [10,20,30,40,50]


// const length = arr.length
// console.log(length)

//2

// arr = [10,20,30,40,50]
// console.log(arr.push('latest-element'))
// console.log(arr)

//3

// arr = [10,20,30,40,50]
// arr.unshift(19)
// console.log(arr.unshift(19))
// console.log(arr)
//The new length property of the object upon which the method was called.

//4
// arr = [10,20,30,40,50]
// console.log(arr.pop())
// console.log(arr)

//5

// arr = [10,20,30,40,50]
// console.log(arr.shift())
// console.log(arr)


//6

// const arr = [
//     {
//         name:'emp 1',
//         salary:200
//     },

//     {
//         name:'emp 2',
//         salary:300
//     },

//     {
//         name:'emp 3',
//         salary:400
//     }
// ]


// arr.forEach((ele)=>{
//     ele.salary = ele.salary - 10
// })

// console.log(arr)

//7

// const arr = [
//     {
//         name:'emp 1',
//         salary:200
//     },

//     {
//         name:'emp 2',
//         salary:300
//     },

//     {
//         name:'emp 3',
//         salary:400
//     }
// ]

// for(let emp of arr){
//     emp.salary = emp.salary-20
// }

// console.log(arr)

//8
//Filter gives new array

// const student= [
//     {
//         student:'student 1',
//         marks:70
//     },
//     {
//         student:'student 2',
//         marks:80
//     },
//     {
//         student:'student 3',
//         marks:40
//     },
//     {
//         student:'student 4',
//         marks:30
//     }
// ]

// const failedStudent = student.filter((ele)=>{
//     return ele.marks>50
// })

// console.log(failedStudent)

//8
//Map also return a ne array

// const users = [
//     {
//         name:'lisa',
//         title:'haidan'
//     },
//     {
//         name:'joe',
//         title:'manthan'
//     }
// ]

// const fullName = users.map((ele)=>{
//     return {fullName:ele.name +' '+ele.title}
// })

// console.log(fullName)

//9

// const arr = [
//     {
//         item:1,
//         price:500
//     },
//     {
//         item:2,
//         price:1000
//     },
//     {
//         item:3,
//         price:1500
//     }
// ]

// const total = arr.reduce((acc,ele)=>{
//     acc = acc + ele.price
//     return acc
// },0)

// console.log(total)

//10 


// const id = [1,2,3,4,5]

// const user = {
//     id:5,
//     name:'sunny'
// }

// console.log(id.indexOf(user.id))


//11
// const id = [1,2,3,4,5]

// const user = {
//     id:5,
//     name:'sunny'
// }

// console.log(id.includes(user.id))

//12
//splice changes the original array by removing, replacing, or adding values and returns the affected values  
//in splice 
// const id = [1,2,1212,3,4,5]
// console.log(id.find((ele)=>{
//     return ele===1212
// }))

//


//13
//slice returns a piece of the array but it doesn't affect the original array.
// const id = [1,2,1212,3,4,5]

// console.log(id.splice(2,2))
// console.log(id)

// const id = [1,2,1212,3,4,5]

// console.log(id.slice(2))
// console.log(id)


