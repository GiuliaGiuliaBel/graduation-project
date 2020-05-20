'use strict';

import operateBurgerMenu from './modules/operateBurgerMenu';
import showDropDownChooseClub from './modules/showDropDownChooseClub';
import scrollToTop from './modules/scrollToTop';
import sliderGallery from './modules/sliderGallery';
import maskPhone from './modules/maskPhone';
import mainSlider from './modules/mainSlider';
import toggleModals from './modules/toggleModals';
import sliderCarousel from './modules/sliderCarousel';
import checkCheckboxes from './modules/checkCheckboxes';
import validateName from './modules/validateName';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

operateBurgerMenu();
showDropDownChooseClub();// 
scrollToTop();
maskPhone('+7 (___) ___-__-__');
validateName();
checkCheckboxes();
sliderGallery();
mainSlider();
calc();
toggleModals();
sendForm();
const carousel = new sliderCarousel({
    main: '#services .wrapper',
    wrap: '.services-slider',
    infinity: true
});
carousel.init();

