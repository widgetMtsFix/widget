!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._iframe=document.querySelector(".iframe")}var t,n,i;return t=e,(n=[{key:"_loadIframe",value:function(){this._iframe.contentWindow.postMessage("".concat(JSON.stringify({token:"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IklTQlJBQ0hVIiwidXJtZDpPcmdhbml6YXRpb25JZCI6IjEzMTIzMTIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJpc2JyYWNodUBtdHMucnUiLCJ1cm1kOkZJTyI6IldpZGdldFRlc3QiLCJleHAiOjI1MzQwMjI5MDAwMCwiaXNzIjoiRGVhbGVyUG9ydGFsV2lkZ2V0In0.q9RxGLO-TchG6t2k1U7Lg0YMlhEmI28JPp92wxpJd7izH03zvWTc-YuC06XmEUCONxTnpiE3ekz61ky6CbIgEw",actions:[{type:"close_widget",value:!1}],address:"Энгельс"})),"https://urmdf-canary.ssl.mts.ru/widget/")}},{key:"iframeOpen",value:function(){var e=this;this._iframe.classList.add("iframe_open"),this._iframe.src="https://urmdf-canary.ssl.mts.ru/widget/",setTimeout((function(){e._loadIframe()}),1e3)}},{key:"iframeClose",value:function(){this._iframe.classList.remove("iframe_open")}}])&&r(t.prototype,n),i&&r(t,i),e}(),o=document.querySelector(".banner"),a=new i;o.addEventListener("click",(function(){a.iframeOpen()}));window.addEventListener("message",(function(e){!1===e.data&&a.iframeClose()}),!1)}]);