!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function l(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],u=n[a]||0,s="".concat(a," ").concat(u);n[a]=u+1;var d=l(s),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(c[d].references++,c[d].updater(f)):c.push({identifier:s,updater:h(f,t),references:1}),o.push(s)}return o}function u(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function p(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var v=null,m=0;function h(e,t){var n,o,r;if(t.singleton){var i=m++;n=v||(v=u(t)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=u(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=l(n[o]);c[r].references--}for(var i=a(e,t),u=0;u<n.length;u++){var s=l(n[u]);0===c[s].references&&(c[s].updater(),c.splice(s,1))}n=i}}}},function(e,t,n){"use strict";n.r(t);n(2),n(4),n(6),n(7)},function(e,t,n){var o=n(0),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},c=(o(r,i),r.locals?r.locals:{});e.exports=c},function(e,t,n){},function(e,t,n){var o=n(0),r=n(5);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},c=(o(r,i),r.locals?r.locals:{});e.exports=c},function(e,t,n){},function(e,t){var n,o,r,i;n=document.querySelector(".wrapper"),o=document.querySelector(".indicator"),r=parseInt(window.getComputedStyle(n).width),i=parseInt(document.body.scrollHeight-document.documentElement.clientHeight),window.addEventListener("scroll",(function(){o.style.width=window.pageYOffset/i*r+"px"}))},function(e,t){for(var n=document.querySelectorAll(".section"),o=document.querySelector("section"),r=parseInt(window.getComputedStyle(o).height),i=document.querySelectorAll(".link"),c=document.querySelectorAll(".link_footer"),l=document.querySelectorAll(".link_gmb"),a=!1,u=[],s=0,d=0;d<n.length;d++)u.push(r*d);function f(e){window.scrollTo({top:u[e],behavior:"smooth"}),setTimeout((function(){a=!1}),150)}document.addEventListener("wheel",(function(e){!1===a&&(a=!0,e.deltaY>0?(s>=u.length-1?s=u.length-1:s+=1,f(s)):(0===s?s=0:s-=1,f(s)))}));for(var p=function(e){i[e].addEventListener("click",(function(t){t.preventDefault(),!1===a&&(a=!0,window.scrollTo({top:u[e],behavior:"smooth"}),s=e,setTimeout((function(){a=!1}),150))}))},v=0;v<i.length;v++)p(v);for(var m=function(e){c[e].addEventListener("click",(function(t){t.preventDefault(),!1===a&&(a=!0,window.scrollTo({top:u[e],behavior:"smooth"}),s=e,setTimeout((function(){a=!1}),150))}))},h=0;h<c.length;h++)m(h);for(var y=function(e){l[e].addEventListener("click",(function(t){t.preventDefault(),window.scrollTo({top:u[e],behavior:"smooth"}),_.click(),s=e,setTimeout((function(){a=!1}),150)}))},g=0;g<l.length;g++)y(g);window.addEventListener("keydown",(function(e){!1===a&&(a=!0,40===e.keyCode?(e.preventDefault(),s>=u.length-1?s=u.length-1:s+=1,f(s)):38===e.keyCode?(e.preventDefault(),0===s?s=0:s-=1,f(s)):a=!1)}));var b,w;!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(document.addEventListener("touchstart",(function(){!1===a&&(a=!0,b=window.pageYOffset,a=!1)})),document.addEventListener("touchend",(function(){!1===a&&(a=!0,w=window.pageYOffset,b-w<0?(s>=u.length-1?s=u.length-1:s+=1,f(s)):b-w>0?(0===s?s=0:s-=1,f(s)):a=!1)})));var S=document.querySelector(".gmb-button"),_=document.querySelector(".gmb-button_close"),k=document.querySelector(".wrapper"),E=document.querySelector(".gmb-menu-hide"),L=document.querySelector(".gmb-menu"),C=document.querySelector(".gmb-button__section"),T=document.querySelector("body"),q=parseInt(window.getComputedStyle(L).width),x=0;S.addEventListener("click",(function(){a=!0,C.classList.add("section_active"),k.classList.add("wrapper_active"),E.style.display="block",T.style.overflow="hidden";var e=setInterval((function(){(x=parseInt(window.getComputedStyle(L).right))>=25?clearInterval(e):L.style.right=x+4+"px"}),1)})),_.addEventListener("click",(function(){a=!1,C.classList.remove("section_active"),k.classList.remove("wrapper_active"),E.style.display="none",T.style.overflow="unset";var e=setInterval((function(){(x=parseInt(window.getComputedStyle(L).right))<=-q?clearInterval(e):L.style.right=x-4+"px"}),1)})),E.addEventListener("click",(function(e){e.target===E&&_.click()}))}]);