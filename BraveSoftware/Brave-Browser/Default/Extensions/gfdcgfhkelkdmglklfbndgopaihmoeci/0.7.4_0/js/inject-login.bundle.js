!function(_){function e(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return _[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var t={};e.m=_,e.c=t,e.d=function(_,t,r){e.o(_,t)||Object.defineProperty(_,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(_){var t=_&&_.__esModule?function(){return _.default}:function(){return _};return e.d(t,"a",t),t},e.o=function(_,e){return Object.prototype.hasOwnProperty.call(_,e)},e.p="",e(e.s=700)}({700:function(_,e,t){"use strict";var r=t(82);!function(){var _=localStorage.getItem("__toby__user__"),e=localStorage.getItem("__toby__invited__"),t=e?JSON.parse(e):[];if(_&&_.length>0){var n=JSON.parse(_);localStorage.removeItem("__toby__user__"),localStorage.removeItem("__toby__invited__"),chrome.runtime.sendMessage({request:r.LOGIN_USER,user:n,invites:t})}}(),window.addEventListener("message",function(_){_.source===window&&_.data.type&&"TOBY_CHECK_LOGIN"===_.data.type&&chrome.runtime.sendMessage({request:r.CHECK_LOGIN},function(_){_&&(location.href="/open-toby")})})},82:function(_,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.OPEN_ALL="__TOBY_OPEN_ALL__",e.OPEN_TOBY="__TOBY_OPEN_TOBY__",e.CHECK_CONTENT="__TOBY_CHECK_CONTENT__",e.UPDATE_BOARDS="__TOBY_UPDATE_BOARDS__",e.STATUS_SYNC="__TOBY_STATUS_SYNC__",e.STATUS_TOBY_SYNC="__TOBY_STATUS_TOBY_SYNC__",e.LOGIN_USER="__TOBY_LOGIN_USER__",e.CHECK_LOGIN="__TOBY_CHECK_LOGIN__"}});