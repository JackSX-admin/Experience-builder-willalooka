// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(a,b,e,d,h,k,l,f){var c;a.AuthoringInfoClassBreakInfo=c=class extends e.JSONSupport{constructor(g){super(g);this.maxValue=this.minValue=0}clone(){return new c({minValue:this.minValue,maxValue:this.maxValue})}};b.__decorate([d.property({type:Number,json:{write:!0}})],
a.AuthoringInfoClassBreakInfo.prototype,"minValue",void 0);b.__decorate([d.property({type:Number,json:{write:!0}})],a.AuthoringInfoClassBreakInfo.prototype,"maxValue",void 0);a.AuthoringInfoClassBreakInfo=c=b.__decorate([f.subclass("esri.renderer.support.AuthoringInfoClassBreakInfo")],a.AuthoringInfoClassBreakInfo);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});