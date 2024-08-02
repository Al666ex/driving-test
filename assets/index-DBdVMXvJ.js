import{r as u,j as e,a as pe}from"./react-DHBI0EtI.js";import{c as me}from"./react-dom-DvAqprxs.js";import{u as p,a as C,P as fe}from"./react-redux-9YiUNuZq.js";import{c as ne,a as ge}from"./@reduxjs-DYdxbMDp.js";import{S as he,F as B,I as te,B as G,a as le,A as xe,b as O,M as z,s as Se,C as Ne}from"./antd-BrlvAook.js";import{s as Ie,v as ye,w as Ce,x as ve,o as je,l as Ae,y as Re,z as Ee,A as be,B as Te,C as Oe,D as ze}from"./@ant-design-BunHqFZw.js";import"./classnames-C9FZUsQl.js";import"./scheduler-CzFDRTuY.js";import"./use-sync-external-store-BtHkT4fs.js";import"./redux-DITMfSWq.js";import"./immer-AZmEbvJU.js";import"./reselect-DyB87yl0.js";import"./redux-thunk-ClJT1hhx.js";import"./rc-util-B_AY2VOg.js";import"./@babel-pBanenlM.js";import"./rc-resize-observer-B5SAndUk.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./rc-motion-BXl1Ur-d.js";import"./rc-select-CH2ucOIa.js";import"./rc-overflow-D8l21FYA.js";import"./@rc-component-DqSxGoEg.js";import"./rc-virtual-list-BxRskdzZ.js";import"./@ctrl-DOFZgDuz.js";import"./rc-collapse-B7N3SjHH.js";import"./rc-input-zawYJlWa.js";import"./rc-textarea-CQPxsfLl.js";import"./rc-field-form-DG8tb0mB.js";import"./scroll-into-view-if-needed-BZeNfFF0.js";import"./compute-scroll-into-view-DWa9QgjM.js";import"./rc-tooltip-B1MF79mz.js";import"./rc-dialog-CtFDBlaK.js";import"./throttle-debounce-CUWDS_la.js";import"./rc-pagination-CEkmKXf3.js";import"./rc-picker-DUPmmDeg.js";import"./rc-notification-Dp9MZ3ez.js";import"./@emotion-CW87jbl0.js";import"./stylis-DsJDcYJc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const ce=a=>{if(console.log("convert ",a),a==="false")return!1;if(a==="true")return!0},oe=ne({name:"auth",initialState:{isAuth:!1,user:"nenov.dumitru"},reducers:{setIsAuth:(a,t)=>{if(t.payload===!0){localStorage.setItem("isAuth",!0),a.isAuth=t.payload;return}if(t.payload===!1){localStorage.setItem("isAuth",t.payload),a.isAuth=t.payload;return}let n=localStorage.getItem("isAuth");if(n==="false"&&(n=localStorage.getItem("isAuth")),console.log("reducer setIsAuth",n),n){a.isAuth=ce(n);return}a.isAuth=t.payload},setUser:(a,t)=>{a.user=t.payload}}}),{setIsAuth:U,setUser:Q}=oe.actions,Ue=oe.reducer;function R(a){let t=a.toString();return t.length<2?"0"+t:t}const T=[{id:1,title:"Obligațiile conducătorului de vehicul înainte de deplasare",penalizare:[{id:"1.1",text:"(Ne) verificarea închiderii ușilor",result:5,count:0},{id:"1.2",text:"(Ne) ajustarea banchetei, oglinzilor retrovizoare și (ne) cuplarea centurii de siguranță",result:5,count:0},{id:"1.3",text:"(Ne) conectarea luminii în faruri",result:3,count:0},{id:"1.4",text:"(Ne) eliberarea frânei de staționare",result:3,count:0}]},{id:2,title:"Executarea în siguranță a manevrelor speciale",penalizare:[{id:"2.1",text:"(Ne) menținerea benzii  la deplasarea în marșarier pe o distanță de circa 20 m",result:5,count:0},{id:"2.2",text:"Incapacitatea de a întoarce vehiculul în sens opus, folosind mersul înainte și înapoi (1 tentativă din 3 mişcări)",result:5,count:0},{id:"2.3",text:"(Ne) încadrarea vehiculului în limitele spaţiului de parcare, la intrare sau la ieşire (paralel, oblic sau în unghi drept, prin mers înainte sau înapoi, pe teren plat, 1 tentativă)",result:5,count:0}]},{id:3,title:"Începutul deplasării și schimbarea direcției de mers",penalizare:[{id:"3.1",text:"(Ne) asigurarea la schimbarea direcției de mers și/sau intrarea în intersecții nedirijate (RCR, pct.39)",result:7,count:0},{id:"3.2",text:"Devierea de la traseu și neglijarea indicațiilor examinatorului",result:3,count:0}]},{id:4,title:"Poziția vehiculului pe carosabil",penalizare:[{id:"4.1",text:"(Ne) semnalizarea sau semnalizarea incorectă a direcției de mers (RCR, pct.32)",result:3,count:0},{id:"4.2",text:"(Ne) încadrarea în limitele benzilor de circulaţie (RCR, pct.43, subpct.3, lit.a))",result:5,count:0}]},{id:5,title:"Viteza de deplasare și spațiul între vehicule",penalizare:[{id:"5.1",text:"(Ne) respectarea limitelor de viteză",result:7,count:0},{id:"5.2",text:"(Ne) adaptarea vitezei la diverse situaţii şi condiţii rutiere (RCR, pct.50)",result:3,count:0},{id:"5.3",text:"(Ne) aprecierea și (ne) menținerea distanțelor și intervalelor de siguranță",result:3,count:0},{id:"5.4",text:"Conducerea cu viteză redusă fără motiv întemeiat şi (ne)încadrarea în ritmul impus de ceilalţi conducători de vehicule (o singură penalizare, după o avertizare preventivă) (RCR, pct.50)",result:3,count:0}]},{id:6,title:"Depășirea",penalizare:[{id:"6.1",text:"(Ne) respectarea regulilor de executare în siguranță a depășirii (RCR, pct.51, pct.52, pct.53, pct. 54)",result:21,count:0}]},{id:7,title:"Traversarea intersecțiilor",penalizare:[{id:"7.1",text:"(Ne) acordarea priorității vehiculelor care vin din sens opus, în cazul virării la stânga sau întoarcerii (RCR, pct. 56, subpct.2) și/sau (ne) acordarea priorității ciclomotoarelor, bicicliștilor, pietonilor, în cazul virării la dreapta sau la stânga (RCR, pct. 56, subpct.3)",result:21,count:0},{id:"7.2",text:"Intrarea în intersecție sau pe trecerea de pietoni în cazul în care în direcția de mers circulația este blocată (RCR, pct. 57)",result:7,count:0},{id:"7.3",text:"(Ne) acordarea priorității vehiculelor deja angajate în traversarea intersecției cu circulație dirijată, indiferent de direcția lor de deplasare și/sau pietonilor care finalizează traversarea carosabilului, la apariția semnalului verde al semaforului. ( RCR pct.58, subpct. 3)",result:21,count:0},{id:"7.4",text:"(Ne) respectarea regulilor de traversare a intersecțiilor cu circulație nedirijată (RCR, pct.59)",result:21,count:0},{id:"7.5",text:"(Ne) respectarea semnalizării rutiere, a indicatoarelor sau marcajelor rutiere",result:7,count:0},{id:"7.6",text:"(Ne) respectarea semnalului de interzicere al semaforului sau al agentului de circulație",result:21,count:0},{id:"7.7",text:"(Ne) traversarea sau traversarea întârziată a intersecției și/sau a trecerii de pietoni, la culoarea permisivă a semaforului sau la semnalul agentului de circulație",result:3,count:0}]},{id:8,title:"Traversarea căilor ferate",penalizare:[{id:"8.1",text:"(Ne) respectarea regulilor de traversare a căilor ferate (RCR, pct.60, pct.61,  pct.62, pct.63, pct.64)",result:21,count:0}]},{id:9,title:"Oprirea voluntară și staționarea",penalizare:[{id:"9.1",text:"Oprirea neregulamentară (RCR, pct.68)",result:3,count:0},{id:"9.2",text:"Oprirea în locuri interzise (RCR, pct.69)",result:5,count:0}]},{id:10,title:"Prioritatea în traficul rutier",penalizare:[{id:"10.1",text:"(Ne) acordarea de prioritate vehiculelor și/sau pietonilor la trecerile de pietoni cu circulație nedirijată (RCR, pct. 11, lit. f), pct. 39)",result:21,count:0},{id:"10.2",text:"(Ne) acordarea de prioritate vehiculelor cu regim prioritar de circulație sau vehiculului poliției când escortează o coloană (RCR, pct.18, subpct. 1)",result:21,count:0},{id:"10.3",text:"Tendință repetată de a ceda trecerea vehiculelor și pietonilor când aceștia nu au prioritate (o singură penalizare, după o avertizare preventivă)",result:3,count:0}]},{id:11,title:"Conducerea vehiculului în condiții de vizibilitate redusă și/sau condiții meteorologice nefavorabile",penalizare:[{id:"11.1",text:"(Ne) adaptarea distinctă la condiții de ploaie, mâzgă, zăpadă, polei, etc. (o singură penalizare) ",result:3,count:0}]},{id:12,title:"Erori tehnice",penalizare:[{id:"12.1",text:"Oprirea motorului la pornire și/sau în timpul deplasării (prima eroare nu se penalizează, se admite o singură  penalizare)",result:3,count:0},{id:"12.2",text:"Cuplarea treptei de viteză, fără a apăsa pedala de ambreiaj",result:3,count:0},{id:"12.3",text:"Pornirea motorului având cutia de viteze cuplată, fără a apăsa pedala de ambreiaj",result:3,count:0},{id:"12.4",text:"(Ne) sincronizarea acțiunilor la demarare/accelerare/frânare: adaptarea incorectă a treptelor de viteză la viteza de deplasare, folosirea incorectă a dispozitivelor de comandă, acționarea incorectă a volanului (o singură penalizare)",result:3,count:0},{id:"12.5",text:"La pornire eliberează brusc pedala de ambreiaj și smuncește vehiculul",result:3,count:0},{id:"12.6",text:"La pornire  vehiculul se deplasează cu spatele",result:3,count:0}]},{id:13,title:"PIERDEREA CONTROLULUI ASUPRA VEHICULULUI ŞI/SAU INTERVENŢIA EXAMINATORULUI PENTRU A EVITA UN PERICOL IMINENT SAU PRODUCEREA UNUI ACCIDENT RUTIER; MANIFESTĂRI ALE CANDIDATULUI CARE PROVOACĂ PERTURBAREA EXAMENULUI",penalizare:[{id:"13.1",text:"PIERDEREA CONTROLULUI ASUPRA VEHICULULUI ŞI/SAU INTERVENŢIA EXAMINATORULUI PENTRU A EVITA UN PERICOL IMINENT SAU PRODUCEREA UNUI ACCIDENT RUTIER; MANIFESTĂRI ALE CANDIDATULUI CARE PROVOACĂ PERTURBAREA EXAMENULUI ",result:21,count:0}]}],ae=JSON.parse(JSON.stringify(localStorage.getItem("list")));let W=[];ae?W=ae:(W=T,localStorage.setItem("list",JSON.stringify(T)));const ie=JSON.parse(localStorage.getItem("statistics")),De=ie===null?[]:ie,de=ne({name:"queryParams",initialState:{list:W,carnumber:null,punctele:0,isRunning:!1,mocksSolicitants:[{name:"TOFAN ZINAIDA",category:"B",typeCV:"AUTOMATĂ"},{name:"ROTARU CONSTANTIN",category:"C",typeCV:"MECANICĂ"},{name:"POPOV OLGA",category:"B",typeCV:"AUTOMATĂ"},{name:"GRIGORII TATIANA",category:"D",typeCV:"MECANICĂ"}],mocksCars:[],mocksArrCars:[{category:"B",carsNumb:["CAB138","CAB139","CAB140","CAB141"]},{category:"C",carsNumb:["CAB320","CAB321","CAB322"]},{category:"D",carsNumb:["CAB699","CAB700","CAB701","CAB702","CAB703"]}],candidat:null,stopExamen:!1,fieldsDisabled:!1,statistics:De,headerHeight:null,page:1,candidatFields:null},reducers:{setCandidatFields:(a,t)=>{a.candidatFields=t.payload},setCarnumber:(a,t)=>{if(t.payload){a.carnumber=t.payload,localStorage.setItem("carnumber",t.payload);return}if(localStorage.getItem("carnumber")===""){a.carnumber="";return}},setList:(a,t)=>{let c=JSON.parse(localStorage.getItem("list")).map(r=>{const d=r.penalizare.map(o=>o.id===t.payload?{...o,count:o.count+1}:o);return{...r,penalizare:d}});a.list=c;let i=JSON.parse(JSON.stringify(c));localStorage.setItem("list",JSON.stringify(i))},setPunctele:a=>{let t=JSON.parse(JSON.stringify(a.list));function n(c){return c.reduce((i,r)=>{const d=r.penalizare.reduce((o,s)=>o+s.result*s.count,0);return i+d},0)}a.punctele=n(t)},setIsRunning:(a,t)=>{a.isRunning=t.payload},setCandidat:(a,t)=>{if(t.payload){a.candidat=t.payload,localStorage.setItem("candidat",t.payload);return}if(localStorage.getItem("candidat")===""){a.candidat="";return}},setStopExamen:(a,t)=>{a.stopExamen=t.payload},setFieldsDisabled:(a,t)=>{a.fieldsDisabled=t.payload},setStatistics:(a,t)=>{JSON.parse(JSON.stringify(a.list)).map(c=>{const i=c.penalizare.find(r=>r.id===t.payload);if(i){let r=JSON.parse(localStorage.getItem("statistics"));const d=new Date,o=R(d.getHours()),s=R(d.getMinutes()),x=R(d.getSeconds());let h={time:`${o}:${s}:${x}`,text:i.text,result:i.result};r.push(h),a.statistics=JSON.parse(JSON.stringify(r)),localStorage.setItem("statistics",JSON.stringify(r));return}})},setHeaderHeight:(a,t)=>{a.headerHeight=t.payload},setPage:(a,t)=>{localStorage.setItem("page",JSON.stringify(t.payload));const n=localStorage.getItem("page");if(n){a.page=Number(n);return}a.page=t.payload},setMocksCars:(a,t)=>{a.mocksCars=t.payload}}}),{setCarnumber:E,setList:Z,setPunctele:F,setIsRunning:H,setCandidat:D,setStopExamen:Y,setFieldsDisabled:ee,setStatistics:_,setHeaderHeight:se,setPage:w,setMocksCars:we,setCandidatFields:Pe}=de.actions,ke=de.reducer,Le=()=>{const[a,t]=u.useState("nenov.dumitru"),[n,c]=u.useState("nenov"),[i,r]=u.useState(!1);p(s=>s.dl.page);const d=C(),o=async()=>{try{r(!0),setTimeout(()=>{d(U(!0)),d(Q(a)),r(!1),d(w(2))},300)}catch{r(!1)}};return e.jsx("div",{className:"modal",children:i?e.jsx("div",{className:"spinner-container",children:e.jsx(he,{size:"large"})}):e.jsxs(B,{name:"basic",initialValues:{username:a,password:n},labelCol:{span:8},wrapperCol:{span:16},autoComplete:"off",children:[e.jsx(B.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:e.jsx(te,{value:a,onChange:s=>t(s.target.value),className:"inputSize"})}),e.jsx(B.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:e.jsx(te.Password,{value:n,onChange:s=>c(s.target.value),className:"inputSize"})}),e.jsx(B.Item,{wrapperCol:{span:24},style:{textAlign:"right"},children:e.jsx(G,{icon:e.jsx(Ie,{style:{fontSize:"1.5rem"}}),type:"primary",onClick:o,className:"authButton",children:"Autentificare"})})]})})},ue=a=>a.map(t=>{let n={};return n.value=t,n.label=t.toString(),n}),Je=({width:a=100,defaultValue:t=null})=>{const n=p(s=>s.dl.candidat),c=p(s=>s.dl.mocksSolicitants),i=ue(c.map(function(s){return s.name})),r=p(s=>s.dl.fieldsDisabled),d=C();u.useEffect(()=>{localStorage.setItem("carnumber",""),d(E(""))},[n]);const o=s=>{d(D(s))};return u.useEffect(()=>{o(t)},[]),e.jsxs("div",{className:"dynamic__components",children:[e.jsx("div",{className:"query__params",children:e.jsx(ye,{})}),e.jsx(le,{showSearch:!0,defaultValue:t,placeholder:"CANDIDAT",style:{width:a},onChange:o,options:i,disabled:r})]})},Me=({width:a=100,defaultValue:t=null})=>{const n=p(s=>s.dl.carnumber),c=p(s=>s.dl.mocksCars),i=ue(c);p(s=>s.dl.fieldsDisabled);const r=p(s=>s.dl.candidat),d=C(),o=s=>{d(E(s))};return u.useEffect(()=>{o(t)},[]),e.jsxs("div",{className:"dynamic__components",children:[e.jsx("div",{className:"query__params",children:e.jsx(Ce,{})}),e.jsx(le,{showSearch:!0,defaultValue:t,placeholder:"AUTO",style:{width:a},onChange:o,value:n,options:i,disabled:!r})]})},Be=()=>{const[a,t]=u.useState(""),[n,c]=u.useState(!1),i=p(m=>m.dl.mocksSolicitants),r=p(m=>m.auth.user),d=p(m=>m.dl.fieldsDisabled),o=p(m=>m.dl.candidat),s=p(m=>m.dl.carnumber),x=p(m=>m.dl.mocksArrCars),g=p(m=>m.dl.candidatFields),h=C();u.useEffect(()=>{o||h(E(null))},[]),u.useEffect(()=>{if(o!==null){const m=i.find(y=>y.name===o);m&&(h(Pe({category:m.category,typeCV:m.typeCV})),h(we(x.find(({category:y})=>y===m.category).carsNumb)));return}},[o]);const b=()=>{z.confirm({title:"Confirmați Ieșirea",content:"Sigur doriți să părăsiți aplicația?",onOk(){setTimeout(()=>{h(U(!1)),h(w(1)),h(Q(null)),h(E(null)),h(F(0)),h(H(!1)),h(D(null)),h(Y(!1)),h(ee(!1)),h(_([]))},100),localStorage.clear(),location.reload()},onCancel(){console.log("Canceled exit")}})},N=()=>{d||b()},v=()=>{if(o===null||s===null||s===""){t("Completați cîmpuri CANDIDAT și AUTO");return}c(!0),h(w(3))};return e.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"row",position:"relative",justifyContent:"space-between",padding:"1.5rem"},children:[a&&e.jsx(xe,{message:"Text de avertizare",style:{position:"absolute",zIndex:"10",width:"75%"},description:a,showIcon:!0,type:"warning",onClose:()=>{t("")},closable:!0}),e.jsxs("div",{className:"candidat",children:[e.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"row",position:"relative",justifyContent:"space-between",paddingBottom:"1.5rem"},children:[e.jsxs("div",{onClick:N,className:"logout",children:[!d&&e.jsx(ve,{})," "]}),e.jsxs("div",{onClick:v,className:"stepRight",children:[!d&&e.jsx(je,{})," "]})]}),e.jsxs("div",{className:"examiner",children:[e.jsxs("span",{className:"text_static_header",children:[e.jsx(Ae,{})," "]}),e.jsxs("span",{style:{paddingRight:"5px"},children:[r.slice(0,r.indexOf(".")).toUpperCase()," ",r.slice(r.indexOf(".")+1).toUpperCase()]})]}),e.jsxs("div",{className:"examiner",children:[e.jsxs("span",{className:"text_static_header",children:[!d&&e.jsx(Re,{})," "]}),e.jsx("span",{style:{paddingRight:"5px"},children:" SCCA CHIŞINĂU "})]}),e.jsx("div",{className:"examiner",children:e.jsx(Je,{width:"100%",defaultValue:o||null})}),g&&e.jsxs(O,{className:"examiner",children:[e.jsx(Ee,{className:"text_static_header"}),e.jsxs(O,{justify:"space-between",gap:"1rem",style:{paddingLeft:"5px"},children:[e.jsxs("span",{children:[" ",g&&g.category]})," ",e.jsxs("span",{children:[" ",g&&g.typeCV]})]})]}),e.jsx("div",{className:"examiner",children:e.jsx(Me,{width:"100%",defaultValue:s||null})})]})]})},re=({punctele:a})=>e.jsx("span",{className:"whiteColor",children:a}),Fe=()=>{const[a,t]=u.useState(""),[n,c]=u.useState(!1),[i,r]=u.useState(localStorage.getItem("startTime")),[d,o]=u.useState(null),[s,x]=u.useState(0),[g,h]=u.useState(0),[b,N]=u.useState(null),[v,m]=u.useState(!1),[y,P]=u.useState(0),[k,L]=u.useState(0),j=C(),J=p(S=>S.dl.punctele),l=p(S=>S.dl.isRunning),f=p(S=>S.dl.candidat),I=p(S=>S.dl.carnumber);u.useEffect(()=>{i&&M()},[]);const $=()=>{if(!f||!I){t("Completați cîmpuri CANDIDAT și AUTO"),c(!0);return}z.confirm({title:"Începe testul practic pentru permisul de conducere?",width:"900px",fontSize:"1.2rem",onOk:M,okText:"Da",cancelText:"Nu"})},V=()=>{z.confirm({title:"Finaliza examenul pentru obținerea permisului de conducere?",onOk:q,okText:"Da",cancelText:"Nu"})},M=()=>{let S=i?new Date(i):new Date;localStorage.setItem("startTime",S.toISOString()),r(S),j(H(!0)),j(ee(!0));const A=setInterval(()=>{o(new Date)},1e3);N(A)},q=()=>{if(clearInterval(b),j(H(!1)),j(Y(!0)),i&&d){let S=new Date(i),A=d.getTime()-S.getTime(),X=Math.floor(A/(1e3*60)),K=Math.floor(A/1e3%60);P(X),L(K)}r(null),o(null),x(0),h(0),m(!0),localStorage.clear()};return u.useEffect(()=>{if(i&&d){console.log(`startTime--- ${typeof i}--endTime ${typeof d}`);let S=new Date(i),A=d.getTime()-S.getTime(),X=Math.floor(A/(1e3*60)),K=Math.floor(A/1e3%60);x(X),h(K)}},[i,d]),e.jsxs("div",{children:[e.jsx(O,{align:"center",justify:"space-between",style:{display:"contents",width:"100%",color:"white",margin:"5px 0px"},children:e.jsx("div",{style:{marginBottom:"0.5rem"},className:v?"hideTime":"",children:l?e.jsx(G,{className:"start-button",style:{fontSize:"1rem",padding:"0.4rem"},size:"large",type:"primary",onClick:V,children:"FINALIZAREA EXAMENULUI"}):e.jsxs("div",{className:"header",children:[e.jsx("div",{onClick:()=>j(w(2)),style:{fontSize:"3rem",color:"var(--color-static-text)"},children:e.jsx(be,{})}),e.jsx("div",{children:e.jsx(G,{className:"start-button",icon:e.jsx(Te,{style:{fontSize:"1rem"}}),style:{fontSize:"1rem",padding:"0.4rem"},size:"large",type:"primary",onClick:$,children:"START EXAMENUL"})})]})})}),i&&e.jsxs("div",{className:"header",children:[e.jsxs(O,{justify:"start",align:"center",children:[e.jsx(Oe,{className:"custom-icon"}),e.jsxs("div",{className:"timer",children:[R(s),":",R(g)]})]}),e.jsxs("div",{className:"puncteleAcumulate",children:["Punctele ",e.jsx(re,{punctele:J})]})]}),!l&&(y>0||k>0)&&e.jsxs("div",{className:"header",children:[e.jsxs("div",{className:"timer",children:["Durata examenului ",R(y),":",R(k)]}),e.jsxs("div",{className:"puncteleAcumulate",children:["Punctele ",e.jsx(re,{punctele:J})]})]})]})},He=()=>{p(i=>i.auth.user);const a=p(i=>i.dl.headerHeight),t=p(i=>i.dl.fieldsDisabled),n=C(),c=u.useRef(null);return u.useEffect(()=>{n(se(c.current.clientHeight)),console.log("headerHeight from header ",a)},[]),u.useEffect(()=>{n(se(c.current.clientHeight))},[t]),e.jsxs("div",{ref:c,style:{display:"block",color:"white",margin:"0 auto",maxWidth:"1280px",position:"relative",padding:"15px"},children:[e.jsx(O,{justify:"space-between",align:"center"}),e.jsx(Fe,{})]})},{confirm:_e,info:zt}=z,$e=()=>{const[a,t]=u.useState(!1),[n,c]=Se.useNotification(),i=()=>{n.error({message:e.jsx("span",{style:{color:"black"},children:"EXAMEN NU A FOST SUSȚINUT"}),description:e.jsx("span",{style:{color:"black"},children:"Ați atins limita de puncte de penalizare. Examenul a eșuat."}),style:{backgroundColor:"var(--color-white)"}})},r=p(l=>l.dl.list),d=p(l=>l.dl.isRunning),o=p(l=>l.dl.stopExamen),s=p(l=>l.dl.punctele),x=p(l=>l.dl.statistics),g=C(),[h,b]=u.useState(null),[N,v]=u.useState(null);u.useRef(null);const m=p(l=>l.dl.headerHeight);console.log("typeof statistics +++ ",typeof x),u.useEffect(()=>{a===!1&&s>=21&&(t(!0),i())},[s]),u.useEffect(()=>(document.addEventListener("click",P),()=>{document.removeEventListener("click",P)}),[]),u.useEffect(()=>{if(o&&s>=21){L("EXAMEN NU A FOST SUSȚINUT",`Ați atins limita de puncte de penalizare ${s}. Examenul a eșuat`,"error");return}if(o&&s<21){L("SUSȚINUT","Examenul a fost promovat cu succes!","success");return}},[o,s]);const y=(l,f)=>{b(l),k(l,f)},P=l=>{!l.target.closest(".penalizare-item")&&!l.target.closest(".ant-modal")&&!l.target.closest(".ant-modal-wrap")&&b(null)},k=(l,f)=>{_e({title:e.jsxs("div",{children:[e.jsx("div",{children:"Ești sigur că dorești să adaugi punctele de penalizare??"}),e.jsxs("div",{className:"confirmItem",children:[l,". ",f]})]}),width:"900px",centered:!0,content:null,modalRender:I=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:I}),onOk(){console.log("Confirmed add for id:",l),g(Z(l)),g(F()),g(_(l)),v(null)},onCancel(){console.log("Cancel"),v(null)}})},L=(l,f,I)=>{z[I]({title:l,content:e.jsxs("div",{children:[e.jsx("p",{children:f}),!x.length||x===null||x===void 0?e.jsx("h2",{children:"Bravo nici o eroare"}):e.jsxs("div",{children:[e.jsx("h3",{children:"Lista erorilor"}),e.jsx("ul",{children:x.map(({time:$,text:V,result:M},q)=>e.jsxs("li",{style:{...q%2===0?{background:"#D3D3D3",borderRadius:"0.2rem"}:{},fontSize:"0.9rem",paddingBottom:"0.3rem"},children:[$,". ",V,". Penalizare: ",M]},Math.random()*Date.now()))})]})]}),okText:e.jsxs(e.Fragment,{children:[e.jsx(ze,{})," Close"]}),onOk(){setTimeout(()=>{g(U(!1)),g(Q(null)),g(E(null)),g(F(0)),g(H(!1)),g(D(null)),g(Y(!1)),g(ee(!1)),g(_([])),location.reload(),localStorage.clear()},100),console.log("EXITTTTTT")}})};u.useEffect(()=>{if(N!==null){const l=setTimeout(()=>{if(N.length>0){const f=document.querySelectorAll(".ant-collapse-item")[Number(N[0])-1];console.log(N[0]-1),console.log("targetElement: ",f.offsetTop),console.log("headerHeight: ",m),console.log("-----"),window.scroll({top:f.offsetTop-m-1,left:0,color:"transparent",behavior:"smooth"})}},300);return()=>clearTimeout(l)}},[N]),u.useEffect(()=>{document.querySelectorAll(".ant-collapse-header").forEach(f=>{const I=f.querySelector("svg");I&&(f.parentElement.classList.contains("ant-collapse-item-active")?(console.log("contains:ant-collapse-item-active "),I.classList.add("rotate-90")):I.classList.remove("rotate-90"))})},[N]);const j=l=>{v(l)},J=r.map(l=>({key:l.id,label:`${l.id}. ${l.title}`,className:"collapse_item",children:e.jsx(e.Fragment,{children:l.penalizare.map((f,I)=>e.jsxs("div",{className:"notSelectedId",style:{...I%2===0?{background:"#D3D3D3",borderRadius:"0.2rem"}:{}},onClick:()=>y(f.id,f.text),children:[f.id===h&&o===!1?e.jsx(e.Fragment,{children:e.jsxs("div",{style:{width:"76%",textAlign:"left",fontSize:"x-large"},children:[f.id," ",f.text]})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"accordion_penalizare_id",children:e.jsx("strong",{children:f.id})}),e.jsx("div",{className:"accordion_penalizare_text",children:f.text})]}),e.jsx("div",{className:"accordion_penalizare_result",children:f.result}),e.jsx("div",{className:"accordion_penalizare_count",children:f.count})]},f.id))})}));return e.jsxs("div",{style:{marginTop:m},children:[c,e.jsx("div",{className:d===!1&&o===!1||o===!0?"disabledbutton":"",children:e.jsx(Ne,{accordion:!0,items:J,activeKey:N,onChange:j})})]})},Ve=(a,t,n)=>{if(!a&&t===1)return e.jsx(Le,{});if(a&&t===2)return e.jsx(Be,{});if(a&&t===3)return e.jsxs("div",{className:"main",children:[e.jsx("div",{className:n>=21?"headerMainFailed":"headerMain",children:e.jsx(He,{})}),e.jsx($e,{})]})};function qe(){const a=p(i=>i.auth.isAuth),t=p(i=>i.dl.punctele),n=p(i=>i.dl.page),c=C();return u.useEffect(()=>{const i=JSON.parse(JSON.stringify(localStorage.getItem("list")));let r=[];if(i?(r=i,c(Z(r))):(r=T,localStorage.setItem("list",JSON.stringify(T)),c(Z(T))),!localStorage.getItem("isAuth"))localStorage.setItem("isAuth",ce(JSON.stringify(!1))),c(U(!1)),localStorage.setItem("user",JSON.stringify("nenov.dumitru")),localStorage.setItem("carnumber",JSON.stringify()),localStorage.setItem("punctele",JSON.stringify(0)),localStorage.setItem("isRunning",JSON.stringify(!1)),localStorage.setItem("mocksCars",JSON.stringify([])),localStorage.setItem("candidat",JSON.stringify()),localStorage.setItem("stopExamen",JSON.stringify(!1)),localStorage.setItem("fieldsDisabled",JSON.stringify(!1)),localStorage.setItem("statistics",JSON.stringify([])),localStorage.setItem("headerHeight",JSON.stringify(null)),localStorage.setItem("page",JSON.stringify(1)),localStorage.setItem("candidatFields",JSON.stringify(null)),localStorage.setItem("statistics",JSON.stringify([]));else{const d=localStorage.getItem("isAuth");c(U(d)),c(w(Number(JSON.parse(localStorage.getItem("page")))));const o=localStorage.getItem("candidat");c(D(o==="undefined"?"":o));const s=localStorage.getItem("carnumber");c(E(s==="undefined"?"":s)),c(F());const x=JSON.parse(JSON.stringify("statistics"));c(_(x))}},[]),Ve(a,n,t)}const Xe=ge({reducer:{auth:Ue,dl:ke}});me.createRoot(document.getElementById("root")).render(e.jsx(pe.StrictMode,{children:e.jsx(fe,{store:Xe,children:e.jsx(qe,{})})}));
