// Open overlay
const overlay = document.querySelector('.overlay')

function myFunction(x) {
    x.classList.toggle('change');
    overlay.classList.toggle('hide');
  }

// Applying active class to navigation

const navBtns = document.getElementsByClassName('nav');

for (let i=0; i<navBtns.length; i+=1) {
  navBtns[i].addEventListener('click', function() {
    let current = document.getElementsByClassName('nav-active');
    current[0].className = current[0].className.replace(' nav-active', '');
    this.className += ' nav-active';
  });
}