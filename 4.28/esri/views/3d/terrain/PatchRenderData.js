// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../core/arrayUtils ../../../core/mathUtils ../../../core/maybe ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../geometry/support/aaBoundingBox ../../../geometry/support/aaBoundingRect ../../../geometry/support/Ellipsoid ../support/buffer/glUtil ./GeometryState ./ITile ./LayerClass ./PatchGeometry ./terrainUtils ./TextureFader ./Tile ./TileOverlayData ./tileUtils ../webgl-engine/lib/VertexArrayObject ../webgl-engine/shaders/TerrainTechnique ../../webgl/BufferObject ../../webgl/enums".split(" "),
function(P,da,U,ea,q,t,fa,ha,V,ia,ja,Q,S,ka,b,T,la,ma,na,oa,pa,W,X){function J(a,d){return d?.isLoaded||d===a?d:null}class qa{constructor(){this.geometry=new ka.PatchGeometry;this.geometryState=this.intersectionData=null;this._textureRef=new T.TextureFader(()=>this.tile.surface.textureFadeDuration);this.overlay=new ma;this._geometryStateChangedSinceLastUpdate=!0;this._wireframeChanged=this._clippingAreaChanged=this._samplerDataChanged=this._numVerticesPerSideChanged=this._hasGeometry=!1;this._dirtyCorners=
this._dirtyEdges=this._dirtyEdgeResolutions=15}get tile(){return this._tile}init(a){this.clear();this._tile=a;a=this.geometry;a.indices=null;a.vertexAttributes=null;fa.empty(a.boundingBox);a.indexCount=0;a.numVerticesPerSide=0;this.intersectionData=null;this.geometryState=new ja.GeometryState;this.localOrigin=null;this.overlay.clear()}clear(){this.releaseGeometry();this.releaseTexture();this._textureRef.clear();this.geometryState=this.intersectionData=this._tile=null}updateGeometryIfNeeded(a){if(!this._vao||
this._geometryStateChangedSinceLastUpdate||this._wireframeChanged||this._clippingAreaChanged||this._samplerDataChanged||this._numVerticesPerSideChanged||this._dirtyCorners||this._dirtyEdgeResolutions||this._dirtyEdges)this._updateGeometry(a),this._geometryStateChangedSinceLastUpdate=!1;if(b.enableTerrainInternalChecks&&this.tile.intersectsClippingArea)for(a=0;4>a;++a)b.internalAssert(this.geometry.outerEdges[a].count===this.geometryState.neighborData.edgeResolutions[a]+1)}_calculateEdgeResolution(a,
d){const g=this.tile,n=this.geometryState.numVerticesPerSide-1;if(!g.surface.isGlobal){var k=g.surface.extent;if(null!=k&&(0===a&&g.extent[3]>k[3]||1===a&&g.extent[2]>k[2]||2===a&&g.extent[1]<k[1]||3===a&&g.extent[0]<k[0]))return n}const e=g.level;k=b.neighborEdgeIndices[a];if(!d)return b.internalAssert(null==g.surface?.rootTiles||g.surface.updatingRootTiles||!g.shouldHaveNeighbor(k)),n;if(d.isLoaded)return k=d.renderData.geometryState,d=e-d.level,b.internalAssert(0<=d),0===d?Math.max(k.numVerticesPerSide-
1,n):Math.max(1,k.neighborData.edgeResolutions[(a+2)%4]/2**d);b.internalAssert(!d.isLeaf);let f=n;d.forAllSubtreeOnSide(b.oppositeEdge(k),c=>{if(c===g)return!0;if(c.isLoaded)return f=Math.max(f,2**(c.level-e)),!0;b.internalAssert(!c.isLeaf);return!1});return f}updateNeighborData(){const a=this.tile;if(a.intersectsClippingArea){var d=a.renderData.geometryState.neighborData,g=w=>(w.isLoaded||w.level===a.level)&&w?.intersectsClippingArea,n=d.edgePeerNeighbors,k=d.edgePeerNeighborSamplerVersions;for(var e=
0;4>e;++e){var f=a.findNeighborTile(b.neighborEdgeIndices[e],g),c=J(a,f),h=c?.renderData?.geometryState.samplerDataVersion??-1,l=J(a,n[e]);c=c!==l;l=k[e]!==h;n[e]=f;if(c||l)k[e]=h,this._markEdgeDirty(e);h=d.edgeResolutions[e];f=this._calculateEdgeResolution(e,f);b.internalAssert(U.isPowerOfTwo(f));b.internalAssert(1<=f);d.edgeResolutions[e]=f;h!==f&&this._markEdgeResolutionDirty(e)}k=d.cornerPeerNeighbors;for(e=0;4>e;++e){c=a.findNeighborTile(b.neighborCornerIndices[e],g);k[e]=c;f=J(a,n[e]);h=J(a,
n[(e+1)%4]);c=J(a,c);x[e]=c;x[(e+1)%4]=h;x[(e+2)%4]=a;x[(e+3)%4]=f;b.internalAssert(x.some(m=>m?.isLoaded||m===a));const w=x.reduce((m,y)=>Math.min(m,y?.level??Infinity),Infinity);x.forEach((m,y)=>{m&&m?.level>w&&(x[y]=null)});b.internalAssert(x.some(m=>m?.isLoaded||m===a));f=d.cornerNeighborData[e].cornerTiles;h=d.cornerNeighborData[e].cornerTileSamplerVersions;for(c=0;4>c;++c){l=x[c];const m=l?.renderData.geometryState.samplerDataVersion??-1,y=f[c]!==l,p=!y&&h[c]!==m;if(y||p)f[c]=l,h[c]=m,this._markCornerDirty(e)}b.internalAssert(f.some(m=>
m?.isLoaded||m===a))}b.enableTerrainInternalChecks&&b.internalAssert(this.geometryState.neighborData.edgeResolutions.every(w=>0<w));for(d=0;4>d;++d)x[d]=null}}_updateGeometry(a){if(this.tile.intersectsClippingArea){b.enableTerrainInternalChecks&&b.internalAssert(!this.tile.intersectsClippingArea||this.geometryState.neighborData.edgeResolutions.every(e=>0<e));this.intersectionData=null;var d=this.tile,g=this.geometry.vertexAttributes;g=!this._vao||!g||this._wireframeChanged||this._numVerticesPerSideChanged||
this._samplerDataChanged||this._clippingAreaChanged||this._dirtyEdgeResolutions;var n=!g&&(0!==this._dirtyEdges||0!==this._dirtyEdgeResolutions),k=!n&&0!==this._dirtyCorners;g?(this.releaseGeometry(),this._createGeometry(a)):n||k?d.updateEdgeElevations():k?d.updateCornerElevations():console.warn("Update for no reason?");this._samplerDataChanged=this._numVerticesPerSideChanged=!1;this._dirtyCorners=this._dirtyEdges=this._dirtyEdgeResolutions=0;this._wireframeChanged=this._clippingAreaChanged=!1}}get hasGeometry(){return this._hasGeometry}releaseGeometry(){this._hasGeometry=
!1;this.intersectionData=null;if(!this._vao)return!1;this._vao=ea.disposeMaybe(this._vao);this.geometry.release();return!0}ensureTexture(a,d,g){d=d?X.PixelFormat.RGBA:X.PixelFormat.RGB;null==this._texture||this._texture.descriptor.width===a&&this._texture.descriptor.pixelFormat===d||this.releaseTexture();null==this._texture&&(this._texture=g(),this.tile.setMemoryDirty());return this._texture}releaseTexture(){null!=this._texture&&(this._texture.release(),this._texture=null,this.tile.setMemoryDirty())}_markCornerDirty(a){this._dirtyCorners|=
1<<a}_markEdgeDirty(a){this._dirtyEdges|=1<<a;this._markCornerDirty((a+0)%4);this._markCornerDirty((a+3)%4)}_markEdgeResolutionDirty(a){this._dirtyEdgeResolutions|=1<<a;this._markEdgeDirty(a)}_markAllEdgesAndCornersDirty(){this._dirtyEdgeResolutions=this._dirtyEdges=this._dirtyCorners=15}updateGeometryState(){var a=this._getElevationInfo();const d=this.tile;var g=a.samplerData?d.getElevationVerticesPerSide(a.maxTileLevel):d.getDefaultVerticesPerSide();const n=Math.max(g,5);let k=d.clippingArea;if(!d.intersectsClippingArea||
d.isWithinClippingArea)k=null;g=this.geometryState;let e=!1;g.numVerticesPerSide!==n&&(this._numVerticesPerSideChanged=!0,g.numVerticesPerSide=n,g.samplerDataVersion++,e=!0);a.changed&&(this._samplerDataChanged=!0,g.samplerData=a.samplerData,g.samplerDataVersion++,e=!0);da.equals(g.clippingArea,k)||(this._clippingAreaChanged=!0,g.clippingArea=k,e=!0);a=d.surface.wireframe;g.wireframe!==a&&(this._wireframeChanged=!0,g.wireframe=a,e=!0);this._geometryStateChangedSinceLastUpdate||(this._geometryStateChangedSinceLastUpdate=
e);e&&this._markAllEdgesAndCornersDirty();this._hasGeometry=!0;return this._geometryStateChangedSinceLastUpdate}_createGeometry(a){this.tile.createGeometry();const d=this.geometry.vertexAttributes,g=this.geometry.indices,n=a.gl;this._vao=new oa.VertexArrayObject(a,pa.terrainVertexAttributeLocations,{geometry:ia.glLayout(d.layout)},{geometry:W.BufferObject.createVertex(a,n.STATIC_DRAW,d.buffer)},W.BufferObject.createIndex(a,n.STATIC_DRAW,g));this._hasGeometry=!0}get vao(){return this._vao}setTextureReference(a,
d=T.ActivationTime.Immediate){null!=a&&a.texture!==this._texture&&this.releaseTexture();this._textureRef.push(a,d)}get textureReference(){return this._textureRef.current}get nextTextureReference(){return this._textureRef.next}get textureFadeFactor(){return this._textureRef.fadeFactor}get textureIsFading(){return this._textureRef.isFading}_getElevationInfo(){var a=this.geometryState.samplerData;const d=this.tile.layerInfo[S.LayerClass.ELEVATION],g=d.length,n=Array(g);let k=0;var e=0;let f=!1;for(let l=
0;l<g;l++){var c=d[l];if(null!=c.upsampleInfo){c=c.upsampleInfo.tile;var h=c.layerInfo[S.LayerClass.ELEVATION][l].data;h=h&&h.samplerData;a&&a[k]===h||(f=!0);n[k++]=h;e=Math.max(e,c.lij[0])}else c.data&&(h=this.tile.surface.layerViewByIndex(l,S.LayerClass.ELEVATION),na.fallsWithinLayer(this.tile,h.layer,!1)&&(e=c.data,a&&a[k]===e.samplerData||(f=!0),n[k++]=e.samplerData,e=this.tile.level))}null!=a&&a.length!==k&&(f=!0);if(a=0<k)n.length=k;return{changed:f,samplerData:a?n:null,maxTileLevel:e}}get estimatedGeometryMemoryUsage(){return(this.geometry.indices?.byteLength??
0)+(this.geometry.vertexAttributes?.byteLength??0)+(this.intersectionData?.estimatedMemoryUsage??0)}get texture(){return this._texture}get test(){return{hasTexture:null!=this._texture}}checkGeometryWaterproofness(){if(b.enableTerrainInternalChecks){var a=this.tile;if(a.isLoaded&&a.intersectsClippingArea&&0!==a.level){var d=a.surface.extent;if(null==d||a.intersectsExtent(d)){var g=b.neighborEdgeIndices.map((f,c)=>null!=d?0>(2>c?-1:1)*(a.extent[3-c]-d[3-c]):!1),n=a.level;b.internalAssert(0===this._dirtyCorners);
b.internalAssert(0===this._dirtyEdges);b.internalAssert(0===this._dirtyEdgeResolutions);b.internalAssert(!this._numVerticesPerSideChanged);b.internalAssert(!this._samplerDataChanged);b.internalAssert(!this._clippingAreaChanged);b.internalAssert(!this._wireframeChanged);var k=b.neighborCornerIndices.map(f=>a.findNeighborCornerTileExact(f,c=>!c.intersectsClippingArea||c.isLoaded||c.level===a.level)??null).map(f=>f?.intersectsClippingArea?f:null),e=this.geometryState.neighborData;for(let f=0;4>f;++f){const c=
e.cornerPeerNeighbors[f],h=k[f];b.internalAssert(h===c,`Tile[${a.lij}].corner[${f}] out of date: cur=[${c?.lij}] exp=[${h?.lij}]`)}b.neighborEdgeIndices.forEach((f,c)=>{if(!g[c]){var h=a.findNeighborTile(f,K=>(K.level===n||K?.isLoaded)&&K?.intersectsClippingArea);if(h){b.internalAssert(h.isLoaded||h.level===a.level);b.internalAssert(h===this.geometryState.neighborData.edgePeerNeighbors[c]);var l=n-h.level;if(h.isLoaded){var w=h.renderData;b.internalAssert(la.isEdgeNeighbor(a,h,f));b.internalAssert(0<=
l);var m=2**l;if(0>l)b.internalAssert(!1);else{var y=a.renderData,p=y.geometry,u=p.outerEdges[c],v=p.numVerticesPerSide-1,r=w.geometry;if(r){p=this.geometryState.neighborData.edgePeerNeighbors[c];if(p?.isLoaded){var E=p.renderData;b.internalAssert(p===p);b.internalAssert(y.geometryState.neighborData.edgePeerNeighborSamplerVersions[c]===E.geometryState.samplerDataVersion);b.internalAssert(this.geometryState.neighborData.edgePeerNeighborSamplerVersions[c]===E.geometryState.samplerDataVersion)}var N=
(c+2)%4,B=r.outerEdges[N];p=u.count-1;E=B.count-1;b.internalAssert(p*m===E,`Tile[${a.lij}]:e${c},res=${p} edgeRes mismatch with`+` Neighbor[${h.lij}]:e${N},res=${E} (expected:${p*m})`);p=a.extent;E=f===Q.NeighborIndex.NORTH||f===Q.NeighborIndex.SOUTH;var C=B.count-1,F=C/2**l,D=u.count-1;if(1>F)b.internalAssert(1===D);else{b.internalAssert(F===D);b.internalAssert(U.isPowerOfTwo(F));r=r.numVerticesPerSide-1;b.internalAssert(0<l||F===Math.max(r,v));l=a.getNeighborEdgeStartVertexIndex(c,h);b.internalAssert(0<=
l&&l<m);m=l*F;b.internalAssert(0<=m&&m<=C-F);var G=0,H=m;u.getVertexPos(z,0);u.getVertexPos(A,u.count-1);m=q.distance(z,A);m=Math.max(1,1E-4*m);for(l=0;l<=F;++l){u.getVertexPos(z,G);B.getVertexPos(A,H);r=l/F;v=E?p[0]+r*(p[2]-p[0]):f===Q.NeighborIndex.WEST?p[0]:p[2];const K=E?f===Q.NeighborIndex.SOUTH?p[1]:p[3]:p[1]+r*(p[3]-p[1]),R=a.surface.extent;if(null==R||ha.containsXY(R,v,K)){r=q.dist(z,A);C=q.len(z)-V.earth.radius;D=q.len(A)-V.earth.radius;const Y=r<m;Y||(console.warn("Tile edge vertex position mismatch: between"+
` [${a.lij}].edge${c}[${G}/${u.count}] and`+` [${h.lij}].edge${N}[${H}/${B.count}]`),null!=R&&console.warn("  surface extent\x3d ",R," x,y\x3d",v,",",K),v=t.create(),q.subtract(v,y.localOrigin,w.localOrigin),0<q.len(v)&&console.warn(`   localOrigins: ${y.localOrigin} vs ${w.localOrigin}`+` d=${q.len(v)} [${v}]`),(()=>{const O=t.clone(z),Z=t.clone(A);a.updateEdgeElevations();h.updateEdgeElevations();u.getVertexPos(z,G);B.getVertexPos(A,H);const I=t.create();q.sub(I,z,O);0<q.len(I)&&console.warn(`  XXX Tile[${a.lij}] edge out of date: ${O} vs ${z} d=${q.len(I)} [${I}]`);
q.sub(I,A,Z);0<q.len(I)&&console.warn(`  XXX Neighbor[${h.lij}] edge out of date: ${Z} vs ${A} d=${q.len(I)} [${I}]`)})(),b.internalAssert(Y,"Mismatch in tile"+` [${a.lij}].edge[${c}][${G}/${u.count}] vs neighbor`+` [${h.lij}].edge[${N}][${H}/${B.count}]`+` ${b.v32s(z)} vs ${b.v32s(A)}  dist=${r} h(t|n|d)=${C}|${D}|${D-C}`));u.getNormal(L,G);B.getNormal(M,H);q.normalize(aa,L);q.normalize(ba,M);const ca=q.dot(aa,ba);v=.01>1-ca||a===h;if(!v){const O=t.create();q.sub(O,L,M);r=()=>`Mismatch in tile edge normal ${b.lij2s(a.lij)} (${G}/${u.count-
1}) edge ${c} vs neighbor ${b.lij2s(h.lij)}  (${H}/${B.count-1}) nedge ${N} :`+`${b.v32s(L)} vs ${b.v32s(M)}  dot = ${ca} : ${b.v32s(O)}`;console.warn("Mismatch in tile edge normal: ",r());a.updateEdgeElevations();h.updateEdgeElevations();C=t.create();D=t.create();u.getNormal(C,G);B.getNormal(D,H);q.equals(L,C)||console.warn("Missing update in tile normal: ",b.v32s(L)," \x3d\x3e ",b.v32s(C));q.equals(M,D)||console.warn("Missing update in neighbor normal: ",b.v32s(M)," \x3d\x3e ",b.v32s(D));b.internalAssert(v,
r())}}G+=1;H+=1}}}else b.internalAssert(!1)}}else b.internalAssert(!h.isLeaf),b.internalAssert(0===l)}else f=!a.surface.updatingRootTiles&&null!=a.surface.rootTiles&&0<a.surface.rootTiles.length&&a.shouldHaveNeighbor(f),b.internalAssert(!f)}})}}else b.internalAssert(a?.isLoaded)}}}const z=t.create(),A=t.create(),L=t.create(),M=t.create(),aa=t.create(),ba=t.create(),x=[null,null,null,null];Object.defineProperty(P,"ActivationTime",{enumerable:!0,get:()=>T.ActivationTime});P.PatchRenderData=qa;P.neighborTileIfLoadedOrSelf=
J;Object.defineProperty(P,Symbol.toStringTag,{value:"Module"})});