const sliderGallery = () => {
    const gallerySlider = document.querySelector('.gallery-slider'),
        slides = gallerySlider.querySelectorAll('.slide');

        let currentSlide = 0,
            interval;

        const sliderDots = document.createElement('ul');        
        sliderDots.classList.add('slider-dots'); 
        gallerySlider.appendChild(sliderDots);

        const createSliderDot = () => {
            for(let i = 0; i < slides.length; i++) {    
                const liDot = document.createElement('li'),
                    btn = document.createElement('button');
                    i === 0 ? liDot.classList.add('slick-active') : '';
                    liDot.append(btn);
                sliderDots.append(liDot);                  
            }
        }
        
        createSliderDot();   

        let liDots = sliderDots.getElementsByTagName('li');
        
        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass)
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoplaySlide = () => {
            prevSlide(slides, currentSlide, 'slide-active');
            prevSlide(liDots, currentSlide, 'slick-active');
            currentSlide++;
            if(currentSlide >= slides.length){
                currentSlide = 0;            
            }     
            nextSlide(slides, currentSlide, 'slide-active');  
            nextSlide(liDots, currentSlide, 'slick-active');   
        };

        const createArrow = (classSelector, sel, direction) => {
                const arrow = document.createElement('div'),
                    span =  document.createElement('span'),
                    main = document.querySelector('.gallery-slider');

                    span.style.backgroundImage = `url(./images/arrow-${direction}.png)`;
                    span.style.backgroundRepeat = "no-repeat";
                    span.style.backgroundPosition = "center";
                   
                    arrow.classList.add(classSelector); 
                    arrow.classList.add(sel); 
                    main.appendChild(arrow);
                    arrow.appendChild(span); 
                return arrow;      
        };

        createArrow('slider-arrow', 'prev', 'left');
        createArrow('slider-arrow', 'next', 'right' );
      
        const startSlide = (time = 5000) => {
            interval = setInterval(autoplaySlide, time);
        };
        
        const stopSlide = () => {
            clearInterval(interval);
        };

        gallerySlider.addEventListener('click', event => {
            event.preventDefault();

            prevSlide(slides, currentSlide, 'slide-active');
            prevSlide(liDots, currentSlide, 'slick-active');
            let target = event.target;

            if(target.parentNode.matches('.next')){                       
                currentSlide++;                          
            } else if(target.parentNode.matches('.prev')){                        
                currentSlide--;                           
            } 
            else if(target.parentNode.matches('li')){
                const liDotsArray = Array.from(liDots);             
                liDotsArray.forEach((elem, index) => {
                                  
                    if(elem === target.parentNode) {                                      
                        currentSlide = index;
                    }                
               });
            }

            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }
            nextSlide(slides, currentSlide, 'slide-active');  
            nextSlide(liDots, currentSlide, 'slick-active'); 
        });

        gallerySlider.addEventListener('mouseover', (event) => {
            if (event.target.parentNode.matches('.prev') ||
                event.target.parentNode.matches('.next') ||
                event.target.parentNode.matches('li')){
                stopSlide();             
            }
        });

        gallerySlider.addEventListener('mouseout', (event) => {
            if(event.target.parentNode.matches('.prev') ||
               event.target.parentNode.matches('.next') ||
               event.target.parentNode.matches('li')) {
               startSlide(3000);           
            }                   
        });
        startSlide(3000);     
};

export default sliderGallery;
