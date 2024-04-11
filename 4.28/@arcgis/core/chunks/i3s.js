/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{g as e}from"./_commonjsHelpers.js";function r(e,r){for(var t=0;t<r.length;t++){const n=r[t];if("string"!=typeof n&&!Array.isArray(n))for(const r in n)if("default"!==r&&!(r in e)){const t=Object.getOwnPropertyDescriptor(n,r);t&&Object.defineProperty(e,r,t.get?t:{enumerable:!0,get:()=>n[r]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var t,n,i,o={exports:{}};t=o,n="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,i=function(e={}){var r,t,i=void 0!==e?e:{};i.ready=new Promise(((e,n)=>{r=e,t=n}));var o=Object.assign({},i),a="object"==typeof window,u="function"==typeof importScripts;"object"==typeof process&&"object"==typeof process.versions&&process.versions.node;var c,s="";(a||u)&&(u?s=self.location.href:"undefined"!=typeof document&&document.currentScript&&(s=document.currentScript.src),n&&(s=n),s=0!==s.indexOf("blob:")?s.substr(0,s.replace(/[?#].*/,"").lastIndexOf("/")+1):"",u&&(c=e=>{var r=new XMLHttpRequest;return r.open("GET",e,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}));var f,l,d=i.print||console.log.bind(console),p=i.printErr||console.warn.bind(console);Object.assign(i,o),o=null,i.arguments&&i.arguments,i.thisProgram&&i.thisProgram,i.quit&&i.quit,i.wasmBinary&&(f=i.wasmBinary),i.noExitRuntime,"object"!=typeof WebAssembly&&S("no native wasm support detected");var v,h,m,g,y,_,w,b,A,T=!1;function C(){var e=l.buffer;i.HEAP8=v=new Int8Array(e),i.HEAP16=m=new Int16Array(e),i.HEAP32=y=new Int32Array(e),i.HEAPU8=h=new Uint8Array(e),i.HEAPU16=g=new Uint16Array(e),i.HEAPU32=_=new Uint32Array(e),i.HEAPF32=w=new Float32Array(e),i.HEAPF64=b=new Float64Array(e)}var P,E,W=[],j=[],k=[],F=0,R=null;function S(e){i.onAbort&&i.onAbort(e),p(e="Aborted("+e+")"),T=!0,e+=". Build with -sASSERTIONS for more info.";var r=new WebAssembly.RuntimeError(e);throw t(r),r}function x(e){return e.startsWith("data:application/octet-stream;base64,")}function U(e){try{if(e==P&&f)return new Uint8Array(f);if(c)return c(e);throw"both async and sync fetching of the wasm failed"}catch(e){S(e)}}function I(e,r,t){return function(e){return f||!a&&!u||"function"!=typeof fetch?Promise.resolve().then((()=>U(e))):fetch(e,{credentials:"same-origin"}).then((r=>{if(!r.ok)throw"failed to load wasm binary file at '"+e+"'";return r.arrayBuffer()})).catch((()=>U(e)))}(e).then((e=>WebAssembly.instantiate(e,r))).then((e=>e)).then(t,(e=>{p("failed to asynchronously prepare wasm: "+e),S(e)}))}function O(e){for(;e.length>0;)e.shift()(i)}x(P="i3s.wasm")||(E=P,P=i.locateFile?i.locateFile(E,s):s+E);var D=[];function z(e){var r=D[e];return r||(e>=D.length&&(D.length=e+1),D[e]=r=A.get(e)),r}function H(e){this.excPtr=e,this.ptr=e-24,this.set_type=function(e){_[this.ptr+4>>2]=e},this.get_type=function(){return _[this.ptr+4>>2]},this.set_destructor=function(e){_[this.ptr+8>>2]=e},this.get_destructor=function(){return _[this.ptr+8>>2]},this.set_caught=function(e){e=e?1:0,v[this.ptr+12>>0]=e},this.get_caught=function(){return 0!=v[this.ptr+12>>0]},this.set_rethrown=function(e){e=e?1:0,v[this.ptr+13>>0]=e},this.get_rethrown=function(){return 0!=v[this.ptr+13>>0]},this.init=function(e,r){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(r)},this.set_adjusted_ptr=function(e){_[this.ptr+16>>2]=e},this.get_adjusted_ptr=function(){return _[this.ptr+16>>2]},this.get_exception_ptr=function(){if(We(this.get_type()))return _[this.excPtr>>2];var e=this.get_adjusted_ptr();return 0!==e?e:this.excPtr}}var V={};function M(e){for(;e.length;){var r=e.pop();e.pop()(r)}}function B(e){return this.fromWireType(y[e>>2])}var q={},N={},L={};function G(e,r){var t,n,i=(n=function(e){this.name=r,this.message=e;var t=new Error(e).stack;void 0!==t&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))},{[t=function(e){if(void 0===e)return"_unknown";var r=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=48&&r<=57?"_"+e:e}(t=r)]:function(){return n.apply(this,arguments)}}[t]);return i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},i}var X=void 0;function Z(e){throw new X(e)}function $(e,r,t){function n(r){var n=t(r);n.length!==e.length&&Z("Mismatched type converter count");for(var i=0;i<e.length;++i)re(e[i],n[i])}e.forEach((function(e){L[e]=r}));var i=new Array(r.length),o=[],a=0;r.forEach(((e,r)=>{N.hasOwnProperty(e)?i[r]=N[e]:(o.push(e),q.hasOwnProperty(e)||(q[e]=[]),q[e].push((()=>{i[r]=N[e],++a===o.length&&n(i)})))})),0===o.length&&n(i)}function J(e){switch(e){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+e)}}var K=void 0;function Q(e){for(var r="",t=e;h[t];)r+=K[h[t++]];return r}var Y=void 0;function ee(e){throw new Y(e)}function re(e,r,t={}){if(!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var n=r.name;if(e||ee('type "'+n+'" must have a positive integer typeid pointer'),N.hasOwnProperty(e)){if(t.ignoreDuplicateRegistrations)return;ee("Cannot register type '"+n+"' twice")}if(N[e]=r,delete L[e],q.hasOwnProperty(e)){var i=q[e];delete q[e],i.forEach((e=>e()))}}var te=new function(){this.allocated=[void 0],this.freelist=[],this.get=function(e){return this.allocated[e]},this.allocate=function(e){let r=this.freelist.pop()||this.allocated.length;return this.allocated[r]=e,r},this.free=function(e){this.allocated[e]=void 0,this.freelist.push(e)}};function ne(e){e>=te.reserved&&0==--te.get(e).refcount&&te.free(e)}var ie=e=>{switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return te.allocate({refcount:1,value:e})}};function oe(e,r){switch(r){case 2:return function(e){return this.fromWireType(w[e>>2])};case 3:return function(e){return this.fromWireType(b[e>>3])};default:throw new TypeError("Unknown float type: "+e)}}function ae(e,r){var t,n,o,a=(e=Q(e)).includes("j")?(t=e,n=r,o=[],function(){return o.length=0,Object.assign(o,arguments),function(e,r,t){return e.includes("j")?function(e,r,t){var n=i["dynCall_"+e];return t&&t.length?n.apply(null,[r].concat(t)):n.call(null,r)}(e,r,t):z(r).apply(null,t)}(t,n,o)}):z(r);return"function"!=typeof a&&ee("unknown function pointer with signature "+e+": "+r),a}var ue=void 0;function ce(e){var r=Pe(e),t=Q(r);return Ce(r),t}function se(e,r,t){switch(r){case 0:return t?function(e){return v[e]}:function(e){return h[e]};case 1:return t?function(e){return m[e>>1]}:function(e){return g[e>>1]};case 2:return t?function(e){return y[e>>2]}:function(e){return _[e>>2]};default:throw new TypeError("Unknown integer type: "+e)}}var fe="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function le(e,r,t){for(var n=r+t,i=r;e[i]&&!(i>=n);)++i;if(i-r>16&&e.buffer&&fe)return fe.decode(e.subarray(r,i));for(var o="";r<i;){var a=e[r++];if(128&a){var u=63&e[r++];if(192!=(224&a)){var c=63&e[r++];if((a=224==(240&a)?(15&a)<<12|u<<6|c:(7&a)<<18|u<<12|c<<6|63&e[r++])<65536)o+=String.fromCharCode(a);else{var s=a-65536;o+=String.fromCharCode(55296|s>>10,56320|1023&s)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o}var de="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function pe(e,r){for(var t=e,n=t>>1,i=n+r/2;!(n>=i)&&g[n];)++n;if((t=n<<1)-e>32&&de)return de.decode(h.subarray(e,t));for(var o="",a=0;!(a>=r/2);++a){var u=m[e+2*a>>1];if(0==u)break;o+=String.fromCharCode(u)}return o}function ve(e,r,t){if(void 0===t&&(t=2147483647),t<2)return 0;for(var n=r,i=(t-=2)<2*e.length?t/2:e.length,o=0;o<i;++o){var a=e.charCodeAt(o);m[r>>1]=a,r+=2}return m[r>>1]=0,r-n}function he(e){return 2*e.length}function me(e,r){for(var t=0,n="";!(t>=r/4);){var i=y[e+4*t>>2];if(0==i)break;if(++t,i>=65536){var o=i-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o)}else n+=String.fromCharCode(i)}return n}function ge(e,r,t){if(void 0===t&&(t=2147483647),t<4)return 0;for(var n=r,i=n+t-4,o=0;o<e.length;++o){var a=e.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&e.charCodeAt(++o)),y[r>>2]=a,(r+=4)+4>i)break}return y[r>>2]=0,r-n}function ye(e){for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n>=55296&&n<=57343&&++t,r+=4}return r}var _e={};function we(e){var r=l.buffer;try{return l.grow(e-r.byteLength+65535>>>16),C(),1}catch(e){}}var be=[null,[],[]];X=i.InternalError=G(Error,"InternalError"),function(){for(var e=new Array(256),r=0;r<256;++r)e[r]=String.fromCharCode(r);K=e}(),Y=i.BindingError=G(Error,"BindingError"),te.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),te.reserved=te.allocated.length,i.count_emval_handles=function(){for(var e=0,r=te.reserved;r<te.allocated.length;++r)void 0!==te.allocated[r]&&++e;return e},ue=i.UnboundTypeError=G(Error,"UnboundTypeError");var Ae={__call_sighandler:function(e,r){z(e)(r)},__cxa_throw:function(e,r,t){throw new H(e).init(r,t),e},_embind_finalize_value_object:function(e){var r=V[e];delete V[e];var t=r.rawConstructor,n=r.rawDestructor,i=r.fields;$([e],i.map((e=>e.getterReturnType)).concat(i.map((e=>e.setterArgumentType))),(e=>{var o={};return i.forEach(((r,t)=>{var n=r.fieldName,a=e[t],u=r.getter,c=r.getterContext,s=e[t+i.length],f=r.setter,l=r.setterContext;o[n]={read:e=>a.fromWireType(u(c,e)),write:(e,r)=>{var t=[];f(l,e,s.toWireType(t,r)),M(t)}}})),[{name:r.name,fromWireType:function(e){var r={};for(var t in o)r[t]=o[t].read(e);return n(e),r},toWireType:function(e,r){for(var i in o)if(!(i in r))throw new TypeError('Missing field:  "'+i+'"');var a=t();for(i in o)o[i].write(a,r[i]);return null!==e&&e.push(n,a),a},argPackAdvance:8,readValueFromPointer:B,destructorFunction:n}]}))},_embind_register_bigint:function(e,r,t,n,i){},_embind_register_bool:function(e,r,t,n,i){var o=J(t);re(e,{name:r=Q(r),fromWireType:function(e){return!!e},toWireType:function(e,r){return r?n:i},argPackAdvance:8,readValueFromPointer:function(e){var n;if(1===t)n=v;else if(2===t)n=m;else{if(4!==t)throw new TypeError("Unknown boolean type size: "+r);n=y}return this.fromWireType(n[e>>o])},destructorFunction:null})},_embind_register_emval:function(e,r){re(e,{name:r=Q(r),fromWireType:function(e){var r=(e=>(e||ee("Cannot use deleted val. handle = "+e),te.get(e).value))(e);return ne(e),r},toWireType:function(e,r){return ie(r)},argPackAdvance:8,readValueFromPointer:B,destructorFunction:null})},_embind_register_float:function(e,r,t){var n=J(t);re(e,{name:r=Q(r),fromWireType:function(e){return e},toWireType:function(e,r){return r},argPackAdvance:8,readValueFromPointer:oe(r,n),destructorFunction:null})},_embind_register_function:function(e,r,t,n,o,a,u){var c=function(e,r){for(var t=[],n=0;n<e;n++)t.push(_[r+4*n>>2]);return t}(r,t);e=Q(e),o=ae(n,o),function(e,r,t){i.hasOwnProperty(e)?((void 0===t||void 0!==i[e].overloadTable&&void 0!==i[e].overloadTable[t])&&ee("Cannot register public name '"+e+"' twice"),function(e,r,t){if(void 0===e[r].overloadTable){var n=e[r];e[r]=function(){return e[r].overloadTable.hasOwnProperty(arguments.length)||ee("Function '"+t+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+e[r].overloadTable+")!"),e[r].overloadTable[arguments.length].apply(this,arguments)},e[r].overloadTable=[],e[r].overloadTable[n.argCount]=n}}(i,e,e),i.hasOwnProperty(t)&&ee("Cannot register multiple overloads of a function with the same number of arguments ("+t+")!"),i[e].overloadTable[t]=r):(i[e]=r,void 0!==t&&(i[e].numArguments=t))}(e,(function(){!function(e,r){var t=[],n={};throw r.forEach((function e(r){n[r]||N[r]||(L[r]?L[r].forEach(e):(t.push(r),n[r]=!0))})),new ue(e+": "+t.map(ce).join([", "]))}("Cannot call "+e+" due to unbound types",c)}),r-1),$([],c,(function(t){var n=[t[0],null].concat(t.slice(1));return function(e,r,t){i.hasOwnProperty(e)||Z("Replacing nonexistant public symbol"),void 0!==i[e].overloadTable&&void 0!==t?i[e].overloadTable[t]=r:(i[e]=r,i[e].argCount=t)}(e,function(e,r,t,n,i,o){var a=r.length;a<2&&ee("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var u=null!==r[1]&&!1,c=!1,s=1;s<r.length;++s)if(null!==r[s]&&void 0===r[s].destructorFunction){c=!0;break}var f="void"!==r[0].name,l=a-2,d=new Array(l),p=[],v=[];return function(){var t;arguments.length!==l&&ee("function "+e+" called with "+arguments.length+" arguments, expected "+l+" args!"),v.length=0,p.length=u?2:1,p[0]=i,u&&(t=r[1].toWireType(v,this),p[1]=t);for(var o=0;o<l;++o)d[o]=r[o+2].toWireType(v,arguments[o]),p.push(d[o]);return function(e){if(c)M(v);else for(var n=u?1:2;n<r.length;n++){var i=1===n?t:d[n-2];null!==r[n].destructorFunction&&r[n].destructorFunction(i)}if(f)return r[0].fromWireType(e)}(n.apply(null,p))}}(e,n,0,o,a),r-1),[]}))},_embind_register_integer:function(e,r,t,n,i){r=Q(r);var o=J(t),a=e=>e;if(0===n){var u=32-8*t;a=e=>e<<u>>>u}var c=r.includes("unsigned");re(e,{name:r,fromWireType:a,toWireType:c?function(e,r){return this.name,r>>>0}:function(e,r){return this.name,r},argPackAdvance:8,readValueFromPointer:se(r,o,0!==n),destructorFunction:null})},_embind_register_memory_view:function(e,r,t){var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function i(e){var r=_,t=r[e>>=2],i=r[e+1];return new n(r.buffer,i,t)}re(e,{name:t=Q(t),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},_embind_register_std_string:function(e,r){var t="std::string"===(r=Q(r));re(e,{name:r,fromWireType:function(e){var r,n,i=_[e>>2],o=e+4;if(t)for(var a=o,u=0;u<=i;++u){var c=o+u;if(u==i||0==h[c]){var s=(n=a)?le(h,n,c-a):"";void 0===r?r=s:(r+=String.fromCharCode(0),r+=s),a=c+1}}else{var f=new Array(i);for(u=0;u<i;++u)f[u]=String.fromCharCode(h[o+u]);r=f.join("")}return Ce(e),r},toWireType:function(e,r){var n;r instanceof ArrayBuffer&&(r=new Uint8Array(r));var i="string"==typeof r;i||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||ee("Cannot pass non-string to std::string"),n=t&&i?function(e){for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n<=127?r++:n<=2047?r+=2:n>=55296&&n<=57343?(r+=4,++t):r+=3}return r}(r):r.length;var o=Te(4+n+1),a=o+4;if(_[o>>2]=n,t&&i)!function(e,r,t,n){if(!(n>0))return 0;for(var i=t+n-1,o=0;o<e.length;++o){var a=e.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&e.charCodeAt(++o)),a<=127){if(t>=i)break;r[t++]=a}else if(a<=2047){if(t+1>=i)break;r[t++]=192|a>>6,r[t++]=128|63&a}else if(a<=65535){if(t+2>=i)break;r[t++]=224|a>>12,r[t++]=128|a>>6&63,r[t++]=128|63&a}else{if(t+3>=i)break;r[t++]=240|a>>18,r[t++]=128|a>>12&63,r[t++]=128|a>>6&63,r[t++]=128|63&a}}r[t]=0}(r,h,a,n+1);else if(i)for(var u=0;u<n;++u){var c=r.charCodeAt(u);c>255&&(Ce(a),ee("String has UTF-16 code units that do not fit in 8 bits")),h[a+u]=c}else for(u=0;u<n;++u)h[a+u]=r[u];return null!==e&&e.push(Ce,o),o},argPackAdvance:8,readValueFromPointer:B,destructorFunction:function(e){Ce(e)}})},_embind_register_std_wstring:function(e,r,t){var n,i,o,a,u;t=Q(t),2===r?(n=pe,i=ve,a=he,o=()=>g,u=1):4===r&&(n=me,i=ge,a=ye,o=()=>_,u=2),re(e,{name:t,fromWireType:function(e){for(var t,i=_[e>>2],a=o(),c=e+4,s=0;s<=i;++s){var f=e+4+s*r;if(s==i||0==a[f>>u]){var l=n(c,f-c);void 0===t?t=l:(t+=String.fromCharCode(0),t+=l),c=f+r}}return Ce(e),t},toWireType:function(e,n){"string"!=typeof n&&ee("Cannot pass non-string to C++ string type "+t);var o=a(n),c=Te(4+o+r);return _[c>>2]=o>>u,i(n,c+4,o+r),null!==e&&e.push(Ce,c),c},argPackAdvance:8,readValueFromPointer:B,destructorFunction:function(e){Ce(e)}})},_embind_register_value_object:function(e,r,t,n,i,o){V[e]={name:Q(r),rawConstructor:ae(t,n),rawDestructor:ae(i,o),fields:[]}},_embind_register_value_object_field:function(e,r,t,n,i,o,a,u,c,s){V[e].fields.push({fieldName:Q(r),getterReturnType:t,getter:ae(n,i),getterContext:o,setterArgumentType:a,setter:ae(u,c),setterContext:s})},_embind_register_void:function(e,r){re(e,{isVoid:!0,name:r=Q(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(e,r){}})},_emval_decref:ne,_emval_incref:function(e){e>4&&(te.get(e).refcount+=1)},_emval_new_cstring:function(e){return ie(void 0===(t=_e[r=e])?Q(r):t);var r,t},_emval_take_value:function(e,r){var t,n;void 0===(n=N[t=e])&&ee("_emval_take_value has unknown type "+ce(t));var i=(e=n).readValueFromPointer(r);return ie(i)},abort:function(){S("")},emscripten_memcpy_big:function(e,r,t){h.copyWithin(e,r,r+t)},emscripten_resize_heap:function(e){var r,t=h.length,n=2147483648;if((e>>>=0)>n)return!1;for(var i=1;i<=4;i*=2){var o=t*(1+.2/i);if(o=Math.min(o,e+100663296),we(Math.min(n,(r=Math.max(e,o))+(65536-r%65536)%65536)))return!0}return!1},fd_close:function(e){return 52},fd_seek:function(e,r,t,n,i){return 70},fd_write:function(e,r,t,n){for(var i,o,a,u=0,c=0;c<t;c++){var s=_[r>>2],f=_[r+4>>2];r+=8;for(var l=0;l<f;l++)i=e,o=h[s+l],a=void 0,a=be[i],0===o||10===o?((1===i?d:p)(le(a,0)),a.length=0):a.push(o);u+=f}return _[n>>2]=u,0}};!function(){var e,r,n,o,a={env:Ae,wasi_snapshot_preview1:Ae};function u(e,r){var t,n=e.exports;return i.asm=n,l=i.asm.memory,C(),A=i.asm.__indirect_function_table,t=i.asm.__wasm_call_ctors,j.unshift(t),function(e){if(F--,i.monitorRunDependencies&&i.monitorRunDependencies(F),0==F&&R){var r=R;R=null,r()}}(),n}if(F++,i.monitorRunDependencies&&i.monitorRunDependencies(F),i.instantiateWasm)try{return i.instantiateWasm(a,u)}catch(e){p("Module.instantiateWasm callback failed with error: "+e),t(e)}(e=f,r=P,n=a,o=function(e){u(e.instance)},e||"function"!=typeof WebAssembly.instantiateStreaming||x(r)||"function"!=typeof fetch?I(r,n,o):fetch(r,{credentials:"same-origin"}).then((e=>WebAssembly.instantiateStreaming(e,n).then(o,(function(e){return p("wasm streaming compile failed: "+e),p("falling back to ArrayBuffer instantiation"),I(r,n,o)}))))).catch(t)}();var Te=function(){return(Te=i.asm.malloc).apply(null,arguments)},Ce=function(){return(Ce=i.asm.free).apply(null,arguments)},Pe=function(){return(Pe=i.asm.__getTypeName).apply(null,arguments)};i.__embind_initialize_bindings=function(){return(i.__embind_initialize_bindings=i.asm._embind_initialize_bindings).apply(null,arguments)};var Ee,We=function(){return(We=i.asm.__cxa_is_pointer_type).apply(null,arguments)};function je(){function e(){Ee||(Ee=!0,i.calledRun=!0,T||(O(j),r(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),function(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)e=i.postRun.shift(),k.unshift(e);var e;O(k)}()))}F>0||(function(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)e=i.preRun.shift(),W.unshift(e);var e;O(W)}(),F>0||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("")}),1),e()}),1)):e()))}if(i.dynCall_vij=function(){return(i.dynCall_vij=i.asm.dynCall_vij).apply(null,arguments)},i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.dynCall_jiji).apply(null,arguments)},R=function e(){Ee||je(),Ee||(R=e)},i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return je(),e.ready},t.exports=i;var a=o.exports;const u=r({__proto__:null,default:e(a)},[a]);export{u as i};