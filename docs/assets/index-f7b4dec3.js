function v0(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function y0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ss={},w0={get exports(){return Ss},set exports(t){Ss=t}},Zl={},I={},E0={get exports(){return I},set exports(t){I=t}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eo=Symbol.for("react.element"),S0=Symbol.for("react.portal"),C0=Symbol.for("react.fragment"),I0=Symbol.for("react.strict_mode"),k0=Symbol.for("react.profiler"),T0=Symbol.for("react.provider"),R0=Symbol.for("react.context"),N0=Symbol.for("react.forward_ref"),P0=Symbol.for("react.suspense"),x0=Symbol.for("react.memo"),D0=Symbol.for("react.lazy"),Qh=Symbol.iterator;function A0(t){return t===null||typeof t!="object"?null:(t=Qh&&t[Qh]||t["@@iterator"],typeof t=="function"?t:null)}var Rm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nm=Object.assign,Pm={};function Ti(t,e,n){this.props=t,this.context=e,this.refs=Pm,this.updater=n||Rm}Ti.prototype.isReactComponent={};Ti.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ti.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xm(){}xm.prototype=Ti.prototype;function qc(t,e,n){this.props=t,this.context=e,this.refs=Pm,this.updater=n||Rm}var Xc=qc.prototype=new xm;Xc.constructor=qc;Nm(Xc,Ti.prototype);Xc.isPureReactComponent=!0;var Yh=Array.isArray,Dm=Object.prototype.hasOwnProperty,Jc={current:null},Am={key:!0,ref:!0,__self:!0,__source:!0};function Om(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Dm.call(e,r)&&!Am.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:eo,type:t,key:s,ref:o,props:i,_owner:Jc.current}}function O0(t,e){return{$$typeof:eo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zc(t){return typeof t=="object"&&t!==null&&t.$$typeof===eo}function L0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var qh=/\/+/g;function Wa(t,e){return typeof t=="object"&&t!==null&&t.key!=null?L0(""+t.key):e.toString(36)}function Ho(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case eo:case S0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Wa(o,0):r,Yh(i)?(n="",t!=null&&(n=t.replace(qh,"$&/")+"/"),Ho(i,e,n,"",function(u){return u})):i!=null&&(Zc(i)&&(i=O0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(qh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Yh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Wa(s,l);o+=Ho(s,e,n,a,i)}else if(a=A0(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Wa(s,l++),o+=Ho(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Io(t,e,n){if(t==null)return t;var r=[],i=0;return Ho(t,r,"","",function(s){return e.call(n,s,i++)}),r}function M0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Je={current:null},Vo={transition:null},b0={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:Vo,ReactCurrentOwner:Jc};q.Children={map:Io,forEach:function(t,e,n){Io(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Io(t,function(){e++}),e},toArray:function(t){return Io(t,function(e){return e})||[]},only:function(t){if(!Zc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=Ti;q.Fragment=C0;q.Profiler=k0;q.PureComponent=qc;q.StrictMode=I0;q.Suspense=P0;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b0;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Nm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Dm.call(e,a)&&!Am.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:eo,type:t.type,key:i,ref:s,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:R0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:T0,_context:t},t.Consumer=t};q.createElement=Om;q.createFactory=function(t){var e=Om.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:N0,render:t}};q.isValidElement=Zc;q.lazy=function(t){return{$$typeof:D0,_payload:{_status:-1,_result:t},_init:M0}};q.memo=function(t,e){return{$$typeof:x0,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=Vo.transition;Vo.transition={};try{t()}finally{Vo.transition=e}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(t,e){return Je.current.useCallback(t,e)};q.useContext=function(t){return Je.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return Je.current.useDeferredValue(t)};q.useEffect=function(t,e){return Je.current.useEffect(t,e)};q.useId=function(){return Je.current.useId()};q.useImperativeHandle=function(t,e,n){return Je.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return Je.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return Je.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return Je.current.useMemo(t,e)};q.useReducer=function(t,e,n){return Je.current.useReducer(t,e,n)};q.useRef=function(t){return Je.current.useRef(t)};q.useState=function(t){return Je.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return Je.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return Je.current.useTransition()};q.version="18.2.0";(function(t){t.exports=q})(E0);const Lm=y0(I),xu=v0({__proto__:null,default:Lm},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0=I,U0=Symbol.for("react.element"),z0=Symbol.for("react.fragment"),B0=Object.prototype.hasOwnProperty,W0=F0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j0={key:!0,ref:!0,__self:!0,__source:!0};function Mm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)B0.call(e,r)&&!j0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:U0,type:t,key:s,ref:o,props:i,_owner:W0.current}}Zl.Fragment=z0;Zl.jsx=Mm;Zl.jsxs=Mm;(function(t){t.exports=Zl})(w0);const $0=Ss.Fragment,D=Ss.jsx,de=Ss.jsxs;var Du={},Au={},H0={get exports(){return Au},set exports(t){Au=t}},mt={},Ou={},V0={get exports(){return Ou},set exports(t){Ou=t}},bm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,H){var b=A.length;A.push(H);e:for(;0<b;){var re=b-1>>>1,ye=A[re];if(0<i(ye,H))A[re]=H,A[b]=ye,b=re;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var H=A[0],b=A.pop();if(b!==H){A[0]=b;e:for(var re=0,ye=A.length,Mr=ye>>>1;re<Mr;){var We=2*(re+1)-1,Mi=A[We],Xt=We+1,tr=A[Xt];if(0>i(Mi,b))Xt<ye&&0>i(tr,Mi)?(A[re]=tr,A[Xt]=b,re=Xt):(A[re]=Mi,A[We]=b,re=We);else if(Xt<ye&&0>i(tr,b))A[re]=tr,A[Xt]=b,re=Xt;else break e}}return H}function i(A,H){var b=A.sortIndex-H.sortIndex;return b!==0?b:A.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,_=!1,v=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(A){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=A)r(u),H.sortIndex=H.expirationTime,e(a,H);else break;H=n(u)}}function E(A){if(y=!1,m(A),!v)if(n(a)!==null)v=!0,vt(C);else{var H=n(u);H!==null&&qt(E,H.startTime-A)}}function C(A,H){v=!1,y&&(y=!1,p(R),R=-1),_=!0;var b=h;try{for(m(H),c=n(a);c!==null&&(!(c.expirationTime>H)||A&&!$());){var re=c.callback;if(typeof re=="function"){c.callback=null,h=c.priorityLevel;var ye=re(c.expirationTime<=H);H=t.unstable_now(),typeof ye=="function"?c.callback=ye:c===n(a)&&r(a),m(H)}else r(a);c=n(a)}if(c!==null)var Mr=!0;else{var We=n(u);We!==null&&qt(E,We.startTime-H),Mr=!1}return Mr}finally{c=null,h=b,_=!1}}var P=!1,x=null,R=-1,J=5,j=-1;function $(){return!(t.unstable_now()-j<J)}function Le(){if(x!==null){var A=t.unstable_now();j=A;var H=!0;try{H=x(!0,A)}finally{H?Me():(P=!1,x=null)}}else P=!1}var Me;if(typeof f=="function")Me=function(){f(Le)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,_t=Be.port2;Be.port1.onmessage=Le,Me=function(){_t.postMessage(null)}}else Me=function(){g(Le,0)};function vt(A){x=A,P||(P=!0,Me())}function qt(A,H){R=g(function(){A(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,vt(C))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(A){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var b=h;h=H;try{return A()}finally{h=b}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,H){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var b=h;h=A;try{return H()}finally{h=b}},t.unstable_scheduleCallback=function(A,H,b){var re=t.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?re+b:re):b=re,A){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=b+ye,A={id:d++,callback:H,priorityLevel:A,startTime:b,expirationTime:ye,sortIndex:-1},b>re?(A.sortIndex=b,e(u,A),n(a)===null&&A===n(u)&&(y?(p(R),R=-1):y=!0,qt(E,b-re))):(A.sortIndex=ye,e(a,A),v||_||(v=!0,vt(C))),A},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(A){var H=h;return function(){var b=h;h=H;try{return A.apply(this,arguments)}finally{h=b}}}})(bm);(function(t){t.exports=bm})(V0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm=I,pt=Ou;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Um=new Set,Cs={};function Dr(t,e){fi(t,e),fi(t+"Capture",e)}function fi(t,e){for(Cs[t]=e,t=0;t<e.length;t++)Um.add(e[t])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lu=Object.prototype.hasOwnProperty,G0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xh={},Jh={};function K0(t){return Lu.call(Jh,t)?!0:Lu.call(Xh,t)?!1:G0.test(t)?Jh[t]=!0:(Xh[t]=!0,!1)}function Q0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Y0(t,e,n,r){if(e===null||typeof e>"u"||Q0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ze(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ze[t]=new Ze(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ze[e]=new Ze(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ze[t]=new Ze(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ze[t]=new Ze(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ze[t]=new Ze(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ze[t]=new Ze(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ze[t]=new Ze(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ze[t]=new Ze(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ze[t]=new Ze(t,5,!1,t.toLowerCase(),null,!1,!1)});var ed=/[\-:]([a-z])/g;function td(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ed,td);ze[e]=new Ze(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ed,td);ze[e]=new Ze(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ed,td);ze[e]=new Ze(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ze[t]=new Ze(t,1,!1,t.toLowerCase(),null,!1,!1)});ze.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ze[t]=new Ze(t,1,!1,t.toLowerCase(),null,!0,!0)});function nd(t,e,n,r){var i=ze.hasOwnProperty(e)?ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Y0(e,n,i,r)&&(n=null),r||i===null?K0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var gn=Fm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ko=Symbol.for("react.element"),zr=Symbol.for("react.portal"),Br=Symbol.for("react.fragment"),rd=Symbol.for("react.strict_mode"),Mu=Symbol.for("react.profiler"),zm=Symbol.for("react.provider"),Bm=Symbol.for("react.context"),id=Symbol.for("react.forward_ref"),bu=Symbol.for("react.suspense"),Fu=Symbol.for("react.suspense_list"),sd=Symbol.for("react.memo"),En=Symbol.for("react.lazy"),Wm=Symbol.for("react.offscreen"),Zh=Symbol.iterator;function Wi(t){return t===null||typeof t!="object"?null:(t=Zh&&t[Zh]||t["@@iterator"],typeof t=="function"?t:null)}var ge=Object.assign,ja;function ts(t){if(ja===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ja=e&&e[1]||""}return`
`+ja+t}var $a=!1;function Ha(t,e){if(!t||$a)return"";$a=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{$a=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ts(t):""}function q0(t){switch(t.tag){case 5:return ts(t.type);case 16:return ts("Lazy");case 13:return ts("Suspense");case 19:return ts("SuspenseList");case 0:case 2:case 15:return t=Ha(t.type,!1),t;case 11:return t=Ha(t.type.render,!1),t;case 1:return t=Ha(t.type,!0),t;default:return""}}function Uu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Br:return"Fragment";case zr:return"Portal";case Mu:return"Profiler";case rd:return"StrictMode";case bu:return"Suspense";case Fu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Bm:return(t.displayName||"Context")+".Consumer";case zm:return(t._context.displayName||"Context")+".Provider";case id:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sd:return e=t.displayName||null,e!==null?e:Uu(t.type)||"Memo";case En:e=t._payload,t=t._init;try{return Uu(t(e))}catch{}}return null}function X0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uu(e);case 8:return e===rd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function J0(t){var e=jm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function To(t){t._valueTracker||(t._valueTracker=J0(t))}function $m(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=jm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zu(t,e){var n=e.checked;return ge({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ef(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Gn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hm(t,e){e=e.checked,e!=null&&nd(t,"checked",e,!1)}function Bu(t,e){Hm(t,e);var n=Gn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wu(t,e.type,Gn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wu(t,e,n){(e!=="number"||ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ns=Array.isArray;function ti(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Gn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ju(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return ge({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function nf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(ns(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gn(n)}}function Vm(t,e){var n=Gn(e.value),r=Gn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function rf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Gm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $u(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Gm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ro,Km=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ro=Ro||document.createElement("div"),Ro.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ro.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Is(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Z0=["Webkit","ms","Moz","O"];Object.keys(ls).forEach(function(t){Z0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ls[e]=ls[t]})});function Qm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ls.hasOwnProperty(t)&&ls[t]?(""+e).trim():e+"px"}function Ym(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ew=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hu(t,e){if(e){if(ew[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function Vu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gu=null;function od(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ku=null,ni=null,ri=null;function sf(t){if(t=ro(t)){if(typeof Ku!="function")throw Error(T(280));var e=t.stateNode;e&&(e=ia(e),Ku(t.stateNode,t.type,e))}}function qm(t){ni?ri?ri.push(t):ri=[t]:ni=t}function Xm(){if(ni){var t=ni,e=ri;if(ri=ni=null,sf(t),e)for(t=0;t<e.length;t++)sf(e[t])}}function Jm(t,e){return t(e)}function Zm(){}var Va=!1;function eg(t,e,n){if(Va)return t(e,n);Va=!0;try{return Jm(t,e,n)}finally{Va=!1,(ni!==null||ri!==null)&&(Zm(),Xm())}}function ks(t,e){var n=t.stateNode;if(n===null)return null;var r=ia(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var Qu=!1;if(cn)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){Qu=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{Qu=!1}function tw(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var as=!1,ll=null,al=!1,Yu=null,nw={onError:function(t){as=!0,ll=t}};function rw(t,e,n,r,i,s,o,l,a){as=!1,ll=null,tw.apply(nw,arguments)}function iw(t,e,n,r,i,s,o,l,a){if(rw.apply(this,arguments),as){if(as){var u=ll;as=!1,ll=null}else throw Error(T(198));al||(al=!0,Yu=u)}}function Ar(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function tg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function of(t){if(Ar(t)!==t)throw Error(T(188))}function sw(t){var e=t.alternate;if(!e){if(e=Ar(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return of(i),t;if(s===r)return of(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function ng(t){return t=sw(t),t!==null?rg(t):null}function rg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rg(t);if(e!==null)return e;t=t.sibling}return null}var ig=pt.unstable_scheduleCallback,lf=pt.unstable_cancelCallback,ow=pt.unstable_shouldYield,lw=pt.unstable_requestPaint,we=pt.unstable_now,aw=pt.unstable_getCurrentPriorityLevel,ld=pt.unstable_ImmediatePriority,sg=pt.unstable_UserBlockingPriority,ul=pt.unstable_NormalPriority,uw=pt.unstable_LowPriority,og=pt.unstable_IdlePriority,ea=null,Ht=null;function cw(t){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(ea,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:fw,dw=Math.log,hw=Math.LN2;function fw(t){return t>>>=0,t===0?32:31-(dw(t)/hw|0)|0}var No=64,Po=4194304;function rs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=rs(l):(s&=o,s!==0&&(r=rs(s)))}else o=n&~i,o!==0?r=rs(o):s!==0&&(r=rs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Mt(e),i=1<<n,r|=t[n],e&=~i;return r}function pw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Mt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=pw(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function qu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function lg(){var t=No;return No<<=1,!(No&4194240)&&(No=64),t}function Ga(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function to(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Mt(e),t[e]=n}function gw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Mt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ad(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Mt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ne=0;function ag(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ug,ud,cg,dg,hg,Xu=!1,xo=[],Dn=null,An=null,On=null,Ts=new Map,Rs=new Map,Cn=[],_w="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function af(t,e){switch(t){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Ts.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rs.delete(e.pointerId)}}function $i(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ro(e),e!==null&&ud(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function vw(t,e,n,r,i){switch(e){case"focusin":return Dn=$i(Dn,t,e,n,r,i),!0;case"dragenter":return An=$i(An,t,e,n,r,i),!0;case"mouseover":return On=$i(On,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ts.set(s,$i(Ts.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Rs.set(s,$i(Rs.get(s)||null,t,e,n,r,i)),!0}return!1}function fg(t){var e=lr(t.target);if(e!==null){var n=Ar(e);if(n!==null){if(e=n.tag,e===13){if(e=tg(n),e!==null){t.blockedOn=e,hg(t.priority,function(){cg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Go(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ju(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Gu=r,n.target.dispatchEvent(r),Gu=null}else return e=ro(n),e!==null&&ud(e),t.blockedOn=n,!1;e.shift()}return!0}function uf(t,e,n){Go(t)&&n.delete(e)}function yw(){Xu=!1,Dn!==null&&Go(Dn)&&(Dn=null),An!==null&&Go(An)&&(An=null),On!==null&&Go(On)&&(On=null),Ts.forEach(uf),Rs.forEach(uf)}function Hi(t,e){t.blockedOn===e&&(t.blockedOn=null,Xu||(Xu=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,yw)))}function Ns(t){function e(i){return Hi(i,t)}if(0<xo.length){Hi(xo[0],t);for(var n=1;n<xo.length;n++){var r=xo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Dn!==null&&Hi(Dn,t),An!==null&&Hi(An,t),On!==null&&Hi(On,t),Ts.forEach(e),Rs.forEach(e),n=0;n<Cn.length;n++)r=Cn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Cn.length&&(n=Cn[0],n.blockedOn===null);)fg(n),n.blockedOn===null&&Cn.shift()}var ii=gn.ReactCurrentBatchConfig,dl=!0;function ww(t,e,n,r){var i=ne,s=ii.transition;ii.transition=null;try{ne=1,cd(t,e,n,r)}finally{ne=i,ii.transition=s}}function Ew(t,e,n,r){var i=ne,s=ii.transition;ii.transition=null;try{ne=4,cd(t,e,n,r)}finally{ne=i,ii.transition=s}}function cd(t,e,n,r){if(dl){var i=Ju(t,e,n,r);if(i===null)nu(t,e,r,hl,n),af(t,r);else if(vw(i,t,e,n,r))r.stopPropagation();else if(af(t,r),e&4&&-1<_w.indexOf(t)){for(;i!==null;){var s=ro(i);if(s!==null&&ug(s),s=Ju(t,e,n,r),s===null&&nu(t,e,r,hl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else nu(t,e,r,null,n)}}var hl=null;function Ju(t,e,n,r){if(hl=null,t=od(r),t=lr(t),t!==null)if(e=Ar(t),e===null)t=null;else if(n=e.tag,n===13){if(t=tg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hl=t,null}function pg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(aw()){case ld:return 1;case sg:return 4;case ul:case uw:return 16;case og:return 536870912;default:return 16}default:return 16}}var Pn=null,dd=null,Ko=null;function mg(){if(Ko)return Ko;var t,e=dd,n=e.length,r,i="value"in Pn?Pn.value:Pn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ko=i.slice(t,1<r?1-r:void 0)}function Qo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Do(){return!0}function cf(){return!1}function gt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Do:cf,this.isPropagationStopped=cf,this}return ge(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Do)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Do)},persist:function(){},isPersistent:Do}),e}var Ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hd=gt(Ri),no=ge({},Ri,{view:0,detail:0}),Sw=gt(no),Ka,Qa,Vi,ta=ge({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vi&&(Vi&&t.type==="mousemove"?(Ka=t.screenX-Vi.screenX,Qa=t.screenY-Vi.screenY):Qa=Ka=0,Vi=t),Ka)},movementY:function(t){return"movementY"in t?t.movementY:Qa}}),df=gt(ta),Cw=ge({},ta,{dataTransfer:0}),Iw=gt(Cw),kw=ge({},no,{relatedTarget:0}),Ya=gt(kw),Tw=ge({},Ri,{animationName:0,elapsedTime:0,pseudoElement:0}),Rw=gt(Tw),Nw=ge({},Ri,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Pw=gt(Nw),xw=ge({},Ri,{data:0}),hf=gt(xw),Dw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Aw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ow={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ow[t])?!!e[t]:!1}function fd(){return Lw}var Mw=ge({},no,{key:function(t){if(t.key){var e=Dw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Aw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fd,charCode:function(t){return t.type==="keypress"?Qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bw=gt(Mw),Fw=ge({},ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ff=gt(Fw),Uw=ge({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fd}),zw=gt(Uw),Bw=ge({},Ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ww=gt(Bw),jw=ge({},ta,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$w=gt(jw),Hw=[9,13,27,32],pd=cn&&"CompositionEvent"in window,us=null;cn&&"documentMode"in document&&(us=document.documentMode);var Vw=cn&&"TextEvent"in window&&!us,gg=cn&&(!pd||us&&8<us&&11>=us),pf=String.fromCharCode(32),mf=!1;function _g(t,e){switch(t){case"keyup":return Hw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function Gw(t,e){switch(t){case"compositionend":return vg(e);case"keypress":return e.which!==32?null:(mf=!0,pf);case"textInput":return t=e.data,t===pf&&mf?null:t;default:return null}}function Kw(t,e){if(Wr)return t==="compositionend"||!pd&&_g(t,e)?(t=mg(),Ko=dd=Pn=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gg&&e.locale!=="ko"?null:e.data;default:return null}}var Qw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Qw[t.type]:e==="textarea"}function yg(t,e,n,r){qm(r),e=fl(e,"onChange"),0<e.length&&(n=new hd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var cs=null,Ps=null;function Yw(t){xg(t,0)}function na(t){var e=Hr(t);if($m(e))return t}function qw(t,e){if(t==="change")return e}var wg=!1;if(cn){var qa;if(cn){var Xa="oninput"in document;if(!Xa){var _f=document.createElement("div");_f.setAttribute("oninput","return;"),Xa=typeof _f.oninput=="function"}qa=Xa}else qa=!1;wg=qa&&(!document.documentMode||9<document.documentMode)}function vf(){cs&&(cs.detachEvent("onpropertychange",Eg),Ps=cs=null)}function Eg(t){if(t.propertyName==="value"&&na(Ps)){var e=[];yg(e,Ps,t,od(t)),eg(Yw,e)}}function Xw(t,e,n){t==="focusin"?(vf(),cs=e,Ps=n,cs.attachEvent("onpropertychange",Eg)):t==="focusout"&&vf()}function Jw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return na(Ps)}function Zw(t,e){if(t==="click")return na(e)}function eE(t,e){if(t==="input"||t==="change")return na(e)}function tE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ut=typeof Object.is=="function"?Object.is:tE;function xs(t,e){if(Ut(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Lu.call(e,i)||!Ut(t[i],e[i]))return!1}return!0}function yf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wf(t,e){var n=yf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yf(n)}}function Sg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Cg(){for(var t=window,e=ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ol(t.document)}return e}function md(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nE(t){var e=Cg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Sg(n.ownerDocument.documentElement,n)){if(r!==null&&md(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=wf(n,s);var o=wf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rE=cn&&"documentMode"in document&&11>=document.documentMode,jr=null,Zu=null,ds=null,ec=!1;function Ef(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ec||jr==null||jr!==ol(r)||(r=jr,"selectionStart"in r&&md(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ds&&xs(ds,r)||(ds=r,r=fl(Zu,"onSelect"),0<r.length&&(e=new hd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=jr)))}function Ao(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $r={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},Ja={},Ig={};cn&&(Ig=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function ra(t){if(Ja[t])return Ja[t];if(!$r[t])return t;var e=$r[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ig)return Ja[t]=e[n];return t}var kg=ra("animationend"),Tg=ra("animationiteration"),Rg=ra("animationstart"),Ng=ra("transitionend"),Pg=new Map,Sf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xn(t,e){Pg.set(t,e),Dr(e,[t])}for(var Za=0;Za<Sf.length;Za++){var eu=Sf[Za],iE=eu.toLowerCase(),sE=eu[0].toUpperCase()+eu.slice(1);Xn(iE,"on"+sE)}Xn(kg,"onAnimationEnd");Xn(Tg,"onAnimationIteration");Xn(Rg,"onAnimationStart");Xn("dblclick","onDoubleClick");Xn("focusin","onFocus");Xn("focusout","onBlur");Xn(Ng,"onTransitionEnd");fi("onMouseEnter",["mouseout","mouseover"]);fi("onMouseLeave",["mouseout","mouseover"]);fi("onPointerEnter",["pointerout","pointerover"]);fi("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oE=new Set("cancel close invalid load scroll toggle".split(" ").concat(is));function Cf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,iw(r,e,void 0,t),t.currentTarget=null}function xg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Cf(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Cf(i,l,u),s=a}}}if(al)throw t=Yu,al=!1,Yu=null,t}function ue(t,e){var n=e[sc];n===void 0&&(n=e[sc]=new Set);var r=t+"__bubble";n.has(r)||(Dg(e,t,2,!1),n.add(r))}function tu(t,e,n){var r=0;e&&(r|=4),Dg(n,t,r,e)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function Ds(t){if(!t[Oo]){t[Oo]=!0,Um.forEach(function(n){n!=="selectionchange"&&(oE.has(n)||tu(n,!1,t),tu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oo]||(e[Oo]=!0,tu("selectionchange",!1,e))}}function Dg(t,e,n,r){switch(pg(e)){case 1:var i=ww;break;case 4:i=Ew;break;default:i=cd}n=i.bind(null,e,n,t),i=void 0,!Qu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function nu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=lr(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}eg(function(){var u=s,d=od(n),c=[];e:{var h=Pg.get(t);if(h!==void 0){var _=hd,v=t;switch(t){case"keypress":if(Qo(n)===0)break e;case"keydown":case"keyup":_=bw;break;case"focusin":v="focus",_=Ya;break;case"focusout":v="blur",_=Ya;break;case"beforeblur":case"afterblur":_=Ya;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=df;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Iw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=zw;break;case kg:case Tg:case Rg:_=Rw;break;case Ng:_=Ww;break;case"scroll":_=Sw;break;case"wheel":_=$w;break;case"copy":case"cut":case"paste":_=Pw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=ff}var y=(e&4)!==0,g=!y&&t==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,m;f!==null;){m=f;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,p!==null&&(E=ks(f,p),E!=null&&y.push(As(f,E,m)))),g)break;f=f.return}0<y.length&&(h=new _(h,v,null,n,d),c.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",h&&n!==Gu&&(v=n.relatedTarget||n.fromElement)&&(lr(v)||v[dn]))break e;if((_||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=u,v=v?lr(v):null,v!==null&&(g=Ar(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=u),_!==v)){if(y=df,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=ff,E="onPointerLeave",p="onPointerEnter",f="pointer"),g=_==null?h:Hr(_),m=v==null?h:Hr(v),h=new y(E,f+"leave",_,n,d),h.target=g,h.relatedTarget=m,E=null,lr(d)===u&&(y=new y(p,f+"enter",v,n,d),y.target=m,y.relatedTarget=g,E=y),g=E,_&&v)t:{for(y=_,p=v,f=0,m=y;m;m=Fr(m))f++;for(m=0,E=p;E;E=Fr(E))m++;for(;0<f-m;)y=Fr(y),f--;for(;0<m-f;)p=Fr(p),m--;for(;f--;){if(y===p||p!==null&&y===p.alternate)break t;y=Fr(y),p=Fr(p)}y=null}else y=null;_!==null&&If(c,h,_,y,!1),v!==null&&g!==null&&If(c,g,v,y,!0)}}e:{if(h=u?Hr(u):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var C=qw;else if(gf(h))if(wg)C=eE;else{C=Jw;var P=Xw}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Zw);if(C&&(C=C(t,u))){yg(c,C,n,d);break e}P&&P(t,h,u),t==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Wu(h,"number",h.value)}switch(P=u?Hr(u):window,t){case"focusin":(gf(P)||P.contentEditable==="true")&&(jr=P,Zu=u,ds=null);break;case"focusout":ds=Zu=jr=null;break;case"mousedown":ec=!0;break;case"contextmenu":case"mouseup":case"dragend":ec=!1,Ef(c,n,d);break;case"selectionchange":if(rE)break;case"keydown":case"keyup":Ef(c,n,d)}var x;if(pd)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Wr?_g(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(gg&&n.locale!=="ko"&&(Wr||R!=="onCompositionStart"?R==="onCompositionEnd"&&Wr&&(x=mg()):(Pn=d,dd="value"in Pn?Pn.value:Pn.textContent,Wr=!0)),P=fl(u,R),0<P.length&&(R=new hf(R,t,null,n,d),c.push({event:R,listeners:P}),x?R.data=x:(x=vg(n),x!==null&&(R.data=x)))),(x=Vw?Gw(t,n):Kw(t,n))&&(u=fl(u,"onBeforeInput"),0<u.length&&(d=new hf("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=x))}xg(c,e)})}function As(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ks(t,n),s!=null&&r.unshift(As(t,s,i)),s=ks(t,e),s!=null&&r.push(As(t,s,i))),t=t.return}return r}function Fr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function If(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=ks(n,s),a!=null&&o.unshift(As(n,a,l))):i||(a=ks(n,s),a!=null&&o.push(As(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lE=/\r\n?/g,aE=/\u0000|\uFFFD/g;function kf(t){return(typeof t=="string"?t:""+t).replace(lE,`
`).replace(aE,"")}function Lo(t,e,n){if(e=kf(e),kf(t)!==e&&n)throw Error(T(425))}function pl(){}var tc=null,nc=null;function rc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ic=typeof setTimeout=="function"?setTimeout:void 0,uE=typeof clearTimeout=="function"?clearTimeout:void 0,Tf=typeof Promise=="function"?Promise:void 0,cE=typeof queueMicrotask=="function"?queueMicrotask:typeof Tf<"u"?function(t){return Tf.resolve(null).then(t).catch(dE)}:ic;function dE(t){setTimeout(function(){throw t})}function ru(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ns(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ns(e)}function Ln(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Rf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ni=Math.random().toString(36).slice(2),$t="__reactFiber$"+Ni,Os="__reactProps$"+Ni,dn="__reactContainer$"+Ni,sc="__reactEvents$"+Ni,hE="__reactListeners$"+Ni,fE="__reactHandles$"+Ni;function lr(t){var e=t[$t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[dn]||n[$t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Rf(t);t!==null;){if(n=t[$t])return n;t=Rf(t)}return e}t=n,n=t.parentNode}return null}function ro(t){return t=t[$t]||t[dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function ia(t){return t[Os]||null}var oc=[],Vr=-1;function Jn(t){return{current:t}}function he(t){0>Vr||(t.current=oc[Vr],oc[Vr]=null,Vr--)}function ae(t,e){Vr++,oc[Vr]=t.current,t.current=e}var Kn={},Ke=Jn(Kn),it=Jn(!1),_r=Kn;function pi(t,e){var n=t.type.contextTypes;if(!n)return Kn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function st(t){return t=t.childContextTypes,t!=null}function ml(){he(it),he(Ke)}function Nf(t,e,n){if(Ke.current!==Kn)throw Error(T(168));ae(Ke,e),ae(it,n)}function Ag(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,X0(t)||"Unknown",i));return ge({},n,r)}function gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Kn,_r=Ke.current,ae(Ke,t),ae(it,it.current),!0}function Pf(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=Ag(t,e,_r),r.__reactInternalMemoizedMergedChildContext=t,he(it),he(Ke),ae(Ke,t)):he(it),ae(it,n)}var tn=null,sa=!1,iu=!1;function Og(t){tn===null?tn=[t]:tn.push(t)}function pE(t){sa=!0,Og(t)}function Zn(){if(!iu&&tn!==null){iu=!0;var t=0,e=ne;try{var n=tn;for(ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}tn=null,sa=!1}catch(i){throw tn!==null&&(tn=tn.slice(t+1)),ig(ld,Zn),i}finally{ne=e,iu=!1}}return null}var Gr=[],Kr=0,_l=null,vl=0,yt=[],wt=0,vr=null,nn=1,rn="";function rr(t,e){Gr[Kr++]=vl,Gr[Kr++]=_l,_l=t,vl=e}function Lg(t,e,n){yt[wt++]=nn,yt[wt++]=rn,yt[wt++]=vr,vr=t;var r=nn;t=rn;var i=32-Mt(r)-1;r&=~(1<<i),n+=1;var s=32-Mt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,nn=1<<32-Mt(e)+i|n<<i|r,rn=s+t}else nn=1<<s|n<<i|r,rn=t}function gd(t){t.return!==null&&(rr(t,1),Lg(t,1,0))}function _d(t){for(;t===_l;)_l=Gr[--Kr],Gr[Kr]=null,vl=Gr[--Kr],Gr[Kr]=null;for(;t===vr;)vr=yt[--wt],yt[wt]=null,rn=yt[--wt],yt[wt]=null,nn=yt[--wt],yt[wt]=null}var ft=null,ht=null,fe=!1,Dt=null;function Mg(t,e){var n=Et(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function xf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ft=t,ht=Ln(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ft=t,ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=vr!==null?{id:nn,overflow:rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Et(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ft=t,ht=null,!0):!1;default:return!1}}function lc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ac(t){if(fe){var e=ht;if(e){var n=e;if(!xf(t,e)){if(lc(t))throw Error(T(418));e=Ln(n.nextSibling);var r=ft;e&&xf(t,e)?Mg(r,n):(t.flags=t.flags&-4097|2,fe=!1,ft=t)}}else{if(lc(t))throw Error(T(418));t.flags=t.flags&-4097|2,fe=!1,ft=t}}}function Df(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ft=t}function Mo(t){if(t!==ft)return!1;if(!fe)return Df(t),fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rc(t.type,t.memoizedProps)),e&&(e=ht)){if(lc(t))throw bg(),Error(T(418));for(;e;)Mg(t,e),e=Ln(e.nextSibling)}if(Df(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ht=Ln(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ht=null}}else ht=ft?Ln(t.stateNode.nextSibling):null;return!0}function bg(){for(var t=ht;t;)t=Ln(t.nextSibling)}function mi(){ht=ft=null,fe=!1}function vd(t){Dt===null?Dt=[t]:Dt.push(t)}var mE=gn.ReactCurrentBatchConfig;function Pt(t,e){if(t&&t.defaultProps){e=ge({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var yl=Jn(null),wl=null,Qr=null,yd=null;function wd(){yd=Qr=wl=null}function Ed(t){var e=yl.current;he(yl),t._currentValue=e}function uc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function si(t,e){wl=t,yd=Qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nt=!0),t.firstContext=null)}function Ct(t){var e=t._currentValue;if(yd!==t)if(t={context:t,memoizedValue:e,next:null},Qr===null){if(wl===null)throw Error(T(308));Qr=t,wl.dependencies={lanes:0,firstContext:t}}else Qr=Qr.next=t;return e}var ar=null;function Sd(t){ar===null?ar=[t]:ar.push(t)}function Fg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Sd(e)):(n.next=i.next,i.next=n),e.interleaved=n,hn(t,r)}function hn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Sn=!1;function Cd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ug(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function an(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Mn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,hn(t,n)}return i=r.interleaved,i===null?(e.next=e,Sd(r)):(e.next=i.next,i.next=e),r.interleaved=e,hn(t,n)}function Yo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ad(t,n)}}function Af(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function El(t,e,n,r){var i=t.updateQueue;Sn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,_=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,y=l;switch(h=e,_=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){c=v.call(_,c,h);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(_,c,h):v,h==null)break e;c=ge({},c,h);break e;case 2:Sn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else _={eventTime:_,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=_,a=c):d=d.next=_,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);wr|=o,t.lanes=o,t.memoizedState=c}}function Of(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var zg=new Fm.Component().refs;function cc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ge({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var oa={isMounted:function(t){return(t=t._reactInternals)?Ar(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Xe(),i=Fn(t),s=an(r,i);s.payload=e,n!=null&&(s.callback=n),e=Mn(t,s,i),e!==null&&(bt(e,t,i,r),Yo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Xe(),i=Fn(t),s=an(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Mn(t,s,i),e!==null&&(bt(e,t,i,r),Yo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xe(),r=Fn(t),i=an(n,r);i.tag=2,e!=null&&(i.callback=e),e=Mn(t,i,r),e!==null&&(bt(e,t,r,n),Yo(e,t,r))}};function Lf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!xs(n,r)||!xs(i,s):!0}function Bg(t,e,n){var r=!1,i=Kn,s=e.contextType;return typeof s=="object"&&s!==null?s=Ct(s):(i=st(e)?_r:Ke.current,r=e.contextTypes,s=(r=r!=null)?pi(t,i):Kn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=oa,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Mf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&oa.enqueueReplaceState(e,e.state,null)}function dc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=zg,Cd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ct(s):(s=st(e)?_r:Ke.current,i.context=pi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&oa.enqueueReplaceState(i,i.state,null),El(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Gi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===zg&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function bo(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bf(t){var e=t._init;return e(t._payload)}function Wg(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Un(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,E){return f===null||f.tag!==6?(f=du(m,p.mode,E),f.return=p,f):(f=i(f,m),f.return=p,f)}function a(p,f,m,E){var C=m.type;return C===Br?d(p,f,m.props.children,E,m.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===En&&bf(C)===f.type)?(E=i(f,m.props),E.ref=Gi(p,f,m),E.return=p,E):(E=tl(m.type,m.key,m.props,null,p.mode,E),E.ref=Gi(p,f,m),E.return=p,E)}function u(p,f,m,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=hu(m,p.mode,E),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,E,C){return f===null||f.tag!==7?(f=pr(m,p.mode,E,C),f.return=p,f):(f=i(f,m),f.return=p,f)}function c(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=du(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ko:return m=tl(f.type,f.key,f.props,null,p.mode,m),m.ref=Gi(p,null,f),m.return=p,m;case zr:return f=hu(f,p.mode,m),f.return=p,f;case En:var E=f._init;return c(p,E(f._payload),m)}if(ns(f)||Wi(f))return f=pr(f,p.mode,m,null),f.return=p,f;bo(p,f)}return null}function h(p,f,m,E){var C=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:l(p,f,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ko:return m.key===C?a(p,f,m,E):null;case zr:return m.key===C?u(p,f,m,E):null;case En:return C=m._init,h(p,f,C(m._payload),E)}if(ns(m)||Wi(m))return C!==null?null:d(p,f,m,E,null);bo(p,m)}return null}function _(p,f,m,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(m)||null,l(f,p,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ko:return p=p.get(E.key===null?m:E.key)||null,a(f,p,E,C);case zr:return p=p.get(E.key===null?m:E.key)||null,u(f,p,E,C);case En:var P=E._init;return _(p,f,m,P(E._payload),C)}if(ns(E)||Wi(E))return p=p.get(m)||null,d(f,p,E,C,null);bo(f,E)}return null}function v(p,f,m,E){for(var C=null,P=null,x=f,R=f=0,J=null;x!==null&&R<m.length;R++){x.index>R?(J=x,x=null):J=x.sibling;var j=h(p,x,m[R],E);if(j===null){x===null&&(x=J);break}t&&x&&j.alternate===null&&e(p,x),f=s(j,f,R),P===null?C=j:P.sibling=j,P=j,x=J}if(R===m.length)return n(p,x),fe&&rr(p,R),C;if(x===null){for(;R<m.length;R++)x=c(p,m[R],E),x!==null&&(f=s(x,f,R),P===null?C=x:P.sibling=x,P=x);return fe&&rr(p,R),C}for(x=r(p,x);R<m.length;R++)J=_(x,p,R,m[R],E),J!==null&&(t&&J.alternate!==null&&x.delete(J.key===null?R:J.key),f=s(J,f,R),P===null?C=J:P.sibling=J,P=J);return t&&x.forEach(function($){return e(p,$)}),fe&&rr(p,R),C}function y(p,f,m,E){var C=Wi(m);if(typeof C!="function")throw Error(T(150));if(m=C.call(m),m==null)throw Error(T(151));for(var P=C=null,x=f,R=f=0,J=null,j=m.next();x!==null&&!j.done;R++,j=m.next()){x.index>R?(J=x,x=null):J=x.sibling;var $=h(p,x,j.value,E);if($===null){x===null&&(x=J);break}t&&x&&$.alternate===null&&e(p,x),f=s($,f,R),P===null?C=$:P.sibling=$,P=$,x=J}if(j.done)return n(p,x),fe&&rr(p,R),C;if(x===null){for(;!j.done;R++,j=m.next())j=c(p,j.value,E),j!==null&&(f=s(j,f,R),P===null?C=j:P.sibling=j,P=j);return fe&&rr(p,R),C}for(x=r(p,x);!j.done;R++,j=m.next())j=_(x,p,R,j.value,E),j!==null&&(t&&j.alternate!==null&&x.delete(j.key===null?R:j.key),f=s(j,f,R),P===null?C=j:P.sibling=j,P=j);return t&&x.forEach(function(Le){return e(p,Le)}),fe&&rr(p,R),C}function g(p,f,m,E){if(typeof m=="object"&&m!==null&&m.type===Br&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ko:e:{for(var C=m.key,P=f;P!==null;){if(P.key===C){if(C=m.type,C===Br){if(P.tag===7){n(p,P.sibling),f=i(P,m.props.children),f.return=p,p=f;break e}}else if(P.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===En&&bf(C)===P.type){n(p,P.sibling),f=i(P,m.props),f.ref=Gi(p,P,m),f.return=p,p=f;break e}n(p,P);break}else e(p,P);P=P.sibling}m.type===Br?(f=pr(m.props.children,p.mode,E,m.key),f.return=p,p=f):(E=tl(m.type,m.key,m.props,null,p.mode,E),E.ref=Gi(p,f,m),E.return=p,p=E)}return o(p);case zr:e:{for(P=m.key;f!==null;){if(f.key===P)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=hu(m,p.mode,E),f.return=p,p=f}return o(p);case En:return P=m._init,g(p,f,P(m._payload),E)}if(ns(m))return v(p,f,m,E);if(Wi(m))return y(p,f,m,E);bo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=du(m,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return g}var gi=Wg(!0),jg=Wg(!1),io={},Vt=Jn(io),Ls=Jn(io),Ms=Jn(io);function ur(t){if(t===io)throw Error(T(174));return t}function Id(t,e){switch(ae(Ms,e),ae(Ls,t),ae(Vt,io),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$u(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$u(e,t)}he(Vt),ae(Vt,e)}function _i(){he(Vt),he(Ls),he(Ms)}function $g(t){ur(Ms.current);var e=ur(Vt.current),n=$u(e,t.type);e!==n&&(ae(Ls,t),ae(Vt,n))}function kd(t){Ls.current===t&&(he(Vt),he(Ls))}var pe=Jn(0);function Sl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var su=[];function Td(){for(var t=0;t<su.length;t++)su[t]._workInProgressVersionPrimary=null;su.length=0}var qo=gn.ReactCurrentDispatcher,ou=gn.ReactCurrentBatchConfig,yr=0,me=null,Ie=null,xe=null,Cl=!1,hs=!1,bs=0,gE=0;function $e(){throw Error(T(321))}function Rd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ut(t[n],e[n]))return!1;return!0}function Nd(t,e,n,r,i,s){if(yr=s,me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,qo.current=t===null||t.memoizedState===null?wE:EE,t=n(r,i),hs){s=0;do{if(hs=!1,bs=0,25<=s)throw Error(T(301));s+=1,xe=Ie=null,e.updateQueue=null,qo.current=SE,t=n(r,i)}while(hs)}if(qo.current=Il,e=Ie!==null&&Ie.next!==null,yr=0,xe=Ie=me=null,Cl=!1,e)throw Error(T(300));return t}function Pd(){var t=bs!==0;return bs=0,t}function Wt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?me.memoizedState=xe=t:xe=xe.next=t,xe}function It(){if(Ie===null){var t=me.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var e=xe===null?me.memoizedState:xe.next;if(e!==null)xe=e,Ie=t;else{if(t===null)throw Error(T(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},xe===null?me.memoizedState=xe=t:xe=xe.next=t}return xe}function Fs(t,e){return typeof e=="function"?e(t):e}function lu(t){var e=It(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=Ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((yr&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,me.lanes|=d,wr|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,Ut(r,e.memoizedState)||(nt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,me.lanes|=s,wr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function au(t){var e=It(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ut(s,e.memoizedState)||(nt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Hg(){}function Vg(t,e){var n=me,r=It(),i=e(),s=!Ut(r.memoizedState,i);if(s&&(r.memoizedState=i,nt=!0),r=r.queue,xd(Qg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,Us(9,Kg.bind(null,n,r,i,e),void 0,null),Oe===null)throw Error(T(349));yr&30||Gg(n,e,i)}return i}function Gg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Kg(t,e,n,r){e.value=n,e.getSnapshot=r,Yg(e)&&qg(t)}function Qg(t,e,n){return n(function(){Yg(e)&&qg(t)})}function Yg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ut(t,n)}catch{return!0}}function qg(t){var e=hn(t,1);e!==null&&bt(e,t,1,-1)}function Ff(t){var e=Wt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fs,lastRenderedState:t},e.queue=t,t=t.dispatch=yE.bind(null,me,t),[e.memoizedState,t]}function Us(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Xg(){return It().memoizedState}function Xo(t,e,n,r){var i=Wt();me.flags|=t,i.memoizedState=Us(1|e,n,void 0,r===void 0?null:r)}function la(t,e,n,r){var i=It();r=r===void 0?null:r;var s=void 0;if(Ie!==null){var o=Ie.memoizedState;if(s=o.destroy,r!==null&&Rd(r,o.deps)){i.memoizedState=Us(e,n,s,r);return}}me.flags|=t,i.memoizedState=Us(1|e,n,s,r)}function Uf(t,e){return Xo(8390656,8,t,e)}function xd(t,e){return la(2048,8,t,e)}function Jg(t,e){return la(4,2,t,e)}function Zg(t,e){return la(4,4,t,e)}function e_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function t_(t,e,n){return n=n!=null?n.concat([t]):null,la(4,4,e_.bind(null,e,t),n)}function Dd(){}function n_(t,e){var n=It();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function r_(t,e){var n=It();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function i_(t,e,n){return yr&21?(Ut(n,e)||(n=lg(),me.lanes|=n,wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nt=!0),t.memoizedState=n)}function _E(t,e){var n=ne;ne=n!==0&&4>n?n:4,t(!0);var r=ou.transition;ou.transition={};try{t(!1),e()}finally{ne=n,ou.transition=r}}function s_(){return It().memoizedState}function vE(t,e,n){var r=Fn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},o_(t))l_(e,n);else if(n=Fg(t,e,n,r),n!==null){var i=Xe();bt(n,t,r,i),a_(n,e,r)}}function yE(t,e,n){var r=Fn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(o_(t))l_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ut(l,o)){var a=e.interleaved;a===null?(i.next=i,Sd(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Fg(t,e,i,r),n!==null&&(i=Xe(),bt(n,t,r,i),a_(n,e,r))}}function o_(t){var e=t.alternate;return t===me||e!==null&&e===me}function l_(t,e){hs=Cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function a_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ad(t,n)}}var Il={readContext:Ct,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},wE={readContext:Ct,useCallback:function(t,e){return Wt().memoizedState=[t,e===void 0?null:e],t},useContext:Ct,useEffect:Uf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xo(4194308,4,e_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xo(4,2,t,e)},useMemo:function(t,e){var n=Wt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Wt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=vE.bind(null,me,t),[r.memoizedState,t]},useRef:function(t){var e=Wt();return t={current:t},e.memoizedState=t},useState:Ff,useDebugValue:Dd,useDeferredValue:function(t){return Wt().memoizedState=t},useTransition:function(){var t=Ff(!1),e=t[0];return t=_E.bind(null,t[1]),Wt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=me,i=Wt();if(fe){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),Oe===null)throw Error(T(349));yr&30||Gg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Uf(Qg.bind(null,r,s,t),[t]),r.flags|=2048,Us(9,Kg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Wt(),e=Oe.identifierPrefix;if(fe){var n=rn,r=nn;n=(r&~(1<<32-Mt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=bs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},EE={readContext:Ct,useCallback:n_,useContext:Ct,useEffect:xd,useImperativeHandle:t_,useInsertionEffect:Jg,useLayoutEffect:Zg,useMemo:r_,useReducer:lu,useRef:Xg,useState:function(){return lu(Fs)},useDebugValue:Dd,useDeferredValue:function(t){var e=It();return i_(e,Ie.memoizedState,t)},useTransition:function(){var t=lu(Fs)[0],e=It().memoizedState;return[t,e]},useMutableSource:Hg,useSyncExternalStore:Vg,useId:s_,unstable_isNewReconciler:!1},SE={readContext:Ct,useCallback:n_,useContext:Ct,useEffect:xd,useImperativeHandle:t_,useInsertionEffect:Jg,useLayoutEffect:Zg,useMemo:r_,useReducer:au,useRef:Xg,useState:function(){return au(Fs)},useDebugValue:Dd,useDeferredValue:function(t){var e=It();return Ie===null?e.memoizedState=t:i_(e,Ie.memoizedState,t)},useTransition:function(){var t=au(Fs)[0],e=It().memoizedState;return[t,e]},useMutableSource:Hg,useSyncExternalStore:Vg,useId:s_,unstable_isNewReconciler:!1};function vi(t,e){try{var n="",r=e;do n+=q0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function uu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var CE=typeof WeakMap=="function"?WeakMap:Map;function u_(t,e,n){n=an(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Tl||(Tl=!0,Sc=r),hc(t,e)},n}function c_(t,e,n){n=an(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){hc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hc(t,e),typeof r!="function"&&(bn===null?bn=new Set([this]):bn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function zf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new CE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=FE.bind(null,t,e,n),e.then(t,t))}function Bf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Wf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=an(-1,1),e.tag=2,Mn(n,e,1))),n.lanes|=1),t)}var IE=gn.ReactCurrentOwner,nt=!1;function Ye(t,e,n,r){e.child=t===null?jg(e,null,n,r):gi(e,t.child,n,r)}function jf(t,e,n,r,i){n=n.render;var s=e.ref;return si(e,i),r=Nd(t,e,n,r,s,i),n=Pd(),t!==null&&!nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fn(t,e,i)):(fe&&n&&gd(e),e.flags|=1,Ye(t,e,r,i),e.child)}function $f(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!zd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,d_(t,e,s,r,i)):(t=tl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xs,n(o,r)&&t.ref===e.ref)return fn(t,e,i)}return e.flags|=1,t=Un(s,r),t.ref=e.ref,t.return=e,e.child=t}function d_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(xs(s,r)&&t.ref===e.ref)if(nt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(nt=!0);else return e.lanes=t.lanes,fn(t,e,i)}return fc(t,e,n,r,i)}function h_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(qr,ut),ut|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ae(qr,ut),ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ae(qr,ut),ut|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ae(qr,ut),ut|=r;return Ye(t,e,i,n),e.child}function f_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function fc(t,e,n,r,i){var s=st(n)?_r:Ke.current;return s=pi(e,s),si(e,i),n=Nd(t,e,n,r,s,i),r=Pd(),t!==null&&!nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fn(t,e,i)):(fe&&r&&gd(e),e.flags|=1,Ye(t,e,n,i),e.child)}function Hf(t,e,n,r,i){if(st(n)){var s=!0;gl(e)}else s=!1;if(si(e,i),e.stateNode===null)Jo(t,e),Bg(e,n,r),dc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ct(u):(u=st(n)?_r:Ke.current,u=pi(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Mf(e,o,r,u),Sn=!1;var h=e.memoizedState;o.state=h,El(e,r,o,i),a=e.memoizedState,l!==r||h!==a||it.current||Sn?(typeof d=="function"&&(cc(e,n,d,r),a=e.memoizedState),(l=Sn||Lf(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Ug(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Pt(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ct(a):(a=st(n)?_r:Ke.current,a=pi(e,a));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&Mf(e,o,r,a),Sn=!1,h=e.memoizedState,o.state=h,El(e,r,o,i);var v=e.memoizedState;l!==c||h!==v||it.current||Sn?(typeof _=="function"&&(cc(e,n,_,r),v=e.memoizedState),(u=Sn||Lf(e,n,u,r,h,v,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return pc(t,e,n,r,s,i)}function pc(t,e,n,r,i,s){f_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Pf(e,n,!1),fn(t,e,s);r=e.stateNode,IE.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=gi(e,t.child,null,s),e.child=gi(e,null,l,s)):Ye(t,e,l,s),e.memoizedState=r.state,i&&Pf(e,n,!0),e.child}function p_(t){var e=t.stateNode;e.pendingContext?Nf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Nf(t,e.context,!1),Id(t,e.containerInfo)}function Vf(t,e,n,r,i){return mi(),vd(i),e.flags|=256,Ye(t,e,n,r),e.child}var mc={dehydrated:null,treeContext:null,retryLane:0};function gc(t){return{baseLanes:t,cachePool:null,transitions:null}}function m_(t,e,n){var r=e.pendingProps,i=pe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ae(pe,i&1),t===null)return ac(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ca(o,r,0,null),t=pr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=gc(n),e.memoizedState=mc,t):Ad(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return kE(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=Un(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Un(l,s):(s=pr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?gc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=mc,r}return s=t.child,t=s.sibling,r=Un(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ad(t,e){return e=ca({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fo(t,e,n,r){return r!==null&&vd(r),gi(e,t.child,null,n),t=Ad(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=uu(Error(T(422))),Fo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ca({mode:"visible",children:r.children},i,0,null),s=pr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&gi(e,t.child,null,o),e.child.memoizedState=gc(o),e.memoizedState=mc,s);if(!(e.mode&1))return Fo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(T(419)),r=uu(s,r,void 0),Fo(t,e,o,r)}if(l=(o&t.childLanes)!==0,nt||l){if(r=Oe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,hn(t,i),bt(r,t,i,-1))}return Ud(),r=uu(Error(T(421))),Fo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=UE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ht=Ln(i.nextSibling),ft=e,fe=!0,Dt=null,t!==null&&(yt[wt++]=nn,yt[wt++]=rn,yt[wt++]=vr,nn=t.id,rn=t.overflow,vr=e),e=Ad(e,r.children),e.flags|=4096,e)}function Gf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),uc(t.return,e,n)}function cu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function g_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ye(t,e,r.children,n),r=pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gf(t,n,e);else if(t.tag===19)Gf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ae(pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Sl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),cu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Sl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}cu(e,!0,n,null,s);break;case"together":cu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Jo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=Un(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Un(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function TE(t,e,n){switch(e.tag){case 3:p_(e),mi();break;case 5:$g(e);break;case 1:st(e.type)&&gl(e);break;case 4:Id(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ae(yl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ae(pe,pe.current&1),e.flags|=128,null):n&e.child.childLanes?m_(t,e,n):(ae(pe,pe.current&1),t=fn(t,e,n),t!==null?t.sibling:null);ae(pe,pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return g_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(pe,pe.current),r)break;return null;case 22:case 23:return e.lanes=0,h_(t,e,n)}return fn(t,e,n)}var __,_c,v_,y_;__=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_c=function(){};v_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ur(Vt.current);var s=null;switch(n){case"input":i=zu(t,i),r=zu(t,r),s=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),s=[];break;case"textarea":i=ju(t,i),r=ju(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=pl)}Hu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Cs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Cs.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ue("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};y_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ki(t,e){if(!fe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function He(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function RE(t,e,n){var r=e.pendingProps;switch(_d(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(e),null;case 1:return st(e.type)&&ml(),He(e),null;case 3:return r=e.stateNode,_i(),he(it),he(Ke),Td(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Mo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dt!==null&&(kc(Dt),Dt=null))),_c(t,e),He(e),null;case 5:kd(e);var i=ur(Ms.current);if(n=e.type,t!==null&&e.stateNode!=null)v_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return He(e),null}if(t=ur(Vt.current),Mo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[$t]=e,r[Os]=s,t=(e.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<is.length;i++)ue(is[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":ef(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":nf(r,s),ue("invalid",r)}Hu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Lo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Lo(r.textContent,l,t),i=["children",""+l]):Cs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ue("scroll",r)}switch(n){case"input":To(r),tf(r,s,!0);break;case"textarea":To(r),rf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=pl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[$t]=e,t[Os]=r,__(t,e,!1,!1),e.stateNode=t;e:{switch(o=Vu(n,r),n){case"dialog":ue("cancel",t),ue("close",t),i=r;break;case"iframe":case"object":case"embed":ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<is.length;i++)ue(is[i],t);i=r;break;case"source":ue("error",t),i=r;break;case"img":case"image":case"link":ue("error",t),ue("load",t),i=r;break;case"details":ue("toggle",t),i=r;break;case"input":ef(t,r),i=zu(t,r),ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),ue("invalid",t);break;case"textarea":nf(t,r),i=ju(t,r),ue("invalid",t);break;default:i=r}Hu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Ym(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Km(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Is(t,a):typeof a=="number"&&Is(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Cs.hasOwnProperty(s)?a!=null&&s==="onScroll"&&ue("scroll",t):a!=null&&nd(t,s,a,o))}switch(n){case"input":To(t),tf(t,r,!1);break;case"textarea":To(t),rf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Gn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ti(t,!!r.multiple,s,!1):r.defaultValue!=null&&ti(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=pl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return He(e),null;case 6:if(t&&e.stateNode!=null)y_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=ur(Ms.current),ur(Vt.current),Mo(e)){if(r=e.stateNode,n=e.memoizedProps,r[$t]=e,(s=r.nodeValue!==n)&&(t=ft,t!==null))switch(t.tag){case 3:Lo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Lo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$t]=e,e.stateNode=r}return He(e),null;case 13:if(he(pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(fe&&ht!==null&&e.mode&1&&!(e.flags&128))bg(),mi(),e.flags|=98560,s=!1;else if(s=Mo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[$t]=e}else mi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;He(e),s=!1}else Dt!==null&&(kc(Dt),Dt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||pe.current&1?Re===0&&(Re=3):Ud())),e.updateQueue!==null&&(e.flags|=4),He(e),null);case 4:return _i(),_c(t,e),t===null&&Ds(e.stateNode.containerInfo),He(e),null;case 10:return Ed(e.type._context),He(e),null;case 17:return st(e.type)&&ml(),He(e),null;case 19:if(he(pe),s=e.memoizedState,s===null)return He(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ki(s,!1);else{if(Re!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Sl(t),o!==null){for(e.flags|=128,Ki(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(pe,pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&we()>yi&&(e.flags|=128,r=!0,Ki(s,!1),e.lanes=4194304)}else{if(!r)if(t=Sl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ki(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!fe)return He(e),null}else 2*we()-s.renderingStartTime>yi&&n!==1073741824&&(e.flags|=128,r=!0,Ki(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=we(),e.sibling=null,n=pe.current,ae(pe,r?n&1|2:n&1),e):(He(e),null);case 22:case 23:return Fd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ut&1073741824&&(He(e),e.subtreeFlags&6&&(e.flags|=8192)):He(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function NE(t,e){switch(_d(e),e.tag){case 1:return st(e.type)&&ml(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _i(),he(it),he(Ke),Td(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kd(e),null;case 13:if(he(pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));mi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return he(pe),null;case 4:return _i(),null;case 10:return Ed(e.type._context),null;case 22:case 23:return Fd(),null;case 24:return null;default:return null}}var Uo=!1,Ve=!1,PE=typeof WeakSet=="function"?WeakSet:Set,O=null;function Yr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(t,e,r)}else n.current=null}function vc(t,e,n){try{n()}catch(r){_e(t,e,r)}}var Kf=!1;function xE(t,e){if(tc=dl,t=Cg(),md(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var _;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(_=c.firstChild)!==null;)h=c,c=_;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(_=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(nc={focusedElem:t,selectionRange:n},dl=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,g=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:Pt(e.type,y),g);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(E){_e(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return v=Kf,Kf=!1,v}function fs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&vc(e,n,s)}i=i.next}while(i!==r)}}function aa(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function yc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function w_(t){var e=t.alternate;e!==null&&(t.alternate=null,w_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$t],delete e[Os],delete e[sc],delete e[hE],delete e[fE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function E_(t){return t.tag===5||t.tag===3||t.tag===4}function Qf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||E_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pl));else if(r!==4&&(t=t.child,t!==null))for(wc(t,e,n),t=t.sibling;t!==null;)wc(t,e,n),t=t.sibling}function Ec(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ec(t,e,n),t=t.sibling;t!==null;)Ec(t,e,n),t=t.sibling}var Fe=null,xt=!1;function yn(t,e,n){for(n=n.child;n!==null;)S_(t,e,n),n=n.sibling}function S_(t,e,n){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(ea,n)}catch{}switch(n.tag){case 5:Ve||Yr(n,e);case 6:var r=Fe,i=xt;Fe=null,yn(t,e,n),Fe=r,xt=i,Fe!==null&&(xt?(t=Fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(xt?(t=Fe,n=n.stateNode,t.nodeType===8?ru(t.parentNode,n):t.nodeType===1&&ru(t,n),Ns(t)):ru(Fe,n.stateNode));break;case 4:r=Fe,i=xt,Fe=n.stateNode.containerInfo,xt=!0,yn(t,e,n),Fe=r,xt=i;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vc(n,e,o),i=i.next}while(i!==r)}yn(t,e,n);break;case 1:if(!Ve&&(Yr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){_e(n,e,l)}yn(t,e,n);break;case 21:yn(t,e,n);break;case 22:n.mode&1?(Ve=(r=Ve)||n.memoizedState!==null,yn(t,e,n),Ve=r):yn(t,e,n);break;default:yn(t,e,n)}}function Yf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new PE),e.forEach(function(r){var i=zE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Nt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Fe=l.stateNode,xt=!1;break e;case 3:Fe=l.stateNode.containerInfo,xt=!0;break e;case 4:Fe=l.stateNode.containerInfo,xt=!0;break e}l=l.return}if(Fe===null)throw Error(T(160));S_(s,o,i),Fe=null,xt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){_e(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)C_(e,t),e=e.sibling}function C_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nt(e,t),Bt(t),r&4){try{fs(3,t,t.return),aa(3,t)}catch(y){_e(t,t.return,y)}try{fs(5,t,t.return)}catch(y){_e(t,t.return,y)}}break;case 1:Nt(e,t),Bt(t),r&512&&n!==null&&Yr(n,n.return);break;case 5:if(Nt(e,t),Bt(t),r&512&&n!==null&&Yr(n,n.return),t.flags&32){var i=t.stateNode;try{Is(i,"")}catch(y){_e(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Hm(i,s),Vu(l,o);var u=Vu(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?Ym(i,c):d==="dangerouslySetInnerHTML"?Km(i,c):d==="children"?Is(i,c):nd(i,d,c,u)}switch(l){case"input":Bu(i,s);break;case"textarea":Vm(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?ti(i,!!s.multiple,_,!1):h!==!!s.multiple&&(s.defaultValue!=null?ti(i,!!s.multiple,s.defaultValue,!0):ti(i,!!s.multiple,s.multiple?[]:"",!1))}i[Os]=s}catch(y){_e(t,t.return,y)}}break;case 6:if(Nt(e,t),Bt(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){_e(t,t.return,y)}}break;case 3:if(Nt(e,t),Bt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ns(e.containerInfo)}catch(y){_e(t,t.return,y)}break;case 4:Nt(e,t),Bt(t);break;case 13:Nt(e,t),Bt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Md=we())),r&4&&Yf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ve=(u=Ve)||d,Nt(e,t),Ve=u):Nt(e,t),Bt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(O=t,d=t.child;d!==null;){for(c=O=d;O!==null;){switch(h=O,_=h.child,h.tag){case 0:case 11:case 14:case 15:fs(4,h,h.return);break;case 1:Yr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){_e(r,n,y)}}break;case 5:Yr(h,h.return);break;case 22:if(h.memoizedState!==null){Xf(c);continue}}_!==null?(_.return=h,O=_):Xf(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Qm("display",o))}catch(y){_e(t,t.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){_e(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Nt(e,t),Bt(t),r&4&&Yf(t);break;case 21:break;default:Nt(e,t),Bt(t)}}function Bt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(E_(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Is(i,""),r.flags&=-33);var s=Qf(t);Ec(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Qf(t);wc(t,l,o);break;default:throw Error(T(161))}}catch(a){_e(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function DE(t,e,n){O=t,I_(t)}function I_(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Uo;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ve;l=Uo;var u=Ve;if(Uo=o,(Ve=a)&&!u)for(O=i;O!==null;)o=O,a=o.child,o.tag===22&&o.memoizedState!==null?Jf(i):a!==null?(a.return=o,O=a):Jf(i);for(;s!==null;)O=s,I_(s),s=s.sibling;O=i,Uo=l,Ve=u}qf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):qf(t)}}function qf(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ve||aa(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ve)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Pt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Of(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Of(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Ns(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Ve||e.flags&512&&yc(e)}catch(h){_e(e,e.return,h)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function Xf(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function Jf(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{aa(4,e)}catch(a){_e(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){_e(e,i,a)}}var s=e.return;try{yc(e)}catch(a){_e(e,s,a)}break;case 5:var o=e.return;try{yc(e)}catch(a){_e(e,o,a)}}}catch(a){_e(e,e.return,a)}if(e===t){O=null;break}var l=e.sibling;if(l!==null){l.return=e.return,O=l;break}O=e.return}}var AE=Math.ceil,kl=gn.ReactCurrentDispatcher,Od=gn.ReactCurrentOwner,St=gn.ReactCurrentBatchConfig,Z=0,Oe=null,Se=null,Ue=0,ut=0,qr=Jn(0),Re=0,zs=null,wr=0,ua=0,Ld=0,ps=null,tt=null,Md=0,yi=1/0,Zt=null,Tl=!1,Sc=null,bn=null,zo=!1,xn=null,Rl=0,ms=0,Cc=null,Zo=-1,el=0;function Xe(){return Z&6?we():Zo!==-1?Zo:Zo=we()}function Fn(t){return t.mode&1?Z&2&&Ue!==0?Ue&-Ue:mE.transition!==null?(el===0&&(el=lg()),el):(t=ne,t!==0||(t=window.event,t=t===void 0?16:pg(t.type)),t):1}function bt(t,e,n,r){if(50<ms)throw ms=0,Cc=null,Error(T(185));to(t,n,r),(!(Z&2)||t!==Oe)&&(t===Oe&&(!(Z&2)&&(ua|=n),Re===4&&In(t,Ue)),ot(t,r),n===1&&Z===0&&!(e.mode&1)&&(yi=we()+500,sa&&Zn()))}function ot(t,e){var n=t.callbackNode;mw(t,e);var r=cl(t,t===Oe?Ue:0);if(r===0)n!==null&&lf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&lf(n),e===1)t.tag===0?pE(Zf.bind(null,t)):Og(Zf.bind(null,t)),cE(function(){!(Z&6)&&Zn()}),n=null;else{switch(ag(r)){case 1:n=ld;break;case 4:n=sg;break;case 16:n=ul;break;case 536870912:n=og;break;default:n=ul}n=A_(n,k_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function k_(t,e){if(Zo=-1,el=0,Z&6)throw Error(T(327));var n=t.callbackNode;if(oi()&&t.callbackNode!==n)return null;var r=cl(t,t===Oe?Ue:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Nl(t,r);else{e=r;var i=Z;Z|=2;var s=R_();(Oe!==t||Ue!==e)&&(Zt=null,yi=we()+500,fr(t,e));do try{ME();break}catch(l){T_(t,l)}while(1);wd(),kl.current=s,Z=i,Se!==null?e=0:(Oe=null,Ue=0,e=Re)}if(e!==0){if(e===2&&(i=qu(t),i!==0&&(r=i,e=Ic(t,i))),e===1)throw n=zs,fr(t,0),In(t,r),ot(t,we()),n;if(e===6)In(t,r);else{if(i=t.current.alternate,!(r&30)&&!OE(i)&&(e=Nl(t,r),e===2&&(s=qu(t),s!==0&&(r=s,e=Ic(t,s))),e===1))throw n=zs,fr(t,0),In(t,r),ot(t,we()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:ir(t,tt,Zt);break;case 3:if(In(t,r),(r&130023424)===r&&(e=Md+500-we(),10<e)){if(cl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Xe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ic(ir.bind(null,t,tt,Zt),e);break}ir(t,tt,Zt);break;case 4:if(In(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Mt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*AE(r/1960))-r,10<r){t.timeoutHandle=ic(ir.bind(null,t,tt,Zt),r);break}ir(t,tt,Zt);break;case 5:ir(t,tt,Zt);break;default:throw Error(T(329))}}}return ot(t,we()),t.callbackNode===n?k_.bind(null,t):null}function Ic(t,e){var n=ps;return t.current.memoizedState.isDehydrated&&(fr(t,e).flags|=256),t=Nl(t,e),t!==2&&(e=tt,tt=n,e!==null&&kc(e)),t}function kc(t){tt===null?tt=t:tt.push.apply(tt,t)}function OE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ut(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function In(t,e){for(e&=~Ld,e&=~ua,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Mt(e),r=1<<n;t[n]=-1,e&=~r}}function Zf(t){if(Z&6)throw Error(T(327));oi();var e=cl(t,0);if(!(e&1))return ot(t,we()),null;var n=Nl(t,e);if(t.tag!==0&&n===2){var r=qu(t);r!==0&&(e=r,n=Ic(t,r))}if(n===1)throw n=zs,fr(t,0),In(t,e),ot(t,we()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ir(t,tt,Zt),ot(t,we()),null}function bd(t,e){var n=Z;Z|=1;try{return t(e)}finally{Z=n,Z===0&&(yi=we()+500,sa&&Zn())}}function Er(t){xn!==null&&xn.tag===0&&!(Z&6)&&oi();var e=Z;Z|=1;var n=St.transition,r=ne;try{if(St.transition=null,ne=1,t)return t()}finally{ne=r,St.transition=n,Z=e,!(Z&6)&&Zn()}}function Fd(){ut=qr.current,he(qr)}function fr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uE(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(_d(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ml();break;case 3:_i(),he(it),he(Ke),Td();break;case 5:kd(r);break;case 4:_i();break;case 13:he(pe);break;case 19:he(pe);break;case 10:Ed(r.type._context);break;case 22:case 23:Fd()}n=n.return}if(Oe=t,Se=t=Un(t.current,null),Ue=ut=e,Re=0,zs=null,Ld=ua=wr=0,tt=ps=null,ar!==null){for(e=0;e<ar.length;e++)if(n=ar[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ar=null}return t}function T_(t,e){do{var n=Se;try{if(wd(),qo.current=Il,Cl){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Cl=!1}if(yr=0,xe=Ie=me=null,hs=!1,bs=0,Od.current=null,n===null||n.return===null){Re=1,zs=e,Se=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Ue,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Bf(o);if(_!==null){_.flags&=-257,Wf(_,o,l,s,e),_.mode&1&&zf(s,u,e),e=_,a=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(a),e.updateQueue=y}else v.add(a);break e}else{if(!(e&1)){zf(s,u,e),Ud();break e}a=Error(T(426))}}else if(fe&&l.mode&1){var g=Bf(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Wf(g,o,l,s,e),vd(vi(a,l));break e}}s=a=vi(a,l),Re!==4&&(Re=2),ps===null?ps=[s]:ps.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=u_(s,a,e);Af(s,p);break e;case 1:l=a;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(bn===null||!bn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=c_(s,l,e);Af(s,E);break e}}s=s.return}while(s!==null)}P_(n)}catch(C){e=C,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(1)}function R_(){var t=kl.current;return kl.current=Il,t===null?Il:t}function Ud(){(Re===0||Re===3||Re===2)&&(Re=4),Oe===null||!(wr&268435455)&&!(ua&268435455)||In(Oe,Ue)}function Nl(t,e){var n=Z;Z|=2;var r=R_();(Oe!==t||Ue!==e)&&(Zt=null,fr(t,e));do try{LE();break}catch(i){T_(t,i)}while(1);if(wd(),Z=n,kl.current=r,Se!==null)throw Error(T(261));return Oe=null,Ue=0,Re}function LE(){for(;Se!==null;)N_(Se)}function ME(){for(;Se!==null&&!ow();)N_(Se)}function N_(t){var e=D_(t.alternate,t,ut);t.memoizedProps=t.pendingProps,e===null?P_(t):Se=e,Od.current=null}function P_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=NE(n,e),n!==null){n.flags&=32767,Se=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Re=6,Se=null;return}}else if(n=RE(n,e,ut),n!==null){Se=n;return}if(e=e.sibling,e!==null){Se=e;return}Se=e=t}while(e!==null);Re===0&&(Re=5)}function ir(t,e,n){var r=ne,i=St.transition;try{St.transition=null,ne=1,bE(t,e,n,r)}finally{St.transition=i,ne=r}return null}function bE(t,e,n,r){do oi();while(xn!==null);if(Z&6)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(gw(t,s),t===Oe&&(Se=Oe=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zo||(zo=!0,A_(ul,function(){return oi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=St.transition,St.transition=null;var o=ne;ne=1;var l=Z;Z|=4,Od.current=null,xE(t,n),C_(n,t),nE(nc),dl=!!tc,nc=tc=null,t.current=n,DE(n),lw(),Z=l,ne=o,St.transition=s}else t.current=n;if(zo&&(zo=!1,xn=t,Rl=i),s=t.pendingLanes,s===0&&(bn=null),cw(n.stateNode),ot(t,we()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Tl)throw Tl=!1,t=Sc,Sc=null,t;return Rl&1&&t.tag!==0&&oi(),s=t.pendingLanes,s&1?t===Cc?ms++:(ms=0,Cc=t):ms=0,Zn(),null}function oi(){if(xn!==null){var t=ag(Rl),e=St.transition,n=ne;try{if(St.transition=null,ne=16>t?16:t,xn===null)var r=!1;else{if(t=xn,xn=null,Rl=0,Z&6)throw Error(T(331));var i=Z;for(Z|=4,O=t.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(O=u;O!==null;){var d=O;switch(d.tag){case 0:case 11:case 15:fs(8,d,s)}var c=d.child;if(c!==null)c.return=d,O=c;else for(;O!==null;){d=O;var h=d.sibling,_=d.return;if(w_(d),d===u){O=null;break}if(h!==null){h.return=_,O=h;break}O=_}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fs(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,O=p;break e}O=s.return}}var f=t.current;for(O=f;O!==null;){o=O;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,O=m;else e:for(o=f;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:aa(9,l)}}catch(C){_e(l,l.return,C)}if(l===o){O=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,O=E;break e}O=l.return}}if(Z=i,Zn(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(ea,t)}catch{}r=!0}return r}finally{ne=n,St.transition=e}}return!1}function ep(t,e,n){e=vi(n,e),e=u_(t,e,1),t=Mn(t,e,1),e=Xe(),t!==null&&(to(t,1,e),ot(t,e))}function _e(t,e,n){if(t.tag===3)ep(t,t,n);else for(;e!==null;){if(e.tag===3){ep(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bn===null||!bn.has(r))){t=vi(n,t),t=c_(e,t,1),e=Mn(e,t,1),t=Xe(),e!==null&&(to(e,1,t),ot(e,t));break}}e=e.return}}function FE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Xe(),t.pingedLanes|=t.suspendedLanes&n,Oe===t&&(Ue&n)===n&&(Re===4||Re===3&&(Ue&130023424)===Ue&&500>we()-Md?fr(t,0):Ld|=n),ot(t,e)}function x_(t,e){e===0&&(t.mode&1?(e=Po,Po<<=1,!(Po&130023424)&&(Po=4194304)):e=1);var n=Xe();t=hn(t,e),t!==null&&(to(t,e,n),ot(t,n))}function UE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),x_(t,n)}function zE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),x_(t,n)}var D_;D_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||it.current)nt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nt=!1,TE(t,e,n);nt=!!(t.flags&131072)}else nt=!1,fe&&e.flags&1048576&&Lg(e,vl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Jo(t,e),t=e.pendingProps;var i=pi(e,Ke.current);si(e,n),i=Nd(null,e,r,t,i,n);var s=Pd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,st(r)?(s=!0,gl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cd(e),i.updater=oa,e.stateNode=i,i._reactInternals=e,dc(e,r,t,n),e=pc(null,e,r,!0,s,n)):(e.tag=0,fe&&s&&gd(e),Ye(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Jo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=WE(r),t=Pt(r,t),i){case 0:e=fc(null,e,r,t,n);break e;case 1:e=Hf(null,e,r,t,n);break e;case 11:e=jf(null,e,r,t,n);break e;case 14:e=$f(null,e,r,Pt(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),fc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),Hf(t,e,r,i,n);case 3:e:{if(p_(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Ug(t,e),El(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=vi(Error(T(423)),e),e=Vf(t,e,r,n,i);break e}else if(r!==i){i=vi(Error(T(424)),e),e=Vf(t,e,r,n,i);break e}else for(ht=Ln(e.stateNode.containerInfo.firstChild),ft=e,fe=!0,Dt=null,n=jg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mi(),r===i){e=fn(t,e,n);break e}Ye(t,e,r,n)}e=e.child}return e;case 5:return $g(e),t===null&&ac(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,rc(r,i)?o=null:s!==null&&rc(r,s)&&(e.flags|=32),f_(t,e),Ye(t,e,o,n),e.child;case 6:return t===null&&ac(e),null;case 13:return m_(t,e,n);case 4:return Id(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=gi(e,null,r,n):Ye(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),jf(t,e,r,i,n);case 7:return Ye(t,e,e.pendingProps,n),e.child;case 8:return Ye(t,e,e.pendingProps.children,n),e.child;case 12:return Ye(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ae(yl,r._currentValue),r._currentValue=o,s!==null)if(Ut(s.value,o)){if(s.children===i.children&&!it.current){e=fn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=an(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),uc(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),uc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ye(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,si(e,n),i=Ct(i),r=r(i),e.flags|=1,Ye(t,e,r,n),e.child;case 14:return r=e.type,i=Pt(r,e.pendingProps),i=Pt(r.type,i),$f(t,e,r,i,n);case 15:return d_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),Jo(t,e),e.tag=1,st(r)?(t=!0,gl(e)):t=!1,si(e,n),Bg(e,r,i),dc(e,r,i,n),pc(null,e,r,!0,t,n);case 19:return g_(t,e,n);case 22:return h_(t,e,n)}throw Error(T(156,e.tag))};function A_(t,e){return ig(t,e)}function BE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(t,e,n,r){return new BE(t,e,n,r)}function zd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function WE(t){if(typeof t=="function")return zd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===id)return 11;if(t===sd)return 14}return 2}function Un(t,e){var n=t.alternate;return n===null?(n=Et(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")zd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Br:return pr(n.children,i,s,e);case rd:o=8,i|=8;break;case Mu:return t=Et(12,n,e,i|2),t.elementType=Mu,t.lanes=s,t;case bu:return t=Et(13,n,e,i),t.elementType=bu,t.lanes=s,t;case Fu:return t=Et(19,n,e,i),t.elementType=Fu,t.lanes=s,t;case Wm:return ca(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zm:o=10;break e;case Bm:o=9;break e;case id:o=11;break e;case sd:o=14;break e;case En:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=Et(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function pr(t,e,n,r){return t=Et(7,t,r,e),t.lanes=n,t}function ca(t,e,n,r){return t=Et(22,t,r,e),t.elementType=Wm,t.lanes=n,t.stateNode={isHidden:!1},t}function du(t,e,n){return t=Et(6,t,null,e),t.lanes=n,t}function hu(t,e,n){return e=Et(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function jE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ga(0),this.expirationTimes=Ga(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ga(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bd(t,e,n,r,i,s,o,l,a){return t=new jE(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Et(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cd(s),t}function $E(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function O_(t){if(!t)return Kn;t=t._reactInternals;e:{if(Ar(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(st(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(st(n))return Ag(t,n,e)}return e}function L_(t,e,n,r,i,s,o,l,a){return t=Bd(n,r,!0,t,i,s,o,l,a),t.context=O_(null),n=t.current,r=Xe(),i=Fn(n),s=an(r,i),s.callback=e??null,Mn(n,s,i),t.current.lanes=i,to(t,i,r),ot(t,r),t}function da(t,e,n,r){var i=e.current,s=Xe(),o=Fn(i);return n=O_(n),e.context===null?e.context=n:e.pendingContext=n,e=an(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Mn(i,e,o),t!==null&&(bt(t,i,o,s),Yo(t,i,o)),o}function Pl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function tp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wd(t,e){tp(t,e),(t=t.alternate)&&tp(t,e)}function HE(){return null}var M_=typeof reportError=="function"?reportError:function(t){console.error(t)};function jd(t){this._internalRoot=t}ha.prototype.render=jd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));da(t,e,null,null)};ha.prototype.unmount=jd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Er(function(){da(null,t,null,null)}),e[dn]=null}};function ha(t){this._internalRoot=t}ha.prototype.unstable_scheduleHydration=function(t){if(t){var e=dg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Cn.length&&e!==0&&e<Cn[n].priority;n++);Cn.splice(n,0,t),n===0&&fg(t)}};function $d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function np(){}function VE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Pl(o);s.call(u)}}var o=L_(e,r,t,0,null,!1,!1,"",np);return t._reactRootContainer=o,t[dn]=o.current,Ds(t.nodeType===8?t.parentNode:t),Er(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Pl(a);l.call(u)}}var a=Bd(t,0,!1,null,null,!1,!1,"",np);return t._reactRootContainer=a,t[dn]=a.current,Ds(t.nodeType===8?t.parentNode:t),Er(function(){da(e,a,n,r)}),a}function pa(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Pl(o);l.call(a)}}da(e,o,t,i)}else o=VE(n,e,t,i,r);return Pl(o)}ug=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=rs(e.pendingLanes);n!==0&&(ad(e,n|1),ot(e,we()),!(Z&6)&&(yi=we()+500,Zn()))}break;case 13:Er(function(){var r=hn(t,1);if(r!==null){var i=Xe();bt(r,t,1,i)}}),Wd(t,1)}};ud=function(t){if(t.tag===13){var e=hn(t,134217728);if(e!==null){var n=Xe();bt(e,t,134217728,n)}Wd(t,134217728)}};cg=function(t){if(t.tag===13){var e=Fn(t),n=hn(t,e);if(n!==null){var r=Xe();bt(n,t,e,r)}Wd(t,e)}};dg=function(){return ne};hg=function(t,e){var n=ne;try{return ne=t,e()}finally{ne=n}};Ku=function(t,e,n){switch(e){case"input":if(Bu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ia(r);if(!i)throw Error(T(90));$m(r),Bu(r,i)}}}break;case"textarea":Vm(t,n);break;case"select":e=n.value,e!=null&&ti(t,!!n.multiple,e,!1)}};Jm=bd;Zm=Er;var GE={usingClientEntryPoint:!1,Events:[ro,Hr,ia,qm,Xm,bd]},Qi={findFiberByHostInstance:lr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},KE={bundleType:Qi.bundleType,version:Qi.version,rendererPackageName:Qi.rendererPackageName,rendererConfig:Qi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ng(t),t===null?null:t.stateNode},findFiberByHostInstance:Qi.findFiberByHostInstance||HE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bo.isDisabled&&Bo.supportsFiber)try{ea=Bo.inject(KE),Ht=Bo}catch{}}mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GE;mt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$d(e))throw Error(T(200));return $E(t,e,null,n)};mt.createRoot=function(t,e){if(!$d(t))throw Error(T(299));var n=!1,r="",i=M_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Bd(t,1,!1,null,null,n,!1,r,i),t[dn]=e.current,Ds(t.nodeType===8?t.parentNode:t),new jd(e)};mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=ng(e),t=t===null?null:t.stateNode,t};mt.flushSync=function(t){return Er(t)};mt.hydrate=function(t,e,n){if(!fa(e))throw Error(T(200));return pa(null,t,e,!0,n)};mt.hydrateRoot=function(t,e,n){if(!$d(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=M_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=L_(e,null,t,1,n??null,i,!1,s,o),t[dn]=e.current,Ds(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ha(e)};mt.render=function(t,e,n){if(!fa(e))throw Error(T(200));return pa(null,t,e,!1,n)};mt.unmountComponentAtNode=function(t){if(!fa(t))throw Error(T(40));return t._reactRootContainer?(Er(function(){pa(null,null,t,!1,function(){t._reactRootContainer=null,t[dn]=null})}),!0):!1};mt.unstable_batchedUpdates=bd;mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!fa(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return pa(t,e,n,!1,r)};mt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=mt})(H0);var rp=Au;Du.createRoot=rp.createRoot,Du.hydrateRoot=rp.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(t,e){if(!t)throw Pi(e)},Pi=function(t){return new Error("Firebase Database ("+b_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},QE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Hd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,_=u&63;a||(_=64,o||(h=64)),r.push(n[d],n[c],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(F_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new YE;const h=s<<2|l>>4;if(r.push(h),u!==64){const _=l<<4&240|u>>2;if(r.push(_),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class YE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const U_=function(t){const e=F_(t);return Hd.encodeByteArray(e,!0)},xl=function(t){return U_(t).replace(/\./g,"")},Dl=function(t){try{return Hd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(t){return z_(void 0,t)}function z_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!XE(n)||(t[n]=z_(t[n],e[n]));return t}function XE(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=()=>JE().__FIREBASE_DEFAULTS__,eS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dl(t[1]);return e&&JSON.parse(e)},Vd=()=>{try{return ZE()||eS()||tS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},B_=t=>{var e,n;return(n=(e=Vd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nS=t=>{const e=B_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},rS=()=>{var t;return(t=Vd())===null||t===void 0?void 0:t.config},W_=t=>{var e;return(e=Vd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[xl(JSON.stringify(n)),xl(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qe())}function sS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function j_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oS(){const t=Qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $_(){return b_.NODE_ADMIN===!0}function lS(){try{return typeof indexedDB=="object"}catch{return!1}}function aS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS="FirebaseError";class er extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=uS,Object.setPrototypeOf(this,er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,so.prototype.create)}}class so{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?cS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new er(i,l,r)}}function cS(t,e){return t.replace(dS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(t){return JSON.parse(t)}function ke(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Bs(Dl(s[0])||""),n=Bs(Dl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},hS=function(t){const e=H_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},fS=function(t){const e=H_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function wi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Tc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Al(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ol(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ip(s)&&ip(o)){if(!Ol(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ip(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ss(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function os(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function mS(t,e){const n=new gS(t,e);return n.subscribe.bind(n)}class gS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_S(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=fu),i.error===void 0&&(i.error=fu),i.complete===void 0&&(i.complete=fu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _S(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fu(){}function Kd(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,N(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ga=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return t&&t._delegate?t._delegate:t}class Sr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ma;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ES(e))try{this.getOrInitializeService({instanceIdentifier:sr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=sr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=sr){return this.instances.has(e)}getOptions(e=sr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=sr){return this.component?this.component.multipleInstances?e:sr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wS(t){return t===sr?void 0:t}function ES(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const CS={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},IS=ie.INFO,kS={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},TS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=kS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qd{constructor(e){this.name=e,this._logLevel=IS,this._logHandler=TS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const RS=(t,e)=>e.some(n=>t instanceof n);let sp,op;function NS(){return sp||(sp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PS(){return op||(op=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const V_=new WeakMap,Rc=new WeakMap,G_=new WeakMap,pu=new WeakMap,Yd=new WeakMap;function xS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(zn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&V_.set(n,t)}).catch(()=>{}),Yd.set(e,t),e}function DS(t){if(Rc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Rc.set(t,e)}let Nc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||G_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function AS(t){Nc=t(Nc)}function OS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(mu(this),e,...n);return G_.set(r,e.sort?e.sort():[e]),zn(r)}:PS().includes(t)?function(...e){return t.apply(mu(this),e),zn(V_.get(this))}:function(...e){return zn(t.apply(mu(this),e))}}function LS(t){return typeof t=="function"?OS(t):(t instanceof IDBTransaction&&DS(t),RS(t,NS())?new Proxy(t,Nc):t)}function zn(t){if(t instanceof IDBRequest)return xS(t);if(pu.has(t))return pu.get(t);const e=LS(t);return e!==t&&(pu.set(t,e),Yd.set(e,t)),e}const mu=t=>Yd.get(t);function MS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=zn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(zn(o.result),a.oldVersion,a.newVersion,zn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const bS=["get","getKey","getAll","getAllKeys","count"],FS=["put","add","delete","clear"],gu=new Map;function lp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(gu.get(e))return gu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=FS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bS.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return gu.set(e,s),s}AS(t=>({...t,get:(e,n,r)=>lp(e,n)||t.get(e,n,r),has:(e,n)=>!!lp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pc="@firebase/app",ap="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new Qd("@firebase/app"),BS="@firebase/app-compat",WS="@firebase/analytics-compat",jS="@firebase/analytics",$S="@firebase/app-check-compat",HS="@firebase/app-check",VS="@firebase/auth",GS="@firebase/auth-compat",KS="@firebase/database",QS="@firebase/database-compat",YS="@firebase/functions",qS="@firebase/functions-compat",XS="@firebase/installations",JS="@firebase/installations-compat",ZS="@firebase/messaging",eC="@firebase/messaging-compat",tC="@firebase/performance",nC="@firebase/performance-compat",rC="@firebase/remote-config",iC="@firebase/remote-config-compat",sC="@firebase/storage",oC="@firebase/storage-compat",lC="@firebase/firestore",aC="@firebase/firestore-compat",uC="firebase",cC="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="[DEFAULT]",dC={[Pc]:"fire-core",[BS]:"fire-core-compat",[jS]:"fire-analytics",[WS]:"fire-analytics-compat",[HS]:"fire-app-check",[$S]:"fire-app-check-compat",[VS]:"fire-auth",[GS]:"fire-auth-compat",[KS]:"fire-rtdb",[QS]:"fire-rtdb-compat",[YS]:"fire-fn",[qS]:"fire-fn-compat",[XS]:"fire-iid",[JS]:"fire-iid-compat",[ZS]:"fire-fcm",[eC]:"fire-fcm-compat",[tC]:"fire-perf",[nC]:"fire-perf-compat",[rC]:"fire-rc",[iC]:"fire-rc-compat",[sC]:"fire-gcs",[oC]:"fire-gcs-compat",[lC]:"fire-fst",[aC]:"fire-fst-compat","fire-js":"fire-js",[uC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=new Map,Dc=new Map;function hC(t,e){try{t.container.addComponent(e)}catch(n){Cr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ei(t){const e=t.name;if(Dc.has(e))return Cr.debug(`There were multiple attempts to register component ${e}.`),!1;Dc.set(e,t);for(const n of Ll.values())hC(n,t);return!0}function qd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Bn=new so("app","Firebase",fC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=cC;function K_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Bn.create("bad-app-name",{appName:String(i)});if(n||(n=rS()),!n)throw Bn.create("no-options");const s=Ll.get(i);if(s){if(Ol(n,s.options)&&Ol(r,s.config))return s;throw Bn.create("duplicate-app",{appName:i})}const o=new SS(i);for(const a of Dc.values())o.addComponent(a);const l=new pC(n,r,o);return Ll.set(i,l),l}function Q_(t=xc){const e=Ll.get(t);if(!e&&t===xc)return K_();if(!e)throw Bn.create("no-app",{appName:t});return e}function Wn(t,e,n){var r;let i=(r=dC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cr.warn(l.join(" "));return}Ei(new Sr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="firebase-heartbeat-database",gC=1,Ws="firebase-heartbeat-store";let _u=null;function Y_(){return _u||(_u=MS(mC,gC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ws)}}}).catch(t=>{throw Bn.create("idb-open",{originalErrorMessage:t.message})})),_u}async function _C(t){try{return(await Y_()).transaction(Ws).objectStore(Ws).get(q_(t))}catch(e){if(e instanceof er)Cr.warn(e.message);else{const n=Bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cr.warn(n.message)}}}async function up(t,e){try{const r=(await Y_()).transaction(Ws,"readwrite");return await r.objectStore(Ws).put(e,q_(t)),r.done}catch(n){if(n instanceof er)Cr.warn(n.message);else{const r=Bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cr.warn(r.message)}}}function q_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=1024,yC=30*24*60*60*1e3;class wC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=cp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=yC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=cp(),{heartbeatsToSend:n,unsentEntries:r}=EC(this._heartbeatsCache.heartbeats),i=xl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function cp(){return new Date().toISOString().substring(0,10)}function EC(t,e=vC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),dp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),dp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class SC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lS()?aS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _C(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return up(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return up(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function dp(t){return xl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(t){Ei(new Sr("platform-logger",e=>new US(e),"PRIVATE")),Ei(new Sr("heartbeat",e=>new wC(e),"PRIVATE")),Wn(Pc,ap,t),Wn(Pc,ap,"esm2017"),Wn("fire-js","")}CC("");var IC="firebase",kC="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wn(IC,kC,"app");function Xd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function X_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TC=X_,J_=new so("auth","Firebase",X_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=new Qd("@firebase/auth");function nl(t,...e){hp.logLevel<=ie.ERROR&&hp.error(`Auth (${oo}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t,...e){throw Jd(t,...e)}function Gt(t,...e){return Jd(t,...e)}function RC(t,e,n){const r=Object.assign(Object.assign({},TC()),{[e]:n});return new so("auth","Firebase",r).create(e,{appName:t.name})}function Jd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return J_.create(t,...e)}function z(t,e,...n){if(!t)throw Jd(e,...n)}function sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nl(e),new Error(e)}function pn(t,e){t||sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=new Map;function on(t){pn(t instanceof Function,"Expected a class definition");let e=fp.get(t);return e?(pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fp.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(t,e){const n=qd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ol(s,e??{}))return i;zt(i,"already-initialized")}return n.initialize({options:e})}function PC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(on);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xC(){return pp()==="http:"||pp()==="https:"}function pp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xC()||sS()||"connection"in navigator)?navigator.onLine:!0}function AC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n){this.shortDelay=e,this.longDelay=n,pn(n>e,"Short delay should be less than long delay!"),this.isMobile=Gd()||j_()}get(){return DC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(t,e){pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC=new lo(3e4,6e4);function ao(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function uo(t,e,n,r,i={}){return ev(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=xi(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Z_.fetch()(tv(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function ev(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},OC),e);try{const i=new MC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Wo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wo(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Wo(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Wo(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw RC(t,d,u);zt(t,d)}}catch(i){if(i instanceof er)throw i;zt(t,"network-request-failed",{message:String(i)})}}async function co(t,e,n,r,i={}){const s=await uo(t,e,n,r,i);return"mfaPendingCredential"in s&&zt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function tv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Zd(t.config,i):`${t.config.apiScheme}://${i}`}class MC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),LC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Gt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bC(t,e){return uo(t,"POST","/v1/accounts:delete",e)}async function FC(t,e){return uo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UC(t,e=!1){const n=et(t),r=await n.getIdToken(e),i=eh(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:gs(vu(i.auth_time)),issuedAtTime:gs(vu(i.iat)),expirationTime:gs(vu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function vu(t){return Number(t)*1e3}function eh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return nl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Dl(n);return i?JSON.parse(i):(nl("Failed to decode base64 JWT payload"),null)}catch(i){return nl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zC(t){const e=eh(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof er&&BC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function BC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gs(this.lastLoginAt),this.creationTime=gs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ml(t){var e;const n=t.auth,r=await t.getIdToken(),i=await js(t,FC(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?HC(s.providerUserInfo):[],l=$C(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new nv(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function jC(t){const e=et(t);await Ml(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $C(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function HC(t){return t.map(e=>{var{providerId:n}=e,r=Xd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VC(t,e){const n=await ev(t,{},async()=>{const r=xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=tv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Z_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await VC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new $s;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $s,this.toJSON())}_performRefresh(){return sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Xd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new WC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new nv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await js(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return UC(this,e)}reload(){return jC(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ml(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await js(this,bC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,g=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:E,isAnonymous:C,providerData:P,stsTokenManager:x}=n;z(m&&x,e,"internal-error");const R=$s.fromJSON(this.name,x);z(typeof m=="string",e,"internal-error"),wn(c,e.name),wn(h,e.name),z(typeof E=="boolean",e,"internal-error"),z(typeof C=="boolean",e,"internal-error"),wn(_,e.name),wn(v,e.name),wn(y,e.name),wn(g,e.name),wn(p,e.name),wn(f,e.name);const J=new mr({uid:m,auth:e,email:h,emailVerified:E,displayName:c,isAnonymous:C,photoURL:v,phoneNumber:_,tenantId:y,stsTokenManager:R,createdAt:p,lastLoginAt:f});return P&&Array.isArray(P)&&(J.providerData=P.map(j=>Object.assign({},j))),g&&(J._redirectEventId=g),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new $s;i.updateFromServerResponse(n);const s=new mr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ml(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rv.type="NONE";const mp=rv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t,e,n){return`firebase:${t}:${e}:${n}`}class li{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=rl(this.userKey,i.apiKey,s),this.fullPersistenceKey=rl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new li(on(mp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||on(mp);const o=rl(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=mr._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new li(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new li(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ov(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(av(e))return"Blackberry";if(uv(e))return"Webos";if(th(e))return"Safari";if((e.includes("chrome/")||sv(e))&&!e.includes("edge/"))return"Chrome";if(lv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function iv(t=Qe()){return/firefox\//i.test(t)}function th(t=Qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sv(t=Qe()){return/crios\//i.test(t)}function ov(t=Qe()){return/iemobile/i.test(t)}function lv(t=Qe()){return/android/i.test(t)}function av(t=Qe()){return/blackberry/i.test(t)}function uv(t=Qe()){return/webos/i.test(t)}function _a(t=Qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function GC(t=Qe()){var e;return _a(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KC(){return oS()&&document.documentMode===10}function cv(t=Qe()){return _a(t)||lv(t)||uv(t)||av(t)||/windows phone/i.test(t)||ov(t)}function QC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(t,e=[]){let n;switch(t){case"Browser":n=gp(Qe());break;case"Worker":n=`${gp(Qe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${oo}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _p(this),this.idTokenSubscription=new _p(this),this.beforeStateQueue=new YC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=J_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=on(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await li.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ml(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?et(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(on(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new so("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&on(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await li.create(this,[on(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ho(t){return et(t)}class _p{constructor(e){this.auth=e,this.observer=null,this.addObserver=mS(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function XC(t,e,n){const r=ho(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=hv(e),{host:o,port:l}=JC(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ZC()}function hv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JC(t){const e=hv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:vp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:vp(o)}}}function vp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ZC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sn("not implemented")}_getIdTokenResponse(e){return sn("not implemented")}_linkToIdToken(e,n){return sn("not implemented")}_getReauthenticationResolver(e){return sn("not implemented")}}async function eI(t,e){return uo(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tI(t,e){return co(t,"POST","/v1/accounts:signInWithPassword",ao(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(t,e){return co(t,"POST","/v1/accounts:signInWithEmailLink",ao(t,e))}async function rI(t,e){return co(t,"POST","/v1/accounts:signInWithEmailLink",ao(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends nh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Hs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Hs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return tI(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return nI(e,{email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return eI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rI(e,{idToken:n,email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai(t,e){return co(t,"POST","/v1/accounts:signInWithIdp",ao(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI="http://localhost";class Ir extends nh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Xd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ir(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ai(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ai(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ai(e,n)}buildRequest(){const e={requestUri:iI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oI(t){const e=ss(os(t)).link,n=e?ss(os(e)).deep_link_id:null,r=ss(os(t)).deep_link_id;return(r?ss(os(r)).link:null)||r||n||e||t}class rh{constructor(e){var n,r,i,s,o,l;const a=ss(os(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,c=sI((i=a.mode)!==null&&i!==void 0?i:null);z(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=oI(e);try{return new rh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(){this.providerId=Di.PROVIDER_ID}static credential(e,n){return Hs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=rh.parseLink(n);return z(r,"argument-error"),Hs._fromEmailAndCode(e,r.code,r.tenantId)}}Di.PROVIDER_ID="password";Di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo extends fv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends fo{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends fo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ir._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tn.credential(n,r)}catch{return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com";Tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends fo{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.GITHUB_SIGN_IN_METHOD="github.com";Rn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends fo{constructor(){super("twitter.com")}static credential(e,n){return Ir._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com";Nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(t,e){return co(t,"POST","/v1/accounts:signUp",ao(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await mr._fromIdTokenResponse(e,r,i),o=yp(r);return new kr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=yp(r);return new kr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function yp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl extends er{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,bl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new bl(e,n,r,i)}}function pv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?bl._fromErrorAndOperation(t,s,e,r):s})}async function aI(t,e,n=!1){const r=await js(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return kr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uI(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await js(t,pv(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=eh(s.idToken);z(o,r,"internal-error");const{sub:l}=o;return z(t.uid===l,r,"user-mismatch"),kr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&zt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mv(t,e,n=!1){const r="signIn",i=await pv(t,r,e),s=await kr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function cI(t,e){return mv(ho(t),e)}async function dI(t,e,n){const r=ho(t),i=await lI(r,{returnSecureToken:!0,email:e,password:n}),s=await kr._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function hI(t,e,n){return cI(et(t),Di.credential(e,n))}function fI(t,e,n,r){return et(t).onIdTokenChanged(e,n,r)}function pI(t,e,n){return et(t).beforeAuthStateChanged(e,n)}function mI(t,e,n,r){return et(t).onAuthStateChanged(e,n,r)}function gI(t){return et(t).signOut()}const Fl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fl,"1"),this.storage.removeItem(Fl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(){const t=Qe();return th(t)||_a(t)}const vI=1e3,yI=10;class _v extends gv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_I()&&QC(),this.fallbackToPolling=cv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);KC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_v.type="LOCAL";const wI=_v;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv extends gv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vv.type="SESSION";const yv=vv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new va(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await EI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}va.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=ih("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return window}function CI(t){Kt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(){return typeof Kt().WorkerGlobalScope<"u"&&typeof Kt().importScripts=="function"}async function II(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function TI(){return wv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev="firebaseLocalStorageDb",RI=1,Ul="firebaseLocalStorage",Sv="fbase_key";class po{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ya(t,e){return t.transaction([Ul],e?"readwrite":"readonly").objectStore(Ul)}function NI(){const t=indexedDB.deleteDatabase(Ev);return new po(t).toPromise()}function Oc(){const t=indexedDB.open(Ev,RI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ul,{keyPath:Sv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ul)?e(r):(r.close(),await NI(),e(await Oc()))})})}async function wp(t,e,n){const r=ya(t,!0).put({[Sv]:e,value:n});return new po(r).toPromise()}async function PI(t,e){const n=ya(t,!1).get(e),r=await new po(n).toPromise();return r===void 0?null:r.value}function Ep(t,e){const n=ya(t,!0).delete(e);return new po(n).toPromise()}const xI=800,DI=3;class Cv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Oc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>DI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=va._getInstance(TI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await II(),!this.activeServiceWorker)return;this.sender=new SI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Oc();return await wp(e,Fl,"1"),await Ep(e,Fl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>PI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ep(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ya(i,!1).getAll();return new po(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cv.type="LOCAL";const AI=Cv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function LI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Gt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",OI().appendChild(r)})}function MI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new lo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t,e){return e?on(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh extends nh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ai(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ai(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function FI(t){return mv(t.auth,new sh(t),t.bypassAuthState)}function UI(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),uI(n,new sh(t),t.bypassAuthState)}async function zI(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),aI(n,new sh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FI;case"linkViaPopup":case"linkViaRedirect":return zI;case"reauthViaPopup":case"reauthViaRedirect":return UI;default:zt(this.auth,"internal-error")}}resolve(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=new lo(2e3,1e4);class Xr extends Iv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Xr.currentPopupAction&&Xr.currentPopupAction.cancel(),Xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){pn(this.filter.length===1,"Popup operations only handle one event");const e=ih();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,BI.get())};e()}}Xr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI="pendingRedirect",il=new Map;class jI extends Iv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=il.get(this.auth._key());if(!e){try{const r=await $I(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}il.set(this.auth._key(),e)}return this.bypassAuthState||il.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $I(t,e){const n=GI(e),r=VI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function HI(t,e){il.set(t._key(),e)}function VI(t){return on(t._redirectPersistence)}function GI(t){return rl(WI,t.config.apiKey,t.name)}async function KI(t,e,n=!1){const r=ho(t),i=bI(r,e),o=await new jI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=10*60*1e3;class YI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sp(e))}saveEventToCache(e){this.cachedEventUids.add(Sp(e)),this.lastProcessedEventTime=Date.now()}}function Sp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI(t,e={}){return uo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZI=/^https?/;async function ek(t){if(t.config.emulator)return;const{authorizedDomains:e}=await XI(t);for(const n of e)try{if(tk(n))return}catch{}zt(t,"unauthorized-domain")}function tk(t){const e=Ac(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ZI.test(n))return!1;if(JI.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=new lo(3e4,6e4);function Cp(){const t=Kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rk(t){return new Promise((e,n)=>{var r,i,s;function o(){Cp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cp(),n(Gt(t,"network-request-failed"))},timeout:nk.get()})}if(!((i=(r=Kt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Kt().gapi)===null||s===void 0)&&s.load)o();else{const l=MI("iframefcb");return Kt()[l]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},LI(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw sl=null,e})}let sl=null;function ik(t){return sl=sl||rk(t),sl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=new lo(5e3,15e3),ok="__/auth/iframe",lk="emulator/auth/iframe",ak={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ck(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zd(e,lk):`https://${t.config.authDomain}/${ok}`,r={apiKey:e.apiKey,appName:t.name,v:oo},i=uk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${xi(r).slice(1)}`}async function dk(t){const e=await ik(t),n=Kt().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:ck(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ak,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),l=Kt().setTimeout(()=>{s(o)},sk.get());function a(){Kt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fk=500,pk=600,mk="_blank",gk="http://localhost";class Ip{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _k(t,e,n,r=fk,i=pk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},hk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Qe().toLowerCase();n&&(l=sv(u)?mk:n),iv(u)&&(e=e||gk,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[_,v])=>`${h}${_}=${v},`,"");if(GC(u)&&l!=="_self")return vk(e||"",l),new Ip(null);const c=window.open(e||"",l,d);z(c,t,"popup-blocked");try{c.focus()}catch{}return new Ip(c)}function vk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk="__/auth/handler",wk="emulator/auth/handler";function kp(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:oo,eventId:i};if(e instanceof fv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Tc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,u]of Object.entries(s||{}))o[a]=u}if(e instanceof fo){const a=e.getScopes().filter(u=>u!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${Ek(t)}?${xi(l).slice(1)}`}function Ek({config:t}){return t.emulator?Zd(t,wk):`https://${t.authDomain}/${yk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu="webStorageSupport";class Sk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yv,this._completeRedirectFn=KI,this._overrideRedirectResult=HI}async _openPopup(e,n,r,i){var s;pn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=kp(e,n,r,Ac(),i);return _k(e,o,ih())}async _openRedirect(e,n,r,i){return await this._originValidation(e),CI(kp(e,n,r,Ac(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(pn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dk(e),r=new YI(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(yu,{type:yu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[yu];o!==void 0&&n(!!o),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ek(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cv()||th()||_a()}}const Ck=Sk;var Tp="@firebase/auth",Rp="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Tk(t){Ei(new Sr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((l,a)=>{z(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),z(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dv(t)},d=new qC(l,a,u);return PC(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ei(new Sr("auth-internal",e=>{const n=ho(e.getProvider("auth").getImmediate());return(r=>new Ik(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wn(Tp,Rp,kk(t)),Wn(Tp,Rp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=5*60,Nk=W_("authIdTokenMaxAge")||Rk;let Np=null;const Pk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Nk)return;const i=n==null?void 0:n.token;Np!==i&&(Np=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xk(t=Q_()){const e=qd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=NC(t,{popupRedirectResolver:Ck,persistence:[AI,wI,yv]}),r=W_("authTokenSyncURL");if(r){const s=Pk(r);pI(n,s,()=>s(n.currentUser)),fI(n,o=>s(o))}const i=B_("auth");return i&&XC(n,`http://${i}`),n}Tk("Browser");const Pp="@firebase/database",xp="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tv="";function Dk(t){Tv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Bs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return _n(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ak(e)}}catch{}return new Ok},cr=Rv("localStorage"),Lc=Rv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new Qd("@firebase/database"),Lk=function(){let t=1;return function(){return t++}}(),Nv=function(t){const e=vS(t),n=new pS;n.update(e);const r=n.digest();return Hd.encodeByteArray(r)},mo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=mo.apply(null,r):typeof r=="object"?e+=ke(r):e+=r,e+=" "}return e};let gr=null,Dp=!0;const Mk=function(t,e){N(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ui.logLevel=ie.VERBOSE,gr=ui.log.bind(ui),e&&Lc.set("logging_enabled",!0)):typeof t=="function"?gr=t:(gr=null,Lc.remove("logging_enabled"))},Ge=function(...t){if(Dp===!0&&(Dp=!1,gr===null&&Lc.get("logging_enabled")===!0&&Mk(!0)),gr){const e=mo.apply(null,t);gr(e)}},go=function(t){return function(...e){Ge(t,...e)}},Mc=function(...t){const e="FIREBASE INTERNAL ERROR: "+mo(...t);ui.error(e)},mn=function(...t){const e=`FIREBASE FATAL ERROR: ${mo(...t)}`;throw ui.error(e),new Error(e)},lt=function(...t){const e="FIREBASE WARNING: "+mo(...t);ui.warn(e)},bk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&lt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Pv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Fk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Si="[MIN_NAME]",Tr="[MAX_NAME]",Ai=function(t,e){if(t===e)return 0;if(t===Si||e===Tr)return-1;if(e===Si||t===Tr)return 1;{const n=Ap(t),r=Ap(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Uk=function(t,e){return t===e?0:t<e?-1:1},Yi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ke(e))},oh=function(t){if(typeof t!="object"||t===null)return ke(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ke(e[r]),n+=":",n+=oh(t[e[r]]);return n+="}",n},xv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function at(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Dv=function(t){N(!Pv(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},zk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Bk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Wk(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const jk=new RegExp("^-?(0*)\\d{1,10}$"),$k=-2147483648,Hk=2147483647,Ap=function(t){if(jk.test(t)){const e=Number(t);if(e>=$k&&e<=Hk)return e}return null},Oi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw lt("Exception was thrown by user callback.",n),e},Math.floor(0))}},Vk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_s=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){lt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ge("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',lt(e)}}class ci{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ci.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="5",Av="v",Ov="s",Lv="r",Mv="f",bv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Fv="ls",Uv="p",bc="ac",zv="websocket",Bv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=cr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&cr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Qk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function jv(t,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let r;if(e===zv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Bv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Qk(t)&&(n.ns=t.namespace);const i=[];return at(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(){this.counters_={}}incrementCounter(e,n=1){_n(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return qE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu={},Eu={};function ah(t){const e=t.toString();return wu[e]||(wu[e]=new Yk),wu[e]}function qk(t,e){const n=t.toString();return Eu[n]||(Eu[n]=e()),Eu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Oi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op="start",Jk="close",Zk="pLPCommand",eT="pRTLPCB",$v="id",Hv="pw",Vv="ser",tT="cb",nT="seg",rT="ts",iT="d",sT="dframe",Gv=1870,Kv=30,oT=Gv-Kv,lT=25e3,aT=3e4;class Jr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=go(e),this.stats_=ah(n),this.urlFn=a=>(this.appCheckToken&&(a[bc]=this.appCheckToken),jv(n,Bv,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Xk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(aT)),Fk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new uh((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Op)this.id=l,this.password=a;else if(o===Jk)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Op]="t",r[Vv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[tT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Av]=lh,this.transportSessionId&&(r[Ov]=this.transportSessionId),this.lastSessionId&&(r[Fv]=this.lastSessionId),this.applicationId&&(r[Uv]=this.applicationId),this.appCheckToken&&(r[bc]=this.appCheckToken),typeof location<"u"&&location.hostname&&bv.test(location.hostname)&&(r[Lv]=Mv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jr.forceAllow_=!0}static forceDisallow(){Jr.forceDisallow_=!0}static isAvailable(){return Jr.forceAllow_?!0:!Jr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!zk()&&!Bk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=U_(n),i=xv(r,oT);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[sT]="t",r[$v]=e,r[Hv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class uh{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Lk(),window[Zk+this.uniqueCallbackIdentifier]=e,window[eT+this.uniqueCallbackIdentifier]=n,this.myIFrame=uh.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ge("frame writing exception"),l.stack&&Ge(l.stack),Ge(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ge("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$v]=this.myID,e[Hv]=this.myPW,e[Vv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Kv+r.length<=Gv;){const o=this.pendingSegs.shift();r=r+"&"+nT+i+"="+o.seg+"&"+rT+i+"="+o.ts+"&"+iT+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(lT)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ge("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=16384,cT=45e3;let zl=null;typeof MozWebSocket<"u"?zl=MozWebSocket:typeof WebSocket<"u"&&(zl=WebSocket);class At{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=go(this.connId),this.stats_=ah(n),this.connURL=At.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Av]=lh,typeof location<"u"&&location.hostname&&bv.test(location.hostname)&&(o[Lv]=Mv),n&&(o[Ov]=n),r&&(o[Fv]=r),i&&(o[bc]=i),s&&(o[Uv]=s),jv(e,zv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,cr.set("previous_websocket_failure",!0);try{let r;$_(),this.mySock=new zl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){At.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&zl!==null&&!At.forceDisallow_}static previouslyFailed(){return cr.isInMemoryStorage||cr.get("previous_websocket_failure")===!0}markConnectionHealthy(){cr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Bs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=xv(n,uT);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(cT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}At.responsesRequiredToBeHealthy=2;At.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Jr,At]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=At&&At.isAvailable();let r=n&&!At.previouslyFailed();if(e.webSocketOnly&&(n||lt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[At];else{const i=this.transports_=[];for(const s of Vs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Vs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT=6e4,hT=5e3,fT=10*1024,pT=100*1024,Su="t",Lp="d",mT="s",Mp="r",gT="e",bp="o",Fp="a",Up="n",zp="p",_T="h";class vT{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=go("c:"+this.id+":"),this.transportManager_=new Vs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=_s(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>pT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>fT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Su in e){const n=e[Su];n===Fp?this.upgradeIfSecondaryHealthy_():n===Mp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===bp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Yi("t",e),r=Yi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:zp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Fp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Up,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Yi("t",e),r=Yi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Yi(Su,e);if(Lp in e){const r=e[Lp];if(n===_T){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Up){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===mT?this.onConnectionShutdown_(r):n===Mp?this.onReset_(r):n===gT?Mc("Server Error: "+r):n===bp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Mc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),lh!==r&&lt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),_s(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(dT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_s(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(hT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:zp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(cr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends Yv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Gd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Bl}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=32,Wp=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ee(){return new se("")}function Y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Qn(t){return t.pieces_.length-t.pieceNum_}function le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function qv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function yT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Xv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Jv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function Te(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof se)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new se(n,0)}function Q(t){return t.pieceNum_>=t.pieces_.length}function qe(t,e){const n=Y(t),r=Y(e);if(n===null)return e;if(n===r)return qe(le(t),le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Zv(t,e){if(Qn(t)!==Qn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ot(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Qn(t)>Qn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class wT{constructor(e,n){this.errorPrefix_=n,this.parts_=Xv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ga(this.parts_[r]);ey(this)}}function ET(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ga(e),ey(t)}function ST(t){const e=t.parts_.pop();t.byteLength_-=ga(e),t.parts_.length>0&&(t.byteLength_-=1)}function ey(t){if(t.byteLength_>Wp)throw new Error(t.errorPrefix_+"has a key path longer than "+Wp+" bytes ("+t.byteLength_+").");if(t.parts_.length>Bp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bp+") or object contains a cycle "+or(t))}function or(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch extends Yv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new ch}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=1e3,CT=60*5*1e3,jp=30*1e3,IT=1.3,kT=3e4,TT="server_kill",$p=3;class un extends Qv{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=un.nextPersistentConnectionId_++,this.log_=go("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=qi,this.maxReconnectDelay_=CT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!$_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ch.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Bl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ke(s)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ma,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;un.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&_n(e,"w")){const r=wi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();lt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||fS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=jp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=hS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ke(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Mc("Unrecognized action received from server: "+ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=qi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=qi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>kT&&(this.reconnectDelay_=qi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*IT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+un.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){N(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ge("getToken() completed but was canceled"):(Ge("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new vT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{lt(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(TT)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&lt(c),a())}}}interrupt(e){Ge("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ge("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Tc(this.interruptReasons_)&&(this.reconnectDelay_=qi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>oh(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new se(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ge("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=$p&&(this.reconnectDelay_=jp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ge("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=$p&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Tv.replace(/\./g,"-")]=1,Gd()?e["framework.cordova"]=1:j_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Bl.getInstance().currentlyOnline();return Tc(this.interruptReasons_)&&e}}un.nextPersistentConnectionId_=0;un.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new K(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new K(Si,e),i=new K(Si,n);return this.compare(r,i)!==0}minPost(){return K.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jo;class ty extends wa{static get __EMPTY_NODE(){return jo}static set __EMPTY_NODE(e){jo=e}compare(e,n){return Ai(e.name,n.name)}isDefinedOn(e){throw Pi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(Tr,jo)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,jo)}toString(){return".key"}}const di=new ty;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class De{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??De.RED,this.left=i??rt.EMPTY_NODE,this.right=s??rt.EMPTY_NODE}copy(e,n,r,i,s){return new De(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return rt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return rt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}De.RED=!0;De.BLACK=!1;class RT{copy(e,n,r,i,s){return this}insert(e,n,r){return new De(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class rt{constructor(e,n=rt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new rt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,De.BLACK,null,null))}remove(e){return new rt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,De.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $o(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new $o(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new $o(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new $o(this.root_,null,this.comparator_,!0,e)}}rt.EMPTY_NODE=new RT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(t,e){return Ai(t.name,e.name)}function dh(t,e){return Ai(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fc;function PT(t){Fc=t}const ny=function(t){return typeof t=="number"?"number:"+Dv(t):"string:"+t},ry=function(t){if(t.isLeafNode()){const e=t.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_n(e,".sv"),"Priority must be a string or number.")}else N(t===Fc||t.isEmpty(),"priority of unexpected type.");N(t===Fc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hp;class Pe{constructor(e,n=Pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ry(this.priorityNode_)}static set __childrenNodeConstructor(e){Hp=e}static get __childrenNodeConstructor(){return Hp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Q(e)?this:Y(e)===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Y(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(N(r!==".priority"||Qn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ny(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Dv(this.value_):e+=this.value_,this.lazyHash_=Nv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Pe.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Pe.VALUE_TYPE_ORDER.indexOf(n),s=Pe.VALUE_TYPE_ORDER.indexOf(r);return N(i>=0,"Unknown leaf type: "+n),N(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iy,sy;function xT(t){iy=t}function DT(t){sy=t}class AT extends wa{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ai(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(Tr,new Pe("[PRIORITY-POST]",sy))}makePost(e,n){const r=iy(e);return new K(n,new Pe("[PRIORITY-POST]",r))}toString(){return".priority"}}const ve=new AT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=Math.log(2);class LT{constructor(e){const n=s=>parseInt(Math.log(s)/OT,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Wl=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new De(h,c.node,De.BLACK,null,null);{const _=parseInt(d/2,10)+a,v=i(a,_),y=i(_+1,u);return c=t[_],h=n?n(c):c,new De(h,c.node,De.BLACK,v,y)}},s=function(a){let u=null,d=null,c=t.length;const h=function(v,y){const g=c-v,p=c;c-=v;const f=i(g+1,p),m=t[g],E=n?n(m):m;_(new De(E,m.node,y,null,f))},_=function(v){u?(u.left=v,u=v):(d=v,u=v)};for(let v=0;v<a.count;++v){const y=a.nextBitIsOne(),g=Math.pow(2,a.count-(v+1));y?h(g,De.BLACK):(h(g,De.BLACK),h(g,De.RED))}return d},o=new LT(t.length),l=s(o);return new rt(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cu;const Ur={};class ln{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return N(Ur&&ve,"ChildrenNode.ts has not been loaded"),Cu=Cu||new ln({".priority":Ur},{".priority":ve}),Cu}get(e){const n=wi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof rt?n:null}hasIndex(e){return _n(this.indexSet_,e.toString())}addIndex(e,n){N(e!==di,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(K.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Wl(r,e.getCompare()):l=Ur;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new ln(d,u)}addToIndexes(e,n){const r=Al(this.indexes_,(i,s)=>{const o=wi(this.indexSet_,s);if(N(o,"Missing index implementation for "+s),i===Ur)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(K.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Wl(l,o.getCompare())}else return Ur;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new K(e.name,l))),a.insert(e,e.node)}});return new ln(r,this.indexSet_)}removeFromIndexes(e,n){const r=Al(this.indexes_,i=>{if(i===Ur)return i;{const s=n.get(e.name);return s?i.remove(new K(e.name,s)):i}});return new ln(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xi;class U{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&ry(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Xi||(Xi=new U(new rt(dh),null,ln.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xi}updatePriority(e){return this.children_.isEmpty()?this:new U(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Xi:n}}getChild(e){const n=Y(e);return n===null?this:this.getImmediateChild(n).getChild(le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new K(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Xi:this.priorityNode_;return new U(i,o,s)}}updateChild(e,n){const r=Y(e);if(r===null)return n;{N(Y(e)!==".priority"||Qn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(le(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ve,(o,l)=>{n[o]=l.val(e),r++,s&&U.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ny(this.getPriority().val())+":"),this.forEachChild(ve,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Nv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new K(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,K.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_o?-1:0}withIndex(e){if(e===di||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new U(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===di||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ve),i=n.getIterator(ve);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===di?null:this.indexMap_.get(e.toString())}}U.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class MT extends U{constructor(){super(new rt(dh),U.EMPTY_NODE,ln.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return U.EMPTY_NODE}isEmpty(){return!1}}const _o=new MT;Object.defineProperties(K,{MIN:{value:new K(Si,U.EMPTY_NODE)},MAX:{value:new K(Tr,_o)}});ty.__EMPTY_NODE=U.EMPTY_NODE;Pe.__childrenNodeConstructor=U;PT(_o);DT(_o);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT=!0;function Ae(t,e=null){if(t===null)return U.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Pe(n,Ae(e))}if(!(t instanceof Array)&&bT){const n=[];let r=!1;if(at(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ae(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new K(o,a)))}}),n.length===0)return U.EMPTY_NODE;const s=Wl(n,NT,o=>o.name,dh);if(r){const o=Wl(n,ve.getCompare());return new U(s,Ae(e),new ln({".priority":o},{".priority":ve}))}else return new U(s,Ae(e),ln.Default)}else{let n=U.EMPTY_NODE;return at(t,(r,i)=>{if(_n(t,r)&&r.substring(0,1)!=="."){const s=Ae(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ae(e))}}xT(Ae);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT extends wa{constructor(e){super(),this.indexPath_=e,N(!Q(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ai(e.name,n.name):s}makePost(e,n){const r=Ae(e),i=U.EMPTY_NODE.updateChild(this.indexPath_,r);return new K(n,i)}maxPost(){const e=U.EMPTY_NODE.updateChild(this.indexPath_,_o);return new K(Tr,e)}toString(){return Xv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT extends wa{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ai(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const r=Ae(e);return new K(n,r)}toString(){return".value"}}const zT=new UT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t){return{type:"value",snapshotNode:t}}function Ci(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Gs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ks(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function BT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Gs(n,l)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Ci(n,r)):o.trackChildChange(Ks(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ve,(i,s)=>{n.hasChild(i)||r.trackChildChange(Gs(i,s))}),n.isLeafNode()||n.forEachChild(ve,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ks(i,s,o))}else r.trackChildChange(Ci(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?U.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.indexedFilter_=new hh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Qs.getStartPost_(e),this.endPost_=Qs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new K(n,r))||(r=U.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=U.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(U.EMPTY_NODE);const s=this;return n.forEachChild(ve,(o,l)=>{s.matches(new K(o,l))||(i=i.updateImmediateChild(o,U.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Qs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new K(n,r))||(r=U.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=U.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=U.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(U.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,U.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,_)=>c(_,h)}else o=this.index_.getCompare();const l=e;N(l.numChildren()===this.limit_,"");const a=new K(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,a);if(d&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(Ks(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Gs(n,c));const y=l.updateImmediateChild(n,U.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Ci(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Gs(u.name,u.node)),s.trackChildChange(Ci(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,U.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Si}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Tr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ve}copy(){const e=new fh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jT(t){return t.loadsAllData()?new hh(t.getIndex()):t.hasLimit()?new WT(t):new Qs(t)}function Vp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ve?n="$priority":t.index_===zT?n="$value":t.index_===di?n="$key":(N(t.index_ instanceof FT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ke(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ke(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ke(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ke(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ke(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Gp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ve&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends Qv{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=go("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=jl.getListenId_(e,r),l={};this.listens_[o]=l;const a=Vp(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),wi(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=jl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Vp(e._queryParams),r=e._path.toString(),i=new ma;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xi(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Bs(l.responseText)}catch{lt("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&lt("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(){this.rootNode_=U.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(){return{value:null,children:new Map}}function ly(t,e,n){if(Q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Y(e);t.children.has(r)||t.children.set(r,$l());const i=t.children.get(r);e=le(e),ly(i,e,n)}}function Uc(t,e,n){t.value!==null?n(e,t.value):HT(t,(r,i)=>{const s=new se(e.toString()+"/"+r);Uc(i,s,n)})}function HT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&at(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=10*1e3,GT=30*1e3,KT=5*60*1e3;class QT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new VT(e);const r=Kp+(GT-Kp)*Math.random();_s(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;at(e,(i,s)=>{s>0&&_n(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),_s(this.reportStats_.bind(this),Math.floor(Math.random()*2*KT))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Lt||(Lt={}));function ay(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ph(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function mh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Lt.ACK_USER_WRITE,this.source=ay()}operationForChild(e){if(Q(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new Hl(ee(),n,this.revert)}}else return N(Y(this.path)===e,"operationForChild called for unrelated child."),new Hl(le(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n){this.source=e,this.path=n,this.type=Lt.LISTEN_COMPLETE}operationForChild(e){return Q(this.path)?new Ys(this.source,ee()):new Ys(this.source,le(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Lt.OVERWRITE}operationForChild(e){return Q(this.path)?new Rr(this.source,ee(),this.snap.getImmediateChild(e)):new Rr(this.source,le(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Lt.MERGE}operationForChild(e){if(Q(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new Rr(this.source,ee(),n.value):new qs(this.source,ee(),n)}else return N(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qs(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Q(e))return this.isFullyInitialized()&&!this.filtered_;const n=Y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function qT(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(BT(o.childName,o.snapshotNode))}),Ji(t,i,"child_removed",e,r,n),Ji(t,i,"child_added",e,r,n),Ji(t,i,"child_moved",s,r,n),Ji(t,i,"child_changed",e,r,n),Ji(t,i,"value",e,r,n),i}function Ji(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>JT(t,l,a)),o.forEach(l=>{const a=XT(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function XT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function JT(t,e,n){if(e.childName==null||n.childName==null)throw Pi("Should only compare child_ events.");const r=new K(e.childName,e.snapshotNode),i=new K(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(t,e){return{eventCache:t,serverCache:e}}function vs(t,e,n,r){return Ea(new Yn(e,n,r),t.serverCache)}function uy(t,e,n,r){return Ea(t.eventCache,new Yn(e,n,r))}function Vl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Nr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Iu;const ZT=()=>(Iu||(Iu=new rt(Uk)),Iu);class ce{constructor(e,n=ZT()){this.value=e,this.children=n}static fromObject(e){let n=new ce(null);return at(e,(r,i)=>{n=n.set(new se(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ee(),value:this.value};if(Q(e))return null;{const r=Y(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(le(e),n);return s!=null?{path:Te(new se(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Q(e))return this;{const n=Y(e),r=this.children.get(n);return r!==null?r.subtree(le(e)):new ce(null)}}set(e,n){if(Q(e))return new ce(n,this.children);{const r=Y(e),s=(this.children.get(r)||new ce(null)).set(le(e),n),o=this.children.insert(r,s);return new ce(this.value,o)}}remove(e){if(Q(e))return this.children.isEmpty()?new ce(null):new ce(null,this.children);{const n=Y(e),r=this.children.get(n);if(r){const i=r.remove(le(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ce(null):new ce(this.value,s)}else return this}}get(e){if(Q(e))return this.value;{const n=Y(e),r=this.children.get(n);return r?r.get(le(e)):null}}setTree(e,n){if(Q(e))return n;{const r=Y(e),s=(this.children.get(r)||new ce(null)).setTree(le(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ce(this.value,o)}}fold(e){return this.fold_(ee(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Te(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ee(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Q(e))return null;{const s=Y(e),o=this.children.get(s);return o?o.findOnPath_(le(e),Te(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ee(),n)}foreachOnPath_(e,n,r){if(Q(e))return this;{this.value&&r(n,this.value);const i=Y(e),s=this.children.get(i);return s?s.foreachOnPath_(le(e),Te(n,i),r):new ce(null)}}foreach(e){this.foreach_(ee(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Te(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.writeTree_=e}static empty(){return new Ft(new ce(null))}}function ys(t,e,n){if(Q(e))return new Ft(new ce(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=qe(i,e);return s=s.updateChild(o,n),new Ft(t.writeTree_.set(i,s))}else{const i=new ce(n),s=t.writeTree_.setTree(e,i);return new Ft(s)}}}function Qp(t,e,n){let r=t;return at(n,(i,s)=>{r=ys(r,Te(e,i),s)}),r}function Yp(t,e){if(Q(e))return Ft.empty();{const n=t.writeTree_.setTree(e,new ce(null));return new Ft(n)}}function zc(t,e){return Or(t,e)!=null}function Or(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(qe(n.path,e)):null}function qp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ve,(r,i)=>{e.push(new K(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new K(r,i.value))}),e}function jn(t,e){if(Q(e))return t;{const n=Or(t,e);return n!=null?new Ft(new ce(n)):new Ft(t.writeTree_.subtree(e))}}function Bc(t){return t.writeTree_.isEmpty()}function Ii(t,e){return cy(ee(),t.writeTree_,e)}function cy(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(N(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=cy(Te(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Te(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(t,e){return py(e,t)}function e1(t,e,n,r,i){N(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ys(t.visibleWrites,e,n)),t.lastWriteId=r}function t1(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function n1(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&r1(l,r.path)?i=!1:Ot(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return i1(t),!0;if(r.snap)t.visibleWrites=Yp(t.visibleWrites,r.path);else{const l=r.children;at(l,a=>{t.visibleWrites=Yp(t.visibleWrites,Te(r.path,a))})}return!0}else return!1}function r1(t,e){if(t.snap)return Ot(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ot(Te(t.path,n),e))return!0;return!1}function i1(t){t.visibleWrites=dy(t.allWrites,s1,ee()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function s1(t){return t.visible}function dy(t,e,n){let r=Ft.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)Ot(n,o)?(l=qe(n,o),r=ys(r,l,s.snap)):Ot(o,n)&&(l=qe(o,n),r=ys(r,ee(),s.snap.getChild(l)));else if(s.children){if(Ot(n,o))l=qe(n,o),r=Qp(r,l,s.children);else if(Ot(o,n))if(l=qe(o,n),Q(l))r=Qp(r,ee(),s.children);else{const a=wi(s.children,Y(l));if(a){const u=a.getChild(le(l));r=ys(r,ee(),u)}}}else throw Pi("WriteRecord should have .snap or .children")}}return r}function hy(t,e,n,r,i){if(!r&&!i){const s=Or(t.visibleWrites,e);if(s!=null)return s;{const o=jn(t.visibleWrites,e);if(Bc(o))return n;if(n==null&&!zc(o,ee()))return null;{const l=n||U.EMPTY_NODE;return Ii(o,l)}}}else{const s=jn(t.visibleWrites,e);if(!i&&Bc(s))return n;if(!i&&n==null&&!zc(s,ee()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Ot(u.path,e)||Ot(e,u.path))},l=dy(t.allWrites,o,e),a=n||U.EMPTY_NODE;return Ii(l,a)}}}function o1(t,e,n){let r=U.EMPTY_NODE;const i=Or(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ve,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=jn(t.visibleWrites,e);return n.forEachChild(ve,(o,l)=>{const a=Ii(jn(s,new se(o)),l);r=r.updateImmediateChild(o,a)}),qp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=jn(t.visibleWrites,e);return qp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function l1(t,e,n,r,i){N(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Te(e,n);if(zc(t.visibleWrites,s))return null;{const o=jn(t.visibleWrites,s);return Bc(o)?i.getChild(n):Ii(o,i.getChild(n))}}function a1(t,e,n,r){const i=Te(e,n),s=Or(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=jn(t.visibleWrites,i);return Ii(o,r.getNode().getImmediateChild(n))}else return null}function u1(t,e){return Or(t.visibleWrites,e)}function c1(t,e,n,r,i,s,o){let l;const a=jn(t.visibleWrites,e),u=Or(a,ee());if(u!=null)l=u;else if(n!=null)l=Ii(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=h.getNext();for(;_&&d.length<i;)c(_,r)!==0&&d.push(_),_=h.getNext();return d}else return[]}function d1(){return{visibleWrites:Ft.empty(),allWrites:[],lastWriteId:-1}}function Gl(t,e,n,r){return hy(t.writeTree,t.treePath,e,n,r)}function gh(t,e){return o1(t.writeTree,t.treePath,e)}function Xp(t,e,n,r){return l1(t.writeTree,t.treePath,e,n,r)}function Kl(t,e){return u1(t.writeTree,Te(t.treePath,e))}function h1(t,e,n,r,i,s){return c1(t.writeTree,t.treePath,e,n,r,i,s)}function _h(t,e,n){return a1(t.writeTree,t.treePath,e,n)}function fy(t,e){return py(Te(t.treePath,e),t.writeTree)}function py(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ks(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Gs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ci(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ks(r,e.snapshotNode,i.oldSnap));else throw Pi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const my=new p1;class vh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Yn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return _h(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Nr(this.viewCache_),s=h1(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(t){return{filter:t}}function g1(t,e){N(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function _1(t,e,n,r,i){const s=new f1;let o,l;if(n.type===Lt.OVERWRITE){const u=n;u.source.fromUser?o=Wc(t,e,u.path,u.snap,r,i,s):(N(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!Q(u.path),o=Ql(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===Lt.MERGE){const u=n;u.source.fromUser?o=y1(t,e,u.path,u.children,r,i,s):(N(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=jc(t,e,u.path,u.children,r,i,l,s))}else if(n.type===Lt.ACK_USER_WRITE){const u=n;u.revert?o=S1(t,e,u.path,r,i,s):o=w1(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Lt.LISTEN_COMPLETE)o=E1(t,e,n.path,r,s);else throw Pi("Unknown operation type: "+n.type);const a=s.getChanges();return v1(e,o,a),{viewCache:o,changes:a}}function v1(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Vl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(oy(Vl(e)))}}function gy(t,e,n,r,i,s){const o=e.eventCache;if(Kl(r,n)!=null)return e;{let l,a;if(Q(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Nr(e),d=u instanceof U?u:U.EMPTY_NODE,c=gh(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Gl(r,Nr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=Y(n);if(u===".priority"){N(Qn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=Xp(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=le(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Xp(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=_h(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return vs(e,l,o.isFullyInitialized()||Q(n),t.filter.filtersNodes())}}function Ql(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(Q(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),_,null)}else{const _=Y(n);if(!a.isCompleteForPath(n)&&Qn(n)>1)return e;const v=le(n),g=a.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?u=d.updatePriority(a.getNode(),g):u=d.updateChild(a.getNode(),_,g,v,my,null)}const c=uy(e,u,a.isFullyInitialized()||Q(n),d.filtersNodes()),h=new vh(i,c,s);return gy(t,c,n,i,h,l)}function Wc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new vh(i,e,s);if(Q(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=vs(e,u,!0,t.filter.filtersNodes());else{const c=Y(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=vs(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=le(n),_=l.getNode().getImmediateChild(c);let v;if(Q(h))v=r;else{const y=d.getCompleteChild(c);y!=null?qv(h)===".priority"&&y.getChild(Jv(h)).isEmpty()?v=y:v=y.updateChild(h,r):v=U.EMPTY_NODE}if(_.equals(v))a=e;else{const y=t.filter.updateChild(l.getNode(),c,v,h,d,o);a=vs(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Jp(t,e){return t.eventCache.isCompleteForChild(e)}function y1(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=Te(n,a);Jp(e,Y(d))&&(l=Wc(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=Te(n,a);Jp(e,Y(d))||(l=Wc(t,l,d,u,i,s,o))}),l}function Zp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function jc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;Q(n)?u=r:u=new ce(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const _=e.serverCache.getNode().getImmediateChild(c),v=Zp(t,_,h);a=Ql(t,a,new se(c),v,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const _=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!_){const v=e.serverCache.getNode().getImmediateChild(c),y=Zp(t,v,h);a=Ql(t,a,new se(c),y,i,s,o,l)}}),a}function w1(t,e,n,r,i,s,o){if(Kl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(Q(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ql(t,e,n,a.getNode().getChild(n),i,s,l,o);if(Q(n)){let u=new ce(null);return a.getNode().forEachChild(di,(d,c)=>{u=u.set(new se(d),c)}),jc(t,e,n,u,i,s,l,o)}else return e}else{let u=new ce(null);return r.foreach((d,c)=>{const h=Te(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),jc(t,e,n,u,i,s,l,o)}}function E1(t,e,n,r,i){const s=e.serverCache,o=uy(e,s.getNode(),s.isFullyInitialized()||Q(n),s.isFiltered());return gy(t,o,n,r,my,i)}function S1(t,e,n,r,i,s){let o;if(Kl(r,n)!=null)return e;{const l=new vh(r,e,i),a=e.eventCache.getNode();let u;if(Q(n)||Y(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Gl(r,Nr(e));else{const c=e.serverCache.getNode();N(c instanceof U,"serverChildren would be complete if leaf node"),d=gh(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=Y(n);let c=_h(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,le(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,U.EMPTY_NODE,le(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Gl(r,Nr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Kl(r,ee())!=null,vs(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new hh(r.getIndex()),s=jT(r);this.processor_=m1(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(U.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(U.EMPTY_NODE,l.getNode(),null),d=new Yn(a,o.isFullyInitialized(),i.filtersNodes()),c=new Yn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Ea(c,d),this.eventGenerator_=new YT(this.query_)}get query(){return this.query_}}function I1(t){return t.viewCache_.serverCache.getNode()}function k1(t){return Vl(t.viewCache_)}function T1(t,e){const n=Nr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Q(e)&&!n.getImmediateChild(Y(e)).isEmpty())?n.getChild(e):null}function em(t){return t.eventRegistrations_.length===0}function R1(t,e){t.eventRegistrations_.push(e)}function tm(t,e,n){const r=[];if(n){N(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function nm(t,e,n,r){e.type===Lt.MERGE&&e.source.queryId!==null&&(N(Nr(t.viewCache_),"We should always have a full cache before handling merges"),N(Vl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=_1(t.processor_,i,e,n,r);return g1(t.processor_,s.viewCache),N(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,_y(t,s.changes,s.viewCache.eventCache.getNode(),null)}function N1(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ve,(s,o)=>{r.push(Ci(s,o))}),n.isFullyInitialized()&&r.push(oy(n.getNode())),_y(t,r,n.getNode(),e)}function _y(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return qT(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yl;class vy{constructor(){this.views=new Map}}function P1(t){N(!Yl,"__referenceConstructor has already been defined"),Yl=t}function x1(){return N(Yl,"Reference.ts has not been loaded"),Yl}function D1(t){return t.views.size===0}function yh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return N(s!=null,"SyncTree gave us an op for an invalid query."),nm(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(nm(o,e,n,r));return s}}function yy(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Gl(n,i?r:null),a=!1;l?a=!0:r instanceof U?(l=gh(n,r),a=!1):(l=U.EMPTY_NODE,a=!1);const u=Ea(new Yn(l,a,!1),new Yn(r,i,!1));return new C1(e,u)}return o}function A1(t,e,n,r,i,s){const o=yy(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),R1(o,n),N1(o,n)}function O1(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=qn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(tm(u,n,r)),em(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(tm(a,n,r)),em(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!qn(t)&&s.push(new(x1())(e._repo,e._path)),{removed:s,events:o}}function wy(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function $n(t,e){let n=null;for(const r of t.views.values())n=n||T1(r,e);return n}function Ey(t,e){if(e._queryParams.loadsAllData())return Ca(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Sy(t,e){return Ey(t,e)!=null}function qn(t){return Ca(t)!=null}function Ca(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ql;function L1(t){N(!ql,"__referenceConstructor has already been defined"),ql=t}function M1(){return N(ql,"Reference.ts has not been loaded"),ql}let b1=1;class rm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ce(null),this.pendingWriteTree_=d1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Cy(t,e,n,r,i){return e1(t.pendingWriteTree_,e,n,r,i),i?yo(t,new Rr(ay(),e,n)):[]}function dr(t,e,n=!1){const r=t1(t.pendingWriteTree_,e);if(n1(t.pendingWriteTree_,e)){let s=new ce(null);return r.snap!=null?s=s.set(ee(),!0):at(r.children,o=>{s=s.set(new se(o),!0)}),yo(t,new Hl(r.path,s,n))}else return[]}function vo(t,e,n){return yo(t,new Rr(ph(),e,n))}function F1(t,e,n){const r=ce.fromObject(n);return yo(t,new qs(ph(),e,r))}function U1(t,e){return yo(t,new Ys(ph(),e))}function z1(t,e,n){const r=Eh(t,n);if(r){const i=Sh(r),s=i.path,o=i.queryId,l=qe(s,e),a=new Ys(mh(o),l);return Ch(t,s,a)}else return[]}function Iy(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Sy(o,e))){const a=O1(o,e,n,r);D1(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,_)=>qn(_));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const _=$1(h);for(let v=0;v<_.length;++v){const y=_[v],g=y.query,p=Ny(t,y);t.listenProvider_.startListening(ws(g),Xs(t,g),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(ws(e),null):u.forEach(h=>{const _=t.queryToTagMap.get(Ia(h));t.listenProvider_.stopListening(ws(h),_)}))}H1(t,u)}return l}function ky(t,e,n,r){const i=Eh(t,r);if(i!=null){const s=Sh(i),o=s.path,l=s.queryId,a=qe(o,e),u=new Rr(mh(l),a,n);return Ch(t,o,u)}else return[]}function B1(t,e,n,r){const i=Eh(t,r);if(i){const s=Sh(i),o=s.path,l=s.queryId,a=qe(o,e),u=ce.fromObject(n),d=new qs(mh(l),a,u);return Ch(t,o,d)}else return[]}function W1(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,_)=>{const v=qe(h,i);s=s||$n(_,v),o=o||qn(_)});let l=t.syncPointTree_.get(i);l?(o=o||qn(l),s=s||$n(l,ee())):(l=new vy,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=U.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const y=$n(v,ee());y&&(s=s.updateImmediateChild(_,y))}));const u=Sy(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Ia(e);N(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const _=V1();t.queryToTagMap.set(h,_),t.tagToQueryMap.set(_,h)}const d=Sa(t.pendingWriteTree_,i);let c=A1(l,e,n,d,s,a);if(!u&&!o&&!r){const h=Ey(l,e);c=c.concat(G1(t,e,h))}return c}function wh(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=qe(o,e),u=$n(l,a);if(u)return u});return hy(i,e,s,n,!0)}function j1(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=qe(u,n);r=r||$n(d,c)});let i=t.syncPointTree_.get(n);i?r=r||$n(i,ee()):(i=new vy,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Yn(r,!0,!1):null,l=Sa(t.pendingWriteTree_,e._path),a=yy(i,e,l,s?o.getNode():U.EMPTY_NODE,s);return k1(a)}function yo(t,e){return Ty(e,t.syncPointTree_,null,Sa(t.pendingWriteTree_,ee()))}function Ty(t,e,n,r){if(Q(t.path))return Ry(t,e,n,r);{const i=e.get(ee());n==null&&i!=null&&(n=$n(i,ee()));let s=[];const o=Y(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=fy(r,o);s=s.concat(Ty(l,a,u,d))}return i&&(s=s.concat(yh(i,t,r,n))),s}}function Ry(t,e,n,r){const i=e.get(ee());n==null&&i!=null&&(n=$n(i,ee()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=fy(r,o),d=t.operationForChild(o);d&&(s=s.concat(Ry(d,l,a,u)))}),i&&(s=s.concat(yh(i,t,r,n))),s}function Ny(t,e){const n=e.query,r=Xs(t,n);return{hashFn:()=>(I1(e)||U.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?z1(t,n._path,r):U1(t,n._path);{const s=Wk(i,n);return Iy(t,n,null,s)}}}}function Xs(t,e){const n=Ia(e);return t.queryToTagMap.get(n)}function Ia(t){return t._path.toString()+"$"+t._queryIdentifier}function Eh(t,e){return t.tagToQueryMap.get(e)}function Sh(t){const e=t.indexOf("$");return N(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function Ch(t,e,n){const r=t.syncPointTree_.get(e);N(r,"Missing sync point for query tag that we're tracking");const i=Sa(t.pendingWriteTree_,e);return yh(r,n,i,null)}function $1(t){return t.fold((e,n,r)=>{if(n&&qn(n))return[Ca(n)];{let i=[];return n&&(i=wy(n)),at(r,(s,o)=>{i=i.concat(o)}),i}})}function ws(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(M1())(t._repo,t._path):t}function H1(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Ia(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function V1(){return b1++}function G1(t,e,n){const r=e._path,i=Xs(t,e),s=Ny(t,n),o=t.listenProvider_.startListening(ws(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)N(!qn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!Q(u)&&d&&qn(d))return[Ca(d).query];{let h=[];return d&&(h=h.concat(wy(d).map(_=>_.query))),at(c,(_,v)=>{h=h.concat(v)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(ws(d),Xs(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ih(n)}node(){return this.node_}}class kh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Te(this.path_,e);return new kh(this.syncTree_,n)}node(){return wh(this.syncTree_,this.path_)}}const K1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},im=function(t,e,n){if(!t||typeof t!="object")return t;if(N(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Q1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Y1(t[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Q1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+t)}},Y1=function(t,e,n){t.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&N(!1,"Unexpected increment value: "+r);const i=e.node();if(N(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},q1=function(t,e,n,r){return Th(e,new kh(n,t),r)},Py=function(t,e,n){return Th(t,new Ih(e),n)};function Th(t,e,n){const r=t.getPriority().val(),i=im(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=im(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Pe(l,Ae(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Pe(i))),o.forEachChild(ve,(l,a)=>{const u=Th(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Nh(t,e){let n=e instanceof se?e:new se(e),r=t,i=Y(n);for(;i!==null;){const s=wi(r.node.children,i)||{children:{},childCount:0};r=new Rh(i,r,s),n=le(n),i=Y(n)}return r}function Li(t){return t.node.value}function xy(t,e){t.node.value=e,$c(t)}function Dy(t){return t.node.childCount>0}function X1(t){return Li(t)===void 0&&!Dy(t)}function ka(t,e){at(t.node.children,(n,r)=>{e(new Rh(n,t,r))})}function Ay(t,e,n,r){n&&!r&&e(t),ka(t,i=>{Ay(i,e,!0,r)}),n&&r&&e(t)}function J1(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function wo(t){return new se(t.parent===null?t.name:wo(t.parent)+"/"+t.name)}function $c(t){t.parent!==null&&Z1(t.parent,t.name,t)}function Z1(t,e,n){const r=X1(n),i=_n(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,$c(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,$c(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR=/[\[\].#$\/\u0000-\u001F\u007F]/,tR=/[\[\].#$\u0000-\u001F\u007F]/,ku=10*1024*1024,Oy=function(t){return typeof t=="string"&&t.length!==0&&!eR.test(t)},Ly=function(t){return typeof t=="string"&&t.length!==0&&!tR.test(t)},nR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ly(t)},rR=function(t,e,n,r){r&&e===void 0||Ph(Kd(t,"value"),e,n)},Ph=function(t,e,n){const r=n instanceof se?new wT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+or(r));if(typeof e=="function")throw new Error(t+"contains a function "+or(r)+" with contents = "+e.toString());if(Pv(e))throw new Error(t+"contains "+e.toString()+" "+or(r));if(typeof e=="string"&&e.length>ku/3&&ga(e)>ku)throw new Error(t+"contains a string greater than "+ku+" utf8 bytes "+or(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(at(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Oy(o)))throw new Error(t+" contains an invalid key ("+o+") "+or(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ET(r,o),Ph(t,l,r),ST(r)}),i&&s)throw new Error(t+' contains ".value" child '+or(r)+" in addition to actual children.")}},My=function(t,e,n,r){if(!(r&&n===void 0)&&!Ly(n))throw new Error(Kd(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},iR=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),My(t,e,n,r)},by=function(t,e){if(Y(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},sR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Oy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!nR(n))throw new Error(Kd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Fy(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Zv(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Qt(t,e,n){Fy(t,n),lR(t,r=>Ot(r,e)||Ot(e,r))}function lR(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(aR(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function aR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();gr&&Ge("event: "+n.toString()),Oi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR="repo_interrupt",cR=25;class dR{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new oR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$l(),this.transactionQueueTree_=new Rh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hR(t,e,n){if(t.stats_=ah(t.repoInfo_),t.forceRestClient_||Vk())t.server_=new jl(t.repoInfo_,(r,i,s,o)=>{sm(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>om(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ke(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new un(t.repoInfo_,e,(r,i,s,o)=>{sm(t,r,i,s,o)},r=>{om(t,r)},r=>{pR(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=qk(t.repoInfo_,()=>new QT(t.stats_,t.server_)),t.infoData_=new $T,t.infoSyncTree_=new rm({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=vo(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Dh(t,"connected",!1),t.serverSyncTree_=new rm({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Qt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function fR(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function xh(t){return K1({timestamp:fR(t)})}function sm(t,e,n,r,i){t.dataUpdateCount++;const s=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Al(n,u=>Ae(u));o=B1(t.serverSyncTree_,s,a,i)}else{const a=Ae(n);o=ky(t.serverSyncTree_,s,a,i)}else if(r){const a=Al(n,u=>Ae(u));o=F1(t.serverSyncTree_,s,a)}else{const a=Ae(n);o=vo(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Ra(t,s)),Qt(t.eventQueue_,l,o)}function om(t,e){Dh(t,"connected",e),e===!1&&_R(t)}function pR(t,e){at(e,(n,r)=>{Dh(t,n,r)})}function Dh(t,e,n){const r=new se("/.info/"+e),i=Ae(n);t.infoData_.updateSnapshot(r,i);const s=vo(t.infoSyncTree_,r,i);Qt(t.eventQueue_,r,s)}function Uy(t){return t.nextWriteId_++}function mR(t,e,n){const r=j1(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Ae(i).withIndex(e._queryParams.getIndex());W1(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=vo(t.serverSyncTree_,e._path,s);else{const l=Xs(t.serverSyncTree_,e);o=ky(t.serverSyncTree_,e._path,s,l)}return Qt(t.eventQueue_,e._path,o),Iy(t.serverSyncTree_,e,n,null,!0),s},i=>(Ta(t,"get for query "+ke(e)+" failed: "+i),Promise.reject(new Error(i))))}function gR(t,e,n,r,i){Ta(t,"set",{path:e.toString(),value:n,priority:r});const s=xh(t),o=Ae(n,r),l=wh(t.serverSyncTree_,e),a=Py(o,l,s),u=Uy(t),d=Cy(t.serverSyncTree_,e,a,u,!0);Fy(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const v=h==="ok";v||lt("set at "+e+" failed: "+h);const y=dr(t.serverSyncTree_,u,!v);Qt(t.eventQueue_,e,y),yR(t,i,h,_)});const c=$y(t,e);Ra(t,c),Qt(t.eventQueue_,c,[])}function _R(t){Ta(t,"onDisconnectEvents");const e=xh(t),n=$l();Uc(t.onDisconnect_,ee(),(i,s)=>{const o=q1(i,s,t.serverSyncTree_,e);ly(n,i,o)});let r=[];Uc(n,ee(),(i,s)=>{r=r.concat(vo(t.serverSyncTree_,i,s));const o=$y(t,i);Ra(t,o)}),t.onDisconnect_=$l(),Qt(t.eventQueue_,ee(),r)}function vR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(uR)}function Ta(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ge(n,...e)}function yR(t,e,n,r){e&&Oi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function zy(t,e,n){return wh(t.serverSyncTree_,e,n)||U.EMPTY_NODE}function Ah(t,e=t.transactionQueueTree_){if(e||Na(t,e),Li(e)){const n=Wy(t,e);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&wR(t,wo(e),n)}else Dy(e)&&ka(e,n=>{Ah(t,n)})}function wR(t,e,n){const r=n.map(u=>u.currentWriteId),i=zy(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];N(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=qe(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Ta(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(dr(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Na(t,Nh(t.transactionQueueTree_,e)),Ah(t,t.transactionQueueTree_),Qt(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)Oi(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{lt("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Ra(t,e)}},o)}function Ra(t,e){const n=By(t,e),r=wo(n),i=Wy(t,n);return ER(t,i,r),r}function ER(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=qe(n,a.path);let d=!1,c;if(N(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(dr(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=cR)d=!0,c="maxretry",i=i.concat(dr(t.serverSyncTree_,a.currentWriteId,!0));else{const h=zy(t,a.path,o);a.currentInputSnapshot=h;const _=e[l].update(h.val());if(_!==void 0){Ph("transaction failed: Data returned ",_,a.path);let v=Ae(_);typeof _=="object"&&_!=null&&_n(_,".priority")||(v=v.updatePriority(h.getPriority()));const g=a.currentWriteId,p=xh(t),f=Py(v,h,p);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=f,a.currentWriteId=Uy(t),o.splice(o.indexOf(g),1),i=i.concat(Cy(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(dr(t.serverSyncTree_,g,!0))}else d=!0,c="nodata",i=i.concat(dr(t.serverSyncTree_,a.currentWriteId,!0))}Qt(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Na(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Oi(r[l]);Ah(t,t.transactionQueueTree_)}function By(t,e){let n,r=t.transactionQueueTree_;for(n=Y(e);n!==null&&Li(r)===void 0;)r=Nh(r,n),e=le(e),n=Y(e);return r}function Wy(t,e){const n=[];return jy(t,e,n),n.sort((r,i)=>r.order-i.order),n}function jy(t,e,n){const r=Li(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ka(e,i=>{jy(t,i,n)})}function Na(t,e){const n=Li(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,xy(e,n.length>0?n:void 0)}ka(e,r=>{Na(t,r)})}function $y(t,e){const n=wo(By(t,e)),r=Nh(t.transactionQueueTree_,e);return J1(r,i=>{Tu(t,i)}),Tu(t,r),Ay(r,i=>{Tu(t,i)}),n}function Tu(t,e){const n=Li(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(dr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?xy(e,void 0):n.length=s+1,Qt(t.eventQueue_,wo(e),i);for(let o=0;o<r.length;o++)Oi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function CR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):lt(`Invalid query segment '${n}' in query '${t}'`)}return e}const lm=function(t,e){const n=IR(t),r=n.namespace;n.domain==="firebase.com"&&mn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&mn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||bk();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Wv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new se(n.pathString)}},IR=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=SR(t.substring(d,c)));const h=CR(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ke(this.snapshot.exportVal())}}class TR{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Q(this._path)?null:qv(this._path)}get ref(){return new vn(this._repo,this._path)}get _queryIdentifier(){const e=Gp(this._queryParams),n=oh(e);return n==="{}"?"default":n}get _queryObject(){return Gp(this._queryParams)}isEqual(e){if(e=et(e),!(e instanceof Oh))return!1;const n=this._repo===e._repo,r=Zv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+yT(this._path)}}class vn extends Oh{constructor(e,n){super(e,n,new fh,!1)}get parent(){const e=Jv(this._path);return e===null?null:new vn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Js{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),r=ki(this.ref,e);return new Js(this._node.getChild(n),r,ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Js(i,ki(this.ref,r),ve)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ct(t,e){return t=et(t),t._checkNotDeleted("ref"),e!==void 0?ki(t._root,e):t._root}function ki(t,e){return t=et(t),Y(t._path)===null?iR("child","path",e,!1):My("child","path",e,!1),new vn(t._repo,Te(t._path,e))}function Hc(t){return by("remove",t._path),Hn(t,null)}function Hn(t,e){t=et(t),by("set",t._path),rR("set",e,t._path,!1);const n=new ma;return gR(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Lh(t){t=et(t);const e=new RR(()=>{}),n=new Mh(e);return mR(t._repo,t,n).then(r=>new Js(r,new vn(t._repo,t._path),t._queryParams.getIndex()))}class Mh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new kR("value",this,new Js(e.snapshotNode,new vn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new TR(this,e,n):null}matches(e){return e instanceof Mh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}P1(vn);L1(vn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR="FIREBASE_DATABASE_EMULATOR_HOST",Vc={};let PR=!1;function xR(t,e,n,r){t.repoInfo_=new Wv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function DR(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||mn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ge("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=lm(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[NR]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=lm(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new ci(ci.OWNER):new Kk(t.name,t.options,e);sR("Invalid Firebase Database URL",o),Q(o.path)||mn("Database URL must point to the root of a Firebase Database (not including a child path).");const c=OR(l,t,d,new Gk(t.name,n));return new LR(c,t)}function AR(t,e){const n=Vc[e];(!n||n[t.key]!==t)&&mn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),vR(t),delete n[t.key]}function OR(t,e,n,r){let i=Vc[e.name];i||(i={},Vc[e.name]=i);let s=i[t.toURLString()];return s&&mn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new dR(t,PR,n,r),i[t.toURLString()]=s,s}class LR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new vn(this._repo,ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(AR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&mn("Cannot call "+e+" on a deleted database.")}}function MR(t=Q_(),e){const n=qd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=nS("database");r&&bR(n,...r)}return n}function bR(t,e,n,r={}){t=et(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&mn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&mn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ci(ci.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:iS(r.mockUserToken,t.app.options.projectId);s=new ci(o)}xR(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(t){Dk(oo),Ei(new Sr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return DR(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Wn(Pp,xp,t),Wn(Pp,xp,"esm2017")}un.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};un.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};FR();const UR={apiKey:"AIzaSyDWVrAA3sRJ0PBlbgAnpEmJgdb1lPbTVu8",authDomain:"geotodosapp.firebaseapp.com",projectId:"geotodosapp",storageBucket:"geotodosapp.appspot.com",messagingSenderId:"716093370179",appId:"1:716093370179:web:9c908a801992208c4d89f6",measurementId:"G-4FB36K1XMC",databaseURL:"https://geotodosapp-default-rtdb.firebaseio.com/"},Hy=K_(UR),Xl=xk(Hy),dt=MR(Hy);/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function X(){return X=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},X.apply(this,arguments)}var Ee;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ee||(Ee={}));const am="popstate";function zR(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:a=""}=Yt(i.location.hash.substr(1));return Zs("",{pathname:o,search:l,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let a=i.location.href,u=a.indexOf("#");l=u===-1?a:a.slice(0,u)}return l+"#"+(typeof s=="string"?s:xr(s))}function r(i,s){Pr(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return WR(e,n,r,t)}function G(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Pr(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function BR(){return Math.random().toString(36).substr(2,8)}function um(t,e){return{usr:t.state,key:t.key,idx:e}}function Zs(t,e,n,r){return n===void 0&&(n=null),X({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Yt(e):e,{state:n,key:e&&e.key||r||BR()})}function xr(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Yt(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function WR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Ee.Pop,a=null,u=d();u==null&&(u=0,o.replaceState(X({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){l=Ee.Pop;let g=d(),p=g==null?null:g-u;u=g,a&&a({action:l,location:y.location,delta:p})}function h(g,p){l=Ee.Push;let f=Zs(y.location,g,p);n&&n(f,g),u=d()+1;let m=um(f,u),E=y.createHref(f);try{o.pushState(m,"",E)}catch{i.location.assign(E)}s&&a&&a({action:l,location:y.location,delta:1})}function _(g,p){l=Ee.Replace;let f=Zs(y.location,g,p);n&&n(f,g),u=d();let m=um(f,u),E=y.createHref(f);o.replaceState(m,"",E),s&&a&&a({action:l,location:y.location,delta:0})}function v(g){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof g=="string"?g:xr(g);return G(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let y={get action(){return l},get location(){return t(i,o)},listen(g){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(am,c),a=g,()=>{i.removeEventListener(am,c),a=null}},createHref(g){return e(i,g)},createURL:v,encodeLocation(g){let p=v(g);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:_,go(g){return o.go(g)}};return y}var Ce;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ce||(Ce={}));const jR=new Set(["lazy","caseSensitive","path","id","index","children"]);function $R(t){return t.index===!0}function Vy(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],l=typeof i.id=="string"?i.id:o.join("-");if(G(i.index!==!0||!i.children,"Cannot specify children on an index route"),G(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),$R(i)){let a=X({},i,{hasErrorBoundary:e(i),id:l});return r[l]=a,a}else{let a=X({},i,{id:l,hasErrorBoundary:e(i),children:void 0});return r[l]=a,i.children&&(a.children=Vy(i.children,e,o,r)),a}})}function Zr(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Yt(e):e,i=Pa(r.pathname||"/",n);if(i==null)return null;let s=Gy(t);HR(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=ZR(s[l],nN(i));return o}function Gy(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(G(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Vn([r,a.relativePath]),d=n.concat(a);s.children&&s.children.length>0&&(G(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Gy(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:XR(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of Ky(s.path))i(s,o,a)}),e}function Ky(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Ky(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function HR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:JR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const VR=/^:\w+$/,GR=3,KR=2,QR=1,YR=10,qR=-2,cm=t=>t==="*";function XR(t,e){let n=t.split("/"),r=n.length;return n.some(cm)&&(r+=qR),e&&(r+=KR),n.filter(i=>!cm(i)).reduce((i,s)=>i+(VR.test(s)?GR:s===""?QR:YR),r)}function JR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function ZR(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=eN({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!d)return null;Object.assign(r,d.params);let c=l.route;s.push({params:r,pathname:Vn([i,d.pathname]),pathnameBase:oN(Vn([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=Vn([i,d.pathnameBase]))}return s}function eN(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=tN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let h=l[c]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[d]=rN(l[c]||"",d),u},{}),pathname:s,pathnameBase:o,pattern:t}}function tN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Pr(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function nN(t){try{return decodeURI(t)}catch(e){return Pr(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function rN(t,e){try{return decodeURIComponent(t)}catch(n){return Pr(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Pa(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function iN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Yt(t):t;return{pathname:n?n.startsWith("/")?n:sN(n,e):e,search:lN(r),hash:aN(i)}}function sN(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ru(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bh(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Qy(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Yt(t):(i=X({},t),G(!i.pathname||!i.pathname.includes("?"),Ru("?","pathname","search",i)),G(!i.pathname||!i.pathname.includes("#"),Ru("#","pathname","hash",i)),G(!i.search||!i.search.includes("#"),Ru("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let c=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}l=c>=0?e[c]:"/"}let a=iN(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const Vn=t=>t.join("/").replace(/\/\/+/g,"/"),oN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),lN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,aN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Fh{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Yy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const qy=["post","put","patch","delete"],uN=new Set(qy),cN=["get",...qy],dN=new Set(cN),hN=new Set([301,302,303,307,308]),fN=new Set([307,308]),Nu={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},pN={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},dm={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Xy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mN=!Jy,gN=t=>!!t.hasErrorBoundary;function _N(t){G(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let e=t.detectErrorBoundary||gN,n={},r=Vy(t.routes,e,void 0,n),i,s=X({v7_normalizeFormMethod:!1},t.future),o=null,l=new Set,a=null,u=null,d=null,c=t.hydrationData!=null,h=Zr(r,t.history.location,t.basename),_=null;if(h==null){let w=jt(404,{pathname:t.history.location.pathname}),{matches:S,route:k}=vm(r);h=S,_={[k.id]:w}}let v=!h.some(w=>w.route.lazy)&&(!h.some(w=>w.route.loader)||t.hydrationData!=null),y,g={historyAction:t.history.action,location:t.history.location,matches:h,initialized:v,navigation:Nu,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||_,fetchers:new Map,blockers:new Map},p=Ee.Pop,f=!1,m,E=!1,C=!1,P=[],x=[],R=new Map,J=0,j=-1,$=new Map,Le=new Set,Me=new Map,Be=new Map,_t=new Map,vt=!1;function qt(){return o=t.history.listen(w=>{let{action:S,location:k,delta:L}=w;if(vt){vt=!1;return}Pr(_t.size===0||L!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let M=Vh({currentLocation:g.location,nextLocation:k,historyAction:S});if(M&&L!=null){vt=!0,t.history.go(L*-1),Co(M,{state:"blocked",location:k,proceed(){Co(M,{state:"proceeding",proceed:void 0,reset:void 0,location:k}),t.history.go(L)},reset(){Fi(M),b({blockers:new Map(y.state.blockers)})}});return}return We(S,k)}),g.initialized||We(Ee.Pop,g.location),y}function A(){o&&o(),l.clear(),m&&m.abort(),g.fetchers.forEach((w,S)=>Ma(S)),g.blockers.forEach((w,S)=>Fi(S))}function H(w){return l.add(w),()=>l.delete(w)}function b(w){g=X({},g,w),l.forEach(S=>S(g))}function re(w,S){var k,L;let M=g.actionData!=null&&g.navigation.formMethod!=null&&en(g.navigation.formMethod)&&g.navigation.state==="loading"&&((k=w.state)==null?void 0:k._isRedirect)!==!0,B;S.actionData?Object.keys(S.actionData).length>0?B=S.actionData:B=null:M?B=g.actionData:B=null;let W=S.loaderData?_m(g.loaderData,S.loaderData,S.matches||[],S.errors):g.loaderData;for(let[F]of _t)Fi(F);let V=f===!0||g.navigation.formMethod!=null&&en(g.navigation.formMethod)&&((L=w.state)==null?void 0:L._isRedirect)!==!0;i&&(r=i,i=void 0),b(X({},S,{actionData:B,loaderData:W,historyAction:p,location:w,initialized:!0,navigation:Nu,revalidation:"idle",restoreScrollPosition:Gh(w,S.matches||g.matches),preventScrollReset:V,blockers:new Map(g.blockers)})),E||p===Ee.Pop||(p===Ee.Push?t.history.push(w,w.state):p===Ee.Replace&&t.history.replace(w,w.state)),p=Ee.Pop,f=!1,E=!1,C=!1,P=[],x=[]}async function ye(w,S){if(typeof w=="number"){t.history.go(w);return}let{path:k,submission:L,error:M}=hm(w,s,S),B=g.location,W=Zs(g.location,k,S&&S.state);W=X({},W,t.history.encodeLocation(W));let V=S&&S.replace!=null?S.replace:void 0,F=Ee.Push;V===!0?F=Ee.Replace:V===!1||L!=null&&en(L.formMethod)&&L.formAction===g.location.pathname+g.location.search&&(F=Ee.Replace);let oe=S&&"preventScrollReset"in S?S.preventScrollReset===!0:void 0,te=Vh({currentLocation:B,nextLocation:W,historyAction:F});if(te){Co(te,{state:"blocked",location:W,proceed(){Co(te,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),ye(w,S)},reset(){Fi(te),b({blockers:new Map(g.blockers)})}});return}return await We(F,W,{submission:L,pendingError:M,preventScrollReset:oe,replace:S&&S.replace})}function Mr(){if(Oa(),b({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){We(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}We(p||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function We(w,S,k){m&&m.abort(),m=null,p=w,E=(k&&k.startUninterruptedRevalidation)===!0,f0(g.location,g.matches),f=(k&&k.preventScrollReset)===!0;let L=i||r,M=k&&k.overrideNavigation,B=Zr(L,S,t.basename);if(!B){let Ne=jt(404,{pathname:S.pathname}),{matches:be,route:Tt}=vm(L);ba(),re(S,{matches:be,loaderData:{},errors:{[Tt.id]:Ne}});return}if(SN(g.location,S)&&!(k&&k.submission&&en(k.submission.formMethod))){re(S,{matches:B});return}m=new AbortController;let W=es(t.history,S,m.signal,k&&k.submission),V,F;if(k&&k.pendingError)F={[ei(B).route.id]:k.pendingError};else if(k&&k.submission&&en(k.submission.formMethod)){let Ne=await Mi(W,S,k.submission,B,{replace:k.replace});if(Ne.shortCircuited)return;V=Ne.pendingActionData,F=Ne.pendingActionError,M=X({state:"loading",location:S},k.submission),W=new Request(W.url,{signal:W.signal})}let{shortCircuited:oe,loaderData:te,errors:kt}=await Xt(W,S,B,M,k&&k.submission,k&&k.fetcherSubmission,k&&k.replace,V,F);oe||(m=null,re(S,X({matches:B},V?{actionData:V}:{},{loaderData:te,errors:kt})))}async function Mi(w,S,k,L,M){Oa();let B=X({state:"submitting",location:S},k);b({navigation:B});let W,V=Gc(L,S);if(!V.route.action&&!V.route.lazy)W={type:Ce.error,error:jt(405,{method:w.method,pathname:S.pathname,routeId:V.route.id})};else if(W=await Zi("action",w,V,L,n,e,y.basename),w.signal.aborted)return{shortCircuited:!0};if(hi(W)){let F;return M&&M.replace!=null?F=M.replace:F=W.location===g.location.pathname+g.location.search,await bi(g,W,{submission:k,replace:F}),{shortCircuited:!0}}if(Es(W)){let F=ei(L,V.route.id);return(M&&M.replace)!==!0&&(p=Ee.Push),{pendingActionData:{},pendingActionError:{[F.route.id]:W.error}}}if(hr(W))throw jt(400,{type:"defer-action"});return{pendingActionData:{[V.route.id]:W.data}}}async function Xt(w,S,k,L,M,B,W,V,F){let oe=L;oe||(oe=X({state:"loading",location:S,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},M));let te=M||B?M||B:oe.formMethod&&oe.formAction&&oe.formData&&oe.formEncType?{formMethod:oe.formMethod,formAction:oe.formAction,formData:oe.formData,formEncType:oe.formEncType}:void 0,kt=i||r,[Ne,be]=fm(t.history,g,k,te,S,C,P,x,Me,kt,t.basename,V,F);if(ba(je=>!(k&&k.some(Rt=>Rt.route.id===je))||Ne&&Ne.some(Rt=>Rt.route.id===je)),Ne.length===0&&be.length===0)return re(S,X({matches:k,loaderData:{},errors:F||null},V?{actionData:V}:{})),{shortCircuited:!0};if(!E){be.forEach(Rt=>{let nr=g.fetchers.get(Rt.key),Bi={state:"loading",data:nr&&nr.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(Rt.key,Bi)});let je=V||g.actionData;b(X({navigation:oe},je?Object.keys(je).length===0?{actionData:null}:{actionData:je}:{},be.length>0?{fetchers:new Map(g.fetchers)}:{}))}j=++J,be.forEach(je=>R.set(je.key,m));let{results:Tt,loaderResults:Ui,fetcherResults:Fa}=await jh(g.matches,k,Ne,be,w);if(w.signal.aborted)return{shortCircuited:!0};be.forEach(je=>R.delete(je.key));let zi=ym(Tt);if(zi)return await bi(g,zi,{replace:W}),{shortCircuited:!0};let{loaderData:br,errors:Ua}=gm(g,k,Ne,Ui,F,be,Fa,Be);Be.forEach((je,Rt)=>{je.subscribe(nr=>{(nr||je.done)&&Be.delete(Rt)})}),c0();let za=Hh(j);return X({loaderData:br,errors:Ua},za||be.length>0?{fetchers:new Map(g.fetchers)}:{})}function tr(w){return g.fetchers.get(w)||pN}function l0(w,S,k,L){if(mN)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");R.has(w)&&So(w);let B=Zr(i||r,k,t.basename);if(!B){La(w,S,jt(404,{pathname:k}));return}let{path:W,submission:V}=hm(k,s,L,!0),F=Gc(B,W);if(f=(L&&L.preventScrollReset)===!0,V&&en(V.formMethod)){a0(w,S,W,F,B,V);return}Me.set(w,{routeId:S,path:W}),u0(w,S,W,F,B,V)}async function a0(w,S,k,L,M,B){if(Oa(),Me.delete(w),!L.route.action&&!L.route.lazy){let Jt=jt(405,{method:B.formMethod,pathname:k,routeId:S});La(w,S,Jt);return}let W=g.fetchers.get(w),V=X({state:"submitting"},B,{data:W&&W.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(w,V),b({fetchers:new Map(g.fetchers)});let F=new AbortController,oe=es(t.history,k,F.signal,B);R.set(w,F);let te=await Zi("action",oe,L,M,n,e,y.basename);if(oe.signal.aborted){R.get(w)===F&&R.delete(w);return}if(hi(te)){R.delete(w),Le.add(w);let Jt=X({state:"loading"},B,{data:void 0," _hasFetcherDoneAnything ":!0});return g.fetchers.set(w,Jt),b({fetchers:new Map(g.fetchers)}),bi(g,te,{submission:B,isFetchActionRedirect:!0})}if(Es(te)){La(w,S,te.error);return}if(hr(te))throw jt(400,{type:"defer-action"});let kt=g.navigation.location||g.location,Ne=es(t.history,kt,F.signal),be=i||r,Tt=g.navigation.state!=="idle"?Zr(be,g.navigation.location,t.basename):g.matches;G(Tt,"Didn't find any matches after fetcher action");let Ui=++J;$.set(w,Ui);let Fa=X({state:"loading",data:te.data},B,{" _hasFetcherDoneAnything ":!0});g.fetchers.set(w,Fa);let[zi,br]=fm(t.history,g,Tt,B,kt,C,P,x,Me,be,t.basename,{[L.route.id]:te.data},void 0);br.filter(Jt=>Jt.key!==w).forEach(Jt=>{let Ba=Jt.key,Kh=g.fetchers.get(Ba),_0={state:"loading",data:Kh&&Kh.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(Ba,_0),R.set(Ba,F)}),b({fetchers:new Map(g.fetchers)});let{results:Ua,loaderResults:za,fetcherResults:je}=await jh(g.matches,Tt,zi,br,Ne);if(F.signal.aborted)return;$.delete(w),R.delete(w),br.forEach(Jt=>R.delete(Jt.key));let Rt=ym(Ua);if(Rt)return bi(g,Rt);let{loaderData:nr,errors:Bi}=gm(g,g.matches,zi,za,void 0,br,je,Be),m0={state:"idle",data:te.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(w,m0);let g0=Hh(Ui);g.navigation.state==="loading"&&Ui>j?(G(p,"Expected pending action"),m&&m.abort(),re(g.navigation.location,{matches:Tt,loaderData:nr,errors:Bi,fetchers:new Map(g.fetchers)})):(b(X({errors:Bi,loaderData:_m(g.loaderData,nr,Tt,Bi)},g0?{fetchers:new Map(g.fetchers)}:{})),C=!1)}async function u0(w,S,k,L,M,B){let W=g.fetchers.get(w),V=X({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},B,{data:W&&W.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(w,V),b({fetchers:new Map(g.fetchers)});let F=new AbortController,oe=es(t.history,k,F.signal);R.set(w,F);let te=await Zi("loader",oe,L,M,n,e,y.basename);if(hr(te)&&(te=await n0(te,oe.signal,!0)||te),R.get(w)===F&&R.delete(w),oe.signal.aborted)return;if(hi(te)){await bi(g,te);return}if(Es(te)){let Ne=ei(g.matches,S);g.fetchers.delete(w),b({fetchers:new Map(g.fetchers),errors:{[Ne.route.id]:te.error}});return}G(!hr(te),"Unhandled fetcher deferred data");let kt={state:"idle",data:te.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(w,kt),b({fetchers:new Map(g.fetchers)})}async function bi(w,S,k){var L;let{submission:M,replace:B,isFetchActionRedirect:W}=k===void 0?{}:k;S.revalidate&&(C=!0);let V=Zs(w.location,S.location,X({_isRedirect:!0},W?{_isFetchActionRedirect:!0}:{}));if(G(V,"Expected a location on the redirect navigation"),Xy.test(S.location)&&Jy&&typeof((L=window)==null?void 0:L.location)<"u"){let be=t.history.createURL(S.location),Tt=Pa(be.pathname,t.basename||"/")==null;if(window.location.origin!==be.origin||Tt){B?window.location.replace(S.location):window.location.assign(S.location);return}}m=null;let F=B===!0?Ee.Replace:Ee.Push,{formMethod:oe,formAction:te,formEncType:kt,formData:Ne}=w.navigation;!M&&oe&&te&&Ne&&kt&&(M={formMethod:oe,formAction:te,formEncType:kt,formData:Ne}),fN.has(S.status)&&M&&en(M.formMethod)?await We(F,V,{submission:X({},M,{formAction:S.location}),preventScrollReset:f}):W?await We(F,V,{overrideNavigation:{state:"loading",location:V,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:M,preventScrollReset:f}):await We(F,V,{overrideNavigation:{state:"loading",location:V,formMethod:M?M.formMethod:void 0,formAction:M?M.formAction:void 0,formEncType:M?M.formEncType:void 0,formData:M?M.formData:void 0},preventScrollReset:f})}async function jh(w,S,k,L,M){let B=await Promise.all([...k.map(F=>Zi("loader",M,F,S,n,e,y.basename)),...L.map(F=>F.matches&&F.match?Zi("loader",es(t.history,F.path,M.signal),F.match,F.matches,n,e,y.basename):{type:Ce.error,error:jt(404,{pathname:F.path})})]),W=B.slice(0,k.length),V=B.slice(k.length);return await Promise.all([wm(w,k,W,M.signal,!1,g.loaderData),wm(w,L.map(F=>F.match),V,M.signal,!0)]),{results:B,loaderResults:W,fetcherResults:V}}function Oa(){C=!0,P.push(...ba()),Me.forEach((w,S)=>{R.has(S)&&(x.push(S),So(S))})}function La(w,S,k){let L=ei(g.matches,S);Ma(w),b({errors:{[L.route.id]:k},fetchers:new Map(g.fetchers)})}function Ma(w){R.has(w)&&So(w),Me.delete(w),$.delete(w),Le.delete(w),g.fetchers.delete(w)}function So(w){let S=R.get(w);G(S,"Expected fetch controller: "+w),S.abort(),R.delete(w)}function $h(w){for(let S of w){let L={state:"idle",data:tr(S).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(S,L)}}function c0(){let w=[];for(let S of Le){let k=g.fetchers.get(S);G(k,"Expected fetcher: "+S),k.state==="loading"&&(Le.delete(S),w.push(S))}$h(w)}function Hh(w){let S=[];for(let[k,L]of $)if(L<w){let M=g.fetchers.get(k);G(M,"Expected fetcher: "+k),M.state==="loading"&&(So(k),$.delete(k),S.push(k))}return $h(S),S.length>0}function d0(w,S){let k=g.blockers.get(w)||dm;return _t.get(w)!==S&&_t.set(w,S),k}function Fi(w){g.blockers.delete(w),_t.delete(w)}function Co(w,S){let k=g.blockers.get(w)||dm;G(k.state==="unblocked"&&S.state==="blocked"||k.state==="blocked"&&S.state==="blocked"||k.state==="blocked"&&S.state==="proceeding"||k.state==="blocked"&&S.state==="unblocked"||k.state==="proceeding"&&S.state==="unblocked","Invalid blocker state transition: "+k.state+" -> "+S.state),g.blockers.set(w,S),b({blockers:new Map(g.blockers)})}function Vh(w){let{currentLocation:S,nextLocation:k,historyAction:L}=w;if(_t.size===0)return;_t.size>1&&Pr(!1,"A router only supports one blocker at a time");let M=Array.from(_t.entries()),[B,W]=M[M.length-1],V=g.blockers.get(B);if(!(V&&V.state==="proceeding")&&W({currentLocation:S,nextLocation:k,historyAction:L}))return B}function ba(w){let S=[];return Be.forEach((k,L)=>{(!w||w(L))&&(k.cancel(),S.push(L),Be.delete(L))}),S}function h0(w,S,k){if(a=w,d=S,u=k||(L=>L.key),!c&&g.navigation===Nu){c=!0;let L=Gh(g.location,g.matches);L!=null&&b({restoreScrollPosition:L})}return()=>{a=null,d=null,u=null}}function f0(w,S){if(a&&u&&d){let k=S.map(M=>Em(M,g.loaderData)),L=u(w,k)||w.key;a[L]=d()}}function Gh(w,S){if(a&&u&&d){let k=S.map(B=>Em(B,g.loaderData)),L=u(w,k)||w.key,M=a[L];if(typeof M=="number")return M}return null}function p0(w){i=w}return y={get basename(){return t.basename},get state(){return g},get routes(){return r},initialize:qt,subscribe:H,enableScrollRestoration:h0,navigate:ye,fetch:l0,revalidate:Mr,createHref:w=>t.history.createHref(w),encodeLocation:w=>t.history.encodeLocation(w),getFetcher:tr,deleteFetcher:Ma,dispose:A,getBlocker:d0,deleteBlocker:Fi,_internalFetchControllers:R,_internalActiveDeferreds:Be,_internalSetRoutes:p0},y}function vN(t){return t!=null&&"formData"in t}function hm(t,e,n,r){r===void 0&&(r=!1);let i=typeof t=="string"?t:xr(t);if(!n||!vN(n))return{path:i};if(n.formMethod&&!kN(n.formMethod))return{path:i,error:jt(405,{method:n.formMethod})};let s;if(n.formData){let a=n.formMethod||"get";if(s={formMethod:e.v7_normalizeFormMethod?a.toUpperCase():a.toLowerCase(),formAction:t0(i),formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:n.formData},en(s.formMethod))return{path:i,submission:s}}let o=Yt(i),l=e0(n.formData);return r&&o.search&&r0(o.search)&&l.append("index",""),o.search="?"+l,{path:xr(o),submission:s}}function yN(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function fm(t,e,n,r,i,s,o,l,a,u,d,c,h){let _=h?Object.values(h)[0]:c?Object.values(c)[0]:void 0,v=t.createURL(e.location),y=t.createURL(i),g=s||v.toString()===y.toString()||v.search!==y.search,p=h?Object.keys(h)[0]:void 0,m=yN(n,p).filter((C,P)=>{if(C.route.lazy)return!0;if(C.route.loader==null)return!1;if(wN(e.loaderData,e.matches[P],C)||o.some(J=>J===C.route.id))return!0;let x=e.matches[P],R=C;return pm(C,X({currentUrl:v,currentParams:x.params,nextUrl:y,nextParams:R.params},r,{actionResult:_,defaultShouldRevalidate:g||Zy(x,R)}))}),E=[];return a.forEach((C,P)=>{if(!n.some(j=>j.route.id===C.routeId))return;let x=Zr(u,C.path,d);if(!x){E.push(X({key:P},C,{matches:null,match:null}));return}let R=Gc(x,C.path);if(l.includes(P)){E.push(X({key:P,matches:x,match:R},C));return}pm(R,X({currentUrl:v,currentParams:e.matches[e.matches.length-1].params,nextUrl:y,nextParams:n[n.length-1].params},r,{actionResult:_,defaultShouldRevalidate:g}))&&E.push(X({key:P,matches:x,match:R},C))}),[m,E]}function wN(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function Zy(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function pm(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function mm(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];G(i,"No route found in manifest");let s={};for(let o in r){let a=i[o]!==void 0&&o!=="hasErrorBoundary";Pr(!a,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!a&&!jR.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,{hasErrorBoundary:e(X({},i)),lazy:void 0})}async function Zi(t,e,n,r,i,s,o,l,a,u){o===void 0&&(o="/"),l===void 0&&(l=!1),a===void 0&&(a=!1);let d,c,h,_=g=>{let p,f=new Promise((m,E)=>p=E);return h=()=>p(),e.signal.addEventListener("abort",h),Promise.race([g({request:e,params:n.params,context:u}),f])};try{let g=n.route[t];if(n.route.lazy)if(g)c=(await Promise.all([_(g),mm(n.route,s,i)]))[0];else if(await mm(n.route,s,i),g=n.route[t],g)c=await _(g);else{if(t==="action")throw jt(405,{method:e.method,pathname:new URL(e.url).pathname,routeId:n.route.id});return{type:Ce.data,data:void 0}}else G(g,"Could not find the "+t+' to run on the "'+n.route.id+'" route'),c=await _(g);G(c!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(g){d=Ce.error,c=g}finally{h&&e.signal.removeEventListener("abort",h)}if(IN(c)){let g=c.status;if(hN.has(g)){let m=c.headers.get("Location");if(G(m,"Redirects returned/thrown from loaders/actions must have a Location header"),Xy.test(m)){if(!l){let E=new URL(e.url),C=m.startsWith("//")?new URL(E.protocol+m):new URL(m),P=Pa(C.pathname,o)!=null;C.origin===E.origin&&P&&(m=C.pathname+C.search+C.hash)}}else{let E=r.slice(0,r.indexOf(n)+1),C=bh(E).map(x=>x.pathnameBase),P=Qy(m,C,new URL(e.url).pathname);if(G(xr(P),"Unable to resolve redirect location: "+m),o){let x=P.pathname;P.pathname=x==="/"?o:Vn([o,x])}m=xr(P)}if(l)throw c.headers.set("Location",m),c;return{type:Ce.redirect,status:g,location:m,revalidate:c.headers.get("X-Remix-Revalidate")!==null}}if(a)throw{type:d||Ce.data,response:c};let p,f=c.headers.get("Content-Type");return f&&/\bapplication\/json\b/.test(f)?p=await c.json():p=await c.text(),d===Ce.error?{type:d,error:new Fh(g,c.statusText,p),headers:c.headers}:{type:Ce.data,data:p,statusCode:c.status,headers:c.headers}}if(d===Ce.error)return{type:d,error:c};if(CN(c)){var v,y;return{type:Ce.deferred,deferredData:c,statusCode:(v=c.init)==null?void 0:v.status,headers:((y=c.init)==null?void 0:y.headers)&&new Headers(c.init.headers)}}return{type:Ce.data,data:c}}function es(t,e,n,r){let i=t.createURL(t0(e)).toString(),s={signal:n};if(r&&en(r.formMethod)){let{formMethod:o,formEncType:l,formData:a}=r;s.method=o.toUpperCase(),s.body=l==="application/x-www-form-urlencoded"?e0(a):a}return new Request(i,s)}function e0(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,r instanceof File?r.name:r);return e}function EN(t,e,n,r,i){let s={},o=null,l,a=!1,u={};return n.forEach((d,c)=>{let h=e[c].route.id;if(G(!hi(d),"Cannot handle redirect results in processLoaderData"),Es(d)){let _=ei(t,h),v=d.error;r&&(v=Object.values(r)[0],r=void 0),o=o||{},o[_.route.id]==null&&(o[_.route.id]=v),s[h]=void 0,a||(a=!0,l=Yy(d.error)?d.error.status:500),d.headers&&(u[h]=d.headers)}else hr(d)?(i.set(h,d.deferredData),s[h]=d.deferredData.data):s[h]=d.data,d.statusCode!=null&&d.statusCode!==200&&!a&&(l=d.statusCode),d.headers&&(u[h]=d.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:l||200,loaderHeaders:u}}function gm(t,e,n,r,i,s,o,l){let{loaderData:a,errors:u}=EN(e,n,r,i,l);for(let d=0;d<s.length;d++){let{key:c,match:h}=s[d];G(o!==void 0&&o[d]!==void 0,"Did not find corresponding fetcher result");let _=o[d];if(Es(_)){let v=ei(t.matches,h==null?void 0:h.route.id);u&&u[v.route.id]||(u=X({},u,{[v.route.id]:_.error})),t.fetchers.delete(c)}else if(hi(_))G(!1,"Unhandled fetcher revalidation redirect");else if(hr(_))G(!1,"Unhandled fetcher deferred data");else{let v={state:"idle",data:_.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};t.fetchers.set(c,v)}}return{loaderData:a,errors:u}}function _m(t,e,n,r){let i=X({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function ei(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function vm(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function jt(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",l="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?l="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"&&(l="defer() is not supported in actions")):t===403?(o="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",l='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?l="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new Fh(t||500,o,new Error(l),!0)}function ym(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(hi(n))return n}}function t0(t){let e=typeof t=="string"?Yt(t):t;return xr(X({},e,{hash:""}))}function SN(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash!==e.hash}function hr(t){return t.type===Ce.deferred}function Es(t){return t.type===Ce.error}function hi(t){return(t&&t.type)===Ce.redirect}function CN(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function IN(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function kN(t){return dN.has(t.toLowerCase())}function en(t){return uN.has(t.toLowerCase())}async function wm(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let l=n[o],a=e[o];if(!a)continue;let u=t.find(c=>c.route.id===a.route.id),d=u!=null&&!Zy(u,a)&&(s&&s[a.route.id])!==void 0;hr(l)&&(i||d)&&await n0(l,r,i).then(c=>{c&&(n[o]=c||n[o])})}}async function n0(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Ce.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Ce.error,error:i}}return{type:Ce.data,data:t.deferredData.data}}}function r0(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Em(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function Gc(t,e){let n=typeof e=="string"?Yt(e).search:e.search;if(t[t.length-1].route.index&&r0(n||""))return t[t.length-1];let r=bh(t);return r[r.length-1]}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function TN(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const RN=typeof Object.is=="function"?Object.is:TN,{useState:NN,useEffect:PN,useLayoutEffect:xN,useDebugValue:DN}=xu;function AN(t,e,n){const r=e(),[{inst:i},s]=NN({inst:{value:r,getSnapshot:e}});return xN(()=>{i.value=r,i.getSnapshot=e,Pu(i)&&s({inst:i})},[t,r,e]),PN(()=>(Pu(i)&&s({inst:i}),t(()=>{Pu(i)&&s({inst:i})})),[t]),DN(r),r}function Pu(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!RN(n,r)}catch{return!0}}function ON(t,e,n){return e()}const LN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",MN=!LN,bN=MN?ON:AN,FN="useSyncExternalStore"in xu?(t=>t.useSyncExternalStore)(xu):bN,Uh=I.createContext(null),zh=I.createContext(null),Bh=I.createContext(null),xa=I.createContext(null),Lr=I.createContext({outlet:null,matches:[]}),i0=I.createContext(null);function Kc(){return Kc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Kc.apply(this,arguments)}function Da(){return I.useContext(xa)!=null}function s0(){return Da()||G(!1),I.useContext(xa).location}function Eo(){Da()||G(!1);let{basename:t,navigator:e}=I.useContext(Bh),{matches:n}=I.useContext(Lr),{pathname:r}=s0(),i=JSON.stringify(bh(n).map(l=>l.pathnameBase)),s=I.useRef(!1);return I.useEffect(()=>{s.current=!0}),I.useCallback(function(l,a){if(a===void 0&&(a={}),!s.current)return;if(typeof l=="number"){e.go(l);return}let u=Qy(l,JSON.parse(i),r,a.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Vn([t,u.pathname])),(a.replace?e.replace:e.push)(u,a.state,a)},[t,e,i,r])}const UN=I.createContext(null);function zN(t){let e=I.useContext(Lr).outlet;return e&&I.createElement(UN.Provider,{value:t},e)}function BN(){let{matches:t}=I.useContext(Lr),e=t[t.length-1];return e?e.params:{}}function WN(t,e){Da()||G(!1);let{navigator:n}=I.useContext(Bh),r=I.useContext(zh),{matches:i}=I.useContext(Lr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=s0(),u;if(e){var d;let y=typeof e=="string"?Yt(e):e;l==="/"||(d=y.pathname)!=null&&d.startsWith(l)||G(!1),u=y}else u=a;let c=u.pathname||"/",h=l==="/"?c:c.slice(l.length)||"/",_=Zr(t,{pathname:h}),v=VN(_&&_.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Vn([l,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:Vn([l,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return e&&v?I.createElement(xa.Provider,{value:{location:Kc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ee.Pop}},v):v}function jN(){let t=YN(),e=Yy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,s)}class $N extends I.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?I.createElement(Lr.Provider,{value:this.props.routeContext},I.createElement(i0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function HN(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(Uh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(Lr.Provider,{value:e},r)}function VN(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||G(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,l)=>{let a=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=I.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=I.createElement(jN,null));let d=e.concat(r.slice(0,l+1)),c=()=>{let h=s;return a?h=u:o.route.Component?h=I.createElement(o.route.Component,null):o.route.element&&(h=o.route.element),I.createElement(HN,{match:o,routeContext:{outlet:s,matches:d},children:h})};return n&&(o.route.ErrorBoundary||o.route.errorElement||l===0)?I.createElement($N,{location:n.location,component:u,error:a,children:c(),routeContext:{outlet:null,matches:d}}):c()},null)}var Sm;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(Sm||(Sm={}));var Jl;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Jl||(Jl={}));function GN(t){let e=I.useContext(zh);return e||G(!1),e}function KN(t){let e=I.useContext(Lr);return e||G(!1),e}function QN(t){let e=KN(),n=e.matches[e.matches.length-1];return n.route.id||G(!1),n.route.id}function YN(){var t;let e=I.useContext(i0),n=GN(Jl.UseRouteError),r=QN(Jl.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function qN(t){let{fallbackElement:e,router:n}=t,r=I.useCallback(()=>n.state,[n]),i=FN(n.subscribe,r,r),s=I.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:a=>n.navigate(a),push:(a,u,d)=>n.navigate(a,{state:u,preventScrollReset:d==null?void 0:d.preventScrollReset}),replace:(a,u,d)=>n.navigate(a,{replace:!0,state:u,preventScrollReset:d==null?void 0:d.preventScrollReset})}),[n]),o=n.basename||"/",l=I.useMemo(()=>({router:n,navigator:s,static:!1,basename:o}),[n,s,o]);return I.createElement(I.Fragment,null,I.createElement(Uh.Provider,{value:l},I.createElement(zh.Provider,{value:i},I.createElement(ZN,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:s},n.state.initialized?I.createElement(eP,null):e))),null)}function XN(t){return zN(t.context)}function JN(t){G(!1)}function ZN(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ee.Pop,navigator:s,static:o=!1}=t;Da()&&G(!1);let l=e.replace(/^\/*/,"/"),a=I.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=Yt(r));let{pathname:u="/",search:d="",hash:c="",state:h=null,key:_="default"}=r,v=I.useMemo(()=>{let y=Pa(u,l);return y==null?null:{location:{pathname:y,search:d,hash:c,state:h,key:_},navigationType:i}},[l,u,d,c,h,_,i]);return v==null?null:I.createElement(Bh.Provider,{value:a},I.createElement(xa.Provider,{children:n,value:v}))}function eP(t){let{children:e,location:n}=t,r=I.useContext(Uh),i=r&&!e?r.router.routes:Qc(e);return WN(i,n)}var Cm;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Cm||(Cm={}));new Promise(()=>{});function Qc(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,Qc(r.props.children,s));return}r.type!==JN&&G(!1),!r.props.index||!r.props.children||G(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Qc(r.props.children,s)),n.push(o)}),n}function tP(t){return!!t.ErrorBoundary||!!t.errorElement}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yc(){return Yc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yc.apply(this,arguments)}function nP(t,e){return _N({basename:e==null?void 0:e.basename,future:e==null?void 0:e.future,history:zR({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||rP(),routes:t,detectErrorBoundary:tP}).initialize()}function rP(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Yc({},e,{errors:iP(e.errors)})),e}function iP(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Fh(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let s=new Error(i.message);s.stack="",n[r]=s}else n[r]=i;return n}var Im;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Im||(Im={}));var km;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(km||(km={}));const sP=()=>{const[t,e]=I.useState(""),[n,r]=I.useState(""),i=Eo();function s(){dI(Xl,t,n).then(({user:l})=>{Hn(ct(dt,"users/"+l.uid),{email:t}),i("/dashboard")})}function o(){hI(Xl,t,n).then(()=>{i("/dashboard"),location.reload()})}return de("div",{className:"login",children:[D("div",{className:"header",children:"Login / Create Account"}),de("div",{className:"content",children:[D("input",{type:"email",value:t,onChange:l=>e(l.target.value),placeholder:"Email"}),D("input",{type:"password",value:n,onChange:l=>r(l.target.value),placeholder:"Password"}),de("div",{className:"login-controls",children:[D("button",{className:"secondary",onClick:s,children:"Create Account"}),D("button",{onClick:o,children:"Sign In"})]})]})]})},Wh=I.createContext({lat:0,lon:0}),Aa=I.createContext(null),o0=()=>de("div",{children:[D("div",{className:"header",children:"Geo-Todos App"}),de("div",{className:"help",children:[D("p",{children:"Welcome to the Geo-Todos App! Here you can keep track of all your tasks, and separate them by location! Not at work?? Not a problem! You can leave your work at work and not even have to worry about those tasks at home!"}),D("p",{children:`Once signed in, come back to the home page and you will see your dashboard. To the left you will see a list of all your given locations. Don't worry if you don't have any, simply click "Add Location" and enter the latitude and longitude and give it a name to get started! The "Edit Locations" button gives you the chance to delete insignificant locations you no longer need. Clicking on a location will show all associated todos.`}),D("p",{children:'Then you have the opportunity to add tasks for yourself for all locations you have! Simply click the "Create Todo" button on the right sidebar and you can add any tasks for any location, and if you need to add a new one on the fly, you can do that too! Just give us a name and we will set up your current location to recieve tasks!'}),D("p",{children:"The center of the page contains a list of all todos associated with the currently selected location. Todos in green are completed, and todos in blue are yet to be finished. Clicking on a todo will take you to the details page of the todo, where you can update the task, complete it, or even delete it if it is out of scope!"}),D("p",{children:"We hope you enjoy, and may your productivity Soar beyond previous limits!"})]})]}),Tm=()=>{const t=I.useContext(Aa),e=I.useContext(Wh),n={latitude:Math.round(e.lat*1e3)/1e3,longitude:Math.round(e.lon*1e3)/1e3,name:"",todos:""},[r,i]=I.useState(n),s=Eo(),[o,l]=I.useState(!1),[a,u]=I.useState(!1),[d,c]=I.useState(e.lat),[h,_]=I.useState(e.lon),[v,y]=I.useState(""),[g,p]=I.useState([]),[f,m]=I.useState([]),[E,C]=I.useState(!1),[P,x]=I.useState(!!t);I.useEffect(()=>{x(t!==null)},[t]),I.useEffect(()=>{Lh(ki(ct(dt),`users/${t==null?void 0:t.uid}/locations`)).then($=>{try{const Le=$.val();let Me=[],Be=-1;for(let _t of Object.keys(Le)){let vt=Le[_t];Me.push(vt),fetch(`https://api.mapbox.com/directions/v5/mapbox/cycling/${e.lon},${e.lat};${vt.longitude},${vt.latitude}?access_token=pk.eyJ1IjoiYWdnaWVmYW45IiwiYSI6ImNsaDZydzFndDA4dTQzbG9uaGVnNTV4dW4ifQ.fEcntaUyjN4QsE3OvfDHcw`).then(qt=>qt.json()).then(qt=>{let A=qt.routes[0].distance;(Be<0||A<Be)&&(Be=A,R(vt))})}p(Me),C(!1)}catch{p([]),m([]),i(n),C(!1)}})},[E]);function R($){let Le=[];for(let Me of Object.keys($.todos)){let Be=$.todos[Me];Le.push(Be)}i($),m(Le)}function J($){Hc(ct(dt,`/users/${t==null?void 0:t.uid}/locations/${$.name}`)),C(!0)}function j(){if(v!==""){let $={name:v,latitude:Math.round(d*1e3)/1e3,longitude:Math.round(h*1e3)/1e3,todos:""};Hn(ct(dt,`/users/${t==null?void 0:t.uid}/locations/${$.name}`),$),p([...g,$]),c(e.lat),_(e.lon),y(""),C(!0)}}return D($0,{children:P?de("div",{className:"dashboard",children:[D("div",{className:"header",children:"Dashboard"}),de("div",{className:"side-bar-container",children:[de("div",{className:"side-bar",children:[D("div",{children:"Locations"}),de("div",{className:"list",children:[D("button",{className:"action",onClick:()=>l(!o),children:o?"Confirm":"Edit Locations"}),D("div",{children:g.map($=>de("div",{className:"location",children:[o?D("button",{className:"action",onClick:()=>J($),children:"x"}):D("div",{}),D("div",{className:"loc-text",onClick:()=>R($),children:`${$.name}`})]},$.name))}),D("button",{className:"action",onClick:()=>{a&&j(),u(!a)},children:a?"Save":"Add Location"}),D("div",{children:a?D("div",{children:de("form",{children:[D("div",{children:"Latitude"}),D("input",{type:"number",value:d,onChange:$=>c(+$.target.value)}),D("div",{children:"Longitude"}),D("input",{type:"number",value:h,onChange:$=>_(+$.target.value)}),D("div",{children:"Name"}),D("input",{type:"text",value:v,onChange:$=>y($.target.value)})]})}):D("div",{})})]})]}),de("div",{className:"main-content",children:[de("div",{className:"sub-header",children:["Location: ",r.name," (",r.longitude,",",r.latitude,")"]}),D("div",{children:f.map($=>D("div",{className:`todo ${$.isComplete?"complete":""}`,onClick:()=>s(`/todo/${r.name}/${$.message}`),children:$.message},$.message))})]}),de("div",{className:"side-bar",children:[D("div",{children:"Actions"}),D("button",{onClick:()=>s("/todo/create"),children:"Create Todo"})]})]})]}):D(o0,{})})},oP=()=>{const t=BN(),e=I.useContext(Aa),n=Eo(),[r,i]=I.useState(""),[s,o]=I.useState(""),[l,a]=I.useState(!1),[u,d]=I.useState(!1);I.useEffect(()=>{Lh(ki(ct(dt),`users/${e==null?void 0:e.uid}/locations/${t.location}/todos/${t.message}`)).then(v=>{i(v.val().message),o(v.val().message),a(v.val().isComplete)})},[]);function c(){Hn(ct(dt,`/users/${e==null?void 0:e.uid}/locations/${t.location}/todos/${r}`),{isComplete:!l,message:r}).then(()=>{n("/dashboard")})}function h(){Hc(ct(dt,`/users/${e==null?void 0:e.uid}/locations/${t.location}/todos/${s}`)),Hn(ct(dt,`/users/${e==null?void 0:e.uid}/locations/${t.location}/todos/${r}`),{isComplete:l,message:r}).then(()=>{d(!1),o(r)})}function _(){Hc(ct(dt,`/users/${e==null?void 0:e.uid}/locations/${t.location}/todos/${r}`)).then(()=>{n("/dashboard")})}return D("div",{children:u?de("div",{children:[de("div",{className:"detail",children:["Todo: ",D("input",{className:"edit-detail",type:"text",value:r,onChange:v=>i(v.target.value)})]}),de("div",{className:"detail",children:["IS COMPLETE: ",l?"Yes":"No"]}),D("button",{onClick:()=>h(),children:"Save"})]}):de("div",{children:[de("div",{className:"detail",children:["Todo: ",r]}),de("div",{className:"detail",children:["IS COMPLETE: ",l?"Yes":"No"]}),D("button",{onClick:()=>_(),children:"Delete"}),D("button",{onClick:()=>c(),children:l?"Uncomplete This task":"Complete This Task?"}),D("button",{onClick:()=>d(!0),children:"Edit"})]})})},lP=()=>{const t=Eo(),e=I.useContext(Aa),n=I.useContext(Wh),[r,i]=I.useState(""),[s,o]=I.useState([""]),[l,a]=I.useState(""),[u,d]=I.useState("");I.useEffect(()=>{Lh(ki(ct(dt),`users/${e==null?void 0:e.uid}/locations`)).then(h=>{o(Object.keys(h.val()))})},[]);function c(){l===""?Hn(ct(dt,`/users/${e==null?void 0:e.uid}/locations/${u}`),{name:u,latitude:Math.round(n.lat*1e3)/1e3,longitude:Math.round(n.lon*1e3)/1e3}).then(()=>{Hn(ct(dt,`/users/${e==null?void 0:e.uid}/locations/${u}/todos/${r}`),{message:r,isComplete:!1})}).then(()=>{t("/dashboard")}):Hn(ct(dt,`/users/${e==null?void 0:e.uid}/locations/${l}/todos/${r}`),{message:r,isComplete:!1}).then(()=>{t("/dashboard")})}return de("div",{children:[D("h1",{children:"Welcome to the Create a Todo Page!"}),D("span",{children:"Message:"}),D("input",{type:"text",onChange:h=>i(h.target.value)}),D("br",{}),D("span",{children:"Location:"}),de("select",{name:"location",id:"location",onChange:h=>a(h.target.value),children:[D("option",{value:""}),s.map(h=>D("option",{value:h,children:h}))]}),l===""&&de("div",{children:[D("span",{children:"Name your Current Location:"}),D("input",{type:"text",onChange:h=>d(h.target.value)})]}),D("br",{}),D("button",{onClick:()=>c(),children:"Save"})]})},aP=()=>{const[t,e]=I.useState(null),[n,r]=I.useState(!0),i=Eo();return I.useEffect(()=>mI(Xl,o=>{r(!1),e(o!==null?o:null)}),[n]),D(Aa.Provider,{value:t,children:de("div",{className:"container",children:[de("nav",{className:"top",children:[D("button",{onClick:()=>i("/help"),children:"Help"}),D("button",{onClick:()=>i("/dashboard"),children:"Home"}),D("button",{onClick:()=>i("/login"),children:"Login"}),D("button",{onClick:()=>gI(Xl),children:"Logout"})]}),n?D("div",{children:"Loading..."}):D(XN,{})]})})},uP=nP([{path:"/",element:D(aP,{}),children:[{path:"/",element:D(Tm,{})},{path:"/login",element:D(sP,{})},{path:"/dashboard",element:D(Tm,{})},{path:"/todo/:location/:message",element:D(oP,{})},{path:"/todo/create",element:D(lP,{})},{path:"/help",element:D(o0,{})}]}]);function cP(){const[t,e]=I.useState(0),[n,r]=I.useState(0),[i,s]=I.useState(!1);return I.useEffect(()=>{navigator.geolocation.getCurrentPosition(o=>{s(!0),e(o.coords.latitude),r(o.coords.longitude)},o=>{console.log(o)},{enableHighAccuracy:!0})},[]),D(Wh.Provider,{value:{lat:t,lon:n},children:D("div",{className:"App",children:D(qN,{router:uP})})})}Du.createRoot(document.getElementById("root")).render(D(Lm.StrictMode,{children:D(cP,{})}));
