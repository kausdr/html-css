const lista = document.querySelectorAll('.list')
lista.forEach((item) => item.addEventListener('click', ativar))

function ativar(){
    lista.forEach((item) => item.classList.remove('active'))
    this.classList.add('active')
}

