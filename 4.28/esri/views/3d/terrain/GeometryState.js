// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){class a{constructor(){this.cornerTiles=[null,null,null,null];this.cornerTileSamplerVersions=[-1,-1,-1,-1]}}class c{constructor(){this.cornerNeighborData=[new a,new a,new a,new a];this.edgeResolutions=[-1,-1,-1,-1];this.edgePeerNeighbors=[null,null,null,null];this.edgePeerNeighborSamplerVersions=[-1,-1,-1,-1];this.cornerPeerNeighbors=[null,null,null,null]}}class d{constructor(){this.numVerticesPerSide=0;this.clippingArea=this.samplerData=null;this.wireframe=!1;this.samplerDataVersion=
0;this.neighborData=new c}}b.CornerNeighborData=a;b.GeometryState=d;b.NeighborhoodData=c;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});