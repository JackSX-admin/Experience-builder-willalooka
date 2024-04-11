// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../intl ../../../core/Error ../../../core/lang ../../../core/Logger ../../../core/unitUtils ../../../geometry/Polygon ../../../rest/support/FullTextSearch ./geometryUtils ../../../intl/substitute ../../../intl/date".split(" "),function(D,fa,w,O,P,Q,R,S,H,T,U){function I(a,c){const {filter:b,withinViewEnabled:g}=a;a=c?.extent;return b?.geometry??(g&&a?a:void 0)}async function J(a){a&&await a.load()}function K(a,c){return(a=a?.indexes)&&c?.length?a.filter(b=>"FullText"===b.indexType).some(b=>
{const g=b.fields?.split(",").map(h=>h.trim().toLowerCase())||[];return c.every(h=>g.includes(h.toLowerCase()))}):!1}function F({text:a,searchFields:c}){return a.trim().split(" ").filter(b=>!!b.trim()).map(b=>new S({onFields:c,searchTerm:b,searchType:"prefix"}))}function L(a){return a?.fieldsIndex?.fields?.find(c=>"string"===c.type)?.name??""}function E(a,c){return a&&c?.length?c.every(b=>!!a.getField(b)):!1}function V(a,c,b){let g=null;({codedValues:a}=a);a&&a.some(h=>{var l=h.name;l=b?l:l.toLowerCase();
return(b?c:c.toLowerCase())===l?(g=h.code.toString(),!0):!1});return g}function B(a,c){return(c=c?.where)?`(${a}) AND (${c})`:a}function W({currentTerm:a,field:c,filter:b,exactMatch:g,url:h,type:l}){var d=c?.type;c=c?.name;if("string"===d||"date"===d||"global-id"===d){if(d=h=X.test(h??""))a:{for(d=0;d<a.length;d++)if(255<a.charCodeAt(d)){d=!0;break a}d=!1}d=d?"N":"";if(g&&"search"===l)return B(`${c} = ${d}'${a}'`,b);if(h)return B(`${c} LIKE ${d}${`'${a}%'`}`,b);g=`LOWER(${c})`;a=a.toLowerCase();return B(`${g} LIKE ${d}${`'${a}%'`}`,
b)}return"oid"===d||"small-integer"===d||"integer"===d||"single"===d||"double"===d?(a=Number(a),isNaN(a)?null:B(`${c} = ${a}`,b)):B(`${c} = ${a}`,b)}function M({searchTerm:a,layer:c,searchFields:b,filter:g,exactMatch:h,query:l,type:d}){const {definitionExpression:q,url:m}=c;let k="";!l.fullText&&a&&b&&b.forEach(e=>{var t=c.getField(e);e=((e="function"===typeof c.getFieldDomain&&c.getFieldDomain(e))&&"coded-value"===e.type?V(e,a,h):null)||a||null;null!==e&&(t=W({currentTerm:e,field:t,filter:g,exactMatch:h,
url:m,type:d}))&&(k+=k?` OR (${t})`:`(${t})`)});return q&&k?`(${q}) AND (${k})`:q||k}function Y(a,c){let b=null;({codedValues:a}=a);a&&a.length&&a.some(g=>g.code===c?(b=g.name,!0):!1);return b}function Z(a,c){return a[Object.keys(a).find(b=>b.toLowerCase()===c.toLowerCase())]}function N(a,c,b){const g=a.sourceLayer,{attributes:h}=a;a="function"===typeof g.getFieldDomain&&g.getFieldDomain(b);return c?T.substitute(c,h):b&&h?(c=g.getField(b),b=Z(h,b),null==b?"":a&&"coded-value"===a.type?Y(a,b)??"":"date"===
c?.type?U.formatDate(new Date(b)):"number"===typeof b?b.toString():"string"!==typeof b?"":b.trim()):""}function aa(a,c,b,g){return a.features.map(h=>{var l=h.sourceLayer,{attributes:d}=h;({objectIdField:l}=l);d=l?d[l]:null;return{text:N(h,c.suggestionTemplate,g),key:d,sourceIndex:b}})}function ba(a,c,b,g,h,l,d){return a.features.map(q=>{var m=l;const k=q.clone(),e=q.sourceLayer;var t=e?.objectIdField;t=t?q.attributes[t]:null;const x=N(q,b.searchTemplate,h);null!=m&&null!=e&&null!=e.minScale&&null!=
e.maxScale&&(e.minScale&&e.minScale<m?m=e.minScale:e.maxScale&&e.maxScale>m&&(m=e.maxScale));m=H.createExtentFromGeometry(k.geometry,c,m);m="number"===typeof d?H.scaleExtent(O.clone(m),c,d):m;q=q.clone();null!=m&&(q.geometry=R.fromExtent(m));return{extent:m,target:q,feature:k,key:t,name:x,sourceIndex:g}})}const X=/https?:\/\/services.*\.arcgis\.com/i,ca=/(?:\{([^}]+)\})/g,y=P.getLogger("esri.widgets.Search.support.layerSearchUtils");D.createFullTextSearchInfos=F;D.getResults=function(a,c){const {exactMatch:b=
!1,location:g,maxResults:h,spatialReference:l,source:d,sourceIndex:q,suggestResult:m,view:k}=a,{layer:e,filter:t,zoomScale:x}=d,z=k?.scale,v=I(d,k),u=c?.signal;return J(e).then(()=>{const f=e.popupTemplate;return f?f.getRequiredFields(e.fieldsIndex):null}).then(f=>{const {objectIdField:n,returnZ:G}=e,A=d.displayField||d.layer.displayField||L(d.layer);if(!e.getField(A))throw y.error("invalid-field: displayField is invalid."),new w("getResults():invalid-field","displayField is invalid.");f=f&&f.length?
f:[A];var p=d.outFields||f;f=p&&p.includes("*");p.includes(n)||f||p.push(n);e.floorInfo?.floorField&&p.push(e.floorInfo.floorField);if(!f&&!E(e,p))throw y.error("invalid-field: outField is invalid."),new w("getResults():invalid-field","outField is invalid.");f=e.createQuery();var {orderByFields:r}=d;r&&(f.orderByFields=r);l&&(f.outSpatialReference=l,r=1/Q.getMetersPerUnitForSR(l))&&(f.maxAllowableOffset=r);r="mesh"===e.geometryType||"multipatch"===e.geometryType;f.returnZ=e.capabilities?.data?.supportsZ&&
!r&&!1!==G;f.returnGeometry=!0;f.multipatchOption=r?"xyFootprint":null;p&&(f.outFields=p);if(g)f.geometry=g;else if(m.key)f.objectIds=[m.key];else{p=d.searchFields||[A];if(!E(e,p))throw y.error("invalid-field: search field is invalid."),new w("getResults():invalid-field","search field is invalid.");(e?.capabilities?.query?.supportsPagination??!1)&&(f.num=h);v&&(f.geometry=v);if(!m.text?.trim())return[];r=m.text;const {prefix:C="",suffix:da=""}=d,ea=`${C}${r}${da}`.replaceAll("'","''");(e?.capabilities?.query?.supportsFullTextSearch??
!1)&&K(e,p)&&!b&&r&&(f.fullText=F({text:r,searchFields:p}));p=M({searchTerm:ea,layer:e,searchFields:p,filter:t,exactMatch:b,query:f,type:"search"});f.where=p;if(!f.fullText&&!f.where)return[]}return e.queryFeatures(f,{signal:u}).then(C=>ba(C,k,d,q,A,z,x))})};D.getSuggestions=function(a,c){const {source:b,spatialReference:g,view:h,suggestTerm:l,maxSuggestions:d,sourceIndex:q,exactMatch:m}=a,{layer:k,filter:e}=b,t=c?.signal,x=I(b,h);return J(k).then(()=>{if(!(k?.capabilities?.query?.supportsPagination??
!1))return[];const z=b.displayField||b.layer.displayField||L(b.layer);var v=b.searchFields||[z];const u=[];b.suggestionTemplate?b.suggestionTemplate.replaceAll(ca,(r,C)=>{u.push(C);return r}):u.push(z);var f=u&&u.includes("*");u.includes(k.objectIdField)||f||u.push(k.objectIdField);var n=!!k.getField(z);f=f||E(k,u);const G=E(k,v);if(!n)throw y.error("invalid-field: displayField is invalid."),new w("getSuggestions():invalid-field","displayField is invalid.");if(!f)throw y.error("invalid-field: outField is invalid."),
new w("getSuggestions():invalid-field","outField is invalid.");if(!G)throw y.error("invalid-field: search field is invalid."),new w("getSuggestions():invalid-field","search field is invalid.");n=k.createQuery();({orderByFields:f}=b);f&&(n.orderByFields=f);n.outSpatialReference=g;n.returnGeometry=!1;n.num=d;n.outFields=u;x&&(n.geometry=x);if(!l.trim())return[];const {prefix:A="",suffix:p=""}=b;f=`${A}${l}${p}`.replaceAll("'","''");(k?.capabilities?.query?.supportsFullTextSearch??!1)&&K(k,v)&&!m&&l&&
(n.fullText=F({text:l,searchFields:v}));v=M({searchTerm:f,layer:k,searchFields:v,filter:e,exactMatch:m,query:n,type:"suggest"});n.where=v;return n.fullText||n.where?k.queryFeatures(n,{signal:t}).then(r=>aa(r,b,q,z)):[]})};Object.defineProperty(D,Symbol.toStringTag,{value:"Module"})});