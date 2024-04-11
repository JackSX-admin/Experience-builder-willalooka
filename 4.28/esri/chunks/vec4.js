// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./common"],function(e,y){function z(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];return a}function A(a,b,c,d,f){a[0]=b;a[1]=c;a[2]=d;a[3]=f;return a}function B(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];a[2]=b[2]+c[2];a[3]=b[3]+c[3];return a}function m(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-c[1];a[2]=b[2]-c[2];a[3]=b[3]-c[3];return a}function n(a,b,c){a[0]=b[0]*c[0];a[1]=b[1]*c[1];a[2]=b[2]*c[2];a[3]=b[3]*c[3];return a}function p(a,b,c){a[0]=b[0]/c[0];a[1]=b[1]/c[1];a[2]=b[2]/c[2];a[3]=b[3]/
c[3];return a}function C(a,b){a[0]=Math.ceil(b[0]);a[1]=Math.ceil(b[1]);a[2]=Math.ceil(b[2]);a[3]=Math.ceil(b[3]);return a}function D(a,b){a[0]=Math.floor(b[0]);a[1]=Math.floor(b[1]);a[2]=Math.floor(b[2]);a[3]=Math.floor(b[3]);return a}function E(a,b,c){a[0]=Math.min(b[0],c[0]);a[1]=Math.min(b[1],c[1]);a[2]=Math.min(b[2],c[2]);a[3]=Math.min(b[3],c[3]);return a}function F(a,b,c){a[0]=Math.max(b[0],c[0]);a[1]=Math.max(b[1],c[1]);a[2]=Math.max(b[2],c[2]);a[3]=Math.max(b[3],c[3]);return a}function G(a,
b){a[0]=Math.round(b[0]);a[1]=Math.round(b[1]);a[2]=Math.round(b[2]);a[3]=Math.round(b[3]);return a}function H(a,b,c){a[0]=b[0]*c;a[1]=b[1]*c;a[2]=b[2]*c;a[3]=b[3]*c;return a}function I(a,b,c,d){a[0]=b[0]+c[0]*d;a[1]=b[1]+c[1]*d;a[2]=b[2]+c[2]*d;a[3]=b[3]+c[3]*d;return a}function q(a,b){const c=b[0]-a[0],d=b[1]-a[1],f=b[2]-a[2];a=b[3]-a[3];return Math.sqrt(c*c+d*d+f*f+a*a)}function r(a,b){const c=b[0]-a[0],d=b[1]-a[1],f=b[2]-a[2];a=b[3]-a[3];return c*c+d*d+f*f+a*a}function t(a){const b=a[0],c=a[1],
d=a[2];a=a[3];return Math.sqrt(b*b+c*c+d*d+a*a)}function u(a){const b=a[0],c=a[1],d=a[2];a=a[3];return b*b+c*c+d*d+a*a}function J(a,b){a[0]=-b[0];a[1]=-b[1];a[2]=-b[2];a[3]=-b[3];return a}function K(a,b){a[0]=1/b[0];a[1]=1/b[1];a[2]=1/b[2];a[3]=1/b[3];return a}function L(a,b){const c=b[0],d=b[1],f=b[2];b=b[3];let g=c*c+d*d+f*f+b*b;0<g&&(g=1/Math.sqrt(g),a[0]=c*g,a[1]=d*g,a[2]=f*g,a[3]=b*g);return a}function M(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]}function N(a,b,c,d){const f=b[0],g=b[1],
h=b[2];b=b[3];a[0]=f+d*(c[0]-f);a[1]=g+d*(c[1]-g);a[2]=h+d*(c[2]-h);a[3]=b+d*(c[3]-b);return a}function O(a,b){var c=y.RANDOM;b=b||1;let d,f,g,h,l,k;do d=2*c()-1,f=2*c()-1,l=d*d+f*f;while(1<=l);do g=2*c()-1,h=2*c()-1,k=g*g+h*h;while(1<=k);c=Math.sqrt((1-l)/k);a[0]=b*d;a[1]=b*f;a[2]=b*g*c;a[3]=b*h*c;return a}function P(a,b,c){const d=b[0],f=b[1],g=b[2];b=b[3];a[0]=c[0]*d+c[4]*f+c[8]*g+c[12]*b;a[1]=c[1]*d+c[5]*f+c[9]*g+c[13]*b;a[2]=c[2]*d+c[6]*f+c[10]*g+c[14]*b;a[3]=c[3]*d+c[7]*f+c[11]*g+c[15]*b;return a}
function Q(a,b,c){var d=b[0];const f=b[1],g=b[2],h=c[0],l=c[1],k=c[2];c=c[3];const v=c*d+l*g-k*f,w=c*f+k*d-h*g,x=c*g+h*f-l*d;d=-h*d-l*f-k*g;a[0]=v*c+d*-h+w*-k-x*-l;a[1]=w*c+d*-l+x*-h-v*-k;a[2]=x*c+d*-k+v*-l-w*-h;a[3]=b[3];return a}function R(a){return"vec4("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"}function S(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]}function T(a,b){const c=a[0],d=a[1],f=a[2];a=a[3];const g=b[0],h=b[1],l=b[2];b=b[3];const k=y.getEpsilon();return Math.abs(c-g)<=
k*Math.max(1,Math.abs(c),Math.abs(g))&&Math.abs(d-h)<=k*Math.max(1,Math.abs(d),Math.abs(h))&&Math.abs(f-l)<=k*Math.max(1,Math.abs(f),Math.abs(l))&&Math.abs(a-b)<=k*Math.max(1,Math.abs(a),Math.abs(b))}const U=Object.freeze(Object.defineProperty({__proto__:null,add:B,ceil:C,copy:z,dist:q,distance:q,div:p,divide:p,dot:M,equals:T,exactEquals:S,floor:D,inverse:K,len:t,length:t,lerp:N,max:F,min:E,mul:n,multiply:n,negate:J,normalize:L,random:O,round:G,scale:H,scaleAndAdd:I,set:A,sqrDist:r,sqrLen:u,squaredDistance:r,
squaredLength:u,str:R,sub:m,subtract:m,transformMat4:P,transformQuat:Q},Symbol.toStringTag,{value:"Module"}));e.add=B;e.ceil=C;e.copy=z;e.dist=q;e.distance=q;e.div=p;e.divide=p;e.dot=M;e.equals=T;e.exactEquals=S;e.floor=D;e.inverse=K;e.len=t;e.length=t;e.lerp=N;e.max=F;e.min=E;e.mul=n;e.multiply=n;e.negate=J;e.normalize=L;e.random=O;e.round=G;e.scale=H;e.scaleAndAdd=I;e.set=A;e.sqrDist=r;e.sqrLen=u;e.squaredDistance=r;e.squaredLength=u;e.str=R;e.sub=m;e.subtract=m;e.transformMat4=P;e.transformQuat=
Q;e.vec4=U});