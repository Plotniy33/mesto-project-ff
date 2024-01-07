(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{O:()=>t});var t=document.querySelector("#card-template").content,n=document.querySelector(".places__list"),r=document.querySelector(".profile__image"),o=document.querySelector(".popup_type_edit-avatar"),a=o.querySelector(".popup__form"),c=a.querySelector(".popup__input_type_url"),i=document.querySelector(".popup_type_image"),u=i.querySelector(".popup__image"),s=i.querySelector(".popup__caption"),l=document.querySelector(".profile__edit-button"),d=document.querySelector(".popup_type_edit"),p=document.forms["edit-profile"],f=document.querySelector(".profile__title"),m=document.querySelector(".profile__description"),v=p.elements.name,_=p.elements.description,y=document.querySelector(".profile__add-button"),h=document.querySelector(".popup_type_new-card"),b=document.forms["new-place"],S=b.elements["place-name"],L=b.elements.link,C={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},E={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-3",headers:{authorization:"a50e3a9c-4b1a-4eff-b4ae-05a27926bc6d","Content-Type":"application/json"}},g=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))};function q(e,t){return fetch("".concat(E.baseUrl)+e,t).then(g)}var k=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.textContent="",r.classList.remove(n.errorClass)},x=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},A=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);r.classList.add(t.inactiveButtonClass),r.disabled=!0,n.forEach((function(n){k(e,n,t),n.setCustomValidity("")}))};function w(e,n,r,o,a){var c=t.querySelector(".card").cloneNode(!0),i=c.querySelector(".card__image"),u=c.querySelector(".card__title"),s=c.querySelector(".card__like-counter");i.src=e.link,i.alt=e.name,u.textContent=e.name,s.textContent=e.likes.length;var l=c.querySelector(".card__delete-button");e.owner._id===n?l.addEventListener("click",(function(){r(e._id,c)})):l.remove();var d=c.querySelector(".card__like-button");return d.addEventListener("click",(function(t){o(t,e._id,s)})),e.likes.some((function(e){return e._id===n}))&&d.classList.add("card__like-button_is-active"),i.addEventListener("click",(function(){a(e)})),c}function O(e,t){(function(e){return q("/cards/".concat(e),{method:"DELETE",headers:E.headers})})(e).then((function(){t.remove()})).catch((function(e){console.err("Ошибка: ".concat(e))}))}function j(e,t,n){e.target.classList.contains("card__like-button_is-active")?function(e){return q("/cards/likes/".concat(e),{method:"DELETE",headers:E.headers})}(t).then((function(t){e.target.classList.remove("card__like-button_is-active"),n.textContent=t.likes.length})).catch((function(e){console.error("Ошибка: ".concat(e))})):function(e){return q("/cards/likes/".concat(e),{method:"PUT",headers:E.headers})}(t).then((function(t){e.target.classList.add("card__like-button_is-active"),n.textContent=t.likes.length})).catch((function(e){console.error("Ошибка: ".concat(e))}))}function T(e){e.classList.add("popup_is-animated"),setTimeout((function(){e.classList.add("popup_is-opened")}),1),e.addEventListener("mousedown",B),document.addEventListener("keydown",D)}function P(e){e.classList.remove("popup_is-opened"),e.removeEventListener("mousedown",B),document.removeEventListener("keydown",D)}function B(e){(e.target.classList.contains("popup__close")||e.target.classList.contains("popup_is-opened"))&&P(e.currentTarget)}function D(e){"Escape"===e.key&&P(document.querySelector(".popup_is-opened"))}var I,M=function(e,t){t.textContent=e?"Сохранение...":"Сохранить"};function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function U(e){u.src=e.link,u.alt=e.name,s.textContent=e.name,T(i)}!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);x(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?k(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),x(n,r,t)}))}))}(t,e)}))}(C),l.addEventListener("click",(function(){v.value=f.textContent,_.value=m.textContent,T(d),A(d,C)})),p.addEventListener("submit",(function(e){var t,n;e.preventDefault(),M(!0,e.submitter),(t=v.value,n=_.value,q("/users/me",{method:"PATCH",headers:E.headers,body:JSON.stringify({name:t,about:n})})).then((function(e){f.textContent=e.name,m.textContent=e.about,P(d)})).catch((function(e){console.error("Ошибка: ".concat(e))})).finally((function(){M(!1,e.submitter)}))})),y.addEventListener("click",(function(){b.reset(),T(h),A(b,C)})),b.addEventListener("submit",(function(e){var t,r;e.preventDefault(),M(!0,e.submitter),(t=S.value,r=L.value,q("/cards",{method:"POST",headers:E.headers,body:JSON.stringify({name:t,link:r})})).then((function(e){var t=w(e,I,O,j,U);n.prepend(t),P(h)})).catch((function(e){console.error("Ошибка: ".concat(e))})).finally((function(){M(!1,e.submitter)}))})),r.addEventListener("click",(function(){a.reset(),T(o),A(a,C)})),a.addEventListener("submit",(function(e){var t;e.preventDefault(),M(!0,e.submitter),(t=c.value,q("/users/me/avatar",{method:"PATCH",headers:E.headers,body:JSON.stringify({avatar:t})})).then((function(e){r.style.backgroundImage="url('".concat(e.avatar,"')"),P(o)})).catch((function(e){console.error("Ошибка: ".concat(e))})).finally((function(){M(!1,e.submitter)}))})),Promise.all([q("/cards",{headers:E.headers}),q("/users/me",{headers:E.headers})]).then((function(e){var t,o,a=(o=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,c,i=[],u=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(s)throw o}}return i}}(t,o)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(t,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=a[0],i=a[1];I=i._id,f.textContent=i.name,m.textContent=i.about,r.style.backgroundImage="url(\\".concat(i.avatar,")"),c.forEach((function(e){var t=w(e,I,O,j,U);n.append(t)}))})).catch((function(e){console.error("Ошибка: ".concat(e))}))})();