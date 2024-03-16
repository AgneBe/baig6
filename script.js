const tabs = document.querySelectorAll(".tab");
const buttons = document.querySelectorAll("button");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].style.display = "none";
}

function showTab(e, id) {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
    tabs[i].classList.remove("active");
  }

  document.getElementById(id).style.display = "block";

  setTimeout(() => {
    document.getElementById(id).classList.add("active");
  }, 0);

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("selected-button");
  }
  
  e.currentTarget.classList.add("selected-button");
}

const swiper = new Swiper(".swiper", {

  direction: "horizontal",
  loop: true,
   
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },

  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
  breakpoints: {
    700: {
      slidesPerView: 1,
    },
  },
});

const burger = document.querySelector("#burger");
const links = document.querySelector(".links");
const anchors = links.querySelectorAll("a");
const sections = document.querySelectorAll("section");

burger.addEventListener("click", function () {
  burger.classList.toggle("rotate");
  links.classList.toggle("show-nav");
});


for (const a of anchors) {
  a.addEventListener("click", function () {
    burger.classList.remove("rotate");
    links.classList.remove("show-nav");
  });
}

window.addEventListener("scroll", function () {
  let activeSectionId;

  for (const section of sections) {
    if (window.scrollY > section.offsetTop - 300) {
      activeSectionId = section.id;

      section.style.opacity = 1;
    }

    for (const a of anchors) {
      a.classList.remove("active");
      if ("#" + activeSectionId === a.getAttribute("href")) {
        a.classList.add("active");
      }
    }
  }
});

for (const section of sections) {
  section.style.opacity = 0;
  section.style.transition = "0.5s";
}

setTimeout(() => {
  anchors[0].classList.add("active");
  sections[0].style.opacity = 1;
}, 0);