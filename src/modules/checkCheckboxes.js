const checkCheckboxes = () => {
     const forms = document.querySelectorAll('form');

        forms.forEach(form => {

        const checkbox= form.querySelector('input[type="checkbox"]'),
            btn = form.querySelector('button');
            if(!checkbox) {
                return;
            }

        checkbox.addEventListener('change', () => {
    
            if(checkbox.checked && form.querySelectorAll('[required]')) {
                btn.disabled = false;     
            } else btn.disabled = true;          
        })
    });
};

export default checkCheckboxes;