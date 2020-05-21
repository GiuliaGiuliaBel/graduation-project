const checkCheckboxes = () => {
    const forms = document.querySelectorAll('form');

       forms.forEach(form => {
     
        const checkbox= form.querySelector('input[type="checkbox"]');
        const  btn = form.querySelector('button'), 
           radio = form.querySelectorAll('input[type="radio"]');
           btn.disabled = true;
          let done = false;

          form.addEventListener('input', () => {
            let allInpArr = [];
            let count = 0;

            let inpName = Array.from(form.querySelectorAll('input[name="name"]'));
            let inpPhone = Array.from(form.querySelectorAll('input[name="phone"]'));

            allInpArr.push(inpName);
            allInpArr.push(inpPhone);

            allInpArr = inpName.concat(inpPhone);
        
            allInpArr.forEach(elem => {
                if(elem.value !== '') {
                    count +=1;
                  
                    if(checkbox){
                        if(count === allInpArr.length && !checkbox.checked) {
                            alert('Дайте согласие на обработку данных');
                            count = 0;
                            return true;
                        } 
                    }                  
                }
             });
        });
         
         
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