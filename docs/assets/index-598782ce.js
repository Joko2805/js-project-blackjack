(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function c(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(r){if(r.ep)return;r.ep=!0;const n=c(r);fetch(r.href,n)}})();const p=(e,...t)=>t.forEach(c=>c.disabled=!e),f=["C","D","H","S"],v=["A","J","Q","K"],E=["2","3","4","5","6","7","8","9","10"],b=()=>[...E.flatMap(e=>f.map(t=>`${e}${t}`)),...v.flatMap(e=>f.map(t=>`${e}${t}`))],O=e=>{let t=e.slice(0,-1);return isNaN(t)?t==="A"?11:10:Number(t)},M=e=>{const t=Math.floor(Math.random()*e.length);return e.splice(t,1).pop()};document.addEventListener("DOMContentLoaded",()=>{$()});const o=(e,t=document)=>t.querySelector(e),{btnOrder:d,btnNew:N,btnStop:i,playerPointSelector:g,pcPontSelector:C,playerCardContainer:h,pcCardContainer:L}={btnOrder:o("[data-btn-pedir]"),btnNew:o("[data-btn-nuevo]"),btnStop:o("[data-btn-detener]"),playerPointSelector:o("[data-puntos-jugador]"),pcPontSelector:o("[data-puntos-pc]"),playerCardContainer:o("[data-cartas-jugador]"),pcCardContainer:o("[data-cartas-pc]")},S=(e,t,c)=>{const l=M(P);e+=O(l),(e>21||e===21)&&p(!1,i,d),t.textContent=e;const r=document.createElement("IMG");return r.classList.add("blackjack__cartas"),r.src=`./assets/cartas/${l}.png`,c.append(r),e},m=()=>{do if(s=S(s,C,L),a>21)break;while(s<a);setTimeout(()=>{s===a?alert("Empate"):s>21?alert("Jugador Gana"):alert("Pc Gana")},100),p(!1,i,d)},y=e=>e.innerHTML="",w=()=>{g.textContent=0,C.textContent=0,a=0,s=0,P=b(),y(h),y(L),p(!0,i,d)},$=()=>{d.addEventListener("click",()=>{a=S(a,g,h),(a>21||a==21)&&m()}),i.addEventListener("click",()=>{m()}),N.addEventListener("click",()=>{w()})};let P=b(),a=0,s=0;
