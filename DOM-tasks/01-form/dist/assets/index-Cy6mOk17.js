(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const o=document.forms.feedback;o.elements.type;document.querySelector("form button");const l=document.querySelector("#options"),u=n=>{n.preventDefault(),o.elements;const r=new FormData(o);r.delete("type");for(let s of r.entries())console.log(s);alert("Thank you for your feedback!")};o.addEventListener("submit",u);l.addEventListener("change",n=>{const r=o.subject;r.value=n.target.value});
