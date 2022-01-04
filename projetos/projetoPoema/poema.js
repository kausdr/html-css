var botao = document.querySelector('button#bt')
botao.addEventListener('click', traduzir)

var origin = document.querySelector('div#subtitulo p')
origin.addEventListener('click', original)

var p1 = document.querySelector('div#um p')
var p2 = document.querySelector('div#dois p')
var p3 = document.querySelector('div#tres p')
var p4 = document.querySelector('div#quatro p')
var sub = document.querySelector('div#subtitulo p')
var c = 1


function original(){
    p1.innerHTML  = "Yesterday, upon the stair,<br>I met a man who wasn't there!<br>"
    p2.innerHTML  = "He wasn't there again today,<br>Oh how I wish he'd go away!"
    p3.innerHTML  = "When I came home last night at three<br>The man was waiting there for me<br>But when I looked around the hall,<br>I couldn't see him there at all!"
    p4.innerHTML  = "Go away, go away, don't you come back any more!<br>Go away, go away, and please don't slam the door...<br>Last night I saw upon the stair,<br>A little man who wasn't there,<br>He wasn't there again today<br>Oh, how I wish he'd go away...."

    c = 1
    sub.style.opacity = '0'
    sub.style.pointerEvents = 'none'
}

function traduzir(){
    p1.innerHTML  = 'Ontem, na escada,<br>Eu conheci um homem que não estava lá!'
    p2.innerHTML  = 'Ele não estava lá novamente hoje,<br>Oh, como eu gostaria que ele fosse embora!'
    p3.innerHTML  = 'Quando cheguei em casa ontem à noite às três<br>O homem estava lá esperando por mim<br>Mas quando olhei ao redor do corredor,<br>Eu não pude vê-lo lá de jeito nenhum!'
    p4.innerHTML  = 'Vá embora, vá embora, não volte mais!<br>Vá embora, vá embora, e por favor não bata a porta ...<br>Na noite passada eu vi na escada,<br>Um homenzinho que não estava lá,<br>Ele não estava lá de novo hoje<br>Oh, como eu gostaria que ele fosse embora ....'

    while(c != 0){
        sub.style.opacity = '1'
        sub.style.pointerEvents = 'all'
        c = 0
    }
    
}