const calc = () => {
    let priceTotal = document.getElementById('price-total'),
        pricePromo = document.querySelector('.price-message');
        
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

    const sale = 0.3;    
    const forms = document.querySelectorAll('form');
    let typeClub,
    valueClub,
    cost;

    const loopThrough = (valueClub="mozaika", typeClub="m1") => {

        for(let i in data) {
            i = valueClub;      
              for (let j in  data[i]) {
                  if ( j === typeClub) {                  
                    cost = Math.floor(data[i][j]);                
            } 
            priceTotal.textContent = cost;                      
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
     });
});

pricePromo.addEventListener('input', (event) => {
    if(event.target.value === "ТЕЛО2020") {    
        priceTotal.textContent = Math.floor(cost * sale);                    
    }           
});

    loopThrough();
         
};

export default calc;