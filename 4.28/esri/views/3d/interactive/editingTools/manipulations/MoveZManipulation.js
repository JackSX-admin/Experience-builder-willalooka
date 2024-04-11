// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../../Color ../../../../../core/colorUtils ../../../../../core/Evented ../../../../../core/mathUtils ../../../../../core/maybe ../../../../../core/reactiveUtils ../../../../../chunks/mat4 ../../../../../chunks/mat4f64 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../Manipulator3D ../../manipulatorUtils ../../RenderObject ../dragEventPipeline3D ../ManipulatorType ../settings ./config ./Manipulation ./moveUtils ../../../webgl-engine/lib/GeometryUtil ../../../webgl-engine/lib/Material ../../../../interactive/dragEventPipeline ../../../../interactive/interfaces".split(" "),
function(v,D,E,F,G,H,I,w,J,l,p,K,t,m,L,x,M,u,N,O,y,z,A,n){class P extends N.Manipulation{constructor(a){super();this._radius=u.discRadius;this.events=new F;this._tool=a.tool;this._view=a.view;const e=new M.Settings({getTheme:()=>this._view.effectiveTheme});this._settings=e;null!=a.radius&&(this._radius=a.radius);a=this._view.effectiveTheme.accentColor;this._materials={materialUnfocused:t.createManipulatorMaterial(this._createDarkenedColor(a,1,.25),z.RenderOccludedFlag.Occlude),materialFocused:t.createManipulatorMaterial(this._createDarkenedColor(a,
1,0),z.RenderOccludedFlag.Occlude),materialOccludedUnfocused:t.createManipulatorMaterial(this._createDarkenedColor(a,.7,0),e.zManipulator.renderOccluded),materialOccludedFocused:t.createManipulatorMaterial(this._createDarkenedColor(a,.85,0),e.zManipulator.renderOccluded)};this._themeHandle=I.watch(()=>this._view.effectiveTheme.accentColor,b=>{const c=this._createDarkenedColor(b,1,.25),d=this._createDarkenedColor(b,1,0),k=this._createDarkenedColor(b,.7,0);b=this._createDarkenedColor(b,.85,0);const {materialUnfocused:h,
materialFocused:f,materialOccludedUnfocused:g,materialOccludedFocused:q}=this._materials;h.setParameters({color:c});f.setParameters({color:d});g.setParameters({color:k});q.setParameters({color:b})});this._createManipulator();this.forEachManipulator(b=>this._tool.manipulators.add(b))}destroy(){this._themeHandle=H.removeMaybe(this._themeHandle);this._manipulator.applyObjectTransform=Q;this.forEachManipulator(a=>{this._tool.manipulators.remove(a);a.destroy()})}forEachManipulator(a){a(this._manipulator,
x.ManipulatorType.TRANSLATE_Z)}createGraphicDragPipeline(a,e,b){const c=e.graphic.geometry.spatialReference;return O.createGraphicMoveDragPipeline(e.graphic,b,d=>this.createDragPipeline((k,h,f,g,q)=>{({steps:h,cancel:f}=a(k,h,f,g,q));return d(k,h,f)},c),this._view.state.viewingMode)}createDragPipeline(a,e){const b=this._view;return A.createManipulatorDragEventPipeline(this._manipulator,(c,d,k,h,f)=>{d=d.next(g=>({...g,manipulatorType:x.ManipulatorType.TRANSLATE_Z})).next(L.screenToZConstrained(b,
c.renderLocation,e)).next(A.addScreenDelta());a(c,d,k,h,f)})}get radius(){return this._radius}set radius(a){a!==this._radius&&(this._radius=a,this._updateManipulator())}_updateManipulator(){var a=this._settings,e=this._radius/u.discRadius,b=a.zManipulator.height*e,c=a.zManipulator.coneHeight*e;const d=a.zManipulator.coneWidth*e;a=a.zManipulator.width*e;const k=[p.fromValues(0,0,0),p.fromValues(0,0,b)];e=[p.fromValues(0,0,0),p.fromValues(0,0,b+c)];const h=J.create();w.translate(h,h,[0,0,b]);w.rotateX(h,
h,Math.PI/2);const {materialUnfocused:f,materialFocused:g,materialOccludedUnfocused:q,materialOccludedFocused:B}=this._materials;b=y.createTubeGeometry(f,k,a/2,16,!1);c=y.createConeGeometry(f,c,d/2,16,!1);c.transformation=h;this._manipulator.renderObjects=[new m.RenderObject(c,n.ManipulatorStateFlags.Unfocused),new m.RenderObject(b,n.ManipulatorStateFlags.Unfocused),new m.RenderObject(c.instantiate({material:g}),n.ManipulatorStateFlags.Focused),new m.RenderObject(b.instantiate({material:g}),n.ManipulatorStateFlags.Focused),
new m.RenderObject(c.instantiate({material:q}),n.ManipulatorStateFlags.Unfocused),new m.RenderObject(b.instantiate({material:q}),n.ManipulatorStateFlags.Unfocused),new m.RenderObject(c.instantiate({material:B}),n.ManipulatorStateFlags.Focused),new m.RenderObject(b.instantiate({material:B}),n.ManipulatorStateFlags.Focused)];this._manipulator.radius=a/2+2;this._manipulator.collisionType={type:"line",paths:[e]}}_createManipulator(){const a=this._view,e=new K.Manipulator3D({view:a,autoScaleRenderObjects:!1,
worldSized:!1,selectable:!1,cursor:"ns-resize",elevationInfo:this.elevationInfo,worldOriented:!0,collisionPriority:1.6});e.applyObjectTransform=b=>{var c=a.state.camera,d=C;a.renderCoordsHelper.toRenderCoords(this._manipulator.elevationAlignedLocation,d);const k=l.dist(c.eye,d),h=c.computeRenderPixelSizeAtDist(k);var f=l.subtract(r,d,c.eye);l.normalize(f,f);var g=R;a.renderCoordsHelper.worldUpAtPosition(C,g);d=Math.abs(l.dot(f,g));f=l.cross(r,f,g);g=l.cross(r,f,g);d=G.clamp(d,.01,1);c=1-Math.sqrt(1-
d*d)/d/c.fullWidth;d=this._radius/u.discRadius*this._settings.zManipulator.width;l.scale(g,l.normalize(g,g),(1/c-1)*k+h*d);b[12]-=r[0];b[13]-=r[1];b[14]-=r[2]};this._manipulator=e;this._updateManipulator()}_createDarkenedColor(a,e,b){a=E.darken(a,b);a.a*=e;return D.toUnitRGBA(a)}get test(){return{manipulator:this._manipulator}}}const C=p.create(),r=p.create(),R=p.create(),Q=()=>{};v.MoveZManipulation=P;Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})});