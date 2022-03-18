let activity = document.getElementById('activity')
let appointment = document.getElementById('appointment')
let appoint = document.getElementById('appoint')
let wait = document.getElementById('wait')
let inter = document.getElementById('inter')
let total = document.getElementById('total')
let schedule_appoint =  document.getElementById('schedule_appoint')
let waiting = document.getElementById('waiting')
console.log(appointment)


let details;
const url1 = 'https://612b668c22bb490017893b1d.mockapi.io/health/v1/patients'

fetch(url1)
    .then(response =>response.json())
    .then(data => {
        let details = data.appointments


        details.forEach(e =>{
           
            let date = new Date(e.createdAt);
            let hour, minute, am_pm;
            if(date.getHours() > 11){
                hour = date.getHours() - 12;
                am_pm = 'pm'
                if(hour <= 9){
                    hour = '0' + hour;
                } else {
                    hour = hour;
                }
            } else {
                hour = date.getHours();
                am_pm = 'am'
                if(hour <= 9){
                    hour = '0' + hour;
                } else {
                    hour = hour;
                }
            }
            if(date.getMinutes() <= 9){
                minute = '0' + date.getMinutes()
            } else {
                minute = date.getMinutes()
            }

            appointment.innerHTML += `
            <div class="patient_appointment">
            <p>${hour}:${minute}${am_pm}</p>
            <div class="ppl person">
              <img src="images/Ellipse 16.png" alt="" />
              <p>${e.name}</p>
              <img src="images/Group.png" alt="" />
            </div>
          </div>
            `
        })
        appoint.innerHTML = data.scheduledAppointments
        schedule_appoint.innerHTML = data.scheduledAppointments
        wait.innerHTML = data.waitinfRoom
        waiting.innerHTML = data.waitinfRoom
        total.innerHTML = data.totalPatients
    })

let list;
const url = 'https://612b668c22bb490017893b1d.mockapi.io/health/v1/activites    '



fetch(url)
    .then(response => response.json())
    .then(data => {
        let list = data.activities
        console.log(list)

        for(items of list){
            if(items.type === 'report'){
                inter.innerHTML += `
                <div class="inter_info">
                    <img class="inter_img"src="images/Group 9005.svg" alt="">
                    <p class="inter_msg dash_c">${items.title}</p>
                </div>
                `
            }else if(items.type === 'interview'){
                inter.innerHTML += `
                <div class="inter_info">
                <img class="inter_img"src="images/Group 900.svg" alt="">
                <p class="inter_msg dash_c">${items.title}</p>
                </div>
                `
            }
        }
    }) 
    
    let menubtn = document.querySelector('#menubtn')
    let aside = document.getElementById('aside')
    let closeNav = document.querySelector('.main_cont')

    menubtn.addEventListener('click',()=>{
        aside.classList.toggle('navshow')
    })
