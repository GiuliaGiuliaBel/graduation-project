const showBurgerMenu = () => {

   const hiddenLarge = document.querySelector('.hidden-large'),
      hiddenSmall = document.querySelector('.hidden-small');
   
   window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth < 768) {
         hiddenSmall.style.display = 'none';
         hiddenLarge.style.display = 'block';
    } else {
         hiddenLarge.style.display = '';   
         hiddenSmall.style.display = 'flex';
      }
   });
};

export default showBurgerMenu;
