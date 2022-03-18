let ham = document.querySelector('#ham')
let hhh = document.getElementById('hhh')
let hidenav = document.getElementById('hidenav')

ham.addEventListener('click',()=>{
    console.log(hhh)
   hhh.style.transform = 'translateX(0)'
})

hidenav.addEventListener('click',()=>{
    hhh.style.transform = 'translateX(100%)'
})