document.addEventListener('DOMContentLoaded', ()=>{

    //sidebar toggle script 
    document.querySelector('#hamburger').addEventListener('click', () => {
        document.getElementsByTagName('nav')[0].classList.remove('translate-x-full')
    })

    document.querySelector('#sidebar-close').addEventListener('click', () => {
        document.getElementsByTagName('nav')[0].classList.add('translate-x-full')
    })

    //scroll view and hide animation 
    const header=document.getElementById('header');
    let lastScroll=window.scrollY;
    window.addEventListener('scroll', () => {
        console.log('i ran ')
        const currentScroll=window.scrollY;
        if(currentScroll > lastScroll && window.scrollY > 100){
            header.classList.add('scrolled', 'scrolled-to-top');
        }else if(scrollY!==0){
            header.classList.remove('scrolled');
        }
        if(scrollY === 0){
            header.classList.remove('scrolled-to-top');
        }
        lastScroll=currentScroll;
    })
})