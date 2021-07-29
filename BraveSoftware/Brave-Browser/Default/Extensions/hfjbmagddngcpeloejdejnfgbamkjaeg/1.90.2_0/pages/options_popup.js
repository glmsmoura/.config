__filename="pages/options_popup.js",define(["./async_bg","./options_base"],function(n,t){"use strict";var o,e,i,u,r,c,l="",f=0,s=true,a=null,d=-1,h=null,v=false,m=n.$("#state-action"),w=n.$("#saveOptions"),p=m.nextElementSibling,_=p.nextElementSibling,g=(function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return __extends(e,n),e.prototype.us=function(t,o){n.prototype.us.call(this,e.Wo(),o)},e.prototype.ps=function(n){if(!n)return false;var t=o.Qt.get(n);return!(2===t.t?!i.startsWith(t.v)||l&&!l.startsWith(t.v):!t.v.test(i)||l&&!t.v.test(l))},e.prototype.as=function(o){var i,u,r;n.prototype.as.call(this,o),this.as=null,document.documentElement.style.height="",e.prototype.ps=t.Ds.prototype.ps,i=this.kr.filter(function(n){return n.Yr}),f=(u=i.length>0)?2:1,u?(r=i[0].ds,b(true)):(this.us("",false),r=this.kr[this.kr.length-1].ds),t.qs(function(){return r.focus()})},e.prototype.xs=function(t,e,u){var r,c,l=t.vs.pattern===e;n.prototype.xs.call(this,t,e,u),l||(r=o.Wt(e,""),c=t.fs,(2===r.t?i.startsWith(r.v):r.v.test(i))?c.title=c.style.color="":(c.style.color="red",c.title="Red text means that the pattern does not\nmatch the current URL."))},e.Wo=function(){var n=i.startsWith("http:")?"^https?://"+i.split("/",3)[2].replace(/[.[\]]/g,"\\$&")+"/":i.startsWith(location.origin)?":vimium:/"+new URL(i).pathname.replace("/pages",""):/^[^:]+:\/\/./.test(i)&&!i.startsWith("file:")?":"+i.split("/",3).join("/")+"/":":"+i;return e.Wo=function(){return n},n},e})(t.Ds),b=function(t){var u,r,c=3===f,l=c?o.cn(i,e):o.fn(i,e,h._s(true));l&&(l=R(l)),t&&(a=f>=2?l:null),f=2,u=l===a,r=!!l&&l.length>2&&"^"===l[0],m.textContent=(c?l?n.ls("o137")+n.ls(r?"o138":"o139"):n.ls("o140"):n.ls(u?"o141":"o142")+n.ls(l?r?"o138":"o139":u?"o143":"o143_2")).replace(" to be","")+n.ls("colon")+(l?n.ls("NS"):""),p.className=l?"code":"fixed-width",p.textContent=l?r?l.slice(2):l:n.ls(null!==l?"o144":"o145")+n.ls("o146"),_.textContent=v&&!c&&u?n.ls("o147",[n.ls(0!==d?"o144":"o145")]):v?n.ls("o148"):"",w.disabled=u,w.firstChild.data=n.ls(u?"o115":"o115_2")},x=function(){if(!w.disabled){var t=o.Qt;n.Rs.a.Qn("reset silent",e.un),h.As(),setTimeout(function(){o.Qt=t,setTimeout(O,150)},50),f=3,b(true),w.firstChild.data=n.ls("o115_3"),w.disabled=true,s=true}},R=function(n){var t,o,e;for(e of((t=(n=n.trim()).length>2&&n.startsWith("^"))&&(n=n.slice(1).trimLeft()),o=Object.create(null),n.split(" ")))o[e]=1;return(t?"^ ":"")+Object.keys(o).sort().join(" ")},k=function(t,o){o&&o.preventDefault(),n.Rs.a.Qn(t.toLowerCase(),e.un),window.close()},O=function(){u=2!==e.dn?"Disable":"Enable";var o=n.$("#toggleOnce"),i=o.nextElementSibling;t.qs(function(){o.firstElementChild.textContent=(n.ls(u)||u)+(v?"":n.ls("Once")),o.onclick=k.bind(null,u),p.id="state-value",i.classList.toggle("hidden",!v),v&&(i.firstElementChild.onclick=k.bind(null,"Reset"))})},j=function(o){var e=n.$(".options-link"),i=n.Js.L.Ht;o.startsWith(i)?t.qs(function(){e.nextElementSibling.remove(),e.remove()}):(e.href!==i&&t.qs(function(){e.href=i}),e.onclick=function(t){t.preventDefault();var o=n.Rs.Object.create(null);o.u=n.Js.L.Ht,n.Rs.a.hn[19](o),window.close()})};Promise.all([n.Js.qt&&n.Js.qt(),new Promise(function(n){chrome.tabs.query({currentWindow:true,active:true},n)})]).then(function(a){var m=a[1][0],p=m.url,_=n.Rs.a.wt(m.id),R=n.$("#blocked-msg");if(!(_||m&&p&&"loading"===m.status&&/^(ht|s?f)tp/.test(p))||r(_))return c(R,m,p,_),j(p),void t.qs(t.showI18n);t.qs(function(t){R.remove(),R=null;var o=document.documentElement.classList;o.toggle("no-dark",!n.Js.Pe.d),o.toggle("less-motion",!!n.Js.Pe.m),t.textContent=n.Js.L.Tt},n.$(".version")),o=n.Rs.Exclusions,_&&_.wn&&(v=true,d=_.wn.dn),(e=!_||_.bn.s.ln&&!n.Rs.r.D.test(_.bn.s.je)?{ln:0,Tn:m.incognito,dn:0,Bn:0,un:m.id,je:p}:_.bn.s).ln&&(l=((n.Rs.a.wt(m.id,0)||{}).s||{}).je||p),i=e.je,w.onclick=x,document.addEventListener("keyup",function(n){13===n.keyCode&&(n.ctrlKey||n.metaKey)&&(setTimeout(window.close,300),s||x())}),j(p),O(),(function(){var e,i,r=n.Js.it("exclusionRules"),c=o.Qt=new n.Rs.Map,l=o.an;for(e=0,i=r.length;e<i;e++)c.set(r[e].pattern,l[e]);n.Js.Pe.o||window.addEventListener("keydown",function(n){n.altKey&&(88===n.keyCode||v&&90===n.keyCode)&&!(n.shiftKey||n.ctrlKey||n.metaKey)&&(n.preventDefault(),n.stopImmediatePropagation(),k(88===n.keyCode?u:"Reset"))}),h=new g(n.$("#exclusionRules"),function(){if(s){s=false;var t=n.$("#helpSpan");t&&(t.nextElementSibling.style.display="",t.remove()),w.removeAttribute("disabled"),w.firstChild.data=n.ls("o115_2")}b(f<2)}),t.qs(function(){t.Zs.zs=false,h.ws()}),window.onunload=function(){o.Qt=null}})(),t.qs(t.showI18n),t.Es&&t.qs(t.Es)}),r=function(t){return!!t&&"string"==typeof t.Fn&&true!==n.Js.rt.get(t.Fn)},c=function(t,o,e,i){var u,c,l,f,s,a=document.body,d=document.documentElement;a.innerText="",t.style.display="",t.querySelector(".version").textContent=n.Js.L.Tt,u=t.querySelector("#refresh-after-install"),o&&e&&/^(ht|s?f)tp/i.test(e)?/\bOpera\//.test(navigator.userAgent)&&/\.(google|bing|baidu)\./.test(e.split("/",4).slice(0,3).join("/"))&&(t.querySelector("#opera-warning").style.display=""):u.remove(),a.style.width="auto",a.appendChild(t),null!=(l=(c=r(i)?i.Fn:e.startsWith(location.protocol)&&!e.startsWith(location.origin)?new URL(e).host:"")?n.Js.rt.get(c):null)&&true!==l&&((f=n.$("#injection-refused")).style.display="",f.nextElementSibling.remove(),i&&(i.Fn=-1),n.$("#doAllowExt").onclick=function(){var t,o=n.Js.it("extAllowList"),e=o.split("\n"),u=c;e.indexOf(u)<0&&(t=e.indexOf("# "+u)+1||e.indexOf("#"+u)+1,e.splice(t?t-1:e.length,t?1:0,u),o=e.join("\n"),n.Js.lt("extAllowList",o)),i&&(i.Fn=null),this.onclick=null,chrome.tabs.query({active:true,currentWindow:true},function(n){var t=function(){return setTimeout(function(){return location.reload()},500),chrome.runtime.lastError};return n&&n[0]?chrome.tabs.reload(n[0].id,t):chrome.tabs.reload(t),chrome.runtime.lastError})}),d.classList.toggle("no-dark",!n.Js.Pe.d),d.style.height="",s=n.$("#retryInject"),/^(file|ftps?|https?):/.test(e)&&o?s.onclick=function(t){var e,i,u;if(t.preventDefault(),!n.Rs.a.wt(o.id))for(u of(e=location.origin.length,i=function(){},n.Js.L.Ct))chrome.tabs.executeScript(o.id,{file:u.slice(e),allFrames:true},i);window.close()}:(s.nextElementSibling.remove(),s.remove())}});