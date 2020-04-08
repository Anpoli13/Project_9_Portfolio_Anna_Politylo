// Open overlay
const overlay = document.querySelector('.overlay');

function myFunction(x) {
    x.classList.toggle('change');
    overlay.classList.toggle('hide');
  }


// Applying active class to navigation

window.onload = function () {
  const navBtns = document.getElementsByClassName('nav');
  full_path = location.href.split('#')[0];
  for(i=0; i<navBtns.length; i++) {
    if(navBtns[i].href.split("#")[0] == full_path) {
      navBtns[i].className += ' nav-active';
    }
  }
}