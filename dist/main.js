!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){var e=document.querySelector(".clubs-list"),t=document.querySelectorAll(".clubs-list>ul")[0];e.addEventListener("click",(function(){t.style.display="block",console.log(5)}))},r=function(){var e=document.querySelector(".free-visit"),t=document.querySelector(".close-form"),n=document.getElementById("free_visit_form");e.addEventListener("click",(function(){n.style.display="block"})),t.addEventListener("click",(function(){console.log(2)}))},l=function(){var e=document.getElementById("totop"),t=document.querySelector(".head-slider");e.style.display="none",document.addEventListener("scroll",(function(){window.pageYOffset>t.scrollHeight?e.style.display="block":window.pageYOffset<t.scrollHeight&&(e.style.display="none")}))};(function(){var e=document.querySelector(".hidden-large"),t=document.querySelector(".hidden-small");window.addEventListener("resize",(function(){document.documentElement.clientWidth<768?(t.style.display="none",e.style.display="block"):(e.style.display="",t.style.display="flex")}))})(),o(),r(),l()}]);