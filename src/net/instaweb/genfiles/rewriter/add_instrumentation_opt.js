(function(){window.pagespeed=window.pagespeed||{};var e=window.pagespeed;function g(a,c,b,d){this.c=a;this.a=c;this.b=b;this.d=d}e.beaconUrl="";
g.prototype.sendBeacon=function(){var a=this.c,c=window.mod_pagespeed_start,b=Number(new Date)-c,a=a+(-1==a.indexOf("?")?"?":"&"),a=a+"ets="+("load"==this.a?"load:":"unload:"),a=a+b;if("beforeunload"!=this.a||!window.mod_pagespeed_loaded){a+="&r"+this.a+"=";if(window.performance){var b=window.performance.timing,d=b.navigationStart,f=b.requestStart,a=a+(b[this.a+"EventStart"]-d),a=a+("&nav="+(b.fetchStart-d)),a=a+("&dns="+(b.domainLookupEnd-b.domainLookupStart)),a=a+("&connect="+(b.connectEnd-b.connectStart)),
a=a+("&req_start="+(f-d)),a=a+("&ttfb="+(b.responseStart-f)),a=a+("&dwld="+(b.responseEnd-b.responseStart)),a=a+("&dom_c="+(b.domContentLoadedEventStart-d));window.performance.navigation&&(a+="&nt="+window.performance.navigation.type);d=-1;b.msFirstPaint?d=b.msFirstPaint:window.chrome&&window.chrome.loadTimes&&(d=Math.floor(1E3*window.chrome.loadTimes().firstPaintTime));d-=f;0<=d&&(a+="&fp="+d)}else a+=b;e.getResourceTimingData&&window.parent==window&&(a+=e.getResourceTimingData());a+=window.parent!=
window?"&ifr=1":"&ifr=0";"load"==this.a&&(window.mod_pagespeed_loaded=!0,(b=window.mod_pagespeed_num_resources_prefetched)&&(a+="&nrp="+b),(b=window.mod_pagespeed_prefetch_start)&&(a+="&htmlAt="+(c-b)));e.panelLoader&&(c=e.panelLoader.getCsiTimingsString(),""!=c&&(a+="&b_csi="+c));e.criticalCss&&(c=e.criticalCss,a+="&ccis="+c.total_critical_inlined_size+"&cces="+c.total_original_external_size+"&ccos="+c.total_overhead_size+"&ccrl="+c.num_replaced_links+"&ccul="+c.num_unreplaced_links);""!=this.b&&
(a+=this.b);document.referrer&&(a+="&ref="+encodeURIComponent(document.referrer));a+="&url="+encodeURIComponent(this.d);e.beaconUrl=a;(new Image).src=a}};e.e=function(a,c,b,d){var f=new g(a,c,b,d);window.addEventListener?window.addEventListener(c,function(){f.sendBeacon()},!1):window.attachEvent("on"+c,function(){f.sendBeacon()})};e.addInstrumentationInit=e.e;})();
