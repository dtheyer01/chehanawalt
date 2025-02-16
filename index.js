// Scroll Fade In Logic
document.addEventListener('DOMContentLoaded', function () {

  const elementsToAnimate = document.querySelectorAll('body *:not(script):not(style):not(.no-fade):not(.no-fade *)');


  elementsToAnimate.forEach(element => element.classList.add('fade-in'));


  const observerOptions = {
    threshold: 0.1, 
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);


  elementsToAnimate.forEach(element => observer.observe(element));
});


  const header = document.querySelector('header');
console.log(header.offsetHeight + ' pixels');

//Drop Down Menu Logic

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.menu-container');
  const fullScreenMenu = document.querySelector('.full-screen-menu');
  const header = document.querySelector('header');
  const body = document.body;
  const siteTitle = document.querySelector('.site-title');

  hamburgerMenu.addEventListener('click', function () {
      fullScreenMenu.classList.toggle('active');
      header.classList.toggle('active');  
      body.classList.toggle('no-scroll'); 
      siteTitle.classList.toggle('shift');
  });

  fullScreenMenu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' || e.target === fullScreenMenu) {
          fullScreenMenu.classList.remove('active');
          header.classList.remove('active'); 
          body.classList.remove('no-scroll'); 
          siteTitle.classList.remove('shift'); 
      }
  });

 
 window.addEventListener('resize', function () {
  if (window.innerWidth > 775) {
      fullScreenMenu.classList.remove('active');
      header.classList.remove('active');
      body.classList.remove('no-scroll');
      siteTitle.classList.remove('shift');  
      hamburgerMenu.classList.remove('change')
  }
});
});

//Arrow Drop Down Logic

document.addEventListener('DOMContentLoaded', function () {
  const menuArrow = document.querySelector('.arrow');
  const myWorkMenu = document.querySelector('.My-Work-Menu');

  let clickableElements = document.querySelectorAll('.arrow, .my-work-p');

  clickableElements.forEach(function(elem) {
    elem.addEventListener("click", function() {
      menuArrow.classList.toggle('menu-arrow-down');
      myWorkMenu.classList.toggle('active');
    });
  });
});




