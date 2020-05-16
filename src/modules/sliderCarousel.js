export default class sliderCarousel{
    constructor({
        main, 
        wrap, 
        next,
        prev,
        infinity = false,
        position = 0,
        slidesToShow = 5
    }){
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100 / this.slidesToShow),
            maxPosition: this.slides.length - this.slidesToShow
        };
    }

    init(){
        this.addClass();
        this.addStyle();
        this.addArrow();
        this.controlSlider();
    }

    addClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        for (const item of this.slides) {
            item.classList.add('glo-slider__item');
        }
    }

    addStyle(){
        const style = document.createElement('style');
        style.id = 'sliderCarousel-style';
        style.textContent = `
            .wrapper {
                overflow: hidden;
            }
            .glo-slider__wrap {
                display: flex;
                transition: transform 0.5s;
                will-change: transform;       
            }
            .glo-slider__item{
                flex: 0 0 ${this.options.widthSlide}%;
            }`
        document.head.appendChild(style);
    }

    controlSlider(){
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider(){   
        if(this.options.infinity || this.options.position > 0){
            --this.options.position;
    
            if(this.options.position < 0){
                this.options.position = this.options.maxPosition;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`
        }   
    }

    nextSlider(){
        if(this.options.infinity || this.options.position < this.options.maxPosition){
            ++this.options.position;
            
            if (this.options.position > this.options.maxPosition){
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`
        }   
    }

    addArrow(){    

    const createSpan = (classSelector, sel, direction) => {
        const arrow = document.createElement('div'); 
        const span =  document.createElement('span'); 
            span.style.backgroundImage = `url(../images/arrow-${direction}.png)`;
            if(direction === "right") {
                span.style.left = "98%";
                span.style.top = "-250px";
            }
            if(direction === "left") {
                span.style.top = "-210px";
            }
            span.style.backgroundRepeat = "no-repeat";
            span.style.backgroundColor =  "#f4c71b";
            span.style.backgroundPosition = "center";
            span.style.borderRadius = "50%";
            span.style.height = "36px";
            span.style.width = "37px";
            span.style.display = "block";
            span.style.position = "relative";
            
            arrow.classList.add(classSelector); 
            arrow.classList.add(sel); 
            this.wrap.parentNode.appendChild(arrow);           

        return arrow.appendChild(span);
    }
        this.prev = createSpan('slider-arrow', 'prev', 'left');
        this.next = createSpan('slider-arrow', 'next', 'right');        
    };
} 