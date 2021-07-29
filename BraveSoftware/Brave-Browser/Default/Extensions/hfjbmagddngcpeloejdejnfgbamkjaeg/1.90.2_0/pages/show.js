__filename="pages/show.js",define(["./async_bg"],function(e){"use strict";function n(e){(e?addEventListener:removeEventListener)("wheel",t,{passive:false,capture:true})}function t(e){e.ctrlKey&&(e.preventDefault(),e.stopImmediatePropagation(),c(e))}function i(){var e=A.scrollWidth;U.style.height=A.scrollHeight+"px",U.style.width=e+"px",U.style.display=""}function r(e,n){var t,i;if(n.preventDefault(),VData.url){for(i in t=document.createElement("a"),Object.setPrototypeOf(e,null),e)t.setAttribute(i,e[i]);t.href=VData.url,o(t,n)}}function o(e,n){var t=document.createEvent("MouseEvents");return t.initMouseEvent("click",true,true,window,1,0,0,0,0,n.ctrlKey,n.altKey,n.shiftKey,n.metaKey,0,null),e.dispatchEvent(t)}function u(e,n){2===n||-2===n?e.rotate(45*n):e.zoom(n/10,true)}function a(e,n){try{e=(n||decodeURIComponent)(e)}catch(e){}return e}function l(n,t){var i=e.$("#bodyTemplate"),r=document.importNode(i.content.querySelector("#"+n),true);return t||document.body.insertBefore(r,i),r}function c(e){if(e.altKey)return e.stopImmediatePropagation(),r({download:VData.file||""},e);switch(VData.type){case"url":r({target:"_blank"},e);break;case"image":if(VData.error)return;var n=e.ctrlKey||e.metaKey;g().then(function(e){return w(e,n)}).catch(h)}}function f(e){e.preventDefault(),A.onclick&&A.onclick(e)}function s(n,t){n="number"==typeof n?["math","copy","search","ERROR","status","paste","url"][n]:n,e.$("#textTip").dataset.text=e.ls("t_"+n)||n,e.$(".colon").dataset.colon=e.ls("colon")+e.ls("NS");var r=e.$("#textBody");return t?(r.textContent="string"!=typeof t?t.join(" "):t,A.onclick=d):r.classList.add("null"),i()}function d(n){var t,i=getSelection(),r=""+i;if(!r||"image"===VData.type&&r.trim()===A.alt.trim()){if("image"===VData.type&&VData.url){if("Range"===i.type&&!VData.url.startsWith(location.protocol))return;if(n.preventDefault(),(t=navigator.clipboard)&&t.write)return void(null!=P?Promise.resolve(P):fetch(VData.url,{cache:"force-cache",referrer:"no-referrer"}).then(function(e){return e.blob()}).catch(function(){return m(VData.url),0}).then(function(e){return P=e})).then(function(n){var i,r,o;if(n)return i={"image/png":new Blob([n],{type:"image/png"}),"text/html":new Blob,"text/plain":new Blob([VData.url],{type:"text/plain"})},r=function(){return t.write([new ClipboardItem(i)])},e.f<86?r():((o=document.createElement("img")).src=VData.url,VData.file&&o.setAttribute("aria-title",o.alt=VData.file),i["text/html"]=new Blob([o.outerHTML],{type:"text/html"}),r().catch(function(){return delete i["text/html"],r()}))}).catch(function(e){console.log(e),m(VData.url)})}m("url"===VData.type?e.$("#textBody").textContent:VData.url,n)}}function m(e,n){e&&window.VApi&&(n&&n.preventDefault(),VApi.p({H:16,s:e}))}function h(e){e&&console.log("%o",e)}function g(){return k?Promise.resolve(k):((function(n){if(!e.$('link[href="'+n+'"]')){var t=document.createElement("link");t.rel="stylesheet",t.href=n,document.head.insertBefore(t,e.$('link[href$="show.css"]'))}})("../lib/viewer.min.css"),(t="../lib/viewer.min.js",i=t.slice(t.lastIndexOf("/")+1).replace(".js",""),__filename="__loader_"+i,define([t])).then(function(e){return e.setDefaults({navbar:false,shown:function(){U.style.display="none"},viewed:function(){E&&(n(false),E(true))},hide:function(){U.style.display="",n(true),E&&E(false)}}),k=e,e}));var t,i}function w(e,n){var t,i=scrollX||scrollY,r=getSelection();return"Range"===r.type&&r.collapseToStart(),(t=S=S||new e(A)).scrollbarWidth=0,t.hiding&&(t.isShown=false),t.isShown||t.show(),t.hiding=false,i&&scrollTo(0,0),t.viewed?(t.zoomTo(1),t):(Object.defineProperty(t,"initialImageData",{configurable:true,enumerable:true,get:function(){return z},set:function(e){var t,i,r,o;z=e,S&&!n&&(n=true,o=(r=1*(t=S.imageData).naturalHeight)-t.height,t.left-=((i=1*t.naturalWidth)-t.width)/2,t.top-=o/2,t.width=i,t.height=r,t.ratio=1)}}),new Promise(function(e,n){E=function(i){E=null,i?e(t):n("failed to view the image")}}))}function p(){B&&(URL.revokeObjectURL(B),B="")}function b(e){var n=e.split(":",1)[0];switch(n.toLowerCase()){case"thunder":case"flashget":case"qqdl":e=e.slice(n.length+3).split("&",1)[0];break;default:return""}try{e=atob(e)}catch(e){return""}return e.startsWith("AA")&&e.endsWith("ZZ")&&(e=e.slice(2,-2)),e.startsWith("[FLASHGET]")&&e.endsWith("[FLASHGET]")&&(e=e.slice(10,-10)),b(e)||e}function v(){console.log("Failed to visit the predicted URL, so go back to the original version."),y(),VData.auto=false,window.onhashchange()}function y(){var e=false;return"once"===VData.auto&&(VData.auto=false,e=true),e&&x(),e}function x(n){var t,i,r=VData.type;r&&(t="#!"+r+" "+(VData.incognito?"incognito=1&":"")+(VData.file?"download="+(function(n){return n.replace(e.f<64||false?/[\x00-`{-\u0390\u03ca-\u4dff\u9fa6-\uffff\s]+/g:new RegExp("[^\\p{L}\\p{N}]+","ug"),encodeURIComponent)})(VData.file)+"&":"")+(VData.auto?"auto="+("once"===VData.auto?"once":1)+"&":"")+(VData.pixel?"pixel=1&":"")+VData.original,VData.full=t,n||(i=_(t,C,true),history.replaceState(i,"","")))}function _(e,n,t){var i,r,o;if(-1===n)return e;if(i=[],t)e=encodeURIComponent(e);else try{e=atob(e)}catch(n){e=""}for(r of e)i.push(r.charCodeAt(0));for(o=0;o<i.length;o++)i[o]=255&(i[o]^n>>>8*(3&o));if(e=String.fromCharCode.apply(String,i),t)e=btoa(e);else try{e=decodeURIComponent(e)}catch(n){e=""}return e}function R(e){return VData.full?location.href.split("#",1)[0]+VData.full:e}var k,I,L,VData=null,T={},j=document.body,A=null,U=e.$("#bgLink"),E=null,S=null,z=null,C=+window.name||0,$=/\.(avif|bmp|gif|icon?|jpe?g|a?png|tiff?|webp)(?=[.\-_]|\b)/i,B="",P=null;chrome.i18n.getMessage("lang1")&&(document.title=e.ls("vDisplay")&&"Vimium C "+e.ls("vDisplay")||document.title),window.onhashchange=function(){var t,o,u,d,m,h,g,w,k,E,z,F;for(A&&((function(){if(p(),P=null,I&&(I(),I=null),"image"===VData.type){n(false);var e=document.body.classList;e.remove("pixel"),e.remove("filled"),A.removeAttribute("src"),A.onerror=A.onload=null,S&&(S.destroy(),S=null)}})(),U.style.display="none",A.remove(),A=null),(VData=window.VData=Object.create(null)).o=R,t=location.hash,o="",u="",L||!t&&e.Rs&&e.Rs.l&&e.Rs.l.Ge.nt?(t=L||e.Rs.l.Ge.nt(),L="",/^[^:]+[ &]data:/i.test(t)&&(C=-1),d=_(t,C=C||Math.floor(4294967296*Math.random())||3286711320,true),history.state?history.pushState(d,"",""):history.replaceState(d,"",""),window.name=""+C):t||!history.state||(C?(t=_(history.state,C,false),window.name=""+C):history.replaceState(null,"","")),VData.full=t,t.length<3||(t.startsWith("#!image")?(t=t.slice(7),o="image"):t.startsWith("#!url")&&(t=t.slice(5),o="url")),t=t.startsWith("%20")?t.slice(3):t.trim(),m=0;m=t.indexOf("&")+1;t=t.slice(m))if(g=(h=t.slice(0,m).indexOf("="))>0?t.slice(0,h):"",w=h>0?t.slice(h+1,m-1):"","download"===g)u=(u=a(w).split(/\||\uff5c| [-\xb7] /,1)[0].trim()).replace(/[\r\n"]/g,""),VData.file=u;else if(w=w.toLowerCase(),"auto"===g)VData.auto="once"===w?w:"true"===w||"false"!==w&&parseInt(w,10)>0;else if("pixel"===g)VData.pixel="1"===w||"true"===w;else{if("incognito"!==g)break;VData.incognito="true"===w||"false"!==w&&parseInt(w,10)>0}switch((t=a(t,t.includes(":")||t.includes("/")?decodeURI:null).trim())?t.toLowerCase().startsWith("javascript:")?o=t=u=VData.file="":e.Rs?(k=e.Rs.r.K(t,null,-2),e.Rs.r.V<=2&&(t=k)):t.startsWith("//")?t="http:"+t:/^([-.\dA-Za-z]+|\[[\dA-Fa-f:]+])(:\d{2,5})?\//.test(t)&&(t="http://"+t):"image"===o&&(o=""),VData.type=o,/^data:/i.test(t)&&(t="data:"+t.slice(5)),VData.url=VData.original=t,o){case"image":VData.auto&&(E=(function(n){function t(e){try{return new URL(e)}catch(e){}return null}function i(e){try{e=decodeURIComponent(e||"")}catch(e){}return e}var r,o,u,a,l,c,f,s,d,m,h,g,w,p,b,v,y=n;if(!(r=t(n=e.Rs&&e.Rs.r.ve(n,256)||n))||!/^(ht|s?f)tp/i.test(r.protocol))return null;if(o=r.origin,u=r.pathname,(a=r.search).length>10)for(l of a.slice(1).split("&")){if(c=l.split("=",1)[0],(s=f=l.slice(c.length+1)).length>7)if(!s.includes("://")&&/%(?:3[aA]|2[fF])/.test(s)&&(s=i(s).trim()),s.includes("/")&&null!=t(s)){if(/^(?:imgurl|mediaurl|objurl|origin(?:al)?|real\w*|src|url)$/i.test(c))return s;if(d=s.split("?")[0].split("/"),$.test(d[d.length-1])&&!/\bthumb/i.test(c))return s}else if("id"===c&&/&w=\d{2,4}&h=\d{2,4}/.test(a))return o+u+"?id="+f;if("name"===c&&/^(\d{2,4}x\d{2,4}|small)$/i.test(f)&&a.toLowerCase().includes("format="))return o+u+a.replace(s,"large")}if(m=null,(m=/[?&]s=\d{2,4}(&|$)/.exec(a))&&a.split("=").length<=3)return o+u;if(h=(a=u).lastIndexOf("/")+1,p=null,w=(g=(a=a.slice(h)).lastIndexOf("@")+1||a.lastIndexOf("!")+1)>2||$.test(a)){for(h+=g,a=a.slice(g),b=/(?:[.\-_]|\b)(?:[1-9]\d{2,3}[a-z]{1,3}[_\-]?|[1-9]\d?[a-z][_\-]?|0[a-z][_\-]?|[1-9]\d{1,3}[_\-]|[1-9]\d{1,2}(?=[.\-_]|\b)){2,6}(?=[.\-_]|\b)/gi;p=b.exec(a);m=p);m&&/.[_\-].|\d\dx\d/i.test(m[0])?(p=$.exec(a.slice(m.index+m[0].length)),v=m[0].length,p&&0===p.index&&(v+=p[0].length),a=u.slice((h+=m.index)+v),/[@!]$/.test(a||u.charAt(h-1))?a?a=a.slice(0,-1):h--:a||!p||0!==p.index||$.test(u.slice(Math.max(0,h-6),h))||(a=p[0])):(m=/\b([\da-f]{8,48})([_-](?:[a-z]{1,2}|\d{3,4}[whp]?))\.[a-z]{2,4}$/.exec(a))?(h+=m.index+m[1].length,a=a.slice(m.index+m[1].length+m[2].length)):w=false}return w||g>2?w=w||0:(m=/_(0x)?[1-9]\d{2,3}([whp]|x0)?\./.exec(a))?a=a.slice(0,m.index)+a.slice(m.index+m[0].length-1):a.startsWith("thumb_")?a=a.slice(6):/^[1-9]\d+$/.test(a)&&+a>0&&+a<640?(h--,a=""):$.test(a)&&/^\/(small|(thumb|mw|orj)[1-9]\d{2,3})\//.test(u)?(w=true,a="/large"+u.slice(u.indexOf("/",1)),h=0):w=0,0!==w?o+u.slice(0,h)+a:y!==n?n:null})(t))&&(console.log("Auto predict a better URL:\n %o =>\n %o",t,E),t=VData.url=E),(A=l("shownImage")).onerror=function(){VData.url!==VData.original&&VData.url?v():(y(),VData.auto=false,this.onerror=this.onload=null,this.alt=VData.error=e.ls("failInLoading"),e.f>=60&&this.classList.add("broken"),setTimeout(i,34),this.onclick=function(n){e.Rs&&e.Rs.a.kn(VData.url)||(n.ctrlKey||n.shiftKey||n.altKey||!chrome.tabs||!chrome.tabs.update?r({target:"_top"},n):chrome.tabs.update({url:VData.url}))})},/[:.]/.test(t)?(A.onclick=c,A.onload=function(){var n,t,r,o,u,a,c,f,s=this.naturalWidth,d=this.naturalHeight;if(s<12&&d<12){if(VData.auto)return void v();if(s<2&&d<2)return console.log("The image is too small to see."),void this.onerror(null)}if(VData.original=VData.url,y(),((t=(n=VData.url.slice(0,6).toLowerCase()).startsWith("blob:"))||n.startsWith("data:")&&!this.src.startsWith("data"))&&(U.dataset.vimUrl=VData.original=VData.url=this.src,x(t?0:1)),this.onerror=this.onload=null,this.src.startsWith("blob:")||setTimeout(function(){A.src=A.src},0),i(),this.classList.add("zoom-in"),VData.pixel){for(j.classList.add("pixel"),devicePixelRatio,(r=l("snapshot-banner",true)).querySelector(".banner-close").onclick=function(){r.remove()},o=r.querySelectorAll("[data-i]"),u=0;u<o.length;u++)c=(a=o[u].dataset.i).endsWith("-t"),(f=e.ls(c?a.slice(0,-2):a))&&(c?o[u].title=f:o[u].textContent=f);j.insertBefore(r,j.firstChild)}s>=.9*innerWidth&&j.classList.add("filled")},(function(n,t){var i,r,o,u,a=new Text,l=I=function(){t.removeEventListener("load",l),t.removeEventListener("error",l),clearTimeout(u),a.remove(),I===l&&(I=null)};t.addEventListener("load",l,true),t.addEventListener("error",l,true),r=(i=n.slice(0,20).toLowerCase()).startsWith("blob:"),o=i.startsWith("data:"),r||o&&!(n.length<1e4)||(VData.incognito||e.Rs.l.it("showInIncognito"))&&/^(ht|s?f)tp|^data:/.test(i)&&"cache"in Request.prototype?(p(),j.replaceChild(a,t),Promise.resolve(T[n]||(e.f<48?new Promise(function(e,t){var i=new XMLHttpRequest;i.responseType="blob",i.onload=function(){e(this.response)},i.onerror=function(e){t("Error: "+e.message)},i.open("GET",n,true),i.send()}):fetch(n,r||o?{}:{cache:"no-store",referrer:"no-referrer"}).then(function(e){return e.blob()}))).then(function(e){return T[n]=e,B=URL.createObjectURL(P=e)},function(){return n}).then(function(e){t.src=e,a.parentNode?j.replaceChild(t,a):j.appendChild(t)})):t.src=n,u=setTimeout(function(){!t.parentNode||t.scrollHeight>=24||t.scrollWidth>=80?l():a.parentNode||(j.insertBefore(a,t),a.data=e.ls("loading"))},400)})(t,A)):(t=VData.url="",A.onerror(null),A.alt=VData.error=e.ls("none")),u&&(VData.file=u=(function(e){var n,t,i,r;if(e&&!/.\.[a-z]{3,4}\b/i.test(e)){if(n=$.exec(VData.url))return e+n[0];if((t=P?P.type.toLowerCase():"").startsWith("image/"))for(r in i={jpeg:"jpg",png:0,bmp:0,svg:0,gif:0,tif:0,ico:0})if(i.hasOwnProperty(r)&&t.includes(r))return i[r]||"."+r}})(u)||u,(z=u.split(/[/\\]+/)).length>1&&A.setAttribute("download",z[z.length-1]),A.alt=u,A.setAttribute("aria-title",u)),n(true);break;case"url":if(A=l("shownText"),t&&e.Rs){if(F=null,t.startsWith("vimium://")&&(F=e.Rs.r.J(t.slice(9),1,true)),"string"==typeof(F=null!==F?F:e.Rs.r.K(t,null,-1)))F=e.Rs.r.re(F),F=e.Rs.r.Ue(F);else{if(F instanceof e.Rs.Promise){F.then(function(e){s(e[1],e[0]||e[2]||"")});break}if(F instanceof e.Rs.Array){s(F[1],F[0]);break}}t=F}"string"==typeof t&&(t=b(t)||t),s(o,t);break;default:t="",(A=l("shownImage")).src="../icons/icon128.png",U.style.display="none",n(true)}U.dataset.vimUrl=t,u?(U.dataset.vimText=u,U.download=u):(U.removeAttribute("data-vim-text"),U.removeAttribute("download")),U.onclick=A?f:c},window.onhashchange(),window.onpopstate=function(){window.onhashchange()},window.onunload=p,j.ondrop=function(e){var n,t,i=e.dataTransfer.files;1===i.length&&(t=(n=i.item(0)).name,(n.type.startsWith("image/")||$.test(t))&&(e.preventDefault(),L="#!image download="+t+"&"+URL.createObjectURL(n),onhashchange()))},j.ondragover=j.ondragenter=function(e){var n=e.dataTransfer.items;1===n.length&&n[0].type.startsWith("image/")&&e.preventDefault()},document.addEventListener("keydown",function(e){if(("image"!==VData.type||!(function(e){var n,t,i,r,a,l,c;if(VData.error)return false;if(n=e.keyCode,"space"===(i=(t=window.VApi&&VApi.z?VApi.m({c:" ",e:e,i:n},8):32===n?"space":13===n?"enter":"").slice(t.lastIndexOf("-")+1)||t&&"-")||"enter"===i)return VData.pixel&&(a=(r=document.activeElement)&&document.querySelector("#snapshot-banner"))&&a.contains(r)?((l=a.querySelector(".banner-close")).contains(r)&&l.onclick(null),true):(e.preventDefault(),"enter"===i&&S&&S.isShown&&!S.hiding&&!S.played?S.play(true):S&&S.isShown&&!S.hiding||o(A,e),true);switch(c=0,t){case"c-=":case"m-=":case"+":case"=":case"up":c=1;break;case"left":c=-2;break;case"right":c=2;break;case"c--":case"m--":case"-":case"down":c=-1;break;default:return false}return e.preventDefault(),e.stopImmediatePropagation(),S&&S.viewed?u(S,c):g().then(w).then(function(e){u(e,c)}).catch(h),true})(e))&&(e.ctrlKey||e.metaKey)&&!e.altKey&&!e.shiftKey&&!e.repeat){var n=String.fromCharCode(e.keyCode);if("S"===n)return r({download:VData.file||""},e);if("C"!==n)return"A"===n?(function(e){"image"===VData.type&&(VData.error||S&&S.isShown&&!S.hiding?e.preventDefault():A.classList.toggle("invert"))})(e):void 0;d(e)}})});