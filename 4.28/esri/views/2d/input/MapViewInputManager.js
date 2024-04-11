// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ./handlers/DoubleClickZoom ./handlers/DoubleTapDragZoom ./handlers/DragPan ./handlers/DragRotate ./handlers/GamepadNavigation ./handlers/KeyPan ./handlers/KeyRotate ./handlers/KeyZoom ./handlers/MouseWheelZoom ./handlers/PinchAction ../../input/BrowserEventSource ../../input/InputManager ../../input/handlers/PreventContextMenu ../../input/recognizers/DoubleTapDrag ../../input/recognizers/Drag ../../input/recognizers/ImmediateDoubleClick ../../input/recognizers/PointerClickHoldAndDrag ../../input/recognizers/SingleAndDoubleClick".split(" "),
function(c,a,k,e,f,I,J,K,l,h,m,n,p,q,r,t,u,v,w,x,g,y,z,A,B,C,D){var E={left:"ArrowLeft",right:"ArrowRight",up:"ArrowUp",down:"ArrowDown"},F={zoomIn:["\x3d","+"],zoomOut:["-","_"]},G={clockwiseOption1:"a",clockwiseOption2:"A",counterClockwiseOption1:"d",counterClockwiseOption2:"D",resetOption1:"n",resetOption2:"N"};a=class extends a{initialize(){const d=()=>this.view?.ready;this.addHandles([e.when(()=>!d(),()=>this._disconnect()),e.when(d,()=>this._connect())])}destroy(){this._disconnect()}get latestPointerType(){return this._inputManager?.latestPointerType}get latestPointerLocation(){return this._inputManager?.latestPointerLocation}get multiTouchActive(){return this._inputManager?.multiTouchActive??
!1}_disconnect(){this.view.viewEvents.disconnect();this._inputManager=k.destroyMaybe(this._inputManager)}_connect(){const d=new x.BrowserEventSource(this.view.surface,this.view.input);var b=[new B.ImmediateDoubleClick,new C.PointerClickHoldAndDrag,new D.SingleAndDoubleClick,new A.Drag(this.view.navigation),new z.DoubleTapDrag];b=new g.InputManager({eventSource:d,recognizers:b});b.installHandlers("prevent-context-menu",[new y.PreventContextMenu],g.ViewEventPriorities.INTERNAL);b.installHandlers("navigation",
[new w.PinchRotateAndZoom(this.view),new q.GamepadNavigation(this.view),new v.MouseWheelZoom(this.view),new h.DoubleClickZoom(this.view),new h.DoubleClickZoom(this.view,["Ctrl"]),new n.DragPan(this.view,"primary"),new r.KeyPan(this.view,E),new u.KeyZoom(this.view,F),new t.KeyRotate(this.view,G),new p.DragRotate(this.view,"secondary"),new m.DoubleTapDragZoom(this.view,"touch")],g.ViewEventPriorities.INTERNAL);this.view.viewEvents.connect(b);this._source=d;this._inputManager=b;e.watch(()=>this.view?.navigation?.browserTouchPanEnabled,
H=>{this._source&&(this._source.browserTouchPanningEnabled=!H)},e.initial)}get test(){return{inputManager:this._inputManager}}};c.__decorate([f.property()],a.prototype,"view",void 0);c.__decorate([f.property()],a.prototype,"latestPointerType",null);c.__decorate([f.property()],a.prototype,"latestPointerLocation",null);c.__decorate([f.property()],a.prototype,"multiTouchActive",null);return a=c.__decorate([l.subclass("esri.views.2d.input.MapViewInputManager")],a)});