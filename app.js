let openHamburger = document.querySelector('#openHamburger');
let closeHamburger = document.querySelector('#closeHamburger');
let navList = document.querySelector('.nav');



const hamburgerEvent = (navigation, close, open) => {
    navList.style.display = navigation;
    closeHamburger.style.display = close;
    openHamburger.style.display = open;
};

openHamburger.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeHamburger.addEventListener('click', () => hamburgerEvent("none", "none", "block"));





// Function to remove the style attribute from .nav
function removeNavStyle() {
    navList.removeAttribute('style');
  }
  
  // Initial removal on page load
  removeNavStyle();
  
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      removeNavStyle()
      openHamburger.style.display = "block";
      closeHamburger.style.display = "";
    }
  });

  



  