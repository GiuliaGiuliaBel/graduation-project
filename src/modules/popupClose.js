const popupClose = () => {
<<<<<<< HEAD
    const popupCloseButtons = document.querySelectorAll('.close_icon');

    popupCloseButtons.forEach(item => item.addEventListener('click', event => { 

       if(event.target.closest('.popup')) {
            event.target.closest('.popup').style.display = "none";
       };        
=======
    const popupCloseButtons = document.querySelectorAll('.close-icon');

    popupCloseButtons.forEach(item => item.addEventListener('click', event => {
        event.currentTarget.parentNode.style.visibility = 'hidden';
>>>>>>> 502cbde65f8cc0f84dc37aacabd0e164a800a5c3
    }));
};

export default popupClose;