!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=26)}({0:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"e",(function(){return i})),n.d(e,"a",(function(){return u})),n.d(e,"d",(function(){return s})),n.d(e,"f",(function(){return c}));const r=(t,e)=>t&&e?`${t}_${e}`:"",o=(t,e)=>`${t}#channel:${e}`,i=(t,e,n)=>{if(t.length<e.length)return"";const r=t.indexOf(e);if(-1===r)return"";const o=r+e.length,i=t.indexOf(n,o);let u="";return i!==o?u=-1!==i&&i>o||-1!==i?t.substring(o,i):t.substring(o):""===n&&(u=t.substring(o)),u},u=(t,e)=>{const n=Object.getOwnPropertyNames(t),r=Object.getOwnPropertyNames(e);if(n.length!==r.length)return!1;for(let r=0;r<n.length;r++){const o=n[r];if(t[o]!==e[o])return!1}return!0},s=()=>"complete"===document.readyState&&"visible"===document.visibilityState,c=(t,e)=>`${t}: ${e.statusText} (${e.status})`},1:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return u}));let r=null;const o=()=>r,i=t=>{r?t(!0):(chrome.runtime.sendMessage("mnojpmjdmbbfmejpflffifhffcmidifd",{type:"SupportsGreaselion"},(function(e){if(!chrome.runtime.lastError&&e&&e.supported)return r=chrome.runtime.connect("mnojpmjdmbbfmejpflffifhffcmidifd",{name:"Greaselion"}),void t(!0)})),setTimeout(()=>{if(!r)return r=chrome.runtime.connect("jidkidbbcafjabdphckchenhfomhnfma",{name:"Greaselion"}),void t(!0)},100))},u=(t,e)=>{t&&r&&r.postMessage({type:"GreaselionError",mediaType:t,data:{errorMessage:e}})}},11:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(1),o=n(0);const i=(t,e,n,i)=>{if(!t||!e)return;const u=Object(r.b)();u&&u.postMessage({type:"MediaDurationMetadata",mediaType:t,data:{mediaKey:o.b(t,e),duration:n,firstVisit:i}})}},15:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"d",(function(){return u}));const r=(t,e)=>t?e?`https://twitter.com/intent/user?user_id=${e}&screen_name=${t}`:`https://twitter.com/${t}/`:"",o=(t,e)=>{if(!t)return null;if(!e)return t.getAttribute("data-tweet-id");const n=t.querySelector("a[href*='/status/']");if(!n||!n.href)return null;const r=n.href.match(/status\/(\d+)/);return!r||r.length<2?null:r[1]},i=t=>{const e=new URLSearchParams(t.search);if(!e)return"";const n=e.get("screen_name");if(n)return unescape(n);if(!t.pathname)return"";const r=t.pathname.split("/").filter(t=>t);return r&&0!==r.length?r[0]:""},u=t=>{if(["/","/about","/home","/login","/logout","/messages","/privacy","/search","/settings","/tos"].includes(t))return!0;const e=["/account/","/compose/","/explore","/hashtag/","/i/","/messages/","/notifications","/settings/","/who_to_follow/","/?login","/?logout"];for(const n of e)if(t.startsWith(n))return!0;return!1}},26:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(11),i=n(3),u=n(5),s=n(15);let c=0,a="";const f=new Set,d=()=>{c=Date.now()},l=t=>{t&&t.url&&location.href!==a&&(a=location.href,d())};chrome.extension.inIncognitoContext||(Object(r.a)(t=>{t?(document.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState?d():(()=>{const t=new URL(location.href),e=s.b(t),n=!f.has(e);n&&f.add(e);const r=Math.round((Date.now()-c)/1e3);o.a(u.b,e,r,n)})()})),"visible"===document.visibilityState&&d(),i.a(u.b,l)):console.error("Failed to initialize communications port")}),console.info("Greaselion script loaded: twitterAutoContribution.ts"))},3:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(1);let o=!1;const i=(t,e)=>{if(!t||o)return;o=!0;const n=Object(r.b)();n&&(n.postMessage({type:"RegisterOnUpdatedTab",mediaType:t}),n.onMessage.addListener((function(t){if(t.data)switch(t.type){case"OnUpdatedTab":e(t.data.changeInfo)}})))}},5:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return u}));const r="twitter",o="twitter.com",i=["https://api.twitter.com/1.1/*"],u=["requestHeaders","extraHeaders"]}});