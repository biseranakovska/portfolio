import "../css/style.css";
import Lenis from "lenis";

const lenis = new Lenis({
  duration: 1.6,
  lerp: 0.06,
  smoothWheel: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);



// // HOVER
const menuItems = document.querySelectorAll(".menu-item");
const cursor = document.querySelector(".cursor");
const items = document.querySelectorAll(".hover-cursor");

let x = 0,
  y = 0,
  mx = 0,
  my = 0;

document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
});

const animate = () => {
  x += (mx - x) * 0.25;
  y += (my - y) * 0.25;

  cursor.style.left = x + "px";
  cursor.style.top = y + "px";

  requestAnimationFrame(animate);
};

animate();

items.forEach((item) => {
  item.addEventListener("mouseenter", () => cursor.classList.add("square"));
  item.addEventListener("mouseleave", () => cursor.classList.remove("square"));
});



// HERO BOX COLOR ----------------------------------------------------
const box = document.querySelector("#hero-box");
const scrollWatcher = document.querySelector(".scroll-watcher");

box.addEventListener("click", () => {
  console.log(e.target)
  box.classList.toggle("clicked");
  scrollWatcher.classList.toggle("clicked");
});



// MENU ITEMS SCROLL TO
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = link.getAttribute("href").slice(1);
    const el = document.getElementById(id);

    if (!el) return;

    let y = el.getBoundingClientRect().top + window.pageYOffset;

    if (id === "contact") {
      y += 10000;
    }

    lenis.scrollTo(y);
  });
});



// MENU ITEMS ----------------------------------------------------
function setActive(id) {
  menuItems.forEach((i) => i.classList.remove("active"));

  const match = document.querySelector(`.menu-item a[href="#${id}"]`);

  if (match) match.closest(".menu-item").classList.add("active");
}

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((i) => i.classList.remove("active"));

    item.classList.add("active");
  });
});

window.addEventListener("scroll", () => {
  const about = document.getElementById("about").getBoundingClientRect().top;
  const work = document.getElementById("work").getBoundingClientRect().top;
  const workBottom = document
    .getElementById("work")
    .getBoundingClientRect().bottom;

  if (workBottom <= 300) {
    setActive("contact");
  } else if (work <= 200) {
    setActive("work");
  } else if (about <= 200) {
    setActive("about");
  } else {
    menuItems.forEach((i) => i.classList.remove("active"));
  }
});



// age calculator
const ageSpan = document.querySelector('#age');
const BIRTHDAY = { month: 2, day: 23, birthYear: 2006 };

function getAge() {
  const now = new Date();
  let age = now.getFullYear() - BIRTHDAY.birthYear;

  const hadBirthdayThisYear =
    now.getMonth() > BIRTHDAY.month ||
    (now.getMonth() === BIRTHDAY.month && now.getDate() >= BIRTHDAY.day);

  if (!hadBirthdayThisYear) age--;
  return age;
}

function update() {
  ageSpan.textContent = getAge();
}

update();
setInterval(update, 1000 * 60 * 60);