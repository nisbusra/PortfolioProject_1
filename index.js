
document.addEventListener(`DOMContentLoaded`, ()=> {
    document.querySelector('#letsdothis').addEventListener('click',handleClick1);
}
)

function handleClick1(ev) {
    alert('Feel free to contact :)');
}

const clicking= document.querySelector('.renk');

clicking.addEventListener('click', function onclick(event){
    document('.renk').style.backgroundColor = 'White';
}) 