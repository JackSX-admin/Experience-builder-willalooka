/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{clone as o}from"../../core/lang.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{e as r}from"../../chunks/enumeration.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import i from"./PointCloudFilter.js";import"../../chunks/typedArrayUtil.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/jsonMap.js";import"../../chunks/tracking.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../chunks/time.js";var p;let c=p=class extends i{constructor(s){super(s),this.mode="exclude",this.type="value",this.values=[]}clone(){return new p({field:this.field,mode:this.mode,values:o(this.values)})}};s([e({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"mode",void 0),s([r({pointCloudValueFilter:"value"})],c.prototype,"type",void 0),s([e({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"values",void 0),c=p=s([t("esri.layers.pointCloudFilters.PointCloudValueFilter")],c);const u=c;export{u as default};