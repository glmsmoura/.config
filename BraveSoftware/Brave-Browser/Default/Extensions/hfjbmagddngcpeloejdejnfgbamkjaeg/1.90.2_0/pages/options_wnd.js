__filename="pages/options_wnd.js",define(["require","exports","./async_bg","./options_base","./options_defs"],function(n,o,e,t,i){"use strict";function r(){function n(){var n,o,i,r=t.Zs.Do;for(n in r)"object"==typeof(i=(o=r[n]).Os)&&i&&(o.Os=e.Js.it(o.Ss))}e.Rs.removeEventListener("unload",r),setTimeout(function(){if(e.zo(),!e.Rs)return window.onbeforeunload=null,void window.close();e.Rs.addEventListener("unload",r),"loading"===e.Rs.document.readyState?e.Rs.addEventListener("DOMContentLoaded",function o(){e.Rs.removeEventListener("DOMContentLoaded",o,true),setTimeout(n,100)},true):setTimeout(n,67)},200)}var u,s,a,c,f,l,d,m,h,p,w=/\sEdg\//.test(navigator.appVersion);o.delayed_task=void 0,u=function(){o.delayed_task=null},t.qs(t.showI18n),t.Es&&t.qs(t.Es),t.qs(function(n){n.textContent=e.Js.L.Tt},e.$(".version")),i.saveBtn.onclick=function(n){if(false===n||t.Zs.Ys()){var o=t.Zs.cs;t.Zs.cs=[],this.disabled=true,this.firstChild.data=e.ls("o115_3"),i.exportBtn.disabled=false,i.savedStatus(false),window.onbeforeunload=null,0!==o.length&&setTimeout(function(n){e.Js.dt({N:6,d:n.map(function(n){return e.Js.ht[n]})})},100,o)}},s=function(){var n,r,u,s,a,c=false,f=e.$("#advancedOptionsButton");for(f.onclick=function(n,o){var i,r=this;null==o||"hash"===o&&false===e.Js.it("showAdvancedOptions")?e.Js.lt("showAdvancedOptions",c=!c):c=e.Js.it("showAdvancedOptions"),i=e.$("#advancedOptions"),t.qs(function(){i.previousElementSibling.style.display=i.style.display=c?"":"none";var n=c?"Hide":"Show";r.firstChild.data=e.ls(n)||n,r.setAttribute("aria-checked",""+c)},9)},f.onclick(null,true),t.qs(function(){var n,o;for(n in t.Zs.zs=false,t.Zs.Do)(o=t.Zs.Do[n]).as(o.Os)}),t.Zs.Do.exclusionRules.Os.length>0&&t.qs(function(n){n.style.visibility=""},e.$("#exclusionToolbar")),r=(n=e.$$("[data-check]")).length;0<=--r;)(f=n[r]).addEventListener(f.dataset.check||"input",d);for(document.addEventListener("keyup",function(n){var o=n.target,e=n.keyCode;if(13===e){if(o instanceof HTMLAnchorElement)o.hasAttribute("href")||setTimeout(function(n){p(n),n.blur()},0,o);else if((n.ctrlKey||n.metaKey)&&(o.blur&&o.blur(),i.savedStatus()))return i.saveBtn.onclick()}else{if(32!==e)return;o instanceof HTMLSpanElement&&o.parentElement instanceof HTMLLabelElement&&(n.preventDefault(),p(o.parentElement.control))}}),u=function(){var n,o,t=e.$("#"+this.dataset.autoResize),i=t.scrollHeight,r=t.scrollWidth,u=r-t.clientWidth;i<=t.clientHeight&&u<=0||(n=Math.max(Math.min(innerWidth,1024)-120,550),t.style.maxWidth=r>n?n+"px":"",t.style.height=t.style.width="",o=t.offsetHeight-t.clientHeight,i+=o=(u=r-t.clientWidth)>0?Math.max(26,o):o+18,u>0&&(t.style.width=t.offsetWidth+u+4+"px"),t.style.height=i+"px")},r=(n=e.$$("[data-auto-resize]")).length;0<=--r;)n[r].onclick=u;for(u=function(n){var e=this.dataset.delay,t=null;"continue"!==e&&n&&n.preventDefault(),"event"===e&&(t=n||null),o.delayed_task=["#"+this.id,t],"complete"!==document.readyState?window.addEventListener("load",function n(o){o.target===document&&(window.removeEventListener("load",n),l("options_ext.js"))}):l("options_ext.js")},r=(n=e.$$("[data-delay]")).length;0<=--r;)n[r].onclick=u;if(e.f<53)for(u=function(n){n.target===this&&(n.preventDefault(),getSelection().selectAllChildren(this))},r=(n=e.$$(".sel-all")).length;0<=--r;)n[r].onmousedown=u;for((n=e.$$("[data-permission]")).length>0&&(function(n){function o(){var n,o=this.querySelector("[data-permission]");this.onclick=null,o&&(o.placeholder=e.ls("lackPermission",[(n=o.dataset.permission)?': "'+n+'"':""]))}var i,r,u,s=chrome.runtime.getManifest();for(i of s.permissions||[])s[i]=true;for(r=function(i){var r=n[i],u=r.dataset.permission;if("C"===u[0]){if(e.f>=+u.slice(1))return"continue";u=e.ls("beforeChromium",[u.slice(1)])}else{if(u in s)return"continue";u=e.ls("lackPermission",[u?":\n* "+u:""])}u=e.ls("invalidOption",[u]),t.qs(function(n){n.disabled=true,n instanceof HTMLInputElement&&"checkbox"===n.type?(n.nextElementSibling.tabIndex=-1,(n=n.parentElement).title=u):(n.value="",n.title=u,n.parentElement.onclick=o)},r)},u=n.length;0<=--u;)r(u)})(n),0===e.Rs.l.L.Gt.length&&t.qs(function(n){for(var o=n.length;0<=--o;)n[o].remove()},e.$$(".require-shortcuts")),setTimeout(function(){var n,o,t,i=e.$$("[data-href]");for(n=i.length;0<=--n;)t=e.Rs.r.K((o=i[n]).dataset.href,null,-1),o.removeAttribute("data-href"),o.setAttribute("href",t)},100),f=e.$("#openExtensionsPage"),e.f<65&&(f.href="chrome://extensions/configureCommands"),f.onclick=function(n){n.preventDefault(),e.Rs.a.hn[19]({u:this.href,r:1,p:true})},t.qs(function(n){var o=n.children[1],t=e.ls("NewTabAdapter");o.title=t+" - "+e.ls("webstore")},e.$("#chromeExtVomnibar")),n=e.$$(".ref-text"),s=function(n){c||e.$("#advancedOptionsButton").onclick(null),n.preventDefault();var o=t.Zs.Do[this.getAttribute("for")].An.nextElementSibling;e.f<61?o.scrollIntoViewIfNeeded():o.scrollIntoView({block:"center"}),o.focus(),window.VApi&&VApi.x(o.parentElement.parentElement)},a=function(o){var i=t.Zs.Do[n[o].getAttribute("for")],r=i.Ns;i.Ns=function(){r.call(i),t.qs(function(n){n.textContent=e.ls(i._s()>1?"o145_2":"o144")},e.$("#"+i.An.id+"Status"))},n[o].onclick=s,i.An.addEventListener("change",i.Ns,true)},r=n.length;0<=--r;)a(r)},a=function(){var n,o,i,r;for(n in s(),s=a=null,t.Zs.Do)t.Zs.Do[n].Ns();(o=t.Zs.Do.newTabUrl).$s.Ks(o.Os),e.Js.Pe.o||t.qs(function(n){n.textContent="Cmd"},e.$("#Ctrl")),window.onhashchange(),e.f>75&&((i=matchMedia("(prefers-color-scheme: dark)")).onchange=function(){e.Js.yt(),setTimeout(r,34)},(r=function(n){var o,u,s,a,c,f,l,d=t.Zs.Do.autoDarkMode;if(d.Os&&d.bs){if(o=i.matches,window.VApi&&VApi.z){if(u=VApi.y().r)for(s of[].slice.call(u.children))"style"!==s.localName&&(s.classList.toggle("D",o),"iframe"===(s=s.firstElementChild||s).localName&&(a=s.classList.contains("Find"),(f=(c=s.contentDocument).querySelector("style#dark"))&&f.sheet&&(f.sheet.disabled=!o),c.body.classList.toggle(a?"D":"has-dark",o),a&&(l=VApi.y().f)&&l.parentElement.classList.toggle("D",o)));e.Js.pt("d",o,VApi.z)}else 1===n&&o!==!!e.Js.Pe.d&&setTimeout(r,500);e.toggleDark(o)}})(1)),t.Zs.Do.autoDarkMode.Ns=function(){e.Js.yt(),e.toggleDark(this.Os)},t.Zs.Do.autoReduceMotion.Ns=function(){e.toggleReduceMotion(this.Os)}},c=chrome.runtime.getManifest().optional_permissions||[],f=["downloads"],!w||f.push("chrome://new-tab-page/"),f.push("cookies"),(c=c.filter(function(n){return!f.some(function(o){return"string"==typeof o?n===o:o.test(n)})})).length?(function(n){var o,r,u,s,a,f,l,d=chrome.permissions,m=document.createDocumentFragment(),h={"chrome://*/*":"opt_chromeUrl","chrome://new-tab-page/":"opt_cNewtab","downloads.shelf":"opt_closeShelf"},p=e.$("#optionalPermissionsTemplate"),v=p.content.firstElementChild,g=[];for(o of n)u=(r=document.importNode(v,true)).querySelector("input"),s=h[o],u.value=o,a=e.ls(s||"opt_"+o)||o,f="",o.startsWith("chrome:")&&(a=w?a.replace("chrome:","edge:"):a,f=e.ls("optOfChromeUrl").replace(w?"chrome":"edge","edge")),"chrome://new-tab-page/"===o&&e.f<85&&(f=e.ls("requireChromium",[85]),u.disabled=true,u.checked=false,r.title=e.ls("invalidOption",[e.ls("beforeChromium",[85])])),r.lastElementChild.textContent=a+f,1===c.length&&r.classList.add("single"),m.appendChild(r),g.push({Ee:o,Os:false,An:u});l=p.parentElement,t.qs(function(n){l.appendChild(n)},m),i.registerClass("OptionalPermissions",(function(n){function o(){return null!==n&&n.apply(this,arguments)||this}return __extends(o,n),o.prototype.Ur=function(){this.An.onchange=this.ns},o.prototype._s=function(){return g.map(function(n){return n.An.checked?"1":"0"}).join("")},o.prototype.ws=function(){this.bs=true,this.Os=g.map(function(n){return n.Os?"1":"0"}).join(""),this.as(this.Os)},o.prototype.as=function(n){for(var o=0;o<g.length;o++)g[o].An.checked="1"===n[o]},o.prototype.Cs=function(){return false},o.prototype.Ms=function(n){var o,t,i,r=this,u=[],s=[],a={},c=1,f=function(n){var o=n.An.checked;if(n.Os===o)return"continue";n.Os=o,o?("downloads.shelf"===n.Ee&&u.push("downloads"),(n.Ee.includes(":")?s:u).push(n.Ee),a[n.Ee]=n):(c++,d.remove(n.Ee.includes(":")?{origins:[n.Ee]}:{permissions:"downloads.shelf"===n.Ee?["downloads",n.Ee]:[n.Ee]},function(o){var e=chrome.runtime.lastError;return(e||!o)&&console.log("Can not remove the permission %o :",n.Ee,e&&e.message||e),i(),e}))};for(o of g)f(o);return t=function(n,o){var t,u,s,c,f,l=chrome.runtime.lastError;if((l||!o)&&console.log("Can not request permissions of %o :",n,l&&l.message||l),!o){for(t of n)(u=a[t])&&(u.Os=false,l&&((c=(s=u.An.parentElement).nextElementSibling)&&c.classList.contains("tip")||((c=document.createElement("div")).className="tip",s.parentElement.insertBefore(c,s.nextElementSibling)),f=(l&&l.message||JSON.stringify(l))+"",t.startsWith("chrome://")&&f.includes("Only permissions specified in the manifest")&&t.startsWith("chrome:")&&(f=e.ls("optNeedChromeUrlFirst"),f=w?f.replace("chrome:","edge:"):f),c.textContent=s.title=e.ls("exc")+f,s.lastElementChild.classList.add("has-error")));r.ws()}return i(),l},i=function(){var n,o,e;if(!(--c>0))for(e of(n=0,o=function(o){var e=o.Ee;n++,d.contains(e.includes(":")?{origins:[e]}:{permissions:"downloads.shelf"===e?["downloads",e]:[e]},function(e){o.Os=e||false,--n||r.ws()})},g))o(e)},c+=(u.length&&1)+(s.length&&1),u.length&&d.request({permissions:u},t.bind(0,u)),s.length&&d.request({origins:s},t.bind(0,s)),i(),n},o})(t.Zs)),setTimeout(function(){var n,o=0,e=function(n){var e=n.Ee;d.contains(e.includes(":")?{origins:[e]}:{permissions:"downloads.shelf"===e?["downloads",e]:[e]},function(e){n.Os=n.An.checked=e||false,++o===g.length&&(l.dataset.model="OptionalPermissions",i.createNewOption(l))})};for(n of g)e(n)},17)})(c):t.qs(function(){e.$("#optionalPermissionsBox").style.display="none"}),t.Zs.Do.userDefinedCss.An.addEventListener("input",t.Bs(function(){var n,o,i,r,u,s,a,c=t.Zs.Do.userDefinedCss,f=c.An.classList.contains("debugging");(!c.bs||f)&&window.VApi&&VApi.z&&(o=(n=c._s())===c.Os,i=e.Js.jt(-1,n),r=VApi.y().r,!f&&e.Rs&&chrome.tabs.query({currentWindow:true,active:true},function(n){if(n&&n[0]&&n[0].url===location.href){var o=e.Rs.a.wt(n[0].id,0);o&&(o.s.Bn|=40)}}),c.An.classList.toggle("debugging",!o),VApi.t({k:r||o?0:1,t:"Debugging CSS\u2026",H:i.ui,f:i.find}),(s=(u=r&&r.querySelector("iframe.Omnibar"))&&u.contentDocument)&&((a=s.querySelector("style.debugged")||s.querySelector("style#custom"))||((a=s.createElement("style")).type="text/css",a.id="custom"),a.parentNode||s.head.appendChild(a),a.classList.add("debugged"),a.textContent=(o?"\n":"\n.transparent { opacity: 1; }\n")+(i.omni&&i.omni+"\n"||"")))},1200,null,0)),e.$("#importButton").onclick=function(){var n=e.$("#importOptions");n.onchange?n.onchange(null):p(e.$("#settingsFile"))},t.qs(function(n){var o,t=e.Js.L.Dt;n.textContent=(w?["MS Edge"]:/\bChromium\b/.exec(navigator.appVersion)||["Chrome"])[0]+" "+e.f+e.ls("comma")+e.ls("NS")+(e.ls(t)||t[0].toUpperCase()+t.slice(1)),w&&((o=e.$("#openExtensionsPage")).textContent=o.href="edge://extensions/shortcuts")},e.$("#browserName")),l=function(n){var o=n.slice(n.lastIndexOf("/")+1).replace(".js","");return __filename="__loader_"+o,define([n])},d=function(){l("options_checker.js")},document.addEventListener("keydown",function(n){var o,t,i,r,u;if(32===n.keyCode)"span"===(u=n.target).localName&&"label"===u.parentElement.localName&&n.preventDefault();else{if(!window.VApi||!VApi.z||"input textarea".includes(document.activeElement.localName))return;"a-f12"===(o=VApi.m({c:" ",e:n,i:n.keyCode},9))?(t=e.$("#importOptions"),i=t.selectedIndex,r=function(){t.onchange&&t.onchange(null),t.selectedIndex=i},e.$("#recommendedSettings").selected=true,null!=t.onchange?r():setTimeout(r,100)&&t.click()):"?"===o&&e.$("#showCommands").click()}}),window.onhashchange=function(){var n,o=location.hash;(o=o.slice("!"===o[1]?2:1))&&/^[a-z][a-z\d_-]*$/i.test(o)&&((n=e.$('[data-hash="'+o+'"]'))?n.onclick&&t.qs(function(){n.onclick(null,"hash")}):(n=e.$("#"+o))&&t.qs(function(){n.dataset.model&&n.classList.add("highlight");var o=function(o){o&&o.target!==window||(window.onload&&(window.onload=null,window.scrollTo(0,0)),n.scrollIntoViewIfNeeded())};if("complete"===document.readyState)return o();window.scrollTo(0,0),window.onload=o}))},e.Js.qt&&e.Js.qt()?e.Js.qt().then(a):a(),window.onunload=function(){e.Rs.removeEventListener("unload",r)},e.Rs.addEventListener("unload",r),(m=e.Rs.c.Nn.get("?"))&&7===m.Sn||(h="",e.Rs.c.Nn.forEach(function(n,o){7===n.Sn&&(h=h&&h.length<o.length?h:o)}),h&&t.qs(function(n){return n[0].textContent=n[1]},[e.$("#questionShortcut"),h])),document.addEventListener("click",function n(){var o=window.VApi,t=o&&o.y();t&&t.r&&(document.removeEventListener("click",n,true),t.r.addEventListener("click",function(n){var o,e=n.target;VApi&&e.classList.contains("HelpCommandName")&&(o=e.textContent.slice(1,-1),VApi.p({H:16,s:o}))},true),document.addEventListener("click",function(n){var o,t,i,r,u;"a"===n.target.localName&&(n.ctrlKey||n.metaKey)&&(i=(t=(o=window.VApi)&&o.b)&&t.$())&&i.b&&!i.a&&(r=-17&i.m)<32&&2&r&&!(1&r)&&(u=e.Rs.a.Pn())>=0&&setTimeout(function(){chrome.tabs.update(u,{active:true})},0)}))},true),p=function(n){var o=document.createEvent("MouseEvents");return o.initMouseEvent("click",true,true,window,1,0,0,0,0,false,false,false,false,0,null),n.dispatchEvent(o)},o.clear_delayed_task=u,o.click=p,o.loadChecker=d,o.loadJS=l,Object.defineProperty(o,"Fs",{value:true})});