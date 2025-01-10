"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[66411],{85929:(e,t,o)=>{o.d(t,{A:()=>n});const i=(0,o(75237).Xj)({isActive:!1,mode:!1},{__media:void 0,set(e){i.mode=e,"auto"===e?(void 0===i.__media&&(i.__media=window.matchMedia("(prefers-color-scheme: dark)"),i.__updateMedia=()=>{i.set("auto")},i.__media.addListener(i.__updateMedia)),e=i.__media.matches):void 0!==i.__media&&(i.__media.removeListener(i.__updateMedia),i.__media=void 0),i.isActive=!0===e,document.body.classList.remove("body--"+(!0===e?"light":"dark")),document.body.classList.add("body--"+(!0===e?"dark":"light"))},toggle(){i.set(!1===i.isActive)},install({$q:e,ssrContext:t}){const{dark:o}=e.config;e.dark=this,!0!==this.__installed&&this.set(void 0!==o&&o)}}),n=i},36459:(e,t,o)=>{o.d(t,{Ay:()=>p,Sn:()=>u,ot:()=>r});var i=o(25598),n=o(40967);const r=(0,i.KR)(!1);let a;const s="ontouchstart"in window||window.navigator.maxTouchPoints>0,c=navigator.userAgent||navigator.vendor||window.opera,d={has:{touch:!1,webStorage:!1},within:{iframe:!1}},u={userAgent:c,is:function(e){const t=e.toLowerCase(),o=function(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}(t),i=function(e,t){const o=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||[];return{browser:o[5]||o[3]||o[1]||"",version:o[4]||o[2]||"0",platform:t[0]||""}}(t,o),n={mobile:!1,desktop:!1,cordova:!1,capacitor:!1,nativeMobile:!1,electron:!1,bex:!1,linux:!1,mac:!1,win:!1,cros:!1,chrome:!1,firefox:!1,opera:!1,safari:!1,vivaldi:!1,edge:!1,edgeChromium:!1,ie:!1,webkit:!1,android:!1,ios:!1,ipad:!1,iphone:!1,ipod:!1,kindle:!1,winphone:!1,blackberry:!1,playbook:!1,silk:!1};i.browser&&(n[i.browser]=!0,n.version=i.version,n.versionNumber=parseInt(i.version,10)),i.platform&&(n[i.platform]=!0);const c=n.android||n.ios||n.bb||n.blackberry||n.ipad||n.iphone||n.ipod||n.kindle||n.playbook||n.silk||n["windows phone"];if(!0===c||-1!==t.indexOf("mobile")?n.mobile=!0:n.desktop=!0,n["windows phone"]&&(n.winphone=!0,delete n["windows phone"]),n.edga||n.edgios||n.edg?(n.edge=!0,i.browser="edge"):n.crios?(n.chrome=!0,i.browser="chrome"):n.fxios&&(n.firefox=!0,i.browser="firefox"),(n.ipod||n.ipad||n.iphone)&&(n.ios=!0),n.vivaldi&&(i.browser="vivaldi",n.vivaldi=!0),(n.chrome||n.opr||n.safari||n.vivaldi||!0===n.mobile&&!0!==n.ios&&!0!==c)&&(n.webkit=!0),n.opr&&(i.browser="opera",n.opera=!0),n.safari&&(n.blackberry||n.bb?(i.browser="blackberry",n.blackberry=!0):n.playbook?(i.browser="playbook",n.playbook=!0):n.android?(i.browser="android",n.android=!0):n.kindle?(i.browser="kindle",n.kindle=!0):n.silk&&(i.browser="silk",n.silk=!0)),n.name=i.browser,n.platform=i.platform,-1!==t.indexOf("electron"))n.electron=!0;else if(-1!==document.location.href.indexOf("-extension://"))n.bex=!0;else{if(void 0!==window.Capacitor?(n.capacitor=!0,n.nativeMobile=!0,n.nativeMobileWrapper="capacitor"):void 0===window._cordovaNative&&void 0===window.cordova||(n.cordova=!0,n.nativeMobile=!0,n.nativeMobileWrapper="cordova"),!0===r.value&&(a={is:{...n}}),!0===s&&!0===n.mac&&(!0===n.desktop&&!0===n.safari||!0===n.nativeMobile&&!0!==n.android&&!0!==n.ios&&!0!==n.ipad)){delete n.mac,delete n.desktop;const e=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(n,{mobile:!0,ios:!0,platform:e,[e]:!0})}!0!==n.mobile&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete n.desktop,n.mobile=!0)}return n}(c),has:{touch:s},within:{iframe:window.self!==window.top}},l={install(e){const{$q:t}=e;!0===r.value?(e.onSSRHydrated.push((()=>{Object.assign(t.platform,u),r.value=!1})),t.platform=(0,i.Kh)(this)):t.platform=this}};{let e;(0,n.$)(u.has,"webStorage",(()=>{if(void 0!==e)return e;try{if(window.localStorage)return e=!0,!0}catch(e){}return e=!1,!1})),Object.assign(l,u),!0===r.value&&(Object.assign(l,a,d),a=null)}const p=l},22898:(e,t,o)=>{o.d(t,{A:()=>c});var i=o(36459),n=o(34626);const r=()=>!0;function a(e){return"string"==typeof e&&""!==e&&"/"!==e&&"#/"!==e}function s(e){return!0===e.startsWith("#")&&(e=e.substring(1)),!1===e.startsWith("/")&&(e="/"+e),!0===e.endsWith("/")&&(e=e.substring(0,e.length-1)),"#"+e}const c={__history:[],add:n.lQ,remove:n.lQ,install({$q:e}){if(!0===this.__installed)return;const{cordova:t,capacitor:o}=i.Sn.is;if(!0!==t&&!0!==o)return;const n=e.config[!0===t?"cordova":"capacitor"];if(void 0!==n&&!1===n.backButton)return;if(!0===o&&(void 0===window.Capacitor||void 0===window.Capacitor.Plugins.App))return;this.add=e=>{void 0===e.condition&&(e.condition=r),this.__history.push(e)},this.remove=e=>{const t=this.__history.indexOf(e);t>=0&&this.__history.splice(t,1)};const c=function(e){if(!1===e.backButtonExit)return()=>!1;if("*"===e.backButtonExit)return r;const t=["#/"];return!0===Array.isArray(e.backButtonExit)&&t.push(...e.backButtonExit.filter(a).map(s)),()=>t.includes(window.location.hash)}(Object.assign({backButtonExit:!0},n)),d=()=>{if(this.__history.length){const e=this.__history[this.__history.length-1];!0===e.condition()&&(this.__history.pop(),e.handler())}else!0===c()?navigator.app.exitApp():window.history.back()};!0===t?document.addEventListener("deviceready",(()=>{document.addEventListener("backbutton",d,!1)})):window.Capacitor.Plugins.App.addListener("backButton",d)}}},94498:(e,t,o)=>{function i(e,t=250,o){let i=null;function n(){const n=arguments;null!==i?clearTimeout(i):!0===o&&e.apply(this,n),i=setTimeout((()=>{i=null,!0!==o&&e.apply(this,n)}),t)}return n.cancel=()=>{null!==i&&clearTimeout(i)},n}o.d(t,{A:()=>i})},34626:(e,t,o)=>{o.d(t,{F4:()=>c,Fh:()=>l,G1:()=>r,Gu:()=>d,Z4:()=>u,ds:()=>s,en:()=>a,lQ:()=>n,mG:()=>i});const i={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const e=Object.defineProperty({},"passive",{get(){Object.assign(i,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch(e){}function n(){}function r(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function a(e){if(e.path)return e.path;if(e.composedPath)return e.composedPath();const t=[];let o=e.target;for(;o;){if(t.push(o),"HTML"===o.tagName)return t.push(document),t.push(window),t;o=o.parentElement}}function s(e){e.stopPropagation()}function c(e){!1!==e.cancelable&&e.preventDefault()}function d(e){!1!==e.cancelable&&e.preventDefault(),e.stopPropagation()}function u(e,t,o){const n=`__q_${t}_evt`;e[n]=void 0!==e[n]?e[n].concat(o):o,o.forEach((t=>{t[0].addEventListener(t[1],e[t[2]],i[t[3]])}))}function l(e,t){const o=`__q_${t}_evt`;void 0!==e[o]&&(e[o].forEach((t=>{t[0].removeEventListener(t[1],e[t[2]],i[t[3]])})),e[o]=void 0)}},43284:(e,t,o)=>{function i(e,t){if(e===t)return!0;if(null!==e&&null!==t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;let o,n;if(e.constructor===Array){if(o=e.length,o!==t.length)return!1;for(n=o;0!=n--;)if(!0!==i(e[n],t[n]))return!1;return!0}if(e.constructor===Map){if(e.size!==t.size)return!1;let o=e.entries();for(n=o.next();!0!==n.done;){if(!0!==t.has(n.value[0]))return!1;n=o.next()}for(o=e.entries(),n=o.next();!0!==n.done;){if(!0!==i(n.value[1],t.get(n.value[0])))return!1;n=o.next()}return!0}if(e.constructor===Set){if(e.size!==t.size)return!1;const o=e.entries();for(n=o.next();!0!==n.done;){if(!0!==t.has(n.value[0]))return!1;n=o.next()}return!0}if(null!=e.buffer&&e.buffer.constructor===ArrayBuffer){if(o=e.length,o!==t.length)return!1;for(n=o;0!=n--;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();const r=Object.keys(e).filter((t=>void 0!==e[t]));if(o=r.length,o!==Object.keys(t).filter((e=>void 0!==t[e])).length)return!1;for(n=o;0!=n--;){const o=r[n];if(!0!==i(e[o],t[o]))return!1}return!0}return e!=e&&t!=t}function n(e){return null!==e&&"object"==typeof e&&!0!==Array.isArray(e)}function r(e){return"[object Date]"===Object.prototype.toString.call(e)}function a(e){return"[object RegExp]"===Object.prototype.toString.call(e)}o.d(t,{$P:()=>r,Gv:()=>n,Hv:()=>i,oh:()=>a})},90539:(e,t,o)=>{o.d(t,{Or:()=>n,cr:()=>i,xX:()=>r});const i={};let n=!1;function r(){n=!0}},75237:(e,t,o)=>{o.d(t,{Xj:()=>c,Yg:()=>s,a0:()=>a});var i=o(25598),n=o(6254),r=o(40967);function a(e){return(0,i.IG)((0,n.pM)(e))}function s(e){return(0,i.IG)(e)}const c=(e,t)=>{const o=(0,i.Kh)(e);for(const i in e)(0,r.$)(t,i,(()=>o[i]),(e=>{o[i]=e}));return t}},40967:(e,t,o)=>{function i(e,t,o,i){return Object.defineProperty(e,t,{get:o,set:i,enumerable:!0}),e}o.d(t,{$:()=>i})},60356:(e,t,o)=>{o.d(t,{Dv:()=>a,JL:()=>r,V7:()=>n});let i=!1;function n(e){i=!0===e.isComposing}function r(e){return!0===i||e!==Object(e)||!0===e.isComposing||!0===e.qKeyEvent}function a(e,t){return!0!==r(e)&&[].concat(t).includes(e.keyCode)}},61655:(e,t,o)=>{o.d(t,{XA:()=>i,q3:()=>n});const i="_q_",n="_q_fo_"}}]);