let ham = document.querySelector('#ham')
let hhh = document.getElementById('hhh')

ham.addEventListener('click',()=>{
    console.log(hhh)
   hhh.style.transform = 'translateX(0)'
})
   
   
   let inputs = document.querySelectorAll('.formdata')
    let submitMe =document.querySelector('#submit_me') 

    let inputData = {}

    submitMe.addEventListener('submit',(e)=>{
        e.preventDefault()
        console.log(inputs)
        for(input of inputs){
            console.log(input.name)
                inputData[input.name] = input.value
                input.value = ''
        }
        sessionStorage.setItem('what', JSON.stringify(inputData))
        console.log(inputData)
    })