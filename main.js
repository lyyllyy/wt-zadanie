const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) =>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
})

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".header-container h1", {
    ...scrollRevealOption,
  });
  ScrollReveal().reveal(".header-container form", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header-container img", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".heading", {
    ...scrollRevealOption,
    delay: 400,
  });
  ScrollReveal().reveal(".text-gray", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".main-scrol", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".box", {
    ...scrollRevealOption,
    delay: 800,
  });
  ScrollReveal().reveal(".footer-top", {
    ...scrollRevealOption,
    delay: 300,
  });
  ScrollReveal().reveal(".footer-bottom", {
    ...scrollRevealOption,
    delay: 600,
  });


  let isOriginalImage = true;

function toggleImage() {
  const carImage = document.getElementById("carImage");
  if (isOriginalImage) {
    carImage.src = "icons/car_zmena_1.png"; 
    bubble1.style.color = "red"; 
    bubble2.style.color = "red"; 
    bubble3.style.color = "red";
  } else {
    carImage.src = "icons/car_zmena.png"; 
    bubble1.style.color = "black";
    bubble2.style.color = "black";
    bubble3.style.color = "black";
  }
  isOriginalImage = !isOriginalImage; 
}

function slideChangeImage() {
  const carImage = document.getElementById("carImage");
  const slider = document.getElementById("imageSlider");

  if (slider.value == 0) {
    carImage.src  = "icons/car_zmena_1.png"; 
    bubble1.style.color = "red"; 
    bubble2.style.color = "red"; 
    bubble3.style.color = "red";
  } else {
    carImage.src = "icons/car_zmena.png"; 
    bubble1.style.color = "black";
    bubble2.style.color = "black";
    bubble3.style.color = "black";
  }
}

function hoverChangeImage() {
  const carImage = document.getElementById("carImage");
  carImage.src =  "icons/car_zmena_1.png"; 
  bubble1.style.color = "red"; 
  bubble2.style.color = "red"; 
  bubble3.style.color = "red";
}

function resetImage() {
  const carImage = document.getElementById("carImage");
  carImage.src = "icons/car_zmena.png"; 
  bubble1.style.color = "black";
  bubble2.style.color = "black";
  bubble3.style.color = "black";
}

function loadStyle() {
  let stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";

  if (window.matchMedia("(max-width: 700px)").matches) {
    stylesheet.href = "style-700.css";
  } else if (window.matchMedia("(max-width: 900px)").matches) {
    stylesheet.href = "style-900.css";
  } else if (window.matchMedia("(max-width: 1300px)").matches) {
    stylesheet.href = "style-1300.css";
  } else {
    stylesheet.href = "style-1600.css";
  }

  document.head.appendChild(stylesheet);
}


loadStyle();

//nacitanie pri zmene velkosti 
window.addEventListener("resize", loadStyle);