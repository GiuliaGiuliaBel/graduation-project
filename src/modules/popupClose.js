const popupClose = () => {
    const popupCloseButtons = document.querySelectorAll('.close_icon');

    popupCloseButtons.forEach(item => item.addEventListener('click', event => { 

       if(event.target.closest('.popup')) {
            event.target.closest('.popup').style.display = "none";
       };        
    }));
};

export default popupClose;