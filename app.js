"use strict";

const mobileMenueBtn = document.querySelector("nav");
const menuBtn = document.querySelector(".manu__icon");
const ScrollBtn = document.querySelector(".links");

menuBtn.addEventListener("click", function (e) {
  mobileMenueBtn.classList.toggle("active");
});

ScrollBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("link")) {
    const eachId = e.target.getAttribute("href");
    document.querySelector(eachId).scrollIntoView({ behavior: "smooth" });
  }
});
