// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterBessely1=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,n.get),v&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function v(r){return"boolean"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function w(r,t){return null!=r&&d.call(r,t)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(r){var t,n,e;if(null==r)return s.call(r);n=r[m],t=w(r,m);try{r[m]=void 0}catch(t){return s.call(r)}return e=s.call(r),t?r[m]=n:delete r[m],e}:function(r){return s.call(r)},h=Boolean.prototype.toString;var g=b();function A(r){return"object"==typeof r&&(r instanceof Boolean||(g?function(r){try{return h.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function _(r){return v(r)||A(r)}function O(){return new Function("return this;")()}l(_,"isPrimitive",v),l(_,"isObject",A);var x="object"==typeof self?self:null,N="object"==typeof window?window:null,U="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},S="object"==typeof U?U:null;var E=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(x)return x;if(N)return N;if(S)return S;throw new Error("unexpected error. Unable to resolve global object.")}(),T=E.document&&E.document.childNodes,F=Int8Array;function I(){return/^\s*function\s*([^(]*)/i}var P=/^\s*function\s*([^(]*)/i;l(I,"REGEXP",P);var V=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function B(r){return null!==r&&"object"==typeof r}function G(r){var t,n,e,o;if(("Object"===(n=j(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=P.exec(e.toString()))return t[1]}return B(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(B,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!V(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(B));var H="function"==typeof y||"object"==typeof F||"function"==typeof T?function(r){return G(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?G(r).toLowerCase():t};function L(r){return"function"===H(r)}function M(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&L(r.next)}function k(r){return"number"==typeof r}var W=Number,C=W.prototype.toString;var Y=b();function q(r){return"object"==typeof r&&(r instanceof W||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function R(r){return k(r)||q(r)}l(R,"isPrimitive",k),l(R,"isObject",q);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!V(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),J(r))}(r),!t||!w(r,"constructor")&&w(t,"constructor")&&L(t.constructor)&&"[object Function]"===j(t.constructor)&&w(t,"isPrototypeOf")&&L(t.isPrototypeOf)&&(t===K||function(r){var t;for(t in r)if(!w(r,t))return!1;return!0}(r)))}function Z(r,t){return Q(t)?(w(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")}function $(r,t,n){var e,o,u,i;if(!M(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!L(t))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+t+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,n)))throw u;return l(o={},"next",f),l(o,"return",a),X&&L(r[X])&&l(o,X,c),o;function f(){var n;return i?{done:!0}:(n=r.next()).done?(i=!0,n):{value:k(n.value)?t(n.value):e.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return $(r[X](),t,e)}}var rr="function"==typeof Uint32Array;var tr="function"==typeof Uint32Array?Uint32Array:null;var nr,er="function"==typeof Uint32Array?Uint32Array:void 0;nr=function(){var r,t,n;if("function"!=typeof tr)return!1;try{t=new tr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(rr&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?er:function(){throw new Error("not implemented")};var or=nr,ur="function"==typeof Float64Array;var ir="function"==typeof Float64Array?Float64Array:null;var fr,ar="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,t,n;if("function"!=typeof ir)return!1;try{t=new ir([1,3.14,-3.14,NaN]),n=t,r=(ur&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var cr=fr,lr="function"==typeof Uint8Array;var yr="function"==typeof Uint8Array?Uint8Array:null;var vr,pr="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,t,n;if("function"!=typeof yr)return!1;try{t=new yr(t=[1,3.14,-3.14,256,257]),n=t,r=(lr&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var br=vr,sr="function"==typeof Uint16Array;var dr="function"==typeof Uint16Array?Uint16Array:null;var wr,mr="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,t,n;if("function"!=typeof dr)return!1;try{t=new dr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(sr&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var jr,hr={uint16:wr,uint8:br};(jr=new hr.uint16(1))[0]=4660;var gr=52===new hr.uint8(jr.buffer)[0],Ar=!0===gr?1:0,_r=new cr(1),Or=new or(_r.buffer);function xr(r){return _r[0]=r,Or[Ar]}var Nr=!0===gr?1:0,Ur=new cr(1),Sr=new or(Ur.buffer);function Er(r){return r!=r}var Tr=1023,Fr=W.NEGATIVE_INFINITY;var Ir=.6931471803691238,Pr=1.9082149292705877e-10,Vr=1048575;function Br(r){var t,n,e,o,u,i,f,a,c,l,y,v;return 0===r?Fr:Er(r)||r<0?NaN:(u=0,(n=xr(r))<1048576&&(u-=54,n=xr(r*=0x40000000000000)),n>=2146435072?r+r:(u+=(n>>20)-Tr|0,u+=(a=(n&=Vr)+614244&1048576|0)>>20|0,f=(r=function(r,t){return Ur[0]=r,Sr[Nr]=t>>>0,Ur[0]}(r,n|1072693248^a))-1,(Vr&2+n)<3?0===f?0===u?0:u*Ir+u*Pr:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*Ir-(i-u*Pr-f)):(a=n-398458|0,c=440401-n|0,o=(y=(v=(l=f/(2+f))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),i=e+o,(a|=c)>0?(t=.5*f*f,0===u?f-(t-l*(t+i)):u*Ir-(t-(l*(t+i)+u*Pr)-f)):0===u?f-l*(f-i):u*Ir-(l*(f-i)-u*Pr-f))))}var Gr,Hr,Lr=Math.sqrt,Mr=1.772453850905516,kr=Number.POSITIVE_INFINITY,Wr=!0===gr?0:1,Cr=new cr(1),Yr=new or(Cr.buffer);!0===gr?(Gr=1,Hr=0):(Gr=0,Hr=1);var qr={HIGH:Gr,LOW:Hr},Rr=new cr(1),Xr=new or(Rr.buffer),zr=qr.HIGH,Dr=qr.LOW;function Jr(r,t){return Xr[zr]=r,Xr[Dr]=t,Rr[0]}var Kr,Qr,Zr=Math.floor;function $r(r){return r===kr||r===Fr}!0===gr?(Kr=1,Qr=0):(Kr=0,Qr=1);var rt={HIGH:Kr,LOW:Qr},tt=new cr(1),nt=new or(tt.buffer),et=rt.HIGH,ot=rt.LOW;function ut(r,t){return tt[0]=t,r[0]=nt[et],r[1]=nt[ot],r}function it(r,t){return 1===arguments.length?ut([0,0],r):ut(r,t)}var ft=[0,0];function at(r){return Math.abs(r)}function ct(r,t,n,e){return Er(r)||$r(r)?(t[e]=r,t[e+n]=0,t):0!==r&&at(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}l((function(r){return ct(r,[0,0],1,0)}),"assign",ct);var lt=[0,0],yt=[0,0];function vt(r,t){var n,e,o,u,i;return 0===t||0===r||Er(r)||$r(r)?r:(ct(r,lt,1,0),t+=lt[1],t+=function(r){var t=xr(r);return(t=(2146435072&t)>>>20)-Tr|0}(r=lt[0]),t<-1074?(o=r,it(ft,0),u=ft[0],u&=2147483647,i=xr(o),Jr(u|=i&=2147483648,ft[1])):t>1023?r<0?Fr:kr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,it(yt,r),n=yt[0],n&=2148532223,e*Jr(n|=t+Tr<<20,yt[1])))}function pt(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var bt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],st=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],dt=16777216,wt=5.960464477539063e-8,mt=pt(20),jt=pt(20),ht=pt(20),gt=pt(20);function At(r,t,n,e,o,u,i,f,a){var c,l,y,v,p,b,s,d,w;for(v=u,w=e[n],d=n,p=0;d>0;p++)l=wt*w|0,gt[p]=w-dt*l|0,w=e[d-1]+l,d-=1;if(w=vt(w,o),w-=8*Zr(.125*w),w-=s=0|w,y=0,o>0?(s+=p=gt[n-1]>>24-o,gt[n-1]-=p<<24-o,y=gt[n-1]>>23-o):0===o?y=gt[n-1]>>23:w>=.5&&(y=2),y>0){for(s+=1,c=0,p=0;p<n;p++)d=gt[p],0===c?0!==d&&(c=1,gt[p]=16777216-d):gt[p]=16777215-d;if(o>0)switch(o){case 1:gt[n-1]&=8388607;break;case 2:gt[n-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=vt(1,o)))}if(0===w){for(d=0,p=n-1;p>=u;p--)d|=gt[p];if(0===d){for(b=1;0===gt[u-b];b++);for(p=n+1;p<=n+b;p++){for(a[f+p]=bt[i+p],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(p-d)];e[p]=l}return At(r,t,n+=b,e,o,u,i,f,a)}}if(0===w)for(n-=1,o-=24;0===gt[n];)n-=1,o-=24;else(w=vt(w,-o))>=dt?(l=wt*w|0,gt[n]=w-dt*l|0,o+=24,gt[n+=1]=l):gt[n]=0|w;for(l=vt(1,o),p=n;p>=0;p--)e[p]=l*gt[p],l*=wt;for(p=n;p>=0;p--){for(l=0,b=0;b<=v&&b<=n-p;b++)l+=st[b]*e[p+b];ht[n-p]=l}for(l=0,p=n;p>=0;p--)l+=ht[p];for(t[0]=0===y?l:-l,l=ht[0]-l,p=1;p<=n;p++)l+=ht[p];return t[1]=0===y?l:-l,7&s}function _t(r,t,n,e){var o,u,i,f,a,c,l;for(4,(u=(n-3)/24|0)<0&&(u=0),f=n-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)mt[a]=c<0?0:bt[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*mt[i+(a-c)];jt[a]=o}return 4,At(r,t,4,jt,f,4,u,i,mt)}var Ot=Math.round;function xt(r,t,n){var e,o,u,i,f;return u=r-1.5707963267341256*(e=Ot(.6366197723675814*r)),i=6077100506506192e-26*e,f=t>>20|0,n[0]=u-i,f-(xr(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),n[0]=u-i,f-(xr(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),n[0]=u-i)),n[1]=u-n[0]-i,e}var Nt=1.5707963267341256,Ut=6077100506506192e-26,St=2*Ut,Et=3*Ut,Tt=4*Ut,Ft=[0,0,0],It=[0,0];function Pt(r,t){var n,e,o,u,i,f,a;if((o=2147483647&xr(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?xt(r,o,t):o<=1073928572?r>0?(a=r-Nt,t[0]=a-Ut,t[1]=a-t[0]-Ut,1):(a=r+Nt,t[0]=a+Ut,t[1]=a-t[0]+Ut,-1):r>0?(a=r-2*Nt,t[0]=a-St,t[1]=a-t[0]-St,2):(a=r+2*Nt,t[0]=a+St,t[1]=a-t[0]+St,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?xt(r,o,t):r>0?(a=r-3*Nt,t[0]=a-Et,t[1]=a-t[0]-Et,3):(a=r+3*Nt,t[0]=a+Et,t[1]=a-t[0]+Et,-3):1075388923===o?xt(r,o,t):r>0?(a=r-4*Nt,t[0]=a-Tt,t[1]=a-t[0]-Tt,4):(a=r+4*Nt,t[0]=a+Tt,t[1]=a-t[0]+Tt,-4);if(o<1094263291)return xt(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return Cr[0]=r,Yr[Wr]}(r),a=Jr(o-((e=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)Ft[i]=0|a,a=16777216*(a-Ft[i]);for(Ft[2]=a,u=3;0===Ft[u-1];)u-=1;return f=_t(Ft,It,e,u),r<0?(t[0]=-It[0],t[1]=-It[1],-f):(t[0]=It[0],t[1]=It[1],f)}var Vt=-.16666666666666632;function Bt(r,t,n){var e,o,u,i,f;return o=.00833333333332249+(f=t*t)*(27557313707070068e-22*f-.0001984126982985795)+f*(i=f*f)*(1.58969099521155e-10*f-2.5050760253406863e-8),u=f*t,r[0]=0===n?t+u*(Vt+f*o):t-(f*(.5*n-u*o)-n-u*Vt),o=f*(.0416666666666666+f*(2480158728947673e-20*f-.001388888888887411)),o+=i*i*(f*(2.087572321298175e-9+-11359647557788195e-27*f)-2.7557314351390663e-7),i=1-(e=.5*f),r[1]=i+(1-i-e+(f*o-t*n)),r}var Gt=[0,0];function Ht(r,t){var n,e;if(n=xr(t),(n&=2147483647)<=1072243195)return n<1044381696&&0==(0|t)&&(r[0]=t,r[1]=0),Bt(r,t,0);if(n>=2146435072)return r[0]=NaN,r[1]=NaN,r;switch(e=Pt(t,Gt),Bt(r,Gt[0],Gt[1]),3&e){case 1:return n=r[1],r[1]=-r[0],r[0]=n,r;case 2:return r[0]*=-1,r[1]*=-1,r;case 3:return n=-r[1],r[1]=r[0],r[0]=n,r;default:return r}}function Lt(r,t){return 1===arguments.length?Ht([0,0],r):Ht(r,t)}var Mt=[0,0];function kt(r){var t,n,e,o,u,i,f,a;return a=at(r),0===r||a===kr?0:(a<=4?(u=function(r){var t,n;return 0===r?-.03405537391318949:((r<0?-r:r)<=1?(t=r*(6678104126.14924+r*(r*(980629.0409895825+r*(r*(10.650724020080236+-.010767857011487301*r)-4461.579298277507))-115486967.64841276))-142585098013.66644,n=4186860446082.0176+r*(42091902282.58013+r*(202283751.40097034+r*(591176.1449417479+r*(1074.227223951738+r*(1+0*r)))))):(t=(r=1/r)*(10.650724020080236+r*(r*(980629.0409895825+r*(r*(6678104126.14924+-142585098013.66644*r)-115486967.64841276))-4461.579298277507))-.010767857011487301,n=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(202283751.40097034+r*(42091902282.58013+4186860446082.0176*r)))))),t/n)}(i=r*r),t=(f=a*(a+3.8317059702075125)*(a-981/256- -.0003252797924876844))*u):a<=8?(u=function(r){var t,n;return 0===r?-.010158790774176108:((r<0?-r:r)<=1?(t=r*(1660853173129901.8+r*(r*(355806656709.1062+r*(r*(5079326.614801118+r*(4.6179191852758255*r-7502.334222078161))-1811393126.9860668))-36658018905416.664))-0x3e45840c066730,n=0x17f1d1995ae4fb00+r*(0x3cda8dbce6f4c4+r*(84899346165481.42+r*(276227772862.44086+r*(648725028.9959639+r*(1126712.5065029138+r*(1388.6978985861358+1*r))))))):(t=4.6179191852758255+(r=1/r)*(r*(5079326.614801118+r*(r*(355806656709.1062+r*(r*(1660853173129901.8+-0x3e45840c066730*r)-36658018905416.664))-1811393126.9860668))-7502.334222078161),n=1+r*(1388.6978985861358+r*(1126712.5065029138+r*(648725028.9959639+r*(276227772862.44086+r*(84899346165481.42+r*(0x3cda8dbce6f4c4+0x17f1d1995ae4fb00*r))))))),t/n)}(i=r*r),t=(f=a*(a+7.015586669815619)*(a-7.015625- -38330184381246464e-21))*u):(n=function(r){var t,n;return 0===r?1:((r<0?-r:r)<=1?(t=r*(r*(r*(r*(r*(0*r-1611.6166443246102)-109824.05543459347)-1523529.3511811374)-6603373.248364939)-9942246.505077641)-4435757.816794128,n=r*(r*(r*(r*(r*(1*r-1455.0094401904962)-107263.8599110382)-1511809.5066341609)-6585339.4797230875)-9934124.389934586)-4435757.816794128):(t=0+(r=1/r)*(r*(r*(r*(r*(-4435757.816794128*r-9942246.505077641)-6603373.248364939)-1523529.3511811374)-109824.05543459347)-1611.6166443246102),n=1+r*(r*(r*(r*(r*(-4435757.816794128*r-9934124.389934586)-6585339.4797230875)-1511809.5066341609)-107263.8599110382)-1455.0094401904962)),t/n)}(o=(i=8/a)*i),e=function(r){var t,n;return 0===r?.046875:((r<0?-r:r)<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+0*r))))),n=708712.8194102874+r*(1819458.0422439973+r*(1419460.669603721+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+1*r)))))):(t=0+(r=1/r)*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+33220.913409857225*r))))),n=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460.669603721+r*(1819458.0422439973+708712.8194102874*r)))))),t/n)}(o),f=1/(Lr(a)*Mr),Lt(Mt,a),t=f*(n*(Mt[0]-Mt[1])+i*e*(Mt[0]+Mt[1]))),r<0&&(t*=-1),t)}var Wt=.6366197723675814,Ct=2.197141326031017,Yt=5.429681040794135,qt=[0,0];function Rt(r){var t,n,e,o,u,i,f;return r<0?NaN:0===r?Fr:r===kr?0:r<=4?(u=r*r,i=Br(r/Ct)*kt(r)*Wt,o=function(r){var t,n;return 0===r?.13187550549740895:((r<0?-r:r)<=1?(t=40535726612579.55+r*(5470861171652.543+r*(r*(7214454821.450256+r*(r*(221579.5322228026+-317.1442466004613*r)-59157479.9974084))-375959744978.196)),n=307378739210792.9+r*(4127228620040.646+r*(27800352738.690586+r*(122504351.22182964+r*(381364.70753052575+r*(820.7990816839387+1*r)))))):(t=(r=1/r)*(221579.5322228026+r*(r*(7214454821.450256+r*(r*(5470861171652.543+40535726612579.55*r)-375959744978.196))-59157479.9974084))-317.1442466004613,n=1+r*(820.7990816839387+r*(381364.70753052575+r*(122504351.22182964+r*(27800352738.690586+r*(4127228620040.646+307378739210792.9*r)))))),t/n)}(u),i+(f=(r+Ct)*(r-562/256-.001828826031017035)/r)*o):r<=8?(u=r*r,i=Br(r/Yt)*kt(r)*Wt,o=function(r){var t,n;return 0===r?.021593919914419626:((r<0?-r:r)<=1?(t=0x9fcaed579ed86000+r*(r*(r*(4068627528980474.5+r*(r*(374536739624.3849+r*(r*(1915380.6858264203+-1233.7180442012952*r)-1195796191.2070618))-59530713129741.984))-0x53fb01dd8596c0)-0x4ed64a1a7552bc00),n=5332184431331618e5+r*(0x4f0f2b7ff905d800+r*(0x6d8e405cd717f0+r*(111870100658569.7+r*(302217668529.60406+r*(635503180.8708892+r*(1045374.8201934079+r*(1285.516484932161+1*r)))))))):(t=(r=1/r)*(1915380.6858264203+r*(r*(374536739624.3849+r*(r*(4068627528980474.5+r*(r*(0x9fcaed579ed86000*r-0x4ed64a1a7552bc00)-0x53fb01dd8596c0))-59530713129741.984))-1195796191.2070618))-1233.7180442012952,n=1+r*(1285.516484932161+r*(1045374.8201934079+r*(635503180.8708892+r*(302217668529.60406+r*(111870100658569.7+r*(0x6d8e405cd717f0+r*(0x4f0f2b7ff905d800+5332184431331618e5*r)))))))),t/n)}(u),i+(f=(r+Yt)*(r-1390/256- -6459205864867228e-21)/r)*o):(t=function(r){var t,n;return 0===r?1:((r<0?-r:r)<=1?(t=r*(r*(r*(r*(r*(0*r-1611.6166443246102)-109824.05543459347)-1523529.3511811374)-6603373.248364939)-9942246.505077641)-4435757.816794128,n=r*(r*(r*(r*(r*(1*r-1455.0094401904962)-107263.8599110382)-1511809.5066341609)-6585339.4797230875)-9934124.389934586)-4435757.816794128):(t=0+(r=1/r)*(r*(r*(r*(r*(-4435757.816794128*r-9942246.505077641)-6603373.248364939)-1523529.3511811374)-109824.05543459347)-1611.6166443246102),n=1+r*(r*(r*(r*(r*(-4435757.816794128*r-9934124.389934586)-6585339.4797230875)-1511809.5066341609)-107263.8599110382)-1455.0094401904962)),t/n)}(e=(u=8/r)*u),n=function(r){var t,n;return 0===r?.046875:((r<0?-r:r)<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+0*r))))),n=708712.8194102874+r*(1819458.0422439973+r*(1419460.669603721+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+1*r)))))):(t=0+(r=1/r)*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+33220.913409857225*r))))),n=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460.669603721+r*(1819458.0422439973+708712.8194102874*r)))))),t/n)}(e),f=.5641895835477563/Lr(r),Lt(qt,r),f*(u*n*(qt[0]-qt[1])-t*(qt[0]+qt[1])))}return function(r){return $(r,Rt)}}));
//# sourceMappingURL=browser.js.map
