(function(){var g=Object,aa=Function,h=document,k=Array,m=Error,ba=parseInt,n=String,ca="shift",da="exec",q="replace",ea="keyCode",fa="forEach",ga="handleEvent",ha="bind",ia="substr",r="toString",ja="propertyIsEnumerable",s="split",ka="stack",t="message",u="hasOwnProperty",la="console",v="apply",ma="fileName",w="push",x="slice",y="getElementById",na="removed",z="indexOf",A="type",B="length",C="prototype",D="call",oa="splice",pa="join",E="toLowerCase",qa=qa||{},F=this,ra=function(a){a=a[s](".");for(var b=F,c;c=
a[ca]();)if(null!=b[c])b=b[c];else return null;return b},sa=function(){},ta=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof k)return"array";if(a instanceof g)return b;var c=g[C][r][D](a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a[B]&&"undefined"!=typeof a[oa]&&"undefined"!=typeof a[ja]&&!a[ja]("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a[D]&&"undefined"!=typeof a[ja]&&!a[ja]("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a[D])return"object";return b},ua=function(a){var b=ta(a);return"array"==b||"object"==b&&"number"==typeof a[B]},G=function(a){return"string"==typeof a},va=function(a){return"function"==ta(a)},wa=function(a,b,c){return a[D][v](a[ha],arguments)},xa=function(a,b,c){if(!a)throw m();if(2<arguments[B]){var d=k[C][x][D](arguments,2);return function(){var c=k[C][x][D](arguments);k[C].unshift[v](c,d);return a[v](b,c)}}return function(){return a[v](b,arguments)}},H=
function(a,b,c){H=aa[C][ha]&&-1!=aa[C][ha][r]()[z]("native code")?wa:xa;return H[v](null,arguments)},ya=Date.now||function(){return+new Date},I=function(a,b){function c(){}c.prototype=b[C];a.G=b[C];a.prototype=new c;a.J=function(a,c,f){return b[C][c][v](a,k[C][x][D](arguments,2))}};aa[C].bind=aa[C][ha]||function(a,b){if(1<arguments[B]){var c=k[C][x][D](arguments,1);c.unshift(this,a);return H[v](null,c)}return H(this,a)};var za=function(a){if(m.captureStackTrace)m.captureStackTrace(this,za);else{var b=m()[ka];b&&(this.stack=b)}a&&(this.message=n(a))};I(za,m);za[C].name="CustomError";var Aa=function(a,b){for(var c=a[s]("%s"),d="",e=k[C][x][D](arguments,1);e[B]&&1<c[B];)d+=c[ca]()+e[ca]();return d+c[pa]("%s")},Ia=function(a){if(!Ba.test(a))return a;-1!=a[z]("&")&&(a=a[q](Ca,"&amp;"));-1!=a[z]("<")&&(a=a[q](Da,"&lt;"));-1!=a[z](">")&&(a=a[q](Ea,"&gt;"));-1!=a[z]('"')&&(a=a[q](Fa,"&quot;"));-1!=a[z]("'")&&(a=a[q](Ga,"&#39;"));-1!=a[z]("\x00")&&(a=a[q](Ha,"&#0;"));return a},Ca=/&/g,Da=/</g,Ea=/>/g,Fa=/"/g,Ga=/'/g,Ha=/\x00/g,Ba=/[\x00&<>"']/,Ja=function(a,b){return a<b?-1:a>b?1:0};var Ka=function(a,b){b.unshift(a);za[D](this,Aa[v](null,b));b[ca]()};I(Ka,za);Ka[C].name="AssertionError";var J=function(a,b,c){if(!a){var d="Assertion failed";if(b)var d=d+(": "+b),e=k[C][x][D](arguments,2);throw new Ka(""+d,e||[]);}},La=function(a,b){throw new Ka("Failure"+(a?": "+a:""),k[C][x][D](arguments,1));};var K=k[C],Ma=K[z]?function(a,b,c){J(null!=a[B]);return K[z][D](a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a[B]+c):c;if(G(a))return G(b)&&1==b[B]?a[z](b,c):-1;for(;c<a[B];c++)if(c in a&&a[c]===b)return c;return-1},Na=K[fa]?function(a,b,c){J(null!=a[B]);K[fa][D](a,b,c)}:function(a,b,c){for(var d=a[B],e=G(a)?a[s](""):a,f=0;f<d;f++)f in e&&b[D](c,e[f],f,a)},Pa=function(a){var b;t:{b=Oa;for(var c=a[B],d=G(a)?a[s](""):a,e=0;e<c;e++)if(e in d&&b[D](void 0,d[e],e,a)){b=e;break t}b=-1}return 0>b?
null:G(a)?a.charAt(b):a[b]};var Qa=function(a){Qa[" "](a);return a};Qa[" "]=sa;var L;t:{var Ra=F.navigator;if(Ra){var Sa=Ra.userAgent;if(Sa){L=Sa;break t}}L=""}var M=function(a){return-1!=L[z](a)};var Ta=M("Opera")||M("OPR"),P=M("Trident")||M("MSIE"),Ua=M("Gecko")&&-1==L[E]()[z]("webkit")&&!(M("Trident")||M("MSIE")),Va=-1!=L[E]()[z]("webkit"),Wa=function(){var a=F.document;return a?a.documentMode:void 0},Xa=function(){var a="",b;if(Ta&&F.opera)return a=F.opera.version,va(a)?a():a;Ua?b=/rv\:([^\);]+)(\)|;)/:P?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Va&&(b=/WebKit\/(\S+)/);b&&(a=(a=b[da](L))?a[1]:"");return P&&(b=Wa(),b>parseFloat(a))?n(b):a}(),Ya={},Q=function(a){var b;if(!(b=Ya[a])){b=0;for(var c=
n(Xa)[q](/^[\s\xa0]+|[\s\xa0]+$/g,"")[s]("."),d=n(a)[q](/^[\s\xa0]+|[\s\xa0]+$/g,"")[s]("."),e=Math.max(c[B],d[B]),f=0;0==b&&f<e;f++){var l=c[f]||"",p=d[f]||"",N=RegExp("(\\d*)(\\D*)","g"),kb=RegExp("(\\d*)(\\D*)","g");do{var Y=N[da](l)||["","",""],O=kb[da](p)||["","",""];if(0==Y[0][B]&&0==O[0][B])break;b=Ja(0==Y[1][B]?0:ba(Y[1],10),0==O[1][B]?0:ba(O[1],10))||Ja(0==Y[2][B],0==O[2][B])||Ja(Y[2],O[2])}while(0==b)}b=Ya[a]=0<=b}return b},Za=F.document,$a=Za&&P?Wa()||("CSS1Compat"==Za.compatMode?ba(Xa,
10):5):void 0;var ab;(ab=!P)||(ab=P&&9<=$a);var bb=ab,cb=P&&!Q("9");!Va||Q("528");Ua&&Q("1.9b")||P&&Q("8")||Ta&&Q("9.5")||Va&&Q("528");Ua&&!Q("8")||P&&Q("9");var db=function(){};var R=function(a,b){this.type=a;this.a=this.b=b};R[C].d=function(){};var eb=function(a,b){R[D](this,a?a[A]:"");this.e=this.a=this.b=null;if(a){this.type=a[A];this.b=a.target||a.srcElement;this.a=b;var c=a.relatedTarget;if(c&&Ua)try{Qa(c.nodeName)}catch(d){}this.e=a;a.defaultPrevented&&this.d()}};I(eb,R);eb[C].d=function(){eb.G.d[D](this);var a=this.e;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,cb)try{if(a.ctrlKey||112<=a[ea]&&123>=a[ea])a.keyCode=-1}catch(b){}};var fb="closure_listenable_"+(1E6*Math.random()|0),gb=0;var hb=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},ib=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},jb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),lb=function(a,b){for(var c,d,e=1;e<arguments[B];e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<jb[B];f++)c=jb[f],g[C][u][D](d,c)&&(a[c]=d[c])}};var mb=function(a,b,c,d,e){this.h=a;this.proxy=null;this.src=b;this.type=c;this.q=!!d;this.s=e;++gb;this.removed=this.r=!1},nb=function(a){a.removed=!0;a.h=null;a.proxy=null;a.src=null;a.s=null};var ob=function(a){this.src=a;this.a={};this.b=0},qb=function(a,b,c,d,e){var f=b[r]();b=a.a[f];b||(b=a.a[f]=[],a.b++);var l=pb(b,c,d,e);-1<l?(a=b[l],a.r=!1):(a=new mb(c,a.src,f,!!d,e),a.r=!1,b[w](a));return a};ob[C].remove=function(a,b,c,d){a=a[r]();if(!(a in this.a))return!1;var e=this.a[a];b=pb(e,b,c,d);return-1<b?(nb(e[b]),J(null!=e[B]),K[oa][D](e,b,1),0==e[B]&&(delete this.a[a],this.b--),!0):!1};
var rb=function(a,b){var c=b[A];if(c in a.a){var d=a.a[c],e=Ma(d,b),f;if(f=0<=e)J(null!=d[B]),K[oa][D](d,e,1);f&&(nb(b),0==a.a[c][B]&&(delete a.a[c],a.b--))}},pb=function(a,b,c,d){for(var e=0;e<a[B];++e){var f=a[e];if(!f[na]&&f.h==b&&f.q==!!c&&f.s==d)return e}return-1};var sb="closure_lm_"+(1E6*Math.random()|0),tb={},ub=0,vb=function(a,b,c,d,e){if("array"==ta(b))for(var f=0;f<b[B];f++)vb(a,b[f],c,d,e);else if(c=wb(c),a&&a[fb])a.listen(b,c,d,e);else{if(!b)throw m("Invalid event type");var f=!!d,l=xb(a);l||(a[sb]=l=new ob(a));c=qb(l,b,c,d,e);c.proxy||(d=yb(),c.proxy=d,d.src=a,d.h=c,a.addEventListener?a.addEventListener(b[r](),d,f):a.attachEvent(zb(b[r]()),d),ub++)}},yb=function(){var a=Ab,b=bb?function(c){return a[D](b.src,b.h,c)}:function(c){c=a[D](b.src,b.h,c);
if(!c)return c};return b},Bb=function(a,b,c,d,e){if("array"==ta(b))for(var f=0;f<b[B];f++)Bb(a,b[f],c,d,e);else(c=wb(c),a&&a[fb])?a.l.remove(n(b),c,d,e):a&&(a=xb(a))&&(b=a.a[b[r]()],a=-1,b&&(a=pb(b,c,!!d,e)),(c=-1<a?b[a]:null)&&Cb(c))},Cb=function(a){if("number"!=typeof a&&a&&!a[na]){var b=a.src;if(b&&b[fb])rb(b.l,a);else{var c=a[A],d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.q):b.detachEvent&&b.detachEvent(zb(c),d);ub--;(c=xb(b))?(rb(c,a),0==c.b&&(c.src=null,b[sb]=null)):nb(a)}}},
zb=function(a){return a in tb?tb[a]:tb[a]="on"+a},Eb=function(a,b,c,d){var e=1;if(a=xb(a))if(b=a.a[b[r]()])for(b=b.concat(),a=0;a<b[B];a++){var f=b[a];f&&f.q==c&&!f[na]&&(e&=!1!==Db(f,d))}return Boolean(e)},Db=function(a,b){var c=a.h,d=a.s||a.src;a.r&&Cb(a);return c[D](d,b)},Ab=function(a,b){if(a[na])return!0;if(!bb){var c=b||ra("window.event"),d=new eb(c,this),e=!0;if(!(0>c[ea]||void 0!=c.returnValue)){t:{var f=!1;if(0==c[ea])try{c.keyCode=-1;break t}catch(l){f=!0}if(f||void 0==c.returnValue)c.returnValue=
!0}c=[];for(f=d.a;f;f=f.parentNode)c[w](f);for(var f=a[A],p=c[B]-1;0<=p;p--)d.a=c[p],e&=Eb(c[p],f,!0,d);for(p=0;p<c[B];p++)d.a=c[p],e&=Eb(c[p],f,!1,d)}return e}return Db(a,new eb(b,this))},xb=function(a){a=a[sb];return a instanceof ob?a:null},Fb="__closure_events_fn_"+(1E9*Math.random()>>>0),wb=function(a){J(a,"Listener can not be null.");if(va(a))return a;J(a[ga],"An object listener must have handleEvent method.");a[Fb]||(a[Fb]=function(b){return a[ga](b)});return a[Fb]};var S=function(){this.l=new ob(this);this.F=this};I(S,db);S[C][fb]=!0;S[C].removeEventListener=function(a,b,c,d){Bb(this,a,b,c,d)};var T=function(a,b){Gb(a);var c=a.F,d=b,e=d[A]||d;if(G(d))d=new R(d,c);else if(d instanceof R)d.b=d.b||c;else{var f=d,d=new R(e,c);lb(d,f)}c=d.a=c;Hb(c,e,!0,d);Hb(c,e,!1,d)};S[C].listen=function(a,b,c,d){Gb(this);return qb(this.l,n(a),b,c,d)};
var Hb=function(a,b,c,d){if(b=a.l.a[n(b)]){b=b.concat();for(var e=!0,f=0;f<b[B];++f){var l=b[f];if(l&&!l[na]&&l.q==c){var p=l.h,N=l.s||l.src;l.r&&rb(a.l,l);e=!1!==p[D](N,d)&&e}}}},Gb=function(a){J(a.l,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var Ib="StopIteration"in F?F.StopIteration:m("StopIteration"),Jb=function(){};Jb[C].a=function(){throw Ib;};Jb[C].g=function(){return this};var U=function(a,b){this.b={};this.a=[];this.e=this.d=0;var c=arguments[B];if(1<c){if(c%2)throw m("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof U?(c=a.m(),d=a.p()):(c=ib(a),d=hb(a));for(var e=0;e<c[B];e++)this.set(c[e],d[e])}};U[C].p=function(){Kb(this);for(var a=[],b=0;b<this.a[B];b++)a[w](this.b[this.a[b]]);return a};U[C].m=function(){Kb(this);return this.a.concat()};
U[C].remove=function(a){return g[C][u][D](this.b,a)?(delete this.b[a],this.d--,this.e++,this.a[B]>2*this.d&&Kb(this),!0):!1};var Kb=function(a){if(a.d!=a.a[B]){for(var b=0,c=0;b<a.a[B];){var d=a.a[b];g[C][u][D](a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.d!=a.a[B]){for(var e={},c=b=0;b<a.a[B];)d=a.a[b],g[C][u][D](e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}};U[C].get=function(a,b){return g[C][u][D](this.b,a)?this.b[a]:b};
U[C].set=function(a,b){g[C][u][D](this.b,a)||(this.d++,this.a[w](a),this.e++);this.b[a]=b};U[C].forEach=function(a,b){for(var c=this.m(),d=0;d<c[B];d++){var e=c[d],f=this.get(e);a[D](b,f,e,this)}};U[C].clone=function(){return new U(this)};U[C].g=function(a){Kb(this);var b=0,c=this.a,d=this.b,e=this.e,f=this,l=new Jb;l.a=function(){for(;;){if(e!=f.e)throw m("The map has changed since the iterator was created");if(b>=c[B])throw Ib;var l=c[b++];return a?l:d[l]}};return l};var Lb=function(a){if("function"==typeof a.p)return a.p();if(G(a))return a[s]("");if(ua(a)){for(var b=[],c=a[B],d=0;d<c;d++)b[w](a[d]);return b}return hb(a)},Mb=function(a,b){if("function"==typeof a[fa])a[fa](b,void 0);else if(ua(a)||G(a))Na(a,b,void 0);else{var c;if("function"==typeof a.m)c=a.m();else if("function"!=typeof a.p)if(ua(a)||G(a)){c=[];for(var d=a[B],e=0;e<d;e++)c[w](e)}else c=ib(a);else c=void 0;for(var d=Lb(a),e=d[B],f=0;f<e;f++)b[D](void 0,d[f],c&&c[f],a)}};var Ob=function(a){var b;b||(b=Nb(a||arguments.callee.caller,[]));return b},Nb=function(a,b){var c=[];if(0<=Ma(b,a))c[w]("[...circular reference...]");else if(a&&50>b[B]){c[w](Pb(a)+"(");for(var d=a.arguments,e=0;d&&e<d[B];e++){0<e&&c[w](", ");var f;f=d[e];switch(typeof f){case "object":f=f?"object":"null";break;case "string":break;case "number":f=n(f);break;case "boolean":f=f?"true":"false";break;case "function":f=(f=Pb(f))?f:"[fn]";break;default:f=typeof f}40<f[B]&&(f=f[ia](0,40)+"...");c[w](f)}b[w](a);
c[w](")\n");try{c[w](Nb(a.caller,b))}catch(l){c[w]("[exception trying to get caller]\n")}}else a?c[w]("[...long stack...]"):c[w]("[end]");return c[pa]("")},Pb=function(a){if(Qb[a])return Qb[a];a=n(a);if(!Qb[a]){var b=/function ([^\(]+)/[da](a);Qb[a]=b?b[1]:"[Anonymous]"}return Qb[a]},Qb={};var Sb=function(a,b,c,d,e){"number"==typeof e||Rb++;d||ya();this.d=b;delete this.b;delete this.a};Sb[C].b=null;Sb[C].a=null;var Rb=0;Sb[C].getMessage=function(){return this.d};var V=function(){this.b=this.d=this.a=null},Tb=function(a,b){this.name=a;this.value=b};Tb[C].toString=function(){return this.name};var Ub=new Tb("SEVERE",1E3),Vb=new Tb("CONFIG",700),Wb=new Tb("FINE",500);V[C].getChildren=function(){this.b||(this.b={});return this.b};var Xb=function(a){if(a.d)return a.d;if(a.a)return Xb(a.a);La("Root logger has no level set.");return null};
V[C].log=function(a,b,c){if(a.value>=Xb(this).value)for(va(b)&&(b=b()),a="log:"+this.e(0,b,c,V[C].log).getMessage(),F[la]&&(F[la].timeStamp?F[la].timeStamp(a):F[la].markTimeline&&F[la].markTimeline(a)),F.msWriteProfilerMark&&F.msWriteProfilerMark(a),a=this;a;)a=a.a};
V[C].e=function(a,b,c,d){a=new Sb(0,n(b));if(c){a.b=c;var e;d=d||V[C].e;try{var f;var l=ra("window.location.href");if(G(c))f={message:c,name:"Unknown error",lineNumber:"Not available",fileName:l,stack:"Not available"};else{var p,N;b=!1;try{p=c.lineNumber||c.I||"Not available"}catch(kb){p="Not available",b=!0}try{N=c[ma]||c.filename||c.sourceURL||F.$googDebugFname||l}catch(Y){N="Not available",b=!0}f=!b&&c.lineNumber&&c[ma]&&c[ka]&&c[t]&&c.name?c:{message:c[t]||"Not available",name:c.name||"UnknownError",
lineNumber:p,fileName:N,stack:c[ka]||"Not available"}}e="Message: "+Ia(f[t])+'\nUrl: <a href="view-source:'+f[ma]+'" target="_new">'+f[ma]+"</a>\nLine: "+f.lineNumber+"\n\nBrowser stack:\n"+Ia(f[ka]+"-> ")+"[end]\n\nJS stack traversal:\n"+Ia(Ob(d)+"-> ")}catch(O){e="Exception trying to expose exception! You win, we lose. "+O}a.a=e}return a};
var Yb={},Zb=null,$b=function(a){Zb||(Zb=new V,Yb[""]=Zb,Zb.d=Vb);var b;if(!(b=Yb[a])){b=new V;var c=a.lastIndexOf("."),d=a[ia](c+1),c=$b(a[ia](0,c));c.getChildren()[d]=b;b.a=c;Yb[a]=b}return b};var W=function(a,b){a&&a.log(Wb,b,void 0)};var ac=function(a,b,c){if(va(a))c&&(a=H(a,c));else if(a&&"function"==typeof a[ga])a=H(a[ga],a);else throw m("Invalid listener argument");return 2147483647<b?-1:F.setTimeout(a,b||0)};var bc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,cc=Va,dc=function(a,b){if(cc){cc=!1;var c=F.location;if(c){var d=c.href;if(d&&(d=(d=dc(3,d))&&decodeURIComponent(d))&&d!=c.hostname)throw cc=!0,m();}}return b.match(bc)[a]||null};var ec=function(){};ec[C].a=null;var gc=function(a){var b;(b=a.a)||(b={},fc(a)&&(b[0]=!0,b[1]=!0),b=a.a=b);return b};var hc,ic=function(){};I(ic,ec);var jc=function(a){return(a=fc(a))?new ActiveXObject(a):new XMLHttpRequest},fc=function(a){if(!a.b&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b[B];c++){var d=b[c];try{return new ActiveXObject(d),a.b=d}catch(e){}}throw m("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.b};hc=new ic;var X=function(a){S[D](this);this.C=new U;this.o=a||null;this.b=!1;this.n=this.c=null;this.a=this.v=this.k="";this.d=this.t=this.g=this.u=!1;this.e=0;this.i=null;this.w="";this.j=this.D=!1};I(X,S);var kc=X[C],lc=$b("goog.net.XhrIo");kc.f=lc;var mc=/^https?$/i,nc=["POST","PUT"];
X[C].send=function(a,b,c,d){if(this.c)throw m("[goog.net.XhrIo] Object is active with another request="+this.k+"; newUri="+a);b=b?b.toUpperCase():"GET";this.k=a;this.a="";this.v=b;this.u=!1;this.b=!0;this.c=this.o?jc(this.o):jc(hc);this.n=this.o?gc(this.o):gc(hc);this.c.onreadystatechange=H(this.A,this);try{W(this.f,Z(this,"Opening Xhr")),this.t=!0,this.c.open(b,n(a),!0),this.t=!1}catch(e){W(this.f,Z(this,"Error opening Xhr: "+e[t]));oc(this,e);return}a=c||"";var f=this.C.clone();d&&Mb(d,function(a,
b){f.set(b,a)});d=Pa(f.m());c=F.FormData&&a instanceof F.FormData;!(0<=Ma(nc,b))||d||c||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");f[fa](function(a,b){this.c.setRequestHeader(b,a)},this);this.w&&(this.c.responseType=this.w);"withCredentials"in this.c&&(this.c.withCredentials=this.D);try{pc(this),0<this.e&&(this.j=qc(this.c),W(this.f,Z(this,"Will abort after "+this.e+"ms if incomplete, xhr2 "+this.j)),this.j?(this.c.timeout=this.e,this.c.ontimeout=H(this.B,this)):this.i=
ac(this.B,this.e,this)),W(this.f,Z(this,"Sending request")),this.g=!0,this.c.send(a),this.g=!1}catch(l){W(this.f,Z(this,"Send error: "+l[t])),oc(this,l)}};var qc=function(a){return P&&Q(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout},Oa=function(a){return"content-type"==a[E]()};
X[C].B=function(){"undefined"!=typeof qa&&this.c&&(this.a="Timed out after "+this.e+"ms, aborting",W(this.f,Z(this,this.a)),T(this,"timeout"),this.c&&this.b&&(W(this.f,Z(this,"Aborting")),this.b=!1,this.d=!0,this.c.abort(),this.d=!1,T(this,"complete"),T(this,"abort"),rc(this)))};var oc=function(a,b){a.b=!1;a.c&&(a.d=!0,a.c.abort(),a.d=!1);a.a=b;sc(a);rc(a)},sc=function(a){a.u||(a.u=!0,T(a,"complete"),T(a,"error"))};X[C].A=function(){this.t||this.g||this.d?tc(this):this.H()};X[C].H=function(){tc(this)};
var tc=function(a){if(a.b&&"undefined"!=typeof qa)if(a.n[1]&&4==uc(a)&&2==vc(a))W(a.f,Z(a,"Local request error detected and ignored"));else if(a.g&&4==uc(a))ac(a.A,0,a);else if(T(a,"readystatechange"),4==uc(a)){W(a.f,Z(a,"Request complete"));a.b=!1;try{if(wc(a))T(a,"complete"),T(a,"success");else{var b;try{b=2<uc(a)?a.c.statusText:""}catch(c){W(a.f,"Can not get status: "+c[t]),b=""}a.a=b+" ["+vc(a)+"]";sc(a)}}finally{rc(a)}}},rc=function(a){if(a.c){pc(a);var b=a.c,c=a.n[0]?sa:null;a.c=null;a.n=null;
T(a,"ready");try{b.onreadystatechange=c}catch(d){(a=a.f)&&a.log(Ub,"Problem encountered resetting onreadystatechange: "+d[t],void 0)}}},pc=function(a){a.c&&a.j&&(a.c.ontimeout=null);"number"==typeof a.i&&(F.clearTimeout(a.i),a.i=null)},wc=function(a){var b=vc(a),c;t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break t;default:c=!1}if(!c){if(b=0===b)a=dc(1,n(a.k)),!a&&self.location&&(a=self.location.protocol,a=a[ia](0,a[B]-1)),b=!mc.test(a?a[E]():"");c=b}return c},
uc=function(a){return a.c?a.c.readyState:0},vc=function(a){try{return 2<uc(a)?a.c.status:-1}catch(b){return-1}},Z=function(a,b){return b+" ["+a.v+" "+a.k+" "+vc(a)+"]"};var xc=function(a){this.a=a||new X;this.g=h[y]("stat").innerText[s]("\n");this.d="";this.b=!1;a=h.createElement("div");a.id="uiDiv";a.innerHTML='<table id="uiTable" border=1 style="border-collapse: collapse;border-color:silver;"><tr valign="center"><td>Auto refresh (every 5 seconds): <input type="checkbox" id="autoRefresh" '+(this.b?"checked":"")+'></td><td>&nbsp;&nbsp;&nbsp;&nbsp;Filter: <input id="txtFilter" type="text" size="70"></td></tr></table>';h.body.insertBefore(a,h[y]("stat"))};
xc[C].j=function(){this.b=!this.b};xc[C].i=function(a){this.d=a.value;this.update()};xc[C].update=function(){var a;a=this.g;var b=a[B];if(0<b){for(var c=k(b),d=0;d<b;d++)c[d]=a[d];a=c}else a=[];if(this.d)for(b=a[B]-1;0<=b;--b)a[b]&&-1!=a[b][E]()[z](this.d[E]())||a[oa](b,1);h[y]("stat").innerText=a[pa]("\n")};xc[C].e=function(){if(!this.a.c&&this.b){var a=location.pathname,b=a.lastIndexOf("/");b==a[B]-1&&(b=a.substring(0,b).lastIndexOf("/"));this.a.send(0<b?a.substring(0,b)+"/stats_json":"/stats_json")}};
xc[C].k=function(){if(wc(this.a)){var a;var b=this.a;try{a=b.c?b.c.responseText:""}catch(c){W(b.f,"Can not get responseText: "+c[t]),a=""}b=JSON.parse(a);a=b.variables;var b=b.maxlength,d=[],e;for(e in a)d[w](e+":"+k(b-e[B]-a[e][r]()[B]+2)[pa](" ")+a[e][r]());this.g=d;this.update()}else e=this.a,console.log(G(e.a)?e.a:n(e.a)),h[y]("stat").innerText="Sorry, failed to update the statistics. Please wait and try again later."};
var yc=function(){vb(window,"load",function(){var a=new xc,b=h[y]("txtFilter");vb(b,"keyup",H(a.i,a,b));vb(h[y]("autoRefresh"),"change",H(a.j,a));setInterval(a.e[ha](a),5E3);vb(a.a,"complete",H(a.k,a));a.e()})},zc=["pagespeed","Statistics","Start"],$=F;zc[0]in $||!$.execScript||$.execScript("var "+zc[0]);for(var Ac;zc[B]&&(Ac=zc[ca]());)zc[B]||void 0===yc?$[Ac]?$=$[Ac]:$=$[Ac]={}:$[Ac]=yc;})();
