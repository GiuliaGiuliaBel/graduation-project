const toggleModals = () => {
    const callbackForm = document.getElementById('callback_form'),
        freeVisitForm = document.getElementById('free_visit_form'),
        gift = document.getElementById('gift'),
        fixedGift = document.querySelector('.fixed-gift'),
        clubsListUl = document.querySelectorAll('.clubs-list>ul')[0],
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
       
            if(clubsListUl.style.display !== "block")
            clubsListUl.style.display = "block";   
        } else if( clubsListUl.style.display === "block") {
            clubsListUl.style.display = "none"
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