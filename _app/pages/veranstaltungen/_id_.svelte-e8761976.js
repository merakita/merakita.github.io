import{S as De,i as ke,s as ye,d as ne,V as ve,v as Ve,o as _e,e as h,t as R,p as P,A as Ce,L as he,c as p,f as u,m as j,g as l,r as T,B as ge,M as pe,h as n,k as f,l as x,N as t,C as Le,n as se,y as te,w as ie,F as Ne,x as Ie,Y as Se,u as $e,O as Be}from"../../chunks/vendor-80f55c88.js";import{O as Ee}from"../../chunks/OnlineOderPraesenz-bd5eb1cc.js";import{T as Oe}from"../../chunks/TeilSymbol-819bde18.js";const v="src/routes/veranstaltungen/[id].svelte";function me(_,e,s){const r=_.slice();return r[3]=e[s],r}function be(_){let e,s,r,E,o,D=_[0].price.match(/\s\d+\sEuro/g)+"",g,L;const m={c:function(){e=h("div"),s=h("span"),r=R("Seminargeb\xFChr:"),E=P(),o=h("span"),g=R(D),L=R(" je Teilnehmer*in"),this.h()},l:function(c){e=p(c,"DIV",{class:!0});var i=u(e);s=p(i,"SPAN",{class:!0});var w=u(s);r=j(w,"Seminargeb\xFChr:"),w.forEach(l),E=T(i),o=p(i,"SPAN",{class:!0});var $=u(o);g=j($,D),L=j($," je Teilnehmer*in"),$.forEach(l),i.forEach(l),this.h()},h:function(){n(s,"class","price-label s-1Cl7LN_iOpCd"),f(s,v,47,31,1396),n(o,"class","price-value s-1Cl7LN_iOpCd"),f(o,v,47,79,1444),n(e,"class","price s-1Cl7LN_iOpCd"),f(e,v,47,12,1377)},m:function(c,i){x(c,e,i),t(e,s),t(s,r),t(e,E),t(e,o),t(o,g),t(o,L)},p:function(c,i){i&1&&D!==(D=c[0].price.match(/\s\d+\sEuro/g)+"")&&se(g,D)},d:function(c){c&&l(e)}};return ne("SvelteRegisterBlock",{block:m,id:be.name,type:"else",source:"(47:8) {:else}",ctx:_}),m}function we(_){let e,s,r,E,o,D,g,L,m;const b={c:function(){e=h("div"),s=h("span"),r=R("Seminargeb\xFChr:"),E=P(),o=h("span"),D=R("kostenlos, die Geb\xFChren \xFCbernimmt "),g=h("span"),L=R("merakita"),m=R(" f\xFCr sie"),this.h()},l:function(i){e=p(i,"DIV",{class:!0});var w=u(e);s=p(w,"SPAN",{class:!0});var $=u(s);r=j($,"Seminargeb\xFChr:"),$.forEach(l),E=T(w),o=p(w,"SPAN",{class:!0});var y=u(o);D=j(y,"kostenlos, die Geb\xFChren \xFCbernimmt "),g=p(y,"SPAN",{class:!0});var A=u(g);L=j(A,"merakita"),A.forEach(l),m=j(y," f\xFCr sie"),y.forEach(l),w.forEach(l),this.h()},h:function(){n(s,"class","price-label s-1Cl7LN_iOpCd"),f(s,v,45,31,1185),n(g,"class","emph s-1Cl7LN_iOpCd"),f(g,v,45,139,1293),n(o,"class","price-value s-1Cl7LN_iOpCd"),f(o,v,45,79,1233),n(e,"class","price s-1Cl7LN_iOpCd"),f(e,v,45,12,1166)},m:function(i,w){x(i,e,w),t(e,s),t(s,r),t(e,E),t(e,o),t(o,D),t(o,g),t(g,L),t(o,m)},p:Be,d:function(i){i&&l(e)}};return ne("SvelteRegisterBlock",{block:b,id:we.name,type:"if",source:'(45:8) {#if event.price == \\"0 Euro\\"}',ctx:_}),b}function oe(_){let e,s,r,E,o=_[3].terminnr+"",D,g,L,m=_[3].datum+"",b,c,i,w,$=_[3].timeRange+"",y,A,q,M,F,B,H,K,J,V,I,X,Z,k;M=new Ee({props:{select:_[3].attendanceType},$$inline:!0});const z={c:function(){e=h("li"),s=h("a"),r=h("div"),E=h("div"),D=R(o),g=P(),L=h("div"),b=R(m),c=P(),i=h("div"),w=h("div"),y=R($),A=P(),q=h("div"),Ce(M.$$.fragment),F=P(),B=h("div"),H=h("div"),K=R("Anmelden"),J=P(),V=he("svg"),I=he("path"),X=P(),this.h()},l:function(S){e=p(S,"LI",{class:!0});var U=u(e);s=p(U,"A",{href:!0,class:!0});var N=u(s);r=p(N,"DIV",{class:!0});var a=u(r);E=p(a,"DIV",{class:!0});var O=u(E);D=j(O,o),O.forEach(l),g=T(a),L=p(a,"DIV",{class:!0});var G=u(L);b=j(G,m),G.forEach(l),a.forEach(l),c=T(N),i=p(N,"DIV",{class:!0});var C=u(i);w=p(C,"DIV",{class:!0});var Q=u(w);y=j(Q,$),Q.forEach(l),A=T(C),q=p(C,"DIV",{class:!0});var ee=u(q);ge(M.$$.fragment,ee),ee.forEach(l),F=T(C),B=p(C,"DIV",{class:!0});var W=u(B);H=p(W,"DIV",{class:!0});var Y=u(H);K=j(Y,"Anmelden"),Y.forEach(l),J=T(W),V=pe(W,"svg",{class:!0,width:!0,height:!0});var le=u(V);I=pe(le,"path",{"fill-rule":!0,"clip-rule":!0,fill:!0,d:!0,class:!0}),u(I).forEach(l),le.forEach(l),W.forEach(l),C.forEach(l),X=T(N),N.forEach(l),U.forEach(l),this.h()},h:function(){n(E,"class","event-number s-1Cl7LN_iOpCd"),f(E,v,55,20,1767),n(L,"class","event-day s-1Cl7LN_iOpCd"),f(L,v,57,20,1836),n(r,"class","flush-left s-1Cl7LN_iOpCd"),f(r,v,54,16,1722),n(w,"class","event-time s-1Cl7LN_iOpCd"),f(w,v,61,20,1980),n(q,"class","attendance s-1Cl7LN_iOpCd"),f(q,v,63,20,2048),n(H,"class","anmelden s-1Cl7LN_iOpCd"),f(H,v,66,24,2224),n(I,"fill-rule","evenodd"),n(I,"clip-rule","evenodd"),n(I,"fill","currentColor"),n(I,"d","M9.11458 11.5121L11.6146 8.51215L12.0414 8L11.6146 7.48785L9.11458 4.48785L7.88542 5.51215L9.29197 7.2L4 7.2V8.8L9.29197 8.8L7.88542 10.4879L9.11458 11.5121Z"),n(I,"class","s-1Cl7LN_iOpCd"),f(I,v,68,24,2353),n(V,"class","arrow s-1Cl7LN_iOpCd"),n(V,"width","16"),n(V,"height","16"),f(V,v,67,24,2286),n(B,"class","anmelden-und-arrow s-1Cl7LN_iOpCd"),f(B,v,65,20,2167),n(i,"class","flush-right s-1Cl7LN_iOpCd"),f(i,v,60,16,1934),n(s,"href",Z="/anmelden/"+_[3].bookingPageUrl.match(/\/merakita\/.+/g)[0].slice(10)),n(s,"class","s-1Cl7LN_iOpCd"),f(s,v,53,16,1625),n(e,"class","s-1Cl7LN_iOpCd"),f(e,v,53,12,1621)},m:function(S,U){x(S,e,U),t(e,s),t(s,r),t(r,E),t(E,D),t(r,g),t(r,L),t(L,b),t(s,c),t(s,i),t(i,w),t(w,y),t(i,A),t(i,q),Le(M,q,null),t(i,F),t(i,B),t(B,H),t(H,K),t(B,J),t(B,V),t(V,I),t(s,X),k=!0},p:function(S,U){(!k||U&1)&&o!==(o=S[3].terminnr+"")&&se(D,o),(!k||U&1)&&m!==(m=S[3].datum+"")&&se(b,m),(!k||U&1)&&$!==($=S[3].timeRange+"")&&se(y,$);const N={};U&1&&(N.select=S[3].attendanceType),M.$set(N),(!k||U&1&&Z!==(Z="/anmelden/"+S[3].bookingPageUrl.match(/\/merakita\/.+/g)[0].slice(10)))&&n(s,"href",Z)},i:function(S){k||(te(M.$$.fragment,S),k=!0)},o:function(S){ie(M.$$.fragment,S),k=!1},d:function(S){S&&l(e),Ne(M)}};return ne("SvelteRegisterBlock",{block:z,id:oe.name,type:"each",source:"(52:8) {#each event.dates as date}",ctx:_}),z}function ce(_){let e,s,r,E,o=_[0].title+"",D,g,L,m,b,c,i,w=_[0].description+"",$,y,A,q,M,F,B=_[0].facilitator_name+"",H,K,J,V,I;L=new Oe({props:{teil:_[0].teil},$$inline:!0});function X(N,a){return N[0].price=="0 Euro"?we:be}let Z=X(_),k=Z(_),z=_[0].dates;ve(z);let d=[];for(let N=0;N<z.length;N+=1)d[N]=oe(me(_,z,N));const S=N=>ie(d[N],1,1,()=>{d[N]=null}),U={c:function(){e=h("div"),s=h("div"),r=h("div"),E=h("h1"),D=P(),g=h("div"),Ce(L.$$.fragment),m=P(),b=h("div"),c=h("div"),i=h("div"),$=P(),y=h("div"),A=h("span"),q=R("Referent*in:"),M=P(),F=h("span"),H=R(B),K=P(),k.c(),J=P(),V=h("ul");for(let a=0;a<d.length;a+=1)d[a].c();this.h()},l:function(a){e=p(a,"DIV",{id:!0,class:!0});var O=u(e);s=p(O,"DIV",{class:!0});var G=u(s);r=p(G,"DIV",{class:!0});var C=u(r);E=p(C,"H1",{class:!0});var Q=u(E);Q.forEach(l),D=T(C),g=p(C,"DIV",{class:!0});var ee=u(g);ge(L.$$.fragment,ee),ee.forEach(l),C.forEach(l),G.forEach(l),O.forEach(l),m=T(a),b=p(a,"DIV",{id:!0,class:!0});var W=u(b);c=p(W,"DIV",{class:!0});var Y=u(c);i=p(Y,"DIV",{class:!0});var le=u(i);le.forEach(l),$=T(Y),y=p(Y,"DIV",{class:!0});var ae=u(y);A=p(ae,"SPAN",{class:!0});var de=u(A);q=j(de,"Referent*in:"),de.forEach(l),M=T(ae),F=p(ae,"SPAN",{class:!0});var ue=u(F);H=j(ue,B),ue.forEach(l),ae.forEach(l),K=T(Y),k.l(Y),J=T(Y),V=p(Y,"UL",{class:!0});var fe=u(V);for(let re=0;re<d.length;re+=1)d[re].l(fe);fe.forEach(l),Y.forEach(l),W.forEach(l),this.h()},h:function(){n(E,"class","event-title s-1Cl7LN_iOpCd"),f(E,v,27,12,623),n(g,"class","event-letter s-1Cl7LN_iOpCd"),f(g,v,28,12,684),n(r,"class","title-and-letter s-1Cl7LN_iOpCd"),f(r,v,26,8,580),n(s,"class","wrapper-inner s-1Cl7LN_iOpCd"),f(s,v,25,4,544),n(e,"id","headline"),n(e,"class","s-1Cl7LN_iOpCd"),f(e,v,24,0,520),n(i,"class","ausschreibung s-1Cl7LN_iOpCd"),f(i,v,38,8,892),n(A,"class","referent-label s-1Cl7LN_iOpCd"),f(A,v,42,30,1e3),n(F,"class","referent-name s-1Cl7LN_iOpCd"),f(F,v,42,79,1049),n(y,"class","referent s-1Cl7LN_iOpCd"),f(y,v,42,8,978),n(V,"class","s-1Cl7LN_iOpCd"),f(V,v,50,8,1567),n(c,"class","wrapper-inner s-1Cl7LN_iOpCd"),f(c,v,36,4,855),n(b,"id","content"),n(b,"class","description s-1Cl7LN_iOpCd"),f(b,v,35,0,812)},m:function(a,O){x(a,e,O),t(e,s),t(s,r),t(r,E),E.innerHTML=o,t(r,D),t(r,g),Le(L,g,null),x(a,m,O),x(a,b,O),t(b,c),t(c,i),i.innerHTML=w,t(c,$),t(c,y),t(y,A),t(A,q),t(y,M),t(y,F),t(F,H),t(c,K),k.m(c,null),t(c,J),t(c,V);for(let G=0;G<d.length;G+=1)d[G].m(V,null);I=!0},p:function(a,[O]){(!I||O&1)&&o!==(o=a[0].title+"")&&(E.innerHTML=o);const G={};if(O&1&&(G.teil=a[0].teil),L.$set(G),(!I||O&1)&&w!==(w=a[0].description+"")&&(i.innerHTML=w),(!I||O&1)&&B!==(B=a[0].facilitator_name+"")&&se(H,B),Z===(Z=X(a))&&k?k.p(a,O):(k.d(1),k=Z(a),k&&(k.c(),k.m(c,J))),O&1){z=a[0].dates,ve(z);let C;for(C=0;C<z.length;C+=1){const Q=me(a,z,C);d[C]?(d[C].p(Q,O),te(d[C],1)):(d[C]=oe(Q),d[C].c(),te(d[C],1),d[C].m(V,null))}for($e(),C=z.length;C<d.length;C+=1)S(C);Ie()}},i:function(a){if(!I){te(L.$$.fragment,a);for(let O=0;O<z.length;O+=1)te(d[O]);I=!0}},o:function(a){ie(L.$$.fragment,a),d=d.filter(Boolean);for(let O=0;O<d.length;O+=1)ie(d[O]);I=!1},d:function(a){a&&l(e),Ne(L),a&&l(m),a&&l(b),k.d(),Se(d,a)}};return ne("SvelteRegisterBlock",{block:U,id:ce.name,type:"component",source:"",ctx:_}),U}const Ae=!0;function Pe(_,e,s){let{$$slots:r={},$$scope:E}=e;Ve("U5Bidu5D",r,[]);let{event:o}=e;_e(()=>{document.documentElement.setAttribute("data-theme","white-gray")});const D={weekday:"long",year:"numeric",month:"long",day:"numeric"},g={hour:"2-digit"},L=["event"];return Object.keys(e).forEach(m=>{!~L.indexOf(m)&&m.slice(0,2)!=="$$"&&m!=="slot"&&console.warn(`<U5Bidu5D> was created with unknown prop '${m}'`)}),_.$$set=m=>{"event"in m&&s(0,o=m.event)},_.$capture_state=()=>({prerender:Ae,event:o,onMount:_e,OnlineOderPraesenz:Ee,TeilSymbol:Oe,opt_date:D,opt_hour:g}),_.$inject_state=m=>{"event"in m&&s(0,o=m.event)},e&&"$$inject"in e&&_.$inject_state(e.$$inject),[o]}class je extends De{constructor(e){super(e);ke(this,e,Pe,ce,ye,{event:0}),ne("SvelteRegisterComponent",{component:this,tagName:"U5Bidu5D",options:e,id:ce.name});const{ctx:s}=this.$$,r=e.props||{};s[0]===void 0&&!("event"in r)&&console.warn("<U5Bidu5D> was created without expected prop 'event'")}get event(){throw new Error("<U5Bidu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set event(e){throw new Error("<U5Bidu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{je as default,Ae as prerender};
