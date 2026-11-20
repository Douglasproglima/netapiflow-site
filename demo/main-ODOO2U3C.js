import{$ as Pm,$n as tD,A as Ht$2,An as kr$1,At as Z$2,B as KI,Bn as nn$2,Bt as _p,C as Fp,Cr as ze$2,Ct as WI,D as Hd,E as Gt$2,En as ji$1,Et as Xi$1,F as Im,Fn as mg,Ft as _,G as Mg,Gn as pe$2,Gt as ae$1,H as L$1,Hn as oI,Ht as a0,I as JE,In as mp,It as _c,J as Nl,Jn as qp,Jt as b$1,K as N,Kn as q$3,Kt as av,L as Ji$1,Ln as mu,Lt as _g,M as II,Mn as lD,N as Ig,Nn as ln$2,Nt as Zh,O as Hg,On as kI,Ot as Ye$1,P as Il,Pn as m0,Pt as Zv,Q as Ph,Qn as si$2,Qt as br,R as Jp,Rt as _i$2,S as FE,Sn as iD,Sr as yt$1,St as Vu,T as G$3,U as Lc,Un as p0,Ut as aD,V as Ki$1,Vn as ns,Vt as _u,W as Lp,Wn as pI,X as OE,Xt as bg,Y as Np,Z as Pe$3,Zt as bp,_ as Dy,_r as y0,a as Ar,ar as uh,at as Sg,b as El,br as ym,bt as Vn$2,cr as vg,d as Cc,dn as g,dr as wI,en as cD,er as te,et as QD,f as Cg,fn as g0,fr as wr,ft as Uu,g as Dn$2,gn as gu,gr as xr,h as Dg,hn as gp,hr as xi$2,ht as Va,i as Ap,in as ct$2,ir as uD,it as Sc,jn as l0,jt as ZD,k as Hp,kn as kp,kt as Yi$1,l as Bu,ln as es,lt as Tp,m as DI,mn as gg,mr as xg,mt as VE,nn as cf,nr as tn$2,nt as Re$3,o as As,on as eD,or as ut$4,ot as Sp,p as Cp,pn as gI,pr as xe$2,pt as V$1,q as Ng,qn as qe$3,r as Ac,rt as Rp,s as At$2,sr as vI,st as Su,t as $n$2,tt as Rc,u as By,un as ey,ur as vt$2,ut as Un$2,vn as hD,vr as yI,vt as Vh,w as Fr,wn as ie$1,wr as zo$1,wt as Wp,x as Em,xn as hn$2,xr as yp,xt as Vp,y as Ei$1,yn as he$3,yr as yg,yt as Vi$1,z as K$1,zn as nI,zt as _n$3}from"./chunk-pLN7f8QD.js";import{a as ue$2,i as it$2,n as A,r as Zt$2,t as $e$1}from"./chunk-CDy7YA77.js";import{n as y$1,t as I}from"./chunk-BdXIhzDe.js";var xt;try{xt=typeof Intl<`u`&&Intl.v8BreakIterator}catch{xt=!1}var h=(()=>{class e{_platformId=g(Em);isBrowser=this._platformId?it$2(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||xt)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(n){return new(n||e)};static ɵprov=ut$4({token:e,factory:e.ɵfac})}return e})();function St$1(e){return Array.isArray(e)?e:[e]}var pe$1=/* @__PURE__ */ new Set;var R;var mt$2=(()=>{class e{_platform=g(h);_nonce=g(Bu,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):qe$2}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&Ye(t,this._nonce),this._matchMedia(t)}static ɵfac=function(n){return new(n||e)};static ɵprov=ut$4({token:e,factory:e.ɵfac})}return e})();function Ye(e,a){if(!pe$1.has(e))try{R||(R=document.createElement(`style`),a&&R.setAttribute(`nonce`,a),R.setAttribute(`type`,`text/css`),document.head.appendChild(R)),R.sheet&&(R.sheet.insertRule(`@media ${e.replace(/[{}]/g,``)} {body{ }}`,0),pe$1.add(e))}catch(t){console.error(t)}}function qe$2(e){return{matches:e===`all`||e===``,media:e,addListener:()=>{},removeListener:()=>{}}}var Nt$1=(()=>{class e{_mediaMatcher=g(mt$2);_zone=g(he$3);_queries=/* @__PURE__ */ new Map;_destroySubject=new K$1;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return fe$1(St$1(t)).some(o=>this._registerQuery(o).mql.matches)}observe(t){let o=fe$1(St$1(t)).map(s=>this._registerQuery(s).observable),r=vg(o);return r=tn$2(r.pipe(nn$2(1)),r.pipe(xg(1),Il(0))),r.pipe(te(s=>{let c={matches:!1,breakpoints:{}};return s.forEach(({matches:g,query:S})=>{c.matches=c.matches||g,c.breakpoints[S]=g}),c}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let n=this._mediaMatcher.matchMedia(t),r={observable:new N(s=>{let c=g=>this._zone.run(()=>s.next(g));return n.addListener(c),()=>{n.removeListener(c)}}).pipe(Nl(n),te(({matches:s})=>({query:t,matches:s})),_g(this._destroySubject)),mql:n};return this._queries.set(t,r),r}static ɵfac=function(n){return new(n||e)};static ɵprov=ut$4({token:e,factory:e.ɵfac})}return e})();function fe$1(e){return e.map(a=>a.split(`,`)).reduce((a,t)=>a.concat(t)).map(a=>a.trim())}function W$1(e){return e.buttons===0||e.detail===0}function Z$1(e){let a=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!a&&a.identifier===-1&&(a.radiusX==null||a.radiusX===1)&&(a.radiusY==null||a.radiusY===1)}var wt$2;function he$2(){if(wt$2==null){let e=typeof document<`u`?document.head:null;wt$2=!!(e&&(e.createShadowRoot||e.attachShadow))}return wt$2}function Et$1(e){if(he$2()){let a=e.getRootNode?e.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&a instanceof ShadowRoot)return a}return null}function Qe(){let e=typeof document<`u`&&document?document.activeElement:null;for(;e&&e.shadowRoot;){let a=e.shadowRoot.activeElement;if(a===e)break;e=a}return e}function y(e){if(e.composedPath)try{return e.composedPath()[0]}catch{}return e.target}var G$2;function ve$1(){if(G$2==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>G$2=!0}))}finally{G$2=G$2||!1}return G$2}function z(e){return ve$1()?e:!!e.capture}function Xe$1(e,a=0){return ge$1(e)?Number(e):arguments.length===2?a:0}function ge$1(e){return!isNaN(parseFloat(e))&&!isNaN(Number(e))}function k(e){return e instanceof xr?e.nativeElement:e}var ye$1=new _(`cdk-input-modality-detector-options`);var _e$1={ignoreKeys:[18,17,224,91,16]};var xe$1=650;var It$1={passive:!0,capture:!0};var Se$3=(()=>{class e{_platform=g(h);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Un$2(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(n=>n===t.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=y(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<xe$1||(this._modality.next(W$1(t)?`keyboard`:`mouse`),this._mostRecentTarget=y(t))};_onTouchstart=t=>{if(Z$1(t)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=y(t)};constructor(){let t=g(he$3),n=g(qe$3),o=g(ye$1,{optional:!0});if(this._options=V$1(V$1({},_e$1),o),this.modalityDetected=this._modality.pipe(xg(1)),this.modalityChanged=this.modalityDetected.pipe(bg()),this._platform.isBrowser){let r=g(wr).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[r.listen(n,`keydown`,this._onKeydown,It$1),r.listen(n,`mousedown`,this._onMousedown,It$1),r.listen(n,`touchstart`,this._onTouchstart,It$1)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static ɵfac=function(n){return new(n||e)};static ɵprov=ut$4({token:e,factory:e.ɵfac})}return e})();var $$3=(function(e){return e[e.IMMEDIATE=0]=`IMMEDIATE`,e[e.EVENTUAL=1]=`EVENTUAL`,e})($$3||{});var Ne$2=new _(`cdk-focus-monitor-default-options`);var dt$2=z({passive:!0,capture:!0});var At$1=(()=>{class e{_ngZone=g(he$3);_platform=g(h);_inputModalityDetector=g(Se$3);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=/* @__PURE__ */ new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=/* @__PURE__ */ new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=g(qe$3);_stopInputModalityDetector=new K$1;constructor(){let t=g(Ne$2,{optional:!0});this._detectionMode=t?.detectionMode||$$3.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let n=y(t);for(let o=n;o;o=o.parentElement)t.type===`focus`?this._onFocus(t,o):this._onBlur(t,o)};monitor(t,n=!1){let o=k(t);if(!this._platform.isBrowser||o.nodeType!==1)return Yi$1();let r=Et$1(o)||this._document,s=this._elementInfo.get(o);if(s)return n&&(s.checkChildren=!0),s.subject;let c={checkChildren:n,subject:new K$1,rootNode:r};return this._elementInfo.set(o,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(t){let n=k(t),o=this._elementInfo.get(n);o&&(o.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(o))}focusVia(t,n,o){let r=k(t);r===this._document.activeElement?this._getClosestElementsInfo(r).forEach(([c,g])=>this._originChanged(c,n,g)):(this._setOrigin(n),typeof r.focus==`function`&&r.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?`mouse`:`program`}_shouldBeAttributedToTouch(t){return this._detectionMode===$$3.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,n){t.classList.toggle(`cdk-focused`,!!n),t.classList.toggle(`cdk-touch-focused`,n===`touch`),t.classList.toggle(`cdk-keyboard-focused`,n===`keyboard`),t.classList.toggle(`cdk-mouse-focused`,n===`mouse`),t.classList.toggle(`cdk-program-focused`,n===`program`)}_setOrigin(t,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t===`touch`&&n,this._detectionMode===$$3.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?xe$1:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,n){let o=this._elementInfo.get(n),r=y(t);!o||!o.checkChildren&&n!==r||this._originChanged(n,this._getFocusOrigin(r),o)}_onBlur(t,n){let o=this._elementInfo.get(n);!o||o.checkChildren&&t.relatedTarget instanceof Node&&n.contains(t.relatedTarget)||(this._setClasses(n),this._emitOrigin(o,null))}_emitOrigin(t,n){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(n))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let n=t.rootNode,o=this._rootNodeFocusListenerCount.get(n)||0;o||this._ngZone.runOutsideAngular(()=>{n.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,dt$2),n.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,dt$2)}),this._rootNodeFocusListenerCount.set(n,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(_g(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(t){let n=t.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let o=this._rootNodeFocusListenerCount.get(n);o>1?this._rootNodeFocusListenerCount.set(n,o-1):(n.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,dt$2),n.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,dt$2),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,n,o){this._setClasses(t,n),this._emitOrigin(o,n),this._lastFocusOrigin=n}_getClosestElementsInfo(t){let n=[];return this._elementInfo.forEach((o,r)=>{(r===t||o.checkChildren&&r.contains(t))&&n.push([r,o])}),n}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:n,mostRecentModality:o}=this._inputModalityDetector;if(o!==`mouse`||!n||n===t||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`||t.disabled)return!1;let r=t.labels;if(r){for(let s=0;s<r.length;s++)if(r[s].contains(n))return!0}return!1}static ɵfac=function(n){return new(n||e)};static ɵprov=ut$4({token:e,factory:e.ɵfac})}return e})();var lt$2=/* @__PURE__ */ new WeakMap;var O=(()=>{class e{_appRef;_injector=g(pe$2);_environmentInjector=g(ie$1);load(t){let n=this._appRef=this._appRef||this._injector.get(_i$2),o=lt$2.get(n);o||(o={loaders:/* @__PURE__ */ new Set,refs:[]},lt$2.set(n,o),n.onDestroy(()=>{lt$2.get(n)?.refs.forEach(r=>r.destroy()),lt$2.delete(n)})),o.loaders.has(t)||(o.loaders.add(t),o.refs.push(y0(t,{environmentInjector:this._environmentInjector})))}static ɵfac=function(n){return new(n||e)};static ɵprov=ut$4({token:e,factory:e.ɵfac})}return e})();var we=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵcmp=OE({type:e,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(n,o){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return e})();var Je$1=(()=>{class e{create(t){return typeof MutationObserver>`u`?null:new MutationObserver(t)}static ɵfac=function(n){return new(n||e)};static ɵprov=ut$4({token:e,factory:e.ɵfac})}return e})();var Ee$1=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=yp({type:e});static ɵinj=As({providers:[Je$1]})}return e})();var ke$2=(()=>{class e{_platform=g(h);isDisabled(t){return t.hasAttribute(`disabled`)}isVisible(t){return en$1(t)&&getComputedStyle(t).visibility===`visible`}isTabbable(t){if(!this._platform.isBrowser)return!1;let n=tn$1(dn$1(t));if(n&&(Ie$1(n)===-1||!this.isVisible(n)))return!1;let o=t.nodeName.toLowerCase(),r=Ie$1(t);return t.hasAttribute(`contenteditable`)?r!==-1:o===`iframe`||o===`object`||this._platform.WEBKIT&&this._platform.IOS&&!cn$1(t)?!1:o===`audio`?t.hasAttribute(`controls`)?r!==-1:!1:o===`video`?r===-1?!1:r!==null?!0:this._platform.FIREFOX||t.hasAttribute(`controls`):t.tabIndex>=0}isFocusable(t,n){return mn$1(t)&&!this.isDisabled(t)&&(n?.ignoreInert||!t.closest?.(`[inert]`))&&(n?.ignoreVisibility||this.isVisible(t))}static ɵfac=function(n){return new(n||e)};static ɵprov=ut$4({token:e,factory:e.ɵfac})}return e})();function tn$1(e){try{return e.frameElement}catch{return null}}function en$1(e){return!!(e.offsetWidth||e.offsetHeight||typeof e.getClientRects==`function`&&e.getClientRects().length)}function nn$1(e){let a=e.nodeName.toLowerCase();return a===`input`||a===`select`||a===`button`||a===`textarea`}function an$1(e){return rn$1(e)&&e.type==`hidden`}function on$1(e){return sn$2(e)&&e.hasAttribute(`href`)}function rn$1(e){return e.nodeName.toLowerCase()==`input`}function sn$2(e){return e.nodeName.toLowerCase()==`a`}function Te$2(e){if(!e.hasAttribute(`tabindex`)||e.tabIndex===void 0)return!1;let a=e.getAttribute(`tabindex`);return!!(a&&!isNaN(parseInt(a,10)))}function Ie$1(e){if(!Te$2(e))return null;let a=parseInt(e.getAttribute(`tabindex`)||``,10);return isNaN(a)?-1:a}function cn$1(e){let a=e.nodeName.toLowerCase(),t=a===`input`&&e.type;return t===`text`||t===`password`||a===`select`||a===`textarea`}function mn$1(e){return an$1(e)?!1:nn$1(e)||on$1(e)||e.hasAttribute(`contenteditable`)||Te$2(e)}function dn$1(e){return e.ownerDocument&&e.ownerDocument.defaultView||window}var ut$3=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(a){this._enabled=a,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(a,this._startAnchor),this._toggleAnchorTabIndex(a,this._endAnchor))}_enabled=!0;constructor(a,t,n,o,r=!1,s){this._element=a,this._checker=t,this._ngZone=n,this._document=o,this._injector=s,r||this.attachAnchors()}destroy(){let a=this._startAnchor,t=this._endAnchor;a&&(a.removeEventListener(`focus`,this.startAnchorListener),a.remove()),t&&(t.removeEventListener(`focus`,this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(a){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(a)))})}focusFirstTabbableElementWhenReady(a){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(a)))})}focusLastTabbableElementWhenReady(a){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(a)))})}_getRegionBoundary(a){let t=this._element.querySelectorAll(`[cdk-focus-region-${a}], [cdkFocusRegion${a}], [cdk-focus-${a}]`);return a==`start`?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(a){let t=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(t){if(!this._checker.isFocusable(t)){let n=this._getFirstTabbableElement(t);return n?.focus(a),!!n}return t.focus(a),!0}return this.focusFirstTabbableElement(a)}focusFirstTabbableElement(a){let t=this._getRegionBoundary(`start`);return t&&t.focus(a),!!t}focusLastTabbableElement(a){let t=this._getRegionBoundary(`end`);return t&&t.focus(a),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(a){if(this._checker.isFocusable(a)&&this._checker.isTabbable(a))return a;let t=a.children;for(let n=0;n<t.length;n++){let o=t[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[n]):null;if(o)return o}return null}_getLastTabbableElement(a){if(this._checker.isFocusable(a)&&this._checker.isTabbable(a))return a;let t=a.children;for(let n=t.length-1;n>=0;n--){let o=t[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[n]):null;if(o)return o}return null}_createAnchor(){let a=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,a),a.classList.add(`cdk-visually-hidden`),a.classList.add(`cdk-focus-trap-anchor`),a.setAttribute(`aria-hidden`,`true`),a}_toggleAnchorTabIndex(a,t){a?t.setAttribute(`tabindex`,`0`):t.removeAttribute(`tabindex`)}toggleAnchors(a){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(a,this._startAnchor),this._toggleAnchorTabIndex(a,this._endAnchor))}_executeOnStable(a){By(a,{injector:this._injector})}};var ln$1=(()=>{class e{_checker=g(ke$2);_ngZone=g(he$3);_document=g(qe$3);_injector=g(pe$2);constructor(){g(O).load(we)}create(t,n=!1){return new ut$3(t,this._checker,this._ngZone,this._document,n,this._injector)}static ɵfac=function(n){return new(n||e)};static ɵprov=ut$4({token:e,factory:e.ɵfac})}return e})();var T$1=(function(e){return e[e.NONE=0]=`NONE`,e[e.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,e[e.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,e})(T$1||{});var Ae$1=`cdk-high-contrast-black-on-white`;var Me$1=`cdk-high-contrast-white-on-black`;var Mt$1=`cdk-high-contrast-active`;var Ce$2=(()=>{class e{_platform=g(h);_hasCheckedHighContrastMode=!1;_document=g(qe$3);_breakpointSubscription;constructor(){this._breakpointSubscription=g(Nt$1).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return T$1.NONE;let t=this._document.createElement(`div`);t.style.backgroundColor=`rgb(1,2,3)`,t.style.position=`absolute`,this._document.body.appendChild(t);let n=this._document.defaultView||window,o=n&&n.getComputedStyle?n.getComputedStyle(t):null,r=(o&&o.backgroundColor||``).replace(/ /g,``);switch(t.remove(),r){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return T$1.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return T$1.BLACK_ON_WHITE}return T$1.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(Mt$1,Ae$1,Me$1),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===T$1.BLACK_ON_WHITE?t.add(Mt$1,Ae$1):n===T$1.WHITE_ON_BLACK&&t.add(Mt$1,Me$1)}}static ɵfac=function(n){return new(n||e)};static ɵprov=ut$4({token:e,factory:e.ɵfac})}return e})();var un$1=(()=>{class e{constructor(){g(Ce$2)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(n){return new(n||e)};static ɵmod=yp({type:e});static ɵinj=As({imports:[Ee$1]})}return e})();var bn$2=200;var bt$2=class{_letterKeyStream=new K$1;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new K$1;selectedItem=this._selectedItem;constructor(a,t){let n=typeof t?.debounceInterval==`number`?t.debounceInterval:bn$2;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(a),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(a){this._selectedItemIndex=a}setItems(a){this._items=a}handleKey(a){let t=a.keyCode;a.key&&a.key.length===1?this._letterKeyStream.next(a.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(a){this._letterKeyStream.pipe(Sg(t=>this._pressedLetters.push(t)),Il(a),Ye$1(()=>this._pressedLetters.length>0),te(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(t=>{for(let n=1;n<this._items.length+1;n++){let o=(this._selectedItemIndex+n)%this._items.length,r=this._items[o];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};function De$1(e,...a){return a.length?a.some(t=>e[t]):e.altKey||e.shiftKey||e.ctrlKey||e.metaKey}var pt$2=class{_items;_activeItemIndex=Dn$2(-1);_activeItem=Dn$2(null);_wrap=!1;_typeaheadSubscription=G$3.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=a=>a.disabled;constructor(a,t){this._items=a,a instanceof si$2?this._itemChangesSubscription=a.changes.subscribe(n=>this._itemsChanged(n.toArray())):zo$1(a)&&(this._effectRef=Uu(()=>this._itemsChanged(a()),{injector:t}))}tabOut=new K$1;change=new K$1;skipPredicate(a){return this._skipPredicateFn=a,this}withWrap(a=!0){return this._wrap=a,this}withVerticalOrientation(a=!0){return this._vertical=a,this}withHorizontalOrientation(a){return this._horizontal=a,this}withAllowedModifierKeys(a){return this._allowedModifierKeys=a,this}withTypeAhead(a=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new bt$2(t,{debounceInterval:typeof a==`number`?a:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(a=!0){return this._homeAndEnd=a,this}withPageUpDown(a=!0,t=10){return this._pageUpAndDown={enabled:a,delta:t},this}setActiveItem(a){let t=this._activeItem();this.updateActiveItem(a),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(a){let t=a.keyCode,o=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(r=>!a[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(r<s?r:s-1,-1);break}else return;default:(o||De$1(a,`shiftKey`))&&this._typeahead?.handleKey(a);return}this._typeahead?.reset(),a.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(a){let t=this._getItemsArray(),n=typeof a==`number`?a:t.indexOf(a),o=t[n];this._activeItem.set(o??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(a){this._wrap?this._setActiveInWrapMode(a):this._setActiveInDefaultMode(a)}_setActiveInWrapMode(a){let t=this._getItemsArray();for(let n=1;n<=t.length;n++){let o=(this._activeItemIndex()+a*n+t.length)%t.length,r=t[o];if(!this._skipPredicateFn(r)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(a){this._setActiveItemByIndex(this._activeItemIndex()+a,a)}_setActiveItemByIndex(a,t){let n=this._getItemsArray();if(n[a]){for(;this._skipPredicateFn(n[a]);)if(a+=t,!n[a])return;this.setActiveItem(a)}}_getItemsArray(){return zo$1(this._items)?this._items():this._items instanceof si$2?this._items.toArray():this._items}_itemsChanged(a){this._typeahead?.setItems(a);let t=this._activeItem();if(t){let n=a.indexOf(t);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var kt=class extends pt$2{_origin=`program`;setFocusOrigin(a){return this._origin=a,this}setActiveItem(a){super.setActiveItem(a),this.activeItem&&this.activeItem.focus(this._origin)}};var Fe$2=/* @__PURE__ */ new Map;var Tt$1=class e{_appId=g(Vu);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(a,t=!1){this._appId!==`ng`&&(a+=this._appId);let n=Fe$2.get(a);return n===void 0?n=0:n++,Fe$2.set(a,n),`${a}${t?e._infix+`-`:``}${n}`}static ɵfac=function(t){return new(t||e)};static ɵprov=ut$4({token:e,factory:e.ɵfac})};var Y$1=(function(e){return e[e.NORMAL=0]=`NORMAL`,e[e.NEGATED=1]=`NEGATED`,e[e.INVERTED=2]=`INVERTED`,e})(Y$1||{});var ft$2;var P;function go$1(){if(P==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return P=!1,P;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)P=!0;else{let e=Element.prototype.scrollTo;e?P=!/\{\s*\[native code\]\s*\}/.test(e.toString()):P=!1}}return P}function yo$1(){if(typeof document!=`object`||!document)return Y$1.NORMAL;if(ft$2==null){let e=document.createElement(`div`),a=e.style;e.dir=`rtl`,a.width=`1px`,a.overflow=`auto`,a.visibility=`hidden`,a.pointerEvents=`none`,a.position=`absolute`;let t=document.createElement(`div`),n=t.style;n.width=`2px`,n.height=`1px`,e.appendChild(t),document.body.appendChild(e),ft$2=Y$1.NORMAL,e.scrollLeft===0&&(e.scrollLeft=1,ft$2=e.scrollLeft===0?Y$1.NEGATED:Y$1.INVERTED),e.remove()}return ft$2}function xo$1(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var pn$1=new _(`MATERIAL_ANIMATIONS`);var Re$2=null;function fn$2(){return g(pn$1,{optional:!0})?.animationsDisabled||g(Im,{optional:!0})===`NoopAnimations`?`di-disabled`:(Re$2??=g(mt$2).matchMedia(`(prefers-reduced-motion)`).matches,Re$2?`reduced-motion`:`enabled`)}function j(){return fn$2()!==`enabled`}function To$1(e){return e==null?``:typeof e==`string`?e:`${e}px`}function Do$1(e){return e!=null&&`${e}`!=`false`}var v=(function(e){return e[e.FADING_IN=0]=`FADING_IN`,e[e.VISIBLE=1]=`VISIBLE`,e[e.FADING_OUT=2]=`FADING_OUT`,e[e.HIDDEN=3]=`HIDDEN`,e})(v||{});var Ct$1=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=v.HIDDEN;constructor(a,t,n,o=!1){this._renderer=a,this.element=t,this.config=n,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}};var Oe$2=z({passive:!0,capture:!0});var Dt$1=class{_events=/* @__PURE__ */ new Map;addHandler(a,t,n,o){let r=this._events.get(t);if(r){let s=r.get(n);s?s.add(o):r.set(n,/* @__PURE__ */ new Set([o]))}else this._events.set(t,/* @__PURE__ */ new Map([[n,/* @__PURE__ */ new Set([o])]])),a.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Oe$2)})}removeHandler(a,t,n){let o=this._events.get(a);if(!o)return;let r=o.get(t);r&&(r.delete(n),r.size===0&&o.delete(t),o.size===0&&(this._events.delete(a),document.removeEventListener(a,this._delegateEventHandler,Oe$2)))}_delegateEventHandler=a=>{let t=y(a);t&&this._events.get(a.type)?.forEach((n,o)=>{(o===t||o.contains(t))&&n.forEach(r=>r.handleEvent(a))})}};var q$2={enterDuration:225,exitDuration:150};var hn$1=800;var Pe$2=z({passive:!0,capture:!0});var Le$1=[`mousedown`,`touchstart`];var Be$2=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var vn$2=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵcmp=OE({type:e,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(n,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return e})();var Q=class e{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=/* @__PURE__ */ new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Dt$1;constructor(a,t,n,o,r){this._target=a,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=k(n)),r&&r.get(O).load(vn$2)}fadeInRipple(a,t,n={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=V$1(V$1({},q$2),n.animation);n.centered&&(a=o.left+o.width/2,t=o.top+o.height/2);let s=n.radius||gn$2(a,t,o),c=a-o.left,g=t-o.top,S=r.enterDuration,b=document.createElement(`div`);b.classList.add(`mat-ripple-element`),b.style.left=`${c-s}px`,b.style.top=`${g-s}px`,b.style.height=`${s*2}px`,b.style.width=`${s*2}px`,n.color!=null&&(b.style.backgroundColor=n.color),b.style.transitionDuration=`${S}ms`,this._containerElement.appendChild(b);let Lt=window.getComputedStyle(b),$e=Lt.transitionProperty,Bt=Lt.transitionDuration,vt=$e===`none`||Bt===`0s`||Bt===`0s, 0s`||o.width===0&&o.height===0,C=new Ct$1(this,b,n,vt);b.style.transform=`scale3d(1, 1, 1)`,C.state=v.FADING_IN,n.persistent||(this._mostRecentTransientRipple=C);let X=null;return!vt&&(S||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let zt=()=>{X&&(X.fallbackTimer=null),clearTimeout(jt),this._finishRippleTransition(C)},gt=()=>this._destroyRipple(C),jt=setTimeout(gt,S+100);b.addEventListener(`transitionend`,zt),b.addEventListener(`transitioncancel`,gt),X={onTransitionEnd:zt,onTransitionCancel:gt,fallbackTimer:jt}}),this._activeRipples.set(C,X),(vt||!S)&&this._finishRippleTransition(C),C}fadeOutRipple(a){if(a.state===v.FADING_OUT||a.state===v.HIDDEN)return;let t=a.element,n=V$1(V$1({},q$2),a.config.animation);t.style.transitionDuration=`${n.exitDuration}ms`,t.style.opacity=`0`,a.state=v.FADING_OUT,(a._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(a)}fadeOutAll(){this._getActiveRipples().forEach(a=>a.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(a=>{a.config.persistent||a.fadeOut()})}setupTriggerEvents(a){let t=k(a);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,Le$1.forEach(n=>{e._eventManager.addHandler(this._ngZone,n,t,this)}))}handleEvent(a){a.type===`mousedown`?this._onMousedown(a):a.type===`touchstart`?this._onTouchStart(a):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Be$2.forEach(t=>{this._triggerElement.addEventListener(t,this,Pe$2)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(a){a.state===v.FADING_IN?this._startFadeOutTransition(a):a.state===v.FADING_OUT&&this._destroyRipple(a)}_startFadeOutTransition(a){let t=a===this._mostRecentTransientRipple,{persistent:n}=a.config;a.state=v.VISIBLE,!n&&(!t||!this._isPointerDown)&&a.fadeOut()}_destroyRipple(a){let t=this._activeRipples.get(a)??null;this._activeRipples.delete(a),this._activeRipples.size||(this._containerRect=null),a===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),a.state=v.HIDDEN,t!==null&&(a.element.removeEventListener(`transitionend`,t.onTransitionEnd),a.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),a.element.remove()}_onMousedown(a){let t=W$1(a),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+hn$1;!this._target.rippleDisabled&&!t&&!n&&(this._isPointerDown=!0,this.fadeInRipple(a.clientX,a.clientY,this._target.rippleConfig))}_onTouchStart(a){if(!this._target.rippleDisabled&&!Z$1(a)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=a.changedTouches;if(t)for(let n=0;n<t.length;n++)this.fadeInRipple(t[n].clientX,t[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(a=>{let t=a.state===v.VISIBLE||a.config.terminateOnPointerUp&&a.state===v.FADING_IN;!a.config.persistent&&t&&a.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let a=this._triggerElement;a&&(Le$1.forEach(t=>e._eventManager.removeHandler(t,a,this)),this._pointerUpEventsRegistered&&(Be$2.forEach(t=>a.removeEventListener(t,this,Pe$2)),this._pointerUpEventsRegistered=!1))}};function gn$2(e,a,t){let n=Math.max(Math.abs(e-t.left),Math.abs(e-t.right)),o=Math.max(Math.abs(a-t.top),Math.abs(a-t.bottom));return Math.sqrt(n*n+o*o)}var Ft$1=new _(`mat-ripple-global-options`);var Wo=(()=>{class e{_elementRef=g(xr);_animationsDisabled=j();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=g(he$3),n=g(h),o=g(Ft$1,{optional:!0}),r=g(pe$2);this._globalOptions=o||{},this._rippleRenderer=new Q(this,t,this._elementRef,n,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:V$1(V$1(V$1({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,n=0,o){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,n,V$1(V$1({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,V$1(V$1({},this.rippleConfig),t))}static ɵfac=function(n){return new(n||e)};static ɵdir=FE({type:e,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(n,o){n&2&&Wp(`mat-ripple-unbounded`,o.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return e})();var yn$2={capture:!0};var _n$2=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var Rt$1=`mat-ripple-loader-uninitialized`;var Ot=`mat-ripple-loader-class-name`;var ze$1=`mat-ripple-loader-centered`;var ht$3=`mat-ripple-loader-disabled`;var je$1=(()=>{class e{_document=g(qe$3);_animationsDisabled=j();_globalRippleOptions=g(Ft$1,{optional:!0});_platform=g(h);_ngZone=g(he$3);_injector=g(pe$2);_eventCleanups;_hosts=/* @__PURE__ */ new Map;constructor(){let t=g(wr).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>_n$2.map(n=>t.listen(this._document,n,this._onInteraction,yn$2)))}ngOnDestroy(){let t=this._hosts.keys();for(let n of t)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(t,n){t.setAttribute(Rt$1,this._globalRippleOptions?.namespace??``),(n.className||!t.hasAttribute(Ot))&&t.setAttribute(Ot,n.className||``),n.centered&&t.setAttribute(ze$1,``),n.disabled&&t.setAttribute(ht$3,``)}setDisabled(t,n){let o=this._hosts.get(t);o?(o.target.rippleDisabled=n,!n&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):n?t.setAttribute(ht$3,``):t.removeAttribute(ht$3)}_onInteraction=t=>{let n=y(t);if(n instanceof HTMLElement){let o=n.closest(`[${Rt$1}="${this._globalRippleOptions?.namespace??``}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let n=this._document.createElement(`span`);n.classList.add(`mat-ripple`,t.getAttribute(Ot)),t.append(n);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??q$2.enterDuration,s=this._animationsDisabled?0:o?.animation?.exitDuration??q$2.exitDuration,c={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(ht$3),rippleConfig:{centered:t.hasAttribute(ze$1),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:s}}},g=new Q(c,this._ngZone,n,this._platform,this._injector),S=!c.rippleDisabled;S&&g.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:g,hasSetUpEvents:S}),t.removeAttribute(Rt$1)}destroyRipple(t){let n=this._hosts.get(t);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(n){return new(n||e)};static ɵprov=ut$4({token:e,factory:e.ɵfac})}return e})();var Ue$1=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵcmp=OE({type:e,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(n,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return e})();var xn$2=new _(`MAT_BUTTON_CONFIG`);function He$1(e){return e==null?void 0:m0(e)}var Pt=(()=>{class e{_elementRef=g(xr);_ngZone=g(he$3);_animationsDisabled=j();_config=g(xn$2,{optional:!0});_focusMonitor=g(At$1);_cleanupClick;_renderer=g(Va);_rippleLoader=g(je$1);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=l0(!1,{transform:g0});constructor(){g(O).load(Ue$1);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,n){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(n){return new(n||e)};static ɵdir=FE({type:e,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(n,o){n&2&&(_p(`disabled`,o._getDisabledAttribute())(`aria-disabled`,o._getAriaDisabled())(`tabindex`,o._getTabIndex()),kI(o.color?`mat-`+o.color:``),Wp(`mat-mdc-button-progress-indicator-shown`,o.showProgress())(`mat-mdc-button-disabled`,o.disabled)(`mat-mdc-button-disabled-interactive`,o.disabledInteractive)(`mat-unthemed`,!o.color)(`_mat-animation-noopable`,o._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,g0],disabled:[2,`disabled`,`disabled`,g0],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,g0],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,g0],tabIndex:[2,`tabIndex`,`tabIndex`,He$1],_tabindex:[2,`tabindex`,`_tabindex`,He$1],showProgress:[1,`showProgress`]}})}return e})();var Sn$2=(()=>{class e extends Pt{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){let t=[`*`,[[``,`progressIndicator`,``]]],n=[`*`,`[progressIndicator]`];function o(r,s){r&1&&(Sc(0,`div`,1),vI(1,1),Ac())}return OE({type:e,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[bp],ngContentSelectors:n,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(s,c){s&1&&(yI(t),Rp(0,`span`,0),vI(1),nI(2,o,2,0,`div`,1),Rp(3,`span`,2)(4,`span`,3)),s&2&&(av(2),oI(c.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return e})();var Ve$2=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=yp({type:e});static ɵinj=As({imports:[I]})}return e})();var Ke$1=/* @__PURE__ */ new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var gr$1=(()=>{class e extends Pt{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=Nn$2(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let n=this._elementRef.nativeElement.classList,o=this._appearance?Ke$1.get(this._appearance):null,r=Ke$1.get(t);o&&n.remove(...o),n.add(...r),this._appearance=t}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],n=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function o(r,s){r&1&&(Sc(0,`div`,2),vI(1,3),Ac())}return OE({type:e,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[bp],ngContentSelectors:n,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(s,c){s&1&&(yI(t),Rp(0,`span`,0),vI(1),Sc(2,`span`,1),vI(3,1),Ac(),vI(4,2),nI(5,o,2,0,`div`,2),Rp(6,`span`,3)(7,`span`,4)),s&2&&(Wp(`mdc-button__ripple`,!c._isFab)(`mdc-fab__ripple`,c._isFab),av(5),oI(c.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded,
.material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return e})();function Nn$2(e){return e.hasAttribute(`mat-raised-button`)?`elevated`:e.hasAttribute(`mat-stroked-button`)?`outlined`:e.hasAttribute(`mat-flat-button`)?`filled`:e.hasAttribute(`mat-button`)?`text`:null}var yr=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=yp({type:e});static ɵinj=As({imports:[Ve$2,I]})}return e})();var We=[`TraceStarted`,`SpanStarted`,`SpanCompleted`,`SpanFailed`,`TraceCompleted`,`TracePersisted`];var Ze={isDemoMode:!0};var wn$2=1e3;var En$2=3e4;var kr=1500;var Ge=class e{eventSource=null;lastEventId=null;reconnectAttempt=0;reconnectTimer=null;manuallyDisconnected=!0;hasConnectedBefore=!1;openCount=0;eventsSubject=new K$1;reconnectedSubject=new K$1;stateSignal=Dn$2(`closed`);events$=this.eventsSubject.asObservable();reconnected$=this.reconnectedSubject.asObservable();state=this.stateSignal.asReadonly();connect(){Ze.isDemoMode||(this.openCount++,!(this.openCount>1)&&(this.manuallyDisconnected=!1,this.hasConnectedBefore=!1,this.lastEventId=null,this.reconnectAttempt=0,this.openConnection()))}disconnect(){this.openCount=Math.max(this.openCount-1,0),!(this.openCount>0)&&(this.manuallyDisconnected=!0,this.clearReconnectTimer(),this.eventSource?.close(),this.eventSource=null,this.stateSignal.set(`closed`))}openConnection(){this.stateSignal.set(`connecting`);let a=this.lastEventId!==null?`api/stream?lastEventId=${this.lastEventId}`:`api/stream`,t=new EventSource(a);this.eventSource=t,t.onopen=()=>{this.reconnectAttempt=0,this.stateSignal.set(`open`),this.hasConnectedBefore&&this.reconnectedSubject.next(),this.hasConnectedBefore=!0},t.onerror=()=>{t.close(),this.stateSignal.set(`closed`),this.manuallyDisconnected||this.scheduleReconnect()},t.addEventListener(`ping`,()=>{});for(let n of We)t.addEventListener(n,o=>{let r=JSON.parse(o.data);this.lastEventId=r.eventId,this.eventsSubject.next(r)})}scheduleReconnect(){let a=Math.min(wn$2*2**this.reconnectAttempt,En$2);this.reconnectAttempt++,this.reconnectTimer=setTimeout(()=>this.openConnection(),a)}clearReconnectTimer(){this.reconnectTimer!==null&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null)}static ɵfac=function(t){return new(t||e)};static ɵprov=L$1({token:e,factory:e.ɵfac,providedIn:`root`})};var ce$1=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}};var tt$1=class extends ce$1{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,e,t,n,r,s){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=n,this.bindings=r||null,this.directives=s||null}};var G$1=class extends ce$1{templateRef;viewContainerRef;context;injector;constructor(i,e,t,n){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=n}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}};var it$1=class extends ce$1{element;constructor(i){super(),this.element=i instanceof xr?i.nativeElement:i}};var Se$2=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof tt$1)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof G$1)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof it$1)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var de$1=class extends Se$2{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,n=t.get(_n$3,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:n,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,n=i.injector||this._defaultInjector||pe$2.NULL,r=n.get(ie$1,t.injector);e=y0(i.component,{elementInjector:n,environmentInjector:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(n=>this.outletElement.appendChild(n)),t.detectChanges(),this.setDisposeFn(()=>{let n=e.indexOf(t);n!==-1&&e.remove(n)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment(`dom-portal`);e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var Ri$1=(()=>{class o extends Se$2{_moduleRef=g(_n$3,{optional:!0});_document=g(qe$3);_viewContainerRef=g(xi$2);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new Pe$3;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,n=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(n.hostView.rootNodes[0]),super.setDisposeFn(()=>n.destroy()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let n=this._document.createComment(`dom-portal`);e.setAttachedHost(this),t.parentNode.insertBefore(n,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(t,n)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static ɵfac=(()=>{let e;return function(n){return(e||(e=ey(o)))(n||o)}})();static ɵdir=FE({type:o,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[bp]})}return o})();var zt=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=yp({type:o});static ɵinj=As({})}return o})();var di$2=20;var he$1=(()=>{class o{_ngZone=g(he$3);_platform=g(h);_renderer=g(wr).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new K$1;_scrolledCount=0;scrollContainers=/* @__PURE__ */ new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=di$2){return this._platform.isBrowser?new N(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let n=e>0?this._scrolled.pipe(El(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Yi$1()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let n=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(Ye$1(r=>!r||n.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((n,r)=>{this._targetContainsElement(r,e)&&t.push(r)}),t}_targetContainsElement(e,t){let n=k(t),r=e.getElementRef().nativeElement;do if(n==r)return!0;while(n=n.parentElement);return!1}static ɵfac=function(t){return new(t||o)};static ɵprov=ut$4({token:o,factory:o.ɵfac})}return o})();var sn$1=(()=>{class o{elementRef=g(xr);scrollDispatcher=g(he$1);ngZone=g(he$3);dir=g(y$1,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new K$1;_renderer=g(Va);_cleanupScroll;_elementScrolled=new K$1;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,n=this.dir&&this.dir.value==`rtl`;e.left??=n?e.end:e.start,e.right??=n?e.start:e.end,e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),n&&yo$1()!=Y$1.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),yo$1()==Y$1.INVERTED?e.left=e.right:yo$1()==Y$1.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;go$1()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t=`left`,n=`right`,r=this.elementRef.nativeElement;if(e==`top`)return r.scrollTop;if(e==`bottom`)return r.scrollHeight-r.clientHeight-r.scrollTop;let s=this.dir&&this.dir.value==`rtl`;return e==`start`?e=s?n:t:e==`end`&&(e=s?t:n),s&&yo$1()==Y$1.INVERTED?e==t?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:s&&yo$1()==Y$1.NEGATED?e==t?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==t?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static ɵfac=function(t){return new(t||o)};static ɵdir=FE({type:o,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return o})();var hi$1=20;var K=(()=>{class o{_platform=g(h);_listeners;_viewportSize=null;_change=new K$1;_document=g(qe$3);constructor(){let e=g(he$3),t=g(wr).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let n=r=>this._change.next(r);this._listeners=[t.listen(`window`,`resize`,n),t.listen(`window`,`orientationchange`,n)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+t,height:n,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),n=e.documentElement,r=n.getBoundingClientRect();return{top:-r.top||e.body?.scrollTop||t.scrollY||n.scrollTop||0,left:-r.left||e.body?.scrollLeft||t.scrollX||n.scrollLeft||0}}change(e=hi$1){return e>0?this._change.pipe(El(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static ɵfac=function(t){return new(t||o)};static ɵprov=ut$4({token:o,factory:o.ɵfac})}return o})();var Me=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=yp({type:o});static ɵinj=As({})}return o})();var ot$1=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=yp({type:o});static ɵinj=As({imports:[I,Me,I,Me]})}return o})();var Wt$1=go$1();function Gt$1(o){return new Oe$1(o.get(K),o.get(qe$3))}var Oe$1=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||``,this._previousHTMLStyles.top=i.style.top||``,i.style.left=To$1(-this._previousScrollPosition.left),i.style.top=To$1(-this._previousScrollPosition.top),i.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,n=e.style,r=t.scrollBehavior||``,s=n.scrollBehavior||``;this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove(`cdk-global-scrollblock`),Wt$1&&(t.scrollBehavior=n.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Wt$1&&(t.scrollBehavior=r,n.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Kt$1(o,i){return new Re$1(o.get(he$1),o.get(he$3),o.get(K),i)}var Re$1=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,n){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=n}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(Ye$1(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var ue$1=class{enable(){}disable(){}attach(){}};function st$1(o,i){return i.some(e=>{let t=o.bottom<e.top,n=o.top>e.bottom,r=o.right<e.left,s=o.left>e.right;return t||n||r||s})}function Ht$1(o,i){return i.some(e=>{let t=o.top<e.top,n=o.bottom>e.bottom,r=o.left<e.left,s=o.right>e.right;return t||n||r||s})}function Ae(o,i){return new De(o.get(he$1),o.get(K),o.get(he$3),i)}var De=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,n){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=n}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:n}=this._viewportRuler.getViewportSize();st$1(e,[{width:t,height:n,bottom:n,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var $t=(()=>{class o{_injector=g(pe$2);noop=()=>new ue$1;close=e=>Kt$1(this._injector,e);block=()=>Gt$1(this._injector);reposition=e=>Ae(this._injector,e);static ɵfac=function(t){return new(t||o)};static ɵprov=ut$4({token:o,factory:o.ɵfac})}return o})();var $$2=class{positionStrategy;scrollStrategy=new ue$1;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var Pe$1=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var qt=(()=>{class o{_attachedOverlays=[];_document=g(qe$3);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,n){return n.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static ɵfac=function(t){return new(t||o)};static ɵprov=ut$4({token:o,factory:o.ɵfac})}return o})();var Qt$1=(()=>{class o extends qt{_ngZone=g(he$3);_renderer=g(wr).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let n=t.length-1;n>-1;n--){let r=t[n];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static ɵfac=function(t){return new(t||o)};static ɵprov=ut$4({token:o,factory:o.ɵfac})}return o})();var Jt$1=(()=>{class o extends qt{_platform=g(h);_ngZone=g(he$3);_renderer=g(wr).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,n={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(t,`pointerdown`,this._pointerDownListener,n),r.listen(t,`click`,this._clickListener,n),r.listen(t,`auxclick`,this._clickListener,n),r.listen(t,`contextmenu`,this._clickListener,n)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=y(e)};_clickListener=e=>{let t=y(e),n=e.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let s=r.length-1;s>-1;s--){let a=r[s],l=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,l))){if(Yt$1(a.overlayElement,t)||Yt$1(a.overlayElement,n))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static ɵfac=function(t){return new(t||o)};static ɵprov=ut$4({token:o,factory:o.ɵfac})}return o})();function Yt$1(o,i){let e=typeof ShadowRoot<`u`&&ShadowRoot,t=i;for(;t;){if(t===o)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var ei$2=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵcmp=OE({type:o,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(t,n){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return o})();var ti$1=(()=>{class o{_platform=g(h);_containerElement;_document=g(qe$3);_styleLoader=g(O);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=`cdk-overlay-container`;if(this._platform.isBrowser||xo$1()){let n=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<n.length;r++)n[r].remove()}let t=this._document.createElement(`div`);t.classList.add(e),xo$1()?t.setAttribute(`platform`,`test`):this._platform.isBrowser||t.setAttribute(`platform`,`server`),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(ei$2)}static ɵfac=function(t){return new(t||o)};static ɵprov=ut$4({token:o,factory:o.ɵfac})}return o})();var at$1=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,n){this._renderer=e,this._ngZone=t,this.element=i.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=e.listen(this.element,`click`,n)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents=`none`,i.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function lt$1(o){return o&&o.nodeType===1}var rt$1=Dn$2([]);var Ee=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new K$1;_attachments=new K$1;_detachments=new K$1;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new K$1;_outsidePointerEvents=new K$1;_afterNextRenderRef;constructor(i,e,t,n,r,s,a,l,h,d=!1,u,m){this._portalOutlet=i,this._host=e,this._pane=t,this._config=n,this._ngZone=r,this._keyboardDispatcher=s,this._document=a,this._location=l,this._outsideClickDispatcher=h,this._animationsDisabled=d,this._injector=u,this._renderer=m,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),kr$1(()=>{rt$1.update(t=>t.includes(this)?t:[...t,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=By(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation===`pop-state`){let t=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>t.unsubscribe()}else this._config.disposeOnNavigation===`url-change`&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof e?.onDestroy==`function`&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),kr$1(()=>{rt$1.update(e=>e.filter(t=>t!==this))}),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,kr$1(()=>{rt$1.update(e=>e.filter(t=>t!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=V$1(V$1({},this._config),i),this._updateElementSize()}setDirection(i){this._config=q$3(V$1({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i==`string`?i:i.value:`ltr`}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=To$1(this._config.width),i.height=To$1(this._config.height),i.minWidth=To$1(this._config.minWidth),i.minHeight=To$1(this._config.minHeight),i.maxWidth=To$1(this._config.maxWidth),i.maxHeight=To$1(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?``:`none`}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;lt$1(i)?i.after(this._host):i?.type===`parent`?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new at$1(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let n=St$1(e||[]).filter(r=>!!r);n.length&&(t?i.classList.add(...n):i.classList.remove(...n))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=By(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}};var Xt$1=`cdk-overlay-connected-position-bounding-box`;var ui$1=/([A-Za-z%]+)$/;function Fe$1(o,i){return new Ie(i,o.get(K),o.get(qe$3),o.get(h),o.get(ti$1))}var Ie=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new K$1;_resizeSubscription=G$3.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,n,r){this._viewportRuler=e,this._document=t,this._platform=n,this._overlayContainer=r,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(Xt$1),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,n=this._containerRect,r=[],s;for(let a of this._preferredPositions){let l=this._getOriginPoint(i,n,a),h=this._getOverlayPoint(l,e,a),d=this._getOverlayFit(h,e,t,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,l);return}if(this._canFitWithFlexibleDimensions(d,h,t)){r.push({position:a,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,a)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:h,originPoint:l,position:a,overlayRect:e})}if(r.length){let a=null,l=-1;for(let h of r){let d=h.boundingBoxRect.width*h.boundingBoxRect.height*(h.position.weight||1);d>l&&(l=d,a=h)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&V(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Xt$1),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof xr?this._origin.nativeElement:lt$1(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let n;if(t.originX==`center`)n=i.left+i.width/2;else{let s=this._isRtl()?i.right:i.left,a=this._isRtl()?i.left:i.right;n=t.originX==`start`?s:a}e.left<0&&(n-=e.left);let r;return t.originY==`center`?r=i.top+i.height/2:r=t.originY==`top`?i.top:i.bottom,e.top<0&&(r-=e.top),{x:n,y:r}}_getOverlayPoint(i,e,t){let n;t.overlayX==`center`?n=-e.width/2:t.overlayX===`start`?n=this._isRtl()?-e.width:0:n=this._isRtl()?0:-e.width;let r;return t.overlayY==`center`?r=-e.height/2:r=t.overlayY==`top`?0:-e.height,{x:i.x+n,y:i.y+r}}_getOverlayFit(i,e,t,n){let r=Ut(e),{x:s,y:a}=i,l=this._getOffset(n,`x`),h=this._getOffset(n,`y`);l&&(s+=l),h&&(a+=h);let d=0-s,u=s+r.width-t.width,m=0-a,g=a+r.height-t.height,_=this._subtractOverflows(r.width,d,u),k=this._subtractOverflows(r.height,m,g),pt=_*k;return{visibleArea:pt,isCompletelyWithinViewport:r.width*r.height===pt,fitsInViewportVertically:k===r.height,fitsInViewportHorizontally:_==r.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let n=t.bottom-e.y,r=t.right-e.x,s=jt(this._overlayRef.getConfig().minHeight),a=jt(this._overlayRef.getConfig().minWidth),l=i.fitsInViewportVertically||s!=null&&s<=n,h=i.fitsInViewportHorizontally||a!=null&&a<=r;return l&&h}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let n=Ut(e),r=this._viewportRect,s=Math.max(i.x+n.width-r.width,0),a=Math.max(i.y+n.height-r.height,0),l=Math.max(r.top-t.top-i.y,0),h=Math.max(r.left-t.left-i.x,0),d=0,u=0;return n.width<=r.width?d=h||-s:d=i.x<this._getViewportMarginStart()?r.left-t.left-i.x:0,n.height<=r.height?u=l||-a:u=i.y<this._getViewportMarginTop()?r.top-t.top-i.y:0,this._previousPushAmount={x:d,y:u},{x:i.x+d,y:i.y+u}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!pi$2(this._lastScrollVisibility,t)){let n=new Pe$1(i,t);this._positionChanges.next(n)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,n=i.overlayY;i.overlayX===`center`?t=`center`:this._isRtl()?t=i.overlayX===`start`?`right`:`left`:t=i.overlayX===`start`?`left`:`right`;for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${t} ${n}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,n=this._isRtl(),r,s,a;if(e.overlayY===`top`)s=i.y,r=t.height-s+this._getViewportMarginBottom();else if(e.overlayY===`bottom`)a=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=t.height-a+this._getViewportMarginTop();else{let g=Math.min(t.bottom-i.y+t.top,i.y),_=this._lastBoundingBoxSize.height;r=g*2,s=i.y-g,r>_&&!this._isInitialRender&&!this._growAfterOpen&&(s=i.y-_/2)}let l=e.overlayX===`start`&&!n||e.overlayX===`end`&&n,h=e.overlayX===`end`&&!n||e.overlayX===`start`&&n,d,u,m;if(h)m=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=i.x-this._getViewportMarginStart();else if(l)u=i.x,d=t.right-i.x-this._getViewportMarginEnd();else{let g=Math.min(t.right-i.x+t.left,i.x),_=this._lastBoundingBoxSize.width;d=g*2,u=i.x-g,d>_&&!this._isInitialRender&&!this._growAfterOpen&&(u=i.x-_/2)}return{top:s,left:u,bottom:a,right:m,width:d,height:r}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left=`0`,n.bottom=n.right=`auto`,n.maxHeight=n.maxWidth=``,n.width=n.height=`100%`;else{let r=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;n.width=To$1(t.width),n.height=To$1(t.height),n.top=To$1(t.top)||`auto`,n.bottom=To$1(t.bottom)||`auto`,n.left=To$1(t.left)||`auto`,n.right=To$1(t.right)||`auto`,e.overlayX===`center`?n.alignItems=`center`:n.alignItems=e.overlayX===`end`?`flex-end`:`flex-start`,e.overlayY===`center`?n.justifyContent=`center`:n.justifyContent=e.overlayY===`bottom`?`flex-end`:`flex-start`,r&&(n.maxHeight=To$1(r)),s&&(n.maxWidth=To$1(s))}this._lastBoundingBoxSize=t,V(this._boundingBox.style,n)}_resetBoundingBoxStyles(){V(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){V(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(i,e){let t={},n=this._hasExactPosition(),r=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(n){let d=this._viewportRuler.getViewportScrollPosition();V(t,this._getExactOverlayY(e,i,d)),V(t,this._getExactOverlayX(e,i,d))}else t.position=`static`;let a=``,l=this._getOffset(e,`x`),h=this._getOffset(e,`y`);l&&(a+=`translateX(${l}px) `),h&&(a+=`translateY(${h}px)`),t.transform=a.trim(),s.maxHeight&&(n?t.maxHeight=To$1(s.maxHeight):r&&(t.maxHeight=``)),s.maxWidth&&(n?t.maxWidth=To$1(s.maxWidth):r&&(t.maxWidth=``)),V(this._pane.style,t)}_getExactOverlayY(i,e,t){let n={top:``,bottom:``},r=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t)),i.overlayY===`bottom`)n.bottom=`${this._document.documentElement.clientHeight-(r.y+this._overlayRect.height)}px`;else n.top=To$1(r.y);return n}_getExactOverlayX(i,e,t){let n={left:``,right:``},r=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t));let s;if(this._isRtl()?s=i.overlayX===`end`?`left`:`right`:s=i.overlayX===`end`?`right`:`left`,s===`right`)n.right=`${this._document.documentElement.clientWidth-(r.x+this._overlayRect.width)}px`;else n.left=To$1(r.x);return n}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Ht$1(i,t),isOriginOutsideView:st$1(i,t),isOverlayClipped:Ht$1(e,t),isOverlayOutsideView:st$1(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,n)=>t-Math.max(n,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e===`x`?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&St$1(i).forEach(e=>{e!==``&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof xr)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,e=this._overlayContainer.getContainerElement();i&&(e.style.display=`block`);let t=e.getBoundingClientRect();return i&&(e.style.display=``),t}};function V(o,i){for(let e in i)Object.hasOwn(i,e)&&(o[e]=i[e]);return o}function jt(o){if(typeof o!=`number`&&o!=null){let[i,e]=o.split(ui$1);return!e||e===`px`?parseFloat(i):null}return o||null}function Ut(o){return{top:Math.floor(o.top),right:Math.floor(o.right),bottom:Math.floor(o.bottom),left:Math.floor(o.left),width:Math.floor(o.width),height:Math.floor(o.height)}}function pi$2(o,i){return o===i?!0:o.isOriginClipped===i.isOriginClipped&&o.isOriginOutsideView===i.isOriginOutsideView&&o.isOverlayClipped===i.isOverlayClipped&&o.isOverlayOutsideView===i.isOverlayOutsideView}var Zt$1=`cdk-global-overlay-wrapper`;function ii$2(o){return new Te$1}var Te$1=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(Zt$1),this._isDisposed=!1}top(i=``){return this._bottomOffset=``,this._topOffset=i,this._alignItems=`flex-start`,this}left(i=``){return this._xOffset=i,this._xPosition=`left`,this}bottom(i=``){return this._topOffset=``,this._bottomOffset=i,this._alignItems=`flex-end`,this}right(i=``){return this._xOffset=i,this._xPosition=`right`,this}start(i=``){return this._xOffset=i,this._xPosition=`start`,this}end(i=``){return this._xOffset=i,this._xPosition=`end`,this}width(i=``){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=``){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=``){return this.left(i),this._xPosition=`center`,this}centerVertically(i=``){return this.top(i),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,{width:n,height:r,maxWidth:s,maxHeight:a}=this._overlayRef.getConfig(),l=(n===`100%`||n===`100vw`)&&(!s||s===`100%`||s===`100vw`),h=(r===`100%`||r===`100vh`)&&(!a||a===`100%`||a===`100vh`),d=this._xPosition,u=this._xOffset,m=this._overlayRef.getConfig().direction===`rtl`,g=``,_=``,k=``;l?k=`flex-start`:d===`center`?(k=`center`,m?_=u:g=u):m?d===`left`||d===`end`?(k=`flex-end`,g=u):(d===`right`||d===`start`)&&(k=`flex-start`,_=u):d===`left`||d===`start`?(k=`flex-start`,g=u):(d===`right`||d===`end`)&&(k=`flex-end`,_=u),i.position=this._cssPosition,i.marginLeft=l?`0`:g,i.marginTop=h?`0`:this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=l?`0`:_,e.justifyContent=k,e.alignItems=h?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Zt$1),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position=``,this._overlayRef=null,this._isDisposed=!0}};var ni$2=(()=>{class o{_injector=g(pe$2);global(){return ii$2()}flexibleConnectedTo(e){return Fe$1(this._injector,e)}static ɵfac=function(t){return new(t||o)};static ɵprov=ut$4({token:o,factory:o.ɵfac})}return o})();var oi$2=new _(`OVERLAY_DEFAULT_CONFIG`);function Ve$1(o,i){o.get(O).load(ei$2);let e=o.get(ti$1),t=o.get(qe$3),n=o.get(Tt$1),r=o.get(_i$2),s=o.get(y$1),a=o.get(Va,null,{optional:!0})||o.get(wr).createRenderer(null,null),l=new $$2(i),h=o.get(oi$2,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||s.value,!t.body||!(`showPopover`in t.body)?l.usePopover=!1:l.usePopover=i?.usePopover??h;let d=t.createElement(`div`),u=t.createElement(`div`);d.id=n.getId(`cdk-overlay-`),d.classList.add(`cdk-overlay-pane`),u.appendChild(d),l.usePopover&&(u.setAttribute(`popover`,`manual`),u.classList.add(`cdk-overlay-popover`));let m=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return lt$1(m)?m.after(u):m?.type===`parent`?m.element.appendChild(u):e.getContainerElement().appendChild(u),new Ee(new de$1(d,r,o),u,d,l,o.get(he$3),o.get(Qt$1),t,o.get(ue$2),o.get(Jt$1),i?.disableAnimations??o.get(Im,null,{optional:!0})===`NoopAnimations`,o.get(ie$1),a)}var ri$2=(()=>{class o{scrollStrategies=g($t);_positionBuilder=g(ni$2);_injector=g(pe$2);create(e){return Ve$1(this._injector,e)}position(){return this._positionBuilder}static ɵfac=function(t){return new(t||o)};static ɵprov=ut$4({token:o,factory:o.ɵfac})}return o})();var ct$1=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=yp({type:o});static ɵinj=As({providers:[ri$2],imports:[I,zt,ot$1,ot$1]})}return o})();var ut$2=new _(`MAT_MENU_PANEL`);var ht$2=(()=>{class o{_isAnchor;_elementRef=g(xr);_document=g(qe$3);_focusMonitor=g(At$1);_parentMenu=g(ut$2,{optional:!0});_changeDetectorRef=g(p0);role=`menuitem`;disabled=!1;disabledInteractive=!1;disableRipple=!1;_hovered=new K$1;_focused=new K$1;_highlighted=!1;_triggersSubmenu=!1;constructor(){g(O).load(Ue$1),this._parentMenu?.addItem?.(this),this._isAnchor=this._elementRef.nativeElement.tagName===`A`}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled&&!this.disabledInteractive?`-1`:`0`}_getAriaDisabled(){return this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabled(){return this.disabledInteractive||!this.disabled?null:!0}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp`);for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||o)};static ɵcmp=(function(){let e=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`],t=[`mat-icon, [matMenuItemIcon]`,`*`];function n(r,s){r&1&&(_u(),Ei$1(0,`svg`,2),Ap(1,`polygon`,3),_c())}return OE({type:o,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:12,hostBindings:function(s,a){s&1&&Lp(`click`,function(h){return a._checkDisabled(h)})(`mouseenter`,function(){return a._handleMouseEnter()}),s&2&&(_p(`role`,a.role)(`tabindex`,a._getTabIndex())(`aria-disabled`,a._getAriaDisabled())(`disabled`,a._getDisabled()),Wp(`mat-mdc-menu-item-highlighted`,a._highlighted)(`mat-mdc-menu-item-submenu-trigger`,a._triggersSubmenu)(`mat-mdc-menu-item-disabled`,a.disabled)(`mat-mdc-menu-item-disabled-interactive`,a.disabledInteractive))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,g0],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,g0],disableRipple:[2,`disableRipple`,`disableRipple`,g0]},exportAs:[`matMenuItem`],ngContentSelectors:t,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(s,a){s&1&&(yI(e),vI(0),Ei$1(1,`span`,0),vI(2,1),_c(),Ap(3,`div`,1),nI(4,n,2,0,`svg`,2)),s&2&&(av(3),Sp(`matRippleDisabled`,a.disableRipple||a.disabled)(`matRippleTrigger`,a._getHostElement()),av(),oI(a._triggersSubmenu?4:-1))},dependencies:[Wo],encapsulation:2})})()}return o})();var yi$2=new _(`MatMenuContent`);var bi$2=new _(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var dt$1=`_mat-menu-enter`;var Ne$1=`_mat-menu-exit`;var Be$1=(()=>{class o{_elementRef=g(xr);_changeDetectorRef=g(p0);_injector=g(pe$2);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=j();_allItems;_directDescendantItems=new si$2;_classList={};_panelAnimationState=`void`;_animationDone=new K$1;_isAnimating=Dn$2(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=V$1({},this._classList);t&&t.length&&t.split(` `).forEach(r=>{n[r]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(r=>{n[r]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new Pe$3;close=this.closed;panelId=g(Tt$1).getId(`mat-menu-panel-`);constructor(){let e=g(bi$2);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new kt(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(e=>e.disabled&&!e.disabledInteractive),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(Nl(this._directDescendantItems),Xi$1(e=>gg(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let n=e.toArray(),r=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[r]&&!n[r].disabled?t.setActiveItem(r):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Nl(this._directDescendantItems),Xi$1(t=>gg(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:De$1(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=By(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=q$3(V$1({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===Ne$1;(t||e===dt$1)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===dt$1||e===Ne$1)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Ne$1),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?dt$1:Ne$1)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Nl(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||o)};static ɵcmp=(function(){let e=[`*`];function t(n,r){if(n&1){let s=pI();Sc(0,`div`,0),Fp(`click`,function(){gu(s);let l=gI();return mu(l.closed.emit(`click`))})(`animationstart`,function(l){gu(s);let h=gI();return mu(h._onAnimationStart(l.animationName))})(`animationend`,function(l){gu(s);let h=gI();return mu(h._onAnimationDone(l.animationName))})(`animationcancel`,function(l){gu(s);let h=gI();return mu(h._onAnimationDone(l.animationName))}),Sc(1,`div`,1),vI(2),Ac()()}if(n&2){let s=gI();kI(s._classList),Wp(`mat-menu-panel-animations-disabled`,s._animationsDisabled)(`mat-menu-panel-exit-animation`,s._panelAnimationState===`void`)(`mat-menu-panel-animating`,s._isAnimating()),kp(`id`,s.panelId),_p(`aria-label`,s.ariaLabel||null)(`aria-labelledby`,s.ariaLabelledby||null)(`aria-describedby`,s.ariaDescribedby||null)}}return OE({type:o,selectors:[[`mat-menu`]],contentQueries:function(r,s,a){if(r&1&&Vp(a,yi$2,5)(a,ht$2,5)(a,ht$2,4),r&2){let l;II(l=DI())&&(s.lazyContent=l.first),II(l=DI())&&(s._allItems=l),II(l=DI())&&(s.items=l)}},viewQuery:function(r,s){if(r&1&&Hp(br,5),r&2){let a;II(a=DI())&&(s.templateRef=a.first)}},hostVars:3,hostBindings:function(r,s){r&2&&_p(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,g0],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,n=>n==null?null:g0(n)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[KI([{provide:ut$2,useExisting:o}])],ngContentSelectors:e,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(r,s){r&1&&(yI(),Cp(0,t,3,12,`ng-template`))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled], .mat-mdc-menu-item.mat-mdc-menu-item-disabled {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after, .mat-mdc-menu-item.mat-mdc-menu-item-disabled::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})})()}return o})();var wi$2=new _(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let o=g(pe$2);return()=>Ae(o)}});var q$1=/* @__PURE__ */ new WeakMap;var Ci$2=(()=>{class o{_canHaveBackdrop;_element=g(xr);_viewContainerRef=g(xi$2);_menuItemInstance=g(ht$2,{optional:!0,self:!0});_dir=g(y$1,{optional:!0});_focusMonitor=g(At$1);_ngZone=g(he$3);_injector=g(pe$2);_scrollStrategy=g(wi$2);_changeDetectorRef=g(p0);_animationsDisabled=j();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=G$3.EMPTY;_menuCloseSubscription=G$3.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=g(ut$2,{optional:!0});this._parentMaterialMenu=t instanceof Be$1?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&q$1.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=q$1.get(t);q$1.set(t,this),n&&n!==this&&n._closeMenu();let r=this._createOverlay(t),s=r.getConfig(),a=s.positionStrategy;this._setPosition(t,a),this._canHaveBackdrop?s.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:s.hasBackdrop=t.hasBackdrop??!1,r.hasAttached()||(r.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof Be$1&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(_g(t.close)).subscribe(()=>{a.withLockedPosition(!1).reapplyLastPosition(),a.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof Be$1&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(nn$2(1)).subscribe(()=>{t.detach(),q$1.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&q$1.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Ve$1(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof Be$1&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new $$2({positionStrategy:Fe$1(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let r=n.connectionPair.overlayX===`start`?`after`:`before`,s=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(r,s)})})}_setPosition(e,t){let[n,r]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[s,a]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[l,h]=[s,a],[d,u]=[n,r],m=0;if(this._triggersSubmenu()){if(u=n=e.xPosition===`before`?`start`:`end`,r=d=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let g=this._parentMaterialMenu.items.first;this._parentInnerPadding=g?g._getHostElement().offsetTop:0}m=s===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(l=s===`top`?`bottom`:`top`,h=a===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:l,overlayX:d,overlayY:s,offsetY:m},{originX:r,originY:l,overlayX:u,overlayY:s,offsetY:m},{originX:n,originY:h,overlayX:d,overlayY:a,offsetY:-m},{originX:r,originY:h,overlayX:u,overlayY:a,offsetY:-m}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:Yi$1(),r=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Ye$1(s=>this._menuOpen&&s!==this._menuItemInstance)):Yi$1();return gg(e,n,r,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new G$1(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return q$1.get(e)===this}_triggerIsAriaDisabled(){return g0(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){Zv()};static ɵdir=FE({type:o})}return o})();var _o$1=(()=>{class o extends Ci$2{_cleanupTouchstart;_hoverSubscription=G$3.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new Pe$3;onMenuOpen=this.menuOpened;menuClosed=new Pe$3;onMenuClose=this.menuClosed;constructor(){super(!0);let e=g(Va);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{Z$1(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){W$1(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||o)};static ɵdir=FE({type:o,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&Lp(`click`,function(s){return n._handleClick(s)})(`mousedown`,function(s){return n._handleMousedown(s)})(`keydown`,function(s){return n._handleKeydown(s)}),t&2&&_p(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[bp]})}return o})();var vo$1=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=yp({type:o});static ɵinj=As({imports:[Ve$2,ct$1,I,Me]})}return o})();var li$2=class o{isDrawer=Dn$2(!1);open=Dn$2(!1);toggle(){this.open.update(i=>!i)}close(){this.open.set(!1)}static ɵfac=function(e){return new(e||o)};static ɵprov=L$1({token:o,factory:o.ɵfac,providedIn:`root`})};var f=`primary`;var He=Symbol(`RouteTitle`);var Wt=class{params;constructor(n){this.params=n||{}}has(n){return Object.hasOwn(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function oe(t){return new Wt(t)}function Ht(t,n,e){for(let r=0;r<t.length;r++){let i=t[r],o=n[r];if(i[0]===`:`)e[i.substring(1)]=o;else if(i!==o.path)return!1}return!0}function nn(t,n,e){let r=e.path.split(`/`),i=r.indexOf(`**`);if(i===-1){if(r.length>t.length||e.pathMatch===`full`&&(n.hasChildren()||r.length<t.length))return null;let s={},u=t.slice(0,r.length);return Ht(r,u,s)?{consumed:u,posParams:s}:null}if(i!==r.lastIndexOf(`**`))return null;let o=r.slice(0,i),a=r.slice(i+1);if(o.length+a.length>t.length||e.pathMatch===`full`&&n.hasChildren()&&e.path!==`**`)return null;let c={};return!Ht(o,t.slice(0,o.length),c)||!Ht(a,t.slice(t.length-a.length),c)?null:{consumed:t,posParams:c}}function st(t){return new Promise((n,e)=>{t.pipe(Cg()).subscribe({next:r=>n(r),error:r=>e(r)})})}function ei$1(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!H(t[e],n[e]))return!1;return!0}function H(t,n){let e=t?Qt(t):void 0,r=n?Qt(n):void 0;if(!e||!r||e.length!=r.length)return!1;let i;for(let o=0;o<e.length;o++)if(i=e[o],!on(t[i],n[i]))return!1;return!0}function Qt(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function on(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),r=[...n].sort();return e.every((i,o)=>r[o]===i)}else return t===n}function ti(t){return t.length>0?t[t.length-1]:null}function Fe(t){return yg(t)?t:Cc(t)?xe$2(Promise.resolve(t)):Yi$1(t)}function an(t){return yg(t)?st(t):Promise.resolve(t)}var ri$1={exact:cn,subset:un};var sn={exact:ni$1,subset:ii$1,ignored:()=>!0};var cr={paths:`exact`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`exact`};var pe={paths:`subset`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`subset`};function ur(t,n,e){let r=t instanceof M?t:n.parseUrl(t);return Lc(()=>ct(n.lastSuccessfulNavigation()?.finalUrl??new M,r,e))}function ct(t,n,e){let r=V$1(V$1({},pe),e||{});return ri$1[r.paths](t.root,n.root,r.matrixParams)&&sn[r.queryParams](t.queryParams,n.queryParams)&&!(r.fragment===`exact`&&t.fragment!==n.fragment)}function ni$1(t,n){return H(t,n)}function cn(t,n,e){if(!ie(t.segments,n.segments)||!it(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let r in n.children)if(!t.children[r]||!cn(t.children[r],n.children[r],e))return!1;return!0}function ii$1(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>on(t[e],n[e]))}function un(t,n,e){return ln(t,n,n.segments,e)}function ln(t,n,e,r){if(t.segments.length>e.length){let i=t.segments.slice(0,e.length);return!(!ie(i,e)||n.hasChildren()||!it(i,e,r))}else if(t.segments.length===e.length){if(!ie(t.segments,e)||!it(t.segments,e,r))return!1;for(let i in n.children)if(!t.children[i]||!un(t.children[i],n.children[i],r))return!1;return!0}else{let i=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!ie(t.segments,i)||!it(t.segments,i,r)||!t.children[f]?!1:ln(t.children[f],n,o,r)}}function it(t,n,e){return n.every((r,i)=>sn[e](t[i].parameters,r.parameters))}var M=class{root;queryParams;fragment;_queryParamMap;constructor(n=new m([],{}),e={},r=null){this.root=n,this.queryParams=e,this.fragment=r}get queryParamMap(){return this._queryParamMap??=oe(this.queryParams),this._queryParamMap}toString(){return ci$1.serialize(this)}};var m=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ot(this)}};var Y=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=oe(this.parameters),this._parameterMap}toString(){return hn(this)}};function oi$1(t,n){return ie(t,n)&&t.every((e,r)=>H(e.parameters,n[r].parameters))}function ie(t,n){return t.length!==n.length?!1:t.every((e,r)=>e.path===n[r].path)}function ai$1(t,n){let e=[];return Object.entries(t.children).forEach(([r,i])=>{r===f&&(e=e.concat(n(i,r)))}),Object.entries(t.children).forEach(([r,i])=>{r!==f&&(e=e.concat(n(i,r)))}),e}var Re=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=ut$4({token:t,factory:()=>new Z})}return t})();var Z=class{parse(n){let e=new Yt(n);return new M(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${le(n.root,!0)}`;si$1(e)&&(e=`/`);let r=hi(n.queryParams),i=typeof n.fragment==`string`?`#${li$1(n.fragment)}`:``;return`${e}${r}${i}`}};var Yr=`http://fake`;function si$1(t){try{let n=new URL(t,Yr);return n.origin!==Yr||n.pathname.startsWith(`//`)}catch{return!0}}var ci$1=new Z;function ot(t){return t.segments.map(n=>hn(n)).join(`/`)}function le(t,n){if(!t.hasChildren())return ot(t);if(n){let e=t.children[f]?le(t.children[f],!1):``,r=[];return Object.entries(t.children).forEach(([i,o])=>{i!==f&&r.push(`${i}:${le(o,!1)}`)}),r.length>0?`${e}(${r.join(`//`)})`:e}else{if(Object.keys(t.children).length===1&&t.children[f]!=null)return`${ot(t)}/${le(t.children[f],!1)}`;let e=ai$1(t,(r,i)=>i===f?[ui(le(t.children[f],!1))]:[`${i}:${le(r,!1)}`]);return`${ot(t)}/(${e.join(`//`)})`}}function ui(t){return t.replace(fn$1,n=>n.replace(/:/g,`%3A`))}function dn(t){return encodeURIComponent(t).replace(/%40/g,`@`).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`)}function rt(t){return dn(t).replace(/%3B/gi,`;`)}function li$1(t){return encodeURI(t)}function Kt(t){return dn(t).replace(/\(/g,`%28`).replace(/\)/g,`%29`).replace(/%26/gi,`&`)}function at(t){return decodeURIComponent(t)}function Zr(t){return at(t.replace(/\+/g,`%20`))}function hn(t){return`${Kt(t.path)}${di$1(t.parameters)}`}function di$1(t){return Object.entries(t).map(([n,e])=>`;${Kt(n)}=${Kt(e)}`).join(``)}function hi(t){let n=Object.entries(t).map(([e,r])=>Array.isArray(r)?r.map(i=>`${rt(e)}=${rt(i)}`).join(`&`):`${rt(e)}=${rt(r)}`).filter(e=>e);return n.length?`?${n.join(`&`)}`:``}var Ft=1073741824;function ut$1(t,n,e){Number(n)>=32&&!Object.hasOwn(t,Ft)&&(t[Ft]=e,delete t[Ft]),t[n]=e}var fn$1=/^[^\/()?;#]+/;function Bt(t){let n=t.match(fn$1);return n?n[0]:``}var fi$1=/^[^\/()?;=#]+/;function pi$1(t){let n=t.match(fi$1);return n?n[0]:``}var gi$1=/^[^=?&#]+/;function vi$1(t){let n=t.match(gi$1);return n?n[0]:``}var mi=/^[^&#]+/;function yi$1(t){let n=t.match(mi);return n?n[0]:``}var Yt=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional(`/`););return this.remaining===``||this.peekStartsWith(`?`)||this.peekStartsWith(`#`)?new m([],{}):new m([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional(`?`))do this.parseQueryParam(n);while(this.consumeOptional(`&`));return n}parseFragment(){return this.consumeOptional(`#`)?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new b$1(4010,!1);if(this.remaining===``)return{};this.consumeOptional(`/`);let e=[];for(this.peekStartsWith(`(`)||e.push(this.parseSegment());this.peekStartsWith(`/`)&&!this.peekStartsWith(`//`)&&!this.peekStartsWith(`/(`);)this.capture(`/`),e.push(this.parseSegment());let r={};this.peekStartsWith(`/(`)&&(this.capture(`/`),r=this.parseParens(!0,n));let i={};return this.peekStartsWith(`(`)&&(i=this.parseParens(!1,n)),(e.length>0||Object.keys(r).length>0)&&(i[f]=new m(e,r)),i}parseSegment(){let n=Bt(this.remaining);if(n===``&&this.peekStartsWith(`;`))throw new b$1(4009,!1);return this.capture(n),new Y(at(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(`;`);)this.parseParam(n);return n}parseParam(n){let e=pi$1(this.remaining);if(!e)return;this.capture(e);let r=``;if(this.consumeOptional(`=`)){let i=Bt(this.remaining);i&&(r=i,this.capture(r))}ut$1(n,at(e),at(r))}parseQueryParam(n){let e=vi$1(this.remaining);if(!e)return;this.capture(e);let r=``;if(this.consumeOptional(`=`)){let a=yi$1(this.remaining);a&&(r=a,this.capture(r))}let i=Zr(e),o=Zr(r);if(Object.hasOwn(n,i)){let a=n[i];Array.isArray(a)||(a=[a],n[i]=a),a.push(o)}else n[i]=o}parseParens(n,e){let r=Object.create(null);for(this.capture(`(`);!this.consumeOptional(`)`)&&this.remaining.length>0;){let i=Bt(this.remaining),o=this.remaining[i.length];if(o!==`/`&&o!==`)`&&o!==`;`)throw new b$1(4010,!1);let a;i.indexOf(`:`)>-1?(a=i.slice(0,i.indexOf(`:`)),this.capture(a),this.capture(`:`)):n&&(a=f);let c=this.parseChildren(e+1),s=Object.keys(c).length===1&&c[f]?c[f]:new m([],c);ut$1(r,a??f,s),this.consumeOptional(`//`)}return r}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new b$1(4011,!1)}};function pn(t){return t.segments.length>0?new m([],{[f]:t}):t}function gn$1(t){let n=Object.create(null);for(let[r,i]of Object.entries(t.children)){let o=gn$1(i);if(r===f&&o.segments.length===0&&o.hasChildren())for(let[a,c]of Object.entries(o.children))ut$1(n,a,c);else(o.segments.length>0||o.hasChildren())&&ut$1(n,r,o)}return Ri(new m(t.segments,n))}function Ri(t){if(t.numberOfChildren===1&&t.children[f]){let n=t.children[f];return new m(t.segments.concat(n.segments),n.children)}return t}function J(t){return t instanceof M}function vn$1(t,n,e=null,r=null,i=new Z){return yn$1(mn(t),n,e,r,i)}function mn(t){let n;function e(o){let a={};for(let s of o.children){let u=e(s);a[s.outlet]=u}let c=new m(o.url,a);return o===t&&(n=c),c}let i=pn(e(t.root));return n??i}function yn$1(t,n,e,r,i){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Vt(o,o,o,e,r,i);let a=Si$1(n);if(a.toRoot())return Vt(o,o,new m([],{}),e,r,i);let c=Ci$1(a,o,t),s=c.processChildren?Ne(c.segmentGroup,c.index,a.commands):Sn$1(c.segmentGroup,c.index,a.commands);return Vt(o,c.segmentGroup,s,e,r,i)}function lt(t){return typeof t==`object`&&t!=null&&!t.outlets&&!t.segmentPath}function Pe(t){return typeof t==`object`&&t!=null&&t.outlets}function Jr(t,n,e){t||=`ɵ`;let r=new M;return r.queryParams={[t]:n},e.parse(e.serialize(r)).queryParams[t]}function Vt(t,n,e,r,i,o){let a={};for(let[u,l]of Object.entries(r??{}))l!=null&&(a[u]=Array.isArray(l)?l.map(v=>Jr(u,v,o)):Jr(u,l,o));let c;t===n?c=e:c=Rn$1(t,n,e);return new M(pn(gn$1(c)),a,i)}function Rn$1(t,n,e){let r=Object.create(null);return Object.entries(t.children).forEach(([i,o])=>{o===n?r[i]=e:r[i]=Rn$1(o,n,e)}),new m(t.segments,r)}var dt=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,r){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=r,n&&r.length>0&&lt(r[0]))throw new b$1(4003,!1);let i=r.find(Pe);if(i&&i!==ti(r))throw new b$1(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]==`/`}};function Si$1(t){if(typeof t[0]==`string`&&t.length===1&&t[0]===`/`)return new dt(!0,0,t);let n=0,e=!1,r=t.reduce((i,o,a)=>{if(typeof o==`object`&&o!=null){if(o.outlets){let c={};return Object.entries(o.outlets).forEach(([s,u])=>{c[s]=typeof u==`string`?u.split(`/`):u}),[...i,{outlets:c}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!=`string`?[...i,o]:a===0?(o.split(`/`).forEach((c,s)=>{s==0&&c===`.`||(s==0&&c===``?e=!0:c===`..`?n++:c!=``&&i.push(c))}),i):[...i,o]},[]);return new dt(e,n,r)}var he=class{segmentGroup;processChildren;index;constructor(n,e,r){this.segmentGroup=n,this.processChildren=e,this.index=r}};function Ci$1(t,n,e){if(t.isAbsolute)return new he(n,!0,0);if(!e)return new he(n,!1,NaN);if(e.parent===null)return new he(e,!0,0);let r=lt(t.commands[0])?0:1;return wi$1(e,e.segments.length-1+r,t.numberOfDoubleDots)}function wi$1(t,n,e){let r=t,i=n,o=e;for(;o>i;){if(o-=i,r=r.parent,!r)throw new b$1(4005,!1);i=r.segments.length}return new he(r,!1,i-o)}function bi$1(t){return Pe(t[0])?t[0].outlets:{[f]:t}}function Sn$1(t,n,e){if(t??=new m([],{}),t.segments.length===0&&t.hasChildren())return Ne(t,n,e);let r=Ii(t,n,e),i=e.slice(r.commandIndex);if(r.match&&r.pathIndex<t.segments.length){let o=new m(t.segments.slice(0,r.pathIndex),{});return o.children[f]=new m(t.segments.slice(r.pathIndex),t.children),Ne(o,0,i)}else return r.match&&i.length===0?new m(t.segments,{}):r.match&&!t.hasChildren()?Zt(t,n,e):r.match?Ne(t,0,i):Zt(t,n,e)}function Ne(t,n,e){if(e.length===0)return new m(t.segments,{});{let r=bi$1(e),i=Object.create(null);if(Object.keys(r).some(o=>o!==f)&&t.children[f]&&t.numberOfChildren===1&&t.children[f].segments.length===0){let o=Ne(t.children[f],n,e);return new m(t.segments,o.children)}return Object.entries(r).forEach(([o,a])=>{typeof a==`string`&&(a=[a]),a!==null&&(i[o]=Sn$1(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{r[o]===void 0&&(i[o]=a)}),new m(t.segments,i)}}function Ii(t,n,e){let r=0,i=n,o={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(r>=e.length)return o;let a=t.segments[i],c=e[r];if(Pe(c))break;let s=`${c}`,u=r<e.length-1?e[r+1]:null;if(i>0&&s===void 0)break;if(s&&u&&typeof u==`object`&&u.outlets===void 0){if(!en(s,u,a))return o;r+=2}else{if(!en(s,{},a))return o;r++}i++}return{match:!0,pathIndex:i,commandIndex:r}}function Zt(t,n,e){let r=t.segments.slice(0,n),i=0;for(;i<e.length;){let o=e[i];if(Pe(o))return new m(r,Ei(o.outlets));if(i===0&&lt(e[0])){let s=t.segments[n];r.push(new Y(s.path,Xr(e[0]))),i++;continue}let a=Pe(o)?o.outlets[f]:`${o}`,c=i<e.length-1?e[i+1]:null;a&&c&&lt(c)?(r.push(new Y(a,Xr(c))),i+=2):(r.push(new Y(a,{})),i++)}return new m(r,{})}function Ei(t){let n={};return Object.entries(t).forEach(([e,r])=>{typeof r==`string`&&(r=[r]),r!==null&&(n[e]=Zt(new m([],{}),0,r))}),n}function Xr(t){let n={};return Object.entries(t).forEach(([e,r])=>n[e]=`${r}`),n}function en(t,n,e){return t==e.path&&H(n,e.parameters)}var ht$1=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new ae(this.rootInjector)}resetChildren(){this.children=new ae(this.rootInjector)}};var ae=(()=>{class t{rootInjector;contexts=/* @__PURE__ */ new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,r){let i=this.getOrCreateContext(e);i.outlet=r,this.contexts.set(e,i)}onChildOutletDestroyed(e){let r=this.getContext(e);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=/* @__PURE__ */ new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let r=this.getContext(e);return r||(r=new ht$1(this.rootInjector),this.contexts.set(e,r)),r}getContext(e){return this.contexts.get(e)||null}static ɵfac=function(r){return new(r||t)(Z$2(ie$1))};static ɵprov=L$1({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var ft$1=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Jt(n,this._root);return e?e.children.map(r=>r.value):[]}firstChild(n){let e=Jt(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Xt(n,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==n)}pathFromRoot(n){return Xt(n,this._root).map(e=>e.value)}};function Jt(t,n){if(t===n.value)return n;for(let e of n.children){let r=Jt(t,e);if(r)return r}return null}function Xt(t,n){if(t===n.value)return[n];for(let e of n.children){let r=Xt(t,e);if(r.length)return r.unshift(n),r}return[]}var E=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function de(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Le=class extends ft$1{snapshot;constructor(n,e){super(n),this.snapshot=e,dr(this,n)}toString(){return this.snapshot.toString()}};function Cn(t,n){let e=Mi$1(t,n),r=new Un$2([new Y(``,{})]),i=new Un$2({}),o=new Un$2({}),s=new G(r,i,new Un$2({}),new Un$2(``),o,f,t,e.root);return s.snapshot=e.root,new Le(new E(s,[]),e)}function Mi$1(t,n){return new je(``,new E(new ge([],{},{},``,{},f,t,null,{},n),[]))}var G=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(n,e,r,i,o,a,c,s){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=r,this.fragmentSubject=i,this.dataSubject=o,this.outlet=a,this.component=c,this._futureSnapshot=s,this.title=this.dataSubject?.pipe(te(u=>u[He]))??Yi$1(void 0),this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(te(n=>oe(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(te(n=>oe(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(n){this._futureSnapshot=n,this.pending?.set(!0)}};var Ai$1=`always`;function lr(t,n,e){let r,{routeConfig:i}=t;return n!==null&&(e===`always`||i?.path===``||!n.component&&!n.routeConfig?.loadComponent)?r={params:Object.keys(t.params).length===0?n.params:Object.freeze(V$1(V$1({},n.params),t.params)),data:Object.freeze(V$1(V$1({},n.data),t.data)),resolve:V$1(V$1(V$1(V$1({},t.data),n.data),i?.data),t._resolvedData)}:r={params:Object.freeze(V$1({},t.params)),data:Object.freeze(V$1({},t.data)),resolve:V$1(V$1({},t.data),t._resolvedData??{})},i&&bn$1(i)&&(r.resolve[He]=i.title),r}var ge=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[He]}constructor(n,e,r,i,o,a,c,s,u,l){this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o,this.outlet=a,this.component=c,this.routeConfig=s,this._resolve=u,this._environmentInjector=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=oe(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=oe(this.queryParams),this._queryParamMap}toString(){return`Route(url:'${this.url.map(r=>r.toString()).join(`/`)}', path:'${this.routeConfig?this.routeConfig.path:``}')`}};var je=class extends ft$1{url;constructor(n,e){super(e),this.url=n,dr(this,e)}toString(){return wn$1(this._root)}};function dr(t,n){n.value._routerState=t,n.children.forEach(e=>dr(t,e))}function wn$1(t){let n=t.children.length>0?` { ${t.children.map(wn$1).join(`, `)} } `:``;return`${t.value}${n}`}function Gt(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,H(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),H(n.params,e.params)||t.paramsSubject.next(e.params),ei$1(n.url,e.url)||t.urlSubject.next(e.url),H(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function er(t,n){let e=H(t.params,n.params)&&oi$1(t.url,n.url),r=!t.parent!=!n.parent;return e&&!r&&(!t.parent||er(t.parent,n.parent))}function bn$1(t){return typeof t.title==`string`||t.title===null}var In$1=new _(``);var hr=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=f;activateEvents=new Pe$3;deactivateEvents=new Pe$3;attachEvents=new Pe$3;detachEvents=new Pe$3;routerOutletData=l0();parentContexts=g(ae);location=g(xi$2);changeDetector=g(p0);inputBinder=g(Mt,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:r,previousValue:i}=e.name;if(r)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new b$1(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new b$1(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new b$1(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,r){this.activated=e,this._activatedRoute=r,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.inputBinder?.unsubscribeFromRouteData(this),this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,r){if(this.isActivated)throw new b$1(4013,!1);this._activatedRoute=e;let i=this.location,a=e.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,s=new tr(e,c,i.injector,this.routerOutletData);this.activated=i.createComponent(a,{index:i.length,injector:s,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.activateEvents.emit(this.activated.instance)}static ɵfac=function(r){return new(r||t)};static ɵdir=FE({type:t,selectors:[[`router-outlet`]],inputs:{name:`name`,routerOutletData:[1,`routerOutletData`]},outputs:{activateEvents:`activate`,deactivateEvents:`deactivate`,attachEvents:`attach`,detachEvents:`detach`},exportAs:[`outlet`],features:[Pm]})}return t})();var tr=class{route;childContexts;parent;outletData;constructor(n,e,r,i){this.route=n,this.childContexts=e,this.parent=r,this.outletData=i}get(n,e){return n===G?this.route:n===ae?this.childContexts:n===In$1?this.outletData:this.parent.get(n,e)}};var Mt=new _(``);var fr=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵcmp=OE({type:t,selectors:[[`ng-component`]],exportAs:[`emptyRouterOutlet`],decls:1,vars:0,template:function(r,i){r&1&&Ap(0,`router-outlet`)},dependencies:[hr],encapsulation:2,changeDetection:1})}return t})();function pr(t){let n=t.children&&t.children.map(pr),e=n?q$3(V$1({},t),{children:n}):V$1({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==f&&(e.component=fr),e}var _e=`imperative`;var C=(function(t){return t[t.NavigationStart=0]=`NavigationStart`,t[t.NavigationEnd=1]=`NavigationEnd`,t[t.NavigationCancel=2]=`NavigationCancel`,t[t.NavigationError=3]=`NavigationError`,t[t.RoutesRecognized=4]=`RoutesRecognized`,t[t.ResolveStart=5]=`ResolveStart`,t[t.ResolveEnd=6]=`ResolveEnd`,t[t.GuardsCheckStart=7]=`GuardsCheckStart`,t[t.GuardsCheckEnd=8]=`GuardsCheckEnd`,t[t.RouteConfigLoadStart=9]=`RouteConfigLoadStart`,t[t.RouteConfigLoadEnd=10]=`RouteConfigLoadEnd`,t[t.ChildActivationStart=11]=`ChildActivationStart`,t[t.ChildActivationEnd=12]=`ChildActivationEnd`,t[t.ActivationStart=13]=`ActivationStart`,t[t.ActivationEnd=14]=`ActivationEnd`,t[t.Scroll=15]=`Scroll`,t[t.NavigationSkipped=16]=`NavigationSkipped`,t})(C||{});var U$1=class{id;url;constructor(n,e){this.id=n,this.url=e}};var se=class extends U$1{type=C.NavigationStart;navigationTrigger;restoredState;constructor(n,e,r=`imperative`,i=null){super(n,e),this.navigationTrigger=r,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}};var $$1=class extends U$1{urlAfterRedirects;type=C.NavigationEnd;constructor(n,e,r){super(n,e),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}};var b=(function(t){return t[t.Redirect=0]=`Redirect`,t[t.SupersededByNewNavigation=1]=`SupersededByNewNavigation`,t[t.NoDataFromResolver=2]=`NoDataFromResolver`,t[t.GuardRejected=3]=`GuardRejected`,t[t.Aborted=4]=`Aborted`,t})(b||{});var xe=(function(t){return t[t.IgnoredSameUrlNavigation=0]=`IgnoredSameUrlNavigation`,t[t.IgnoredByUrlHandlingStrategy=1]=`IgnoredByUrlHandlingStrategy`,t})(xe||{});var L=class extends U$1{reason;code;type=C.NavigationCancel;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function En$1(t){return t instanceof L&&(t.code===b.Redirect||t.code===b.SupersededByNewNavigation)}var W=class extends U$1{reason;code;type=C.NavigationSkipped;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}};var ce=class extends U$1{error;target;type=C.NavigationError;constructor(n,e,r,i){super(n,e),this.error=r,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}};var ke$1=class extends U$1{urlAfterRedirects;state;type=C.RoutesRecognized;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var pt$1=class extends U$1{urlAfterRedirects;state;type=C.GuardsCheckStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var gt$1=class extends U$1{urlAfterRedirects;state;shouldActivate;type=C.GuardsCheckEnd;constructor(n,e,r,i,o){super(n,e),this.urlAfterRedirects=r,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}};var vt$1=class extends U$1{urlAfterRedirects;state;type=C.ResolveStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var mt$1=class extends U$1{urlAfterRedirects;state;type=C.ResolveEnd;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var yt=class{route;type=C.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}};var Rt=class{route;type=C.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}};var St=class{snapshot;type=C.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var Ct=class{snapshot;type=C.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var wt$1=class{snapshot;type=C.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var bt$1=class{snapshot;type=C.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var ve=class{};var $e=class{};var me=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function Di$1(t){return!(t instanceof ve)&&!(t instanceof me)&&!(t instanceof $e)}function Ti$1(t,n,e){let r=/* @__PURE__ */ new Set;return{newlyCreatedRoutes:r,state:new Le(ze(t,n._root,e?e._root:void 0,r),n)}}function ze(t,n,e,r){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._setPending(n.value);return new E(i,Ni(t,n,e,r))}else{if(t.shouldAttach(n.value)){let a=t.retrieve(n.value);if(a!==null){let c=a.route;return c.value._setPending(n.value),c.children=n.children.map(s=>ze(t,s,void 0,r)),c}}let i=_i$1(n.value);i._setPending(n.value),r.add(i);return new E(i,n.children.map(a=>ze(t,a,void 0,r)))}}function Ni(t,n,e,r){return n.children.map(i=>{for(let o of e.children)if(t.shouldReuseRoute(i.value,o.value.snapshot))return ze(t,i,o,r);return ze(t,i,void 0,r)})}function _i$1(t){return new G(new Un$2(t.url),new Un$2(t.params),new Un$2(t.queryParams),new Un$2(t.fragment),new Un$2(t.data),t.outlet,t.component,t)}var X$1=class t extends Error{redirectTo;navigationBehaviorOptions;constructor(n,e){super(),this.redirectTo=n,this.navigationBehaviorOptions=e,Object.setPrototypeOf(this,t.prototype)}};var Mn$1=`ngNavigationCancelingError`;function Ue(t,n){let{redirectTo:e,navigationBehaviorOptions:r}=J(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,i=An$1(!1,b.Redirect);return i.url=e,i.navigationBehaviorOptions=r,i}function An$1(t,n){let e=/* @__PURE__ */ new Error(`NavigationCancelingError: ${t||``}`);return e[Mn$1]=!0,e.cancellationCode=n,e}function Ui(t){return Dn$1(t)&&J(t.url)}function Dn$1(t){return!!t&&t[Mn$1]}var rr=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,r,i,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=r,this.forwardEvent=i,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,r,n),Gt(this.futureState.root),this.activateChildRoutes(e,r,n)}deactivateChildRoutes(n,e,r){let i=de(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,i[a],r),delete i[a]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,r)})}deactivateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(i===o)if(i.component){let a=r.getContext(i.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,r);else o&&this.deactivateRouteAndItsChildren(e,r)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=de(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);if(r&&r.outlet){let a=r.outlet.detach(),c=r.children.contexts;r.resetChildren(),this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:c})}}deactivateRouteAndOutlet(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=de(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null),n.value._localInjector?.destroy()}activateChildRoutes(n,e,r){let i=de(e);n.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],r),this.forwardEvent(new bt$1(o.value.snapshot))}),n.children.length&&this.forwardEvent(new Ct(n.value.snapshot))}activateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(Gt(i),i===o)if(i.component){let a=r.getOrCreateContext(i.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,r);else if(i.component){let a=r.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let c=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),a.children.onOutletReAttached(c.contexts),a.attachRef=c.componentRef,a.route=c.route.value,a.outlet&&a.outlet.attach(c.componentRef,c.route.value),Gt(c.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=i,a.outlet&&a.outlet.activateWith(i,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,r)}};var It=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}};var fe=class{component;route;constructor(n,e){this.component=n,this.route=e}};function Oi(t,n,e){let r=t._root;return Te(r,n?n._root:null,e,[r.value])}function Pi(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Se$1(t,n){let e=Symbol(),r=n.get(t,e);return r===e?typeof t==`function`&&!Hg(t)?t:n.get(t):r}function Te(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=de(n);return t.children.forEach(a=>{Li(a,o[a.value.outlet],e,r.concat([a.value]),i),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,c])=>Oe(c,e.getContext(a),e,i)),i}function Li(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,c=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let s=ji(a,o,o.routeConfig.runGuardsAndResolvers);s?i.canActivateChecks.push(new It(r)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Te(t,n,c?c.children:null,r,i):Te(t,n,e,r,i),s&&c&&c.outlet&&c.outlet.isActivated&&i.canDeactivateChecks.push(new fe(c.outlet.component,a))}else a&&Oe(n,c,e,i),i.canActivateChecks.push(new It(r)),o.component?Te(t,null,c?c.children:null,r,i):Te(t,null,e,r,i);return i}function ji(t,n,e){if(typeof e==`function`)return hn$2(n._environmentInjector,()=>e(t,n));switch(e){case`pathParamsChange`:return!ie(t.url,n.url);case`pathParamsOrQueryParamsChange`:return!ie(t.url,n.url)||!H(t.queryParams,n.queryParams);case`always`:return!0;case`paramsOrQueryParamsChange`:return!er(t,n)||!H(t.queryParams,n.queryParams);default:return!er(t,n)}}function Oe(t,n,e,r){let i=de(t),o=t.value;Object.entries(i).forEach(([a,c])=>{o.component?n?Oe(c,n.children.getContext(a),n.children,r):Oe(c,null,null,r):Oe(c,e?e.getContext(a):null,e,r)}),o.component?n&&n.outlet&&n.outlet.isActivated?r.canDeactivateChecks.push(new fe(n.outlet.component,o)):r.canDeactivateChecks.push(new fe(null,o)):r.canDeactivateChecks.push(new fe(null,o))}function Be(t){return typeof t==`function`}function xi$1(t){return typeof t==`boolean`}function ki$1(t){return t&&Be(t.canLoad)}function $i(t){return t&&Be(t.canActivate)}function zi(t){return t&&Be(t.canActivateChild)}function qi(t){return t&&Be(t.canDeactivate)}function Hi(t){return t&&Be(t.canMatch)}function Tn$1(t){return t instanceof yt$1||t?.name===`EmptyError`}var nt$1=Symbol(`INITIAL_VALUE`);function ye(){return Xi$1(t=>vg(t.map(n=>n.pipe(nn$2(1),Ji$1(e=>{if(e instanceof X$1)return Yi$1(e);throw e}),Nl(nt$1)))).pipe(te(n=>{for(let e of n)if(e!==!0){if(e===nt$1)return nt$1;if(e===!1||Fi(e))return e}return!0}),Ye$1(n=>n!==nt$1),nn$2(1)))}function Fi(t){return J(t)||t instanceof X$1}function Nn$1(t){return new N(n=>{if(t.aborted){n.next(),n.complete();return}let e=()=>{n.next(),n.complete()};return t.addEventListener(`abort`,e),()=>t.removeEventListener(`abort`,e)})}function _n$1(t){return _g(Nn$1(t))}function Bi(t){return Re$3(n=>{let{targetSnapshot:e,currentSnapshot:r,guards:{canActivateChecks:i,canDeactivateChecks:o}}=n;return o.length===0&&i.length===0?Yi$1(q$3(V$1({},n),{guardsResult:!0})):Vi(o,e,r).pipe(Re$3(a=>a&&xi$1(a)?Gi(e,i,t):Yi$1(a)),te(a=>q$3(V$1({},n),{guardsResult:a})))})}function Vi(t,n,e){return xe$2(t).pipe(Re$3(r=>Zi(r.component,r.route,e,n)),Cg(r=>r!==!0,!0))}function Gi(t,n,e){return xe$2(n).pipe(Ki$1(r=>tn$2(Qi(r.route.parent,e),Wi(r.route,e),Yi(t,r.path),Ki(t,r.route))),Cg(r=>r!==!0,!0))}function Wi(t,n){return t!==null&&n&&n(new wt$1(t)),Yi$1(!0)}function Qi(t,n){return t!==null&&n&&n(new St(t)),Yi$1(!0)}function Ki(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return Yi$1(!0);let r=e.map(i=>Ig(()=>{let o=n._environmentInjector,a=Se$1(i,o);return Fe($i(a)?a.canActivate(n,t):hn$2(o,()=>a(n,t))).pipe(Cg())}));return Yi$1(r).pipe(ye())}function Yi(t,n){let e=n[n.length-1],i=n.slice(0,n.length-1).reverse().map(o=>Pi(o)).filter(o=>o!==null).map(o=>Ig(()=>{let a=o.guards.map(c=>{let s=o.node._environmentInjector,u=Se$1(c,s);return Fe(zi(u)?u.canActivateChild(e,t):hn$2(s,()=>u(e,t))).pipe(Cg())});return Yi$1(a).pipe(ye())}));return Yi$1(i).pipe(ye())}function Zi(t,n,e,r){let i=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!i||i.length===0)return Yi$1(!0);let o=i.map(a=>{let c=n._environmentInjector,s=Se$1(a,c);return gr(()=>qi(s)?s.canDeactivate(t,n,e,r):hn$2(c,()=>s(t,n,e,r))).pipe(Cg())});return Yi$1(o).pipe(ye())}function Ji(t,n,e,r,i){let o=n.canLoad;if(o===void 0||o.length===0)return Yi$1(!0);let a=o.map(c=>{let s=Se$1(c,t),u=gr(()=>ki$1(s)?s.canLoad(n,e):hn$2(t,()=>s(n,e)));return i?u.pipe(_n$1(i)):u});return Yi$1(a).pipe(ye(),Un$1(r))}function gr(t){try{return Fe(t())}catch(n){return new N(e=>e.error(n))}}function Un$1(t){return Zh(Sg(n=>{if(typeof n!=`boolean`)throw Ue(t,n)}),te(n=>n===!0))}function Xi(t,n,e,r,i,o){let a=n.canMatch;if(!a||a.length===0)return Yi$1(!0);let c=a.map(s=>{let u=Se$1(s,t);return gr(()=>Hi(u)?u.canMatch(n,e,i):hn$2(t,()=>u(n,e,i))).pipe(_n$1(o))});return Yi$1(c).pipe(ye(),Un$1(r))}var q=class t extends Error{name=`NoMatch`;segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}};var qe$1=class t extends Error{urlTree;name=`AbsoluteRedirect`;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function eo(t){throw new b$1(4e3,!1)}function to(t){throw An$1(!1,b.GuardRejected)}var nr=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let r=[],i=e.root;for(;;){if(r=r.concat(i.segments),i.numberOfChildren===0)return r;if(i.numberOfChildren>1||!i.children[f])throw eo(`${n.redirectTo}`);i=i.children[f]}}async applyRedirectCommands(n,e,r,i,o){let a=await ro(e,i,o);if(a instanceof M)throw new qe$1(a);let c=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,r);if(a[0]===`/`)throw new qe$1(c);return c}applyRedirectCreateUrlTree(n,e,r,i){return new M(this.createSegmentGroup(n,e.root,r,i),this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let r={};return Object.entries(n).forEach(([i,o])=>{if(typeof o==`string`&&o[0]===`:`){let c=o.substring(1);r[i]=e[c]}else r[i]=o}),r}createSegmentGroup(n,e,r,i){let o=this.createSegments(n,e.segments,r,i),a=Object.create(null);return Object.entries(e.children).forEach(([c,s])=>{a[c]=this.createSegmentGroup(n,s,r,i)}),new m(o,a)}createSegments(n,e,r,i){return e.map(o=>o.path[0]===`:`?this.findPosParam(n,o,i):this.findOrReturn(o,r))}findPosParam(n,e,r){let i=r[e.path.substring(1)];if(!i)throw new b$1(4001,!1);return i}findOrReturn(n,e){let r=0;for(let i of e){if(i.path===n.path)return e.splice(r),i;r++}return n}};function ro(t,n,e){if(typeof t==`string`)return Promise.resolve(t);let r=t;return st(Fe(hn$2(e,()=>r(n))))}function no(t,n){return t.providers&&!t._injector&&(t._injector=mp(t.providers,n,`Route: ${t.path}`)),t._injector??n}function F(t){return t.outlet||f}function io(t,n){let e=t.filter(r=>F(r)===n);return e.push(...t.filter(r=>F(r)!==n)),e}var ir={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function On$1(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function oo(t,n,e,r,i,o,a){let c=Pn$1(t,n,e);if(!c.matched)return Yi$1(c);let s=On$1(o(c));return r=no(n,r),Xi(r,n,e,i,s,a).pipe(te(u=>u===!0?c:V$1({},ir)))}function Pn$1(t,n,e){if(n.path===``)return n.pathMatch===`full`&&(t.hasChildren()||e.length>0)?V$1({},ir):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(n.matcher||nn)(e,t,n);if(!i)return V$1({},ir);let o={};Object.entries(i.posParams??{}).forEach(([c,s])=>{o[c]=s.path});let a=i.consumed.length>0?V$1(V$1({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:a,positionalParamSegments:i.posParams??{}}}function tn(t,n,e,r){return e.length>0&&co(t,e,r)?{segmentGroup:new m(n,so(r,new m(e,t.children))),slicedSegments:[]}:e.length===0&&uo(t,e,r)?{segmentGroup:new m(t.segments,ao(t,e,r,t.children)),slicedSegments:e}:{segmentGroup:new m(t.segments,t.children),slicedSegments:e}}function ao(t,n,e,r){let i={};for(let o of e)if(At(t,n,o)&&!r[F(o)]){let a=new m([],{});i[F(o)]=a}return V$1(V$1({},r),i)}function so(t,n){let e={};e[f]=n;for(let r of t)if(r.path===``&&F(r)!==f){let i=new m([],{});e[F(r)]=i}return e}function co(t,n,e){return e.some(r=>At(t,n,r)&&F(r)!==f)}function uo(t,n,e){return e.some(r=>At(t,n,r))}function At(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch===`full`?!1:e.path===``}function lo(t,n,e){return n.length===0&&!t.hasChildren()}var or=class{};async function ho(t,n,e,r,i,o,a,c){return new ar(t,n,e,r,i,a,o,c).recognize()}var fo=31;var ar=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;queryParams;constructor(n,e,r,i,o,a,c,s){this.injector=n,this.configLoader=e,this.rootComponentType=r,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=c,this.abortSignal=s,this.applyRedirects=new nr(this.urlSerializer,this.urlTree),this.queryParams=Object.freeze(V$1({},this.urlTree.queryParams))}noMatchError(n){return new b$1(4002,`'${n.segmentGroup}'`)}async recognize(){let n=tn(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:r}=await this.match(n),o=new je(``,new E(r,e)),a=vn$1(r,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new ge([],Object.freeze({}),this.queryParams,this.urlTree.fragment,Object.freeze({}),f,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,f,e),rootSnapshot:e}}catch(r){if(r instanceof qe$1)return this.absoluteRedirectCount++,this.absoluteRedirectCount>fo&&(this.allowRedirects=!1),this.urlTree=r.urlTree,this.queryParams=Object.freeze(V$1({},this.urlTree.queryParams)),this.match(r.urlTree.root);throw r instanceof q?this.noMatchError(r):r}}async processSegmentGroup(n,e,r,i,o){if(r.segments.length===0&&r.hasChildren())return this.processChildren(n,e,r,o);let a=await this.processSegment(n,e,r,r.segments,i,!0,o);return a instanceof E?[a]:[]}async processChildren(n,e,r,i){let o=[];for(let s of Object.keys(r.children))s===`primary`?o.unshift(s):o.push(s);let a=[];for(let s of o){let u=r.children[s],l=io(e,s),v=await this.processSegment(n,l,u,u.segments,s,!0,i);v instanceof E&&a.push(v)}let c=Ln$1(a);return po(c),c}async processSegment(n,e,r,i,o,a,c){for(let s of e)try{return await this.processSegmentAgainstRoute(s._injector??n,e,s,r,i,o,a,c)}catch(u){if(u instanceof q||Tn$1(u))continue;throw u}if(lo(r,i))return new or;throw new q(r)}async processSegmentAgainstRoute(n,e,r,i,o,a,c,s){if(F(r)!==a&&(a===f||!At(i,o,r)||!r.children?.length&&!r.loadChildren||o.length===0&&!i.hasChildren()))throw new q(i);if(r.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,i,r,o,a,s);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(n,i,e,r,o,a,s);throw new q(i)}async expandSegmentAgainstRouteUsingRedirect(n,e,r,i,o,a,c){let{matched:s,parameters:u,consumedSegments:l,positionalParamSegments:v,remainingSegments:g}=Pn$1(e,i,o);if(!s)throw new q(e);let w=this.createSnapshot(n,i,o,u,c);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let j=await this.applyRedirects.applyRedirectCommands(l,i.redirectTo,v,On$1(w),n),B=await this.applyRedirects.lineralizeSegments(i,j);return this.processSegment(n,r,e,B.concat(g),a,!1,c)}createSnapshot(n,e,r,i,o){let a=new ge(r,i,this.queryParams,this.urlTree.fragment,mo(e),F(e),e.component??e._loadedComponent??null,e,yo(e),n),c=lr(a,o,this.paramsInheritanceStrategy);return a.params=c.params,a.data=c.data,a}async matchSegmentAgainstRoute(n,e,r,i,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let c=ee=>this.createSnapshot(n,r,ee.consumedSegments,ee.parameters,a),s=await st(oo(e,r,i,n,this.urlSerializer,c,this.abortSignal));if(r.path===`**`&&(e.children={}),!s?.matched)throw new q(e);n=r._injector??n;let{routes:u}=await this.getChildConfig(n,r,i),l=r._loadedInjector??n,{parameters:v,consumedSegments:g,remainingSegments:w}=s,j=this.createSnapshot(n,r,g,v,a),B=F(r)===o,{segmentGroup:we,slicedSegments:be}=B?tn(e,g,w,u):{segmentGroup:e,slicedSegments:w};if(B&&be.length===0&&we.hasChildren())return new E(j,await this.processChildren(l,u,we,j));if(B&&u.length===0&&be.length===0)return new E(j,[]);let Ie=await this.processSegment(l,u,we,be,B?f:o,!0,j);if(!B&&!(Ie instanceof E))throw new q(e);return new E(j,Ie instanceof E?[Ie]:[])}async getChildConfig(n,e,r){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await st(Ji(n,e,r,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw to(e)}return{routes:[],injector:n}}};function po(t){t.sort((n,e)=>n.value.outlet===f?-1:e.value.outlet===f?1:n.value.outlet.localeCompare(e.value.outlet))}function go(t){let n=t.value.routeConfig;return n&&n.path===``}function Ln$1(t){let n=[],e=/* @__PURE__ */ new Set;for(let i of t){if(!go(i)){n.push(i);continue}let o=n.find(a=>i.value.routeConfig===a.value.routeConfig);o!==void 0?(o.children.push(...i.children),e.add(o)):n.push(i)}for(let i of e){let o=Ln$1(i.children);n.push(new E(i.value,o))}let r=n.filter(i=>!e.has(i));return vo(r),r}function vo(t){let n=Object.create(null);t.forEach(e=>{let r=n[e.value.outlet];if(r){r.url.map(a=>a.toString()).join(`/`);e.value.url.map(a=>a.toString()).join(`/`);throw new b$1(4006,!1)}n[e.value.outlet]=e.value})}function mo(t){return t.data||{}}function yo(t){return t.resolve||{}}function Ro(t,n,e,r,i,o,a){return Re$3(async c=>{let{state:s,tree:u}=await ho(t,n,e,r,c.extractedUrl,i,o,a);return q$3(V$1({},c),{targetSnapshot:s,urlAfterRedirects:u})})}function So(t){return Re$3(n=>{let{targetSnapshot:e,guards:{canActivateChecks:r}}=n;if(!r.length)return Yi$1(n);let i=new Set(r.map(c=>c.route)),o=/* @__PURE__ */ new Set;for(let c of i)if(!o.has(c))for(let s of jn(c))o.add(s);let a=0;return xe$2(o).pipe(Ki$1(c=>i.has(c)?Co(c,e,t):(c.data=lr(c,c.parent,t).resolve,Yi$1(void 0))),Sg(()=>a++),Mg(1),Re$3(c=>a===o.size?Yi$1(n):vt$2))})}function jn(t){return[t,...t.children.map(e=>jn(e)).flat()]}function Co(t,n,e){let r=t.routeConfig,i=t._resolve;return r?.title!==void 0&&!bn$1(r)&&(i[He]=r.title),Ig(()=>(t.data=lr(t,t.parent,e).resolve,wo(i,t,n).pipe(te(o=>(t._resolvedData=o,t.data=V$1(V$1({},t.data),o),null)))))}function wo(t,n,e){let r=Qt(t);if(r.length===0)return Yi$1({});let i={};return xe$2(r).pipe(Re$3(o=>bo(t[o],n,e).pipe(Cg(),Sg(a=>{if(a instanceof X$1)throw Ue(new Z,a);i[o]=a}))),Mg(1),te(()=>i),Ji$1(o=>Tn$1(o)?vt$2:mg(o)))}function bo(t,n,e){let r=n._environmentInjector,i=Se$1(t,r);return Fe(i.resolve?i.resolve(n,e):hn$2(r,()=>i(n,e)))}var xn$1=new _(``);function sr(t){return Xi$1(n=>{let e=t(n);return e?xe$2(e).pipe(te(()=>n)):Yi$1(n)})}var vr=(()=>{class t{buildTitle(e){let r,i=e.root;for(;i!==void 0;)r=this.getResolvedTitleForRoute(i)??r,i=i.children.find(o=>o.outlet===f);return r}getResolvedTitleForRoute(e){return e.data[He]}static ɵfac=function(r){return new(r||t)};static ɵprov=ut$4({token:t,factory:()=>g(kn$1)})}return t})();var kn$1=(()=>{class t extends vr{title;constructor(e){super(),this.title=e}updateTitle(e){let r=this.buildTitle(e);r!==void 0&&this.title.setTitle(r)}static ɵfac=function(r){return new(r||t)(Z$2(Zt$2))};static ɵprov=L$1({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Ce$1=new _(``,{factory:()=>({})});var Ve=new _(``);var $n$1=(()=>{class t{componentLoaders=/* @__PURE__ */ new WeakMap;childrenLoaders=/* @__PURE__ */ new WeakMap;onLoadStartListener;onLoadEndListener;compiler=g(uD);async loadComponent(e,r){if(this.componentLoaders.get(r))return this.componentLoaders.get(r);if(r._loadedComponent)return Promise.resolve(r._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(r);let i=(async()=>{try{let o=await an(hn$2(e,()=>r.loadComponent())),a=await qn$1(a0(o));return this.onLoadEndListener&&this.onLoadEndListener(r),r._loadedComponent=a,a}finally{this.componentLoaders.delete(r)}})();return this.componentLoaders.set(r,i),i}loadChildren(e,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Promise.resolve({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let i=(async()=>{try{let o=await zn$1(r,this.compiler,e,this.onLoadEndListener);return r._loadedRoutes=o.routes,r._loadedInjector=o.injector,r._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(r)}})();return this.childrenLoaders.set(r,i),i}static ɵfac=function(r){return new(r||t)};static ɵprov=ut$4({token:t,factory:t.ɵfac})}return t})();async function zn$1(t,n,e,r){let i=await an(hn$2(e,()=>t.loadChildren())),o=await qn$1(a0(i)),a;o instanceof gp||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),r&&r(t);let c,s,l;return Array.isArray(a)?s=a:(c=a.create(e).injector,l=a,s=c.get(Ve,[],{optional:!0,self:!0}).flat()),{routes:s.map(pr),injector:c,factory:l}}async function qn$1(t){return t}var Dt=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=ut$4({token:t,factory:()=>g(Io)})}return t})();var Io=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,r){return e}static ɵfac=function(r){return new(r||t)};static ɵprov=ut$4({token:t,factory:t.ɵfac})}return t})();var Hn=new _(``);var Eo=()=>{};var Fn$1=new _(``);var Bn$1=(()=>{class t{currentNavigation=Dn$2(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Dn$2(null);events=new K$1;transitionAbortWithErrorSubject=new K$1;configLoader=g($n$1);environmentInjector=g(ie$1);destroyRef=g(ae$1);urlSerializer=g(Re);rootContexts=g(ae);location=g(ue$2);inputBindingEnabled=g(Mt,{optional:!0})!==null;titleStrategy=g(vr);options=g(Ce$1,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||Ai$1;urlHandlingStrategy=g(Dt);createViewTransition=g(Hn,{optional:!0});navigationErrorHandler=g(Fn$1,{optional:!0});routerResourcesFeature=g(xn$1,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Yi$1(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new yt(i)),r=i=>this.events.next(new Rt(i));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let r=++this.navigationId;kr$1(()=>{this.transitions?.next(q$3(V$1({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:r,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Un$2(null),this.transitions.pipe(Ye$1(r=>r!==null),Xi$1(r=>{let i=!0,o=!1,a=new AbortController,c=()=>!o&&this.currentTransition?.id===r.id;return Yi$1(r).pipe(Xi$1(s=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,``,b.SupersededByNewNavigation),vt$2;this.currentTransition=r;let u=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl==`string`?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:u?q$3(V$1({},u),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let l=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),v=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!l&&v!==`reload`)return this.events.next(new W(s.id,this.urlSerializer.serialize(s.rawUrl),``,xe.IgnoredSameUrlNavigation)),s.resolve(!1),vt$2;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return Yi$1(s).pipe(Xi$1(g=>(this.events.next(new se(g.id,this.urlSerializer.serialize(g.extractedUrl),g.source,g.restoredState)),g.id!==this.navigationId?vt$2:Promise.resolve(g))),Ro(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),Sg(g=>{r.targetSnapshot=g.targetSnapshot,r.urlAfterRedirects=g.urlAfterRedirects,this.currentNavigation.update(w=>(w.finalUrl=g.urlAfterRedirects,w)),this.events.next(new $e)}),Xi$1(g=>xe$2(r.routesRecognizeHandler.deferredHandle??Yi$1(void 0)).pipe(te(()=>g))),Sg(()=>{let g=new ke$1(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(g)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:g,extractedUrl:w,source:j,restoredState:B,extras:we}=s,be=new se(g,this.urlSerializer.serialize(w),j,B);this.events.next(be);let Ie=Cn(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=r=q$3(V$1({},s),{targetSnapshot:Ie,urlAfterRedirects:w,extras:q$3(V$1({},we),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ee=>(ee.finalUrl=w,ee)),Yi$1(r)}else return this.events.next(new W(s.id,this.urlSerializer.serialize(s.extractedUrl),``,xe.IgnoredByUrlHandlingStrategy)),s.resolve(!1),vt$2}),te(s=>{let u=new pt$1(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(u),this.currentTransition=r=q$3(V$1({},s),{guards:Oi(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),r}),Bi(s=>this.events.next(s)),Xi$1(s=>{if(r.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!=`boolean`)throw Ue(this.urlSerializer,s.guardsResult);let u=new gt$1(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(u),!c())return vt$2;if(!s.guardsResult)return this.cancelNavigationTransition(s,``,b.GuardRejected),vt$2;if(s.guards.canActivateChecks.length===0)return Yi$1(s);let l=new vt$1(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(l),!c())return vt$2;let v=!1;return Yi$1(s).pipe(So(this.paramsInheritanceStrategy),Sg({next:()=>{v=!0;let g=new mt$1(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(g)},complete:()=>{v||this.cancelNavigationTransition(s,``,b.NoDataFromResolver)}}))}),sr(s=>{let u=v=>{let g=[];if(v.routeConfig?._loadedComponent)v.component=v.routeConfig?._loadedComponent;else if(v.routeConfig?.loadComponent){let w=v._environmentInjector;g.push(this.configLoader.loadComponent(w,v.routeConfig).then(j=>{v.component=j}))}for(let w of v.children)g.push(...u(w));return g},l=u(s.targetSnapshot.root);return l.length===0?Yi$1(s):xe$2(Promise.all(l).then(()=>s))}),Xi$1(s=>{let{newlyCreatedRoutes:u,state:l}=Ti$1(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=r=s=q$3(V$1({},s),{targetRouterState:l,newlyCreatedRoutes:u}),this.currentNavigation.update(v=>(v.targetRouterState=l,v)),Yi$1(s)}),this.routerResourcesFeature?.setupAndRunResources(a.signal)??(s=>s),sr(()=>this.afterPreactivation()),Xi$1(()=>{let{currentSnapshot:s,targetSnapshot:u}=r,l=this.createViewTransition?.(this.environmentInjector,s.root,u.root,r.hasUAVisualTransition);return l?xe$2(l).pipe(te(()=>r)):Yi$1(r)}),nn$2(1),Xi$1(s=>{i=!1,this.events.next(new ve);let u=r.beforeActivateHandler.deferredHandle;return u?xe$2(u.then(()=>s)):Yi$1(s)}),Sg(s=>{new rr(e.routeReuseStrategy,r.targetRouterState,r.currentRouterState,u=>this.events.next(u),this.inputBindingEnabled).activate(this.rootContexts),s.newlyCreatedRoutes?.clear(),c()&&(Vn$1(s.targetRouterState),o=!0,this.currentNavigation.update(u=>(u.abort=Eo,u)),this.lastSuccessfulNavigation.set(kr$1(this.currentNavigation)),this.events.next(new $$1(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),_g(Nn$1(a.signal).pipe(Ye$1(()=>!o&&i),Sg(()=>{this.cancelNavigationTransition(r,a.signal.reason+``,b.Aborted)}))),Sg({complete:()=>{o=!0}}),_g(this.transitionAbortWithErrorSubject.pipe(Sg(s=>{throw s}))),ns(()=>{a.abort(),o||this.cancelNavigationTransition(r,``,b.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Ji$1(s=>{if(o=!0,rn(r),this.destroyed)return r.resolve(!1),vt$2;if(s instanceof X$1&&(s=Ue(this.urlSerializer,s)),Dn$1(s))this.events.next(new L(r.id,this.urlSerializer.serialize(r.extractedUrl),s.message,s.cancellationCode)),Ui(s)?this.events.next(new me(s.url,s.navigationBehaviorOptions)):r.resolve(!1);else{let u=new ce(r.id,this.urlSerializer.serialize(r.extractedUrl),s,r.targetSnapshot??void 0);try{let l=hn$2(this.environmentInjector,()=>this.navigationErrorHandler?.(u));if(l instanceof X$1){let{message:v,cancellationCode:g}=Ue(this.urlSerializer,l);this.events.next(new L(r.id,this.urlSerializer.serialize(r.extractedUrl),v,g)),this.events.next(new me(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(u),s}catch(l){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(l)}}return vt$2}))}))}cancelNavigationTransition(e,r,i){rn(e);let o=new L(e.id,this.urlSerializer.serialize(e.extractedUrl),r,i);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=kr$1(this.currentNavigation),i=r?.targetBrowserUrl??r?.extractedUrl;return e.toString()!==i?.toString()&&!r?.extras.skipLocationChange}static ɵfac=function(r){return new(r||t)};static ɵprov=ut$4({token:t,factory:t.ɵfac})}return t})();function Mo(t){return t!==_e}function rn(t){for(let n of t.newlyCreatedRoutes??[])n._localInjector?.destroy(),n._localInjector=void 0;Vn$1(t.targetRouterState)}function Vn$1(t){if(!t)return;let n=e=>{e.value.pending?.set(!1),e.children.forEach(n)};n(t._root)}var Gn$1=new _(``);var Wn$1=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=ut$4({token:t,factory:()=>g(Ao)})}return t})();var Et=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}};var Ao=(()=>{class t extends Et{static ɵfac=function(r){return new(r||t)};static ɵprov=ut$4({token:t,factory:t.ɵfac})}return t})();var Tt=(()=>{class t{urlSerializer=g(Re);options=g(Ce$1,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||`replace`;location=g(ue$2);urlHandlingStrategy=g(Dt);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;currentUrlTree=new M;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:r,targetBrowserUrl:i}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,r):r,a=i??o;return a instanceof M?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{ɵrouterUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:r,initialUrl:i}){r&&e?(this.currentUrlTree=r,this.rawUrlTree=this.urlHandlingStrategy.merge(r,i),this.routerState=e):this.rawUrlTree=i}routerState=Cn(null,g(ie$1));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static ɵfac=function(r){return new(r||t)};static ɵprov=ut$4({token:t,factory:()=>g(Do)})}return t})();var Do=(()=>{class t extends Tt{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!==`computed`?this.currentPageId:this.restoredState()?.ɵrouterPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(r=>{r.type===`popstate`&&setTimeout(()=>{e(r.url,r.state,`popstate`,{replaceUrl:!0},r.hasUAVisualTransition)})})}handleRouterEvent(e,r){e instanceof se?this.updateStateMemento():e instanceof W?this.commitTransition(r):e instanceof ke$1?this.urlUpdateStrategy===`eager`&&(r.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof ve?(this.commitTransition(r),this.urlUpdateStrategy===`deferred`&&!r.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof L?En$1(e)?e.code===b.Redirect&&this.routerState===r.targetRouterState&&this.resetInternalState(r):this.restoreHistory(r):e instanceof ce?this.restoreHistory(r,!0):e instanceof $$1&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,r){let{extras:i,id:o}=r,{replaceUrl:a,state:c}=i;if(this.location.isCurrentPathEqualTo(e)||a){let s=this.browserPageId,u=V$1(V$1({},c),this.generateNgRouterState(o,s,r));this.location.replaceState(e,``,u)}else{let s=V$1(V$1({},c),this.generateNgRouterState(o,this.browserPageId+1,r));this.location.go(e,``,s)}}restoreHistory(e,r=!1){if(this.canceledNavigationResolution===`computed`){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution===`replace`&&(r&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),``,this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,r,i){return this.canceledNavigationResolution===`computed`?V$1({navigationId:e,ɵrouterPageId:r},this.routerUrlState(i)):V$1({navigationId:e},this.routerUrlState(i))}static ɵfac=function(r){return new(r||t)};static ɵprov=ut$4({token:t,factory:t.ɵfac})}return t})();function mr(t,n){t.events.pipe(Ye$1(e=>e instanceof $$1||e instanceof L||e instanceof ce||e instanceof W),te(e=>e instanceof $$1||e instanceof W?0:(e instanceof L?e.code===b.Redirect||e.code===b.SupersededByNewNavigation:!1)?2:1),Ye$1(e=>e!==2),nn$2(1)).subscribe(()=>{n()})}var ue=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=g(JE);stateManager=g(Tt);options=g(Ce$1,{optional:!0})||{};pendingTasks=g(Ht$2);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;navigationTransitions=g(Bn$1);urlSerializer=g(Re);location=g(ue$2);urlHandlingStrategy=g(Dt);injector=g(ie$1);_events=new K$1;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=g(Wn$1);injectorCleanup=g(Gn$1,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||`ignore`;config=g(Ve,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!g(Mt,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new G$3;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(r=>{try{let i=this.navigationTransitions.currentTransition,o=kr$1(this.navigationTransitions.currentNavigation);if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof L&&r.code!==b.Redirect&&r.code!==b.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof $$1)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(r instanceof me){let a=r.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(r.url,i.currentRawUrl),s=V$1({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy===`eager`||Mo(i.source)},a);this.scheduleNavigation(c,_e,null,s,i.hasUAVisualTransition,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}Di$1(r)&&this._events.next(r)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),_e,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,r,i,o,a)=>{this.navigateToSyncWithBrowser(e,i,r,o,a)})}navigateToSyncWithBrowser(e,r,i,o,a){let c=i?.navigationId?i:null,s=i?.ɵrouterUrl??e;if(i?.ɵrouterUrl&&(o=q$3(V$1({},o),{browserUrl:e})),i){let l=V$1({},i);delete l.navigationId,delete l.ɵrouterPageId,delete l.ɵrouterUrl,Object.keys(l).length!==0&&(o.state=l)}let u=this.parseUrl(s);this.scheduleNavigation(u,r,c,o,a).catch(l=>{this.disposed||this.injector.get(ct$2)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return kr$1(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(pr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,r={}){let{relativeTo:i,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:s}=r,u=s?this.currentUrlTree.fragment:a,l=null;switch(c??this.options.defaultQueryParamsHandling){case`merge`:l=V$1(V$1({},this.currentUrlTree.queryParams),o);break;case`preserve`:l=this.currentUrlTree.queryParams;break;default:l=o||null}let v;try{v=mn(i?i.snapshot:this.routerState.snapshot.root)}catch{(typeof e[0]!=`string`||e[0][0]!==`/`)&&(e=[]),v=this.currentUrlTree.root}return yn$1(v,e,l,u??null,this.urlSerializer)}navigateByUrl(e,r={skipLocationChange:!1}){let i=J(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,_e,null,r)}navigate(e,r={skipLocationChange:!1}){return To(e),this.navigateByUrl(this.createUrlTree(e,r),r)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(ln$2(4018,!1)),this.urlSerializer.parse(`/`)}}isActive(e,r){let i;if(r===!0?i=V$1({},cr):r===!1?i=V$1({},pe):i=V$1(V$1({},pe),r),J(e))return ct(this.currentUrlTree,e,i);let o=this.parseUrl(e);return ct(this.currentUrlTree,o,i)}scheduleNavigation(e,r,i,o,a,c){if(this.disposed)return Promise.resolve(!1);let s,u,l;c?(s=c.resolve,u=c.reject,l=c.promise):l=new Promise((g,w)=>{s=g,u=w});let v=this.pendingTasks.add();return mr(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(v))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,hasUAVisualTransition:a,resolve:s,reject:u,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static ɵfac=function(r){return new(r||t)};static ɵprov=ut$4({token:t,factory:t.ɵfac})}return t})();function To(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new b$1(4008,!1)}var _o=(()=>{class t{router=g(ue);stateManager=g(Tt);fragment=Dn$2(``);queryParams=Dn$2({});path=Dn$2(``);serializer=g(Re);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof $$1&&this.updateState()})}updateState(){let{fragment:e,root:r,queryParams:i}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(i),this.path.set(this.serializer.serialize(new M(r)))}static ɵfac=function(r){return new(r||t)};static ɵprov=ut$4({token:t,factory:t.ɵfac})}return t})();var Nt=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=g(new uh(`href`),{optional:!0});reactiveHref=hD(()=>{if(!this.isAnchorElement)return this.hrefAttributeValue;this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r===`preserve`||r===`merge`;return(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams(),this.computeHref(this.createUrlTree())});get href(){return kr$1(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return kr$1(this._target)}_target=Dn$2(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return kr$1(this._queryParams)}_queryParams=Dn$2(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return kr$1(this._fragment)}_fragment=Dn$2(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return kr$1(this._queryParamsHandling)}_queryParamsHandling=Dn$2(void 0);set state(e){this._state.set(e)}get state(){return kr$1(this._state)}_state=Dn$2(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return kr$1(this._info)}_info=Dn$2(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return kr$1(this._relativeTo)}_relativeTo=Dn$2(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return kr$1(this._preserveFragment)}_preserveFragment=Dn$2(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return kr$1(this._skipLocationChange)}_skipLocationChange=Dn$2(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return kr$1(this._replaceUrl)}_replaceUrl=Dn$2(!1);browserUrl=l0(void 0);isAnchorElement;onChanges=new K$1;applicationErrorHandler=g(ct$2);options=g(Ce$1,{optional:!0});reactiveRouterState=g(_o);constructor(e,r,i,o,a,c){this.router=e,this.route=r,this.tabIndexAttribute=i,this.renderer=o,this.el=a,this.locationStrategy=c;let s=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=s===`a`||s===`area`||!!(typeof customElements==`object`&&customElements.get(s)?.observedAttributes?.includes?.(`href`))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue(`tabindex`,e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=Dn$2(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(J(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl(`0`))}onClick(e,r,i,o,a){let c=this.urlTree;if(c===null||this.isAnchorElement&&(e!==0||r||i||o||a||typeof this.target==`string`&&this.target!=`_self`))return!0;let s=this.browserUrl(),u=V$1({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},s!==void 0&&{browserUrl:s});return this.router.navigateByUrl(c,u)?.catch(l=>{this.applicationErrorHandler(l)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,r){let i=this.renderer,o=this.el.nativeElement;r!==null?i.setAttribute(o,e,r):i.removeAttribute(o,e)}createUrlTree(){let e=this.routerLinkInput();return e===null||!this.router.createUrlTree?null:J(e)?e:this.router.createUrlTree(e,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})}get urlTree(){return kr$1(()=>this.createUrlTree())}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??``:null}static ɵfac=function(r){return new(r||t)(Ar(ue),Ar(G),Hd(`tabindex`),Ar(Va),Ar(xr),Ar(A))};static ɵdir=FE({type:t,selectors:[[``,`routerLink`,``]],hostVars:2,hostBindings:function(r,i){r&1&&Lp(`click`,function(a){return i.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),r&2&&_p(`href`,i.reactiveHref(),Dy)(`target`,i._target())},inputs:{target:`target`,queryParams:`queryParams`,fragment:`fragment`,queryParamsHandling:`queryParamsHandling`,state:`state`,info:`info`,relativeTo:`relativeTo`,preserveFragment:[2,`preserveFragment`,`preserveFragment`,g0],skipLocationChange:[2,`skipLocationChange`,`skipLocationChange`,g0],replaceUrl:[2,`replaceUrl`,`replaceUrl`,g0],browserUrl:[1,`browserUrl`],routerLink:`routerLink`},features:[Pm]})}return t})();var Uo=(()=>{class t{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new Pe$3;link=g(Nt,{optional:!0});constructor(e,r,i,o){this.router=e,this.element=r,this.renderer=i,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof $$1&&this.update()})}ngAfterContentInit(){Yi$1(this.links.changes,Yi$1(null)).pipe(Vn$2()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(r=>!!r).map(r=>r.onChanges);this.linkInputChangesSubscription=xe$2(e).pipe(Vn$2()).subscribe(r=>{this._isActive!==this.isLinkActive(this.router)(r)&&this.update()})}set routerLinkActive(e){let r=e==null?[]:(Array.isArray(e)?e:e.split(` `)).filter(i=>!!i);for(let i of this.classes)r.includes(i)||this.renderer.removeClass(this.element.nativeElement,i);this.classes=r}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||this.routerLinkActiveOptions===null&&!this._isActive||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(r=>{e?this.renderer.addClass(this.element.nativeElement,r):this.renderer.removeClass(this.element.nativeElement,r)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,`aria-current`,this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,`aria-current`),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let r=this.routerLinkActiveOptions;if(r===null)return()=>!1;let i;return r===void 0?i=V$1({},pe):Oo(r)?i=r:r.exact??!1?i=V$1({},cr):i=V$1({},pe),o=>{let a=o.urlTree;return a?kr$1(ur(a,e,i)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static ɵfac=function(r){return new(r||t)(Ar(ue),Ar(xr),Ar(Va),Ar(p0))};static ɵdir=FE({type:t,selectors:[[``,`routerLinkActive`,``]],contentQueries:function(r,i,o){if(r&1&&Vp(o,Nt,5),r&2){let a;II(a=DI())&&(i.links=a)}},inputs:{routerLinkActiveOptions:`routerLinkActiveOptions`,ariaCurrentWhenActive:`ariaCurrentWhenActive`,routerLinkActive:`routerLinkActive`},outputs:{isActiveChange:`isActiveChange`},exportAs:[`routerLinkActive`],features:[Pm]})}return t})();function Oo(t){let n=t;return!!(n.paths||n.matrixParams||n.queryParams||n.fragment)}var Po=new _(``);function Lo(t,...n){return At$2([{provide:Ve,multi:!0,useValue:t},{provide:G,useFactory:jo},{provide:Np,multi:!0,useFactory:xo},n.map(e=>e.ɵproviders)])}function jo(){return g(ue).routerState.root}function xo(){let t=g(pe$2);return n=>{let e=t.get(_i$2);if(n!==e.components[0])return;let r=t.get(ue),i=t.get(ko);t.get($o)===1&&r.initialNavigation(),t.get(zo,null,{optional:!0})?.setUpPreloading(),t.get(Po,null,{optional:!0})?.init(),r.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var ko=new _(``,{factory:()=>new K$1});var $o=new _(``,{factory:()=>1});var zo=new _(``);function U(n){n||(n=g(ae$1));let e=new N(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe(_g(e))}function T(n,e){let d=!e?.manualCleanup?e?.injector?.get(ae$1)??g(ae$1):null,l=p(e?.equal),o;e?.requireSync?o=Dn$2({kind:0},{equal:l}):o=Dn$2({kind:1,value:e?.initialValue},{equal:l});let i,b=n.subscribe({next:r=>o.set({kind:1,value:r}),error:r=>{o.set({kind:2,error:r}),i?.()},complete:()=>{i?.()}});if(e?.requireSync&&o().kind===0)throw new b$1(601,!1);return i=d?.onDestroy(b.unsubscribe.bind(b)),Lc(()=>{let r=o();switch(r.kind){case 1:return r.value;case 2:throw r.error;case 0:throw new b$1(601,!1)}},{equal:e?.equal})}function p(n=Object.is){return(e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}function u(n){return n===null?`—`:n<1e3?`${n} \xB5s`:n<1e6?`${r((n/1e3).toFixed(1))} ms`:`${r((n/1e6).toFixed(2))} s`}function r(n){return n.includes(`.`)?n.replace(/0+$/,``).replace(/\.$/,``):n}function i(n){return n===null?`—`:n<1e3?`${n} \xB5s`:n<1e6?`${t(n/1e3)} ms`:`${t(n/1e6)} s`}function t(n){let e=n<10?2:n<100?1:0;return r(n.toFixed(e))}var c={slowThresholdMicros:25e4,version:``,tailSamplingEnabled:!1,successSampleRate:0,openApiDocumentPath:`/openapi/v1.json`,hostPathBase:``};var s=class o{api=g(Ph);config$=this.api.getConfig().pipe(Ji$1(()=>Yi$1(c)),Ng(1));static ɵfac=function(p){return new(p||o)};static ɵprov=L$1({token:o,factory:o.ɵfac,providedIn:`root`})};var gn=[{path:``,loadComponent:()=>import(`./chunk-CXBtawu3.js`).then(n=>n.FlowPageComponent),data:{title:`nav.flow`,subtitle:`topbar.subtitle.flow`}},{path:`history`,loadComponent:()=>import(`./chunk-Tyq34d6I.js`).then(n=>n.HistoryComponent),data:{title:`nav.history`,subtitle:`topbar.subtitle.history`}},{path:`diff`,loadComponent:()=>import(`./chunk-BEO9BvVg.js`).then(n=>n.DiffPageComponent),data:{title:`diff.title`,subtitle:`topbar.subtitle.diff`}},{path:`components`,loadComponent:()=>import(`./chunk-Bx1devV5.js`).then(n=>n.ComponentsComponent),data:{title:`nav.components`,subtitle:`topbar.subtitle.components`}},{path:`insights`,loadComponent:()=>import(`./chunk-NogGRqD7.js`).then(n=>n.InsightsComponent),data:{title:`nav.insights`,subtitle:`topbar.subtitle.insights`}},{path:`architecture`,loadComponent:()=>import(`./chunk-DL9_hKK_.js`).then(n=>n.ArchitectureComponent),data:{title:`nav.architecture`,subtitle:`topbar.subtitle.architecture`}},{path:`runner`,loadComponent:()=>import(`./chunk-BFDVpIUz.js`).then(n=>n.RunnerComponent),data:{title:`nav.runner`,subtitle:`topbar.subtitle.runner`}},{path:`**`,redirectTo:``}];var qe=`assets/demo-fixtures`;var Gn=`${qe}/manifest.json`;var Wn=`X-NetApiFlow-TraceId`;function vn(n,a){if(Zn(n))return a(n);let e=g(ji$1);return Qn(e).pipe(Xi$1(t=>{let i=Xn(t,n);if(i)return e.get(`${qe}/${i}`).pipe(te(l=>new Fr({body:l,status:200,url:n.urlWithParams})));let r=pt(n)?void 0:Kn(t,n.method,n.url);return r?$n(e,r,n):pt(n)?mg(()=>Un(n)):a(n)}))}var fn=null;function Qn(n){return fn??=n.get(Gn).pipe(Ji$1(()=>Yi$1({routes:{}})),Ng({bufferSize:1,refCount:!1})),fn}function Zn(n){return n.url.startsWith(qe)}function pt(n){return n.url.startsWith(`api/`)}function Un(n){return new Gt$2({status:404,statusText:`Not Found`,url:n.urlWithParams})}function $n(n,a,e){let t=new ze$2().set(Wn,a.traceId).set(`Content-Type`,a.contentType);return(a.body?qn(n,a):Yi$1(null)).pipe(te(r=>new Fr({body:r,status:a.status,headers:t,url:e.urlWithParams})))}function qn(n,a){let e=`${qe}/${a.body}`;return a.contentType.includes(`json`)?n.get(e):n.get(e,{responseType:`text`})}function Kn(n,a,e){let t=mt(e);return(n.sampleResponses??[]).filter(i=>i.method===a.toUpperCase()&&Yn(mt(i.template),t)).sort((i,r)=>_n(r.template)-_n(i.template)).at(0)}function mt(n){return n.replace(/^https?:\/\/[^/]+/,``).split(`?`)[0].split(`/`).filter(a=>a.length>0)}function Yn(n,a){return n.length===a.length&&n.every((e,t)=>wn(e)||e.toLowerCase()===a[t].toLowerCase())}function wn(n){return n.startsWith(`{`)&&n.endsWith(`}`)}function _n(n){return mt(n).filter(a=>!wn(a)).length}function Xn(n,a){let e=n.documents?.[a.url];if(e)return e;if(!pt(a))return;let t=bn(a.urlWithParams),i=bn(a.url);return n.routes[t]??n.routes[i]??Jn(n,i)}function Jn(n,a){let e=a;for(;e.includes(`/`);){e=e.slice(0,e.lastIndexOf(`/`));let t=n.fallbacks?.[e];if(t)return t}}function bn(n){let[e,t]=n.replace(/^.*?\bapi\//,`api/`).replace(/^\/+/,``).split(`?`);if(!t)return e;return`${e}?${[...new URLSearchParams(t).entries()].sort(([r],[l])=>r.localeCompare(l)).map(([r,l])=>`${r}=${l}`).join(`&`)}`}var yn={providers:[ym(),lD(),QD(...Ze.isDemoMode?[ZD([vn])]:[]),Lo(gn)]};var ei=new _(`MAT_DRAWER_DEFAULT_AUTOSIZE`,{providedIn:`root`,factory:()=>!1});var gt=new _(`MAT_DRAWER_CONTAINER`);var Ce=(()=>{class n extends sn$1{_platform=g(h);_changeDetectorRef=g(p0);_element=g(xr);_ngZone=g(he$3);_isInert=!1;_container=g(ht);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(e){e.opened?this._ngZone.runOutsideAngular(()=>{e._animationEnd.pipe(Dg(50),nn$2(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_drawerModeChanged(){this._updateInert()}_updateInert(){let e=this._container._isShowingBackdrop();if(e!==this._isInert){let t=this._element.nativeElement;this._isInert=e,e?t.setAttribute(`inert`,`true`):t.removeAttribute(`inert`)}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!==`over`&&e.opened||t!=null&&t.mode!==`over`&&t.opened}static ɵfac=(()=>{let e;return function(i){return(e||(e=ey(n)))(i||n)}})();static ɵcmp=(function(){return OE({type:n,selectors:[[`mat-drawer-content`]],hostAttrs:[1,`mat-drawer-content`],hostVars:6,hostBindings:function(i,r){i&2&&(qp(`margin-left`,r._container._contentMargins.left,`px`)(`margin-right`,r._container._contentMargins.right,`px`),Wp(`mat-drawer-content-hidden`,r._shouldBeHidden()))},features:[KI([{provide:sn$1,useExisting:n}]),bp],ngContentSelectors:[`*`],decls:1,vars:0,template:function(i,r){i&1&&(yI(),vI(0))},encapsulation:2})})()}return n})();var ut=(()=>{class n{_elementRef=g(xr);_focusTrapFactory=g(ln$1);_focusMonitor=g(At$1);_platform=g(h);_ngZone=g(he$3);_renderer=g(Va);_interactivityChecker=g(ke$2);_doc=g(qe$3);_isAnimating=!1;_container=g(gt,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e===`end`?`end`:`start`,e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position=`start`;get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged()}_mode=`over`;get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=Do$1(e)}_disableClose=!1;get autoFocus(){return this._autoFocus??(this.mode===`side`?`dialog`:`first-tabbable`)}set autoFocus(e){(e===`true`||e===`false`||e==null)&&(e=Do$1(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(Do$1(e))}_opened=Dn$2(!1);_openedVia=null;_animationStarted=new K$1;_animationEnd=new K$1;openedChange=new Pe$3(!0);_openedStream=this.openedChange.pipe(Ye$1(e=>e),te(()=>{}));openedStart=this._animationStarted.pipe(Ye$1(()=>this.opened),es(void 0));_closedStream=this.openedChange.pipe(Ye$1(e=>!e),te(()=>{}));closedStart=this._animationStarted.pipe(Ye$1(()=>!this.opened),es(void 0));_destroyed=new K$1;onPositionChanged=new Pe$3;_content;_modeChanged=new K$1;_injector=g(pe$2);_changeDetectorRef=g(p0);constructor(){this.openedChange.pipe(_g(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||`program`)}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,`keydown`,i=>{i.keyCode===27&&!this.disableClose&&!De$1(i)&&this._ngZone.run(()=>{this.close(),i.stopPropagation(),i.preventDefault()})}),e.listen(t,`transitionend`,this._handleTransitionEvent),e.listen(t,`transitioncancel`,this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&(this._interactivityChecker.isFocusable(i)||(i.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{l(),d(),i.removeAttribute(`tabindex`)},l=this._renderer.listen(i,`blur`,r),d=this._renderer.listen(i,`mousedown`,r)})),i.focus(t))}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case`dialog`:return;case!0:case`first-tabbable`:By(()=>{let t=this._isAnimating?{preventScroll:!0}:void 0;!this._focusTrap.focusInitialElement(t)&&typeof e.focus==`function`&&e.focus(t)},{injector:this._injector});break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`);break;default:this._focusByCssSelector(this.autoFocus)}}_restoreFocus(e){this.autoFocus!==`dialog`&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position===`end`&&this._updatePositionInParent(`end`),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,`mouse`)}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let i=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||`program`);return e||(this._openedVia=null),i}_setOpen(e,t,i){return e===this.opened?Promise.resolve(e?`open`:`close`):(this._opened.set(e),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?this._isAnimating?(this._setIsAnimating(!1),this._simulateAnimation()):(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):this._simulateAnimation(),this._elementRef.nativeElement.classList.toggle(`mat-drawer-opened`,e),!e&&t&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(r=>{this.openedChange.pipe(nn$2(1)).subscribe(l=>r(l?`open`:`close`))}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(e){e!==this._isAnimating&&(this._isAnimating=e,this._elementRef.nativeElement.classList.toggle(`mat-drawer-animating`,e))}_simulateAnimation(){setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()})}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,i=t.parentNode;e===`end`?(this._anchor||(this._anchor=this._doc.createComment(`mat-drawer-anchor`),i.insertBefore(this._anchor,t)),i.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type===`transitionend`&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`content`];return OE({type:n,selectors:[[`mat-drawer`]],viewQuery:function(r,l){if(r&1&&Hp(e,5),r&2){let d;II(d=DI())&&(l._content=d.first)}},hostAttrs:[1,`mat-drawer`],hostVars:12,hostBindings:function(r,l){r&2&&(_p(`align`,null)(`tabIndex`,l.mode!==`side`?`-1`:null),qp(`visibility`,!l._container&&!l.opened?`hidden`:null),Wp(`mat-drawer-end`,l.position===`end`)(`mat-drawer-over`,l.mode===`over`)(`mat-drawer-push`,l.mode===`push`)(`mat-drawer-side`,l.mode===`side`))},inputs:{position:`position`,mode:`mode`,disableClose:`disableClose`,autoFocus:`autoFocus`,opened:`opened`},outputs:{openedChange:`openedChange`,_openedStream:`opened`,openedStart:`openedStart`,_closedStream:`closed`,closedStart:`closedStart`,onPositionChanged:`positionChanged`},exportAs:[`matDrawer`],ngContentSelectors:[`*`],decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(r,l){r&1&&(yI(),Ei$1(0,`div`,1,0),vI(2),_c())},dependencies:[sn$1],encapsulation:2})})()}return n})();var ht=(()=>{class n{_dir=g(y$1,{optional:!0});_element=g(xr);_ngZone=g(he$3);_changeDetectorRef=g(p0);_animationDisabled=j();_transitionsEnabled=!1;_allDrawers;_drawers=new si$2;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=Do$1(e)}_autosize=g(ei);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:Do$1(e)}_backdropOverride=null;backdropClick=new Pe$3;_start=null;_end=null;_left=null;_right=null;_destroyed=new K$1;_doCheckSubject=new K$1;_contentMargins={left:null,right:null};_contentMarginChanges=new K$1;get scrollable(){return this._userContent||this._content}_injector=g(pe$2);constructor(){let e=g(h),t=g(K);this._dir?.change.pipe(_g(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(_g(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add(`mat-drawer-transition`),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Nl(this._allDrawers),_g(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Nl(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Il(10),_g(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode==`side`)e+=this._left._getWidth();else if(this._left.mode==`push`){let i=this._left._getWidth();e+=i,t-=i}}if(this._right&&this._right.opened){if(this._right.mode==`side`)t+=this._right._getWidth();else if(this._right.mode==`push`){let i=this._right._getWidth();t+=i,e-=i}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(_g(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!==`side`&&e.openedChange.pipe(_g(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(_g(this._drawers.changes)).subscribe(()=>{By({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(_g(gg(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,i=`mat-drawer-container-has-open`;e?t.add(i):t.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position==`end`?(this._end,this._end=e):(this._start,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value===`rtl`?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!=`over`||this._isDrawerOpen(this._end)&&this._end.mode!=`over`}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!==`side`:this._backdropOverride}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`],t=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function i(l,d){if(l&1){let u=pI();Ei$1(0,`div`,1),Lp(`click`,function(){gu(u);let C=gI();return mu(C._onBackdropClicked())}),_c()}if(l&2){let u=gI();Wp(`mat-drawer-shown`,u._isShowingBackdrop())}}function r(l,d){l&1&&(Ei$1(0,`mat-drawer-content`),vI(1,2),_c())}return OE({type:n,selectors:[[`mat-drawer-container`]],contentQueries:function(d,u,w){if(d&1&&Vp(w,Ce,5)(w,ut,5),d&2){let C;II(C=DI())&&(u._content=C.first),II(C=DI())&&(u._allDrawers=C)}},viewQuery:function(d,u){if(d&1&&Hp(Ce,5),d&2){let w;II(w=DI())&&(u._userContent=w.first)}},hostAttrs:[1,`mat-drawer-container`],hostVars:2,hostBindings:function(d,u){d&2&&Wp(`mat-drawer-container-explicit-backdrop`,u._backdropOverride)},inputs:{autosize:`autosize`,hasBackdrop:`hasBackdrop`},outputs:{backdropClick:`backdropClick`},exportAs:[`matDrawerContainer`],features:[KI([{provide:gt,useExisting:n}])],ngContentSelectors:t,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(d,u){d&1&&(yI(e),nI(0,i,1,2,`div`,0),vI(1),vI(2,1),nI(3,r,2,0,`mat-drawer-content`)),d&2&&(oI(u.hasBackdrop?0:-1),av(3),oI(u._content?-1:3))},dependencies:[Ce],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})})()}return n})();var Ke=(()=>{class n extends Ce{static ɵfac=(()=>{let e;return function(i){return(e||(e=ey(n)))(i||n)}})();static ɵcmp=(function(){return OE({type:n,selectors:[[`mat-sidenav-content`]],hostAttrs:[1,`mat-drawer-content`,`mat-sidenav-content`],features:[KI([{provide:sn$1,useExisting:n},{provide:Ce,useExisting:n}]),bp],ngContentSelectors:[`*`],decls:1,vars:0,template:function(i,r){i&1&&(yI(),vI(0))},encapsulation:2})})()}return n})();var ft=(()=>{class n extends ut{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=Do$1(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Xe$1(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Xe$1(e)}_fixedBottomGap=0;static ɵfac=(()=>{let e;return function(i){return(e||(e=ey(n)))(i||n)}})();static ɵcmp=(function(){return OE({type:n,selectors:[[`mat-sidenav`]],hostAttrs:[1,`mat-drawer`,`mat-sidenav`],hostVars:16,hostBindings:function(i,r){i&2&&(_p(`tabIndex`,r.mode!==`side`?`-1`:null)(`align`,null),qp(`top`,r.fixedInViewport?r.fixedTopGap:null,`px`)(`bottom`,r.fixedInViewport?r.fixedBottomGap:null,`px`),Wp(`mat-drawer-end`,r.position===`end`)(`mat-drawer-over`,r.mode===`over`)(`mat-drawer-push`,r.mode===`push`)(`mat-drawer-side`,r.mode===`side`)(`mat-sidenav-fixed`,r.fixedInViewport))},inputs:{fixedInViewport:`fixedInViewport`,fixedTopGap:`fixedTopGap`,fixedBottomGap:`fixedBottomGap`},exportAs:[`matSidenav`],features:[KI([{provide:ut,useExisting:n}]),bp],ngContentSelectors:[`*`],decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(i,r){i&1&&(yI(),Ei$1(0,`div`,1,0),vI(2),_c())},dependencies:[sn$1],encapsulation:2})})()}return n})();var xn=(()=>{class n extends ht{_allDrawers=void 0;_content=void 0;static ɵfac=(()=>{let e;return function(i){return(e||(e=ey(n)))(i||n)}})();static ɵcmp=(function(){let e=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`],t=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function i(l,d){if(l&1){let u=pI();Ei$1(0,`div`,1),Lp(`click`,function(){gu(u);let C=gI();return mu(C._onBackdropClicked())}),_c()}if(l&2){let u=gI();Wp(`mat-drawer-shown`,u._isShowingBackdrop())}}function r(l,d){l&1&&(Ei$1(0,`mat-sidenav-content`),vI(1,2),_c())}return OE({type:n,selectors:[[`mat-sidenav-container`]],contentQueries:function(d,u,w){if(d&1&&Vp(w,Ke,5)(w,ft,5),d&2){let C;II(C=DI())&&(u._content=C.first),II(C=DI())&&(u._allDrawers=C)}},hostAttrs:[1,`mat-drawer-container`,`mat-sidenav-container`],hostVars:2,hostBindings:function(d,u){d&2&&Wp(`mat-drawer-container-explicit-backdrop`,u._backdropOverride)},exportAs:[`matSidenavContainer`],features:[KI([{provide:gt,useExisting:n},{provide:ht,useExisting:n}]),bp],ngContentSelectors:t,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(d,u){d&1&&(yI(e),nI(0,i,1,2,`div`,0),vI(1),vI(2,1),nI(3,r,2,0,`mat-sidenav-content`)),d&2&&(oI(u.hasBackdrop?0:-1),av(3),oI(u._content?-1:3))},dependencies:[Ke],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})})()}return n})();var kn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=yp({type:n});static ɵinj=As({imports:[Me,I,Me]})}return n})();var $=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var bt=(()=>{class n extends Se$2{_elementRef=g(xr);_focusTrapFactory=g(ln$1);_config;_interactivityChecker=g(ke$2);_ngZone=g(he$3);_focusMonitor=g(At$1);_renderer=g(Va);_changeDetectorRef=g(p0);_injector=g(pe$2);_platform=g(h);_document=g(qe$3);_portalOutlet;_focusTrapped=new K$1;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=g($,{optional:!0})||new $,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{r(),l(),e.removeAttribute(`tabindex`)},r=this._renderer.listen(e,`blur`,i),l=this._renderer.listen(e,`mousedown`,i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_trapFocus(e){this._isDestroyed||By(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||t.focus(e);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,e);break;default:this._focusByCssSelector(this._config.autoFocus,e)}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e==`string`?t=this._document.querySelector(e):typeof e==`boolean`?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus==`function`){let i=Qe(),r=this._elementRef.nativeElement;(!i||i===this._document.body||i===r||r.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=Qe();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Qe()))}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){function e(t,i){}return OE({type:n,selectors:[[`cdk-dialog-container`]],viewQuery:function(i,r){if(i&1&&Hp(Ri$1,7),i&2){let l;II(l=DI())&&(r._portalOutlet=l.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(i,r){i&2&&_p(`id`,r._config.id||null)(`role`,r._config.role)(`aria-modal`,r._config.ariaModal)(`aria-labelledby`,r._config.ariaLabel?null:r._ariaLabelledByQueue[0])(`aria-label`,r._config.ariaLabel)(`aria-describedby`,r._config.ariaDescribedBy||null)},features:[bp],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(i,r){i&1&&Tp(0,e,0,0,`ng-template`,0)},dependencies:[Ri$1],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var X=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new K$1;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,e){this.overlayRef=a,this.config=e,this.disableClose=e.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!De$1(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(a,e){if(this._canClose(a)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(a),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a=``,e=``){return this.overlayRef.updateSize({width:a,height:e}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(a,e,this.componentInstance))}};var ni=new _(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let n=g(pe$2);return()=>Gt$1(n)}});var ii=new _(`DialogData`);var ai=new _(`DefaultDialogConfig`);function ri(n){let a=Dn$2(n),e=new Pe$3;return{valueSignal:a,get value(){return a()},change:e,ngOnDestroy(){e.complete()}}}var vt=(()=>{class n{_injector=g(pe$2);_defaultOptions=g(ai,{optional:!0});_parentDialog=g(n,{optional:!0,skipSelf:!0});_overlayContainer=g(ti$1);_idGenerator=g(Tt$1);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new K$1;_afterOpenedAtThisLevel=new K$1;_ariaHiddenElements=/* @__PURE__ */ new Map;_scrollStrategy=g(ni);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Ig(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Nl(void 0)));open(e,t){let i=this._defaultOptions||new $;t=V$1(V$1({},i),t),t.id=t.id||this._idGenerator.getId(`cdk-dialog-`),t.id&&this.getDialogById(t.id);let r=this._getOverlayConfig(t),l=Ve$1(this._injector,r),d=new X(l,t),u=this._attachContainer(l,d,t);if(d.containerInstance=u,!this.openDialogs.length){let w=this._overlayContainer.getContainerElement();u._focusTrapped?u._focusTrapped.pipe(nn$2(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(w)}):this._hideNonDialogContentFromAssistiveTechnology(w)}return this._attachDialogContent(e,d,u,t),this.openDialogs.push(d),d.closed.subscribe(()=>this._removeOpenDialog(d,!0)),this.afterOpened.next(d),d}closeAll(){_t(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){_t(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),_t(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new $$2({positionStrategy:e.positionStrategy||ii$2().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,i){let r=i.injector||i.viewContainerRef?.injector,l=[{provide:$,useValue:i},{provide:X,useValue:t},{provide:Ee,useValue:e}],d;i.container?typeof i.container==`function`?d=i.container:(d=i.container.type,l.push(...i.container.providers(i))):d=bt;let u=new tt$1(d,i.viewContainerRef,pe$2.create({parent:r||this._injector,providers:l}));return e.attach(u).instance}_attachDialogContent(e,t,i,r){if(e instanceof br){let l=this._createInjector(r,t,i,void 0),d={$implicit:r.data,dialogRef:t};r.templateContext&&(d=V$1(V$1({},d),typeof r.templateContext==`function`?r.templateContext():r.templateContext)),i.attachTemplatePortal(new G$1(e,null,d,l))}else{let l=this._createInjector(r,t,i,this._injector),d=i.attachComponentPortal(new tt$1(e,r.viewContainerRef,l,null,r.bindings));t.componentRef=d,t.componentInstance=d.instance}}_createInjector(e,t,i,r){let l=e.injector||e.viewContainerRef?.injector,d=[{provide:ii,useValue:e.data},{provide:X,useValue:t}];return e.providers&&(typeof e.providers==`function`?d.push(...e.providers(t,e,i)):d.push(...e.providers)),e.direction&&(!l||!l.get(y$1,null,{optional:!0}))&&d.push({provide:y$1,useValue:ri(e.direction)}),pe$2.create({parent:l||r,providers:d})}_removeOpenDialog(e,t){let i=this.openDialogs.indexOf(e);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,l)=>{r?l.setAttribute(`aria-hidden`,r):l.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let i=t.length-1;i>-1;i--){let r=t[i];r!==e&&r.nodeName!==`SCRIPT`&&r.nodeName!==`STYLE`&&!r.hasAttribute(`aria-live`)&&!r.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(r,r.getAttribute(`aria-hidden`)),r.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(t){return new(t||n)};static ɵprov=ut$4({token:n,factory:n.ɵfac})}return n})();function _t(n,a){let e=n.length;for(;e--;)a(n[e])}var Sn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=yp({type:n});static ɵinj=As({providers:[vt],imports:[ct$1,zt,un$1,zt]})}return n})();var Je=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var wt=`mdc-dialog--open`;var Dn=`mdc-dialog--opening`;var Mn=`mdc-dialog--closing`;var oi=150;var si=75;var li=(()=>{class n extends bt{_animationStateChanged=new Pe$3;_animationsEnabled=!j();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Tn(this._config.enterAnimationDuration)??oi:0;_exitAnimationDuration=this._animationsEnabled?Tn(this._config.exitAnimationDuration)??si:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(An,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Dn,wt)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(wt),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(wt),this._animationsEnabled?(this._hostElement.style.setProperty(An,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Mn)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Dn,Mn)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),t}static ɵfac=(()=>{let e;return function(i){return(e||(e=ey(n)))(i||n)}})();static ɵcmp=(function(){function e(t,i){}return OE({type:n,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(i,r){i&2&&(kp(`id`,r._config.id),_p(`aria-modal`,r._config.ariaModal)(`role`,r._config.role)(`aria-labelledby`,r._config.ariaLabel?null:r._ariaLabelledByQueue[0])(`aria-label`,r._config.ariaLabel)(`aria-describedby`,r._config.ariaDescribedBy||null),Wp(`_mat-animation-noopable`,!r._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,r._actionSectionCount>0))},features:[bp],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(i,r){i&1&&(Ei$1(0,`div`,0)(1,`div`,1),Tp(2,e,0,0,`ng-template`,2),_c()())},dependencies:[Ri$1],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var An=`--mat-dialog-transition-duration`;function Tn(n){return n==null?null:typeof n==`number`?n:n.endsWith(`ms`)?Xe$1(n.substring(0,n.length-2)):n.endsWith(`s`)?Xe$1(n.substring(0,n.length-1))*1e3:n===`0`?0:null}var Xe=(function(n){return n[n.OPEN=0]=`OPEN`,n[n.CLOSING=1]=`CLOSING`,n[n.CLOSED=2]=`CLOSED`,n})(Xe||{});var ke=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new $n$2(1);_beforeClosed=new $n$2(1);_result;_closeFallbackTimeout;_state=Xe.OPEN;_closeInteractionType;constructor(a,e,t){this._ref=a,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=a.id,a.addPanelClass(`mat-mdc-dialog-panel`),t._animationStateChanged.pipe(Ye$1(i=>i.state===`opened`),nn$2(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(Ye$1(i=>i.state===`closed`),nn$2(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),gg(this.backdropClick(),this.keydownEvents().pipe(Ye$1(i=>i.keyCode===27&&!this.disableClose&&!De$1(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),On(this,i.type===`keydown`?`keyboard`:`mouse`))})}close(a){let e=this._config.closePredicate;e&&!e(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(Ye$1(t=>t.state===`closing`),nn$2(1)).subscribe(t=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Xe.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let e=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?e.left(a.left):e.right(a.right):e.centerHorizontally(),a&&(a.top||a.bottom)?a.top?e.top(a.top):e.bottom(a.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(a=``,e=``){return this._ref.updateSize(a,e),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=Xe.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function On(n,a,e){return n._closeInteractionType=a,n.close(e)}var di=new _(`MatMdcDialogData`);var ci=new _(`mat-mdc-dialog-default-options`);var pi=new _(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=g(pe$2);return()=>Gt$1(n)}});var Se=(()=>{class n{_defaultOptions=g(ci,{optional:!0});_scrollStrategy=g(pi);_parentDialog=g(n,{optional:!0,skipSelf:!0});_idGenerator=g(Tt$1);_injector=g(pe$2);_dialog=g(vt);_animationsDisabled=j();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new K$1;_afterOpenedAtThisLevel=new K$1;dialogConfigClass=Je;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Ig(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Nl(void 0)));constructor(){this._dialogRefConstructor=ke,this._dialogContainerType=li,this._dialogDataToken=di}open(e,t){let i;t=V$1(V$1({},this._defaultOptions||new Je),t),t.id=t.id||this._idGenerator.getId(`mat-mdc-dialog-`),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(e,q$3(V$1({},t),{positionStrategy:ii$2(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()===`0`||t.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:$,useValue:t}]},templateContext:()=>({dialogRef:i}),providers:(l,d,u)=>(i=new this._dialogRefConstructor(l,t,u),i.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:u},{provide:this._dialogDataToken,useValue:d.data},{provide:this._dialogRefConstructor,useValue:i},{provide:X,useValue:null}])}));return i.componentRef=r.componentRef,i.componentInstance=r.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let l=this.openDialogs.indexOf(i);l>-1&&(this.openDialogs.splice(l,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static ɵfac=function(t){return new(t||n)};static ɵprov=ut$4({token:n,factory:n.ɵfac})}return n})();var En=(()=>{class n{dialogRef=g(ke,{optional:!0});_elementRef=g(xr);_dialog=g(Se);ariaLabel;type=`button`;dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=Rn(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){this._elementRef.nativeElement.getAttribute(`aria-disabled`)!==`true`&&On(this.dialogRef,e.screenX===0&&e.screenY===0?`keyboard`:`mouse`,this.dialogResult)}static ɵfac=function(t){return new(t||n)};static ɵdir=FE({type:n,selectors:[[``,`mat-dialog-close`,``],[``,`matDialogClose`,``]],hostVars:2,hostBindings:function(t,i){t&1&&Lp(`click`,function(l){return i._onButtonClick(l)}),t&2&&_p(`aria-label`,i.ariaLabel||null)(`type`,i.type)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],type:`type`,dialogResult:[0,`mat-dialog-close`,`dialogResult`],_matDialogClose:[0,`matDialogClose`,`_matDialogClose`]},exportAs:[`matDialogClose`],features:[Pm]})}return n})();var Nn=(()=>{class n{_dialogRef=g(ke,{optional:!0});_elementRef=g(xr);_dialog=g(Se);ngOnInit(){this._dialogRef||(this._dialogRef=Rn(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static ɵfac=function(t){return new(t||n)};static ɵdir=FE({type:n})}return n})();var In=(()=>{class n extends Nn{id=g(Tt$1).getId(`mat-mdc-dialog-title-`);_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static ɵfac=(()=>{let e;return function(i){return(e||(e=ey(n)))(i||n)}})();static ɵdir=FE({type:n,selectors:[[``,`mat-dialog-title`,``],[``,`matDialogTitle`,``]],hostAttrs:[1,`mat-mdc-dialog-title`,`mdc-dialog__title`],hostVars:1,hostBindings:function(t,i){t&2&&kp(`id`,i.id)},inputs:{id:`id`},exportAs:[`matDialogTitle`],features:[bp]})}return n})();var Pn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=FE({type:n,selectors:[[``,`mat-dialog-content`,``],[`mat-dialog-content`],[``,`matDialogContent`,``]],hostAttrs:[1,`mat-mdc-dialog-content`,`mdc-dialog__content`],features:[VE([sn$1])]})}return n})();var Bn=(()=>{class n extends Nn{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static ɵfac=(()=>{let e;return function(i){return(e||(e=ey(n)))(i||n)}})();static ɵdir=FE({type:n,selectors:[[``,`mat-dialog-actions`,``],[`mat-dialog-actions`],[``,`matDialogActions`,``]],hostAttrs:[1,`mat-mdc-dialog-actions`,`mdc-dialog__actions`],hostVars:6,hostBindings:function(t,i){t&2&&Wp(`mat-mdc-dialog-actions-align-start`,i.align===`start`)(`mat-mdc-dialog-actions-align-center`,i.align===`center`)(`mat-mdc-dialog-actions-align-end`,i.align===`end`)},inputs:{align:`align`},features:[bp]})}return n})();function Rn(n,a){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains(`mat-mdc-dialog-container`);)e=e.parentElement;return e?a.find(t=>t.id===e.id):null}var Fn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=yp({type:n});static ɵinj=As({providers:[Se],imports:[Sn,ct$1,zt,I]})}return n})();var gi=`https://github.com/Douglasproglima/netapiflow`;var et=class n{config=g(s);version=Dn$2(null);repositoryUrl=gi;constructor(){this.config.config$.subscribe(a=>this.version.set(a.version))}static ɵfac=function(e){return new(e||n)};static ɵcmp=OE({type:n,selectors:[[`app-about-dialog`]],decls:32,vars:24,consts:[[`mat-dialog-title`,``],[1,`about-dialog__content`],[1,`about-dialog__list`],[`target`,`_blank`,`rel`,`noopener`,3,`href`],[1,`about-dialog__credit`],[`href`,`https://github.com/joshuamaia/apiflow`,`target`,`_blank`,`rel`,`noopener`],[`align`,`end`],[`mat-button`,``,`mat-dialog-close`,``,`type`,`button`]],template:function(e,t){e&1&&(Ei$1(0,`h2`,0),WI(1),iD(2,`t`),_c(),Ei$1(3,`mat-dialog-content`,1)(4,`dl`,2)(5,`dt`),WI(6),iD(7,`t`),_c(),Ei$1(8,`dd`),WI(9),_c(),Ei$1(10,`dt`),WI(11),iD(12,`t`),_c(),Ei$1(13,`dd`),WI(14,`MIT`),_c(),Ei$1(15,`dt`),WI(16),iD(17,`t`),_c(),Ei$1(18,`dd`)(19,`a`,3),WI(20),_c()()(),Ei$1(21,`p`,4),WI(22),iD(23,`t`),Ei$1(24,`a`,5),WI(25,`apiflow`),_c(),WI(26),iD(27,`t`),_c()(),Ei$1(28,`mat-dialog-actions`,6)(29,`button`,7),WI(30),iD(31,`t`),_c()()),e&2&&(av(),Jp(aD(2,10,`about.title`)),av(5),Jp(aD(7,12,`about.version`)),av(3),Jp(t.version()),av(2),Jp(aD(12,14,`about.license`)),av(5),Jp(aD(17,16,`about.repository`)),av(3),Sp(`href`,t.repositoryUrl,cf),av(),Jp(t.repositoryUrl),av(2),Rc(` `,aD(23,18,`about.creditPrefix`),` `),av(4),Rc(` `,aD(27,20,`about.creditSuffix`),` `),av(4),Jp(aD(31,22,`about.close`)))},dependencies:[Fn,En,In,Bn,Pn,yr,gr$1,Vh],styles:[`.about-dialog__content[_ngcontent-%COMP%]{overflow-x:hidden}.about-dialog__list[_ngcontent-%COMP%]{display:grid;grid-template-columns:max-content 1fr;gap:.35rem 1rem;margin:0 0 1rem}.about-dialog__list[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--%NS%mat-sys-on-surface-variant)}.about-dialog__list[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:0;min-width:0;overflow-wrap:anywhere}.about-dialog__credit[_ngcontent-%COMP%]{font-size:.85rem;color:var(--%NS%mat-sys-on-surface-variant);line-height:1.5}`]})};var zn=`naf-theme`;function fi(){try{let n=localStorage.getItem(zn);return n===`dark`||n===`light`?n:null}catch{return null}}function _i(){return matchMedia(`(prefers-color-scheme: light)`).matches}function Ln(n){return n?n===`dark`:!_i()}function Vn(n){n?document.documentElement.dataset.theme=n:delete document.documentElement.dataset.theme}var tt=class n{preference=fi();isDark=Dn$2(Ln(this.preference));constructor(){Vn(this.preference)}toggle(){this.preference=this.isDark()?`light`:`dark`;try{localStorage.setItem(zn,this.preference)}catch{}this.isDark.set(Ln(this.preference)),Vn(this.preference)}static ɵfac=function(e){return new(e||n)};static ɵprov=L$1({token:n,factory:n.ɵfac,providedIn:`root`})};var bi=n=>({count:n});var vi=n=>({version:n});var wi=()=>({exact:!0});var yi=n=>({value:n});function Ci(n,a){n&1&&(Ei$1(0,`p`,7),WI(1),iD(2,`t`),_c()),n&2&&(av(),Jp(aD(2,1,`demo.banner`)))}function xi(n,a){if(n&1){let e=pI();Ei$1(0,`button`,68),Lp(`click`,function(){gu(e);let i=gI();return mu(i.actionDrawer.toggle())}),_u(),Ei$1(1,`svg`,69),Ap(2,`path`,61),_c(),Su(),Ei$1(3,`span`,70),WI(4),iD(5,`t`),_c()()}n&2&&(av(4),Jp(aD(5,1,`topbar.tryEndpoint`)))}function ki(n,a){n&1&&(Ei$1(0,`span`,16),WI(1),iD(2,`t`),_c()),n&2&&(av(),Jp(cD(2,1,`topbar.slowThreshold`,tD(4,yi,a))))}function Si(n,a){n&1&&(_u(),Ap(0,`circle`,71)(1,`path`,72))}function Di(n,a){n&1&&(_u(),Ap(0,`path`,22))}function Mi(n,a){if(n&1){let e=pI();Ei$1(0,`button`,73),iD(1,`t`),Lp(`click`,function(){gu(e);let i=gI();return mu(i.toggleSidenav())}),_u(),Ei$1(2,`svg`,74),Ap(3,`path`,75),_c()()}n&2&&_p(`aria-label`,aD(1,1,`rail.close`))}function Ai(n,a){n&1&&(Ei$1(0,`span`,37),WI(1),_c()),n&2&&(av(),Rc(`v`,a))}var Ti=`(max-width: 1023px)`;var nt=class n{router=g(ue);breakpointObserver=g(Nt$1);dialog=g(Se);api=g(Ph);config=g(s);sse=g(Ge);language=g(Vi$1);theme=g(tt);actionDrawer=g(li$2);isDemoMode=Ze.isDemoMode;version=Dn$2(null);connectionState=this.sse.state;activeLanguage=this.language.language;isDarkTheme=this.theme.isDark;isNarrow=T(this.breakpointObserver.observe(Ti).pipe(te(a=>a.matches)),{initialValue:!1});sidenavOpened=Dn$2(!0);pageTitle=T(this.router.events.pipe(Ye$1(a=>a instanceof $$1),Nl(null),te(()=>this.currentRouteData().title)),{initialValue:this.currentRouteData().title});pageSubtitle=T(this.router.events.pipe(Ye$1(a=>a instanceof $$1),Nl(null),te(()=>this.currentRouteData().subtitle)),{initialValue:this.currentRouteData().subtitle});slowThresholdValue=Dn$2(null);inProgressCount=Dn$2(0);onFlowRoute=T(this.router.events.pipe(Ye$1(a=>a instanceof $$1),Nl(null),te(()=>this.router.url.split(`?`)[0]===`/`)),{initialValue:this.router.url.split(`?`)[0]===`/`});constructor(){Uu(()=>{this.sidenavOpened.set(!this.isNarrow())}),Uu(()=>{document.documentElement.lang=this.activeLanguage()})}ngOnInit(){this.sse.connect(),this.config.config$.subscribe(a=>{this.slowThresholdValue.set(u(a.slowThresholdMicros)),this.version.set(a.version)}),gg(Yi$1(void 0),this.sse.events$.pipe(Ye$1(a=>a.type===`TraceStarted`||a.type===`TraceCompleted`),El(kr))).pipe(Xi$1(()=>this.api.getLiveTraces().pipe(Ji$1(()=>Yi$1(null))))).subscribe(a=>{a&&this.inProgressCount.set(a.length)})}ngOnDestroy(){this.sse.disconnect()}toggleSidenav(){this.sidenavOpened.update(a=>!a)}closeSidenavIfNarrow(){this.isNarrow()&&this.sidenavOpened.set(!1)}openAbout(){this.dialog.open(et,{width:`460px`,maxWidth:`90vw`})}setLanguage(a){this.language.setLanguage(a)}toggleTheme(){this.theme.toggle()}themeToggleLabel(){return this.isDarkTheme()?`theme.toggle.toLight`:`theme.toggle.toDark`}currentRouteData(){let a=this.router.routerState.root;for(;a.firstChild;)a=a.firstChild;return a.snapshot.data}static ɵfac=function(e){return new(e||n)};static ɵcmp=OE({type:n,selectors:[[`app-root`]],decls:131,vars:115,consts:[[`prefsMenu`,`matMenu`],[`flowLink`,`routerLinkActive`],[`historyLink`,`routerLinkActive`],[`componentsLink`,`routerLinkActive`],[`insightsLink`,`routerLinkActive`],[`architectureLink`,`routerLinkActive`],[`runnerLink`,`routerLinkActive`],[`role`,`status`,1,`app-demo-banner`],[1,`app-topbar`],[`mat-icon-button`,``,`type`,`button`,1,`app-topbar__hamburger`,3,`click`],[`viewBox`,`0 0 24 24`,`fill`,`none`,`stroke`,`currentColor`,`stroke-width`,`1.8`,`width`,`20`,`height`,`20`],[`d`,`M4 7h16M4 12h16M4 17h16`,`stroke-linecap`,`round`],[1,`app-topbar__title`],[1,`app-topbar__sub`],[1,`app-topbar__right`],[`type`,`button`,1,`app-topbar__try-endpoint`],[1,`app-topbar__meta`],[`role`,`radiogroup`,1,`app-topbar__lang`,`app-topbar__lang--full`],[`type`,`button`,`role`,`radio`,`lang`,`pt-BR`,3,`click`],[`type`,`button`,`role`,`radio`,`lang`,`en`,3,`click`],[`mat-icon-button`,``,`type`,`button`,1,`app-topbar__theme`,`app-topbar__theme--full`,3,`click`],[`viewBox`,`0 0 24 24`,`fill`,`none`,`stroke`,`currentColor`,`stroke-width`,`1.75`,`width`,`20`,`height`,`20`],[`d`,`M20 14.2A8.5 8.5 0 1 1 9.8 4a7 7 0 0 0 10.2 10.2Z`],[`mat-icon-button`,``,`type`,`button`,1,`app-topbar__prefs-trigger`,3,`matMenuTriggerFor`],[`viewBox`,`0 0 24 24`,`fill`,`none`,`stroke`,`currentColor`,`stroke-width`,`1.75`,`stroke-linecap`,`round`,`stroke-linejoin`,`round`,`width`,`20`,`height`,`20`],[`cx`,`12`,`cy`,`12`,`r`,`3`],[`d`,`M19.4 13a7.4 7.4 0 0 0 0-2l1.6-1.3-2-3.4-1.9.6a7.6 7.6 0 0 0-1.7-1l-.3-2h-4l-.3 2a7.6 7.6 0 0 0-1.7 1l-1.9-.6-2 3.4L6.6 11a7.4 7.4 0 0 0 0 2L5 14.3l2 3.4 1.9-.6a7.6 7.6 0 0 0 1.7 1l.3 2h4l.3-2a7.6 7.6 0 0 0 1.7-1l1.9.6 2-3.4Z`],[`role`,`radiogroup`,1,`app-topbar__prefs-lang`],[`mat-menu-item`,``,`type`,`button`,3,`click`],[`aria-live`,`polite`,1,`naf-chip`],[1,`naf-chip__dot`],[1,`app-shell`],[1,`app-rail`,3,`mode`,`opened`,`disableClose`],[`type`,`button`,1,`app-rail__close`],[`routerLink`,`/`,1,`app-rail__logo`],[`src`,`logo-mark-dark.svg`,`alt`,``,`width`,`36`,`height`,`36`,1,`app-rail__logo-mark`,`app-rail__logo-mark--dark`],[`src`,`logo-mark-light.svg`,`alt`,``,`width`,`36`,`height`,`36`,1,`app-rail__logo-mark`,`app-rail__logo-mark--light`],[1,`naf-mono`],[1,`app-rail__nav`],[`routerLink`,`/`,`routerLinkActive`,`app-rail__item--active`,1,`app-rail__item`,3,`click`,`routerLinkActiveOptions`],[`cx`,`5`,`cy`,`12`,`r`,`2.5`],[`cx`,`19`,`cy`,`6`,`r`,`2.5`],[`cx`,`19`,`cy`,`18`,`r`,`2.5`],[`d`,`M7.5 12h3.5M11 12 16.6 7.2M11 12l5.6 4.8`],[`routerLink`,`/history`,`routerLinkActive`,`app-rail__item--active`,1,`app-rail__item`,3,`click`],[`d`,`M3.5 12a8.5 8.5 0 1 0 2.5-6`],[`d`,`M3.5 4v4.5H8`],[`d`,`M12 7.5V12l3 2`],[`routerLink`,`/components`,`routerLinkActive`,`app-rail__item--active`,1,`app-rail__item`,3,`click`],[`x`,`3.5`,`y`,`3.5`,`width`,`7`,`height`,`7`,`rx`,`2`],[`x`,`13.5`,`y`,`3.5`,`width`,`7`,`height`,`7`,`rx`,`2`],[`x`,`3.5`,`y`,`13.5`,`width`,`7`,`height`,`7`,`rx`,`2`],[`x`,`13.5`,`y`,`13.5`,`width`,`7`,`height`,`7`,`rx`,`2`],[`routerLink`,`/insights`,`routerLinkActive`,`app-rail__item--active`,1,`app-rail__item`,3,`click`],[`d`,`M4 19.5V13M10 19.5V8.5M16 19.5V4.5M4 9.5l6-4 6 4 4-2.5`],[`routerLink`,`/architecture`,`routerLinkActive`,`app-rail__item--active`,1,`app-rail__item`,3,`click`],[`cx`,`6`,`cy`,`6`,`r`,`2.2`],[`cx`,`18`,`cy`,`6`,`r`,`2.2`],[`cx`,`12`,`cy`,`18`,`r`,`2.2`],[`d`,`M8 6h8M7.8 7.4 11.2 16.2M16.2 7.4 12.8 16.2`],[`routerLink`,`/runner`,`routerLinkActive`,`app-rail__item--active`,1,`app-rail__item`,3,`click`],[`d`,`M7 4.5v15l12-7.5Z`],[1,`app-rail__spacer`],[1,`app-rail__divider`],[`type`,`button`,1,`app-rail__item`,3,`click`],[`cx`,`12`,`cy`,`12`,`r`,`8.5`],[`d`,`M12 11v5.5M12 7.6v.1`],[1,`app-content`],[`type`,`button`,1,`app-topbar__try-endpoint`,3,`click`],[`viewBox`,`0 0 24 24`,`fill`,`none`,`stroke`,`currentColor`,`stroke-width`,`1.75`,`width`,`16`,`height`,`16`],[1,`app-topbar__try-endpoint-label`],[`cx`,`12`,`cy`,`12`,`r`,`4`],[`d`,`M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4`,`stroke-linecap`,`round`],[`type`,`button`,1,`app-rail__close`,3,`click`],[`viewBox`,`0 0 24 24`,`fill`,`none`,`stroke`,`currentColor`,`stroke-width`,`1.8`,`width`,`18`,`height`,`18`],[`d`,`M6 6l12 12M18 6 6 18`,`stroke-linecap`,`round`]],template:function(e,t){if(e&1&&(nI(0,Ci,3,3,`p`,7),Ei$1(1,`header`,8)(2,`button`,9),iD(3,`t`),Lp(`click`,function(){return t.toggleSidenav()}),_u(),Ei$1(4,`svg`,10),Ap(5,`path`,11),_c()(),Su(),Ei$1(6,`h1`,12),WI(7),iD(8,`t`),_c(),Ei$1(9,`span`,13),WI(10),iD(11,`t`),_c(),Ei$1(12,`div`,14),nI(13,xi,6,3,`button`,15),Ei$1(14,`span`,16),WI(15),iD(16,`t`),_c(),nI(17,ki,3,6,`span`,16),Ei$1(18,`div`,17),iD(19,`t`),Ei$1(20,`button`,18),Lp(`click`,function(){return t.setLanguage(`pt-BR`)}),WI(21,` PT `),_c(),Ei$1(22,`button`,19),Lp(`click`,function(){return t.setLanguage(`en`)}),WI(23,` EN `),_c()(),Ei$1(24,`button`,20),iD(25,`t`),iD(26,`t`),Lp(`click`,function(){return t.toggleTheme()}),_u(),Ei$1(27,`svg`,21),nI(28,Si,2,0)(29,Di,1,0,`path`,22),_c()(),Su(),Ei$1(30,`button`,23),iD(31,`t`),_u(),Ei$1(32,`svg`,24),Ap(33,`circle`,25)(34,`path`,26),_c()(),Su(),Ei$1(35,`mat-menu`,null,0)(37,`div`,27),iD(38,`t`),Ei$1(39,`button`,18),Lp(`click`,function(){return t.setLanguage(`pt-BR`)}),WI(40,` PT `),_c(),Ei$1(41,`button`,19),Lp(`click`,function(){return t.setLanguage(`en`)}),WI(42,` EN `),_c()(),Ei$1(43,`button`,28),Lp(`click`,function(){return t.toggleTheme()}),WI(44),iD(45,`t`),_c()(),Ei$1(46,`span`,29),Ap(47,`span`,30),WI(48),iD(49,`t`),_c()()(),Ei$1(50,`mat-sidenav-container`,31)(51,`mat-sidenav`,32),nI(52,Mi,4,3,`button`,33),Ei$1(53,`a`,34),iD(54,`t`),Ap(55,`img`,35)(56,`img`,36),nI(57,Ai,2,1,`span`,37),_c(),Ei$1(58,`nav`,38),iD(59,`t`),Ei$1(60,`a`,39,1),iD(62,`t`),Lp(`click`,function(){return t.closeSidenavIfNarrow()}),_u(),Ei$1(63,`svg`,24),Ap(64,`circle`,40)(65,`circle`,41)(66,`circle`,42)(67,`path`,43),_c(),Su(),Ei$1(68,`span`),WI(69),iD(70,`t`),_c()(),Ei$1(71,`a`,44,2),iD(73,`t`),Lp(`click`,function(){return t.closeSidenavIfNarrow()}),_u(),Ei$1(74,`svg`,24),Ap(75,`path`,45)(76,`path`,46)(77,`path`,47),_c(),Su(),Ei$1(78,`span`),WI(79),iD(80,`t`),_c()(),Ei$1(81,`a`,48,3),iD(83,`t`),Lp(`click`,function(){return t.closeSidenavIfNarrow()}),_u(),Ei$1(84,`svg`,24),Ap(85,`rect`,49)(86,`rect`,50)(87,`rect`,51)(88,`rect`,52),_c(),Su(),Ei$1(89,`span`),WI(90),iD(91,`t`),_c()(),Ei$1(92,`a`,53,4),iD(94,`t`),Lp(`click`,function(){return t.closeSidenavIfNarrow()}),_u(),Ei$1(95,`svg`,24),Ap(96,`path`,54),_c(),Su(),Ei$1(97,`span`),WI(98),iD(99,`t`),_c()(),Ei$1(100,`a`,55,5),iD(102,`t`),Lp(`click`,function(){return t.closeSidenavIfNarrow()}),_u(),Ei$1(103,`svg`,24),Ap(104,`circle`,56)(105,`circle`,57)(106,`circle`,58)(107,`path`,59),_c(),Su(),Ei$1(108,`span`),WI(109),iD(110,`t`),_c()(),Ei$1(111,`a`,60,6),iD(113,`t`),Lp(`click`,function(){return t.closeSidenavIfNarrow()}),_u(),Ei$1(114,`svg`,24),Ap(115,`path`,61),_c(),Su(),Ei$1(116,`span`),WI(117),iD(118,`t`),_c()()(),Ap(119,`div`,62)(120,`div`,63),Ei$1(121,`button`,64),iD(122,`t`),Lp(`click`,function(){return t.openAbout()}),_u(),Ei$1(123,`svg`,24),Ap(124,`circle`,65)(125,`path`,66),_c(),Su(),Ei$1(126,`span`),WI(127),iD(128,`t`),_c()()(),Ei$1(129,`mat-sidenav-content`,67),Ap(130,`router-outlet`),_c()()),e&2){let i,r,l=wI(36),d=wI(61),u=wI(72),w=wI(82),C=wI(93),jn=wI(101),Hn=wI(112);oI(t.isDemoMode?0:-1),av(2),_p(`aria-label`,aD(3,54,t.sidenavOpened()?`topbar.hamburger.close`:`topbar.hamburger.open`)),av(5),Jp(aD(8,56,t.pageTitle())),av(3),Jp(aD(11,58,t.pageSubtitle())),av(3),oI(t.onFlowRoute()&&t.actionDrawer.isDrawer()?13:-1),av(2),Jp(cD(16,60,`topbar.inProgress`,tD(110,bi,t.inProgressCount()))),av(2),oI((i=t.slowThresholdValue())?17:-1,i),av(),_p(`aria-label`,aD(19,63,`language.selectorAria`)),av(2),_p(`aria-checked`,t.activeLanguage()===`pt-BR`),av(2),_p(`aria-checked`,t.activeLanguage()===`en`),av(2),_p(`aria-label`,aD(25,65,t.themeToggleLabel()))(`title`,aD(26,67,t.themeToggleLabel())),av(4),oI(t.isDarkTheme()?28:29),av(2),Sp(`matMenuTriggerFor`,l),_p(`aria-label`,aD(31,69,`topbar.preferencesAria`)),av(7),_p(`aria-label`,aD(38,71,`language.selectorAria`)),av(2),_p(`aria-checked`,t.activeLanguage()===`pt-BR`),av(2),_p(`aria-checked`,t.activeLanguage()===`en`),av(3),Rc(` `,aD(45,73,t.themeToggleLabel()),` `),av(2),Wp(`naf-chip--live`,t.connectionState()===`open`)(`naf-chip--warning`,t.connectionState()===`connecting`)(`naf-chip--danger`,t.connectionState()===`closed`),av(2),Rc(` `,aD(49,75,t.connectionState()===`open`?`chip.connection.live`:t.connectionState()===`connecting`?`chip.connection.reconnecting`:`chip.connection.offline`),` `),av(3),Sp(`mode`,t.isNarrow()?`over`:`side`)(`opened`,t.sidenavOpened())(`disableClose`,!t.isNarrow()),av(),oI(t.isNarrow()?52:-1),av(),_p(`aria-label`,cD(54,77,`rail.logoAria`,tD(112,vi,t.version()??``))),av(4),oI((r=t.version())?57:-1,r),av(),_p(`aria-label`,aD(59,80,`nav.ariaLabel`)),av(2),Sp(`routerLinkActiveOptions`,eD(114,wi)),_p(`aria-current`,d.isActive?`page`:null)(`title`,aD(62,82,`nav.flow`)),av(9),Jp(aD(70,84,`nav.flow`)),av(2),_p(`aria-current`,u.isActive?`page`:null)(`title`,aD(73,86,`nav.history`)),av(8),Jp(aD(80,88,`nav.history`)),av(2),_p(`aria-current`,w.isActive?`page`:null)(`title`,aD(83,90,`nav.components`)),av(9),Jp(aD(91,92,`nav.components`)),av(2),_p(`aria-current`,C.isActive?`page`:null)(`title`,aD(94,94,`nav.insights`)),av(6),Jp(aD(99,96,`nav.insights`)),av(2),_p(`aria-current`,jn.isActive?`page`:null)(`title`,aD(102,98,`nav.architecture`)),av(9),Jp(aD(110,100,`nav.architecture`)),av(2),_p(`aria-current`,Hn.isActive?`page`:null)(`title`,aD(113,102,`nav.runner`)),av(6),Jp(aD(118,104,`nav.runner`)),av(4),_p(`title`,aD(122,106,`nav.about`)),av(6),Jp(aD(128,108,`nav.about`))}},dependencies:[hr,Nt,Uo,kn,ft,xn,Ke,yr,Sn$2,vo$1,Be$1,ht$2,_o$1,Vh],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}.app-topbar[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;align-items:center;gap:.75rem;padding:0 1rem;height:56px;border-bottom:1px solid var(--%NS%naf-border);min-width:0}.app-topbar__hamburger[_ngcontent-%COMP%]{flex:none}@media(min-width:1024px){.app-topbar__hamburger[_ngcontent-%COMP%]{display:none}}.app-topbar__title[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;margin:0;font-family:var(--%NS%naf-font-display);font-weight:700;font-size:1.125rem;letter-spacing:-.01em;white-space:nowrap}.app-topbar__sub[_ngcontent-%COMP%]{flex:auto;min-width:0;font-size:.8125rem;color:var(--%NS%naf-text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media(max-width:767px){.app-topbar__sub[_ngcontent-%COMP%]{display:none}}.app-topbar__right[_ngcontent-%COMP%]{flex:none;margin-left:auto;display:flex;align-items:center;gap:1rem}.app-topbar__try-endpoint[_ngcontent-%COMP%]{flex:none;display:inline-flex;align-items:center;gap:.5rem;height:32px;padding:0 .875rem;border-radius:var(--%NS%naf-radius-sm);border:1px solid var(--%NS%naf-border);background:var(--%NS%naf-surface);color:var(--%NS%naf-text);font-family:var(--%NS%naf-font-ui);font-weight:600;font-size:.8125rem;cursor:pointer}.app-topbar__try-endpoint[_ngcontent-%COMP%]:hover{background:var(--%NS%naf-surface-2)}@media(max-width:480px){.app-topbar__try-endpoint[_ngcontent-%COMP%]{width:32px;padding:0;justify-content:center}}@media(max-width:480px){.app-topbar__try-endpoint-label[_ngcontent-%COMP%]{display:none}}.app-topbar__meta[_ngcontent-%COMP%]{font-family:var(--%NS%naf-font-mono);font-size:.75rem;color:var(--%NS%naf-text-muted);white-space:nowrap}@media(max-width:1199px){.app-topbar__meta[_ngcontent-%COMP%]{display:none}}.app-topbar__lang[_ngcontent-%COMP%]{flex:none;display:inline-flex;height:36px;border:1px solid var(--%NS%naf-border);border-radius:var(--%NS%naf-radius-sm);overflow:hidden}.app-topbar__lang[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:100%;padding:0 .75rem;border:0;background:none;font-family:var(--%NS%naf-font-mono);font-weight:600;font-size:.75rem;letter-spacing:.02em;color:var(--%NS%naf-text-muted);cursor:pointer}.app-topbar__lang[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:var(--%NS%naf-surface-2)}.app-topbar__lang[_ngcontent-%COMP%]   button[aria-checked=true][_ngcontent-%COMP%]{background:var(--%NS%naf-flow-tint);color:var(--%NS%naf-flow-text)}.app-topbar__lang[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] + button[_ngcontent-%COMP%]{border-left:1px solid var(--%NS%naf-border)}.app-topbar__theme[_ngcontent-%COMP%]{flex:none}@media(max-width:480px){.app-topbar__lang--full[_ngcontent-%COMP%], .app-topbar__theme--full[_ngcontent-%COMP%]{display:none}}.app-topbar__prefs-trigger[_ngcontent-%COMP%]{display:none;flex:none}@media(max-width:480px){.app-topbar__prefs-trigger[_ngcontent-%COMP%]{display:inline-flex}}.app-topbar__prefs-lang[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:.5rem;padding:.25rem .5rem}.app-topbar__prefs-lang[_ngcontent-%COMP%]   button[role=radio][_ngcontent-%COMP%]{font-family:var(--%NS%naf-font-mono);font-weight:600;font-size:.75rem;letter-spacing:.02em}.app-topbar__prefs-lang[_ngcontent-%COMP%]   button[role=radio][aria-checked=true][_ngcontent-%COMP%]{color:var(--%NS%naf-flow-text)}.app-shell[_ngcontent-%COMP%]{flex:auto;min-height:0}.app-rail[_ngcontent-%COMP%]{width:84px;overflow-x:hidden;border-right:1px solid var(--%NS%naf-border);background:var(--%NS%naf-bg);border-radius:0}.app-rail[_ngcontent-%COMP%]     .mat-drawer-inner-container{display:flex;flex-direction:column;align-items:center;gap:.25rem;padding:.875rem 0}.app-rail__close[_ngcontent-%COMP%]{position:absolute;top:.5rem;right:.5rem;width:28px;height:28px;border-radius:50%;border:1px solid var(--%NS%naf-border);background:var(--%NS%naf-surface);color:var(--%NS%naf-text-muted);display:grid;place-items:center;cursor:pointer}.app-rail__close[_ngcontent-%COMP%]:hover{color:var(--%NS%naf-text);background:var(--%NS%naf-surface-2)}  .mat-drawer-backdrop.mat-drawer-shown{background-color:#0009}.app-rail__nav[_ngcontent-%COMP%]{display:contents}.app-rail__logo[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:.25rem;margin-bottom:.875rem;text-decoration:none;color:var(--%NS%naf-text-muted);font-size:.6875rem}.app-rail__logo-mark--light[_ngcontent-%COMP%]{display:none}@media(prefers-color-scheme:light){html:not([data-theme])[_nghost-%COMP%]   .app-rail__logo-mark--dark[_ngcontent-%COMP%], html:not([data-theme])   [_nghost-%COMP%]   .app-rail__logo-mark--dark[_ngcontent-%COMP%]{display:none}html:not([data-theme])[_nghost-%COMP%]   .app-rail__logo-mark--light[_ngcontent-%COMP%], html:not([data-theme])   [_nghost-%COMP%]   .app-rail__logo-mark--light[_ngcontent-%COMP%]{display:inline}}[data-theme=light][_nghost-%COMP%]   .app-rail__logo-mark--dark[_ngcontent-%COMP%], [data-theme=light]   [_nghost-%COMP%]   .app-rail__logo-mark--dark[_ngcontent-%COMP%]{display:none}[data-theme=light][_nghost-%COMP%]   .app-rail__logo-mark--light[_ngcontent-%COMP%], [data-theme=light]   [_nghost-%COMP%]   .app-rail__logo-mark--light[_ngcontent-%COMP%]{display:inline}.app-rail__item[_ngcontent-%COMP%]{width:76px;min-height:56px;border-radius:var(--%NS%naf-radius-md);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.25rem;padding:0;color:var(--%NS%naf-text-muted);text-decoration:none;font-family:var(--%NS%naf-font-ui);font-weight:500;font-size:.6875rem;border:0;background:none;cursor:pointer}.app-rail__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;width:100%;text-align:center;line-height:1.1;white-space:nowrap;overflow-wrap:normal}.app-rail__item[_ngcontent-%COMP%]:hover{background:var(--%NS%naf-surface-2);color:var(--%NS%naf-text)}.app-rail__item--active[_ngcontent-%COMP%]{background:var(--%NS%naf-flow-tint);color:var(--%NS%naf-text)}.app-rail__item--active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:var(--%NS%naf-flow-text)}.app-rail__spacer[_ngcontent-%COMP%]{flex:1}.app-rail__divider[_ngcontent-%COMP%]{width:40px;height:1px;background:var(--%NS%naf-border);margin:.375rem 0}.app-content[_ngcontent-%COMP%]{height:100%;overflow-x:hidden}.app-demo-banner[_ngcontent-%COMP%]{margin:0;padding:.5rem 1rem;background:var(--%NS%naf-warning-tint);color:var(--%NS%naf-warning-on-tint);border-bottom:1px solid var(--%NS%naf-border);font-size:.8125rem;line-height:1.25rem;text-align:center}`]})};$e$1(nt,yn).catch(n=>console.error(n));export{Ze as _,U as a,yr as b,ue as c,ht$2 as d,li$2 as f,Sn$2 as g,Nt$1 as h,T as i,Be$1 as l,Ge as m,i as n,G as o,vo$1 as p,u as r,Nt as s,s as t,_o$1 as u,gr$1 as v,kr as y};