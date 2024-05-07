"use strict";

const presentation = document.querySelector(".presentation");
const formation = document.querySelector(".formation");
const certification = document.querySelector(".certification");
const competence = document.querySelector(".competence");
const projet = document.querySelector(".projet");

presentation.addEventListener("click", () => {
  presentation.classList.add("active");
  formation.classList.remove("active");
  certification.classList.remove("active");
  competence.classList.remove("active");
  projet.classList.remove("active");
});

certification.addEventListener("click", () => {
  presentation.classList.remove("active");
  formation.classList.remove("active");
  certification.classList.add("active");
  competence.classList.remove("active");
  projet.classList.remove("active");
});

competence.addEventListener("click", () => {
  presentation.classList.remove("active");
  formation.classList.remove("active");
  certification.classList.remove("active");
  competence.classList.add("active");
  projet.classList.remove("active");
});

projet.addEventListener("click", () => {
  presentation.classList.remove("active");
  formation.classList.remove("active");
  certification.classList.remove("active");
  competence.classList.remove("active");
  projet.classList.add("active");
});

const btnMore = document.querySelector(".btn-more");
const btnLess = document.querySelector(".btn-less");
const more = document.querySelector(".more");
btnMore.addEventListener("click", () => {
  console.log("click");
  btnMore.classList.toggle("hidden");
  btnLess.classList.toggle("hidden");
  more.classList.remove("hidden");
});
btnLess.addEventListener("click", () => {
  console.log("click");
  btnMore.classList.toggle("hidden");
  btnLess.classList.toggle("hidden");
  more.classList.toggle("hidden");
});

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
