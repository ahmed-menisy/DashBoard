// Start Nav Links Change
document.querySelectorAll("aside a").forEach((link) => {
   link.addEventListener("click", function () {
      // Show or Hidde Section
      const curentLink = link.dataset.link;
      setTimeout(()=>{
          document.querySelector("section.show").classList.remove("show");
      document.querySelector(curentLink).classList.add("show");
      },
      100)

      //change active class
      document.querySelector("aside .active").classList.remove("active");
      this.classList.add("active");
   });
});
// End Nav Links Change
