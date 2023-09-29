"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[322],{5138:function(e,n,t){t.d(n,{Z:function(){return o}});var l=t(5893),s=t(7294),r=t(1664),a=t.n(r),c=t(1722),i=t(2361);function o(e){let{label:n,icon:t,iconSize:r,href:o,target:d,type:m,color:u="white",className:x="",asAnchor:h=!1,small:j=!1,outline:f=!1,active:p=!1,disabled:b=!1,roundedFull:g=!1,onClick:w}=e,N=["inline-flex","justify-center","items-center","whitespace-nowrap","focus:outline-none","transition-colors","focus:ring","duration-150","border",b?"cursor-not-allowed":"cursor-pointer",g?"rounded-full":"rounded",(0,c.pQ)(u,f,!b,p),x];!n&&t?N.push("p-1"):j?N.push("text-sm",g?"px-3 py-1":"p-1"):N.push("py-2",g?"px-6":"px-3"),b&&N.push(f?"opacity-50":"opacity-70");let Z=N.join(" "),v=(0,l.jsxs)(l.Fragment,{children:[t&&(0,l.jsx)(i.Z,{path:t,size:r}),n&&(0,l.jsx)("span",{className:j&&t?"px-1":"px-2",children:n})]});return o&&!b?(0,l.jsx)(a(),{href:o,target:d,className:Z,children:v}):s.createElement(h?"a":"button",{className:Z,type:null!=m?m:"button",target:d,disabled:b,onClick:w},v)}},7678:function(e,n,t){var l=t(5893),s=t(7294);n.Z=e=>{let{type:n="justify-start",mb:t="-mb-3",classAddon:r="mr-3 last:mr-0 mb-3",noWrap:a=!1,children:c,className:i}=e;return(0,l.jsx)("div",{className:"flex items-center ".concat(n," ").concat(i," ").concat(t," ").concat(a?"flex-nowrap":"flex-wrap"),children:s.Children.map(c,e=>e?(0,s.cloneElement)(e,{className:"".concat(r," ").concat(e.props.className)}):null)})}},7634:function(e,n,t){t.d(n,{Z:function(){return s}});var l=t(5893);function s(e){let{noPadding:n=!1,className:t,children:s}=e;return(0,l.jsx)("div",{className:"flex-1 ".concat(n?"":"p-6"," ").concat(t),children:s})}t(7294)},4717:function(e,n,t){t.d(n,{Z:function(){return s}});var l=t(5893);function s(e){let{className:n,children:t}=e;return(0,l.jsx)("footer",{className:"p-6 ".concat(n),children:t})}t(7294)},3047:function(e,n,t){var l=t(5893);t(7294),n.Z=e=>{let{title:n,children:t}=e;return(0,l.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,l.jsx)("h1",{className:"text-2xl",children:n}),t]})}},1440:function(e,n,t){var l=t(5893),s=t(5317),r=t(5138),a=t(7678),c=t(3879),i=t(3047),o=t(1260);n.Z=e=>{let{title:n,buttonColor:t,buttonLabel:d,isActive:m,children:u,onConfirm:x,onCancel:h}=e;if(!m)return null;let j=(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(r.Z,{label:d,color:t,onClick:x}),!!h&&(0,l.jsx)(r.Z,{label:"Cancel",color:t,outline:!0,onClick:h})]});return(0,l.jsx)(o.Z,{onClick:h,className:h?"cursor-pointer":"",children:(0,l.jsxs)(c.Z,{className:"transition-transform shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50",isModal:!0,footer:j,children:[(0,l.jsx)(i.Z,{title:n,children:!!h&&(0,l.jsx)(r.Z,{icon:s.r5M,color:"whiteDark",onClick:h,small:!0,roundedFull:!0})}),(0,l.jsx)("div",{className:"space-y-3",children:u})]})})}},3879:function(e,n,t){t.d(n,{Z:function(){return c}});var l=t(5893),s=t(7294),r=t(7634),a=t(4717);function c(e){let{rounded:n="rounded-2xl",flex:t="flex-col",className:c="",hasComponentLayout:i=!1,hasTable:o=!1,isHoverable:d=!1,isModal:m=!1,children:u,footer:x,onClick:h}=e,j=["bg-white flex",c,n,t,m?"dark:bg-slate-900":"dark:bg-slate-900/70"];return d&&j.push("hover:shadow-lg transition-shadow duration-500"),s.createElement("div",{className:j.join(" "),onClick:h},i?u:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Z,{noPadding:o,children:u}),x&&(0,l.jsx)(a.Z,{children:x})]}))}},5106:function(e,n,t){t.d(n,{Z:function(){return a}});var l=t(5893);t(7294);var s=t(1722),r=t(2361);function a(e){let{icon:n,color:t,w:a="w-12",h:c="h-12",bg:i=!1,className:o=""}=e,d=i?s.RH[t]:"".concat(s.uK[t]," bg-gray-50 dark:bg-slate-800");return(0,l.jsx)(r.Z,{path:n,w:a,h:c,size:"24",className:"rounded-full ".concat(d," ").concat(o)})}},4012:function(e,n,t){var l=t(5893),s=t(5317),r=t(7294),a=t(1722),c=t(5138),i=t(2361);n.Z=e=>{let{outline:n=!1,children:t,...o}=e,d=n?a.bN[o.color]:a.RH[o.color],[m,u]=(0,r.useState)(!1);return m?null:(0,l.jsx)("div",{className:"px-3 py-6 md:py-3 mb-6 last:mb-0 border rounded-lg transition-colors duration-150 ".concat(d),children:(0,l.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between",children:[(0,l.jsxs)("div",{className:"flex flex-col md:flex-row items-center mb-6 md:mb-0",children:[o.icon&&(0,l.jsx)(i.Z,{path:o.icon,w:"w-10 md:w-5",h:"h-10 md:h-5",size:"24",className:"md:mr-2"}),(0,l.jsx)("span",{className:"text-center md:text-left md:py-2",children:t})]}),o.button,!o.button&&(0,l.jsx)(c.Z,{icon:s.r5M,color:"white",onClick:e=>{e.preventDefault(),u(!0)},small:!0,roundedFull:!0})]})})}},6696:function(e,n,t){t.d(n,{Z:function(){return o}});var l=t(5893),s=t(5317),r=t(7294),a=t(5138),c=t(2361),i=t(5106);function o(e){let{icon:n,title:t,main:o=!1,children:d}=e,m=!!r.Children.count(d);return(0,l.jsxs)("section",{className:"".concat(o?"":"pt-6"," mb-6 flex items-center justify-between"),children:[(0,l.jsxs)("div",{className:"flex items-center justify-start",children:[n&&o&&(0,l.jsx)(i.Z,{icon:n,color:"light",className:"mr-3",bg:!0}),n&&!o&&(0,l.jsx)(c.Z,{path:n,className:"mr-2",size:"20"}),(0,l.jsx)("h1",{className:"leading-tight ".concat(o?"text-3xl":"text-2xl"),children:t})]}),d,!m&&(0,l.jsx)(a.Z,{icon:s.Shd,color:"whiteDark"})]})}},9853:function(e,n,t){var l=t(5893),s=t(5317),r=t(7294),a=t(4368),c=t(5138),i=t(7678),o=t(1440),d=t(5528);n.Z=()=>{let{clients:e}=(0,a.X)(),[n,t]=(0,r.useState)(0),m=e.slice(5*n,5*(n+1)),u=e.length/5,x=[];for(let e=0;e<u;e++)x.push(e);let[h,j]=(0,r.useState)(!1),[f,p]=(0,r.useState)(!1),b=()=>{j(!1),p(!1)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(o.Z,{title:"Sample modal",buttonColor:"info",buttonLabel:"Done",isActive:h,onConfirm:b,onCancel:b,children:[(0,l.jsxs)("p",{children:["Lorem ipsum dolor sit amet ",(0,l.jsx)("b",{children:"adipiscing elit"})]}),(0,l.jsx)("p",{children:"This is sample modal"})]}),(0,l.jsxs)(o.Z,{title:"Please confirm",buttonColor:"danger",buttonLabel:"Confirm",isActive:f,onConfirm:b,onCancel:b,children:[(0,l.jsxs)("p",{children:["Lorem ipsum dolor sit amet ",(0,l.jsx)("b",{children:"adipiscing elit"})]}),(0,l.jsx)("p",{children:"This is sample modal"})]}),(0,l.jsxs)("table",{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{}),(0,l.jsx)("th",{children:"Name"}),(0,l.jsx)("th",{children:"Company"}),(0,l.jsx)("th",{children:"City"}),(0,l.jsx)("th",{children:"Progress"}),(0,l.jsx)("th",{children:"Created"}),(0,l.jsx)("th",{})]})}),(0,l.jsx)("tbody",{children:m.map(e=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"border-b-0 lg:w-6 before:hidden",children:(0,l.jsx)(d.Z,{username:e.name,className:"w-24 h-24 mx-auto lg:w-6 lg:h-6"})}),(0,l.jsx)("td",{"data-label":"Name",children:e.name}),(0,l.jsx)("td",{"data-label":"Company",children:e.company}),(0,l.jsx)("td",{"data-label":"City",children:e.city}),(0,l.jsx)("td",{"data-label":"Progress",className:"lg:w-32",children:(0,l.jsx)("progress",{className:"flex w-2/5 self-center lg:w-full",max:"100",value:e.progress,children:e.progress})}),(0,l.jsx)("td",{"data-label":"Created",className:"lg:w-1 whitespace-nowrap",children:(0,l.jsx)("small",{className:"text-gray-500 dark:text-slate-400",children:e.created})}),(0,l.jsx)("td",{className:"before:hidden lg:w-1 whitespace-nowrap",children:(0,l.jsxs)(i.Z,{type:"justify-start lg:justify-end",noWrap:!0,children:[(0,l.jsx)(c.Z,{color:"info",icon:s.rgx,onClick:()=>j(!0),small:!0}),(0,l.jsx)(c.Z,{color:"danger",icon:s.QGK,onClick:()=>p(!0),small:!0})]})})]},e.id))})]}),(0,l.jsx)("div",{className:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800",children:(0,l.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between py-3 md:py-0",children:[(0,l.jsx)(i.Z,{children:x.map(e=>(0,l.jsx)(c.Z,{active:e===n,label:e+1,color:e===n?"lightDark":"whiteDark",small:!0,onClick:()=>t(e)},e))}),(0,l.jsxs)("small",{className:"mt-6 md:mt-0",children:["Page ",n+1," of ",u]})]})})]})}},4368:function(e,n,t){t.d(n,{X:function(){return r},p:function(){return a}});var l=t(9734);let s=e=>fetch(e).then(e=>e.json()),r=()=>{var e;let{data:n,error:t}=(0,l.ZP)("/admin-one-react-tailwind/data-sources/clients.json",s);return{clients:null!==(e=null==n?void 0:n.data)&&void 0!==e?e:[],isLoading:!t&&!n,isError:t}},a=()=>{var e;let{data:n,error:t}=(0,l.ZP)("/admin-one-react-tailwind/data-sources/history.json",s);return{transactions:null!==(e=null==n?void 0:n.data)&&void 0!==e?e:[],isLoading:!t&&!n,isError:t}}}}]);