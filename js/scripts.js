var link = document.querySelector(".booking__search");
var popup = document.querySelector(".booking__form");
var from = popup.querySelector("[name=from]");
var to = popup.querySelector("[name=to]");
var adult = popup.querySelector("[name=adult]");
var children = popup.querySelector("[name=children]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal__show");
});

popup.addEventListener("submit", function (evt) {
  if (!from.value || !to.value || !adult.value || !children.value ) {
    evt.preventDefault();
    popup.classList.remove("error");
    popup.offsetWidth=popup.offsetWidth;
    from.classList.remove("input__error");
    to.classList.remove("input__error");
    adult.classList.remove("input__error");
    children.classList.remove("input__error");
    popup.classList.add("error");
    if(!from.value){
       from.classList.add("input__error")
     }
    if(!to.value){
       to.classList.add("input__error")
     }
    if(!adult.value){
       adult.classList.add("input__error")
     }
    if(!children.value){
       children.classList.add("input__error")
     }
  } else {
    popup.submit();
    }
});
