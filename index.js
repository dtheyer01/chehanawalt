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
  const myWorkMobileMenu = document.querySelector('.My-Work-Menu');
  const arrow = document.querySelector('.arrow')
  const myWorkDropdown = document.querySelector('.has-dropdown');

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
          hamburgerMenu.classList.remove('change');
          myWorkDropdown.classList.remove('open');
          arrow.classList.remove('menu-arrow-down')
          
          myWorkMobileMenu.style.height = '0';
      }
  });

 
 window.addEventListener('resize', function () {
  if (window.innerWidth > 775) {
      fullScreenMenu.classList.remove('active');
      myWorkMobileMenu.classList.remove('open');
      header.classList.remove('active');
      body.classList.remove('no-scroll');
      siteTitle.classList.remove('shift');  
      hamburgerMenu.classList.remove('change');
      arrow.classList.remove('menu-arrow-down');
      myWorkMobileMenu.style.height = '0';
      myWorkDropdown.classList.remove('open');
  }
});
});

//Arrow Drop Down Logic

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.arrow, .my-work-p').forEach(elem => {
    elem.addEventListener("click", function() {
      const dropdown = this.closest('.has-dropdown');
      const myWorkMenu = dropdown.querySelector('.My-Work-Menu');
      const menuArrow = dropdown.querySelector('.arrow');

      dropdown.classList.toggle('open');
      menuArrow.classList.toggle('menu-arrow-down');

      if (dropdown.classList.contains('open')) {
        // Set height to actual scroll height so it expands
        myWorkMenu.style.height = myWorkMenu.scrollHeight + 'px';
      } else {
        // Set height back to 0 to collapse
        myWorkMenu.style.height = '0';
      }
    });
  });
});







