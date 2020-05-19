const validateName = () => {

    const nameInputs = document.querySelectorAll('input[name="name"]');

    nameInputs.forEach(elem => {
        elem.addEventListener('input', (event) => {
            let target = event.target;
            target.value = target.value.replace(/[^а-я ]/gi, '');
           
            // if(elem.closest('.price-message')) {
            //     target.value = target.value.replace(/[0-9]/, '')            
            // }
        });
    });
};

export default validateName;