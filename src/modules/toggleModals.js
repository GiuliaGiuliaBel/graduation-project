const toggleModals = () => {
    const callbackForm = document.getElementById('callback_form'),
        freeVisitForm = document.getElementById('free_visit_form'),
        gift = document.getElementById('gift'),
        fixedGift = document.querySelector('.fixed-gift'),
        clubsList = document.querySelector('.clubs-list>ul'),
        thanks = document.getElementById('thanks');
       
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
       
        if (event.target.closest('.clubs-list')) {
            if (!clubsList.style.display || clubsList.style.display === 'none') {
                clubsList.style.display = 'block';
            } else {
                clubsList.style.display = 'none';
            }
        } else {
            clubsList.style.display = 'none';
        }

        try{
            if (event.target.matches('.fixed-gift img')){
                gift.style.display = "block";  
                fixedGift.style.display = "none";                  
            }    
            if (event.target.matches('.overlay') || event.target.matches('.close_icon') || event.target.matches('.close-btn')){        
                gift.style.display = "none";
            }  
             if (event.target.matches('.overlay') || event.target.matches('.close-btn') || event.target.matches('.close_icon')){        
                thanks.style.display = "none";
                callbackForm.style.display = "none";
            }  
        }
            catch{

            }    
    });  
};

export default toggleModals;