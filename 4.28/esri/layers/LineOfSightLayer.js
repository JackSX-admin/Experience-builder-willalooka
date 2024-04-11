// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../analysis/LineOfSightAnalysis ../analysis/LineOfSightAnalysisObserver ../analysis/LineOfSightAnalysisTarget ../core/Collection ../core/collectionUtils ../core/MultiOriginJSONSupport ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ./Layer ./mixins/OperationalLayer".split(" "),function(b,g,l,f,h,m,a,k,d,r,t,u,n,p,q){f=h.ofType(f);a=class extends q.OperationalLayer(a.MultiOriginJSONMixin(p)){constructor(c){super(c);
this.type="line-of-sight";this.operationalLayerType="LineOfSightLayer";this.analysis=new g;this.opacity=1}initialize(){this.addHandles(k.watch(()=>this.analysis,(c,e)=>{null!=e&&e.parent===this&&(e.parent=null);null!=c&&(c.parent=this)},k.syncAndInitial))}async load(){null!=this.analysis&&this.addResolvingPromise(this.analysis.waitComputeExtent());return this}get observer(){return this.analysis?.observer}set observer(c){const {analysis:e}=this;e&&(e.observer=c)}get targets(){return null!=this.analysis?
this.analysis.targets:new h}set targets(c){m.referenceSetter(c,this.analysis?.targets)}get fullExtent(){return null!=this.analysis?this.analysis.extent:null}get spatialReference(){return null!=this.analysis?this.analysis.spatialReference:null}releaseAnalysis(c){this.analysis===c&&(this.analysis=new g)}};b.__decorate([d.property({json:{read:!1},readOnly:!0})],a.prototype,"type",void 0);b.__decorate([d.property({type:["LineOfSightLayer"]})],a.prototype,"operationalLayerType",void 0);b.__decorate([d.property({type:l,
json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],a.prototype,"observer",null);b.__decorate([d.property({type:f,json:{read:!0,write:{ignoreOrigin:!0}}})],a.prototype,"targets",null);b.__decorate([d.property({nonNullable:!0,json:{read:!1,write:!1}})],a.prototype,"analysis",void 0);b.__decorate([d.property({readOnly:!0})],a.prototype,"fullExtent",null);b.__decorate([d.property({readOnly:!0})],a.prototype,"spatialReference",null);b.__decorate([d.property({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,
write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],a.prototype,"opacity",void 0);b.__decorate([d.property({type:["show","hide"]})],a.prototype,"listMode",void 0);return a=b.__decorate([n.subclass("esri.layers.LineOfSightLayer")],a)});