document.addEventListener('DOMContentLoaded', ()=>{
    
    const header=document.getElementById('header');

    //force to send user to top of the page onload
    scrollY!==0?header.classList.add('scrolled'):null;
    window.scrollTo(0,0);


    //sidebar toggle script 
    document.querySelector('#hamburger').addEventListener('click', () => {
        document.getElementsByTagName('nav')[0].classList.remove('translate-x-full')
    })

    document.querySelector('#sidebar-close').addEventListener('click', () => {
        document.getElementsByTagName('nav')[0].classList.add('translate-x-full')
    })

    //scroll view and hide animation 
    let lastScroll=window.scrollY;
    window.addEventListener('scroll', () => {
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