!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var i=function(){var e=document.querySelector(".hidden-large"),t=document.querySelector(".hidden-small"),n=document.querySelector(".popup-menu"),i=document.querySelector(".top-menu"),o=document.querySelector(".fixed-gift"),r=document.querySelector(".close-menu-btn");if(document.documentElement.clientWidth<768){t.style.display="none",e.style.display="block";try{o.style.right="52px"}catch(e){}}window.addEventListener("resize",(function(){document.documentElement.clientWidth<768?(t.style.display="none",e.style.display="block"):(e.style.display="none",t.style.display="flex")})),window.addEventListener("scroll",(function(){if(document.documentElement.clientWidth<768&&document.documentElement.scrollTop>i.scrollTop){i.style.position="fixed",i.style.top="0px";try{o.style.right="52px"}catch(e){}}else i.style.position=""})),e.addEventListener("click",(function(e){n.style.display="flex",console.log(e.target)})),r.addEventListener("click",(function(){n.style.display="none"})),n.addEventListener("click",(function(e){"A"===e.target.tagName&&(n.style.display="none")}))},o=function(){var e=document.querySelector(".clubs-list"),t=document.querySelectorAll(".clubs-list>ul")[0];e.addEventListener("click",(function(){t.style.display="block",console.log(5)}))},r=function(){var e=document.getElementById("totop"),t=document.querySelector(".head-slider");e.style.display="none",document.addEventListener("scroll",(function(){window.pageYOffset>t.scrollHeight?e.style.display="block":window.pageYOffset<t.scrollHeight&&(e.style.display="none")}))},l=function(){var e,t=document.querySelector(".gallery-slider"),n=t.querySelectorAll(".slide"),i=0,o=document.createElement("ul");o.classList.add("slider-dots"),t.appendChild(o);!function(){for(var e=0;e<n.length;e++){var t=document.createElement("li"),i=document.createElement("button");0===e&&t.classList.add("slick-active"),t.append(i),o.append(t)}}();var r=o.getElementsByTagName("li"),l=function(e,t,n){e[t].classList.remove(n)},s=function(e,t,n){e[t].classList.add(n)},a=function(){l(n,i,"slide-active"),l(r,i,"slick-active"),++i>=n.length&&(i=0),s(n,i,"slide-active"),s(r,i,"slick-active")},c=function(e,t,n){var i=document.createElement("div"),o=document.createElement("span"),r=document.querySelector(".gallery-slider");return o.style.backgroundImage="url(../images/arrow-".concat(n,".png)"),o.style.backgroundRepeat="no-repeat",o.style.backgroundPosition="center",i.classList.add(e),i.classList.add(t),r.appendChild(i),i.appendChild(o),i};c("slider-arrow","prev","left"),c("slider-arrow","next","right");var d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5e3;e=setInterval(a,t)};t.addEventListener("click",(function(e){e.preventDefault(),l(n,i,"slide-active"),l(r,i,"slick-active");var t=e.target;if(t.parentNode.matches(".next"))i++;else if(t.parentNode.matches(".prev"))i--;else if(t.parentNode.matches("li")){Array.from(r).forEach((function(e,n){e===t.parentNode&&(i=n)}))}i>=n.length&&(i=0),i<0&&(i=n.length-1),s(n,i,"slide-active"),s(r,i,"slick-active")})),t.addEventListener("mouseover",(function(t){(t.target.parentNode.matches(".prev")||t.target.parentNode.matches(".next")||t.target.parentNode.matches("li"))&&clearInterval(e)})),t.addEventListener("mouseout",(function(e){(e.target.parentNode.matches(".prev")||e.target.parentNode.matches(".next")||e.target.parentNode.matches("li"))&&d(3e3)})),d(3e3)},s=function(e){document.getElementById(e).querySelector("button").addEventListener("submit",(function(e){e.preventDefault(),console.log(2)}))},a=function(){var e=document.querySelector(".main-slider"),t=e.querySelectorAll(".slide"),n=0;setInterval((function(){t[n].style.display="none",++n>=t.length&&(n=0),t[n].style.display="flex"}),3e3)},c=function(){var e=document.getElementById("callback_form"),t=document.getElementById("free_visit_form"),n=document.getElementById("gift");document.addEventListener("click",(function(i){(i.target.matches(".callback-btn")||i.target.matches(".close_icon"))&&(e.style.display="block"),(i.target.matches(".overlay")||i.target.matches(".close_icon"))&&(e.style.display="none",t.style.display="none"),i.target.matches(".open-popup")&&(t.style.display="block"),i.target.matches(".fixed-gift img")&&(n.style.display="block"),(i.target.matches(".overlay")||i.target.matches(".close_icon"))&&(n.style.display="none")}))};function d(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o,r=!0,l=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return r=e.done,e},e:function(e){l=!0,o=e},f:function(){try{r||null==i.return||i.return()}finally{if(l)throw o}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function p(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var y=function(){function e(t){var n=t.main,i=t.wrap,o=t.next,r=t.prev,l=t.infinity,s=void 0!==l&&l,a=t.position,c=void 0===a?0:a,d=t.slidesToShow,u=void 0===d?5:d;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.main=document.querySelector(n),this.wrap=document.querySelector(i),this.slides=document.querySelector(i).children,this.next=document.querySelector(o),this.prev=document.querySelector(r),this.slidesToShow=u,this.options={position:c,infinity:s,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow}}var t,n,i;return t=e,(n=[{key:"init",value:function(){this.addClass(),this.addStyle(),this.addArrow(),this.controlSlider()}},{key:"addClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");var e,t=d(this.slides);try{for(t.s();!(e=t.n()).done;)e.value.classList.add("glo-slider__item")}catch(e){t.e(e)}finally{t.f()}}},{key:"addStyle",value:function(){var e=document.createElement("style");e.id="sliderCarousel-style",e.textContent="\n            .wrapper {\n                overflow: hidden;\n            }\n            .glo-slider__wrap {\n                display: flex;\n                transition: transform 0.5s;\n                will-change: transform;       \n            }\n            .glo-slider__item{\n                flex: 0 0 ".concat(this.options.widthSlide,"%;\n            }"),document.head.appendChild(e)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"addArrow",value:function(){var e=this,t=function(t,n,i){var o=document.createElement("div"),r=document.createElement("span");return r.style.backgroundImage="url(../images/arrow-".concat(i,".png)"),"right"===i&&(r.style.left="98%",r.style.top="-250px"),"left"===i&&(r.style.top="-210px"),r.style.backgroundRepeat="no-repeat",r.style.backgroundColor="#f4c71b",r.style.backgroundPosition="center",r.style.borderRadius="50%",r.style.height="36px",r.style.width="37px",r.style.display="block",r.style.position="relative",o.classList.add(t),o.classList.add(n),e.wrap.parentNode.appendChild(o),o.appendChild(r)};this.prev=t("slider-arrow","prev","left"),this.next=t("slider-arrow","next","right")}}])&&p(t.prototype,n),i&&p(t,i),e}();i(),o(),r(),l(),a(),s("banner-form"),c(),new y({main:".wrapper",wrap:".services-slider",infinity:!0}).init()}]);