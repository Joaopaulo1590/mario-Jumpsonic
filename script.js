const mario = document.querySelector('.sonic');
const pipe = document.querySelector('.pipe');
const go = document.querySelector('.gameover')
const vilao = document.querySelector('.vilao')
const botao = document.querySelector('.btn')

let musicas ={
    src:'music./music/02 - Green Hill Zone MP3.mp3' , src:'./music/gm.mp3'
}

const jump = () =>{
mario.classList.add('jump');

setTimeout(() =>{

    mario.classList.remove('jump');

} , 800)

}

const loop = setInterval(() =>{
 
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const vilaoPosition = +window.getComputedStyle(vilao).bottom.replace('px', '');

    

    
    if(pipePosition <=   100 &&pipePosition > 0 && marioPosition < 210){

        pipe.style.animation = 'none'
        pipe.style.left =  `${pipePosition}px`
       
        mario.style.animation = 'none'
        mario.style.bottom =  `${pipePosition}px`

        mario.src = './assets/game-over.png';
        go.style.display = 'block'

        vilao.src = './assets/vilao2.gif ';
        vilao.style.rigth =  `${pipePosition}px`

        botao.style.display = 'block'
       
    } 
 
}, 10)


   


document.addEventListener('keydown' , jump)