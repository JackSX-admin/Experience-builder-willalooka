define(["exports","./index-86304dcd","./index2-600fb1b2","./utils-2b3d82c1","./analysis-tree2-79fa9cfa","./isObject-072a0200","./isSymbol-765de845"],(function(e,t,i,s,a,r,n){"use strict";var l=/\s/,o=/^\s+/;var c=NaN,h=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,d=/^0o[0-7]+$/i,f=parseInt;function v(e){if("number"==typeof e)return e;if(n.isSymbol(e))return c;if(r.isObject(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r.isObject(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;var i;e=(i=e)?i.slice(0,function(e){for(var t=e.length;t--&&l.test(e.charAt(t)););return t}(i)+1).replace(o,""):i;var s=u.test(e);return s||d.test(e)?f(e.slice(2),s?2:8):h.test(e)?c:+e}var p=function(){return r.root.Date.now()},m=Math.max,g=Math.min;const y=t.proxyCustomElement(class extends t.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.analysisSpatialReferenceValueChange=t.createEvent(this,"analysisSpatialReferenceValueChange",7),this.analysisSpatialReferenceSelectorDismissed=t.createEvent(this,"analysisSpatialReferenceSelectorDismissed",7),this.searchText="",this.performantFilterSpatialReferences=function(e,t,i){var s,a,n,l,o,c,h=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var i=s,r=a;return s=a=void 0,h=t,l=e.apply(r,i)}function S(e){var i=e-c;return void 0===c||i>=t||i<0||d&&e-h>=n}function R(){var e=p();if(S(e))return b(e);o=setTimeout(R,function(e){var i=t-(e-c);return d?g(i,n-(e-h)):i}(e))}function b(e){return o=void 0,f&&s?y(e):(s=a=void 0,l)}function C(){var e=p(),i=S(e);if(s=arguments,a=this,c=e,i){if(void 0===o)return function(e){return h=e,o=setTimeout(R,t),u?y(e):l}(c);if(d)return clearTimeout(o),o=setTimeout(R,t),y(c)}return void 0===o&&(o=setTimeout(R,t)),l}return t=v(t)||0,r.isObject(i)&&(u=!!i.leading,n=(d="maxWait"in i)?m(v(i.maxWait)||0,t):n,f="trailing"in i?!!i.trailing:f),C.cancel=function(){void 0!==o&&clearTimeout(o),h=0,s=c=a=o=void 0},C.flush=function(){return void 0===o?l:b(p())},C}((e=>{this.updateSearchResults(e)}),250,{leading:!1,trailing:!0}),this.defaultWkid=4326,this.value=void 0,this.hideCategories=void 0,this.searchResults=void 0}async getSRDescription(){var e,t;return void 0!==(null===(e=this.value)||void 0===e?void 0:e.latestWkid)?Promise.resolve(i.getSpatialReferenceDescription(null===(t=this.value)||void 0===t?void 0:t.latestWkid)):Promise.resolve(void 0)}async componentWillLoad(){var e;({strings:this.strings,dir:this.dir}=await i.fetchComponentLocaleStrings(this.hostElement,t.getAssetPath("."))),this.value=null!==(e=this.value)&&void 0!==e?e:{latestWkid:this.defaultWkid};const s=this.filterSrCategories(i.srCategories);this.visibleSrCategories=this.translateSrCategories(s)}translateSrCategories(e){const t={};return this.recursiveTranslate(e,t),t}recursiveTranslate(e,t){Object.keys(e).forEach((i=>{const s=this.getTranslatedKey(i);"object"==typeof e[i]?(t[s]={},this.recursiveTranslate(e[i],t[s])):t[s]=e[i]}))}getTranslatedKey(e){return e in this.strings?this.strings[e]:e}filterSrCategories(e){const t={};return Object.keys(e).forEach((i=>{var s;void 0!==this.hideCategories&&!1!==(null===(s=this.hideCategories)||void 0===s?void 0:s.includes(i))||("object"==typeof e[i]?t[i]=this.filterSrCategories(e[i]):t[i]=e[i])})),t}setSpatialRef(e){this.value={latestWkid:Number(e)},this.analysisSpatialReferenceValueChange.emit(this.value)}inputKeyDown(e){"Enter"===e.key&&this.selectFirstChild(!0)}selectFirstChild(e){var t,i;const s=this.treeElement,a=(null===(t=null==s?void 0:s.shadowRoot)||void 0===t?void 0:t.querySelector("calcite-tree-item:not([has-children]):not([data-key='placeholder'])"))||void 0;void 0!==s&&void 0!==a&&(a.selected=!0,this.setSpatialRef(null!==(i=a.dataset.key)&&void 0!==i?i:""),e&&a.focus())}updateSearchResults(e){this.searchResults=i.filterSpatialReferences(e)}searchSpatialReferences(e){var t;null!==e.target&&(this.searchText=null!==(t=e.target.value)&&void 0!==t?t:"",this.searchText.length>1?this.performantFilterSpatialReferences(this.searchText):this.searchResults=void 0)}render(){var e,a;const r=i.formatMessage(this.strings.noMatchesFound,{searchTerm:null!==(e=this.searchText)&&void 0!==e?e:""});return t.h(t.Host,{dir:this.dir},t.h("calcite-panel",{closable:!1,closed:!1,onCalcitePanelClose:()=>this.analysisSpatialReferenceSelectorDismissed.emit(this.value)},t.h("calcite-input",{onCalciteInputInput:e=>this.searchSpatialReferences(e),onKeyDown:e=>this.inputKeyDown(e),placeholder:this.strings.searchPlaceholder,scale:s.UIDefaults.Scale,type:"search",icon:!0,autofocus:!0}),this.searchText.length>1&&i.isEmptyDataItem(this.searchResults)&&t.h("p",{class:"no-matches-found-msg"},r),t.h("analysis-tree",{key:"tree",ref:e=>this.treeElement=e,data:void 0!==this.searchResults&&this.searchText.length>0?this.searchResults:this.visibleSrCategories,value:this.value&&`${null===(a=this.value)||void 0===a?void 0:a.latestWkid}`,onAnalysisTreeValueChange:()=>{this.setSpatialRef(this.treeElement.value)}}),t.h("calcite-button",{appearance:"solid",scale:s.UIDefaults.Scale,width:"full",slot:"footer-actions",onClick:()=>this.analysisSpatialReferenceSelectorDismissed.emit(this.value)},this.strings.done)))}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:var(--calcite-ui-border-2);--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height:30vh;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}:host{overflow-y:hidden;display:flex;flex-direction:column;--calcite-ui-border-input:var(--analysis-ui-border-input);height:var(--analysis-popover-content-height);min-width:20rem;max-width:27rem}.no-matches-found-msg{margin:var(--analysis-half-spacing);font-size:var(--calcite-font-size--2)}analysis-tree{flex:1}"}},[1,"analysis-spatial-reference-selector",{defaultWkid:[1538,"default-wkid"],value:[1040],hideCategories:[16],searchResults:[32],getSRDescription:[64]}]);function S(){"undefined"!=typeof customElements&&["analysis-spatial-reference-selector","analysis-tree"].forEach((e=>{switch(e){case"analysis-spatial-reference-selector":customElements.get(e)||customElements.define(e,y);break;case"analysis-tree":customElements.get(e)||a.defineCustomElement()}}))}S(),e.AnalysisSpatialReferenceSelector=y,e.defineCustomElement=S}));