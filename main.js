!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);var r=void 0,i=document.querySelector(".banner"),o=document.querySelector(".iframe");i.addEventListener("click",(function(){o.classList.add("iframe_open"),o.src="https://urmdf-canary.ssl.mts.ru/widget/",setTimeout((function(){r._iframe.contentWindow.postMessage("".concat(JSON.stringify({token:"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IkFJS0hBTUlEVUwiLCJ1cm1kOk9yZ2FuaXphdGlvbklkIjoiMDEwMTAxODgiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJub3JlcGx5QG10cy5ydSIsInVybWQ6RklPIjoi0JLQuNC00LbQtdGCINCi0JXQodCiIiwiZXhwIjoxNjk3NjEzMjA0LCJpc3MiOiJEZWFsZXJQb3J0YWxXaWRnZXQifQ.D8CEMkiKbZ2K4TFguCihPENtirVTqM63BCcF5MzvyVdn79YJHJpI93VsiRectYREmIYIQ-Fw5q7bX_paGbjERQ",actions:[{type:"close_widget",value:!1}],address:"Энгельс"})),"https://urmdf-canary.ssl.mts.ru/widget/")}),1e3)}));window.addEventListener("message",(function(e){!1===e.data&&o.classList.remove("iframe_open")}),!1)},function(e,t,n){}]);