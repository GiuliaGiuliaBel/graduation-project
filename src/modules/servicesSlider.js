class sliderCarousel{
    constructor(){

    }
} // const servicesSlider = () => {

    // const slider = document.querySelector('.services-slider'),
    //     slide = slider.querySelectorAll('.slide');
      
    //     const createSpan = (classSelector) => {
    //         const div = document.createElement('div'),
    //         span = document.createElement('span');
            
    //         div.classList.add(classSelector);       
    //         div.append(span);
    //         return div;
    //     }

    //     const arrowLeft = createSpan('slider-arrow-left');
    //     const arrowRight = createSpan('slider-arrow-right');
         
    //     slider.insertAdjacentElement('afterbegin', arrowLeft);
    //     slider.insertAdjacentElement('afterbegin', arrowRight);  
       

    //     const start = () => {
    //         let currentSlide = 0;
           
    //         slider.addEventListener('click', (event) => {
              
    //             if (event.target.closest('.slider-arrow-left')) { 
    //                 slide[currentSlide].style.display = "block" ;    
    //                 currentSlide--;                                   
    //             } else if(event.target.closest('.slider-arrow-right')){
    //                 slide[currentSlide].style.display = "none" ; 
    //                 currentSlide++;                            
    //             }            

    //             if(currentSlide >= slide.length){
    //                 currentSlide = 0;
    //                 slide[currentSlide].style.display = "flex" ; 
    //                 start();
    //             }
    //             if(currentSlide < 0){
    //                 currentSlide = slide.length - 1;
    //             }
    //         });
    //     }

    //     start();
// };

export default sliderCarousel;