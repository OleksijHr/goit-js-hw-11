import{s as p,i as c}from"./assets/vendor-1d1bb5a2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d=document.querySelector(".object-list"),m=new p(".gallery a",{caption:!0,captionsData:"alt",captionDelay:250,showCounter:!1}),f=function(o){return o.map(({views:s,comments:r,downloads:n,likes:e,webformatURL:t,tags:i,largeImageURL:u})=>`<li>
        <div class="img-box">
        <a href="${u}">
        <img class="img" src="${t}" alt="${i}" width="360" height="200">
        </a>
        <ul class="value-list">
        <li class="likes value-item"><p class="article">Likes</p><p class="value">${e}</p></li>
        <li class="views value-item" ><p class="article">Views</p><p class="value">${s}</p></li>
        <li class="comments value-item"><p class="article">Comments</p><p class="value">${r}</p></li>
        <li class="downloads value-item"><p class="article">Downloads</p><p class="value">${n}</p></li>
        </ul></div>
        </li>`).join("")},h=function(o){d.insertAdjacentHTML("beforeend",o),m.refresh()},y="https://pixabay.com/api/",g="43211197-e02e136a3ee46bcda7d5bf66f";function b(o=""){const s=new URLSearchParams({key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${y}/?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const l=document.querySelector(".search-form"),v=document.querySelector("input"),L=document.querySelector(".object-list"),a=document.querySelector(".loader-box");l.addEventListener("submit",w);function w(o){if(o.preventDefault(),!v.value)return c.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",closeOnClick:!0,position:"topCenter"});const s=o.currentTarget.elements.search.value.trim();a.style.display="flex",b(s).then(r=>{if(r.hits!==s)return a.style.display="none",c.info({message:"Don't found",closeOnClick:!0,position:"topCenter"});L.innerHTML=f(r.hits),h(),l.reset(),a.style.display="none"}).catch(r=>(a.style.display="none",c.error({message:`${r}`,backgroundColor:"red",position:"topCenter"})))}
//# sourceMappingURL=commonHelpers.js.map