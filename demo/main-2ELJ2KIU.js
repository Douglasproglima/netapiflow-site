import{a as ba,c as ia,i as Zt$1,l as me,n as Yr,o as fe,s as ho,t as F,u as ta}from"./chunk-CNB4CD2n.js";import{n as y$1,t as I}from"./chunk-5w0NYokY.js";import{$ as OI,$n as qe$2,$t as bp,A as Hu,An as jh,B as Ki,Bt as _p,C as Fp,Cn as ie,Cr as ym,Dn as jE,Dt as Wo,E as Gt$1,Er as ze$1,Et as Vp,F as Ji,Ft as Ye$2,G as Lr,Gt as aD,H as LE,Hn as mu,Ht as _s,I as Jp,It as Yi,J as Ng,Jn as p0,K as Mg,Kn as oD,L as K$1,M as Ig,Mt as Xm,N as Il,Nn as kh,O as Hp,On as ja,Ot as Wp,Pn as kp,Q as Nr,Qn as qI,Qt as bI,Rt as Zi,S as Fi,T as GD,Tn as ii$2,U as Lc,Ut as _u,V as L,W as Lp,Wn as nn$1,X as Nl,Xn as pe$1,Xt as b$1,Y as Ni$1,Yt as av,_ as Dn$1,_n as hI,a as Ac,an as d0,b as Eg,br as yI,bt as Uu,ct as Rc,d as By,dn as g0,dr as ut$3,dt as S,en as br,er as qp,et as Om,fn as gg,ft as Sc,g as Dg,gn as h0,gt as Su,hn as gu,ht as Sp,i as $u,j as II,jn as ji,kt as XI,ln as fI,lr as tn$1,m as Cp,mr as vm,mt as Sn$2,n as $n$1,nn as cD,nr as s0,nt as Pe$2,o as Ap,on as eD,or as tI,ot as Qv,pn as gm,pr as vi,pt as Sg,q as N,qt as ae,rn as cf,rr as sD,rt as QD,sr as te,st as RE,t as $$3,tr as rI,tt as Or,un as g,ut as Rp,v as Dr,vn as he$1,vr as xg,vt as Tp,w as G$2,wr as yp,x as El,xr as yg,xt as V$1,y as EI,yn as hg,yr as xi$1,yt as Un$1,z as KI,zn as mI,zt as _c}from"./chunk-8WZe5vA6.js";var xt;try{xt=typeof Intl<`u`&&Intl.v8BreakIterator}catch{xt=!1}var b=(()=>{class e{_platformId=g(ym);isBrowser=this._platformId?ba(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||xt)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(n){return new(n||e)};static ɵprov=ut$3({token:e,factory:e.ɵfac})}return e})();function St(e){return Array.isArray(e)?e:[e]}var he=/* @__PURE__ */ new Set;var R;var mt$1=(()=>{class e{_platform=g(b);_nonce=g(Uu,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Je}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&Xe$1(t,this._nonce),this._matchMedia(t)}static ɵfac=function(n){return new(n||e)};static ɵprov=ut$3({token:e,factory:e.ɵfac})}return e})();function Xe$1(e,a){if(!he.has(e))try{R||(R=document.createElement(`style`),a&&R.setAttribute(`nonce`,a),R.setAttribute(`type`,`text/css`),document.head.appendChild(R)),R.sheet&&(R.sheet.insertRule(`@media ${e.replace(/[{}]/g,``)} {body{ }}`,0),he.add(e))}catch(t){console.error(t)}}function Je(e){return{matches:e===`all`||e===``,media:e,addListener:()=>{},removeListener:()=>{}}}var Nt=(()=>{class e{_mediaMatcher=g(mt$1);_zone=g(he$1);_queries=/* @__PURE__ */ new Map;_destroySubject=new K$1;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return ve(St(t)).some(o=>this._registerQuery(o).mql.matches)}observe(t){let o=ve(St(t)).map(s=>this._registerQuery(s).observable),r=yg(o);return r=tn$1(r.pipe(nn$1(1)),r.pipe(Ng(1),Il(0))),r.pipe(te(s=>{let c={matches:!1,breakpoints:{}};return s.forEach(({matches:g,query:S})=>{c.matches=c.matches||g,c.breakpoints[S]=g}),c}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let n=this._mediaMatcher.matchMedia(t),r={observable:new N(s=>{let c=g=>this._zone.run(()=>s.next(g));return n.addListener(c),()=>{n.removeListener(c)}}).pipe(Nl(n),te(({matches:s})=>({query:t,matches:s})),xg(this._destroySubject)),mql:n};return this._queries.set(t,r),r}static ɵfac=function(n){return new(n||e)};static ɵprov=ut$3({token:e,factory:e.ɵfac})}return e})();function ve(e){return e.map(a=>a.split(`,`)).reduce((a,t)=>a.concat(t)).map(a=>a.trim())}function W(e){return e.buttons===0||e.detail===0}function Z(e){let a=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!a&&a.identifier===-1&&(a.radiusX==null||a.radiusX===1)&&(a.radiusY==null||a.radiusY===1)}var wt$1;function ge(){if(wt$1==null){let e=typeof document<`u`?document.head:null;wt$1=!!(e&&(e.createShadowRoot||e.attachShadow))}return wt$1}function Et(e){if(ge()){let a=e.getRootNode?e.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&a instanceof ShadowRoot)return a}return null}function It(){let e=typeof document<`u`&&document?document.activeElement:null;for(;e&&e.shadowRoot;){let a=e.shadowRoot.activeElement;if(a===e)break;e=a}return e}function y(e){if(e.composedPath)try{return e.composedPath()[0]}catch{}return e.target}var G$1;function ye(){if(G$1==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>G$1=!0}))}finally{G$1=G$1||!1}return G$1}function z(e){return ye()?e:!!e.capture}function tn(e,a=0){return _e(e)?Number(e):arguments.length===2?a:0}function _e(e){return!isNaN(parseFloat(e))&&!isNaN(Number(e))}function C(e){return e instanceof Nr?e.nativeElement:e}var xe=new S(`cdk-input-modality-detector-options`);var Se$1={ignoreKeys:[18,17,224,91,16]};var Ne$1=650;var At={passive:!0,capture:!0};var we=(()=>{class e{_platform=g(b);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Un$1(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(n=>n===t.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=y(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<Ne$1||(this._modality.next(W(t)?`keyboard`:`mouse`),this._mostRecentTarget=y(t))};_onTouchstart=t=>{if(Z(t)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=y(t)};constructor(){let t=g(he$1),n=g(qe$2),o=g(xe,{optional:!0});if(this._options=V$1(V$1({},Se$1),o),this.modalityDetected=this._modality.pipe(Ng(1)),this.modalityChanged=this.modalityDetected.pipe(Dg()),this._platform.isBrowser){let r=g(br).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[r.listen(n,`keydown`,this._onKeydown,At),r.listen(n,`mousedown`,this._onMousedown,At),r.listen(n,`touchstart`,this._onTouchstart,At)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static ɵfac=function(n){return new(n||e)};static ɵprov=ut$3({token:e,factory:e.ɵfac})}return e})();var $$2=(function(e){return e[e.IMMEDIATE=0]=`IMMEDIATE`,e[e.EVENTUAL=1]=`EVENTUAL`,e})($$2||{});var Ee$1=new S(`cdk-focus-monitor-default-options`);var dt$1=z({passive:!0,capture:!0});var Mt=(()=>{class e{_ngZone=g(he$1);_platform=g(b);_inputModalityDetector=g(we);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=/* @__PURE__ */ new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=/* @__PURE__ */ new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=g(qe$2);_stopInputModalityDetector=new K$1;constructor(){let t=g(Ee$1,{optional:!0});this._detectionMode=t?.detectionMode||$$2.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let n=y(t);for(let o=n;o;o=o.parentElement)t.type===`focus`?this._onFocus(t,o):this._onBlur(t,o)};monitor(t,n=!1){let o=C(t);if(!this._platform.isBrowser||o.nodeType!==1)return Zi();let r=Et(o)||this._document,s=this._elementInfo.get(o);if(s)return n&&(s.checkChildren=!0),s.subject;let c={checkChildren:n,subject:new K$1,rootNode:r};return this._elementInfo.set(o,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(t){let n=C(t),o=this._elementInfo.get(n);o&&(o.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(o))}focusVia(t,n,o){let r=C(t);r===this._document.activeElement?this._getClosestElementsInfo(r).forEach(([c,g])=>this._originChanged(c,n,g)):(this._setOrigin(n),typeof r.focus==`function`&&r.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?`mouse`:`program`}_shouldBeAttributedToTouch(t){return this._detectionMode===$$2.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,n){t.classList.toggle(`cdk-focused`,!!n),t.classList.toggle(`cdk-touch-focused`,n===`touch`),t.classList.toggle(`cdk-keyboard-focused`,n===`keyboard`),t.classList.toggle(`cdk-mouse-focused`,n===`mouse`),t.classList.toggle(`cdk-program-focused`,n===`program`)}_setOrigin(t,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t===`touch`&&n,this._detectionMode===$$2.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?Ne$1:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,n){let o=this._elementInfo.get(n),r=y(t);!o||!o.checkChildren&&n!==r||this._originChanged(n,this._getFocusOrigin(r),o)}_onBlur(t,n){let o=this._elementInfo.get(n);!o||o.checkChildren&&t.relatedTarget instanceof Node&&n.contains(t.relatedTarget)||(this._setClasses(n),this._emitOrigin(o,null))}_emitOrigin(t,n){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(n))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let n=t.rootNode,o=this._rootNodeFocusListenerCount.get(n)||0;o||this._ngZone.runOutsideAngular(()=>{n.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,dt$1),n.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,dt$1)}),this._rootNodeFocusListenerCount.set(n,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(xg(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(t){let n=t.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let o=this._rootNodeFocusListenerCount.get(n);o>1?this._rootNodeFocusListenerCount.set(n,o-1):(n.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,dt$1),n.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,dt$1),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,n,o){this._setClasses(t,n),this._emitOrigin(o,n),this._lastFocusOrigin=n}_getClosestElementsInfo(t){let n=[];return this._elementInfo.forEach((o,r)=>{(r===t||o.checkChildren&&r.contains(t))&&n.push([r,o])}),n}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:n,mostRecentModality:o}=this._inputModalityDetector;if(o!==`mouse`||!n||n===t||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`||t.disabled)return!1;let r=t.labels;if(r){for(let s=0;s<r.length;s++)if(r[s].contains(n))return!0}return!1}static ɵfac=function(n){return new(n||e)};static ɵprov=ut$3({token:e,factory:e.ɵfac})}return e})();var lt$1=/* @__PURE__ */ new WeakMap;var O=(()=>{class e{_appRef;_injector=g(pe$1);_environmentInjector=g(ie);load(t){let n=this._appRef=this._appRef||this._injector.get(xi$1),o=lt$1.get(n);o||(o={loaders:/* @__PURE__ */ new Set,refs:[]},lt$1.set(n,o),n.onDestroy(()=>{lt$1.get(n)?.refs.forEach(r=>r.destroy()),lt$1.delete(n)})),o.loaders.has(t)||(o.loaders.add(t),o.refs.push(g0(t,{environmentInjector:this._environmentInjector})))}static ɵfac=function(n){return new(n||e)};static ɵprov=ut$3({token:e,factory:e.ɵfac})}return e})();var Ie$1=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵcmp=RE({type:e,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(n,o){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return e})();var en=(()=>{class e{create(t){return typeof MutationObserver>`u`?null:new MutationObserver(t)}static ɵfac=function(n){return new(n||e)};static ɵprov=ut$3({token:e,factory:e.ɵfac})}return e})();var Ae$1=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=yp({type:e});static ɵinj=_s({providers:[en]})}return e})();var Ce$1=(()=>{class e{_platform=g(b);isDisabled(t){return t.hasAttribute(`disabled`)}isVisible(t){return an$1(t)&&getComputedStyle(t).visibility===`visible`}isTabbable(t){if(!this._platform.isBrowser)return!1;let n=nn(un(t));if(n&&(Me$1(n)===-1||!this.isVisible(n)))return!1;let o=t.nodeName.toLowerCase(),r=Me$1(t);return t.hasAttribute(`contenteditable`)?r!==-1:o===`iframe`||o===`object`||this._platform.WEBKIT&&this._platform.IOS&&!dn(t)?!1:o===`audio`?t.hasAttribute(`controls`)?r!==-1:!1:o===`video`?r===-1?!1:r!==null?!0:this._platform.FIREFOX||t.hasAttribute(`controls`):t.tabIndex>=0}isFocusable(t,n){return ln(t)&&!this.isDisabled(t)&&(n?.ignoreInert||!t.closest?.(`[inert]`))&&(n?.ignoreVisibility||this.isVisible(t))}static ɵfac=function(n){return new(n||e)};static ɵprov=ut$3({token:e,factory:e.ɵfac})}return e})();function nn(e){try{return e.frameElement}catch{return null}}function an$1(e){return!!(e.offsetWidth||e.offsetHeight||typeof e.getClientRects==`function`&&e.getClientRects().length)}function on(e){let a=e.nodeName.toLowerCase();return a===`input`||a===`select`||a===`button`||a===`textarea`}function rn(e){return cn(e)&&e.type==`hidden`}function sn(e){return mn(e)&&e.hasAttribute(`href`)}function cn(e){return e.nodeName.toLowerCase()==`input`}function mn(e){return e.nodeName.toLowerCase()==`a`}function De$1(e){if(!e.hasAttribute(`tabindex`)||e.tabIndex===void 0)return!1;let a=e.getAttribute(`tabindex`);return!!(a&&!isNaN(parseInt(a,10)))}function Me$1(e){if(!De$1(e))return null;let a=parseInt(e.getAttribute(`tabindex`)||``,10);return isNaN(a)?-1:a}function dn(e){let a=e.nodeName.toLowerCase(),t=a===`input`&&e.type;return t===`text`||t===`password`||a===`select`||a===`textarea`}function ln(e){return rn(e)?!1:on(e)||sn(e)||e.hasAttribute(`contenteditable`)||De$1(e)}function un(e){return e.ownerDocument&&e.ownerDocument.defaultView||window}var ut$2=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(a){this._enabled=a,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(a,this._startAnchor),this._toggleAnchorTabIndex(a,this._endAnchor))}_enabled=!0;constructor(a,t,n,o,r=!1,s){this._element=a,this._checker=t,this._ngZone=n,this._document=o,this._injector=s,r||this.attachAnchors()}destroy(){let a=this._startAnchor,t=this._endAnchor;a&&(a.removeEventListener(`focus`,this.startAnchorListener),a.remove()),t&&(t.removeEventListener(`focus`,this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(a){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(a)))})}focusFirstTabbableElementWhenReady(a){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(a)))})}focusLastTabbableElementWhenReady(a){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(a)))})}_getRegionBoundary(a){let t=this._element.querySelectorAll(`[cdk-focus-region-${a}], [cdkFocusRegion${a}], [cdk-focus-${a}]`);return a==`start`?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(a){let t=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(t){if(!this._checker.isFocusable(t)){let n=this._getFirstTabbableElement(t);return n?.focus(a),!!n}return t.focus(a),!0}return this.focusFirstTabbableElement(a)}focusFirstTabbableElement(a){let t=this._getRegionBoundary(`start`);return t&&t.focus(a),!!t}focusLastTabbableElement(a){let t=this._getRegionBoundary(`end`);return t&&t.focus(a),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(a){if(this._checker.isFocusable(a)&&this._checker.isTabbable(a))return a;let t=a.children;for(let n=0;n<t.length;n++){let o=t[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[n]):null;if(o)return o}return null}_getLastTabbableElement(a){if(this._checker.isFocusable(a)&&this._checker.isTabbable(a))return a;let t=a.children;for(let n=t.length-1;n>=0;n--){let o=t[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[n]):null;if(o)return o}return null}_createAnchor(){let a=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,a),a.classList.add(`cdk-visually-hidden`),a.classList.add(`cdk-focus-trap-anchor`),a.setAttribute(`aria-hidden`,`true`),a}_toggleAnchorTabIndex(a,t){a?t.setAttribute(`tabindex`,`0`):t.removeAttribute(`tabindex`)}toggleAnchors(a){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(a,this._startAnchor),this._toggleAnchorTabIndex(a,this._endAnchor))}_executeOnStable(a){By(a,{injector:this._injector})}};var Fe$1=(()=>{class e{_checker=g(Ce$1);_ngZone=g(he$1);_document=g(qe$2);_injector=g(pe$1);constructor(){g(O).load(Ie$1)}create(t,n=!1){return new ut$2(t,this._checker,this._ngZone,this._document,n,this._injector)}static ɵfac=function(n){return new(n||e)};static ɵprov=ut$3({token:e,factory:e.ɵfac})}return e})();var bn$1=(()=>{class e{_elementRef=g(Nr);_focusTrapFactory=g(Fe$1);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(t){this.focusTrap&&(this.focusTrap.enabled=t)}autoCapture=!1;constructor(){g(b).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(t){let n=t.autoCapture;n&&!n.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=It(),this.focusTrap?.focusInitialElementWhenReady()}static ɵfac=function(n){return new(n||e)};static ɵdir=LE({type:e,selectors:[[``,`cdkTrapFocus`,``]],inputs:{enabled:[2,`cdkTrapFocus`,`enabled`,p0],autoCapture:[2,`cdkTrapFocusAutoCapture`,`autoCapture`,p0]},exportAs:[`cdkTrapFocus`],features:[Om]})}return e})();var D=(function(e){return e[e.NONE=0]=`NONE`,e[e.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,e[e.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,e})(D||{});var ke$1=`cdk-high-contrast-black-on-white`;var Te$1=`cdk-high-contrast-white-on-black`;var kt=`cdk-high-contrast-active`;var Re$1=(()=>{class e{_platform=g(b);_hasCheckedHighContrastMode=!1;_document=g(qe$2);_breakpointSubscription;constructor(){this._breakpointSubscription=g(Nt).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return D.NONE;let t=this._document.createElement(`div`);t.style.backgroundColor=`rgb(1,2,3)`,t.style.position=`absolute`,this._document.body.appendChild(t);let n=this._document.defaultView||window,o=n&&n.getComputedStyle?n.getComputedStyle(t):null,r=(o&&o.backgroundColor||``).replace(/ /g,``);switch(t.remove(),r){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return D.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return D.BLACK_ON_WHITE}return D.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(kt,ke$1,Te$1),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===D.BLACK_ON_WHITE?t.add(kt,ke$1):n===D.WHITE_ON_BLACK&&t.add(kt,Te$1)}}static ɵfac=function(n){return new(n||e)};static ɵprov=ut$3({token:e,factory:e.ɵfac})}return e})();var pn=(()=>{class e{constructor(){g(Re$1)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(n){return new(n||e)};static ɵmod=yp({type:e});static ɵinj=_s({imports:[Ae$1]})}return e})();var fn=200;var bt$1=class{_letterKeyStream=new K$1;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new K$1;selectedItem=this._selectedItem;constructor(a,t){let n=typeof t?.debounceInterval==`number`?t.debounceInterval:fn;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(a),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(a){this._selectedItemIndex=a}setItems(a){this._items=a}handleKey(a){let t=a.keyCode;a.key&&a.key.length===1?this._letterKeyStream.next(a.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(a){this._letterKeyStream.pipe(Sg(t=>this._pressedLetters.push(t)),Il(a),Ye$2(()=>this._pressedLetters.length>0),te(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(t=>{for(let n=1;n<this._items.length+1;n++){let o=(this._selectedItemIndex+n)%this._items.length,r=this._items[o];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};function Oe$1(e,...a){return a.length?a.some(t=>e[t]):e.altKey||e.shiftKey||e.ctrlKey||e.metaKey}var pt$1=class{_items;_activeItemIndex=Dn$1(-1);_activeItem=Dn$1(null);_wrap=!1;_typeaheadSubscription=G$2.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=a=>a.disabled;constructor(a,t){this._items=a,a instanceof ii$2?this._itemChangesSubscription=a.changes.subscribe(n=>this._itemsChanged(n.toArray())):Wo(a)&&(this._effectRef=$u(()=>this._itemsChanged(a()),{injector:t}))}tabOut=new K$1;change=new K$1;skipPredicate(a){return this._skipPredicateFn=a,this}withWrap(a=!0){return this._wrap=a,this}withVerticalOrientation(a=!0){return this._vertical=a,this}withHorizontalOrientation(a){return this._horizontal=a,this}withAllowedModifierKeys(a){return this._allowedModifierKeys=a,this}withTypeAhead(a=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new bt$1(t,{debounceInterval:typeof a==`number`?a:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(a=!0){return this._homeAndEnd=a,this}withPageUpDown(a=!0,t=10){return this._pageUpAndDown={enabled:a,delta:t},this}setActiveItem(a){let t=this._activeItem();this.updateActiveItem(a),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(a){let t=a.keyCode,o=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(r=>!a[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(r<s?r:s-1,-1);break}else return;default:(o||Oe$1(a,`shiftKey`))&&this._typeahead?.handleKey(a);return}this._typeahead?.reset(),a.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(a){let t=this._getItemsArray(),n=typeof a==`number`?a:t.indexOf(a),o=t[n];this._activeItem.set(o??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(a){this._wrap?this._setActiveInWrapMode(a):this._setActiveInDefaultMode(a)}_setActiveInWrapMode(a){let t=this._getItemsArray();for(let n=1;n<=t.length;n++){let o=(this._activeItemIndex()+a*n+t.length)%t.length,r=t[o];if(!this._skipPredicateFn(r)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(a){this._setActiveItemByIndex(this._activeItemIndex()+a,a)}_setActiveItemByIndex(a,t){let n=this._getItemsArray();if(n[a]){for(;this._skipPredicateFn(n[a]);)if(a+=t,!n[a])return;this.setActiveItem(a)}}_getItemsArray(){return Wo(this._items)?this._items():this._items instanceof ii$2?this._items.toArray():this._items}_itemsChanged(a){this._typeahead?.setItems(a);let t=this._activeItem();if(t){let n=a.indexOf(t);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var Tt=class extends pt$1{_origin=`program`;setFocusOrigin(a){return this._origin=a,this}setActiveItem(a){super.setActiveItem(a),this.activeItem&&this.activeItem.focus(this._origin)}};var Pe$1=/* @__PURE__ */ new Map;var Ct=class e{_appId=g(Hu);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(a,t=!1){this._appId!==`ng`&&(a+=this._appId);let n=Pe$1.get(a);return n===void 0?n=0:n++,Pe$1.set(a,n),`${a}${t?e._infix+`-`:``}${n}`}static ɵfac=function(t){return new(t||e)};static ɵprov=ut$3({token:e,factory:e.ɵfac})};var Y=(function(e){return e[e.NORMAL=0]=`NORMAL`,e[e.NEGATED=1]=`NEGATED`,e[e.INVERTED=2]=`INVERTED`,e})(Y||{});var ft$1;var P;function yo$1(){if(P==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return P=!1,P;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)P=!0;else{let e=Element.prototype.scrollTo;e?P=!/\{\s*\[native code\]\s*\}/.test(e.toString()):P=!1}}return P}function _o(){if(typeof document!=`object`||!document)return Y.NORMAL;if(ft$1==null){let e=document.createElement(`div`),a=e.style;e.dir=`rtl`,a.width=`1px`,a.overflow=`auto`,a.visibility=`hidden`,a.pointerEvents=`none`,a.position=`absolute`;let t=document.createElement(`div`),n=t.style;n.width=`2px`,n.height=`1px`,e.appendChild(t),document.body.appendChild(e),ft$1=Y.NORMAL,e.scrollLeft===0&&(e.scrollLeft=1,ft$1=e.scrollLeft===0?Y.NEGATED:Y.INVERTED),e.remove()}return ft$1}function So(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var hn=new S(`MATERIAL_ANIMATIONS`);var Le$1=null;function vn$1(){return g(hn,{optional:!0})?.animationsDisabled||g(vm,{optional:!0})===`NoopAnimations`?`di-disabled`:(Le$1??=g(mt$1).matchMedia(`(prefers-reduced-motion)`).matches,Le$1?`reduced-motion`:`enabled`)}function j(){return vn$1()!==`enabled`}function Co(e){return e==null?``:typeof e==`string`?e:`${e}px`}function Fo(e){return e!=null&&`${e}`!=`false`}var v=(function(e){return e[e.FADING_IN=0]=`FADING_IN`,e[e.VISIBLE=1]=`VISIBLE`,e[e.FADING_OUT=2]=`FADING_OUT`,e[e.HIDDEN=3]=`HIDDEN`,e})(v||{});var Dt=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=v.HIDDEN;constructor(a,t,n,o=!1){this._renderer=a,this.element=t,this.config=n,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}};var Be$1=z({passive:!0,capture:!0});var Ft=class{_events=/* @__PURE__ */ new Map;addHandler(a,t,n,o){let r=this._events.get(t);if(r){let s=r.get(n);s?s.add(o):r.set(n,/* @__PURE__ */ new Set([o]))}else this._events.set(t,/* @__PURE__ */ new Map([[n,/* @__PURE__ */ new Set([o])]])),a.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Be$1)})}removeHandler(a,t,n){let o=this._events.get(a);if(!o)return;let r=o.get(t);r&&(r.delete(n),r.size===0&&o.delete(t),o.size===0&&(this._events.delete(a),document.removeEventListener(a,this._delegateEventHandler,Be$1)))}_delegateEventHandler=a=>{let t=y(a);t&&this._events.get(a.type)?.forEach((n,o)=>{(o===t||o.contains(t))&&n.forEach(r=>r.handleEvent(a))})}};var q$1={enterDuration:225,exitDuration:150};var gn=800;var ze=z({passive:!0,capture:!0});var je=[`mousedown`,`touchstart`];var Ue=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var yn$1=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵcmp=RE({type:e,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(n,o){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return e})();var Q=class e{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=/* @__PURE__ */ new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Ft;constructor(a,t,n,o,r){this._target=a,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=C(n)),r&&r.get(O).load(yn$1)}fadeInRipple(a,t,n={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=V$1(V$1({},q$1),n.animation);n.centered&&(a=o.left+o.width/2,t=o.top+o.height/2);let s=n.radius||_n(a,t,o),c=a-o.left,g=t-o.top,S=r.enterDuration,p=document.createElement(`div`);p.classList.add(`mat-ripple-element`),p.style.left=`${c-s}px`,p.style.top=`${g-s}px`,p.style.height=`${s*2}px`,p.style.width=`${s*2}px`,n.color!=null&&(p.style.backgroundColor=n.color),p.style.transitionDuration=`${S}ms`,this._containerElement.appendChild(p);let Bt=window.getComputedStyle(p),Qe=Bt.transitionProperty,zt=Bt.transitionDuration,vt=Qe===`none`||zt===`0s`||zt===`0s, 0s`||o.width===0&&o.height===0,F=new Dt(this,p,n,vt);p.style.transform=`scale3d(1, 1, 1)`,F.state=v.FADING_IN,n.persistent||(this._mostRecentTransientRipple=F);let X=null;return!vt&&(S||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let jt=()=>{X&&(X.fallbackTimer=null),clearTimeout(Ut),this._finishRippleTransition(F)},gt=()=>this._destroyRipple(F),Ut=setTimeout(gt,S+100);p.addEventListener(`transitionend`,jt),p.addEventListener(`transitioncancel`,gt),X={onTransitionEnd:jt,onTransitionCancel:gt,fallbackTimer:Ut}}),this._activeRipples.set(F,X),(vt||!S)&&this._finishRippleTransition(F),F}fadeOutRipple(a){if(a.state===v.FADING_OUT||a.state===v.HIDDEN)return;let t=a.element,n=V$1(V$1({},q$1),a.config.animation);t.style.transitionDuration=`${n.exitDuration}ms`,t.style.opacity=`0`,a.state=v.FADING_OUT,(a._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(a)}fadeOutAll(){this._getActiveRipples().forEach(a=>a.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(a=>{a.config.persistent||a.fadeOut()})}setupTriggerEvents(a){let t=C(a);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,je.forEach(n=>{e._eventManager.addHandler(this._ngZone,n,t,this)}))}handleEvent(a){a.type===`mousedown`?this._onMousedown(a):a.type===`touchstart`?this._onTouchStart(a):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ue.forEach(t=>{this._triggerElement.addEventListener(t,this,ze)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(a){a.state===v.FADING_IN?this._startFadeOutTransition(a):a.state===v.FADING_OUT&&this._destroyRipple(a)}_startFadeOutTransition(a){let t=a===this._mostRecentTransientRipple,{persistent:n}=a.config;a.state=v.VISIBLE,!n&&(!t||!this._isPointerDown)&&a.fadeOut()}_destroyRipple(a){let t=this._activeRipples.get(a)??null;this._activeRipples.delete(a),this._activeRipples.size||(this._containerRect=null),a===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),a.state=v.HIDDEN,t!==null&&(a.element.removeEventListener(`transitionend`,t.onTransitionEnd),a.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),a.element.remove()}_onMousedown(a){let t=W(a),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+gn;!this._target.rippleDisabled&&!t&&!n&&(this._isPointerDown=!0,this.fadeInRipple(a.clientX,a.clientY,this._target.rippleConfig))}_onTouchStart(a){if(!this._target.rippleDisabled&&!Z(a)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=a.changedTouches;if(t)for(let n=0;n<t.length;n++)this.fadeInRipple(t[n].clientX,t[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(a=>{let t=a.state===v.VISIBLE||a.config.terminateOnPointerUp&&a.state===v.FADING_IN;!a.config.persistent&&t&&a.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let a=this._triggerElement;a&&(je.forEach(t=>e._eventManager.removeHandler(t,a,this)),this._pointerUpEventsRegistered&&(Ue.forEach(t=>a.removeEventListener(t,this,ze)),this._pointerUpEventsRegistered=!1))}};function _n(e,a,t){let n=Math.max(Math.abs(e-t.left),Math.abs(e-t.right)),o=Math.max(Math.abs(a-t.top),Math.abs(a-t.bottom));return Math.sqrt(n*n+o*o)}var Rt=new S(`mat-ripple-global-options`);var Zo=(()=>{class e{_elementRef=g(Nr);_animationsDisabled=j();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=g(he$1),n=g(b),o=g(Rt,{optional:!0}),r=g(pe$1);this._globalOptions=o||{},this._rippleRenderer=new Q(this,t,this._elementRef,n,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:V$1(V$1(V$1({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,n=0,o){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,n,V$1(V$1({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,V$1(V$1({},this.rippleConfig),t))}static ɵfac=function(n){return new(n||e)};static ɵdir=LE({type:e,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(n,o){n&2&&Wp(`mat-ripple-unbounded`,o.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return e})();var xn$1={capture:!0};var Sn$1=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var Ot=`mat-ripple-loader-uninitialized`;var Pt=`mat-ripple-loader-class-name`;var He=`mat-ripple-loader-centered`;var ht$2=`mat-ripple-loader-disabled`;var Ve$1=(()=>{class e{_document=g(qe$2);_animationsDisabled=j();_globalRippleOptions=g(Rt,{optional:!0});_platform=g(b);_ngZone=g(he$1);_injector=g(pe$1);_eventCleanups;_hosts=/* @__PURE__ */ new Map;constructor(){let t=g(br).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Sn$1.map(n=>t.listen(this._document,n,this._onInteraction,xn$1)))}ngOnDestroy(){let t=this._hosts.keys();for(let n of t)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(t,n){t.setAttribute(Ot,this._globalRippleOptions?.namespace??``),(n.className||!t.hasAttribute(Pt))&&t.setAttribute(Pt,n.className||``),n.centered&&t.setAttribute(He,``),n.disabled&&t.setAttribute(ht$2,``)}setDisabled(t,n){let o=this._hosts.get(t);o?(o.target.rippleDisabled=n,!n&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):n?t.setAttribute(ht$2,``):t.removeAttribute(ht$2)}_onInteraction=t=>{let n=y(t);if(n instanceof HTMLElement){let o=n.closest(`[${Ot}="${this._globalRippleOptions?.namespace??``}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let n=this._document.createElement(`span`);n.classList.add(`mat-ripple`,t.getAttribute(Pt)),t.append(n);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??q$1.enterDuration,s=this._animationsDisabled?0:o?.animation?.exitDuration??q$1.exitDuration,c={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(ht$2),rippleConfig:{centered:t.hasAttribute(He),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:s}}},g=new Q(c,this._ngZone,n,this._platform,this._injector),S=!c.rippleDisabled;S&&g.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:g,hasSetUpEvents:S}),t.removeAttribute(Ot)}destroyRipple(t){let n=this._hosts.get(t);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(n){return new(n||e)};static ɵprov=ut$3({token:e,factory:e.ɵfac})}return e})();var Ke=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵcmp=RE({type:e,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(n,o){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return e})();var Nn$1=new S(`MAT_BUTTON_CONFIG`);function We(e){return e==null?void 0:h0(e)}var Lt=(()=>{class e{_elementRef=g(Nr);_ngZone=g(he$1);_animationsDisabled=j();_config=g(Nn$1,{optional:!0});_focusMonitor=g(Mt);_cleanupClick;_renderer=g(ja);_rippleLoader=g(Ve$1);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=s0(!1,{transform:p0});constructor(){g(O).load(Ke);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,n){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(n){return new(n||e)};static ɵdir=LE({type:e,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(n,o){n&2&&(Sp(`disabled`,o._getDisabledAttribute())(`aria-disabled`,o._getAriaDisabled())(`tabindex`,o._getTabIndex()),OI(o.color?`mat-`+o.color:``),Wp(`mat-mdc-button-progress-indicator-shown`,o.showProgress())(`mat-mdc-button-disabled`,o.disabled)(`mat-mdc-button-disabled-interactive`,o.disabledInteractive)(`mat-unthemed`,!o.color)(`_mat-animation-noopable`,o._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,p0],disabled:[2,`disabled`,`disabled`,p0],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,p0],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,p0],tabIndex:[2,`tabIndex`,`tabIndex`,We],_tabindex:[2,`tabindex`,`_tabindex`,We],showProgress:[1,`showProgress`]}})}return e})();var wn$1=(()=>{class e extends Lt{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){let t=[`*`,[[``,`progressIndicator`,``]]],n=[`*`,`[progressIndicator]`];function o(r,s){r&1&&(_c(0,`div`,1),yI(1,1),Ac())}return RE({type:e,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[bp],ngContentSelectors:n,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(s,c){s&1&&(mI(t),Rp(0,`span`,0),yI(1),tI(2,o,2,0,`div`,1),Rp(3,`span`,2)(4,`span`,3)),s&2&&(av(2),rI(c.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2})})()}return e})();var Ze=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=yp({type:e});static ɵinj=_s({imports:[I]})}return e})();var Ge=/* @__PURE__ */ new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var yr=(()=>{class e extends Lt{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=En$1(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let n=this._elementRef.nativeElement.classList,o=this._appearance?Ge.get(this._appearance):null,r=Ge.get(t);o&&n.remove(...o),n.add(...r),this._appearance=t}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],n=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function o(r,s){r&1&&(_c(0,`div`,2),yI(1,3),Ac())}return RE({type:e,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[bp],ngContentSelectors:n,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(s,c){s&1&&(mI(t),Rp(0,`span`,0),yI(1),_c(2,`span`,1),yI(3,1),Ac(),yI(4,2),tI(5,o,2,0,`div`,2),Rp(6,`span`,3)(7,`span`,4)),s&2&&(Wp(`mdc-button__ripple`,!c._isFab)(`mdc-fab__ripple`,c._isFab),av(5),rI(c.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2})})()}return e})();function En$1(e){return e.hasAttribute(`mat-raised-button`)?`elevated`:e.hasAttribute(`mat-stroked-button`)?`outlined`:e.hasAttribute(`mat-flat-button`)?`filled`:e.hasAttribute(`mat-button`)?`text`:null}var _r=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=yp({type:e});static ɵinj=_s({imports:[Ze,I]})}return e})();var $e=[`TraceStarted`,`SpanStarted`,`SpanCompleted`,`SpanFailed`,`TraceCompleted`,`TracePersisted`];var Sr=`(unmatched)`;var Ye$1={isDemoMode:!0};var In$1=1e3;var An$1=3e4;var Cr=1500;var qe$1=class e{eventSource=null;lastEventId=null;reconnectAttempt=0;reconnectTimer=null;manuallyDisconnected=!0;hasConnectedBefore=!1;openCount=0;eventsSubject=new K$1;reconnectedSubject=new K$1;stateSignal=Dn$1(`closed`);events$=this.eventsSubject.asObservable();reconnected$=this.reconnectedSubject.asObservable();state=this.stateSignal.asReadonly();connect(){Ye$1.isDemoMode||(this.openCount++,!(this.openCount>1)&&(this.manuallyDisconnected=!1,this.hasConnectedBefore=!1,this.lastEventId=null,this.reconnectAttempt=0,this.openConnection()))}disconnect(){this.openCount=Math.max(this.openCount-1,0),!(this.openCount>0)&&(this.manuallyDisconnected=!0,this.clearReconnectTimer(),this.eventSource?.close(),this.eventSource=null,this.stateSignal.set(`closed`))}openConnection(){this.stateSignal.set(`connecting`);let a=this.lastEventId!==null?`api/stream?lastEventId=${this.lastEventId}`:`api/stream`,t=new EventSource(a);this.eventSource=t,t.onopen=()=>{this.reconnectAttempt=0,this.stateSignal.set(`open`),this.hasConnectedBefore&&this.reconnectedSubject.next(),this.hasConnectedBefore=!0},t.onerror=()=>{t.close(),this.stateSignal.set(`closed`),this.manuallyDisconnected||this.scheduleReconnect()},t.addEventListener(`ping`,()=>{});for(let n of $e)t.addEventListener(n,o=>{let r=JSON.parse(o.data);this.lastEventId=r.eventId,this.eventsSubject.next(r)})}scheduleReconnect(){let a=Math.min(In$1*2**this.reconnectAttempt,An$1);this.reconnectAttempt++,this.reconnectTimer=setTimeout(()=>this.openConnection(),a)}clearReconnectTimer(){this.reconnectTimer!==null&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null)}static ɵfac=function(t){return new(t||e)};static ɵprov=L({token:e,factory:e.ɵfac,providedIn:`root`})};var ce=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}};var it$1=class extends ce{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,e,t,n,r,s){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=n,this.bindings=r||null,this.directives=s||null}};var G=class extends ce{templateRef;viewContainerRef;context;injector;constructor(i,e,t,n){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=n}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}};var nt$1=class extends ce{element;constructor(i){super(),this.element=i instanceof Nr?i.nativeElement:i}};var Me=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof it$1)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof G)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof nt$1)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var de=class extends Me{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,n=t.get(Sn$2,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:n,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,n=i.injector||this._defaultInjector||pe$1.NULL,r=n.get(ie,t.injector);e=g0(i.component,{elementInjector:n,environmentInjector:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(n=>this.outletElement.appendChild(n)),t.detectChanges(),this.setDisposeFn(()=>{let n=e.indexOf(t);n!==-1&&e.remove(n)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment(`dom-portal`);e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var Di$1=(()=>{class o extends Me{_moduleRef=g(Sn$2,{optional:!0});_document=g(qe$2);_viewContainerRef=g(Ni$1);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new Pe$2;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,n=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return t!==this._viewContainerRef&&this._insertContent(n.hostView.rootNodes[0]),super.setDisposeFn(()=>n.destroy()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let n=this._document.createComment(`dom-portal`);e.setAttachedHost(this),t.parentNode.insertBefore(n,t),this._insertContent(t),this._attachedPortal=e,super.setDisposeFn(()=>n.parentNode?.replaceChild(t,n))};_insertContent(e){let t=this._viewContainerRef.element.nativeElement;t.nodeType===t.ELEMENT_NODE?t.appendChild(e):t.parentNode?.insertBefore(e,t)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Xm(o)))(n||o)}})();static ɵdir=LE({type:o,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[bp]})}return o})();var zt=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=yp({type:o});static ɵinj=_s({})}return o})();var hi$1=20;var ue=(()=>{class o{_ngZone=g(he$1);_platform=g(b);_renderer=g(br).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new K$1;_scrolledCount=0;scrollContainers=/* @__PURE__ */ new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=hi$1){return this._platform.isBrowser?new N(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let n=e>0?this._scrolled.pipe(El(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Zi()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let n=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(Ye$2(r=>!r||n.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((n,r)=>{this._targetContainsElement(r,e)&&t.push(r)}),t}_targetContainsElement(e,t){let n=C(t),r=e.getElementRef().nativeElement;do if(n==r)return!0;while(n=n.parentElement);return!1}static ɵfac=function(t){return new(t||o)};static ɵprov=ut$3({token:o,factory:o.ɵfac})}return o})();var an=(()=>{class o{elementRef=g(Nr);scrollDispatcher=g(ue);ngZone=g(he$1);dir=g(y$1,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new K$1;_renderer=g(ja);_cleanupScroll;_elementScrolled=new K$1;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,n=this.dir&&this.dir.value==`rtl`;e.left??=n?e.end:e.start,e.right??=n?e.start:e.end,e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),n&&_o()!=Y.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),_o()==Y.INVERTED?e.left=e.right:_o()==Y.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;yo$1()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t=`left`,n=`right`,r=this.elementRef.nativeElement;if(e==`top`)return r.scrollTop;if(e==`bottom`)return r.scrollHeight-r.clientHeight-r.scrollTop;let s=this.dir&&this.dir.value==`rtl`;return e==`start`?e=s?n:t:e==`end`&&(e=s?t:n),s&&_o()==Y.INVERTED?e==t?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:s&&_o()==Y.NEGATED?e==t?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==t?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static ɵfac=function(t){return new(t||o)};static ɵdir=LE({type:o,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return o})();var ui$1=20;var K=(()=>{class o{_platform=g(b);_listeners;_viewportSize=null;_change=new K$1;_document=g(qe$2);constructor(){let e=g(he$1),t=g(br).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let n=r=>this._change.next(r);this._listeners=[t.listen(`window`,`resize`,n),t.listen(`window`,`orientationchange`,n)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+t,height:n,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),n=e.documentElement,r=n.getBoundingClientRect();return{top:-r.top||e.body?.scrollTop||t.scrollY||n.scrollTop||0,left:-r.left||e.body?.scrollLeft||t.scrollX||n.scrollLeft||0}}change(e=ui$1){return e>0?this._change.pipe(El(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static ɵfac=function(t){return new(t||o)};static ɵprov=ut$3({token:o,factory:o.ɵfac})}return o})();var Oe=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=yp({type:o});static ɵinj=_s({})}return o})();var rt=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=yp({type:o});static ɵinj=_s({imports:[I,Oe,I,Oe]})}return o})();var Ht=yo$1();function Gt(o){return new Re(o.get(K),o.get(qe$2))}var Re=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||``,this._previousHTMLStyles.top=i.style.top||``,i.style.left=Co(-this._previousScrollPosition.left),i.style.top=Co(-this._previousScrollPosition.top),i.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,n=e.style,r=t.scrollBehavior||``,s=n.scrollBehavior||``;this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove(`cdk-global-scrollblock`),Ht&&(t.scrollBehavior=n.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Ht&&(t.scrollBehavior=r,n.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Kt(o,i){return new De(o.get(ue),o.get(he$1),o.get(K),i)}var De=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,n){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=n}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(Ye$2(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var pe=class{enable(){}disable(){}attach(){}};function at$1(o,i){return i.some(e=>{let t=o.bottom<e.top,n=o.top>e.bottom,r=o.right<e.left,s=o.left>e.right;return t||n||r||s})}function Wt(o,i){return i.some(e=>{let t=o.top<e.top,n=o.bottom>e.bottom,r=o.left<e.left,s=o.right>e.right;return t||n||r||s})}function Fe(o,i){return new Pe(o.get(ue),o.get(K),o.get(he$1),i)}var Pe=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,n){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=n}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:n}=this._viewportRuler.getViewportSize();at$1(e,[{width:t,height:n,bottom:n,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var $t=(()=>{class o{_injector=g(pe$1);noop=()=>new pe;close=e=>Kt(this._injector,e);block=()=>Gt(this._injector);reposition=e=>Fe(this._injector,e);static ɵfac=function(t){return new(t||o)};static ɵprov=ut$3({token:o,factory:o.ɵfac})}return o})();var $$1=class{positionStrategy;scrollStrategy=new pe;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var Ee=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var qt=(()=>{class o{_attachedOverlays=[];_document=g(qe$2);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,n){return n.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static ɵfac=function(t){return new(t||o)};static ɵprov=ut$3({token:o,factory:o.ɵfac})}return o})();var Qt=(()=>{class o extends qt{_ngZone=g(he$1);_renderer=g(br).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let n=t.length-1;n>-1;n--){let r=t[n];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static ɵfac=function(t){return new(t||o)};static ɵprov=ut$3({token:o,factory:o.ɵfac})}return o})();var Jt=(()=>{class o extends qt{_platform=g(b);_ngZone=g(he$1);_renderer=g(br).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,n={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(t,`pointerdown`,this._pointerDownListener,n),r.listen(t,`click`,this._clickListener,n),r.listen(t,`auxclick`,this._clickListener,n),r.listen(t,`contextmenu`,this._clickListener,n)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=y(e)};_clickListener=e=>{let t=y(e),n=e.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let s=r.length-1;s>-1;s--){let a=r[s],l=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,l))){if(Yt(a.overlayElement,t)||Yt(a.overlayElement,n))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static ɵfac=function(t){return new(t||o)};static ɵprov=ut$3({token:o,factory:o.ɵfac})}return o})();function Yt(o,i){let e=typeof ShadowRoot<`u`&&ShadowRoot,t=i;for(;t;){if(t===o)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var ei$1=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵcmp=RE({type:o,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(t,n){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return o})();var ti$1=(()=>{class o{_platform=g(b);_containerElement;_document=g(qe$2);_styleLoader=g(O);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=`cdk-overlay-container`;if(this._platform.isBrowser||So()){let n=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<n.length;r++)n[r].remove()}let t=this._document.createElement(`div`);t.classList.add(e),So()?t.setAttribute(`platform`,`test`):this._platform.isBrowser||t.setAttribute(`platform`,`server`),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(ei$1)}static ɵfac=function(t){return new(t||o)};static ɵprov=ut$3({token:o,factory:o.ɵfac})}return o})();var lt=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,n){this._renderer=e,this._ngZone=t,this.element=i.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=e.listen(this.element,`click`,n)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents=`none`,i.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function ct(o){return o&&o.nodeType===1}var st=Dn$1([]);var Ie=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new K$1;_attachments=new K$1;_detachments=new K$1;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new K$1;_outsidePointerEvents=new K$1;_afterNextRenderRef;constructor(i,e,t,n,r,s,a,l,h,d=!1,u,m){this._portalOutlet=i,this._host=e,this._pane=t,this._config=n,this._ngZone=r,this._keyboardDispatcher=s,this._document=a,this._location=l,this._outsideClickDispatcher=h,this._animationsDisabled=d,this._injector=u,this._renderer=m,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),Or(()=>{st.update(t=>t.includes(this)?t:[...t,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=By(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation===`pop-state`){let t=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>t.unsubscribe()}else this._config.disposeOnNavigation===`url-change`&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof e?.onDestroy==`function`&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),Or(()=>{st.update(e=>e.filter(t=>t!==this))}),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,Or(()=>{st.update(e=>e.filter(t=>t!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=V$1(V$1({},this._config),i),this._updateElementSize()}setDirection(i){this._config=$$3(V$1({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i==`string`?i:i.value:`ltr`}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=Co(this._config.width),i.height=Co(this._config.height),i.minWidth=Co(this._config.minWidth),i.minHeight=Co(this._config.minHeight),i.maxWidth=Co(this._config.maxWidth),i.maxHeight=Co(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?``:`none`}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;ct(i)?i.after(this._host):i?.type===`parent`?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new lt(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let n=St(e||[]).filter(r=>!!r);n.length&&(t?i.classList.add(...n):i.classList.remove(...n))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=By(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}};var Xt=`cdk-overlay-connected-position-bounding-box`;var pi$1=/([A-Za-z%]+)$/;function Ve(o,i){return new Te(i,o.get(K),o.get(qe$2),o.get(b),o.get(ti$1))}var Te=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new K$1;_resizeSubscription=G$2.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,n,r){this._viewportRuler=e,this._document=t,this._platform=n,this._overlayContainer=r,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(Xt),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,n=this._containerRect,r=[],s;for(let a of this._preferredPositions){let l=this._getOriginPoint(i,n,a),h=this._getOverlayPoint(l,e,a),d=this._getOverlayFit(h,e,t,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,l);return}if(this._canFitWithFlexibleDimensions(d,h,t)){r.push({position:a,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,a)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:h,originPoint:l,position:a,overlayRect:e})}if(r.length){let a=null,l=-1;for(let h of r){let d=h.boundingBoxRect.width*h.boundingBoxRect.height*(h.position.weight||1);d>l&&(l=d,a=h)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&V(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Xt),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof Nr?this._origin.nativeElement:ct(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let n;if(t.originX==`center`)n=i.left+i.width/2;else{let s=this._isRtl()?i.right:i.left,a=this._isRtl()?i.left:i.right;n=t.originX==`start`?s:a}e.left<0&&(n-=e.left);let r;return t.originY==`center`?r=i.top+i.height/2:r=t.originY==`top`?i.top:i.bottom,e.top<0&&(r-=e.top),{x:n,y:r}}_getOverlayPoint(i,e,t){let n;t.overlayX==`center`?n=-e.width/2:t.overlayX===`start`?n=this._isRtl()?-e.width:0:n=this._isRtl()?0:-e.width;let r;return t.overlayY==`center`?r=-e.height/2:r=t.overlayY==`top`?0:-e.height,{x:i.x+n,y:i.y+r}}_getOverlayFit(i,e,t,n){let r=Ut(e),{x:s,y:a}=i,l=this._getOffset(n,`x`),h=this._getOffset(n,`y`);l&&(s+=l),h&&(a+=h);let d=0-s,u=s+r.width-t.width,m=0-a,g=a+r.height-t.height,v=this._subtractOverflows(r.width,d,u),k=this._subtractOverflows(r.height,m,g),mt=v*k;return{visibleArea:mt,isCompletelyWithinViewport:r.width*r.height===mt,fitsInViewportVertically:k===r.height,fitsInViewportHorizontally:v==r.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let n=t.bottom-e.y,r=t.right-e.x,s=jt(this._overlayRef.getConfig().minHeight),a=jt(this._overlayRef.getConfig().minWidth),l=i.fitsInViewportVertically||s!=null&&s<=n,h=i.fitsInViewportHorizontally||a!=null&&a<=r;return l&&h}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let n=Ut(e),r=this._viewportRect,s=Math.max(i.x+n.width-r.width,0),a=Math.max(i.y+n.height-r.height,0),l=Math.max(r.top-t.top-i.y,0),h=Math.max(r.left-t.left-i.x,0),d=0,u=0;return n.width<=r.width?d=h||-s:d=i.x<this._getViewportMarginStart()?r.left-t.left-i.x:0,n.height<=r.height?u=l||-a:u=i.y<this._getViewportMarginTop()?r.top-t.top-i.y:0,this._previousPushAmount={x:d,y:u},{x:i.x+d,y:i.y+u}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!mi$1(this._lastScrollVisibility,t)){let n=new Ee(i,t);this._positionChanges.next(n)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,n=i.overlayY;i.overlayX===`center`?t=`center`:this._isRtl()?t=i.overlayX===`start`?`right`:`left`:t=i.overlayX===`start`?`left`:`right`;for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${t} ${n}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,n=this._isRtl(),r,s,a;if(e.overlayY===`top`)s=i.y,r=t.height-s+this._getViewportMarginBottom();else if(e.overlayY===`bottom`)a=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=t.height-a+this._getViewportMarginTop();else{let g=Math.min(t.bottom-i.y+t.top,i.y),v=this._lastBoundingBoxSize.height;r=g*2,s=i.y-g,r>v&&!this._isInitialRender&&!this._growAfterOpen&&(s=i.y-v/2)}let l=e.overlayX===`start`&&!n||e.overlayX===`end`&&n,h=e.overlayX===`end`&&!n||e.overlayX===`start`&&n,d,u,m;if(h)m=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=i.x-this._getViewportMarginStart();else if(l)u=i.x,d=t.right-i.x-this._getViewportMarginEnd();else{let g=Math.min(t.right-i.x+t.left,i.x),v=this._lastBoundingBoxSize.width;d=g*2,u=i.x-g,d>v&&!this._isInitialRender&&!this._growAfterOpen&&(u=i.x-v/2)}return{top:s,left:u,bottom:a,right:m,width:d,height:r}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left=`0`,n.bottom=n.right=`auto`,n.maxHeight=n.maxWidth=``,n.width=n.height=`100%`;else{let r=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;n.width=Co(t.width),n.height=Co(t.height),n.top=Co(t.top)||`auto`,n.bottom=Co(t.bottom)||`auto`,n.left=Co(t.left)||`auto`,n.right=Co(t.right)||`auto`,e.overlayX===`center`?n.alignItems=`center`:n.alignItems=e.overlayX===`end`?`flex-end`:`flex-start`,e.overlayY===`center`?n.justifyContent=`center`:n.justifyContent=e.overlayY===`bottom`?`flex-end`:`flex-start`,r&&(n.maxHeight=Co(r)),s&&(n.maxWidth=Co(s))}this._lastBoundingBoxSize=t,V(this._boundingBox.style,n)}_resetBoundingBoxStyles(){V(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){V(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(i,e){let t={},n=this._hasExactPosition(),r=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(n){let d=this._viewportRuler.getViewportScrollPosition();V(t,this._getExactOverlayY(e,i,d)),V(t,this._getExactOverlayX(e,i,d))}else t.position=`static`;let a=``,l=this._getOffset(e,`x`),h=this._getOffset(e,`y`);l&&(a+=`translateX(${l}px) `),h&&(a+=`translateY(${h}px)`),t.transform=a.trim(),s.maxHeight&&(n?t.maxHeight=Co(s.maxHeight):r&&(t.maxHeight=``)),s.maxWidth&&(n?t.maxWidth=Co(s.maxWidth):r&&(t.maxWidth=``)),V(this._pane.style,t)}_getExactOverlayY(i,e,t){let n={top:``,bottom:``},r=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t)),i.overlayY===`bottom`)n.bottom=`${this._document.documentElement.clientHeight-(r.y+this._overlayRect.height)}px`;else n.top=Co(r.y);return n}_getExactOverlayX(i,e,t){let n={left:``,right:``},r=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t));let s;if(this._isRtl()?s=i.overlayX===`end`?`left`:`right`:s=i.overlayX===`end`?`right`:`left`,s===`right`)n.right=`${this._document.documentElement.clientWidth-(r.x+this._overlayRect.width)}px`;else n.left=Co(r.x);return n}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Wt(i,t),isOriginOutsideView:at$1(i,t),isOverlayClipped:Wt(e,t),isOverlayOutsideView:at$1(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,n)=>t-Math.max(n,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e===`x`?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&St(i).forEach(e=>{e!==``&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof Nr)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,e=this._overlayContainer.getContainerElement();i&&(e.style.display=`block`);let t=e.getBoundingClientRect();return i&&(e.style.display=``),t}};function V(o,i){for(let e in i)Object.hasOwn(i,e)&&(o[e]=i[e]);return o}function jt(o){if(typeof o!=`number`&&o!=null){let[i,e]=o.split(pi$1);return!e||e===`px`?parseFloat(i):null}return o||null}function Ut(o){return{top:Math.floor(o.top),right:Math.floor(o.right),bottom:Math.floor(o.bottom),left:Math.floor(o.left),width:Math.floor(o.width),height:Math.floor(o.height)}}function mi$1(o,i){return o===i?!0:o.isOriginClipped===i.isOriginClipped&&o.isOriginOutsideView===i.isOriginOutsideView&&o.isOverlayClipped===i.isOverlayClipped&&o.isOverlayOutsideView===i.isOverlayOutsideView}var Zt=`cdk-global-overlay-wrapper`;function ii$1(o){return new Ae}var Ae=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(Zt),this._isDisposed=!1}top(i=``){return this._bottomOffset=``,this._topOffset=i,this._alignItems=`flex-start`,this}left(i=``){return this._xOffset=i,this._xPosition=`left`,this}bottom(i=``){return this._topOffset=``,this._bottomOffset=i,this._alignItems=`flex-end`,this}right(i=``){return this._xOffset=i,this._xPosition=`right`,this}start(i=``){return this._xOffset=i,this._xPosition=`start`,this}end(i=``){return this._xOffset=i,this._xPosition=`end`,this}width(i=``){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=``){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=``){return this.left(i),this._xPosition=`center`,this}centerVertically(i=``){return this.top(i),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,{width:n,height:r,maxWidth:s,maxHeight:a}=this._overlayRef.getConfig(),l=(n===`100%`||n===`100vw`)&&(!s||s===`100%`||s===`100vw`),h=(r===`100%`||r===`100vh`)&&(!a||a===`100%`||a===`100vh`),d=this._xPosition,u=this._xOffset,m=this._overlayRef.getConfig().direction===`rtl`,g=``,v=``,k=``;l?k=`flex-start`:d===`center`?(k=`center`,m?v=u:g=u):m?d===`left`||d===`end`?(k=`flex-end`,g=u):(d===`right`||d===`start`)&&(k=`flex-start`,v=u):d===`left`||d===`start`?(k=`flex-start`,g=u):(d===`right`||d===`end`)&&(k=`flex-end`,v=u),i.position=this._cssPosition,i.marginLeft=l?`0`:g,i.marginTop=h?`0`:this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=l?`0`:v,e.justifyContent=k,e.alignItems=h?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Zt),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position=``,this._overlayRef=null,this._isDisposed=!0}};var ni$1=(()=>{class o{_injector=g(pe$1);global(){return ii$1()}flexibleConnectedTo(e){return Ve(this._injector,e)}static ɵfac=function(t){return new(t||o)};static ɵprov=ut$3({token:o,factory:o.ɵfac})}return o})();var oi$1=new S(`OVERLAY_DEFAULT_CONFIG`);function Ne(o,i){o.get(O).load(ei$1);let e=o.get(ti$1),t=o.get(qe$2),n=o.get(Ct),r=o.get(xi$1),s=o.get(y$1),a=o.get(ja,null,{optional:!0})||o.get(br).createRenderer(null,null),l=new $$1(i),h=o.get(oi$1,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||s.value,!t.body||!(`showPopover`in t.body)?l.usePopover=!1:l.usePopover=i?.usePopover??h;let d=t.createElement(`div`),u=t.createElement(`div`);d.id=n.getId(`cdk-overlay-`),d.classList.add(`cdk-overlay-pane`),u.appendChild(d),l.usePopover&&(u.setAttribute(`popover`,`manual`),u.classList.add(`cdk-overlay-popover`));let m=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return ct(m)?m.after(u):m?.type===`parent`?m.element.appendChild(u):e.getContainerElement().appendChild(u),new Ie(new de(d,r,o),u,d,l,o.get(he$1),o.get(Qt),t,o.get(me),o.get(Jt),i?.disableAnimations??o.get(vm,null,{optional:!0})===`NoopAnimations`,o.get(ie),a)}var ri$1=(()=>{class o{scrollStrategies=g($t);_positionBuilder=g(ni$1);_injector=g(pe$1);create(e){return Ne(this._injector,e)}position(){return this._positionBuilder}static ɵfac=function(t){return new(t||o)};static ɵprov=ut$3({token:o,factory:o.ɵfac})}return o})();var dt=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=yp({type:o});static ɵinj=_s({providers:[ri$1],imports:[I,zt,rt,rt]})}return o})();var pt=new S(`MAT_MENU_PANEL`);var ut$1=(()=>{class o{_isAnchor;_elementRef=g(Nr);_document=g(qe$2);_focusMonitor=g(Mt);_parentMenu=g(pt,{optional:!0});_changeDetectorRef=g(d0);role=`menuitem`;disabled=!1;disabledInteractive=!1;disableRipple=!1;_hovered=new K$1;_focused=new K$1;_highlighted=!1;_triggersSubmenu=!1;constructor(){g(O).load(Ke),this._parentMenu?.addItem?.(this),this._isAnchor=this._elementRef.nativeElement.tagName===`A`}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled&&!this.disabledInteractive?`-1`:`0`}_getAriaDisabled(){return this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabled(){return this.disabledInteractive||!this.disabled?null:!0}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp`);for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||o)};static ɵcmp=(function(){let e=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`],t=[`mat-icon, [matMenuItemIcon]`,`*`];function n(r,s){r&1&&(Su(),vi(0,`svg`,2),Ap(1,`polygon`,3),Sc())}return RE({type:o,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:12,hostBindings:function(s,a){s&1&&Lp(`click`,function(h){return a._checkDisabled(h)})(`mouseenter`,function(){return a._handleMouseEnter()}),s&2&&(Sp(`role`,a.role)(`tabindex`,a._getTabIndex())(`aria-disabled`,a._getAriaDisabled())(`disabled`,a._getDisabled()),Wp(`mat-mdc-menu-item-highlighted`,a._highlighted)(`mat-mdc-menu-item-submenu-trigger`,a._triggersSubmenu)(`mat-mdc-menu-item-disabled`,a.disabled)(`mat-mdc-menu-item-disabled-interactive`,a.disabledInteractive))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,p0],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,p0],disableRipple:[2,`disableRipple`,`disableRipple`,p0]},exportAs:[`matMenuItem`],ngContentSelectors:t,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(s,a){s&1&&(mI(e),yI(0),vi(1,`span`,0),yI(2,1),Sc(),Ap(3,`div`,1),tI(4,n,2,0,`svg`,2)),s&2&&(av(3),_p(`matRippleDisabled`,a.disableRipple||a.disabled)(`matRippleTrigger`,a._getHostElement()),av(),rI(a._triggersSubmenu?4:-1))},dependencies:[Zo],encapsulation:2})})()}return o})();var bi=new S(`MatMenuContent`);var Ci$1=new S(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var ht$1=`_mat-menu-enter`;var Be=`_mat-menu-exit`;var Le=(()=>{class o{_elementRef=g(Nr);_changeDetectorRef=g(d0);_injector=g(pe$1);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=j();_allItems;_directDescendantItems=new ii$2;_classList={};_panelAnimationState=`void`;_animationDone=new K$1;_isAnimating=Dn$1(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=V$1({},this._classList);t&&t.length&&t.split(` `).forEach(r=>{n[r]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(r=>{n[r]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new Pe$2;close=this.closed;panelId=g(Ct).getId(`mat-menu-panel-`);constructor(){let e=g(Ci$1);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Tt(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(e=>e.disabled&&!e.disabledInteractive),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(Nl(this._directDescendantItems),Ji(e=>hg(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let n=e.toArray(),r=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[r]&&!n[r].disabled?t.setActiveItem(r):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Nl(this._directDescendantItems),Ji(t=>hg(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:Oe$1(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=By(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=$$3(V$1({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===Be;(t||e===ht$1)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===ht$1||e===Be)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Be),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?ht$1:Be)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Nl(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||o)};static ɵcmp=(function(){let e=[`*`];function t(n,r){if(n&1){let s=fI();_c(0,`div`,0),Fp(`click`,function(){gu(s);let l=hI();return mu(l.closed.emit(`click`))})(`animationstart`,function(l){gu(s);let h=hI();return mu(h._onAnimationStart(l.animationName))})(`animationend`,function(l){gu(s);let h=hI();return mu(h._onAnimationDone(l.animationName))})(`animationcancel`,function(l){gu(s);let h=hI();return mu(h._onAnimationDone(l.animationName))}),_c(1,`div`,1),yI(2),Ac()()}if(n&2){let s=hI();OI(s._classList),Wp(`mat-menu-panel-animations-disabled`,s._animationsDisabled)(`mat-menu-panel-exit-animation`,s._panelAnimationState===`void`)(`mat-menu-panel-animating`,s._isAnimating()),kp(`id`,s.panelId),Sp(`aria-label`,s.ariaLabel||null)(`aria-labelledby`,s.ariaLabelledby||null)(`aria-describedby`,s.ariaDescribedby||null)}}return RE({type:o,selectors:[[`mat-menu`]],contentQueries:function(r,s,a){if(r&1&&Vp(a,bi,5)(a,ut$1,5)(a,ut$1,4),r&2){let l;EI(l=II())&&(s.lazyContent=l.first),EI(l=II())&&(s._allItems=l),EI(l=II())&&(s.items=l)}},viewQuery:function(r,s){if(r&1&&Hp(Dr,5),r&2){let a;EI(a=II())&&(s.templateRef=a.first)}},hostVars:3,hostBindings:function(r,s){r&2&&Sp(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,p0],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,n=>n==null?null:p0(n)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[XI([{provide:pt,useExisting:o}])],ngContentSelectors:e,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(r,s){r&1&&(mI(),Cp(0,t,3,12,`ng-template`))},styles:[`mat-menu {
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
`],encapsulation:2})})()}return o})();var wi=new S(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let o=g(pe$1);return()=>Fe(o)}});var q=/* @__PURE__ */ new WeakMap;var ki$1=(()=>{class o{_canHaveBackdrop;_element=g(Nr);_viewContainerRef=g(Ni$1);_menuItemInstance=g(ut$1,{optional:!0,self:!0});_dir=g(y$1,{optional:!0});_focusMonitor=g(Mt);_ngZone=g(he$1);_injector=g(pe$1);_scrollStrategy=g(wi);_changeDetectorRef=g(d0);_animationsDisabled=j();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=G$2.EMPTY;_menuCloseSubscription=G$2.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=g(pt,{optional:!0});this._parentMaterialMenu=t instanceof Le?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&q.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=q.get(t);q.set(t,this),n&&n!==this&&n._closeMenu();let r=this._createOverlay(t),s=r.getConfig(),a=s.positionStrategy;this._setPosition(t,a),this._canHaveBackdrop?s.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:s.hasBackdrop=t.hasBackdrop??!1,r.hasAttached()||(r.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof Le&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(xg(t.close)).subscribe(()=>{a.withLockedPosition(!1).reapplyLastPosition(),a.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof Le&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(nn$1(1)).subscribe(()=>{t.detach(),q.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&q.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Ne(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof Le&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new $$1({positionStrategy:Ve(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let r=n.connectionPair.overlayX===`start`?`after`:`before`,s=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(r,s)})})}_setPosition(e,t){let[n,r]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[s,a]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[l,h]=[s,a],[d,u]=[n,r],m=0;if(this._triggersSubmenu()){if(u=n=e.xPosition===`before`?`start`:`end`,r=d=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let g=this._parentMaterialMenu.items.first;this._parentInnerPadding=g?g._getHostElement().offsetTop:0}m=s===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(l=s===`top`?`bottom`:`top`,h=a===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:l,overlayX:d,overlayY:s,offsetY:m},{originX:r,originY:l,overlayX:u,overlayY:s,offsetY:m},{originX:n,originY:h,overlayX:d,overlayY:a,offsetY:-m},{originX:r,originY:h,overlayX:u,overlayY:a,offsetY:-m}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:Zi(),r=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Ye$2(s=>this._menuOpen&&s!==this._menuItemInstance)):Zi();return hg(e,n,r,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new G(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return q.get(e)===this}_triggerIsAriaDisabled(){return p0(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){Qv()};static ɵdir=LE({type:o})}return o})();var vo=(()=>{class o extends ki$1{_cleanupTouchstart;_hoverSubscription=G$2.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new Pe$2;onMenuOpen=this.menuOpened;menuClosed=new Pe$2;onMenuClose=this.menuClosed;constructor(){super(!0);let e=g(ja);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{Z(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){W(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||o)};static ɵdir=LE({type:o,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&Lp(`click`,function(s){return n._handleClick(s)})(`mousedown`,function(s){return n._handleMousedown(s)})(`keydown`,function(s){return n._handleKeydown(s)}),t&2&&Sp(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[bp]})}return o})();var yo=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=yp({type:o});static ɵinj=_s({imports:[Ze,dt,I,Oe]})}return o})();var li$1=class o{document=g(qe$2);opener=null;isDrawer=Dn$1(!1);open=Dn$1(!1);toggle(){this.open()?this.close():this.show()}close(){this.open()&&(this.open.set(!1),this.returnFocusToOpener())}show(){this.opener=this.document.activeElement,this.open.set(!0)}returnFocusToOpener(){this.opener?.isConnected&&this.opener.focus(),this.opener=null}static ɵfac=function(e){return new(e||o)};static ɵprov=L({token:o,factory:o.ɵfac,providedIn:`root`})};var ci$1=class o{active=Dn$1(!1);static ɵfac=function(e){return new(e||o)};static ɵprov=L({token:o,factory:o.ɵfac,providedIn:`root`})};function U(n){n||(n=g(ae));let e=new N(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe(xg(e))}function T(n,e){let d=!e?.manualCleanup?e?.injector?.get(ae)??g(ae):null,l=p(e?.equal),o;e?.requireSync?o=Dn$1({kind:0},{equal:l}):o=Dn$1({kind:1,value:e?.initialValue},{equal:l});let i,b=n.subscribe({next:r=>o.set({kind:1,value:r}),error:r=>{o.set({kind:2,error:r}),i?.()},complete:()=>{i?.()}});if(e?.requireSync&&o().kind===0)throw new b$1(601,!1);return i=d?.onDestroy(b.unsubscribe.bind(b)),Lc(()=>{let r=o();switch(r.kind){case 1:return r.value;case 2:throw r.error;case 0:throw new b$1(601,!1)}},{equal:e?.equal})}function p(n=Object.is){return(e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}function u(n){return n===null?`—`:n<1e3?`${n} \xB5s`:n<1e6?`${r((n/1e3).toFixed(1))} ms`:`${r((n/1e6).toFixed(2))} s`}function r(n){return n.includes(`.`)?n.replace(/0+$/,``).replace(/\.$/,``):n}function i(n){return n===null?`—`:n<1e3?`${n} \xB5s`:n<1e6?`${t(n/1e3)} ms`:`${t(n/1e6)} s`}function t(n){let e=n<10?2:n<100?1:0;return r(n.toFixed(e))}var c={slowThresholdMicros:25e4,version:``,tailSamplingEnabled:!1,successSampleRate:0,openApiDocumentPath:`/openapi/v1.json`,hostPathBase:``};var s=class o{api=g(kh);config$=this.api.getConfig().pipe(Yi(()=>Zi(c)),Mg(1));static ɵfac=function(p){return new(p||o)};static ɵprov=L({token:o,factory:o.ɵfac,providedIn:`root`})};var bn=[{path:``,loadComponent:()=>import(`./chunk-BMYK5XRl.js`).then(n=>n.FlowPageComponent),data:{title:`nav.flow`,subtitle:`topbar.subtitle.flow`}},{path:`history`,loadComponent:()=>import(`./chunk-Djb2Tk2L.js`).then(n=>n.HistoryComponent),data:{title:`nav.history`,subtitle:`topbar.subtitle.history`}},{path:`diff`,loadComponent:()=>import(`./chunk-CrAqd1-T.js`).then(n=>n.DiffPageComponent),data:{title:`diff.title`,subtitle:`topbar.subtitle.diff`}},{path:`components`,loadComponent:()=>import(`./chunk-C-ke8oW_.js`).then(n=>n.ComponentsComponent),data:{title:`nav.components`,subtitle:`topbar.subtitle.components`}},{path:`insights`,loadComponent:()=>import(`./chunk-Dba2p2Di.js`).then(n=>n.InsightsComponent),data:{title:`nav.insights`,subtitle:`topbar.subtitle.insights`}},{path:`architecture`,loadComponent:()=>import(`./chunk-ChflMY78.js`).then(n=>n.ArchitectureComponent),data:{title:`nav.architecture`,subtitle:`topbar.subtitle.architecture`}},{path:`runner`,loadComponent:()=>import(`./chunk-D4OZ7_09.js`).then(n=>n.RunnerComponent),data:{title:`nav.runner`,subtitle:`topbar.subtitle.runner`}},{path:`**`,redirectTo:``}];var Ye=`assets/demo-fixtures`;var Qn=`${Ye}/manifest.json`;var Un=`X-NetApiFlow-TraceId`;var Zn=/* @__PURE__ */ new Set([`api/architecture`]);var $n=[`from`,`to`];function yn(n,a){if(qn(n))return a(n);let e=g(Fi);return Kn(e).pipe(Ji(t=>{if(ni(t,n))return Zi(new Lr({body:null,status:204,url:n.urlWithParams}));let i=ii(t,n);if(i)return e.get(`${Ye}/${i}`).pipe(te(l=>new Lr({body:l,status:200,url:n.urlWithParams})));let r=qe(n)?void 0:ei(t,n.method,n.url);return r?Xn(e,r,n):qe(n)?gg(()=>Yn(n)):a(n)}))}var vn=null;function Kn(n){return vn??=n.get(Qn).pipe(Yi(()=>Zi({routes:{}})),Mg({bufferSize:1,refCount:!1})),vn}function qn(n){return n.url.startsWith(Ye)}function qe(n){return n.url.startsWith(`api/`)}function Yn(n){return console.error(`The demo has no recording for ${n.urlWithParams}.`),new Gt$1({status:404,statusText:`Not Found`,url:n.urlWithParams})}function Xn(n,a,e){let t=new ze$1().set(Un,a.traceId).set(`Content-Type`,a.contentType);return(a.body?Jn(n,a):Zi(null)).pipe(te(r=>new Lr({body:r,status:a.status,headers:t,url:e.urlWithParams})))}function Jn(n,a){let e=`${Ye}/${a.body}`;return a.contentType.includes(`json`)?n.get(e):n.get(e,{responseType:`text`})}function ei(n,a,e){let t=mt(e);return(n.sampleResponses??[]).filter(i=>i.method===a.toUpperCase()&&ti(mt(i.template),t)).sort((i,r)=>wn(r.template)-wn(i.template)).at(0)}function mt(n){return n.replace(/^https?:\/\/[^/]+/,``).split(`?`)[0].split(`/`).filter(a=>a.length>0)}function ti(n,a){return n.length===a.length&&n.every((e,t)=>Cn(e)||e.toLowerCase()===a[t].toLowerCase())}function Cn(n){return n.startsWith(`{`)&&n.endsWith(`}`)}function wn(n){return mt(n).filter(a=>!Cn(a)).length}function ni(n,a){return qe(a)&&(n.noContent??[]).includes(ut(a.urlWithParams))}function ii(n,a){let e=n.documents?.[a.url];if(e)return e;if(!qe(a))return;let t=ut(a.urlWithParams),i=ut(a.url);return n.routes[t]??n.routes[i]??ai(n,i)}function ai(n,a){let e=a;for(;e.includes(`/`);){e=e.slice(0,e.lastIndexOf(`/`));let t=n.fallbacks?.[e];if(t)return t}}function ut(n){let[e,t]=n.replace(/^.*?\bapi\//,`api/`).replace(/^\/+/,``).split(`?`);if(!t)return e;let i=[...new URLSearchParams(t).entries()].filter(([r])=>!ri(e,r)).sort(([r],[l])=>r.localeCompare(l)).map(([r,l])=>`${r}=${l}`).join(`&`);return i?`${e}?${i}`:e}function ri(n,a){return Zn.has(n)&&$n.includes(a)}var xn={providers:[gm(),cD(),GD(...Ye$1.isDemoMode?[QD([yn])]:[]),ia(bn)]};var oi=new S(`MAT_DRAWER_DEFAULT_AUTOSIZE`,{providedIn:`root`,factory:()=>!1});var ft=new S(`MAT_DRAWER_CONTAINER`);var Ce=(()=>{class n extends an{_platform=g(b);_changeDetectorRef=g(d0);_element=g(Nr);_ngZone=g(he$1);_isInert=!1;_container=g(gt);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(e){e.opened?this._ngZone.runOutsideAngular(()=>{e._animationEnd.pipe(Ig(50),nn$1(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_drawerModeChanged(){this._updateInert()}_updateInert(){let e=this._container._isShowingBackdrop();if(e!==this._isInert){let t=this._element.nativeElement;this._isInert=e,e?t.setAttribute(`inert`,`true`):t.removeAttribute(`inert`)}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!==`over`&&e.opened||t!=null&&t.mode!==`over`&&t.opened}static ɵfac=(()=>{let e;return function(i){return(e||(e=Xm(n)))(i||n)}})();static ɵcmp=(function(){return RE({type:n,selectors:[[`mat-drawer-content`]],hostAttrs:[1,`mat-drawer-content`],hostVars:6,hostBindings:function(i,r){i&2&&(qp(`margin-left`,r._container._contentMargins.left,`px`)(`margin-right`,r._container._contentMargins.right,`px`),Wp(`mat-drawer-content-hidden`,r._shouldBeHidden()))},features:[XI([{provide:an,useExisting:n}]),bp],ngContentSelectors:[`*`],decls:1,vars:0,template:function(i,r){i&1&&(mI(),yI(0))},encapsulation:2})})()}return n})();var ht=(()=>{class n{_elementRef=g(Nr);_focusTrapFactory=g(Fe$1);_focusMonitor=g(Mt);_platform=g(b);_ngZone=g(he$1);_renderer=g(ja);_interactivityChecker=g(Ce$1);_doc=g(qe$2);_isAnimating=!1;_container=g(ft,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e===`end`?`end`:`start`,e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position=`start`;get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged()}_mode=`over`;get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=Fo(e)}_disableClose=!1;get autoFocus(){return this._autoFocus??(this.mode===`side`?`dialog`:`first-tabbable`)}set autoFocus(e){(e===`true`||e===`false`||e==null)&&(e=Fo(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(Fo(e))}_opened=Dn$1(!1);_openedVia=null;_animationStarted=new K$1;_animationEnd=new K$1;openedChange=new Pe$2(!0);_openedStream=this.openedChange.pipe(Ye$2(e=>e),te(()=>{}));openedStart=this._animationStarted.pipe(Ye$2(()=>this.opened),Ki(void 0));_closedStream=this.openedChange.pipe(Ye$2(e=>!e),te(()=>{}));closedStart=this._animationStarted.pipe(Ye$2(()=>!this.opened),Ki(void 0));_destroyed=new K$1;onPositionChanged=new Pe$2;_content;_modeChanged=new K$1;_injector=g(pe$1);_changeDetectorRef=g(d0);constructor(){this.openedChange.pipe(xg(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||`program`)}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,`keydown`,i=>{i.keyCode===27&&!this.disableClose&&!Oe$1(i)&&this._ngZone.run(()=>{this.close(),i.stopPropagation(),i.preventDefault()})}),e.listen(t,`transitionend`,this._handleTransitionEvent),e.listen(t,`transitioncancel`,this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&(this._interactivityChecker.isFocusable(i)||(i.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{l(),d(),i.removeAttribute(`tabindex`)},l=this._renderer.listen(i,`blur`,r),d=this._renderer.listen(i,`mousedown`,r)})),i.focus(t))}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case`dialog`:return;case!0:case`first-tabbable`:By(()=>{let t=this._isAnimating?{preventScroll:!0}:void 0;!this._focusTrap.focusInitialElement(t)&&typeof e.focus==`function`&&e.focus(t)},{injector:this._injector});break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`);break;default:this._focusByCssSelector(this.autoFocus)}}_restoreFocus(e){this.autoFocus!==`dialog`&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position===`end`&&this._updatePositionInParent(`end`),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,`mouse`)}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let i=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||`program`);return e||(this._openedVia=null),i}_setOpen(e,t,i){return e===this.opened?Promise.resolve(e?`open`:`close`):(this._opened.set(e),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?this._isAnimating?(this._setIsAnimating(!1),this._simulateAnimation()):(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):this._simulateAnimation(),this._elementRef.nativeElement.classList.toggle(`mat-drawer-opened`,e),!e&&t&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(r=>{this.openedChange.pipe(nn$1(1)).subscribe(l=>r(l?`open`:`close`))}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(e){e!==this._isAnimating&&(this._isAnimating=e,this._elementRef.nativeElement.classList.toggle(`mat-drawer-animating`,e))}_simulateAnimation(){setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()})}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,i=t.parentNode;e===`end`?(this._anchor||(this._anchor=this._doc.createComment(`mat-drawer-anchor`),i.insertBefore(this._anchor,t)),i.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type===`transitionend`&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`content`];return RE({type:n,selectors:[[`mat-drawer`]],viewQuery:function(r,l){if(r&1&&Hp(e,5),r&2){let d;EI(d=II())&&(l._content=d.first)}},hostAttrs:[1,`mat-drawer`],hostVars:12,hostBindings:function(r,l){r&2&&(Sp(`align`,null)(`tabIndex`,l.mode!==`side`?`-1`:null),qp(`visibility`,!l._container&&!l.opened?`hidden`:null),Wp(`mat-drawer-end`,l.position===`end`)(`mat-drawer-over`,l.mode===`over`)(`mat-drawer-push`,l.mode===`push`)(`mat-drawer-side`,l.mode===`side`))},inputs:{position:`position`,mode:`mode`,disableClose:`disableClose`,autoFocus:`autoFocus`,opened:`opened`},outputs:{openedChange:`openedChange`,_openedStream:`opened`,openedStart:`openedStart`,_closedStream:`closed`,closedStart:`closedStart`,onPositionChanged:`positionChanged`},exportAs:[`matDrawer`],ngContentSelectors:[`*`],decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(r,l){r&1&&(mI(),vi(0,`div`,1,0),yI(2),Sc())},dependencies:[an],encapsulation:2})})()}return n})();var gt=(()=>{class n{_dir=g(y$1,{optional:!0});_element=g(Nr);_ngZone=g(he$1);_changeDetectorRef=g(d0);_animationDisabled=j();_transitionsEnabled=!1;_allDrawers;_drawers=new ii$2;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=Fo(e)}_autosize=g(oi);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:Fo(e)}_backdropOverride=null;backdropClick=new Pe$2;_start=null;_end=null;_left=null;_right=null;_destroyed=new K$1;_doCheckSubject=new K$1;_contentMargins={left:null,right:null};_contentMarginChanges=new K$1;get scrollable(){return this._userContent||this._content}_injector=g(pe$1);constructor(){let e=g(b),t=g(K);this._dir?.change.pipe(xg(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(xg(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add(`mat-drawer-transition`),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Nl(this._allDrawers),xg(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Nl(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Il(10),xg(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode==`side`)e+=this._left._getWidth();else if(this._left.mode==`push`){let i=this._left._getWidth();e+=i,t-=i}}if(this._right&&this._right.opened){if(this._right.mode==`side`)t+=this._right._getWidth();else if(this._right.mode==`push`){let i=this._right._getWidth();t+=i,e-=i}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(xg(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!==`side`&&e.openedChange.pipe(xg(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(xg(this._drawers.changes)).subscribe(()=>{By({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(xg(hg(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,i=`mat-drawer-container-has-open`;e?t.add(i):t.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position==`end`?(this._end,this._end=e):(this._start,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value===`rtl`?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!=`over`||this._isDrawerOpen(this._end)&&this._end.mode!=`over`}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!==`side`:this._backdropOverride}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`],t=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function i(l,d){if(l&1){let h=fI();vi(0,`div`,1),Lp(`click`,function(){gu(h);let C=hI();return mu(C._onBackdropClicked())}),Sc()}if(l&2){let h=hI();Wp(`mat-drawer-shown`,h._isShowingBackdrop())}}function r(l,d){l&1&&(vi(0,`mat-drawer-content`),yI(1,2),Sc())}return RE({type:n,selectors:[[`mat-drawer-container`]],contentQueries:function(d,h,w){if(d&1&&Vp(w,Ce,5)(w,ht,5),d&2){let C;EI(C=II())&&(h._content=C.first),EI(C=II())&&(h._allDrawers=C)}},viewQuery:function(d,h){if(d&1&&Hp(Ce,5),d&2){let w;EI(w=II())&&(h._userContent=w.first)}},hostAttrs:[1,`mat-drawer-container`],hostVars:2,hostBindings:function(d,h){d&2&&Wp(`mat-drawer-container-explicit-backdrop`,h._backdropOverride)},inputs:{autosize:`autosize`,hasBackdrop:`hasBackdrop`},outputs:{backdropClick:`backdropClick`},exportAs:[`matDrawerContainer`],features:[XI([{provide:ft,useExisting:n}])],ngContentSelectors:t,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(d,h){d&1&&(mI(e),tI(0,i,1,2,`div`,0),yI(1),yI(2,1),tI(3,r,2,0,`mat-drawer-content`)),d&2&&(rI(h.hasBackdrop?0:-1),av(3),rI(h._content?-1:3))},dependencies:[Ce],styles:[`.mat-drawer-container {
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
`],encapsulation:2})})()}return n})();var Xe=(()=>{class n extends Ce{static ɵfac=(()=>{let e;return function(i){return(e||(e=Xm(n)))(i||n)}})();static ɵcmp=(function(){return RE({type:n,selectors:[[`mat-sidenav-content`]],hostAttrs:[1,`mat-drawer-content`,`mat-sidenav-content`],features:[XI([{provide:an,useExisting:n},{provide:Ce,useExisting:n}]),bp],ngContentSelectors:[`*`],decls:1,vars:0,template:function(i,r){i&1&&(mI(),yI(0))},encapsulation:2})})()}return n})();var _t=(()=>{class n extends ht{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=Fo(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=tn(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=tn(e)}_fixedBottomGap=0;static ɵfac=(()=>{let e;return function(i){return(e||(e=Xm(n)))(i||n)}})();static ɵcmp=(function(){return RE({type:n,selectors:[[`mat-sidenav`]],hostAttrs:[1,`mat-drawer`,`mat-sidenav`],hostVars:16,hostBindings:function(i,r){i&2&&(Sp(`tabIndex`,r.mode!==`side`?`-1`:null)(`align`,null),qp(`top`,r.fixedInViewport?r.fixedTopGap:null,`px`)(`bottom`,r.fixedInViewport?r.fixedBottomGap:null,`px`),Wp(`mat-drawer-end`,r.position===`end`)(`mat-drawer-over`,r.mode===`over`)(`mat-drawer-push`,r.mode===`push`)(`mat-drawer-side`,r.mode===`side`)(`mat-sidenav-fixed`,r.fixedInViewport))},inputs:{fixedInViewport:`fixedInViewport`,fixedTopGap:`fixedTopGap`,fixedBottomGap:`fixedBottomGap`},exportAs:[`matSidenav`],features:[XI([{provide:ht,useExisting:n}]),bp],ngContentSelectors:[`*`],decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(i,r){i&1&&(mI(),vi(0,`div`,1,0),yI(2),Sc())},dependencies:[an],encapsulation:2})})()}return n})();var Sn=(()=>{class n extends gt{_allDrawers=void 0;_content=void 0;static ɵfac=(()=>{let e;return function(i){return(e||(e=Xm(n)))(i||n)}})();static ɵcmp=(function(){let e=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`],t=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function i(l,d){if(l&1){let h=fI();vi(0,`div`,1),Lp(`click`,function(){gu(h);let C=hI();return mu(C._onBackdropClicked())}),Sc()}if(l&2){let h=hI();Wp(`mat-drawer-shown`,h._isShowingBackdrop())}}function r(l,d){l&1&&(vi(0,`mat-sidenav-content`),yI(1,2),Sc())}return RE({type:n,selectors:[[`mat-sidenav-container`]],contentQueries:function(d,h,w){if(d&1&&Vp(w,Xe,5)(w,_t,5),d&2){let C;EI(C=II())&&(h._content=C.first),EI(C=II())&&(h._allDrawers=C)}},hostAttrs:[1,`mat-drawer-container`,`mat-sidenav-container`],hostVars:2,hostBindings:function(d,h){d&2&&Wp(`mat-drawer-container-explicit-backdrop`,h._backdropOverride)},exportAs:[`matSidenavContainer`],features:[XI([{provide:ft,useExisting:n},{provide:gt,useExisting:n}]),bp],ngContentSelectors:t,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(d,h){d&1&&(mI(e),tI(0,i,1,2,`div`,0),yI(1),yI(2,1),tI(3,r,2,0,`mat-sidenav-content`)),d&2&&(rI(h.hasBackdrop?0:-1),av(3),rI(h._content?-1:3))},dependencies:[Xe],styles:[`.mat-drawer-container {
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
`],encapsulation:2})})()}return n})();var Dn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=yp({type:n});static ɵinj=_s({imports:[Oe,I,Oe]})}return n})();var $=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var vt=(()=>{class n extends Me{_elementRef=g(Nr);_focusTrapFactory=g(Fe$1);_config;_interactivityChecker=g(Ce$1);_ngZone=g(he$1);_focusMonitor=g(Mt);_renderer=g(ja);_changeDetectorRef=g(d0);_injector=g(pe$1);_platform=g(b);_document=g(qe$2);_portalOutlet;_focusTrapped=new K$1;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=g($,{optional:!0})||new $,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{r(),l(),e.removeAttribute(`tabindex`)},r=this._renderer.listen(e,`blur`,i),l=this._renderer.listen(e,`mousedown`,i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_trapFocus(e){this._isDestroyed||By(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||t.focus(e);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,e);break;default:this._focusByCssSelector(this._config.autoFocus,e)}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e==`string`?t=this._document.querySelector(e):typeof e==`boolean`?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus==`function`){let i=It(),r=this._elementRef.nativeElement;(!i||i===this._document.body||i===r||r.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=It();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=It()))}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){function e(t,i){}return RE({type:n,selectors:[[`cdk-dialog-container`]],viewQuery:function(i,r){if(i&1&&Hp(Di$1,7),i&2){let l;EI(l=II())&&(r._portalOutlet=l.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(i,r){i&2&&Sp(`id`,r._config.id||null)(`role`,r._config.role)(`aria-modal`,r._config.ariaModal)(`aria-labelledby`,r._config.ariaLabel?null:r._ariaLabelledByQueue[0])(`aria-label`,r._config.ariaLabel)(`aria-describedby`,r._config.ariaDescribedBy||null)},features:[bp],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(i,r){i&1&&Tp(0,e,0,0,`ng-template`,0)},dependencies:[Di$1],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var J=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new K$1;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,e){this.overlayRef=a,this.config=e,this.disableClose=e.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!Oe$1(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(a,e){if(this._canClose(a)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(a),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a=``,e=``){return this.overlayRef.updateSize({width:a,height:e}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(a,e,this.componentInstance))}};var li=new S(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let n=g(pe$1);return()=>Gt(n)}});var di=new S(`DialogData`);var ci=new S(`DefaultDialogConfig`);function pi(n){let a=Dn$1(n),e=new Pe$2;return{valueSignal:a,get value(){return a()},change:e,ngOnDestroy(){e.complete()}}}var wt=(()=>{class n{_injector=g(pe$1);_defaultOptions=g(ci,{optional:!0});_parentDialog=g(n,{optional:!0,skipSelf:!0});_overlayContainer=g(ti$1);_idGenerator=g(Ct);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new K$1;_afterOpenedAtThisLevel=new K$1;_ariaHiddenElements=/* @__PURE__ */ new Map;_scrollStrategy=g(li);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Eg(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Nl(void 0)));open(e,t){let i=this._defaultOptions||new $;t=V$1(V$1({},i),t),t.id=t.id||this._idGenerator.getId(`cdk-dialog-`),t.id&&this.getDialogById(t.id);let r=this._getOverlayConfig(t),l=Ne(this._injector,r),d=new J(l,t),h=this._attachContainer(l,d,t);if(d.containerInstance=h,!this.openDialogs.length){let w=this._overlayContainer.getContainerElement();h._focusTrapped?h._focusTrapped.pipe(nn$1(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(w)}):this._hideNonDialogContentFromAssistiveTechnology(w)}return this._attachDialogContent(e,d,h,t),this.openDialogs.push(d),d.closed.subscribe(()=>this._removeOpenDialog(d,!0)),this.afterOpened.next(d),d}closeAll(){bt(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){bt(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),bt(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new $$1({positionStrategy:e.positionStrategy||ii$1().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,i){let r=i.injector||i.viewContainerRef?.injector,l=[{provide:$,useValue:i},{provide:J,useValue:t},{provide:Ie,useValue:e}],d;i.container?typeof i.container==`function`?d=i.container:(d=i.container.type,l.push(...i.container.providers(i))):d=vt;let h=new it$1(d,i.viewContainerRef,pe$1.create({parent:r||this._injector,providers:l}));return e.attach(h).instance}_attachDialogContent(e,t,i,r){if(e instanceof Dr){let l=this._createInjector(r,t,i,void 0),d={$implicit:r.data,dialogRef:t};r.templateContext&&(d=V$1(V$1({},d),typeof r.templateContext==`function`?r.templateContext():r.templateContext)),i.attachTemplatePortal(new G(e,null,d,l))}else{let l=this._createInjector(r,t,i,this._injector),d=i.attachComponentPortal(new it$1(e,r.viewContainerRef,l,null,r.bindings));t.componentRef=d,t.componentInstance=d.instance}}_createInjector(e,t,i,r){let l=e.injector||e.viewContainerRef?.injector,d=[{provide:di,useValue:e.data},{provide:J,useValue:t}];return e.providers&&(typeof e.providers==`function`?d.push(...e.providers(t,e,i)):d.push(...e.providers)),e.direction&&(!l||!l.get(y$1,null,{optional:!0}))&&d.push({provide:y$1,useValue:pi(e.direction)}),pe$1.create({parent:l||r,providers:d})}_removeOpenDialog(e,t){let i=this.openDialogs.indexOf(e);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,l)=>{r?l.setAttribute(`aria-hidden`,r):l.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let i=t.length-1;i>-1;i--){let r=t[i];r!==e&&r.nodeName!==`SCRIPT`&&r.nodeName!==`STYLE`&&!r.hasAttribute(`aria-live`)&&!r.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(r,r.getAttribute(`aria-hidden`)),r.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(t){return new(t||n)};static ɵprov=ut$3({token:n,factory:n.ɵfac})}return n})();function bt(n,a){let e=n.length;for(;e--;)a(n[e])}var Mn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=yp({type:n});static ɵinj=_s({providers:[wt],imports:[dt,zt,pn,zt]})}return n})();var tt=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var yt=`mdc-dialog--open`;var An=`mdc-dialog--opening`;var Tn=`mdc-dialog--closing`;var mi=150;var ui=75;var hi=(()=>{class n extends vt{_animationStateChanged=new Pe$2;_animationsEnabled=!j();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?En(this._config.enterAnimationDuration)??mi:0;_exitAnimationDuration=this._animationsEnabled?En(this._config.exitAnimationDuration)??ui:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(On,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(An,yt)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(yt),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(yt),this._animationsEnabled?(this._hostElement.style.setProperty(On,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Tn)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(An,Tn)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),t}static ɵfac=(()=>{let e;return function(i){return(e||(e=Xm(n)))(i||n)}})();static ɵcmp=(function(){function e(t,i){}return RE({type:n,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(i,r){i&2&&(kp(`id`,r._config.id),Sp(`aria-modal`,r._config.ariaModal)(`role`,r._config.role)(`aria-labelledby`,r._config.ariaLabel?null:r._ariaLabelledByQueue[0])(`aria-label`,r._config.ariaLabel)(`aria-describedby`,r._config.ariaDescribedBy||null),Wp(`_mat-animation-noopable`,!r._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,r._actionSectionCount>0))},features:[bp],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(i,r){i&1&&(vi(0,`div`,0)(1,`div`,1),Tp(2,e,0,0,`ng-template`,2),Sc()())},dependencies:[Di$1],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2,changeDetection:1})})()}return n})();var On=`--mat-dialog-transition-duration`;function En(n){return n==null?null:typeof n==`number`?n:n.endsWith(`ms`)?tn(n.substring(0,n.length-2)):n.endsWith(`s`)?tn(n.substring(0,n.length-1))*1e3:n===`0`?0:null}var et=(function(n){return n[n.OPEN=0]=`OPEN`,n[n.CLOSING=1]=`CLOSING`,n[n.CLOSED=2]=`CLOSED`,n})(et||{});var ke=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new $n$1(1);_beforeClosed=new $n$1(1);_result;_closeFallbackTimeout;_state=et.OPEN;_closeInteractionType;constructor(a,e,t){this._ref=a,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=a.id,a.addPanelClass(`mat-mdc-dialog-panel`),t._animationStateChanged.pipe(Ye$2(i=>i.state===`opened`),nn$1(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(Ye$2(i=>i.state===`closed`),nn$1(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),hg(this.backdropClick(),this.keydownEvents().pipe(Ye$2(i=>i.keyCode===27&&!this.disableClose&&!Oe$1(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),Nn(this,i.type===`keydown`?`keyboard`:`mouse`))})}close(a){let e=this._config.closePredicate;e&&!e(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(Ye$2(t=>t.state===`closing`),nn$1(1)).subscribe(t=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=et.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let e=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?e.left(a.left):e.right(a.right):e.centerHorizontally(),a&&(a.top||a.bottom)?a.top?e.top(a.top):e.bottom(a.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(a=``,e=``){return this._ref.updateSize(a,e),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=et.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Nn(n,a,e){return n._closeInteractionType=a,n.close(e)}var gi=new S(`MatMdcDialogData`);var fi=new S(`mat-mdc-dialog-default-options`);var _i=new S(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=g(pe$1);return()=>Gt(n)}});var Se=(()=>{class n{_defaultOptions=g(fi,{optional:!0});_scrollStrategy=g(_i);_parentDialog=g(n,{optional:!0,skipSelf:!0});_idGenerator=g(Ct);_injector=g(pe$1);_dialog=g(wt);_animationsDisabled=j();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new K$1;_afterOpenedAtThisLevel=new K$1;dialogConfigClass=tt;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Eg(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Nl(void 0)));constructor(){this._dialogRefConstructor=ke,this._dialogContainerType=hi,this._dialogDataToken=gi}open(e,t){let i;t=V$1(V$1({},this._defaultOptions||new tt),t),t.id=t.id||this._idGenerator.getId(`mat-mdc-dialog-`),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(e,$$3(V$1({},t),{positionStrategy:ii$1(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()===`0`||t.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:$,useValue:t}]},templateContext:()=>({dialogRef:i}),providers:(l,d,h)=>(i=new this._dialogRefConstructor(l,t,h),i.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:h},{provide:this._dialogDataToken,useValue:d.data},{provide:this._dialogRefConstructor,useValue:i},{provide:J,useValue:null}])}));return i.componentRef=r.componentRef,i.componentInstance=r.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let l=this.openDialogs.indexOf(i);l>-1&&(this.openDialogs.splice(l,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static ɵfac=function(t){return new(t||n)};static ɵprov=ut$3({token:n,factory:n.ɵfac})}return n})();var In=(()=>{class n{dialogRef=g(ke,{optional:!0});_elementRef=g(Nr);_dialog=g(Se);ariaLabel;type=`button`;dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=Ln(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){this._elementRef.nativeElement.getAttribute(`aria-disabled`)!==`true`&&Nn(this.dialogRef,e.screenX===0&&e.screenY===0?`keyboard`:`mouse`,this.dialogResult)}static ɵfac=function(t){return new(t||n)};static ɵdir=LE({type:n,selectors:[[``,`mat-dialog-close`,``],[``,`matDialogClose`,``]],hostVars:2,hostBindings:function(t,i){t&1&&Lp(`click`,function(l){return i._onButtonClick(l)}),t&2&&Sp(`aria-label`,i.ariaLabel||null)(`type`,i.type)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],type:`type`,dialogResult:[0,`mat-dialog-close`,`dialogResult`],_matDialogClose:[0,`matDialogClose`,`_matDialogClose`]},exportAs:[`matDialogClose`],features:[Om]})}return n})();var Pn=(()=>{class n{_dialogRef=g(ke,{optional:!0});_elementRef=g(Nr);_dialog=g(Se);ngOnInit(){this._dialogRef||(this._dialogRef=Ln(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static ɵfac=function(t){return new(t||n)};static ɵdir=LE({type:n})}return n})();var Rn=(()=>{class n extends Pn{id=g(Ct).getId(`mat-mdc-dialog-title-`);_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static ɵfac=(()=>{let e;return function(i){return(e||(e=Xm(n)))(i||n)}})();static ɵdir=LE({type:n,selectors:[[``,`mat-dialog-title`,``],[``,`matDialogTitle`,``]],hostAttrs:[1,`mat-mdc-dialog-title`,`mdc-dialog__title`],hostVars:1,hostBindings:function(t,i){t&2&&kp(`id`,i.id)},inputs:{id:`id`},exportAs:[`matDialogTitle`],features:[bp]})}return n})();var Bn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=LE({type:n,selectors:[[``,`mat-dialog-content`,``],[`mat-dialog-content`],[``,`matDialogContent`,``]],hostAttrs:[1,`mat-mdc-dialog-content`,`mdc-dialog__content`],features:[jE([an])]})}return n})();var Fn=(()=>{class n extends Pn{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static ɵfac=(()=>{let e;return function(i){return(e||(e=Xm(n)))(i||n)}})();static ɵdir=LE({type:n,selectors:[[``,`mat-dialog-actions`,``],[`mat-dialog-actions`],[``,`matDialogActions`,``]],hostAttrs:[1,`mat-mdc-dialog-actions`,`mdc-dialog__actions`],hostVars:6,hostBindings:function(t,i){t&2&&Wp(`mat-mdc-dialog-actions-align-start`,i.align===`start`)(`mat-mdc-dialog-actions-align-center`,i.align===`center`)(`mat-mdc-dialog-actions-align-end`,i.align===`end`)},inputs:{align:`align`},features:[bp]})}return n})();function Ln(n,a){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains(`mat-mdc-dialog-container`);)e=e.parentElement;return e?a.find(t=>t.id===e.id):null}var Vn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=yp({type:n});static ɵinj=_s({providers:[Se],imports:[Mn,dt,zt,I]})}return n})();var yi=`https://github.com/Douglasproglima/netapiflow`;var nt=class n{config=g(s);version=Dn$1(null);repositoryUrl=yi;constructor(){this.config.config$.subscribe(a=>this.version.set(a.version))}static ɵfac=function(e){return new(e||n)};static ɵcmp=RE({type:n,selectors:[[`app-about-dialog`]],decls:32,vars:24,consts:[[`mat-dialog-title`,``],[1,`about-dialog__content`],[1,`about-dialog__list`],[`target`,`_blank`,`rel`,`noopener`,3,`href`],[1,`about-dialog__credit`],[`href`,`https://github.com/joshuamaia/apiflow`,`target`,`_blank`,`rel`,`noopener`],[`align`,`end`],[`mat-button`,``,`mat-dialog-close`,``,`type`,`button`]],template:function(e,t){e&1&&(vi(0,`h2`,0),qI(1),oD(2,`t`),Sc(),vi(3,`mat-dialog-content`,1)(4,`dl`,2)(5,`dt`),qI(6),oD(7,`t`),Sc(),vi(8,`dd`),qI(9),Sc(),vi(10,`dt`),qI(11),oD(12,`t`),Sc(),vi(13,`dd`),qI(14,`MIT`),Sc(),vi(15,`dt`),qI(16),oD(17,`t`),Sc(),vi(18,`dd`)(19,`a`,3),qI(20),Sc()()(),vi(21,`p`,4),qI(22),oD(23,`t`),vi(24,`a`,5),qI(25,`apiflow`),Sc(),qI(26),oD(27,`t`),Sc()(),vi(28,`mat-dialog-actions`,6)(29,`button`,7),qI(30),oD(31,`t`),Sc()()),e&2&&(av(),Jp(sD(2,10,`about.title`)),av(5),Jp(sD(7,12,`about.version`)),av(3),Jp(t.version()),av(2),Jp(sD(12,14,`about.license`)),av(5),Jp(sD(17,16,`about.repository`)),av(3),_p(`href`,t.repositoryUrl,cf),av(),Jp(t.repositoryUrl),av(2),Rc(` `,sD(23,18,`about.creditPrefix`),` `),av(4),Rc(` `,sD(27,20,`about.creditSuffix`),` `),av(4),Jp(sD(31,22,`about.close`)))},dependencies:[Vn,In,Rn,Fn,Bn,_r,yr,jh],styles:[`.about-dialog__content[_ngcontent-%COMP%]{overflow-x:hidden}.about-dialog__list[_ngcontent-%COMP%]{display:grid;grid-template-columns:max-content 1fr;gap:.35rem 1rem;margin:0 0 1rem}.about-dialog__list[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--%NS%mat-sys-on-surface-variant)}.about-dialog__list[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:0;min-width:0;overflow-wrap:anywhere}.about-dialog__credit[_ngcontent-%COMP%]{font-size:.85rem;color:var(--%NS%mat-sys-on-surface-variant);line-height:1.5}`]})};var Hn=`naf-theme`;function Ci(){try{let n=localStorage.getItem(Hn);return n===`dark`||n===`light`?n:null}catch{return null}}function xi(){return matchMedia(`(prefers-color-scheme: light)`).matches}function zn(n){return n?n===`dark`:!xi()}function jn(n){n?document.documentElement.dataset.theme=n:delete document.documentElement.dataset.theme}var it=class n{preference=Ci();isDark=Dn$1(zn(this.preference));constructor(){jn(this.preference)}toggle(){this.preference=this.isDark()?`light`:`dark`;try{localStorage.setItem(Hn,this.preference)}catch{}this.isDark.set(zn(this.preference)),jn(this.preference)}static ɵfac=function(e){return new(e||n)};static ɵprov=L({token:n,factory:n.ɵfac,providedIn:`root`})};var ki=n=>({count:n});var Si=n=>({version:n});var Di=()=>({exact:!0});var Mi=n=>({value:n});function Ai(n,a){n&1&&(vi(0,`p`,7),qI(1),oD(2,`t`),Sc()),n&2&&(av(),Jp(sD(2,1,`demo.banner`)))}function Ti(n,a){if(n&1){let e=fI();vi(0,`button`,68),oD(1,`t`),Lp(`click`,function(){gu(e);let i=hI();return mu(i.actionDrawer.toggle())}),Su(),vi(2,`svg`,69),Ap(3,`path`,61),Sc(),_u(),vi(4,`span`,70),qI(5),oD(6,`t`),Sc()()}n&2&&(Sp(`aria-label`,sD(1,2,`topbar.tryEndpoint`)),av(5),Jp(sD(6,4,`topbar.tryEndpoint`)))}function Oi(n,a){n&1&&(vi(0,`span`,16),qI(1),oD(2,`t`),Sc()),n&2&&(av(),Jp(aD(2,1,`topbar.slowThreshold`,eD(4,Mi,a))))}function Ei(n,a){n&1&&(Su(),Ap(0,`circle`,71)(1,`path`,72))}function Ni(n,a){n&1&&(Su(),Ap(0,`path`,22))}function Ii(n,a){if(n&1){let e=fI();vi(0,`button`,73),oD(1,`t`),Lp(`click`,function(){gu(e);let i=hI();return mu(i.toggleSidenav())}),Su(),vi(2,`svg`,74),Ap(3,`path`,75),Sc()()}n&2&&Sp(`aria-label`,sD(1,1,`rail.close`))}function Pi(n,a){n&1&&(vi(0,`span`,37),qI(1),Sc()),n&2&&(av(),Rc(`v`,a))}var Ri=`(max-width: 1023px)`;var at=class n{router=g(fe);breakpointObserver=g(Nt);dialog=g(Se);api=g(kh);config=g(s);sse=g(qe$1);language=g(ji);theme=g(it);actionDrawer=g(li$1);importedTrace=g(ci$1);isDemoMode=Ye$1.isDemoMode;version=Dn$1(null);connectionState=this.sse.state;activeLanguage=this.language.language;isDarkTheme=this.theme.isDark;isNarrow=T(this.breakpointObserver.observe(Ri).pipe(te(a=>a.matches)),{initialValue:!1});sidenavOpened=Dn$1(!0);pageTitle=T(this.router.events.pipe(Ye$2(a=>a instanceof F),Nl(null),te(()=>this.currentRouteData().title)),{initialValue:this.currentRouteData().title});pageSubtitle=T(this.router.events.pipe(Ye$2(a=>a instanceof F),Nl(null),te(()=>this.currentRouteData().subtitle)),{initialValue:this.currentRouteData().subtitle});slowThresholdValue=Dn$1(null);inProgressCount=Dn$1(0);onFlowRoute=T(this.router.events.pipe(Ye$2(a=>a instanceof F),Nl(null),te(()=>this.router.url.split(`?`)[0]===`/`)),{initialValue:this.router.url.split(`?`)[0]===`/`});showingImportedTrace=Lc(()=>this.onFlowRoute()&&this.importedTrace.active());constructor(){$u(()=>{this.sidenavOpened.set(!this.isNarrow())}),$u(()=>{document.documentElement.lang=this.activeLanguage()})}ngOnInit(){this.sse.connect(),this.config.config$.subscribe(a=>{this.slowThresholdValue.set(u(a.slowThresholdMicros)),this.version.set(a.version)}),hg(Zi(void 0),this.sse.events$.pipe(Ye$2(a=>a.type===`TraceStarted`||a.type===`TraceCompleted`),El(Cr))).pipe(Ji(()=>this.api.getLiveTraces().pipe(Yi(()=>Zi(null))))).subscribe(a=>{a&&this.inProgressCount.set(a.length)})}ngOnDestroy(){this.sse.disconnect()}toggleSidenav(){this.sidenavOpened.update(a=>!a)}closeSidenavIfNarrow(){this.isNarrow()&&this.sidenavOpened.set(!1)}openAbout(){this.dialog.open(nt,{width:`460px`,maxWidth:`90vw`})}setLanguage(a){this.language.setLanguage(a)}toggleTheme(){this.theme.toggle()}themeToggleLabel(){return this.isDarkTheme()?`theme.toggle.toLight`:`theme.toggle.toDark`}currentRouteData(){let a=this.router.routerState.root;for(;a.firstChild;)a=a.firstChild;return a.snapshot.data}static ɵfac=function(e){return new(e||n)};static ɵcmp=RE({type:n,selectors:[[`app-root`]],decls:131,vars:115,consts:[[`prefsMenu`,`matMenu`],[`flowLink`,`routerLinkActive`],[`historyLink`,`routerLinkActive`],[`componentsLink`,`routerLinkActive`],[`insightsLink`,`routerLinkActive`],[`architectureLink`,`routerLinkActive`],[`runnerLink`,`routerLinkActive`],[`role`,`status`,1,`app-demo-banner`],[1,`app-topbar`],[`mat-icon-button`,``,`type`,`button`,1,`app-topbar__hamburger`,3,`click`],[`viewBox`,`0 0 24 24`,`fill`,`none`,`stroke`,`currentColor`,`stroke-width`,`1.8`,`width`,`20`,`height`,`20`],[`d`,`M4 7h16M4 12h16M4 17h16`,`stroke-linecap`,`round`],[1,`app-topbar__title`],[1,`app-topbar__sub`],[1,`app-topbar__right`],[`type`,`button`,1,`app-topbar__try-endpoint`],[1,`app-topbar__meta`],[`role`,`radiogroup`,1,`app-topbar__lang`,`app-topbar__lang--full`],[`type`,`button`,`role`,`radio`,`lang`,`pt-BR`,3,`click`],[`type`,`button`,`role`,`radio`,`lang`,`en`,3,`click`],[`mat-icon-button`,``,`type`,`button`,1,`app-topbar__theme`,`app-topbar__theme--full`,3,`click`],[`viewBox`,`0 0 24 24`,`fill`,`none`,`stroke`,`currentColor`,`stroke-width`,`1.75`,`width`,`20`,`height`,`20`],[`d`,`M20 14.2A8.5 8.5 0 1 1 9.8 4a7 7 0 0 0 10.2 10.2Z`],[`mat-icon-button`,``,`type`,`button`,1,`app-topbar__prefs-trigger`,3,`matMenuTriggerFor`],[`viewBox`,`0 0 24 24`,`fill`,`none`,`stroke`,`currentColor`,`stroke-width`,`1.75`,`stroke-linecap`,`round`,`stroke-linejoin`,`round`,`width`,`20`,`height`,`20`],[`cx`,`12`,`cy`,`12`,`r`,`3`],[`d`,`M19.4 13a7.4 7.4 0 0 0 0-2l1.6-1.3-2-3.4-1.9.6a7.6 7.6 0 0 0-1.7-1l-.3-2h-4l-.3 2a7.6 7.6 0 0 0-1.7 1l-1.9-.6-2 3.4L6.6 11a7.4 7.4 0 0 0 0 2L5 14.3l2 3.4 1.9-.6a7.6 7.6 0 0 0 1.7 1l.3 2h4l.3-2a7.6 7.6 0 0 0 1.7-1l1.9.6 2-3.4Z`],[`role`,`radiogroup`,1,`app-topbar__prefs-lang`],[`mat-menu-item`,``,`type`,`button`,3,`click`],[`aria-live`,`polite`,1,`naf-chip`],[1,`naf-chip__dot`],[1,`app-shell`],[1,`app-rail`,3,`mode`,`opened`,`disableClose`],[`type`,`button`,1,`app-rail__close`],[`routerLink`,`/`,1,`app-rail__logo`],[`src`,`logo-mark-dark.svg`,`alt`,``,`width`,`36`,`height`,`36`,1,`app-rail__logo-mark`,`app-rail__logo-mark--dark`],[`src`,`logo-mark-light.svg`,`alt`,``,`width`,`36`,`height`,`36`,1,`app-rail__logo-mark`,`app-rail__logo-mark--light`],[1,`naf-mono`],[1,`app-rail__nav`],[`routerLink`,`/`,`routerLinkActive`,`app-rail__item--active`,1,`app-rail__item`,3,`click`,`routerLinkActiveOptions`],[`cx`,`5`,`cy`,`12`,`r`,`2.5`],[`cx`,`19`,`cy`,`6`,`r`,`2.5`],[`cx`,`19`,`cy`,`18`,`r`,`2.5`],[`d`,`M7.5 12h3.5M11 12 16.6 7.2M11 12l5.6 4.8`],[`routerLink`,`/history`,`routerLinkActive`,`app-rail__item--active`,1,`app-rail__item`,3,`click`],[`d`,`M3.5 12a8.5 8.5 0 1 0 2.5-6`],[`d`,`M3.5 4v4.5H8`],[`d`,`M12 7.5V12l3 2`],[`routerLink`,`/components`,`routerLinkActive`,`app-rail__item--active`,1,`app-rail__item`,3,`click`],[`x`,`3.5`,`y`,`3.5`,`width`,`7`,`height`,`7`,`rx`,`2`],[`x`,`13.5`,`y`,`3.5`,`width`,`7`,`height`,`7`,`rx`,`2`],[`x`,`3.5`,`y`,`13.5`,`width`,`7`,`height`,`7`,`rx`,`2`],[`x`,`13.5`,`y`,`13.5`,`width`,`7`,`height`,`7`,`rx`,`2`],[`routerLink`,`/insights`,`routerLinkActive`,`app-rail__item--active`,1,`app-rail__item`,3,`click`],[`d`,`M4 19.5V13M10 19.5V8.5M16 19.5V4.5M4 9.5l6-4 6 4 4-2.5`],[`routerLink`,`/architecture`,`routerLinkActive`,`app-rail__item--active`,1,`app-rail__item`,3,`click`],[`cx`,`6`,`cy`,`6`,`r`,`2.2`],[`cx`,`18`,`cy`,`6`,`r`,`2.2`],[`cx`,`12`,`cy`,`18`,`r`,`2.2`],[`d`,`M8 6h8M7.8 7.4 11.2 16.2M16.2 7.4 12.8 16.2`],[`routerLink`,`/runner`,`routerLinkActive`,`app-rail__item--active`,1,`app-rail__item`,3,`click`],[`d`,`M7 4.5v15l12-7.5Z`],[1,`app-rail__spacer`],[1,`app-rail__divider`],[`type`,`button`,1,`app-rail__item`,3,`click`],[`cx`,`12`,`cy`,`12`,`r`,`8.5`],[`d`,`M12 11v5.5M12 7.6v.1`],[1,`app-content`],[`type`,`button`,1,`app-topbar__try-endpoint`,3,`click`],[`viewBox`,`0 0 24 24`,`fill`,`none`,`stroke`,`currentColor`,`stroke-width`,`1.75`,`width`,`16`,`height`,`16`],[1,`app-topbar__try-endpoint-label`],[`cx`,`12`,`cy`,`12`,`r`,`4`],[`d`,`M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4`,`stroke-linecap`,`round`],[`type`,`button`,1,`app-rail__close`,3,`click`],[`viewBox`,`0 0 24 24`,`fill`,`none`,`stroke`,`currentColor`,`stroke-width`,`1.8`,`width`,`18`,`height`,`18`],[`d`,`M6 6l12 12M18 6 6 18`,`stroke-linecap`,`round`]],template:function(e,t){if(e&1&&(tI(0,Ai,3,3,`p`,7),vi(1,`header`,8)(2,`button`,9),oD(3,`t`),Lp(`click`,function(){return t.toggleSidenav()}),Su(),vi(4,`svg`,10),Ap(5,`path`,11),Sc()(),_u(),vi(6,`h1`,12),qI(7),oD(8,`t`),Sc(),vi(9,`span`,13),qI(10),oD(11,`t`),Sc(),vi(12,`div`,14),tI(13,Ti,7,6,`button`,15),vi(14,`span`,16),qI(15),oD(16,`t`),Sc(),tI(17,Oi,3,6,`span`,16),vi(18,`div`,17),oD(19,`t`),vi(20,`button`,18),Lp(`click`,function(){return t.setLanguage(`pt-BR`)}),qI(21,` PT `),Sc(),vi(22,`button`,19),Lp(`click`,function(){return t.setLanguage(`en`)}),qI(23,` EN `),Sc()(),vi(24,`button`,20),oD(25,`t`),oD(26,`t`),Lp(`click`,function(){return t.toggleTheme()}),Su(),vi(27,`svg`,21),tI(28,Ei,2,0)(29,Ni,1,0,`path`,22),Sc()(),_u(),vi(30,`button`,23),oD(31,`t`),Su(),vi(32,`svg`,24),Ap(33,`circle`,25)(34,`path`,26),Sc()(),_u(),vi(35,`mat-menu`,null,0)(37,`div`,27),oD(38,`t`),vi(39,`button`,18),Lp(`click`,function(){return t.setLanguage(`pt-BR`)}),qI(40,` PT `),Sc(),vi(41,`button`,19),Lp(`click`,function(){return t.setLanguage(`en`)}),qI(42,` EN `),Sc()(),vi(43,`button`,28),Lp(`click`,function(){return t.toggleTheme()}),qI(44),oD(45,`t`),Sc()(),vi(46,`span`,29),Ap(47,`span`,30),qI(48),oD(49,`t`),Sc()()(),vi(50,`mat-sidenav-container`,31)(51,`mat-sidenav`,32),tI(52,Ii,4,3,`button`,33),vi(53,`a`,34),oD(54,`t`),Ap(55,`img`,35)(56,`img`,36),tI(57,Pi,2,1,`span`,37),Sc(),vi(58,`nav`,38),oD(59,`t`),vi(60,`a`,39,1),oD(62,`t`),Lp(`click`,function(){return t.closeSidenavIfNarrow()}),Su(),vi(63,`svg`,24),Ap(64,`circle`,40)(65,`circle`,41)(66,`circle`,42)(67,`path`,43),Sc(),_u(),vi(68,`span`),qI(69),oD(70,`t`),Sc()(),vi(71,`a`,44,2),oD(73,`t`),Lp(`click`,function(){return t.closeSidenavIfNarrow()}),Su(),vi(74,`svg`,24),Ap(75,`path`,45)(76,`path`,46)(77,`path`,47),Sc(),_u(),vi(78,`span`),qI(79),oD(80,`t`),Sc()(),vi(81,`a`,48,3),oD(83,`t`),Lp(`click`,function(){return t.closeSidenavIfNarrow()}),Su(),vi(84,`svg`,24),Ap(85,`rect`,49)(86,`rect`,50)(87,`rect`,51)(88,`rect`,52),Sc(),_u(),vi(89,`span`),qI(90),oD(91,`t`),Sc()(),vi(92,`a`,53,4),oD(94,`t`),Lp(`click`,function(){return t.closeSidenavIfNarrow()}),Su(),vi(95,`svg`,24),Ap(96,`path`,54),Sc(),_u(),vi(97,`span`),qI(98),oD(99,`t`),Sc()(),vi(100,`a`,55,5),oD(102,`t`),Lp(`click`,function(){return t.closeSidenavIfNarrow()}),Su(),vi(103,`svg`,24),Ap(104,`circle`,56)(105,`circle`,57)(106,`circle`,58)(107,`path`,59),Sc(),_u(),vi(108,`span`),qI(109),oD(110,`t`),Sc()(),vi(111,`a`,60,6),oD(113,`t`),Lp(`click`,function(){return t.closeSidenavIfNarrow()}),Su(),vi(114,`svg`,24),Ap(115,`path`,61),Sc(),_u(),vi(116,`span`),qI(117),oD(118,`t`),Sc()()(),Ap(119,`div`,62)(120,`div`,63),vi(121,`button`,64),oD(122,`t`),Lp(`click`,function(){return t.openAbout()}),Su(),vi(123,`svg`,24),Ap(124,`circle`,65)(125,`path`,66),Sc(),_u(),vi(126,`span`),qI(127),oD(128,`t`),Sc()()(),vi(129,`mat-sidenav-content`,67),Ap(130,`router-outlet`),Sc()()),e&2){let i,r,l=bI(36),d=bI(61),h=bI(72),w=bI(82),C=bI(93),Gn=bI(101),Wn=bI(112);rI(t.isDemoMode?0:-1),av(2),Sp(`aria-label`,sD(3,54,t.sidenavOpened()?`topbar.hamburger.close`:`topbar.hamburger.open`)),av(5),Jp(sD(8,56,t.pageTitle())),av(3),Jp(sD(11,58,t.pageSubtitle())),av(3),rI(t.onFlowRoute()&&t.actionDrawer.isDrawer()?13:-1),av(2),Jp(aD(16,60,`topbar.inProgress`,eD(110,ki,t.inProgressCount()))),av(2),rI((i=t.slowThresholdValue())?17:-1,i),av(),Sp(`aria-label`,sD(19,63,`language.selectorAria`)),av(2),Sp(`aria-checked`,t.activeLanguage()===`pt-BR`),av(2),Sp(`aria-checked`,t.activeLanguage()===`en`),av(2),Sp(`aria-label`,sD(25,65,t.themeToggleLabel()))(`title`,sD(26,67,t.themeToggleLabel())),av(4),rI(t.isDarkTheme()?28:29),av(2),_p(`matMenuTriggerFor`,l),Sp(`aria-label`,sD(31,69,`topbar.preferencesAria`)),av(7),Sp(`aria-label`,sD(38,71,`language.selectorAria`)),av(2),Sp(`aria-checked`,t.activeLanguage()===`pt-BR`),av(2),Sp(`aria-checked`,t.activeLanguage()===`en`),av(3),Rc(` `,sD(45,73,t.themeToggleLabel()),` `),av(2),Wp(`naf-chip--live`,!t.showingImportedTrace()&&t.connectionState()===`open`)(`naf-chip--warning`,!t.showingImportedTrace()&&t.connectionState()===`connecting`)(`naf-chip--danger`,!t.showingImportedTrace()&&t.connectionState()===`closed`),av(2),Rc(` `,sD(49,75,t.showingImportedTrace()?`import.badge`:t.connectionState()===`open`?`chip.connection.live`:t.connectionState()===`connecting`?`chip.connection.reconnecting`:`chip.connection.offline`),` `),av(3),_p(`mode`,t.isNarrow()?`over`:`side`)(`opened`,t.sidenavOpened())(`disableClose`,!t.isNarrow()),av(),rI(t.isNarrow()?52:-1),av(),Sp(`aria-label`,aD(54,77,`rail.logoAria`,eD(112,Si,t.version()??``))),av(4),rI((r=t.version())?57:-1,r),av(),Sp(`aria-label`,sD(59,80,`nav.ariaLabel`)),av(2),_p(`routerLinkActiveOptions`,KI(114,Di)),Sp(`aria-current`,d.isActive?`page`:null)(`title`,sD(62,82,`nav.flow`)),av(9),Jp(sD(70,84,`nav.flow`)),av(2),Sp(`aria-current`,h.isActive?`page`:null)(`title`,sD(73,86,`nav.history`)),av(8),Jp(sD(80,88,`nav.history`)),av(2),Sp(`aria-current`,w.isActive?`page`:null)(`title`,sD(83,90,`nav.components`)),av(9),Jp(sD(91,92,`nav.components`)),av(2),Sp(`aria-current`,C.isActive?`page`:null)(`title`,sD(94,94,`nav.insights`)),av(6),Jp(sD(99,96,`nav.insights`)),av(2),Sp(`aria-current`,Gn.isActive?`page`:null)(`title`,sD(102,98,`nav.architecture`)),av(9),Jp(sD(110,100,`nav.architecture`)),av(2),Sp(`aria-current`,Wn.isActive?`page`:null)(`title`,sD(113,102,`nav.runner`)),av(6),Jp(sD(118,104,`nav.runner`)),av(4),Sp(`title`,sD(122,106,`nav.about`)),av(6),Jp(sD(128,108,`nav.about`))}},dependencies:[Yr,Zt$1,ta,Dn,_t,Sn,Xe,_r,wn$1,yo,Le,ut$1,vo,jh],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}.app-topbar[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;align-items:center;gap:.75rem;padding:0 1rem;height:56px;border-bottom:1px solid var(--%NS%naf-border);min-width:0}.app-topbar__hamburger[_ngcontent-%COMP%]{flex:none}@media(min-width:1024px){.app-topbar__hamburger[_ngcontent-%COMP%]{display:none}}.app-topbar__title[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;margin:0;font-family:var(--%NS%naf-font-display);font-weight:700;font-size:1.125rem;letter-spacing:-.01em;white-space:nowrap}.app-topbar__sub[_ngcontent-%COMP%]{flex:auto;min-width:0;font-size:.8125rem;color:var(--%NS%naf-text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media(max-width:767px){.app-topbar__sub[_ngcontent-%COMP%]{display:none}}.app-topbar__right[_ngcontent-%COMP%]{flex:none;margin-left:auto;display:flex;align-items:center;gap:1rem}.app-topbar__try-endpoint[_ngcontent-%COMP%]{flex:none;display:inline-flex;align-items:center;gap:.5rem;height:32px;padding:0 .875rem;border-radius:var(--%NS%naf-radius-sm);border:1px solid var(--%NS%naf-border);background:var(--%NS%naf-surface);color:var(--%NS%naf-text);font-family:var(--%NS%naf-font-ui);font-weight:600;font-size:.8125rem;cursor:pointer}.app-topbar__try-endpoint[_ngcontent-%COMP%]:hover{background:var(--%NS%naf-surface-2)}@media(max-width:480px){.app-topbar__try-endpoint[_ngcontent-%COMP%]{width:32px;padding:0;justify-content:center}}@media(max-width:480px){.app-topbar__try-endpoint-label[_ngcontent-%COMP%]{display:none}}.app-topbar__meta[_ngcontent-%COMP%]{font-family:var(--%NS%naf-font-mono);font-size:.75rem;color:var(--%NS%naf-text-muted);white-space:nowrap}@media(max-width:1199px){.app-topbar__meta[_ngcontent-%COMP%]{display:none}}.app-topbar__lang[_ngcontent-%COMP%]{flex:none;display:inline-flex;height:36px;border:1px solid var(--%NS%naf-border);border-radius:var(--%NS%naf-radius-sm);overflow:hidden}.app-topbar__lang[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:100%;padding:0 .75rem;border:0;background:none;font-family:var(--%NS%naf-font-mono);font-weight:600;font-size:.75rem;letter-spacing:.02em;color:var(--%NS%naf-text-muted);cursor:pointer}.app-topbar__lang[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:var(--%NS%naf-surface-2)}.app-topbar__lang[_ngcontent-%COMP%]   button[aria-checked=true][_ngcontent-%COMP%]{background:var(--%NS%naf-flow-tint);color:var(--%NS%naf-flow-text)}.app-topbar__lang[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] + button[_ngcontent-%COMP%]{border-left:1px solid var(--%NS%naf-border)}.app-topbar__theme[_ngcontent-%COMP%]{flex:none}@media(max-width:480px){.app-topbar__lang--full[_ngcontent-%COMP%], .app-topbar__theme--full[_ngcontent-%COMP%]{display:none}}.app-topbar__prefs-trigger[_ngcontent-%COMP%]{display:none;flex:none}@media(max-width:480px){.app-topbar__prefs-trigger[_ngcontent-%COMP%]{display:inline-flex}}.app-topbar__prefs-lang[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:.5rem;padding:.25rem .5rem}.app-topbar__prefs-lang[_ngcontent-%COMP%]   button[role=radio][_ngcontent-%COMP%]{font-family:var(--%NS%naf-font-mono);font-weight:600;font-size:.75rem;letter-spacing:.02em}.app-topbar__prefs-lang[_ngcontent-%COMP%]   button[role=radio][aria-checked=true][_ngcontent-%COMP%]{color:var(--%NS%naf-flow-text)}.app-shell[_ngcontent-%COMP%]{flex:auto;min-height:0}.app-rail[_ngcontent-%COMP%]{width:84px;overflow-x:hidden;border-right:1px solid var(--%NS%naf-border);background:var(--%NS%naf-bg);border-radius:0}.app-rail[_ngcontent-%COMP%]     .mat-drawer-inner-container{display:flex;flex-direction:column;align-items:center;gap:.25rem;padding:.875rem 0}.app-rail__close[_ngcontent-%COMP%]{position:absolute;top:.5rem;right:.5rem;width:28px;height:28px;border-radius:50%;border:1px solid var(--%NS%naf-border);background:var(--%NS%naf-surface);color:var(--%NS%naf-text-muted);display:grid;place-items:center;cursor:pointer}.app-rail__close[_ngcontent-%COMP%]:hover{color:var(--%NS%naf-text);background:var(--%NS%naf-surface-2)}  .mat-drawer-backdrop.mat-drawer-shown{background-color:#0009}.app-rail__nav[_ngcontent-%COMP%]{display:contents}.app-rail__logo[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:.25rem;margin-bottom:.875rem;text-decoration:none;color:var(--%NS%naf-text-muted);font-size:.6875rem}.app-rail__logo-mark--light[_ngcontent-%COMP%]{display:none}@media(prefers-color-scheme:light){html:not([data-theme])[_nghost-%COMP%]   .app-rail__logo-mark--dark[_ngcontent-%COMP%], html:not([data-theme])   [_nghost-%COMP%]   .app-rail__logo-mark--dark[_ngcontent-%COMP%]{display:none}html:not([data-theme])[_nghost-%COMP%]   .app-rail__logo-mark--light[_ngcontent-%COMP%], html:not([data-theme])   [_nghost-%COMP%]   .app-rail__logo-mark--light[_ngcontent-%COMP%]{display:inline}}[data-theme=light][_nghost-%COMP%]   .app-rail__logo-mark--dark[_ngcontent-%COMP%], [data-theme=light]   [_nghost-%COMP%]   .app-rail__logo-mark--dark[_ngcontent-%COMP%]{display:none}[data-theme=light][_nghost-%COMP%]   .app-rail__logo-mark--light[_ngcontent-%COMP%], [data-theme=light]   [_nghost-%COMP%]   .app-rail__logo-mark--light[_ngcontent-%COMP%]{display:inline}.app-rail__item[_ngcontent-%COMP%]{width:76px;min-height:56px;border-radius:var(--%NS%naf-radius-md);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.25rem;padding:0;color:var(--%NS%naf-text-muted);text-decoration:none;font-family:var(--%NS%naf-font-ui);font-weight:500;font-size:.6875rem;border:0;background:none;cursor:pointer}.app-rail__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;width:100%;text-align:center;line-height:1.1;white-space:nowrap;overflow-wrap:normal}.app-rail__item[_ngcontent-%COMP%]:hover{background:var(--%NS%naf-surface-2);color:var(--%NS%naf-text)}.app-rail__item--active[_ngcontent-%COMP%]{background:var(--%NS%naf-flow-tint);color:var(--%NS%naf-text)}.app-rail__item--active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:var(--%NS%naf-flow-text)}.app-rail__spacer[_ngcontent-%COMP%]{flex:1}.app-rail__divider[_ngcontent-%COMP%]{width:40px;height:1px;background:var(--%NS%naf-border);margin:.375rem 0}.app-content[_ngcontent-%COMP%]{height:100%;overflow-x:hidden}.app-demo-banner[_ngcontent-%COMP%]{margin:0;padding:.5rem 1rem;background:var(--%NS%naf-warning-tint);color:var(--%NS%naf-warning-on-tint);border-bottom:1px solid var(--%NS%naf-border);font-size:.8125rem;line-height:1.25rem;text-align:center}`]})};ho(at,xn).catch(n=>console.error(n));export{bn$1 as _,U as a,yr as b,li$1 as c,yo as d,Cr as f,_r as g,Ye$1 as h,T as i,ut$1 as l,Sr as m,i as n,Le as o,Nt as p,u as r,ci$1 as s,s as t,vo as u,qe$1 as v,wn$1 as y};