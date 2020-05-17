const checkCheckboxes = () => {
     const forms = document.querySelectorAll('form');

        forms.forEach(form => {

        const checkbox= form.querySelector('input[type="checkbox"]');
        if(!checkbox)return;

        checkbox.addEventListener('change', () => {
            
            if(checkbox.checked === true) {
                form.querySelector('button').disabled = false;
                console.log('checked');             
            } 
            if(checkbox.checked === false) {
                form.querySelector('button').disabled = true;
                console.log('checked');             
            } 
        });
    });
};

export default checkCheckboxes;