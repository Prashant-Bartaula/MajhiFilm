document.addEventListener("DOMContentLoaded", () => {
  const navbarWrapper = document.getElementById("navbar-item-wrapper");
  const hamburger = document.getElementById("hamburger");

  hamburger.addEventListener("click", () => {
    navbarWrapper.classList.toggle("h-0");
    navbarWrapper.classList.toggle("h-[280px]");
  });

  document.documentElement.addEventListener("click", (e) => {
    if (!e.target.closest("#hamburger")) {
      navbarWrapper.classList.add("h-0");
      navbarWrapper.classList.remove("h-[280px]");
    }
    //or
    // !e.target.closest('#hamburger')// this will return true or false as per the element is sibling or child of #hamburger
  });

    //shots in nepal aniamtion js
    function animation() {
      const scrollerInner = Array.from(document.querySelectorAll(".scroller_inner"));
      scrollerInner.forEach((scrollerItem) => {
          const scrollItem = Array.from(scrollerItem.children);
    
          scrollItem.forEach((item) => {
            const clonedNode = item.cloneNode(true);
            scrollerItem.appendChild(clonedNode);
          });
      })
    }
    animation();
  });

  // const header=document.getElementById('header');

  //force to send user to top of the page onload
  // scrollY!==0?header.classList.add('scrolled'):null;
  // window.scrollTo(0,0);

  //sidebar toggle script
  // document.querySelector('#hamburger').addEventListener('click', () => {
  //     document.getElementsByTagName('nav')[0].classList.remove('translate-x-full')
  // })

  // document.querySelector('#sidebar-close').addEventListener('click', () => {
  //     document.getElementsByTagName('nav')[0].classList.add('translate-x-full')
  // })

  //scroll view and hide animation
  // let lastScroll=window.scrollY;
  // window.addEventListener('scroll', () => {
  //     const currentScroll=window.scrollY;
  //     if(currentScroll > lastScroll && window.scrollY > 100){
  //         header.classList.add('scrolled', 'scrolled-to-top');
  //     }else if(scrollY!==0){
  //         header.classList.remove('scrolled');
  //     }
  //     if(scrollY === 0){
  //         header.classList.remove('scrolled-to-top');
  //     }
  //     lastScroll=currentScroll;
  // })

