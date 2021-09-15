!function(){"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var e=function(){function e(t,n,r,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._setCardData(t),this._userId=t.userId,this._handleCardClick=r,this._deleteConfirmPopup=o,this._template=n,this._api=i,this._removeCard=this._removeCard.bind(this)}var n,r;return n=e,(r=[{key:"_setCardData",value:function(t){this._name=t.name,this._link=t.link,this._likes=t.likes,this._id=t._id,this._ownerId=t.owner._id}},{key:"_toggleLike",value:function(){var t=this;this._api.toggleLike(this._id,this._isCardLiked()).then((function(e){t._setCardData(e),t._setLikeActive(t._isCardLiked()),t._setLikesCount()}))}},{key:"_isCardLiked",value:function(){var t=this;return this._likes.some((function(e){return e._id===t._userId}))}},{key:"_setLikeActive",value:function(t){t?this._likeButton.classList.add("like-button_active"):this._likeButton.classList.remove("like-button_active")}},{key:"_removeCard",value:function(){var t=this;return this._api.deleteCard(this._id).then((function(){t._cardElement.remove()}))}},{key:"_showRemoveConfirm",value:function(){this._deleteConfirmPopup.open(this._removeCard)}},{key:"_makeElement",value:function(){var t=document.querySelector(this._template).content;this._cardElement=t.querySelector(".card").cloneNode(!0),this._cardImage=this._cardElement.querySelector(".card__image"),this._likeButton=this._cardElement.querySelector(".like-button"),this._removeButton=this._cardElement.querySelector(".remove-button")}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){return t._toggleLike()})),this._removeButton.addEventListener("click",(function(){return t._showRemoveConfirm()})),this._cardImage.addEventListener("click",(function(){return t._handleCardClick(t._name,t._link)}))}},{key:"_setLikesCount",value:function(){this._cardElement.querySelector(".card__likes-count").innerText=this._likes.length}},{key:"renderCard",value:function(){return this._makeElement(),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardElement.querySelector(".card__title-text").innerText=this._name,this._setLikesCount(),this._setLikeActive(this._isCardLiked()),this._setEventListeners(),this._ownerId!==this._userId&&this._removeButton.remove(),this._cardElement}}])&&t(n.prototype,r),e}();function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var r=function(){function t(e,n,r,o){var i=e.items,s=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.items=i,this.renderer=s,this.parent=document.querySelector(n),this.addItem=this.addItem.bind(this),this.renderAll=this.renderAll.bind(this),this._userId=r,this._api=o}var e,r;return e=t,(r=[{key:"addItem",value:function(t){var e=this;return this._api.createCard(t).then((function(t){t.userId=e._userId,e.parent.prepend(e.renderer(t,e._api))}))}},{key:"renderAll",value:function(){var t=this;this.items.forEach((function(e){e.userId=t._userId,t.parent.append(t.renderer(e,t._api))}))}}])&&n(e.prototype,r),t}();function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var r=e.inputSelector,o=e.submitButtonSelector,i=e.inactiveButtonClass,s=e.inputErrorClass,u=e.errorClass,a=document.querySelector(n);this._inputList=Array.from(a.querySelectorAll(r)),this._submitButton=a.querySelector(o),this._inactiveButtonClass=i,this._inputErrorClass=s,this._errorClass=u,this._toggleButtonState=this._toggleButtonState.bind(this),this._showInputError=this._showInputError.bind(this),this._hideInputError=this._hideInputError.bind(this),this._hasInvalidInput=this._hasInvalidInput.bind(this),this._checkInputValidity=this._checkInputValidity.bind(this),this.resetValidation=this.resetValidation.bind(this),this.enableValidation=this.enableValidation.bind(this)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=t.nextElementSibling;t.classList.add(this._inputErrorClass),n.textContent=e,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t){var e=t.nextElementSibling;t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0):(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1)}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){return t._hideInputError(e)}))}},{key:"enableValidation",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}}])&&o(e.prototype,n),t}();function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.popup=document.querySelector(e),this.open=this.open.bind(this),this.close=this.close.bind(this),this._removeEventListeners=this._removeEventListeners.bind(this),this._setEventListeners=this._setEventListeners.bind(this),this._handleCLickAnyway=this._handleCLickAnyway.bind(this),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleCLickAnyway",value:function(t){t.target.classList.contains("popup_visible")&&this.close()}},{key:"_setEventListeners",value:function(){document.addEventListener("keydown",this._handleEscClose),this.popup.addEventListener("mousedown",this._handleCLickAnyway),this.popup.querySelector(".popup__close-button").addEventListener("click",this.close)}},{key:"_removeEventListeners",value:function(){document.removeEventListener("keydown",this._handleEscClose),this.popup.removeEventListener("mousedown",this._handleCLickAnyway),this.popup.querySelector(".popup__close-button").removeEventListener("click",this.close)}},{key:"open",value:function(){this.popup.classList.add("popup_visible"),this._setEventListeners()}},{key:"close",value:function(){this.popup.classList.remove("popup_visible"),this._removeEventListeners()}}])&&s(e.prototype,n),t}();function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e){if(e&&("object"===a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return h(t)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(s,t);var e,n,r,o,i=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(r);if(o){var n=d(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return p(this,t)});function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=i.call(this,t)).popupImage=e.popup.querySelector(".popup__image"),e.popupTitle=e.popup.querySelector(".popup__image-title"),e.open=e.open.bind(h(e)),e}return e=s,(n=[{key:"open",value:function(t,e){this.popupImage.src=e,this.popupImage.alt=t,this.popupTitle.textContent=t,l(d(s.prototype),"open",this).call(this)}}])&&c(e.prototype,n),s}(u);function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function E(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return g(t)}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(s,t);var e,n,r,o,i=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=w(r);if(o){var n=w(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return E(this,t)});function s(t,e,n){var r,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return _(this,s),(r=i.call(this,t)).form=r.popup.querySelector("form"),r.formSubmitHandler=n,r.beforeOpen=e,r.open=r.open.bind(g(r)),r.close=r.close.bind(g(r)),r._setEventListeners=r._setEventListeners.bind(g(r)),r._removeEventListeners=r._removeEventListeners.bind(g(r)),r._onFormSubmit=r._onFormSubmit.bind(g(r)),r._getInputValues=r._getInputValues.bind(g(r)),r._setInitialValues=r._getInputValues.bind(g(r)),r._submitButton=r.form.querySelector("button[type=submit]"),r.initialValues=o,r}return e=s,(n=[{key:"_setInitialValues",value:function(){var t=this;Object.keys(this.initialValues).length>0&&this.form.querySelectorAll("input").forEach((function(e){e.value=t.initialValues[e.name]}))}},{key:"_getInputValues",value:function(){var t=new FormData(this.form),e={};return t.forEach((function(t,n){e[n]=t})),e}},{key:"_onFormSubmit",value:function(t){var e=this;t.preventDefault();var n=this._submitButton.textContent;this._submitButton.textContent="Загрузка...";var r=this._getInputValues();try{this.formSubmitHandler(r).then((function(){e._submitButton.textContent=n,e.close()}))}catch(t){this.formSubmitHandler(r),this._submitButton.textContent=n,this.close()}}},{key:"_setEventListeners",value:function(){m(w(s.prototype),"_setEventListeners",this).call(this),this.form.addEventListener("submit",this._onFormSubmit)}},{key:"_removeEventListeners",value:function(){m(w(s.prototype),"_removeEventListeners",this).call(this),this.form.removeEventListener("submit",this._onFormSubmit)}},{key:"open",value:function(){this.beforeOpen&&this.beforeOpen(),this._setInitialValues(),m(w(s.prototype),"open",this).call(this)}},{key:"close",value:function(){this.form.reset(),m(w(s.prototype),"close",this).call(this)}}])&&b(e.prototype,n),s}(u);function S(t){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function I(t,e,n){return(I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function j(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return B(t)}function B(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(s,t);var e,n,r,o,i=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(r);if(o){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return j(this,t)});function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=i.call(this,t)).actionHandler=null,e.actionButton=e.popup.querySelector(".popup__save-button"),e.open=e.open.bind(B(e)),e._actionButtonClick=e._actionButtonClick.bind(B(e)),e}return e=s,(n=[{key:"_actionButtonClick",value:function(){try{this.actionHandler(),this.close()}catch(t){console.log(t)}}},{key:"close",value:function(){I(P(s.prototype),"close",this).call(this),this.actionButton.removeEventListener("click",this._actionButtonClick)}},{key:"open",value:function(t){I(P(s.prototype),"open",this).call(this),this.actionHandler=t,this.actionButton.addEventListener("click",this._actionButtonClick)}}])&&L(e.prototype,n),s}(u);function R(t){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var V=function(){function t(e,n,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.title=document.querySelector(e),this.subtitle=document.querySelector(n),this.avatar=document.querySelector(r),this.getUserInfo=this.getUserInfo.bind(this),this.setUserInfo=this.setUserInfo.bind(this),this.setUserAvatar=this.setUserAvatar.bind(this),this._api=o}var e,n;return e=t,(n=[{key:"_setUserFields",value:function(t){var e=t.name,n=t.about,r=t.avatar;this.title.textContent=e,this.subtitle.textContent=n,this.avatar.src=r}},{key:"fetchUserInfo",value:function(){var t=this;return this._api.getUserProfile().then((function(e){if("object"===R(e)){var n=e._id;return t._setUserFields(e),n}}))}},{key:"getUserInfo",value:function(){return{title:this.title.textContent,subtitle:this.subtitle.textContent,avatar:this.avatar.src}}},{key:"setUserInfo",value:function(t){var e=this,n=t.title,r=t.subtitle;return this._api.updateProfile({name:n,about:r}).then((function(){e.title.textContent=n,e.subtitle.textContent=r}))}},{key:"setUserAvatar",value:function(t){var e=this,n=t.avatar;return this._api.updateAvatar({avatar:n}).then((function(){e.avatar.src=n}))}}])&&T(e.prototype,n),t}();function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var x={inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function U(t){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var D=new(function(){function t(e){var n=e.baseUrl,r=e.accessToken;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseUrl=n,this.requestHeaders={"Content-Type":"application/json",authorization:r}}var e,n;return e=t,(n=[{key:"_prepareResponse",value:function(t){if(t.ok)return t.json();t.json().then((function(t){return Promise.reject("Ошибка: ".concat(t.message))}))}},{key:"_prepareError",value:function(t){return t.message}},{key:"_doRequest",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=this.baseUrl+t,i={method:n,headers:this.requestHeaders};return r&&(i.body=JSON.stringify(r)),fetch(o,i).then((function(t){return e._prepareResponse(t)})).catch((function(t){return e._prepareError(t)}))}},{key:"getUserProfile",value:function(){return this._doRequest("/users/me")}},{key:"getCards",value:function(){return this._doRequest("/cards")}},{key:"toggleLike",value:function(t,e){return this._doRequest("/cards/likes/".concat(t),e?"DELETE":"PUT")}},{key:"createCard",value:function(t){return this._doRequest("/cards","POST",t)}},{key:"deleteCard",value:function(t){return this._doRequest("/cards/".concat(t),"DELETE")}},{key:"updateProfile",value:function(t){return this._doRequest("/users/me","PATCH",t)}},{key:"updateAvatar",value:function(t){return console.log("WE HERE"),this._doRequest("/users/me/avatar","PATCH",t)}}])&&A(e.prototype,n),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-27",accessToken:"815301eb-e78e-456d-b945-5a0b4eb50195"}),H=document.querySelector(".profile__edit-button"),F=document.querySelector(".profile__add-button"),N=document.querySelector(".popup__edit-profile"),z=document.querySelector(".popup__edit-avatar"),G=document.querySelector(".profile__avatar"),J=new V(".profile__title",".profile__subtitle",".profile__avatar-image",D),M=new i(x,".popup__edit-profile"),W=new i(x,".popup__add-card"),K=new i(x,".popup__edit-avatar");M.enableValidation(),W.enableValidation(),K.enableValidation();var Q=new y("#show-card-popup"),X=new q("#delete-confirm"),Y=function(t,n){return new e(t,"#card",Q.open,X,n).renderCard()};J.fetchUserInfo().then((function(t){D.getCards().then((function(e){if("object"===U(e)){var n=new r({items:e,renderer:Y},".cards__list",t,D),o=new C("#add-card-popup",W.resetValidation,n.addItem);F.addEventListener("click",o.open),n.renderAll()}}))}));var Z=new C("#profile-popup",(function(){M.resetValidation();var t=J.getUserInfo();N.querySelectorAll("input").forEach((function(e){e.value=t[e.name]}))}),J.setUserInfo),$=new C("#edit-avatar",(function(){K.resetValidation();var t=J.getUserInfo();z.querySelectorAll("input").forEach((function(e){e.value=t[e.name]}))}),J.setUserAvatar);H.addEventListener("click",Z.open),G.addEventListener("click",$.open),document.body.classList.remove("preload")}();