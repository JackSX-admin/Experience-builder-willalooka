// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../intl ../core/Collection ../core/events ../core/maybe ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/cast ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ./Widget ./Slider/css ./Slider/SliderViewModel ./support/globalCss ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory ../intl/substitute".split(" "),function(n,k,A,G,N,p,O,U,V,P,Q,l,R,B,S,T,u,K){function C(a){return a?.["data-thumb-index"]}
function D(a){return a?.["data-tick-config-index"]}function H(a){return a?.["data-tick-group-index"]}const w={showInput:"Enter",hideInput1:"Enter",hideInput2:"Escape",hideInput3:"Tab",moveAnchorUp:"ArrowUp",moveAnchorDown:"ArrowDown",moveAnchorLeft:"ArrowLeft",moveAnchorRight:"ArrowRight",moveAnchorToMax:"End",moveAnchorToMin:"Home"},L={labels:!1,rangeLabels:!1};k=class extends Q{constructor(a,b){super(a,b);this._activeLabelInputIndex=null;this._anchorElements=[];this._dragged=!1;this._focusedAnchorIndex=
this._dragStartInfo=null;this._isMaxInputActive=this._isMinInputActive=!1;this._lastMovedHandleIndex=null;this._positionPrecision=5;this._trackWidth=this._trackHeight=this._segmentDragStartInfo=null;this._zIndices=[];this._zIndexOffset=3;this.disabled=!1;this.draggableSegmentsEnabled=!0;this.effectiveSegmentElements=new A;this.extraNodes=[];this.inputCreatedFunction=null;this.labelElements=new A;this.labelInputsEnabled=!1;this.minLabelElement=this.messages=this.maxLabelElement=null;this.rangeLabelInputsEnabled=
!1;this.segmentElements=new A;this.snapOnClickEnabled=!0;this.steps=null;this.syncedSegmentsEnabled=!1;this.thumbCreatedFunction=null;this.thumbElements=new A;this.tickElements=new A;this.trackElement=null;this.viewModel=new R;this.visibleElements={...L};this._onAnchorPointerDown=this._onAnchorPointerDown.bind(this);this._onAnchorPointerMove=this._onAnchorPointerMove.bind(this);this._onAnchorPointerUp=this._onAnchorPointerUp.bind(this);this._onLabelPointerDown=this._onLabelPointerDown.bind(this);
this._onLabelPointerUp=this._onLabelPointerUp.bind(this);this._onSegmentPointerDown=this._onSegmentPointerDown.bind(this);this._onSegmentPointerMove=this._onSegmentPointerMove.bind(this);this._onSegmentPointerUp=this._onSegmentPointerUp.bind(this);this._onTrackPointerDown=this._onTrackPointerDown.bind(this);this._onTrackPointerMove=this._onTrackPointerMove.bind(this);this._onTrackPointerUp=this._onTrackPointerUp.bind(this)}destroy(){document.removeEventListener("pointerup",this._onLabelPointerUp);
document.removeEventListener("pointermove",this._onLabelPointerMove);document.removeEventListener("pointerup",this._onAnchorPointerUp);document.removeEventListener("pointermove",this._onAnchorPointerMove);this.labelElements.removeAll();this.labelElements.destroy();this.segmentElements.removeAll();this.segmentElements.destroy();this.effectiveSegmentElements.removeAll();this.effectiveSegmentElements.destroy();this.thumbElements.removeAll();this.thumbElements.destroy();this.tickElements.removeAll();
this.tickElements.destroy()}get effectiveMax(){return this.viewModel.effectiveMax}set effectiveMax(a){this.viewModel.effectiveMax=a}get effectiveMin(){return this.viewModel.effectiveMin}set effectiveMin(a){this.viewModel.effectiveMin=a}get inputFormatFunction(){return this.viewModel.inputFormatFunction}set inputFormatFunction(a){this.viewModel.inputFormatFunction=a}get inputParseFunction(){return this.viewModel.inputParseFunction}set inputParseFunction(a){this.viewModel.inputParseFunction=a}get label(){return this.messages?.widgetLabel??
""}set label(a){this._overrideIfSome("label",a)}get labelFormatFunction(){return this.viewModel.labelFormatFunction}set labelFormatFunction(a){this.viewModel.labelFormatFunction=a}get labels(){return this.viewModel.labels}set layout(a){["vertical","vertical-reversed","horizontal","horizontal-reversed"].includes(a)||(a="horizontal");this._set("layout",a)}get max(){return this.viewModel.max}set max(a){this.viewModel.max=a}get min(){return this.viewModel.min}set min(a){this.viewModel.min=a}get precision(){return this.viewModel.precision}set precision(a){this.viewModel.precision=
a}get state(){const {_activeLabelInputIndex:a,_isMaxInputActive:b,_isMinInputActive:c,_dragStartInfo:d,_segmentDragStartInfo:e,disabled:f,viewModel:g}=this;return f?"disabled":null!==a||b||c?"editing":null!=d||null!=e?"dragging":g.state}get thumbsConstrained(){return this.viewModel.thumbsConstrained}set thumbsConstrained(a){this.viewModel.thumbsConstrained=a}set tickConfigs(a){this._set("tickConfigs",a);this.scheduleRender()}get values(){return this.viewModel.values}set values(a){this.viewModel.values=
a}castVisibleElements(a){return{...L,...a}}render(){const {label:a}=this,b=this.classes(l.css.base,B.globalCss.widget,this._isHorizontalLayout()?l.css.horizontalLayout:l.css.verticalLayout,this._isReversedLayout()?l.css.reversed:null,this._isDisabled()?B.globalCss.disabled:null);this._storeTrackDimensions();return u.tsx("div",{afterCreate:this._afterContainerCreate,"aria-label":a,bind:this,class:b,"touch-action":"none"},this._renderContent())}toNextStep(a){this._toStep(a,1)}toPreviousStep(a){this._toStep(a,
-1)}getCurrentPosition(){return this._positionFromValue(this.values?.[0]??0)}_renderContent(){const {max:a,min:b}=this;if(!(null==b||null==a||b>=a))return[this._renderMin(),this._renderSliderContainer(),this._renderMax()]}_renderSliderContainer(){return u.tsx("div",{bind:this,class:l.css.contentElement,key:"slider-container"},this._renderTrackElement(),this._renderTicksContainer(),this._renderExtraContentElements())}_renderTrackElement(){return u.tsx("div",{afterCreate:this._afterTrackCreate,afterRemoved:this._afterTrackRemoved,
bind:this,class:l.css.trackElement,"touch-action":"none"},this._renderEffectiveSegmentElements(),this._renderSegmentElements(),this._renderAnchorElements())}_renderEffectiveSegmentElements(){if(this.trackElement&&this.values?.length){var a=null!=this.effectiveMax,b=null!=this.effectiveMin;if(a||b){var {max:c,min:d,viewModel:e}=this,f=e.getBounds(),g=[];b&&g.push(this._renderEffectiveSegmentElement(d,f.min,!0));a&&g.push(this._renderEffectiveSegmentElement(f.max,c,!1));return g}}}_renderSegmentElements(){if(this.trackElement&&
this.values?.length){var a=this.values.length,b=[];for(let c=0;c<=a;c++)b.push(this._renderSegmentElement(c));return b}}_renderSegmentElement(a){const {_trackHeight:b,_trackWidth:c,draggableSegmentsEnabled:d,id:e,state:f}=this;var g=this.values,h=this._isHorizontalLayout(),m=h?c:b,q=this.viewModel.getBounds(),r=this._positionFromValue(q.max),v=this._positionFromValue(q.min);q=a===g?.length?null:a;const z=0===a?null:a-1;var t=null!=q;const x=null!=z,y=[...g].sort((I,J)=>I-J);this._isReversedLayout()?
(g=x?this._positionFromValue(y[z]):v,v=t?this._positionFromValue(y[q]):r):(g=t?this._positionFromValue(y[q]):r,v=x?this._positionFromValue(y[z]):v);r=this._applyPrecisionToPosition(100*v/m);m=(g-v)/m;h=h?`transform: translate(${r}%, 0px) scale(${m}, 1);`:`transform: translate(0px, ${r}%) scale(1, ${m});`;t=this.classes(l.css.segmentElement,l.css.segmentElementIndexPrefix+a,d&&t&&x&&"disabled"!==f?l.css.segmentElementInteractive:null);return u.tsx("div",{afterCreate:this._afterSegmentCreate,afterRemoved:this._afterSegmentRemoved,
bind:this,class:t,"data-max-thumb-index":q,"data-min-thumb-index":z,"data-segment-index":a,key:`${e}-segment-${a}`,style:h,"touch-action":"none"})}_renderEffectiveSegmentElement(a,b,c){const {_trackHeight:d,_trackWidth:e,layout:f}=this;a=this._positionFromValue(a);b=this._positionFromValue(b);const g=this._isHorizontalLayout(),h=g?e:d,m=this._applyPrecisionToPosition(100*a/h);let q=null;"horizontal"===f?(a=a===h?0:m,q=`clip-path: inset(0% ${b===h?0:this._applyPrecisionToPosition((c?h-b:b)/h*100)}% 0% ${a}%);`):
(a=(b-a)/h,q=g?`transform: translate(${m}%, 0px) scale(${a}, 1);`:`transform: translate(0px, ${m}%) scale(1, ${a});`);c=this.classes(l.css.segmentElement,l.css.effectiveSegmentElement,c?l.css.effectiveMinSegmentElement:l.css.effectiveMaxSegmentElement);return u.tsx("div",{afterCreate:this._afterEffectiveSegmentCreate,afterRemoved:this._afterEffectiveSegmentRemoved,bind:this,class:c,style:q,"touch-action":"none"})}_renderAnchorElements(){const {trackElement:a,values:b}=this;if(b?.length)return this._zIndices=
b.map((c,d)=>{c=this._positionFromValue(c);c=this._positionToPercent(c);c=this._isHorizontalLayout()?50<c:50>c;return this._zIndexOffset+(b.length+(c?-1:1)*d)}),a&&b&&b.length?b.map((c,d)=>this._renderAnchorElement(c,d)):null}_renderAnchorElement(a,b){var c=this._positionFromValue(a);c=this._valueFromPosition(c);if(null!=c&&!isNaN(c)){var {_dragStartInfo:d,_lastMovedHandleIndex:e,id:f,layout:g,visibleElements:{labels:h}}=this;c=this.values;var m=d&&d.index===b,q=e===b,r=this.classes(l.css.anchorElement,
l.css.anchorElementIndexPrefix+b,m?l.css.movingAnchorElement:null,q?l.css.lastMovedAnchorElement:null),v=this.labels.values[b];m=this._getStyleForAnchor(a,b,m||q);var {min:z,max:t}=this.viewModel.getBoundsForValueAtIndex(b),{disabled:x,messages:y}=this;v=2===c.length?0===b?K.substitute(y.rangeMinimum,{value:a}):K.substitute(y.rangeMaximum,{value:a}):v;return u.tsx("div",{afterCreate:this._afterAnchorCreate,afterRemoved:this._afterAnchorRemoved,afterUpdate:this._afterAnchorUpdate,"aria-controls":1===
c.length?null:0===b?`${f}-handle-${b+1}`:b===c.length-1?`${f}-handle-${b-1}`:`${f}-handle-${b-1} ${f}-handle-${b+1}`,"aria-label":y.sliderValue,"aria-labelledby":h?`${f}-label-${b}`:null,"aria-orientation":g,"aria-valuemax":t?.toString(),"aria-valuemin":z?.toString(),"aria-valuenow":a.toString(),"aria-valuetext":v,bind:this,class:r,"data-thumb-index":b,"data-value":a,id:`${f}-handle-${b}`,key:`${f}-handle-${b}`,onkeydown:this._onAnchorKeyDown,role:"slider",style:m,tabIndex:x?-1:0,"touch-action":"none"},
u.tsx("span",{afterCreate:this._afterThumbCreate,afterRemoved:this._afterThumbRemoved,bind:this,class:l.css.thumbElement,"data-thumb-index":b,"touch-action":"none"}),this.renderThumbLabel(b))}}renderThumbLabel(a){const {id:b,labels:c,labelInputsEnabled:d,state:e}=this,f=this.visibleElements.labels,g=c.values[a],h=this.classes(l.css.labelElement,f?null:B.globalCss.hidden,d&&"disabled"!==e?l.css.labelElementInteractive:null);return u.tsx("span",{afterCreate:this._afterLabelCreate,afterRemoved:this._afterLabelRemoved,
"aria-hidden":(!f).toString(),bind:this,class:h,"data-thumb-index":a,id:`${b}-label-${a}`,key:`${b}-label-${a}`,role:d?"button":null,"touch-action":"none"},this._activeLabelInputIndex===a?this._renderValueInput(a):g)}_renderValueInput(a){const {disabled:b,values:c}=this;if(null!=c)return u.tsx("input",{afterCreate:this._afterInputCreate,"aria-label":this.messages.sliderValue,bind:this,class:l.css.labelInput,"data-input-index":a,"data-input-type":"thumb",key:`value-input-${a}`,onblur:this._onLabelInputBlur,
onkeydown:this._onInputKeyDown,required:!0,tabIndex:b?-1:0,type:"text",value:this._formatInputValue(c[a],"value",a)})}_renderMax(){const {_isMaxInputActive:a,labels:b,rangeLabelInputsEnabled:c,state:d}=this,e=this.visibleElements.rangeLabels,f=this.classes(l.css.maxElement,{[B.globalCss.hidden]:!e,[l.css.maxElementInteractive]:c&&"disabled"!==d,[l.css.rangeElementActive]:a});return u.tsx("div",{afterCreate:this._afterMaxLabelCreate,"aria-hidden":(!e).toString(),bind:this,class:f,onclick:this._onMaxLabelClick,
onkeydown:this._onMaxLabelKeyDown,role:c?"button":null,tabIndex:!this.disabled&&c?0:-1},a?this._renderMaxInput():b.max)}_renderMin(){const {_isMinInputActive:a,labels:b,rangeLabelInputsEnabled:c,state:d}=this,e=this.visibleElements.rangeLabels,f=this.classes(l.css.minElement,{[B.globalCss.hidden]:!e,[l.css.minElementInteractive]:c&&"disabled"!==d,[l.css.rangeElementActive]:a});return u.tsx("div",{afterCreate:this._afterMinLabelCreate,"aria-hidden":(!e).toString(),bind:this,class:f,onclick:this._onMinLabelClick,
onkeydown:this._onMinLabelKeyDown,role:c?"button":null,tabIndex:!this.disabled&&c?0:-1},a?this._renderMinInput():b.min)}_renderMaxInput(){return u.tsx("input",{afterCreate:this._afterInputCreate,"aria-label":this.messages.maximumValue,bind:this,class:l.css.rangeInput,"data-input-type":"max",onblur:this._onMaxInputBlur,onkeydown:this._onInputKeyDown,required:!0,tabIndex:this.disabled?-1:0,type:"text",value:this._formatInputValue(this.max,"max")})}_renderMinInput(){return u.tsx("input",{afterCreate:this._afterInputCreate,
"aria-label":this.messages.minimumValue,bind:this,class:l.css.rangeInput,"data-input-type":"min",onblur:this._onMinInputBlur,onkeydown:this._onInputKeyDown,required:!0,tabIndex:this.disabled?-1:0,type:"text",value:this._formatInputValue(this.min,"min")})}_renderExtraContentElements(){return u.tsx("div",{bind:this,class:l.css.extraContentElement},this.extraNodes)}_renderTicksContainer(){if(this.tickConfigs&&this.trackElement&&(0!==this._trackHeight||0!==this._trackWidth))return this.tickConfigs.map((a,
b)=>u.tsx("div",{class:this.classes(l.css.ticksContainerElement),key:"ticks-container"},this._renderTicks(a,b)))}_renderTicks(a,b){const {mode:c,values:d}=a;this.tickElements.at(b)||this.tickElements.add(new A,b);if("position"===c){var e=Array.isArray(d)?d:[d];return this._calculateTickPositions(e).map((f,g)=>this._renderTickGroup(a,g,b,f))}if("percent"===c&&Array.isArray(d)){const f=this.min??0,g=(this.max??0)-f;e=d.map(h=>this._applyPrecisionToPosition(h/100*g+f));return this._calculateTickPositions(e).map((h,
m)=>this._renderTickGroup(a,m,b,h))}e=Array.isArray(d)&&d.length?d[0]:isNaN(d)?null:d;e=this._getTickCounts(e,a);return this._calculateEquidistantTickPositions(e).map((f,g)=>this._renderTickGroup(a,g,b,f))}_renderTickGroup(a,b,c,d){const e="position"===a.mode?Array.isArray(a.values)?a.values[b]:a.values:this._valueFromPosition(d);if(null!=e&&!isNaN(e))return u.tsx("div",{afterCreate:this._afterTickGroupCreate,afterRemoved:this._afterTickGroupRemoved,bind:this,"data-config":a,"data-position":d,"data-tick-config-index":c,
"data-tick-group-index":b,"data-value":e,key:`tick-group-${b}`,onclick:this._onTickGroupClick},this._renderTickLine(a,b,c,e),a.labelsVisible?this._renderTickLabel(a,b,c,e):null)}_renderTickLine(a,b,c,d){return u.tsx("div",{afterCreate:this._afterTickLineCreate,"aria-valuenow":d.toString(),bind:this,class:l.css.tickElement,"data-config":a,"data-tick-config-index":c,"data-tick-group-index":b,"data-value":d,key:`tick-label-${b}`,style:this._getPositionStyleForElement(d)})}_renderTickLabel(a,b,c,d){const e=
a.labelFormatFunction?a.labelFormatFunction(d,"tick",b):this.viewModel.getLabelForValue(d,"tick",b);return u.tsx("div",{afterCreate:this._afterTickLabelCreate,"aria-label":e,"aria-valuenow":d.toString(),"aria-valuetext":e,bind:this,class:l.css.tickLabelElement,"data-config":a,"data-tick-config-index":c,"data-tick-group-index":b,"data-value":d,key:`tick-label-${b}`,style:`transform: translate(-50%); ${this._getPositionStyleForElement(d)}`},e)}_afterContainerCreate(a){this.addHandles(S.onResize(a,()=>
this.scheduleRender()))}_afterTrackCreate(a){this._set("trackElement",a);a.addEventListener("pointerdown",this._onTrackPointerDown);this.scheduleRender()}_afterTrackRemoved(a){a.removeEventListener("pointerdown",this._onTrackPointerDown);document.removeEventListener("pointermove",this._onTrackPointerMove);document.removeEventListener("pointerup",this._onTrackPointerUp)}_afterSegmentCreate(a){this.segmentElements.add(a);a.addEventListener("pointerdown",this._onSegmentPointerDown)}_afterSegmentRemoved(a){this.segmentElements.remove(a);
a.removeEventListener("pointerdown",this._onSegmentPointerDown)}_afterEffectiveSegmentCreate(a){this.effectiveSegmentElements.add(a)}_afterEffectiveSegmentRemoved(a){this.effectiveSegmentElements.remove(a)}_afterAnchorCreate(a){this._anchorElements.push(a);a.addEventListener("pointerdown",this._onAnchorPointerDown);if(this.thumbCreatedFunction){const b=C(a);a=a?.["data-value"];const c=this.thumbElements.at(b),d=this.labelElements.at(b)||null;this.thumbCreatedFunction(b,a,c,d)}}_afterAnchorUpdate(a){null!=
this._focusedAnchorIndex&&C(a)===this._focusedAnchorIndex&&(a.focus(),this._focusedAnchorIndex=null)}_afterAnchorRemoved(a){const b=this._anchorElements.indexOf(a,0);-1<b&&this._anchorElements.splice(b,1);a.removeEventListener("pointerdown",this._onAnchorPointerDown)}_afterThumbCreate(a){this.thumbElements.add(a)}_afterThumbRemoved(a){this.thumbElements.remove(a)}_afterLabelCreate(a){this.labelElements.add(a);a.addEventListener("pointerdown",this._onLabelPointerDown);a.addEventListener("pointerup",
this._onLabelPointerUp)}_afterLabelRemoved(a){this.labelElements.remove(a);a.removeEventListener("pointerdown",this._onLabelPointerDown);a.removeEventListener("pointerup",this._onLabelPointerUp)}_afterInputCreate(a){a.focus();a.select();if(this.inputCreatedFunction){const b=a.getAttribute("data-input-type");this.inputCreatedFunction(a,b,"thumb"===b?a?.["data-input-index"]:null)}}_afterTickLineCreate(a){var b=D(a);const c=H(a);b=this.tickElements.at(b);const d=b.at(c);d?d.tickElement=a:b.add({groupElement:null,
tickElement:a,labelElement:null},c)}_afterTickLabelCreate(a){var b=D(a);const c=H(a);b=this.tickElements.at(b);const d=b.at(c);d?d.labelElement=a:b.add({groupElement:null,labelElement:a,tickElement:null},c)}_afterTickGroupRemoved(a){var b=D(a);b=this.tickElements.items[b];const c=b?.find(d=>d.groupElement===a);c&&b.remove(c)}_afterTickGroupCreate(a){const b=a?.["data-config"];if(b?.tickCreatedFunction){var c=D(a);const d=H(a);if(c=this.tickElements?.at(c)?.at(d))c.groupElement=a,b.tickCreatedFunction(a?.["data-value"],
c.tickElement||null,c.labelElement||null)}}_afterMaxLabelCreate(a){this._set("maxLabelElement",a)}_afterMinLabelCreate(a){this._set("minLabelElement",a)}_onAnchorKeyDown(a){if(!this._isDisabled()&&"editing"!==this.state){var {target:b}=a,c=G.eventKey(a),d=this.values;b=C(b);var e=this._anchorElements[b];d=d[b];var f=[w.moveAnchorUp,w.moveAnchorDown,w.moveAnchorLeft,w.moveAnchorRight];if(c===w.showInput&&this.labelInputsEnabled)this._activeLabelInputIndex=b,this.notifyChange("state");else if(f.includes(c))a.preventDefault(),
{steps:a}=this,c=c===w.moveAnchorUp||c===w.moveAnchorRight?1:-1,null!=a?this._toStep(b,this._isReversedLayout()?-1*c:c):({precision:a}=this,e=this._getPositionOfElement(e),f=this._valueFromPosition(e),c=this._isHorizontalLayout()?c:-1*c,e=0===a?this._positionFromValue(f+c):1===a?this._positionFromValue(f+.1*c):e+c,this._toPosition(b,e)),e=this.values[b],d!==e&&this._emitThumbChangeEvent({index:b,oldValue:d,value:e});else if(c===w.moveAnchorToMax||c===w.moveAnchorToMin){a.preventDefault();const {min:g,
max:h}=this._getAnchorBoundsInPixels(b);e=this._isPositionInverted()?c===w.moveAnchorToMax?g:h:c===w.moveAnchorToMin?g:h;this._toPosition(b,e);e=this.values[b];d!==e&&this._emitThumbChangeEvent({index:b,oldValue:d,value:e})}}}_onAnchorPointerDown(a){if(!this._isDisabled()){var {target:b,clientX:c,clientY:d}=a,e=C(b);null!=e&&(a.preventDefault(),this._anchorElements[e]&&this._anchorElements[e].focus(),this._storeTrackDimensions(),this._dragStartInfo={clientX:c,clientY:d,index:e,position:this._getPositionOfElement(this._anchorElements[e])},
this.notifyChange("state"),document.addEventListener("pointerup",this._onAnchorPointerUp),document.addEventListener("pointermove",this._onAnchorPointerMove))}}_onAnchorPointerMove(a){if("editing"!==this.state&&this._dragStartInfo){a.preventDefault();var {values:b,_anchorElements:c,_dragged:d,_dragStartInfo:e,_dragStartInfo:{index:f,position:g}}=this,{clientX:h,clientY:m}=a;a=d?"drag":"start";var q=this._getPositionOfElement(c[f]),r=this._applyPrecisionToPosition(this._isHorizontalLayout()?g+h-e.clientX:
g+m-e.clientY);q!==r&&(q=b[f],this._dragged=!0,this._toPosition(f,r),r=this.values[f],d?q!==r&&this._emitThumbDragEvent({index:f,state:a,value:r}):this._emitThumbDragEvent({index:f,state:a,value:q}))}}_onAnchorPointerUp(a){document.removeEventListener("pointerup",this._onAnchorPointerUp);document.removeEventListener("pointermove",this._onAnchorPointerMove);if(this._dragStartInfo){a.preventDefault();({index:a}=this._dragStartInfo);var b=this._dragged,c=this.values[a];this._dragged=!1;this._dragStartInfo=
null;this._lastMovedHandleIndex=a;this.notifyChange("state");b?this._emitThumbDragEvent({index:a,state:"stop",value:c}):(this.scheduleRender(),"editing"!==this.state&&this._emitThumbClickEvent({index:a,value:c}))}}_onTrackPointerDown(a){const {_dragStartInfo:b,snapOnClickEnabled:c,state:d,values:e}=this;if(!this._isDisabled()&&"editing"!==d&&!b&&(document.addEventListener("pointermove",this._onTrackPointerMove),document.addEventListener("pointerup",this._onTrackPointerUp),c&&e?.length)){var {steps:f}=
this,{clientX:g,clientY:h}=a,m=this._getCursorPositionFromEvent(a);a=this._valueFromPosition(m);var q=this._getIndexOfNearestValue(a),r=e[q];a=e.some((z,t)=>z===r&&t!==q)&&a>r?e.lastIndexOf(r):q;if(null!=a){var v=e[a];f=null!=f?this._calculateNearestStepPosition(m):m;this._toPosition(a,f);this._dragged=!0;this._dragStartInfo={clientX:g,clientY:h,index:a,position:f};this._focusedAnchorIndex=a;this.notifyChange("state");this._emitThumbDragEvent({index:a,state:"start",value:v});f=this.values[a];v!==
f&&this._emitThumbDragEvent({index:a,state:"drag",value:f});document.addEventListener("pointerup",this._onAnchorPointerUp);document.addEventListener("pointermove",this._onAnchorPointerMove)}}}_onTrackPointerMove(a){a.preventDefault();this._dragged=!0}_onTrackPointerUp(a){a.preventDefault();document.removeEventListener("pointermove",this._onTrackPointerMove);document.removeEventListener("pointerup",this._onTrackPointerUp);this.snapOnClickEnabled||(this._dragged=!1);this._dragged||(a=this._getCursorPositionFromEvent(a),
a=this._valueFromPosition(a),this._emitTrackClickEvent({value:a}))}_onSegmentPointerDown(a){a.preventDefault();var b=a.target;const c=b?.["data-segment-index"],d=b?.["data-min-thumb-index"];b=b?.["data-max-thumb-index"];if(!this._isDisabled()&&null!=d&&null!=b){a.stopPropagation();this._storeTrackDimensions();document.addEventListener("pointerup",this._onSegmentPointerUp);var e=this._getAnchorDetails(d),f=this._getAnchorDetails(b);this.syncedSegmentsEnabled?(this.segmentElements.forEach(g=>g.classList.add(l.css.segmentElementActive)),
this._anchorElements.forEach(g=>g.classList.add(l.css.anchorElementActive))):(this.segmentElements.at(c).classList.add(l.css.segmentElementActive),this._anchorElements[e.index]?.classList.add(l.css.anchorElementActive),this._anchorElements[f.index]?.classList.add(l.css.anchorElementActive));this._segmentDragStartInfo={cursorPosition:this._getCursorPositionFromEvent(a),index:c,details:this._normalizeSegmentDetails({min:e,max:f})};this.draggableSegmentsEnabled&&(document.addEventListener("pointermove",
this._onSegmentPointerMove),this.notifyChange("state"),this._emitSegmentDragEvent({index:c,state:"start",thumbIndices:[d,b]}))}}_onSegmentPointerMove(a){if(this._segmentDragStartInfo){a.preventDefault();var {_trackHeight:b,_trackWidth:c,_segmentDragStartInfo:{index:d,cursorPosition:e,details:{min:f,max:g}}}=this,{index:h,position:m,value:q}=f,{index:r,position:v,value:z}=g;this._dragged=!0;a=this._getCursorPositionFromEvent(a);if(a!==e){var t=this._positionToPercent(e);t=this._positionToPercent(a)-
t;a=this._positionToPercent(m)+t;t=this._positionToPercent(v)+t;var {min:x}=this._getAnchorBoundsAsPercents(h),{max:y}=this._getAnchorBoundsAsPercents(r),I=!1,J=!1;a<x?I=!0:t>y&&(J=!0);if(I){const {min:E,max:F}=this.viewModel.getBoundsForValueAtIndex(h);a=this._isPositionInverted()?F:E;t=z+(a-q);x=t-this.values[r];this.syncedSegmentsEnabled?this._updateAnchorValuesByDifference(x):this._updateAnchorValues([h,r],[a,t])}else if(J){const {min:E,max:F}=this.viewModel.getBoundsForValueAtIndex(r);a=this._isPositionInverted()?
E:F;t=q+(a-z);x=t-this.values[h];this.syncedSegmentsEnabled?this._updateAnchorValuesByDifference(x):this._updateAnchorValues([h,r],[t,a])}else{x=this._isHorizontalLayout()?c:b;t=t/100*x;y=this.values;var M=[y[h],y[r]];a=this._getValueForAnchorAtPosition(h,a/100*x);t=this._getValueForAnchorAtPosition(r,t);this.syncedSegmentsEnabled?this._updateAnchorValuesByDifference(a-M[0]):this._updateAnchorValues([h,r],[a,t]);[this.values[h],this.values[r]].every((E,F)=>E===M[F])||this._emitSegmentDragEvent({index:d,
state:"drag",thumbIndices:[h,r]})}}}}_onSegmentPointerUp(a){a.preventDefault();document.removeEventListener("pointerup",this._onSegmentPointerUp);document.removeEventListener("pointermove",this._onSegmentPointerMove);if(this._segmentDragStartInfo){var {_dragged:b}=this,c=this.min,d=this.max,e=this.values,{index:f,details:{min:{index:g},max:{index:h}}}=this._segmentDragStartInfo;this.segmentElements.forEach(m=>m.classList.remove(l.css.segmentElementActive));this._anchorElements.forEach(m=>m.classList.remove(l.css.anchorElementActive));
if(this.draggableSegmentsEnabled){const m=e[g];this._lastMovedHandleIndex=m===e[h]?m>(d-c)/2?g:h:null;this._dragged=!1;this._segmentDragStartInfo=null;this.notifyChange("state");this._emitSegmentDragEvent({index:f,state:"stop",thumbIndices:[g,h]})}b||(a=this._getCursorPositionFromEvent(a),a=this._valueFromPosition(a),this._emitSegmentClickEvent({index:f,value:a,thumbIndices:[g,h]}))}}_onTickGroupClick(a){a=a.target;if(a?.["data-config"]){const b=D(a),c=H(a);this._emitTickClickEvent({configIndex:b,
groupIndex:c,value:a?.["data-value"]})}}_storeTrackDimensions(){if(this.trackElement){const a=this._getDimensions(this.trackElement);this._trackHeight=a.height;this._trackWidth=a.width}}_onLabelPointerDown(){this._isDisabled()||(this._dragged=!1,document.addEventListener("pointerup",this._onAnchorPointerUp),document.addEventListener("pointermove",this._onAnchorPointerMove))}_onLabelPointerMove(){this._isDisabled()||(this._dragged=!0)}_onLabelPointerUp(a){this._isDisabled()||(a=C(a.target),this.labelInputsEnabled&&
!this._dragged&&null!=a&&(this._activeLabelInputIndex=a),this._dragged=!1,this.notifyChange("state"),document.removeEventListener("pointerup",this._onLabelPointerUp),document.removeEventListener("pointermove",this._onLabelPointerMove))}_onLabelInputBlur(a){const {_activeLabelInputIndex:b,values:c,viewModel:d}=this;a=a.target.value;this._activeLabelInputIndex=null;this.notifyChange("state");if(a&&null!=b&&null!=c){var e=this._parseInputValue(a,"value",b);a=c[b];var {min:f,max:g}=this.viewModel.getBoundsForValueAtIndex(b);
e<f||e>g||(d.setValue(b,e),e=this.values[b],a!==e&&this._emitThumbChangeEvent({index:b,oldValue:a,value:e}))}}_onInputKeyDown(a){if(!this._isDisabled()){var {target:b}=a,c=G.eventKey(a),{hideInput1:d,hideInput2:e,hideInput3:f}=w,{_activeLabelInputIndex:g,_anchorElements:h}=this;if(c===d||c===e||c===f)a.stopPropagation(),b.blur(),null!=g?h[g].focus():b.parentElement?.focus()}}_onMaxLabelClick(){this._isDisabled()||(this._emitRangeLabelClickEvent({type:"max-click",value:this.max}),this.rangeLabelInputsEnabled&&
(this._isMaxInputActive=!0,this.notifyChange("state")))}_onMaxLabelKeyDown(a){this._isDisabled()||G.eventKey(a)!==w.showInput||(this._isMaxInputActive=!0,this.notifyChange("state"))}_onMaxInputBlur(a){var b=a.target.value;this._isMaxInputActive=!1;this.notifyChange("state");b&&(a=this.max,b=this._parseInputValue(b,"max"),b<=this.min||(this.viewModel.set("max",b),this.max!==a&&this._emitMaxChangeEvent({oldValue:a,value:this.max})))}_onMinLabelClick(){this._isDisabled()||(this._emitRangeLabelClickEvent({type:"min-click",
value:this.min}),this.rangeLabelInputsEnabled&&(this._isMinInputActive=!0,this.notifyChange("state")))}_onMinLabelKeyDown(a){this._isDisabled()||G.eventKey(a)!==w.showInput||(this._isMinInputActive=!0,this.notifyChange("state"))}_onMinInputBlur(a){var b=a.target.value;this._isMinInputActive=!1;this.notifyChange("state");b&&(a=this.min,b=this._parseInputValue(b,"min"),b>=this.max||(this.viewModel.set("min",b),this.min!==a&&this._emitMinChangeEvent({oldValue:a,value:this.min})))}_isDisabled(){return this.disabled||
"disabled"===this.state}_positionFromValue(a){const {_trackHeight:b,_trackWidth:c}=this,d=this.min??0,e=this.max??0,f=e-d;if(0===f||null==a)return 0;const g=this._isHorizontalLayout();a=g?parseFloat((c*(a-d)/f).toFixed(2)):parseFloat((b*(e-a)/f).toFixed(2));this._isReversedLayout()&&(a=g?c-a:b-a);return a}_valueFromPosition(a){const {_trackHeight:b,_trackWidth:c,precision:d}=this,e=this.min??0,f=this.max??0,g=f-e;a=this._isHorizontalLayout()?a*g/c+e:g*(1E3-a/b*1E3)/1E3+e;this._isReversedLayout()&&
(a=f+e-a);return parseFloat(a.toFixed(d))}_positionToPercent(a){const {_trackHeight:b,_trackWidth:c}=this,d=this._isHorizontalLayout()?c:b;return this._applyPrecisionToPosition(100*a/d)}_applyPrecisionToPosition(a){return parseFloat(a.toFixed(this._positionPrecision))}_isPositionInverted(){const {layout:a}=this;return"horizontal-reversed"===a||"vertical"===a}_isHorizontalLayout(){return this.layout.includes("horizontal")}_isReversedLayout(){return this.layout.includes("reversed")}_normalizeSegmentDetails(a){if(this._isPositionInverted()){const {min:b,
max:c}=a;return{min:c,max:b}}return a}_parseInputValue(a,b,c){return this.inputParseFunction?this.inputParseFunction(a,b,c):this.viewModel.defaultInputParseFunction(a)}_formatInputValue(a,b,c){return this.inputFormatFunction?this.inputFormatFunction(a,b,c):this.viewModel.defaultInputFormatFunction(a)}_getAnchorDetails(a){var b=this.values;a=[...b].sort((d,e)=>d-e)[a];b=b.indexOf(a);const c=this._getPositionOfElement(this._anchorElements[b]);return{index:b,position:c,value:a}}_updateAnchorStyle(a,
b){if(a=this._anchorElements[a])this._isHorizontalLayout()?a.style.left=`${b}`:a.style.top=`${b}`}_getStyleForAnchor(a,b,c){a=this._getPositionStyleForElement(a);if(1===this.values?.length)return`${a}`;b=this._zIndices[b];return`${a}; z-index: ${c?this._zIndexOffset+b:b}`}_getPositionStyleForElement(a){a=this._positionFromValue(a);a=this._positionToPercent(a);return`${this._isHorizontalLayout()?"left":"top"}: ${a}%`}_getPositionOfElement(a){const b=this._getDimensions(a.offsetParent);a=this._getDimensions(a);
return this._isHorizontalLayout()?this._applyPrecisionToPosition(a.left-b.left):this._applyPrecisionToPosition(a.top-b.top)}_updateAnchorValues(a,b){a.forEach((c,d)=>this._toValue(c,b[d]))}_updateAnchorValuesByDifference(a){const {min:b,max:c,values:d}=this;d?.forEach((e,f)=>this._toValue(f,Math.max(Math.min(e+a,c),b)))}_toValue(a,b){if(null!=this.steps){const c=this._getStepValues();b=this._getIndexOfNearestStepValue(b);b=c[b]}this._updateAnchorStyle(a,this._getPositionStyleForElement(b));this.viewModel.setValue(a,
b)}_toPosition(a,b){b=null!=this.steps?this._getStepValueForAnchorAtPosition(a,b):this._getValueForAnchorAtPosition(a,b);this._updateAnchorStyle(a,this._getPositionStyleForElement(b));this.viewModel.setValue(a,b)}_getValueForAnchorAtPosition(a,b){const {min:c,max:d}=this._getAnchorBoundsInPixels(a),{min:e,max:f}=this.viewModel.getBoundsForValueAtIndex(a);a=null;let g;this._isPositionInverted()?(a=e,g=f):(a=f,g=e);a=b>d?a:b<c?g:this._valueFromPosition(b);a>f?a=f:a<e&&(a=e);return a}_getStepValueForAnchorAtPosition(a,
b){const c=this._getStepValues();b=this._calculateNearestStepPosition(b);a=this._getValueForAnchorAtPosition(a,b);a=this._getIndexOfNearestStepValue(a);return c[a]}_getAnchorBoundsAsPercents(a){const {min:b,max:c}=this._getAnchorBoundsInPixels(a);return{min:this._positionToPercent(b),max:this._positionToPercent(c)}}_getAnchorBoundsInPixels(a){const {_anchorElements:b,_trackHeight:c,_trackWidth:d,effectiveMax:e,effectiveMin:f,thumbsConstrained:g}=this,h=b[a-1];a=b[a+1];var m=this._isHorizontalLayout()?
d:c;let q;this._isPositionInverted()?(m=null!=f?this._positionFromValue(f):m,q=null!=e?this._positionFromValue(e):0):(m=null!=e?this._positionFromValue(e):m,q=null!=f?this._positionFromValue(f):0);return g?this._isPositionInverted()?{max:h?this._getPositionOfElement(h):m,min:a?this._getPositionOfElement(a):q}:{max:a?this._getPositionOfElement(a):m,min:h?this._getPositionOfElement(h):q}:{max:m,min:q}}_getIndexOfNearestValue(a){const b=this.values;return b.indexOf(b.reduce((c,d)=>Math.abs(d-a)<Math.abs(c-
a)?d:c))}_getCursorPositionFromEvent(a){const b=this._getDimensions(this.trackElement);return this._isHorizontalLayout()?a.clientX-b.left:a.clientY-b.top}_getStepValues(){const {steps:a}=this;if(Array.isArray(a))return a;const {max:b,min:c}=this;if(null==c||null==b||null==a)return[];const d=Math.ceil((b-c)/a),e=[];for(let f=0;f<=d;f++){const g=c+a*f;e.push(g>b?b:g)}return e}_toStep(a,b){const c=this.values[a];var d=this._getStepValues(),e=d.indexOf(c);let f=null;-1<e?(b=d[e+b],isNaN(b)&&(b=d[e]),
d=this._positionFromValue(b),f=this._getStepValueForAnchorAtPosition(a,d)):(e=this._getIndexOfNearestStepValue(c),f=d[e+b]);this.viewModel.setValue(a,f)}_getIndexOfNearestStepValue(a){var {steps:b}=this;if(null==b)return null;b=this._getStepValues();const c=b.reduce((d,e)=>Math.abs(e-a)<Math.abs(d-a)?e:d);return b.indexOf(c)}_calculateNearestStepPosition(a){a=this._valueFromPosition(a);a=this._getIndexOfNearestStepValue(a);const b=this._getStepValues();return this._positionFromValue(b[a])}_getTickCounts(a,
b){({mode:b}=b);return"count"===b||"position"===b?a||0:"percent"===b?100/a||0:0}_calculateTickPositions(a){return a.map(b=>this._positionFromValue(b))}_calculateEquidistantTickPositions(a){const {_trackWidth:b,_trackHeight:c}=this,d=this._isHorizontalLayout()?b:c,e=d/(a-1),f=[];if(1===a)return[d/2];for(let g=0;g<a;g++){const h=g*e;h<=d&&f.push(h)}return f}_getDimensions(a){try{return N.assertIsSome(a),a.getBoundingClientRect()}catch(b){if("object"===typeof b&&null!==b)return new DOMRect(0,0,0,0);
throw b;}}_emitTrackClickEvent(a){this.emit("track-click",{...a,type:"track-click"})}_emitTickClickEvent(a){this.emit("tick-click",{...a,type:"tick-click"})}_emitMaxChangeEvent(a){this.emit("max-change",{...a,type:"max-change"})}_emitMinChangeEvent(a){this.emit("min-change",{...a,type:"min-change"})}_emitThumbChangeEvent(a){this.emit("thumb-change",{...a,type:"thumb-change"})}_emitThumbClickEvent(a){this.emit("thumb-click",{...a,type:"thumb-click"})}_emitThumbDragEvent(a){this.emit("thumb-drag",{...a,
type:"thumb-drag"})}_emitSegmentClickEvent(a){this.emit("segment-click",{...a,type:"segment-click"})}_emitSegmentDragEvent(a){this.emit("segment-drag",{...a,type:"segment-drag"})}_emitRangeLabelClickEvent(a){this.emit(a.type,a)}};n.__decorate([p.property()],k.prototype,"disabled",void 0);n.__decorate([p.property()],k.prototype,"draggableSegmentsEnabled",void 0);n.__decorate([p.property()],k.prototype,"effectiveMax",null);n.__decorate([p.property()],k.prototype,"effectiveMin",null);n.__decorate([p.property({readOnly:!0})],
k.prototype,"effectiveSegmentElements",void 0);n.__decorate([p.property()],k.prototype,"extraNodes",void 0);n.__decorate([p.property()],k.prototype,"inputCreatedFunction",void 0);n.__decorate([p.property()],k.prototype,"inputFormatFunction",null);n.__decorate([p.property()],k.prototype,"inputParseFunction",null);n.__decorate([p.property()],k.prototype,"label",null);n.__decorate([p.property({readOnly:!0})],k.prototype,"labelElements",void 0);n.__decorate([p.property()],k.prototype,"labelInputsEnabled",
void 0);n.__decorate([p.property()],k.prototype,"labelFormatFunction",null);n.__decorate([p.property({readOnly:!0})],k.prototype,"labels",null);n.__decorate([p.property({value:"horizontal"})],k.prototype,"layout",null);n.__decorate([p.property()],k.prototype,"max",null);n.__decorate([p.property({readOnly:!0})],k.prototype,"maxLabelElement",void 0);n.__decorate([p.property(),T.messageBundle("esri/widgets/Slider/t9n/Slider")],k.prototype,"messages",void 0);n.__decorate([p.property()],k.prototype,"min",
null);n.__decorate([p.property({readOnly:!0})],k.prototype,"minLabelElement",void 0);n.__decorate([p.property()],k.prototype,"precision",null);n.__decorate([p.property()],k.prototype,"rangeLabelInputsEnabled",void 0);n.__decorate([p.property({readOnly:!0})],k.prototype,"segmentElements",void 0);n.__decorate([p.property()],k.prototype,"snapOnClickEnabled",void 0);n.__decorate([p.property({readOnly:!0})],k.prototype,"state",null);n.__decorate([p.property()],k.prototype,"steps",void 0);n.__decorate([p.property()],
k.prototype,"syncedSegmentsEnabled",void 0);n.__decorate([p.property()],k.prototype,"thumbsConstrained",null);n.__decorate([p.property()],k.prototype,"thumbCreatedFunction",void 0);n.__decorate([p.property({readOnly:!0})],k.prototype,"thumbElements",void 0);n.__decorate([p.property()],k.prototype,"tickConfigs",null);n.__decorate([p.property({readOnly:!0})],k.prototype,"tickElements",void 0);n.__decorate([p.property({readOnly:!0})],k.prototype,"trackElement",void 0);n.__decorate([p.property()],k.prototype,
"values",null);n.__decorate([p.property()],k.prototype,"viewModel",void 0);n.__decorate([p.property()],k.prototype,"visibleElements",void 0);n.__decorate([O.cast("visibleElements")],k.prototype,"castVisibleElements",null);return k=n.__decorate([P.subclass("esri.widgets.Slider")],k)});