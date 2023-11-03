import"./assets/common-94ab0fbd.js";import{P as r,l as a}from"./assets/vendor-78be7656.js";const i=document.querySelector("iframe"),t=new r(i),o="videoplayer-current-time",n=JSON.parse(localStorage.getItem(o));t.setCurrentTime(n||0);function s(e){m(e.seconds)}function m(e){localStorage.setItem(o,JSON.stringify(e))}t.on("timeupdate",a(s,1e3));
//# sourceMappingURL=commonHelpers2.js.map
