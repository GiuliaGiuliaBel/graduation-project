const sendForm = id => {
    const formName = document.getElementById(id),
        btn = formName.querySelector('button');

        btn.addEventListener('submit', event => {  
            event.preventDefault();
            console.log(2);
        });
      
      
};

export default sendForm;