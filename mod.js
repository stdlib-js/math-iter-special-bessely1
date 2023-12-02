// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function o(r,e,n){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=n?r+t(i):t(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=o(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=o(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===a.call(r.specifier)?a.call(t):i.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,v=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,g=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var e,t,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);o=r.arg}switch(r.specifier){case"e":case"E":t=o.toExponential(r.precision);break;case"f":case"F":t=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((e=r.precision)>0&&(e-=1),t=o.toExponential(e)):t=o.toPrecision(r.precision),r.alternate||(t=p.call(t,h,"$1e"),t=p.call(t,w,"e"),t=p.call(t,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,v,"e+0$1"),t=p.call(t,y,"e-0$1"),r.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,b,"$1.e")),o>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):l.call(t)}function j(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function A(r,e,n){var t=e-r.length;return t<0?r:r=n?r+j(t):j(t)+r}var x=String.fromCharCode,_=isNaN,E=Array.isArray;function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function N(r){var e,n,t,i,a,f,l,s,p;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(t=r[s]))f+=t;else{if(e=void 0!==t.precision,!(t=O(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(i=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,_(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!_(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(a)?String(t.arg):x(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=o(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=A(t.arg,t.width,t.padRight)),f+=t.arg||"",l+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,o;for(n=[],o=0,t=S.exec(r);t;)(e=r.slice(o,S.lastIndex-t[0].length)).length&&n.push(e),n.push(U(t)),o=S.lastIndex,t=S.exec(r);return(e=r.slice(o)).length&&n.push(e),n}function I(r){return"string"==typeof r}function T(r){var e,n,t;if(!I(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return N.apply(null,n)}var k,V=Object.prototype,P=V.toString,G=V.__defineGetter__,L=V.__defineSetter__,$=V.__lookupGetter__,C=V.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===P.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&($.call(r,e)||C.call(r,e)?(t=r.__proto__,r.__proto__=V,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,e,n.get),a&&L&&L.call(r,e,n.set),r};var H=k;function W(r,e,n){H(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var B=/./;function M(r){return"boolean"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return R&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function q(r,e){return null!=r&&Y.call(r,e)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"";var J=Z()?function(r){var e,n,t;if(null==r)return X.call(r);n=r[D],e=q(r,D);try{r[D]=void 0}catch(e){return X.call(r)}return t=X.call(r),e?r[D]=n:delete r[D],t}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=Z();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function nr(r){return M(r)||er(r)}function tr(){return new Function("return this;")()}W(nr,"isPrimitive",M),W(nr,"isObject",er);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ur="object"==typeof ar?ar:null,cr="object"==typeof globalThis?globalThis:null;var fr=function(r){if(arguments.length){if(!M(r))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return tr()}if(cr)return cr;if(or)return or;if(ir)return ir;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),lr=fr.document&&fr.document.childNodes,sr=Int8Array;function pr(){return/^\s*function\s*([^(]*)/i}var vr=/^\s*function\s*([^(]*)/i;W(pr,"REGEXP",vr);var yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function dr(r){return null!==r&&"object"==typeof r}function br(r){var e,n,t,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(e=vr.exec(t.toString()))return e[1]}return dr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}W(dr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var n,t;if(!yr(e))return!1;if(0===(n=e.length))return!1;for(t=0;t<n;t++)if(!1===r(e[t]))return!1;return!0}}(dr));var gr="function"==typeof B||"object"==typeof sr||"function"==typeof lr?function(r){return br(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?br(r).toLowerCase():e};function wr(r){return"function"===gr(r)}function hr(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&wr(r.next)}function mr(r){return"number"==typeof r}var jr=Number,Ar=jr.prototype.toString;var xr=Z();function _r(r){return"object"==typeof r&&(r instanceof jr||(xr?function(r){try{return Ar.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Er(r){return mr(r)||_r(r)}W(Er,"isPrimitive",mr),W(Er,"isObject",_r);var Or="function"==typeof z&&"symbol"==typeof z("foo")&&q(z,"iterator")&&"symbol"==typeof z.iterator?Symbol.iterator:null;var Nr,Sr=Object,Ur=Object.getPrototypeOf;Nr=wr(Object.getPrototypeOf)?Ur:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Fr=Nr;var Ir=Object.prototype;function Tr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!yr(r)}(r)&&(e=function(r){return null==r?null:(r=Sr(r),Fr(r))}(r),!e||!q(r,"constructor")&&q(e,"constructor")&&wr(e.constructor)&&"[object Function]"===J(e.constructor)&&q(e,"isPrototypeOf")&&wr(e.isPrototypeOf)&&(e===Ir||function(r){var e;for(e in r)if(!q(r,e))return!1;return!0}(r)))}function kr(r,e){return Tr(e)?(q(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(T("invalid argument. Options argument must be an object. Value: `%s`.",e))}function Vr(r,e,n){var t,o,i,a;if(!hr(r))throw new TypeError(T("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!wr(e))throw new TypeError(T("invalid argument. Second argument must be a function. Value: `%s`.",e));if(t={invalid:NaN},arguments.length>2&&(i=kr(t,n)))throw i;return W(o={},"next",u),W(o,"return",c),Or&&wr(r[Or])&&W(o,Or,f),o;function u(){var n;return a?{done:!0}:(n=r.next()).done?(a=!0,n):{value:mr(n.value)?e(n.value):t.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Vr(r[Or](),e,t)}}var Pr="function"==typeof Uint32Array;var Gr="function"==typeof Uint32Array?Uint32Array:null;var Lr,$r="function"==typeof Uint32Array?Uint32Array:void 0;Lr=function(){var r,e,n;if("function"!=typeof Gr)return!1;try{e=new Gr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(Pr&&n instanceof Uint32Array||"[object Uint32Array]"===J(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?$r:function(){throw new Error("not implemented")};var Cr=Lr,Hr="function"==typeof Float64Array;var Wr="function"==typeof Float64Array?Float64Array:null;var Br,Mr="function"==typeof Float64Array?Float64Array:void 0;Br=function(){var r,e,n;if("function"!=typeof Wr)return!1;try{e=new Wr([1,3.14,-3.14,NaN]),n=e,r=(Hr&&n instanceof Float64Array||"[object Float64Array]"===J(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Mr:function(){throw new Error("not implemented")};var Rr=Br,Zr="function"==typeof Uint8Array;var Xr="function"==typeof Uint8Array?Uint8Array:null;var Yr,qr="function"==typeof Uint8Array?Uint8Array:void 0;Yr=function(){var r,e,n;if("function"!=typeof Xr)return!1;try{e=new Xr(e=[1,3.14,-3.14,256,257]),n=e,r=(Zr&&n instanceof Uint8Array||"[object Uint8Array]"===J(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?qr:function(){throw new Error("not implemented")};var zr=Yr,Dr="function"==typeof Uint16Array;var Jr="function"==typeof Uint16Array?Uint16Array:null;var Kr,Qr="function"==typeof Uint16Array?Uint16Array:void 0;Kr=function(){var r,e,n;if("function"!=typeof Jr)return!1;try{e=new Jr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Dr&&n instanceof Uint16Array||"[object Uint16Array]"===J(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Qr:function(){throw new Error("not implemented")};var re,ee={uint16:Kr,uint8:zr};(re=new ee.uint16(1))[0]=4660;var ne=52===new ee.uint8(re.buffer)[0],te=!0===ne?1:0,oe=new Rr(1),ie=new Cr(oe.buffer);function ae(r){return oe[0]=r,ie[te]}var ue=!0===ne?1:0,ce=new Rr(1),fe=new Cr(ce.buffer);function le(r){return r!=r}var se=jr.NEGATIVE_INFINITY;var pe=.6931471803691238,ve=1.9082149292705877e-10;function ye(r){var e,n,t,o,i,a,u,c,f,l,s,p;return 0===r?se:le(r)||r<0?NaN:(i=0,(n=ae(r))<1048576&&(i-=54,n=ae(r*=0x40000000000000)),n>=2146435072?r+r:(i+=(n>>20)-1023|0,i+=(c=(n&=1048575)+614244&1048576|0)>>20|0,u=(r=function(r,e){return ce[0]=r,fe[ue]=e>>>0,ce[0]}(r,n|1072693248^c))-1,(1048575&2+n)<3?0===u?0===i?0:i*pe+i*ve:(a=u*u*(.5-.3333333333333333*u),0===i?u-a:i*pe-(a-i*ve-u)):(c=n-398458|0,f=440401-n|0,o=(s=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=t+o,(c|=f)>0?(e=.5*u*u,0===i?u-(e-l*(e+a)):i*pe-(e-(l*(e+a)+i*ve)-u)):0===i?u-l*(u-a):i*pe-(l*(u-a)-i*ve-u))))}var de,be,ge=Math.sqrt,we=Number.POSITIVE_INFINITY,he=!0===ne?0:1,me=new Rr(1),je=new Cr(me.buffer);!0===ne?(de=1,be=0):(de=0,be=1);var Ae={HIGH:de,LOW:be},xe=new Rr(1),_e=new Cr(xe.buffer),Ee=Ae.HIGH,Oe=Ae.LOW;function Ne(r,e){return _e[Ee]=r,_e[Oe]=e,xe[0]}var Se=Math.floor;function Ue(r){return r===we||r===se}var Fe,Ie;!0===ne?(Fe=1,Ie=0):(Fe=0,Ie=1);var Te={HIGH:Fe,LOW:Ie},ke=new Rr(1),Ve=new Cr(ke.buffer),Pe=Te.HIGH,Ge=Te.LOW;function Le(r,e,n,t){return ke[0]=r,e[t]=Ve[Pe],e[t+n]=Ve[Ge],e}function $e(r){return Le(r,[0,0],1,0)}W($e,"assign",Le);var Ce=[0,0];function He(r){return Math.abs(r)}function We(r,e,n,t){return le(r)||Ue(r)?(e[t]=r,e[t+n]=0,e):0!==r&&He(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}W((function(r){return We(r,[0,0],1,0)}),"assign",We);var Be=[0,0],Me=[0,0];function Re(r,e){var n,t,o,i,a,u;return 0===e||0===r||le(r)||Ue(r)?r:(We(r,Be,1,0),e+=Be[1],e+=function(r){var e=ae(r);return(e=(2146435072&e)>>>20)-1023|0}(r=Be[0]),e<-1074?(o=0,i=r,$e.assign(o,Ce,1,0),a=Ce[0],a&=2147483647,u=ae(i),Ne(a|=u&=2147483648,Ce[1])):e>1023?r<0?se:we:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,$e.assign(r,Me,1,0),n=Me[0],n&=2148532223,t*Ne(n|=e+1023<<20,Me[1])))}function Ze(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var Xe=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ye=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],qe=5.960464477539063e-8,ze=Ze(20),De=Ze(20),Je=Ze(20),Ke=Ze(20);function Qe(r,e,n,t,o,i,a,u,c){var f,l,s,p,v,y,d,b,g;for(p=i,g=t[n],b=n,v=0;b>0;v++)l=qe*g|0,Ke[v]=g-16777216*l|0,g=t[b-1]+l,b-=1;if(g=Re(g,o),g-=8*Se(.125*g),g-=d=0|g,s=0,o>0?(d+=v=Ke[n-1]>>24-o,Ke[n-1]-=v<<24-o,s=Ke[n-1]>>23-o):0===o?s=Ke[n-1]>>23:g>=.5&&(s=2),s>0){for(d+=1,f=0,v=0;v<n;v++)b=Ke[v],0===f?0!==b&&(f=1,Ke[v]=16777216-b):Ke[v]=16777215-b;if(o>0)switch(o){case 1:Ke[n-1]&=8388607;break;case 2:Ke[n-1]&=4194303}2===s&&(g=1-g,0!==f&&(g-=Re(1,o)))}if(0===g){for(b=0,v=n-1;v>=i;v--)b|=Ke[v];if(0===b){for(y=1;0===Ke[i-y];y++);for(v=n+1;v<=n+y;v++){for(c[u+v]=Xe[a+v],l=0,b=0;b<=u;b++)l+=r[b]*c[u+(v-b)];t[v]=l}return Qe(r,e,n+=y,t,o,i,a,u,c)}}if(0===g)for(n-=1,o-=24;0===Ke[n];)n-=1,o-=24;else(g=Re(g,-o))>=16777216?(l=qe*g|0,Ke[n]=g-16777216*l|0,o+=24,Ke[n+=1]=l):Ke[n]=0|g;for(l=Re(1,o),v=n;v>=0;v--)t[v]=l*Ke[v],l*=qe;for(v=n;v>=0;v--){for(l=0,y=0;y<=p&&y<=n-v;y++)l+=Ye[y]*t[v+y];Je[n-v]=l}for(l=0,v=n;v>=0;v--)l+=Je[v];for(e[0]=0===s?l:-l,l=Je[0]-l,v=1;v<=n;v++)l+=Je[v];return e[1]=0===s?l:-l,7&d}function rn(r,e,n,t){var o,i,a,u,c,f,l;for(4,(i=(n-3)/24|0)<0&&(i=0),u=n-24*(i+1),f=i-(a=t-1),l=a+4,c=0;c<=l;c++)ze[c]=f<0?0:Xe[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*ze[a+(c-f)];De[c]=o}return 4,Qe(r,e,4,De,u,4,i,a,ze)}var en=Math.round;function nn(r,e,n){var t,o,i,a,u;return i=r-1.5707963267341256*(t=en(.6366197723675814*r)),a=6077100506506192e-26*t,u=e>>20|0,n[0]=i-a,u-(ae(n[0])>>20&2047)>16&&(a=20222662487959506e-37*t-((o=i)-(i=o-(a=6077100506303966e-26*t))-a),n[0]=i-a,u-(ae(n[0])>>20&2047)>49&&(a=84784276603689e-45*t-((o=i)-(i=o-(a=20222662487111665e-37*t))-a),n[0]=i-a)),n[1]=i-n[0]-a,t}var tn=1.5707963267341256,on=6077100506506192e-26,an=2*on,un=4*on,cn=[0,0,0],fn=[0,0];function ln(r,e){var n,t,o,i,a,u,c;if((o=2147483647&ae(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?nn(r,o,e):o<=1073928572?r>0?(c=r-tn,e[0]=c-on,e[1]=c-e[0]-on,1):(c=r+tn,e[0]=c+on,e[1]=c-e[0]+on,-1):r>0?(c=r-2*tn,e[0]=c-an,e[1]=c-e[0]-an,2):(c=r+2*tn,e[0]=c+an,e[1]=c-e[0]+an,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?nn(r,o,e):r>0?(c=r-3*tn,e[0]=c-1.8231301519518578e-10,e[1]=c-e[0]-1.8231301519518578e-10,3):(c=r+3*tn,e[0]=c+1.8231301519518578e-10,e[1]=c-e[0]+1.8231301519518578e-10,-3):1075388923===o?nn(r,o,e):r>0?(c=r-4*tn,e[0]=c-un,e[1]=c-e[0]-un,4):(c=r+4*tn,e[0]=c+un,e[1]=c-e[0]+un,-4);if(o<1094263291)return nn(r,o,e);if(o>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return me[0]=r,je[he]}(r),c=Ne(o-((t=(o>>20)-1046)<<20|0),n),a=0;a<2;a++)cn[a]=0|c,c=16777216*(c-cn[a]);for(cn[2]=c,i=3;0===cn[i-1];)i-=1;return u=rn(cn,fn,t,i),r<0?(e[0]=-fn[0],e[1]=-fn[1],-u):(e[0]=fn[0],e[1]=fn[1],u)}var sn=-.16666666666666632;function pn(r,e,n,t,o){var i,a,u,c,f;return a=.00833333333332249+(f=r*r)*(27557313707070068e-22*f-.0001984126982985795)+f*(c=f*f)*(1.58969099521155e-10*f-2.5050760253406863e-8),u=f*r,n[o]=0===e?r+u*(sn+f*a):r-(f*(.5*e-u*a)-e-u*sn),a=f*(.0416666666666666+f*(2480158728947673e-20*f-.001388888888887411)),a+=c*c*(f*(2.087572321298175e-9+-11359647557788195e-27*f)-2.7557314351390663e-7),c=1-(i=.5*f),n[o+t]=c+(1-c-i+(f*a-r*e)),n}var vn=[0,0];function yn(r,e,n,t){var o,i;if(o=ae(r),(o&=2147483647)<=1072243195)return o<1044381696&&0==(0|r)&&(e[t]=r,e[t+n]=0),pn(r,0,e,n,t);if(o>=2146435072)return e[t]=NaN,e[t+n]=NaN,e;switch(i=ln(r,vn),pn(vn[0],vn[1],e,n,t),3&i){case 1:return o=e[t+n],e[t+n]=-e[t],e[t]=o,e;case 2:return e[t]*=-1,e[t+n]*=-1,e;case 3:return o=-e[t+n],e[t+n]=e[t],e[t]=o,e;default:return e}}W((function(r){return yn(r,[0,0],1,0)}),"assign",yn);var dn=[0,0];function bn(r){var e,n,t,o,i,a,u,c;return c=He(r),0===r||c===we?0:(c<=4?(i=function(r){var e,n;return 0===r?-.03405537391318949:((r<0?-r:r)<=1?(e=r*(6678104126.14924+r*(r*(980629.0409895825+r*(r*(10.650724020080236+-.010767857011487301*r)-4461.579298277507))-115486967.64841276))-142585098013.66644,n=4186860446082.0176+r*(42091902282.58013+r*(202283751.40097034+r*(591176.1449417479+r*(1074.227223951738+r*(1+0*r)))))):(e=(r=1/r)*(10.650724020080236+r*(r*(980629.0409895825+r*(r*(6678104126.14924+-142585098013.66644*r)-115486967.64841276))-4461.579298277507))-.010767857011487301,n=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(202283751.40097034+r*(42091902282.58013+4186860446082.0176*r)))))),e/n)}(a=r*r),e=(u=c*(c+3.8317059702075125)*(c-981/256- -.0003252797924876844))*i):c<=8?(i=function(r){var e,n;return 0===r?-.010158790774176108:((r<0?-r:r)<=1?(e=r*(1660853173129901.8+r*(r*(355806656709.1062+r*(r*(5079326.614801118+r*(4.6179191852758255*r-7502.334222078161))-1811393126.9860668))-36658018905416.664))-0x3e45840c066730,n=0x17f1d1995ae4fb00+r*(0x3cda8dbce6f4c4+r*(84899346165481.42+r*(276227772862.44086+r*(648725028.9959639+r*(1126712.5065029138+r*(1388.6978985861358+1*r))))))):(e=4.6179191852758255+(r=1/r)*(r*(5079326.614801118+r*(r*(355806656709.1062+r*(r*(1660853173129901.8+-0x3e45840c066730*r)-36658018905416.664))-1811393126.9860668))-7502.334222078161),n=1+r*(1388.6978985861358+r*(1126712.5065029138+r*(648725028.9959639+r*(276227772862.44086+r*(84899346165481.42+r*(0x3cda8dbce6f4c4+0x17f1d1995ae4fb00*r))))))),e/n)}(a=r*r),e=(u=c*(c+7.015586669815619)*(c-7.015625- -38330184381246464e-21))*i):(n=function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(0*r-1611.6166443246102)-109824.05543459347)-1523529.3511811374)-6603373.248364939)-9942246.505077641)-4435757.816794128,n=r*(r*(r*(r*(r*(1*r-1455.0094401904962)-107263.8599110382)-1511809.5066341609)-6585339.4797230875)-9934124.389934586)-4435757.816794128):(e=0+(r=1/r)*(r*(r*(r*(r*(-4435757.816794128*r-9942246.505077641)-6603373.248364939)-1523529.3511811374)-109824.05543459347)-1611.6166443246102),n=1+r*(r*(r*(r*(r*(-4435757.816794128*r-9934124.389934586)-6585339.4797230875)-1511809.5066341609)-107263.8599110382)-1455.0094401904962)),e/n)}(o=(a=8/c)*a),t=function(r){var e,n;return 0===r?.046875:((r<0?-r:r)<=1?(e=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+0*r))))),n=708712.8194102874+r*(1819458.0422439973+r*(1419460.669603721+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+1*r)))))):(e=0+(r=1/r)*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+33220.913409857225*r))))),n=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460.669603721+r*(1819458.0422439973+708712.8194102874*r)))))),e/n)}(o),u=1/(1.772453850905516*ge(c)),yn(c,dn,1,0),e=u*(n*(dn[0]-dn[1])+a*t*(dn[0]+dn[1]))),r<0&&(e*=-1),e)}var gn=2.197141326031017,wn=5.429681040794135,hn=[0,0];function mn(r){var e,n,t,o,i,a,u;return r<0?NaN:0===r?se:r===we?0:r<=4?(i=r*r,a=ye(r/gn)*bn(r)*.6366197723675814,o=function(r){var e,n;return 0===r?.13187550549740895:((r<0?-r:r)<=1?(e=40535726612579.55+r*(5470861171652.543+r*(r*(7214454821.450256+r*(r*(221579.5322228026+-317.1442466004613*r)-59157479.9974084))-375959744978.196)),n=307378739210792.9+r*(4127228620040.646+r*(27800352738.690586+r*(122504351.22182964+r*(381364.70753052575+r*(820.7990816839387+1*r)))))):(e=(r=1/r)*(221579.5322228026+r*(r*(7214454821.450256+r*(r*(5470861171652.543+40535726612579.55*r)-375959744978.196))-59157479.9974084))-317.1442466004613,n=1+r*(820.7990816839387+r*(381364.70753052575+r*(122504351.22182964+r*(27800352738.690586+r*(4127228620040.646+307378739210792.9*r)))))),e/n)}(i),a+(u=(r+gn)*(r-562/256-.001828826031017035)/r)*o):r<=8?(i=r*r,a=ye(r/wn)*bn(r)*.6366197723675814,o=function(r){var e,n;return 0===r?.021593919914419626:((r<0?-r:r)<=1?(e=0x9fcaed579ed86000+r*(r*(r*(4068627528980474.5+r*(r*(374536739624.3849+r*(r*(1915380.6858264203+-1233.7180442012952*r)-1195796191.2070618))-59530713129741.984))-0x53fb01dd8596c0)-0x4ed64a1a7552bc00),n=5332184431331618e5+r*(0x4f0f2b7ff905d800+r*(0x6d8e405cd717f0+r*(111870100658569.7+r*(302217668529.60406+r*(635503180.8708892+r*(1045374.8201934079+r*(1285.516484932161+1*r)))))))):(e=(r=1/r)*(1915380.6858264203+r*(r*(374536739624.3849+r*(r*(4068627528980474.5+r*(r*(0x9fcaed579ed86000*r-0x4ed64a1a7552bc00)-0x53fb01dd8596c0))-59530713129741.984))-1195796191.2070618))-1233.7180442012952,n=1+r*(1285.516484932161+r*(1045374.8201934079+r*(635503180.8708892+r*(302217668529.60406+r*(111870100658569.7+r*(0x6d8e405cd717f0+r*(0x4f0f2b7ff905d800+5332184431331618e5*r)))))))),e/n)}(i),a+(u=(r+wn)*(r-1390/256- -6459205864867228e-21)/r)*o):(e=function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(0*r-1611.6166443246102)-109824.05543459347)-1523529.3511811374)-6603373.248364939)-9942246.505077641)-4435757.816794128,n=r*(r*(r*(r*(r*(1*r-1455.0094401904962)-107263.8599110382)-1511809.5066341609)-6585339.4797230875)-9934124.389934586)-4435757.816794128):(e=0+(r=1/r)*(r*(r*(r*(r*(-4435757.816794128*r-9942246.505077641)-6603373.248364939)-1523529.3511811374)-109824.05543459347)-1611.6166443246102),n=1+r*(r*(r*(r*(r*(-4435757.816794128*r-9934124.389934586)-6585339.4797230875)-1511809.5066341609)-107263.8599110382)-1455.0094401904962)),e/n)}(t=(i=8/r)*i),n=function(r){var e,n;return 0===r?.046875:((r<0?-r:r)<=1?(e=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+0*r))))),n=708712.8194102874+r*(1819458.0422439973+r*(1419460.669603721+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+1*r)))))):(e=0+(r=1/r)*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+33220.913409857225*r))))),n=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460.669603721+r*(1819458.0422439973+708712.8194102874*r)))))),e/n)}(t),u=.5641895835477563/ge(r),yn(r,hn,1,0),u*(i*n*(hn[0]-hn[1])-e*(hn[0]+hn[1])))}function jn(r){return Vr(r,mn)}export{jn as default};
//# sourceMappingURL=mod.js.map
