const checkCheckboxes = () => {
    const forms = document.querySelectorAll('form');

       forms.forEach(form => {

        // form.addEventListener('click', (event) => {
        //     if(event.target.name === "card-type"){
        //         console.log(event.target.id);
                
        //     }
        // });

        // form.addEventListener('change', (event) => {
        //     if(event.target.name === "club-name"){
        //         console.log(event.target.value);            
        //     }
        // });
        
        const checkbox= form.querySelector('input[type="checkbox"]'),
           btn = form.querySelector('button'), 
           radio = document.querySelectorAll('input[name="club-name"]');
      
           radio.forEach(elem => {             
            
                elem.addEventListener('change', () => {
          
                      
                     if (form.querySelector('input[name="phone"]')) {
                        btn.disabled = false;
                    }                   
                });
           });

           if(!checkbox) {
               return;
           }

       checkbox.addEventListener('change', () => {
   
           if(checkbox.checked && form.querySelectorAll('[required]')) {
               btn.disabled = false;     
           } else btn.disabled = true;          
       });

   });
};

export default checkCheckboxes;