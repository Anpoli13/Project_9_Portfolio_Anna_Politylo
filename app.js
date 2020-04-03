// Open overlay
const overlay = document.querySelector('.overlay')

function myFunction(x) {
    x.classList.toggle('change');
    overlay.classList.toggle('hide');
  }

// Applying active class to navigation

// const navBtns = document.getElementsByClassName('nav');

// for (let i=0; i<navBtns.length; i+=1) {
//   navBtns[i].addEventListener('click', function() {
//     let current = document.getElementsByClassName('nav-active');
//     current[0].className = current[0].className.replace(' nav-active', '');
//     this.className += ' nav-active';
//   });
// }

// //

// window.onload = function() { 
//   var all_links = document.getElementsByClassName("nav").getElementsByTagName("a"),
//       i=0, len=all_links.length,
//       full_path = location.href.split('#')[0]; //Ignore hashes?

//   // Loop through each link.
//   for(; i<len; i++) {
//       if(all_links[i].href.split("#")[0] == full_path) {
//           all_links[i].className += " active";
//       }
//   }
// }

//
window.onload = function () {
  const navBtns = document.getElementsByClassName('nav');
  full_path = location.href.split('#')[0];
  for(i=0; i<navBtns.length; i++) {
    if(navBtns[i].href.split("#")[0] == full_path) {
      navBtns[i].className += ' nav-active';
    }
  }
}