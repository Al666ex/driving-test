import{j as e,r as c,a as re}from"./react-DHBI0EtI.js";import{c as ne}from"./react-dom-DvAqprxs.js";import{u as y,a as o,P as le}from"./react-redux-DRBJJprV.js";import{c as ee,a as ce}from"./@reduxjs-DYdxbMDp.js";import{F as E,B as H,M as b,S as oe,a as w,I as Z,b as te,s as de,C as ue,A as pe}from"./antd-BHCzw1om.js";import{s as me,v as fe,w as he,x as xe,y as ge,z as Ce,A as ve,B as Ne,o as je,l as Ae,C as Re,D as Ie}from"./@ant-design-uxRrle4s.js";import"./classnames-C9FZUsQl.js";import"./scheduler-CzFDRTuY.js";import"./use-sync-external-store-BtHkT4fs.js";import"./redux-DITMfSWq.js";import"./immer-AZmEbvJU.js";import"./reselect-DyB87yl0.js";import"./redux-thunk-ClJT1hhx.js";import"./rc-util-B_AY2VOg.js";import"./@babel-pBanenlM.js";import"./rc-resize-observer-B5SAndUk.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./rc-motion-BXl1Ur-d.js";import"./rc-select-CH2ucOIa.js";import"./rc-overflow-D8l21FYA.js";import"./@rc-component-DqSxGoEg.js";import"./rc-virtual-list-BxRskdzZ.js";import"./@ctrl-DOFZgDuz.js";import"./rc-collapse-B7N3SjHH.js";import"./rc-input-zawYJlWa.js";import"./rc-textarea-CQPxsfLl.js";import"./rc-field-form-DG8tb0mB.js";import"./scroll-into-view-if-needed-BZeNfFF0.js";import"./compute-scroll-into-view-DWa9QgjM.js";import"./rc-tooltip-B1MF79mz.js";import"./rc-dialog-CtFDBlaK.js";import"./throttle-debounce-CUWDS_la.js";import"./rc-pagination-CEkmKXf3.js";import"./rc-picker-DUPmmDeg.js";import"./rc-notification-Dp9MZ3ez.js";import"./@emotion-CW87jbl0.js";import"./stylis-DsJDcYJc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))d(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function p(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(a){if(a.ep)return;a.ep=!0;const r=p(a);fetch(a.href,r)}})();function I(i){let t=i.toString();return t.length<2?"0"+t:t}const ie=ee({name:"queryParams",initialState:{list:[{id:1,title:"Obligațiile conducătorului de vehicul înainte de deplasare",penalizare:[{id:"1.1",text:"(Ne) verificarea închiderii ușilor",result:5,count:0},{id:"1.2",text:"(Ne) ajustarea banchetei, oglinzilor retrovizoare și (ne) cuplarea centurii de siguranță",result:5,count:0},{id:"1.3",text:"(Ne) conectarea luminii în faruri",result:3,count:0},{id:"1.4",text:"(Ne) eliberarea frânei de staționare",result:3,count:0}]},{id:2,title:"Executarea în siguranță a manevrelor speciale",penalizare:[{id:"2.1",text:"(Ne) menținerea benzii  la deplasarea în marșarier pe o distanță de circa 20 m",result:5,count:0},{id:"2.2",text:"Incapacitatea de a întoarce vehiculul în sens opus, folosind mersul înainte și înapoi (1 tentativă din 3 mişcări)",result:5,count:0},{id:"2.3",text:"(Ne) încadrarea vehiculului în limitele spaţiului de parcare, la intrare sau la ieşire (paralel, oblic sau în unghi drept, prin mers înainte sau înapoi, pe teren plat, 1 tentativă)",result:5,count:0}]},{id:3,title:"Începutul deplasării și schimbarea direcției de mers",penalizare:[{id:"3.1",text:"(Ne) asigurarea la schimbarea direcției de mers și/sau intrarea în intersecții nedirijate (RCR, pct.39)",result:7,count:0},{id:"3.2",text:"Devierea de la traseu și neglijarea indicațiilor examinatorului",result:3,count:0}]},{id:4,title:"Poziția vehiculului pe carosabil",penalizare:[{id:"4.1",text:"(Ne) semnalizarea sau semnalizarea incorectă a direcției de mers (RCR, pct.32)",result:3,count:0},{id:"4.2",text:"(Ne) încadrarea în limitele benzilor de circulaţie (RCR, pct.43, subpct.3, lit.a))",result:5,count:0}]},{id:5,title:"Viteza de deplasare și spațiul între vehicule",penalizare:[{id:"5.1",text:"(Ne) respectarea limitelor de viteză",result:7,count:0},{id:"5.2",text:"(Ne) adaptarea vitezei la diverse situaţii şi condiţii rutiere (RCR, pct.50)",result:3,count:0},{id:"5.3",text:"(Ne) aprecierea și (ne) menținerea distanțelor și intervalelor de siguranță",result:3,count:0},{id:"5.4",text:"Conducerea cu viteză redusă fără motiv întemeiat şi (ne)încadrarea în ritmul impus de ceilalţi conducători de vehicule (o singură penalizare, după o avertizare preventivă) (RCR, pct.50)",result:3,count:0}]},{id:6,title:"Depășirea",penalizare:[{id:"6.1",text:"(Ne) respectarea regulilor de executare în siguranță a depășirii (RCR, pct.51, pct.52, pct.53, pct. 54)",result:21,count:0}]},{id:7,title:"Traversarea intersecțiilor",penalizare:[{id:"7.1",text:"(Ne) acordarea priorității vehiculelor care vin din sens opus, în cazul virării la stânga sau întoarcerii (RCR, pct. 56, subpct.2) și/sau (ne) acordarea priorității ciclomotoarelor, bicicliștilor, pietonilor, în cazul virării la dreapta sau la stânga (RCR, pct. 56, subpct.3)",result:21,count:0},{id:"7.2",text:"Intrarea în intersecție sau pe trecerea de pietoni în cazul în care în direcția de mers circulația este blocată (RCR, pct. 57)",result:7,count:0},{id:"7.3",text:"(Ne) acordarea priorității vehiculelor deja angajate în traversarea intersecției cu circulație dirijată, indiferent de direcția lor de deplasare și/sau pietonilor care finalizează traversarea carosabilului, la apariția semnalului verde al semaforului. ( RCR pct.58, subpct. 3)",result:21,count:0},{id:"7.4",text:"(Ne) respectarea regulilor de traversare a intersecțiilor cu circulație nedirijată (RCR, pct.59)",result:21,count:0},{id:"7.5",text:"(Ne) respectarea semnalizării rutiere, a indicatoarelor sau marcajelor rutiere",result:7,count:0},{id:"7.6",text:"(Ne) respectarea semnalului de interzicere al semaforului sau al agentului de circulație",result:21,count:0},{id:"7.7",text:"(Ne) traversarea sau traversarea întârziată a intersecției și/sau a trecerii de pietoni, la culoarea permisivă a semaforului sau la semnalul agentului de circulație",result:3,count:0}]},{id:8,title:"Traversarea căilor ferate",penalizare:[{id:"8.1",text:"(Ne) respectarea regulilor de traversare a căilor ferate (RCR, pct.60, pct.61,  pct.62, pct.63, pct.64)",result:21,count:0}]},{id:9,title:"Oprirea voluntară și staționarea",penalizare:[{id:"9.1",text:"Oprirea neregulamentară (RCR, pct.68)",result:3,count:0},{id:"9.2",text:"Oprirea în locuri interzise (RCR, pct.69)",result:5,count:0}]},{id:10,title:"Prioritatea în traficul rutier",penalizare:[{id:"10.1",text:"(Ne) acordarea de prioritate vehiculelor și/sau pietonilor la trecerile de pietoni cu circulație nedirijată (RCR, pct. 11, lit. f), pct. 39)",result:21,count:0},{id:"10.2",text:"(Ne) acordarea de prioritate vehiculelor cu regim prioritar de circulație sau vehiculului poliției când escortează o coloană (RCR, pct.18, subpct. 1)",result:21,count:0},{id:"10.3",text:"Tendință repetată de a ceda trecerea vehiculelor și pietonilor când aceștia nu au prioritate (o singură penalizare, după o avertizare preventivă)",result:3,count:0}]},{id:11,title:"Conducerea vehiculului în condiții de vizibilitate redusă și/sau condiții meteorologice nefavorabile",penalizare:[{id:"11.1",text:"(Ne) adaptarea distinctă la condiții de ploaie, mâzgă, zăpadă, polei, etc. (o singură penalizare) ",result:3,count:0}]},{id:12,title:"Erori tehnice",penalizare:[{id:"12.1",text:"Oprirea motorului la pornire și/sau în timpul deplasării (prima eroare nu se penalizează, se admite o singură  penalizare)",result:3,count:0},{id:"12.2",text:"Cuplarea treptei de viteză, fără a apăsa pedala de ambreiaj",result:3,count:0},{id:"12.3",text:"Pornirea motorului având cutia de viteze cuplată, fără a apăsa pedala de ambreiaj",result:3,count:0},{id:"12.4",text:"(Ne) sincronizarea acțiunilor la demarare/accelerare/frânare: adaptarea incorectă a treptelor de viteză la viteza de deplasare, folosirea incorectă a dispozitivelor de comandă, acționarea incorectă a volanului (o singură penalizare)",result:3,count:0},{id:"12.5",text:"La pornire eliberează brusc pedala de ambreiaj și smuncește vehiculul",result:3,count:0},{id:"12.6",text:"La pornire  vehiculul se deplasează cu spatele",result:3,count:0}]},{id:13,title:"PIERDEREA CONTROLULUI ASUPRA VEHICULULUI ŞI/SAU INTERVENŢIA EXAMINATORULUI PENTRU A EVITA UN PERICOL IMINENT SAU PRODUCEREA UNUI ACCIDENT RUTIER; MANIFESTĂRI ALE CANDIDATULUI CARE PROVOACĂ PERTURBAREA EXAMENULUI",penalizare:[{id:"13.1",text:"PIERDEREA CONTROLULUI ASUPRA VEHICULULUI ŞI/SAU INTERVENŢIA EXAMINATORULUI PENTRU A EVITA UN PERICOL IMINENT SAU PRODUCEREA UNUI ACCIDENT RUTIER; MANIFESTĂRI ALE CANDIDATULUI CARE PROVOACĂ PERTURBAREA EXAMENULUI ",result:21,count:0}]}],carnumber:null,punctele:0,isRunning:!1,mocksSolicitants:[{name:"TOFAN ZINAIDA",category:"B",typeCV:"AUTOMATĂ"},{name:"ROTARU CONSTANTIN",category:"C",typeCV:"MECANICĂ"},{name:"POPOV OLGA",category:"B",typeCV:"AUTOMATĂ"},{name:"GRIGORII TATIANA",category:"D",typeCV:"MECANICĂ"}],mocksCars:[],mocksArrCars:[{category:"B",carsNumb:["CAB138","CAB139","CAB140","CAB141"]},{category:"C",carsNumb:["CAB320","CAB321","CAB322"]},{category:"D",carsNumb:["CAB699","CAB700","CAB701","CAB702","CAB703"]}],candidat:null,stopExamen:!1,fieldsDisabled:!1,statistics:[],headerHeight:null,page:1,candidatFields:null},reducers:{setCandidatFields:(i,t)=>{i.candidatFields=t.payload},setCarnumber:(i,t)=>{i.carnumber=t.payload},setList:(i,t)=>{let d=JSON.parse(JSON.stringify(i.list)).map(a=>{const r=a.penalizare.map(l=>l.id===t.payload?{...l,count:l.count+1}:l);return{...a,penalizare:r}});i.list=d},setPunctele:i=>{let t=JSON.parse(JSON.stringify(i.list));function p(d){return d.reduce((a,r)=>{const l=r.penalizare.reduce((u,s)=>u+s.result*s.count,0);return a+l},0)}i.punctele=p(t)},setIsRunning:(i,t)=>{i.isRunning=t.payload},setCandidat:(i,t)=>{i.candidat=t.payload},setStopExamen:(i,t)=>{i.stopExamen=t.payload},setFieldsDisabled:(i,t)=>{i.fieldsDisabled=t.payload},setStatistics:(i,t)=>{JSON.parse(JSON.stringify(i.list)).map(d=>{const a=d.penalizare.find(r=>r.id===t.payload);if(a){let r=i.statistics;const l=new Date,u=I(l.getHours()),s=I(l.getMinutes()),N=I(l.getSeconds());let x={time:`${u}:${s}:${N}`,text:a.text,result:a.result};r.push(x),i.statistics=r;return}})},setHeaderHeight:(i,t)=>{i.headerHeight=t.payload},setPage:(i,t)=>{i.page=t.payload},setMocksCars:(i,t)=>{i.mocksCars=t.payload}}}),{setCarnumber:T,setList:ye,setPunctele:V,setIsRunning:P,setCandidat:q,setStopExamen:X,setFieldsDisabled:J,setStatistics:$,setHeaderHeight:Q,setPage:K,setMocksCars:Se,setCandidatFields:Ee}=ie.actions,be=ie.reducer,Y=({punctele:i})=>e.jsx("span",{className:"whiteColor",children:i}),Te=()=>{c.useState(null);const[i,t]=c.useState(""),[p,d]=c.useState(!1),[a,r]=c.useState(null),[l,u]=c.useState(null),[s,N]=c.useState(0),[h,x]=c.useState(0),[S,C]=c.useState(null),[A,m]=c.useState(!1),[j,z]=c.useState(0),[U,D]=c.useState(0),R=y();o(g=>g.auth.user);const O=o(g=>g.dl.punctele),n=o(g=>g.dl.isRunning),f=o(g=>g.dl.candidat),v=o(g=>g.dl.carnumber);o(g=>g.dl.mocksSolicitants);const k=()=>{if(f===null||v===null){t("Completați cîmpuri CANDIDAT și AUTO"),d(!0);return}b.confirm({title:"Începe testul practic pentru permisul de conducere?",width:"900px",fontSize:"1.2rem",onOk:M,okText:"Da",cancelText:"Nu"})},L=()=>{b.confirm({title:"Finaliza examenul pentru obținerea permisului de conducere?",onOk:B,okText:"Da",cancelText:"Nu"})},M=()=>{r(new Date),R(P(!0)),R(J(!0));const g=setInterval(()=>{u(new Date)},1e3);C(g)},B=()=>{if(clearInterval(S),R(P(!1)),R(X(!0)),a&&l){let g=l.getTime()-a.getTime(),F=Math.floor(g/(1e3*60)),_=Math.floor(g/1e3%60);z(F),D(_)}r(null),u(null),N(0),x(0),m(!0)};return c.useEffect(()=>{if(a&&l){let g=l.getTime()-a.getTime(),F=Math.floor(g/(1e3*60)),_=Math.floor(g/1e3%60);N(F),x(_)}},[a,l]),e.jsxs("div",{children:[e.jsx(E,{align:"center",justify:"space-between",style:{display:"contents",width:"100%",color:"white",margin:"5px 0px"},children:e.jsx("div",{style:{marginBottom:"0.5rem"},className:A===!0?"hideTime":"",children:n?e.jsx(H,{className:"start-button",style:{fontSize:"1rem",padding:"0.4rem"},size:"large",type:"primary",onClick:L,children:"FINALIZAREA EXAMENULUI"}):e.jsxs("div",{className:"header",children:[e.jsxs("div",{onClick:()=>{R(K(2))},style:{fontSize:"3rem",color:"var(--color-static-text)"},children:[" ",e.jsx(me,{})]}),e.jsx("div",{children:e.jsx(H,{className:"start-button",icon:e.jsx(fe,{style:{fontSize:"1rem"}}),style:{fontSize:"1rem",padding:"0.4rem"},size:"large",type:"primary",onClick:k,children:"START EXAMENUL"})})]})})}),a&&e.jsxs("div",{className:"header",children:[e.jsxs(E,{justify:"start",align:"center",children:[e.jsx(he,{className:"custom-icon"}),e.jsxs("div",{className:"timer",children:[" ",I(s),":",I(h)]})]}),e.jsxs("div",{className:"puncteleAcumulate",children:["Punctele ",e.jsx(Y,{punctele:O})]})]}),!n&&(j>0||U>0)&&e.jsxs("div",{className:"header",children:[e.jsxs("div",{className:"timer",children:["Durata examenului ",I(j),":",I(U)," "]}),e.jsxs("div",{className:"puncteleAcumulate",children:["Punctele ",e.jsx(Y,{punctele:O})]})]})]})},ae=ee({name:"auth",initialState:{isAuth:!1,user:"nenov.dumitru"},reducers:{setIsAuth:(i,t)=>{i.isAuth=t.payload},setUser:(i,t)=>{i.user=t.payload}}}),{setIsAuth:G,setUser:W}=ae.actions,ze=ae.reducer,Ue=()=>{const[i,t]=c.useState("nenov.dumitru"),[p,d]=c.useState("nenov"),[a,r]=c.useState(!1);o(s=>s.dl.page);const l=y(),u=async()=>{try{r(!0),setTimeout(()=>{l(G(!0)),l(W(i)),r(!1),l(K(2))},300)}catch{r(!1)}};return e.jsx("div",{className:"modal",children:a?e.jsx("div",{className:"spinner-container",children:e.jsx(oe,{size:"large"})}):e.jsxs(w,{name:"basic",initialValues:{username:i,password:p},labelCol:{span:8},wrapperCol:{span:16},autoComplete:"off",children:[e.jsx(w.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:e.jsx(Z,{value:i,onChange:s=>t(s.target.value),className:"inputSize"})}),e.jsx(w.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:e.jsx(Z.Password,{value:p,onChange:s=>d(s.target.value),className:"inputSize"})}),e.jsx(w.Item,{wrapperCol:{span:24},style:{textAlign:"right"},children:e.jsx(H,{icon:e.jsx(xe,{style:{fontSize:"1.5rem"}}),type:"primary",onClick:u,className:"authButton",children:"Autentificare"})})]})})},se=i=>i.map(t=>{let p={};return p.value=t,p.label=t.toString(),p}),De=({width:i=100,defaultValue:t=null})=>{const p=o(s=>s.dl.candidat),d=o(s=>s.dl.mocksSolicitants),a=se(d.map(function(s){return s.name})),r=o(s=>s.dl.fieldsDisabled),l=y();c.useEffect(()=>{l(T(null))},[p]);const u=s=>{l(q(s))};return c.useEffect(()=>{u(t)},[]),e.jsxs("div",{className:"dynamic__components",children:[e.jsx("div",{className:"query__params",children:e.jsx(ge,{})}),e.jsx(te,{showSearch:!0,defaultValue:t,placeholder:"CANDIDAT",style:{width:i},onChange:u,options:a,disabled:r})]})},Oe=({width:i=100,defaultValue:t=null})=>{const p=o(s=>s.dl.carnumber),d=o(s=>s.dl.mocksCars),a=se(d);o(s=>s.dl.fieldsDisabled);const r=o(s=>s.dl.candidat),l=y(),u=s=>{l(T(s))};return c.useEffect(()=>{u(t)},[]),e.jsxs("div",{className:"dynamic__components",children:[e.jsx("div",{className:"query__params",children:e.jsx(Ce,{})}),e.jsx(te,{showSearch:!0,defaultValue:t,placeholder:"AUTO",style:{width:i},onChange:u,value:p,options:a,disabled:!r})]})},we=()=>{o(a=>a.auth.user);const i=o(a=>a.dl.headerHeight),t=o(a=>a.dl.fieldsDisabled),p=y(),d=c.useRef(null);return c.useEffect(()=>{p(Q(d.current.clientHeight)),console.log("headerHeight from header ",i)},[]),c.useEffect(()=>{p(Q(d.current.clientHeight))},[t]),e.jsxs("div",{ref:d,style:{display:"block",color:"white",margin:"0 auto",maxWidth:"1280px",position:"relative",padding:"15px"},children:[e.jsx(E,{justify:"space-between",align:"center"}),e.jsx(Te,{})]})},{confirm:Pe,info:It}=b,ke=()=>{const[i,t]=c.useState(!1),[p,d]=de.useNotification(),a=()=>{p.error({message:e.jsx("span",{style:{color:"black"},children:"EXAMEN NU A FOST SUSȚINUT"}),description:e.jsx("span",{style:{color:"black"},children:"Ați atins limita de puncte de penalizare. Examenul a eșuat."}),style:{backgroundColor:"var(--color-white)"}})},r=o(n=>n.dl.list),l=o(n=>n.dl.isRunning),u=o(n=>n.dl.stopExamen),s=o(n=>n.dl.punctele),N=o(n=>n.dl.statistics),h=y(),[x,S]=c.useState(null),[C,A]=c.useState(null);c.useRef(null);const m=o(n=>n.dl.headerHeight);c.useEffect(()=>{i===!1&&s>=21&&(t(!0),a())},[s]),c.useEffect(()=>(document.addEventListener("click",z),()=>{document.removeEventListener("click",z)}),[]),c.useEffect(()=>{if(u&&s>=21){D("EXAMEN NU A FOST SUSȚINUT",`Ați atins limita de puncte de penalizare ${s}. Examenul a eșuat`,"error");return}if(u&&s<21){D("SUSȚINUT","Examenul a fost promovat cu succes!","success");return}},[u,s]);const j=(n,f)=>{S(n),U(n,f)},z=n=>{!n.target.closest(".penalizare-item")&&!n.target.closest(".ant-modal")&&!n.target.closest(".ant-modal-wrap")&&S(null)},U=(n,f)=>{Pe({title:e.jsxs("div",{children:[e.jsx("div",{children:"Ești sigur că dorești să adaugi punctele de penalizare??"}),e.jsxs("div",{className:"confirmItem",children:[n,". ",f]})]}),width:"900px",centered:!0,content:null,modalRender:v=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:v}),onOk(){console.log("Confirmed add for id:",n),h(ye(n)),h(V()),h($(n)),A(null)},onCancel(){console.log("Cancel"),A(null)}})},D=(n,f,v)=>{b[v]({title:n,content:e.jsxs("div",{children:[e.jsx("p",{children:f}),N.length?e.jsxs("div",{children:[e.jsx("h3",{children:"Lista erorilor"}),e.jsx("ul",{children:N.map(({time:k,text:L,result:M},B)=>e.jsxs("li",{style:{...B%2===0?{background:"#D3D3D3",borderRadius:"0.2rem"}:{},fontSize:"0.9rem",paddingBottom:"0.3rem"},children:[k,". ",L,". Penalizare: ",M]},Math.random()*Date.now()))})]}):e.jsx("h2",{children:"Bravo nici o eroare"})]}),okText:e.jsxs(e.Fragment,{children:[e.jsx(ve,{})," Close"]}),onOk(){setTimeout(()=>{h(G(!1)),h(W(null)),h(T(null)),h(V(0)),h(P(!1)),h(q(null)),h(X(!1)),h(J(!1)),h($([]))},100),location.reload(),console.log("EXITTTTTT")}})};c.useEffect(()=>{if(C!==null){const n=setTimeout(()=>{if(C.length>0){const f=document.querySelectorAll(".ant-collapse-item")[Number(C[0])-1];console.log(C[0]-1),console.log("targetElement: ",f.offsetTop),console.log("headerHeight: ",m),console.log("-----"),window.scroll({top:f.offsetTop-m,left:0,color:"transparent",behavior:"smooth"})}},300);return()=>clearTimeout(n)}},[C]),c.useEffect(()=>{document.querySelectorAll(".ant-collapse-header").forEach(f=>{const v=f.querySelector("svg");v&&(f.parentElement.classList.contains("ant-collapse-item-active")?(console.log("contains:ant-collapse-item-active "),v.classList.add("rotate-90")):v.classList.remove("rotate-90"))})},[C]);const R=n=>{A(n)},O=r.map(n=>({key:n.id,label:`${n.id}. ${n.title}`,className:"collapse_item",children:e.jsx(e.Fragment,{children:n.penalizare.map((f,v)=>e.jsxs("div",{className:"notSelectedId",style:{...v%2===0?{background:"#D3D3D3",borderRadius:"0.2rem"}:{}},onClick:()=>j(f.id,f.text),children:[f.id===x&&u===!1?e.jsx(e.Fragment,{children:e.jsxs("div",{style:{width:"76%",textAlign:"left",fontSize:"x-large"},children:[f.id," ",f.text]})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"accordion_penalizare_id",children:e.jsx("strong",{children:f.id})}),e.jsx("div",{className:"accordion_penalizare_text",children:f.text})]}),e.jsx("div",{className:"accordion_penalizare_result",children:f.result}),e.jsx("div",{className:"accordion_penalizare_count",children:f.count})]},f.id))})}));return e.jsxs("div",{style:{marginTop:m},children:[d,e.jsx("div",{className:l===!1&&u===!1||u===!0?"disabledbutton":"",children:e.jsx(ue,{accordion:!0,items:O,activeKey:C,onChange:R})})]})},Le=()=>{const[i,t]=c.useState(""),[p,d]=c.useState(!1),a=o(m=>m.dl.mocksSolicitants),r=o(m=>m.auth.user),l=o(m=>m.dl.fieldsDisabled),u=o(m=>m.dl.candidat),s=o(m=>m.dl.carnumber),N=o(m=>m.dl.mocksArrCars),h=o(m=>m.dl.candidatFields),x=y();c.useEffect(()=>{u||x(T(null))},[]),c.useEffect(()=>{if(u!==null){const m=a.find(j=>j.name===u);m&&(x(Ee({category:m.category,typeCV:m.typeCV})),x(Se(N.find(({category:j})=>j===m.category).carsNumb)));return}},[u]);const S=()=>{b.confirm({title:"Confirmați Ieșirea",content:"Sigur doriți să părăsiți aplicația?",onOk(){setTimeout(()=>{x(G(!1)),x(W(null)),x(T(null)),x(V(0)),x(P(!1)),x(q(null)),x(X(!1)),x(J(!1)),x($([]))},100),location.reload()},onCancel(){console.log("Canceled exit")}})},C=()=>{l||S()},A=()=>{if(u===null||s===null){t("Completați cîmpuri CANDIDAT și AUTO");return}d(!0),x(K(3))};return e.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"row",position:"relative",justifyContent:"space-between",padding:"1.5rem"},children:[i&&e.jsx(pe,{message:"Text de avertizare",style:{position:"absolute",zIndex:"10",width:"75%"},description:i,showIcon:!0,type:"warning",onClose:()=>{t("")},closable:!0}),e.jsxs("div",{className:"candidat",children:[e.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"row",position:"relative",justifyContent:"space-between",paddingBottom:"1.5rem"},children:[e.jsxs("div",{onClick:C,className:"logout",children:[!l&&e.jsx(Ne,{})," "]}),e.jsxs("div",{onClick:A,className:"stepRight",children:[!l&&e.jsx(je,{})," "]})]}),e.jsxs("div",{className:"examiner",children:[e.jsxs("span",{className:"text_static_header",children:[e.jsx(Ae,{})," "]}),e.jsxs("span",{style:{paddingRight:"5px"},children:[r.slice(0,r.indexOf(".")).toUpperCase()," ",r.slice(r.indexOf(".")+1).toUpperCase()]})]}),e.jsxs("div",{className:"examiner",children:[e.jsxs("span",{className:"text_static_header",children:[!l&&e.jsx(Re,{})," "]}),e.jsx("span",{style:{paddingRight:"5px"},children:" SCCA CHIŞINĂU "})]}),e.jsx("div",{className:"examiner",children:e.jsx(De,{width:"100%",defaultValue:u||null})}),h&&e.jsxs(E,{className:"examiner",children:[e.jsx(Ie,{className:"text_static_header"}),e.jsxs(E,{justify:"space-between",gap:"1rem",style:{paddingLeft:"5px"},children:[e.jsxs("span",{children:[" ",h&&h.category]})," ",e.jsxs("span",{children:[" ",h&&h.typeCV]})]})]}),e.jsx("div",{className:"examiner",children:e.jsx(Oe,{width:"100%",defaultValue:s||null})})]})]})},Me=(i,t,p)=>{if(!i&&t===1)return e.jsx(Ue,{});if(i&&t===2)return e.jsx(Le,{});if(i&&t===3)return e.jsxs("div",{className:"main",children:[e.jsx("div",{className:p>=21?"headerMainFailed":"headerMain",children:e.jsx(we,{})}),e.jsx(ke,{})]})};function Be(){const i=o(d=>d.auth.isAuth),t=o(d=>d.dl.punctele),p=o(d=>d.dl.page);return Me(i,p,t)}const Fe=ce({reducer:{auth:ze,dl:be}});ne.createRoot(document.getElementById("root")).render(e.jsx(re.StrictMode,{children:e.jsx(le,{store:Fe,children:e.jsx(Be,{})})}));
