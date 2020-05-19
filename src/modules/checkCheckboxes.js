const checkCheckboxes = () => {
    const forms = document.querySelectorAll('form');

       forms.forEach(form => {
     
        const checkbox= form.querySelector('input[type="checkbox"]');
        const  btn = form.querySelector('button'), 
           radio = form.querySelectorAll('input[type="radio"]');
           btn.disabled = true;
          let done = false;

           radio.forEach(elem => {
              elem.addEventListener('change', () => {
                if(elem.checked && done === true) {              
                    btn.disabled = false;
                } else done = true;   
              })      
           });
           
         
           form.querySelector('input[name="phone"]').addEventListener('input', (event) => {
            if(event.target.value !== '' && done === true) {
                btn.disabled = false;
            } else done = true;
       });
           
           if(!checkbox) {
               return;
           }

       checkbox.addEventListener('change', () => {

           if(!checkbox.checked) {
               btn.disabled = true;     
           } else if(checkbox.checked){
               btn.disabled = false;      
           }    
       });
   });
};

export default checkCheckboxes;