(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"32Je":function(e,t,n){},pUim:function(e,t,n){"use strict";n.r(t);n("EVdn");var i=n("DetJ"),o=n.n(i),d=(n("AUje"),n("PpN6"),n("91cS"),n("Zz8k")),l=n.n(d),a=n("MYse"),r=n.n(a),s=(n("32Je"),document.querySelector("#inputImage")),c=document.querySelector(".btn-img"),u=document.querySelector(".avatar");c.addEventListener("click",(function(){s.click()})),s.addEventListener("change",(function(){var e=s.value,t=e.lastIndexOf(".")+1,n=e.substr(t,e.length).toLowerCase();if("jpg"==n||"jpeg"==n||"png"==n){var i=URL.createObjectURL(event.target.files[0]);u.style.backgroundImage="url("+i+")"}else{new o.a.Modal(document.getElementById("modalImage"),{}).show()}}));var m=document.querySelector(".pagePdf"),v=new l.a(".single-line",{buttonLabels:"fontawesome",toolbar:{buttons:["bold","italic","underline"]},paste:{forcePlainText:!0,cleanPastedHTML:!0,doPaste:function(){}},autoLink:!1,disableReturn:!0});m.addEventListener("DOMNodeInserted",(function(){for(var e=document.querySelectorAll(".single-line"),t=function(t){e[t].addEventListener("keydown",(function(n){var i=e[t].getAttribute("max-input");(0===n.target.children[0].textContent.length&&8===n.keyCode||n.target.children[0].textContent.length>=i&&8!=n.keyCode)&&n.preventDefault()}))},n=0;n<e.length;n++)t(n)}));var f=document.querySelector(".profile"),p=document.querySelector(".pagePdf"),b=document.querySelector(".body-cv"),y=f.offsetHeight,g=p.offsetHeight-y;b.style.height=g+"px";var h=new r.a,w=new l.a(".multi-line",{buttonLabels:"fontawesome",extensions:{autolist:h},toolbar:{buttons:["bold","italic","underline","unorderedlist","orderedlist"]},paste:{forcePlainText:!0,cleanPastedHTML:!0},autoLink:!1}),k=document.querySelectorAll(".container-content"),L=document.querySelector(".container-cv").offsetHeight;k.forEach((function(e){e.addEventListener("keydown",(function(t){e.offsetHeight>=L&&8!=t.keyCode&&(t.target.removeChild(t.target.lastChild),t.preventDefault())}))})),w.subscribe("editablePaste",(function(e,t){document.querySelector(".container-content").offsetHeight+20>=L&&e.target.removeChild(e.target.lastChild)}));var E=document.querySelector(".center-cv .add-new-block"),S=document.querySelector(".center-cv .container-content");E.addEventListener("click",(function(e){var t=document.createElement("div");(t.className="row",t.innerHTML='\n<div class="col">\n<div class="header single-line" max-input="25">\n<h1>Header</h1>\n</div>\n<div class="body editable multi-line"> <p>Lorem ipsum dolor sit amet consectetur</p>\n</div>\n</div>\n<div class="options-list">\n<span class="badge rounded-pill text-dark text-white delete-block"><i\n  class="fas fa-minus"></i></span>\n</div>',t.style.visibility="hidden",S.appendChild(t),S.offsetHeight<=L)?(t.style.visibility="visible",v.destroy(),w.destroy(),setTimeout((function(){v.setup(),w.setup()}),500)):(t.remove(),new o.a.Modal(document.getElementById("modalBox"),{}).show())}));var q=document.querySelector(".sidebar-cv .add-new-block"),x=document.querySelector(".sidebar-cv .container-content");q.addEventListener("click",(function(e){var t=document.createElement("div");(t.className="row",t.innerHTML='\n<div class="col">\n<div class="header single-line" max-input="10">\n<h1>Header</h1>\n</div>\n<div class="body editable multi-line"> <p>Lorem ipsum dolor sit amet consectetur</p>\n</div>\n</div>\n<div class="options-list">\n<span class="badge rounded-pill text-dark text-white delete-block"><i\n  class="fas fa-minus"></i></span>\n</div>',t.style.visibility="hidden",x.appendChild(t),x.offsetHeight<=L)?(t.style.visibility="visible",v.destroy(),w.destroy(),setTimeout((function(){v.setup(),w.setup()}),500)):(t.remove(),new o.a.Modal(document.getElementById("modalBox"),{}).show())})),x.addEventListener("DOMNodeInserted",(function(){document.querySelectorAll(".delete-block").forEach((function(e){e.addEventListener("click",(function(){e.parentElement.parentElement.remove()}))}))}))}},[["pUim",6,1,0,9,3,4,5,7,8,10,13,14,11,2,12]]]);