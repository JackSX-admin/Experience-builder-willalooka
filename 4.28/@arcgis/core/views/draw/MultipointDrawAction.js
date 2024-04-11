/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../geometry.js";import"../../chunks/Logger.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import"../../core/Error.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import o from"./DrawAction.js";import{V as e,a as i,C as r,D as n}from"../../chunks/DrawEvents.js";import{V as p}from"../../chunks/InputManager.js";import{s as m}from"../../chunks/keybindings.js";import{c as a}from"../../chunks/screenUtils2.js";import l from"../../geometry/Point.js";import"../../geometry/Extent.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../core/lang.js";import"../../chunks/metadata.js";import"../../config.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../chunks/time.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";import"../../geometry/support/webMercatorUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../core/Evented.js";import"../../chunks/screenUtils.js";import"../../layers/GraphicsLayer.js";import"../../chunks/GraphicsCollection.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../core/Collection.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/messages.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/Symbol3DAnchorPosition2D.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../layers/Layer.js";import"../../layers/mixins/BlendLayer.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/utils3.js";import"../../chunks/mat4.js";import"../../chunks/_commonjsHelpers.js";import"../../layers/mixins/ScaleRangeLayer.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/dehydratedPoint.js";import"../../chunks/ViewingMode.js";import"../../chunks/SnappingVisualizer2D.js";import"../../chunks/vec2.js";import"../../chunks/vec2f64.js";import"../../chunks/enums.js";import"../../chunks/Settings.js";import"../../chunks/SnappingContext.js";import"../../chunks/IntersectionSnappingHint.js";import"../../chunks/LineSnappingHint.js";import"../../chunks/PointSnappingHint.js";import"../../chunks/EditGeometryOperations.js";import"../../chunks/vec4.js";import"../../chunks/vec4f64.js";import"../../chunks/plane.js";import"../../chunks/vector.js";import"../../chunks/ByteSizeUnit.js";import"../../chunks/mat3f64.js";import"../../chunks/mat4f64.js";import"../../chunks/quatf64.js";import"../../chunks/mathUtils2.js";import"../../chunks/geometry2dUtils.js";import"../../chunks/SnappingOperation.js";import"../../chunks/Scheduler.js";import"../../core/signal.js";import"../../chunks/debugFlags.js";import"../../chunks/RenderState.js";import"../../chunks/Queue.js";import"../../chunks/PropertiesPool.js";let c=class extends o{constructor(t){super(t),this._popVertexOnPointerMove=!1,this._addVertexOnPointerUp=!1}initialize(){this._addViewHandles(),this._addUndoRedoHandles()}destroy(){this._removeViewHandles(),this._removeUndoRedoHandles(),this.emit("destroy")}undo(){super.undo(),this.notifyChange("vertices")}redo(){super.redo(),this.notifyChange("vertices")}complete(){this._completeDrawing()}_addViewHandles(){this._removeViewHandles(),this.addHandles([this.view.on("click",(t=>{t.stopPropagation()}),p.TOOL),this.view.on("pointer-down",(t=>{this._shouldHandlePointerEvent(t)&&(this._abortSnapping(),this._activePointerId=t.pointerId,this._addVertexOnPointerUp=!0,this._cursorScreenPoint=a(t),"touch"===t.pointerType&&this._updateCursor(t.native))}),p.TOOL),this.view.on("pointer-move",(t=>{this._popVertexOnPointerMove&&(this.undo(),this._popVertexOnPointerMove=!1),this._abortSnapping(),this._cursorScreenPoint=a(t),"touch"!==t.pointerType&&this._updateCursor(t.native)}),p.TOOL),this.view.on("pointer-drag",(t=>{this._shouldHandlePointerEvent(t)&&(this._abortSnapping(),this._addVertexOnPointerUp=!1)}),p.TOOL),this.view.on("pointer-up",(t=>{if(this._shouldHandlePointerEvent(t))if(this._abortSnapping(),this._activePointerId=null,this._addVertexOnPointerUp)this._vertexAddHandler(t);else{const s="touch"===t.pointerType;this._updateCursor(t.native,s)}}),p.TOOL),this.view.on("drag",["Shift"],(t=>{t.stopPropagation()}),p.TOOL),this.view.on("double-click",(t=>{t.stopPropagation(),this._drawCompleteHandler(t)}),p.TOOL),this.view.on("double-click",["Control"],(t=>{t.stopPropagation(),this._drawCompleteHandler(t)}),p.TOOL),this.view.on("key-down",(t=>{const{key:s,repeat:o}=t;s===m.vertexAdd&&!o&&this._cursorScreenPoint?(t.stopPropagation(),this._abortSnapping(),this._vertexAddHandler(t)):s!==m.complete||o?s!==m.undo||this.interactiveUndoDisabled||o?s!==m.redo||this.interactiveUndoDisabled||o?s!==m.pan||o||t.stopPropagation():(t.stopPropagation(),this.redo()):(t.stopPropagation(),this.undo()):(t.stopPropagation(),this._drawCompleteHandler(t))}),p.TOOL),this.view.on("key-up",(t=>{t.key===m.pan&&t.stopPropagation()}),p.TOOL)],this._viewHandlesKey)}_addUndoRedoHandles(){this._removeUndoRedoHandles(),this.addHandles([this._editGeometryOperations.on("vertex-remove",(t=>{if(this.notifyChange("vertices"),"undo"===t.operation){const s=this._nativeEventHistory.undoStack.pop();this._nativeEventHistory.redoStack.push(s);const o=[...this._committedVertices];null!=this._stagedVertex&&o.push(this._coordinateHelper.pointToArray(this._stagedVertex)),this.emit("undo",new e(this.view,s,t.vertices[0].index,o))}})),this._editGeometryOperations.on("vertex-add",(t=>{if(this.notifyChange("vertices"),"apply"===t.operation){const t=this._nativeEventHistory.undoStack[this._nativeEventHistory.undoStack.length],s=this._committedVertices.length-1,o=new i(this.view,t,s,this.vertices);this.emit("vertex-add",o),o.defaultPrevented&&(this._popVertexOnPointerMove=!0)}else if("redo"===t.operation){const s=this._nativeEventHistory.redoStack.pop();this._nativeEventHistory.undoStack.push(s);const o=[...this._committedVertices];null!=this._stagedVertex&&o.push(this._coordinateHelper.pointToArray(this._stagedVertex)),this.emit("redo",new i(this.view,s,t.vertices[0].index,o))}}))],this._undoRedoHandlesKey)}_removeViewHandles(){this.removeHandles(this._viewHandlesKey)}_removeUndoRedoHandles(){this.removeHandles(this._undoRedoHandlesKey)}_addVertex(t,s){const o=this._coordinateHelper.arrayToVector(t);if(this._isDuplicateOfLastVertex(o))return;this._popCursorVertex(),this._editGeometryOperations.appendVertex(o);const e=s||new Event("placeholder");this._nativeEventHistory.undoStack.push(e)}_updateCursor(t,s=!1){if(this._popCursorVertex(),!this._cursorScreenPoint)return;const o=this.getCoordsAndPointFromScreenPoint(this._cursorScreenPoint);null==o||s||this._pushCursorVertex(o.vertex,(()=>this.emit("cursor-update",new r(this.view,t,this._activeComponent.vertices.length,this.vertices,null!=this._stagedVertex?new l(this._stagedVertex):null))))}_completeDrawing(t){if(this._activePointerId=null,this._popCursorVertex(),this._abortSnapping(),null!=this._snappingManager&&this._snappingManager.doneSnapping(),this.vertices.length<1)return;const s=new n(t,this.vertices);this.emit("draw-complete",s),s.defaultPrevented||this._removeViewHandles()}};c=t([s("esri.views.draw.MultipointDrawAction")],c);export{c as MultipointDrawAction};