'use strict';

import operateBurgerMenu from './modules/operateBurgerMenu';
import showDropDownChooseClub from './modules/showDropDownChooseClub';
import scrollToTop from './modules/scrollToTop';
import sliderGallery from './modules/sliderGallery';
import sendForm from './modules/sendForm';
import mainSlider from './modules/mainSlider';
import toggleModals from './modules/toggleModals';
import sliderCarousel from './modules/sliderCarousel';

operateBurgerMenu();
showDropDownChooseClub();
scrollToTop();
sliderGallery();
mainSlider();
sendForm('banner-form');
toggleModals();

const carousel = new sliderCarousel({
    main: '.wrapper',
    wrap: '.services-slider',
    infinity: true
});
carousel.init();

