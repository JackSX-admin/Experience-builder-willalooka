// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports"],function(e){class f{constructor(b,a,d,c){this.view=b;this.native=a;this.vertexIndex=d;this.vertices=c;this.defaultPrevented=!1;this.type="vertex-add"}preventDefault(){this.defaultPrevented=!0}}class g{constructor(b,a,d,c){this.view=b;this.native=a;this.vertexIndex=d;this.vertices=c;this.defaultPrevented=!1;this.type="vertex-update"}preventDefault(){this.defaultPrevented=!0}}class h{constructor(b,a,d,c){this.view=b;this.native=a;this.vertexIndex=d;this.vertices=c;this.defaultPrevented=
!1;this.type="vertex-remove"}preventDefault(){this.defaultPrevented=!0}}class k{constructor(b,a,d,c,l=null){this.view=b;this.native=a;this.vertexIndex=d;this.vertices=c;this.mapPoint=l;this.coordinates=null;this.defaultPrevented=!1;this.type="cursor-update";this.coordinates=1===c.length?c[0]:null}preventDefault(){this.defaultPrevented=!0}}class m{constructor(b,a){this.native=b;this.vertices=a;this.coordinates=null;this.defaultPrevented=!1;this.type="draw-complete";this.coordinates=1===a.length?a[0]:
null}preventDefault(){this.defaultPrevented=!0}}e.CursorUpdateEvent=k;e.DrawCompleteEvent=m;e.VertexAddEvent=f;e.VertexRemoveEvent=h;e.VertexUpdateEvent=g;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});