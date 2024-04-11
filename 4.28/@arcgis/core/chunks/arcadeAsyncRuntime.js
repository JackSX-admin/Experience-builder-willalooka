/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{r as e,a as t,b as n,c as r,d as o,p as a,i,A as s,E as l,e as c,N as u,f as p,g as f,h as m,R as d,I as w,v as h,j as y,k as g,l as v,m as b,n as j,F as S,o as x,q as I,s as F,t as C,u as R,w as A,x as M,y as O,z as k,B as E,C as L,D as N,G as B,S as P,H as U,J as D}from"./arcadeUtils.js";import{registerFunctions as G}from"./geomasync.js";import T from"../geometry/Geometry.js";import K from"../geometry/SpatialReference.js";import"../geometry.js";import"./ensureType.js";import"./typedArrayUtil.js";import"./Logger.js";import"../config.js";import"../core/lang.js";import"../geometry/Extent.js";import"./tslib.es6.js";import"../core/accessorSupport/decorators/property.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"../core/Error.js";import"../core/accessorSupport/decorators/subclass.js";import"./tracking.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"./reader.js";import"./writer.js";import"./unitUtils.js";import"./jsonMap.js";import"./Ellipsoid.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"./ObjectPool.js";import"./ObservableBase.js";import"../core/scheduling.js";import"./nextTick.js";import"./PooledArray.js";import"../core/promiseUtils.js";import"./time.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"./TimeOnly.js";import"./UnknownTimeZone.js";import"./datetime.js";import"./locale.js";import"./ImmutableArray.js";import"../layers/support/Field.js";import"./enumeration.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./number2.js";import"./featureConversionUtils.js";import"./aaBoundingBox.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./OptimizedGeometry.js";import"../layers/support/FieldsIndex.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"./date.js";import"./timeZoneUtils.js";import"./messages.js";import"./arcadeOnDemand.js";import"./hash.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"./portalUtils.js";import"../geometry/geometryEngineAsync.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"./Queue.js";import"./SimpleObservable.js";import"../core/workers/RemoteClient.js";import"./utils19.js";function Z(e){return e&&"function"==typeof e.then}const q=100;async function V(e,t){const n=[];for(let r=0;r<t.arguments.length;r++)n.push(await H(e,t.arguments[r]));return n}async function z(e,t,n){return!0===t.preparsed?n(e,null,t.arguments):n(e,t,await V(e,t))}class W extends B{constructor(e,t){super(),this.definition=null,this.context=null,this.definition=e,this.context=t}createFunction(e){return(...t)=>{const n={spatialReference:this.context.spatialReference,console:this.context.console,lrucache:this.context.lrucache,timeZone:this.context.timeZone??null,exports:this.context.exports,libraryResolver:this.context.libraryResolver,interceptor:this.context.interceptor,localScope:{},depthCounter:{depth:e.depthCounter+1},globalScope:this.context.globalScope};if(n.depthCounter.depth>64)throw new s(e,l.MaximumCallDepth,null);return ue(this.definition,n,t,null)}}call(e,t){return Q(e,t,((n,r,o)=>{const a={spatialReference:e.spatialReference,services:e.services,console:e.console,libraryResolver:e.libraryResolver,exports:e.exports,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:{depth:e.depthCounter.depth+1}};if(a.depthCounter.depth>64)throw new s(e,l.MaximumCallDepth,t);return ue(this.definition,a,o,t)}))}marshalledCall(e,t,n,r){return r(e,t,(async(o,a,i)=>{const s={spatialReference:e.spatialReference,globalScope:n.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,console:e.console,abortSignal:e.abortSignal,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{}};return i=i.map((t=>!v(t)||t instanceof P?t:U(t,e,r))),U(await ue(this.definition,s,i,t),n,r)}))}}class _ extends D{constructor(e){super(e)}async global(e){const t=this.executingContext.globalScope[e.toLowerCase()];if(t.valueset||(t.value=await H(this.executingContext,t.node),t.valueset=!0),v(t.value)&&!(t.value instanceof P)){const e=new P;e.fn=t.value,e.parameterEvaluator=Q,e.context=this.executingContext,t.value=e}return t.value}setGlobal(e,t){if(v(t))throw new s(null,l.AssignModuleFunction,null);this.executingContext.globalScope[e.toLowerCase()]={value:t,valueset:!0,node:null}}hasGlobal(e){return void 0===this.executingContext.exports[e]&&(e=e.toLowerCase()),void 0!==this.executingContext.exports[e]}async loadModule(e){let t=e.spatialReference;null==t&&(t=new K({wkid:102100})),this.moduleScope=me({},e.customfunctions,e.timeZone),this.executingContext={spatialReference:t,services:e.services,libraryResolver:new m(e.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},abortSignal:void 0===e.abortSignal||null===e.abortSignal?{aborted:!1}:e.abortSignal,globalScope:this.moduleScope,console:e.console??de,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},await H(this.executingContext,this.source.syntax)}}async function Q(e,t,n){if(!0===t.preparsed){const r=n(e,null,t.arguments);return Z(r),r}const r=n(e,t,await V(e,t));return Z(r),r}async function H(e,t,n){if(t.breakpoint&&!0!==n){const n=t.breakpoint();return await n,H(e,t,!0)}try{switch(t?.type){case"VariableDeclarator":return await async function(e,t){let n=null;if(n=null===t.init?null:await H(e,t.init),null!==e.localScope){if(n===h&&(n=null),"Identifier"!==t.id.type)throw new s(e,l.InvalidIdentifier,t);const r=t.id.name.toLowerCase();return null!=e.localScope&&(e.localScope[r]={value:n,valueset:!0,node:t.init}),h}if("Identifier"!==t.id.type)throw new s(e,l.InvalidIdentifier,t);const r=t.id.name.toLowerCase();return n===h&&(n=null),e.globalScope[r]={value:n,valueset:!0,node:t.init},h}(e,t);case"ImportDeclaration":return await async function(e,t){const n=t.specifiers[0].local.name.toLowerCase(),r=e.libraryResolver.loadLibrary(n);let o=null;return e.libraryResolver._moduleSingletons?.has(r.uri)?o=e.libraryResolver._moduleSingletons.get(r.uri):(o=new _(r),await o.loadModule(e),e.libraryResolver._moduleSingletons?.set(r.uri,o)),e.globalScope[n]={value:o,valueset:!0,node:t},h}(e,t);case"ExportNamedDeclaration":return await async function(e,t){if(await H(e,t.declaration),"FunctionDeclaration"===t.declaration.type)e.exports[t.declaration.id.name.toLowerCase()]="function";else if("VariableDeclaration"===t.declaration.type)for(const n of t.declaration.declarations)e.exports[n.id.name.toLowerCase()]="variable";return h}(e,t);case"VariableDeclaration":return await oe(e,t,0);case"BlockStatement":case"Program":return await async function(e,t){return re(e,t,0)}(e,t);case"FunctionDeclaration":return await async function(e,t){const n=t.id.name.toLowerCase();return e.globalScope[n]={valueset:!0,node:null,value:new W(t,e)},h}(e,t);case"ReturnStatement":return await async function(e,t){if(null===t.argument)return new d(h);const n=await H(e,t.argument);return new d(n)}(e,t);case"IfStatement":return await async function(e,t){const n=await H(e,t.test);if(!0===n)return H(e,t.consequent);if(!1===n)return null!==t.alternate?H(e,t.alternate):h;throw new s(e,l.BooleanConditionRequired,t)}(e,t);case"ExpressionStatement":return await async function(e,t){if("AssignmentExpression"===t.expression.type)return H(e,t.expression);if("CallExpression"===t.expression.type){const n=await H(e,t.expression);return n===h?h:new w(n)}const n=await H(e,t.expression);return n===h?h:new w(n)}(e,t);case"UpdateExpression":return await async function(e,t){const n=t.argument;if("MemberExpression"===n.type){const r={t:null},o=await H(e,n.object);let a=null;r.t=o,!0===n.computed?a=await H(e,n.property):"Identifier"===n.property.type&&(a=n.property.name);const i=r.t;let c;if(x(i)){if(!R(a))throw new s(e,l.ArrayAccessorMustBeNumber,t);if(a<0&&(a=i.length+a),a<0||a>=i.length)throw new s(e,l.OutOfBounds,t);c=A(i[a]),i[a]="++"===t.operator?c+1:c-1}else if(i instanceof S){if(!1===j(a))throw new s(e,l.KeyAccessorMustBeString,t);if(!0!==i.hasField(a))throw new s(e,l.FieldNotFound,t,{key:a});c=A(i.field(a)),i.setField(a,"++"===t.operator?c+1:c-1)}else if(i instanceof _){if(!1===j(a))throw new s(e,l.ModuleAccessorMustBeString,t);if(!0!==i.hasGlobal(a))throw new s(e,l.ModuleExportNotFound,t);c=A(await i.global(a)),i.setGlobal(a,"++"===t.operator?c+1:c-1)}else{if(!F(i))throw I(i)?new s(e,l.Immutable,t):new s(e,l.InvalidParameter,t);if(!1===j(a))throw new s(e,l.KeyAccessorMustBeString,t);if(!0!==i.hasField(a))throw new s(e,l.FieldNotFound,t,{key:a});c=A(i.field(a)),i.setField(a,"++"===t.operator?c+1:c-1)}return!1===t.prefix?c:"++"===t.operator?c+1:c-1}const r="Identifier"===t.argument.type?t.argument.name.toLowerCase():"";if(!r)throw new s(e,l.InvalidIdentifier,t);let o;if(null!=e.localScope&&void 0!==e.localScope[r])return o=A(e.localScope[r].value),e.localScope[r]={value:"++"===t.operator?o+1:o-1,valueset:!0,node:t},!1===t.prefix?o:"++"===t.operator?o+1:o-1;if(void 0!==e.globalScope[r])return o=A(e.globalScope[r].value),e.globalScope[r]={value:"++"===t.operator?o+1:o-1,valueset:!0,node:t},!1===t.prefix?o:"++"===t.operator?o+1:o-1;throw new s(e,l.InvalidIdentifier,t)}(e,t);case"AssignmentExpression":return await async function(e,t){const n=t.left;if("MemberExpression"===n.type){const r=await H(e,n.object);let o=null;if(!0===n.computed)o=await H(e,n.property);else{if("Identifier"!==n.property.type)throw new s(e,l.InvalidIdentifier,t);o=n.property.name}const a=await H(e,t.right);if(x(r)){if(!R(o))throw new s(e,l.ArrayAccessorMustBeNumber,t);if(o<0&&(o=r.length+o),o<0||o>r.length)throw new s(e,l.OutOfBounds,t);if(o===r.length){if("="!==t.operator)throw new s(e,l.OutOfBounds,t);r[o]=ne(a,t.operator,r[o],t,e)}else r[o]=ne(a,t.operator,r[o],t,e)}else if(r instanceof S){if(!1===j(o))throw new s(e,l.KeyAccessorMustBeString,t);if(!0===r.hasField(o))r.setField(o,ne(a,t.operator,r.field(o),t,e));else{if("="!==t.operator)throw new s(e,l.FieldNotFound,t,{key:o});r.setField(o,ne(a,t.operator,null,t,e))}}else if(r instanceof _){if(!1===j(o))throw new s(e,l.KeyAccessorMustBeString,t);if(!0!==r.hasGlobal(o))throw new s(e,l.ModuleExportNotFound,t);r.setGlobal(o,ne(a,t.operator,await r.global(o),t,e))}else{if(!F(r))throw I(r)?new s(e,l.Immutable,t):new s(e,l.InvalidParameter,t);if(!1===j(o))throw new s(e,l.KeyAccessorMustBeString,t);if(!0===r.hasField(o))r.setField(o,ne(a,t.operator,r.field(o),t,e));else{if("="!==t.operator)throw new s(e,l.FieldNotFound,t,{key:o});r.setField(o,ne(a,t.operator,null,t,e))}}return h}const r=n.name.toLowerCase();if(null!=e.localScope&&void 0!==e.localScope[r]){const n=await H(e,t.right);return e.localScope[r]={value:ne(n,t.operator,e.localScope[r].value,t,e),valueset:!0,node:t.right},h}if(void 0!==e.globalScope[r]){const n=await H(e,t.right);return e.globalScope[r]={value:ne(n,t.operator,e.globalScope[r].value,t,e),valueset:!0,node:t.right},h}throw new s(e,l.InvalidIdentifier,t)}(e,t);case"ForStatement":return await function(e,t){try{return null!==t.init?H(e,t.init).then((()=>new Promise(((n,r)=>{Y(e,t,{testResult:!0,lastAction:h},(e=>{n(e)}),(e=>{r(e)}),0)})))):new Promise(((n,r)=>{Y(e,t,{testResult:!0,lastAction:h},(e=>{n(e)}),(e=>{r(e)}),0)}))}catch(e){return Promise.reject(e)}}(e,t);case"WhileStatement":return await async function(e,t){const n={testResult:!0,lastAction:h};if(n.testResult=await H(e,t.test),!1===n.testResult)return h;if(!0!==n.testResult)throw new s(e,l.BooleanConditionRequired,t);for(;!0===n.testResult&&(n.lastAction=await H(e,t.body),n.lastAction!==y)&&!(n.lastAction instanceof d);)if(n.testResult=await H(e,t.test),!0!==n.testResult&&!1!==n.testResult)throw new s(e,l.BooleanConditionRequired,t);return n.lastAction instanceof d?n.lastAction:h}(e,t);case"ForInStatement":return await async function(e,t){return new Promise(((n,r)=>{H(e,t.right).then((o=>{try{let a=null;a="VariableDeclaration"===t.left.type?H(e,t.left):Promise.resolve(),a.then((()=>{try{let a="";if("VariableDeclaration"===t.left.type){const e=t.left.declarations[0].id;"Identifier"===e.type&&(a=e.name)}else"Identifier"===t.left.type&&(a=t.left.name);if(!a)throw new s(e,l.InvalidIdentifier,t);a=a.toLowerCase();let i=null;if(null!=e.localScope&&void 0!==e.localScope[a]&&(i=e.localScope[a]),null===i&&void 0!==e.globalScope[a]&&(i=e.globalScope[a]),null===i)return void r(new s(e,l.InvalidIdentifier,t));x(o)||j(o)?ee(e,t,o,{reject:r,resolve:n},i):I(o)?function(e,t,n,r,o,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(h);$(e,t,n,o,0,a,(e=>{r.resolve(e)}),(e=>{r.reject(e)}),0)}catch(e){r.reject(e)}}(e,t,o,{reject:r,resolve:n},i):o instanceof S||F(o)?function(e,t,n,r,o){try{ee(e,t,n.keys(),r,o,"k")}catch(e){r.reject(e)}}(e,t,o,{reject:r,resolve:n},i):C(o)?te(o.iterator(e.abortSignal),e,t,o,i,(e=>{n(e)}),(e=>{r(e)}),0):ee(e,t,[],{reject:r,resolve:n},i)}catch(e){r(e)}}),r)}catch(e){r(e)}}),r)}))}(e,t);case"BreakStatement":return y;case"EmptyStatement":return h;case"ContinueStatement":return g;case"TemplateElement":return await async function(e,t){return t.value?t.value.cooked:""}(0,t);case"TemplateLiteral":return await async function(e,t){const n=[];for(let r=0;r<t.expressions.length;r++){const o=await H(e,t.expressions[r]);n[r]=O(o)}let r="",o=0;for(const a of t.quasis)r+=a.value?a.value.cooked:"",!1===a.tail&&(r+=n[o]?ie(n[o],e,t):"",o++);return r}(e,t);case"Identifier":return await ae(e,t);case"MemberExpression":return await async function(e,t){const n=await H(e,t.object);if(null===n)throw new s(e,l.MemberOfNull,t);if(!1===t.computed){if("Identifier"===t.property.type){if(n instanceof S||F(n))return n.field(t.property.name);if(n instanceof T)return M(n,t.property.name,e,t);if(n instanceof _){if(!n.hasGlobal(t.property.name))throw new s(e,l.InvalidIdentifier,t);return n.global(t.property.name)}throw new s(e,l.InvalidMemberAccessKey,t)}throw new s(e,l.InvalidMemberAccessKey,t)}let r=await H(e,t.property);if(n instanceof S||F(n)){if(j(r))return n.field(r);throw new s(e,l.InvalidMemberAccessKey,t)}if(n instanceof _){if(j(r))return n.global(r);throw new s(e,l.InvalidMemberAccessKey,t)}if(n instanceof T){if(j(r))return M(n,r,e,t);throw new s(e,l.InvalidMemberAccessKey,t)}if(x(n)){if(R(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length+r),r>=n.length||r<0)throw new s(e,l.OutOfBounds,t);return n[r]}throw new s(e,l.InvalidMemberAccessKey,t)}if(I(n)){if(R(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length()+r),r>=n.length()||r<0)throw new s(e,l.OutOfBounds,t);return n.get(r)}throw new s(e,l.InvalidMemberAccessKey,t)}if(j(n)){if(R(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length+r),r>=n.length||r<0)throw new s(e,l.OutOfBounds,t);return n[r]}throw new s(e,l.InvalidMemberAccessKey,t)}throw new s(e,l.InvalidMemberAccessKey,t)}(e,t);case"Literal":return t.value;case"CallExpression":return await async function(e,t){if("MemberExpression"===t.callee.type){const n=await H(e,t.callee.object);if(!(n instanceof _))throw new s(e,l.FunctionNotFound,t);const r=!1===t.callee.computed?t.callee.property.name:await H(e,t.callee.property);if(!n.hasGlobal(r))throw new s(e,l.FunctionNotFound,t);const o=await n.global(r);if(!v(o))throw new s(e,l.CallNonFunction,t);return o.call(e,t)}if("Identifier"!==t.callee.type)throw new s(e,l.FunctionNotFound,t);if(null!=e.localScope&&void 0!==e.localScope[t.callee.name.toLowerCase()]){const n=e.localScope[t.callee.name.toLowerCase()];if(v(n.value))return n.value.call(e,t);throw new s(e,l.CallNonFunction,t)}if(void 0!==e.globalScope[t.callee.name.toLowerCase()]){const n=e.globalScope[t.callee.name.toLowerCase()];if(v(n.value))return n.value.call(e,t);throw new s(e,l.CallNonFunction,t)}throw new s(e,l.FunctionNotFound,t)}(e,t);case"UnaryExpression":return await async function(e,t){const n=await H(e,t.argument);if(i(n)){if("!"===t.operator)return!n;if("-"===t.operator)return-1*A(n);if("+"===t.operator)return 1*A(n);if("~"===t.operator)return~A(n);throw new s(e,l.UnsupportedUnaryOperator,t)}if("-"===t.operator)return-1*A(n);if("+"===t.operator)return 1*A(n);if("~"===t.operator)return~A(n);throw new s(e,l.UnsupportedUnaryOperator,t)}(e,t);case"BinaryExpression":return await async function(e,t){const n=[];n[0]=await H(e,t.left),n[1]=await H(e,t.right);const r=n[0],o=n[1];switch(t.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return E(A(r),A(o),t.operator);case"==":return c(r,o);case"!=":return!c(r,o);case"<":case">":case"<=":case">=":return k(r,o,t.operator);case"+":return j(r)||j(o)?O(r)+O(o):A(r)+A(o);case"-":return A(r)-A(o);case"*":return A(r)*A(o);case"/":return A(r)/A(o);case"%":return A(r)%A(o);default:throw new s(e,l.UnsupportedOperator,t)}}(e,t);case"LogicalExpression":return await async function(e,t){const n=await H(e,t.left);let r=null;if(!i(n))throw new s(e,l.LogicalExpressionOnlyBoolean,t);switch(t.operator){case"||":if(!0===n)return n;if(r=await H(e,t.right),i(r))return r;throw new s(e,l.LogicExpressionOrAnd,t);case"&&":if(!1===n)return n;if(r=await H(e,t.right),i(r))return r;throw new s(e,l.LogicExpressionOrAnd,t);default:throw new s(e,l.LogicExpressionOrAnd,t)}}(e,t);case"ArrayExpression":return await async function(e,t){const n=[];for(let r=0;r<t.elements.length;r++)n.push(await H(e,t.elements[r]));for(let r=0;r<n.length;r++){if(v(n[r]))throw new s(e,l.NoFunctionInArray,t);n[r]===h&&(n[r]=null)}return n}(e,t);case"ObjectExpression":return await async function(e,t){const n=[];for(let r=0;r<t.properties.length;r++)n[r]=await H(e,t.properties[r]);const r={},o=new Map;for(let a=0;a<n.length;a++){const i=n[a];if(v(i.value))throw new s(e,l.NoFunctionInDictionary,t);if(!1===j(i.key))throw new s(e,l.KeyMustBeString,t);let c=i.key.toString();const u=c.toLowerCase();o.has(u)?c=o.get(u):o.set(u,c),i.value===h?r[c]=null:r[c]=i.value}const a=new S(r);return a.immutable=!1,a}(e,t);case"Property":return await async function(e,t){const n=await H(e,t.value);return"Identifier"===t.key.type?{key:t.key.name,value:n}:{key:await H(e,t.key),value:n}}(e,t);default:throw new s(e,l.Unrecognized,t)}}catch(n){throw b(e,t,n)}}async function J(e,t,n){const r=await H(e,t.body);return n.lastAction=r,n.lastAction===y||n.lastAction instanceof d?(n.testResult=!1,n):null!==t.update?(await H(e,t.update),n):n}function Y(e,t,n,r,o,a){try{(async function(e,t,n){if(null!==t.test){const r=await H(e,t.test);if(!0===e.abortSignal?.aborted)throw new s(e,l.Cancelled,t);if(n.testResult=r,!1===n.testResult)return n;if(!0!==n.testResult)throw new s(e,l.BooleanConditionRequired,t);return J(e,t,n)}return J(e,t,n)})(e,t,n).then((()=>{try{!0===n.testResult?++a>q?(a=0,setTimeout((()=>{Y(e,t,n,r,o,a)}),0)):Y(e,t,n,r,o,a):n.lastAction instanceof d?r(n.lastAction):r(h)}catch(e){o(e)}}),(e=>{o(e)}))}catch(e){o(e)}}function X(e,t,n,r,o,a,i,s,l,c){try{if(r<=a)return void s(h);o.value="k"===i?n[a]:a,H(e,t.body).then((u=>{try{u instanceof d?s(u):u===y?s(h):++c>q?(c=0,setTimeout((()=>{X(e,t,n,r,o,a+1,i,s,l,c)}),0)):X(e,t,n,r,o,a+1,i,s,l,c)}catch(e){l(e)}}),(e=>{l(e)}))}catch(e){l(e)}}function $(e,t,n,r,o,a,i,s,l){try{if(n.length()<=o)return void i(h);r.value="k"===a?n.get(o):o,H(e,t.body).then((c=>{c instanceof d?i(c):c===y?i(h):++l>q?(l=0,setTimeout((()=>{$(e,t,n,r,o+1,a,i,s,l)}),0)):$(e,t,n,r,o+1,a,i,s,l)}),(e=>{s(e)}))}catch(e){s(e)}}function ee(e,t,n,r,o,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(h);X(e,t,n,n.length,o,0,a,(e=>{r.resolve(e)}),(e=>{r.reject(e)}),0)}catch(e){r.reject(e)}}function te(e,t,n,r,o,a,i,s){try{e.next().then((l=>{try{if(null===l)a(h);else{const c=N.createFromGraphicLikeObject(l.geometry,l.attributes,r,t.timeZone);c._underlyingGraphic=l,o.value=c,H(t,n.body).then((l=>{try{l===y?a(h):l instanceof d?a(l):++s>q?(s=0,setTimeout((()=>{te(e,t,n,r,o,a,i,s)}),0)):te(e,t,n,r,o,a,i,s)}catch(e){i(e)}}),(e=>{i(e)}))}}catch(e){i(e)}}),(e=>{i(e)}))}catch(e){i(e)}}function ne(e,t,n,r,o){switch(t){case"=":return e===h?null:e;case"/=":return A(n)/A(e);case"*=":return A(n)*A(e);case"-=":return A(n)-A(e);case"+=":return j(n)||j(e)?O(n)+O(e):A(n)+A(e);case"%=":return A(n)%A(e);default:throw new s(o,l.UnsupportedOperator,r)}}async function re(e,t,n){if(n>=t.body.length)return h;const r=await H(e,t.body[n]);return r instanceof d||r===y||r===g||n===t.body.length-1?r:re(e,t,n+1)}async function oe(e,t,n){return n>=t.declarations.length||(await H(e,t.declarations[n]),n===t.declarations.length-1||await oe(e,t,n+1)),h}async function ae(e,t){const n=t.name.toLowerCase();if(null!=e.localScope&&void 0!==e.localScope[n]){const t=e.localScope[n];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=H(e,t.node);const r=await t.d;return t.value=r,t.valueset=!0,r}if(void 0!==e.globalScope[n]){const t=e.globalScope[n];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=H(e,t.node);const r=await t.d;return t.value=r,t.valueset=!0,r}throw new s(e,l.InvalidIdentifier,t)}function ie(e,t,n){if(v(e))throw new s(t,l.NoFunctionInTemplateLiteral,n);return e}const se={};async function le(e,t,n,r){const o=await H(e,t.arguments[n]);if(c(o,r))return H(e,t.arguments[n+1]);const a=t.arguments.length-n;return 1===a?H(e,t.arguments[n]):2===a?null:3===a?H(e,t.arguments[n+2]):le(e,t,n+2,r)}async function ce(e,t,n,r){if(!0===r)return H(e,t.arguments[n+1]);if(3==t.arguments.length-n)return H(e,t.arguments[n+2]);const o=await H(e,t.arguments[n+2]);if(!1===i(o))throw new s(e,l.ModuleExportNotFound,t.arguments[n+2]);return ce(e,t,n+2,o)}async function ue(e,t,n,r){const o=e.body;if(n.length!==e.params.length)throw new s(t,l.WrongNumberOfParameters,null);for(let r=0;r<n.length;r++){const o=e.params[r];"Identifier"===o.type&&null!=t.localScope&&(t.localScope[o.name.toLowerCase()]={d:null,value:n[r],valueset:!0,node:null})}const a=await H(t,o);if(a instanceof d)return a.value;if(a===y)throw new s(t,l.UnexpectedToken,r);if(a===g)throw new s(t,l.UnexpectedToken,r);return a instanceof w?a.value:a}e(se,z),t(se,z),n(se,z),r(se,z),o(se,z),G({functions:se,compiled:!1,signatures:null,evaluateIdentifier:null,mode:"async",standardFunction:z,standardFunctionAsync:Q}),se.iif=async function(e,t){a(null===t.arguments?[]:t.arguments,3,3,e,t);const n=await H(e,t.arguments[0]);if(!1===i(n))throw new s(e,l.BooleanConditionRequired,t);return H(e,n?t.arguments[1]:t.arguments[2])},se.decode=async function(e,t){if(t.arguments.length<2)throw new s(e,l.WrongNumberOfParameters,t);if(2===t.arguments.length)return H(e,t.arguments[1]);if((t.arguments.length-1)%2==0)throw new s(e,l.WrongNumberOfParameters,t);return le(e,t,1,await H(e,t.arguments[0]))},se.when=async function(e,t){if(t.arguments.length<3)throw new s(e,l.WrongNumberOfParameters,t);if(t.arguments.length%2==0)throw new s(e,l.WrongNumberOfParameters,t);const n=await H(e,t.arguments[0]);if(!1===i(n))throw new s(e,l.BooleanConditionRequired,t.arguments[0]);return ce(e,t,0,n)};const pe={fixSpatialReference:L,parseArguments:V,standardFunction:z,standardFunctionAsync:Q,evaluateIdentifier:ae};for(const e in se)se[e]={value:new u(se[e]),valueset:!0,node:null};const fe=function(){};function me(e,t,n){const r=new fe;null==e&&(e={}),null==t&&(t={});const o=new S({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});o.immutable=!1,r.textformatting={value:o,valueset:!0,node:null};for(const e in t)r[e]={value:new u(t[e]),native:!0,valueset:!0,node:null};for(const t in e)e[t]&&"esri.Graphic"===e[t].declaredClass?r[t]={value:N.createFromGraphic(e[t],n),valueset:!0,node:null}:r[t]={value:e[t],valueset:!0,node:null};return r}function de(e){console.log(e)}fe.prototype=se,fe.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},fe.prototype.pi={value:Math.PI,valueset:!0,node:null};const we=pe;function he(e){const t={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:z,standardFunctionAsync:Q,evaluateIdentifier:ae};for(let n=0;n<e.length;n++)e[n].registerFunctions(t);for(const e in t.functions)se[e]={value:new u(t.functions[e]),valueset:!0,node:null},fe.prototype[e]=se[e];for(let e=0;e<t.signatures.length;e++)p(t.signatures[e],"async")}async function ye(e,t){let n=t.spatialReference;null==n&&(n=new K({wkid:102100}));let r=null;e.usesModules&&(r=new m(new Map,e.loadedModules));const o=me(t.vars,t.customfunctions,t.timeZone),a={spatialReference:n,services:t.services,exports:{},libraryResolver:r,abortSignal:void 0===t.abortSignal||null===t.abortSignal?{aborted:!1}:t.abortSignal,globalScope:o,console:t.console??de,timeZone:t.timeZone??null,lrucache:t.lrucache,interceptor:t.interceptor,localScope:null,depthCounter:{depth:1}};let i=await H(a,e);if(i instanceof d&&(i=i.value),i instanceof w&&(i=i.value),i===h&&(i=null),i===y)throw new s(a,l.IllegalResult,null);if(i===g)throw new s(a,l.IllegalResult,null);if(v(i))throw new s(a,l.IllegalResult,null);return i}he([f]);export{ye as executeScript,he as extend,we as functionHelper};