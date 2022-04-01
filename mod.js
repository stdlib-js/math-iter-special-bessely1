// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(n){var e=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:function(){return r[n]}})})),t}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(r,t,n){var e,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),v="get"in n,y="set"in n,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(r,t,n.get),y&&a&&a.call(r,t,n.set),r},v=e,y=l,p=n()?v:y;var b=function(r,t,n){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},s=b,d=/./;var m=function(r){return"boolean"==typeof r};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,h=_;var g=function(r){return h.call(r)},A=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&A.call(r,t)},N="function"==typeof Symbol?Symbol.toStringTag:"",x=O,E=N,U=_;var S=g,P=function(r){var t,n,e;if(null==r)return U.call(r);n=r[E],t=x(r,E);try{r[E]=void 0}catch(t){return U.call(r)}return e=U.call(r),t?r[E]=n:delete r[E],e},F=j()?P:S,I=Boolean.prototype.toString;var T=F,G=function(r){try{return I.call(r),!0}catch(r){return!1}},V=j();var H=function(r){return"object"==typeof r&&(r instanceof Boolean||(V?G(r):"[object Boolean]"===T(r)))},M=m,B=H;var L=s,k=function(r){return M(r)||B(r)},W=H;L(k,"isPrimitive",m),L(k,"isObject",W);var C="object"==typeof self?self:null,R="object"==typeof window?window:null,X=k.isPrimitive,Y=function(){return new Function("return this;")()},q=C,z=R,D=r(Object.freeze({__proto__:null}));var J=function(r){if(arguments.length){if(!X(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Y()}if(q)return q;if(z)return z;if(D)return D;throw new Error("unexpected error. Unable to resolve global object.")},K=J(),Q=K.document&&K.document.childNodes,Z=Int8Array,$=d,rr=Q,tr=Z;var nr=function(){return"function"==typeof $||"object"==typeof tr||"function"==typeof rr};var er=function(){return/^\s*function\s*([^(]*)/i},or=er;s(or,"REGEXP",er());var ur=or,ir=F;var ar=Array.isArray?Array.isArray:function(r){return"[object Array]"===ir(r)},fr=ar;var cr=function(r){return null!==r&&"object"==typeof r};s(cr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!fr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(cr));var lr=cr;var vr=F,yr=ur.REGEXP,pr=function(r){return lr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var br=function(r){var t,n,e;if(("Object"===(n=vr(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=yr.exec(e.toString()))return t[1]}return pr(r)?"Buffer":n},sr=br;var dr=br;var mr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?sr(r).toLowerCase():t},wr=function(r){return dr(r).toLowerCase()},jr=nr()?wr:mr;var _r=function(r){return"function"===jr(r)},hr=_r;var gr=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&hr(r.next)};var Ar=function(r){return"number"==typeof r},Or=Number,Nr=Or.prototype.toString;var xr=F,Er=Or,Ur=function(r){try{return Nr.call(r),!0}catch(r){return!1}},Sr=j();var Pr=function(r){return"object"==typeof r&&(r instanceof Er||(Sr?Ur(r):"[object Number]"===xr(r)))},Fr=Ar,Ir=Pr;var Tr=s,Gr=function(r){return Fr(r)||Ir(r)},Vr=Pr;Tr(Gr,"isPrimitive",Ar),Tr(Gr,"isObject",Vr);var Hr=Gr,Mr=O;var Br=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Mr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Lr=ar;var kr=function(r){return"object"==typeof r&&null!==r&&!Lr(r)},Wr=Object.getPrototypeOf;var Cr=function(r){return r.__proto__},Rr=F,Xr=Cr;var Yr=function(r){var t=Xr(r);return t||null===t?t:"[object Function]"===Rr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},qr=Wr,zr=Yr,Dr=_r(Object.getPrototypeOf)?qr:zr;var Jr=kr,Kr=_r,Qr=function(r){return null==r?null:(r=Object(r),Dr(r))},Zr=O,$r=F,rt=Object.prototype;var tt=function(r){var t;return!!Jr(r)&&(!(t=Qr(r))||!Zr(r,"constructor")&&Zr(t,"constructor")&&Kr(t.constructor)&&"[object Function]"===$r(t.constructor)&&Zr(t,"isPrototypeOf")&&Kr(t.isPrototypeOf)&&(t===rt||function(r){var t;for(t in r)if(!Zr(r,t))return!1;return!0}(r)))},nt=tt,et=O;var ot=s,ut=_r,it=gr,at=Hr.isPrimitive,ft=Br,ct=function(r,t){return nt(t)?(et(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var lt=function r(t,n,e){var o,u,i,a;if(!it(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!ut(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(o={invalid:NaN},arguments.length>2&&(i=ct(o,e)))throw i;return ot(u={},"next",f),ot(u,"return",c),ft&&ut(t[ft])&&ot(u,ft,l),u;function f(){var r;return a?{done:!0}:(r=t.next()).done?(a=!0,r):{value:at(r.value)?n(r.value):o.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t[ft](),n,o)}},vt=lt,yt=F,pt="function"==typeof Uint32Array;var bt="function"==typeof Uint32Array?Uint32Array:null,st=function(r){return pt&&r instanceof Uint32Array||"[object Uint32Array]"===yt(r)},dt=bt;var mt=function(){var r,t;if("function"!=typeof dt)return!1;try{t=new dt(t=[1,3.14,-3.14,4294967296,4294967297]),r=st(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var wt="function"==typeof Uint32Array?Uint32Array:void 0,jt=function(){throw new Error("not implemented")},_t=mt()?wt:jt,ht=F,gt="function"==typeof Float64Array;var At="function"==typeof Float64Array?Float64Array:null,Ot=function(r){return gt&&r instanceof Float64Array||"[object Float64Array]"===ht(r)},Nt=At;var xt=function(){var r,t;if("function"!=typeof Nt)return!1;try{t=new Nt([1,3.14,-3.14,NaN]),r=Ot(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var Et="function"==typeof Float64Array?Float64Array:void 0,Ut=function(){throw new Error("not implemented")},St=xt()?Et:Ut,Pt=F,Ft="function"==typeof Uint8Array;var It="function"==typeof Uint8Array?Uint8Array:null,Tt=function(r){return Ft&&r instanceof Uint8Array||"[object Uint8Array]"===Pt(r)},Gt=It;var Vt=function(){var r,t;if("function"!=typeof Gt)return!1;try{t=new Gt(t=[1,3.14,-3.14,256,257]),r=Tt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Ht="function"==typeof Uint8Array?Uint8Array:void 0,Mt=function(){throw new Error("not implemented")},Bt=Vt()?Ht:Mt,Lt=F,kt="function"==typeof Uint16Array;var Wt="function"==typeof Uint16Array?Uint16Array:null,Ct=function(r){return kt&&r instanceof Uint16Array||"[object Uint16Array]"===Lt(r)},Rt=Wt;var Xt=function(){var r,t;if("function"!=typeof Rt)return!1;try{t=new Rt(t=[1,3.14,-3.14,65536,65537]),r=Ct(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Yt,qt="function"==typeof Uint16Array?Uint16Array:void 0,zt=function(){throw new Error("not implemented")},Dt={uint16:Xt()?qt:zt,uint8:Bt};(Yt=new Dt.uint16(1))[0]=4660;var Jt=52===new Dt.uint8(Yt.buffer)[0],Kt=_t,Qt=!0===Jt?1:0,Zt=new St(1),$t=new Kt(Zt.buffer);var rn=function(r){return Zt[0]=r,$t[Qt]},tn=_t,nn=!0===Jt?1:0,en=new St(1),on=new tn(en.buffer);var un=function(r,t){return en[0]=r,on[nn]=t>>>0,en[0]},an=un;var fn=function(r){return r!=r},cn=Or.NEGATIVE_INFINITY;var ln=rn,vn=an,yn=fn,pn=cn,bn=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},sn=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},dn=.6931471803691238,mn=1.9082149292705877e-10;var wn=function(r){var t,n,e,o,u,i,a,f,c,l,v;return 0===r?pn:yn(r)||r<0?NaN:(o=0,(n=ln(r))<1048576&&(o-=54,n=ln(r*=0x40000000000000)),n>=2146435072?r+r:(o+=(n>>20)-1023|0,o+=(a=(n&=1048575)+614244&1048576|0)>>20|0,i=(r=vn(r,n|1072693248^a))-1,(1048575&2+n)<3?0===i?0===o?0:o*dn+o*mn:(u=i*i*(.5-.3333333333333333*i),0===o?i-u:o*dn-(u-o*mn-i)):(a=n-398458|0,f=440401-n|0,e=(l=(v=(c=i/(2+i))*c)*v)*bn(l),u=v*sn(l)+e,(a|=f)>0?(t=.5*i*i,0===o?i-(t-c*(t+u)):o*dn-(t-(c*(t+u)+o*mn)-i)):0===o?i-c*(i-u):o*dn-(c*(i-u)-o*mn-i))))},jn=wn,_n=Math.sqrt,hn=Number.POSITIVE_INFINITY,gn=_t,An=!0===Jt?0:1,On=new St(1),Nn=new gn(On.buffer);var xn,En,Un=function(r){return On[0]=r,Nn[An]};!0===Jt?(xn=1,En=0):(xn=0,En=1);var Sn=_t,Pn={HIGH:xn,LOW:En},Fn=new St(1),In=new Sn(Fn.buffer),Tn=Pn.HIGH,Gn=Pn.LOW;var Vn=function(r,t){return In[Tn]=r,In[Gn]=t,Fn[0]},Hn=Vn,Mn=Math.floor,Bn=hn,Ln=cn;var kn,Wn,Cn=function(r){return r===Bn||r===Ln};!0===Jt?(kn=1,Wn=0):(kn=0,Wn=1);var Rn=_t,Xn={HIGH:kn,LOW:Wn},Yn=new St(1),qn=new Rn(Yn.buffer),zn=Xn.HIGH,Dn=Xn.LOW;var Jn=function(r,t){return Yn[0]=t,r[0]=qn[zn],r[1]=qn[Dn],r};var Kn=function(r,t){return 1===arguments.length?Jn([0,0],r):Jn(r,t)},Qn=Kn,Zn=rn,$n=Hn,re=[0,0];var te=function(r){return Math.abs(r)},ne=Cn,ee=fn,oe=te;var ue=function(r,t){return ee(t)||ne(t)?(r[0]=t,r[1]=0,r):0!==t&&oe(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var ie=rn;var ae=function(r){var t=ie(r);return(t=(2146435072&t)>>>20)-1023|0},fe=hn,ce=cn,le=fn,ve=Cn,ye=function(r,t){var n,e;return Qn(re,r),n=re[0],n&=2147483647,e=Zn(t),$n(n|=e&=2147483648,re[1])},pe=function(r,t){return 1===arguments.length?ue([0,0],r):ue(r,t)},be=ae,se=Kn,de=Hn,me=[0,0],we=[0,0];var je=function(r,t){var n,e;return 0===t||0===r||le(r)||ve(r)?r:(pe(me,r),t+=me[1],(t+=be(r=me[0]))<-1074?ye(0,r):t>1023?r<0?ce:fe:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,se(we,r),n=we[0],n&=2148532223,e*de(n|=t+1023<<20,we[1])))};var _e=function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n};var he=Mn,ge=je,Ae=function(r){return _e(0,r)},Oe=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ne=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],xe=5.960464477539063e-8,Ee=Ae(20),Ue=Ae(20),Se=Ae(20),Pe=Ae(20);function Fe(r,t,n,e,o,u,i,a,f){var c,l,v,y,p,b,s,d,m;for(y=u,m=e[n],d=n,p=0;d>0;p++)l=xe*m|0,Pe[p]=m-16777216*l|0,m=e[d-1]+l,d-=1;if(m=ge(m,o),m-=8*he(.125*m),m-=s=0|m,v=0,o>0?(s+=p=Pe[n-1]>>24-o,Pe[n-1]-=p<<24-o,v=Pe[n-1]>>23-o):0===o?v=Pe[n-1]>>23:m>=.5&&(v=2),v>0){for(s+=1,c=0,p=0;p<n;p++)d=Pe[p],0===c?0!==d&&(c=1,Pe[p]=16777216-d):Pe[p]=16777215-d;if(o>0)switch(o){case 1:Pe[n-1]&=8388607;break;case 2:Pe[n-1]&=4194303}2===v&&(m=1-m,0!==c&&(m-=ge(1,o)))}if(0===m){for(d=0,p=n-1;p>=u;p--)d|=Pe[p];if(0===d){for(b=1;0===Pe[u-b];b++);for(p=n+1;p<=n+b;p++){for(f[a+p]=Oe[i+p],l=0,d=0;d<=a;d++)l+=r[d]*f[a+(p-d)];e[p]=l}return Fe(r,t,n+=b,e,o,u,i,a,f)}}if(0===m)for(n-=1,o-=24;0===Pe[n];)n-=1,o-=24;else(m=ge(m,-o))>=16777216?(l=xe*m|0,Pe[n]=m-16777216*l|0,o+=24,Pe[n+=1]=l):Pe[n]=0|m;for(l=ge(1,o),p=n;p>=0;p--)e[p]=l*Pe[p],l*=xe;for(p=n;p>=0;p--){for(l=0,b=0;b<=y&&b<=n-p;b++)l+=Ne[b]*e[p+b];Se[n-p]=l}for(l=0,p=n;p>=0;p--)l+=Se[p];for(t[0]=0===v?l:-l,l=Se[0]-l,p=1;p<=n;p++)l+=Se[p];return t[1]=0===v?l:-l,7&s}var Ie=function(r,t,n,e){var o,u,i,a,f,c,l;for(4,(u=(n-3)/24|0)<0&&(u=0),a=n-24*(u+1),c=u-(i=e-1),l=i+4,f=0;f<=l;f++)Ee[f]=c<0?0:Oe[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=i;c++)o+=r[c]*Ee[i+(f-c)];Ue[f]=o}return 4,Fe(r,t,4,Ue,a,4,u,i,Ee)},Te=Math.round,Ge=rn;var Ve=rn,He=Un,Me=Hn,Be=Ie,Le=function(r,t,n){var e,o,u,i,a;return u=r-1.5707963267341256*(e=Te(.6366197723675814*r)),i=6077100506506192e-26*e,a=t>>20|0,n[0]=u-i,a-(Ge(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),n[0]=u-i,a-(Ge(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),n[0]=u-i)),n[1]=u-n[0]-i,e},ke=1.5707963267341256,We=6077100506506192e-26,Ce=2*We,Re=4*We,Xe=[0,0,0],Ye=[0,0];var qe=function(r,t){var n,e,o,u,i,a,f;if((o=2147483647&Ve(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Le(r,o,t):o<=1073928572?r>0?(f=r-ke,t[0]=f-We,t[1]=f-t[0]-We,1):(f=r+ke,t[0]=f+We,t[1]=f-t[0]+We,-1):r>0?(f=r-2*ke,t[0]=f-Ce,t[1]=f-t[0]-Ce,2):(f=r+2*ke,t[0]=f+Ce,t[1]=f-t[0]+Ce,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Le(r,o,t):r>0?(f=r-3*ke,t[0]=f-1.8231301519518578e-10,t[1]=f-t[0]-1.8231301519518578e-10,3):(f=r+3*ke,t[0]=f+1.8231301519518578e-10,t[1]=f-t[0]+1.8231301519518578e-10,-3):1075388923===o?Le(r,o,t):r>0?(f=r-4*ke,t[0]=f-Re,t[1]=f-t[0]-Re,4):(f=r+4*ke,t[0]=f+Re,t[1]=f-t[0]+Re,-4);if(o<1094263291)return Le(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=He(r),f=Me(o-((e=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)Xe[i]=0|f,f=16777216*(f-Xe[i]);for(Xe[2]=f,u=3;0===Xe[u-1];)u-=1;return a=Be(Xe,Ye,e,u),r<0?(t[0]=-Ye[0],t[1]=-Ye[1],-a):(t[0]=Ye[0],t[1]=Ye[1],a)},ze=-.16666666666666632;var De=rn,Je=qe,Ke=function(r,t,n){var e,o,u,i,a;return o=.00833333333332249+(a=t*t)*(27557313707070068e-22*a-.0001984126982985795)+a*(i=a*a)*(1.58969099521155e-10*a-2.5050760253406863e-8),u=a*t,r[0]=0===n?t+u*(ze+a*o):t-(a*(.5*n-u*o)-n-u*ze),o=a*(.0416666666666666+a*(2480158728947673e-20*a-.001388888888887411)),o+=i*i*(a*(2.087572321298175e-9+-11359647557788195e-27*a)-2.7557314351390663e-7),i=1-(e=.5*a),r[1]=i+(1-i-e+(a*o-t*n)),r},Qe=[0,0];var Ze=function(r,t){var n,e;if(n=De(t),(n&=2147483647)<=1072243195)return n<1044381696&&0==(0|t)&&(r[0]=t,r[1]=0),Ke(r,t,0);if(n>=2146435072)return r[0]=NaN,r[1]=NaN,r;switch(e=Je(t,Qe),Ke(r,Qe[0],Qe[1]),3&e){case 1:return n=r[1],r[1]=-r[0],r[0]=n,r;case 2:return r[0]*=-1,r[1]*=-1,r;case 3:return n=-r[1],r[1]=r[0],r[0]=n,r;default:return r}};var $e=function(r,t){return 1===arguments.length?Ze([0,0],r):Ze(r,t)};var ro=_n,to=te,no=$e,eo=hn,oo=function(r){var t,n;return 0===r?-.03405537391318949:((r<0?-r:r)<=1?(t=r*(6678104126.14924+r*(r*(980629.0409895825+r*(r*(10.650724020080236+-.010767857011487301*r)-4461.579298277507))-115486967.64841276))-142585098013.66644,n=4186860446082.0176+r*(42091902282.58013+r*(202283751.40097034+r*(591176.1449417479+r*(1074.227223951738+r*(1+0*r)))))):(t=(r=1/r)*(10.650724020080236+r*(r*(980629.0409895825+r*(r*(6678104126.14924+-142585098013.66644*r)-115486967.64841276))-4461.579298277507))-.010767857011487301,n=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(202283751.40097034+r*(42091902282.58013+4186860446082.0176*r)))))),t/n)},uo=function(r){var t,n;return 0===r?-.010158790774176108:((r<0?-r:r)<=1?(t=r*(1660853173129901.8+r*(r*(355806656709.1062+r*(r*(5079326.614801118+r*(4.6179191852758255*r-7502.334222078161))-1811393126.9860668))-36658018905416.664))-0x3e45840c066730,n=0x17f1d1995ae4fb00+r*(0x3cda8dbce6f4c4+r*(84899346165481.42+r*(276227772862.44086+r*(648725028.9959639+r*(1126712.5065029138+r*(1388.6978985861358+1*r))))))):(t=4.6179191852758255+(r=1/r)*(r*(5079326.614801118+r*(r*(355806656709.1062+r*(r*(1660853173129901.8+-0x3e45840c066730*r)-36658018905416.664))-1811393126.9860668))-7502.334222078161),n=1+r*(1388.6978985861358+r*(1126712.5065029138+r*(648725028.9959639+r*(276227772862.44086+r*(84899346165481.42+r*(0x3cda8dbce6f4c4+0x17f1d1995ae4fb00*r))))))),t/n)},io=function(r){var t,n;return 0===r?1:((r<0?-r:r)<=1?(t=r*(r*(r*(r*(r*(0*r-1611.6166443246102)-109824.05543459347)-1523529.3511811374)-6603373.248364939)-9942246.505077641)-4435757.816794128,n=r*(r*(r*(r*(r*(1*r-1455.0094401904962)-107263.8599110382)-1511809.5066341609)-6585339.4797230875)-9934124.389934586)-4435757.816794128):(t=0+(r=1/r)*(r*(r*(r*(r*(-4435757.816794128*r-9942246.505077641)-6603373.248364939)-1523529.3511811374)-109824.05543459347)-1611.6166443246102),n=1+r*(r*(r*(r*(r*(-4435757.816794128*r-9934124.389934586)-6585339.4797230875)-1511809.5066341609)-107263.8599110382)-1455.0094401904962)),t/n)},ao=function(r){var t,n;return 0===r?.046875:((r<0?-r:r)<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+0*r))))),n=708712.8194102874+r*(1819458.0422439973+r*(1419460.669603721+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+1*r)))))):(t=0+(r=1/r)*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+33220.913409857225*r))))),n=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460.669603721+r*(1819458.0422439973+708712.8194102874*r)))))),t/n)},fo=[0,0];var co=function(r){var t,n,e,o,u,i,a;return a=to(r),0===r||a===eo?0:(a<=4?t=(i=a*(a+3.8317059702075125)*(a-981/256- -.0003252797924876844))*oo(u=r*r):a<=8?t=(i=a*(a+7.015586669815619)*(a-7.015625- -38330184381246464e-21))*uo(u=r*r):(n=io(o=(u=8/a)*u),e=ao(o),i=1/(1.772453850905516*ro(a)),no(fo,a),t=i*(n*(fo[0]-fo[1])+u*e*(fo[0]+fo[1]))),r<0&&(t*=-1),t)};var lo=jn,vo=_n,yo=cn,po=hn,bo=$e,so=co,mo=function(r){var t,n;return 0===r?.13187550549740895:((r<0?-r:r)<=1?(t=40535726612579.55+r*(5470861171652.543+r*(r*(7214454821.450256+r*(r*(221579.5322228026+-317.1442466004613*r)-59157479.9974084))-375959744978.196)),n=307378739210792.9+r*(4127228620040.646+r*(27800352738.690586+r*(122504351.22182964+r*(381364.70753052575+r*(820.7990816839387+1*r)))))):(t=(r=1/r)*(221579.5322228026+r*(r*(7214454821.450256+r*(r*(5470861171652.543+40535726612579.55*r)-375959744978.196))-59157479.9974084))-317.1442466004613,n=1+r*(820.7990816839387+r*(381364.70753052575+r*(122504351.22182964+r*(27800352738.690586+r*(4127228620040.646+307378739210792.9*r)))))),t/n)},wo=function(r){var t,n;return 0===r?.021593919914419626:((r<0?-r:r)<=1?(t=0x9fcaed579ed86000+r*(r*(r*(4068627528980474.5+r*(r*(374536739624.3849+r*(r*(1915380.6858264203+-1233.7180442012952*r)-1195796191.2070618))-59530713129741.984))-0x53fb01dd8596c0)-0x4ed64a1a7552bc00),n=5332184431331618e5+r*(0x4f0f2b7ff905d800+r*(0x6d8e405cd717f0+r*(111870100658569.7+r*(302217668529.60406+r*(635503180.8708892+r*(1045374.8201934079+r*(1285.516484932161+1*r)))))))):(t=(r=1/r)*(1915380.6858264203+r*(r*(374536739624.3849+r*(r*(4068627528980474.5+r*(r*(0x9fcaed579ed86000*r-0x4ed64a1a7552bc00)-0x53fb01dd8596c0))-59530713129741.984))-1195796191.2070618))-1233.7180442012952,n=1+r*(1285.516484932161+r*(1045374.8201934079+r*(635503180.8708892+r*(302217668529.60406+r*(111870100658569.7+r*(0x6d8e405cd717f0+r*(0x4f0f2b7ff905d800+5332184431331618e5*r)))))))),t/n)},jo=function(r){var t,n;return 0===r?1:((r<0?-r:r)<=1?(t=r*(r*(r*(r*(r*(0*r-1611.6166443246102)-109824.05543459347)-1523529.3511811374)-6603373.248364939)-9942246.505077641)-4435757.816794128,n=r*(r*(r*(r*(r*(1*r-1455.0094401904962)-107263.8599110382)-1511809.5066341609)-6585339.4797230875)-9934124.389934586)-4435757.816794128):(t=0+(r=1/r)*(r*(r*(r*(r*(-4435757.816794128*r-9942246.505077641)-6603373.248364939)-1523529.3511811374)-109824.05543459347)-1611.6166443246102),n=1+r*(r*(r*(r*(r*(-4435757.816794128*r-9934124.389934586)-6585339.4797230875)-1511809.5066341609)-107263.8599110382)-1455.0094401904962)),t/n)},_o=function(r){var t,n;return 0===r?.046875:((r<0?-r:r)<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+0*r))))),n=708712.8194102874+r*(1819458.0422439973+r*(1419460.669603721+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+1*r)))))):(t=0+(r=1/r)*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+33220.913409857225*r))))),n=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460.669603721+r*(1819458.0422439973+708712.8194102874*r)))))),t/n)},ho=2.197141326031017,go=5.429681040794135,Ao=[0,0];var Oo=function(r){var t,n,e,o,u,i,a;return r<0?NaN:0===r?yo:r===po?0:r<=4?(u=r*r,i=lo(r/ho)*so(r)*.6366197723675814,o=mo(u),i+(a=(r+ho)*(r-562/256-.001828826031017035)/r)*o):r<=8?(u=r*r,i=lo(r/go)*so(r)*.6366197723675814,o=wo(u),i+(a=(r+go)*(r-1390/256- -6459205864867228e-21)/r)*o):(t=jo(e=(u=8/r)*u),n=_o(e),a=.5641895835477563/vo(r),bo(Ao,r),a*(u*n*(Ao[0]-Ao[1])-t*(Ao[0]+Ao[1])))},No=vt,xo=Oo;var Eo=function(r){return No(r,xo)},Uo=Eo;export{Uo as default};
//# sourceMappingURL=mod.js.map
