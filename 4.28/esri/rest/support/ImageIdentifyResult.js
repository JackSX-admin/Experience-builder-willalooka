// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../geometry/Point ./FeatureSet".split(" "),function(b,a,c,g,h,k,d,e,f){a=class extends a.JSONSupport{constructor(){super(...arguments);this.value=this.properties=this.processedValues=this.objectId=this.name=this.location=this.catalogItems=this.catalogItemVisibilities=null}};
b.__decorate([c.property({json:{write:!0}})],a.prototype,"catalogItemVisibilities",void 0);b.__decorate([c.property({type:f,json:{write:!0}})],a.prototype,"catalogItems",void 0);b.__decorate([c.property({type:e,json:{write:!0}})],a.prototype,"location",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"name",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"objectId",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"processedValues",void 0);b.__decorate([c.property({json:{write:!0}})],
a.prototype,"properties",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"value",void 0);return a=b.__decorate([d.subclass("esri.rest.support.ImageIdentifyResult")],a)});