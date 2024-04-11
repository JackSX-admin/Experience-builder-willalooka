// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../core/floatRGBA","../../geometry/support/jsonUtils","./Rect","../../views/2d/engine/webgl/definitions"],function(A,F,G,H,C){function D(b){if(!b)return null;switch(b.type){case "CIMPointSymbol":b=b.symbolLayers;if(!b||1!==b.length)break;return D(b[0]);case "CIMVectorMarker":b=b.markerGraphics;if(!b||1!==b.length)break;var a=b[0];if(!a)break;b=a.geometry;if(!b)break;a=a.symbol;if(!a||"CIMPolygonSymbol"!==a.type&&"CIMLineSymbol"!==a.type||a.symbolLayers?.some(c=>!!c.effects))break;
return{geom:b,asFill:"CIMPolygonSymbol"===a.type};case "sdf":return{geom:b.geom,asFill:b.asFill}}return null}function E(b){let a=Infinity,c=-Infinity,f=Infinity,e=-Infinity;for(const d of b)for(const k of d)k[0]<a&&(a=k[0]),k[0]>c&&(c=k[0]),k[1]<f&&(f=k[1]),k[1]>e&&(e=k[1]);return[a,f,c,e]}A.buildSDF=function(b){var a=b.geom;var c=a?a.rings?a.rings:a.paths?a.paths:void 0!==a.xmin&&void 0!==a.ymin&&void 0!==a.xmax&&void 0!==a.ymax?[[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,
a.ymin]]]:null:null;a=Infinity;var f=-Infinity;var e=Infinity;var d=-Infinity;for(var k of c)for(var n of k)n[0]<a&&(a=n[0]),n[0]>f&&(f=n[0]),n[1]<e&&(e=n[1]),n[1]>d&&(d=n[1]);e=new H(a,e,f-a,d-e);k=C.spritePadding;a=Math.floor(.5*(64-k));d=(128-2*(a+k))/Math.max(e.width,e.height);k=Math.round(e.width*d)+2*a;n=Math.round(e.height*d)+2*a;f=[];for(var p of c)if(p&&1<p.length){c=[];for(var m of p){let [u,w]=m;u-=e.x;w-=e.y;u*=d;w*=d;u+=a-.5;w+=a-.5;b.asFill?c.push([u,w]):c.push([Math.round(u),Math.round(w)])}if(b.asFill){var g=
c.length-1;c[0][0]===c[g][0]&&c[0][1]===c[g][1]||c.push(c[0])}f.push(c)}m=k*n;p=Array(m);c=a*a+1;for(e=0;e<m;++e)p[e]=c;for(var h of f)for(c=h.length,e=1;e<c;++e){d=h[e-1];g=h[e];var v=void 0,q=void 0;d[0]<g[0]?(v=d[0],q=g[0]):(v=g[0],q=d[0]);var l=void 0,r=void 0;d[1]<g[1]?(l=d[1],r=g[1]):(l=g[1],r=d[1]);var x=Math.floor(v)-a;q=Math.floor(q)+a;l=Math.floor(l)-a;r=Math.floor(r)+a;0>x&&(x=0);q>k&&(q=k);0>l&&(l=0);r>n&&(r=n);v=g[0]-d[0];const u=g[1]-d[1],w=v*v+u*u;for(;x<q;x++)for(let z=l;z<r;z++){var t=
(x-d[0])*v+(z-d[1])*u,y=void 0;0>t?(y=d[0],t=d[1]):t>w?(y=g[0],t=g[1]):(t/=w,y=d[0]+t*v,t=d[1]+t*u);y=(x-y)*(x-y)+(z-t)*(z-t);t=(n-z-1)*k+x;y<p[t]&&(p[t]=y)}}for(h=0;h<m;++h)p[h]=Math.sqrt(p[h]);if(b.asFill)for(var B of f)for(b=B.length,h=1;h<b;++h)for(f=B[h-1],m=B[h],f[0]<m[0]?(c=f[0],e=m[0]):(c=m[0],e=f[0]),f[1]<m[1]?(g=f[1],d=m[1]):(g=m[1],d=f[1]),c=Math.floor(c),e=Math.floor(e)+1,g=Math.floor(g),d=Math.floor(d)+1,c<a&&(c=a),e>k-a&&(e=k-a),g<a&&(g=a),d>n-a&&(d=n-a);g<d;++g)if(f[1]>g!==m[1]>g){q=
(n-g-1)*k;for(l=c;l<e;++l)l<(m[0]-f[0])*(g-f[1])/(m[1]-f[1])+f[0]&&(p[q+l]=-p[q+l]);for(l=a;l<c;++l)p[q+l]=-p[q+l]}B=2*a;a=p.length;b=new Uint8Array(4*a);for(h=0;h<a;++h)F.packFloatRGBA(.5-p[h]/B,b,4*h);return[b,k,n]};A.getExtent=function(b){return b?b.rings?E(b.rings):b.paths?E(b.paths):G.isExtent(b)?[b.xmin,b.ymin,b.xmax,b.ymax]:null:null};A.getSDFInfo=D;A.getSDFMetrics=function(b,a,c,f,e){const [d,k,n,p]=b;if(n<d||p<k)return[0,0,0];var m=n-d,g=p-k,h=C.spritePadding;b=Math.floor(.5*(64-h));h=(128-
2*(b+h))/Math.max(m,g);const v=Math.round(m*h),q=Math.round(g*h)+2*b;g=1;a&&(g=q/h/(a.ymax-a.ymin));let l=0,r=0;m=1;f&&(e?a&&c&&0<a.ymax-a.ymin&&(m=(a.xmax-a.xmin)/(a.ymax-a.ymin),l=f.x/(c*m),r=f.y/c):(l=f.x,r=f.y));a&&(l=.5*(a.xmax+a.xmin)+l*(a.xmax-a.xmin),r=.5*(a.ymax+a.ymin)+r*(a.ymax-a.ymin));l=(l-d)*h+b;r=(r-k)*h+b;a=l/(v+2*b)-.5;f=r/q-.5;e&&c&&(a*=c*m,f*=c);return[g,a,f]};Object.defineProperty(A,Symbol.toStringTag,{value:"Module"})});