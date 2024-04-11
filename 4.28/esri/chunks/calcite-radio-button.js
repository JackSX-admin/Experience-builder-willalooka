// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ./index ./array2 ./dom ./form ./guid ./interactive ./label2 ./loadable".split(" "),function(e,d,q,f,g,u,h,k,l){function r(){"undefined"!==typeof customElements&&["calcite-radio-button"].forEach(a=>{switch(a){case "calcite-radio-button":customElements.get(a)||customElements.define(a,t)}})}const t=d.proxyCustomElement(class extends d.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteInternalRadioButtonBlur=d.createEvent(this,"calciteInternalRadioButtonBlur",
6);this.calciteRadioButtonChange=d.createEvent(this,"calciteRadioButtonChange",6);this.calciteInternalRadioButtonCheckedChange=d.createEvent(this,"calciteInternalRadioButtonCheckedChange",6);this.calciteInternalRadioButtonFocus=d.createEvent(this,"calciteInternalRadioButtonFocus",6);this.selectItem=(a,b)=>{a[b].click()};this.queryButtons=()=>Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden])")).filter(a=>a.name===this.name);this.isFocusable=()=>{var a=this.queryButtons();
const b=a.find(c=>!c.disabled);a=a.find(c=>c.checked);return b===this.el&&!a};this.check=()=>{this.disabled||(this.focused=!0,this.setFocus(),this.checked||(this.uncheckAllRadioButtonsInGroup(),this.checked=!0,this.calciteRadioButtonChange.emit()))};this.clickHandler=()=>{this.disabled||this.check()};this.setContainerEl=a=>{this.containerEl=a};this.handleKeyDown=a=>{var {key:b}=a,{el:c}=this;if(-1!==["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "].indexOf(b))if(" "===b)this.check(),a.preventDefault();
else{var m=b;"rtl"===f.getElementDir(c)&&("ArrowRight"===b&&(m="ArrowLeft"),"ArrowLeft"===b&&(m="ArrowRight"));b=Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden]")).filter(n=>n.name===this.name);var p=0;c=b.length;b.some((n,v)=>{if(n.checked)return p=v,!0});switch(m){case "ArrowLeft":case "ArrowUp":a.preventDefault();this.selectItem(b,q.getRoundRobinIndex(Math.max(p-1,-1),c));break;case "ArrowRight":case "ArrowDown":a.preventDefault(),this.selectItem(b,q.getRoundRobinIndex(p+
1,c))}}};this.onContainerBlur=()=>{this.focused=!1;this.calciteInternalRadioButtonBlur.emit()};this.onContainerFocus=()=>{this.disabled||(this.focused=!0,this.calciteInternalRadioButtonFocus.emit())};this.focused=this.disabled=this.checked=!1;this.guid=this.form=void 0;this.hovered=this.hidden=!1;this.name=this.label=void 0;this.required=!1;this.scale="m";this.value=void 0}checkedChanged(a){a&&this.uncheckOtherRadioButtonsInGroup();this.calciteInternalRadioButtonCheckedChange.emit()}disabledChanged(){this.updateTabIndexOfOtherRadioButtonsInGroup()}hiddenChanged(){this.updateTabIndexOfOtherRadioButtonsInGroup()}nameChanged(){this.checkLastRadioButton()}async setFocus(){await l.componentFocusable(this);
this.disabled||f.focusElement(this.containerEl)}syncHiddenFormInput(a){a.type="radio"}onLabelClick(a){!this.disabled&&!this.hidden&&(a=a.currentTarget,a=a.for?this.rootNode.querySelector(`calcite-radio-button[id="${a.for}"]`):a.querySelector(`calcite-radio-button[name="${this.name}"]`))&&(a.focused=!0,this.setFocus(),a.checked||(this.uncheckOtherRadioButtonsInGroup(),a.checked=!0,this.calciteRadioButtonChange.emit()))}checkLastRadioButton(){const a=this.queryButtons().filter(b=>b.checked);if(1<a?.length){const b=
a[a.length-1];a.filter(c=>c!==b).forEach(c=>{c.checked=!1;c.emitCheckedChange()})}}async emitCheckedChange(){this.calciteInternalRadioButtonCheckedChange.emit()}uncheckAllRadioButtonsInGroup(){this.queryButtons().forEach(a=>{a.checked&&(a.checked=!1,a.focused=!1)})}uncheckOtherRadioButtonsInGroup(){this.queryButtons().filter(a=>a.guid!==this.guid).forEach(a=>{a.checked&&(a.checked=!1,a.focused=!1)})}updateTabIndexOfOtherRadioButtonsInGroup(){this.queryButtons().filter(a=>a.guid!==this.guid&&!a.disabled).forEach(a=>
{d.forceUpdate(a)})}getTabIndex(){if(!this.disabled)return this.checked||this.isFocusable()?0:-1}pointerEnterHandler(){this.disabled||(this.hovered=!0)}pointerLeaveHandler(){this.disabled||(this.hovered=!1)}connectedCallback(){this.rootNode=this.el.getRootNode();this.guid=this.el.id||`calcite-radio-button-${u.guid()}`;this.name&&this.checkLastRadioButton();h.connectInteractive(this);k.connectLabel(this);g.connectForm(this);this.updateTabIndexOfOtherRadioButtonsInGroup()}componentWillLoad(){l.setUpLoadableComponent(this)}componentDidLoad(){l.setComponentLoaded(this);
this.focused&&!this.disabled&&this.setFocus()}disconnectedCallback(){h.disconnectInteractive(this);k.disconnectLabel(this);g.disconnectForm(this);this.updateTabIndexOfOtherRadioButtonsInGroup()}componentDidRender(){h.updateHostInteraction(this)}render(){const a=this.getTabIndex();return d.h(d.Host,{onClick:this.clickHandler,onKeyDown:this.handleKeyDown},d.h("div",{"aria-checked":f.toAriaBoolean(this.checked),"aria-label":k.getLabelText(this),class:"container",onBlur:this.onContainerBlur,onFocus:this.onContainerFocus,
role:"radio",tabIndex:a,ref:this.setContainerEl},d.h("div",{class:"radio"})),d.h(g.HiddenFormInputSlot,{component:this}))}get el(){return this}static get watchers(){return{checked:["checkedChanged"],disabled:["disabledChanged"],hidden:["hiddenChanged"],name:["nameChanged"]}}static get style(){return':host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;cursor:pointer}:host .container{position:relative;outline:2px solid transparent;outline-offset:2px}:host .radio{cursor:pointer;border-radius:9999px;background-color:var(--calcite-ui-foreground-1);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input)}:host([hovered]) .radio,:host(:not([checked])[focused]:not([disabled])) .radio{box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([focused]) .radio{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([disabled]) .radio{cursor:default;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hovered][disabled]) .radio{box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input)}:host([scale\x3ds]){--calcite-radio-size:var(--calcite-font-size--2)}:host([scale\x3dm]){--calcite-radio-size:var(--calcite-font-size--1)}:host([scale\x3dl]){--calcite-radio-size:var(--calcite-font-size-0)}.radio{block-size:var(--calcite-radio-size);max-inline-size:var(--calcite-radio-size);min-inline-size:var(--calcite-radio-size)}:host([scale\x3ds][checked]) .radio,:host([hovered][scale\x3ds][checked][disabled]) .radio{box-shadow:inset 0 0 0 4px var(--calcite-ui-brand)}:host([scale\x3ds][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 4px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}:host([scale\x3dm][checked]) .radio,:host([hovered][scale\x3dm][checked][disabled]) .radio{box-shadow:inset 0 0 0 5px var(--calcite-ui-brand)}:host([scale\x3dm][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 5px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}:host([scale\x3dl][checked]) .radio,:host([hovered][scale\x3dl][checked][disabled]) .radio{box-shadow:inset 0 0 0 6px var(--calcite-ui-brand)}:host([scale\x3dl][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 6px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}@media (forced-colors: active){:host([checked]) .radio::after,:host([checked][disabled]) .radio::after{content:"";inline-size:var(--calcite-radio-size);block-size:var(--calcite-radio-size);background-color:windowText;display:block}}::slotted(input[slot\x3dhidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}'}},
[1,"calcite-radio-button",{checked:[1540],disabled:[516],focused:[1540],form:[513],guid:[1537],hidden:[516],hovered:[1540],label:[1],name:[513],required:[516],scale:[513],value:[1032],setFocus:[64],emitCheckedChange:[64]},[[1,"pointerenter","pointerEnterHandler"],[1,"pointerleave","pointerLeaveHandler"]]]);r();e.CalciteRadioButton=t;e.defineCustomElement=r;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});