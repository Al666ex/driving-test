import{r as c,j as e,a as re}from"./react-DHBI0EtI.js";import{c as ne}from"./react-dom-DvAqprxs.js";import{u as o,a as S,P as le}from"./react-redux-9YiUNuZq.js";import{c as ee,a as ce}from"./@reduxjs-DYdxbMDp.js";import{S as oe,F as D,I as Z,B as H,a as O,M as b,s as de,C as ue,b as te,A as pe}from"./antd-48RVozF5.js";import{s as me,v as fe,w as he,x as xe,y as ge,z as Ce,A as ve,B as Ne,o as je,l as Ae,C as Re,D as Ie}from"./@ant-design-De8OqRb7.js";import"./classnames-C9FZUsQl.js";import"./scheduler-CzFDRTuY.js";import"./use-sync-external-store-BtHkT4fs.js";import"./redux-DITMfSWq.js";import"./immer-AZmEbvJU.js";import"./reselect-DyB87yl0.js";import"./redux-thunk-ClJT1hhx.js";import"./rc-util-B_AY2VOg.js";import"./@babel-pBanenlM.js";import"./rc-resize-observer-B5SAndUk.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./rc-motion-BXl1Ur-d.js";import"./rc-select-CH2ucOIa.js";import"./rc-overflow-D8l21FYA.js";import"./@rc-component-DqSxGoEg.js";import"./rc-virtual-list-BxRskdzZ.js";import"./@ctrl-DOFZgDuz.js";import"./rc-collapse-B7N3SjHH.js";import"./rc-input-zawYJlWa.js";import"./rc-textarea-CQPxsfLl.js";import"./rc-field-form-DG8tb0mB.js";import"./scroll-into-view-if-needed-BZeNfFF0.js";import"./compute-scroll-into-view-DWa9QgjM.js";import"./rc-tooltip-B1MF79mz.js";import"./rc-dialog-CtFDBlaK.js";import"./throttle-debounce-CUWDS_la.js";import"./rc-pagination-CEkmKXf3.js";import"./rc-picker-DUPmmDeg.js";import"./rc-notification-Dp9MZ3ez.js";import"./@emotion-CW87jbl0.js";import"./stylis-DsJDcYJc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))m(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&m(r)}).observe(document,{childList:!0,subtree:!0});function u(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function m(a){if(a.ep)return;a.ep=!0;const s=u(a);fetch(a.href,s)}})();const ie=ee({name:"auth",initialState:{isAuth:!1,user:"nenov.dumitru"},reducers:{setIsAuth:(i,t)=>{i.isAuth=t.payload},setUser:(i,t)=>{i.user=t.payload}}}),{setIsAuth:q,setUser:X}=ie.actions,ye=ie.reducer;function y(i){let t=i.toString();return t.length<2?"0"+t:t}const ae=ee({name:"queryParams",initialState:{list:[{id:1,title:"Obligațiile conducătorului de vehicul înainte de deplasare",penalizare:[{id:"1.1",text:"(Ne) verificarea închiderii ușilor",result:5,count:0},{id:"1.2",text:"(Ne) ajustarea banchetei, oglinzilor retrovizoare și (ne) cuplarea centurii de siguranță",result:5,count:0},{id:"1.3",text:"(Ne) conectarea luminii în faruri",result:3,count:0},{id:"1.4",text:"(Ne) eliberarea frânei de staționare",result:3,count:0}]},{id:2,title:"Executarea în siguranță a manevrelor speciale",penalizare:[{id:"2.1",text:"(Ne) menținerea benzii  la deplasarea în marșarier pe o distanță de circa 20 m",result:5,count:0},{id:"2.2",text:"Incapacitatea de a întoarce vehiculul în sens opus, folosind mersul înainte și înapoi (1 tentativă din 3 mişcări)",result:5,count:0},{id:"2.3",text:"(Ne) încadrarea vehiculului în limitele spaţiului de parcare, la intrare sau la ieşire (paralel, oblic sau în unghi drept, prin mers înainte sau înapoi, pe teren plat, 1 tentativă)",result:5,count:0}]},{id:3,title:"Începutul deplasării și schimbarea direcției de mers",penalizare:[{id:"3.1",text:"(Ne) asigurarea la schimbarea direcției de mers și/sau intrarea în intersecții nedirijate (RCR, pct.39)",result:7,count:0},{id:"3.2",text:"Devierea de la traseu și neglijarea indicațiilor examinatorului",result:3,count:0}]},{id:4,title:"Poziția vehiculului pe carosabil",penalizare:[{id:"4.1",text:"(Ne) semnalizarea sau semnalizarea incorectă a direcției de mers (RCR, pct.32)",result:3,count:0},{id:"4.2",text:"(Ne) încadrarea în limitele benzilor de circulaţie (RCR, pct.43, subpct.3, lit.a))",result:5,count:0}]},{id:5,title:"Viteza de deplasare și spațiul între vehicule",penalizare:[{id:"5.1",text:"(Ne) respectarea limitelor de viteză",result:7,count:0},{id:"5.2",text:"(Ne) adaptarea vitezei la diverse situaţii şi condiţii rutiere (RCR, pct.50)",result:3,count:0},{id:"5.3",text:"(Ne) aprecierea și (ne) menținerea distanțelor și intervalelor de siguranță",result:3,count:0},{id:"5.4",text:"Conducerea cu viteză redusă fără motiv întemeiat şi (ne)încadrarea în ritmul impus de ceilalţi conducători de vehicule (o singură penalizare, după o avertizare preventivă) (RCR, pct.50)",result:3,count:0}]},{id:6,title:"Depășirea",penalizare:[{id:"6.1",text:"(Ne) respectarea regulilor de executare în siguranță a depășirii (RCR, pct.51, pct.52, pct.53, pct. 54)",result:21,count:0}]},{id:7,title:"Traversarea intersecțiilor",penalizare:[{id:"7.1",text:"(Ne) acordarea priorității vehiculelor care vin din sens opus, în cazul virării la stânga sau întoarcerii (RCR, pct. 56, subpct.2) și/sau (ne) acordarea priorității ciclomotoarelor, bicicliștilor, pietonilor, în cazul virării la dreapta sau la stânga (RCR, pct. 56, subpct.3)",result:21,count:0},{id:"7.2",text:"Intrarea în intersecție sau pe trecerea de pietoni în cazul în care în direcția de mers circulația este blocată (RCR, pct. 57)",result:7,count:0},{id:"7.3",text:"(Ne) acordarea priorității vehiculelor deja angajate în traversarea intersecției cu circulație dirijată, indiferent de direcția lor de deplasare și/sau pietonilor care finalizează traversarea carosabilului, la apariția semnalului verde al semaforului. ( RCR pct.58, subpct. 3)",result:21,count:0},{id:"7.4",text:"(Ne) respectarea regulilor de traversare a intersecțiilor cu circulație nedirijată (RCR, pct.59)",result:21,count:0},{id:"7.5",text:"(Ne) respectarea semnalizării rutiere, a indicatoarelor sau marcajelor rutiere",result:7,count:0},{id:"7.6",text:"(Ne) respectarea semnalului de interzicere al semaforului sau al agentului de circulație",result:21,count:0},{id:"7.7",text:"(Ne) traversarea sau traversarea întârziată a intersecției și/sau a trecerii de pietoni, la culoarea permisivă a semaforului sau la semnalul agentului de circulație",result:3,count:0}]},{id:8,title:"Traversarea căilor ferate",penalizare:[{id:"8.1",text:"(Ne) respectarea regulilor de traversare a căilor ferate (RCR, pct.60, pct.61,  pct.62, pct.63, pct.64)",result:21,count:0}]},{id:9,title:"Oprirea voluntară și staționarea",penalizare:[{id:"9.1",text:"Oprirea neregulamentară (RCR, pct.68)",result:3,count:0},{id:"9.2",text:"Oprirea în locuri interzise (RCR, pct.69)",result:5,count:0}]},{id:10,title:"Prioritatea în traficul rutier",penalizare:[{id:"10.1",text:"(Ne) acordarea de prioritate vehiculelor și/sau pietonilor la trecerile de pietoni cu circulație nedirijată (RCR, pct. 11, lit. f), pct. 39)",result:21,count:0},{id:"10.2",text:"(Ne) acordarea de prioritate vehiculelor cu regim prioritar de circulație sau vehiculului poliției când escortează o coloană (RCR, pct.18, subpct. 1)",result:21,count:0},{id:"10.3",text:"Tendință repetată de a ceda trecerea vehiculelor și pietonilor când aceștia nu au prioritate (o singură penalizare, după o avertizare preventivă)",result:3,count:0}]},{id:11,title:"Conducerea vehiculului în condiții de vizibilitate redusă și/sau condiții meteorologice nefavorabile",penalizare:[{id:"11.1",text:"(Ne) adaptarea distinctă la condiții de ploaie, mâzgă, zăpadă, polei, etc. (o singură penalizare) ",result:3,count:0}]},{id:12,title:"Erori tehnice",penalizare:[{id:"12.1",text:"Oprirea motorului la pornire și/sau în timpul deplasării (prima eroare nu se penalizează, se admite o singură  penalizare)",result:3,count:0},{id:"12.2",text:"Cuplarea treptei de viteză, fără a apăsa pedala de ambreiaj",result:3,count:0},{id:"12.3",text:"Pornirea motorului având cutia de viteze cuplată, fără a apăsa pedala de ambreiaj",result:3,count:0},{id:"12.4",text:"(Ne) sincronizarea acțiunilor la demarare/accelerare/frânare: adaptarea incorectă a treptelor de viteză la viteza de deplasare, folosirea incorectă a dispozitivelor de comandă, acționarea incorectă a volanului (o singură penalizare)",result:3,count:0},{id:"12.5",text:"La pornire eliberează brusc pedala de ambreiaj și smuncește vehiculul",result:3,count:0},{id:"12.6",text:"La pornire  vehiculul se deplasează cu spatele",result:3,count:0}]},{id:13,title:"PIERDEREA CONTROLULUI ASUPRA VEHICULULUI ŞI/SAU INTERVENŢIA EXAMINATORULUI PENTRU A EVITA UN PERICOL IMINENT SAU PRODUCEREA UNUI ACCIDENT RUTIER; MANIFESTĂRI ALE CANDIDATULUI CARE PROVOACĂ PERTURBAREA EXAMENULUI",penalizare:[{id:"13.1",text:"PIERDEREA CONTROLULUI ASUPRA VEHICULULUI ŞI/SAU INTERVENŢIA EXAMINATORULUI PENTRU A EVITA UN PERICOL IMINENT SAU PRODUCEREA UNUI ACCIDENT RUTIER; MANIFESTĂRI ALE CANDIDATULUI CARE PROVOACĂ PERTURBAREA EXAMENULUI ",result:21,count:0}]}],carnumber:null,punctele:0,isRunning:!1,mocksSolicitants:[{name:"TOFAN ZINAIDA",category:"B",typeCV:"AUTOMATĂ"},{name:"ROTARU CONSTANTIN",category:"C",typeCV:"MECANICĂ"},{name:"POPOV OLGA",category:"B",typeCV:"AUTOMATĂ"},{name:"GRIGORII TATIANA",category:"D",typeCV:"MECANICĂ"}],mocksCars:[],mocksArrCars:[{category:"B",carsNumb:["CAB138","CAB139","CAB140","CAB141"]},{category:"C",carsNumb:["CAB320","CAB321","CAB322"]},{category:"D",carsNumb:["CAB699","CAB700","CAB701","CAB702","CAB703"]}],candidat:null,stopExamen:!1,fieldsDisabled:!1,statistics:[],headerHeight:null,page:1,candidatFields:null},reducers:{setCandidatFields:(i,t)=>{i.candidatFields=t.payload},setCarnumber:(i,t)=>{i.carnumber=t.payload},setList:(i,t)=>{let m=JSON.parse(JSON.stringify(i.list)).map(a=>{const s=a.penalizare.map(r=>r.id===t.payload?{...r,count:r.count+1}:r);return{...a,penalizare:s}});i.list=m},setPunctele:i=>{let t=JSON.parse(JSON.stringify(i.list));function u(m){return m.reduce((a,s)=>{const r=s.penalizare.reduce((d,n)=>d+n.result*n.count,0);return a+r},0)}i.punctele=u(t)},setIsRunning:(i,t)=>{i.isRunning=t.payload},setCandidat:(i,t)=>{i.candidat=t.payload},setStopExamen:(i,t)=>{i.stopExamen=t.payload},setFieldsDisabled:(i,t)=>{i.fieldsDisabled=t.payload},setStatistics:(i,t)=>{JSON.parse(JSON.stringify(i.list)).map(m=>{const a=m.penalizare.find(s=>s.id===t.payload);if(a){let s=i.statistics;const r=new Date,d=y(r.getHours()),n=y(r.getMinutes()),g=y(r.getSeconds());let h={time:`${d}:${n}:${g}`,text:a.text,result:a.result};s.push(h),i.statistics=s;return}})},setHeaderHeight:(i,t)=>{i.headerHeight=t.payload},setPage:(i,t)=>{i.page=t.payload},setMocksCars:(i,t)=>{i.mocksCars=t.payload}}}),{setCarnumber:z,setList:Se,setPunctele:V,setIsRunning:w,setCandidat:J,setStopExamen:K,setFieldsDisabled:G,setStatistics:$,setHeaderHeight:Q,setPage:W,setMocksCars:Ee,setCandidatFields:be}=ae.actions,ze=ae.reducer,Te=()=>{const[i,t]=c.useState("nenov.dumitru"),[u,m]=c.useState("nenov"),[a,s]=c.useState(!1);o(n=>n.dl.page);const r=S(),d=async()=>{try{s(!0),setTimeout(()=>{r(q(!0)),r(X(i)),s(!1),r(W(2))},300)}catch{s(!1)}};return e.jsx("div",{className:"modal",children:a?e.jsx("div",{className:"spinner-container",children:e.jsx(oe,{size:"large"})}):e.jsxs(D,{name:"basic",initialValues:{username:i,password:u},labelCol:{span:8},wrapperCol:{span:16},autoComplete:"off",children:[e.jsx(D.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:e.jsx(Z,{value:i,onChange:n=>t(n.target.value),className:"inputSize"})}),e.jsx(D.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:e.jsx(Z.Password,{value:u,onChange:n=>m(n.target.value),className:"inputSize"})}),e.jsx(D.Item,{wrapperCol:{span:24},style:{textAlign:"right"},children:e.jsx(H,{icon:e.jsx(me,{style:{fontSize:"1.5rem"}}),type:"primary",onClick:d,className:"authButton",children:"Autentificare"})})]})})},Y=({punctele:i})=>e.jsx("span",{className:"whiteColor",children:i}),Ue=()=>{c.useState(null);const[i,t]=c.useState(""),[u,m]=c.useState(!1),[a,s]=c.useState(null),[r,d]=c.useState(null),[n,g]=c.useState(0),[N,h]=c.useState(0),[C,R]=c.useState(null),[I,f]=c.useState(!1),[j,k]=c.useState(0),[E,P]=c.useState(0),A=S();o(x=>x.auth.user);const T=o(x=>x.dl.punctele),U=o(x=>x.dl.isRunning),l=o(x=>x.dl.candidat),p=o(x=>x.dl.carnumber);o(x=>x.dl.mocksSolicitants);const v=()=>{if(l===null||p===null){t("Completați cîmpuri CANDIDAT și AUTO"),m(!0);return}b.confirm({title:"Începe testul practic pentru permisul de conducere?",width:"900px",fontSize:"1.2rem",onOk:M,okText:"Da",cancelText:"Nu"})},L=()=>{b.confirm({title:"Finaliza examenul pentru obținerea permisului de conducere?",onOk:B,okText:"Da",cancelText:"Nu"})},M=()=>{s(new Date),A(w(!0)),A(G(!0));const x=setInterval(()=>{d(new Date)},1e3);R(x)},B=()=>{if(clearInterval(C),A(w(!1)),A(K(!0)),a&&r){let x=r.getTime()-a.getTime(),F=Math.floor(x/(1e3*60)),_=Math.floor(x/1e3%60);k(F),P(_)}s(null),d(null),g(0),h(0),f(!0)};return c.useEffect(()=>{if(a&&r){let x=r.getTime()-a.getTime(),F=Math.floor(x/(1e3*60)),_=Math.floor(x/1e3%60);g(F),h(_)}},[a,r]),e.jsxs("div",{children:[e.jsx(O,{align:"center",justify:"space-between",style:{display:"contents",width:"100%",color:"white",margin:"5px 0px"},children:e.jsx("div",{style:{marginBottom:"0.5rem"},className:I===!0?"hideTime":"",children:U?e.jsx(H,{className:"start-button",style:{fontSize:"1rem",padding:"0.4rem"},size:"large",type:"primary",onClick:L,children:"FINALIZAREA EXAMENULUI"}):e.jsxs("div",{className:"main_timer",children:[e.jsxs("div",{onClick:()=>{A(W(2))},style:{fontSize:"3rem",color:"var(--color-static-text)"},children:[" ",e.jsx(fe,{})]}),e.jsx("div",{children:e.jsx(H,{className:"start-button",icon:e.jsx(he,{style:{fontSize:"1rem"}}),style:{fontSize:"1rem",padding:"0.4rem"},size:"large",type:"primary",onClick:v,children:"START EXAMENUL"})})]})})}),a&&e.jsxs("div",{className:"main_timer",children:[e.jsxs(O,{justify:"start",align:"center",children:[e.jsx(xe,{className:"custom-icon"}),e.jsxs("div",{className:"timer",children:[" ",y(n),":",y(N)]})]}),e.jsxs("div",{className:"puncteleAcumulate",children:["Punctele ",e.jsx(Y,{punctele:T})]})]}),!U&&(j>0||E>0)&&e.jsxs("div",{className:"header",children:[e.jsxs("div",{className:"timer",children:["Durata examenului ",y(j),":",y(E)," "]}),e.jsxs("div",{className:"puncteleAcumulate",children:["Punctele ",e.jsx(Y,{punctele:T})]})]})]})},De=()=>{const i=o(s=>s.dl.headerHeight),t=o(s=>s.dl.fieldsDisabled),u=o(s=>s.dl.punctele),m=S(),a=c.useRef(null);return c.useEffect(()=>{m(Q(a.current.clientHeight)),console.log("headerHeight from header ",i)},[]),c.useEffect(()=>{m(Q(a.current.clientHeight))},[t]),e.jsx("div",{ref:a,className:"headerMain",style:{background:u>=21?"var(--background-header-main-failed)":"var(--background-header-main)"},children:e.jsx("div",{style:{maxWidth:"1280px",margin:"0 auto",paddingLeft:"1rem",paddingRight:"1rem"},children:e.jsx(Ue,{})})})},{confirm:Oe,info:It}=b,we=()=>{const[i,t]=c.useState(!1),[u,m]=de.useNotification(),a=o(l=>l.dl.list),s=o(l=>l.dl.isRunning),r=o(l=>l.dl.stopExamen),d=o(l=>l.dl.punctele),n=o(l=>l.dl.statistics),g=S(),[N,h]=c.useState(null),[C,R]=c.useState(null),I=o(l=>l.dl.headerHeight),f=c.useRef(),j=()=>{u.error({message:e.jsx("span",{style:{color:"black"},children:"EXAMEN NU A FOST SUSȚINUT"}),description:e.jsx("span",{style:{color:"black"},children:"Ați atins limita de puncte de penalizare. Examenul a eșuat."}),style:{backgroundColor:"var(--color-white)"}})};c.useEffect(()=>{i===!1&&d>=21&&(t(!0),j())},[d]),c.useEffect(()=>(document.addEventListener("click",E),()=>{document.removeEventListener("click",E)}),[]),c.useEffect(()=>{if(r&&d>=21){A("EXAMEN NU A FOST SUSȚINUT",`Ați atins limita de puncte de penalizare ${d}. Examenul a eșuat`,"error");return}if(r&&d<21){A("SUSȚINUT","Examenul a fost promovat cu succes!","success");return}},[r,d]);const k=(l,p)=>{h(l),P(l,p)},E=l=>{!l.target.closest(".penalizare-item")&&!l.target.closest(".ant-modal")&&!l.target.closest(".ant-modal-wrap")&&h(null)},P=(l,p)=>{Oe({title:e.jsxs("div",{children:[e.jsx("div",{children:"Ești sigur că dorești să adaugi punctele de penalizare??"}),e.jsxs("div",{className:"confirmItem",children:[l,". ",p]})]}),width:"900px",centered:!0,content:null,modalRender:v=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:v}),onOk(){console.log("Confirmed add for id:",l),g(Se(l)),g(V()),g($(l)),R(null)},onCancel(){console.log("Cancel"),R(null)}})},A=(l,p,v)=>{b[v]({title:l,content:e.jsxs("div",{children:[e.jsx("p",{children:p}),n.length?e.jsxs("div",{children:[e.jsx("h3",{children:"Lista erorilor"}),e.jsx("ul",{children:n.map(({time:L,text:M,result:B},x)=>e.jsxs("li",{style:{...x%2===0?{background:"#D3D3D3",borderRadius:"0.2rem"}:{},fontSize:"0.9rem",paddingBottom:"0.3rem"},children:[L,". ",M,". Penalizare: ",B]},Math.random()*Date.now()))})]}):e.jsx("h2",{children:"Bravo nici o eroare"})]}),okText:e.jsxs(e.Fragment,{children:[e.jsx(ge,{})," Close"]}),onOk(){setTimeout(()=>{g(q(!1)),g(X(null)),g(z(null)),g(V(0)),g(w(!1)),g(J(null)),g(K(!1)),g(G(!1)),g($([]))},100),location.reload()}})};c.useEffect(()=>{if(C!==null){const l=setTimeout(()=>{if(C.length>0){const p=document.querySelectorAll(".ant-collapse-item")[Number(C[0])-1];console.log(C[0]-1),console.log("targetElement: ",p.offsetTop),console.log("headerHeight: ",I),console.log("-----"),window.scroll({top:p.offsetTop-(I+1),left:0,color:"transparent",behavior:"smooth"})}},300);return()=>clearTimeout(l)}},[C]),c.useEffect(()=>{document.querySelectorAll(".ant-collapse-header").forEach(p=>{const v=p.querySelector("svg");v&&(p.parentElement.classList.contains("ant-collapse-item-active")?(console.log("contains:ant-collapse-item-active "),v.classList.add("rotate-90")):v.classList.remove("rotate-90"))})},[C]);const T=l=>{R(l)},U=a.map(l=>({key:l.id,label:`${l.id}. ${l.title}`,className:"collapse_item",children:e.jsx(e.Fragment,{children:l.penalizare.map((p,v)=>e.jsxs("div",{className:"notSelectedId",style:{...v%2===0?{background:"#D3D3D3",borderRadius:"0.2rem"}:{}},onClick:()=>k(p.id,p.text),children:[p.id===N&&r===!1?e.jsx(e.Fragment,{children:e.jsxs("div",{style:{width:"76%",textAlign:"left",fontSize:"x-large"},children:[p.id," ",p.text]})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"accordion_penalizare_id",children:e.jsx("strong",{children:p.id})}),e.jsx("div",{className:"accordion_penalizare_text",children:p.text})]}),e.jsx("div",{className:"accordion_penalizare_result",children:p.result}),e.jsx("div",{className:"accordion_penalizare_count",children:p.count})]},p.id))})}));return e.jsxs("div",{style:{marginTop:I},children:[m,e.jsx("div",{className:s===!1&&r===!1||r===!0?"disabledbutton":"",children:e.jsx("div",{className:"hide-scrollbar",children:e.jsx(ue,{ref:f,accordion:!0,items:U,activeKey:C,onChange:T})})})]})},se=i=>i.map(t=>{let u={};return u.value=t,u.label=t.toString(),u}),ke=({width:i=100,defaultValue:t=null})=>{const u=o(n=>n.dl.candidat),m=o(n=>n.dl.mocksSolicitants),a=se(m.map(function(n){return n.name})),s=o(n=>n.dl.fieldsDisabled),r=S();c.useEffect(()=>{r(z(null))},[u]);const d=n=>{r(J(n))};return c.useEffect(()=>{d(t)},[]),e.jsxs("div",{className:"dynamic__components",children:[e.jsx("div",{className:"query__params",children:e.jsx(Ce,{})}),e.jsx(te,{showSearch:!0,defaultValue:t,placeholder:"CANDIDAT",style:{width:i},onChange:d,options:a,disabled:s})]})},Pe=({width:i=100,defaultValue:t=null})=>{const u=o(n=>n.dl.carnumber),m=o(n=>n.dl.mocksCars),a=se(m);o(n=>n.dl.fieldsDisabled);const s=o(n=>n.dl.candidat),r=S(),d=n=>{r(z(n))};return c.useEffect(()=>{d(t)},[]),e.jsxs("div",{className:"dynamic__components",children:[e.jsx("div",{className:"query__params",children:e.jsx(ve,{})}),e.jsx(te,{showSearch:!0,defaultValue:t,placeholder:"AUTO",style:{width:i},onChange:d,value:u,options:a,disabled:!s})]})},Le=()=>{const[i,t]=c.useState(""),[u,m]=c.useState(!1),a=o(f=>f.dl.mocksSolicitants),s=o(f=>f.auth.user),r=o(f=>f.dl.fieldsDisabled),d=o(f=>f.dl.candidat),n=o(f=>f.dl.carnumber),g=o(f=>f.dl.mocksArrCars),N=o(f=>f.dl.candidatFields),h=S();c.useEffect(()=>{d||h(z(null))},[]),c.useEffect(()=>{if(d!==null){const f=a.find(j=>j.name===d);f&&(h(be({category:f.category,typeCV:f.typeCV})),h(Ee(g.find(({category:j})=>j===f.category).carsNumb)));return}},[d]);const C=()=>{b.confirm({title:"Confirmați Ieșirea",content:"Sigur doriți să părăsiți aplicația?",onOk(){setTimeout(()=>{h(q(!1)),h(X(null)),h(z(null)),h(V(0)),h(w(!1)),h(J(null)),h(K(!1)),h(G(!1)),h($([]))},100),location.reload()},onCancel(){console.log("Canceled exit")}})},R=()=>{r||C()},I=()=>{if(d===null||n===null){t("Completați cîmpuri CANDIDAT și AUTO");return}m(!0),h(W(3))};return e.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"row",position:"relative",justifyContent:"space-between",padding:"1.5rem"},children:[i&&e.jsx(pe,{message:"Text de avertizare",style:{position:"absolute",zIndex:"10",width:"75%"},description:i,showIcon:!0,type:"warning",onClose:()=>{t("")},closable:!0}),e.jsxs("div",{className:"candidat",children:[e.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"row",position:"relative",justifyContent:"space-between",paddingBottom:"1.5rem"},children:[e.jsxs("div",{onClick:R,className:"logout",children:[!r&&e.jsx(Ne,{})," "]}),e.jsxs("div",{onClick:I,className:"stepRight",children:[!r&&e.jsx(je,{})," "]})]}),e.jsxs("div",{className:"examiner",children:[e.jsxs("span",{className:"text_static_header",children:[e.jsx(Ae,{})," "]}),e.jsxs("span",{style:{paddingRight:"5px"},children:[s.slice(0,s.indexOf(".")).toUpperCase()," ",s.slice(s.indexOf(".")+1).toUpperCase()]})]}),e.jsxs("div",{className:"examiner",children:[e.jsxs("span",{className:"text_static_header",children:[!r&&e.jsx(Re,{})," "]}),e.jsx("span",{style:{paddingRight:"5px"},children:" SCCA CHIŞINĂU "})]}),e.jsx("div",{className:"examiner",children:e.jsx(ke,{width:"100%",defaultValue:d||null})}),N&&e.jsxs(O,{className:"examiner",children:[e.jsx(Ie,{className:"text_static_header"}),e.jsxs(O,{justify:"space-between",gap:"1rem",style:{paddingLeft:"5px"},children:[e.jsxs("span",{children:[" ",N&&N.category]})," ",e.jsxs("span",{children:[" ",N&&N.typeCV]})]})]}),e.jsx("div",{className:"examiner",children:e.jsx(Pe,{width:"100%",defaultValue:n||null})})]})]})},Me=(i,t)=>{if(!i&&t===1)return e.jsx(Te,{});if(i&&t===2)return e.jsx(Le,{});if(i&&t===3)return e.jsxs(e.Fragment,{children:[e.jsx("header",{style:{position:"fixed",top:"0",left:"0",width:"100%",zIndex:"101"},children:e.jsx(De,{})}),e.jsx("div",{className:"main",children:e.jsx(we,{})})]})};function Be(){const i=o(u=>u.auth.isAuth),t=o(u=>u.dl.page);return Me(i,t)}const Fe=ce({reducer:{auth:ye,dl:ze}});ne.createRoot(document.getElementById("root")).render(e.jsx(re.StrictMode,{children:e.jsx(le,{store:Fe,children:e.jsx(Be,{})})}));
