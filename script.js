import { data } from "./demodata.js";

document.addEventListener("DOMContentLoaded", () => {
  const navbarWrapper = document.getElementById("navbar-item-wrapper");
  const hamburger = document.getElementById("hamburger");

  hamburger.addEventListener("click", () => {
    navbarWrapper.classList.toggle("nav-show");
  });

  document.documentElement.addEventListener("click", (e) => {
    console.log(e.target.classList.contains("dropdown-button"));
    if (
      !e.target.closest("#hamburger") &&
      !e.target.classList.contains("dropdown-button")
    ) {
      navbarWrapper.classList.remove("nav-show");
    }
    //or
    // !e.target.closest('#hamburger')// this will return true or false as per the element is sibling or child of #hamburger
  });

  const dropdownWrapper = Array.from(
    document.querySelectorAll(".dropdown-button")
  );
  dropdownWrapper.forEach((dropdownItem) => {
    dropdownItem.addEventListener("click", () => {
      const dropdown =
        dropdownItem.parentElement.querySelector(".custom-dropdown");
      const dropdownLinks = Array.from(
        document.querySelectorAll(".dropdown-item")
      );
      dropdown.classList.toggle("hidden");
      dropdownLinks.forEach((dropdownLink) => {
        dropdownLink.addEventListener("click", () => {
          dropdown.classList.add("hidden");
        });
      });
    });
  });


  //shots in nepal aniamtion js
  function animation() {
    const scrollerInner = Array.from(
      document.querySelectorAll(".scroller_inner")
    );
    scrollerInner.forEach((scrollerItem) => {
      const scrollItem = Array.from(scrollerItem.children);

      scrollItem.forEach((item) => {
        const clonedNode = item.cloneNode(true);
        scrollerItem.appendChild(clonedNode);
      });
    });
  }
  animation();

  // news tabs
  const tabItems = Array.from(document.querySelectorAll(".tab-item"));
  const activeTab = document.querySelector(".tab-active");
  data
    .filter(
      (dataItem) =>
        dataItem.type === activeTab.dataset.categorySelect ||
        activeTab.dataset.categorySelect === "all"
    )
    .forEach((dataItem, index) => {
      if (index > 2) {
        return;
      }
      const div = document.createElement("div");
      div.classList.add("news-item");
      div.innerHTML = `<img
                  src="https://images.unsplash.com/photo-1748392242228-fe7ebd0b8a86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
                  alt="news-image"
                  class="object-cover hidden sm:block  sm:h-full sm:max-w-[200px]"
                />

                <div class="flex flex-col gap-3 px-5 py-5">
                  <h4 class="font-body font-bold">
                    ${dataItem.description.slice(0, 90)}
                  </h4>
                  <h6>${dataItem.date}</h6>
                </div>`;

      document.getElementById("news-items-wrapper").appendChild(div);
    });

  tabItems.forEach((item) => {
    const category = item.dataset.categorySelect;
    item.addEventListener("click", () => {
      document.getElementById("news-items-wrapper").innerHTML = "";
      tabItems.forEach((item) => item.classList.remove("tab-active"));
      item.classList.add("tab-active");

      let itemsCount = 0;
      data.forEach((dataItem) => {
        console.log(itemsCount);
        if (itemsCount > 2) {
          return;
        }
        if (category === "all" || dataItem.type === category) {
          itemsCount++;
          const div = document.createElement("div");
          div.classList.add("news-item");
          div.innerHTML = `<img
                  src="https://images.unsplash.com/photo-1748392242228-fe7ebd0b8a86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
                  alt="news-image"
                  class="object-cover hidden sm:block  sm:h-full sm:max-w-[200px]"
                />

                <div class="flex flex-col gap-3 px-5 py-5">
                  <h4 class="font-body font-bold">
                    ${dataItem.description.slice(0, 90)}
                  </h4>
                  <h6>${dataItem.date}</h6>
                </div>`;

          document.getElementById("news-items-wrapper").appendChild(div);
        }
      });
    });
  });
});

// swiper js
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
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
