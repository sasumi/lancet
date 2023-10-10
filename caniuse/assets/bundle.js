/*! For license information please see bundle.js.LICENSE?db8bc3412ef78da23967 */
!function(e){function t(t){for(var r,s,n=t[0],o=t[1],a=0,c=[];a<n.length;a++)s=n[a],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&c.push(i[s][0]),i[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(l&&l(t);c.length;)c.shift()()}var r={},i={1:0};function s(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.e=function(e){var t=[],r=i[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,s){r=i[e]=[t,s]}));t.push(r[2]=n);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.src=function(e){return s.p+""+({0:"browserslist.module",2:"ciu-browserset-select",3:"ciu-comparison",4:"ciu-settings",5:"ciu-stats-import",6:"home.css",7:"index.css"}[e]||e)+".js?"+{0:"7b1fb619f1247f1e416e",2:"f6deecce65de51261c9d",3:"f059276fb52d52fc64fe",4:"5ad2f3563bee13673af5",5:"d3e45cb16ed0847f93bd",6:"22d3c2060d275e4c1fd4",7:"7f561f496ad2ad077706"}[e]}(e);var l=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(c);var r=i[e];if(0!==r){if(r){var s=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",l.name="ChunkLoadError",l.type=s,l.request=n,r[1](l)}i[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(r,i,function(t){return e[t]}.bind(null,i));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/js/",s.oe=function(e){throw console.error(e),e};var n=window.webpackJsonp=window.webpackJsonp||[],o=n.push.bind(n);n.push=t,n=n.slice();for(var a=0;a<n.length;a++)t(n[a]);var l=o;s(s.s=55)}([function(e,t,r){"use strict";r.d(t,"d",(function(){return k})),r.d(t,"c",(function(){return d.c})),r.d(t,"b",(function(){return C})),r.d(t,"a",(function(){return R}));var i=r(18),s=r(11);function n(e,t){const{element:{content:r},parts:i}=e,s=document.createTreeWalker(r,133,null,!1);let n=a(i),o=i[n],l=-1,c=0;const u=[];let d=null;for(;s.nextNode();){l++;const e=s.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(u.push(e),null===d&&(d=e)),null!==d&&c++;void 0!==o&&o.index===l;)o.index=null!==d?-1:o.index-c,n=a(i,n),o=i[n]}u.forEach(e=>e.parentNode.removeChild(e))}const o=e=>{let t=11===e.nodeType?0:1;const r=document.createTreeWalker(e,133,null,!1);for(;r.nextNode();)t++;return t},a=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const t=e[r];if(Object(s.d)(t))return r}return-1};var l=r(27),c=r(25),u=r(30),d=r(6);const h=(e,t)=>`${e}--${t}`;let p=!0;void 0===window.ShadyCSS?p=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),p=!1);const f=e=>t=>{const r=h(t.type,e);let i=c.a.get(r);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},c.a.set(r,i));let n=i.stringsArray.get(t.strings);if(void 0!==n)return n;const o=t.strings.join(s.f);if(n=i.keyString.get(o),void 0===n){const r=t.getTemplateElement();p&&window.ShadyCSS.prepareTemplateDom(r,e),n=new s.a(t,r),i.keyString.set(o,n)}return i.stringsArray.set(t.strings,n),n},g=["html","svg"],m=new Set,b=(e,t,r)=>{m.add(e);const i=r?r.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:l}=s;if(0===l)return void window.ShadyCSS.prepareTemplateStyles(i,e);const u=document.createElement("style");for(let e=0;e<l;e++){const t=s[e];t.parentNode.removeChild(t),u.textContent+=t.textContent}(e=>{g.forEach(t=>{const r=c.a.get(h(t,e));void 0!==r&&r.keyString.forEach(e=>{const{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{r.add(e)}),n(e,r)})})})(e);const d=i.content;r?function(e,t,r=null){const{element:{content:i},parts:s}=e;if(null==r)return void i.appendChild(t);const n=document.createTreeWalker(i,133,null,!1);let l=a(s),c=0,u=-1;for(;n.nextNode();){for(u++,n.currentNode===r&&(c=o(t),r.parentNode.insertBefore(t,r));-1!==l&&s[l].index===u;){if(c>0){for(;-1!==l;)s[l].index+=c,l=a(s,l);return}l=a(s,l)}}}(r,u,d.firstChild):d.insertBefore(u,d.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const p=d.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==p)t.insertBefore(p.cloneNode(!0),t.firstChild);else if(r){d.insertBefore(u,d.firstChild);const e=new Set;e.add(u),n(r,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const v={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},y=(e,t)=>t!==e&&(t==t||e==e),w={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y};class x extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,r)=>{const i=this._attributeNameForProperty(r,t);void 0!==i&&(this._attributeToPropertyMap.set(i,r),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=w){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const r="symbol"==typeof e?Symbol():`__${e}`,i=this.getPropertyDescriptor(e,r,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){const s=this[e];this[t]=i,this.requestUpdateInternal(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||w}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const r of t)this.createProperty(r,e[r])}}static _attributeNameForProperty(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=y){return r(e,t)}static _propertyValueFromAttribute(e,t){const r=t.type,i=t.converter||v,s="function"==typeof i?i:i.fromAttribute;return s?s(e,r):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const r=t.type,i=t.converter;return(i&&i.toAttribute||v.toAttribute)(e,r)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=w){const i=this.constructor,s=i._attributeNameForProperty(e,r);if(void 0!==s){const e=i._propertyValueToAttribute(t,r);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(s):this.setAttribute(s,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const r=this.constructor,i=r._attributeToPropertyMap.get(e);if(void 0!==i){const e=r.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=r._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,r){let i=!0;if(void 0!==e){const s=this.constructor;r=r||s.getPropertyOptions(e),s._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}x.finalized=!0;const S=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}}:Object.assign(Object.assign({},t),{finisher(r){r.createProperty(t.key,e)}});function k(e){return(t,r)=>void 0!==r?((e,t,r)=>{t.constructor.createProperty(r,e)})(e,t,r):S(e,t)}const O=Element.prototype;O.msMatchesSelector||O.webkitMatchesSelector;const _=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,E=Symbol();class j{constructor(e,t){if(t!==E)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(_?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const C=(e,...t)=>{const r=t.reduce((t,r,i)=>t+(e=>{if(e instanceof j)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[i+1],e[0]);return new j(r,E)};(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const T={};class R extends x{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,r)=>e.reduceRight((e,r)=>Array.isArray(r)?t(r,e):(e.add(r),e),r),r=t(e,new Set),i=[];r.forEach(e=>i.unshift(e)),this._styles=i}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!_){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new j(String(t),E)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?_?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==T&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return T}}R.finalized=!0,R.render=(e,t,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const s=r.scopeName,n=l.a.has(t),o=p&&11===t.nodeType&&!!t.host,a=o&&!m.has(s),c=a?document.createDocumentFragment():t;if(Object(l.b)(e,c,Object.assign({templateFactory:f(s)},r)),a){const e=l.a.get(c);l.a.delete(c);const r=e.value instanceof u.a?e.value.template:void 0;b(s,c,r),Object(i.b)(t,t.firstChild),t.appendChild(c),l.a.set(t,e)}!n&&o&&window.ShadyCSS.styleElement(t.host)}},function(e,t,r){"use strict";var i=r(44),s=function(){return Math.random().toString(36).substring(7).split("").join(".")},n={INIT:"@@redux/INIT"+s(),REPLACE:"@@redux/REPLACE"+s(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+s()}};function o(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function a(e,t,r){var s;if("function"==typeof t&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(a)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var l=e,c=t,u=[],d=u,h=!1;function p(){d===u&&(d=u.slice())}function f(){if(h)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return c}function g(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(h)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return p(),d.push(e),function(){if(t){if(h)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,p();var r=d.indexOf(e);d.splice(r,1)}}}function m(e){if(!o(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(h)throw new Error("Reducers may not dispatch actions.");try{h=!0,c=l(c,e)}finally{h=!1}for(var t=u=d,r=0;r<t.length;r++){(0,t[r])()}return e}function b(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");l=e,m({type:n.REPLACE})}function v(){var e,t=g;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function r(){e.next&&e.next(f())}return r(),{unsubscribe:t(r)}}})[i.a]=function(){return this},e}return m({type:n.INIT}),(s={dispatch:m,subscribe:g,getState:f,replaceReducer:b})[i.a]=v,s}function l(e,t){var r=t&&t.type;return"Given "+(r&&'action "'+String(r)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function c(e){for(var t=Object.keys(e),r={},i=0;i<t.length;i++){var s=t[i];0,"function"==typeof e[s]&&(r[s]=e[s])}var o,a=Object.keys(r);try{!function(e){Object.keys(e).forEach((function(t){var r=e[t];if(void 0===r(void 0,{type:n.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===r(void 0,{type:n.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+n.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(r)}catch(e){o=e}return function(e,t){if(void 0===e&&(e={}),o)throw o;for(var i=!1,s={},n=0;n<a.length;n++){var c=a[n],u=r[c],d=e[c],h=u(d,t);if(void 0===h){var p=l(c,t);throw new Error(p)}s[c]=h,i=i||h!==d}return i?s:e}}var u=r(3),d=r(5),h=r(17);function p(e,t){let r={feats:[],showSavedFeats:!1,search:"",comparison:"",cats:d.a,statuses:d.a};return Object.assign({},e,r,t)}function f(e=""){return e}function g(e=[]){return e}function m(e=[]){return e}function b(e=d.a){return e}function v(e=d.a){return e}function y(e=""){return e}function w(e=""){return e}function x(e=d.a){return e}function S(e=!0,t){return t.type===u.x?t.enabled:e}function k(e=!1,t){return t.type===u.g?t.enabled:e}function O(e=!1,t){return t.type===u.y?t.enabled:e}function _(e=!1,t){return t.type===u.s?t.enabled:e}function E(e=d.d.NORMAL,t){return t.type===u.w?t.mode:e}function j(e=d.c.ALL,t){return t.type===u.t?t.mode:e}function C(e={},t){if(t.type===u.b){let r=t.usageData;return Object.assign({},e,{[r.id]:r})}if(t.type===u.f){let r=Object.assign({},e);return delete r[t.uid],r}return e}function T(e="region.global",t){return t.type===u.q?t.usageId:e}function R(e="default",t){return t.type===u.v?t.theme:e}function A(e="default",t){return t.type===u.h?t.browserOrder:e}function N(e=h.a,t){return t.type===u.p?t.browsersetId:e}function P(e="",t){return t.type===u.l?t.browsersetId||"":e}var $=function(e,t){switch(t.type){case u.m:return function(e,t){return p(e,{page:u.d.TABLES,feats:t.feats})}(e,t);case u.r:return function(e,t){return p(e,{page:u.d.TABLES,search:t.search})}(e,t);case u.i:return function(e,t){return p(e,{page:u.d.TABLES,cats:t.cats,statuses:e.statuses})}(e,t);case u.u:return function(e,t){return p(e,{page:u.d.TABLES,cats:e.cats,statuses:t.statuses})}(e,t);case u.c:return function(e,t){return p(e,{page:t.page})}(e,t);case u.j:return function(e,t){return p(e,{page:u.d.COMPARISON,comparison:t.comparison.replace(/ /g,"+"),comparisonCats:t.comparisonCats||e.comparisonCats})}(e,t);case u.k:return function(e,t){return p(e,{page:u.d.COMPARISON,comparison:e.comparison,comparisonCats:t.cats})}(e,t);case u.n:return function(e,t){return Object.assign({},e,{page:u.d.TABLES,featureSort:t.featureSort})}(e,t);case u.o:return function(e,t){return Object.assign({},e,{page:u.d.TABLES,cats:t.categories,statuses:t.statuses,featureSort:t.featureSort})}(e,t);case u.l:return function(e,t){return Object.assign({},e,{page:u.d.BROWSERSET,editedBrowserset:t.browserset||""})}(e,t);case u.a:return function(e,t){if(t.type===u.a){let r=Object.assign({},e);return r.savedFeats=[...e.savedFeats,t.feat],r}return e}(e,t);case u.e:return function(e,t){if(t.type===u.e){let r=Object.assign({},e);return r.savedFeats=r.savedFeats.filter(e=>e!==t.feat),r}return e}(e,t);case u.y:return function(e,t){return p(e,{page:u.d.TABLES,showSavedFeats:t.enabled})}(e,t);default:return c({page:f,feats:g,savedFeats:m,showSavedFeats:O,search:y,cats:b,statuses:v,comparison:w,comparisonCats:x,accessibleColors:k,showNewerVersions:S,showFullPrefix:_,viewMode:E,showMode:j,featureSort:(e="pubdate")=>e,usageData:C,theme:R,browserOrder:A,primaryUsage:T,primaryBrowserset:N,editedBrowserset:P})(e,t)}},M=r(2),B=r(12);const L=function(){let e,t=Object(M.o)("state");t&&(e=JSON.parse(t));let r=B.a.getStored();r&&e&&(e.usageData=r);let i=$(void 0,{type:"initial"});return Object.assign(i,e),i}();var D;D=L?a($,L):a($);t.a=D;D.subscribe(()=>{let e=D.getState();try{localStorage.setItem("state",JSON.stringify({savedFeats:e.savedFeats,usageData:e.usageData,primaryUsage:e.primaryUsage,primaryBrowserset:e.primaryBrowserset,browserOrder:e.browserOrder,includeCurrent:e.includeCurrent,viewMode:e.viewMode,showMode:e.showMode,theme:e.theme,accessibleColors:e.accessibleColors}))}catch(e){}})},function(e,t,r){"use strict";r.d(t,"g",(function(){return u})),r.d(t,"h",(function(){return d})),r.d(t,"k",(function(){return h})),r.d(t,"m",(function(){return p})),r.d(t,"i",(function(){return g})),r.d(t,"a",(function(){return m})),r.d(t,"n",(function(){return b})),r.d(t,"j",(function(){return v})),r.d(t,"p",(function(){return y})),r.d(t,"o",(function(){return w})),r.d(t,"c",(function(){return x})),r.d(t,"d",(function(){return S})),r.d(t,"f",(function(){return k})),r.d(t,"l",(function(){return O})),r.d(t,"e",(function(){return _})),r.d(t,"b",(function(){return E}));var i=r(9);const s={regexobject:{lists:/^((\s*((\*|\-)|\d(\.|\))) [^\n]+)\n)+/gm,code:/`(.*?)`/g,bolditalic:/(?: ([\*_~]{1,3}))([^\*_~\n]+[^\*_~\s])\1/g,links:/!?\[([^\]<>]+)\]\(([^ \)<>]+)( "[^\(\)\"]+")?\)/g,url:/<([a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[\-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?)>/g},parse:function(e,t){var r,i,n,o,a,l,c,u,d=0,h=0,p=0;for(e="\n"+e+"\n",!0!==t&&(s.regexobject.lists=/^((\s*(\*|\d\.) [^\n]+)\n)+/gm);null!==(c=s.regexobject.lists.exec(e));){for(h=0,l="*"===c[0].trim().substr(0,1)||"-"===c[0].trim().substr(0,1)?"<ul>":"<ol>",o=c[0].split("\n"),a=[],i=0,n=!1,p=0;p<o.length;p++)if(null!==(r=/^((\s*)((\*|\-)|\d(\.|\))) ([^\n]+))/.exec(o[p]))){for(void 0===r[2]||0===r[2].length?d=0:(!1===n&&(n=r[2].replace(/\t/,"    ").length),d=Math.round(r[2].replace(/\t/,"    ").length/n));i>d;)l+=a.pop(),i--,h--;for(;i<d;)"*"===r[0].trim().substr(0,1)||"-"===r[0].trim().substr(0,1)?(l+="<ul>",a.push("</ul>")):(l+="<ol>",a.push("</ol>")),i++,h++;l+="<li>"+r[6]+"</li>\n"}for(;h>0;)l+="</ul>",h--;"*"===c[0].trim().substr(0,1)||"-"===c[0].trim().substr(0,1)?l+="</ul>":l+="</ol>",e=e.replace(c[0],l+"\n")}for(p=0;p<3;p++)for(;null!==(c=s.regexobject.bolditalic.exec(e));)if(l=[],"~~"===c[1])e=e.replace(c[0],"<del>"+c[2]+"</del>");else{switch(c[1].length){case 1:l=[" <i>","</i>"];break;case 2:l=[" <b>","</b>"];break;case 3:l=[" <i><b>","</b></i>"]}e=e.replace(c[0],l[0]+c[2]+l[1])}for(;null!==(c=s.regexobject.links.exec(e));)if("!"===c[0].substr(0,1))e=e.replace(c[0],'<img src="'+c[2]+'" alt="'+c[1]+'" title="'+c[1]+'" />');else{var f=document.createElement("a");f.setAttribute("href",unescape(c[2])),f.innerText=(u=c[1],(new DOMParser).parseFromString(u,"text/html").documentElement.textContent),e=e.replace(c[0],f.outerHTML)}for(;null!==(c=s.regexobject.url.exec(e));)-1===(l=c[1]).indexOf("://")&&(l="http://"+l),e=e.replace(c[0],"<a "+s.mmdCSSclass(l,t)+'href="'+l+'">'+l.replace(/(https:\/\/|http:\/\/|mailto:|ftp:\/\/)/gim,"")+"</a>");for(;null!==(c=s.regexobject.code.exec(e));)e=e.replace(c[0],"<code>"+c[1]+"</code>");return(e=(e=e.replace(/^\n|\n$/g,"")).replace(/[\n]{2,}/gim,"<br/><br/>")).indexOf("\n")>-1&&(e="<p>"+e.replace(/\n/gim,"</p><p>")+"</p>"),e},htmlEncode:function(e){var t=document.createElement("div");return t.appendChild(document.createTextNode(e)),e=t.innerHTML,t=void 0,e},mmdCSSclass:function(e,t){return""}};var n=s,o=r(6),a=r(14);const l=new WeakMap,c=Object(o.b)(e=>t=>{if(!(t instanceof o.a))throw new Error("unsafeHTML can only be used in text bindings");const r=l.get(t);if(void 0!==r&&Object(a.f)(e)&&e===r.value&&t.value===r.fragment)return;const i=document.createElement("template");i.innerHTML=e;const s=document.importNode(i.content,!0);t.setValue(s),l.set(t,{value:e,fragment:s})});function u(e,t){return(t||document).querySelector(e)}function d(e,t){return(t||document).querySelectorAll(e)}function h(e){let{x:t,y:r,width:i,height:s}=e.getBoundingClientRect(),n=t+i,o=r+s;return{x:t,y:r,width:i,height:s,x2:n,y2:o,bottom:window.innerHeight-o,right:window.innerWidth-n,centerX:t+i/2,centerY:r+s/2}}function p(e,t,r,s){var n=e?document.createElement(e):document.createDocumentFragment();if(t)for(var o in t)n.setAttribute(o,t[o]);if(null!=r&&i.a.append(n,r),s)for(var a in s)n.addEventListener(a,s[a],!1);return n}function f(e){var t=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}(e);return n.parse(t)}function g(e){return c(f(e))}function m(e,t){var r=new XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState)if(200===r.status)t.success(r.responseText,r);else{if(!t.error)throw new Error("Failed to XHR: "+e);t.error(r.responseText,r)}},r.open(t.method||"GET",e,!0),"POST"==t.method&&r.setRequestHeader("Content-type","application/x-www-form-urlencoded"),r.send(t.data)}function b(e,t){return t=t||2,+e.toFixed(t)}function v(e){var t={};return e.replace(new RegExp("([^=&]+)(=([^&]*))?","g"),(function(e,r,i,s){t[r]=decodeURIComponent(s)})),t}function y(e,t){if(j.localStorage)try{localStorage.setItem(e,t)}catch(e){}}function w(e){if(j.localStorage)try{return localStorage.getItem(e)||null}catch(e){}return null}function x(e,t,r){var i;return function(...s){var n=this,o=r&&!i;clearTimeout(i),i=setTimeout((function(){i=null,r||e.apply(n,s)}),t),o&&e.apply(n,s)}}function S(e){if(e.getElementById("__SVG_SPRITE_NODE__"))return;let t=document.getElementById("__SVG_SPRITE_NODE__");e.prepend(t.cloneNode(!0))}function k(e,t,r){let i=e,s=t,n="";if("Android Browser"===e)0===r?i="Android 5-6.x WebView: Chromium":(i="Android",n="browser");else if("Safari on iOS"===e)i="Safari & other browsers on iOS ";else if("Opera Mini"===e)s="";else if("Opera Mobile"===e)t>13&&(i="Opera",n=" for Android");else if(e.includes(" for Android")){i=e.replace(" for Android",""),n=" for Android"}else"Safari"===e&&"TP"===t&&(i="Safari Technology Preview",s="");return{name:i,version:s,suffix:n}}function O(e){return new Promise((t,r)=>{const i=p("script",{src:e},null,{load:t,error:r});document.head.appendChild(i)})}function _(...e){let{name:t,version:r,suffix:i}=k.apply(this,arguments);return`${t} ${r} ${i}`}function E(e,t){return["text-stroke","css-line-clamp"].indexOf(t)>-1?"webkit":e}Object(o.b)(e=>t=>{const{name:r,element:i}=t.committer;e!==i[r]&&t.setValue(e)});const j={localStorage:!1};try{j.localStorage="object"==typeof window.localStorage}catch(e){}},function(e,t,r){"use strict";r.d(t,"c",(function(){return s})),r.d(t,"y",(function(){return n})),r.d(t,"m",(function(){return o})),r.d(t,"a",(function(){return a})),r.d(t,"e",(function(){return l})),r.d(t,"i",(function(){return c})),r.d(t,"k",(function(){return u})),r.d(t,"u",(function(){return d})),r.d(t,"r",(function(){return h})),r.d(t,"j",(function(){return p})),r.d(t,"n",(function(){return f})),r.d(t,"o",(function(){return g})),r.d(t,"g",(function(){return m})),r.d(t,"x",(function(){return b})),r.d(t,"s",(function(){return v})),r.d(t,"w",(function(){return y})),r.d(t,"t",(function(){return w})),r.d(t,"h",(function(){return x})),r.d(t,"b",(function(){return S})),r.d(t,"f",(function(){return k})),r.d(t,"v",(function(){return O})),r.d(t,"q",(function(){return _})),r.d(t,"p",(function(){return E})),r.d(t,"l",(function(){return j})),r.d(t,"d",(function(){return C})),r.d(t,"A",(function(){return T})),r.d(t,"Q",(function(){return R})),r.d(t,"I",(function(){return A})),r.d(t,"B",(function(){return N})),r.d(t,"M",(function(){return P})),r.d(t,"z",(function(){return $})),r.d(t,"C",(function(){return M})),r.d(t,"S",(function(){return B})),r.d(t,"J",(function(){return L})),r.d(t,"H",(function(){return D})),r.d(t,"D",(function(){return I})),r.d(t,"N",(function(){return F})),r.d(t,"E",(function(){return U})),r.d(t,"L",(function(){return V})),r.d(t,"K",(function(){return H})),r.d(t,"F",(function(){return z})),r.d(t,"V",(function(){return q})),r.d(t,"U",(function(){return W})),r.d(t,"R",(function(){return G})),r.d(t,"T",(function(){return K})),r.d(t,"G",(function(){return J})),r.d(t,"P",(function(){return Y})),r.d(t,"O",(function(){return Q}));var i=r(5);const s="CHANGE_PAGE",n="TOGGLE_SHOW_SAVED_FEATS",o="SET_FEATS",a="ADD_SAVED_FEAT",l="REMOVE_SAVED_FEAT",c="SET_CATS",u="SET_COMPARISON_CATS",d="SET_STATUSES",h="SET_SEARCH",p="SET_COMPARISON",f="SET_FEATURE_SORT",g="SET_FILTER",m="TOGGLE_ACCESSIBLE_COLORS",b="TOGGLE_SHOW_NEWER_VERSIONS",v="SET_SHOW_FULL_PREFIX",y="SET_VIEW_MODE",w="SET_SHOW_MODE",x="SET_BROWSER_ORDER",S="ADD_USAGE_DATA",k="REMOVE_USAGE_DATA",O="SET_THEME",_="SET_PRIMARY_USAGE",E="SET_PRIMARY_BROWSERSET",j="SET_EDITED_BROWSERSET";var C;function T(e){return{type:s,page:e}}function R(e){return{type:h,search:e}}function A(e,t){return{type:p,comparison:e,comparisonCats:t}}function N(e){return{type:j,browserset:e}}function P(e){return{type:o,feats:e}}function $(e){return{type:a,feat:e}}function M(e){return{type:l,feat:e}}function B(e){return{type:d,statuses:e}}function L(e){return{type:u,cats:e}}function D(e){return{type:c,cats:e}}function I(){return{type:c,cats:i.a}}function F(e,t,r){return{type:g,categories:e,statuses:t,featureSort:r}}function U(){return{type:d,statuses:i.a}}function V(e){return{type:y,mode:e}}function H(e){return{type:w,mode:e}}function z(e){return{type:m,enabled:e}}function q(e){return{type:n,enabled:e}}function W(e){return{type:b,enabled:e}}function G(e){return{type:v,enabled:e}}function K(e){return{type:O,theme:e}}function J(e){return{type:x,browserOrder:e}}function Y(e){return{type:_,usageId:e}}function Q(e){return{type:E,browsersetId:e}}!function(e){e.HOME="home",e.TABLES="tables",e.SETTINGS="settings",e.NEWS="news",e.IMPORT="import",e.BROWSERSET="browserset",e.COMPARISON="comparison",e.ABOUT="about",e.INDEX="index"}(C||(C={}))},function(e,t,r){"use strict";let i={};var s=function(e,t,r=this){return i[e]||(i[e]=[]),i[e].push({context:r,callback:t}),this},n=function(e,...t){if(!i[e])return!1;for(var r=0,s=i[e].length;r<s;r++){var n=i[e][r];0,n.callback.apply(n.context,t)}return this};const o={channels:i,publish:n,subscribe:s,installTo:function(e){e.subscribe=s,e.publish=n}};t.a=o},function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s})),r.d(t,"g",(function(){return n})),r.d(t,"h",(function(){return o})),r.d(t,"f",(function(){return a})),r.d(t,"e",(function(){return l})),r.d(t,"d",(function(){return c})),r.d(t,"c",(function(){return u}));const i="all";const s=864e5,n={pubdate:"Publication date",score:"Most supported first",rscore:"Least support first",alpha:"Alphabetical",ralpha:"Reverse Alphabetical"},o={y:"✓ Supported",n:"✗ Not supported",d:"✗ Not supported by default, but can be enabled",u:"? Support unknown",a:"~ Partial support",p:"✗ Not supported, but has polyfill available"},a={CD:"Congo (DRC)",CG:"Congo (Republic)",FK:"Falkland Islands",GB:"U.K.",US:"U.S.A.",VA:"Vatican City",VC:"St. Vincent"},l={edge:"\n        Early version number used for Edge is based on the number\n        of EdgeHTML. Since version 79 Edge started using Chromium\n        and so the number matches the Chromium version used.\n    ",ios_saf:"As all iOS browsers use the same version of WebKit on the OS, support is identified based on iOS version rather than any particular browser version.",android:"Android browser/WebView version numbers through 4.4 refer to the version of Android OS. Support listed is for the Android core; it should be noted that many hardware vendors (Samsung, HTC, etc.) use altered version of their default browser which may include [more/less/buggy support](http://slides.com/html5test/the-android-browser#/).\n\nStarting in Android 5, the web engine can be updated separately, so the latest Chromium version number is used instead.",op_mini:'Opera Mini is primarily used on feature phones with processing done based on Opera 12.1 via Opera servers. To test on iOS/Android this mode can be enabled using "Extreme data savings"',op_mob:'On Android, Opera Mobile is currently known as "Opera Classic" for version 12.1 and simply "Opera" for later versions.'};var c,u;!function(e){e.NORMAL="view-mode-normal",e.USAGE_RELATIVE="view-mode-usage_relative",e.DATE_RELATIVE="view-mode-date_relative"}(c||(c={})),function(e){e.ALL="show-mode-all",e.FILTERED="show-mode-filtered"}(u||(u={}))},function(e,t,r){"use strict";r.d(t,"b",(function(){return o.a})),r.d(t,"a",(function(){return i.d})),r.d(t,"d",(function(){return a.b})),r.d(t,"c",(function(){return l}));var i=r(14);const s=new class{handleAttributeExpressions(e,t,r,s){const n=t[0];if("."===n){return new i.e(e,t.slice(1),r).parts}return"@"===n?[new i.c(e,t.slice(1),s.eventContext)]:"?"===n?[new i.b(e,t.slice(1),r)]:new i.a(e,t,r).parts}handleTextExpression(e){return new i.d(e)}};var n=r(29),o=r(26),a=(r(18),r(16),r(27));r(25),r(30),r(11);"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const l=(e,...t)=>new n.b(e,t,"html",s)},function(e,t,r){"use strict";r.d(t,"a",(function(){return R})),r.d(t,"e",(function(){return B})),r.d(t,"l",(function(){return I})),r.d(t,"i",(function(){return F})),r.d(t,"f",(function(){return U})),r.d(t,"g",(function(){return V})),r.d(t,"j",(function(){return H})),r.d(t,"h",(function(){return z})),r.d(t,"k",(function(){return q})),r.d(t,"m",(function(){return W})),r.d(t,"n",(function(){return G})),r.d(t,"b",(function(){return K})),r.d(t,"d",(function(){return J}));var i=r(4),s=r(19),n=r(17),o=r(1);var a=class{constructor(){}getBrowsers(){const{browserOrder:e,primaryUsage:t}=o.a.getState();return"default"===e?R.ALL_BROWSERS:Array.from(R.ALL_BROWSERS).sort((e,r)=>e.getUsage(t)>r.getUsage(t)?-1:1)}eachBrowser(e){for(let t of R.ALL_BROWSERS)e(t)}eachOfType(e,t){for(let r of R.ALL_BROWSERS)r.type===e&&t(r,e)}readBrowserSet(e){for(const t of R.ALL_BROWSERS)t.readBrowserSet(e)}getFilteredBrowsers(e){let t;return t=e&&e.name===n.c?n.c:o.a.getState().primaryBrowserset,this.getBrowsers().filter(e=>e.filterByBrowserSet(t))}getMissingUsage(){var e=0;for(var t in this.browsersById){e+=this.browsersById[t].getMissingUsage()}i.a.publish("missingUsageUpdate",e)}init(e){this.browsersById=e}},l=r(46),c=r.n(l),u=r(13),d=r(20),h=c.a.subclass({constructor:function(){this.filtered=!1,this.featuresById=null,this.allResults=[],this.ecmaResults=[],this.commonSearchResults=[]},init:function(e,t){var r=e.features;this.ecmaFeatures=e.ecmaFeatures,this.browserListModel=t,this.getSettingsFromConfig(),this.makeFeatures(r)},applyFilterFromChange:function(e){var t=this.get(e);switch(e){case"search":this.includeMDN=!0,this.filterBySearch(t);break;case"searchResults":this.includeMDN=!0,this.handleSearchResults(t);break;case"filterResults":this.includeMDN=!0,this.handleFilterResults(t);break;case"feat":this.includeMDN=!0,this.filterByFeatures(t);break;case"cats":case"statuses":this.includeMDN=!1,this.filterByOthers()}this.filtered=!0},initialDisplay:function(){},updateBrowsers:function(e){this.browserListModel.set("shownBrowsers",e)},getMdnFeatureModel:function(e){return this.featuresById[e]||(this.featuresById[e]=new d.a({id:e,title:""},this)),this.featuresById[e]},makeFeatures:function(e){var t={};for(var r in e){var i=e[r];i.id=r;var s=new u.b(i,this);t[r]=s}this.featuresById=t},loadFeatureData:function(e){(0===e.id.indexOf("mdn")?this.getMdnFeatureModel(e.id):this.featuresById[e.id]).initFullData(e)},getSettingsFromConfig:function(){this.set("cats",o.a.getState().cats),this.set("statuses",o.a.getState().statuses)},searchFeatures:function(e){e.length;var t=!e,r=this.featuresById;for(var i in r){var s,n=r[i];t?s=!0:(s=n.testValue("search",e))&&this.foundCount++,n.set("isShown",s)}},searchEcmaFeatures:function(e){var t=e.length;for(var r in this.ecmaResults=[],this.ecmaFeatures)for(var i=this.ecmaFeatures[r],s=i.url,n=i.ids,o=0;o<n.length;o++){var a=n[o].toLowerCase();if(t>=3&&a.indexOf(e)>-1){this.foundCount++;var l=n[o],c=l.replace(/ /g,"_").replace(/"|:/g,"");this.ecmaResults.push({url:s+"#test-"+c,feature:l,version:r})}}},searchCommonSearchFeatures:function(e){this.commonSearchResults=[];for(var t=this.commonSearchFeatures,r=0;r<t.length;r++){var i=t[r];if(i.searchableContent.indexOf(e)>-1)this.foundCount++,this.commonSearchResults.push(i);else if(i.list&&"css-property"===i.type)for(var s=0;s<i.list.length;s++){var n=i.list[s];-1!==n.indexOf("(")&&(n=n.replace(/ /g,"").replace("(",": ?("),new RegExp(n).test(e)&&(this.foundCount++,this.commonSearchResults.push(i)))}}},filterBySearch:function(e){e.length?this.set("currentFilter","search"):(this.set("currentFilter",null),this.set("searchResults",[],!0),this.ecmaFeatures=[],this.commonSearchResults=[],this.filterByOthers())},handleSearchResults:function(e){if("search"===this.get("currentFilter")){this.get("search").length,this.featuresById;this.foundCount=e.length,this.allResults=[];for(var t=0;t<e.length;t++){var r=e[t];this.allResults.push(r)}var s=(this.get("search")||"").toLowerCase();this.searchEcmaFeatures(s),this.searchCommonSearchFeatures(s),this.emit("listChanged"),i.a.publish("listFilteredBySearch",{amount:this.foundCount})}else console.warn("Not filtering by search")},handleFilterResults:function(e){if("other"===this.get("currentFilter")){var t=this.featuresById;this.foundCount=e.length,e.forEach((function(e){t[e].set("isShown",!0)})),this.emit("listChanged")}else console.warn("Not filtering by other")},filterByFeatures:function(e){if(!!e.length||"search"!==this.get("currentFilter")){this.set("currentFilter","feat"),this.allResults=[];for(var t=0;t<e.length;t++){var r=e[t];this.allResults.push(r)}this.emit("listChanged")}},filterByOthers:function(){this.set("currentFilter","other");var e=this.get("cats"),t=this.get("statuses"),r=this.featuresById;for(var i in r){var s=r[i];if(!(s instanceof d.a)){var n=s.testValue("cats",e),o=s.testValue("statuses",t),a=n&&o;s.set("isShown",a)}}this.emit("listChanged")},applyCurrentFilters:function(){var e=o.a.getState().search,t=o.a.getState().feats;e&&e.length?this.filterBySearch(e):t&&t.length?this.filterByFeatures(t):"tables"===o.a.getState().page&&this.filterByOthers(),this.set("displayedFeatures",[])},sort:function(){}}),p=r(22),f=r(2),g=r(12);class m{constructor(e,t){this.usageDataById={},this.browserSetState={},this.id=t.version,this.browserModel=e,this.era=t.era,this.versionNumber=t.version,this.shortVersion=this.getShortVersion(),this.prefix=t.prefix,this.releaseDate=t.release_date?new Date(1e3*t.release_date):null,this.updateUsage(),this.versionNumber.includes("-")&&(this.numberRange=this.versionNumber.split("-").map(e=>+e.replace(/\.0$/,"")))}getName(){return Object(f.e)(this.browserModel.name,this.versionNumber,this.era)}getNameParts(){return Object(f.f)(this.browserModel.name,this.versionNumber,this.era)}getPrettyReleaseDate(){if(!this.releaseDate)return"";var e=this.releaseDate.toString().split(" ");return e[1]+" "+ +e[2]+", "+e[3]}updateUsage(){i.a.subscribe("usageUpdated",this.addUsage.bind(this))}readBrowserSet(e){var t=this.browserModel.id+" "+this.versionNumber,r=e.resultArray.includes(t);return this.browserSetState[e.name]=r,r}filterByBrowserSet(e){if(!(e in this.browserSetState))throw Error("Browserset not yet read");return this.browserSetState[e]}addUsage(){this.usageDataById={},Object(g.c)().forEach(e=>{let t,r=e.dataByBrowser[this.browserModel.id];r&&(t=!(this.id in r)&&"0"in r?r[0]:r[this.id]),t=t||0,this.usageDataById[e.uid]={name:e.name,versionUsage:t,percentage:Object(f.n)(t,2)}})}includesVersion(e){let t=parseFloat(e);if(isNaN(t))return e===this.versionNumber;if(this.numberRange){let[e,r]=this.numberRange;return t>=e&&t<=r}return t===parseFloat(this.versionNumber)}getShortVersion(e=!1){if(this.versionNumber.includes("-")){var t=e?0:1;return this.versionNumber.split("-")[t].replace(/\.0$/,"")}return this.versionNumber}filterByUsage(e){if(this.era>=0)return!0;return this.usageDataById[e.primaryUsage].versionUsage>e.usageThreshold}getMissingUsage(){}}class b{constructor(e){this.id=e.id,this.name=e.browser,this.longName=e.long_name||this.name,this.abbr=e.abbr,this.type=e.type,this.shortName=this.makeShortName(),this.currentVersion=e.current_version,this.versionArray=[],this.versionsById={},this.usageById={},this.browserSetState={},this.makeVersionArray(e.version_list)}makeShortName(){return this.name.replace(/ for| Browser/,"")}getUsage(e){if(!(e in this.usageById)){let t=0;for(let r of this.versionArray)t+=r.usageDataById[e].versionUsage;this.usageById[e]=t}return this.usageById[e]}makeVersionArray(e){for(var t,r=0;r<e.length;r++){var i=e[r];t=new m(this,i),this.versionArray.push(t),this.versionsById[t.id]=t}this.lastEra=t.era}readBrowserSet(e){var t=!1;for(let r of this.versionArray)r.readBrowserSet(e)&&(t=!0);this.browserSetState[e.name]=t}filterByBrowserSet(e){if(!(e in this.browserSetState))throw Error("Browserset not yet read");return this.browserSetState[e]}getMissingUsage(){for(var e=0,t=0;t<this.versionArray.length;t++){this.versionArray[t];e+=0}return e}}var v,y,w,x,S,k=r(5),O=r(41),_=function(e,t,r,i){return new(r||(r=Promise))((function(s,n){function o(e){try{l(i.next(e))}catch(e){n(e)}}function a(e){try{l(i.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}l((i=i.apply(e,t||[])).next())}))},E={},j=[],C={},T={};const R={lastRegionDate:"",supportDataByFeature:{},regionNameById:null,regionIdByName:null,browsers:null,categories:null,statuses:null,ALL_BROWSERS:null,ipData:null,hasSupportScoreIndexes:!1};var A=window.Caniuse;var N=function(e){if(!e)return null;let t=[];return e.forEach(e=>{let r=F(e);r?t.push({id:e,title:r.title}):console.warn("Child feature not found: "+e)}),t},P=function(e){v=e.feats,y=e.agents,x=e.cats,w=e.statuses,R.lastRegionDate=e.last_region_date;var t,r={};for(var n in y){var o=y[n];r[n]||(r[n]={});var a=o.version_list;for(t=0;t<a.length;t++){var l=a[t];l.prefix||(l.prefix=o.prefix);var c=l.version,u=l.global_usage;r[n][c]=u}}!function(){for(var e in S={},y){var t=y[e],r=t.type,i=t.dataByVersion={},s=t.version_list,n=S[r]||{};S[r]=n,n[e]=t;for(var o=0;o<s.length;o++){var a=s[o];i[a.version]=a}t.id=e;var l=new b(t);E[e]=l,j.push(l)}K.init(E)}(),R.supportDataByFeature=v,R.browsers=y,R.categories=x,R.statuses=w,R.ALL_BROWSERS=j;var d=new s.c({name:"Global",id:"global",type:s.b.REGION,source:s.a.STATCOUNTER,dataByBrowser:r,meta:null});g.a.add(d);var h=e.ecmascript,p={features:v,browsers:y,browsersByType:S,categories:x,statuses:w,globalUsage:d,ecmaFeatures:h};i.a.publish("supportDataReady",p),i.a.publish("baseDataReady",p)};function $(e,t){e.forEach((function(e,r){let i=t[r];if(T[i]="loaded",i.startsWith("sr_"))F(i).initFullData(e);else{let t=function(e,t){if(t.startsWith("mdn")){let r={id:t,title:"",description:"",spec:"",children:(e=e).children,pubDate:null,baseCategories:[],ucprefix:!1,stats:null,status:"",statusLabel:"",support:e.support,bugCount:null,linkCount:null,notes:"",notesByNum:{}};return Object.assign(r,e),r}return{id:t,title:"",description:(e=e).description,spec:e.spec,children:N(e.children),pubDate:new Date(e.date_published),baseCategories:e.baseCategories,ucprefix:e.ucprefix,stats:e.stats,status:e.status,statusLabel:w[e.status],bugCount:e.bug_count,linkCount:e.link_count,notes:e.notes,notesByNum:e.notes_by_num}}(e,i);F(i).initFullData(t)}})),i.a.publish("allFeatureDataLoaded")}function M(e){if(1===e.length){const[t]=e;T[t]="error";const r=F(t);r&&r.handleDataLoadError()}}function B(){return _(this,void 0,void 0,(function*(){return fetch("/process/get_feat_data.php?type=sorted_usage_features").then(e=>e.json()).then(e=>{for(var t=0;t<e.length;t++){var r=F(e[t]);r&&(r.supportScoreIndex=t)}R.hasSupportScoreIndexes=!0})}))}function L(e){e.forEach((function(e){T[e]||(T[e]="needed")})),setTimeout((function(){var e=[];for(var t in T){"needed"===T[t]&&(T[t]="loading",e.push(t))}if(e.length){var r=window.initialFeatData;for(let t of e)r&&r.id===t?($(JSON.parse(r.data),e),delete window.initialFeatData):fetch("/process/get_feat_data.php?type=support-data&feat="+e.join(",")).then(e=>e.json()).then(t=>{t.length||M(e),$(t,e)})}}),0)}var D={};function I(e){var t=D[e];return t||(t=new p.b(e),D[e]=t),t}function F(e){let t=C[e];if(!t){let r=v[e];r?t=C[e]=new u.b(r):e.startsWith("mdn")?t=C[e]=new d.a({id:e,title:""}):e.startsWith("sr")&&(t=C[e]=new O.a({id:e,title:""}))}return t||null}function U(e){return E[e]}function V(e,t){const r=E[e];if(r)return"CURRENT_VERSION"===t&&(t=r.currentVersion),r.versionsById[t]}function H(e,t){return V(e,t).prefix}function z(e){return e===k.a?Object.values(R.categories):e}function q(e){return e===k.a?Object.keys(R.statuses):e}function W(e){return e===k.a||e.length===Object.keys(R.categories).length}function G(e){return e===k.a||e.length===Object.keys(R.statuses).length}t.c={init:function(){if(!A.rawData)throw new Error("No raw data found");P(A.rawData)}};const K=new a,J=new h;i.a.subscribe("configChanged",(function(e){"feat"===e.option&&L(e.values)})),i.a.subscribe("featureDataNeeded",(function(e){L([e])}))},function(e,t,r){"use strict";r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return u}));var i=r(0),s=i.b`:host{display:block;position:absolute;z-index:100;width:max-content;font-size:.9em;line-height:1.4;opacity:0;transition:opacity .2s;--background:rgb(26, 26, 26);--foreground:white;--margin:8px}.content{position:relative;background:var(--background);color:var(--foreground);padding:8px;z-index:1}.pointer{background:var(--background);position:absolute;width:20px;height:20px;transform:rotate(45deg);z-index:0}:host([data-side=left]){margin-right:var(--margin)}:host([data-side=left]) .pointer{top:calc(50% - 10px);right:-3px}:host([data-side=right]){margin-left:var(--margin)}:host([data-side=right]) .pointer{top:calc(50% - 10px);left:-3px}:host([data-side=bottom]){margin-top:var(--margin)}:host([data-side=bottom]) .pointer{top:-3px;left:calc(50% - 10px)}:host([data-side=top]){margin-bottom:var(--margin)}:host([data-side=top]) .pointer{bottom:-3px;left:calc(50% - 10px)}.content .close{--primary-fg:white;float:right}.content>h4{text-align:center;font-size:1.2em;font-weight:300;margin:.2em 0 0}.content>p{margin-bottom:0}.content>p:first-child{margin-top:0}.content>dl{margin-bottom:0}.content>dl+dl{margin-top:1.5em}.content>dl>dt{font-weight:700;margin-left:0}.content>dl>dd{margin-bottom:1em;margin-left:0}.content>dl>dd:last-child{margin-bottom:0}`,n=r(2),o=function(e,t,r,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};let a=new Map;function l(e,t){return r=>{u.show(r.target,e,t)}}function c(e){u.hide(e.target)}document.addEventListener("keyup",({code:e})=>{"Escape"===e&&u.closeAll()});class u extends i.a{constructor(e,t,r){super(),this.width=250,this.options={instant:!1,clickable:!1,align:"center"},this.refEl=e,Object.assign(this.options,r),this.tooltipContent=t}static closeAll(){for(let[e]of a)u.hide(e)}static show(e,t,r={}){let i=a.get(e);if(!i||!r.instant)return i=new u(e,t,r),a.set(e,i),i.startShowing(r.instant),i;i.show(!0)}static hide(e){let t=a.get(e);t&&(t.hide(),a.delete(e))}static cancel(e){let t=a.get(e);t&&clearTimeout(t.showTimer)}static toggle(e,t,r){a.get(e)?u.hide(e):u.show.apply(this,arguments)}startShowing(e){u.tooltipShowing||e?this.show(!0):this.showTimer=setTimeout(()=>{this.show()},this.options.delay||1500)}show(e=!1){e&&(this.style.transition="none"),document.body.appendChild(this),u.tooltipShowing=!0}hide(){clearTimeout(this.showTimer),this.refEl=null,this.style.opacity="0",setTimeout(()=>{this.remove()},200),setTimeout(()=>{0===a.size&&(u.tooltipShowing=!1)},200)}updated(){this.refEl&&(this.positionTooltip(),setTimeout(()=>{this.style.opacity="1"},0))}positionTooltip(){const e=Object(n.k)(this.refEl),{scrollLeft:t,scrollTop:r}=document.scrollingElement,i=this.offsetWidth,s=this.offsetHeight,o=window.innerWidth,a=window.innerHeight;let l,c,u=0;let d,h=e.centerX-i/2,p=e.centerX-i+50,f=e.centerX+i-50,g=e.y2,m=e.centerY-s/2,b=f>0&&p+i<o,v=m>0&&m+s<a,y=s<e.bottom&&b,w=i<e.right&&v,x=i<e.x&&v,S=s<e.y&&b;if(y?(l=h,c=g,d="bottom"):w?(l=e.x2,c=e.centerY-s/2,d="right"):x?(l=e.x-i,c=e.centerY-s/2,d="left"):S?(l=e.centerX-i/2,c=e.y-s,d="top"):(l=h,c=g,d="bottom"),"top"===d||"bottom"===d){let e=o-(h+i),t=h;e<0?(u=e-10,l+=u):t<0&&(u=-(t-10),l+=u)}let k=this.shadowRoot.querySelector(".pointer");this.dataset.side=d,k.style.marginLeft=`${-u}px`,this.style.left=l+t+"px",this.style.top=c+r+"px",this.setAttribute("aria-hidden","false")}render(){this.style.pointerEvents=this.options.clickable?"all":"none",this.style.maxWidth=this.width+"px",this.style.textAlign=this.options.align;let e=this.tooltipContent instanceof Function?this.tooltipContent():this.tooltipContent;return i.c`
			<div class="pointer"></div>
			<div class="content">
				${e}
			</div>
		`}}u.tooltipShowing=!1,u.styles=s,o([Object(i.d)({type:Object})],u.prototype,"refEl",void 0),o([Object(i.d)({type:String})],u.prototype,"tooltipContent",void 0),o([Object(i.d)({type:Number})],u.prototype,"width",void 0),customElements.define("ciu-tooltip",u)},function(e,t,r){"use strict";const i={hide:function(e){e.classList.add("hidden")},show:function(e){e.classList.remove("hidden")},toggle:function(e,t){e.classList[t?"remove":"add"]("hidden")},toggleClass:function(e,t,r){e.classList[r?"add":"remove"](t)},empty:function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},remove:function(e){if(Array.isArray(e))for(var t=e,r=0;r<t.length;r++)i.remove(t[r]);else e.parentNode&&e.parentNode.removeChild(e)},append:function(e,t){if("object"==typeof t)for(var r=t.length,i=0;i<r;i++){var s=t[i];"string"==typeof s?e.appendChild(document.createTextNode(s)):e.appendChild(s)}else e.appendChild(document.createTextNode(t))},prepend:function(e,t){e.insertBefore(t,e.firstChild)},insertAfter:function(e,t){t.parentNode.insertBefore(e,t.nextSibling)},listen:function(e,t,r,i){i&&(r=r.bind(i)),e.addEventListener(t,r,!1)}};t.a=i},function(e,t,r){"use strict";r.d(t,"b",(function(){return i}));const i=[{name:"search",params:["search"]},{name:"feats-alt",params:["feats"]},{name:"tables",params:["cats","statuses"]},{name:"settings",path:"/ciu/settings"},{name:"compare",params:["compare","compareCats"],spaceIsPlus:!0},{name:"home",path:"/"},{name:"news",path:"/ciu/news"},{name:"import",path:"/ciu/import"},{name:"browserset",path:"/ciu/browserset",params:["setName"]},{name:"comparison",path:"/ciu/comparison"},{name:"about",path:"/ciu/about"},{name:"index",path:"/ciu/index"},{name:"saved",path:"/ciu/saved"},{name:"feats",varPath:!0,params:["feature_sort"]}];const s=new class{constructor(e){this.callbacks=[],this.routes=[],this.stateHistory=[],this.started=!1,this.currentState=null,this.routes=e.routes}start(){this.started=!0,this.currentState=this.getStateFromPath(this.getCurPath()),window.onpopstate=e=>{this.runCallbacks(this.getCurPath(),!1)},this.runCallbacks(this.getCurPath(),!1)}getCurPath(){return location.href.replace(location.origin,"").replace(location.hash,"")}getState(){return this.currentState}getPathMatch(e,t){var r={},i=e.pathname;if(e.searchParams.forEach((e,i)=>{t.spaceIsPlus&&(e=e.replace(/ /g,"+")),r[i]=e}),t.path&&i===t.path)return{name:t.name,params:r};if(t.varPath)return{name:t.name,value:i.replace(/^\//,""),params:r};if(t.params)for(const i of t.params)if(e.searchParams.get(i))return{name:t.name,params:r};return null}subscribe(e){this.callbacks.push(e)}getStateFromPath(e){0!==e.indexOf("/")&&(e="/"+e);var t=new URL(location.origin+e);for(const e of this.routes){var r=this.getPathMatch(t,e);if(r)break}return r}buildPath(e,t){var r="",i="";if(e.params){var s=new URLSearchParams,n="";for(const r of e.params)t.hasOwnProperty(r)&&(s.set(r,t[r]),n="?");i=decodeURIComponent(n+s)}e.path&&(r=e.path),e.varPath&&(r=t.value.replace(/^\//,""));let o=r+i;return 0!==o.indexOf("/")&&(o="/"+o),o}runCallbacks(e,t){var r=this.getStateFromPath(e);this.currentState=r,t&&(history.pushState(r,"",e),this.stateHistory.push(r));for(const e of this.callbacks)e(r)}navigate(e,t){if(this.started){var r;for(const t of this.routes)e===t.name&&(r=t);if(r){var i=this.getCurPath();let e=this.buildPath(r,t);if(i===e)return;this.runCallbacks(e,!0)}}}navigateToPath(e){this.getCurPath()!==e&&this.runCallbacks(e,!0)}closeOverlay(){this.stateHistory.length?history.back():this.navigate("home")}}({routes:i});t.a=s},function(e,t,r){"use strict";r.d(t,"f",(function(){return i})),r.d(t,"g",(function(){return s})),r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return a})),r.d(t,"d",(function(){return c})),r.d(t,"c",(function(){return u})),r.d(t,"e",(function(){return d}));const i=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${i}--\x3e`,n=new RegExp(`${i}|${s}`),o="$lit$";class a{constructor(e,t){this.parts=[],this.element=t;const r=[],s=[],a=document.createTreeWalker(t.content,133,null,!1);let c=0,h=-1,p=0;const{strings:f,values:{length:g}}=e;for(;p<g;){const e=a.nextNode();if(null!==e){if(h++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:r}=t;let i=0;for(let e=0;e<r;e++)l(t[e].name,o)&&i++;for(;i-- >0;){const t=f[p],r=d.exec(t)[2],i=r.toLowerCase()+o,s=e.getAttribute(i);e.removeAttribute(i);const a=s.split(n);this.parts.push({type:"attribute",index:h,name:r,strings:a}),p+=a.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),a.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(i)>=0){const i=e.parentNode,s=t.split(n),a=s.length-1;for(let t=0;t<a;t++){let r,n=s[t];if(""===n)r=u();else{const e=d.exec(n);null!==e&&l(e[2],o)&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-o.length)+e[3]),r=document.createTextNode(n)}i.insertBefore(r,e),this.parts.push({type:"node",index:++h})}""===s[a]?(i.insertBefore(u(),e),r.push(e)):e.data=s[a],p+=a}}else if(8===e.nodeType)if(e.data===i){const t=e.parentNode;null!==e.previousSibling&&h!==c||(h++,t.insertBefore(u(),e)),c=h,this.parts.push({type:"node",index:h}),null===e.nextSibling?e.data="":(r.push(e),h--),p++}else{let t=-1;for(;-1!==(t=e.data.indexOf(i,t+1));)this.parts.push({type:"node",index:-1}),p++}}else a.currentNode=s.pop()}for(const e of r)e.parentNode.removeChild(e)}}const l=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},c=e=>-1!==e.index,u=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(e,t,r){"use strict";r.d(t,"c",(function(){return p})),r.d(t,"b",(function(){return f})),r.d(t,"d",(function(){return g})),r.d(t,"e",(function(){return m}));var i=r(2),s=r(9),n=r(5),o=r(7),a=r(4),l=r(19);let c=[],u=!1;let d,h={};function p(){return[...c]}function f(e){return c.filter(e=>!e.isGlobal()).map(t=>({label:t.name,value:t.id,selected:t.uid===e}))}function g(e){return c.find(t=>t.uid===e).name}const m=function(e){let t=l.b.REGION+"."+e,r=v(t);return r?Promise.resolve(r):h[t]?h[t]:(h[t]=new Promise((function(t,r){let s=()=>{r(Error("usageDataRequestFailed: "+e))};Object(i.a)("/process/request_region_data.php?id="+e,{success:function(r){var i;try{i=JSON.parse(r)}catch(e){i=null}if(i){var n=new l.c({id:e,name:i.name,type:l.b.REGION,source:l.a.STATCOUNTER,dataByBrowser:i.data,meta:{access_date:i.access_date,month:i.month}});w(n),t(n)}else s()},error:s})})),h[t])};function b(e,t){var r=e[t];if("statcounter"==r.source){r.meta.month;var i=o.a.lastRegionDate;if(i!=r.meta.access_date)return console.log("Requesting new usage due to date change:",i,r.meta.access_date),m(r.id),!1}return!0}function v(e){return c.find(t=>t.uid===e)}function y(){!function(){if(!u)return;let e={};for(let t of c)t.isGlobal()||(e[t.uid]=t.toRaw());Object(i.p)("usage-data-by-id",JSON.stringify(e))}(),a.a.publish("usageUpdated",p())}function w(e){let t=v(e.uid);if(t){let e=c.indexOf(t);c[e]=t}else c.push(e);y()}window.getIpData=function(e){o.a.ipData=e,a.a.publish("ipDataReceived",e)},a.a.subscribe("ipDataReceived",(function(e){var t=e.country;t&&t.match(/^[a-z]{2}$/i)&&Object(i.a)("/process/get_country_name.php?id="+t,{success:function(e){var t=JSON.parse(e);if(t&&t.id&&t.name){var r=n.f[t.id]||t.name;!function(e,t){var r='Detected your country as "'+t+'". Would you like to import usage data for that country?',n=Object(i.m)("button",{class:"ciu-button  region-detected-button"},"Import",{click:function(r){r.preventDefault(),m(e).then(t=>{t.uid==="region."+e&&(s.a.remove(l),!1)}),!0,s.a.empty(l),s.a.append(l,["Importing data for "+t+"...",Object(i.m)("div",{class:"progress-bar"})])}}),o=Object(i.m)("button",{class:"ciu-button  region-detected-button"},"No thanks",{click:function(e){e.preventDefault(),s.a.remove(l),Object(i.p)("suggestCountry","0")}}),a=Object(i.m)("div",{class:"region-button-wrap"},[n,o]),l=Object(i.m)("aside",{class:"country-message"},[r,a]);Object(i.g)(".ciu-page-header").appendChild(l)}(t.id,r)}else console.error("Failed to get data from ")},error:function(){}})}));let x=Object(i.o)("usage-data-by-id");d=x?JSON.parse(x):{},t.a={init:function(){for(var e in function(){if(!c.find(e=>!e.isGlobal()&&e.type===l.b.REGION))Object(i.o)("suggestCountry")}(),d){var t=d[e];b(d,e)&&w(new l.c(t))}u=!0},add:w,remove:function(e){c=c.filter(t=>t.uid!==e),y()},rename:function(e,t){let r=v(e);r&&(r.name=t),y()},getStored:function(){return d},getUsageById:v,getUsageByName:function(e){return c.find(t=>t.name===e)},getTotalForBrowserType:function(e,t){var r=v(e),i=0;return o.b.eachOfType(t,(e,t)=>{var s=r.dataByBrowser[e.id];for(var n in s)i+=s[n]}),i},getTotalForBrowserSet:function(e,t){let r=v(e),i=0;return o.b.eachBrowser((function(e){if(e.browserSetState[t]){let s=r.dataByBrowser[e.id];for(let r=0;r<e.versionArray.length;r++){let n=e.versionArray[r];n.browserSetState[t]&&(i+=s[n.id])}}})),i}}},function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return p}));var i=r(5);class s{constructor(e,t){if(this.id=e,this.name=t,this.all={y:0,a:0},this.unprefixed={y:0,a:0},e.startsWith("region.")){let t=e.split(".")[1];this.shortName=i.f[t]}}}var n=r(7),o=r(21),a=r(4),l=r(12);class c{constructor(e){this.maxId="all",this.usageSetsById={},this.featureModel=e,this.update(),a.a.subscribe("usageUpdated",this.update,this)}setMax(e){this.maxId=e,this.update()}update(){this.usageSetsById={},Object(l.c)().forEach(this.addUsage.bind(this))}getUsageAmountForSet(e){var t=new s(e.id,e.name);this.usageSetsById[e.id]=t;var r,i,a=l.a.getUsageById(e.id),c=a.dataByBrowser,u=a.uid,d=this.featureModel.supportDataByBrowser,h=100;switch(this.maxId){case"tracked":h=l.a.getTotalForBrowserType(u,"desktop")+l.a.getTotalForBrowserType(u,"mobile");break;case"tracked|desktop":r="desktop";break;case"tracked|mobile":r="mobile";break;default:0===this.maxId.indexOf("browserset|")&&(i=this.maxId.substr("browserset|".length),h=l.a.getTotalForBrowserSet(u,i))}for(var p in r&&(h=l.a.getTotalForBrowserType(u,r)),d){var f=d[p],g=n.a.browsers[p];if(g&&(!r||r===g.type)){if(i){var m=n.b.browsersById[p];if(!m.browserSetState[i])continue}var b=g.current_version;for(var v in f){if(i)if(!m.versionsById[v].browserSetState[i])continue;var y=f[v].supportValue;switch(y.supportLevel){case o.a.PARTIALLY_SUPPORTED:case o.a.SUPPORTED:var w=c[p];if(!w)continue;var x=0;if(v in w?x=w[v]:"0"in w&&v==b&&(x=w[0]),!(x=x/h*100))continue;var S=y.supportLevel.letter;t.all[S]+=x,y.isPrefixed||(t.unprefixed[S]+=x)}}}}return t}getUsageAmounts(e){this.maxId=e;let t=this.usageSetsById,r=["all"];return this.featureModel.hasPrefixes&&(r=["all","unprefixed"]),Object.keys(t).map(e=>{let i=t[e],s=this.getUsageAmountForSet(i);return r.map(e=>({usageSet:s,type:e}))})}addUsage(e){var t=new s(e.uid,e.name);this.usageSetsById[e.uid]=t,this.getUsageAmountForSet(t)}}var u,d=r(40),h=r(22);!function(e){e.CSS="css",e.JS_UPPER="js-upper",e.JS_LOWER="js-lower"}(u||(u={}));class p extends d.a{constructor(e){super(),this.type="ciu",this.hasPrefixes=!1,this.supportScore=0,this.supportScoreIndex=0,this.versionsByNoteNumber={},this.versionFeatureArr=[],this.linkData=null,this.bugData=null,this.id=e.id,this.title=e.title,this.sourceData=e,this.prefixType=null,this.featureUsageModel=null}initFullData(e){e.id=e.id||this.id,e.title=e.title||this.title,e.pubDate=e.pubDate||this.sourceData.pubDate,this.sourceData=e,this.makeSupportDataByBrowser(),this.makeFeatureUsageModel(),this.prefixType=this.getPrefixType(),this.dataLoaded=!0,this.dataLoadedResolve()}handleDataLoadError(){this.dataLoadedReject()}loadData(){return this.dataLoadedPromise}isLoaded(){return!!this.supportDataByBrowser}makeFeatureUsageModel(){this.featureUsageModel=new c(this)}setMultiOperation(e){this.multiOperation=e}getPrefixType(){if(!this.hasPrefixes)return null;var e=this.sourceData;return e.baseCategories.indexOf("CSS")>-1?u.CSS:e.ucprefix?u.JS_UPPER:u.JS_LOWER}makeSupportDataByBrowser(){var e=this.sourceData.stats,t={};for(var r in e){var i=e[r],s=this.processRawVersions(i,r);t[r]=s}this.supportDataByBrowser=t}processRawVersions(e,t){var r={},i=this.versionFeatureArr;for(var s in e){var o=e[s];let l;o instanceof h.b?l=o:(o=o.replace("p","n"),l=Object(n.l)(o)),this.supportScore+=l.supportLevel.amount,l.noteNumbers.length&&this.updateNoteData(l.noteNumbers,t,s),l.isPrefixed&&(this.hasPrefixes=!0);var a={versionModel:Object(n.g)(t,s),featureModel:this,supportValue:l,usageData:{"region.global":0}};r[s]=a,i.push(a)}return r}updateNoteData(e,t,r){for(var i=this.versionsByNoteNumber,s=0;s<e.length;s++){var n=e[s],o=[t,r];i[n]?i[n].push(o):i[n]=[o]}}testValue(e,t){var r=null,s=this.sourceData;switch(e){case"cats":if(t===i.a)return!0;r=!!s.baseCategories.filter(e=>t.includes(e)).length;break;case"statuses":if(t===i.a)return!0;var n=s.status;r=t.includes(n);break;default:throw new Error("Unexpected test value: "+e)}return r}}},function(e,t,r){"use strict";r.d(t,"f",(function(){return c})),r.d(t,"a",(function(){return d})),r.d(t,"d",(function(){return p})),r.d(t,"b",(function(){return f})),r.d(t,"e",(function(){return g})),r.d(t,"c",(function(){return v}));var i=r(26),s=r(18),n=r(16),o=r(30),a=r(29),l=r(11);const c=e=>null===e||!("object"==typeof e||"function"==typeof e),u=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class d{constructor(e,t,r){this.dirty=!0,this.element=e,this.name=t,this.strings=r,this.parts=[];for(let e=0;e<r.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new h(this)}_getValue(){const e=this.strings,t=e.length-1,r=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=r[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!u(e))return e}let i="";for(let s=0;s<t;s++){i+=e[s];const t=r[s];if(void 0!==t){const e=t.value;if(c(e)||!u(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class h{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===n.a||c(e)&&e===this.value||(this.value=e,Object(i.b)(e)||(this.committer.dirty=!0))}commit(){for(;Object(i.b)(this.value);){const e=this.value;this.value=n.a,e(this)}this.value!==n.a&&this.committer.commit()}}class p{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Object(l.c)()),this.endNode=e.appendChild(Object(l.c)())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=Object(l.c)()),e.__insert(this.endNode=Object(l.c)())}insertAfterPart(e){e.__insert(this.startNode=Object(l.c)()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;Object(i.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=n.a,e(this)}const e=this.__pendingValue;e!==n.a&&(c(e)?e!==this.value&&this.__commitText(e):e instanceof a.b?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):u(e)?this.__commitIterable(e):e===n.b?(this.value=n.b,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,r="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=r:this.__commitNode(document.createTextNode(r)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof o.a&&this.value.template===t)this.value.update(e.values);else{const r=new o.a(t,e.processor,this.options),i=r._clone();r.update(e.values),this.__commitNode(i),this.value=r}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let r,i=0;for(const s of e)r=t[i],void 0===r&&(r=new p(this.options),t.push(r),0===i?r.appendIntoPart(this):r.insertAfterPart(t[i-1])),r.setValue(s),r.commit(),i++;i<t.length&&(t.length=i,this.clear(r&&r.endNode))}clear(e=this.startNode){Object(s.b)(this.startNode.parentNode,e.nextSibling,this.endNode)}}class f{constructor(e,t,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=r}setValue(e){this.__pendingValue=e}commit(){for(;Object(i.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=n.a,e(this)}if(this.__pendingValue===n.a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=n.a}}class g extends d{constructor(e,t,r){super(e,t,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new m(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class m extends h{}let b=!1;(()=>{try{const e={get capture(){return b=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class v{constructor(e,t,r){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=r,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;Object(i.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=n.a,e(this)}if(this.__pendingValue===n.a)return;const e=this.__pendingValue,t=this.value,r=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=y(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=n.a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const y=e=>e&&(b?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));let i=new Set;class s{static trackFeatureViewed(e){i.has(e)||(this.track("feature-viewed",e,"Feature support table viewed"),i.add(e))}static trackFeatureTabClick(e,t){this.track("feature-tab-"+e,t,"Feature tab click")}static trackBrowserStackClick(e){this.track("bs-link-click",e,"BrowserStack link click")}static trackBrowserStackLaunch(e,t,r){this.track("bs-launch-click",`${r} (${e} ${t})`,"BrowserStack launch")}static trackCellFocus(e){this.track("support-cell-click",e.getVersionName(),"Support cell click")}static trackViewModeChange(e){this.track("view-mode-change",e,"View mode change")}static trackCellHover(e){this.track("support-cell-hover",e.getVersionName(),"Support cell hover")}static trackSearch(e){e=e.trim(),this.track("ciu-search",e,"Caniuse search")}static trackUnfoundSearch(e){this.track("ciu-search-unfound",e,"Unfound Caniuse search")}static track(e,t,r){if(location.origin.indexOf("caniuse.site")>-1&&console.log("track",e,t),window.gtag){const i=e.replace(/[-]/g,"_");window.gtag("event",i,{action:t,label:r})}window.ga&&window.ga("send","event",e,t,r)}}},function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s}));const i={},s={}},function(e,t,r){"use strict";r.d(t,"d",(function(){return h})),r.d(t,"b",(function(){return p})),r.d(t,"a",(function(){return f})),r.d(t,"c",(function(){return g})),r.d(t,"g",(function(){return k})),r.d(t,"h",(function(){return O})),r.d(t,"i",(function(){return _})),r.d(t,"k",(function(){return E})),r.d(t,"j",(function(){return C})),r.d(t,"f",(function(){return T}));var i=r(2),s=r(12),n=r(4),o=r(3),a=r(7),l=r(1),c=r(19),u=function(e,t,r,i){return new(r||(r=Promise))((function(s,n){function o(e){try{l(i.next(e))}catch(e){n(e)}}function a(e){try{l(i.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}l((i=i.apply(e,t||[])).next())}))};var d,h=[];const p="> 0.5% in primary",f="Default: > 0.5% usage",g="__PREVIEW__";let m,b,v,y;class w{constructor(e){this.isTemp=!!e.isTemp,this.name=this.isTemp?"(temp)":e.name,this.rules=e.rules,this.resultArray=null,this.resultPromise=new Promise(e=>{this.resultResolver=e});var t=[];this.rules.forEach(function(e){var r=e.match(/^>=\s*(\d*\.?\d+)%\s+in\s+((alt-)?\w\w)$/i);if(r){var i=r[2],n=Object(s.e)(i);t.push(n)}}.bind(this)),this.usageDataReady=Promise.all(t)}toStub(){return{name:this.name,rules:this.rules}}fetchArray(){return u(this,void 0,void 0,(function*(){return Promise.all([C(),this.usageDataReady]).then(()=>{this.rules=this.rules.filter((function(e){try{return d(e),!0}catch(e){return!1}}));try{this.resultArray=d(this.rules)}catch(e){alert(e.message)}return a.b.readBrowserSet(this),this.resultResolver(this.resultArray),this.resultArray})}))}}function x(e){let t=s.a.getUsageById(e);C().then((function(e){e.setPrimaryUsage(t.dataByBrowser)}))}function S(){let e,t=l.a.getState().primaryBrowserset,r=s.a.getUsageById(t);e=r&&r.type===c.b.CUSTOM?r:Object(s.c)().find(e=>e.type===c.b.CUSTOM),e&&(d?d.setCustomUsage(e):C().then((function(t){t.setCustomUsage(e)})))}const k=function(e,t){if(e===g)return b;var r=e||l.a.getState().primaryBrowserset;let[i]=h.filter(e=>e.name===r);return i||(i?void 0:(console.warn("No browserset found for "+e),null))},O=function(){return k().fetchArray().then(e=>a.b.getFilteredBrowsers())};function _(e){return u(this,void 0,void 0,(function*(){return b=new w({name:g,rules:e}),yield b.fetchArray(),a.b.getFilteredBrowsers(b)}))}const E=function(e){let t=!1;h.forEach((function(r){r.name===e.name&&(r.rules=e.rules,t=!0)})),t||h.push(new w(e)),j()},j=function(){let e=h.filter(e=>e.name!==f&&"(from URL)"!==e.name).map(e=>e.toStub());Object(i.p)("browserSets",JSON.stringify(e))},C=function(){return v=v||new Promise((function(e,t){r.e(0).then(r.bind(null,56)).then((function(t){d=t.default,x(l.a.getState().primaryUsage),S(),e(d)}))})),v};function T(e){if(e===f)return;var t;t=e,h=h.filter((function(e){return e.name!==t})),j();let r=h[0],i=r?r.name:f;n.a.publish("browserSetsChanged"),l.a.dispatch(Object(o.O)(i))}function R(e){"region"!==e.type||e.isGlobal()||C().then((function(t){var r=e.id,i={};for(var s in e.dataByBrowser){var n=e.dataByBrowser[s];for(var o in n)i[s+" "+o]=n[o]}t.usage[r]=i}))}n.a.subscribe("browserSetsChanged",(function(){k(null,!0)})),n.a.subscribe("supportDataReady",(function(){!function(){if(location.search.length){var e=Object(i.j)(location.search.substr(1));e.browserset&&C().then((function(){try{var t=e.browserset.split(",");d(t);m=new w({name:"(from URL)",rules:t}),h.push(m),n.a.publish("browserSetsChanged"),l.a.dispatch(Object(o.O)("(from URL)"))}catch(e){return void alert("Invalid browserset given")}}))}}()})),t.e={init:function(){const e=[new w({name:f,rules:[p]})];let t=Object(i.o)("browserSets");if(t){let r=JSON.parse(t).map(e=>new w(e));h=e.concat(r)}else h=e;for(let e of h)e.fetchArray();l.a.subscribe(()=>{let{primaryUsage:e}=l.a.getState();e!==y&&(x(e),S(),y=e)}),n.a.subscribe("usageUpdated",e=>{e.forEach(R)})}}},function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return s})),r.d(t,"b",(function(){return n}));const i="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(e,t,r=null,i=null)=>{for(;t!==r;){const r=t.nextSibling;e.insertBefore(t,i),t=r}},n=(e,t,r=null)=>{for(;t!==r;){const r=t.nextSibling;e.removeChild(t),t=r}}},function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return s})),r.d(t,"c",(function(){return o}));var i,s,n=r(5);!function(e){e.REGION="region",e.CUSTOM="custom"}(i||(i={})),function(e){e.GOOGLE_ANALYTICS="google_analytics",e.SIMPLE_ANALYTICS="simple_analytics",e.STATCOUNTER="statcounter"}(s||(s={}));class o{constructor(e){if(this.shortName="",Object.assign(this,e),this.uid=this.type+"."+this.id,this.type===i.REGION){let e=n.f[this.id];e&&(this.shortName=e)}this.unknownPerc=this.getUnknownPerc()}isGlobal(){return"region.global"===this.uid}renameAllowed(){return this.type===i.CUSTOM}toRaw(){let e={};return["id","name","type","source","dataByBrowser","meta"].forEach(t=>{e[t]=this[t]}),e}getUnknownPerc(){var e=0;for(let t in this.dataByBrowser){let r=this.dataByBrowser[t];for(let t in r)e+=r[t]}return 100-e}}},function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(13),s=r(7);class n{constructor(){this.supportLetter="u",this.hasFullSupport=!1,this.prefixed=!1,this.disabledByDefault=!1,this.noteNums=[],this.conditionNums={}}addNoteNum(e,t){-1===this.noteNums.indexOf(e)&&(this.noteNums.push(e),t&&(this.conditionNums[e]=!0))}toString(){!this.hasFullSupport&&this.disabledByDefault&&(this.supportLetter="n");var e=[this.supportLetter];this.hasFullSupport||(this.prefixed&&e.push("x"),this.disabledByDefault&&e.push("d")),this.noteNums.sort();for(var t=0;t<this.noteNums.length;t++){var r=this.noteNums[t];this.conditionNums[r]&&this.hasFullSupport||e.push("#"+r)}return e.join(" ")}}var o=class{_makeStats(e,t){for(var r={},i=0;i<e.length;i++)r[e[i].version]=t;return r}versionMatches(e,t){var r,i=t.version,s=i.split("-");return r=s.length>1?parseFloat(s[0]):parseFloat(i),isNaN(r)&&(r=1/0),!!(e.addedSinceCurrent&&t.era>=0)||(!(!e.addedInPreview||!function(e){return"TP"===e.version||e.era>1}(t))||(null!==e.lteVersion&&r>=parseFloat(e.lteVersion)||null!==e.added&&!1!==e.added&&(!1===e.removed?r>=e.added:r>=e.added&&r<e.removed)))}_getFlagNoteNum(e){e instanceof Array||(e=[e]);for(var t=[],r=0;r<e.length;r++){var i,s=e[r];if("preference"===s.type)i=s.value_to_set?"Can be enabled by setting `"+s.name+"` to "+s.value_to_set:"Can be enabled with the `"+s.name+"` flag.",t.push(i);else"runtime_flag"===s.type&&t.push("Can be enabled via the `"+s.name+"` runtime flag")}return this._getNoteNum(t)}_getNoteNum(e){e instanceof Array&&(e=e.join("\n"));var t=this.numsByNote[e];return t||(this.curNoteNum++,t=this.curNoteNum,this.numsByNote[e]=t),t}_makeSupportString(e,t){var r=new n;r.supportLetter="n";for(var i=0;i<e.length;i++){var s=e[i];(s.unknownSupport||s.addedSinceCurrent&&t.era<0||null!==s.lteVersion)&&(r.supportLetter="u"),this.versionMatches(s,t)&&this._updateSupportItem(r,t,s)}return"TP"===t.version&&"n"===r.supportLetter&&(r.supportLetter="u"),r.toString()}_updateSupportItem(e,t,r){var i=t.era,s=!1,n="u";r.noSupport?n="n":r.unknownSupport?n="u":r.addedSinceCurrent?i>=0?(s=!0,n="y"):n="u":(r.lteVersion,s=!0,n="y");var o=r.flagData||r.partial||r.prefix||r.alternativeName;if(s&&!o&&(e.hasFullSupport=!0),e.hasFullSupport){if(r.notes&&!o){a=this._getNoteNum(r.notes);e.addNoteNum(a,!1)}}else{if(r.partial&&(n="a"),r.alternativeName){var a=this._getNoteNum("Uses the non-standard name: `"+r.alternativeName+"`");n="a",e.addNoteNum(a,!0)}if(r.prefix&&(e.prefixed=!0),r.flagData){var a=this._getFlagNoteNum(r.flagData);e.disabledByDefault=!0,e.addNoteNum(a,!0)}if(r.notes&&o){a=this._getNoteNum(r.notes);e.addNoteNum(a,!0)}}e.supportLetter=n}_getSupportData(e){var t={added:null,removed:!1,addedSinceCurrent:!1,addedInPreview:!1,noSupport:null,unknownSupport:null,flagData:e.flags,notes:e.notes,prefix:!!e.prefix,partial:e.partial_implementation,alternativeName:e.alternative_name,lteVersion:null};return"string"==typeof e.version_added?"≤37"===e.version_added?t.addedSinceCurrent=!0:"≤"===e.version_added.substr(0,1)?t.lteVersion=e.version_added.substr(1):"preview"===e.version_added?t.addedInPreview=!0:t.added=parseFloat(e.version_added):!0===e.version_added?e.version_removed?t.added=0:t.addedSinceCurrent=!0:!1===e.version_added?t.noSupport=!0:null===e.version_added&&(t.unknownSupport=!0),"string"==typeof e.version_removed&&(t.removed=parseFloat(e.version_removed)),t}getStatsForBrowser(e,t){var r=e.version_list;if(!t||null===t.version_added)return this._makeStats(r,"u");t instanceof Array||(t=[t]);for(var i=[],s=0;s<t.length;s++){var n=t[s],o=this._getSupportData(n);i.push(o)}for(var a={},l=0;l<r.length;l++){var c=r[l];a[c.version]=this._makeSupportString(i,c)}return a}_formatNote(e){return e.indexOf("\n")>-1&&(e="• "+e),e=e.replace(/\n/g,"\n• ").replace(/<a href=["'](.*?)["']>(.*?)<\/a>/g,"[$2]($1)").replace(/<code>(.*?)<\/code>/g,"`$1`").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace()}parse(e){var t=s.a.browsers,r={};for(var i in this.curNoteNum=0,this.numsByNote={},t){var n=t[i];r[i]=this.getStatsForBrowser(n,e[i])}var o={};for(var a in this.numsByNote)o[this.numsByNote[a]]=this._formatNote(a);return{stats:r,notes:o}}};class a extends i.b{constructor(){super(...arguments),this.type="mdn"}makeSupportDataByBrowser(){var e=(new o).parse(this.sourceData.support);this.sourceData.stats=e.stats,this.sourceData.notesByNum=e.notes,this.sourceData.notes=this._updateNotes(),super.makeSupportDataByBrowser.apply(this,arguments)}_updateNotes(){var e="",t=this.sourceData.mdnStatus;t.deprecated?e="This "+(t.experimental?"experimental ":"")+"feature is deprecated/obsolete and  **should not be used**.":t.standard_track?t.experimental&&(e="This feature is  **experimental**. Use caution before using in production."):e="This feature is non-standard and  **should not be used** without careful consideration.";var r="";return this.sourceData.amountOfBrowsersWithData<6&&(r="This support table needs help! If you have more information please [share](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md) so it can more helpful in the future.\n"),e&&r?r+"\n"+e+"\n"+this.sourceData.notes:e||r?(e||r)+"\n"+this.sourceData.notes:this.sourceData.notes}_makeNotes(e){var t=e.notes;["https://github.com/mdn/browser-compat-data/blob/main/",e.path].join("");if((t=t||"")&&(t+="\n"),e.mdn_url){t+="See full reference on [MDN Web Docs]("+e.mdn_url.replace("(","%28").replace(")","%29")+").\n\n"}return t}getPrefixType(){return 0===this.sourceData.path.indexOf("css")?i.a.CSS:i.a.JS_LOWER}initFullData(e){e.description=e.description||"",e.notes=this._makeNotes(e),e.status="",super.initFullData.apply(this,arguments),this.sourceData.status="",this.sourceData.description=e.description,this.sourceData.baseCategories=[]}}},function(e,t,r){"use strict";class i{constructor(e,t){this.amount=t,this.letter=e}}const s={UNKNOWN:new i("u",0),NOT_SUPPORTED:new i("n",0),PARTIALLY_SUPPORTED:new i("a",.5),SUPPORTED:new i("y",1)};t.a=s},function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));var i=r(21),s=r(5);class n{constructor(e){this.supportLevel=null,this.isPrefixed=!1,this.hasPolyfill=!1,this.isDisabled=!1,this.supportClasses="",this.noteNumbers=[],this.valueString=e,e.includes("#")?this.supportClasses=e.replace(/\#\d+ ?/g,""):e.includes("%")?this.supportClasses="u":this.supportClasses=e;for(var t=e.split(" "),r=0;r<t.length;r++){var n=t[r];switch(n){case"y":this.supportLevel=i.a.SUPPORTED;break;case"a":this.supportLevel=i.a.PARTIALLY_SUPPORTED;break;case"u":this.supportLevel=i.a.UNKNOWN;break;case"p":this.hasPolyfill=!0,this.supportLevel=i.a.NOT_SUPPORTED;break;case"n":this.supportLevel=i.a.NOT_SUPPORTED;break;case"x":this.isPrefixed=!0;break;case"d":this.isDisabled=!0;break;default:let e=/^([\d\.]+)\%$/.exec(n);if(e&&e.length)this.supportPercentage=+e[1],this.supportLevel=i.a.UNKNOWN;else if(e=/^#(\d+)$/.exec(n),e&&e.length>=2){var o=e[1];this.noteNumbers.push(+o)}}}this.text=s.h[this.supportLevel.letter],this.hasFullSupport=this.supportLevel===i.a.SUPPORTED,this.hasPartialSupport=this.supportLevel===i.a.PARTIALLY_SUPPORTED}asLabel(){switch(this.supportLevel.letter){case"y":return"Supported";case"a":return"Partial support";case"n":case"p":return"Not supported";case"u":default:return"Unknown support"}}}class o extends n{constructor(e){super("u"),this.supportByFeature=e,this.valueString=Object.keys(e).map(t=>e[t].valueString).join("-")}}},function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"e",(function(){return d})),r.d(t,"a",(function(){return h})),r.d(t,"d",(function(){return p})),r.d(t,"c",(function(){return f}));var i=r(13),s=r(22),n=r(2),o=r(5),a=r(7),l=r(0);function c(e){let t=Date.now(),r=Math.floor((t-e.getTime())/o.b);return Math.round(.5*r)}function u(e){return{versionModel:e,featureModel:null,supportValue:Object(a.l)("u"),usageData:{}}}function d(e,t,r){var i=e.versionArray;let s;return t&&(s=t.supportDataByBrowser[e.id]),r&&(i=i.filter(e=>r(e))),i.map(e=>s?[s[e.id]]:[u(e)])}function h(e,t){if(e instanceof s.a){let r=e.supportByFeature;return l.c`<ol> ${Object.keys(r).map(e=>{let i=r[e];return l.c`
				<li>
					${Object(a.i)(e).sourceData.title}:
					<span class="${i.supportClasses}">
						${h(i,t)}
					</span>
				</li>
			`})}</ol>`}let r;if(r=e.text,e.isDisabled&&(r="Not supported by default, but can be enabled"),e.isPrefixed){var i=function(e,t){var r,i=e.prefix;switch(i=Object(n.b)(i,t.id),t.prefixType){case"js-lower":r=i;break;case"css":r="-"+i+"-";break;case"js-upper":r=(r=i.substr(0,1).toUpperCase()+i.substr(1)).replace("Webkit","WebKit");break;default:r=i}return r}(t.versionModel,t.featureModel);let s=" with prefix: ";return e.isDisabled&&(s=". Requires prefix: "),l.c`
			${r}
			${s}
			<code class="prefix">${i}</code>
		`}return r}function p(e,t){return Promise.all(e.map(e=>e.dataLoadedPromise)).then(()=>{let r={},n={title:"Summary",stats:r};"average"===t?function(e,t){a.a.ALL_BROWSERS.forEach(r=>{let i=r.id;t[i]={},r.versionArray.forEach(r=>{let s=0;e.forEach(e=>{let t=e.supportDataByBrowser[i][r.id].supportValue;s+=t.supportLevel.amount});let n=s/e.length;t[i][r.id]=n+"%"})})}(e,r):"combined"===t?function(e,t){a.a.ALL_BROWSERS.forEach(r=>{let i=r.id;t[i]={},r.versionArray.forEach(r=>{let n={};e.forEach(e=>{let t=e.supportDataByBrowser[i][r.id].supportValue;n[e.id]=t}),t[i][r.id]=new s.a(n)})})}(e,r):e.forEach(e=>{a.a.ALL_BROWSERS.forEach(i=>{let s=i.id;r[s]=r[s]||{};let n=e.supportDataByBrowser[s];Object.keys(n).forEach(e=>{let i=n[e].supportValue.supportLevel.letter;"intersection"===t?(r[s][e]||(r[s][e]="y"),"y"!==i&&(r[s][e]="u")):"union"===t&&(r[s][e]||(r[s][e]="u"),"y"===i&&(r[s][e]="y"))})})});let o=new i.b({});return o.initFullData(n),o.setMultiOperation(t),o})}function f(e,t){var r,i,n=e.versionArray,o=[];let a=t.supportDataByBrowser[e.id];for(const e of n){let t=a[e.id];if(0===e.era)r&&o.push(r),o.push([t]),r=null,i=null;else{let e;e=i instanceof s.a?t.supportValue.valueString!==i.valueString:t.supportValue!==i,e&&(i=t.supportValue,r&&o.push(r),r=[]),r.push(t)}}return r&&o.push(r),o}},function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"d",(function(){return u})),r.d(t,"e",(function(){return d})),r.d(t,"a",(function(){return p})),r.d(t,"c",(function(){return g})),r.d(t,"f",(function(){return m}));var i=r(7),s=r(5),n=function(e,t,r,i){return new(r||(r=Promise))((function(s,n){function o(e){try{l(i.next(e))}catch(e){n(e)}}function a(e){try{l(i.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}l((i=i.apply(e,t||[])).next())}))};let o,a=null,l={and_chr:"android_chrome",and_ff:"android_firefox",and_uc:"android_uc_browser",samsung:"android_samsung_internet",ios_saf:"ios_safari"};function c(){return n(this,void 0,void 0,(function*(){let e="https://www.browserstack.com/third-party/integrations/caniuse/supported-browsers";return location.origin.includes("caniuse.site")&&(e="/resources/bs-browsers.json"),o||(o=fetch(e).then(e=>{if(e.ok)return e.json()}).then(e=>(a=e,a))),o}))}function u(e){let t=[];return i.b.getBrowsers().forEach(r=>{let i=h(r.id);(a.desktop[i]||a.device[i])&&t.push({label:r.name,value:i,selected:i===e})}),t}function d(e,t){let r=a.desktop[e]||a.device[e];return r.sort((e,t)=>parseFloat(e)<parseFloat(t)?-1:1),r.map(e=>({label:e,value:e,selected:e===t}))}function h(e){return l[e]||e}function p(e){if(!a)return!1;const t=e.first.versionModel.browserModel.id,r=f(t,e.first.versionModel);if(!e.isRange)return r;for(const r of e.versions){if(f(t,r.versionModel))return!0}}function f(e,t){let r=h(e),i=a.desktop[r]||a.device[r];if(i)for(const e of i){let[r]=e.split(" ");if(t.includesVersion(r))return e}return null}function g(e){const t=e.first;let r,i,n,o={[s.d.NORMAL]:"current-aligned-view",[s.d.USAGE_RELATIVE]:"usage-relative-view",[s.d.DATE_RELATIVE]:"date-relative-view"}[e.viewMode],a=t.versionModel.browserModel.id;return t.featureModel.id?(i=t.featureModel.sourceData.baseCategories.join(", "),n=t.featureModel.id):(i="N/A",n="N/A"),r=new URLSearchParams({ref:"caniuse-source",browser:h(a),category:i,property:n,caniuse_source:o}),e.isRange?(r.set("lower_browser_version",f(a,e.first.versionModel)||e.first.versionModel.versionNumber),r.set("upper_browser_version",f(a,e.last.versionModel)||e.last.versionModel.versionNumber)):r.set("browser_version",f(a,t.versionModel)),"https://www.browserstack.com/user/try-live?"+r.toString()}function m(e,t,r){let i=new URLSearchParams({ref:"caniuse-source",browser:e,browser_version:t,category:r.sourceData.baseCategories.join(", "),property:r.id,caniuse_source:"test-on-a-real-browser-tab"});window.open("https://www.browserstack.com/user/try-live?"+i.toString(),"_blank")}},function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return n}));var i=r(11);function s(e){let t=n.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},n.set(e.type,t));let r=t.stringsArray.get(e.strings);if(void 0!==r)return r;const s=e.strings.join(i.f);return r=t.keyString.get(s),void 0===r&&(r=new i.a(e,e.getTemplateElement()),t.keyString.set(s,r)),t.stringsArray.set(e.strings,r),r}const n=new Map},function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return n}));const i=new WeakMap,s=e=>(...t)=>{const r=e(...t);return i.set(r,!0),r},n=e=>"function"==typeof e&&i.has(e)},function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}));var i=r(18),s=r(14),n=r(25);const o=new WeakMap,a=(e,t,r)=>{let a=o.get(t);void 0===a&&(Object(i.b)(t,t.firstChild),o.set(t,a=new s.d(Object.assign({templateFactory:n.b},r))),a.appendInto(t)),a.setValue(e),a.commit()}},function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var i=r(0),s=r(5),n=r(23),o=i.b`code{padding:1px 4px;font-family:Inconsolata,monospace;background-color:var(--code-bg)}.num-tag{float:left;padding:0 2px;height:10px;font-size:10px;line-height:10px;font-weight:400;background-color:#fff;color:#000;text-shadow:none}.tab-content .num-tag{font-size:12px;line-height:12px;height:12px;margin-right:.5em;margin-top:.2em}.num-tag--1{background-color:#fff}.num-tag--2{background-color:#ddd}.num-tag--3{background-color:#eee}.num-tag--4{background-color:#fff}.num-tag--5{background-color:#ddd}.num-tag--6{background-color:#eee}.stat-cell{display:flex;justify-content:center;align-items:center;transition:min-height .5s,max-height .5s,line-height .5s,font-size .5s,filter 1s;position:relative;list-style:none;margin:2px;box-sizing:border-box;white-space:nowrap;overflow:hidden;min-height:30px;height:30px;max-height:30px;word-spacing:-2px;text-align:center;color:#fff;font-size:1rem}.stat-cell .support-text{text-indent:-999em}.stat-cell .label{font-size:.8em;margin-bottom:3px;opacity:.8}.stat-cell.average{flex-direction:column;min-height:40px}.stat-cell.average .label{margin-bottom:0}@media(prefers-reduced-motion:reduce){.stat-cell{transition:none}}.combined{flex-direction:column;background-color:var(--primary-bg-shade-2)}.combined .label{position:absolute;font-size:1em;top:50%;transform:translateY(-50%);height:auto;display:flex;align-items:center;display:flex;text-shadow:1px 1px 1px #000;pointer-events:none}.combined.cbf .label{color:#000;background-color:rgba(255,255,255,.5019607843);padding:2px;text-shadow:none}.sub-cells{display:flex;height:100%;width:100%}.sub-cells>*{flex-grow:1}.stat-cell:after{content:"";display:block;position:absolute;width:100%;height:100%;pointer-events:none}.x:after{background-image:url(/img/prefix.svg);background-position:top 1px right 1px;background-repeat:no-repeat;background-size:12px}.d:after{background-image:url(/img/flag-green.svg);background-position:top 1px right 1px;background-repeat:no-repeat;background-size:10px}.x.d:after{background-image:url(/img/prefix.svg),url(/img/flag-green.svg);background-position:top 1px right 1px,top 1px right 12px}.y{background:var(--supported);color:var(--supported-fg)}.a{background:var(--partial-pattern);color:var(--partial-fg)}.n{background:var(--no-support-pattern);color:var(--no-support-fg)}.u{background-color:var(--unknown);color:var(--unknown-fg)}.current{outline:4px solid var(--primary-bg-shade-2)}:host{cursor:pointer}:host(:focus) .stat-cell{outline:4px solid #0ff}:host(.date-item){position:absolute;left:calc(50% - 15px);transform:translateY(-50%);margin:auto}:host(.date-item) .stat-cell{width:30px;height:30px;font-size:.8rem;border-radius:50%}.highlight{outline:4px solid #c832f7!important;z-index:2}.a11y-only{position:absolute;text-indent:-99999px}.stat-cell ol{margin:0;padding:0;position:absolute;top:1px;left:1px;width:100%;text-align:left;-webkit-transform-origin:0 0;transform-origin:0 0}.stat-cell li,.stat-cell ol{margin:0;padding:0;list-style:none}.stat-cell li{float:left;padding:0 2px;height:10px;font-size:10px;line-height:10px;font-weight:400;background-color:#fff;color:#000;text-shadow:none}.stat-cell .cell-prefix{display:none;position:absolute;top:1px;right:1px;background-color:#ff6;color:#000;font-size:10px;line-height:1;padding:0 1px;text-shadow:none}.num-tag--1{background-color:#fff}.num-tag--2{background-color:#ddd}.num-tag--3{background-color:#eee}.num-tag--4{background-color:#fff}.num-tag--5{background-color:#ddd}.num-tag--6{background-color:#eee}`,a=r(1),l=r(39),c=r(2),u=r(22),d=r(7),h=function(e,t,r,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};class p extends i.a{constructor(){super(...arguments),this.isSelected=!1}makeLabel(){return this.isRange?[this.first.versionModel.getShortVersion(!0),this.last.versionModel.getShortVersion(!1)].join(" - "):this.first.versionModel.getShortVersion(!1)}getSupportText(e=!1){return e?Object(n.a)(this.first.supportValue,this.first):i.c`${this.first.supportValue.asLabel()}`}updated(e){e.has("versions")&&(this.versionRangeLabel=null,this.requestUpdate()),this.updateStyles()}getSupportClass(){return this.first.supportValue.supportClasses}getNoteNumbers(){return this.first.supportValue.noteNumbers}getNumberedNoteText(){return this.getNoteNumbers().map(e=>[e,this.first.featureModel.sourceData.notesByNum[e]])}getReleasedDateRange(){let e=this.first.versionModel.getPrettyReleaseDate();if(this.isRange){var t=this.last.versionModel.getPrettyReleaseDate();t&&(e+=" - "+t)}return e}toggleNumHighlight(e,t){this.getNoteNumbers().includes(e)&&this.shadowRoot.firstElementChild.classList.toggle("highlight",t)}hasNoteNumbers(){return!!this.getNoteNumbers().length}renderNoteNums(){let e=this.getNoteNumbers();return e.length?i.c`
			<h5 class="note-header  a11y-only">See notes: </h5>
			<ol>
				${e.map(e=>i.c`
					<li class="num-tag--${e}">${e}</li>
				`)}
			</ol>
		`:""}getUsagePercentage(e){let t=0;for(const r of this.versions)t+=r.versionModel.usageDataById[e].versionUsage;return t}getVersionName(){if(this.isRange){let e=this.first.versionModel.getNameParts(),t=this.last.versionModel.getNameParts();if(e.name===t.name){let r=this.makeLabel();return`${e.name} ${r} ${t.suffix}`}return`${e.name} ${e.version} ${e.suffix}\n\t\t\t\t\t-\n\t\t\t\t\t${t.name} ${t.version} ${t.suffix}`}return this.first.versionModel.getName()}setUsageProps(e){let t,r=a.a.getState().primaryUsage,i=10*this.getUsagePercentage(r);if(e.height=i+"px",i<20&&i>=8?t=i-2:i<8?(i<=1&&(e.display="none"),t=0):t=Math.min(i-10,20),t>8){this.makeLabel().length>5&&(e.whiteSpace="normal",2*t>i&&(t=16))}e.fontSize=t+"px"}setDateRelativeProps(e){let t=this.first.versionModel.releaseDate;if(!t)return void(e.display="none");let r=Object(n.b)(t);e.bottom=l.a+r+"px"}getPercentageColor(e){if(a.a.getState().accessibleColors)return`hsl(0, 0%, ${60*e+40}%)`;return`hsl(${e*130}, 85%, 70%)`}updateStyles(){let e=this.shadowRoot.firstElementChild,t={display:"",height:"",fontSize:"",bottom:"",whiteSpace:""};this.classList.remove("date-item"),this.viewMode===s.d.USAGE_RELATIVE?this.setUsageProps(t):this.viewMode===s.d.DATE_RELATIVE&&(this.setDateRelativeProps(t),this.classList.add("date-item"));let r=this.first.supportValue.supportPercentage;void 0!==r?(e.style.backgroundColor=this.getPercentageColor(r),e.style.color="#000"):(e.style.backgroundColor="",e.style.color=""),e.style.display=t.display,e.style.minHeight=t.height,e.style.maxHeight=t.height,e.style.fontSize=t.fontSize,e.style.whiteSpace=t.whiteSpace,this.style.bottom=t.bottom}getClassName(){let e=this.first.supportValue,t=e.supportClasses;return void 0!==e.supportPercentage?t="average":e instanceof u.a&&(t="combined"),this.viewMode===s.d.NORMAL&&0===this.first.versionModel.era?t+=" current":this.viewMode===s.d.DATE_RELATIVE&&(t+=" date-item"),"stat-cell "+t}renderMultiSupportCell(e){let t=Object.keys(e).map(t=>{d.i;return i.c`
				<div class=${e[t].supportClasses}>
				</div>
			`}),r=a.a.getState().accessibleColors?"cbf":"";return i.c`
			<div class='stat-cell  combined  ${r}'>
				<span class="label">${this.versionRangeLabel}</span>
				<div class="sub-cells">
					${t}
				</div>
			</div>
		`}render(){this.first=this.versions[0],this.last=this.versions[this.versions.length-1],this.isRange=this.first!==this.last;let e=this.getClassName(),t=this.first.supportValue,r=t.supportPercentage,s=t instanceof u.a;return this.versionRangeLabel=this.versionRangeLabel||this.makeLabel(),s?this.renderMultiSupportCell(t.supportByFeature):void 0!==r?i.c`
				<div class=${e}>
					<span class="label">${this.versionRangeLabel}:</span>
					<span class="percentage">
						${Object(c.n)(100*r,1)}%
					</span>
				</div>
			`:i.c`
				<div class=${e}>
						${this.versionRangeLabel}
						<span class="a11y-only">: ${this.getSupportText()}</span>
						${this.renderNoteNums()}
				</div>
			`}}p.styles=o,h([Object(i.d)({type:Array})],p.prototype,"versions",void 0),h([Object(i.d)({type:String})],p.prototype,"viewMode",void 0),h([Object(i.d)({type:Boolean})],p.prototype,"isSelected",void 0),h([Object(i.d)({type:String})],p.prototype,"tooltipSide",void 0),customElements.define("ciu-version-support",p)},function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return l}));var i=r(18),s=r(11);const n=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),o=` ${s.f} `;class a{constructor(e,t,r,i){this.strings=e,this.values=t,this.type=r,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let i=0;i<e;i++){const e=this.strings[i],n=e.lastIndexOf("\x3c!--");r=(n>-1||r)&&-1===e.indexOf("--\x3e",n+1);const a=s.e.exec(e);t+=null===a?e+(r?o:s.g):e.substr(0,a.index)+a[1]+a[2]+s.b+a[3]+s.f}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==n&&(t=n.createHTML(t)),e.innerHTML=t,e}}class l extends a{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,r=t.firstChild;return t.removeChild(r),Object(i.c)(t,r.firstChild),e}}},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(18),s=r(11);class n{constructor(e,t,r){this.__parts=[],this.template=e,this.processor=t,this.options=r}update(e){let t=0;for(const r of this.__parts)void 0!==r&&r.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=i.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],r=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let o,a=0,l=0,c=n.nextNode();for(;a<r.length;)if(o=r[a],Object(s.d)(o)){for(;l<o.index;)l++,"TEMPLATE"===c.nodeName&&(t.push(c),n.currentNode=c.content),null===(c=n.nextNode())&&(n.currentNode=t.pop(),c=n.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,o.name,o.strings,this.options));a++}else this.__parts.push(void 0),a++;return i.a&&(document.adoptNode(e),customElements.upgrade(e)),e}}},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){(function(t){var r;r=function(){"use strict";var e=function(e){var t=e.id,r=e.viewBox,i=e.content;this.id=t,this.viewBox=r,this.content=i};function r(e,t){return e(t={exports:{}},t.exports),t.exports}e.prototype.stringify=function(){return this.content},e.prototype.toString=function(){return this.stringify()},e.prototype.destroy=function(){var e=this;["id","viewBox","content"].forEach((function(t){return delete e[t]}))},"undefined"!=typeof window?window:void 0!==t||"undefined"!=typeof self&&self;var i=r((function(e,t){e.exports=function(){function e(e){return e&&"object"==typeof e&&"[object RegExp]"!==Object.prototype.toString.call(e)&&"[object Date]"!==Object.prototype.toString.call(e)}function t(t,r){var s;return r&&!0===r.clone&&e(t)?i((s=t,Array.isArray(s)?[]:{}),t,r):t}function r(r,s,n){var o=r.slice();return s.forEach((function(s,a){void 0===o[a]?o[a]=t(s,n):e(s)?o[a]=i(r[a],s,n):-1===r.indexOf(s)&&o.push(t(s,n))})),o}function i(s,n,o){var a=Array.isArray(n),l=(o||{arrayMerge:r}).arrayMerge||r;return a?Array.isArray(s)?l(s,n,o):t(n,o):function(r,s,n){var o={};return e(r)&&Object.keys(r).forEach((function(e){o[e]=t(r[e],n)})),Object.keys(s).forEach((function(a){e(s[a])&&r[a]?o[a]=i(r[a],s[a],n):o[a]=t(s[a],n)})),o}(s,n,o)}return i.all=function(e,t){if(!Array.isArray(e)||e.length<2)throw new Error("first argument should be an array with at least two elements");return e.reduce((function(e,r){return i(e,r,t)}))},i}()})),s=r((function(e,t){t.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},e.exports=t.default})),n=s.svg,o=s.xlink,a={};a[n.name]=n.uri,a[o.name]=o.uri;var l=function(e,t){return void 0===e&&(e=""),"<svg "+function(e){return Object.keys(e).map((function(t){return t+'="'+e[t].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(i(a,t||{}))+">"+e+"</svg>"};return function(e){function t(){e.apply(this,arguments)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={isMounted:{}};return r.isMounted.get=function(){return!!this.node},t.createFromExistingNode=function(e){return new t({id:e.getAttribute("id"),viewBox:e.getAttribute("viewBox"),content:e.outerHTML})},t.prototype.destroy=function(){this.isMounted&&this.unmount(),e.prototype.destroy.call(this)},t.prototype.mount=function(e){if(this.isMounted)return this.node;var t="string"==typeof e?document.querySelector(e):e,r=this.render();return this.node=r,t.appendChild(r),r},t.prototype.render=function(){var e=this.stringify();return function(e){var t=!!document.importNode,r=(new DOMParser).parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(r,!0):r}(l(e)).childNodes[0]},t.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(t.prototype,r),t}(e)},e.exports=r()}).call(this,r(31))},function(e,t,r){(function(t){var r;r=function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}"undefined"!=typeof window?window:void 0!==t||"undefined"!=typeof self&&self;var r=e((function(e,t){e.exports=function(){function e(e){return e&&"object"==typeof e&&"[object RegExp]"!==Object.prototype.toString.call(e)&&"[object Date]"!==Object.prototype.toString.call(e)}function t(t,r){var s;return r&&!0===r.clone&&e(t)?i((s=t,Array.isArray(s)?[]:{}),t,r):t}function r(r,s,n){var o=r.slice();return s.forEach((function(s,a){void 0===o[a]?o[a]=t(s,n):e(s)?o[a]=i(r[a],s,n):-1===r.indexOf(s)&&o.push(t(s,n))})),o}function i(s,n,o){var a=Array.isArray(n),l=(o||{arrayMerge:r}).arrayMerge||r;return a?Array.isArray(s)?l(s,n,o):t(n,o):function(r,s,n){var o={};return e(r)&&Object.keys(r).forEach((function(e){o[e]=t(r[e],n)})),Object.keys(s).forEach((function(a){e(s[a])&&r[a]?o[a]=i(r[a],s[a],n):o[a]=t(s[a],n)})),o}(s,n,o)}return i.all=function(e,t){if(!Array.isArray(e)||e.length<2)throw new Error("first argument should be an array with at least two elements");return e.reduce((function(e,r){return i(e,r,t)}))},i}()})),i=e((function(e,t){t.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},e.exports=t.default})),s=i.svg,n=i.xlink,o={};o[s.name]=s.uri,o[n.name]=n.uri;var a,l=function(e,t){return void 0===e&&(e=""),"<svg "+function(e){return Object.keys(e).map((function(t){return t+'="'+e[t].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(r(o,t||{}))+">"+e+"</svg>"},c=i.svg,u=i.xlink,d={attrs:(a={style:["position: absolute","width: 0","height: 0"].join("; ")},a[c.name]=c.uri,a[u.name]=u.uri,a)},h=function(e){this.config=r(d,e||{}),this.symbols=[]};h.prototype.add=function(e){var t=this.symbols,r=this.find(e.id);return r?(t[t.indexOf(r)]=e,!1):(t.push(e),!0)},h.prototype.remove=function(e){var t=this.symbols,r=this.find(e);return!!r&&(t.splice(t.indexOf(r),1),r.destroy(),!0)},h.prototype.find=function(e){return this.symbols.filter((function(t){return t.id===e}))[0]||null},h.prototype.has=function(e){return null!==this.find(e)},h.prototype.stringify=function(){var e=this.config.attrs,t=this.symbols.map((function(e){return e.stringify()})).join("");return l(t,e)},h.prototype.toString=function(){return this.stringify()},h.prototype.destroy=function(){this.symbols.forEach((function(e){return e.destroy()}))};var p=function(e){var t=e.id,r=e.viewBox,i=e.content;this.id=t,this.viewBox=r,this.content=i};p.prototype.stringify=function(){return this.content},p.prototype.toString=function(){return this.stringify()},p.prototype.destroy=function(){var e=this;["id","viewBox","content"].forEach((function(t){return delete e[t]}))};var f=function(e){var t=!!document.importNode,r=(new DOMParser).parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(r,!0):r},g=function(e){function t(){e.apply(this,arguments)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={isMounted:{}};return r.isMounted.get=function(){return!!this.node},t.createFromExistingNode=function(e){return new t({id:e.getAttribute("id"),viewBox:e.getAttribute("viewBox"),content:e.outerHTML})},t.prototype.destroy=function(){this.isMounted&&this.unmount(),e.prototype.destroy.call(this)},t.prototype.mount=function(e){if(this.isMounted)return this.node;var t="string"==typeof e?document.querySelector(e):e,r=this.render();return this.node=r,t.appendChild(r),r},t.prototype.render=function(){var e=this.stringify();return f(l(e)).childNodes[0]},t.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(t.prototype,r),t}(p),m={autoConfigure:!0,mountTo:"body",syncUrlsWithBaseTag:!1,listenLocationChangeEvent:!0,locationChangeEvent:"locationChange",locationChangeAngularEmitter:!1,usagesToUpdate:"use[*|href]",moveGradientsOutsideSymbol:!1},b=function(e){return Array.prototype.slice.call(e,0)},v=function(){return/firefox/i.test(navigator.userAgent)},y=function(){return/msie/i.test(navigator.userAgent)||/trident/i.test(navigator.userAgent)},w=function(){return/edge/i.test(navigator.userAgent)},x=function(e){return(e||window.location.href).split("#")[0]},S=function(e){angular.module("ng").run(["$rootScope",function(t){t.$on("$locationChangeSuccess",(function(t,r,i){var s,n,o;s=e,n={oldUrl:i,newUrl:r},(o=document.createEvent("CustomEvent")).initCustomEvent(s,!1,!1,n),window.dispatchEvent(o)}))}])},k=function(e,t){return void 0===t&&(t="linearGradient, radialGradient, pattern"),b(e.querySelectorAll("symbol")).forEach((function(e){b(e.querySelectorAll(t)).forEach((function(t){e.parentNode.insertBefore(t,e)}))})),e},O=i.xlink.uri,_=/[{}|\\\^\[\]`"<>]/g;function E(e){return e.replace(_,(function(e){return"%"+e[0].charCodeAt(0).toString(16).toUpperCase()}))}var j,C=["clipPath","colorProfile","src","cursor","fill","filter","marker","markerStart","markerMid","markerEnd","mask","stroke","style"],T=C.map((function(e){return"["+e+"]"})).join(","),R=function(e,t,r,i){var s=E(r),n=E(i);(function(e,t){return b(e).reduce((function(e,r){if(!r.attributes)return e;var i=b(r.attributes),s=t?i.filter(t):i;return e.concat(s)}),[])})(e.querySelectorAll(T),(function(e){var t=e.localName,r=e.value;return-1!==C.indexOf(t)&&-1!==r.indexOf("url("+s)})).forEach((function(e){return e.value=e.value.replace(new RegExp(s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"),n)})),function(e,t,r){b(e).forEach((function(e){var i=e.getAttribute("xlink:href");if(i&&0===i.indexOf(t)){var s=i.replace(t,r);e.setAttributeNS(O,"xlink:href",s)}}))}(t,s,n)},A="mount",N="symbol_mount",P=function(e){function t(t){var i=this;void 0===t&&(t={}),e.call(this,r(m,t));var s,n=(s=s||Object.create(null),{on:function(e,t){(s[e]||(s[e]=[])).push(t)},off:function(e,t){s[e]&&s[e].splice(s[e].indexOf(t)>>>0,1)},emit:function(e,t){(s[e]||[]).map((function(e){e(t)})),(s["*"]||[]).map((function(r){r(e,t)}))}});this._emitter=n,this.node=null;var o=this.config;if(o.autoConfigure&&this._autoConfigure(t),o.syncUrlsWithBaseTag){var a=document.getElementsByTagName("base")[0].getAttribute("href");n.on(A,(function(){return i.updateUrls("#",a)}))}var l=this._handleLocationChange.bind(this);this._handleLocationChange=l,o.listenLocationChangeEvent&&window.addEventListener(o.locationChangeEvent,l),o.locationChangeAngularEmitter&&S(o.locationChangeEvent),n.on(A,(function(e){o.moveGradientsOutsideSymbol&&k(e)})),n.on(N,(function(e){var t;o.moveGradientsOutsideSymbol&&k(e.parentNode),(y()||w())&&(t=[],b(e.querySelectorAll("style")).forEach((function(e){e.textContent+="",t.push(e)})))}))}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var i={isMounted:{}};return i.isMounted.get=function(){return!!this.node},t.prototype._autoConfigure=function(e){var t=this.config;void 0===e.syncUrlsWithBaseTag&&(t.syncUrlsWithBaseTag=void 0!==document.getElementsByTagName("base")[0]),void 0===e.locationChangeAngularEmitter&&(t.locationChangeAngularEmitter="angular"in window),void 0===e.moveGradientsOutsideSymbol&&(t.moveGradientsOutsideSymbol=v())},t.prototype._handleLocationChange=function(e){var t=e.detail,r=t.oldUrl,i=t.newUrl;this.updateUrls(r,i)},t.prototype.add=function(t){var r=e.prototype.add.call(this,t);return this.isMounted&&r&&(t.mount(this.node),this._emitter.emit(N,t.node)),r},t.prototype.attach=function(e){var t=this,r=this;if(r.isMounted)return r.node;var i="string"==typeof e?document.querySelector(e):e;return r.node=i,this.symbols.forEach((function(e){e.mount(r.node),t._emitter.emit(N,e.node)})),b(i.querySelectorAll("symbol")).forEach((function(e){var t=g.createFromExistingNode(e);t.node=e,r.add(t)})),this._emitter.emit(A,i),i},t.prototype.destroy=function(){var e=this.config,t=this.symbols,r=this._emitter;t.forEach((function(e){return e.destroy()})),r.off("*"),window.removeEventListener(e.locationChangeEvent,this._handleLocationChange),this.isMounted&&this.unmount()},t.prototype.mount=function(e,t){if(void 0===e&&(e=this.config.mountTo),void 0===t&&(t=!1),this.isMounted)return this.node;var r="string"==typeof e?document.querySelector(e):e,i=this.render();return this.node=i,t&&r.childNodes[0]?r.insertBefore(i,r.childNodes[0]):r.appendChild(i),this._emitter.emit(A,i),i},t.prototype.render=function(){return f(this.stringify())},t.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},t.prototype.updateUrls=function(e,t){if(!this.isMounted)return!1;var r=document.querySelectorAll(this.config.usagesToUpdate);return R(this.node,r,x(e)+"#",x(t)+"#"),!0},Object.defineProperties(t.prototype,i),t}(h),$=e((function(e){var t,r,i,s,n;e.exports=(r=[],i=document,s=i.documentElement.doScroll,(n=(s?/^loaded|^c/:/^loaded|^i|^c/).test(i.readyState))||i.addEventListener("DOMContentLoaded",t=function(){for(i.removeEventListener("DOMContentLoaded",t),n=1;t=r.shift();)t()}),function(e){n?setTimeout(e,0):r.push(e)})}));window.__SVG_SPRITE__?j=window.__SVG_SPRITE__:(j=new P({attrs:{id:"__SVG_SPRITE_NODE__"}}),window.__SVG_SPRITE__=j);var M=function(){var e=document.getElementById("__SVG_SPRITE_NODE__");e?j.attach(e):j.mount(document.body,!0)};return document.body?M():$(M),j},e.exports=r()}).call(this,r(31))},function(e,t,r){"use strict";var i,s=r(0),n=function(e,t,r,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};!function(e){e.MEDIUM="",e.SMALL="small"}(i||(i={}));class o extends s.a{connectedCallback(){super.connectedCallback();let e=this.getAttribute("value");e&&this.options.forEach(t=>{t.selected=t.value===e})}handleChange(e){let t=new CustomEvent("input");this.dispatchEvent(t),t=new CustomEvent("change"),this.dispatchEvent(t)}get value(){return this.shadowRoot.querySelector("select").value}render(){return s.c`
		<select @change="${this.handleChange}">
		${this.options.map(({value:e,label:t,selected:r})=>s.c`<option value="${e}" .selected="${r}">${t}</option>`)}
		</select>
		<svg class="icon" viewBox="0 0 16 16">
			<polygon points="8,15 4,10 12,10"/>
			<polygon points="8,2 12,7 4,7"/>
		</svg>
    `}}o.styles=s.b`

		:host {
			background: var(--input-bg);
			display: inline-block;
			position: relative;
		}

		svg.icon {
			position: absolute;
			width: 1em;
			height: 1em;
			right: 4px;
			top: 50%;
			transform: translateY(-50%);
			fill: var(--input-fg);
			pointer-events: none;
		}

		select {
			-webkit-appearance: none;
			font: inherit;
			color: var(--input-fg);
			line-height: 1.2;
			background: var(--input-bg);
			margin: 0;
			border: 0;
			padding: .2em 1.4em .2em .4em;
			width: 100%;
			max-width: 100%;
		}
	`,n([Object(s.d)({type:Array})],o.prototype,"options",void 0),customElements.define("ciu-select",o)},function(e,t,r){"use strict";var i=r(0),s=r(6),n=function(e,t,r,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};class o extends i.a{constructor(e){super(),this.legend="",this.legend=e}render(){return s.c`
	  <fieldset>
		<legend>${this.legend}</legend>
		<slot></slot>
	  </fieldset>
	  `}}o.styles=i.b`
		:host {
			width: 100%;
		}

		fieldset {
			width: auto;
			//margin: 0 30px 0 0;
			padding: 0.3em;
			padding-bottom: 10px;
			border: none;
			
			font-size: 1em;
		}

		legend:not(:empty) {
			background: rgba(255,255,255,0.2);
			color: #fff;
			padding: .1em .5em;
		}
	`,n([Object(i.d)({type:String})],o.prototype,"legend",void 0),customElements.define("ciu-fieldset",o)},function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(0),s=r(8),n=function(e,t,r,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};class o extends i.a{updateOptions(){this.options.forEach(e=>{e.selected=e.value===this.value})}updated(e){if(e.get("value")){let e=new CustomEvent("change");this.dispatchEvent(e)}}handleClick(e){this.value=e.target.value}handleHover(e,t,r){e&&r?s.a.show(t,r):s.a.hide(t)}handlePointerUp(e){let t=e.target;setTimeout(()=>{s.a.cancel(t)},100)}render(){return this.updateOptions(),i.c`
			${this.options.map(({value:e,label:t,selected:r,tooltip:s})=>i.c`<button value="${e}"
					@click="${this.handleClick}"
					@mouseover="${({target:e})=>this.handleHover(!0,e,s)}"
					@mouseout="${({target:e})=>this.handleHover(!1,e)}"
					@pointerup="${this.handlePointerUp}"
					class="${r?"is-selected":""}">${t}</button>`)}
		`}}o.styles=i.b`
		:host {
			display: flex;
		}

		button {
			margin-left: 0px;
			margin-right: 1px;
			padding: 7px;
			border: none;
			background-color: var(--primary-bg-shade-1);
			color: var(--dim-fg);
			font-size: 0.8em;
			cursor: pointer;
			font-family: inherit;
		}

		button:not(.is-selected):hover {
			color: var(--primary-fg);
		}

		button:focus {
			outline: 2px solid var(--focus);
		}

		.is-selected {
			color: white;
			background-color: var(--color-bg);
			cursor: default;
		}
	`,n([Object(i.d)({type:String})],o.prototype,"value",void 0),customElements.define("ciu-button-bar",o)},function(e,t,r){"use strict";var i=r(0);t.a=i.b`input,select,textarea{color:var(--input-fg);background:var(--input-bg);border:0}.ciu-section-heading{margin-top:0;font-size:1.5rem;font-weight:300}`},function(e,t,r){"use strict";var i=r(0),s=r(6),n=r(5),o=(r(34),r(1)),a=(r(35),function(e,t,r,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o});class l extends i.a{constructor(){super(),this.options=[],this.selectedOption="",o.a.subscribe(()=>{this.selectedOption=o.a.getState().featureSort,this.makeOptions()}),this.selectedOption=o.a.getState().featureSort,this.makeOptions()}makeOptions(){let e=[];for(const t in n.g)e.push({value:t,label:n.g[t],selected:this.selectedOption===t});this.options=e}handleChange(e){this.selectedOption=e.target.value}render(){return s.c`
			<ciu-fieldset legend="List sort">
				<ciu-select
					.options="${this.options}"
					@change="${this.handleChange}" ></ciu-select>
			</ciu-fieldset>
		`}}a([Object(i.d)({type:Array})],l.prototype,"options",void 0),a([Object(i.d)({type:String})],l.prototype,"selectedOption",void 0),customElements.define("feature-sort-option-set",l)},function(e,t,r){"use strict";r.d(t,"a",(function(){return R}));var i=r(0),s=r(36),n=r(5),o=r(1),a=r(6),l=r(12);class c extends s.a{constructor(){super(),this.options=[{label:"Current aligned",value:n.d.NORMAL,tooltip:"The current version of each browser is aligned in the same row"},{label:"Usage relative",value:n.d.USAGE_RELATIVE,tooltip:()=>a.c`
				The height of each set of browser versions
				is based on browser usage (${Object(l.d)(o.a.getState().primaryUsage)})`},{label:"Date relative",value:n.d.DATE_RELATIVE,tooltip:"Each version appears in a timeline based on when it was released"}],this.value=o.a.getState().viewMode}connectedCallback(){super.connectedCallback()}}customElements.define("ciu-view-mode-bar",c);class u extends s.a{constructor(){super(),this.options=[{label:"Filtered",value:n.c.FILTERED,tooltip:()=>a.c`Displays a custom set of browsers and versions. Currently based on the set 
				"${o.a.getState().primaryBrowserset}".<br>
				To customize, look under <b>Settings</b>`},{label:"All",value:n.c.ALL,tooltip:"All tracked browser versions are shown. Multiple versions are combined into a single block when support is the same."}],this.value=o.a.getState().showMode}connectedCallback(){super.connectedCallback(),o.a.subscribe(()=>{this.value=o.a.getState().showMode})}}customElements.define("ciu-show-mode-bar",u);var d=r(23),h=r(28),p=r(17),f=r(8),g=r(20),m=function(e,t,r,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};class b extends i.a{connectedCallback(){super.connectedCallback(),o.a.subscribe(()=>{const e=o.a.getState();this.makeStateId(e)})}updated(e){(e.has("featureModel")||e.has("browserModel"))&&this.requestUpdate()}makeStateId(e){this.stateId=[e.primaryUsage,e.usageThreshold].join("+")}handleHeadingActivate({target:e,type:t}){let r=n.e[this.browserModel.id];if(r&&f.a.show(e,r,{instant:"click"===t,align:"left"}),this.needsSupportWarning){const t="Support data for Internet Explorer is no longer being updated by MDN browser-compat-data and may be incorrect";f.a.show(e,t,{instant:!0,align:"left"})}}getVersions(){if(!this.featureModel&&!this.isPreview)return[];if(this.showMode===n.c.ALL&&this.viewMode!==n.d.DATE_RELATIVE)return Object(d.c)(this.browserModel,this.featureModel);let e,t=o.a.getState();e=this.isPreview?p.c:t.primaryBrowserset;let r=null;return this.viewMode!==n.d.DATE_RELATIVE&&(r=r=>!!(r.era>=0&&t.showNewerVersions)||r.filterByBrowserSet(e)),Object(d.e)(this.browserModel,this.featureModel,r)}renderVersions(e){return e.map(e=>e?i.c`
					<ciu-version-support
						tabindex="0"
						.viewMode="${this.viewMode}"
						.versions="${e}">
					</ciu-version-support>
				`:this.viewMode===n.d.NORMAL?i.c`<div class="placeholder-version"></div>`:void 0)}renderDateRelative(e){return i.c`
			<h4 class="browser-heading  browser--${this.browserModel.id}">
				${this.browserModel.name}
			</h4>
			<div class="released-versions  date-relative">
				${this.renderVersions(e)}
			</div>
		`}separateVersions(e){let t=e.findIndex(e=>e[0].versionModel.era>0),r=!!e.find(e=>0===e[0].versionModel.era),i=e,s=[];return t>=0&&(i=e.splice(0,t),s=e),e.length&&!r&&i.push(null),{firstVersions:i,futureVersions:s}}get needsSupportWarning(){return"ie"===this.browserModel.id&&this.featureModel instanceof g.a}renderBrowserWarning(){return this.needsSupportWarning?"⚠️":""}renderCurrentAligned(e){let{firstVersions:t,futureVersions:r}=this.separateVersions(e),s=this.browserModel.id in n.e||this.needsSupportWarning;return i.c`
			<h4
				@click=${this.handleHeadingActivate}
				@mouseover=${this.handleHeadingActivate}
				@mouseout=${f.b}
				class="browser-heading  browser--${this.browserModel.id}">
				${this.browserModel.name}
				${this.renderBrowserWarning()}
				${s?i.c`<span class="browser-note-symbol">*</span>`:""}
			</h4>
			<div class="released-versions">
				${this.renderVersions(t)}
			</div>
			<div class="future-versions">
				${this.renderVersions(r)}
			</div>
		`}createRenderRoot(){return this}render(){let e=this.getVersions();switch(this.viewMode){case n.d.NORMAL:case n.d.USAGE_RELATIVE:return this.renderCurrentAligned(e);case n.d.DATE_RELATIVE:return this.renderDateRelative(e)}}}b.styles=i.b`
		:host {
			min-width: 72px;
			position: relative;
			top: 0px;
			margin-bottom: 4rem;
			margin-right: 4px;
			transition: top 0.5s, vertical-align 0.5s;
			flex: 1;
			flex-basis: auto;
			max-width: 10em;
		}

		ul, li {
			list-style: none;
			margin: 0;
			padding: 0;
		}
	`,m([Object(i.d)({type:Object})],b.prototype,"browserModel",void 0),m([Object(i.d)({type:Object})],b.prototype,"featureModel",void 0),m([Object(i.d)({type:String})],b.prototype,"viewMode",void 0),m([Object(i.d)({type:String})],b.prototype,"showMode",void 0),m([Object(i.d)({type:String})],b.prototype,"stateId",void 0),m([Object(i.d)({type:Boolean})],b.prototype,"isPreview",void 0),m([Object(i.d)({type:Array})],b.prototype,"versions",void 0),customElements.define("ciu-browser-support",b);var v=r(7),y=i.b`code{padding:1px 4px;font-family:Inconsolata,monospace;background-color:var(--code-bg)}.num-tag{float:left;padding:0 2px;height:10px;font-size:10px;line-height:10px;font-weight:400;background-color:#fff;color:#000;text-shadow:none}.tab-content .num-tag{font-size:12px;line-height:12px;height:12px;margin-right:.5em;margin-top:.2em}.num-tag--1{background-color:#fff}.num-tag--2{background-color:#ddd}.num-tag--3{background-color:#eee}.num-tag--4{background-color:#fff}.num-tag--5{background-color:#ddd}.num-tag--6{background-color:#eee}li{list-style:none;margin-bottom:.5em}code{background-color:rgba(0,0,0,.3)}.y{background:var(--supported);color:var(--supported-fg)}.a{background:var(--partial);color:var(--partial-fg)}.n,.p{background:var(--no-support);color:var(--no-support-fg)}.u{background:var(--unknown);color:var(--unknown-fg)}:host{position:absolute;pointer-events:none}:host(.is-clickable){pointer-events:all}.num-tag{margin-right:5px}.support-tooltip{display:block;position:relative;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:10px;min-width:12em;text-align:left;z-index:100;line-height:1.3em;transition:background-color .5s;font-size:12px;border:1px solid rgba(0,0,0,.05)}.on-left{border-right-width:0;box-shadow:rgba(0,0,0,.4) -5px 5px}.on-right{border-left-width:0;box-shadow:rgba(0,0,0,.4) 5px 5px}.tooltip-heading{margin-top:0;margin-bottom:.2em;font-size:16px;text-align:center}.tooltip-subheading{font-size:12px;font-weight:700;margin-top:0;margin-bottom:.5em}.tooltip__columns{display:flex;justify-content:space-around;align-items:flex-start}.tooltip__section-heading{display:block;text-align:center;border-bottom:1px solid rgba(255,255,255,.3);margin:0 auto 12px;padding:3px 6px;font-size:1em;white-space:nowrap}.tooltip__browser,.tooltip__support{box-sizing:border-box;min-width:120px;max-width:210px;flex-shrink:0;padding:8px}.tooltip__support ol{margin:0;padding:.5em}.tooltip__support ol li{margin:0;list-style:decimal;margin-bottom:.8em}.tooltip__support ol li span{padding:0 2px;display:inline-block}.tooltip__separator{width:0;background:rgba(255,255,255,.3);flex-shrink:0;border:0;align-self:stretch}.tooltip-info{margin-top:0;margin-bottom:1em}.tooltip-info a{color:currentColor}.tooltip-usage{margin-top:0;margin-left:0;margin-bottom:0}.tooltip-usage dd,.tooltip-usage dt{display:inline;margin:0;line-height:1.5em}.tooltip-usage dd:after{content:"\\A";white-space:pre-wrap}.tooltip-list{padding-left:0;margin-top:0;line-height:1.4em}.tooltip-note{margin-left:0;list-style:none}.tooltip-note>.num-tag{margin-left:-1em;margin-right:.5em}.tooltip__footer{font-size:14px;text-align:center;position:relative;padding-top:40px;top:-40px;margin-bottom:-40px}.tooltip__footer a{display:block;padding:1em 0;color:inherit}.tooltip__footer a:hover{background-color:rgba(0,0,0,.2)}.tooltip__footer a:focus{outline:2px solid var(--focus)}.primary-usage{font-weight:700}.prefix{display:inline-block;background-color:#ff6;color:#000}.pointer{position:absolute;top:calc(50% - 8px);width:20px;height:20px;transform:rotate(45deg)}.hover-space{position:absolute;top:calc(50% - 50px);width:30px;height:100px;background:rgba(0,0,0,0)}.on-left~.hover-space{right:-10px}.on-right~.hover-space{left:-10px}.on-left+.pointer{right:-3px}.on-right+.pointer{left:-3px}.on-bottom+.pointer{top:-3px;left:calc(50% - 8px)}.on-bottom~.hover-space{top:-10px;left:calc(50% - 40px);z-index:100;height:calc(100% - 70px);width:80px;background:rgba(0,0,0,0)}a svg{stroke:currentColor;width:10px;height:10px;margin-left:.3em;vertical-align:middle}`,w=r(2),x=r(15),S=r(24),k=function(e,t,r,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};class O extends i.a{constructor(){super(...arguments),this.preventAutoHide=!1}show(e){this.refEl=e,this.isClickable=!0,this.preventAutoHide=this.refEl.matches(":focus");const t=e=>{const r=e.target,i=e.composedPath();r===this||this.shadowRoot.contains(i[0])||this.refEl&&i.includes(this.refEl)||(document.body.removeEventListener("mouseup",t),this.hide())};this.refEl&&document.body.addEventListener("mouseup",t)}hide(){this.refEl=null,this.hoverTimer=null}handleTabKey(e){const t=this.shadowRoot.activeElement.matches(":focus")?this.shadowRoot.activeElement:null,r=e.shiftKey;if(t){const i=t===this.tabbableEls[0];(t===this.tabbableEls[this.tabbableEls.length-1]&&!r||i&&r)&&(this.refEl.focus(),r&&e.preventDefault())}}handleKeyDown(e){switch(e.key){case"Tab":this.handleTabKey(e)}}positionTooltip(){const e=this.refEl,t=this.shadowRoot.querySelector(".support-tooltip"),r=e.getBoundingClientRect(),i=this.getRootNode().host.offsetParent,s=i.getBoundingClientRect(),n=this.offsetWidth,o=this.offsetHeight;let a=r.left-s.left+r.width+8,l=r.top-s.top+r.height/2-o/2,c=a+n>i.offsetWidth,u=!1;c&&(a-=n+r.width+16-1,a<0&&(a=r.left+r.width/2-n/2-s.left,l=r.top-s.top+r.height+8,u=!0)),t.classList.toggle("on-left",c),t.classList.toggle("on-right",!c&&!u),t.classList.toggle("on-bottom",u),this.style.left=a+"px",this.style.top=l+"px",this.setAttribute("aria-hidden","false")}getUsageItems(){var e=this.refEl.first.versionModel.usageDataById;let t=o.a.getState().primaryUsage,r=Object.keys(e).map(r=>{let{name:i}=e[r];return{id:r,name:i,percentage:this.refEl.getUsagePercentage(r),isPrimary:r===t}});return r.sort((e,t)=>e.isPrimary?-1:1),r}renderUsage(){let e=this.refEl.isRange?"Total usage":"Usage";return i.c`
			<h5 class="tooltip-subheading">${e}</h5>
			<dl class="tooltip-usage">
				${this.getUsageItems().map(e=>i.c`
						<dt class="${e.isPrimary?"primary-usage":""}">
							${e.name}:
						</dt>
						<dd>
							${Object(w.n)(e.percentage)}%
						</dd>
					`)}
			</dl>
		`}updated(){Object(w.d)(this.shadowRoot),this.refEl&&(this.positionTooltip(),this.tabbableEls=Array.from(this.shadowRoot.querySelectorAll("a, button")))}getNumberedNoteText(){const e=this.refEl.getNumberedNoteText();if(e.length)return i.c`
				<h4>Notes</h4>
				${e.map(([e,t])=>i.c`
						<li>
							<span class="num-tag  num-tag--${e}">
								${e}
							</span>
							${Object(w.i)(t)}
						</li>
					`)}
			`}handleMouseDown(e){this.isClickable&&e.preventDefault()}handleMouseOver(e){this.hoverTimer||(this.hoverTimer=setTimeout(()=>{!this.preventAutoHide&&this.refEl&&this.hide(),this.hoverTimer=null},170))}handleMouseOut(e){this.preventAutoHide||this.hide()}renderVersionName(){return this.refEl.getVersionName()}renderTooltip(){let e=this.refEl;this.classList.toggle("is-clickable",!!this.isClickable);const t=e.getSupportClass(),r=e.getSupportText(!0),s=e.getReleasedDateRange(),n=e.first.featureModel.id;let o="Browser version"+(e.isRange?"s":""),a=Object(S.a)(this.refEl);return i.c`
			<div
				@keydown=${this.handleKeyDown}
				@mouseover=${this.handleMouseOver}
				@mousedown=${this.handleMouseDown} class="support-tooltip  ${t}
			"
				role="tooltip"
				id="tooltip--${n}"
				aria-hidden="true">
				<h4 class="tooltip-heading">${this.renderVersionName()}</h4>
				<div class="tooltip__columns">
					<div class="tooltip__support">
						<h6 class="tooltip__section-heading">Support info</h6>
						<p class="tooltip-info">
							${r}
							${this.getNumberedNoteText()}
						</p>
					</div>
					<hr class="tooltip__separator">
					<div class="tooltip__browser">
						<h6 class="tooltip__section-heading">${o}</h6>
						<p class="tooltip-info">
							Released ${s}
						</p>
						${this.renderUsage()}
					</div>
				</div>
				${a?this.renderBrowserStackLink():null}
				
			</div>
			<div class="pointer  ${t}"></div>
			${a?i.c`
				<div class="hover-space"></div>`:null}
			
			`}renderBrowserStackLink(){return i.c`
			<div
				class="tooltip__footer"
				@mouseover=${()=>this.preventAutoHide=!0}>
				<a
					href="${Object(S.c)(this.refEl)}"
					target="_blank"
					@click=${this.handleBrowserStackClick}>
					Test on ${this.renderVersionName()}<svg>
						<use xlink:href="#external-link" />
					</svg>
				</a>
			</div>
		`}handleBrowserStackClick(){x.a.trackBrowserStackClick("table")}render(){return this.refEl?(this.style.display="",this.renderTooltip()):(this.style.display="none",i.c``)}}O.styles=y,k([Object(i.d)({type:Object})],O.prototype,"refEl",void 0),k([Object(i.d)({type:Boolean})],O.prototype,"isClickable",void 0),customElements.define("ciu-support-tooltip",O);var _=r(4),E=i.b`.options{display:flex;flex-wrap:wrap;align-items:center;margin-bottom:5px}ciu-view-mode-bar{margin-right:20px}.settings-btn{display:flex;justify-content:center;align-items:center;margin-left:10px;width:25px;height:25px;border-radius:50%}.settings-btn svg{pointer-events:none;fill:var(--dim-fg)}.settings-btn:hover{background-color:var(--form-bg)}.settings-btn:hover svg{fill:#fff}.wrap{display:block;text-align:center;overflow-x:auto;overflow-y:hidden;scrollbar-color:var(--primary-bg-shade-3) var(--primary-bg-shade-1)}::-webkit-scrollbar{width:10px;background-color:var(--primary-bg-shade-1)}::-webkit-scrollbar-track{width:10px}::-webkit-scrollbar-thumb{width:8px;height:8px;background-color:var(--primary-bg-shade-3);border-radius:8px}.wrap.view-mode-date_relative{max-height:75vh;overflow:auto}.support-table{display:inline-grid;position:relative;justify-content:start;align-items:flex-start;padding-top:.5em;margin-bottom:20px}.view-mode-date_relative .support-table>.mobile-browser{margin-left:22px}.view-mode-date_relative .support-table>.mobile-browser .browser-heading:before{content:"";width:24px;height:100%;background:var(--primary-bg);position:absolute;top:0;left:-24px}.view-mode-date_relative .support-table>.mobile-browser~.mobile-browser{margin-left:0}.view-mode-date_relative .support-table>.mobile-browser~.mobile-browser .browser-heading:before{display:none}.view-mode-date_relative .support-table{display:inline-flex}.date-lines{position:absolute;bottom:0;left:0}.date-line{position:absolute;display:flex;justify-content:space-between;border-bottom:2px solid var(--primary-bg-shade-3);margin-bottom:2px;width:100%;text-align:left;font-size:.8em}ciu-browser-support{display:contents}.view-mode-date_relative ciu-browser-support{max-width:78px;min-width:78px;height:100%;display:block;position:relative;top:-8px}.has-tooltip ciu-version-support{filter:brightness(.8)}.has-tooltip ciu-version-support:focus,.has-tooltip ciu-version-support:hover{transition:none;filter:none}ciu-version-support:not(:focus){cursor:pointer}ciu-version-support:focus{outline:2px solid #0ff!important}.browser-heading{position:relative;grid-row-start:1;display:flex;align-items:center;align-self:end;justify-content:center;justify-self:end;min-height:40px;max-width:74px;width:calc(100% - 4px);margin:0 2px;border-bottom-width:4px;border-bottom-style:solid;padding-bottom:2px;text-align:center;font-size:14px;font-weight:400;color:var(--primary-fg);line-height:1.2}.support-list .browser-heading{height:35px;width:999px;max-width:100%}.browser-note-symbol{position:absolute;top:0;right:0;padding-right:0;padding-left:.2em;color:#ba2f00;pointer-events:none}.view-mode-date_relative .browser-heading{position:sticky;height:4.5em;background-color:var(--primary-bg);top:0;z-index:1}.view-mode-date_relative .browser-heading:after,.view-mode-date_relative .browser-heading:before{content:"";display:block;position:absolute;top:0;left:-2px;width:2px;height:100%;background:var(--primary-bg)}.view-mode-date_relative .browser-heading:after{left:auto;right:-2px}.browser--edge,.browser--ie{border-color:#385884}.browser--and_ff,.browser--firefox{border-color:#a36223}.browser--and_chr,.browser--chrome{border-color:#3f77bb}.browser--safari{border-color:#666}.browser--opera{border-color:#812323}.browser--op_mini,.browser--op_mob{border-color:#992626}.browser--ios_saf{border-color:#333}.browser--android{border-color:#7ba13b}.browser--bb{border-color:#111}.browser--samsung{border-color:#9753ff}.browser--qq{border-color:#148dfa}.browser--kaios{border-color:#6f02b5}.released-versions{position:relative;display:flex;flex-direction:column;grid-row-start:2;align-self:end;justify-self:end;width:78px;height:100%}.date-relative{min-height:300px}.released-versions:before{display:block;content:"";height:100%;margin:0 2px;background:rgba(0,0,0,.03)}.placeholder-version{margin:2px;box-sizing:border-box;min-height:30px;max-height:30px;outline:4px solid var(--primary-bg-shade-2);background:var(--primary-bg-shade-2)}.future-versions{grid-row-start:3}`,j=r(10),C=function(e,t,r,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o},T=function(e,t,r,i){return new(r||(r=Promise))((function(s,n){function o(e){try{l(i.next(e))}catch(e){n(e)}}function a(e){try{l(i.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}l((i=i.apply(e,t||[])).next())}))};const R=40;class A extends i.a{constructor(){super(),this.shownBrowsers=[],this.tooltipShown=!1,this.isBrowserPreview=!1,o.a.subscribe(()=>{this.updateShownBrowsers()}),_.a.subscribe("defaultShowModeChanged",e=>{this.setDefaultModes(),this.updateShownBrowsers()})}connectedCallback(){super.connectedCallback(),this.setDefaultModes(),this.updateShownBrowsers()}showTooltip(e){this.supportTooltip.show(e),this.tooltipShown=!0,x.a.trackCellHover(e)}handleMouseOver(e){if(this.isBrowserPreview)return;const t="focusin"===e.type;if(this.focusedVersion&&!t)return;let r=e.target;if(r instanceof h.a){let e=this.tooltipShown?10:100;setTimeout(()=>{r===this.currentHoverEl&&(this.showTooltip(r),r.hasNoteNumbers()&&this.dispatchEvent(new CustomEvent("versionMouseOver",{detail:{version:r}})))},e),this.setHoverEl(r)}}handleMouseOut(e){if(this.isBrowserPreview||this.focusedVersion)return;let t=e.target;t instanceof h.a&&(t.hasNoteNumbers()&&this.dispatchEvent(new CustomEvent("versionMouseOut",{detail:{version:t}})),this.setHoverEl(null))}handleTooltipMouseEnter(e){this.setHoverEl(e.currentTarget)}handleTooltipMouseOut(e){e.target.handleMouseOut(e),this.setHoverEl(null)}setHoverEl(e){this.currentHoverEl=e,e?clearTimeout(this.tooltipTimeout):this.tooltipTimeout=window.setTimeout(()=>{this.currentHoverEl||!this.supportTooltip||this.supportTooltip.preventAutoHide||this.shadowRoot.activeElement instanceof h.a||this.hideTooltip()},500)}hideTooltip(){this.supportTooltip.hide(),this.tooltipShown=!1}updateVersions(){this.shadowRoot.querySelectorAll("ciu-browser-support").forEach(e=>e.requestUpdate())}firstUpdated(){this.viewMode===n.d.DATE_RELATIVE&&this.scrollToBottom()}updated(e){this.isConnected&&(e.has("featureModel")?this.requestUpdate():(e.has("previewRules")&&this.updateShownBrowsers(),this.shownBrowsers.length&&(this.updateVersions(),this.updateComplete.then(e=>{setTimeout(()=>{this.dispatchEvent(new CustomEvent("rendered"))},0)})),this.supportTooltip||(this.supportTooltip=this.shadowRoot.querySelector("ciu-support-tooltip")),e.has("viewMode")&&this.viewMode===n.d.DATE_RELATIVE&&this.scrollToBottom()))}getWrap(){return this.shadowRoot.querySelector(".js-wrap")}scrollToBottom(){let e=this.getWrap(),t=e.firstElementChild.clientHeight;e.scrollTop=t}setDefaultModes(){if(this.isBrowserPreview)return;let e=o.a.getState();this.viewMode=e.viewMode,this.showMode=e.showMode}updateShownBrowsers(){return T(this,void 0,void 0,(function*(){o.a.getState();this.showMode===n.c.ALL?this.shownBrowsers=v.b.getBrowsers():this.isBrowserPreview?this.shownBrowsers=yield Object(p.i)(this.previewRules):this.shownBrowsers=yield Object(p.h)()}))}handleFocusIn(e){e.target instanceof h.a&&(this.focusedVersion=e.target,x.a.trackCellFocus(e.target)),this.handleMouseOver.apply(this,arguments)}handleFocusOut(e){this.focusedVersion=null,this.handleMouseOut.apply(this,arguments)}handleViewModeChange(e){this.viewMode=e.target.value,this.updateShownBrowsers(),x.a.trackViewModeChange(this.viewMode)}handleShowModeChange(e){this.showMode=e.target.value,this.updateShownBrowsers()}getDateHeight(){let e=1/0;for(let t of this.shownBrowsers)for(let r of t.versionArray)r.releaseDate&&(e=Math.min(e,r.releaseDate.getTime()));return Object(d.b)(new Date(e))+120}handleSettingsClick(e){e.preventDefault(),j.a.navigateToPath(e.currentTarget.getAttribute("href"))}selectAdjacentVersion(e,t,r){let i=this.shadowRoot.activeElement;if(!(i instanceof h.a))return;let s=Object(w.k)(i),n=s.centerX,o=s.centerY;0!==t&&(n+=s.width*t),0!==r&&(o+=s.height*r);let a=this.supportTooltip;a&&(a.style.pointerEvents="none");let l=this.shadowRoot.elementFromPoint(n,o);a&&(a.style.pointerEvents=""),l instanceof h.a&&(e.preventDefault(),l.focus())}handleTabKey(e){if(!(this.shadowRoot.activeElement instanceof h.a))return;let t=this.supportTooltip;if(t){const r=t.shadowRoot.querySelector("a");r&&!e.shiftKey&&(t.preventAutoHide=!0,r.focus(),e.preventDefault())}}handleKeyDown(e){switch(e.key){case"Tab":this.handleTabKey(e)}}handleKeyUp(e){switch(e.key){case"ArrowRight":this.selectAdjacentVersion(e,1,0);break;case"ArrowLeft":this.selectAdjacentVersion(e,-1,0);break;case"ArrowUp":this.selectAdjacentVersion(e,0,-1);break;case"ArrowDown":this.selectAdjacentVersion(e,0,1)}}makeGridColumns(){let e=0,t=!1,r=this.shownBrowsers.map(r=>{let i;return"mobile"!==r.type||t?(i=78,e+=i,`${i}px`):(t=!0,i=100,"100px")});return{totalWidth:e,columns:r.join(" ")}}renderModeControls(){return i.c`
			<div class="options">
				<ciu-view-mode-bar
					@change="${this.handleViewModeChange}"
					></ciu-view-mode-bar>

				<ciu-show-mode-bar
					@change="${this.handleShowModeChange}"
					></ciu-show-mode-bar>

				<a href="/ciu/settings#display"
					class="settings-btn"
					@click=${this.handleSettingsClick}
					>
					<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16" class="icon">
						<title>Open settings</title>
						<path d="M16,8.87V7L15.74,7l-1.95-.64-.52-1.25,1-2.12L13,1.67l-.25.12-1.82.93L9.66,2.2,8.87,0H7.05L7,.26,6.33,2.21l-1.25.52L3,1.73,1.67,3l.12.25.93,1.82L2.2,6.34,0,7.13V8.95L.26,9l2,.64.52,1.25L1.73,13,3,14.33l.25-.12,1.82-.93,1.26.52L7.13,16H8.95L9,15.74l.64-2,1.26-.52,2.11,1L14.33,13l-.12-.25-.93-1.82.52-1.26ZM8,10.55A2.55,2.55,0,1,1,10.55,8,2.55,2.55,0,0,1,8,10.55Z"/>
					</svg>
				</a>
			</div>
		`}renderDateLines(e){if(!this.offsetParent)return;let t=0,r=[],s=this.offsetParent.clientWidth,n=this.makeGridColumns().totalWidth+100,o=(new Date).getUTCFullYear()+1;for(;t<e&&o>2e3;){let e=new Date(Date.parse(o+""));t=Object(d.b)(e),t>-R&&r.push([o,t]),o--}return i.c`
			<div class="date-lines" style="width:${n}px">
				${r.map(([e,t])=>i.c`
					<div
						class="date-line"
						style="bottom:${t}px">
						<span>${e}</span>
						${n>s?i.c`
							<span>${e}</span>
						`:""}
					</div>
				`)}
			</div>
		`}render(){let e=0;const t=this.viewMode===n.d.DATE_RELATIVE;t&&(e=this.getDateHeight());const{columns:r}=this.makeGridColumns();return i.c`
			${this.isBrowserPreview?"":this.renderModeControls()}
			
			<div class="wrap  js-wrap  ${this.viewMode}">
				<div
					class="support-table  ${this.tooltipShown?"has-tooltip":""}"
					style="grid-template-columns: ${r}; ${e?`height: ${e}px`:""}"
					@mouseover="${this.handleMouseOver}"
					@mouseout="${this.handleMouseOut}"
					@keyup="${this.handleKeyUp}"
					@keydown="${this.handleKeyDown}"
					@focusin="${this.handleFocusIn}"
					@focusout="${this.handleFocusOut}">
					${t?this.renderDateLines(e):""}
					${this.shownBrowsers.map(e=>i.c`
						<ciu-browser-support
							class="${e.type}-browser"
							.isPreview=${this.isBrowserPreview}
							.browserModel="${e}"
							.featureModel="${this.featureModel}"
							.viewMode="${this.viewMode}"
							.showMode="${this.showMode}"></ciu-browser-support>
					`)}
				</div>
				<ciu-support-tooltip
					@mouseover=${this.handleTooltipMouseEnter}
					@mouseout=${this.handleTooltipMouseOut}
				></ciu-support-tooltip>
			</div>
			`}}A.styles=E,C([Object(i.d)({type:Object})],A.prototype,"featureModel",void 0),C([Object(i.d)({type:String})],A.prototype,"viewMode",void 0),C([Object(i.d)({type:String})],A.prototype,"showMode",void 0),C([Object(i.d)({type:Array})],A.prototype,"shownBrowsers",void 0),C([Object(i.d)({type:Boolean})],A.prototype,"tooltipShown",void 0),C([Object(i.d)({type:Boolean})],A.prototype,"isBrowserPreview",void 0),C([Object(i.d)({type:Array})],A.prototype,"previewRules",void 0),customElements.define("ciu-support-table",A)},function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));class i{constructor(){this.dataLoaded=!1,this.dataLoadedPromise=new Promise((e,t)=>{this.dataLoadedResolve=e,this.dataLoadedReject=t})}loadData(){return Promise.resolve({})}}},function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r(40);class s extends i.a{constructor(e){super(),this.type="sr",this.dataLoaded=!1,this.id=e.id,this.title=e.title,this.sourceData=e}initFullData(e){this.title=e.title,this.sourceData=e,this.dataLoaded=!0,this.dataLoadedResolve()}handleDataLoadError(){this.dataLoadedReject()}loadData(){return this.dataLoadedPromise}}},function(e,t,r){"use strict";var i=r(0),s=r(45);class n extends s.a{constructor(){super(),this.type="checkbox"}renderSVG(){return i.c`
			<svg class="icon" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16">
				<path id="box" d="M0,0v16h16V0H0z M15,15H1V1h14V15z"/>
				<path id="checked-box" d="M18.812-2L18.38-2.998C17.312-2.063,16.264-1.042,15.259,0H0v16h16V1.839C16.935,0.469,17.888-0.844,18.812-2z M15,15H1V1
				h13.312c-2.877,3.101-5.271,6.196-6.424,7.57L3.804,5.371L2,6.824L9.057,14C9.889,11.868,12.286,7.488,15,3.334V15z"/>
			</svg>
		`}}customElements.define("ciu-labeled-checkbox",n)},function(e,t,r){"use strict";var i=r(0),s=r(10),n=function(e,t,r,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};class o extends i.a{constructor(){super(...arguments),this.size="normal",this.onClose=null}handleClose(){s.a.closeOverlay(),this.onClose&&this.onClose()}connectedCallback(){super.connectedCallback(),document.body.style.overflow="hidden",this.keyFn=({key:e})=>{"Escape"===e&&this.handleClose()},document.addEventListener("keyup",this.keyFn)}disconnectedCallback(){super.disconnectedCallback(),document.body.style.overflow="",document.removeEventListener("keyup",this.keyFn)}render(){return i.c`
			<div class="inner ${this.size}">
				<ciu-button icon class="close-button" @click="${this.handleClose}">
					✕
				</ciu-button>
				<slot></slot>
			</div>
		`}}o.styles=i.b`
		:host {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 100;
			overflow: auto;
			background: rgba(0,0,0,0.9);
			font: inherit;
			--padding: 20px;
		}

		@media (max-width:500px) {
			:host {
				--padding: 10px;
			}
		}

		ciu-button {
			float: right;
		}

		.inner {
			position: absolute;
			background-color: var(--primary-bg);
			color: var(--primary-fg);
			
			margin: auto;
			margin-bottom: var(--padding);
			max-width: 900px;
			padding: var(--padding);
			top: var(--padding);
			right: var(--padding);
			left: var(--padding);
			min-height: calc(100vh - calc( var(--padding) * 4 ));

			transition: color 0.75s, background-color 0.75s;
		}

		.inner.large {
			max-width: 1200px; 
		}
	`,n([Object(i.d)({type:String})],o.prototype,"size",void 0),customElements.define("ciu-overlay",o)},function(e,t,r){"use strict";(function(e,i){var s,n=r(47);s="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:i;var o=Object(n.a)(s);t.a=o}).call(this,r(31),r(50)(e))},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(0),s=function(e,t,r,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};class n extends i.a{constructor(){super(...arguments),this.name="",this.value="",this.label="",this.checked=!1,this.linkAsRadio=!1,this.selectOnClick=!1}handleChange(e){this.checked=e.target.checked;let t=new CustomEvent("change");this.dispatchEvent(t)}handleClick(e){e.preventDefault();let t=new CustomEvent("linkClicked");this.dispatchEvent(t)}renderSVG(){}render(){return i.c`
			<label part="label">
				<div class="wrap">
					<input
						type="${this.type}"
						name="${this.name}"
						value="${this.value}"
						@change="${this.handleChange}"
						.checked="${this.checked}">
						
					${this.renderSVG()}
					</div>
					
					${this.linkAsRadio?i.c`<a href="#" @click="${this.handleClick}">${this.label}<slot></slot></a>`:i.c`${this.label}<slot></slot>`}
			</label>
		`}}n.styles=i.b`
		:host {
			line-height: 1.3;
		}

		label {
			display: flex;
			align-items: center;
			padding: 5px 0;
		}

		.wrap {
			display: flex;
			align-items: baseline;
			position: relative;
			width: 1em;
			height: 1em;
			margin-right: 0.3em;
		}

		input, .icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: 0;
			width: 16px;
			height: 16px;
		}

		input {
			-webkit-appearance: none;
			margin: 0;
			padding: 0;
			font: inherit;
			color: inherit;
			line-height: 1em;
			border: 0;
			border-radius: 0;
			background: none;

			display: inline-block;
		}

		.icon {
			fill: currentColor;
			pointer-events: none;
		}

		#checked-box {
			display: none;
		}

		input:checked + .icon > #box {
			display: none;
		}

		input:checked + .icon > #checked-box {
			display: block;
		}

		input:focus + .icon {
			outline: none;
			box-shadow: 0 0 5px 1px lightblue, inset 0 0 1px 1px lightblue;
		}

		a {
			color: white;
		}
	`,s([Object(i.d)({type:String})],n.prototype,"type",void 0),s([Object(i.d)({type:String})],n.prototype,"name",void 0),s([Object(i.d)({type:String})],n.prototype,"value",void 0),s([Object(i.d)({type:String})],n.prototype,"label",void 0),s([Object(i.d)({type:Boolean})],n.prototype,"checked",void 0),s([Object(i.d)({type:Boolean})],n.prototype,"linkAsRadio",void 0),s([Object(i.d)({type:Boolean})],n.prototype,"selectOnClick",void 0),customElements.define("ciu-labeled-box",n)},function(e,t,r){!function(){"use strict";var r=1;if(!Object.create)var i=function(){};var s=Array.prototype.slice,n={attributes:{},eventHandlers:{"-1":{}},guid:-1,addEvent:function(e){n.eventHandlers[e.guid][e.type]||(n.eventHandlers[e.guid][e.type]=[]),n.eventHandlers[e.guid][e.type].push({guid:e.guid,handler:e.handler,scope:e.scope,type:e.type})},addEventHandler:function(e,t,r){var i,s={};for(var o in"string"==typeof e?(i=r||!1,s[e]=t):(i=t||!1,s=e),s)for(var a=s[o],l=o.split(" "),c=0,u=l.length;c<u;c++){var d=l[c];n.addEvent.call(this,{guid:this._guid||this._.guid,handler:a,scope:i,type:d})}},addGuid:function(e,t){e._guid&&!t||(e._guid=r++,n.attributes[e._guid]={},n.eventHandlers[e._guid]={})},attr:function(e){return n.attributes[e]},clone:function(e){return n.extend({},e)},create:function(e){return Object.create?Object.create(e):(i.prototype=e,new i)},createSubclass:function(e,t){function r(){if(!(this instanceof r))throw new Error("Please use 'new' when initializing Stapes classes");this.on&&n.addGuid(this,!0),s.apply(this,arguments)}t=t||!1;var i=(e=e||{}).superclass.prototype,s=e.hasOwnProperty("constructor")?e.constructor:function(){};for(var a in t&&n.extend(i,o),r.prototype=n.create(i),r.prototype.constructor=r,n.extend(r,{extend:function(){return n.extendThis.apply(this,arguments)},parent:i,proto:function(){return n.extendThis.apply(this.prototype,arguments)},subclass:function(e){return(e=e||{}).superclass=this,n.createSubclass(e)}}),e)"constructor"!==a&&"superclass"!==a&&(r.prototype[a]=e[a]);return r},emitEvents:function(e,t,r,i){r=r||!1,i=i||this._guid;for(var o=s.call(n.eventHandlers[i][e]),a=0,l=o.length;a<l;a++){var c=n.extend({},o[a]),u=c.scope?c.scope:this;r&&(c.type=r),c.scope=u,c.handler.call(c.scope,t,c)}},extend:function(){for(var e=s.call(arguments),t=e.shift(),r=0,i=e.length;r<i;r++){var n=e[r];for(var o in n)t[o]=n[o]}return t},extendThis:function(){var e=s.call(arguments);return e.unshift(this),n.extend.apply(this,e)},makeUuid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))},removeAttribute:function(e,t){t=t||!1;for(var r=n.trim(e).split(" "),i=0,s=r.length;i<s;i++){var o=n.trim(r[i]);o&&(delete n.attr(this._guid)[o],t||(this.emit("change",o),this.emit("change:"+o),this.emit("remove",o),this.emit("remove:"+o)))}},removeEventHandler:function(e,t){var r=n.eventHandlers[this._guid];if(e&&t){if(!(r=r[e]))return;for(var i,s=0,o=r.length;s<o;s++)(i=r[s].handler)&&i===t&&(r.splice(s--,1),o--)}else e?delete r[e]:n.eventHandlers[this._guid]={}},setAttribute:function(e,t,r){r=r||!1;var i=this.has(e),s=n.attr(this._guid)[e];if(t!==s){if(n.attr(this._guid)[e]=t,r)return;this.emit("change",e),this.emit("change:"+e,t);var o={key:e,newValue:t,oldValue:s||null};this.emit("mutate",o),this.emit("mutate:"+e,o);var a=i?"update":"create";this.emit(a,e),this.emit(a+":"+e,t)}},trim:function(e){return e.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},typeOf:function(e){return null==e?String(e):Object.prototype.toString.call(e).replace(/\[object |\]/g,"").toLowerCase()},updateAttribute:function(e,t,r){var i=this.get(e);"object"===n.typeOf(i)&&(i=n.clone(i));var s=t.call(this,i,e);n.setAttribute.call(this,e,s,r||!1)}},o={emit:function(e,t){t=void 0===t?null:t;for(var r=e.split(" "),i=0,s=r.length;i<s;i++){var o=r[i];n.eventHandlers[-1].all&&n.emitEvents.call(this,"all",t,o,-1),n.eventHandlers[-1][o]&&n.emitEvents.call(this,o,t,o,-1),"number"==typeof this._guid&&(n.eventHandlers[this._guid].all&&n.emitEvents.call(this,"all",t,o),n.eventHandlers[this._guid][o]&&n.emitEvents.call(this,o,t))}},off:function(){n.removeEventHandler.apply(this,arguments)},on:function(){n.addEventHandler.apply(this,arguments)}};n.Module=function(){},n.Module.prototype={create:function(){throw new Error("".concat("create() on Stapes modules no longer works from 0.8.0. ","Check the docs."))},each:function(e,t){var r=n.attr(this._guid);for(var i in r){var s=r[i];e.call(t||this,s,i)}},extend:function(){return n.extendThis.apply(this,arguments)},filter:function(e){var t=[],r=n.attr(this._guid);for(var i in r)e.call(this,r[i],i)&&t.push(r[i]);return t},get:function(e){if("string"==typeof e)return this.has(e)?n.attr(this._guid)[e]:null;if("function"==typeof e){var t=this.filter(e);return t.length?t[0]:null}},getAll:function(){return n.clone(n.attr(this._guid))},getAllAsArray:function(){var e=[],t=n.attr(this._guid);for(var r in t){var i=t[r];"object"===n.typeOf(i)&&!i.id&&(i.id=r),e.push(i)}return e},has:function(e){return void 0!==n.attr(this._guid)[e]},map:function(e,t){var r=[];return this.each((function(i,s){r.push(e.call(t||this,i,s))}),t||this),r},push:function(e,t){if("array"===n.typeOf(e))for(var r=0,i=e.length;r<i;r++)n.setAttribute.call(this,n.makeUuid(),e[r]);else n.setAttribute.call(this,n.makeUuid(),e,t||!1);return this},remove:function(e,t){return"function"==typeof e?this.each((function(r,i){e(r)&&n.removeAttribute.call(this,i,t)})):n.removeAttribute.call(this,e,t||!1),this},set:function(e,t,r){if("object"==typeof e)for(var i in e)n.setAttribute.call(this,i,e[i]);else n.setAttribute.call(this,e,t,r||!1);return this},size:function(){var e=0,t=n.attr(this._guid);for(var r in t)e++;return e},update:function(e,t,r){return"string"==typeof e?n.updateAttribute.call(this,e,t,r||!1):"function"==typeof e&&this.each((function(t,r){n.updateAttribute.call(this,r,e)})),this}};var a={_:n,create:function(){var e=n.create(n.Module.prototype);return n.addGuid(e,!0),a.mixinEvents(e),e},extend:function(){return n.extendThis.apply(n.Module.prototype,arguments)},mixinEvents:function(e){return e=e||{},n.addGuid(e),n.extend(e,o)},on:function(){n.addEventHandler.apply(this,arguments)},subclass:function(e,t){return t=t||!1,(e=e||{}).superclass=t?function(){}:n.Module,n.createSubclass(e,!t)},version:"0.7.1"};e.exports&&(t=e.exports=a),t.Stapes=a}()},function(e,t,r){"use strict";function i(e){var t,r=e.Symbol;return"function"==typeof r?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}r.d(t,"a",(function(){return i}))},function(e,t,r){"use strict";var i,s,n=r(0),o=function(e,t,r,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};!function(e){e.MEDIUM="",e.SMALL="small"}(i||(i={})),function(e){e.NONE="",e.INVERT="invert",e.CTA="cta",e.TEXT="text"}(s||(s={}));class a extends n.a{constructor(){super(...arguments),this.name="",this.value="",this.size=i.MEDIUM,this.variant=s.NONE,this.disabled=!1,this.icon=!1}handleClick(e){e.preventDefault(),e.stopImmediatePropagation();let t=new CustomEvent("click");this.dispatchEvent(t)}render(){return n.c`
		<button 
			class="
				${this.size}
				${this.variant}
				${this.icon?"icon":""}"
			name="${this.name}"
			value="${this.value}"
			?disabled="${this.disabled}"
			@click="${this.handleClick}">
			<slot></slot>
		</button>
    `}}a.styles=n.b`
		button {
			color: var(--button-fg);
			background-color: var(--button-bg);
			border: 0;
			padding: .3em 1em;
			font-size: 1.2em;
			border-radius: 0;
			margin: 0;
			font: inherit;
			-webkit-appearance: none;
		}

		/* button:not(:disabled) {
			cursor: pointer;
			color: #fff;
			background: $index;
		} */

		button:disabled {
			opacity: 0.5;
		}

		button:hover:not(:disabled),
		button:active:not(:disabled),
		button:focus:not(:disabled) {
			cursor: pointer;
			color: var(--button-bg);
			background: var(--button-fg);
		}

		.small {
			padding: 3px;
			font-size: 0.8em;
			padding: 3px 10px;
		}

		.invert {
			color: var(--button-bg);
			background: var(--button-fg);
		}

		.cta {
			background: var(--cta-button-bg);
			color: var(--cta-button-fg);
		}

		button.text {
			background: transparent;
			color: inherit;
		}

		.text:hover:not(:disabled),
		.text:active:not(:disabled),
		.text:focus:not(:disabled) {
			color: white;
			background: rgba(255,255,255,0.1);
		}

		button.cta:hover:not(:disabled) {
			background: var(--cta-button-fg);
			color: var(--cta-button-bg);
		}

		.icon {
			width: 2em;
			height: 2em;
			padding: 0.2em;
			border-radius: 50%;
			background: transparent;

			color: var(--primary-fg);
		}

		.invert:hover {
			color: var(--button-fg);
			background: var(--button-bg);
		}
	`,o([Object(n.d)({type:String})],a.prototype,"name",void 0),o([Object(n.d)({type:String})],a.prototype,"value",void 0),o([Object(n.d)({type:String})],a.prototype,"size",void 0),o([Object(n.d)({type:String})],a.prototype,"variant",void 0),o([Object(n.d)({type:Boolean})],a.prototype,"disabled",void 0),o([Object(n.d)({type:Boolean})],a.prototype,"icon",void 0),customElements.define("ciu-button",a)},function(e,t,r){"use strict";var i=r(0),s=r(6),n=r(5),o=(r(34),r(1)),a=r(3),l=(r(35),r(42),r(38),r(7)),c=function(e,t,r,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};class u extends i.a{constructor(){super(),this.value=n.a,this.options=[],this.selectedOption="",this.allChecked=!0,this.routeId="tables",this.type="feature-tables"}connectedCallback(){super.connectedCallback(),o.a.subscribe(()=>{this.makeOptionsFromState()}),this.makeOptionsFromState()}makeOptionsFromState(){let e,t=o.a.getState();e="comparison"===this.type?t.comparisonCats:t.cats,this.makeOptions(Object(l.h)(e))}makeOptions(e){const t=l.a.categories;this.options=t.map(t=>({value:t,label:t,selected:!e||e.includes(t)})),e&&(this.allChecked=t.length===e.length),this.value=this.allChecked?"all":e}handleChange(e){let t=e.target,r=this.catEls;"all"===t.value&&r.forEach(e=>e.checked=t.checked);let i=Array.from(r).filter(e=>e.checked).map(e=>e.value);this.allChecked=i.length>0&&i.length===r.length,this.value=this.allChecked?"all":i,"comparison"===this.type&&o.a.dispatch(Object(a.J)(i))}updated(){this.catEls=this.shadowRoot.querySelectorAll('ciu-labeled-checkbox[name="cats"]')}childLinkClicked(e){let t=e.target;for(let e of Array.from(this.catEls))e.checked=e===t;this.handleChange(e)}render(){return s.c`
			<ciu-fieldset legend="Categories" class="${this.type}">
				<ciu-labeled-checkbox
					value="all"
					@change="${this.handleChange}"
					.checked="${this.allChecked}"
					label="All"></ciu-labeled-checkbox>

				${this.options.map(({value:e,label:t,selected:r})=>s.c`
					<ciu-labeled-checkbox
						name="cats"
						value="${e}"
						@change="${this.handleChange}"
						@linkClicked="${this.childLinkClicked}"
						.checked="${r}"
						.linkAsRadio="${!0}"
						label="${t}"></ciu-labeled-checkbox>`)}
			</ciu-fieldset>
		`}}u.styles=i.b`
		.comparison ciu-labeled-checkbox {
			display: inline-block;
			margin-right: 1em;
		}
	`,c([Object(i.d)({type:Array})],u.prototype,"options",void 0),c([Object(i.d)({type:String})],u.prototype,"selectedOption",void 0),c([Object(i.d)({type:Boolean})],u.prototype,"allChecked",void 0),c([Object(i.d)({type:String})],u.prototype,"routeId",void 0),c([Object(i.d)({type:String})],u.prototype,"type",void 0),customElements.define("ciu-category-options",u)},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},,,,,function(e,t,r){"use strict";r.r(t);var i=r(1),s=r(10),n=r(4),o=r(17),a=r(12),l=r(7),c=r(2),u=r(9),d=r(6),h=r(15),p=function(e,t,r,i){return new(r||(r=Promise))((function(s,n){function o(e){try{l(i.next(e))}catch(e){n(e)}}function a(e){try{l(i.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}l((i=i.apply(e,t||[])).next())}))};let f,g="default";function m(){var e=window.innerWidth||document.documentElement.clientWidth;n.a.publish("widthChanged",e)}function b(e){return p(this,void 0,void 0,(function*(){if(!f)return;let t="",r=f;if(e.feats.length>=1){let r=e.feats[0],i=Object(l.i)(r);try{yield i.dataLoadedPromise}catch(e){return}t=i.sourceData.title}else e.search.length?t=`"${e.search}"`:"comparison"===e.page?t="Browser comparison":"settings"===e.page&&(t="Settings");t&&(r=t+" | "+f),document.title=r}))}function v(e){e=e||i.a.getState();let{theme:t}=e;if(!t||t===g)return;let r=Array.from(document.head.querySelectorAll("[data-theme]"));for(let e of r){let r=e.dataset.theme===t;e.dataset.media||(e.dataset.media=e.media),"default"===t?(e.media=e.dataset.media,e.disabled=!1):(e.disabled=!r,e.media=r?"all":"not all")}g=t}function y(e){e.installTo(Object(c.g)(".js-feature-list-wrap"))}i.a.subscribe((function(){let e=i.a.getState();var t,r;t=e.accessibleColors,r=document.body.classList,t?r.add("accessible-colors"):r.remove("accessible-colors"),function(e){var t=document.body.classList;e?t.add("show-full-prefix"):t.remove("show-full-prefix")}(e.showFullPrefix),v(e),b(e)})),n.a.subscribe("widthChanged",(function(e){}));var w={init:function(){var e,t;document.documentElement.classList.remove("no-js"),v(),(history.pushState&&location.search.indexOf("code=")>-1||location.search.indexOf("logout=")>-1)&&history.pushState({},"Home","/"),n.a.subscribe("domReady",(function(){u.a.listen(document.body,"click",(function(e){var t=e.target;if("A"==t.tagName){var r=t.href,i=t.getAttribute("href");if(i===location.origin)return;if(i=i.replace(location.origin+"/",""),r.indexOf("browserstack.com")>-1&&h.a.trackBrowserStackClick("landing-page"),0===r.indexOf(location.origin)){if(e.ctrlKey||e.metaKey)return;if(r.match(/usage-table|issue-list|feed\//))return;e.preventDefault(),i=i.replace(/^\/?\#feat\=/,""),s.a.navigateToPath(i)}}}))})),e=Object(c.g)("#feat_search"),t=Object(c.g)(".js-search-result-info"),n.a.publish("searchInputReady",e,t),function(){const e=Object(c.g)(".js-legend");let t=Object(c.m)();Object(d.d)(d.c`
        <p class="accessible-colors-note--enable">
            <a href="/ciu/settings#theme" class="external-link">
                Enable color-blind friendly colors
            </a>
        </p>
        <p class="accessible-colors-note--disable">
            <a href="/ciu/settings#theme" class="external-link">
                Enable default colors
            </a>
        </p>
    `,t),e.appendChild(t)}();let[r,o]=document.title.split(" | ");var a;f=o||r,b(i.a.getState()),u.a.listen(window,"resize",m),m(),n.a.subscribe("optionTagsReady",y),n.a.publish("domReady",null),setTimeout((function(){n.a.publish("secondaryInit",null)}),1e3),a=Object(c.g)(".js-options-toggle"),u.a.listen(a,"click",(function(){s.a.navigate("settings")})),u.a.listen(document.body,"click",(function(e){e.target.classList.contains("js-show-settings")&&s.a.navigate("settings")})),Object(c.g)(".js-search").appendChild(a)}},x=r(3),S=r(5);function k(e){if(e===S.a)return e;return e.map(e=>encodeURIComponent(e)).join(",")}s.a.subscribe(e=>{switch(e.name){case"home":case"news":case"settings":case"import":case"about":case"index":case"comparison":i.a.dispatch(Object(x.A)(e.name));break;case"browserset":i.a.dispatch(Object(x.B)(e.params.setName));break;case"feats":const t=e.value.split(",");i.a.dispatch(Object(x.M)(t));break;case"feats-alt":const r=e.params.feats.split(",");i.a.dispatch(Object(x.M)(r));break;case"saved":i.a.dispatch(Object(x.V)(!0));break;case"tables":let s=i.a.getState().cats,n=i.a.getState().statuses;e.params.cats&&e.params.cats!==S.a&&(s=e.params.cats.split(","),i.a.dispatch(Object(x.H)(s))),e.params.statuses&&e.params.statuses!==S.a&&(n=e.params.statuses.split(","),i.a.dispatch(Object(x.S)(n)));break;case"search":const o=e.params.search;if(!o.trim().length)break;i.a.dispatch(Object(x.Q)(o));break;case"compare":const a=e.params.compare;let l;e.params.compareCats&&e.params.compareCats!==S.a&&(l=e.params.compareCats.replace("+"," ").split(",")),i.a.dispatch(Object(x.I)(a,l))}}),i.a.subscribe(()=>{const e=function(e){let t="";if(e.feats.length)t=e.feats.join(","),t.length>240&&(t="?feats="+t);else if(e.search.length)t="?search="+encodeURIComponent(e.search);else if(e.comparison)t="?compare="+e.comparison+"&compareCats="+k(e.comparisonCats);else if(e.cats&&e.cats!==S.a||e.statuses&&e.statuses!==S.a){let r=[];e.cats&&r.push("cats="+k(e.cats)),e.statuses&&r.push("statuses="+k(e.statuses)),r.length&&(t="?"+r.join("&"))}else{if(e.showSavedFeats){return s.b.find(({name:e})=>"saved"===e).path}if(e.page!==x.d.TABLES){let t=s.b.find(({name:t})=>e.page===t).path;return"browserset"===e.page&&e.editedBrowserset.length&&(t+="?setName="+encodeURIComponent(e.editedBrowserset)),t}}return"/"+t}(i.a.getState());s.a.getCurPath()!==e&&s.a.navigateToPath(e)}),function(){let e=location.hash,t={index:"/ciu/index",info_news:"/ciu/news",info_about:"ciu/about",comparison:"/ciu/comparison"};if(!e||"#"===e)return;e=e.substr(1);let r,i=new URLSearchParams(e);if(i.has("feat"))r=i.get("feat");else if(e.includes("=")){let e=i.toString();e=e.replace("compare_cats","compareCats"),r="?"+i}else t[e]&&(r=t[e]);r&&history.replaceState(e,"",r)}();var O=r(8),_=r(24);const E={};let j="";function C(e){const t=function(e){switch(e){case x.d.SETTINGS:case x.d.BROWSERSET:case x.d.IMPORT:return!0}return!1}(e);n.a.publish("pageSectionDisplayed",e,t)}function T(e){let t=Object(c.g)(".js-site-nav.active");t&&t.classList.remove("active");let r=E[e];r&&r.classList.add("active")}function R(){let e=i.a.getState().page;if(j)e!==j&&(T(e),C(e),O.a.closeAll());else{const r=Object(c.g)(".js-content").getAttribute("data-static-id");e!==r?C(e):(t=r,n.a.publish("startPageFound",t)),T(e)}var t;j=e}n.a.subscribe("domReady",(function(){i.a.subscribe(R),Object(c.h)(".js-site-nav a").forEach(e=>{var t=e.getAttribute("data-route");t&&(E[t]=e.parentNode,u.a.listen(e,"click",e=>{e.ctrlKey||e.metaKey||(e.preventDefault(),s.a.navigate(t,{ciu:""}))}))}),R(),Object(_.b)()}));class A{constructor(){this.PAGE_ID=null,this.isDisplayed=!1,this.templateUrl="",this.cssLoaded=!1,n.a.subscribe("pageSectionDisplayed",this.handlePageSectionDisplayed.bind(this)),n.a.subscribe("startPageFound",this.handleStartPageFound.bind(this))}enhancePage(){}showPlaceholder(){this.container=Object(c.g)(".js-content"),this.container.innerHTML="",this.timer=setTimeout(()=>{this.container.firstChild},1e3)}loadPage(){this.showPlaceholder(),this.cssLoader&&!this.cssLoaded&&this.cssLoader().then(e=>{var t=Object(c.m)("style");t.innerHTML=e.default.cssText,document.head.appendChild(t),this.cssLoaded=!0}),fetch(this.templateUrl).then(e=>{e.text().then(e=>{this.container.innerHTML=e,clearTimeout(this.timer),this.enhancePage()})})}handlePageHidden(){}handlePageSectionDisplayed(e,t){if(e===this.PAGE_ID){if(this.isDisplayed)return;this.loadPage(),this.isDisplayed=!0}else t||(this.isDisplayed=!1,this.handlePageHidden())}handleStartPageFound(e){e===this.PAGE_ID&&(this.enhancePage(),this.isDisplayed=!0)}}function N(e){if(!e.description)return null;var t="<p>"+e.description.split("\n").join("</p><p>")+"</p>",r=Object(c.m)("div",{class:"news-item__content"});return r.innerHTML=t,Object(c.m)("article",{class:"news-item"},[Object(c.m)("date",{class:"news-item__date"},e.date),Object(c.m)("h3",{class:"news-item__heading"},e.title),r])}new class extends A{constructor(){super(...arguments),this.PAGE_ID=x.d.NEWS}setupNews(e){let t=Object(c.m)("div",{class:"info-news  text-content  js-news-root"});this.container.appendChild(t);for(var r=Object(c.m)(),i=Math.min(30,e.length),s=0;s<i;s++){var n=N(e[s]);n&&r.appendChild(n)}t.appendChild(r)}enhancePage(){this.loadPage()}loadPage(){this.showPlaceholder(),fetch("/process/get_news.php").then(e=>{e.json().then(e=>{this.container.innerHTML="",this.setupNews(e)})})}};var P=r(0),$=(r(34),r(35),r(42),r(38),r(13)),M=(r(39),r(48),r(32)),B=r.n(M),L=r(33),D=r.n(L),I=new B.a({id:"external-link",use:"external-link-usage",viewBox:"0 0 12 12",content:'<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" viewBox="0 0 12 12" id="external-link">\n\n<path id="external-link_Layer0_0_1_STROKES" stroke-width="1" stroke-linejoin="round" stroke-linecap="round" fill="none" d="\nM 8 0.5\nL 11.5 0.5 11.5 4\nM 4 0.5\nL 0.5 0.5 0.5 11.5 11.5 11.5 11.5 8\nM 11.5 0.5\nL 5 7" />\n\n</symbol>'}),F=(D.a.add(I),r(20)),U=P.b`code{padding:1px 4px;font-family:Inconsolata,monospace;background-color:var(--code-bg)}.num-tag{float:left;padding:0 2px;height:10px;font-size:10px;line-height:10px;font-weight:400;background-color:#fff;color:#000;text-shadow:none}.tab-content .num-tag{font-size:12px;line-height:12px;height:12px;margin-right:.5em;margin-top:.2em}.num-tag--1{background-color:#fff}.num-tag--2{background-color:#ddd}.num-tag--3{background-color:#eee}.num-tag--4{background-color:#fff}.num-tag--5{background-color:#ddd}.num-tag--6{background-color:#eee}:host{display:block;margin-top:1em;color:var(--primary-fg)}.mdn-attribution{display:flex;flex-direction:column;align-items:flex-start;border-top:1px solid rgba(0,0,0,.25);padding-top:15px}.mdn-attribution img{display:block;margin-top:5px;width:auto;max-width:100%;height:26px;filter:var(--black-img-filter)}.feature-tab{display:inline-block;font-size:18px;line-height:18px;font-family:inherit;font-weight:300;height:40px;padding:10px 9px 10px 12px;position:relative;background:var(--primary-bg-shade-1);color:inherit;margin-right:8px;border:0}.feature-tab:focus{outline:0}.feature-tab:focus:not(.is-selected){border-bottom:2px solid rgba(18,101,199,.61);margin-bottom:-2px}.feature-tab.is-selected,.feature-tab:active,.feature-tab:hover{background:var(--primary-bg-shade-2);z-index:3;cursor:pointer}.feature-tab.is-selected:after,.feature-tab:active:after,.feature-tab:hover:after{border-left-color:var(--primary-bg-shade-2)}.feature__feedback-textarea{box-sizing:border-box;width:100%;max-width:800px;display:block;border:0;margin:.5em 0 1em;padding:.5rem;border-radius:0;font:inherit}.feature-tab:after{content:"";position:absolute;z-index:2;right:-14px;bottom:0;border-left:14.4px solid var(--primary-bg-shade-1);border-top:40px solid transparent}.feature-tab-link{font-size:13px;text-decoration:none;float:right}.tab-content{margin:-1rem;margin-right:-.7em;margin-top:0;padding:1.3rem;background:var(--primary-bg-shade-2);line-height:1.5;font-size:1em}.tab-content li{margin:0 0 .5em 1.2em}@media(max-width:48em){.tab-content{margin-top:0;margin-left:-.5rem;margin-right:-.5rem;margin-bottom:-1rem;padding:20px 16px;font-size:.8125em}}@media(max-width:66em){.feature-list-wrap--with-options .tab-content{margin-top:0;margin-left:-.5rem;margin-right:-.5rem;margin-bottom:-1rem;padding:20px 16px;font-size:.8125em}}ol,ul{margin:0;padding:0}ol{list-style-type:disc}p{margin:0 0 .3em 0}a{color:var(--inline-link);transition:background-color .15s}a:hover{background-color:var(--primary-bg)}.num-note{margin:.5em 0 0;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:100%}.num-note.highlight{background:var(--form-bg)}.num-note:hover{border-bottom:1px solid #c832f7;margin-bottom:-1px}.num-note.note-not-applicable{display:none}.num-note+.mdn-attribution{margin-top:1em}.note{font-style:italic;color:#705d3d}.linktag{color:#444;display:inline-block;font-size:10px;padding:1px 5px}.browserstack-form{display:flex;align-items:center;gap:1em .4em;flex-wrap:wrap;margin-top:2em}.browserstack-form ciu-select{margin-right:1em}a svg{display:inline-block;stroke:currentColor;width:.8em;height:.8em;margin-left:.3em;pointer-events:none;vertical-align:middle}.new-tag{background:var(--primary-fg);color:var(--primary-bg);display:inline-block;margin-left:5px;padding:0 4px;font-size:10px;vertical-align:2px;font-weight:400;line-height:1.4;margin-right:-5px;pointer-events:none}`,V=r(37),H=function(e,t,r,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o},z=function(e,t,r,i){return new(r||(r=Promise))((function(s,n){function o(e){try{l(i.next(e))}catch(e){n(e)}}function a(e){try{l(i.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}l((i=i.apply(e,t||[])).next())}))};class q extends P.a{constructor(){super(),this.tabs=[],this.isMdnFeature=!1,this.feedbackText="",this.noteNumbersShown=[],this.formStatus=""}init(){this.isMdnFeature=this.featureModel instanceof F.a,this.currentTabId="notes",this.tabs=[],this.addTabs()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return z(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.init(),this.bsBrowsers=yield Object(_.b)()}))}updated(e){Object(c.d)(this.shadowRoot),e.has("featureModel")&&(this.init(),this.requestUpdate())}toggleNoteHighlight(e,t){if("notes"!==this.currentTabId)return;const r=e.first.supportValue.noteNumbers;this.shadowRoot.querySelectorAll(".num-note").forEach(e=>{let i=+e.dataset.num;r.includes(i)&&e.classList.toggle("highlight",t)})}addTab(e,t){this.tabs.push({id:e,label:t})}addTabs(){let e=this.featureModel.sourceData;this.addTab("notes","Notes"),this.addTab("browserstack","Test on a real browser"),e.children&&e.children.length&&this.addTab("subfeatures","Sub-features"),this.isMdnFeature||(this.addTab("bugs",`Known issues (${this.featureModel.sourceData.bugCount})`),this.addTab("links",`Resources (${this.featureModel.sourceData.linkCount+1})`)),this.addTab("feedback","Feedback")}handleTabClick(e){let t=this.currentTabId;this.currentTabId=e.target.id,t!==this.currentTabId&&h.a.trackFeatureTabClick(this.currentTabId,this.featureModel.id)}handleNoteOver(e){this.dispatchEvent(new CustomEvent("noteSelected",{detail:{num:+e}}))}handleNoteOut(e){this.dispatchEvent(new CustomEvent("noteDeselected",{detail:{num:+e}}))}updateNotes(e){let t=new Set;e.shadowRoot.querySelectorAll("ciu-version-support").forEach(e=>{e.getNoteNumbers().forEach(e=>t.add(e))}),this.noteNumbersShown=Array.from(t).sort()}renderNumberedNotes(){let e=this.featureModel.sourceData.notesByNum;return this.noteNumbersShown.map(t=>{let r=t+"";return P.c`
				<p class="num-note" data-num=${r}
					@mouseover=${()=>this.handleNoteOver(r)}
					@mouseout=${()=>this.handleNoteOut(r)}>
					<span class="num-tag  num-tag--${r}">${r}</span>
					${Object(c.i)(e[r])}
				</p>
			`})}renderNotes(){let e=Object(c.i)(this.featureModel.sourceData.notes);return this.isMdnFeature?P.c`
				${e}
				${this.renderNumberedNotes()}
				<div class="mdn-attribution">
					Support data for this feature provided by: 
					<a href="https://github.com/mdn/browser-compat-data">
						<img src="/img/mdn-bcd.svg" alt="MDN browser-compat-data">
					</a>
				</div>
			`:P.c`
			${e}
			${this.renderNumberedNotes()}
		`}renderBrowserStack(){return P.c`
			<p>Test this and other features on your website for compatibility across 2,000 real browsers and devices using
				<a
				 href="https://www.browserstack.com?ref=caniuse-source&caniuse_source=brand-asset"
				 target="_blank"
				 @click=${()=>h.a.trackBrowserStackClick("test-on-a-real-browser-tab")}
				 >BrowserStack<svg>
					<use xlink:href="#external-link" />
				</svg>

				</a>
			</p>

			${this.renderBrowserStackForm()}
		`}renderBrowserStackForm(){if(!this.bsBrowsers)return null;let e=Object(_.d)(this.curBsBrowser);this.curBsBrowser||(this.curBsBrowser=e[0].value);let t=Object(_.e)(this.curBsBrowser,this.curBsVersion);return P.c`
			<p class="browserstack-form">
				<label>
					Select browser:
					<ciu-select
						.options=${e}
						@input=${e=>{this.curBsBrowser=e.target.value,this.curBsVersion=null}}
						></ciu-select>
				</label>
	
				<label>
					Select version:
					<ciu-select
						.options=${t}
						@input=${e=>{this.curBsVersion=e.target.value}}
					></ciu-select>
				</label>
				<ciu-button @click=${this.handleBsLaunchClick}>
					Launch this browser
				</ciu-button>
			</p>
		`}handleBsLaunchClick(){let e=this.curBsVersion;e||(e=Object(_.e)(this.curBsBrowser)[0].value),h.a.trackBrowserStackLaunch(this.curBsBrowser,e,this.featureModel.id),Object(_.f)(this.curBsBrowser,e,this.featureModel)}fetchData(e){return z(this,void 0,void 0,(function*(){let t=`/process/get_feat_data.php?feat=${this.featureModel.id}&type=${e}`,r=yield fetch(t);return yield r.json()}))}getCommentField(){return this.shadowRoot.querySelector('[name="comment"]')}handleFeedbackSubmit(e){e.preventDefault();let t=this.getCommentField(),r=new FormData;t.value.trim()?(r.append("comment",t.value),r.append("feat_id",this.featureModel.id),this.formStatus="processing",fetch("/process/feat_comment.php",{method:"POST",body:r}).then(e=>{this.formStatus="success",t.value="",this.feedbackText=""}).catch(e=>{this.formStatus="error"}),setTimeout(()=>{this.formStatus=""},3e3)):alert("Please enter a comment in the text field")}showFormStatus(){switch(this.formStatus){case"processing":return"Submitting your feedback...";case"success":return"Feedback sent!";case"error":return P.c`
					Unable to send feedback.
					Try <a href="http://a.deveria.com/contact">this form</a>
					instead?
				`}}renderMdnFeedback(){const e="https://github.com/mdn/browser-compat-data/blob/main/"+this.featureModel.sourceData.path;return P.c`
			<p>This support data comes from the MDN browser-compat-data repository.</p>
            <p>For corrections/updates, see the browser-compat-data
				<a href="${"https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md"}">Contributing docs</a>
             	and the <a href="${e}">support data for this feature</a>.</p>
		`}handleFeedbackInput(e){this.feedbackText=e.target.value}renderFeedback(){if(this.isMdnFeature)return this.renderMdnFeedback();const e=this.featureModel.id;let t=""!==this.formStatus;return P.c`
			<form @submit="${this.handleFeedbackSubmit}">
				<p>
					Send your comments, corrections, etc.
					If you have a question you'd like answered,
					please include an email address. Or,
					<a href="https://github.com/Fyrd/caniuse/blob/main/features-json/${e}.json">edit this data on GitHub</a>
				</p>
				<textarea 
					@input=${this.handleFeedbackInput}
					class="feature__feedback-textarea"
					name="comment"
					required ?disabled="${t}">${this.feedbackText}</textarea>
				<ciu-button @click="${this.handleFeedbackSubmit}" ?disabled="${t}">Submit</ciu-button>				
				<p role="alert">${this.formStatus?this.showFormStatus():""}</p>
			</form>
		`}renderBugs(){if(!this.featureModel.sourceData.bugCount)return"No known issues";if(!this.featureModel.bugData)return this.fetchData("bugs").then(e=>{this.featureModel.bugData=e,this.requestUpdate()}),P.c`Loading known issues...`;let e=this.featureModel.bugData;return P.c`
			<ul>
			${e.map(e=>P.c`
				<li class="feature-list-item">
					${Object(c.i)(e.description)}
				</li>
				`)}
			</ul>
		`}renderLinks(){this.featureModel.sourceData.linkCount;if(!this.featureModel.linkData)return this.fetchData("links").then(e=>{this.featureModel.linkData=e,this.requestUpdate()}),P.c`Loading resources...`;let e=this.featureModel.linkData;return e.length?P.c`
			<ul>
			${e.map(e=>P.c`
				<li class="feature-link-item">
					<a href="${e.url}">${e.title}</a>
					[${e.url_host}]

					${e.tags.map(e=>{P.c`<span class="linktag">${e}</span>`})}
				</li>
				`)}
			</ul>
		`:"No known resources"}handleFeatClick(e){e.preventDefault();const t=e.target.getAttribute("href");i.a.dispatch(Object(x.M)([t]))}selectTab(e){let t=this.shadowRoot.querySelectorAll('[role="tab"]'),r=this.shadowRoot.activeElement,i=t[Array.from(t).indexOf(r)+e];i&&(this.currentTabId=i.id,i.focus())}handleButtonKeyUp({key:e}){switch(e){case"ArrowRight":this.selectTab(1);break;case"ArrowLeft":this.selectTab(-1)}}getSubFeatures(){return this.featureModel.sourceData.children?this.featureModel.sourceData.children:[]}renderSubFeatures(){const e=this.getSubFeatures();return P.c`
			<ul>
				${e.map(({id:e,title:t})=>P.c`
						<li>
							<a href="${e}" @click="${this.handleFeatClick}">
								${t}
							</a>
						</li>
					`)}
			</ul>
		`}renderTabContent(){switch(this.currentTabId){case"notes":return this.renderNotes();case"browserstack":return this.renderBrowserStack();case"links":return this.renderLinks();case"bugs":return this.renderBugs();case"subfeatures":return this.renderSubFeatures();case"feedback":return this.renderFeedback()}}render(){return P.c`
			<div class="tabs" role="tablist">
				${this.tabs.map(({id:e,label:t})=>P.c`
					<button
						id="${e}"
						class="feature-tab  ${e===this.currentTabId?"is-selected":""}"
						role="tab"
						tabindex=${e===this.currentTabId?"0":"-1"}
						aria-selected="${e===this.currentTabId?"true":"false"}"
						aria-controls="tab-content"
						@keyup=${this.handleButtonKeyUp}
						@focus="${this.handleTabClick}" @click="${this.handleTabClick}">${t}
						</button>
				`)}
			</div>
			<div class="tab-content" id="tab-content">
				${this.renderTabContent()}
			</div>
			`}}q.styles=[V.a,U],H([Object(P.d)({type:String})],q.prototype,"curBsBrowser",void 0),H([Object(P.d)({type:Object})],q.prototype,"featureModel",void 0),H([Object(P.d)({type:String})],q.prototype,"currentTabId",void 0),H([Object(P.d)({type:Array})],q.prototype,"noteNumbersShown",void 0),H([Object(P.d)({type:String})],q.prototype,"formStatus",void 0),customElements.define("ciu-feature-tabs",q);var W=P.b`header{display:flex;justify-content:space-between;align-items:baseline;margin-top:-8px;color:var(--dim-fg);font-size:.8em}header label{white-space:nowrap;padding-left:5px}header .select{max-width:11em}.usage-container{display:table-cell;position:relative;right:-1rem;vertical-align:top}@media(max-width:62em){.usage-container{font-size:1em}}@media(max-width:80em){.feature-list-wrap--with-options .usage-container{font-size:1em}}@media(max-width:46em){.usage-container{right:-24px;font-size:.9em}}@media(max-width:64em){.feature-list-wrap--with-options .usage-container{right:-24px;font-size:.9em}}@media(max-width:43.75em){.usage-container{display:block;position:static;font-size:1em}}@media(max-width:61.75em){.feature-list-wrap--with-options .usage-container{display:block;position:static;font-size:1em}}@media(max-width:34em){.usage-container{margin-left:0;margin-right:0;margin-bottom:1em;right:-27px}}@media(max-width:52em){.feature-list-wrap--with-options .usage-container{margin-left:0;margin-right:0;margin-bottom:1em;right:-27px}}.is-embedded .usage-container{right:0}.is-primary{position:relative}.is-primary::before{position:absolute;left:-.8em;content:"\\2022 "}ul{margin:0;padding:0;display:table;border-spacing:3px}@media(max-width:40em){ul{margin:0;border-collapse:collapse}}@media(max-width:58em){.feature-list-wrap--with-options ul{margin:0;border-collapse:collapse}}.support-stats{display:table-row;line-height:20px;height:1.75rem}.support-stats:hover>h4,.support-stats:hover>span{background-color:rgba(0,0,0,.1)}@media(max-width:34em){.support-stats:hover>h4,.support-stats:hover>span{background-color:rgba(0,0,0,0)}}@media(max-width:52em){.feature-list-wrap--with-options .support-stats:hover>h4,.feature-list-wrap--with-options .support-stats:hover>span{background-color:rgba(0,0,0,0)}}.support-stats.hidden{display:none}.support-stats h4{min-width:11em;font-weight:400}@media(max-width:64em){.support-stats h4{min-width:7em;margin-bottom:0}}@media(max-width:82em){.feature-list-wrap--with-options .support-stats h4{min-width:7em;margin-bottom:0}}@media(max-width:34em){.support-stats h4{margin-bottom:0}}@media(max-width:52em){.feature-list-wrap--with-options .support-stats h4{margin-bottom:0}}.support-stats .usage-title{display:block;max-width:17em;max-height:2em;overflow:hidden;line-height:1.1;padding-bottom:2px}.support-stats h4,.support-stats span{padding-right:.3em;display:table-cell;vertical-align:middle}.support-stats span{padding-right:.2em}.support-stats--unprefixed h4{font-size:.8em;font-weight:400;padding-left:1em}@media(max-width:34em){.support-stats--unprefixed h4{padding-left:.3em;margin-top:0;font-size:.8rem}}@media(max-width:52em){.feature-list-wrap--with-options .support-stats--unprefixed h4{padding-left:.3em;margin-top:0;font-size:.8rem}}.support-stats .support{color:var(--supported-stats)}.support-stats .partial{color:var(--partial-stats)}.support-stats .no-values,.support-stats .total{padding:0 8px;color:var(--primary-fg);background-color:rgba(0,0,0,.03)}`,G=function(e,t,r,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};const K=d.c`
	<ciu-button @click=${O.a.closeAll} icon class="close">✕</ciu-button>
	<h4>Usage % options</h4>
	<dl>
		<dt>All users</dt>
		<dd>Values will be lower due to browsers <u>not tracked</u> on caniuse.</dd>
		<dt>All tracked</dt>
		<dd>Only considers the browsers that are tracked on caniuse.</dd>
		<dt>Tracked desktop</dt>
		<dd>Only considers tracked desktop browsers.</dd>
		<dt>Tracked mobile</dt>
		<dd>Only considers tracked mobile browsers.</dd>
	</dl>
`;class J extends P.a{constructor(){super(),this.options=[],this.showAll=!1,this.noValues=!1,this.maxValue="all",this.options=[{value:"all",label:"all users"},{value:"tracked",label:"all tracked"},{value:"tracked|desktop",label:"tracked desktop"},{value:"tracked|mobile",label:"tracked mobile"}]}connectedCallback(){super.connectedCallback(),this.updateUsageSets(),n.a.subscribe("usageUpdated",()=>{this.updateUsageSets()})}updated(e){e.has("model")&&(this.updateUsageSets(),this.requestUpdate())}updateUsageSets(){let e=i.a.getState().primaryUsage,t=this.model.getUsageAmounts(this.maxValue);t.sort((t,r)=>t[0].usageSet.id===e?-1:1),this.usageSets=t}handleSelectionChange(e){this.maxValue=e.target.value,this.updateUsageSets()}toggleTooltip(e){let t=this.shadowRoot.querySelector("ciu-select");O.a.toggle(t,K,{instant:!0,clickable:!0,align:"left"})}renderUsageItem(e,t,r){let i=e.shortName||e.name;var s=e[t];"unprefixed"==t&&(i=t+":",r=!1);let n,o=Object(c.n)(s.y)+"%",l=Object(c.n)(s.a),u=Object(c.n)(s.a+s.y),h=o+" Supported",p=u+"% Total";this.noValues&&(o="N/A",l=0),"all"===this.model.maxId&&(n=a.a.getUsageById(e.id).unknownPerc,n&&(n=Object(c.n)(n)));let f="unprefixed"===t?"support-stats--unprefixed":"";return d.c`
			<li class="support-stats  ${f}" data-usage-id="${e.id}">
				<h4
					class=${r?"is-primary":""}
					@mouseover=${r?Object(O.c)('Primary usage. Usage data from this source will used for "Usage relative" view. See "Settings" to change.'):null}
					@mouseout=${r?O.b:null}
					>
					<span class="usage-title">${i}</span>
				</h4>
				<span class="support  ${this.noValues?"no-values":""}" title="${h}">
					${o}
				</span>
				${0===l?"":d.c`
					<span> + </span>
					<span class="partial" title="Partially Supported">
						${l}%
					</span>
					<span> = </span>
					<span class="total" title="${p}">
						${u}%
					</span>
				`}
			</li>
		`}renderUsageSets(){let e=i.a.getState().primaryUsage,t=this.showAll?this.usageSets:this.usageSets.slice(0,4);return t.map(r=>r.map(r=>{const i=1!==t.length&&r.usageSet.id===e;return this.renderUsageItem(r.usageSet,r.type,i)}))}renderShowButton(){return this.showAll||this.usageSets.length<=4?void 0:d.c`
				<ciu-button @click=${()=>this.showAll=!0}>
					Show all
				</ciu-button>
			`}render(){return d.c`
			<header>
				Usage
				<label>
					% of 
					<ciu-select
						.options="${this.options}"
						@change="${this.handleSelectionChange}"></ciu-select>

					<ciu-button
						icon
						@click=${({target:e})=>this.toggleTooltip(e)}"
						class="feat-usage-info-btn">?</ciu-button>
				</label>
			</header>
			<ul>
				${this.renderUsageSets()}
			</ul>
			${this.renderShowButton()}
		`}}J.styles=W,G([Object(P.d)({type:Object})],J.prototype,"model",void 0),G([Object(P.d)({type:Array})],J.prototype,"options",void 0),G([Object(P.d)({type:String})],J.prototype,"maxValue",void 0),G([Object(P.d)({type:Array})],J.prototype,"usageSets",void 0),G([Object(P.d)({type:Boolean})],J.prototype,"showAll",void 0),G([Object(P.d)({type:Boolean})],J.prototype,"noValues",void 0),customElements.define("ciu-feature-usage",J);var Y=P.b`code{padding:1px 4px;font-family:Inconsolata,monospace;background-color:var(--code-bg)}.num-tag{float:left;padding:0 2px;height:10px;font-size:10px;line-height:10px;font-weight:400;background-color:#fff;color:#000;text-shadow:none}.tab-content .num-tag{font-size:12px;line-height:12px;height:12px;margin-right:.5em;margin-top:.2em}.num-tag--1{background-color:#fff}.num-tag--2{background-color:#ddd}.num-tag--3{background-color:#eee}.num-tag--4{background-color:#fff}.num-tag--5{background-color:#ddd}.num-tag--6{background-color:#eee}:host{display:block;position:relative;width:100%;margin-bottom:2em;padding:1rem;padding-right:.7em;background:var(--primary-bg);color:var(--primary-fg);box-sizing:border-box}:host .placeholder-space{height:140px}a{text-decoration:none;color:var(--inline-link)}@keyframes placeHolderShimmer{0%{background-position:-468px 0}100%{background-position:468px 0}}header{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start}.about{width:50%;min-width:20em}.specification svg{display:inline-block;fill:currentColor;width:16px;height:16px}.specification{white-space:nowrap;color:var(--primary-fg)}.specification.ietf,.specification.ls,.specification.pr,.specification.rec{color:var(--supported-stats)}.specification.cr{color:var(--partial-stats)}.specification.wd{color:var(--no-support)}.specification.other,.specification.unoff{color:var(--unofficial)}.specification:hover{border-bottom:1px solid currentColor}.specification abbr{text-decoration:none}.feature-name-list{margin:0;padding:1em;padding-top:0;width:100%;line-height:1.4}.feature-name-list li{margin-right:1em}ciu-feature-usage{min-width:270px;margin-left:10px;margin-bottom:5px}.loading-background{animation-duration:1s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-name:placeHolderShimmer;animation-timing-function:linear;background:#f6f7f8;background:linear-gradient(to right,transparent 8%,rgba(0,0,0,.3) 18%,transparent 33%);background-size:800px 104px;height:96px;position:relative}:host(.is-loading){min-height:200px;box-sizing:border-box;border-bottom:100px solid #e0c89b}.feature-heading{padding-bottom:10px}.placeholder-block{display:block;height:25px;margin:12px 0 0;border-radius:4px;background-color:rgba(0,0,0,.08)}.placeholder-block:nth-child(odd){width:35%}.placeholder-block:nth-child(even){width:25%}.loading-background{width:50%;margin-top:20px;height:40px}.add-feature,.permalink{background:var(--form-bg);position:absolute;display:flex;align-items:center;justify-content:center;left:-32px;top:.7em;width:32px;height:32px;padding:1px 0 1px 0;text-align:center;color:#fff;font-size:26px;cursor:pointer}@media(max-width:43.75em){.add-feature,.permalink{left:10px;top:0}}.add-feature{top:3.7em;font-size:1em;font-weight:200;line-height:1em;top:70px;border:0;width:24px;left:-24px;padding-bottom:3px}@media(max-width:43.75em){.add-feature{left:50px;top:0}}.title{display:inline-block;font-size:1.75em;word-break:break-word;font-weight:300;margin:-.15em 8px 0 0;line-height:1.3}@media(max-width:43.75em){.title{margin-top:20px}}.description{max-width:30em;line-height:1.5}.description a{color:var(--inline-link);transition:background-color .15s;text-decoration:none}.description a:hover{text-decoration:underline}.cr{color:#770}`,Q=new B.a({id:"spec",use:"spec-usage",viewBox:"0 0 16 16",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="spec"><title>Specification</title><path d="M10,0H1V16H14V4Zm2,13H3V12h9Zm0-2H3V10h9Zm0-2H3V8h9ZM10,4V1.414L12.586,4Z" /></symbol>'}),X=(D.a.add(Q),function(e,t,r,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o});class Z extends P.a{constructor(){super(...arguments),this.dataLoaded=!1,this.isVisible=!1,this.dataLoadFailed=!1}renderError(){this.classList.remove("is-loading");const e=this.id.replace(/^(mdn|sr)_/,"");return P.c`
			<div class="error">
				<p>Unable to load feature data. It may have been removed, renamed or replaced.</p>
				<p>You can try a <a href="?search=${e}">search for "${e}"</a> instead.
			</div>
		`}loadModelData(){this.model.loadData().then(()=>{this.dataLoaded=!0}).catch(e=>{this.dataLoadFailed=!0})}}X([Object(P.d)({type:Boolean})],Z.prototype,"dataLoaded",void 0),X([Object(P.d)({type:Boolean})],Z.prototype,"isVisible",void 0),X([Object(P.d)({type:Boolean})],Z.prototype,"dataLoadFailed",void 0),X([Object(P.d)({type:Object})],Z.prototype,"model",void 0);var ee=function(e,t,r,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};class te extends Z{connectedCallback(){super.connectedCallback()}startDataLoad(){this.model.dataLoaded||(n.a.publish("featureDataNeeded",this.id),this.loadModelData()),this.dataLoaded=this.model.dataLoaded,"browser"===this.model.sourceData.type&&this.getBrowser()}getBrowser(){this.browserModel=Object(l.f)(this.model.id.replace("sr_",""))}getTitle(){return this.model.title}handleLinkClick(e){e.preventDefault(),s.a.navigateToPath(this.model.id)}updated(e){Object(c.d)(this.shadowRoot),e.size&&this.requestUpdate(),this.dataLoaded&&this.dispatchEvent(new Event("rendered"))}renderLinks(e){return P.c`
			<p>For more information see:</p>
			<ul>
				${e.map(({title:e,url:t})=>P.c`
					<li>
						<a href="${t}">${e}</a>
					</li>
				`)}
			</ul>
		`}getBrowserContent(){const e=`?compare=${this.browserModel.id}+${this.browserModel.currentVersion}&compareCats=all#results`;return P.c`<p>To see web technologies supported in the current version of <b>${this.browserModel.longName}</b>
				see the <a href="${e}">
					${Object(c.e)(this.browserModel.name,this.browserModel.currentVersion)}
					comparison page</a>.
				</p>
				`}getContent(){let e=this.model.sourceData,t="",r=e.type||"";switch(r){case"JavaScript library":case"library":case"framework":return`This ${r} is not part of any web browser, so support is not listed here.`;case"browser":return this.getBrowserContent();case"css-property":r="CSS property"}if(e.description)t=Object(c.i)(e.description);else{let i=e.start||"This "+r+" is";!1===e.supported?t=P.c`
					${i}
					<span class="verdict  n">
						not supported
					</span>
					in any modern browser, nor are there any known plans to support it.
				`:!0===e.supported&&(t=P.c`
					${i}
					<span class="verdict  y">
						supported
					</span>
					in effectively all browsers.
				`)}return t}renderContent(){const e=this.getTitle();if(this.dataLoaded){let t=this.getContent();const r=this.model.sourceData;let i=r.links&&r.links.length>0;return P.c`
				<h3 class="title">${e}</h3>
				<p class="description">
					${t}
				</p>
				${i?this.renderLinks(r.links):""}
			`}return P.c`
				<h3 class="title">${e}</h3>
			`}renderPlaceholder(){return P.c`
			<div class="placeholder-space"></div>
		`}handlePermalinkMouseOver(e){O.a.show(e.target,"Link to just this result",{delay:500})}render(){if(this.startDataLoad(),this.dataLoadFailed)return this.renderError();let e=this.dataLoaded&&this.isVisible;return this.classList.toggle("is-loading",!e),P.c`
			${this.browserModel?"":P.c`<a href="${this.id}"
						@mouseover=${this.handlePermalinkMouseOver}
						@mouseout=${O.b}
						@click=${this.handleLinkClick}
						class="permalink">#</a>`}
			
			${this.renderContent()}
		`}}te.styles=[Y,P.b`
			ul, ol {
				padding: 0 1em;
			}

			li {
				margin: 0px 0px 0.5em 1.2em;
			}

			a {
				color: var(--inline-link);
			}

			a:hover {
				text-decoration: underline;
			}

			.y {
				background: var(--supported);
				color: var(--supported-fg);
			}

			.n {
				background: var(--no-support);
				color: var(--no-support-fg);
			}

			.description {
				max-width: 100%;
			}

			.verdict {
				display: inline-block;
				padding: 0 .5em;
			}
		`],ee([Object(P.d)({type:Object})],te.prototype,"browserModel",void 0),ee([Object(P.d)({type:Object})],te.prototype,"model",void 0),customElements.define("ciu-other-search-result",te);var re=function(e,t,r,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};class ie extends Z{constructor(){super(),this.isMdnFeature=!1,this.isSaved=!1}connectedCallback(){super.connectedCallback(),this.isMdnFeature=this.model instanceof F.a,i.a.subscribe(()=>{this.updateSavedState()}),this.updateSavedState()}updateSavedState(){this.isSaved=i.a.getState().savedFeats.includes(this.id)}startDataLoad(){this.model.dataLoaded||(n.a.publish("featureDataNeeded",this.id),this.loadModelData()),this.dataLoaded=this.model.dataLoaded}handleTableRendered(e){this.dispatchEvent(new Event("rendered"));let t=this.shadowRoot.querySelector("ciu-feature-tabs");t&&t.updateNotes(e.target)}getTitle(){return this.isMdnFeature?Object(c.i)(this.model.sourceData.title):this.model.title}handleLinkClick(e){e.preventDefault(),s.a.navigateToPath(this.model.id)}toggleNumHighlight(e,t){this.shadowRoot.querySelector("ciu-support-table").shadowRoot.querySelectorAll("ciu-version-support").forEach(r=>{r.toggleNumHighlight(e,t)})}toggleNoteHighlight(e,t){this.shadowRoot.querySelector("ciu-feature-tabs").toggleNoteHighlight(e,t)}handleNoteSelected(e){this.toggleNumHighlight(e.detail.num,!0)}handleNoteDeselected(e){this.toggleNumHighlight(e.detail.num,!1)}handleVersionMouseOver(e){this.toggleNoteHighlight(e.detail.version,!0)}handleVersionMouseOut(e){this.toggleNoteHighlight(e.detail.version,!1)}updated(e){Object(c.d)(this.shadowRoot),e.size&&(this.isMdnFeature=this.model instanceof F.a,this.requestUpdate()),e.has("model")&&this.updateSavedState()}renderHeading(){let e=this.getTitle();const t=l.a.statuses;if(this.dataLoaded){let r=this.model.sourceData,{spec:i,status:s}=r;const n=t[s]||s;let o=Object(c.i)(r.description);return P.c`
				<header>
					<div class="about">
						<h3 class="title">${e}</h3>
						${i?P.c`
							<a href="${i}" class="specification  ${s}">
								<svg>
									<use xlink:href="#spec" />
								</svg>
								${s?P.c`
									- <abbr title=${n}>${s.toUpperCase()}</abbr>
								`:""}
							</a>
						`:""}
						<p class="description">
							${o}
						</p>
					</div>
					<ciu-feature-usage .model="${this.model.featureUsageModel}"></ciu-feature-usage>
				</header>
				
			`}return P.c`
				<header>
					<h3 class="title">${e}</h3>
				</header>
			`}renderPlaceholder(){return P.c`
			<div class="placeholder-space"></div>
			<ciu-support-table></ciu-support-table>
		`}handleToggleSavedFeatureClick(e){i.a.getState();this.isSaved?i.a.dispatch(Object(x.C)(this.id)):i.a.dispatch(Object(x.z)(this.id)),this.requestUpdate()}handleToggleSavedFeatureMouseOver(e){let t;t=this.isSaved?"Remove feature from saved list":"Add feature to saved list",O.a.show(e.target,t,{delay:500})}handlePermalinkMouseOver(e){O.a.show(e.target,"Link to just this feature",{delay:500})}render(){if(this.startDataLoad(),this.dataLoadFailed)return this.renderError();let e=this.dataLoaded&&this.isVisible;return this.classList.toggle("is-loading",!e),P.c`
			<a href="${this.id}"
				@mouseover=${this.handlePermalinkMouseOver}
				@mouseout=${O.b}
				@click=${this.handleLinkClick}
				class="permalink">#</a>
			
			<button
				icon
				@mouseover=${this.handleToggleSavedFeatureMouseOver}
				@mouseout=${O.b}
				@click=${this.handleToggleSavedFeatureClick}
				class="add-feature">
				${this.isSaved?"★":"☆"}
				
			</button>
			
			${this.renderHeading()}

			${e?P.c`
				<ciu-support-table
					.featureModel="${this.model}"
					@rendered=${this.handleTableRendered}
					@versionMouseOver=${this.handleVersionMouseOver}
					@versionMouseOut=${this.handleVersionMouseOut}>
				</ciu-support-table>
				<ciu-feature-tabs
					@noteSelected=${this.handleNoteSelected}
					@noteDeselected=${this.handleNoteDeselected}
					.featureModel="${this.model}">
				></ciu-feature-tabs>
			`:this.renderPlaceholder()}
			`}}ie.styles=Y,re([Object(P.d)({type:Boolean})],ie.prototype,"isMdnFeature",void 0),re([Object(P.d)({type:Object})],ie.prototype,"model",void 0),re([Object(P.d)({type:Boolean})],ie.prototype,"isSaved",void 0),customElements.define("ciu-feature",ie);var se=function(e,t,r,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};class ne extends P.a{constructor(){super(...arguments),this.value=""}removeFilter(){switch(this.type){case"feat":const e=i.a.getState().feats.filter(e=>e!==this.value);i.a.dispatch(Object(x.M)(e));break;case"categories":i.a.dispatch(Object(x.D)());break;case"statuses":i.a.dispatch(Object(x.E)())}}getFeatTitle(){const e=Object(l.i)(this.value);let t=e.sourceData.title;return t||(e.dataLoadedPromise.then(()=>{this.requestUpdate()}).catch(t=>{e.sourceData.title="unknown",this.requestUpdate()}),t="..."),t}makeTitle(){switch(this.type){case"feat":return"Feature: "+this.getFeatTitle();case"categories":return"Categories: "+this.value;case"statuses":return"Statuses: "+this.value}}render(){let e=this.makeTitle();return P.c`
			<button
				title="Remove filter"
				aria-label="Remove filter"
				@click="${this.removeFilter}">✕</button>
			<span>${e}</span>
		`}}ne.styles=P.b`
		:host {
			display: inline-flex;
			align-items: stretch;
			padding-right: .5em;

			color: var(--primary-fg);
			background-color: var(--primary-bg);
		}

		button {
			background: none;
			border: none;
			color: #705d3d;
			border-right: 1px solid #705d3d;
			margin-right: 5px;
			width: 1.7em;
			height: 1.6em;
			height: auto;
			min-height: 100%;
			padding: 0;
			font-size: 1em;
			cursor: pointer;
		}

		button:hover {
			color: var(--primary-fg);
		}

		span {
			line-height: 1.2em;
			padding: 2px;
		}
	`,se([Object(P.d)({type:String})],ne.prototype,"type",void 0),se([Object(P.d)({type:String})],ne.prototype,"value",void 0),customElements.define("ciu-option-tag",ne);var oe=r(23),ae=(r(36),function(e,t,r,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o});class le extends ie{constructor(){super(...arguments),this.summaryType="combined"}connectedCallback(){super.connectedCallback(),this.updateContent()}updateContent(){this.titles=[],this.models.slice(0,10).forEach(e=>{e.dataLoadedPromise.then(()=>{this.titles=[...this.titles,e.sourceData.title]}),n.a.publish("featureDataNeeded",e.id)}),this.updateModel()}updated(e){super.updated(e),e.get("models")&&this.updateContent(),e.get("model")&&this.updateUsage()}updateUsage(){const e=this.model.multiOperation;let t="average"===e||"combined"===e;const r=this.shadowRoot.querySelector("ciu-feature-usage");r.noValues=t,r.updateUsageSets()}updateModel(){Object(oe.d)(this.models.slice(0,10),this.summaryType).then(e=>{this.model=e})}handleOptionChange(e){this.summaryType=e.target.value,this.updateModel()}renderHeading(){return P.c`
			<header>
				<div class="about">
					<h3 class="title">Feature summary</h3>
					<p class="description">Summary table of the following features:</p>

					<ol class="feature-name-list">
						${this.titles.map(e=>P.c`<li>${e}</li>`)}
					</ol>
				</div>

				${this.model?P.c`
					<ciu-feature-usage
						.noValues=${!0}
						.model=${this.model.featureUsageModel}>
					</ciu-feature-usage>
				`:""}
			</header>
		`}renderSummaryTypeInfo(){switch(this.summaryType){case"combined":return P.c`
					<b>Combined:</b>
					All features have their support represented in order as a column.
				`;case"average":return P.c`
					<b>Average:</b> 
					For each browser version, the average support value
					is calculated. Partial support counts as 50% support.
				`;case"union":return P.c`
					<b>Union:</b> 
					For each browser version, supported means <b>just one</b>
					feature from the list needs to be supported.
				`;case"intersection":return P.c`
					<b>Intersection:</b>
					Each browser version is only considered supported if
					<b>all features</b> are supported.
				`;default:return""}}render(){let e=this.dataLoaded&&this.isVisible;this.classList.toggle("is-loading",!e);return P.c`
			${this.renderHeading()}

			${e?P.c`
				Summary type: <ciu-button-bar
					@change=${this.handleOptionChange}
					.options=${[{label:"Combined",value:"combined"},{label:"Intersection",value:"intersection"},{label:"Union",value:"union"},{label:"Average score",value:"average"}]}
					.value=${this.summaryType}>
				</ciu-button-bar>
				<p>
					${this.renderSummaryTypeInfo()}
				</p>
				<ciu-support-table
					.featureModel=${this.model}
					@rendered=${this.handleTableRendered}
					@versionMouseOver=${this.handleVersionMouseOver}
					@versionMouseOut=${this.handleVersionMouseOut}>
				</ciu-support-table>
			`:this.renderPlaceholder()}
			`}}le.styles=[Y,P.b`
			p {
				line-height: 1.4;
			}
			

			ciu-button-bar {
				display: inline-block;
			}
		`],ae([Object(P.d)({type:Array})],le.prototype,"models",void 0),ae([Object(P.d)({type:Array})],le.prototype,"titles",void 0),ae([Object(P.d)({type:String})],le.prototype,"summaryType",void 0),customElements.define("ciu-multi-feature",le);var ce=new B.a({id:"filter",use:"filter-usage",viewBox:"0 0 16 16",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="filter">\n<title>filter</title>\n<path d="M6.0767,7.5606a.9824.9824,0,0,1,.2625.6683v7.2758a.5.5,0,0,0,.8489.3523l2.0482-2.326c.2741-.3259.4253-.4873.4253-.81V8.2306a.99.99,0,0,1,.2625-.6683l5.8773-6.3194A.74.74,0,0,0,15.2514,0H.7493a.74.74,0,0,0-.55,1.2428Z" />\n</symbol>'}),ue=(D.a.add(ce),r(49),function(e,t,r,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o});class de extends P.a{constructor(){super(...arguments),this.value=S.a,this.options=[],this.selectedOption="",this.allChecked=!0}connectedCallback(){super.connectedCallback(),i.a.subscribe(()=>{let e=i.a.getState().statuses;this.makeOptions(Object(l.k)(e))});let e=i.a.getState().statuses;this.makeOptions(Object(l.k)(e))}makeOptions(e){const t=l.a.statuses;let r=[],i=!0;for(let s in t){let n=s.length<=3?s.toUpperCase():s,o=!e||e.includes(s);o||(i=!1),r.push({value:s,label:n,title:t[s],selected:o})}e&&(this.allChecked=i),this.value=this.allChecked?"all":e,this.options=r}handleChange(e){let t=e.target,r=this.statusEls;"all"===t.value&&r.forEach(e=>e.checked=t.checked);let i=Array.from(r).filter(e=>e.checked).map(e=>e.value);this.allChecked=i.length>0&&i.length===r.length,this.value=this.allChecked?"all":i}updated(){this.statusEls=this.shadowRoot.querySelectorAll('ciu-labeled-checkbox[name="statuses"]')}childLinkClicked(e){let t=e.target;for(let e of Array.from(this.statusEls))e.checked=e===t;this.handleChange(e)}render(){return d.c`
			<ciu-fieldset legend="Status">
				<ciu-labeled-checkbox
					value="all"
					@change="${this.handleChange}"
					.checked="${this.allChecked}"
					label="All"></ciu-labeled-checkbox>

				${this.options.map(({value:e,label:t,selected:r,title:i})=>d.c`
					<ciu-labeled-checkbox
						name="statuses"
						value="${e}"
						title="${i}"
						@change="${this.handleChange}"
						@linkClicked="${this.childLinkClicked}"
						.checked="${r}"
						.linkAsRadio="${!0}"
						label="${t}"></ciu-labeled-checkbox>`)}
			</ciu-fieldset>
		`}}ue([Object(P.d)({type:Array})],de.prototype,"options",void 0),ue([Object(P.d)({type:String})],de.prototype,"selectedOption",void 0),ue([Object(P.d)({type:Boolean})],de.prototype,"allChecked",void 0),customElements.define("ciu-status-options",de);var he=function(e,t,r,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};class pe extends P.a{constructor(){super(...arguments),this.refEl=null,this.onClose=()=>{}}show(e){this.refEl=e}hide(){this.refEl=null,this.onClose(),this.remove()}positionOptions(){const e=this.shadowRoot.firstElementChild.getBoundingClientRect(),t=this.refEl.getBoundingClientRect(),r=document.scrollingElement.scrollTop;this.style.position="absolute",this.style.top=t.top+t.height+5+r+"px",this.style.left=t.left+t.width-e.width+"px",this.setAttribute("aria-hidden","false")}handleSubmit(){let e=this.shadowRoot.querySelector("ciu-category-options"),t=this.shadowRoot.querySelector("ciu-status-options"),r=this.shadowRoot.querySelector("feature-sort-option-set");i.a.dispatch(Object(x.N)(e.value,t.value,r.selectedOption)),this.hide()}updated(){this.refEl&&this.positionOptions()}render(){return d.c`
			<div>
				<ciu-category-options></ciu-category-options>
				<ciu-status-options></ciu-status-options>
				<feature-sort-option-set></feature-sort-option-set>
				<ciu-button @click=${this.handleSubmit}>Go</ciu-button>
			</div>
		`}}let fe;function ge(e){let t=e.target;t.classList.contains("is-selected")?fe.hide():(fe=new pe,document.body.appendChild(fe),fe.show(t),fe.onClose=()=>t.classList.remove("is-selected"),t.classList.add("is-selected"))}pe.styles=P.b`
		:host {
			display: block;
			color: white;
			max-width: 240px;
		}

		div {
			display: grid;
			grid-template-columns: 120px 120px;
			grid-template-rows: auto 4em 2em;
			padding: 10px;
			background: var(--form-bg);
		}

		feature-sort-option-set {
			grid-row-start: 2;
			grid-column-start: 1;
			grid-column-end: 3;
		}

		ciu-button {
			grid-row: 3;
			grid-column: 1;
		}
	`,he([Object(P.d)({type:Object})],pe.prototype,"refEl",void 0),customElements.define("ciu-filter-options",pe);var me=r(41),be=function(e,t,r,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};let ve=new Map;const ye={pubdate:function(e,t){return e instanceof $.b&&t instanceof $.b&&e.sourceData.pubDate<t.sourceData.pubDate?1:-1},score:function(e,t){return e instanceof $.b&&t instanceof $.b&&e.supportScoreIndex>t.supportScoreIndex?1:-1},rscore:function(e,t){return e instanceof $.b&&t instanceof $.b&&e.supportScoreIndex<t.supportScoreIndex?1:-1},alpha:function(e,t){return e instanceof $.b&&t instanceof $.b&&e.sourceData.title.toLowerCase()>t.sourceData.title.toLowerCase()?1:-1},ralpha:function(e,t){return e instanceof $.b&&t instanceof $.b?e.sourceData.title.toLowerCase()>t.sourceData.title.toLowerCase()?-1:1:-1}};class we extends P.a{constructor(){super(),this.listItems=[],this.renderedItemCount=10,this.cats=[],this.statuses=[],this.feats=[],this.showSummary=!1,this.origQuery="",this.newQuery="",i.a.subscribe(()=>{this.updateState(i.a.getState())}),n.a.subscribe("searchResultsReceived",this.handleSearchResults.bind(this)),n.a.subscribe("searchFiltered",this.handleSearchFiltered.bind(this)),this.updateState(i.a.getState())}startViewTimer(e){ve.set(e,window.setTimeout(()=>{e.parentElement&&h.a.trackFeatureViewed(e.model.id)},3e3))}endViewTimer(e){clearTimeout(ve.get(e)),ve.delete(e)}makeAllVisible(){this.shadowRoot.querySelectorAll("ciu-feature").forEach(e=>e.isVisible=!0)}handleSearchFiltered(e){this.selectedTypes=e}handleSearchResults(e){let t=i.a.getState().search;t.length&&(this.origQuery=t,this.newQuery=e.newQuery,this.listItems=e.featureIds.map(e=>{let t=Object(l.i)(e);if(t)return t}))}handleFeatureRendered(){this.dispatchEvent(new Event("featureRendered"))}filterByFeatures(e){this.feats=e,this.listItems=e.map(e=>Object(l.i)(e))}filterByOthers(e,t){var r=l.a.supportDataByFeature;for(var i in this.listItems=[],r){let r=Object(l.i)(i);var s=r.testValue("cats",e),n=r.testValue("statuses",t);s&&n&&this.listItems.push(r)}}sortList(){const e=i.a.getState().featureSort;var t=this.listItems;if(l.a.hasSupportScoreIndexes||"score"!==e&&"rscore"!==e){let r=ye[e];t.sort(r)}else Object(l.e)().then(()=>{this.updateState(i.a.getState())})}updateState(e){let{cats:t,feats:r,search:i,statuses:s,showSavedFeats:n,savedFeats:o}=e;this.feats=[],this.cats=t,this.statuses=s,O.a.closeAll(),i||(r.length?(this.showSummary=!0,this.filterByFeatures(r),window.scrollTo({top:0})):n?(this.showSummary=!0,this.filterByFeatures(o)):this.filterByOthers(t,s)),i||this.sortList()}showMore(){this.renderedItemCount+=10,this.showSummary=!1}handleFilterClick(){}handleSavedButtonClick(e){e.preventDefault(),s.a.navigateToPath(e.target.getAttribute("href"))}renderOptionTags(){let e=Object(l.m)(this.cats)?[]:this.cats,t=Object(l.n)(this.statuses)?[]:this.statuses,{showSavedFeats:r}=i.a.getState(),s=!this.feats.length&&!e.length&&!t.length;return d.c`
			<div class="option-tags  ${s?"is-empty":""}">
				${r?"":this.feats.map(e=>d.c`<ciu-option-tag type="feat" value="${e}"></ciu-option-tag>`)}
				${e.length?d.c`
					<ciu-option-tag type="categories" value="${e.join(", ")}">
					</ciu-option-tag>`:""}
				${t.length?d.c`
					<ciu-option-tag type="statuses" value="${t.join(", ")}">
					</ciu-option-tag>`:""}
			</div>
		`}initObservers(){this.visibilityObserver&&this.visibilityObserver.disconnect(),this.visibilityObserver=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&(t.target.isVisible=!0)},{threshold:.01}),this.viewedObserver&&this.viewedObserver.disconnect(),this.viewedObserver=new IntersectionObserver(e=>{for(let t of e){let e=t.target;t.isIntersecting?this.startViewTimer(e):this.endViewTimer(e)}},{threshold:.5})}updated(e){Object(c.d)(this.shadowRoot),this.initObservers(),this.updateComplete.then(()=>{this.shadowRoot.querySelectorAll("ciu-feature, ciu-other-search-result").forEach(e=>{this.visibilityObserver.observe(e),this.viewedObserver.observe(e)})})}scrollToSummary(e){this.makeAllVisible(),setTimeout(()=>{this.shadowRoot.querySelector("ciu-multi-feature").scrollIntoView({behavior:"auto",block:"start"})},50)}linkToList(){}renderSummary(){let e=this.listItems.filter(e=>e instanceof $.b);if(e.length)return this.showSummary?d.c`
				<ciu-multi-feature
					id="summary"
					.dataLoaded=${!0}
					.isVisible=${!0}
					.models="${e}"
					@rendered=${this.handleFeatureRendered}
				></ciu-feature>
			`:d.c`
				<ciu-button
					class="summary-btn"
					@click=${()=>{this.showSummary=!0}}>Show summary</ciu-button>
			`}renderFeatureList(){let e=this.listItems;this.selectedTypes&&(e=e.filter(e=>this.selectedTypes.has(e.type)));let t=e.slice(0,this.renderedItemCount),r=t.length<e.length;return d.c`
			${t.map((e,t)=>{let r=0===t;return e instanceof $.b?d.c`<ciu-feature
						id="${e.id}"
						.model="${e}"
						?isVisible=${r}
						@rendered=${this.handleFeatureRendered}
					></ciu-feature>`:e instanceof me.a?d.c`<ciu-other-search-result
						id="${e.id}"
						.model="${e}"
						?isVisible=${r}
						@rendered=${this.handleFeatureRendered}
					></ciu-other-search-result>`:void 0})}
			
			${e.length>1?this.renderSummary():""}

			${r?d.c`<ciu-button
						@click="${this.showMore}">
						Show more
					</ciu-button>`:""}
		`}renderSavedHeader(e){const t=e.length;let r=e.join(","),i="/"+r;return r.length>240&&(i="?feats="+r),d.c`
			<h3 class="ciu-section-heading">
				<span class="star">★</span> Saved features (${t})
			</h3>
			${t>1?d.c`
				<a
					href=${s.a.getCurPath()+"#summary"}
					class="list-link"
					@mouseover=${Object(O.c)("Scroll to feature summary")}
					@mouseout=${O.b}
					@click=${this.scrollToSummary}>Summary</ciu-button>
				<a
					@mouseover=${Object(O.c)("Sharable link to this list of features")}
					@mouseout=${O.b}
				href="${i}" class="list-link">
					Link to list
				</a>
			`:""}
		`}render(){let e=i.a.getState().showSavedFeats,{savedFeats:t,showSavedFeats:r,search:s}=i.a.getState(),n=!r&&t.length;return d.c`
			<section class="section__tables">
				<header>
					${e?this.renderSavedHeader(t):""}
					${this.newQuery&&s.length?d.c`
						<p class="typo-note">No results found for <i>${this.origQuery}</i>.<br>Showing results for <i>${this.newQuery}</i> instead.</p>
					`:""}
					${this.renderOptionTags()}
					<div class="buttons">
						${n?d.c`
							<a href="/ciu/saved"
								class="saved-button"
								@mouseover=${Object(O.c)("Show list of saved features")}
								@mouseout=${O.b}
								@click=${this.handleSavedButtonClick}>
								★
							</a>
						`:""}
						
						<button
							class="filter-button"
							@mouseover=${Object(O.c)("Filter caniuse features")}
							@mouseout=${O.b}
							@click=${ge}>
							<svg width="16" height="16">
								<title>Filter</title>
								<use xlink:href="#filter"/>
							</svg>
						</button>
					</div>
				</header>
				<div class="feature-list-wrap">
					${this.renderFeatureList()}
				</div>
			</section>
		`}}var xe;function Se(e=!1){l.d.initialDisplay();var t=Object(c.g)(".js-content");let r=Array.from(t.childNodes);xe=new we,e&&(xe.style.visibility="hidden",xe.addEventListener("featureRendered",()=>{xe.style.visibility="visible";for(let e of r)e.remove()},{once:!0})),t.appendChild(xe),ke(i.a.getState().settingsShown)}we.styles=[V.a,P.b`
		header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 1em;
		}

		header ciu-button {
			margin: 0 0.5em;
			white-space: nowrap; 
		}

		.star {
			font-size: 0.8em;
			vertical-align: 2px;
		}

		.ciu-section-heading {
			color: #CFB78B;
			margin-bottom: 0;
			white-space: nowrap;
		}

		.typo-note {
			margin: 0;
			color: var(--fg-white);
			text-align: left;
			width: 100%;
		}

		.buttons {	
			display: flex;
		}

		.list-link {
			display: inline-block;
			margin-left: 2em;
			color: var(--standalone-link);
			white-space: nowrap;
			font-size: 0.8em;
			text-decoration: none;
		}

		.list-link:hover {
			text-decoration: underline;
		}

		.section__tables {
			margin-top: 1em;
			position: relative;
		}

		.summary-btn {
			display: inline-block;
			margin-bottom: 1em;
		}

		.feature-list-wrap {
			width: 100%;
			min-width: 0;
		}

		.saved-button,
		.filter-button {
			display: inline-flex;
			justify-content: center;
			align-items: center;
			padding: 0;
			margin-left: 5px;
			
			min-width: 25px;
			height: 25px;
			
			background-color: var(--form-bg);
			color: white;
			opacity: 0.5;
			border: 0;
		}

		.saved-button {
			right: 30px;
			text-decoration: none;
		}

		.saved-button:hover,
		.filter-button:hover {
			opacity: 1;
		}

		.filter-button svg {
			fill: currentColor;
			width: 12px;
			height: 12px;
			pointer-events: none;
		}

		.option-tags {
			display: grid;
			grid-gap: 7px 10px;
			grid-template-columns: repeat(auto-fill, minmax(20em, 25em) );
			
			width: 100%;
			margin-right: 14px;
			
			font-size: 0.8em;
		}

		.option-tags.is-empty {
			width: 0;
		}

		.option-tags ciu-option-tag {
			width: max-content;
			max-width: 80vw;
		}

		.has-settings .feature-list-wrap {
			margin-left: 20px;
		}
	`],be([Object(P.d)({type:Array})],we.prototype,"listItems",void 0),be([Object(P.d)({type:Number})],we.prototype,"renderedItemCount",void 0),be([Object(P.d)({type:Array})],we.prototype,"cats",void 0),be([Object(P.d)({type:Array})],we.prototype,"statuses",void 0),be([Object(P.d)({type:Array})],we.prototype,"feats",void 0),be([Object(P.d)({type:Object})],we.prototype,"selectedTypes",void 0),be([Object(P.d)({type:Boolean})],we.prototype,"showSummary",void 0),be([Object(P.d)({type:String})],we.prototype,"origQuery",void 0),be([Object(P.d)({type:String})],we.prototype,"newQuery",void 0),customElements.define("ciu-feature-list",we);function ke(e,t=!1){var r=Object(c.g)("ciu-settings-panel"),i=Object(c.g)(".js-feature-list-wrap");r&&(e?(u.a.show(r),i.classList.add("feature-list-wrap--with-options")):(u.a.hide(r),i.classList.remove("feature-list-wrap--with-options")),n.a.publish("optionsToggled",!1,t))}i.a.subscribe(()=>{l.d.set("search",i.a.getState().search),l.d.set("sortOrder",i.a.getState().featureSort),i.a.getState().page===x.d.TABLES&&ke(i.a.getState().settingsShown)}),n.a.subscribe("searchResultsReceived",(function(e){l.d.set("searchResults",e)})),n.a.subscribe("filterResultsReceived",(function(e){l.d.set("filterResults",e)})),n.a.subscribe("baseDataReady",(function(e){a.a.init(),l.d.init(e,l.b),n.a.subscribe("featureDataLoaded",(function(e){l.d.loadFeatureData(e)}))})),n.a.subscribe("domReady",(function(){n.a.publish("featureListReady",xe)})),n.a.subscribe("optionsInitialized",(function(){l.b&&l.b.getMissingUsage()})),n.a.subscribe("hashProcessed",(function(e){var t=e.parameters,r=!1;if(t){for(var i in t)if(t[i])switch(i){case"search":case"feat":case"cats":case"statuses":r=!0}r&&n.a.publish("displayPageSection","tables")}})),u.a.listen(window,"scroll",(function(){n.a.publish("scroll",window.pageYOffset)})),u.a.listen(window,"keyup",(function(e){27===e.keyCode&&n.a.publish("escapeKey",null)}));new class extends A{constructor(){super(...arguments),this.PAGE_ID=x.d.TABLES,this.templateUrl="/tpl/home.tpl.php"}loadPage(){this.showPlaceholder(),Se(!1)}enhancePage(){Se(!0)}};let Oe,_e=-1;function Ee(){_e++,_e>=Oe.length&&(_e=0),Oe.forEach((function(e,t){t===_e?u.a.show(e):u.a.hide(e)}))}function je(){const e=Object(c.g)(".js-browser-scores"),t=e=>({target:t})=>{t.parentNode.querySelectorAll("button").forEach(e=>{e.classList.toggle("is-selected",e===t)}),function(e){Object(c.h)(".js-browser-scores [data-score-json]").forEach(t=>{var r=JSON.parse(t.getAttribute("data-score-json"));let{name:i,full:s,partial:n}=r[e],[o,a]=t.querySelectorAll("span");o.innerText=i+": "+s,o.title=`Full support: ${s}pts`,o.style.width=s/r.featCount*100+"%",a.title="Partial support: "+n+"pts",a.style.width=n/r.featCount*100+"%"})}(e)},r=Object(c.m)();Object(d.d)(d.c`
        <div class="home__browser-score-options">
            <button
                @click=${t("current")}
                class="home__score-button  is-selected">
                Current version
            </button>
            <button
                class="home__score-button"
                @click=${t("latest")}>
                Dev version
            </button>
        </div>
    `,r),e.parentNode.insertBefore(r,e)}new class extends A{constructor(){super(...arguments),this.PAGE_ID=x.d.HOME,this.templateUrl="/tpl/home.tpl.php",this.cssLoader=()=>r.e(6).then(r.bind(null,57))}enhancePage(){!function(){let e=Object(c.m)(),t=i.a.getState().savedFeats.length;Object(d.d)(d.c`
        <button class="filter-button" @click=${ge}>
            <svg width="16" height="16"><use xlink:href="#filter"/></svg>
            Filter features
        </button>
        ${t?d.c`
            <a href="/ciu/saved" class="saved">
                Saved features
            </a>
        `:""}
    `,e),Object(c.g)(".js-index-strip").appendChild(e)}(),function(){var e=Object(c.g)(".js-dyk-list");e.parentNode.classList.remove("is-static");var t=Object(c.h)("li",e);Oe=Array.prototype.slice.call(t),Ee(),u.a.listen(Object(c.g)(".js-next-dyk"),"click",Ee)}(),je(),function(){const e=Object(c.m)();let t=!1;Object(d.d)(d.c`
        <button
            class="home__browser-note-btn"
            @click=${e=>{t=!t,t?O.a.show(e.target,d.c`
                <p>
                    The caniuse browser scores are tallies of all features tracked
                    on caniuse (excluding those marked as "unofficial").
                    The fully opaque part represents supported features,
                    the semi-transparent part represents partial support.
                </p>
            
                <p>
                    Note that while caniuse tracks a wide variety of features,
                    it only covers a subset of all web technologies so the scores
                    are not 100% representative of any browser's capabilities.
                </p>
            `,{instant:!0,align:"left",clickable:!0}):O.a.hide(e.target)}}>
            About these scores
            </button>
    `,e),Object(c.g)(".js-browser-scores").parentNode.appendChild(e)}()}};new class extends A{constructor(){super(...arguments),this.PAGE_ID=x.d.ABOUT,this.templateUrl="/tpl/about.tpl"}};new class extends A{constructor(){super(...arguments),this.PAGE_ID=x.d.INDEX,this.templateUrl="/tpl/index.tpl.php",this.cssLoader=()=>r.e(7).then(r.bind(null,58))}};var Ce,Te=null,Re=null,Ae={};function Ne(e){let t=Te.value;Te.value=e,e.trim().length?t!==Te.value&&Ce():Be()}function Pe(){let e=new Set;Re.querySelectorAll("ciu-labeled-checkbox").forEach(({checked:t,name:r})=>{t&&e.add(r)}),n.a.publish("searchFiltered",e)}function $e(e){let t=(Te.value||i.a.getState().search).trim();const r=e.featureIds.length;let s;if(r){let t=[],i=[];for(let r of e.featureIds){(r.startsWith("mdn-")?t:i).push(r)}let n=t.length&&i.length;s=d.c`
			${r+""}
			result${1===r?"":"s"}
			found
			${n?d.c`
					<br>
					<ciu-labeled-checkbox
						name="ciu"
						@change=${Pe}
						label="Caniuse (${i.length})"
						checked></ciu-labeled-checkbox>
					<ciu-labeled-checkbox
						name="mdn"
						@change=${Pe}
						label="MDN (${t.length})"
						checked></ciu-labeled-checkbox>
				`:""}
		`}else{let e=`https://github.com/Fyrd/caniuse/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+${encodeURI(t)}`;s=d.c`
			0 results found.
			<p>Why not <a href="${e}">suggest this feature be added?</a></p>
		`}Object(d.d)(s,Re),u.a.show(Re)}function Me(e,t){Te=e,Re=t;var r=function(){Re.innerHTML="",u.a.hide(Re)},s=Object(c.c)((function(e){!function(e){e.length&&window.ga&&h.a.trackSearch(e)}(e)}),1e3),o=function(e){i.a.getState().search.trim()!==e.trim()&&i.a.dispatch(Object(x.Q)(e))};Object(c.g)(".js-search form").onsubmit=function(e){e.preventDefault()},Ce=function(){var e=Te.value;if(!e.trim().length)return o(e),void r();let t=null;if(Ae.hasOwnProperty(e)&&(t=Ae[e]),o(e),t)n.a.publish("searchResultsReceived",t);else{var i=encodeURIComponent(e);Object(c.a)("/process/query.php?search="+i,{success:function(i){if(i){var s=JSON.parse(i);t=s||{featureIds:[]},Ae[e]=t,n.a.publish("searchResultsReceived",t),t.featureIds.length||h.a.trackUnfoundSearch(e)}""===e&&r()}})}setTimeout((function(){o(e),s(e),""===e&&r()}),0)},Te.value.length||u.a.hide(Re),u.a.listen(Te,"focus",(function(){Te.value.length>0&&n.a.publish("searchFocused")})),u.a.listen(Te,"input",Object(c.c)(Ce,500)),u.a.listen(Te,"keypress",(function(e){13===e.keyCode&&Ce()})),navigator.userAgent.toLowerCase().indexOf("mobile")>-1?(Te.removeAttribute("autofocus"),Te.blur()):Te.focus(),Te.value.length&&Ce()}function Be(){Te.value="",u.a.hide(Re)}var Le=new class extends A{constructor(){super(...arguments),this.PAGE_ID=x.d.TABLES}init(){Me(Object(c.g)("#feat_search"),Object(c.g)(".js-search-result-info")),i.a.subscribe(()=>{Ne(i.a.getState().search)}),n.a.subscribe("searchResultsReceived",$e)}loadPage(){Ne(i.a.getState().search)}handlePageHidden(){Be()}enhancePage(){}};r(43);const De=x.d.SETTINGS;let Ie=null,Fe=!1;function Ue(e){if(e===De){if(Fe)return;Ie=document.createElement("ciu-overlay"),Ie.innerHTML="Loading...",document.body.appendChild(Ie),r.e(4).then(r.bind(null,59)).then((function(e){let t=document.createElement("ciu-settings");Ie.innerHTML="",Ie.appendChild(t)})),Fe=!0}else Ie&&Ie.remove(),Fe=!1}n.a.subscribe("pageSectionDisplayed",e=>{Ue(e)}),n.a.subscribe("startPageFound",e=>{Ue(e)});new class extends A{constructor(){super(...arguments),this.PAGE_ID=x.d.COMPARISON}enhancePage(){this.loadPage()}loadPage(){this.showPlaceholder(),r.e(3).then(r.bind(null,62)).then(e=>{this.container.innerHTML="<ciu-comparison></ciu-comparison>"})}};let Ve=null,He=!1;function ze(e){if("import"===e){if(He)return;Ve=document.createElement("ciu-overlay"),Ve.innerHTML="Loading...",document.body.appendChild(Ve),r.e(5).then(r.bind(null,60)).then((function(e){let t=document.createElement("ciu-stats-import");Ve.innerHTML="",Ve.appendChild(t),Object(c.l)("https://apis.google.com/js/client.js?onload=handleGaClientLoad")})),He=!0}else Ve&&Ve.remove(),He=!1}n.a.subscribe("pageSectionDisplayed",e=>{ze(e)}),n.a.subscribe("startPageFound",e=>{ze(e)});const qe=x.d.BROWSERSET;let We=null,Ge=!1;function Ke(e){if(e===qe){if(Ge)return;We=document.createElement("ciu-overlay"),We.size="large",We.innerHTML="Loading...",document.body.appendChild(We),r.e(2).then(r.bind(null,61)).then((function(e){let t=document.createElement("ciu-browserset-select"),r=s.a.currentState.params.setName;o.d.find(e=>e.name===r)&&(t.name=r),t.addEventListener("saved",()=>{We.handleClose()}),We.innerHTML="",We.appendChild(t)})),Ge=!0}else We&&We.remove(),Ge=!1}if(n.a.subscribe("pageSectionDisplayed",e=>{Ke(e)}),n.a.subscribe("startPageFound",e=>{Ke(e)}),window.Caniuse=window.Caniuse||{},!window.customElements)throw Error("No custom elements support");s.a.start(),Le.init(),l.c.init(),o.e.init(),w.init()}]);
//# sourceMappingURL=bundle.js.map?db8bc3412ef78da23967