!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([,,function(e,t,n){n(3),e.exports=n(4)},function(e,t,n){"use strict"},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=n(5),s=o(i),a=n(6),r=o(a),c=n(7),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(c),l=n(8),d="activation",f="deactivation";(0,s.default)(function(){function e(e,t,s,a){var c=(0,r.default)(".os-license-key-meta",e);a.data.content&&c.html(a.data.content),a.data.success&&n(t,e),a.data.notices&&o(a.data.notices,e),a.data.nonce&&i(a.data.nonce,s)}function t(e,t,n){var i="";n.response?i=void 0!==n.response.data.content?n.response.data.content:"There was a problem with the ajax request. Returned status of: "+response.status:n.request?(console.log(n.request),i=n.request.response):i=n.message,o((0,l.noticeBuilder)("error",i,!1),e)}function n(e,t){u.config.debug&&console.log(e);var n=(0,r.default)(".js-license-submit",t),o=d===e?d+"-button":f+"-button",i=d===e?f+"-button":d+"-button",s=d===e?"os_license_key_deactivate":"os_license_key_activate",a=d===e?u.i18n.deactivateButtonText:u.i18n.activateButtonText;n.removeClass(o).addClass(i).attr("name",s).val(a)}function o(e,t){if("string"!=typeof e)throw u.config.debug&&console.log(e),new TypeError("Invalid notices type. Expected a string.");(0,r.default)(".os-license-notices",t).html(e)}function i(e,t){t.val(e)}(0,r.default)(".os-license-key-container").on("click",".js-license-submit",function(n){n.preventDefault(),n.stopPropagation();var o=(0,r.default)(this).data(),i=(0,r.default)(this).hasClass("activation-button")?d:f,s=(0,r.default)("#os_license_key_nonce_"+o.extension),a={action:"os_license_key_"+i,nonce:s.val(),license_key:(0,r.default)("#os-license-key-"+o.extension).val(),extension:o.extension},c="#os-license-key-container-"+o.extension,l=(0,r.default)(c),p=c+" .spinner";u.config.debug&&console.log(a),u.toggleAjaxSpinner(p),u.ajax(a,!0,function(t){u.toggleAjaxSpinner(p),e(l,i,s,t)},function(e){u.toggleAjaxSpinner(p),t(l,i,e)})})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){if("complete"===document.readyState)return e();document.addEventListener("DOMContentLoaded",e)};t.default=o},function(e,t){e.exports=jQuery},function(e,t){e.exports=osjs},function(e,t,n){"use strict";function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=n?" is-dismissible":"";if("string"!=typeof t)throw new TypeError("Incoming {message} variable should be a string.");if("string"!=typeof e)throw new TypeError("Incoming {type} variable should be a string.");return'<div class="notice '+e+o+'"><p>'+t+"</p></div>"}Object.defineProperty(t,"__esModule",{value:!0}),t.noticeBuilder=o}]);
//# sourceMappingURL=os-admin-settings.dist.js.map