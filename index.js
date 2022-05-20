
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

let classarray = ['htmlicon', 'cssicon', 'jsicon', 'tailwindicon', 'githubicon', 'bootstrapicon', 'figmaicon']

const linkss = ['https://html.com/', 'https://www.w3.org/Style/CSS/', 'https://www.javascript.com/', 'https://tailwindcss.com/', 'https://github.com/', 'https://getbootstrap.com/', 'https://www.figma.com/']

