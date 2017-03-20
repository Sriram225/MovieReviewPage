/*
 Quantcast measurement tag
 Copyright (c) 2008-2017, Quantcast Corp.
*/
window.__qc=function(d){if(d.__qc)return d.__qc;var w=d.document,B=d.navigator,S="4dcfa7079941 127fdf7967f31 588ab9292a3f 32f92b0727e5 22f9aa38dfd3 a4abfe8f3e04 18b66bc1325c 958e70ea2f28 bdbf0cb4bbb 65118a0d557 40a1d9db1864 18ae3d985046 3b26460f55d".split(" "),ia=!1,T=0,U=[],Da=[],V=[],x=[],D={},J=0,E=[],y=null,W={},p={},ja=null,r,X=[].slice,ka,Y,K,k,z,Z,L,la,ma,na,F,aa,M,N,oa,G,pa,qa,ra,sa,t,ta,A,O,ua,ba,va,wa,ca,v,xa,da,ya,P,za,Aa,Q,Ba,ea,fa,Ca,ga,C,H,I,R,ha,u=function(a){try{return{init:N,hash:M,
rules:za,hasRules:Q,defaults:Ca,__qc:function(){return!0}}[a].apply(null,X.call(arguments,1))}catch(b){return!1}};u.evts=0;u.v=2;u.SD=S;u.qpixelsent=[];P=function(a){var b=a?a.length||0:0,c;for(c=0;c<b;c++)if(!a[c])return!1;return!0};fa=function(a){(a=a||d._qacct)&&(ca(x,a)||x.push(a))};ca=function(a,b){var c=a.length,e;for(e=0;e<c;e++)if(a[e]===b)return!0;return!1};da=function(a){return{}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()};ya=function(a){var b,c;b=da(a);if("array"===b)return a.slice(0);
if("object"===b){b={};for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}return"string"===b?""+a:a};Q=function(a){return ca(V,a)};Ca=function(a,b){var c;a&&((c=W[a])&&(b=R(b,c)),b.qacct&&delete b.qacct,W[a]=b)};ga=function(a){var b,c;if(k(a))for(b in a)if("string"==typeof a[b]){b=a.event||"load";c=a.media||"webpage";"rule"!==b&&"load"!==b||"webpage"!==c&&"ad"!==c?t(a):(c=a.qacct||d._qacct,a.qacct=c,b=(b=p[c])?R(b,a):a,p[c]=b);fa(a.qacct);break}else"object"==typeof a[b]&&null!=a[b]&&ga(a[b])};R=
function(a,b){var c={};c.qacct=a.qacct||b.qacct;c.event="load"===a.event||"load"===b.event?"load":a.event&&b.event?a.event||b.event:null;c.media=null;c.media="webpage"===a.media||"webpage"===b.media?"webpage":"ad"===a.media||"ad"===b.media?"ad":a.media||b.media;ba(c,a,b);ba(c,b,a);c.event||delete c.event;c.media||delete c.media;return c};ba=function(a,b,c){var e,d,g,q,n,l;for(e in b)b.hasOwnProperty(e)&&!a.hasOwnProperty(e)&&(d=b[e],g=c[e],q="",n=!!d&&"string"==typeof d,l=!!g&&"string"==typeof g,
n&&(q=d),n&&l&&(q+=","),l&&(q+=g),a[e]=q)};C=function(){var a=[],b,c;if(!(0<J)){xa();for(b in p)p.hasOwnProperty(b)&&p[b]&&(c=p[b],a.push(c),delete p[b]);1==a.length&&t(a[0]);1<a.length&&t(a)}};H=function(a){var b=[],c,e;for(c=0;c<a.length;c++)e=a[c],Q(e)||b.push(e);if(0===b.length)C();else for(c=0;c<b.length;c++)e=b[c],V.push(e),va(e)};wa=function(){for(var a;E[0]&&("loaded"==E[0].readyState||"complete"==E[0].readyState);)a=E.shift(),a.onreadystatechange=null,y.parentNode.insertBefore(a,y),I()};
va=function(a){var b,c;b=("https:"===w.location.protocol?"https://":"http://")+"rules.quantcount.com/rules-"+a+".js";y=y||w.scripts[0];J++;c=w.createElement("script");"async"in c?(c.src=b,c.async=!1,c.onload=function(){D[a]=0;I()},c.onerror=function(){D[a]=1;I()},y.parentNode.insertBefore(c,y)):c.readyState?(D[a]=2,E.push(c),c.onreadystatechange=wa,c.src=b):(D[a]=4,I())};I=function(){J-=0<J?1:0;C()};za=function(){var a=!0,b,c,e;if(arguments.length){e=function(b){a?ga(b):t(b,!0)};for(b=0;b<arguments.length;b++)c=
X.call(arguments[b],0),c.splice(1,0,e),Aa.apply(null,c);a=!1;ia&&C()}};Aa=function(a,b){var c=[],e=[],d=b||t,g,q,n,l,m;if((g=X.call(arguments,2))&&g.length){q=g[0]||P;n=g[1];l=g[2];g=l.length;for(m=0;m<g;m++)c.push(!1),e.push(null);c={p:a,f:c,r:q,c:l,a:n,v:e};Q(a)||V.push(a);Da.push(c);Ba(c,d)}};Ba=function(a,b){var c=a?a.c?a.c.length:0:0,e;for(e=0;e<c;e++)(function(c){var e,d;try{e=a.c[c][0],d=a.c[c].slice(1),d.splice(0,0,function(e){a.f[c]=!0;a.v[c]=e;ea(a,b)}),e.apply(null,d)}catch(n){a.f[c]=!0,
a.v[c]=!1,ea(a,b)}})(e)};ea=function(a,b){var c=a.a,e=a.v,d=a.r||P,g,k,n,l,m,f;(g=P(a.f))&&(g=g&&d(e));if(g)for(e=0;e<c.length;e++)try{k=c[e][0];n=1<c[e].length?c[e].slice(1):[];n=n.concat(a.v);l=k.apply(null,n);m={qacct:a.p,event:"rule"};for(f in l)l.hasOwnProperty(f)&&"qacct"!==f&&(m[f]=l[f]);b(m)}catch(Ea){}};ka=function(){return Y(0)!==Y(6)?1:0};Y=function(a){a=new Date(2E3,a,1,0,0,0,0);var b=a.toGMTString(),b=new Date(b.substring(0,b.lastIndexOf(" ")-1));return a-b};K=function(a){return a.replace(/\./g,
"%2E").replace(/,/g,"%2C")};z="function"===typeof encodeURIComponent?encodeURIComponent:K;k=function(a){return"undefined"!=typeof a&&null!=a};Z=function(){return Math.round(2147483647*Math.random())};L=function(a){var b="",c=w.cookie,e;if(!c)return b;e=c.indexOf(a+"=");a=e+a.length+1;-1<e&&(b=c.indexOf(";",a),0>b&&(b=c.length),b=c.substring(a,b));return b};la=function(){var a="",b=F(),c,e,d;if(1===T)return";fpan=u;fpa=";c=M(b);for(e=0;e<S.length;e++)if(S[e]===c)return";fpan=u;fpa=";c=new Date;e=L("__qca");
if(0<e.length){try{d=+e.split("-")[2],338688E5<c-d&&(w.cookie=["__qca=",e,"; expires=",(new Date(d+338688E5)).toGMTString(),"; path=/; domain=",b].join(""))}catch(g){}a+=";fpan=0;fpa="+e}0===L("__qca").length&&(e="P0-"+Z()+"-"+c.getTime(),w.cookie=["__qca=",e,"; expires=",(new Date(c.getTime()+338688E5)).toGMTString(),"; path=/; domain=",b].join(""),e=L("__qca"),a=0<e.length?a+(";fpan=1;fpa="+e):a+";fpan=u;fpa=");return a};ma=function(a){w.cookie=a+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain="+
F()};F=function(){var a,b,c,d;a=w.domain;"www."===a.substring(0,4)&&(a=a.substring(4,a.length));b=a.split(".");d=b.length;if(3>d)return a;c=b[d-1];return 3>c.length?a:a=b[d-2]+"."+c};aa=function(a,b){var c;for(c=0;c<b.length;c++)a^=b.charCodeAt(c),a+=(a<<1)+(a<<4)+(a<<7)+(a<<8)+(a<<24);return a};M=function(a){var b;b=aa(2166136261,a);a=aa(3386659096,a);return Math.round(Math.abs(b*a)/65536).toString(16)};O=function(a,b,c){var e="",h,g=null,q="webpage",n="load",l={},m,f;h=b?b.qacct||d._qacct:d._qacct;
m=p[h];b?m&&(b=R(b,m)):b=m;h&&delete p[h];if(null!=b)for(f in b)l[f]=!0,b.hasOwnProperty(f)&&"string"===typeof f&&"string"===typeof b[f]&&("uid"===f||"uh"===f?(oa()||(g=M(b[f])),delete b[f]):"qacct"!==f&&(e+=";"+f+a+"="+z(b[f]),"media"===f&&(q=b[f]),"event"===f&&(n=b[f])));if("string"!==typeof h){if(!k(d._qacct)||0===d._qacct.length)return"";h=d._qacct}if(h&&(m=W[h]))for(f in m)"string"===typeof f&&m.hasOwnProperty(f)&&!l[f]&&(e+=";"+f+a+"="+z(m[f]),"media"===f&&(q=m[f]),"event"===f&&(n=m[f]));l=
D[h];k(l)||(l=3);e+=";rf"+a+"="+l;"string"===typeof g&&(b.uh=g,e+=";uh"+a+"="+z(g));if("webpage"===q&&"load"===n){for(b=0;b<u.qpixelsent.length;b++)if(u.qpixelsent[b]===h&&!c)return"";u.qpixelsent.push(h)}"ad"===q&&(T=1);return";a"+a+"="+h+e};ua=function(){var a=w.getElementsByTagName("meta"),b="",c,d,h,g;for(c=0;c<a.length;c++){h=a[c];if(1E3<=b.length)return b;k(h)&&k(h.attributes)&&k(h.attributes.property)&&k(h.attributes.property.value)&&k(h.content)&&(d=h.attributes.property.value,h=h.content,
3<d.length&&"og:"===d.substring(0,3)&&(0<b.length&&(b+=","),g=80<h.length?80:h.length,b+=K(d.substring(3,d.length))+"."+K(h.substring(0,g))))}return z(b)};na=function(a){return"object"===typeof a?["p","approved"===a.consent?"a":"d","asserted"===a.source?"e":"i"].join(""):""};oa=function(){var a=!1;k(d.external)&&(a=d.external,a="function"===typeof a.InPrivateFilteringEnabled&&!0===a.InPrivateFilteringEnabled());return a||"1"==B.doNotTrack||"yes"===B.doNotTrack||"1"==B.msDoNotTrack};t=function(a,b){var c=
"function"===typeof encodeURIComponent?"n":"s",e=Z(),h="",g="",q="",n="",l="",m="u",f="1",r=0,t=[],p,v,x,y;T=0;k(u.qpixelsent)||(u.qpixelsent=[]);if(k(a))for(p in a)if("string"==typeof a[p]){g=O("",a,b);break}else"object"==typeof a[p]&&null!=a[p]&&(++r,g+=O("."+r,a[p],b));else"string"===typeof _qacct&&(g=O("",null,b));0!==g.length&&(r=B.cookieEnabled?"1":"0","undefined"!=typeof B.javaEnabled&&(m=B.javaEnabled()?"1":"0"),k(d._qmeta)&&(q=";m="+z(d._qmeta),d._qmeta=null),self.screen&&(h=screen.width+
"x"+screen.height+"x"+screen.colorDepth),v=new Date,x=ka(),y=la(),d.location&&d.location.href&&(n=z(d.location.href)),w&&w.referrer&&(l=z(w.referrer)),d.self===d.top&&(f="0"),p=ua(),t.push("/pixel;r="+e+g+y+";ns="+f+";ce="+r),t.push(";je="+m+";sr="+h+";enc="+c+";dst="+x+";et="+v.getTime()+";tzo="+v.getTimezoneOffset()+q+";ref="+l+";url="+n+";ogl="+p),U.push(t),A())};ta=function(a){var b=new Image;a=[d.location.protocol,"//pixel.",pa(r)?"quantserve.com":"quantcount.com",a[0],";cm=",na(r),a[1]].join("");
b.alt="";b.src=a;b.onload=function(){b&&"number"==typeof b.width&&3===b.width&&ma("__qca")}};A=function(){if(r)for(;U.length;)ta(U.shift());else sa()};pa=function(a){return!0===a||1===a||1===a||k(a)&&"approved"===a.consent?!0:!1};sa=function(){if(!k(r)){if(d.top===d.self){if("object"===typeof PrivacyManagerAPI&&"function"===typeof PrivacyManagerAPI.callApi){qa("getConsent","advertising");return}}else if(d.postMessage&&"object"===typeof JSON){ra("getConsent","advertising");return}r=1}A()};qa=function(a,
b){r=PrivacyManagerAPI.callApi(a,"quantserve.com",F(),"truste.com",b);A()};ra=function(a,b){var c={PrivacyManagerAPI:{timestamp:(new Date).getTime(),action:a,self:"quantserve.com",domain:F(),authority:"truste.com",type:b}};if(d.addEventListener)d.addEventListener("message",G,!1);else if(d.attachEvent)d.attachEvent("onmessage",G);else{r=!0;A();return}try{d.top.postMessage(JSON.stringify(c),"*")}catch(e){}ja=setTimeout(function(){k(r)||(r=!0,A())},25)};G=function(a){var b=null;if(a.source===window.top){try{b=
"object"===typeof JSON&&JSON.parse(a.data)}catch(c){}b&&"object"===typeof b.PrivacyManagerAPI&&(clearTimeout(ja),d.removeEventListener?window.removeEventListener("message",G,!1):d.detachEvent&&window.detachEvent("onmessage",G),r=b.PrivacyManagerAPI,A())}};ha=function(){var a=arguments,b,c;v([].slice.call(a));for(c=0;c<a.length;c++)b=a[c],t(b);x.length?H(x.slice(0)):C()};v=function(a){var b=da(a);if("array"===b)for(b=0;b<a.length;b++)v(a[b]);else"object"===b&&fa(a.qacct||d._qacct)};xa=function(){var a;
d._qevents.length||d.ezt.length||"undefined"===typeof _qacct||t({qacct:d._qacct});if(!u.evts){for(a in d._qevents)d._qevents.hasOwnProperty(a)&&t(d._qevents[a]);for(a in d.ezt)d.ezt.hasOwnProperty(a)&&t(d.ezt[a]);d._qevents={push:ha};d.ezt.push=function(){var a=arguments,c;if(k(d.queueManager))for(c=0;c<a.length;c++)d.queueManager.push(a[c]);else ha.apply(this,arguments)};u.evts=1}};N=function(){var a;k(d._qevents)||(d._qevents=[]);k(d.ezt)||(d.ezt=[]);d._qoptions&&(a=ya(d._qoptions),v(d._qoptions),
d._qevents.push(a),d._qoptions=null);u.evts||(d._qevents.push=function(){v([].slice.call(arguments));H(x.slice(0));return[].push.apply(d._qevents,arguments)},d.ezt.push=function(){v([].slice.call(arguments));H(x.slice(0));return[].push.apply(d.ezt,arguments)});v(d.ezt);v(d._qevents);v({qacct:d._qacct});d._qoptions=null;x.length?H(x.slice(0)):C();ia=!0};d.quantserve=d.quantserve||N;u.quantserve=N;return u}(window);quantserve();

