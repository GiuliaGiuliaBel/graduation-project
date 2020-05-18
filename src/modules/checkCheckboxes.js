const checkCheckboxes = () => {
    const forms = document.querySelectorAll('form');

       forms.forEach(form => {

       const checkbox= form.querySelector('input[type="checkbox"]'),
           btn = form.querySelector('button'), 
           radio = document.querySelectorAll('input[name="club-name"]');
      
           radio.forEach(elem => {
               
                elem.addEventListener('change', () => {
                    if(elem.checked && form.querySelector('input[name="phone"]').value.trim() !== "") {
                        btn.disabled = false;                                          
                    }  else btn.disabled = true;                            
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