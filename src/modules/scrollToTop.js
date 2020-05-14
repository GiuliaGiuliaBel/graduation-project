const scrollToTop = () => {
    const arrow = document.getElementById('totop'),
        headSlider = document.querySelector('.head-slider');

        arrow.style.display = "none";
        
        document.addEventListener('scroll', () => {          
            if (window.pageYOffset > headSlider.scrollHeight) {
                arrow.style.display = "block";
            }
            else if (window.pageYOffset < headSlider.scrollHeight) {
                arrow.style.display = "none";
            }           
     });
        
};

export default scrollToTop;