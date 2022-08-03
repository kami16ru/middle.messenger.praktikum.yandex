import './dialog.css'

// Dialog module

// Get the modal
const index = document.getElementById("dialog");

// Get the button that opens the modal
const dialogOpen = document.querySelector('.dialog_activator');
const dialogClose = document.querySelector('.dialog__close-icon');

// When the user clicks the button, open the modal
dialogOpen.onclick = function() {
  index.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
dialogClose.onclick = function() {
  index.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === index) {
    index.style.display = "none";
  }
}
