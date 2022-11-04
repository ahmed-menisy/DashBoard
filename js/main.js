function addDarkmodeWidget() {
   const options = {
      bottom: '64px', // default: '32px'
      right: '32px', // default: '32px'
      left: 'unset', // default: 'unset'
      time: '0.3s', // default: '0.3s'
      mixColor: '#fff', // default: '#fff'
      backgroundColor: 'rgb(241, 245, 249)',  // default: '#fff'
      buttonColorDark: '#100f2c',  // default: '#100f2c'
      buttonColorLight: '#fff', // default: '#fff'
      saveInCookies: true, // default: true,
      label: '🌓', // default: ''
      autoMatchOsTheme: true // default: true
    }
    
    const darkmode = new Darkmode(options);
    darkmode.showWidget();
 }
 window.addEventListener('load', addDarkmodeWidget);

// Start Nav Links Change
document.querySelectorAll("aside a").forEach((link) => {
   link.addEventListener("click", function () {
      // Show or Hidde Section
      const curentLink = link.dataset.link;
      setTimeout(() => {
         document.querySelector("section.show").classList.remove("show");
         document.querySelector(curentLink).classList.add("show");
      }, 100);

      //change active class
      document.querySelector("aside .active").classList.remove("active");
      this.classList.add("active");
   });
});
// End Nav Links Change
