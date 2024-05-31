const start = document.querySelector(".hero button");

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
