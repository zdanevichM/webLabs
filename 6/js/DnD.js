let openModal = document.querySelector(".open");
let closeModal = document.querySelector(".close-icon");

let modal_bg = document.querySelector(".modal_background");
let modal_win = document.querySelector(".modal-window");
let modal_darg = document.querySelector(".drag")

openModal.onclick = function(){
    modal_bg.style.display = "flex";
    modal_win.style.display = "flex";
}

closeModal.onclick = function(){
    modal_bg.style.display = "none";
    modal_win.style.display = "none";
}

//dnd

modal_darg.onmousedown = function(event) {
    let cd = getcoordnats(modal_win);
    let x = event.pageX - cd.left;
    let y = event.pageY - cd.top;
  document.body.appendChild(modal_win);
  document.onmousemove = function(event) {
    modal_win.style.left = event.pageX - x + 'px';
    modal_win.style.top = event.pageY - y + 'px';
  };
  modal_darg.onmouseup = function() {
    document.onmousemove = null;
    modal_darg.onmouseup = null;
  };
};
modal_darg.ondragstart = function() {
  return false;
};
function getcoordnats(window) {   
    let i = window.getBoundingClientRect();
  return {
    top: i.top + pageYOffset,
    left: i.left + pageXOffset
  };
};