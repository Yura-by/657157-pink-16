var navMain = document.querySelector(".site-list");
var navToggle = document.querySelector(".page-header__toggle");
var logWrap = document.querySelector(".page-header__log-wrap");

navToggle.classList.remove("page-header__toggle--nojs");
navToggle.classList.add("page-header__toggle--closed");
navMain.classList.add("site-list--closed");
logWrap.classList.remove("page-header__log-wrap--open");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("site-list--closed")) {
    navMain.classList.remove("site-list--closed");
  } else {
    navMain.classList.add("site-list--closed");
  }
  if (navToggle.classList.contains("page-header__toggle--closed")) {
    navToggle.classList.remove("page-header__toggle--closed");
    navToggle.classList.add("page-header__toggle--open");
  } else {
    navToggle.classList.remove("page-header__toggle--open");
    navToggle.classList.add("page-header__toggle--closed");
  }
  if (logWrap.classList.contains("page-header__log-wrap--open")) {
    logWrap.classList.remove("page-header__log-wrap--open");
  } else {
    logWrap.classList.add("page-header__log-wrap--open");
  }
});
