const calc = () => {
    
    const sale = 0.7;
    const priceTotal = document.getElementById('price-total'),
          promoCode = document.querySelector('.price-message > input'),
          forms = document.querySelectorAll('form');
        
        const data = {
            'mozaika': {
                'm1': 1999,
                'm2': 9900,
                'm3': 13900,
                'm4': 9900,
                'm5': 19900,
            },
            'schelkovo': {
                'm1': 2999,
                'm2': 14990,
                'm3': 21990,
                'm4': 14990,
                'm5': 24990
            }          
    };
 
    let typeClub,
    valueClub,
    cost;

    const renderPrice = (cost) => {
     
        priceTotal.textContent = Math.floor(cost);     
    };

    const loopThrough = (valueClub="mozaika", typeClub="m1") => {

        for(let i in data) {
            i = valueClub;      
              for (let j in  data[i]) {
                  if ( j === typeClub) {                  
                    cost = Math.floor(data[i][j]); 
                    renderPrice(cost);                          
            }                  
        }             
    }   
};
      
    forms.forEach(form => {
        form.addEventListener('change', (event) => { 
            if (event.target.name === "card-type"){
                typeClub = event.target.id;                                
         }  
            if(event.target.name === "club-name"){
            valueClub = event.target.value;                
         }
         loopThrough(valueClub, typeClub);  

            if(promoCode.value === "ТЕЛО2020") {
             cost *= sale;
             renderPrice(cost);                       
         }           
     });
});

loopThrough();
 
};

export default calc;