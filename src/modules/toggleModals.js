const toggleModals = () => {
    const callbackForm = document.getElementById('callback_form'),
        freeVisitForm = document.getElementById('free_visit_form'),
        gift = document.getElementById('gift');

    document.addEventListener('click', (event) => {
        if (event.target.matches('.callback-btn') || event.target.matches('.close_icon')) {
            callbackForm.style.display = "block";
        }
        if (event.target.matches('.overlay') || event.target.matches('.close_icon')){          
            callbackForm.style.display = "none";
            freeVisitForm.style.display = "none";
        } 
        if (event.target.matches('.open-popup')){        
            freeVisitForm.style.display = "block";
        }  
        if (event.target.matches('.fixed-gift img')){
            gift.style.display = "block";                    
        } 
        if (event.target.matches('.overlay') || event.target.matches('.close_icon')){        
            gift.style.display = "none";
        }  
    });  
};

export default toggleModals;