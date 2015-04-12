window.Modernizr=function(e,t,n){function i(e){b.cssText=e}function r(e,t){return i(T.join(e+";")+(t||""))}function o(e,t){return typeof e===t}function s(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var i in e){var r=e[i];if(!s(r,"-")&&b[r]!==n)return"pfx"==t?r:!0}return!1}function l(e,t,i){for(var r in e){var s=t[e[r]];if(s!==n)return i===!1?e[r]:o(s,"function")?s.bind(i||t):s}return!1}function c(e,t,n){var i=e.charAt(0).toUpperCase()+e.slice(1),r=(e+" "+E.join(i+" ")+i).split(" ");return o(t,"string")||o(t,"undefined")?a(r,t):(r=(e+" "+$.join(i+" ")+i).split(" "),l(r,t,n))}function u(){h.input=function(n){for(var i=0,r=n.length;r>i;i++)N[n[i]]=n[i]in x;return N.list&&(N.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),N}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(e){for(var i,r,o,s=0,a=e.length;a>s;s++)x.setAttribute("type",r=e[s]),i="text"!==x.type,i&&(x.value=w,x.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&x.style.WebkitAppearance!==n?(g.appendChild(x),o=t.defaultView,i=o.getComputedStyle&&"textfield"!==o.getComputedStyle(x,null).WebkitAppearance&&0!==x.offsetHeight,g.removeChild(x)):/^(search|tel)$/.test(r)||(i=/^(url|email)$/.test(r)?x.checkValidity&&x.checkValidity()===!1:x.value!=w)),S[e[s]]=!!i;return S}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,p,f="2.8.3",h={},m=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,x=t.createElement("input"),w=":)",T=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),C="Webkit Moz O ms",E=C.split(" "),$=C.toLowerCase().split(" "),k={},S={},N={},A=[],j=A.slice,D=function(e,n,i,r){var o,s,a,l,c=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(i,10))for(;i--;)a=t.createElement("div"),a.id=r?r[i]:v+(i+1),c.appendChild(a);return o=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),c.id=v,(u?c:d).innerHTML+=o,d.appendChild(c),u||(d.style.background="",d.style.overflow="hidden",l=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),s=n(c,e),u?c.parentNode.removeChild(c):(d.parentNode.removeChild(d),g.style.overflow=l),!!s},L=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var i;return D("@media "+t+" { #"+v+" { position: absolute; } }",function(t){i="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),i},M=function(){function e(e,r){r=r||t.createElement(i[e]||"div"),e="on"+e;var s=e in r;return s||(r.setAttribute||(r=t.createElement("div")),r.setAttribute&&r.removeAttribute&&(r.setAttribute(e,""),s=o(r[e],"function"),o(r[e],"undefined")||(r[e]=n),r.removeAttribute(e))),r=null,s}var i={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),O={}.hasOwnProperty;p=o(O,"undefined")||o(O.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return O.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=j.call(arguments,1),i=function(){if(this instanceof i){var r=function(){};r.prototype=t.prototype;var o=new r,s=t.apply(o,n.concat(j.call(arguments)));return Object(s)===s?s:o}return t.apply(e,n.concat(j.call(arguments)))};return i}),k.flexbox=function(){return c("flexWrap")},k.flexboxlegacy=function(){return c("boxDirection")},k.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},k.canvastext=function(){return!!h.canvas&&!!o(t.createElement("canvas").getContext("2d").fillText,"function")},k.postmessage=function(){return!!e.postMessage},k.websqldatabase=function(){return!!e.openDatabase},k.indexedDB=function(){return!!c("indexedDB",e)},k.hashchange=function(){return M("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},k.history=function(){return!!e.history&&!!history.pushState},k.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},k.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},k.rgba=function(){return i("background-color:rgba(150,255,150,.5)"),s(b.backgroundColor,"rgba")},k.hsla=function(){return i("background-color:hsla(120,40%,100%,.5)"),s(b.backgroundColor,"rgba")||s(b.backgroundColor,"hsla")},k.multiplebgs=function(){return i("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},k.backgroundsize=function(){return c("backgroundSize")},k.borderimage=function(){return c("borderImage")},k.borderradius=function(){return c("borderRadius")},k.boxshadow=function(){return c("boxShadow")},k.textshadow=function(){return""===t.createElement("div").style.textShadow},k.opacity=function(){return r("opacity:.55"),/^0.55$/.test(b.opacity)},k.cssanimations=function(){return c("animationName")},k.csscolumns=function(){return c("columnCount")},k.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return i((e+"-webkit- ".split(" ").join(t+e)+T.join(n+e)).slice(0,-e.length)),s(b.backgroundImage,"gradient")},k.cssreflections=function(){return c("boxReflect")},k.csstransforms=function(){return!!c("transform")},k.csstransforms3d=function(){var e=!!c("perspective");return e&&"webkitPerspective"in g.style&&D("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},k.csstransitions=function(){return c("transition")},k.generatedcontent=function(){var e;return D(["#",v,"{font:0/0 a}#",v,':after{content:"',w,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},k.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(i){}return n},k.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(i){}return n},k.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},k.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},k.webworkers=function(){return!!e.Worker},k.applicationcache=function(){return!!e.applicationCache};for(var H in k)p(k,H)&&(d=H.toLowerCase(),h[d]=k[H](),A.push((h[d]?"":"no-")+d));return h.input||u(),h.addTest=function(e,t){if("object"==typeof e)for(var i in e)p(e,i)&&h.addTest(i,e[i]);else{if(e=e.toLowerCase(),h[e]!==n)return h;t="function"==typeof t?t():t,m!==void 0&&m&&(g.className+=" "+(t?"":"no-")+e),h[e]=t}return h},i(""),y=x=null,h._version=f,h._prefixes=T,h._domPrefixes=$,h._cssomPrefixes=E,h.mq=L,h.hasEvent=M,h.testProp=function(e){return a([e])},h.testAllProps=c,h.testStyles=D,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+A.join(" "):""),h}(this,this.document),function(e,t){function n(e,t){var n=e.createElement("p"),i=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=T[e[x]];return t||(t={},w++,e[x]=w,T[w]=t),t}function o(e,n,i){if(n||(n=t),m)return n.createElement(e);i||(i=r(n));var o;return o=i.cache[e]?i.cache[e].cloneNode():b.test(e)?(i.cache[e]=i.createElem(e)).cloneNode():i.createElem(e),!o.canHaveChildren||y.test(e)||o.tagUrn?o:i.frag.appendChild(o)}function s(e,n){if(e||(e=t),m)return e.createDocumentFragment();n=n||r(e);for(var o=n.frag.cloneNode(),s=0,a=i(),l=a.length;l>s;s++)o.createElement(a[s]);return o}function a(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function l(e){e||(e=t);var i=r(e);return C.shivCSS&&!h&&!i.hasCSS&&(i.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),m||a(e,i),e}function c(e){for(var t,n=e.getElementsByTagName("*"),r=n.length,o=RegExp("^(?:"+i().join("|")+")$","i"),s=[];r--;)t=n[r],o.test(t.nodeName)&&s.push(t.applyElement(u(t)));return s}function u(e){for(var t,n=e.attributes,i=n.length,r=e.ownerDocument.createElement($+":"+e.nodeName);i--;)t=n[i],t.specified&&r.setAttribute(t.nodeName,t.nodeValue);return r.style.cssText=e.style.cssText,r}function d(e){for(var t,n=e.split("{"),r=n.length,o=RegExp("(^|[\\s,>+~])("+i().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),s="$1"+$+"\\:$2";r--;)t=n[r]=n[r].split("}"),t[t.length-1]=t[t.length-1].replace(o,s),n[r]=t.join("}");return n.join("{")}function p(e){for(var t=e.length;t--;)e[t].removeNode()}function f(e){function t(){clearTimeout(s._removeSheetTimer),i&&i.removeNode(!0),i=null}var i,o,s=r(e),a=e.namespaces,l=e.parentWindow;return!k||e.printShived?e:(a[$]===void 0&&a.add($),l.attachEvent("onbeforeprint",function(){t();for(var r,s,a,l=e.styleSheets,u=[],p=l.length,f=Array(p);p--;)f[p]=l[p];for(;a=f.pop();)if(!a.disabled&&E.test(a.media)){try{r=a.imports,s=r.length}catch(h){s=0}for(p=0;s>p;p++)f.push(r[p]);try{u.push(a.cssText)}catch(h){}}u=d(u.reverse().join("")),o=c(e),i=n(e,u)}),l.attachEvent("onafterprint",function(){p(o),clearTimeout(s._removeSheetTimer),s._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var h,m,g="3.7.0",v=e.html5||{},y=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,b=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,x="_html5shiv",w=0,T={};(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,m=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return e.cloneNode===void 0||e.createDocumentFragment===void 0||e.createElement===void 0}()}catch(n){h=!0,m=!0}})();var C={elements:v.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:g,shivCSS:v.shivCSS!==!1,supportsUnknownElements:m,shivMethods:v.shivMethods!==!1,type:"default",shivDocument:l,createElement:o,createDocumentFragment:s};e.html5=C,l(t);var E=/^$|\b(?:all|print)\b/,$="html5shiv",k=!m&&function(){var n=t.documentElement;return t.namespaces!==void 0&&t.parentWindow!==void 0&&n.applyElement!==void 0&&n.removeNode!==void 0&&e.attachEvent!==void 0}();C.type+=" print",C.shivPrint=f,f(t)}(this,document),function(e,t,n){function i(e){return"[object Function]"==g.call(e)}function r(e){return"string"==typeof e}function o(){}function s(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function a(){var e=v.shift();y=1,e?e.t?h(function(){("c"==e.t?p.injectCss:p.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),a()):y=0}function l(e,n,i,r,o,l,c){function u(t){if(!f&&s(d.readyState)&&(b.r=f=1,!y&&a(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&h(function(){w.removeChild(d)},50);for(var i in k[n])k[n].hasOwnProperty(i)&&k[n][i].onload()}}var c=c||p.errorTimeout,d=t.createElement(e),f=0,g=0,b={t:i,s:n,e:o,a:l,x:c};1===k[n]&&(g=1,k[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,g)},v.splice(r,0,b),"img"!=e&&(g||2===k[n]?(w.insertBefore(d,x?null:m),h(u,c)):k[n].push(d))}function c(e,t,n,i,o){return y=0,t=t||"j",r(e)?l("c"==t?C:T,e,t,this.i++,n,i,o):(v.splice(this.i++,0,e),1==v.length&&a()),this}function u(){var e=p;return e.loader={load:c,i:0},e}var d,p,f=t.documentElement,h=e.setTimeout,m=t.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,b="MozAppearance"in f.style,x=b&&!!t.createRange().compareNode,w=x?f:m.parentNode,f=e.opera&&"[object Opera]"==g.call(e.opera),f=!!t.attachEvent&&!f,T=b?"object":f?"script":"img",C=f?"script":T,E=Array.isArray||function(e){return"[object Array]"==g.call(e)},$=[],k={},S={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};p=function(e){function t(e){var t,n,i,e=e.split("!"),r=$.length,o=e.pop(),s=e.length,o={url:o,origUrl:o,prefixes:e};for(n=0;s>n;n++)i=e[n].split("="),(t=S[i.shift()])&&(o=t(o,i));for(n=0;r>n;n++)o=$[n](o);return o}function s(e,r,o,s,a){var l=t(e),c=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(r&&(r=i(r)?r:r[e]||r[s]||r[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,r,o,s,a):(k[l.url]?l.noexec=!0:k[l.url]=1,o.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(i(r)||i(c))&&o.load(function(){u(),r&&r(l.origUrl,a,s),c&&c(l.origUrl,a,s),k[l.url]=2})))}function a(e,t){function n(e,n){if(e){if(r(e))n||(d=function(){var e=[].slice.call(arguments);p.apply(this,e),f()}),s(e,d,t,0,c);else if(Object(e)===e)for(l in a=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(l)&&(!n&&!--a&&(i(d)?d=function(){var e=[].slice.call(arguments);p.apply(this,e),f()}:d[l]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),f()}}(p[l])),s(e[l],d,t,l,c))}else!n&&f()}var a,l,c=!!e.test,u=e.load||e.both,d=e.callback||o,p=d,f=e.complete||o;n(c?e.yep:e.nope,!!u),u&&n(u)}var l,c,d=this.yepnope.loader;if(r(e))s(e,0,d,0);else if(E(e))for(l=0;e.length>l;l++)c=e[l],r(c)?s(c,0,d,0):E(c)?p(c):Object(c)===c&&a(c,d);else Object(e)===e&&a(e,d)},p.addPrefix=function(e,t){S[e]=t},p.addFilter=function(e){$.push(e)},p.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=a,e.yepnope.injectJs=function(e,n,i,r,l,c){var u,d,f=t.createElement("script"),r=r||p.errorTimeout;f.src=e;for(d in i)f.setAttribute(d,i[d]);n=c?a:n||o,f.onreadystatechange=f.onload=function(){!u&&s(f.readyState)&&(u=1,n(),f.onload=f.onreadystatechange=null)},h(function(){u||(u=1,n(1))},r),l?f.onload():m.parentNode.insertBefore(f,m)},e.yepnope.injectCss=function(e,n,i,r,s,l){var c,r=t.createElement("link"),n=l?a:n||o;r.href=e,r.rel="stylesheet",r.type="text/css";for(c in i)r.setAttribute(c,i[c]);s||(m.parentNode.insertBefore(r,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("bgpositionxy",function(){return Modernizr.testStyles("#modernizr {background-position: 3px 5px;}",function(e){var t=window.getComputedStyle?getComputedStyle(e,null):e.currentStyle,n="3px"==t.backgroundPositionX||"3px"==t["background-position-x"],i="5px"==t.backgroundPositionY||"5px"==t["background-position-y"];return n&&i})}),function(){var e=document.createElement("a"),t=e.style,n="right 10px bottom 10px";Modernizr.addTest("bgpositionshorthand",function(){return t.cssText="background-position: "+n+";",t.backgroundPosition===n})}(),function(){function e(e){return window.getComputedStyle?getComputedStyle(e,null).getPropertyValue("background"):e.currentStyle.background}Modernizr.testStyles(" #modernizr { background-repeat: round; } ",function(t){Modernizr.addTest("bgrepeatround","round"==e(t))}),Modernizr.testStyles(" #modernizr { background-repeat: space; } ",function(t){Modernizr.addTest("bgrepeatspace","space"==e(t))})}(),Modernizr.testStyles("#modernizr{background-size:cover}",function(e){var t=window.getComputedStyle?window.getComputedStyle(e,null):e.currentStyle;Modernizr.addTest("bgsizecover","cover"==t.backgroundSize)}),Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=document.createElement("div");return n.style.cssText=e+Modernizr._prefixes.join(t+e),!!n.style.length}),Modernizr.addTest("mediaqueries",Modernizr.mq("only all")),Modernizr.addTest("lastchild",function(){return Modernizr.testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){return e.lastChild.offsetWidth>e.firstChild.offsetWidth},2)}),Modernizr.addTest("cssfilters",function(){var e=document.createElement("div");return e.style.cssText=Modernizr._prefixes.join("filter:blur(2px); "),!!e.style.length&&(void 0===document.documentMode||document.documentMode>9)}),Modernizr.addTest("overflowscrolling",function(){return Modernizr.testAllProps("overflowScrolling")}),Modernizr.addTest("placeholder",function(){return"placeholder"in(Modernizr.input||document.createElement("input"))&&"placeholder"in(Modernizr.textarea||document.createElement("textarea"))}),function(e,t){t.formvalidationapi=!1,t.formvalidationmessage=!1,t.addTest("formvalidation",function(){var n=e.createElement("form");if("checkValidity"in n&&"addEventListener"in n){if("reportValidity"in n)return!0;var i,r=!1;return t.formvalidationapi=!0,n.addEventListener("submit",function(e){window.opera||e.preventDefault(),e.stopPropagation()},!1),n.innerHTML='<input name="modTest" required><button></button>',t.testStyles("#modernizr form{position:absolute;top:-99999em}",function(e){e.appendChild(n),i=n.getElementsByTagName("input")[0],i.addEventListener("invalid",function(e){r=!0,e.preventDefault(),e.stopPropagation()},!1),t.formvalidationmessage=!!i.validationMessage,n.getElementsByTagName("button")[0].click()}),r}return!1})}(document,window.Modernizr),Modernizr.addTest("fileinput",function(){var e=document.createElement("input");return e.type="file",!e.disabled}),Modernizr.addTest("formattribute",function(){var e,t=document.createElement("form"),n=document.createElement("input"),i=document.createElement("div"),r="formtest"+(new Date).getTime(),o=!1;return t.id=r,document.createAttribute&&(e=document.createAttribute("form"),e.nodeValue=r,n.setAttributeNode(e),i.appendChild(t),i.appendChild(n),document.documentElement.appendChild(i),o=1===t.elements.length&&n.form==t,i.parentNode.removeChild(i)),o});