/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import r from"../core/Collection.js";import{clone as o}from"../core/lang.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import{e}from"../chunks/enumeration.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import m from"./LineSymbol3DLayer.js";import p from"./PathSymbol3DLayer.js";import l from"./Symbol3D.js";import"../core/Accessor.js";import"../chunks/typedArrayUtil.js";import"../core/Handles.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/time.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/jsonMap.js";import"../chunks/screenUtils.js";import"./LineStyleMarker3D.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../core/Clonable.js";import"../core/JSONSupport.js";import"../chunks/lineMarkers.js";import"./Symbol3DLayer.js";import"../chunks/writer.js";import"./patterns/LineStylePattern3D.js";import"../chunks/utils5.js";import"./patterns/StylePattern3D.js";import"../chunks/colors.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../chunks/Symbol3DMaterial.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../chunks/locale.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../chunks/persistableUrlUtils.js";import"./ExtrudeSymbol3DLayer.js";import"../chunks/utils4.js";import"./edges/Edges3D.js";import"./edges/SketchEdges3D.js";import"./edges/SolidEdges3D.js";import"./FillSymbol3DLayer.js";import"./IconSymbol3DLayer.js";import"../chunks/Symbol3DAnchorPosition2D.js";import"./ObjectSymbol3DLayer.js";import"./Symbol.js";import"./TextSymbol3DLayer.js";import"./Font.js";import"./WaterSymbol3DLayer.js";import"./support/StyleOrigin.js";import"../chunks/Thumbnail.js";var n;const c=r.ofType({base:null,key:"type",typeMap:{line:m,path:p}}),a=r.ofType({base:null,key:"type",typeMap:{line:m,path:p}});let j=n=class extends l{constructor(s){super(s),this.symbolLayers=new c,this.type="line-3d"}clone(){return new n({styleOrigin:o(this.styleOrigin),symbolLayers:o(this.symbolLayers),thumbnail:o(this.thumbnail)})}static fromSimpleLineSymbol(s){return new n({symbolLayers:new r([m.fromSimpleLineSymbol(s)])})}};s([t({type:c,json:{type:a}})],j.prototype,"symbolLayers",void 0),s([e({LineSymbol3D:"line-3d"},{readOnly:!0})],j.prototype,"type",void 0),j=n=s([i("esri.symbols.LineSymbol3D")],j);const u=j;export{u as default};