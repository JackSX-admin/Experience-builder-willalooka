// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Accessor ../../core/asyncUtils ../../core/Collection ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../geometry/Extent ../../geometry/SpatialReference ../../geometry/support/contains ../../geometry/support/webMercatorUtils".split(" "),function(q,k,x,u,r,t,D,E,F,y,z,A,B,v){function w(a,d){return a&&"copyright"in
a&&(!d||"function"===typeof a.originOf&&"user"===a.originOf("copyright"))}function C(a,d){return a.length!==d.length||a.some((b,c)=>b.text!==d[c].text)}function n(a,d,b){b&&d&&(a.find(c=>c.layerView===d&&c.text===b)||a.push({text:b,layerView:d}))}const g=[];k=class extends k{constructor(a){super(a);this._clear=()=>{this._fetchedAttributionData.clear();this._pendingAttributions.clear();this.removeHandles("suspension");this.notifyChange("state")};this._pendingAttributions=new Set;this._fetchedAttributionData=
new Map;this.items=new u;this.view=null;this._allLayerViewsChange=d=>{this.removeHandles("suspension");const b=this.view?.allLayerViews;b&&this.addHandles(b.map(c=>r.watch(()=>[c.suspended,c.layer?.attributionVisible],()=>this._updateAttributionItems())).toArray(),"suspension");d?.removed&&d.removed.forEach(c=>{this._pendingAttributions.delete(c);this._fetchedAttributionData.delete(c)});this._updateAttributionItems()};this.addHandles([r.on(()=>this.view?.allLayerViews,"change",d=>this._allLayerViewsChange(d),
{onListenerAdd:()=>this._allLayerViewsChange(),onListenerRemove:this._clear}),r.when(()=>!0===this.view?.stationary,()=>this._updateAttributionItems())])}destroy(){this.view=null;this._fetchedAttributionData.clear();this._pendingAttributions.clear();this.items.removeAll()}get state(){return this.view?.ready?0<this._pendingAttributions.size?"loading":"ready":"disabled"}_updateAttributionItems(){const a=this.view,d=a?.allLayerViews;g.length=0;a&&d?(d.forEach(b=>{if(!b.suspended&&b.layer?.attributionVisible){var c=
b.layer;if(w(c,"user"))n(g,b,c.copyright);else if(c.hasAttributionData)if(this._fetchedAttributionData.has(b)){var e=this._fetchedAttributionData.get(b);e?n(g,b,this._getDynamicAttribution(e,a,c)):w(c)&&n(g,b,c.copyright)}else this._fetchAttributionData(b);else(e="portalItem"in c?c.portalItem?.accessInformation:void 0)?n(g,b,e):n(g,b,c.copyright)}}),C(this.items,g)&&(this.items.removeAll(),this.items.addMany(g)),g.length=0,this.notifyChange("state")):this._clear()}async _fetchAttributionData(a){if(!this._pendingAttributions.has(a)){this._pendingAttributions.add(a);
var d=await x.result(a.layer.fetchAttributionData());this._pendingAttributions.has(a)&&(d=d.ok?this._createContributionIndex(d.value,"bing-maps"===a.layer.type):null,this._pendingAttributions.delete(a),this._fetchedAttributionData.set(a,d));this._updateAttributionItems()}}_createContributionIndex(a,d){a=a.contributors;const b={};if(!a)return b;for(let f=0;f<a.length;f++){const h=a[f];var c=h.coverageAreas;if(!c)return;for(const l of c){var e=l.bbox,m=l.zoomMin-(d&&l.zoomMin?1:0);c=l.zoomMax-(d&&l.zoomMax?
1:0);e=new z({xmin:e[1],ymin:e[0],xmax:e[3],ymax:e[2],spatialReference:A.WGS84});for(e={extent:v.geographicToWebMercator(e),attribution:h.attribution||"",score:null!=l.score?l.score:100,id:f};m<=c;m++){var p;b[p=m]??(b[p]=[]);b[m].push(e)}}}b.maxKey=Math.max.apply(null,Object.keys(b));return b}_getDynamicAttribution(a,d,b){const {extent:c,scale:e}=d;b=b.tileInfo?.scaleToZoom(e)??0;b=Math.min(a.maxKey??0,Math.round(b));if(!c||null==b||-1>=b)return"";a=a[b];const m=v.project(c.center.clone().normalize(),
d.spatialReference),p=new Set;return a?a.filter(f=>{const h=f.id;(f=!p.has(h)&&m&&f.extent&&B.extentContainsPoint(f.extent,m))&&p.add(h);return f}).sort((f,h)=>h.score-f.score||f.objectId-h.objectId).map(f=>f.attribution).join(", "):""}};q.__decorate([t.property({readOnly:!0,type:u})],k.prototype,"items",void 0);q.__decorate([t.property({readOnly:!0})],k.prototype,"state",null);q.__decorate([t.property()],k.prototype,"view",void 0);return k=q.__decorate([y.subclass("esri.widgets.Attribution.AttributionViewModel")],
k)});