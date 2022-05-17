import{S as ve,i as he,s as fe,d as K,V as ie,v as _e,o as ne,e as p,t as T,p as O,c as m,f as _,m as W,g as i,r as q,h as e,k as c,l as G,N as t,n as z,L as re,W as pe,M as oe,X as me,O as ce,Y as Ee,U as ge}from"../chunks/vendor-80f55c88.js";const{document:ue}=ge,u="src/routes/index.svelte";function de(o,s,a){const l=o.slice();return l[2]=s[a],l}function F(o){let s,a,l,E,d=new Date(o[2].beginDate).toLocaleDateString("de-DE",o[1])+"",k,I,n,R,b=o[2].title[0].value+"",L,B,y,P=(o[2].facilitators[0].title.length>0?o[2].facilitators[0].title+" "+o[2].facilitators[0].name:o[2].facilitators[0].name)+"",C,V,j;const S={c:function(){s=p("li"),a=p("a"),l=p("div"),E=p("div"),k=T(d),I=p("br"),n=O(),R=p("div"),L=T(b),B=O(),y=p("div"),C=T(P),V=O(),this.h()},l:function(g){s=m(g,"LI",{class:!0});var v=_(s);a=m(v,"A",{rel:!0,href:!0,class:!0});var U=_(a);l=m(U,"DIV",{class:!0});var w=_(l);E=m(w,"DIV",{class:!0});var h=_(E);k=W(h,d),I=m(h,"BR",{class:!0}),h.forEach(i),n=q(w),R=m(w,"DIV",{class:!0});var Z=_(R);L=W(Z,b),Z.forEach(i),B=q(w),y=m(w,"DIV",{class:!0});var D=_(y);C=W(D,P),D.forEach(i),w.forEach(i),V=q(U),U.forEach(i),v.forEach(i),this.h()},h:function(){e(I,"class","s-Uap-jPRb-uiE"),c(I,u,45,116,1285),e(E,"class","entry-date s-Uap-jPRb-uiE"),c(E,u,45,28,1197),e(R,"class","entry-title s-Uap-jPRb-uiE"),c(R,u,46,28,1324),e(y,"class","entry-facil s-Uap-jPRb-uiE"),c(y,u,47,28,1406),e(l,"class","align-at-borders s-Uap-jPRb-uiE"),c(l,u,44,24,1138),e(a,"rel","prefetch"),e(a,"href",j="/veranstaltungen/"+o[2].eventId),e(a,"class","s-Uap-jPRb-uiE"),c(a,u,43,20,1055),e(s,"class","s-Uap-jPRb-uiE"),c(s,u,43,16,1051)},m:function(g,v){G(g,s,v),t(s,a),t(a,l),t(l,E),t(E,k),t(E,I),t(l,n),t(l,R),t(R,L),t(l,B),t(l,y),t(y,C),t(a,V)},p:function(g,v){v&1&&d!==(d=new Date(g[2].beginDate).toLocaleDateString("de-DE",g[1])+"")&&z(k,d),v&1&&b!==(b=g[2].title[0].value+"")&&z(L,b),v&1&&P!==(P=(g[2].facilitators[0].title.length>0?g[2].facilitators[0].title+" "+g[2].facilitators[0].name:g[2].facilitators[0].name)+"")&&z(C,P),v&1&&j!==(j="/veranstaltungen/"+g[2].eventId)&&e(a,"href",j)},d:function(g){g&&i(s)}};return K("SvelteRegisterBlock",{block:S,id:F.name,type:"each",source:"(43:12) {#each events.dates as event}",ctx:o}),S}function J(o){let s,a,l,E,d,k,I,n,R,b,L,B,y,P,C,V,j,S,A,g,v,U,w=o[0].dates;ie(w);let h=[];for(let D=0;D<w.length;D+=1)h[D]=F(de(o,w,D));const Z={c:function(){s=O(),a=p("div"),l=p("div"),E=p("div"),d=p("img"),I=O(),n=p("div"),R=p("section"),b=p("div"),L=p("h3"),B=T("Anstehende Veranstaltungen"),y=O(),P=p("ul");for(let r=0;r<h.length;r+=1)h[r].c();C=O(),V=p("div"),j=p("a"),S=p("div"),A=T("Zeige alle"),g=O(),v=re("svg"),U=re("path"),this.h()},l:function(r){pe('[data-svelte="svelte-1f7jgic"]',ue.head).forEach(i),s=q(r),a=m(r,"DIV",{id:!0,class:!0});var f=_(a);l=m(f,"DIV",{class:!0});var H=_(l);E=m(H,"DIV",{id:!0,class:!0});var Q=_(E);d=m(Q,"IMG",{id:!0,alt:!0,src:!0,class:!0}),Q.forEach(i),H.forEach(i),f.forEach(i),I=q(r),n=m(r,"DIV",{id:!0,class:!0});var $=_(n);R=m($,"SECTION",{id:!0,class:!0});var x=_(R);b=m(x,"DIV",{class:!0});var N=_(b);L=m(N,"H3",{class:!0});var ee=_(L);B=W(ee,"Anstehende Veranstaltungen"),ee.forEach(i),y=q(N),P=m(N,"UL",{class:!0});var te=_(P);for(let Y=0;Y<h.length;Y+=1)h[Y].l(te);te.forEach(i),C=q(N),V=m(N,"DIV",{id:!0,class:!0});var se=_(V);j=m(se,"A",{href:!0,class:!0});var X=_(j);S=m(X,"DIV",{class:!0});var ae=_(S);A=W(ae,"Zeige alle"),ae.forEach(i),g=q(X),v=oe(X,"svg",{class:!0,width:!0,height:!0,fill:!0});var le=_(v);U=oe(le,"path",{"fill-rule":!0,"clip-rule":!0,fill:!0,d:!0,class:!0}),_(U).forEach(i),le.forEach(i),X.forEach(i),se.forEach(i),N.forEach(i),x.forEach(i),$.forEach(i),this.h()},h:function(){ue.title="Home",e(d,"id","logo"),e(d,"alt","merakita"),me(d.src,k="logo_wwhite.svg")||e(d,"src",k),e(d,"class","s-Uap-jPRb-uiE"),c(d,u,28,12,534),e(E,"id","title-container"),e(E,"class","s-Uap-jPRb-uiE"),c(E,u,27,8,495),e(l,"class","wrapper-inner s-Uap-jPRb-uiE"),c(l,u,26,4,459),e(a,"id","headline"),e(a,"class","s-Uap-jPRb-uiE"),c(a,u,25,0,435),e(L,"class","s-Uap-jPRb-uiE"),c(L,u,40,12,940),e(P,"class","s-Uap-jPRb-uiE"),c(P,u,41,12,988),e(S,"class","s-Uap-jPRb-uiE"),c(S,u,55,20,1849),e(U,"fill-rule","evenodd"),e(U,"clip-rule","evenodd"),e(U,"fill","currentColor"),e(U,"d","M9.11458 11.5121L11.6146 8.51215L12.0414 8L11.6146 7.48785L9.11458 4.48785L7.88542 5.51215L9.29197 7.2L4 7.2V8.8L9.29197 8.8L7.88542 10.4879L9.11458 11.5121Z"),e(U,"class","s-Uap-jPRb-uiE"),c(U,u,57,24,1970),e(v,"class","arrow s-Uap-jPRb-uiE"),e(v,"width","16"),e(v,"height","16"),e(v,"fill","none"),c(v,u,56,20,1891),e(j,"href","/termine"),e(j,"class","s-Uap-jPRb-uiE"),c(j,u,54,16,1809),e(V,"id","showall"),e(V,"class","s-Uap-jPRb-uiE"),c(V,u,53,12,1774),e(b,"class","wrapper-inner s-Uap-jPRb-uiE"),c(b,u,39,8,900),e(R,"id","recent"),e(R,"class","s-Uap-jPRb-uiE"),c(R,u,38,4,870),e(n,"id","content"),e(n,"class","s-Uap-jPRb-uiE"),c(n,u,37,0,847)},m:function(r,M){G(r,s,M),G(r,a,M),t(a,l),t(l,E),t(E,d),G(r,I,M),G(r,n,M),t(n,R),t(R,b),t(b,L),t(L,B),t(b,y),t(b,P);for(let f=0;f<h.length;f+=1)h[f].m(P,null);t(b,C),t(b,V),t(V,j),t(j,S),t(S,A),t(j,g),t(j,v),t(v,U)},p:function(r,[M]){if(M&3){w=r[0].dates,ie(w);let f;for(f=0;f<w.length;f+=1){const H=de(r,w,f);h[f]?h[f].p(H,M):(h[f]=F(H),h[f].c(),h[f].m(P,null))}for(;f<h.length;f+=1)h[f].d(1);h.length=w.length}},i:ce,o:ce,d:function(r){r&&i(s),r&&i(a),r&&i(I),r&&i(n),Ee(h,r)}};return K("SvelteRegisterBlock",{block:Z,id:J.name,type:"component",source:"",ctx:o}),Z}const be=!0;function Re(o,s,a){let{$$slots:l={},$$scope:E}=s;_e("Routes",l,[]),ne(()=>{document.documentElement.setAttribute("data-theme","blue")});let{events:d}=s;const k={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"},I=["events"];return Object.keys(s).forEach(n=>{!~I.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&console.warn(`<Routes> was created with unknown prop '${n}'`)}),o.$$set=n=>{"events"in n&&a(0,d=n.events)},o.$capture_state=()=>({prerender:be,onMount:ne,events:d,options:k}),o.$inject_state=n=>{"events"in n&&a(0,d=n.events)},s&&"$$inject"in s&&o.$inject_state(s.$$inject),[d,k]}class we extends ve{constructor(s){super(s);he(this,s,Re,J,fe,{events:0}),K("SvelteRegisterComponent",{component:this,tagName:"Routes",options:s,id:J.name});const{ctx:a}=this.$$,l=s.props||{};a[0]===void 0&&!("events"in l)&&console.warn("<Routes> was created without expected prop 'events'")}get events(){throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set events(s){throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{we as default,be as prerender};
