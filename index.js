
// Let's do this part alert and bg changes //
document.addEventListener(`DOMContentLoaded`, ()=> {
    document.querySelector('#letsdothis').addEventListener('click',handleClick1);
}
)

function handleClick1(ev) {
    alert('Feel free to contact :)');
}

const divv= document.querySelector('.renk')
divv.addEventListener('click', function onClick(event){
    event.target.style.backgroundColor = 'white'
})

//iconlar alert//

const icon1 = document.querySelector('.htmlicon')
icon1.addEventListener('click', function onClick(event){
    alert('https://html.com/')
})

const icon2 = document.querySelector('.cssicon', )
icon2.addEventListener('click', function onClick(event){
    alert('https://https://www.w3.org/Style/CSS/Overview.en.html.com/')
})

const icon3 = document.querySelector('.jsicon')
icon3.addEventListener('click', function onClick(event){
    alert('https://www.javascript.com/')
})

const icon4 = document.querySelector('.taildwindicon')
icon4.addEventListener('click', function onClick(event){
    alert('https://tailwindcss.com/')
})
const icon5 = document.querySelector('.githubicon')
icon5.addEventListener('click', function onClick(event){
    alert('https://github.com/')
})

const icon6 = document.querySelector('.bootstrapicon')
icon6.addEventListener('click', function onClick(event){
    alert('https://getbootstrap.com/')
})
const icon7 = document.querySelector('.figmaicon')
icon7.addEventListener('click', function onClick(event){
    alert('https://https://www.figma.com/.com/')
})

