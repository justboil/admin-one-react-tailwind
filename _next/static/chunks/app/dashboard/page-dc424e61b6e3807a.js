(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[105],{6670:(e,t,r)=>{Promise.resolve().then(r.bind(r,657)),Promise.resolve().then(r.bind(r,5171)),Promise.resolve().then(r.bind(r,4987)),Promise.resolve().then(r.bind(r,6583)),Promise.resolve().then(r.t.bind(r,8173,23))},5171:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var s=r(5155),n=r(2115),a=r(7801),o=r.n(a);let i=e=>{let{prefix:t="",suffix:r="",value:a,duration:i=500}=e,[l,c]=(0,n.useState)(0),d=l<1e3?l:o()(l).format("0,0"),u=[],h=e=>{let t=Math.ceil(l+e);if(t>a)return c(a),!1;c(t),u.push(setTimeout(()=>{h(e)},25))};return(0,n.useEffect)(()=>(h(a/(i/25)),()=>{u.forEach(e=>{clearTimeout(e)})})),(0,s.jsxs)("div",{children:[t,d,r]})}},198:(e,t,r)=>{"use strict";r.d(t,{A:()=>d});var s=r(5155),n=r(1063),a=r(2115),o=r(2079),i=r(2781),l=r(6778);function c(e){let{icon:t,color:r,w:n="w-12",h:a="h-12",bg:o=!1,className:c=""}=e,d=o?l.cu[r]:"".concat(l.Wj[r]," bg-gray-50 dark:bg-slate-800");return(0,s.jsx)(i.A,{path:t,w:n,h:a,size:"24",className:"rounded-full ".concat(d," ").concat(c)})}function d(e){let{icon:t,title:r,main:l=!1,children:d}=e,u=!!a.Children.count(d);return(0,s.jsxs)("section",{className:"".concat(l?"":"pt-6"," mb-6 flex items-center justify-between"),children:[(0,s.jsxs)("div",{className:"flex items-center justify-start",children:[t&&l&&(0,s.jsx)(c,{icon:t,color:"light",className:"mr-3",bg:!0}),t&&!l&&(0,s.jsx)(i.A,{path:t,className:"mr-2",size:"20"}),(0,s.jsx)("h1",{className:"leading-tight ".concat(l?"text-3xl":"text-2xl"),children:r})]}),d,!u&&(0,s.jsx)(o.A,{icon:n.CZ3,color:"whiteDark"})]})}},4987:(e,t,r)=>{"use strict";r.d(t,{default:()=>v});var s=r(5155),n=r(1063),a=r(2115),o=r(5781),i=r(6472);o.t1.register(o.No,o.FN,o.ZT,o.kc,o.PP,o.m_);let l={responsive:!0,maintainAspectRatio:!1,scales:{y:{display:!1},x:{display:!0}},plugins:{legend:{display:!1}}},c=e=>{let{data:t}=e;return(0,s.jsx)(i.N1,{options:l,data:t,className:"h-96"})};var d=r(2079),u=r(149),h=r(198);let f={default:{primary:"#00D1B2",info:"#209CEE",danger:"#FF3860"}},m=e=>{let t=[];for(let r=0;r<e;r++)t.push(Math.round(200*Math.random()));return t},p=(e,t)=>({fill:!1,borderColor:f.default[e],borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:f.default[e],pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:f.default[e],pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:m(t),tension:.5,cubicInterpolationMode:"default"}),x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,t=[];for(let r=1;r<=e;r++)t.push("0".concat(r));return{labels:t,datasets:[p("primary",e),p("info",e),p("danger",e)]}};function v(){let[e,t]=(0,a.useState)(x());return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h.A,{icon:n.$Tr,title:"Trends overview",children:(0,s.jsx)(d.A,{icon:n.kWq,color:"whiteDark",onClick:e=>{e.preventDefault(),t(x())}})}),(0,s.jsx)(u.A,{className:"mb-6",children:e&&(0,s.jsx)(c,{data:e})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[779,647,173,943,31,441,517,358],()=>t(6670)),_N_E=e.O()}]);