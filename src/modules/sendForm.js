const sendForm = () => {

    const forms = document.querySelectorAll('form');
  
    forms.forEach(form => {
        
     const btn = form.querySelector('button');

     btn.disabled = true;
     
       const postData = body => {
           return fetch('./server.php', {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify(body)
           });
       };
      
       form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);
            if(form.id === 'footer_form') {
                document.getElementById('callback_form').style.display = "none";
                btn.disabled = true;
             }

            let body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });
            
            const outputData = () => {
                document.getElementById('thanks').style.display = "inline";
                setTimeout(() => {
                    document.querySelectorAll('.popup').forEach(elem => {
                        elem.style.display = "none";
                    })
                }, 3000)
            
                form.reset();
            };

            const error = () => {
                document.getElementById('thanks').querySelector('p').textContent =
                "Данные не удалось отправить на сервер";
                document.getElementById('thanks').querySelector('h4').textContent =
                "Произошла ошибка";
                setTimeout(() => {
                    document.querySelectorAll('.popup').forEach(elem => {
                        elem.style.display = "none";
                    })
                }, 3000) 
                  
                form.reset();        
            };

            postData(body)
                .then(response => {
                    if(response.status !== 200) {
                        throw "error";
                    }
                    outputData();
                })
                .catch(error);                         
        });
    });      
};

export default sendForm;