const start = document.querySelector(".hero button");

// aggiungo un event listener sul bottone start reading, cliccandolo ottengo la coordinata della sua posizione
// uso questa coordinata come valore trigger per cambiare i colori con lo scroll
start.addEventListener("click", function (event) {
  console.log(event);
  const coordinata = event.pageY;
  console.log(coordinata);
});

const navbar = document.querySelector("nav");
const button = document.querySelector("nav button");

window.onscroll = () => {
  const scrollTop = document.documentElement.scrollTop;
  if (scrollTop >= 400) {
    console.log("ciao");
    navbar.style.backgroundColor = "white";
    button.style.backgroundColor = "#1a8917";
  } else if (scrollTop <= 400) {
    navbar.style.backgroundColor = "#ffc017";
    button.style.backgroundColor = "#191919";
  }
};

const mLetter = document.querySelectorAll("g");
const mLetterFiltered = Array.from(mLetter).filter((element) => element.getAttribute("opacity") !== undefined);

const mAnimation = setInterval(() => {
  const randomNum = Math.floor(Math.random() * mLetterFiltered.length);
  const currentElement = mLetterFiltered[randomNum];
  const currentOpacity = currentElement.getAttribute("opacity");
  if (currentOpacity === "0") {
    currentElement.setAttribute("opacity", 1);
  } else if (currentOpacity === "1") {
    currentElement.setAttribute("opacity", 0);
  }
}, 40);
