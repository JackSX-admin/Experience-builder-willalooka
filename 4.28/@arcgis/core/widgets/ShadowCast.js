/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{substitute as t,formatNumber as o}from"../intl.js";import{d as i,r as s}from"../chunks/maybe.js";import{watch as n,syncAndInitial as r}from"../core/reactiveUtils.js";import{c as l}from"../chunks/timeUtils.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import{subclass as c}from"../core/accessorSupport/decorators/subclass.js";import d from"./Slider.js";import p,{l as u}from"./Widget.js";import{l as h}from"../chunks/legacyIcon.js";import m,{D as v,S as _,a as g}from"./ShadowCast/ShadowCastViewModel.js";import k from"../core/Accessor.js";import{g as b}from"../chunks/uuid.js";import{a as C,g as y}from"../chunks/locale.js";import{c as f}from"../chunks/datetime.js";import{c as w}from"../chunks/widgetUtils.js";import{t as j}from"../chunks/jsxFactory.js";import S from"../Color.js";import{c as P}from"../chunks/asyncUtils.js";import{m as T}from"../chunks/handleUtils.js";import{throwIfAborted as M}from"../core/promiseUtils.js";import{P as V}from"../chunks/Popover.js";import{m as D}from"../chunks/messageBundle.js";import{t as E}from"../chunks/mathUtils.js";import z from"./support/DatePicker.js";import{g as O}from"../chunks/globalCss.js";import{H as I}from"../chunks/Heading.js";import{f as x}from"../chunks/timeWidgetUtils.js";import{T as $}from"../chunks/TimezonePicker.js";import{f as H}from"../chunks/date.js";import"../chunks/Logger.js";import"../config.js";import"../core/lang.js";import"../chunks/messages.js";import"../core/Error.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../chunks/utils.js";import"../core/Handles.js";import"../chunks/metadata.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../chunks/time.js";import"../chunks/assets.js";import"../chunks/jsonMap.js";import"../chunks/timeZoneUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../core/accessorSupport/decorators/cast.js";import"./Slider/SliderViewModel.js";import"../chunks/domUtils.js";import"../core/Promise.js";import"../chunks/projector.js";import"../chunks/dom.js";import"../chunks/index.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/screenUtils.js";import"../chunks/vec3f64.js";import"../chunks/earthUtils.js";import"../chunks/unitUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Point.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/ShadowCastVisualizeTechniqueConfiguration.js";import"../chunks/mat4.js";import"../chunks/common.js";import"../chunks/mat4f64.js";import"../chunks/vec2.js";import"../chunks/vec2f64.js";import"../chunks/vec3.js";import"../chunks/ViewingMode.js";import"../chunks/_commonjsHelpers.js";import"../chunks/mathUtils2.js";import"../chunks/ShaderTechniqueConfiguration.js";import"../chunks/interfaces3.js";import"../chunks/collectionUtils.js";import"../chunks/throttle.js";import"../chunks/traversalUtils.js";import"../chunks/colorUtils.js";import"./support/DatePickerViewModel.js";import"./support/DateTimeElementViewModel.js";import"../chunks/accessibleHandler.js";const L="esri-shadow-cast",F={base:L,widgetIcon:h.measureBuildingHeightShadow,timeRange:`${L}__time-range`,timeRangeIndicator:`${L}__time-range__indicator`,datePickerContainer:`${L}__date-picker-container`,visualization:`${L}__visualization`,visualizationSelect:`${L}__visualization__select`,visualizationConfigHidden:`${L}__visualization__config--hidden`},R=`${L}__label`,U=`${L}__threshold-config`,A={base:U,valueLabel:`${U}__value-label`},B=`${L}__duration-config`,W={base:B,radioGroup:`${B}__radio-group`},N={base:`${L}__discrete-config`},q=`${L}__tooltip`,G={base:q,content:`${q}__content`};let K=class extends k{constructor(){super(...arguments),this.timeRangeSlider=!0,this.timezone=!0,this.datePicker=!0,this.visualizationOptions=!0,this.colorPicker=!0,this.tooltip=!0}};e([a()],K.prototype,"timeRangeSlider",void 0),e([a()],K.prototype,"timezone",void 0),e([a()],K.prototype,"datePicker",void 0),e([a()],K.prototype,"visualizationOptions",void 0),e([a()],K.prototype,"colorPicker",void 0),e([a()],K.prototype,"tooltip",void 0),K=e([c("esri.widgets.ShadowCast.ShadowCastVisibleElements")],K);const Z=K;function J(e,t="milliseconds",o={}){const i={locale:"bs"===C()?"hr":y(),numberingSystem:"latn"};let s;return s=e?f.fromMillis(l(e,t,"milliseconds"),i).rescale():f.fromObject({seconds:0},i),s.toHuman({listStyle:"narrow",unitDisplay:"long",...o})}function Q(e,t){const{for:o,label:i,tabIndex:s,...n}=e;return j("div",{class:w(R,n?.class),key:o,...n},j("calcite-label",{for:o,scale:"s",tabIndex:s},i),t)}const X="esri-color-picker",Y={base:X,backgroundPattern:`${X}__bg-pattern`,toggleButton:`${X}__toggle-button`,popover:`${X}__popover`,opacitySliderContainer:`${X}__opacity-slider-container`,opacitySlider:`${X}__opacity-slider`,calciteColorPicker:`${X}__calcite-color-picker`};var ee;!function(e){e.ColorPickerFocus="hex-input-poll-timeout",e.ButtonFocusTimeout="button-focus-timeout"}(ee||(ee={}));let te=class extends p{constructor(e,t){super(e,t),this.value=new S,this.alphaEnabled=!0,this._containerElement=null,this._popover=null,this._popoverElement=null,this._buttonElement=null,this._colorPickerCreated=!1}initialize(){this.addHandles(n((()=>({container:this._containerElement,value:this.value})),(({container:e,value:t})=>{e?.style.setProperty("--esri-color-picker-value",t.toCss(!0))}),r))}loadDependencies(){return u({button:()=>import("../chunks/calcite-button.js"),"color-picker":()=>import("../chunks/calcite-color-picker.js"),label:()=>import("../chunks/calcite-label.js"),slider:()=>import("../chunks/calcite-slider.js")})}destroy(){this._destroyPopover(),this._buttonElement=null}render(){const e=this._messages,t=null!=this._popover&&this._popover.open?e.close:e.open;return j("div",{afterCreate:this._onContainerAfterCreate,bind:this,class:this.classes(Y.base,this.class)},j("div",{class:Y.backgroundPattern}),j("calcite-button",{afterCreate:this._onButtonAfterCreate,appearance:"transparent",bind:this,class:Y.toggleButton,id:this.id,kind:"neutral",label:t,onclick:this._togglePopover,scale:"s",tabIndex:-1,title:t}))}_onContainerAfterCreate(e){this._containerElement=e}_onButtonAfterCreate(e){this._destroyPopover(),this._buttonElement=e,this._popover=new V({owner:this,anchorElement:e,placement:"bottom-start",renderContentFunction:this._renderPopoverContent})}_destroyPopover(){this.removeHandles(ee.ColorPickerFocus),this._popover=i(this._popover),this._popoverElement=null}_renderPopoverContent(){const e=this.value,t=this._messages;return j("div",{afterCreate:this._onPopoverAfterCreate,bind:this,class:Y.popover,onfocusout:this._onPopoverFocusOut,onkeydown:this._onPopoverKeyDown,tabIndex:-1},j("calcite-color-picker",{afterCreate:this._onColorPickerAfterCreate,afterRemoved:()=>this._colorPickerCreated=!1,bind:this,class:Y.calciteColorPicker,hideChannels:!0,hideSaved:!0,scale:"m",value:this._colorPickerCreated?e.toCss():null,onCalciteColorPickerInput:this._onColorInput}),this.alphaEnabled?j("section",{class:Y.opacitySliderContainer},j("calcite-label",{scale:"s"},t.opacity,j("calcite-slider",{bind:this,class:Y.opacitySlider,labelHandles:!0,max:1,min:0,step:.01,value:e.a,onCalciteSliderInput:this._onOpacityChange}))):null)}_onColorInput(e){const t=e.target.value,o="string"==typeof t?new S(t):new S;o.a=this.value.a,this._onChange(o)}_onOpacityChange(e){const t=this.value.clone();t.a=e.target.value,this._onChange(t)}_onChange(e){this.value=e,null!=this.onChange&&this.onChange(e)}_onColorPickerAfterCreate(e){this.removeHandles(ee.ColorPickerFocus);const t=P((async t=>{e.componentOnReady&&await e.componentOnReady(),M(t),this._colorPickerCreated=!0,await new Promise((e=>requestAnimationFrame(e))),M(t),e.setFocus()}));this.addHandles(T((()=>{t.abort(),this._colorPickerCreated=!1})),ee.ColorPickerFocus)}_togglePopover(e){null!=this._popover&&this._popover.open?this._closePopover():this._openPopover()}_openPopover(){const e=this._popover;e&&(e.open=!0)}_closePopover(){this.removeHandles(ee.ColorPickerFocus);const e=this._popover;e&&(e.open=!1),this._setFocusOnButton()}_setFocusOnButton(){this.removeHandles(ee.ButtonFocusTimeout),this.addHandles(function(e,t){const o=setTimeout(e,void 0);return T((()=>clearTimeout(o)))}((()=>this._buttonElement?.setFocus())),ee.ButtonFocusTimeout)}_onPopoverAfterCreate(e){this._popoverElement=e}_onPopoverFocusOut(e){const t=this._popoverElement;if(null==t)return;const o=e.relatedTarget;if(o&&o instanceof Node){if(t.contains(o))return;if(o===this._buttonElement||this._isAssociatedLabel(o))return}this._closePopover()}_isAssociatedLabel(e){const t=this.id,o=e.tagName?.toLowerCase();return"calcite-label"===o&&e.for===t||"label"===o&&e.htmlFor===t}_onPopoverKeyDown(e){"Escape"!==e.key&&"Enter"!==e.key||(e.stopPropagation(),this._closePopover())}};function oe(e){return j(Q,{for:e.id,label:e.label,tabIndex:-1},j(te,{id:e.id,value:e.value,onChange:e.onChange}))}e([a()],te.prototype,"class",void 0),e([a()],te.prototype,"value",void 0),e([a()],te.prototype,"alphaEnabled",void 0),e([a()],te.prototype,"onChange",void 0),e([a()],te.prototype,"_containerElement",void 0),e([a()],te.prototype,"_popover",void 0),e([a()],te.prototype,"_popoverElement",void 0),e([a()],te.prototype,"_buttonElement",void 0),e([a(),D("esri/widgets/support/t9n/ColorPicker")],te.prototype,"_messages",void 0),e([a()],te.prototype,"_colorPickerCreated",void 0),te=e([c("esri.widgets.support.ColorPicker")],te);let ie=class extends p{constructor(e){super(e),this.colorPickerVisible=!0,this._selectId=`select-${b()}`,this._colorPickerId=`color-picker-${b()}`,this._onColorChange=e=>{this.options.color=e}}loadDependencies(){return u({label:()=>import("../chunks/calcite-label.js"),option:()=>import("../chunks/calcite-option.js"),select:()=>import("../chunks/calcite-select.js")})}render(){const e=this._messages.discrete,t=e.intervalLabel,{color:o,interval:i,intervalOptions:s}=this.options;return j("div",{class:N.base},j(Q,{for:this._selectId,label:t},j("calcite-select",{bind:this,id:this._selectId,label:t,onCalciteSelectChange:this._onIntervalChange},s.toArray().map((e=>j("calcite-option",{key:e,selected:e===i,value:String(e)},J(e)))))),this.colorPickerVisible?j(oe,{id:this._colorPickerId,label:e.colorLabel,value:o,onChange:this._onColorChange}):null)}_onIntervalChange(e){const t=parseInt(e.target.selectedOption?.value,10);Number.isFinite(t)&&(this.options.interval=t)}};e([a()],ie.prototype,"options",void 0),e([a()],ie.prototype,"colorPickerVisible",void 0),e([a(),D("esri/widgets/ShadowCast/t9n/ShadowCast")],ie.prototype,"_messages",void 0),ie=e([c("esri.widgets.ShadowCast.components.DiscreteConfigurator")],ie);let se=class extends p{constructor(e){super(e),this.colorPickerVisible=!0,this._modeSelectorId=`mode-selector-${b()}`,this._colorPickerId=`color-picker-${b()}`,this._onColorChange=e=>{this.options.color=e},this._setContinuous=()=>{this.options.mode=v.Continuous},this._setHourly=()=>{this.options.mode=v.Hourly}}loadDependencies(){return u({button:()=>import("../chunks/calcite-button.js"),label:()=>import("../chunks/calcite-label.js")})}render(){const e=this._messages.duration,{color:t,mode:o}=this.options;return j("div",{class:W.base},j(Q,{for:this._modeSelectorId,label:e.modeLabel},j("div",{class:W.radioGroup},j(ne,{active:o===v.Continuous,label:e.continuousLabel,onclick:this._setContinuous}),j(ne,{active:o===v.Hourly,label:e.hourlyLabel,onclick:this._setHourly}))),this.colorPickerVisible?j(oe,{id:this._colorPickerId,label:e.colorLabel,value:t,onChange:this._onColorChange}):null)}};function ne({active:e,label:t,...o}){return j("calcite-button",{alignment:"center",appearance:e?"solid":"outline",scale:"s",width:"half",...o},t)}e([a()],se.prototype,"options",void 0),e([a()],se.prototype,"colorPickerVisible",void 0),e([a(),D("esri/widgets/ShadowCast/t9n/ShadowCast")],se.prototype,"_messages",void 0),se=e([c("esri.widgets.ShadowCast.components.DurationConfigurator")],se);const re=l(1,"minutes","milliseconds"),le=l(15,"minutes","milliseconds");let ae=class extends p{constructor(e,t){super(e,t),this.accumulatedShadowTime=null,this._messages=null}render(){const e=this._formattedContent;return j("div",{class:G.base},e?j("div",{class:G.content},e):null)}get _formattedContent(){const e=this._messages,o=this.accumulatedShadowTime;if(null==e||null==o)return null;const i=E(o,o<le?re:le);return t(e.timeInShadow,{duration:J(i)})}};e([a()],ae.prototype,"accumulatedShadowTime",void 0),e([a()],ae.prototype,"view",void 0),e([a(),D("esri/widgets/ShadowCast/t9n/ShadowCast")],ae.prototype,"_messages",void 0),e([a({readOnly:!0})],ae.prototype,"_formattedContent",null),ae=e([c("esri.widgets.ShadowCast.components.ShadowTooltipContent")],ae);let ce=class extends k{constructor(e){super(e),this._updateHandle=null,this._contentContainer=this._createContainer()}initialize(){this.container.appendChild(this._contentContainer),this._contentWidget=new ae({},this._contentContainer),this._updateHandle=n((()=>{const e=this._contentContainer,{screenPoint:t,accumulatedShadowTime:o}=this.viewModel.tooltip;return{contentContainer:e,screenPoint:t,accumulatedShadowTime:o}}),(e=>this._update(e)),r)}destroy(){this._updateHandle=s(this._updateHandle),this._contentWidget=i(this._contentWidget),this.container.contains(this._contentContainer)&&this.container.removeChild(this._contentContainer)}get testData(){return{displayedValue:"none"===this._contentContainer.style.display?null:this._contentWidget.container?.innerText}}_update({contentContainer:e,screenPoint:t,accumulatedShadowTime:o}){const{style:i}=e;null!=t?(i.display="block",i.transform=`translate(${t.x}px, ${t.y}px)`,this._contentWidget.accumulatedShadowTime=o):i.display="none"}_createContainer(){const e=document.createElement("div"),{style:t}=e;return t.position="absolute",t.top="0",t.left="0",e}};e([a()],ce.prototype,"viewModel",void 0),e([a()],ce.prototype,"container",void 0),e([a()],ce.prototype,"_contentContainer",void 0),e([a()],ce.prototype,"_contentWidget",void 0),ce=e([c("esri.widgets.ShadowCast.components.ShadowTooltip")],ce);let de=class extends p{constructor(e){super(e),this.colorPickerVisible=!0,this._valueSliderId=`value-slider-${b()}`,this._colorPickerId=`color-picker-${b()}`,this._valueSlider=new d({visibleElements:{labels:!1,rangeLabels:!1},steps:l(30,"minutes","milliseconds"),labelFormatFunction:(e,t)=>{const i=l(e,"milliseconds","hours");return"tick"===t?o(i,{maximumFractionDigits:0}):""}}),this._onColorChange=e=>{this.options.color=e}}initialize(){const e=({value:e})=>{this.options.value=e};this.addHandles([n((()=>{const{value:e,minValue:t,maxValue:o}=this.options;return{value:e,minValue:t,maxValue:o}}),(({value:e,minValue:t,maxValue:o})=>{const i=this._valueSlider;i.min=t,i.max=o,i.values=[e];const s=o-t,n=Math.floor(l(s,"milliseconds","hours"));i.tickConfigs=[{mode:"count",values:2*n+1,labelsVisible:!1},{mode:"count",values:n+1,labelsVisible:!0}]}),r),this._valueSlider.on("thumb-change",e),this._valueSlider.on("thumb-drag",e)])}loadDependencies(){return u({label:()=>import("../chunks/calcite-label.js")})}destroy(){this._valueSlider=i(this._valueSlider)}render(){const e=this._messages.threshold,{color:t}=this.options;return j("div",{class:A.base},j(Q,{class:A.valueLabel,for:this._valueSliderId,label:e.valueLabel},this._valueSlider.render()),this.colorPickerVisible?j(oe,{id:this._colorPickerId,label:e.colorLabel,value:t,onChange:this._onColorChange}):null)}get testData(){return{valueSlider:this._valueSlider}}};var pe;e([a()],de.prototype,"options",void 0),e([a()],de.prototype,"colorPickerVisible",void 0),e([a()],de.prototype,"testData",null),e([a()],de.prototype,"_valueSlider",void 0),e([a(),D("esri/widgets/ShadowCast/t9n/ShadowCast")],de.prototype,"_messages",void 0),de=e([c("esri.widgets.ShadowCast.components.ThresholdConfigurator")],de),function(e){e.Slider="slider"}(pe||(pe={}));const ue={hour:"2-digit",minute:"2-digit",timeZone:"UTC"},he=/(.*)\s(.*)/,me={labelFormatFunction:x,min:0,max:1439,steps:15,rangeLabelInputsEnabled:!1,visibleElements:{labels:!1,rangeLabels:!1},tickConfigs:[{mode:"position",values:[0,360,720,1080,1439],labelsVisible:!0,tickCreatedFunction:(e,t,o)=>{t.classList.add(O.primaryTick),o.classList.add(O.primaryTickLabel);const i=o.innerText.match(he);i&&(o.innerHTML=`${i[1]}<br><div class="${O.primaryTickAmPm}">${i[2]}</div>`)}},{mode:"position",values:[120,240,480,600,840,960,1200,1320],tickCreatedFunction:(e,t)=>{t.classList.add(O.secondaryTick)}}]};let ve=class extends p{constructor(e,t){super(e,t),this.viewModel=null,this.headingLevel=4,this.iconClass=F.widgetIcon,this.icon=null,this.visibleElements=new Z,this._defaultViewModel=null,this._timeSlider=new d({...me,container:document.createElement("div")}),this._tooltip=null,this._onTimezoneChange=e=>{this.viewModel.utcOffset=e},this._onDateChange=e=>{this.viewModel.date=e},e?.viewModel||(this._defaultViewModel=new m({view:e?.view}),this.viewModel=this._defaultViewModel)}initialize(){this.addHandles([n((()=>({viewModel:this.viewModel,slider:this._timeSlider})),(e=>this._connectTimeSlider(e)),r),n((()=>({container:this.view?.surface,viewModel:this.viewModel,tooltipVisible:this.visibleElements.tooltip})),(({container:e,viewModel:t,tooltipVisible:o})=>{this._tooltip=i(this._tooltip),null!=e&&o&&(this._tooltip=new ce({viewModel:t,container:e}))}),r),n((()=>({viewModel:this.viewModel,visible:this.visible})),(({viewModel:e,visible:t})=>e.setRunning(t)),r)])}destroy(){this._timeSlider=i(this._timeSlider),null!=this._defaultViewModel&&this.viewModel!==this._defaultViewModel&&this._defaultViewModel.destroy()}loadDependencies(){return u({select:()=>import("../chunks/calcite-select.js"),option:()=>import("../chunks/calcite-option.js")})}render(){const{visibleElements:e,viewModel:t}=this,o=t.state===_.Disabled;return j("div",{class:this.classes(F.base,O.widget,O.panel,{[O.widgetDisabled]:o}),key:this},this._renderTimeRangeSection(),e.visualizationOptions?this._renderVisualizationOptionsSection():null)}get view(){return this.viewModel?.view}set view(e){this.viewModel&&(this.viewModel.view=e)}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get testData(){return{tooltip:this._tooltip}}_connectTimeSlider({viewModel:e,slider:t}){if(this.removeHandles(pe.Slider),null==t)return;const o=e=>l(e,"milliseconds","minutes"),i=e=>l(e,"minutes","milliseconds"),s=({index:t,value:o})=>{0===t?e.startTimeOfDay=i(o):e.endTimeOfDay=i(o)};this.addHandles([n((()=>[e.startTimeOfDay,e.endTimeOfDay]),(e=>{t.values=e.map(o)}),r),t.on("thumb-change",s),t.on("thumb-drag",s),t.on("segment-drag",(()=>{[e.startTimeOfDay,e.endTimeOfDay]=t.values.map(i)}))],pe.Slider)}_renderTimeRangeSection(){const{visibleElements:e}=this;return e.timeRangeSlider||e.datePicker?j("section",{class:F.timeRange,key:"time-range"},j(I,{level:this.headingLevel},this.messages.timeLabel),e.timeRangeSlider?this._renderTimeRange():null,e.datePicker?this._renderDatePicker():null):null}_renderTimeRange(){const{messages:e,viewModel:o,visibleElements:i}=this,{startTimeOfDay:s,endTimeOfDay:n}=o,[r,l]=[s,n].map((e=>H(new Date(e),ue)));return[j("div",{class:F.timeRangeIndicator,key:"time-range-indicator"},t(e.timeRange,{start:r,end:l}),i.timezone?j($,{value:o.utcOffset,onChange:this._onTimezoneChange}):null),j("div",{afterCreate:this._timeSliderContainerAfterCreate,afterRemoved:this._timeSliderContainerAfterRemoved,bind:this,key:"time-slider-container"})]}_timeSliderContainerAfterCreate(e){const t=this._timeSlider?.container;t&&e.appendChild(t)}_timeSliderContainerAfterRemoved(e){const t=this._timeSlider?.container;t&&e.removeChild(t)}_renderDatePicker(){return j("div",{class:F.datePickerContainer,key:"date-picker"},j(z,{value:this.viewModel.date,onChange:this._onDateChange}))}_renderVisualizationOptionsSection(){const{headingLevel:e,messages:t,viewModel:o,visibleElements:i}=this,s=i.colorPicker,n=e=>this.classes(o.visualizationType===e?null:F.visualizationConfigHidden);return j("section",{class:F.visualization,key:"visualization"},j(I,{level:e},t.visualizationLabel),this._renderVisualizationSelect(),j("div",{class:n(g.Threshold),key:"threshold-configurator"},j(de,{colorPickerVisible:s,options:o.thresholdOptions})),j("div",{class:n(g.Duration),key:"duration-configurator"},j(se,{colorPickerVisible:s,options:o.durationOptions})),j("div",{class:n(g.Discrete),key:"discrete-configurator"},j(ie,{colorPickerVisible:s,options:o.discreteOptions})))}_renderVisualizationSelect(){const e=this.messages,t=this.viewModel.visualizationType;return j("calcite-select",{bind:this,class:F.visualizationSelect,key:"visualization-select",label:e.visualizationLabel,onCalciteSelectChange:this._onVisualizationTypeChange},[{type:g.Threshold,label:e.threshold.label},{type:g.Duration,label:e.duration.label},{type:g.Discrete,label:e.discrete.label}].map((({type:e,label:o})=>j("calcite-option",{selected:e===t,value:e},o))))}_onVisualizationTypeChange(e){const t=e.target.selectedOption?.value;this.viewModel.visualizationType=t??g.Threshold}};e([a()],ve.prototype,"viewModel",void 0),e([a()],ve.prototype,"view",null),e([a()],ve.prototype,"headingLevel",void 0),e([a()],ve.prototype,"iconClass",void 0),e([a()],ve.prototype,"icon",void 0),e([a()],ve.prototype,"label",null),e([a({type:Z,nonNullable:!0})],ve.prototype,"visibleElements",void 0),e([a(),D("esri/widgets/ShadowCast/t9n/ShadowCast")],ve.prototype,"messages",void 0),e([a()],ve.prototype,"_defaultViewModel",void 0),e([a()],ve.prototype,"_timeSlider",void 0),e([a()],ve.prototype,"_tooltip",void 0),ve=e([c("esri.widgets.ShadowCast")],ve);const _e=ve;export{_e as default};