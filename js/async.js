//in this we will learn about CALLBACKS,PROMISES AND ASYNC AWAIT


//CALLBACK
/*
function signUp(cb) {
    setTimeout(() => {
        console.log('sign up success ! 1')
        cb()

    }, 5000)
}

function verification(cb) {
    setTimeout(() => {

        console.log('verification is success 2!')
        cb()
    }, 2000)
}


function signIn(cb) {
    setTimeout(() => {

        console.log('sign in success ! 3')
        cb()
    }, 1000)
}

function getUserData(cb) {
    setTimeout(() => {

        console.log('getUserData is success ! 4')
        cb()
    }, 4000)
}


function displayData() {
    setTimeout(() => {

        console.log('displayData is success !    5')
    })
}

signUp(function () {

    verification(function () {

        signIn(function () {

               (function () {

                displayData()
            })
        })
    })

})
*/
//PROMISES & THEN

/*

function signUp() {
    return new Promise((resolve, reject) => {


        setTimeout(() => {
            console.log('sign up success ! 1')
            resolve()

        }, 5000)
    })

}

function verification() {
    return new Promise( (resolve,reject)=>{

        setTimeout(() => {

            console.log('verification is success 2!')
            reject('user is invalid')
        }, 2000)
    }

    )
}


function signIn() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log('sign in success ! 3')
            resolve()
        }, 1000)

    }

    )
}

function getUserData() {
    return new Promise((resolve,reject) => {

        setTimeout(() => {

            console.log('getUserData is success ! 4')
            resolve()
        }, 4000)
    }

    )
}


function displayData() {
    setTimeout(() => {

        console.log('displayData is success !    5')
    })
}

signUp()
    .(verification)
    .then(signIn)
    .then(getUserData)
    .then(displayData)
    .catch((err)=>{
        console.log('something went wrong',err)
    })

    */

//ASYNC AWAIT

function signUp() {
    return new Promise((resolve, reject) => {


        setTimeout(() => {
            console.log('sign up success ! 1')
            resolve()

        }, 5000)
    })

}

function verification() {
    return new Promise( (resolve,reject)=>{

        setTimeout(() => {

            console.log('verification is success 2!')
            resolve()
        }, 2000)
    }

    )
}


function signIn() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log('sign in success ! 3')
            resolve()
        }, 1000)

    }

    )
}

function getUserData() {
    return new Promise((resolve,reject) => {

        setTimeout(() => {

            console.log('getUserData is success ! 4')
            reject('no data')
        }, 4000)
    }

    )
}


function displayData() {
    setTimeout(() => {

        console.log('displayData is success !    5')
    })
}

async function authenticate(){
    await signUp()
    await verification()
    await signIn()
    await getUserData()
    await displayData()
}

authenticate().then(()=>{
    console.log('Everything executed')
}).catch((err)=>{
    console.log(err)
})

console.log('some other task')