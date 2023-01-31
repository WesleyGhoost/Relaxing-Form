const sendName = document.querySelector('#check-name')
const sendQuestions = document.querySelector('#check-questions')
const sendDescription = document.querySelector('#check-description')
const sendEmail = document.querySelector('#check-email')

const name = document.querySelector('#name')
const lastName = document.querySelector('#lastName')
const hobbie = document.querySelector('#hobbie')
const age = document.querySelector('#age')
const job = document.querySelector('#job')
const schooling = document.querySelector('#schooling')
const description = document.querySelector('#description')
const email = document.querySelector('#email')


sendName.addEventListener("submit", (e) => {
    e.preventDefault()
    const name = document.querySelector('#name')
    name.style.borderColor = 'rgb(128, 0, 122)'
    name.style.transition = '0.6s'
    lastName.style.borderColor = 'rgb(128, 0, 122)'
    lastName.style.transition = '0.6s'
})
sendQuestions.addEventListener("submit", (e) => {
    e.preventDefault()
    hobbie.style.borderColor = 'rgb(128, 0, 122)'
    hobbie.style.transition = '0.6s'
    age.style.borderColor = 'rgb(128, 0, 122)'
    age.style.transition = '0.6s'
    job.style.borderColor = 'rgb(128, 0, 122)'
    job.style.transition = '0.6s'
    schooling.style.borderColor = 'rgb(128, 0, 122)'
    schooling.style.transition = '0.6s'
})

sendDescription.addEventListener("submit", (e) => {
    e.preventDefault()
    description.style.borderColor = 'rgb(128, 0, 122)'
    description.style.transition = '0.6s'
})

sendEmail.addEventListener("submit", (e) => {
    e.preventDefault()
    const name = document.querySelector('#name')
    const templateParamsName = {
        from_name: name.value,
        lastname: lastName.value,
        hobbie: hobbie.value,
        age: age.value,
        job: job.value,
        schooling:schooling.value,
        description: description.value,
        email: email.value
    }
    emailjs.send("service_jjmtq1m", "template_hrjywbe", templateParamsName)
    .then((response) => {
        console.log("Email enviado", response.status, response.text)
        email.value = ''
        email.style.borderColor = 'rgb(128, 0, 122)'
        email.style.transition = '0.6s'
        alert('Email enviado com sucesso!')
    }, (err) => {
        console.log("ERRO: ", err)
    })
})


const glider = new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: '.dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
})