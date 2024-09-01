// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterBessely1=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,d=/^(\d+)e/,b=/\.0$/,g=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,g,"e"),n=s.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,v,"e-0$1"),r.alternate&&(n=s.call(n,y,"$1."),n=s.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,A=Array.isArray;function x(r){return r!=r}function _(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function E(r){var e,t,n,i,a,c,f,l,s,p,v,y,d;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,x(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,v=n.width,y=n.padRight,d=void 0,(d=v-p.length)<0?p:p=y?p+m(d):m(d)+p)),c+=n.arg||"",f+=1}return c}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function N(r){var e,t,n,o;for(t=[],o=0,n=O.exec(r);n;)(e=r.slice(o,O.lastIndex-n[0].length)).length&&t.push(e),t.push(S(n)),o=O.lastIndex,n=O.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function U(r){var e,t;if("string"!=typeof r)throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[N(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return E.apply(null,e)}var T,F=Object.prototype,I=F.toString,k=F.__defineGetter__,V=F.__defineSetter__,P=F.__lookupGetter__,G=F.__lookupSetter__;T=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(P.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&k&&k.call(r,e,t.get),a&&V&&V.call(r,e,t.set),r};var L=T;function $(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var C=/./;function B(r){return"boolean"==typeof r}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return H&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var R=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&R.call(r,e)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var q=W()?function(r){var e,t,n;if(null==r)return M.call(r);t=r[Y],e=Z(r,Y);try{r[Y]=void 0}catch(e){return M.call(r)}return n=M.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return M.call(r)},z=Boolean,D=Boolean.prototype.toString;var J=W();function K(r){return"object"==typeof r&&(r instanceof z||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function Q(r){return B(r)||K(r)}$(Q,"isPrimitive",B),$(Q,"isObject",K);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="object"==typeof global?global:null,nr="object"==typeof globalThis?globalThis:null;var or=function(r){if(arguments.length){if(!B(r))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(nr)return nr;if(rr)return rr;if(er)return er;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")}(),ir=or.document&&or.document.childNodes,ar=Int8Array;function ur(){return/^\s*function\s*([^(]*)/i}var cr=/^\s*function\s*([^(]*)/i;$(ur,"REGEXP",cr);var fr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function lr(r){return null!==r&&"object"==typeof r}function sr(r){var e,t,n,o;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=cr.exec(n.toString()))return e[1]}return lr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}$(lr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!fr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(lr));var pr="function"==typeof C||"object"==typeof ar||"function"==typeof ir?function(r){return sr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?sr(r).toLowerCase():e};function vr(r){return"function"===pr(r)}function yr(r){return"number"==typeof r}var dr=Number,br=dr.prototype.toString;var gr=W();function hr(r){return"object"==typeof r&&(r instanceof dr||(gr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function wr(r){return yr(r)||hr(r)}$(wr,"isPrimitive",yr),$(wr,"isObject",hr);var mr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;var jr,Ar=Object,xr=Object.getPrototypeOf;jr=vr(Object.getPrototypeOf)?xr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=jr;var Er=Object.prototype;function Or(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!fr(r)}(r)&&(e=function(r){return null==r?null:(r=Ar(r),_r(r))}(r),!e||!Z(r,"constructor")&&Z(e,"constructor")&&vr(e.constructor)&&"[object Function]"===q(e.constructor)&&Z(e,"isPrototypeOf")&&vr(e.isPrototypeOf)&&(e===Er||function(r){var e;for(e in r)if(!Z(r,e))return!1;return!0}(r)))}function Sr(r,e,t){var n,o,i,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!vr(u.next))throw new TypeError(U("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!vr(e))throw new TypeError(U("invalid argument. Second argument must be a function. Value: `%s`.",e));if(n={invalid:NaN},arguments.length>2&&(i=function(r,e){return Or(e)?(Z(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(U("invalid argument. Options argument must be an object. Value: `%s`.",e))}(n,t),i))throw i;return $(o={},"next",(function(){var t;if(a)return{done:!0};if((t=r.next()).done)return a=!0,t;return{value:yr(t.value)?e(t.value):n.invalid,done:!1}})),$(o,"return",(function(r){if(a=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),mr&&vr(r[mr])&&$(o,mr,(function(){return Sr(r[mr](),e,n)})),o}var Nr="function"==typeof Uint32Array;var Ur="function"==typeof Uint32Array?Uint32Array:null;var Tr,Fr="function"==typeof Uint32Array?Uint32Array:void 0;Tr=function(){var r,e,t;if("function"!=typeof Ur)return!1;try{e=new Ur(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Nr&&t instanceof Uint32Array||"[object Uint32Array]"===q(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Fr:function(){throw new Error("not implemented")};var Ir=Tr,kr="function"==typeof Float64Array;var Vr="function"==typeof Float64Array?Float64Array:null;var Pr,Gr="function"==typeof Float64Array?Float64Array:void 0;Pr=function(){var r,e,t;if("function"!=typeof Vr)return!1;try{e=new Vr([1,3.14,-3.14,NaN]),t=e,r=(kr&&t instanceof Float64Array||"[object Float64Array]"===q(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var Lr=Pr,$r="function"==typeof Uint8Array;var Cr="function"==typeof Uint8Array?Uint8Array:null;var Br,Hr="function"==typeof Uint8Array?Uint8Array:void 0;Br=function(){var r,e,t;if("function"!=typeof Cr)return!1;try{e=new Cr(e=[1,3.14,-3.14,256,257]),t=e,r=($r&&t instanceof Uint8Array||"[object Uint8Array]"===q(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Hr:function(){throw new Error("not implemented")};var Wr=Br,Mr="function"==typeof Uint16Array;var Rr="function"==typeof Uint16Array?Uint16Array:null;var Zr,Xr="function"==typeof Uint16Array?Uint16Array:void 0;Zr=function(){var r,e,t;if("function"!=typeof Rr)return!1;try{e=new Rr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Mr&&t instanceof Uint16Array||"[object Uint16Array]"===q(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Xr:function(){throw new Error("not implemented")};var Yr,qr={uint16:Zr,uint8:Wr};(Yr=new qr.uint16(1))[0]=4660;var zr=52===new qr.uint8(Yr.buffer)[0],Dr=!0===zr?1:0,Jr=new Lr(1),Kr=new Ir(Jr.buffer);function Qr(r){return Jr[0]=r,Kr[Dr]}var re=!0===zr?1:0,ee=new Lr(1),te=new Ir(ee.buffer);function ne(r){return r!=r}var oe=1023,ie=dr.NEGATIVE_INFINITY;var ae=.6931471803691238,ue=1.9082149292705877e-10,ce=0x40000000000000,fe=.3333333333333333,le=1048575,se=2146435072,pe=1048576,ve=1072693248;function ye(r){var e,t,n,o,i,a,u,c,f,l,s,p;return 0===r?ie:ne(r)||r<0?NaN:(i=0,(t=Qr(r))<pe&&(i-=54,t=Qr(r*=ce)),t>=se?r+r:(i+=(t>>20)-oe|0,i+=(c=(t&=le)+614244&1048576|0)>>20|0,u=(r=function(r,e){return ee[0]=r,te[re]=e>>>0,ee[0]}(r,t|c^ve))-1,(le&2+t)<3?0===u?0===i?0:i*ae+i*ue:(a=u*u*(.5-fe*u),0===i?u-a:i*ae-(a-i*ue-u)):(c=t-398458|0,f=440401-t|0,o=(s=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=n+o,(c|=f)>0?(e=.5*u*u,0===i?u-(e-l*(e+a)):i*ae-(e-(l*(e+a)+i*ue)-u)):0===i?u-l*(u-a):i*ae-(l*(u-a)-i*ue-u))))}var de,be,ge=Math.sqrt,he=1.772453850905516,we=Number.POSITIVE_INFINITY,me=2147483647,je=2146435072,Ae=1048575,xe=!0===zr?0:1,_e=new Lr(1),Ee=new Ir(_e.buffer);!0===zr?(de=1,be=0):(de=0,be=1);var Oe={HIGH:de,LOW:be},Se=new Lr(1),Ne=new Ir(Se.buffer),Ue=Oe.HIGH,Te=Oe.LOW;function Fe(r,e){return Ne[Ue]=r,Ne[Te]=e,Se[0]}var Ie=Math.floor,ke=1023,Ve=-1023,Pe=-1074;function Ge(r){return r===we||r===ie}var Le,$e,Ce=2147483648;!0===zr?(Le=1,$e=0):(Le=0,$e=1);var Be={HIGH:Le,LOW:$e},He=new Lr(1),We=new Ir(He.buffer),Me=Be.HIGH,Re=Be.LOW;function Ze(r,e,t,n){return He[0]=r,e[n]=We[Me],e[n+t]=We[Re],e}function Xe(r){return Ze(r,[0,0],1,0)}$(Xe,"assign",Ze);var Ye=[0,0];var qe=22250738585072014e-324;function ze(r){return Math.abs(r)}var De=4503599627370496;function Je(r,e,t,n){return ne(r)||Ge(r)?(e[n]=r,e[n+t]=0,e):0!==r&&ze(r)<qe?(e[n]=r*De,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}$((function(r){return Je(r,[0,0],1,0)}),"assign",Je);var Ke=2220446049250313e-31,Qe=2148532223,rt=[0,0],et=[0,0];function tt(r,e){var t,n,o,i,a,u;return 0===e||0===r||ne(r)||Ge(r)?r:(Je(r,rt,1,0),r=rt[0],e+=rt[1],e+=function(r){var e=Qr(r);return(e=(e&je)>>>20)-oe|0}(r),e<Pe?(o=0,i=r,Xe.assign(o,Ye,1,0),a=Ye[0],a&=me,u=Qr(i),Fe(a|=u&=Ce,Ye[1])):e>ke?r<0?ie:we:(e<=Ve?(e+=52,n=Ke):n=1,Xe.assign(r,et,1,0),t=et[0],t&=Qe,n*Fe(t|=e+oe<<20,et[1])))}function nt(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var ot=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],it=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],at=16777216,ut=5.960464477539063e-8,ct=nt(20),ft=nt(20),lt=nt(20),st=nt(20);function pt(r,e,t,n,o,i,a,u,c){var f,l,s,p,v,y,d,b,g;for(p=i,g=n[t],b=t,v=0;b>0;v++)l=ut*g|0,st[v]=g-at*l|0,g=n[b-1]+l,b-=1;if(g=tt(g,o),g-=8*Ie(.125*g),g-=d=0|g,s=0,o>0?(d+=v=st[t-1]>>24-o,st[t-1]-=v<<24-o,s=st[t-1]>>23-o):0===o?s=st[t-1]>>23:g>=.5&&(s=2),s>0){for(d+=1,f=0,v=0;v<t;v++)b=st[v],0===f?0!==b&&(f=1,st[v]=16777216-b):st[v]=16777215-b;if(o>0)switch(o){case 1:st[t-1]&=8388607;break;case 2:st[t-1]&=4194303}2===s&&(g=1-g,0!==f&&(g-=tt(1,o)))}if(0===g){for(b=0,v=t-1;v>=i;v--)b|=st[v];if(0===b){for(y=1;0===st[i-y];y++);for(v=t+1;v<=t+y;v++){for(c[u+v]=ot[a+v],l=0,b=0;b<=u;b++)l+=r[b]*c[u+(v-b)];n[v]=l}return pt(r,e,t+=y,n,o,i,a,u,c)}}if(0===g)for(t-=1,o-=24;0===st[t];)t-=1,o-=24;else(g=tt(g,-o))>=at?(l=ut*g|0,st[t]=g-at*l|0,o+=24,st[t+=1]=l):st[t]=0|g;for(l=tt(1,o),v=t;v>=0;v--)n[v]=l*st[v],l*=ut;for(v=t;v>=0;v--){for(l=0,y=0;y<=p&&y<=t-v;y++)l+=it[y]*n[v+y];lt[t-v]=l}for(l=0,v=t;v>=0;v--)l+=lt[v];for(e[0]=0===s?l:-l,l=lt[0]-l,v=1;v<=t;v++)l+=lt[v];return e[1]=0===s?l:-l,7&d}function vt(r,e,t,n){var o,i,a,u,c,f,l;for(4,(i=(t-3)/24|0)<0&&(i=0),u=t-24*(i+1),f=i-(a=n-1),l=a+4,c=0;c<=l;c++)ct[c]=f<0?0:ot[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*ct[a+(c-f)];ft[c]=o}return 4,pt(r,e,4,ft,u,4,i,a,ct)}var yt=Math.round,dt=.6366197723675814,bt=1.5707963267341256,gt=6077100506506192e-26,ht=6077100506303966e-26,wt=20222662487959506e-37,mt=20222662487111665e-37,jt=84784276603689e-45,At=2047;function xt(r,e,t){var n,o,i,a,u;return i=r-(n=yt(r*dt))*bt,a=n*gt,u=e>>20|0,t[0]=i-a,u-(Qr(t[0])>>20&At)>16&&(a=n*wt-((o=i)-(i=o-(a=n*ht))-a),t[0]=i-a,u-(Qr(t[0])>>20&At)>49&&(a=n*jt-((o=i)-(i=o-(a=n*mt))-a),t[0]=i-a)),t[1]=i-t[0]-a,n}var _t=0,Et=16777216,Ot=1.5707963267341256,St=6077100506506192e-26,Nt=2*St,Ut=3*St,Tt=4*St,Ft=598523,It=1072243195,kt=1073928572,Vt=1074752122,Pt=1074977148,Gt=1075183036,Lt=1075388923,$t=1075594811,Ct=1094263291,Bt=[0,0,0],Ht=[0,0];function Wt(r,e){var t,n,o,i,a,u,c;if((o=Qr(r)&me|0)<=It)return e[0]=r,e[1]=0,0;if(o<=Vt)return(o&Ae)===Ft?xt(r,o,e):o<=kt?r>0?(c=r-Ot,e[0]=c-St,e[1]=c-e[0]-St,1):(c=r+Ot,e[0]=c+St,e[1]=c-e[0]+St,-1):r>0?(c=r-2*Ot,e[0]=c-Nt,e[1]=c-e[0]-Nt,2):(c=r+2*Ot,e[0]=c+Nt,e[1]=c-e[0]+Nt,-2);if(o<=$t)return o<=Gt?o===Pt?xt(r,o,e):r>0?(c=r-3*Ot,e[0]=c-Ut,e[1]=c-e[0]-Ut,3):(c=r+3*Ot,e[0]=c+Ut,e[1]=c-e[0]+Ut,-3):o===Lt?xt(r,o,e):r>0?(c=r-4*Ot,e[0]=c-Tt,e[1]=c-e[0]-Tt,4):(c=r+4*Ot,e[0]=c+Tt,e[1]=c-e[0]+Tt,-4);if(o<Ct)return xt(r,o,e);if(o>=je)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return _e[0]=r,Ee[xe]}(r),c=Fe(o-((n=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)Bt[a]=0|c,c=(c-Bt[a])*Et;for(Bt[2]=c,i=3;Bt[i-1]===_t;)i-=1;return u=vt(Bt,Ht,n,i),r<0?(e[0]=-Ht[0],e[1]=-Ht[1],-u):(e[0]=Ht[0],e[1]=Ht[1],u)}var Mt=-.16666666666666632,Rt=.00833333333332249,Zt=-.0001984126982985795,Xt=27557313707070068e-22,Yt=-2.5050760253406863e-8,qt=1.58969099521155e-10,zt=.0416666666666666,Dt=-.001388888888887411,Jt=2480158728947673e-20,Kt=-2.7557314351390663e-7,Qt=2.087572321298175e-9,rn=-11359647557788195e-27;function en(r,e,t,n,o){var i,a,u,c,f;return a=Rt+(f=r*r)*(Zt+f*Xt)+f*(c=f*f)*(Yt+f*qt),u=f*r,t[o]=0===e?r+u*(Mt+f*a):r-(f*(.5*e-u*a)-e-u*Mt),a=f*(zt+f*(Dt+f*Jt)),a+=c*c*(Kt+f*(Qt+f*rn)),c=1-(i=.5*f),t[o+n]=c+(1-c-i+(f*a-r*e)),t}var tn=1072243195,nn=1044381696,on=[0,0];function an(r,e,t,n){var o,i;if(o=Qr(r),(o&=me)<=tn)return o<nn&&0==(0|r)&&(e[n]=r,e[n+t]=0),en(r,0,e,t,n);if(o>=je)return e[n]=NaN,e[n+t]=NaN,e;switch(i=Wt(r,on),en(on[0],on[1],e,t,n),3&i){case 1:return o=e[n+t],e[n+t]=-e[n],e[n]=o,e;case 2:return e[n]*=-1,e[n+t]*=-1,e;case 3:return o=-e[n+t],e[n+t]=e[n],e[n]=o,e;default:return e}}$((function(r){return an(r,[0,0],1,0)}),"assign",an);var un=3.8317059702075125,cn=7.015586669815619,fn=981,ln=-.0003252797924876844,sn=1796,pn=-38330184381246464e-21,vn=[0,0];function yn(r){var e,t,n,o,i,a,u,c;return c=ze(r),0===r||c===we?0:(c<=4?(i=function(r){var e,t;return 0===r?-.03405537391318949:((r<0?-r:r)<=1?(e=r*(6678104126.14924+r*(r*(980629.0409895825+r*(r*(10.650724020080236+-.010767857011487301*r)-4461.579298277507))-115486967.64841276))-142585098013.66644,t=4186860446082.0176+r*(42091902282.58013+r*(202283751.40097034+r*(591176.1449417479+r*(1074.227223951738+r*(1+0*r)))))):(e=(r=1/r)*(10.650724020080236+r*(r*(980629.0409895825+r*(r*(6678104126.14924+-142585098013.66644*r)-115486967.64841276))-4461.579298277507))-.010767857011487301,t=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(202283751.40097034+r*(42091902282.58013+4186860446082.0176*r)))))),e/t)}(a=r*r),e=(u=c*(c+un)*(c-fn/256-ln))*i):c<=8?(i=function(r){var e,t;return 0===r?-.010158790774176108:((r<0?-r:r)<=1?(e=r*(1660853173129901.8+r*(r*(355806656709.1062+r*(r*(5079326.614801118+r*(4.6179191852758255*r-7502.334222078161))-1811393126.9860668))-36658018905416.664))-0x3e45840c066730,t=0x17f1d1995ae4fb00+r*(0x3cda8dbce6f4c4+r*(84899346165481.42+r*(276227772862.44086+r*(648725028.9959639+r*(1126712.5065029138+r*(1388.6978985861358+1*r))))))):(e=4.6179191852758255+(r=1/r)*(r*(5079326.614801118+r*(r*(355806656709.1062+r*(r*(1660853173129901.8+-0x3e45840c066730*r)-36658018905416.664))-1811393126.9860668))-7502.334222078161),t=1+r*(1388.6978985861358+r*(1126712.5065029138+r*(648725028.9959639+r*(276227772862.44086+r*(84899346165481.42+r*(0x3cda8dbce6f4c4+0x17f1d1995ae4fb00*r))))))),e/t)}(a=r*r),e=(u=c*(c+cn)*(c-sn/256-pn))*i):(t=function(r){var e,t;return 0===r?1:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(0*r-1611.6166443246102)-109824.05543459347)-1523529.3511811374)-6603373.248364939)-9942246.505077641)-4435757.816794128,t=r*(r*(r*(r*(r*(1*r-1455.0094401904962)-107263.8599110382)-1511809.5066341609)-6585339.4797230875)-9934124.389934586)-4435757.816794128):(e=0+(r=1/r)*(r*(r*(r*(r*(-4435757.816794128*r-9942246.505077641)-6603373.248364939)-1523529.3511811374)-109824.05543459347)-1611.6166443246102),t=1+r*(r*(r*(r*(r*(-4435757.816794128*r-9934124.389934586)-6585339.4797230875)-1511809.5066341609)-107263.8599110382)-1455.0094401904962)),e/t)}(o=(a=8/c)*a),n=function(r){var e,t;return 0===r?.046875:((r<0?-r:r)<=1?(e=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+0*r))))),t=708712.8194102874+r*(1819458.0422439973+r*(1419460.669603721+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+1*r)))))):(e=0+(r=1/r)*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+33220.913409857225*r))))),t=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460.669603721+r*(1819458.0422439973+708712.8194102874*r)))))),e/t)}(o),u=1/(ge(c)*he),an(c,vn,1,0),e=u*(t*(vn[0]-vn[1])+a*n*(vn[0]+vn[1]))),r<0&&(e*=-1),e)}var dn=1/he,bn=.6366197723675814,gn=2.197141326031017,hn=5.429681040794135,wn=562,mn=.001828826031017035,jn=1390,An=-6459205864867228e-21,xn=[0,0];function _n(r){var e,t,n,o,i,a,u;return r<0?NaN:0===r?ie:r===we?0:r<=4?(i=r*r,a=ye(r/gn)*yn(r)*bn,o=function(r){var e,t;return 0===r?.13187550549740895:((r<0?-r:r)<=1?(e=40535726612579.55+r*(5470861171652.543+r*(r*(7214454821.450256+r*(r*(221579.5322228026+-317.1442466004613*r)-59157479.9974084))-375959744978.196)),t=307378739210792.9+r*(4127228620040.646+r*(27800352738.690586+r*(122504351.22182964+r*(381364.70753052575+r*(820.7990816839387+1*r)))))):(e=(r=1/r)*(221579.5322228026+r*(r*(7214454821.450256+r*(r*(5470861171652.543+40535726612579.55*r)-375959744978.196))-59157479.9974084))-317.1442466004613,t=1+r*(820.7990816839387+r*(381364.70753052575+r*(122504351.22182964+r*(27800352738.690586+r*(4127228620040.646+307378739210792.9*r)))))),e/t)}(i),a+(u=(r+gn)*(r-wn/256-mn)/r)*o):r<=8?(i=r*r,a=ye(r/hn)*yn(r)*bn,o=function(r){var e,t;return 0===r?.021593919914419626:((r<0?-r:r)<=1?(e=0x9fcaed579ed86000+r*(r*(r*(4068627528980474.5+r*(r*(374536739624.3849+r*(r*(1915380.6858264203+-1233.7180442012952*r)-1195796191.2070618))-59530713129741.984))-0x53fb01dd8596c0)-0x4ed64a1a7552bc00),t=5332184431331618e5+r*(0x4f0f2b7ff905d800+r*(0x6d8e405cd717f0+r*(111870100658569.7+r*(302217668529.60406+r*(635503180.8708892+r*(1045374.8201934079+r*(1285.516484932161+1*r)))))))):(e=(r=1/r)*(1915380.6858264203+r*(r*(374536739624.3849+r*(r*(4068627528980474.5+r*(r*(0x9fcaed579ed86000*r-0x4ed64a1a7552bc00)-0x53fb01dd8596c0))-59530713129741.984))-1195796191.2070618))-1233.7180442012952,t=1+r*(1285.516484932161+r*(1045374.8201934079+r*(635503180.8708892+r*(302217668529.60406+r*(111870100658569.7+r*(0x6d8e405cd717f0+r*(0x4f0f2b7ff905d800+5332184431331618e5*r)))))))),e/t)}(i),a+(u=(r+hn)*(r-jn/256-An)/r)*o):(e=function(r){var e,t;return 0===r?1:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(0*r-1611.6166443246102)-109824.05543459347)-1523529.3511811374)-6603373.248364939)-9942246.505077641)-4435757.816794128,t=r*(r*(r*(r*(r*(1*r-1455.0094401904962)-107263.8599110382)-1511809.5066341609)-6585339.4797230875)-9934124.389934586)-4435757.816794128):(e=0+(r=1/r)*(r*(r*(r*(r*(-4435757.816794128*r-9942246.505077641)-6603373.248364939)-1523529.3511811374)-109824.05543459347)-1611.6166443246102),t=1+r*(r*(r*(r*(r*(-4435757.816794128*r-9934124.389934586)-6585339.4797230875)-1511809.5066341609)-107263.8599110382)-1455.0094401904962)),e/t)}(n=(i=8/r)*i),t=function(r){var e,t;return 0===r?.046875:((r<0?-r:r)<=1?(e=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+0*r))))),t=708712.8194102874+r*(1819458.0422439973+r*(1419460.669603721+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+1*r)))))):(e=0+(r=1/r)*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+33220.913409857225*r))))),t=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460.669603721+r*(1819458.0422439973+708712.8194102874*r)))))),e/t)}(n),u=dn/ge(r),an(r,xn,1,0),u*(i*t*(xn[0]-xn[1])-e*(xn[0]+xn[1])))}return function(r){return Sr(r,_n)}}));
//# sourceMappingURL=index.js.map
