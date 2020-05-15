const mainSlider = () => {
    const mainSlider = document.querySelector('.main-slider'),
        slides = mainSlider.querySelectorAll('.slide');
        let currentSlide = 0;
        const autoplaySlide = () => {
            slides[currentSlide].style.display = "none";
            currentSlide++;
            if(currentSlide >= slides.length){
                currentSlide = 0;            
            }
            slides[currentSlide].style.display = "flex";
        }
        
        const startSlide = () => {
            setInterval(autoplaySlide, 3000);
        };

        startSlide();
};

export default mainSlider;