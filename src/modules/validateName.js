const validateName = () => {

    const nameInputs = document.querySelectorAll('input[name="name"]');

    nameInputs.forEach(elem => {
        elem.addEventListener('input', (event) => {
            let target = event.target;
            target.value = target.value.replace(/[^а-я0-9]/gi, '');
        });
    });
};

export default validateName;