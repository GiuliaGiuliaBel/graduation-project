const operateBurgerMenu = () => {

      const hiddenLarge = document.querySelector('.hidden-large'),
         hiddenSmall = document.querySelector('.hidden-small'),
         popupMenu = document.querySelector('.popup-menu'),
         topMenu = document.querySelector('.top-menu'),
         fixedGift = document.querySelector('.fixed-gift'),
         closeMenuBtn = document.querySelector('.close-menu-btn');
      
         if(document.documentElement.clientWidth < 768){     
            hiddenSmall.style.display = "none";
            hiddenLarge.style.display = "block";
            try {
            fixedGift.style.right = "52px";
            } catch {

            }
         }
      
      window.addEventListener('resize', () => {
       if (document.documentElement.clientWidth < 768) {
            hiddenSmall.style.display = "none";
            hiddenLarge.style.display = "block";
       } else {
            hiddenLarge.style.display = "none";   
            hiddenSmall.style.display = "flex";
         }
      });
   
      window.addEventListener('scroll', () => {
         
         if(document.documentElement.clientWidth < 768 && document.documentElement.scrollTop > topMenu.scrollTop) {
            topMenu.style.position = "fixed";
            topMenu.style.top = "0px";
            try {
               fixedGift.style.right = "52px";
            }
            catch {
               
            }
         } else topMenu.style.position = "";   
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


export default operateBurgerMenu;
