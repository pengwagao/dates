"use strict";
const brand = "Survivor";
const header = document.getElementsByTagName("h1");
let slogan = document.createElement("p");
// slogan.style.textTransform = "uppercase";
slogan.style.color = "white";
slogan.innerHTML = `${brand.toUpperCase()}&#174 your online supermarket`;

console.log(slogan);
header[0].insertAdjacentElement("beforeend", slogan);
const boxColor = document.querySelectorAll('.box');
const randmColor = function () {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let a = ((Math.random()+0.9).toFixed(2));
  return `rgba(${r},${g},${b},${a})`;
}
boxColor.forEach(c => c.style.backgroundColor = randmColor());
const libtn = document.querySelectorAll('li');
libtn.forEach(el => el.insertAdjacentHTML('afterbegin', `<button class="btn">TryOut</button>`));