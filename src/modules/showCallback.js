const showCallback = () => {
    const callbackForm = document.getElementById('callback_form');

    document.addEventListener('click', (event) => {
        if (event.target.matches('.callback-btn')) {
            callbackForm.style.display = "block";
        }
        if (event.target.matches('.overlay')){          
            callbackForm.style.display = "none";
        }
    });  
};

export default showCallback;