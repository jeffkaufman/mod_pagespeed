(function(){var f=null;function g(a,b,d){if(a.addEventListener)a.addEventListener(b,d,!1);else if(a.attachEvent)a.attachEvent("on"+b,d);else{var c=a["on"+b];a["on"+b]=function(){d.call(this);c&&c.call(this)}}};window.pagespeed=window.pagespeed||{};var h=window.pagespeed;function l(a){this.d=[];this.e=0;this.c=!1;this.h=a;this.f=f;this.i=0;this.j=200;this.a=!1;this.b=0}function m(a,b){var d=b.getAttribute("pagespeed_lazy_position");if(d)return parseInt(d,0);var d=b.offsetTop,c=b.offsetParent;c&&(d+=m(a,c));d=Math.max(d,0);b.setAttribute("pagespeed_lazy_position",d);return d}
function n(a,b){var d,c,e;if(!a.a&&(0==b.offsetHeight||0==b.offsetWidth))return!1;e:if(b.currentStyle)c=b.currentStyle.position;else{if(document.defaultView&&document.defaultView.getComputedStyle&&(c=document.defaultView.getComputedStyle(b,f))){c=c.getPropertyValue("position");break e}c=b.style&&b.style.position?b.style.position:""}if("relative"==c)return!0;e=0;"number"==typeof window.pageYOffset?e=window.pageYOffset:document.body&&document.body.scrollTop?e=document.body.scrollTop:document.documentElement&&
document.documentElement.scrollTop&&(e=document.documentElement.scrollTop);d=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;c=e;e+=d;var k=b.getBoundingClientRect();k?(e=k.top-d,c=k.bottom):(k=m(a,b),d=k+b.offsetHeight,e=k-e,c=d-c);return e<=a.e&&0<=c+a.e}
l.prototype.k=function(a){q(a);var b=this;window.setTimeout(function(){var d=a.getAttribute("pagespeed_lazy_src");if(d!=f)if((b.c||n(b,a))&&-1!=a.src.indexOf(b.h)){var c=a.parentNode,e=a.nextSibling;c&&c.removeChild(a);a.g&&(a.getAttribute=a.g);a.removeAttribute("onload");a.tagName&&"IMG"==a.tagName&&h.CriticalImages&&g(a,"load",function(){h.CriticalImages.checkImageForCriticality(this);b.a&&(b.b--,0==b.b&&h.CriticalImages.checkCriticalImages())});a.removeAttribute("pagespeed_lazy_src");a.removeAttribute("pagespeed_lazy_replaced_functions");
c&&c.insertBefore(a,e);a.src=d}else b.d.push(a)},0)};l.prototype.loadIfVisibleAndMaybeBeacon=l.prototype.k;l.prototype.n=function(){this.c=!0;r(this)};l.prototype.loadAllImages=l.prototype.n;function r(a){var b=a.d,d=b.length;a.d=[];for(var c=0;c<d;++c)a.k(b[c])}function t(a,b){return a.l?a.l(b)!=f:a.getAttribute(b)!=f}l.prototype.o=function(){for(var a=document.getElementsByTagName("img"),b=0,d;d=a[b];b++)t(d,"pagespeed_lazy_src")&&q(d)};l.prototype.overrideAttributeFunctions=l.prototype.o;
function q(a){t(a,"pagespeed_lazy_replaced_functions")||(a.g=a.getAttribute,a.getAttribute=function(a){"src"==a.toLowerCase()&&t(this,"pagespeed_lazy_src")&&(a="pagespeed_lazy_src");return this.g(a)},a.setAttribute("pagespeed_lazy_replaced_functions","1"))}
h.m=function(a,b){function d(){if(!(c.a&&a||c.f)){var b=c.j;(new Date).getTime()-c.i>c.j&&(b=0);c.f=window.setTimeout(function(){c.i=(new Date).getTime();r(c);c.f=f},b)}}var c=new l(b);h.lazyLoadImages=c;g(window,"load",function(){c.a=!0;c.c=a;c.e=200;if(h.CriticalImages){for(var b=0,d=document.getElementsByTagName("img"),s=0,p;p=d[s];s++)-1!=p.src.indexOf(c.h)&&t(p,"pagespeed_lazy_src")&&b++;c.b=b;0==c.b&&h.CriticalImages.checkCriticalImages()}r(c)});0!=b.indexOf("data")&&((new Image).src=b);g(window,
"scroll",d);g(window,"resize",d)};h.lazyLoadInit=h.m;})();
