// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../config ../kernel ../core/lang ../core/urlUtils ../support/apiKeyUtils".split(" "),function(f,h,l,m,n,p){function k(b,c,q){const e={};for(const d in b)if("declaredClass"!==d){var a=b[d];if(null!=a&&"function"!==typeof a)if(Array.isArray(a)){e[d]=[];for(let g=0;g<a.length;g++)e[d][g]=k(a[g])}else"object"===typeof a?a.toJSON?(a=a.toJSON(q?.[d]),e[d]=c?a:JSON.stringify(a)):e[d]=c?a:JSON.stringify(a):e[d]=a}return e}f.asValidOptions=function(b,c){return c?{...c,query:{...(b??{}),...c.query}}:
{query:b}};f.encode=k;f.getToken=function(b,c){return b?p.supportsApiKey(b)&&(c||h.apiKey)?c||h.apiKey:l.id?.findCredential(b)?.token:null};f.parseUrl=function(b){return"string"===typeof b?n.urlToObject(b):m.clone(b)};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});