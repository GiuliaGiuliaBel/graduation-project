const showBurgerMenu = () => {

   const hiddenLarge = document.querySelector('.hidden-large'),
      hiddenSmall = document.querySelector('.hidden-small'),
      popupMenu = document.querySelector('.popup-menu'),
      closeMenuBtn = document.querySelector('.close-menu-btn');
   
      if(document.documentElement.clientWidth < 768){     
         hiddenSmall.style.display = "none";
         hiddenLarge.style.display = "block";
      }
   
   window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth < 768) {
         hiddenSmall.style.display = "";
         hiddenLarge.style.display = "block";
    } else {
         hiddenLarge.style.display = "";   
         hiddenSmall.style.display = "flex";
      }
   });

   hiddenLarge.addEventListener('click', (event) => {
      popupMenu.style.display = "flex";
      console.log(event.target);
   });

   closeMenuBtn.addEventListener('click', () => {
      popupMenu.style.display = "none";    
   });

   popupMenu.addEventListener('click', event => {    
      if(event.target.tagName === "A"){
         popupMenu.style.display = "none"; 
      }
   });
};

export default showBurgerMenu;
