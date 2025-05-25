document.addEventListener('DOMContentLoaded', ()=>{

    //sidebar toggle script 
    document.querySelector('#hamburger').addEventListener('click', () => {
        document.getElementsByTagName('nav')[0].classList.remove('translate-x-full')
    })

    document.querySelector('#sidebar-close').addEventListener('click', () => {
        document.getElementsByTagName('nav')[0].classList.add('translate-x-full')
    })
})