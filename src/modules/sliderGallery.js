const sliderGallery = () => {
    const gallerySlider = document.querySelector('.gallery-slider'),
        slides = gallerySlider.querySelectorAll('.slide');
    
        let currentSlide = 0;

        const autoplaySlide = () => {
            slides[currentSlide].classList.remove('slide-active');
            currentSlide++;
            if(currentSlide >= slides.length){
                currentSlide = 0;            
            }
            slides[currentSlide].classList.add('slide-active');
            stopSlide();
        };

        const startSlide = () => {
            setInterval(autoplaySlide, 3000);
        };

        const stopSlide = () => {
            
        }
        startSlide();     
};

export default sliderGallery;