import"./assets/common-07320d55.js";import{t as r}from"./assets/vendor-c4bdc8af.js";const a="feedback-form-state",o=document.querySelector(".feedback-form"),m=document.querySelector(".feedback-form input"),n=document.querySelector(".feedback-form textarea");let t={};o.addEventListener("submit",u);o.addEventListener("input",r(s,250));function c(){const e=JSON.parse(localStorage.getItem(a))||{};t=e,m.value=e.email||"",n.value=e.message||""}function i(){localStorage.setItem(a,JSON.stringify(t))}function s(e){(e.target.name==="email"||e.target.name==="message")&&(t[e.target.name]=e.target.value,i())}function u(e){e.preventDefault(),!(!t.message||!t.email)&&(e.target.reset(),localStorage.removeItem(a),t={})}c();
//# sourceMappingURL=commonHelpers3.js.map
