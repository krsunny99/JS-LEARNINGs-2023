// What is DOM?

//   All our HTML elements present in browser form a tree like stucture now when we want to mutate them we can do it with the help of 
//   js DOM it gives the object of all the present element in the browser all the tags are call NODES individually.


//get the elements...

//1 

//  const para = document.getElementById('para')
//  console.log(para)

//2
//  const para_class = document.getElementsByClassName('para-class')[3]
//  console.log(para_class)

//3    
//  const class_tag = document.getElementsByTagName('p')
//  console.log(class_tag)

//4

//    const query_class_tag = document.querySelector('#para')
//     console.log(query_class_tag)


//5
            // const query_class_tag = document.querySelectorAll('.para-class')
            // console.log(query_class_tag)

// Traversing in dom
 
//1
      
         //    const parent = document.querySelector('#para')
         //    console.log(parent.parentNode)

//2
    
        //   const child = document.querySelector('.root-container')
        //   console.log(child.childNodes)

 //3
        // const parent = document.querySelector('#para')
        // console.log(parent.nextElementSibling)
//4

            //    const parent = document.querySelector('#para')
            //    console.log(parent.previousElementSibling)

//Manipulation

            // const element = document.querySelector('.para-class')
            // element.innerHTML='Changed Para'
            // element.style.color = 'pink'
            // element.style.fontSize='20px'
            // element.classList.add('title')
            // element.classList.remove('para-class')

//Create Element

            
            // const heading = document.createElement('h1')2
            // heading.innerHTML = 'This is heading'
            // heading.classList.add('title')

            // const sub_heading = document.createElement('h5')
            // sub_heading.innerHTML = 'This is Sub heading'
            // sub_heading.classList.add('title')

            // const parent = document.querySelector('.root-container')
            // parent.appendChild(heading)
            // parent.appendChild(sub_heading)

//Events on js DOM

            const heading = document.querySelector('#heading')
            const button = document.querySelector('#btn')

            button.addEventListener('click',()=>{
                heading.style.color = 'red'
            })
            