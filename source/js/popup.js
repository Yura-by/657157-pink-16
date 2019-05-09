var form = document.querySelector(".form");
var youname = document.querySelector(".name-value__input--name");
var surname = document.querySelector(".name-value__input--surname");
var mail = document.querySelector(".user-contacts-value__input--email");
var failure = document.querySelector(".popup-failure");
var buttonfailure = document.querySelector(".popap-failure__button");
var accepted = document.querySelector(".popup-accepted");
var buttonaccepted = document.querySelector(".popup-accepted__button");

form.addEventListener("submit", function (evt) {
  if (!youname.value || !surname.value || !mail.value) {
    evt.preventDefault();
    failure.classList.add("popup-failure--show");
  } else {
    evt.preventDefault();
    accepted.classList.add("popup-accepted--show");
  }
})

buttonfailure.addEventListener("click", function (evt) {
  evt.preventDefault();
  failure.classList.remove("popup-failure--show");
})

buttonaccepted.addEventListener("click", function (evt) {
  evt.preventDefault();
  accepted.classList.remove("popup-accepted--show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (failure.classList.contains("popup-failure--show")) {
      evt.preventDefault();
      failure.classList.remove("popup-failure--show");
    }
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (accepted.classList.contains("popup-accepted--show")) {
      evt.preventDefault();
      accepted.classList.remove("popup-accepted--show");
    }
  }
})
