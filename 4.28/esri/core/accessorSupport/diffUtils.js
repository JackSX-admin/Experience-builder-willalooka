// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../Accessor","../Collection","./utils"],function(g,r,t,x){function u(a){return a instanceof t?Object.keys(a.items):a instanceof r?x.getProperties(a).keys():a?Object.keys(a):[]}function p(a,b){return a instanceof t?a.items[b]:a[b]}function y(a,b){return Array.isArray(a)&&Array.isArray(b)?a.length!==b.length:!1}function h(a){return a?a.declaredClass:null}function v(a,b){const e=a.diff;if(e&&"function"===typeof e)return e(a,b);const k=u(a),l=u(b);if(0!==k.length||0!==l.length){if(!k.length||
!l.length||y(a,b))return{type:"complete",oldValue:a,newValue:b};var m=l.filter(d=>!k.includes(d)),c=k.filter(d=>!l.includes(d));c=k.filter(d=>l.includes(d)&&p(a,d)!==p(b,d)).concat(m,c).sort();if((m=h(a))&&z.has(m)&&c.length)return{type:"complete",oldValue:a,newValue:b};var q;m=a instanceof r&&b instanceof r;for(const d of c){c=p(a,d);const f=p(b,d);if((m||"function"!==typeof c&&"function"!==typeof f)&&c!==f&&(null!=c||null!=f)){if(e&&e[d]&&"function"===typeof e[d])c=e[d]?.(c,f);else if(c instanceof
Date&&f instanceof Date){if(c.getTime()===f.getTime())continue;c={type:"complete",oldValue:c,newValue:f}}else c="object"===typeof c&&"object"===typeof f&&h(c)===h(f)?v(c,f):{type:"complete",oldValue:c,newValue:f};null!=c&&(null!=q?q.diff[d]=c:q={type:"partial",diff:{[d]:c}})}}return q}}function w(a,b){if(null==a)return!1;b=b.split(".");for(const e of b){if("complete"===a.type)break;if("partial"===a.type){if(a=a.diff[e],!a)return!1}else return!1}return!0}function n(a){if(null==a)return!0;switch(a.type){case "complete":return!1;
case "collection":for(const b of a.added)if(!n(b))return!1;for(const b of a.removed)if(!n(b))return!1;for(const b of a.changed)if(!n(b))return!1;return!0;case "partial":for(const b in a.diff)if(!n(a.diff[b]))return!1;return!0}}const z=new Set(["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"]);g.diff=function(a,b){if("function"!==typeof a&&"function"!==typeof b&&(null!=a||null!=b))return null==a||null==b||"object"===
typeof a&&"object"===typeof b&&h(a)!==h(b)?{type:"complete",oldValue:a,newValue:b}:v(a,b)};g.hasDiff=w;g.hasDiffAny=function(a,b){for(const e of b)if(w(a,e))return!0;return!1};g.isEmpty=n;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});