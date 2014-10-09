(function(){var f=null;
function h(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}var k="closure_uid_"+(1E9*Math.random()>>>0),m=0;var n="StopIteration"in this?this.StopIteration:Error("StopIteration");function p(){}p.prototype.next=function(){throw n;};p.prototype.l=function(){return this};function r(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};function s(a,b){this.c={};this.a=[];this.j=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.e(a)}s.prototype.f=function(){t(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.c[this.a[b]]);return a};
function t(a){if(a.i!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Object.prototype.hasOwnProperty.call(a.c,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.i!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Object.prototype.hasOwnProperty.call(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}s.prototype.set=function(a,b){Object.prototype.hasOwnProperty.call(this.c,a)||(this.i++,this.a.push(a),this.j++);this.c[a]=b};
s.prototype.e=function(a){var b;if(a instanceof s)t(a),b=a.a.concat(),a=a.f();else{b=[];var c=0,d;for(d in a)b[c++]=d;a=r(a)}for(c=0;c<b.length;c++)this.set(b[c],a[c])};s.prototype.l=function(a){t(this);var b=0,c=this.a,d=this.c,e=this.j,g=this,l=new p;l.next=function(){for(;;){if(e!=g.j)throw Error("The map has changed since the iterator was created");if(b>=c.length)throw n;var l=c[b++];return a?l:d[l]}};return l};function u(a){if("function"==typeof a.f)return a.f();if("string"==typeof a)return a.split("");var b=h(a);if("array"==b||"object"==b&&"number"==typeof a.length){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return r(a)};function v(a){this.c=new s;a&&this.e(a)}function w(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+(a[k]||(a[k]=++m)):b.substr(0,1)+a}v.prototype.add=function(a){this.c.set(w(a),a)};v.prototype.e=function(a){a=u(a);for(var b=a.length,c=0;c<b;c++)this.add(a[c])};v.prototype.f=function(){return this.c.f()};v.prototype.l=function(){return this.c.l(!1)};google.load("visualization","1.0",{packages:["corechart"]});function x(a){window.console&&console.error(a)}
function y(){this.b=[];this.m=new v;this.g=this.k=f;this.r={width:900,height:255,colors:["#4ECDC4","#556270","#C7F464"],legend:{position:"bottom"},hAxis:{format:"MMM d, y hh:mma",gridlines:{color:"#F2F2F2"},baselineColor:"#E5E5E5"},vAxis:{format:"#.###%",minValue:0,viewWindowMode:"explicit",viewWindow:{min:0},gridlines:{color:"#F2F2F2"},baselineColor:"#E5E5E5"},chartArea:{left:60,top:20,width:800},pointSize:2}}function z(a){var b={};b.d=new v([a]);b.evaluate=function(b){return b(a)};return b}
function A(a){var b={};b.d=new v;for(var c=0;c<a.length;c++)b.d.e(a[c].d);b.evaluate=function(b){for(var c=0,g=0;g<a.length;g++)c+=a[g].evaluate(b);return c};return b}function B(a,b){var c={};c.d=new v;c.d.e(a.d);c.d.e(b.d);c.evaluate=function(c){var e=b.evaluate(c);return 0==e?0:a.evaluate(c)/e};return c}function C(a,b){return B(a,A([a,b]))}
function D(a,b,c,d){var e={};e.title=b;e.p="https://developers.google.com/speed/pagespeed/module/console#"+c;e.value=d;e.q=a.b.length;e.h=f;e.priority=f;e.n=f;e.o=f;a.b.push(e);a.m.e(d.d)}function E(a,b,c){var d=pagespeedStatisticsUrl+"?json",d=d+("&start_time="+b.getTime()),d=d+("&end_time="+c.getTime()),d=d+"&granularity=60000&var_titles=";for(b=0;b<a.length;b++)d+=a[b]+",";return d}
function F(a,b,c){var d=new XMLHttpRequest;b=E(a.m.f(),b,c);d.onreadystatechange=function(){if(4==this.readyState)if(200!=this.status||1>this.responseText.length||"{"!=this.responseText[0])x("XHR request failed.");else{var b=JSON.parse(this.responseText);G(a,b)}};d.open("GET",b);d.send()}
function G(a,b){a.k=b.variables;a.g=b.timestamps;H(a.g,a.k);for(var c=0;c<a.b.length;c++){for(var d=[],e=0;e<a.g.length;e++)d.push(a.b[c].value.evaluate(function(a){return function(b){if(b in a)return a[b][e];x("JSON data missing required variable.")}}(a.k)));a.b[c].h=d[d.length-1];a.b[c].priority=a.b[c].h;a.b[c].n=I(a.b[c].title,a.g,d)}a.b.sort(function(a,b){return b.priority-a.priority});for(c=0;c<a.b.length;c++)J(a,a.b[c])}
function H(a,b){for(var c in b)a.length!=b[c].length&&x("JSON response is malformed. ("+a.length+" != "+b[c].length+")")}function I(a,b,c){var d=new google.visualization.DataTable;d.addColumn("datetime","Time");d.addColumn("number",a);for(var e=0;e<b.length;e++)d.addRow([new Date(b[e]),c[e]]);0==d.getNumberOfRows()&&x("Data failed to load for graph "+a);return d}
function J(a,b){var c=google.visualization.LineChart,d=b.title,e=b.h,g=b.p,l=b.q,q=document.createElement("div");q.setAttribute("class","pagespeed-widgets");q.appendChild(K(d,e,g,l));d=document.createElement("div");d.setAttribute("class","pagespeed-graph");q.appendChild(d);document.getElementById("pagespeed-graphs-container").appendChild(q);b.o=new c(d);b.o.draw(b.n,a.r)}
function K(a,b,c,d){var e=document.createElement("div");e.setAttribute("class","pagespeed-widgets-topbar");var g=document.createElement("span");g.setAttribute("class","pagespeed-title");g.setAttribute("id","pagespeed-title"+d);g.appendChild(document.createTextNode(a+": "+(100*b).toFixed(2)+"% ("));a=document.createElement("a");a.setAttribute("href",c);a.appendChild(document.createTextNode("doc"));g.appendChild(a);g.appendChild(document.createTextNode(")"));e.appendChild(g);return e};google.setOnLoadCallback(function(){var a=new y;D(a,"Resources not loaded because of fetch failures","fetch-failure",B(z("serf_fetch_failure_count"),z("serf_fetch_request_count")));D(a,"Resources not rewritten because domain wasn't authorized","not-authorized",C(z("resource_url_domain_rejections"),z("resource_url_domain_acceptances")));D(a,"Resources not rewritten because of restrictive Cache-Control headers","cache-control",C(z("num_cache_control_not_rewritable_resources"),z("num_cache_control_rewritable_resources")));
var b=A([z("cache_backend_misses"),z("cache_backend_hits")]);D(a,"Cache misses","cache-miss",B(z("cache_backend_misses"),b));D(a,"Cache lookups that were expired","cache-expired",B(z("cache_expirations"),b));D(a,"CSS files not rewritten because of parse errors","css-error",C(z("css_filter_parse_failures"),z("css_filter_blocks_rewritten")));D(a,"JavaScript minification failures","js-error",C(z("javascript_minification_failures"),z("javascript_blocks_minified")));var b=A([z("image_rewrites"),z("image_rewrites_dropped_nosaving_resize"),
z("image_rewrites_dropped_nosaving_noresize")]),c=A([z("image_norewrites_high_resolution"),z("image_rewrites_dropped_decode_failure"),z("image_rewrites_dropped_due_to_load"),z("image_rewrites_dropped_mime_type_unknown"),z("image_rewrites_dropped_server_write_fail")]);D(a,"Image rewrite failures","image-error",C(c,b));b=new Date;F(a,new Date(b-864E5),b);return a});})();
