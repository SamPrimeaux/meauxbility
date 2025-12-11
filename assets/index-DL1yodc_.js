import{r as a,a as bt,u as Je,L as A,b as ft,B as vt,R as yt,c as H,d as jt}from"./react-vendor-1n7WZ4wG.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))g(n);new MutationObserver(n=>{for(const x of n)if(x.type==="childList")for(const r of x.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&g(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const x={};return n.integrity&&(x.integrity=n.integrity),n.referrerPolicy&&(x.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?x.credentials="include":n.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function g(n){if(n.ep)return;n.ep=!0;const x=s(n);fetch(n.href,x)}})();var dt={exports:{}},Xe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wt=a,Nt=Symbol.for("react.element"),kt=Symbol.for("react.fragment"),St=Object.prototype.hasOwnProperty,Ct=wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Et={key:!0,ref:!0,__self:!0,__source:!0};function mt(t,i,s){var g,n={},x=null,r=null;s!==void 0&&(x=""+s),i.key!==void 0&&(x=""+i.key),i.ref!==void 0&&(r=i.ref);for(g in i)St.call(i,g)&&!Et.hasOwnProperty(g)&&(n[g]=i[g]);if(t&&t.defaultProps)for(g in i=t.defaultProps,i)n[g]===void 0&&(n[g]=i[g]);return{$$typeof:Nt,type:t,key:x,ref:r,props:n,_owner:Ct.current}}Xe.Fragment=kt;Xe.jsx=mt;Xe.jsxs=mt;dt.exports=Xe;var e=dt.exports,Qe={},tt=bt;Qe.createRoot=tt.createRoot,Qe.hydrateRoot=tt.hydrateRoot;const Tt=[{title:"Workspace",items:[{label:"Overview",path:"/dashboard",icon:"📊"},{label:"Analytics",path:"/dashboard/analytics",icon:"📈"},{label:"Projects",path:"/dashboard/projects",icon:"💼"}]},{title:"Communications",items:[{label:"Communications",path:"/dashboard/communications",icon:"💬",badge:3}]},{title:"Content & Media",items:[{label:"Content Library",path:"/dashboard/content",icon:"📚"},{label:"Image Library",path:"/dashboard/image-library",icon:"🖼️"},{label:"Photo Gallery",path:"/dashboard/photo-gallery",icon:"📸"}]},{title:"Storage",items:[{label:"Storage",path:"/dashboard/storage",icon:"☁️"}]},{title:"Finance",items:[{label:"Finance",path:"/dashboard/finance",icon:"💰"}]},{title:"Tools",items:[{label:"Calendar",path:"/dashboard/calendar",icon:"📅"},{label:"Developer",path:"/dashboard/developer",icon:"⚙️"},{label:"Deployments",path:"/dashboard/deployments",icon:"🚀"},{label:"Kanban",path:"/dashboard/kanban",icon:"📋"},{label:"Team",path:"/dashboard/team",icon:"👥"}]},{title:"Settings",items:[{label:"Settings",path:"/dashboard/settings",icon:"⚙️"}]}];function _t({onClose:t,isMobile:i}){const s=Je(),g=()=>{i&&t&&t()};return e.jsxs("aside",{className:"flex-shrink-0 h-screen overflow-y-auto flex flex-col",style:{backgroundColor:"var(--bg-secondary)",borderRight:"1px solid var(--border)",width:i?"280px":"var(--sidebar-width, 260px)",maxWidth:"85vw"},children:[e.jsxs("div",{className:"p-4 sm:p-6 border-b sticky top-0 z-10 flex items-center justify-between",style:{borderColor:"var(--border)",backgroundColor:"var(--bg-secondary)"},children:[e.jsx(A,{to:"/dashboard",className:"flex items-center gap-3 group",onClick:g,children:e.jsxs("div",{className:"text-xl sm:text-2xl font-extrabold tracking-tight",children:[e.jsx("span",{style:{color:"var(--text-primary)"},children:"MEAUX"}),e.jsx("span",{style:{color:"var(--accent)"},children:"BILITY"})]})}),i&&e.jsx("button",{onClick:t,className:"p-2 rounded-lg transition-colors",style:{backgroundColor:"var(--bg-hover)",color:"var(--text-secondary)"},"aria-label":"Close menu",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),e.jsx("nav",{className:"p-3 sm:p-4 flex-1 overflow-y-auto",children:Tt.map(n=>e.jsxs("div",{className:"mb-4 sm:mb-6",children:[e.jsx("h3",{className:"px-3 py-2 text-[10px] font-bold uppercase tracking-widest mb-1 sm:mb-2",style:{color:"var(--text-muted)"},children:n.title}),e.jsx("ul",{className:"space-y-0.5 sm:space-y-1",children:n.items.map(x=>{const r=s.pathname===x.path;return e.jsx("li",{children:e.jsxs(A,{to:x.path,onClick:g,className:"group flex items-center gap-3 px-3 py-2.5 sm:py-3 rounded-lg text-sm font-medium transition-all duration-200 active:scale-[0.98]",style:{backgroundColor:r?"var(--accent-soft)":"transparent",color:r?"var(--accent)":"var(--text-secondary)",fontWeight:r?600:500},onMouseEnter:N=>{r||(N.currentTarget.style.backgroundColor="var(--bg-hover)",N.currentTarget.style.color="var(--text-primary)")},onMouseLeave:N=>{r||(N.currentTarget.style.backgroundColor="transparent",N.currentTarget.style.color="var(--text-secondary)")},children:[e.jsx("span",{className:"text-lg sm:text-xl leading-none w-6 flex items-center justify-center",children:x.icon}),e.jsx("span",{className:"flex-1 truncate",children:x.label}),x.badge&&e.jsx("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded-full min-w-[20px] text-center",style:{backgroundColor:"var(--status-error)",color:"#FFFFFF"},children:x.badge})]})},x.path)})})]},n.title))}),i&&e.jsx("div",{style:{paddingBottom:"env(safe-area-inset-bottom, 20px)"}})]})}function zt({isOpen:t,onClose:i,userEmail:s,userName:g}){const n=a.useRef(null);return a.useEffect(()=>{const x=N=>{N.key==="Escape"&&i()},r=N=>{n.current&&!n.current.contains(N.target)&&i()};return t&&(document.addEventListener("keydown",x),document.addEventListener("mousedown",r)),()=>{document.removeEventListener("keydown",x),document.removeEventListener("mousedown",r)}},[t,i]),t?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 bg-black/20 backdrop-blur-sm z-40",onClick:i}),e.jsxs("div",{ref:n,className:"fixed top-16 right-6 bg-white rounded-xl shadow-2xl border-2 border-gray-200 z-50 min-w-[280px] max-w-[320px] overflow-hidden",children:[e.jsx("div",{className:"p-4 border-b-2 border-gray-100 bg-gradient-to-r from-teal-50 to-cyan-50",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg",children:(g||s||"U").charAt(0).toUpperCase()}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"font-semibold text-gray-900 truncate",children:g||"User"}),e.jsx("div",{className:"text-sm text-gray-600 truncate",children:s||"user@meauxbility.org"})]})]})}),e.jsxs("div",{className:"py-2",children:[e.jsxs(A,{to:"/dashboard/settings",onClick:i,className:"flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors",children:[e.jsx("span",{className:"text-lg",children:"⚙️"}),e.jsx("span",{className:"font-medium",children:"Settings"})]}),e.jsxs(A,{to:"/dashboard/team",onClick:i,className:"flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors",children:[e.jsx("span",{className:"text-lg",children:"👥"}),e.jsx("span",{className:"font-medium",children:"Team"})]}),e.jsxs(A,{to:"/dashboard/deployments",onClick:i,className:"flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors",children:[e.jsx("span",{className:"text-lg",children:"🚀"}),e.jsx("span",{className:"font-medium",children:"Deployments"})]}),e.jsxs("a",{href:"https://www.meauxbility.org",target:"_blank",rel:"noopener noreferrer",onClick:i,className:"flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors",children:[e.jsx("span",{className:"text-lg",children:"🌐"}),e.jsx("span",{className:"font-medium",children:"View Live Site"}),e.jsx("span",{className:"ml-auto text-xs text-gray-500",children:"↗"})]}),e.jsx("div",{className:"border-t border-gray-100 my-1"}),e.jsxs("button",{onClick:()=>{i()},className:"w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors",children:[e.jsx("span",{className:"text-lg",children:"🚪"}),e.jsx("span",{className:"font-medium",children:"Sign Out"})]})]})]})]}):null}function at({publicLayout:t=!1,onMenuClick:i,showMenuButton:s}){const[g,n]=a.useState(!1),[x,r]=a.useState(!1),[N,m]=a.useState(!1),[v,b]=a.useState("light"),k=Je(),[f]=a.useState("info@inneranimals.com"),[S]=a.useState("Sam Primeaux"),o=["about","community","resources"];a.useEffect(()=>{const c=k.pathname;let h="light";o.forEach(C=>{c.includes(C)&&(h="dark")}),b(h),document.documentElement.setAttribute("data-theme",h),document.body.setAttribute("data-theme",h)},[k.pathname]),a.useEffect(()=>{const c=()=>{n(window.scrollY>50)};return window.addEventListener("scroll",c,{passive:!0}),()=>window.removeEventListener("scroll",c)},[]),a.useEffect(()=>{x?document.body.classList.add("modal-open"):document.body.classList.remove("modal-open")},[x]),a.useEffect(()=>{const c=h=>{h.key==="Escape"&&x&&r(!1)};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[x]);const d=c=>c==="/"&&k.pathname==="/"?!0:c==="/about"?k.pathname==="/about"||k.pathname==="/pages/about-us":k.pathname===c||k.pathname.startsWith(c+"/");return t?e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"#main",className:"skip-link",children:"Skip to main content"}),e.jsx("header",{className:`nav ${g?"scrolled":""}`,id:"nav",role:"banner","data-theme":v,children:e.jsxs("div",{className:"nav-container",children:[e.jsx(A,{to:k.pathname.startsWith("/dashboard")?"/":"/dashboard",className:"nav-logo","aria-label":k.pathname.startsWith("/dashboard")?"Meauxbility Home":"Meauxbility Dashboard",children:e.jsx("img",{src:"https://imagedelivery.net/g7wf09fCONpnidkRnR_5vw/86181f93-ab81-4428-6f24-f7583e758f00/small",alt:"Meauxbility",width:"180",height:"auto",loading:"eager",fetchPriority:"high"})}),e.jsx("nav",{"aria-label":"Main navigation",children:e.jsxs("ul",{className:"nav-menu",children:[e.jsx("li",{children:e.jsx(A,{to:"/",className:`nav-link ${d("/")?"active":""}`,"aria-current":d("/")?"page":void 0,children:"Home"})}),e.jsx("li",{children:e.jsx(A,{to:"/about",className:`nav-link ${d("/about")?"active":""}`,"aria-current":d("/about")?"page":void 0,children:"About"})}),e.jsx("li",{children:e.jsx(A,{to:"/pages/mobility-grants-programs",className:`nav-link ${d("/pages/mobility-grants-programs")?"active":""}`,"aria-current":d("/pages/mobility-grants-programs")?"page":void 0,children:"Programs"})}),e.jsx("li",{children:e.jsx(A,{to:"/pages/community",className:`nav-link ${d("/pages/community")?"active":""}`,"aria-current":d("/pages/community")?"page":void 0,children:"Community"})}),e.jsx("li",{children:e.jsx(A,{to:"/pages/resources",className:`nav-link ${d("/pages/resources")?"active":""}`,"aria-current":d("/pages/resources")?"page":void 0,children:"Resources"})}),e.jsx("li",{children:e.jsx(A,{to:"/pages/get-involved",className:`nav-link ${d("/pages/get-involved")?"active":""}`,"aria-current":d("/pages/get-involved")?"page":void 0,children:"Connect"})}),e.jsx("li",{children:e.jsx(A,{to:"/pages/donate",className:"nav-donate",children:"Impact"})}),e.jsx("li",{children:e.jsx(A,{to:"/dashboard",className:"nav-dashboard-btn",children:"📊 Dashboard"})})]})}),e.jsxs("button",{className:`burger ${x?"open":""}`,id:"burger","aria-label":"Toggle navigation menu","aria-expanded":x,onClick:()=>r(!x),children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})}),e.jsxs("nav",{className:`mobile-menu ${x?"open":""}`,id:"mobileMenu","aria-label":"Mobile navigation","data-theme":v,children:[e.jsxs("ul",{className:"mobile-nav",children:[e.jsx("li",{className:"mobile-item",children:e.jsx(A,{to:"/",className:`mobile-link ${d("/")?"active":""}`,onClick:()=>r(!1),children:"Home"})}),e.jsx("li",{className:"mobile-item",children:e.jsx(A,{to:"/about",className:`mobile-link ${d("/about")?"active":""}`,onClick:()=>r(!1),children:"About"})}),e.jsx("li",{className:"mobile-item",children:e.jsx(A,{to:"/pages/mobility-grants-programs",className:`mobile-link ${d("/pages/mobility-grants-programs")?"active":""}`,onClick:()=>r(!1),children:"Programs"})}),e.jsx("li",{className:"mobile-item",children:e.jsx(A,{to:"/pages/community",className:`mobile-link ${d("/pages/community")?"active":""}`,onClick:()=>r(!1),children:"Community"})}),e.jsx("li",{className:"mobile-item",children:e.jsx(A,{to:"/pages/resources",className:`mobile-link ${d("/pages/resources")?"active":""}`,onClick:()=>r(!1),children:"Resources"})}),e.jsx("li",{className:"mobile-item",children:e.jsx(A,{to:"/pages/get-involved",className:`mobile-link ${d("/pages/get-involved")?"active":""}`,onClick:()=>r(!1),children:"Connect"})})]}),e.jsx(A,{to:"/pages/donate",className:"mobile-donate",onClick:()=>r(!1),children:"Impact"}),e.jsx(A,{to:"/dashboard",className:"mobile-dashboard-btn",onClick:()=>r(!1),children:"📊 Access Dashboard"})]}),e.jsx("style",{children:`
                :root {
                    --teal: #339999;
                    --orange: #FF6B35;
                    --orange-dark: #E85D00;
                    --purple: #9B59B6;
                    --mint: #4AECDC;
                    --nav-h: 72px;
                    --nav-hs: 60px;
                    --max-w: 1440px;
                    --tr: all .3s cubic-bezier(.4,0,.2,1);
                }

                [data-theme=light] {
                    --nav-bg: rgba(255,255,255,.75);
                    --nav-bg-scrolled: rgba(255,255,255,.85);
                    --nav-border: rgba(255,107,53,.15);
                    --nav-text: #0C2D31;
                    --nav-link: #FF6B35;
                    --nav-hover: #E85D00;
                    --nav-hover-bg: rgba(255,107,53,.08);
                    --mobile-bg: rgba(255,255,255,.90);
                    --btn-bg: #FF6B35;
                    --btn-hover: #E85D00;
                    --accent: #FF6B35;
                }

                [data-theme=dark] {
                    --nav-bg: rgba(12,45,49,.75);
                    --nav-bg-scrolled: rgba(12,45,49,.85);
                    --nav-border: rgba(74,236,220,.2);
                    --nav-text: rgba(255,255,255,.95);
                    --nav-link: #4AECDC;
                    --nav-hover: #5FDDDC;
                    --nav-hover-bg: rgba(74,236,220,.1);
                    --mobile-bg: rgba(12,45,49,.90);
                    --btn-bg: #9B59B6;
                    --btn-hover: #8E44AD;
                    --accent: #4AECDC;
                }

                body.modal-open {
                    overflow: hidden;
                }

                .skip-link {
                    position: absolute;
                    top: -100px;
                    left: 16px;
                    padding: 12px 24px;
                    background: var(--accent);
                    color: #fff;
                    text-decoration: none;
                    font-weight: 600;
                    border-radius: 8px;
                    z-index: 10001;
                    transition: var(--tr);
                }
                .skip-link:focus {
                    top: 16px;
                }

                .nav {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: var(--nav-h);
                    background: var(--nav-bg);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border-bottom: 1px solid var(--nav-border);
                    z-index: 9999;
                    transition: var(--tr);
                }

                .nav.scrolled {
                    height: var(--nav-hs);
                    background: var(--nav-bg-scrolled);
                    backdrop-filter: blur(30px);
                    -webkit-backdrop-filter: blur(30px);
                }

                .nav-container {
                    max-width: var(--max-w);
                    height: 100%;
                    margin: 0 auto;
                    padding: 0 32px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .nav-logo {
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                    transition: var(--tr);
                }
                .nav-logo:hover {
                    transform: scale(.98);
                }
                .nav-logo:focus-visible {
                    outline: 2px solid var(--accent);
                    outline-offset: 4px;
                    border-radius: 8px;
                }
                .nav-logo img {
                    display: block;
                    width: 180px;
                    height: auto;
                    transition: var(--tr);
                }
                .nav.scrolled .nav-logo img {
                    width: 160px;
                }

                [data-theme=dark] .nav-logo img {
                    filter: hue-rotate(220deg) saturate(1.2) brightness(1.1);
                }

                .nav-menu {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    list-style: none;
                    height: 100%;
                }

                .nav-item {
                    position: relative;
                    height: 100%;
                    display: flex;
                    align-items: center;
                }

                .nav-link {
                    position: relative;
                    padding: 10px 18px;
                    color: var(--nav-link);
                    text-decoration: none;
                    font-size: 14px;
                    font-weight: 600;
                    border-radius: 8px;
                    transition: var(--tr);
                    white-space: nowrap;
                    min-height: 44px;
                    display: flex;
                    align-items: center;
                    letter-spacing: 0.2px;
                }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: 8px;
                    left: 18px;
                    right: 18px;
                    height: 0;
                    background: var(--accent);
                    border-radius: 2px;
                    transition: height .3s cubic-bezier(.34,1.56,.64,1);
                }

                .nav-link:hover {
                    color: var(--nav-hover);
                    background: var(--nav-hover-bg);
                }

                .nav-link.active,
                .nav-link[aria-current=page] {
                    color: var(--nav-hover);
                    font-weight: 700;
                }

                .nav-link.active::after,
                .nav-link[aria-current=page]::after {
                    height: 3px;
                }

                .nav-donate {
                    margin-left: 12px;
                    padding: 11px 26px;
                    background: var(--btn-bg);
                    color: #fff;
                    border: none;
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: var(--tr);
                    min-height: 44px;
                    letter-spacing: .4px;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                }

                .nav-donate:hover {
                    background: var(--btn-hover);
                    transform: translateY(-1px);
                }

                .nav-dashboard-btn {
                    margin-left: 12px;
                    padding: 11px 26px;
                    background: linear-gradient(135deg, var(--teal) 0%, #2C8B8B 100%);
                    color: #fff;
                    border: 2px solid rgba(255,255,255,.2);
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: var(--tr);
                    min-height: 44px;
                    letter-spacing: .4px;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    box-shadow: 0 2px 8px rgba(51,153,153,.3);
                }

                .nav-dashboard-btn:hover {
                    background: linear-gradient(135deg, #2C8B8B 0%, var(--teal) 100%);
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(51,153,153,.5);
                    border-color: rgba(255,255,255,.4);
                }

                .burger {
                    display: none;
                    background: transparent;
                    border: 0;
                    padding: 8px;
                    cursor: pointer;
                    position: relative;
                    z-index: 10001;
                    min-width: 44px;
                    min-height: 44px;
                    border-radius: 8px;
                    transition: var(--tr);
                }
                .burger:hover {
                    background: var(--nav-hover-bg);
                }
                .burger span {
                    display: block;
                    width: 24px;
                    height: 3px;
                    background: var(--nav-link);
                    margin: 4px 0;
                    transition: var(--tr);
                    border-radius: 2px;
                }
                .burger.open span:nth-child(1) {
                    transform: rotate(45deg) translate(6px,6px);
                }
                .burger.open span:nth-child(2) {
                    opacity: 0;
                }
                .burger.open span:nth-child(3) {
                    transform: rotate(-45deg) translate(6px,-6px);
                }

                .mobile-menu {
                    position: fixed;
                    inset: 0;
                    background: var(--mobile-bg);
                    backdrop-filter: blur(30px);
                    -webkit-backdrop-filter: blur(30px);
                    transform: translateY(-100%);
                    opacity: 0;
                    visibility: hidden;
                    transition: transform .3s cubic-bezier(.4,0,.2,1), opacity .3s ease;
                    z-index: 9998;
                    display: flex;
                    flex-direction: column;
                    padding: 84px 24px 24px;
                    overflow-y: auto;
                }
                .mobile-menu.open {
                    transform: translateY(0);
                    opacity: 1;
                    visibility: visible;
                }

                .mobile-nav {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                    list-style: none;
                    margin-bottom: 24px;
                }

                .mobile-item {
                    border-bottom: 1px solid var(--nav-border);
                    padding: 16px 0;
                    min-height: 56px;
                }

                .mobile-link {
                    color: var(--nav-link);
                    text-decoration: none;
                    font-size: 16px;
                    font-weight: 600;
                    transition: var(--tr);
                    letter-spacing: 0.1px;
                    display: flex;
                    align-items: center;
                    position: relative;
                }

                .mobile-link.active {
                    color: var(--nav-hover);
                    font-weight: 700;
                }

                .mobile-link.active::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: -16px;
                    right: 0;
                    height: 3px;
                    background: var(--accent);
                    border-radius: 2px;
                }

                .mobile-donate {
                    background: var(--btn-bg);
                    color: #fff;
                    margin-top: 24px;
                    cursor: pointer;
                    font-size: 16px;
                    font-weight: 700;
                    padding: 18px 24px;
                    border-radius: 10px;
                    transition: var(--tr);
                    min-height: 60px;
                    letter-spacing: .6px;
                    border: none;
                    width: 100%;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .mobile-donate:hover {
                    background: var(--btn-hover);
                    transform: translateY(-1px);
                }

                .mobile-dashboard-btn {
                    background: linear-gradient(135deg, var(--teal) 0%, #2C8B8B 100%);
                    color: #fff;
                    margin-top: 16px;
                    cursor: pointer;
                    font-size: 16px;
                    font-weight: 700;
                    padding: 18px 24px;
                    border-radius: 10px;
                    transition: var(--tr);
                    min-height: 60px;
                    letter-spacing: .6px;
                    border: 2px solid rgba(255,255,255,.2);
                    width: 100%;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 2px 8px rgba(51,153,153,.3);
                }

                .mobile-dashboard-btn:hover {
                    background: linear-gradient(135deg, #2C8B8B 0%, var(--teal) 100%);
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(51,153,153,.5);
                    border-color: rgba(255,255,255,.4);
                }

                @media(max-width:980px) {
                    .nav-container {
                        padding: 0 20px;
                    }
                    .nav-menu,
                    .nav-donate {
                        display: none;
                    }
                    .burger {
                        display: block;
                    }
                }

                @media(max-width:640px) {
                    .nav-container {
                        padding: 0 16px;
                    }
                    .nav-logo img {
                        width: 150px;
                    }
                    .nav.scrolled .nav-logo img {
                        width: 135px;
                    }
                    .mobile-link {
                        font-size: 15px;
                    }
                }

                @media(max-width:380px) {
                    .nav-logo img {
                        width: 130px;
                    }
                    .nav.scrolled .nav-logo img {
                        width: 120px;
                    }
                }

                @media(prefers-reduced-motion:reduce) {
                    *,
                    *::before,
                    *::after {
                        animation-duration: .01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: .01ms !important;
                    }
                }

                *:focus-visible {
                    outline: 2px solid var(--accent);
                    outline-offset: 2px;
                    border-radius: 4px;
                }
            `})]}):e.jsx("header",{className:"w-full backdrop-blur-sm",style:{background:"var(--bg-secondary)",borderBottom:"1px solid var(--border)"},children:e.jsx("div",{className:"px-3 sm:px-6 lg:px-8 py-2.5 sm:py-4",children:e.jsxs("div",{className:"flex items-center justify-between gap-2 sm:gap-4",children:[s&&e.jsx("button",{onClick:i,className:"w-10 h-10 rounded-lg flex items-center justify-center transition-all flex-shrink-0",style:{background:"var(--bg-elevated)",border:"1px solid var(--border)"},"aria-label":"Open menu",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{color:"var(--text-primary)"},children:e.jsx("path",{d:"M3 12h18M3 6h18M3 18h18"})})}),e.jsx(A,{to:"/dashboard",className:`flex items-center gap-3 flex-shrink-0 ${s?"hidden sm:flex":""}`,children:e.jsxs("span",{className:"font-extrabold text-lg sm:text-xl",children:[e.jsx("span",{style:{color:"var(--text-primary)"},children:"MEAUX"}),e.jsx("span",{style:{color:"var(--accent)"},children:"BILITY"})]})}),e.jsxs("div",{className:"flex-1 max-w-2xl relative hidden sm:block",children:[e.jsx("span",{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-lg",style:{color:"var(--text-muted)"},children:"🔍"}),e.jsx("input",{type:"search",placeholder:"Search projects...",className:"w-full px-4 py-2.5 pl-10 pr-4 rounded-lg text-sm transition-all",style:{background:"var(--bg-primary)",border:"1px solid var(--border)",color:"var(--text-primary)"},onFocus:c=>{c.currentTarget.style.borderColor="var(--accent)",c.currentTarget.style.boxShadow="0 0 0 3px var(--accent-soft)"},onBlur:c=>{c.currentTarget.style.borderColor="var(--border)",c.currentTarget.style.boxShadow="none"}})]}),s&&e.jsx("span",{className:"font-bold text-sm sm:hidden truncate",style:{color:"var(--text-primary)"},children:"Dashboard"}),e.jsxs("div",{className:"flex items-center gap-1 sm:gap-2 flex-shrink-0",children:[e.jsx("button",{className:"w-9 h-9 sm:hidden rounded-lg flex items-center justify-center text-lg transition-all",style:{background:"var(--bg-elevated)",border:"1px solid var(--border)"},children:"🔍"}),e.jsxs("button",{className:"w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-lg sm:text-xl relative transition-all",style:{background:"var(--bg-elevated)",border:"1px solid var(--border)"},children:["🔔",e.jsx("span",{className:"absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold",style:{background:"var(--status-error)",color:"#FFFFFF",border:"2px solid var(--bg-secondary)"},children:"3"})]}),e.jsx("button",{className:"w-9 h-9 sm:w-10 sm:h-10 rounded-lg hidden sm:flex items-center justify-center text-xl transition-all",style:{background:"var(--bg-elevated)",border:"1px solid var(--border)"},children:"🎤"}),e.jsx("button",{onClick:()=>m(!N),className:"w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all",style:{background:"var(--accent)",color:"var(--bg-primary)",border:"2px solid var(--border)"},children:"SP"})]}),e.jsx(zt,{isOpen:N,onClose:()=>m(!1),userEmail:f,userName:S})]})})})}function Ft(){const i=Je().pathname.split("/").filter(Boolean),s=g=>({dashboard:"Dashboard",analytics:"Analytics",projects:"Projects",communications:"Communications",content:"Content",storage:"Storage",finance:"Finance",calendar:"Calendar",developer:"Developer",team:"Team",settings:"Settings"})[g]||g.charAt(0).toUpperCase()+g.slice(1);return e.jsxs("nav",{className:"mb-6 flex items-center gap-2 text-sm text-gray-600","aria-label":"Breadcrumb",children:[e.jsx(A,{to:"/",className:"hover:text-teal-600 transition-colors",children:"Home"}),e.jsx("span",{className:"text-gray-400",children:"/"}),i.map((g,n)=>{const x=n===i.length-1,r="/"+i.slice(0,n+1).join("/"),N=s(g);return x?e.jsx("span",{className:"text-gray-900 font-medium",children:N},g):e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(A,{to:r,className:"hover:text-teal-600 transition-colors",children:N}),e.jsx("span",{className:"text-gray-400",children:"/"})]},g)})]})}function Mt(){const t=Je(),[i,s]=a.useState("light"),[g,n]=a.useState(!1),[x,r]=a.useState(250),[N,m]=a.useState("one_time"),[v,b]=a.useState({firstName:"",lastName:"",email:""}),[k,f]=a.useState({}),[S,o]=a.useState(!1),[d,c]=a.useState(!1),h=a.useRef(null),C=a.useRef(null),y=a.useRef(null),E=["about","community","resources"];a.useEffect(()=>{const T=t.pathname;let j="light";E.forEach(F=>{T.includes(F)&&(j="dark")}),s(j)},[t.pathname]),a.useEffect(()=>{if(!window.Stripe&&typeof window<"u"){const T=document.createElement("script");T.src="https://js.stripe.com/v3/",T.async=!0,T.onload=()=>{window.Stripe&&(h.current=window.Stripe("pk_live_51S4R0SRW56Pm3uYI8EKbysm1ok4peVXSD6G17HtFy8BDuG9Carn8Ry7iPVzulMBtdEFcz5pFvXpE04CIgn8PY6WS00aXOqMYEI"))},document.head.appendChild(T)}else window.Stripe&&(h.current=window.Stripe("pk_live_51S4R0SRW56Pm3uYI8EKbysm1ok4peVXSD6G17HtFy8BDuG9Carn8Ry7iPVzulMBtdEFcz5pFvXpE04CIgn8PY6WS00aXOqMYEI"))},[]),a.useEffect(()=>{if(g&&h.current&&C.current){y.current&&(y.current.unmount(),y.current=null);const T=setTimeout(()=>{if(C.current&&h.current){const F=h.current.elements().create("card",{style:{base:{fontSize:"16px",color:"#ffffff",fontFamily:"Inter, sans-serif","::placeholder":{color:"rgba(255,255,255,0.5)"}},invalid:{color:"#ff6b6b",iconColor:"#ff6b6b"}}});F.mount(C.current),y.current=F,F.on("change",B=>{const q=document.getElementById("mbxCardErr");q&&(B.error?(q.textContent=B.error.message,q.classList.add("show")):(q.textContent="",q.classList.remove("show")))})}},100);return()=>{clearTimeout(T),y.current&&(y.current.unmount(),y.current=null)}}else!g&&y.current&&(y.current.unmount(),y.current=null)},[g]),a.useEffect(()=>{if(!document.querySelector('script[src*="model-viewer"]')){const T=document.createElement("script");T.type="module",T.src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js",document.head.appendChild(T)}},[]),a.useEffect(()=>{const T=document.querySelector(".mbx-3d-accent");if(!T)return;const j=new IntersectionObserver(F=>{F.forEach(B=>{const q=B.target.querySelector("model-viewer");q&&(B.isIntersecting?q.setAttribute("auto-rotate",""):q.removeAttribute("auto-rotate"))})},{threshold:.1});return j.observe(T),()=>j.disconnect()},[]),a.useEffect(()=>{const T=document.getElementById("mbx-year");T&&(T.textContent=new Date().getFullYear().toString())},[]),a.useEffect(()=>(window.openDonateModal=()=>n(!0),window.closeDonateModal=()=>{n(!1),c(!1),f({}),b({firstName:"",lastName:"",email:""})},window.selectMbxAmount=T=>r(T),window.selectMbxCustom=T=>{T&&parseFloat(T)>0&&r(parseFloat(T))},window.setMbxFrequency=T=>m(T),window.processMbxDonation=U,()=>{delete window.openDonateModal,delete window.closeDonateModal,delete window.selectMbxAmount,delete window.selectMbxCustom,delete window.setMbxFrequency,delete window.processMbxDonation}),[x,N,v]);const U=async()=>{const T={};if(v.firstName.trim()||(T.firstName="Required"),v.lastName.trim()||(T.lastName="Required"),v.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)||(T.email="Valid email required"):T.email="Required",f(T),!(Object.keys(T).length>0)){o(!0);try{const F=window.location.hostname==="localhost"||window.location.search.includes("test=true")?"/api/test/donations/create-payment-intent":"/api/donations/create-payment-intent",q=await(await fetch(F,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:x,frequency:N,fund:"general",donorInfo:{firstName:v.firstName,lastName:v.lastName,email:v.email}})})).json();if(!q.success)throw new Error(q.error||"Payment setup failed");const{clientSecret:ae}=q;if(h.current&&y.current){const{error:se,paymentIntent:_}=await h.current.confirmCardPayment(ae,{payment_method:{card:y.current,billing_details:{name:`${v.firstName} ${v.lastName}`,email:v.email}}});if(se)throw new Error(se.message);_.status==="succeeded"&&(c(!0),setTimeout(()=>{n(!1),c(!1)},3e3))}}catch(j){alert(`Payment failed: ${j instanceof Error?j.message:"Unknown error"}`)}finally{o(!1)}}},te=async T=>{T.preventDefault();const j=T.target,F=j.querySelector('input[type="email"]'),B=F==null?void 0:F.value;if(B)try{const ae=await(await fetch("/api/newsletter/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:B,source:"footer-newsletter",timestamp:new Date().toISOString()})})).json();ae.success?(alert(`Thank you for subscribing, ${B}! You'll receive updates on our impact.`),j.reset()):alert(ae.error||"Subscription failed. Please try again.")}catch(q){console.error("Newsletter subscription error:",q),alert("Subscription failed. Please try again.")}};return e.jsxs(e.Fragment,{children:[e.jsxs("footer",{className:"mbx-footer",id:"mbx-footer",role:"contentinfo","data-theme":i,children:[e.jsx("div",{className:"mbx-3d-accent","aria-hidden":"true",children:e.jsx("model-viewer",{src:"https://pub-ede6590ac0d2fb7daf155b35653457b2.r2.dev/meauxbility-3d-models/spline/footer-kinetic-symmetry.glb",alt:"Decorative 3D element","auto-rotate":!0,"rotation-per-second":"18deg","camera-controls":"false","disable-zoom":!0,"disable-pan":!0,"disable-tap":!0,"interaction-prompt":"none","shadow-intensity":"0",exposure:"1.2",loading:"lazy",reveal:"auto"})}),e.jsxs("div",{className:"mbx-footer-container",children:[e.jsxs("div",{className:"mbx-footer-grid",children:[e.jsxs("div",{className:"mbx-footer-brand",children:[e.jsx(A,{to:t.pathname.startsWith("/dashboard")?"/":"/dashboard",className:"mbx-footer-logo","aria-label":t.pathname.startsWith("/dashboard")?"Meauxbility Home":"Meauxbility Dashboard",children:e.jsx("img",{src:"https://imagedelivery.net/g7wf09fCONpnidkRnR_5vw/86181f93-ab81-4428-6f24-f7583e758f00/small",alt:"Meauxbility - Empowering mobility and independence",width:"220",height:"auto",loading:"lazy"})}),e.jsxs("div",{className:"mbx-footer-social",role:"list",children:[e.jsx("a",{className:"mbx-social-link","aria-label":"Facebook",href:"https://www.facebook.com/p/Meauxbility-61577795721851/",target:"_blank",rel:"noopener noreferrer",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),e.jsx("a",{className:"mbx-social-link","aria-label":"Instagram",href:"https://www.instagram.com/meauxbility/",target:"_blank",rel:"noopener noreferrer",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 15.838a3.838 3.838 0 110-7.676 3.838 3.838 0 010 7.676zM18.406 5.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"})})})]}),e.jsx("p",{children:"More Options. More Access. More Life. Join us as we transform obstacles into pathways for adaptive athletes and spinal cord injury survivors."}),e.jsxs("div",{className:"mbx-footer-cta",children:[e.jsx(A,{to:"/pages/donmichael-our-first-campaign",className:"mbx-btn mbx-btn-primary",children:"DonMichael's Campaign"}),e.jsx("button",{className:"mbx-btn mbx-btn-outline",onClick:()=>n(!0),children:"Donate Now"}),e.jsx(A,{to:"/dashboard",className:"mbx-btn mbx-btn-dashboard",children:"📊 Access Dashboard"})]}),e.jsxs("div",{className:"mbx-newsletter",children:[e.jsx("h4",{children:"Stay Connected"}),e.jsx("p",{style:{color:"rgba(255,255,255,0.85)",fontSize:"14px",marginBottom:"8px"},children:"Get updates on our impact and ways to help"}),e.jsxs("form",{className:"mbx-newsletter-form",onSubmit:te,children:[e.jsx("input",{type:"email",className:"mbx-newsletter-input",placeholder:"Enter your email",required:!0,"aria-label":"Email address"}),e.jsx("button",{type:"submit",className:"mbx-newsletter-btn",children:"Subscribe"})]})]})]}),e.jsxs("div",{className:"mbx-footer-column",children:[e.jsx("h4",{children:"Resources"}),e.jsxs("ul",{className:"mbx-footer-links",role:"list",children:[e.jsx("li",{children:e.jsx(A,{to:"/pages/meauxbility-branding",children:"Brand Guide"})}),e.jsx("li",{children:e.jsx(A,{to:"/pages/community",children:"Community"})}),e.jsx("li",{children:e.jsx(A,{to:"/pages/news-media-features",children:"Latest News"})}),e.jsx("li",{children:e.jsx(A,{to:"/pages/non-profit-information",children:"501(c)(3) Info"})})]})]}),e.jsxs("div",{className:"mbx-footer-column",children:[e.jsx("h4",{children:"Company"}),e.jsxs("ul",{className:"mbx-footer-links",role:"list",children:[e.jsx("li",{children:e.jsx(A,{to:"/pages/sam-primeaux",children:"About Sam"})}),e.jsx("li",{children:e.jsx(A,{to:"/pages/team-meauxbility",children:"Our Team"})}),e.jsx("li",{children:e.jsx(A,{to:"/pages/about-us",children:"Our Mission"})}),e.jsx("li",{children:e.jsx(A,{to:"/pages/accessibility-partners",children:"Partners"})}),e.jsx("li",{children:e.jsx(A,{to:"/pages/contact",children:"Contact"})})]})]}),e.jsxs("div",{className:"mbx-footer-column",children:[e.jsx("h4",{children:"Support"}),e.jsxs("ul",{className:"mbx-footer-links",role:"list",children:[e.jsx("li",{children:e.jsx(A,{to:"/pages/faq",children:"FAQ"})}),e.jsx("li",{children:e.jsx(A,{to:"/pages/donate",children:"Ways to Give"})}),e.jsx("li",{children:e.jsx(A,{to:"/pages/get-involved",children:"Get Involved"})}),e.jsx("li",{children:e.jsx(A,{to:"/pages/apply-for-funding",children:"Apply for Grant"})})]})]})]}),e.jsxs("div",{className:"mbx-footer-bottom",children:[e.jsxs("div",{className:"mbx-footer-legal",children:[e.jsx(A,{to:"/pages/data-sharing-opt-out",children:"Privacy Policy"}),e.jsx("span",{"aria-hidden":"true",style:{color:"rgba(255,255,255,0.3)"},children:"•"}),e.jsx(A,{to:"/pages/policies",children:"Terms of Service"}),e.jsx("span",{"aria-hidden":"true",style:{color:"rgba(255,255,255,0.3)"},children:"•"}),e.jsx(A,{to:"/pages/accessibility",children:"Accessibility"})]}),e.jsxs("div",{className:"mbx-footer-copyright",children:["© ",e.jsx("span",{id:"mbx-year"})," Meauxbility. 501(c)(3) EIN: 33-4214907. All rights reserved."]})]})]})]}),g&&e.jsx("div",{className:`mbx-modal-backdrop ${g?"active":""}`,id:"mbxModalBackdrop","aria-hidden":!g,role:"dialog","aria-labelledby":"mbx-modal-title",onClick:T=>{T.target===T.currentTarget&&n(!1)},children:e.jsxs("div",{className:"mbx-modal",children:[e.jsxs("div",{className:"mbx-modal-header",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mbx-modal-title",id:"mbx-modal-title",children:"Support Meauxbility"}),e.jsx("p",{className:"mbx-modal-subtitle",children:"Every dollar transforms lives"})]}),e.jsx("button",{className:"mbx-modal-close",onClick:()=>n(!1),"aria-label":"Close donation modal",children:"×"})]}),e.jsxs("div",{className:"mbx-modal-body",children:[d&&e.jsxs("div",{className:"mbx-success-message",id:"mbxSuccessMsg",children:[e.jsx("div",{style:{fontSize:"2rem",marginBottom:"0.5rem"},children:"✅"}),e.jsx("div",{style:{fontWeight:800,color:"#fff",marginBottom:"0.25rem"},children:"Thank You!"}),e.jsx("div",{style:{color:"rgba(255,255,255,0.9)",fontSize:"0.875rem"},children:"Your donation has been processed successfully."})]}),e.jsxs("div",{className:"mbx-donate-grid",children:[e.jsxs("div",{className:"mbx-donate-options",children:[e.jsx("h3",{className:"mbx-option-title",children:"Choose Your Gift"}),e.jsxs("div",{className:"mbx-frequency-toggle",children:[e.jsx("button",{className:`mbx-frequency-btn ${N==="one_time"?"active":""}`,onClick:()=>m("one_time"),children:"One Time"}),e.jsx("button",{className:`mbx-frequency-btn ${N==="monthly"?"active":""}`,onClick:()=>m("monthly"),children:"Monthly"})]}),e.jsx("div",{className:"mbx-amount-grid",children:[25,50,100,250,500,1e3].map(T=>e.jsxs("button",{className:`mbx-amount-btn ${x===T?"selected":""}`,onClick:()=>r(T),children:["$",T===1e3?"1k":T]},T))}),e.jsx("input",{type:"number",className:"mbx-custom-amount",placeholder:"Custom amount",min:"1",onChange:T=>{const j=T.target.value;j&&parseFloat(j)>0&&r(parseFloat(j))}}),e.jsx("div",{className:"mbx-designation",style:{marginTop:"1rem"},children:e.jsxs("select",{id:"mbxDesignation",style:{width:"100%",padding:"0.75rem 2rem 0.75rem 0.75rem",background:"rgba(26,74,82,0.3)",border:"1.5px solid rgba(74,171,184,0.3)",borderRadius:"10px",color:"#fff",fontSize:"0.875rem",cursor:"pointer",appearance:"none",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%270 0 12 12%27%3E%3Cpath fill=%27%23fff%27 d=%27M6 8L2 4h8z%27/%3E%3C/svg%3E')",backgroundRepeat:"no-repeat",backgroundPosition:"right 0.75rem center",fontFamily:"'Inter',sans-serif"},children:[e.jsx("option",{value:"general",children:"Where Most Needed"}),e.jsx("option",{value:"donmichael",children:"DonMichael's Wheelchair"}),e.jsx("option",{value:"recovery",children:"Recovery Grant Program"}),e.jsx("option",{value:"adaptive",children:"Adaptive Athletes"}),e.jsx("option",{value:"equipment",children:"Equipment Fund"})]})})]}),e.jsxs("div",{className:"mbx-donor-info",children:[e.jsx("h3",{className:"mbx-option-title",children:"Your Information"}),e.jsxs("div",{className:"mbx-name-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginBottom:"1rem"},children:[e.jsxs("div",{className:"mbx-form-group",children:[e.jsx("label",{style:{display:"block",color:"rgba(255,255,255,0.9)",marginBottom:"0.375rem",fontWeight:600,fontSize:"0.875rem"},children:"First Name"}),e.jsx("input",{type:"text",className:"mbx-form-input",id:"mbxFirstName",required:!0,value:v.firstName,onChange:T=>b({...v,firstName:T.target.value})}),k.firstName&&e.jsx("div",{className:"mbx-error show",children:k.firstName})]}),e.jsxs("div",{className:"mbx-form-group",children:[e.jsx("label",{style:{display:"block",color:"rgba(255,255,255,0.9)",marginBottom:"0.375rem",fontWeight:600,fontSize:"0.875rem"},children:"Last Name"}),e.jsx("input",{type:"text",className:"mbx-form-input",id:"mbxLastName",required:!0,value:v.lastName,onChange:T=>b({...v,lastName:T.target.value})}),k.lastName&&e.jsx("div",{className:"mbx-error show",children:k.lastName})]})]}),e.jsxs("div",{className:"mbx-form-group",style:{marginBottom:"1rem"},children:[e.jsx("label",{style:{display:"block",color:"rgba(255,255,255,0.9)",marginBottom:"0.375rem",fontWeight:600,fontSize:"0.875rem"},children:"Email"}),e.jsx("input",{type:"email",className:"mbx-form-input",id:"mbxEmail",required:!0,value:v.email,onChange:T=>b({...v,email:T.target.value})}),k.email&&e.jsx("div",{className:"mbx-error show",children:k.email})]}),e.jsxs("div",{className:"mbx-form-group",children:[e.jsx("label",{style:{display:"block",color:"rgba(255,255,255,0.9)",marginBottom:"0.375rem",fontWeight:600,fontSize:"0.875rem"},children:"Card Information"}),e.jsx("div",{id:"mbx-card-element",ref:C,style:{padding:"0.875rem",background:"rgba(26,74,82,0.3)",border:"1.5px solid rgba(74,171,184,0.3)",borderRadius:"10px",transition:"var(--footer-transition)",minHeight:"50px",display:"flex",alignItems:"center"}}),e.jsx("div",{className:"mbx-error",id:"mbxCardErr"})]}),e.jsxs("button",{className:"mbx-donate-submit",onClick:U,disabled:S,children:[e.jsx("span",{className:"mbx-submit-text",style:{display:S?"none":"inline"},children:"Complete Donation"}),S&&e.jsxs("div",{className:"mbx-loading active",children:[e.jsx("div",{className:"mbx-spinner"}),e.jsx("span",{children:"Processing..."})]})]}),e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",marginTop:"1.25rem",color:"rgba(255,255,255,0.7)",fontSize:"0.75rem"},children:"🔒 Secure & tax-deductible • EIN: 33-4214907"})]})]})]})]})}),e.jsx(Dt,{theme:i})]})}function Dt({theme:t}){return e.jsx("style",{children:`
            :root {
                --footer-teal: #339999;
                --footer-teal-mid: #2C8B8B;
                --footer-teal-dark: #237373;
                --footer-orange: #FF6B35;
                --footer-orange-dark: #E85D00;
                --footer-purple: #9945FF;
                --footer-purple-dark: #7928CA;
                --footer-purple-light: rgba(153,69,255,0.15);
                --footer-white: #ffffff;
                --footer-white-90: rgba(255,255,255,0.9);
                --footer-white-85: rgba(255,255,255,0.85);
                --footer-white-70: rgba(255,255,255,0.7);
                --footer-white-50: rgba(255,255,255,0.5);
                --footer-white-30: rgba(255,255,255,0.3);
                --footer-white-15: rgba(255,255,255,0.15);
                --footer-white-10: rgba(255,255,255,0.1);
                --footer-white-05: rgba(255,255,255,0.05);
                --footer-max-width: 1440px;
                --footer-transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
                --footer-transition-bounce: all 0.3s cubic-bezier(0.175,0.885,0.32,1.275);
            }

            [data-theme="light"] {
                --footer-bg-start: var(--footer-teal);
                --footer-bg-mid: var(--footer-teal-mid);
                --footer-bg-end: var(--footer-teal-dark);
                --footer-accent: var(--footer-orange);
                --footer-accent-hover: var(--footer-orange-dark);
                --footer-btn-bg: linear-gradient(135deg, var(--footer-orange) 0%, var(--footer-orange-dark) 100%);
                --footer-glow: var(--footer-orange);
                --modal-bg: linear-gradient(135deg, rgba(26,74,82,0.95) 0%, rgba(42,107,117,0.9) 100%);
                --modal-border: rgba(74,171,184,0.3);
                --modal-accent: var(--footer-orange);
            }

            [data-theme="dark"] {
                --footer-bg-start: #1a1a2e;
                --footer-bg-mid: #16213e;
                --footer-bg-end: #0f1c2e;
                --footer-accent: var(--footer-purple);
                --footer-accent-hover: var(--footer-purple-dark);
                --footer-btn-bg: linear-gradient(135deg, var(--footer-purple) 0%, var(--footer-purple-dark) 100%);
                --footer-glow: var(--footer-purple);
                --modal-bg: linear-gradient(135deg, #0a0e27 0%, #1a0033 100%);
                --modal-border: rgba(153,69,255,0.3);
                --modal-accent: var(--footer-purple);
            }

            .mbx-footer {
                background: linear-gradient(180deg, var(--footer-bg-start) 0%, var(--footer-bg-mid) 50%, var(--footer-bg-end) 100%);
                color: var(--footer-white);
                position: relative;
                overflow: hidden;
                padding: 64px 0 32px;
                flex-shrink: 0;
                margin-top: auto;
                transition: background 0.6s cubic-bezier(0.23,1,0.32,1);
            }

            .mbx-3d-accent {
                position: absolute;
                bottom: 20px;
                right: 5%;
                width: 300px;
                height: 300px;
                pointer-events: none;
                opacity: 0.15;
                transition: opacity 0.6s ease;
                z-index: 1;
                filter: drop-shadow(0 0 40px var(--footer-glow));
                animation: floatAnimation 4s ease-in-out infinite;
            }

            @keyframes floatAnimation {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-6px); }
            }

            .mbx-footer:hover .mbx-3d-accent {
                opacity: 0.25;
            }

            .mbx-3d-accent model-viewer {
                width: 100%;
                height: 100%;
                background: transparent;
            }

            .mbx-footer-container {
                max-width: var(--footer-max-width);
                margin: 0 auto;
                padding: 0 40px;
                position: relative;
                z-index: 2;
            }

            .mbx-footer-grid {
                display: grid;
                grid-template-columns: 2fr 1fr 1fr 1fr;
                gap: 48px;
                margin-bottom: 48px;
            }

            .mbx-footer-brand {
                grid-column: 1;
            }

            .mbx-footer-logo {
                display: inline-block;
                margin-bottom: 12px;
                transition: var(--footer-transition);
                text-decoration: none;
            }

            .mbx-footer-logo:focus-visible {
                outline: 2px solid var(--footer-accent);
                outline-offset: 4px;
                border-radius: 8px;
            }

            .mbx-footer-logo img {
                width: 220px;
                height: auto;
                display: block;
                filter: drop-shadow(0 4px 16px rgba(0,0,0,0.3));
                transition: var(--footer-transition);
                will-change: transform;
            }

            .mbx-footer-logo:hover img {
                transform: translateY(-4px) scale(1.03);
                filter: drop-shadow(0 8px 24px var(--footer-glow));
            }

            .mbx-footer-social {
                display: inline-flex;
                gap: 12px;
                margin-bottom: 20px;
            }

            .mbx-social-link {
                width: 44px;
                height: 44px;
                border: 2px solid var(--footer-accent);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--footer-accent);
                text-decoration: none;
                transition: var(--footer-transition);
                background: rgba(255,107,53,0.1);
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
            }

            .mbx-social-link::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                border-radius: 50%;
                background: var(--footer-accent);
                transform: translate(-50%, -50%);
                transition: width 0.3s, height 0.3s;
            }

            .mbx-social-link:hover::before {
                width: 100%;
                height: 100%;
            }

            .mbx-social-link:hover {
                color: var(--footer-white);
                transform: translateY(-3px) scale(1.05);
                box-shadow: 0 8px 20px rgba(255,107,53,0.35);
            }

            .mbx-social-link svg {
                position: relative;
                z-index: 1;
                width: 20px;
                height: 20px;
            }

            .mbx-footer-brand p {
                font-size: clamp(16px, 2vw, 18px);
                line-height: 1.7;
                color: var(--footer-white-85);
                max-width: 480px;
                margin-bottom: 20px;
                font-weight: 500;
            }

            .mbx-footer-cta {
                display: flex;
                gap: 12px;
                flex-wrap: wrap;
                margin-bottom: 24px;
            }

            .mbx-btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 14px 24px;
                border-radius: 12px;
                font-weight: 700;
                font-size: 14px;
                text-decoration: none;
                transition: var(--footer-transition-bounce);
                cursor: pointer;
                border: none;
                min-height: 48px;
                position: relative;
                overflow: hidden;
                letter-spacing: 0.3px;
            }

            .mbx-btn-primary {
                background: var(--footer-btn-bg);
                color: var(--footer-white);
                box-shadow: 0 4px 16px rgba(0,0,0,0.25);
            }

            .mbx-btn-primary:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 24px rgba(0,0,0,0.3);
            }

            .mbx-btn-outline {
                color: var(--footer-accent);
                background: transparent;
                border: 2px solid var(--footer-accent);
            }

            .mbx-btn-outline:hover {
                color: var(--footer-white);
                background: var(--footer-accent);
                transform: translateY(-2px);
            }

            .mbx-btn-dashboard {
                background: linear-gradient(135deg, var(--footer-teal) 0%, var(--footer-teal-mid) 100%);
                color: var(--footer-white);
                border: 2px solid rgba(255,255,255,.2);
                box-shadow: 0 4px 16px rgba(51,153,153,.3);
            }

            .mbx-btn-dashboard:hover {
                background: linear-gradient(135deg, var(--footer-teal-mid) 0%, var(--footer-teal) 100%);
                border-color: rgba(255,255,255,.4);
                box-shadow: 0 6px 20px rgba(51,153,153,.5);
                transform: translateY(-2px);
            }

            .mbx-newsletter {
                margin-top: 16px;
                padding: 20px;
                background: var(--footer-white-10);
                border-radius: 16px;
                border: 1px solid var(--footer-white-15);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
            }

            .mbx-newsletter h4 {
                color: var(--footer-white);
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 8px;
                letter-spacing: -0.3px;
            }

            .mbx-newsletter-form {
                display: flex;
                gap: 10px;
                margin-top: 12px;
            }

            .mbx-newsletter-input {
                flex: 1;
                padding: 12px 16px;
                border: 1px solid var(--footer-white-30);
                border-radius: 10px;
                background: var(--footer-white-10);
                color: var(--footer-white);
                font-size: 14px;
                transition: var(--footer-transition);
                font-family: 'Inter', sans-serif;
            }

            .mbx-newsletter-input::placeholder {
                color: var(--footer-white-70);
            }

            .mbx-newsletter-input:focus {
                outline: none;
                border-color: var(--footer-accent);
                background: var(--footer-white-15);
                box-shadow: 0 0 0 3px rgba(255,107,53,0.2);
            }

            [data-theme="dark"] .mbx-newsletter-input:focus {
                box-shadow: 0 0 0 3px rgba(153,69,255,0.2);
            }

            .mbx-newsletter-btn {
                padding: 12px 20px;
                background: var(--footer-accent);
                color: var(--footer-white);
                border: none;
                border-radius: 10px;
                font-weight: 700;
                font-size: 14px;
                cursor: pointer;
                transition: var(--footer-transition);
                letter-spacing: 0.3px;
                white-space: nowrap;
            }

            .mbx-newsletter-btn:hover {
                background: var(--footer-accent-hover);
                transform: translateY(-2px);
                box-shadow: 0 4px 16px rgba(0,0,0,0.25);
            }

            .mbx-footer-column h4 {
                color: var(--footer-white);
                font-size: clamp(16px, 2vw, 19px);
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 16px;
            }

            .mbx-footer-column:nth-child(2) h4,
            .mbx-footer-column:nth-child(3) h4,
            .mbx-footer-column:nth-child(4) h4 {
                color: var(--footer-accent);
                text-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }

            .mbx-footer-links {
                list-style: none;
            }

            .mbx-footer-links li {
                margin-bottom: 12px;
            }

            .mbx-footer-links a {
                color: var(--footer-white-70);
                text-decoration: none;
                font-size: 14px;
                font-weight: 500;
                transition: var(--footer-transition);
                position: relative;
                display: inline-block;
            }

            .mbx-footer-links a::after {
                content: '';
                position: absolute;
                left: 0;
                bottom: -2px;
                width: 0;
                height: 2px;
                background: var(--footer-accent);
                transition: width 0.3s ease;
            }

            .mbx-footer-links a:hover {
                color: var(--footer-accent);
                transform: translateX(4px);
            }

            .mbx-footer-links a:hover::after {
                width: 100%;
            }

            .mbx-footer-bottom {
                padding-top: 28px;
                border-top: 1px solid var(--footer-white-15);
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 20px;
                flex-wrap: wrap;
            }

            .mbx-footer-legal {
                display: flex;
                gap: 16px;
                flex-wrap: wrap;
                align-items: center;
            }

            .mbx-footer-legal a {
                color: var(--footer-white-70);
                text-decoration: none;
                font-size: 13px;
                font-weight: 500;
                transition: var(--footer-transition);
                position: relative;
            }

            .mbx-footer-legal a::after {
                content: '';
                position: absolute;
                bottom: -2px;
                left: 0;
                width: 0;
                height: 1px;
                background: var(--footer-accent);
                transition: width 0.3s ease;
            }

            .mbx-footer-legal a:hover {
                color: var(--footer-accent);
            }

            .mbx-footer-legal a:hover::after {
                width: 100%;
            }

            .mbx-footer-copyright {
                font-size: 13px;
                font-weight: 500;
                color: var(--footer-white-70);
            }

            .mbx-modal-backdrop {
                position: fixed;
                inset: 0;
                background: rgba(5,27,30,0.9);
                backdrop-filter: blur(15px);
                -webkit-backdrop-filter: blur(15px);
                display: none;
                align-items: center;
                justify-content: center;
                z-index: 100000;
                opacity: 0;
                transition: opacity 0.3s cubic-bezier(0.4,0,0.2,1);
                padding: 1rem;
            }

            .mbx-modal-backdrop.active {
                display: flex;
                opacity: 1;
            }

            .mbx-modal {
                width: min(720px, 95vw);
                max-height: 95vh;
                background: var(--modal-bg);
                border-radius: 20px;
                box-shadow: 0 24px 48px rgba(0,0,0,0.3);
                border: 1.5px solid var(--modal-border);
                overflow: hidden;
                transform: scale(0.9) translateY(20px);
                transition: transform 0.3s cubic-bezier(0.175,0.885,0.32,1.275);
                position: relative;
                backdrop-filter: blur(25px);
                -webkit-backdrop-filter: blur(25px);
                display: flex;
                flex-direction: column;
            }

            [data-theme="dark"] .mbx-modal {
                box-shadow: 0 0 100px rgba(153,69,255,0.2), 0 24px 48px rgba(0,0,0,0.5);
            }

            .mbx-modal-backdrop.active .mbx-modal {
                transform: scale(1) translateY(0);
            }

            .mbx-modal-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 1.75rem;
                border-bottom: 1px solid var(--footer-white-10);
                background: var(--footer-white-05);
                position: relative;
            }

            [data-theme="dark"] .mbx-modal-header {
                border-bottom: 1px solid rgba(153,69,255,0.2);
            }

            .mbx-modal-title {
                font-weight: 800;
                color: var(--footer-white);
                font-size: clamp(1.5rem, 3vw, 1.75rem);
                margin: 0;
                letter-spacing: -0.5px;
            }

            .mbx-modal-subtitle {
                color: var(--footer-white-85);
                font-size: 0.95rem;
                margin-top: 0.25rem;
            }

            .mbx-modal-close {
                appearance: none;
                border: 0;
                background: var(--footer-white-10);
                cursor: pointer;
                padding: 0;
                border-radius: 50%;
                font-size: 1.5rem;
                color: var(--footer-white-70);
                transition: var(--footer-transition-bounce);
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .mbx-modal-close:hover {
                background: rgba(255,107,0,0.2);
                color: var(--modal-accent);
                transform: rotate(90deg);
            }

            [data-theme="dark"] .mbx-modal-close:hover {
                background: rgba(153,69,255,0.2);
            }

            .mbx-modal-body {
                padding: 2rem;
                overflow-y: auto;
                max-height: calc(95vh - 120px);
                flex: 1;
                -webkit-overflow-scrolling: touch;
            }

            .mbx-donate-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1.5rem;
            }

            .mbx-donate-options,
            .mbx-donor-info {
                background: var(--footer-white-05);
                border: 1px solid rgba(74,171,184,0.2);
                border-radius: 16px;
                padding: 1.25rem;
                position: relative;
            }

            [data-theme="dark"] .mbx-donate-options,
            [data-theme="dark"] .mbx-donor-info {
                border: 1px solid rgba(153,69,255,0.2);
                background: rgba(153,69,255,0.05);
            }

            .mbx-option-title {
                font-size: 1.125rem;
                font-weight: 700;
                color: var(--footer-white);
                margin-bottom: 1.25rem;
                letter-spacing: -0.2px;
            }

            .mbx-frequency-toggle {
                display: flex;
                background: rgba(0,0,0,0.3);
                border-radius: 10px;
                padding: 4px;
                margin-bottom: 1.25rem;
            }

            .mbx-frequency-btn {
                flex: 1;
                padding: 0.625rem;
                background: transparent;
                border: none;
                color: var(--footer-white-70);
                font-weight: 600;
                cursor: pointer;
                border-radius: 8px;
                transition: var(--footer-transition-bounce);
                font-size: 0.875rem;
            }

            .mbx-frequency-btn.active {
                background: var(--modal-accent);
                color: var(--footer-white);
                box-shadow: 0 4px 12px rgba(255,107,0,0.3);
            }

            [data-theme="dark"] .mbx-frequency-btn.active {
                box-shadow: 0 0 20px rgba(153,69,255,0.5);
            }

            .mbx-amount-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 0.625rem;
                margin-bottom: 1rem;
            }

            .mbx-amount-btn {
                padding: 0.75rem;
                background: rgba(26,74,82,0.3);
                border: 1.5px solid rgba(74,171,184,0.3);
                border-radius: 10px;
                color: var(--footer-white-90);
                font-weight: 600;
                cursor: pointer;
                transition: var(--footer-transition-bounce);
                font-size: 0.875rem;
                position: relative;
                overflow: hidden;
            }

            [data-theme="dark"] .mbx-amount-btn {
                background: rgba(153,69,255,0.1);
                border: 1.5px solid rgba(153,69,255,0.3);
            }

            .mbx-amount-btn:hover {
                transform: translateY(-2px);
                border-color: var(--modal-accent);
            }

            .mbx-amount-btn.selected {
                background: var(--modal-accent);
                border-color: var(--modal-accent);
                color: var(--footer-white);
                font-weight: 700;
            }

            .mbx-custom-amount,
            .mbx-form-input {
                width: 100%;
                padding: 0.75rem;
                background: rgba(26,74,82,0.3);
                border: 1.5px solid rgba(74,171,184,0.3);
                border-radius: 10px;
                color: var(--footer-white);
                font-size: 0.875rem;
                transition: var(--footer-transition);
                font-family: 'Inter', sans-serif;
            }

            [data-theme="dark"] .mbx-custom-amount,
            [data-theme="dark"] .mbx-form-input {
                background: rgba(153,69,255,0.1);
                border: 1.5px solid rgba(153,69,255,0.3);
            }

            .mbx-custom-amount::placeholder,
            .mbx-form-input::placeholder {
                color: var(--footer-white-50);
            }

            .mbx-custom-amount:focus,
            .mbx-form-input:focus {
                outline: none;
                border-color: var(--modal-accent);
                background: rgba(26,74,82,0.4);
                box-shadow: 0 0 0 3px rgba(255,107,0,0.2);
            }

            [data-theme="dark"] .mbx-custom-amount:focus,
            [data-theme="dark"] .mbx-form-input:focus {
                background: rgba(153,69,255,0.15);
                box-shadow: 0 0 20px rgba(153,69,255,0.3);
            }

            .mbx-donate-submit {
                width: 100%;
                padding: 1.125rem;
                background: linear-gradient(135deg, var(--modal-accent) 0%, var(--footer-accent-hover) 100%);
                color: var(--footer-white);
                border: none;
                border-radius: 12px;
                font-size: 1rem;
                font-weight: 700;
                cursor: pointer;
                transition: var(--footer-transition-bounce);
                margin-top: 1.25rem;
                text-transform: uppercase;
                letter-spacing: 1px;
                position: relative;
                overflow: hidden;
                box-shadow: 0 8px 24px rgba(255,107,0,0.3);
            }

            .mbx-donate-submit:hover:not(:disabled) {
                transform: translateY(-2px);
                box-shadow: 0 12px 32px rgba(255,107,0,0.4);
            }

            .mbx-donate-submit:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }

            [data-theme="dark"] .mbx-donate-submit {
                background: linear-gradient(135deg, #9945FF 0%, #F7B500 100%);
                box-shadow: 0 8px 24px rgba(153,69,255,0.3);
            }

            [data-theme="dark"] .mbx-donate-submit:hover {
                box-shadow: 0 0 40px rgba(153,69,255,0.6);
            }

            .mbx-loading {
                display: none;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
            }

            .mbx-loading.active {
                display: flex;
            }

            .mbx-spinner {
                width: 16px;
                height: 16px;
                border: 2px solid var(--footer-white-30);
                border-top-color: var(--footer-white);
                border-radius: 50%;
                animation: spin 0.8s linear infinite;
            }

            @keyframes spin {
                to { transform: rotate(360deg); }
            }

            .mbx-error {
                color: #ff6b6b;
                font-size: 0.75rem;
                margin-top: 0.25rem;
                display: none;
            }

            .mbx-error.show {
                display: block;
            }

            .mbx-success-message {
                display: none;
                text-align: center;
                padding: 2rem;
                background: linear-gradient(135deg, rgba(33,196,140,0.2), rgba(33,196,140,0.1));
                border: 1px solid rgba(33,196,140,0.4);
                border-radius: 16px;
                margin-bottom: 1.5rem;
                position: relative;
                overflow: hidden;
            }

            .mbx-success-message.show {
                display: block;
                animation: successPulse 0.6s ease-out;
            }

            @keyframes successPulse {
                0% { transform: scale(0.9); opacity: 0; }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); opacity: 1; }
            }

            @media (max-width: 1024px) {
                .mbx-footer-container {
                    padding: 0 32px;
                }
                .mbx-footer-grid {
                    grid-template-columns: 1fr 1fr;
                    gap: 40px;
                }
                .mbx-footer-brand {
                    grid-column: 1 / -1;
                }
                .mbx-3d-accent {
                    width: 250px;
                    height: 250px;
                    right: 2%;
                }
                .mbx-donate-grid {
                    grid-template-columns: 1fr;
                }
                .mbx-modal {
                    width: min(95vw, 600px);
                    max-height: 95vh;
                }
                .mbx-modal-body {
                    padding: 1.5rem;
                    max-height: calc(95vh - 100px);
                }
            }

            @media (max-width: 768px) {
                .mbx-modal-backdrop {
                    padding: 0.5rem;
                    align-items: flex-start;
                    padding-top: 1rem;
                }
                .mbx-modal {
                    width: 100%;
                    max-width: 100vw;
                    max-height: 100vh;
                    height: 100vh;
                    border-radius: 20px 20px 0 0;
                    margin-top: auto;
                }
                .mbx-modal-header {
                    padding: 1.25rem;
                }
                .mbx-modal-body {
                    padding: 1.25rem;
                    max-height: calc(100vh - 80px);
                    overflow-y: auto;
                }
                .mbx-donate-grid {
                    grid-template-columns: 1fr;
                    gap: 1.25rem;
                }
                .mbx-donate-options,
                .mbx-donor-info {
                    padding: 1rem;
                }
                .mbx-amount-grid {
                    grid-template-columns: repeat(3, 1fr) !important;
                    gap: 0.5rem !important;
                }
                .mbx-amount-btn {
                    padding: 0.75rem 0.5rem !important;
                    font-size: 0.875rem !important;
                }
                .mbx-name-grid {
                    grid-template-columns: 1fr !important;
                }
                #mbx-card-element {
                    min-height: 50px !important;
                    padding: 0.875rem !important;
                }
                .mbx-form-input {
                    font-size: 16px !important; /* Prevents zoom on iOS */
                }
                .mbx-footer {
                    padding: 60px 0 32px;
                }
                .mbx-footer-container {
                    padding: 0 20px;
                }
                .mbx-footer-grid {
                    grid-template-columns: 1fr;
                    gap: 32px;
                }
                .mbx-footer-logo img {
                    width: 180px;
                }
                .mbx-3d-accent {
                    width: 200px;
                    height: 200px;
                    right: 50%;
                    transform: translateX(50%);
                    bottom: 10px;
                }
                .mbx-footer-bottom {
                    flex-direction: column;
                    text-align: center;
                }
                .mbx-footer-legal {
                    justify-content: center;
                }
                .mbx-footer-cta {
                    flex-direction: column;
                }
                .mbx-btn {
                    width: 100%;
                }
                .mbx-newsletter-form {
                    flex-direction: column;
                }
                .mbx-newsletter-input,
                .mbx-newsletter-btn {
                    width: 100%;
                }
                .mbx-amount-grid {
                    grid-template-columns: repeat(2, 1fr);
                }
            }

            @media (max-width: 480px) {
                .mbx-footer-logo img {
                    width: 150px;
                }
                .mbx-newsletter {
                    padding: 16px;
                }
            }

            @media (prefers-reduced-motion: reduce) {
                *,
                *::before,
                *::after {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                }
                .mbx-3d-accent {
                    animation: none;
                }
            }

            *:focus-visible {
                outline: 2px solid var(--footer-accent);
                outline-offset: 2px;
                border-radius: 4px;
            }
        `})}function J({children:t,publicLayout:i=!1}){const[s,g]=a.useState(!1),[n,x]=a.useState(!1);a.useEffect(()=>{const N=()=>{x(window.innerWidth<1024),window.innerWidth>=1024&&g(!1)};return N(),window.addEventListener("resize",N),()=>window.removeEventListener("resize",N)},[]);const r=()=>{n&&g(!1)};return i?e.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col",children:[e.jsx(at,{publicLayout:!0}),e.jsx("main",{id:"main",className:"flex-1",children:t}),e.jsx(Mt,{})]}):e.jsxs("div",{className:"dashboard-layout",style:{backgroundColor:"var(--bg-primary)",display:"flex",flexDirection:n?"column":"row"},children:[n&&s&&e.jsx("div",{className:"fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm",onClick:r,style:{top:0}}),e.jsx("div",{className:`
                ${n?"fixed inset-y-0 left-0 z-50":"relative flex-shrink-0"}
                ${n&&!s?"-translate-x-full":"translate-x-0"}
                transition-transform duration-300 ease-in-out
            `,children:e.jsx(_t,{onClose:()=>g(!1),isMobile:n})}),e.jsxs("div",{className:"flex-1 flex flex-col min-w-0",style:{width:n?"100%":"calc(100% - var(--sidebar-width, 260px))",maxWidth:"100vw"},children:[e.jsx("div",{className:"sticky top-0 z-30 flex-shrink-0",style:{paddingTop:"env(safe-area-inset-top, 0px)"},children:e.jsx(at,{onMenuClick:()=>g(!s),showMenuButton:n})}),e.jsx("main",{className:"flex-1 overflow-y-auto overflow-x-hidden",style:{paddingBottom:"max(env(safe-area-inset-bottom, 16px), 16px)",WebkitOverflowScrolling:"touch",minHeight:0},children:e.jsxs("div",{className:"max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 w-full",children:[e.jsx(Ft,{}),t]})})]})]})}const Be=window.location.origin;async function X(t,i){try{const s=await fetch(`${Be}${t}`,{...i,headers:{"Content-Type":"application/json",...i==null?void 0:i.headers}});if(!s.ok){const n=await s.json().catch(()=>({error:s.statusText}));throw new Error(n.error||`HTTP ${s.status}: ${s.statusText}`)}return await s.json()}catch(s){return console.error(`Error fetching ${t}:`,s),{success:!1,error:s instanceof Error?s.message:"Unknown error"}}}async function Lt(){return X("/api/cloudflare/stream/live-inputs",{method:"POST"})}async function Pt(t){return X("/api/resend/send",{method:"POST",body:JSON.stringify(t)})}async function At(t){return X("/api/ai/workflows",{method:"POST",body:JSON.stringify(t)})}async function It(){return X("/api/ai/workflows")}async function $e(t){return X("/api/d1/query",{method:"POST",body:JSON.stringify({database:t.database,query:t.query,params:t.params||[]})})}async function ze(t,i){if(typeof t=="string"){const n=new URLSearchParams;return i&&n.set("prefix",i),X(`/api/storage/buckets/${t}/objects?${n}`)}const s=t,g=new URLSearchParams;s!=null&&s.bucket&&g.append("bucket",s.bucket),s!=null&&s.prefix&&g.append("prefix",s.prefix),s!=null&&s.limit&&g.append("limit",(s.limit||1e3).toString());try{const n=await fetch(`${Be}/api/r2/list?${g.toString()}`);if(!n.ok)return{success:!1,error:(await n.json().catch(()=>({error:n.statusText}))).error||`HTTP ${n.status}: ${n.statusText}`};const x=await n.json();if(x.success){if(Array.isArray(x.data))return{success:!0,data:x.data};if(Array.isArray(x.objects))return{success:!0,data:x.objects};if(Array.isArray(x.files))return{success:!0,data:x.files}}return console.error("Unexpected R2 list response format:",x),{success:!1,error:"Unexpected response format from server"}}catch(n){return console.error("Error fetching R2 objects:",n),{success:!1,error:n instanceof Error?n.message:"Unknown error"}}}async function Ue(){const t=await X("/api/storage/buckets");if(t.success)return t;const i=await X("/api/saas/r2/buckets");if(i.success){if(Array.isArray(i.data))return i.data.length>0&&typeof i.data[0]=="object"&&"name"in i.data[0]?{success:!0,data:i.data}:{success:!0,data:i.data.map(s=>({name:s,objectCount:0,totalSize:0}))};if(Array.isArray(i.buckets))return{success:!0,data:i.buckets.map(s=>({name:s,objectCount:0,totalSize:0}))}}return{success:!1,error:i.error||"Failed to parse bucket list"}}async function qt(t){return X("/api/saas/deploy/worker",{method:"POST",body:JSON.stringify(t)})}async function We(){try{const t=await fetch(`${Be}/api/cloudflare/workers`);if(t.ok){const i=await t.json();if(i.success&&i.data)return{success:!0,data:i.data}}}catch(t){console.warn("Cloudflare Workers API failed, trying SaaS API:",t)}return X("/api/saas/workers")}async function Rt(t){return X(`/api/saas/workers/${t}`,{method:"DELETE"})}async function Bt(){return X("/api/dashboard/stats")}async function Ot(){return X("/api/settings/profile")}async function $t(t){const i=new FormData;i.append("file",t.file),i.append("bucket",t.bucket),i.append("key",t.key),t.contentType&&i.append("contentType",t.contentType),t.optimizeWithCloudflareImages&&i.append("optimizeWithCloudflareImages","true");try{const s=await fetch(`${Be}/api/r2/upload`,{method:"POST",body:i});if(!s.ok){const n=await s.json().catch(()=>({error:s.statusText}));throw new Error(n.error||`HTTP ${s.status}: ${s.statusText}`)}return await s.json()}catch(s){return console.error("Error uploading to R2:",s),{success:!1,error:s instanceof Error?s.message:"Unknown error"}}}async function Ut(t){const s=await $e({database:"meaux-work-db",query:`
        INSERT INTO content_metadata (key, bucket, fileName, fileSize, contentType, uploadedAt, uploadedBy, tags, description, cloudflareImageId)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(key, bucket) DO UPDATE SET
            fileName = excluded.fileName,
            fileSize = excluded.fileSize,
            contentType = excluded.contentType,
            uploadedAt = excluded.uploadedAt,
            tags = excluded.tags,
            description = excluded.description,
            cloudflareImageId = excluded.cloudflareImageId
    `,params:[t.key,t.bucket,t.fileName,t.fileSize,t.contentType,t.uploadedAt,t.uploadedBy||"system",JSON.stringify(t.tags||[]),t.description||"",t.cloudflareImageId||""]});return s.success?{success:!0,data:t}:{success:!1,error:s.error||"Failed to save metadata"}}async function st(t){return X("/api/meauxauto/ingest",{method:"POST",body:JSON.stringify(t)})}async function Wt(t){return X("/api/meauxauto/train",{method:"POST",body:JSON.stringify(t)})}async function Yt(){return X("/api/meauxauto/stats")}async function Ht(){return X("/api/meauxauto/sources")}async function Gt(t){const i=new FormData;i.append("file",t.file),t.metadata&&Object.entries(t.metadata).forEach(([s,g])=>{i.append(`metadata[${s}]`,g)});try{const s=await fetch(`${Be}/api/cloudflare/images/upload`,{method:"POST",body:i});if(!s.ok){const n=await s.json().catch(()=>({error:s.statusText}));throw new Error(n.error||`HTTP ${s.status}: ${s.statusText}`)}return await s.json()}catch(s){return console.error("Error uploading to Cloudflare Images:",s),{success:!1,error:s instanceof Error?s.message:"Unknown error"}}}async function Vt(){return X("/api/calendar/events")}async function Jt(){return X("/api/wallet/balance")}async function Xt(){return X("/api/wallet/transactions")}async function Qt(t){return X("/api/settings/profile",{method:"PUT",body:JSON.stringify(t)})}async function Kt(t){return X("/api/analytics/query",{method:"POST",body:JSON.stringify(t)})}async function Ve(t,i){return X(`/api/storage/buckets/${t}/objects/${encodeURIComponent(i)}/public-url`)}async function Zt(t,i,s){const g=new FormData;return g.append("file",s),X(`/api/storage/buckets/${t}/objects/${encodeURIComponent(i)}`,{method:"PUT",body:g})}async function ea(t,i){return X(`/api/storage/buckets/${t}/objects/${encodeURIComponent(i)}`,{method:"DELETE"})}async function ta(){return X("/api/team/members")}async function aa(t){return X("/api/team/members",{method:"POST",body:JSON.stringify(t)})}async function sa(t,i){return X(`/api/team/members/${t}`,{method:"PUT",body:JSON.stringify(i)})}async function ra(t){return X(`/api/team/members/${t}`,{method:"DELETE"})}const Ke={deliveryUrl:"https://imagedelivery.net/g7wf09fCONpnidkRnR_5vw",variants:{thumbnail:"thumbnail",small:"small",medium:"medium",large:"large",public:"public"}};function Ae(t,i="public"){return`${Ke.deliveryUrl}/${t}/${Ke.variants[i]}`}async function ia(t=1,i=100){var s,g,n;try{const x=await fetch(`${Be}/api/cloudflare/images?page=${t}&per_page=${i}`);if(!x.ok)return{success:!1,error:(await x.json().catch(()=>({error:x.statusText}))).error||`HTTP ${x.status}: ${x.statusText}`};const r=await x.json();return r.success&&r.result?{success:!0,data:{images:r.result.images||[],pagination:{page:t,per_page:i,count:((s=r.result.images)==null?void 0:s.length)||0,total_count:((g=r.result_info)==null?void 0:g.count)||((n=r.result.images)==null?void 0:n.length)||0}}}:Array.isArray(r.images)?{success:!0,data:{images:r.images,pagination:{page:t,per_page:i,count:r.images.length,total_count:r.total||r.images.length}}}:{success:!1,error:"Unexpected response format"}}catch(x){return console.error("Error fetching Cloudflare Images:",x),{success:!1,error:x instanceof Error?x.message:"Unknown error"}}}async function rt(t){return X(`/api/cloudflare/images/${t}`,{method:"DELETE"})}function M({children:t,className:i="",title:s,action:g}){return e.jsxs("div",{className:`rounded-xl transition-all ${i}`,style:{backgroundColor:"var(--bg-secondary)",border:"1px solid var(--border)",boxShadow:"var(--shadow-sm)"},onMouseEnter:n=>{n.currentTarget.style.backgroundColor="var(--bg-elevated)",n.currentTarget.style.borderColor="var(--accent-soft)",n.currentTarget.style.transform="translateY(-2px)",n.currentTarget.style.boxShadow="var(--shadow-md)"},onMouseLeave:n=>{n.currentTarget.style.backgroundColor="var(--bg-secondary)",n.currentTarget.style.borderColor="var(--border)",n.currentTarget.style.transform="translateY(0)",n.currentTarget.style.boxShadow="var(--shadow-sm)"},children:[(s||g)&&e.jsxs("div",{className:"px-6 py-5 flex items-center justify-between rounded-t-xl",style:{borderBottom:"1px solid var(--border)"},children:[s&&e.jsx("h3",{className:"text-lg font-bold",style:{color:"var(--text-primary)"},children:s}),g&&e.jsx("div",{children:g})]}),e.jsx("div",{className:"p-6",children:t})]})}function pt({isOpen:t,onClose:i,url:s,type:g,title:n}){return a.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]),a.useEffect(()=>{const x=r=>{r.key==="Escape"&&i()};return t&&window.addEventListener("keydown",x),()=>{window.removeEventListener("keydown",x)}},[t,i]),t?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm",onClick:i,children:e.jsxs("div",{className:"relative w-full h-full max-w-7xl max-h-[95vh] m-4 bg-white rounded-xl shadow-2xl overflow-hidden",onClick:x=>x.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h3",{className:"text-lg font-bold",children:n||"Preview"}),e.jsx("span",{className:"px-2 py-1 bg-white/20 rounded text-xs font-medium uppercase",children:g})]}),e.jsx("button",{onClick:i,className:"w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/20 transition-colors","aria-label":"Close preview",children:e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsx("div",{className:"h-[calc(95vh-80px)] overflow-auto bg-gray-50",children:g==="html"?e.jsx("iframe",{src:s,className:"w-full h-full border-0",title:n||"HTML Preview",sandbox:"allow-same-origin allow-scripts allow-forms allow-popups allow-modals"}):g==="image"?e.jsx("div",{className:"flex items-center justify-center h-full p-4",children:e.jsx("img",{src:s,alt:n||"Image preview",className:"max-w-full max-h-full object-contain rounded-lg shadow-lg"})}):g==="video"?e.jsx("div",{className:"flex items-center justify-center h-full p-4",children:e.jsx("video",{src:s,controls:!0,className:"max-w-full max-h-full rounded-lg shadow-lg",children:"Your browser does not support the video tag."})}):e.jsx("div",{className:"flex items-center justify-center h-full p-4",children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-gray-600 mb-4",children:"Preview not available for this file type"}),e.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors",children:"Open in New Tab"})]})})})]})}):null}function na(){const[t,i]=a.useState(null),[s,g]=a.useState(!0),[n,x]=a.useState([]),[r,N]=a.useState(!0),[m,v]=a.useState(null),[b,k]=a.useState("");return a.useEffect(()=>{async function f(){const S=await Bt();S.success&&S.data&&i(S.data),g(!1)}f()},[]),a.useEffect(()=>{async function f(){N(!0);try{const S=await We(),o=S.success&&S.data?S.data:[],d=await ze({bucket:"meauxstack-components",prefix:"app-icons/",limit:100}),c=d.success&&d.data?d.data:[],h=o.map(C=>{const y=c.find(E=>E.key.toLowerCase().includes(C.name.toLowerCase())||E.key.toLowerCase().includes(C.id.toLowerCase()));return{name:C.name,iconUrl:y?`https://pub-9620c51e7d0540779d7f42106fee9743.r2.dev/meauxstack-components/${y.key}`:void 0,url:C.url,worker:C}});c.forEach(C=>{var E;const y=((E=C.key.split("/").pop())==null?void 0:E.replace(/\.(png|jpg|jpeg|svg|webp)$/i,""))||"";h.find(U=>U.name.toLowerCase()===y.toLowerCase())||h.push({name:y,iconUrl:`https://pub-9620c51e7d0540779d7f42106fee9743.r2.dev/meauxstack-components/${C.key}`})}),x(h)}catch(S){console.error("Error loading projects:",S)}finally{N(!1)}}f()},[]),s?e.jsx("div",{className:"text-center py-12",children:"Loading..."}):e.jsxs("div",{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold mb-2",style:{color:"var(--text-primary)"},children:"Dashboard Overview"}),e.jsx("p",{style:{color:"var(--text-secondary)"},children:"Welcome back! Here's what's happening today."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[e.jsx(M,{children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm mb-1",style:{color:"var(--text-secondary)"},children:"Projects"}),e.jsx("p",{className:"text-3xl font-bold",style:{color:"var(--text-primary)"},children:(t==null?void 0:t.projects)||0})]}),e.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center",style:{backgroundColor:"var(--accent-soft)"},children:e.jsx("span",{className:"text-2xl",children:"💼"})})]})}),e.jsx(M,{children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm mb-1",style:{color:"var(--text-secondary)"},children:"Tasks"}),e.jsx("p",{className:"text-3xl font-bold",style:{color:"var(--text-primary)"},children:(t==null?void 0:t.tasks)||0})]}),e.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center",style:{backgroundColor:"rgba(245, 158, 11, 0.1)"},children:e.jsx("span",{className:"text-2xl",children:"✓"})})]})}),e.jsx(M,{children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm mb-1",style:{color:"var(--text-secondary)"},children:"Team Members"}),e.jsx("p",{className:"text-3xl font-bold",style:{color:"var(--text-primary)"},children:(t==null?void 0:t.users)||0})]}),e.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center",style:{backgroundColor:"rgba(59, 130, 246, 0.1)"},children:e.jsx("span",{className:"text-2xl",children:"👥"})})]})}),e.jsx(M,{children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm mb-1",style:{color:"var(--text-secondary)"},children:"Assets"}),e.jsx("p",{className:"text-3xl font-bold",style:{color:"var(--text-primary)"},children:(t==null?void 0:t.assets)||0})]}),e.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center",style:{backgroundColor:"rgba(147, 51, 234, 0.1)"},children:e.jsx("span",{className:"text-2xl",children:"📁"})})]})})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8",children:[e.jsx(M,{title:"Quick Actions",children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("button",{className:"w-full btn btn-primary text-left",children:"Create New Project"}),e.jsx("button",{className:"w-full btn btn-secondary text-left",children:"Upload Content"}),e.jsx("button",{className:"w-full btn btn-secondary text-left",children:"Schedule Meeting"})]})}),e.jsx(M,{title:"Recent Activity",children:e.jsx("p",{className:"text-text-secondary",children:"No recent activity."})})]}),e.jsx(M,{title:"Projects (.dev Worker Builds)",children:r?e.jsx("div",{className:"text-center py-12",style:{color:"var(--text-secondary)"},children:"Loading projects..."}):n.length===0?e.jsx("div",{className:"text-center py-12",style:{color:"var(--text-secondary)"},children:"No projects found"}):e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4",children:n.map((f,S)=>e.jsxs("div",{onClick:async()=>{f.url?window.open(f.url,"_blank"):f.iconUrl&&(v(f.iconUrl),k(f.name))},className:"group relative rounded-xl border-2 overflow-hidden cursor-pointer transition-all aspect-square flex flex-col items-center justify-center p-4",style:{backgroundColor:"var(--bg-elevated)",borderColor:"var(--border)"},onMouseEnter:o=>{o.currentTarget.style.borderColor="var(--accent)",o.currentTarget.style.boxShadow="var(--shadow-lg)"},onMouseLeave:o=>{o.currentTarget.style.borderColor="var(--border)",o.currentTarget.style.boxShadow="none"},children:[f.iconUrl?e.jsx("img",{src:f.iconUrl,alt:f.name,className:"w-full h-full object-contain",onError:o=>{var c;const d=o.target;d.style.display="none",(c=d.nextElementSibling)==null||c.classList.remove("hidden")}}):null,e.jsx("div",{className:`${f.iconUrl?"hidden":""} text-6xl`,children:"🚀"}),e.jsxs("div",{className:"absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 transform translate-y-full group-hover:translate-y-0 transition-transform",children:[e.jsx("div",{className:"text-white text-xs font-semibold truncate text-center",children:f.name}),f.url&&e.jsx("div",{className:"text-white/80 text-xs mt-1 text-center",children:".dev"})]})]},S))})}),m&&e.jsx(pt,{isOpen:!!m,onClose:()=>{v(null),k("")},url:m,type:"image",title:b})]})}function oa(){const[t,i]=a.useState(!1),[s,g]=a.useState(null),[n,x]=a.useState("30d"),[r,N]=a.useState("");a.useEffect(()=>{m()},[n,r]);const m=async()=>{i(!0);try{const k={startDate:v(n),endDate:new Date().toISOString()};r&&(k.eventName=r);const f=await Kt(k);f.success&&f.data&&g(f.data)}catch(k){console.error("Error loading analytics:",k)}finally{i(!1)}},v=k=>{const f=new Date,S=k==="7d"?7:k==="30d"?30:k==="90d"?90:365;return new Date(f.getTime()-S*24*60*60*1e3).toISOString()},b=k=>k>=1e6?`${(k/1e6).toFixed(1)}M`:k>=1e3?`${(k/1e3).toFixed(1)}K`:k.toString();return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-8 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-text mb-2",children:"Analytics"}),e.jsx("p",{className:"text-text-secondary",children:"View all your analytics and metrics in one place."})]}),e.jsx("div",{className:"flex gap-2",children:e.jsxs("select",{value:n,onChange:k=>x(k.target.value),className:"input",children:[e.jsx("option",{value:"7d",children:"Last 7 days"}),e.jsx("option",{value:"30d",children:"Last 30 days"}),e.jsx("option",{value:"90d",children:"Last 90 days"}),e.jsx("option",{value:"all",children:"All time"})]})})]}),t?e.jsx("div",{className:"text-center py-12",children:e.jsx("p",{className:"text-text-secondary",children:"Loading analytics..."})}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[e.jsx(M,{children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-text-secondary mb-1",children:"Total Events"}),e.jsx("p",{className:"text-3xl font-bold text-text",children:s!=null&&s.totalEvents?b(s.totalEvents):"0"})]}),e.jsx("div",{className:"w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center",children:e.jsx("span",{className:"text-2xl",children:"📊"})})]})}),e.jsx(M,{children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-text-secondary mb-1",children:"Unique Users"}),e.jsx("p",{className:"text-3xl font-bold text-text",children:s!=null&&s.uniqueUsers?b(s.uniqueUsers):"0"})]}),e.jsx("div",{className:"w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center",children:e.jsx("span",{className:"text-2xl",children:"👥"})})]})}),e.jsx(M,{children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-text-secondary mb-1",children:"Event Types"}),e.jsx("p",{className:"text-3xl font-bold text-text",children:s!=null&&s.eventTypes?s.eventTypes:"0"})]}),e.jsx("div",{className:"w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center",children:e.jsx("span",{className:"text-2xl",children:"📈"})})]})}),e.jsx(M,{children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-text-secondary mb-1",children:"Avg. Daily"}),e.jsx("p",{className:"text-3xl font-bold text-text",children:s!=null&&s.avgDaily?b(s.avgDaily):"0"})]}),e.jsx("div",{className:"w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center",children:e.jsx("span",{className:"text-2xl",children:"📅"})})]})})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsx(M,{title:"Event Breakdown",children:s!=null&&s.events?e.jsx("div",{className:"space-y-3",children:Object.entries(s.events).map(([k,f])=>e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[e.jsx("span",{className:"font-medium text-text",children:k}),e.jsx("span",{className:"text-text-secondary font-semibold",children:b(f)})]},k))}):e.jsx("p",{className:"text-text-secondary",children:"No event data available for this period."})}),e.jsxs(M,{title:"Performance Metrics",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-sm text-text-secondary",children:"Data Collection"}),e.jsx("span",{className:"text-sm font-semibold text-text",children:"Active"})]}),e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-teal h-2 rounded-full",style:{width:"100%"}})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-sm text-text-secondary",children:"Analytics Engine"}),e.jsx("span",{className:"text-sm font-semibold text-text",children:"Connected"})]}),e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-green-500 h-2 rounded-full",style:{width:"100%"}})})]})]}),e.jsx("div",{className:"mt-6 p-4 bg-teal/5 rounded-lg border border-teal/20",children:e.jsxs("p",{className:"text-sm text-text-secondary",children:[e.jsx("strong",{children:"Analytics Engine"})," is configured and collecting data. Events are being ingested in real-time."]})})]})]})]})]})}function la(){const[t,i]=a.useState([]),[s,g]=a.useState([]),[n,x]=a.useState(!0),[r,N]=a.useState("websites"),[m,v]=a.useState("");a.useEffect(()=>{b()},[]),a.useEffect(()=>{k()},[t,r,m]);const b=async()=>{x(!0);try{const o=[],d=await We(),c=d.success&&d.data?d.data:[],h=await ze({bucket:"meauxstack-components",prefix:"app-icons/",limit:100}),C=h.success&&h.data?h.data:[];c.forEach((y,E)=>{const U=C.find(j=>j.key.toLowerCase().includes(y.name.toLowerCase()));let te;U&&(te=`https://pub-9620c51e7d0540779d7f42106fee9743.r2.dev/app-icons/${U.key.replace(/^meauxstack-components\//,"").replace(/^app-icons\//,"")}`);const T=y.name.includes("worker")||y.name.includes("api")||y.name.includes("automation")||y.name.includes("scheduled");o.push({id:y.id||`worker-${E}`,name:y.name,type:T?"automation":"website",route:y.url?new URL(y.url).pathname:void 0,icon:te,status:y.status==="active"?"live":"progress",description:`Cloudflare Worker • ${y.url||"No URL"}`,lastUpdated:y.created_at?f(y.created_at):void 0,url:y.url})}),o.unshift({id:"meauxbility-org",name:"Meauxbility org - Cloudflare Migration",type:"website",route:"meauxbility/*",icon:"✖️",status:"live",description:"Primary non-profit site • Route: meauxbility/*",lastUpdated:"2 days ago",url:"https://www.meauxbility.org"}),o.push({id:"southern-pets",name:"Southern Pets Animal Rescue",type:"website",route:"southernpetsanimalrescue.com/*",icon:"🐕",status:"progress",description:"Priority 1: Connect dashboard for improved functionality • Route: southernpetsanimalrescue.com/*",lastUpdated:"In progress",url:"https://southernpetsanimalrescue.com"},{id:"iautodidact",name:"iAutodidact.org / InnerAutodidact.com",type:"website",route:"iautodidact.org/*, innerautodidact.com/*",icon:"🎓",status:"progress",description:"Priority 2: Complete platform integration • Routes: iautodidact.org/*, innerautodidact.com/*",lastUpdated:"In progress",url:"https://innerautodidact.com"},{id:"fred-content-course",name:"Fred's Content Creation Course",type:"website",route:"fred-instantaccess/*",icon:"🎨",status:"progress",description:"Priority 1: Complete content creation course (Clay.global-style onboarding)",lastUpdated:"In progress",url:"https://fred-instantaccess.meauxbility.workers.dev"},{id:"inner-animal-media",name:"InnerAnimalMedia.com",type:"website",route:"inneranimalmedia.com/*",icon:"🐾",status:"progress",description:"Route • inneranimalmedia.com/*",lastUpdated:"5 days ago"},{id:"evergrow",name:"Evergrow Landscaping",type:"website",route:"evergrow-landscaping/*",icon:"🌱",status:"progress",description:"Route: evergrow-landscaping/*",lastUpdated:"4 days ago"}),i(o)}catch(o){console.error("Error loading projects:",o)}finally{x(!1)}},k=()=>{let o=t;if(r==="websites"?o=o.filter(d=>d.type==="website"):o=o.filter(d=>d.type==="automation"),m.trim()){const d=m.toLowerCase();o=o.filter(c=>{var h,C;return c.name.toLowerCase().includes(d)||((h=c.description)==null?void 0:h.toLowerCase().includes(d))||((C=c.route)==null?void 0:C.toLowerCase().includes(d))})}g(o)},f=o=>{if(typeof o=="string"){const d=new Date(o),h=new Date().getTime()-d.getTime(),C=Math.floor(h/(1e3*60*60*24));return C===0?"Today":C===1?"1 day ago":C<7?`${C} days ago`:C<30?`${Math.floor(C/7)} weeks ago`:`${Math.floor(C/30)} months ago`}return"Unknown"},S=o=>{o.url&&window.open(o.url,"_blank")};return e.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--bg-primary)",color:"var(--text-primary)"},children:[e.jsx("div",{className:"mb-8",children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-extrabold mb-2",style:{color:"var(--text-primary)"},children:"Projects"}),e.jsx("p",{className:"text-base",style:{color:"var(--text-secondary)"},children:"Workspace for sites, apps, and Cloudflare buildouts."})]}),e.jsxs("div",{className:"flex gap-4 items-center mt-4",children:[e.jsxs("div",{className:"relative",style:{maxWidth:"500px",width:"100%"},children:[e.jsx("span",{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-lg",style:{color:"var(--text-muted)"},children:"🔍"}),e.jsx("input",{type:"text",value:m,onChange:o=>v(o.target.value),placeholder:"Search projects...",className:"w-full pl-10 pr-4 py-2.5 rounded-lg text-sm transition-all",style:{background:"var(--bg-secondary)",border:"1px solid var(--border)",color:"var(--text-primary)"},onFocus:o=>{o.currentTarget.style.borderColor="var(--accent)",o.currentTarget.style.boxShadow="0 0 0 3px var(--accent-soft)"},onBlur:o=>{o.currentTarget.style.borderColor="var(--border)",o.currentTarget.style.boxShadow="none"}})]}),e.jsx("button",{className:"px-5 py-2.5 rounded-lg font-semibold text-sm border transition-all",style:{background:"transparent",color:"var(--text-secondary)",borderColor:"var(--border)"},onMouseEnter:o=>{o.currentTarget.style.background="var(--bg-hover)",o.currentTarget.style.color="var(--text-primary)"},onMouseLeave:o=>{o.currentTarget.style.background="transparent",o.currentTarget.style.color="var(--text-secondary)"},children:"⚙️ Configure view"}),e.jsx("button",{className:"px-5 py-2.5 rounded-lg font-semibold text-sm transition-all inline-flex items-center gap-2",style:{background:"var(--accent)",color:"var(--bg-primary)"},onMouseEnter:o=>{o.currentTarget.style.background="var(--accent-hover)",o.currentTarget.style.transform="translateY(-1px)",o.currentTarget.style.boxShadow="0 4px 12px var(--accent-glow)"},onMouseLeave:o=>{o.currentTarget.style.background="var(--accent)",o.currentTarget.style.transform="translateY(0)",o.currentTarget.style.boxShadow="none"},children:"+ New project"})]})]})}),e.jsxs("div",{className:"flex gap-4 mb-6",style:{borderBottom:"1px solid var(--border)"},children:[e.jsx("button",{onClick:()=>N("websites"),className:"px-5 py-3 font-medium transition-all border-b-2",style:{color:r==="websites"?"var(--text-primary)":"var(--text-secondary)",borderBottomColor:r==="websites"?"var(--accent)":"transparent"},onMouseEnter:o=>{r!=="websites"&&(o.currentTarget.style.color="var(--text-primary)")},onMouseLeave:o=>{r!=="websites"&&(o.currentTarget.style.color="var(--text-secondary)")},children:"Websites"}),e.jsx("button",{onClick:()=>N("automations"),className:"px-5 py-3 font-medium transition-all border-b-2",style:{color:r==="automations"?"var(--text-primary)":"var(--text-secondary)",borderBottomColor:r==="automations"?"var(--accent)":"transparent"},onMouseEnter:o=>{r!=="automations"&&(o.currentTarget.style.color="var(--text-primary)")},onMouseLeave:o=>{r!=="automations"&&(o.currentTarget.style.color="var(--text-secondary)")},children:"Automations"})]}),n?e.jsxs("div",{className:"text-center py-12",children:[e.jsx("div",{className:"inline-block animate-spin rounded-full h-8 w-8 border-b-2 mb-4",style:{borderColor:"var(--accent)"}}),e.jsx("p",{style:{color:"var(--text-secondary)"},children:"Loading projects..."})]}):s.length===0?e.jsxs("div",{className:"text-center py-12",children:[e.jsx("div",{className:"text-6xl mb-4",children:"🚀"}),e.jsxs("p",{style:{color:"var(--text-secondary)",fontSize:"1.125rem",marginBottom:"0.5rem"},children:["No ",r==="websites"?"websites":"automations"," found"]}),e.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.875rem"},children:m?"Try a different search query":"Create your first project to get started"})]}):e.jsx("div",{className:"grid gap-4",children:s.map(o=>{var d,c;return e.jsxs("div",{onClick:()=>S(o),className:"rounded-xl p-6 transition-all cursor-pointer",style:{background:"var(--bg-secondary)",border:"1px solid var(--border)"},onMouseEnter:h=>{h.currentTarget.style.background="var(--bg-elevated)",h.currentTarget.style.borderColor="var(--border-hover)",h.currentTarget.style.transform="translateY(-2px)",h.currentTarget.style.boxShadow="var(--shadow-md)"},onMouseLeave:h=>{h.currentTarget.style.background="var(--bg-secondary)",h.currentTarget.style.borderColor="var(--border)",h.currentTarget.style.transform="translateY(0)",h.currentTarget.style.boxShadow="none"},children:[e.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[e.jsx("div",{className:"w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden",style:{background:"var(--bg-elevated)",border:"1px solid var(--border)"},children:(d=o.icon)!=null&&d.startsWith("http")||(c=o.icon)!=null&&c.startsWith("https")?e.jsx("img",{src:o.icon,alt:o.name,className:"w-full h-full object-cover",style:{display:"block"},onError:h=>{const y=h.target.parentElement;y&&(y.innerHTML='<span style="font-size: 2rem;">🚀</span>')},onLoad:h=>{const C=h.target;C.style.display="block",C.style.opacity="1"}}):e.jsx("span",{style:{fontSize:"2rem"},children:o.icon||"🚀"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h3",{className:"text-lg font-bold mb-1",style:{color:"var(--text-primary)"},children:o.name}),e.jsx("p",{className:"text-sm",style:{color:"var(--text-muted)"},children:o.description||o.route})]}),e.jsx("div",{className:"text-xl",style:{color:"var(--text-muted)"},children:"→"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"px-3 py-1 rounded-xl text-xs font-semibold capitalize",style:{background:o.status==="live"?"var(--accent-soft)":"rgba(245, 158, 11, 0.2)",color:o.status==="live"?"var(--accent)":"var(--status-progress)"},children:o.status==="live"?"Live":"In progress"}),e.jsx("span",{className:"text-sm",style:{color:"var(--text-muted)"},children:o.lastUpdated||"Unknown"})]})]},o.id)})})]})}const Le={id:"sam",name:"Sam Primeaux",avatar:"👨‍💼"};function ca(){var I,ee,fe;const[t,i]=a.useState([{id:"ch_general",name:"general",type:"public",members:["*"],description:"General team discussion"},{id:"ch_dev",name:"dev",type:"public",members:["sam","connor"],description:"Development & code"},{id:"ch_content",name:"content",type:"public",members:["sam","fred"],description:"Content & media"},{id:"ch_projects",name:"projects",type:"public",members:["*"],description:"Project updates"}]),[s,g]=a.useState("ch_general"),[n,x]=a.useState([]),[r,N]=a.useState(""),[m,v]=a.useState([]),[b,k]=a.useState([]),[f,S]=a.useState(!0),[o,d]=a.useState(!1),[c,h]=a.useState(!1),[C,y]=a.useState(!1),[E,U]=a.useState(null),[te,T]=a.useState([]),[j,F]=a.useState(null),[B,q]=a.useState(new Map),[ae,se]=a.useState(!1),[_,Z]=a.useState(!1),[oe,W]=a.useState(!1),[re,G]=a.useState(!1),$=a.useRef(null),Ne=a.useRef(null),me=a.useRef(null),ne=a.useRef(new Map),Se=a.useRef(null);a.useEffect(()=>(le(),()=>{$.current&&$.current.close(),be()}),[]),a.useEffect(()=>{var p;(p=Ne.current)==null||p.scrollIntoView({behavior:"smooth"})},[n]),a.useEffect(()=>{ye(s)},[s]);const le=a.useCallback(()=>{try{const z=`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/api/communications/ws?user_id=${Le.id}&user_name=${encodeURIComponent(Le.name)}`,P=new WebSocket(z);P.onopen=()=>{console.log("✅ Communications WebSocket connected"),h(!0),S(!1)},P.onmessage=Q=>{try{const l=JSON.parse(Q.data);ve(l)}catch(l){console.error("WebSocket message error:",l)}},P.onerror=Q=>{console.error("WebSocket error:",Q),h(!1)},P.onclose=()=>{console.log("WebSocket disconnected, reconnecting..."),h(!1),setTimeout(le,3e3)},$.current=P}catch(p){console.error("WebSocket connection error:",p),S(!1)}},[]),ve=p=>{switch(p.type){case"connected":p.channels&&i(p.channels),p.presence&&v(p.presence);break;case"new_message":p.message.channel===s?x(z=>[...z,p.message]):i(z=>z.map(P=>P.id===p.message.channel?{...P,unread_count:(P.unread_count||0)+1}:P));break;case"channel_history":p.channel===s&&x(p.messages);break;case"typing_update":p.channel===s&&k(p.users.filter(z=>z!==Le.id));break;case"presence_update":v(z=>{const P=z.findIndex(Q=>Q.user_id===p.user.user_id);if(P>=0){const Q=[...z];return Q[P]=p.user,Q}return[...z,p.user]});break;case"call_invite":O(p);break;case"call_started":case"call_joined":ue(p);break;case"participant_joined":de(p);break;case"participant_left":Fe(p);break;case"call_signal":Ce(p);break;case"call_ended":Ee(p);break;case"screen_share_started":case"screen_share_stopped":W(p.type==="screen_share_started");break}},ye=async p=>{var z;i(P=>P.map(Q=>Q.id===p?{...Q,unread_count:0}:Q)),((z=$.current)==null?void 0:z.readyState)===WebSocket.OPEN&&$.current.send(JSON.stringify({type:"join_channel",channel:p}))},ce=async()=>{var p;if(!(!r.trim()||o)){d(!0);try{((p=$.current)==null?void 0:p.readyState)===WebSocket.OPEN&&$.current.send(JSON.stringify({type:"message",channel:s,message:r})),N(""),je()}catch(z){console.error("Send message error:",z)}finally{d(!1)}}},ge=p=>{var z;N(p.target.value),((z=$.current)==null?void 0:z.readyState)===WebSocket.OPEN&&$.current.send(JSON.stringify({type:"typing_start",channel:s})),Se.current&&clearTimeout(Se.current),Se.current=setTimeout(je,3e3)},je=()=>{var p;((p=$.current)==null?void 0:p.readyState)===WebSocket.OPEN&&$.current.send(JSON.stringify({type:"typing_stop",channel:s}))},u=async p=>{var z;try{const P=await navigator.mediaDevices.getUserMedia({video:p==="video",audio:!0});F(P),me.current&&(me.current.srcObject=P),((z=$.current)==null?void 0:z.readyState)===WebSocket.OPEN&&$.current.send(JSON.stringify({type:"start_call",call_type:p,channel:s})),y(!0),G(!0)}catch(P){console.error("Failed to start call:",P),alert("Could not access camera/microphone. Please check permissions.")}},O=p=>{confirm(`${p.from} is calling. Accept?`)&&Y(p.call.id)},Y=async p=>{var z;try{const P=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});F(P),me.current&&(me.current.srcObject=P),((z=$.current)==null?void 0:z.readyState)===WebSocket.OPEN&&$.current.send(JSON.stringify({type:"join_call",call_id:p})),y(!0),G(!0)}catch(P){console.error("Failed to join call:",P)}},ue=async p=>{if(U(p.call),T(p.call.participants),p.existing_participants)for(const z of p.existing_participants)await Me(z,!0,p.turn_credentials)},de=async p=>{T(z=>[...z,p.user_id])},Fe=p=>{T(P=>P.filter(Q=>Q!==p.user_id));const z=ne.current.get(p.user_id);z&&(z.close(),ne.current.delete(p.user_id)),q(P=>{const Q=new Map(P);return Q.delete(p.user_id),Q})},Me=async(p,z,P)=>{var D;const Q={iceServers:(P==null?void 0:P.iceServers)||[{urls:"stun:stun.l.google.com:19302"}]},l=new RTCPeerConnection(Q);if(ne.current.set(p,l),j&&j.getTracks().forEach(L=>{l.addTrack(L,j)}),l.ontrack=L=>{q(R=>{const V=new Map(R);return V.set(p,L.streams[0]),V})},l.onicecandidate=L=>{var R;L.candidate&&((R=$.current)==null?void 0:R.readyState)===WebSocket.OPEN&&$.current.send(JSON.stringify({type:"call_signal",call_id:E==null?void 0:E.id,target_user:p,signal_type:"ice-candidate",signal_data:L.candidate}))},z){const L=await l.createOffer();await l.setLocalDescription(L),((D=$.current)==null?void 0:D.readyState)===WebSocket.OPEN&&$.current.send(JSON.stringify({type:"call_signal",call_id:E==null?void 0:E.id,target_user:p,signal_type:"offer",signal_data:L}))}return l},Ce=async p=>{var P;let z=ne.current.get(p.from);if(p.signal_type==="offer"){z||(z=await Me(p.from,!1,null)),await z.setRemoteDescription(new RTCSessionDescription(p.signal_data));const Q=await z.createAnswer();await z.setLocalDescription(Q),((P=$.current)==null?void 0:P.readyState)===WebSocket.OPEN&&$.current.send(JSON.stringify({type:"call_signal",call_id:p.call_id,target_user:p.from,signal_type:"answer",signal_data:Q}))}else p.signal_type==="answer"&&z?await z.setRemoteDescription(new RTCSessionDescription(p.signal_data)):p.signal_type==="ice-candidate"&&z&&await z.addIceCandidate(new RTCIceCandidate(p.signal_data))},Ee=p=>{be(),alert(`Call ended: ${p.reason}`)},be=()=>{var p;j&&(j.getTracks().forEach(z=>z.stop()),F(null)),ne.current.forEach(z=>z.close()),ne.current.clear(),((p=$.current)==null?void 0:p.readyState)===WebSocket.OPEN&&E&&$.current.send(JSON.stringify({type:"leave_call",call_id:E.id})),y(!1),U(null),T([]),q(new Map),G(!1)},pe=()=>{j&&(j.getAudioTracks().forEach(p=>{p.enabled=!p.enabled}),se(!ae))},Te=()=>{j&&(j.getVideoTracks().forEach(p=>{p.enabled=!p.enabled}),Z(!_))},Oe=async()=>{var p;try{const P=(await navigator.mediaDevices.getDisplayMedia({video:!0})).getVideoTracks()[0];ne.current.forEach(Q=>{const l=Q.getSenders().find(D=>{var L;return((L=D.track)==null?void 0:L.kind)==="video"});l&&l.replaceTrack(P)}),((p=$.current)==null?void 0:p.readyState)===WebSocket.OPEN&&$.current.send(JSON.stringify({type:"screen_share_start",call_id:E==null?void 0:E.id})),W(!0),P.onended=()=>{qe()}}catch(z){console.error("Screen share error:",z)}},qe=()=>{var p;if(j){const z=j.getVideoTracks()[0];ne.current.forEach(P=>{const Q=P.getSenders().find(l=>{var D;return((D=l.track)==null?void 0:D.kind)==="video"});Q&&z&&Q.replaceTrack(z)})}((p=$.current)==null?void 0:p.readyState)===WebSocket.OPEN&&$.current.send(JSON.stringify({type:"screen_share_stop",call_id:E==null?void 0:E.id})),W(!1)},Re=p=>new Date(p).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),w=p=>{switch(p){case"online":return"bg-green-500";case"away":return"bg-yellow-500";case"busy":return"bg-red-500";default:return"bg-gray-400"}};return e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsxs("div",{className:"mb-6 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"text-3xl font-bold text-text mb-1 flex items-center gap-3",children:["💬 Communications",e.jsx("span",{className:`inline-block w-3 h-3 rounded-full ${c?"bg-green-500":"bg-red-500"}`})]}),e.jsx("p",{className:"text-text-secondary",children:"Team chat, video calls, and real-time collaboration"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>u("audio"),className:"px-4 py-2 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-all flex items-center gap-2",disabled:!c,children:"📞 Audio Call"}),e.jsx("button",{onClick:()=>u("video"),className:"px-4 py-2 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-all flex items-center gap-2",disabled:!c,children:"📹 Video Call"})]})]}),e.jsxs("div",{className:"flex-1 grid grid-cols-12 gap-6 min-h-0",children:[e.jsx("div",{className:"col-span-3 flex flex-col",children:e.jsxs(M,{className:"flex-1 overflow-hidden flex flex-col",children:[e.jsx("h3",{className:"text-lg font-bold text-text mb-4",children:"Channels"}),e.jsx("div",{className:"flex-1 overflow-y-auto space-y-1",children:t.map(p=>e.jsxs("button",{onClick:()=>g(p.id),className:`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between ${s===p.id?"bg-teal-600 text-white":"bg-slate-700/50 text-text-secondary hover:bg-slate-700"}`,children:[e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-lg",children:p.type==="dm"?"👤":"#"}),e.jsx("span",{className:"font-medium",children:p.name})]}),p.unread_count&&p.unread_count>0&&e.jsx("span",{className:"bg-red-500 text-white text-xs px-2 py-0.5 rounded-full",children:p.unread_count})]},p.id))}),e.jsxs("div",{className:"border-t border-slate-700 pt-4 mt-4",children:[e.jsx("h4",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Team"}),e.jsx("div",{className:"space-y-2",children:m.map(p=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"relative",children:[e.jsx("span",{className:"text-xl",children:"👤"}),e.jsx("span",{className:`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-slate-800 ${w(p.status)}`})]}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"text-text text-sm font-medium truncate",children:p.user_name}),e.jsx("div",{className:"text-text-secondary text-xs capitalize",children:p.in_call?"📞 In call":p.status})]})]},p.user_id))})]})]})}),e.jsx("div",{className:"col-span-9 flex flex-col",children:e.jsxs(M,{className:"flex-1 overflow-hidden flex flex-col",children:[e.jsx("div",{className:"flex items-center justify-between pb-4 border-b border-slate-700",children:e.jsxs("div",{children:[e.jsxs("h3",{className:"text-xl font-bold text-text",children:["#",(I=t.find(p=>p.id===s))==null?void 0:I.name]}),e.jsx("p",{className:"text-text-secondary text-sm",children:(ee=t.find(p=>p.id===s))==null?void 0:ee.description})]})}),e.jsxs("div",{className:"flex-1 overflow-y-auto py-4 space-y-4 min-h-0",children:[f?e.jsx("div",{className:"text-center text-text-secondary py-8",children:"Loading messages..."}):n.length===0?e.jsx("div",{className:"text-center text-text-secondary py-8",children:"No messages yet. Start the conversation!"}):n.map(p=>e.jsxs("div",{className:`flex gap-3 ${p.user_id===Le.id?"justify-end":""}`,children:[p.user_id!==Le.id&&e.jsx("div",{className:"w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center text-lg flex-shrink-0",children:"👤"}),e.jsxs("div",{className:`max-w-[70%] ${p.user_id===Le.id?"order-first":""}`,children:[p.user_id!==Le.id&&e.jsxs("div",{className:"text-text font-semibold text-sm mb-1 flex items-center gap-2",children:[p.user_name,e.jsx("span",{className:"text-text-secondary text-xs font-normal",children:Re(p.timestamp)})]}),e.jsx("div",{className:`px-4 py-3 rounded-2xl ${p.user_id===Le.id?"bg-teal-600 text-white rounded-br-md":"bg-slate-700 text-text rounded-bl-md"}`,children:p.content}),p.user_id===Le.id&&e.jsx("div",{className:"text-text-secondary text-xs text-right mt-1",children:Re(p.timestamp)})]})]},p.id)),e.jsx("div",{ref:Ne})]}),b.length>0&&e.jsxs("div",{className:"text-text-secondary text-sm py-2",children:[b.join(", ")," ",b.length===1?"is":"are"," typing..."]}),e.jsx("div",{className:"pt-4 border-t border-slate-700",children:e.jsxs("div",{className:"flex gap-3",children:[e.jsx("input",{type:"text",value:r,onChange:ge,onKeyPress:p=>{p.key==="Enter"&&!p.shiftKey&&(p.preventDefault(),ce())},placeholder:`Message #${(fe=t.find(p=>p.id===s))==null?void 0:fe.name}`,className:"flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-text placeholder-text-secondary focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20",disabled:!c}),e.jsx("button",{onClick:ce,disabled:!r.trim()||o||!c,className:"px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all",children:o?"...":"Send"})]})})]})})]}),re&&e.jsx("div",{className:"fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 max-w-4xl w-full",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-white",children:(E==null?void 0:E.type)==="video"?"📹 Video Call":"📞 Audio Call"}),e.jsx("button",{onClick:be,className:"w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-all",children:"✕"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[e.jsxs("div",{className:"relative bg-slate-800 rounded-xl overflow-hidden aspect-video",children:[e.jsx("video",{ref:me,autoPlay:!0,muted:!0,playsInline:!0,className:`w-full h-full object-cover ${_?"hidden":""}`}),_&&e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("div",{className:"text-6xl",children:"👤"})}),e.jsxs("div",{className:"absolute bottom-3 left-3 bg-black/50 px-3 py-1 rounded-lg text-white text-sm",children:["You ",ae&&"🔇"]})]}),Array.from(B.entries()).map(([p,z])=>e.jsxs("div",{className:"relative bg-slate-800 rounded-xl overflow-hidden aspect-video",children:[e.jsx("video",{autoPlay:!0,playsInline:!0,ref:P=>{P&&(P.srcObject=z)},className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute bottom-3 left-3 bg-black/50 px-3 py-1 rounded-lg text-white text-sm",children:p})]},p))]}),e.jsxs("div",{className:"flex justify-center gap-4",children:[e.jsx("button",{onClick:pe,className:`w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all ${ae?"bg-red-600 text-white":"bg-slate-700 text-white hover:bg-slate-600"}`,children:ae?"🔇":"🎤"}),e.jsx("button",{onClick:Te,className:`w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all ${_?"bg-red-600 text-white":"bg-slate-700 text-white hover:bg-slate-600"}`,children:_?"📵":"📹"}),e.jsx("button",{onClick:oe?qe:Oe,className:`w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all ${oe?"bg-teal-600 text-white":"bg-slate-700 text-white hover:bg-slate-600"}`,children:"🖥️"}),e.jsx("button",{onClick:be,className:"w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl hover:bg-red-700 transition-all",children:"📞"})]})]})})]})}function da(){var Q;const[t,i]=a.useState("gallery"),[s,g]=a.useState("grid"),[n,x]=a.useState([]),[r,N]=a.useState("meauxbilityorgfinal"),[m,v]=a.useState(""),[b,k]=a.useState([]),[f,S]=a.useState(!1),[o,d]=a.useState({}),[c,h]=a.useState([]),[C,y]=a.useState(!0),[E,U]=a.useState(!0),[te,T]=a.useState([]),[j,F]=a.useState(""),[B,q]=a.useState(!1),[ae,se]=a.useState([]),[_,Z]=a.useState(""),[oe,W]=a.useState(!1),[re,G]=a.useState(null),[$,Ne]=a.useState("all"),[me,ne]=a.useState(null),[Se,le]=a.useState("other"),[ve,ye]=a.useState(!1),[ce,ge]=a.useState(null),[je,u]=a.useState([]),[O,Y]=a.useState(!1),[ue,de]=a.useState(!1),Fe=a.useRef(null),Me=a.useRef(null);a.useEffect(()=>{Ce()},[]),a.useEffect(()=>{r&&t==="browser"&&Ee(),r&&t==="gallery"&&be()},[r,j,_,t,$]);const Ce=async()=>{const[l,D,L]=await Promise.all([Ue(),Yt(),Ht()]);if(l.success&&l.data){const R=l.data.map(V=>typeof V=="string"?V:V.name);x(R),R.length>0&&!R.includes(r)&&N(R[0])}D.success&&D.data&&ge(D.data),L.success&&L.data&&u(L.data)},Ee=async()=>{q(!0);try{const l=await ze({bucket:r,prefix:j||void 0,limit:1e3});l.success&&l.data?T(l.data):(console.error("Failed to load objects:",l.error),alert(`Failed to load files: ${l.error||"Unknown error"}`))}catch(l){console.error("Error loading R2 objects:",l),alert(`Error loading files: ${l instanceof Error?l.message:"Unknown error"}`)}finally{q(!1)}},be=async()=>{W(!0);try{const l=await ze({bucket:r,prefix:_||void 0,limit:1e3});if(console.log("Gallery load result:",l),l.success&&l.data){let D=l.data;$!=="all"&&(D=D.filter(L=>pe(L.key)===$)),se(D)}else{console.error("Failed to load gallery:",l);const D=l.error||"Unknown error";console.error("Error details:",D),alert(`Failed to load gallery: ${D}

Bucket: ${r}
Prefix: ${_||"none"}`)}}catch(l){console.error("Error loading gallery:",l),alert(`Error loading gallery: ${l instanceof Error?l.message:"Unknown error"}`)}finally{W(!1)}},pe=l=>{var L;const D=((L=l.split(".").pop())==null?void 0:L.toLowerCase())||"";return["jpg","jpeg","png","gif","webp","svg","avif"].includes(D)?"image":["mp4","webm","mov","avi","mkv"].includes(D)?"video":["html","htm"].includes(D)?"html":["glb","gltf"].includes(D)?"glb":["js","ts","jsx","tsx","json"].includes(D)?"app":["pdf","doc","docx","txt","md"].includes(D)?"document":"other"},Te=l=>{switch(pe(l)){case"image":return"🖼️";case"video":return"🎥";case"html":return"🌐";case"glb":return"🎨";case"app":return"⚙️";case"document":return"📄";default:return"📁"}},Oe=l=>pe(l.key)==="image"?`https://pub-ede6590ac0d2fb7daf155b35653457b2.r2.dev/${r}/${l.key}`:"",qe=l=>{if(!l)return;const D=Array.from(l);k(L=>[...L,...D])},Re=l=>{l.preventDefault(),l.stopPropagation(),qe(l.dataTransfer.files)},w=l=>{l.preventDefault(),l.stopPropagation()},I=l=>{k(D=>D.filter((L,R)=>R!==l))},ee=async()=>{if(b.length===0)return;S(!0),h([]);const l=[];for(let D=0;D<b.length;D++){const L=b[D],R=`${m?m+"/":""}${L.name}`;d(V=>({...V,[L.name]:0}));try{const V=await $t({bucket:r,key:R,file:L,contentType:L.type,optimizeWithCloudflareImages:C&&L.type.startsWith("image/")});if(V.success&&V.data){if(l.push(`✅ ${L.name} uploaded to ${R}`),E&&await Ut({key:R,bucket:r,fileName:L.name,fileSize:L.size,contentType:L.type,uploadedAt:new Date().toISOString(),cloudflareImageId:V.data.cloudflareImageId}),L.type.includes("pdf")||L.type.includes("text")||L.type.includes("document"))try{await st({source:"r2",bucket:r,key:R}),l.push(`  → AutoRAG ingestion queued for ${L.name}`)}catch(De){console.error("AutoRAG ingestion error:",De)}}else l.push(`❌ ${L.name}: ${V.error||"Upload failed"}`)}catch(V){l.push(`❌ ${L.name}: ${V instanceof Error?V.message:"Upload failed"}`)}d(V=>({...V,[L.name]:100}))}h(l),S(!1),k([]),t==="gallery"?be():t==="browser"&&Ee()},fe=async()=>{Y(!0);try{const l=await Wt({modelVersion:"v2.4.1"});l.success?(alert("AutoRAG training started! Check training history for progress."),Ce()):alert(`Training failed: ${l.error}`)}catch{alert("Error starting training")}finally{Y(!1)}},p=async(l,D="")=>{var L;de(!0);try{const R=await st({source:"r2",bucket:l,sourcePath:D});R.success?(alert(`Ingestion started! Job ID: ${(L=R.data)==null?void 0:L.jobId}`),Ce()):alert(`Ingestion failed: ${R.error}`)}catch{alert("Error starting ingestion")}finally{de(!1)}},z=l=>{if(l===0)return"0 B";const D=1024,L=["B","KB","MB","GB"],R=Math.floor(Math.log(l)/Math.log(D));return Math.round(l/Math.pow(D,R)*100)/100+" "+L[R]},P=()=>{const[l,D]=a.useState([]),[L,R]=a.useState([]),[V,De]=a.useState({}),[xe,ke]=a.useState(!0),[Pe,Ze]=a.useState(null);a.useEffect(()=>{xt()},[]);const xt=async()=>{ke(!0);try{const ie=await Ue();ie.success&&ie.data&&D(ie.data);const K=await We();K.success&&K.data&&R(K.data);const we=await ze("meauxstack-components","app-icons/");if(we.success&&we.data){const he={};we.data.forEach(_e=>{const Ye=_e.key.replace("app-icons/","").replace(/\.(png|jpg|jpeg|svg|webp)$/i,"").toLowerCase(),He=`https://pub-9620c51e7d0540779d7f42106fee9743.r2.dev/${_e.key}`;he[Ye]=He}),De(he)}}catch(ie){console.error("Error loading buckets/workers:",ie)}finally{ke(!1)}},ht=ie=>{const K=ie.toLowerCase();for(const[he,_e]of Object.entries(V))if(K.includes(he)||he.includes(K))return _e;const we=L.find(he=>he.name.toLowerCase().includes(K)||K.includes(he.name.toLowerCase()));if(we){const he=we.name.toLowerCase().replace(/[^a-z0-9]/g,"");if(V[he])return V[he]}return K.includes("photo")||K.includes("image")?"📷":K.includes("video")||K.includes("film")?"🎬":K.includes("3d")||K.includes("model")?"🎨":K.includes("doc")||K.includes("file")?"📄":K.includes("component")||K.includes("app")?"⚙️":"📦"},et=ie=>{const K=ie.toLowerCase(),we=L.find(he=>he.name.toLowerCase().includes(K)||K.includes(he.name.toLowerCase()));return(we==null?void 0:we.url)||null},ut=ie=>{N(ie.name),i("browser")},gt=ie=>{const K=et(ie.name);K?window.open(K,"_blank"):window.location.href="/dashboard/deployments"};return xe?e.jsx(M,{title:"All R2 Buckets & Projects",children:e.jsx("div",{className:"text-center py-8 text-gray-600",children:"Loading buckets..."})}):e.jsx(M,{title:"All R2 Buckets & Projects",children:e.jsxs("div",{className:"mb-6",children:[e.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"Browse all R2 buckets and worker projects. Hover over any icon to view or deploy."}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4",children:l.map(ie=>{const K=ht(ie.name),we=et(ie.name),he=Pe===ie.name;return e.jsxs("div",{className:"group relative bg-white rounded-xl border-2 border-gray-200 overflow-hidden cursor-pointer hover:border-teal-500 hover:shadow-lg transition-all aspect-square",onMouseEnter:()=>Ze(ie.name),onMouseLeave:()=>Ze(null),children:[e.jsxs("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-50",children:[K.startsWith("http")?e.jsx("img",{src:K,alt:ie.name,className:"w-full h-full object-cover",onError:_e=>{const Ye=_e.target;Ye.style.display="none";const He=Ye.nextElementSibling;He&&(He.style.display="flex")}}):null,e.jsx("div",{className:`${K.startsWith("http")?"hidden":"flex"} items-center justify-center text-6xl`,children:K})]}),he&&e.jsxs("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3 p-4 z-10",children:[e.jsx("button",{onClick:_e=>{_e.stopPropagation(),ut(ie)},className:"w-full px-4 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors",children:"👁️ View"}),e.jsx("button",{onClick:_e=>{_e.stopPropagation(),gt(ie)},className:"w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors",children:"⚙️ Dev"})]}),e.jsxs("div",{className:"absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 transform translate-y-full group-hover:translate-y-0 transition-transform",children:[e.jsx("div",{className:"text-white text-xs font-semibold truncate text-center",children:ie.name}),we&&e.jsx("div",{className:"text-white/80 text-xs mt-1 text-center",children:".dev"})]})]},ie.name)})})]})})};return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Content Manager"}),e.jsx("p",{className:"text-gray-600",children:"Upload, organize, and train AI models on your R2 content library"})]}),e.jsx("div",{className:"border-b-2 border-gray-200 mb-6",children:e.jsx("nav",{className:"flex gap-1 overflow-x-auto",children:["upload","gallery","browser","autorag"].map(l=>e.jsx("button",{onClick:()=>i(l),className:`px-6 py-3 font-semibold text-sm transition-colors border-b-2 whitespace-nowrap ${t===l?"border-teal-600 text-teal-600":"border-transparent text-gray-600 hover:text-gray-900"}`,children:l==="upload"?"Upload Files":l==="gallery"?"Gallery":l==="browser"?"File Browser":"AutoRAG Training"},l))})}),t==="gallery"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx(P,{}),e.jsx(M,{children:e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 flex-1 w-full sm:w-auto",children:[e.jsxs("div",{className:"flex-1 sm:flex-initial",children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Bucket"}),e.jsx("select",{value:r,onChange:l=>N(l.target.value),className:"input",children:n.map(l=>e.jsx("option",{value:l,children:l},l))})]}),e.jsxs("div",{className:"flex-1 sm:flex-initial",children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Path"}),e.jsx("input",{type:"text",value:_,onChange:l=>Z(l.target.value),className:"input",placeholder:"content/ or leave empty"})]}),e.jsxs("div",{className:"flex-1 sm:flex-initial",children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Type"}),e.jsxs("select",{value:$,onChange:l=>Ne(l.target.value),className:"input",children:[e.jsx("option",{value:"all",children:"All Types"}),e.jsx("option",{value:"image",children:"Images"}),e.jsx("option",{value:"video",children:"Videos"}),e.jsx("option",{value:"html",children:"HTML/Web"}),e.jsx("option",{value:"app",children:"Apps/Builds"}),e.jsx("option",{value:"glb",children:"3D Models"}),e.jsx("option",{value:"document",children:"Documents"})]})]})]}),e.jsxs("div",{className:"flex gap-2 items-end",children:[e.jsx("button",{onClick:be,disabled:oe,className:"btn btn-primary",children:oe?"Loading...":"Refresh"}),e.jsxs("div",{className:"flex gap-1 border-2 border-gray-200 rounded-lg p-1",children:[e.jsx("button",{onClick:()=>g("grid"),className:`p-2 rounded ${s==="grid"?"bg-teal-100 text-teal-700":"text-gray-600 hover:bg-gray-100"}`,children:e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})})}),e.jsx("button",{onClick:()=>g("list"),className:`p-2 rounded ${s==="list"?"bg-teal-100 text-teal-700":"text-gray-600 hover:bg-gray-100"}`,children:e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]})]})]})}),oe?e.jsx("div",{className:"text-center py-12 text-gray-600",children:"Loading gallery..."}):ae.length===0?e.jsx(M,{children:e.jsx("div",{className:"text-center py-12 text-gray-600",children:"No files found in this location"})}):s==="grid"?e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4",children:ae.map((l,D)=>{const L=pe(l.key),R=Oe(l),V=L==="image",De=async()=>{const xe=pe(l.key);if(xe==="html"||xe==="image"||xe==="video"){ye(!0);try{const ke=await Ve(r,l.key);if(ke.success&&ke.data)ne(ke.data.url),le(xe==="html"?"html":xe==="image"?"image":xe==="video"?"video":"other");else{const Pe=`https://pub-ede6590ac0d2fb7daf155b35653457b2.r2.dev/${r}/${l.key}`;ne(Pe),le(xe==="html"?"html":xe==="image"?"image":xe==="video"?"video":"other")}}catch(ke){console.error("Error getting preview URL:",ke);const Pe=`https://pub-ede6590ac0d2fb7daf155b35653457b2.r2.dev/${r}/${l.key}`;ne(Pe),le(xe==="html"?"html":xe==="image"?"image":xe==="video"?"video":"other")}finally{ye(!1)}}else G(l)};return e.jsxs("div",{onClick:De,className:"group relative bg-white rounded-xl border-2 border-gray-200 overflow-hidden cursor-pointer hover:border-teal-500 hover:shadow-lg transition-all aspect-square",children:[e.jsxs("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-50",children:[V&&R?e.jsx("img",{src:R,alt:l.key,className:"w-full h-full object-cover",loading:"lazy",onError:xe=>{var Pe;const ke=xe.target;ke.style.display="none",(Pe=ke.nextElementSibling)==null||Pe.classList.remove("hidden")}}):e.jsx("div",{className:"text-6xl",children:Te(l.key)}),!V&&e.jsx("div",{className:"hidden text-6xl",children:Te(l.key)})]}),e.jsxs("div",{className:"absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 transform translate-y-full group-hover:translate-y-0 transition-transform",children:[e.jsx("div",{className:"text-white text-xs font-semibold truncate",children:l.key.split("/").pop()}),e.jsx("div",{className:"text-white/80 text-xs mt-1",children:z(l.size)})]}),e.jsx("div",{className:"absolute top-2 right-2",children:e.jsx("span",{className:"px-2 py-1 bg-black/50 text-white text-xs rounded-full backdrop-blur-sm",children:L})})]},D)})}):e.jsx(M,{children:e.jsx("div",{className:"space-y-2",children:ae.map((l,D)=>{const L=async()=>{const R=pe(l.key);if(R==="html"||R==="image"||R==="video"){ye(!0);try{const V=await Ve(r,l.key);if(V.success&&V.data)ne(V.data.url),le(R==="html"?"html":R==="image"?"image":R==="video"?"video":"other");else{const De=`https://pub-ede6590ac0d2fb7daf155b35653457b2.r2.dev/${r}/${l.key}`;ne(De),le(R==="html"?"html":R==="image"?"image":R==="video"?"video":"other")}}catch(V){console.error("Error getting preview URL:",V);const De=`https://pub-ede6590ac0d2fb7daf155b35653457b2.r2.dev/${r}/${l.key}`;ne(De),le(R==="html"?"html":R==="image"?"image":R==="video"?"video":"other")}finally{ye(!1)}}else G(l)};return e.jsxs("div",{onClick:L,className:"flex items-center gap-4 p-4 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-teal-500 cursor-pointer transition-all",children:[e.jsx("div",{className:"w-16 h-16 flex-shrink-0 bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center text-3xl",children:Te(l.key)}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"font-semibold text-gray-900 truncate",children:l.key}),e.jsxs("div",{className:"text-sm text-gray-600 mt-1",children:[z(l.size)," • ",pe(l.key)," • ",new Date(l.uploaded).toLocaleDateString()]})]}),e.jsx("div",{className:"flex-shrink-0",children:e.jsx("span",{className:"px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-semibold",children:pe(l.key)})})]},D)})})}),me&&e.jsx(pt,{isOpen:!!me,onClose:()=>ne(null),url:me,type:Se,title:me.split("/").pop()||"Preview"}),re&&e.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",onClick:()=>G(null),children:e.jsxs("div",{className:"bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto",onClick:l=>l.stopPropagation(),children:[e.jsxs("div",{className:"p-6 border-b-2 border-gray-200 flex items-center justify-between",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-900",children:re.key}),e.jsx("button",{onClick:()=>G(null),className:"text-gray-500 hover:text-gray-900",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsx("div",{className:"p-6",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 mb-4",children:"File Details"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"Size:"}),e.jsx("span",{className:"font-medium text-gray-900",children:z(re.size)})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"Type:"}),e.jsx("span",{className:"font-medium text-gray-900",children:pe(re.key)})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"Uploaded:"}),e.jsx("span",{className:"font-medium text-gray-900",children:new Date(re.uploaded).toLocaleString()})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"Bucket:"}),e.jsx("span",{className:"font-medium text-gray-900",children:r})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 mb-4",children:"Actions"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{className:"btn btn-primary w-full",children:"View/Download"}),e.jsx("button",{onClick:()=>p(r,re.key),className:"btn btn-secondary w-full",children:"Train AutoRAG"})]})]})]})})]})})]}),t==="upload"&&e.jsx("div",{className:"space-y-6",children:e.jsx(M,{title:"Upload Files to R2",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Target Bucket"}),e.jsx("select",{value:r,onChange:l=>N(l.target.value),className:"input",children:n.map(l=>e.jsx("option",{value:l,children:l},l))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Upload Path (optional)"}),e.jsx("input",{type:"text",value:m,onChange:l=>v(l.target.value),className:"input",placeholder:"content/documents/ or leave empty for root"}),e.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["Files will be organized in: ",r,"/",m||"root"]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:C,onChange:l=>y(l.target.checked),className:"w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"}),e.jsx("span",{className:"text-sm font-medium text-gray-700",children:"Optimize images with Cloudflare Images"})]}),e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:E,onChange:l=>U(l.target.checked),className:"w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"}),e.jsx("span",{className:"text-sm font-medium text-gray-700",children:"Save metadata to D1 database"})]})]}),e.jsxs("div",{ref:Me,onDrop:Re,onDragOver:w,className:"border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-teal-500 transition-colors bg-gray-50 cursor-pointer",onClick:()=>{var l;return(l=Fe.current)==null?void 0:l.click()},children:[e.jsx("input",{ref:Fe,type:"file",multiple:!0,onChange:l=>qe(l.target.files),className:"hidden"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-4xl",children:"📁"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-lg font-semibold text-gray-900",children:"Drag & drop files here"}),e.jsx("p",{className:"text-sm text-gray-600 mt-1",children:"or click to browse"})]}),e.jsx("button",{className:"btn btn-primary mt-4",children:"Choose Files"})]})]}),b.length>0&&e.jsxs("div",{className:"space-y-2",children:[e.jsxs("h3",{className:"font-semibold text-gray-900",children:["Selected Files (",b.length,")"]}),e.jsx("div",{className:"space-y-2 max-h-64 overflow-y-auto",children:b.map((l,D)=>e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg border-2 border-gray-200",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium text-gray-900",children:l.name}),e.jsxs("div",{className:"text-xs text-gray-600",children:[z(l.size)," • ",l.type]})]}),o[l.name]!==void 0&&e.jsx("div",{className:"w-32 mr-4",children:e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-teal-600 h-2 rounded-full transition-all",style:{width:`${o[l.name]}%`}})})}),e.jsx("button",{onClick:()=>I(D),className:"text-red-600 hover:text-red-700 font-semibold",children:"Remove"})]},D))}),e.jsx("button",{onClick:ee,disabled:f,className:"btn btn-primary w-full",children:f?"Uploading...":`Upload ${b.length} File${b.length>1?"s":""}`})]}),c.length>0&&e.jsxs("div",{className:"p-4 bg-gray-50 rounded-lg border-2 border-gray-200",children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"Upload Results"}),e.jsx("div",{className:"space-y-1 text-sm font-mono",children:c.map((l,D)=>e.jsx("div",{className:l.startsWith("✅")?"text-green-700":"text-red-700",children:l},D))})]})]})})}),t==="browser"&&e.jsx("div",{className:"space-y-6",children:e.jsx(M,{title:"R2 File Browser",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Bucket"}),e.jsx("select",{value:r,onChange:l=>N(l.target.value),className:"input",children:n.map(l=>e.jsx("option",{value:l,children:l},l))})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Prefix/Path"}),e.jsx("input",{type:"text",value:j,onChange:l=>F(l.target.value),className:"input",placeholder:"content/ or leave empty"})]}),e.jsx("div",{className:"flex items-end",children:e.jsx("button",{onClick:Ee,disabled:B,className:"btn btn-primary",children:B?"Loading...":"Refresh"})})]}),B?e.jsx("div",{className:"text-center py-12 text-gray-600",children:"Loading files..."}):te.length===0?e.jsx("div",{className:"text-center py-12 text-gray-600",children:"No files found in this location"}):e.jsx("div",{className:"border-2 border-gray-200 rounded-xl overflow-hidden",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"bg-gray-50 border-b-2 border-gray-200",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase",children:"File Name"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase",children:"Size"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase",children:"Uploaded"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase",children:"Actions"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200",children:te.map((l,D)=>e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"px-4 py-3 font-medium text-gray-900",children:l.key}),e.jsx("td",{className:"px-4 py-3 text-sm text-gray-600",children:z(l.size)}),e.jsx("td",{className:"px-4 py-3 text-sm text-gray-600",children:new Date(l.uploaded).toLocaleDateString()}),e.jsx("td",{className:"px-4 py-3",children:e.jsx("button",{onClick:()=>p(r,l.key),className:"text-xs text-teal-600 hover:text-teal-700 font-semibold",children:"Train AutoRAG"})})]},D))})]})})})]})})}),t==="autorag"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsx(M,{title:"AutoRAG Statistics",children:ce?e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-teal-50 rounded-lg border-2 border-teal-200",children:[e.jsx("div",{className:"text-2xl font-bold text-teal-700",children:ce.totalDocuments||0}),e.jsx("div",{className:"text-sm text-teal-600 font-medium",children:"Total Documents"})]}),e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg border-2 border-blue-200",children:[e.jsx("div",{className:"text-2xl font-bold text-blue-700",children:((Q=ce.totalTokens)==null?void 0:Q.toLocaleString())||0}),e.jsx("div",{className:"text-sm text-blue-600 font-medium",children:"Total Tokens"})]}),e.jsxs("div",{className:"p-4 bg-purple-50 rounded-lg border-2 border-purple-200",children:[e.jsx("div",{className:"text-2xl font-bold text-purple-700",children:ce.sources||0}),e.jsx("div",{className:"text-sm text-purple-600 font-medium",children:"Knowledge Sources"})]})]}):e.jsx("p",{className:"text-gray-600",children:"Loading stats..."})}),e.jsx(M,{title:"Train AutoRAG Model",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Train your AutoRAG model on all ingested content to improve AI responses about your R2 library."}),e.jsx("button",{onClick:fe,disabled:O,className:"btn btn-primary w-full",children:O?"Training...":"Start Training"}),(ce==null?void 0:ce.lastTraining)&&e.jsxs("p",{className:"text-xs text-gray-500",children:["Last trained: ",new Date(ce.lastTraining).toLocaleString()]})]})}),e.jsx(M,{title:"Knowledge Sources",className:"lg:col-span-2",children:e.jsx("div",{className:"space-y-3",children:je.length===0?e.jsx("p",{className:"text-gray-600",children:"No sources ingested yet. Upload files and enable AutoRAG ingestion."}):je.map(l=>{var D;return e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg border-2 border-gray-200",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-gray-900",children:l.path}),e.jsxs("div",{className:"text-sm text-gray-600 mt-1",children:[l.documents," documents • ",(D=l.tokens)==null?void 0:D.toLocaleString()," tokens"]}),e.jsxs("div",{className:"text-xs text-gray-500 mt-1",children:["Ingested: ",new Date(l.ingestedAt).toLocaleString()]})]}),e.jsx("span",{className:"px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-semibold",children:l.source})]})},l.id)})})}),e.jsx(M,{title:"Ingest R2 Bucket for AutoRAG",className:"lg:col-span-2",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Ingest an entire R2 bucket or prefix to train your AI helper on your content library."}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Bucket"}),e.jsx("select",{value:r,onChange:l=>N(l.target.value),className:"input",children:n.map(l=>e.jsx("option",{value:l,children:l},l))})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Prefix (optional)"}),e.jsx("input",{type:"text",value:j,onChange:l=>F(l.target.value),className:"input",placeholder:"content/documents/"})]}),e.jsx("div",{className:"flex items-end",children:e.jsx("button",{onClick:()=>p(r,j),disabled:ue,className:"btn btn-primary",children:ue?"Ingesting...":"Ingest for AutoRAG"})})]})]})})]})]})}function ma(){var T;const[t,i]=a.useState([]),[s,g]=a.useState("meauxbility-docs"),[n,x]=a.useState([]),[r,N]=a.useState(!1),[m,v]=a.useState("grid"),[b,k]=a.useState(""),[f,S]=a.useState(!1),[o,d]=a.useState(null);a.useEffect(()=>{c()},[]),a.useEffect(()=>{s&&h()},[s,b]);const c=async()=>{N(!0);try{const j=await Ue();j.success&&j.data&&(i(j.data),j.data.find(B=>B.name==="meauxbility-docs")?g("meauxbility-docs"):j.data.length>0&&g(j.data[0].name))}catch(j){console.error("Error loading buckets:",j)}finally{N(!1)}},h=async()=>{N(!0);try{const j=await ze(s,b);j.success&&j.data&&x(j.data)}catch(j){console.error("Error loading objects:",j)}finally{N(!1)}},C=async j=>{var B;const F=(B=j.target.files)==null?void 0:B[0];if(!(!F||!s)){S(!0);try{const q=b?`${b}${F.name}`:F.name,ae=await Zt(s,q,F);ae.success?(await h(),alert("File uploaded successfully!")):alert("Upload failed: "+ae.error)}catch(q){console.error("Upload error:",q),alert("Upload failed")}finally{S(!1),j.target&&(j.target.value="")}}},y=async j=>{if(confirm(`Delete ${j}?`))try{const F=await ea(s,j);F.success?(await h(),alert("File deleted successfully!")):alert("Delete failed: "+F.error)}catch(F){console.error("Delete error:",F),alert("Delete failed")}},E=j=>{if(j===0)return"0 B";const F=1024,B=["B","KB","MB","GB","TB"],q=Math.floor(Math.log(j)/Math.log(F));return`${parseFloat((j/Math.pow(F,q)).toFixed(2))} ${B[q]}`},U=j=>{var B;const F=(B=j.split(".").pop())==null?void 0:B.toLowerCase();return["jpg","jpeg","png","gif","webp","svg"].includes(F||"")?"🖼️":["pdf","doc","docx"].includes(F||"")?"📄":["mp4","mov","avi","webm"].includes(F||"")?"🎥":["zip","rar","7z"].includes(F||"")?"📦":"📁"},te=t.find(j=>j.name===s);return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-8 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-text mb-2",children:"Storage"}),e.jsx("p",{className:"text-text-secondary",children:"Unified cloud storage and secure vault for all your files."})]}),e.jsx("div",{className:"flex gap-2",children:e.jsxs("label",{className:"btn btn-primary cursor-pointer",children:[f?"Uploading...":"Upload File",e.jsx("input",{type:"file",className:"hidden",onChange:C,disabled:f})]})})]}),e.jsx("div",{className:"mb-6",children:e.jsx(M,{children:e.jsxs("div",{className:"flex items-center gap-4 flex-wrap",children:[e.jsx("label",{className:"text-sm font-medium text-text",children:"Select Bucket:"}),e.jsx("select",{value:s,onChange:j=>{g(j.target.value),k("")},className:"input flex-1 max-w-xs",children:t.map(j=>e.jsxs("option",{value:j.name,children:[j.name," ",j.objectCount?`(${j.objectCount} objects)`:""]},j.name))}),te&&e.jsxs("div",{className:"text-sm text-text-secondary",children:[e.jsx("span",{className:"font-medium",children:E(te.totalSize)})," total"]})]})})}),s==="meauxbility-docs"&&e.jsx("div",{className:"mb-6",children:e.jsx(M,{className:"bg-teal/5 border-teal/20",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-2xl",children:"📋"}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-text mb-1",children:"Program Applications Storage"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"This bucket stores program applications and documents. Use this to review and manage applicant files when sponsoring and fundraising for campaigns."})]})]})})}),e.jsxs("div",{className:"mb-6 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[b&&e.jsx("button",{onClick:()=>{const j=b.split("/").filter(Boolean);j.pop(),k(j.length>0?j.join("/")+"/":"")},className:"btn btn-secondary text-sm",children:"← Back"}),e.jsxs("span",{className:"text-sm text-text-secondary",children:[b||"Root"," (",n.length," objects)"]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>v("grid"),className:`btn btn-secondary ${m==="grid"?"bg-teal/10":""}`,children:"Grid"}),e.jsx("button",{onClick:()=>v("list"),className:`btn btn-secondary ${m==="list"?"bg-teal/10":""}`,children:"List"})]})]}),r?e.jsx(M,{children:e.jsx("div",{className:"text-center py-12",children:e.jsx("p",{className:"text-text-secondary",children:"Loading objects..."})})}):n.length===0?e.jsx(M,{children:e.jsxs("div",{className:"text-center py-12",children:[e.jsx("p",{className:"text-text-secondary mb-4",children:"No objects in this bucket."}),e.jsxs("label",{className:"btn btn-primary cursor-pointer inline-block",children:["Upload First File",e.jsx("input",{type:"file",className:"hidden",onChange:C,disabled:f})]})]})}):m==="grid"?e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",children:n.map(j=>e.jsx(M,{className:"hover:shadow-lg transition-all cursor-pointer",onClick:()=>{var F,B;(B=(F=j.httpMetadata)==null?void 0:F.contentType)!=null&&B.startsWith("text/")||j.key.endsWith("/")?k(j.key):d(j)},children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-4xl mb-3",children:U(j.key)}),e.jsx("h4",{className:"font-semibold text-text mb-1 truncate",title:j.key,children:j.key.split("/").pop()}),e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:E(j.size)}),e.jsxs("div",{className:"flex gap-2 justify-center",children:[e.jsx("button",{onClick:F=>{F.stopPropagation(),window.open(`https://${s==="meauxbility-docs"?"pub-4053ad7abef6446c9c9bfab2bdfd4073":"pub-b2c86021de114066bc2eefa2e0ee3250"}.r2.dev/${j.key}`,"_blank")},className:"btn btn-secondary text-xs px-2 py-1",children:"View"}),e.jsx("button",{onClick:F=>{F.stopPropagation(),y(j.key)},className:"btn btn-secondary text-xs px-2 py-1 text-red-600 hover:text-red-700",children:"Delete"})]})]})},j.key))}):e.jsx(M,{children:e.jsx("div",{className:"space-y-2",children:n.map(j=>e.jsxs("div",{className:"flex items-center justify-between p-4 border border-border rounded-lg hover:bg-gray-50 cursor-pointer",onClick:()=>{var F,B;(B=(F=j.httpMetadata)==null?void 0:F.contentType)!=null&&B.startsWith("text/")||j.key.endsWith("/")?k(j.key):d(j)},children:[e.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[e.jsx("span",{className:"text-2xl",children:U(j.key)}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h4",{className:"font-semibold text-text truncate",children:j.key}),e.jsxs("p",{className:"text-sm text-text-secondary",children:[E(j.size)," • ",new Date(j.uploaded).toLocaleDateString()]})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:F=>{F.stopPropagation(),window.open(`https://${s==="meauxbility-docs"?"pub-4053ad7abef6446c9c9bfab2bdfd4073":"pub-b2c86021de114066bc2eefa2e0ee3250"}.r2.dev/${j.key}`,"_blank")},className:"btn btn-secondary text-sm px-3",children:"View"}),e.jsx("button",{onClick:F=>{F.stopPropagation(),y(j.key)},className:"btn btn-secondary text-sm px-3 text-red-600 hover:text-red-700",children:"Delete"})]})]},j.key))})}),o&&e.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50",onClick:()=>d(null),children:e.jsxs(M,{className:"max-w-2xl w-full mx-4",onClick:j=>j.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-xl font-bold text-text",children:"File Details"}),e.jsx("button",{onClick:()=>d(null),className:"text-text-secondary hover:text-text",children:"✕"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-sm font-medium text-text-secondary",children:"Key"}),e.jsx("p",{className:"text-text",children:o.key})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm font-medium text-text-secondary",children:"Size"}),e.jsx("p",{className:"text-text",children:E(o.size)})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm font-medium text-text-secondary",children:"Content Type"}),e.jsx("p",{className:"text-text",children:((T=o.httpMetadata)==null?void 0:T.contentType)||"Unknown"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm font-medium text-text-secondary",children:"Uploaded"}),e.jsx("p",{className:"text-text",children:new Date(o.uploaded).toLocaleString()})]}),e.jsxs("div",{className:"flex gap-2 pt-4",children:[e.jsx("a",{href:`https://${s==="meauxbility-docs"?"pub-4053ad7abef6446c9c9bfab2bdfd4073":"pub-b2c86021de114066bc2eefa2e0ee3250"}.r2.dev/${o.key}`,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",children:"Open File"}),e.jsx("button",{onClick:()=>{y(o.key),d(null)},className:"btn btn-secondary text-red-600 hover:text-red-700",children:"Delete"})]})]})]})})]})}function pa(){const[t,i]=a.useState(null),[s,g]=a.useState([]),[n,x]=a.useState(!0);return a.useEffect(()=>{async function r(){const[N,m]=await Promise.all([Jt(),Xt()]);N.success&&N.data&&i(N.data),m.success&&m.data&&g(m.data),x(!1)}r()},[]),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-text mb-2",children:"Finance"}),e.jsx("p",{className:"text-text-secondary",children:"Unified financial hub for wallet and money management."})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6",children:[e.jsxs(M,{children:[e.jsx("p",{className:"text-sm text-text-secondary mb-1",children:"Total Balance"}),e.jsxs("p",{className:"text-3xl font-bold text-text",children:["$",t?t.balance.toFixed(2):"0.00"]})]}),e.jsxs(M,{children:[e.jsx("p",{className:"text-sm text-text-secondary mb-1",children:"This Month"}),e.jsxs("p",{className:"text-3xl font-bold text-text",children:["$",t?t.thisMonth.toFixed(2):"0.00"]})]}),e.jsxs(M,{children:[e.jsx("p",{className:"text-sm text-text-secondary mb-1",children:"Pending"}),e.jsxs("p",{className:"text-3xl font-bold text-text",children:["$",t?t.pending.toFixed(2):"0.00"]})]})]}),e.jsx(M,{title:"Recent Transactions",children:n?e.jsx("p",{className:"text-text-secondary",children:"Loading..."}):s.length===0?e.jsx("p",{className:"text-text-secondary",children:"No transactions yet."}):e.jsx("div",{className:"space-y-3",children:s.map(r=>e.jsxs("div",{className:"p-4 border border-border rounded-lg flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-text mb-1",children:r.description}),e.jsx("p",{className:"text-sm text-text-secondary",children:new Date(r.created_at*1e3).toLocaleDateString()})]}),e.jsxs("p",{className:"font-semibold text-text",children:["$",(r.amount/100).toFixed(2)]})]},r.id))})})]})}function xa(){const[t,i]=a.useState([]),[s,g]=a.useState(!0);return a.useEffect(()=>{async function n(){const x=await Vt();x.success&&x.data&&i(x.data),g(!1)}n()},[]),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-8 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-text mb-2",children:"Calendar"}),e.jsx("p",{className:"text-text-secondary",children:"Manage your events and schedule."})]}),e.jsx("button",{className:"btn btn-primary",children:"New Event"})]}),e.jsx(M,{title:"Upcoming Events",children:s?e.jsx("p",{className:"text-text-secondary",children:"Loading..."}):t.length===0?e.jsx("p",{className:"text-text-secondary",children:"No events scheduled. Create your first event!"}):e.jsx("div",{className:"space-y-3",children:t.map(n=>e.jsxs("div",{className:"p-4 border border-border rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-text mb-2",children:n.title}),e.jsxs("div",{className:"text-sm text-text-secondary space-y-1",children:[e.jsxs("p",{children:["Start: ",new Date(n.start_time*1e3).toLocaleString()]}),e.jsxs("p",{children:["End: ",new Date(n.end_time*1e3).toLocaleString()]}),n.location&&e.jsxs("p",{children:["Location: ",n.location]})]})]},n.id))})})]})}function ha(){var Re;const[t,i]=a.useState("livestream"),[s,g]=a.useState(null),[n,x]=a.useState(!1),[r,N]=a.useState({to:"",subject:"",html:"",from:"noreply@meauxbility.org"}),[m,v]=a.useState(!1),[b,k]=a.useState(null),[f]=a.useState(["meauxwork-db","meauxstack-saas-db","southernpetsanimalrescue","blair-mann-db","inneranimalmedia-assets","meauxstack-engine","meauxbilityorg","meauxbility-api-db","meaux-work-db","meauxphoto-db","inneranimalmedia"]),[S,o]=a.useState("meaux-work-db"),[d,c]=a.useState("SELECT * FROM users LIMIT 10;"),[h,C]=a.useState(null),[y,E]=a.useState(!1),[U,te]=a.useState([]),[T,j]=a.useState([]),[F,B]=a.useState(!1),[q,ae]=a.useState(null),[se,_]=a.useState([]),[Z,oe]=a.useState("meauxbilityorgfinal"),[W,re]=a.useState([]),[G,$]=a.useState(""),[Ne,me]=a.useState(!1),[ne,Se]=a.useState([]),[le,ve]=a.useState({name:"",trigger:"",actions:""}),[ye,ce]=a.useState(!1),[ge,je]=a.useState([]),[u,O]=a.useState({name:"",script:`export default {
  async fetch(request) {
    return new Response('Hello from Worker!', {
      headers: { 'content-type': 'text/plain' }
    })
  }
}`}),[Y,ue]=a.useState(!1);a.useEffect(()=>{de()},[]);const de=async()=>{const[w,I,ee]=await Promise.all([Ue(),We(),It()]);w.success&&w.data&&(_(w.data),w.data.length>0&&oe(w.data[0])),I.success&&I.data&&je(I.data),ee.success&&ee.data&&Se(ee.data)},Fe=async()=>{x(!0);try{const w=await Lt();w.success&&w.data?g(w.data):alert(w.error||"Failed to create stream")}catch{alert("Error creating stream")}finally{x(!1)}},Me=async w=>{var I;w.preventDefault(),v(!0),k(null);try{const ee=await Pt(r);ee.success?(k(`Email sent! Message ID: ${((I=ee.data)==null?void 0:I.messageId)||"N/A"}`),N({to:"",subject:"",html:"",from:"noreply@meauxbility.org"})):k(`Error: ${ee.error}`)}catch{k("Failed to send email")}finally{v(!1)}},Ce=async()=>{if(!d.trim()){alert("Please enter a query");return}E(!0),C(null),ae(null);const w=Date.now();try{const I=await $e({database:S,query:d}),ee=Date.now()-w;ae(ee);const fe={query:d,database:S,timestamp:new Date().toISOString(),success:I.success};te(p=>[fe,...p.slice(0,49)]),I.success&&I.data?C(I.data):C({error:I.error||"Query failed"})}catch{const ee=Date.now()-w;ae(ee),C({error:"Failed to execute query"}),te(fe=>[{query:d,database:S,timestamp:new Date().toISOString(),success:!1},...fe.slice(0,49)])}finally{E(!1)}},Ee=()=>{const w=prompt("Enter a name for this query:");w&&d.trim()&&(j(I=>[...I,{name:w,query:d,database:S}]),alert("Query saved!"))},be=w=>{c(w.query),o(w.database)},pe=()=>{if(!h||h.error){alert("No results to export");return}const w=h.results||[],I=[Object.keys(w[0]||{}).join(","),...w.map(z=>Object.values(z).map(P=>typeof P=="string"&&P.includes(",")?`"${P}"`:P).join(","))].join(`
`),ee=new Blob([I],{type:"text/csv"}),fe=URL.createObjectURL(ee),p=document.createElement("a");p.href=fe,p.download=`query-results-${Date.now()}.csv`,p.click(),URL.revokeObjectURL(fe)},Te=async()=>{me(!0);try{const w=await ze(Z,G||void 0);w.success&&w.data?re(w.data):alert(w.error||"Failed to load R2 objects")}catch{alert("Error loading R2 objects")}finally{me(!1)}},Oe=async w=>{w.preventDefault(),ce(!0);try{const I=await At({name:le.name,trigger:le.trigger,actions:le.actions.split(",").map(ee=>ee.trim()),enabled:!0});I.success&&I.data?(Se([...ne,I.data]),ve({name:"",trigger:"",actions:""})):alert(I.error||"Failed to create workflow")}catch{alert("Error creating workflow")}finally{ce(!1)}},qe=async w=>{w.preventDefault(),ue(!0);try{const I=await qt(u);I.success&&I.data?(je([...ge,I.data]),O({name:"",script:`export default {
  async fetch(request) {
    return new Response('Hello from Worker!', {
      headers: { 'content-type': 'text/plain' }
    })
  }
}`}),alert("Worker deployed successfully!")):alert(I.error||"Failed to deploy worker")}catch{alert("Error deploying worker")}finally{ue(!1)}};return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Developer Tools"}),e.jsx("p",{className:"text-gray-600",children:"Livestream, Email, AI Workflows, MCP, and Worker Deployments"})]}),e.jsx("div",{className:"border-b border-gray-200 mb-6",children:e.jsx("nav",{className:"flex gap-1",children:["livestream","email","mcp","workflows","deploy"].map(w=>e.jsx("button",{onClick:()=>i(w),className:`px-6 py-3 font-medium text-sm transition-colors border-b-2 ${t===w?"border-teal-600 text-teal-600":"border-transparent text-gray-600 hover:text-gray-900"}`,children:w.charAt(0).toUpperCase()+w.slice(1)},w))})}),t==="livestream"&&e.jsx(M,{title:"Cloudflare Stream - Livestream",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"Stream Status"}),s?e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"RTMP URL:"})," ",s.rtmpUrl||"N/A"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Stream Key:"})," ",s.streamKey||"N/A"]}),e.jsx("div",{className:"mt-4 p-3 bg-blue-50 border border-blue-200 rounded",children:e.jsxs("p",{className:"text-xs text-blue-800",children:[e.jsx("strong",{children:"OBS Settings:"}),e.jsx("br",{}),"Server: ",((Re=s.rtmpUrl)==null?void 0:Re.split("/live/")[0])||"rtmps://live.cloudflare.com:443",e.jsx("br",{}),"Stream Key: ",s.streamKey||"Your key"]})})]}):e.jsx("p",{className:"text-gray-600",children:"No active stream. Create one to get started."})]}),e.jsx("button",{onClick:Fe,disabled:n,className:"btn btn-primary",children:n?"Creating...":"Create Live Stream"})]})}),t==="email"&&e.jsx(M,{title:"Send Email (Resend API)",children:e.jsxs("form",{onSubmit:Me,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"To"}),e.jsx("input",{type:"email",value:r.to,onChange:w=>N({...r,to:w.target.value}),required:!0,className:"input",placeholder:"recipient@example.com"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Subject"}),e.jsx("input",{type:"text",value:r.subject,onChange:w=>N({...r,subject:w.target.value}),required:!0,className:"input",placeholder:"Email subject"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"HTML Content"}),e.jsx("textarea",{value:r.html,onChange:w=>N({...r,html:w.target.value}),required:!0,rows:8,className:"input font-mono text-sm",placeholder:"<h1>Hello</h1><p>Email content here...</p>"})]}),e.jsx("button",{type:"submit",disabled:m,className:"btn btn-primary",children:m?"Sending...":"Send Email"}),b&&e.jsx("div",{className:`p-3 rounded-lg ${b.includes("Error")?"bg-red-50 text-red-800":"bg-green-50 text-green-800"}`,children:b})]})}),t==="mcp"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gradient-to-br from-slate-100 via-teal-50 to-cyan-50 rounded-xl border-2 border-teal-200/50 shadow-lg hover:shadow-xl transition-all",children:[e.jsxs("div",{className:"px-6 py-5 border-b-2 border-teal-200/50 flex items-center justify-between bg-gradient-to-r from-teal-100/80 to-cyan-100/80 rounded-t-xl backdrop-blur-sm",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-900",children:"MCP - D1 Database Queries"}),e.jsx("div",{className:"flex gap-2",children:e.jsxs("button",{onClick:()=>B(!F),className:"px-3 py-1.5 bg-teal-600/20 text-teal-800 rounded-lg text-sm font-medium hover:bg-teal-600/30 border border-teal-300/50 transition-all",children:[F?"Hide":"Show"," History"]})})]}),e.jsxs("div",{className:"p-6 space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-teal-900 mb-2",children:"Database"}),e.jsx("select",{value:S,onChange:w=>o(w.target.value),className:"w-full px-4 py-2.5 border-2 border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900",children:f.map(w=>e.jsx("option",{value:w,children:w},w))})]}),T.length>0&&e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-teal-900 mb-2",children:"Saved Queries"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:T.filter(w=>w.database===S).map((w,I)=>e.jsx("button",{onClick:()=>be(w),className:"px-3 py-1 bg-teal-50 text-teal-700 rounded-lg text-sm hover:bg-teal-100 border border-teal-200",children:w.name},I))})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("label",{className:"block text-sm font-medium text-teal-900",children:"SQL Query"}),e.jsx("div",{className:"flex gap-2",children:e.jsx("button",{onClick:Ee,className:"text-xs text-teal-700 hover:text-teal-800 font-medium px-2 py-1 bg-teal-50 rounded hover:bg-teal-100",children:"💾 Save"})})]}),e.jsx("textarea",{value:d,onChange:w=>c(w.target.value),rows:8,className:"w-full px-4 py-3 border-2 border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 font-mono text-sm",placeholder:"SELECT * FROM users LIMIT 10;"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:Ce,disabled:y||!d.trim(),className:"flex-1 px-5 py-2.5 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",children:y?"Executing...":"▶ Execute Query"}),h&&!h.error&&h.results&&e.jsx("button",{onClick:pe,className:"px-5 py-2.5 bg-teal-100 text-teal-800 rounded-lg font-semibold hover:bg-teal-200 transition-all border border-teal-300",children:"📥 Export"})]}),F&&U.length>0&&e.jsxs("div",{className:"mt-4 p-3 bg-gray-50 rounded-lg max-h-48 overflow-y-auto",children:[e.jsx("h4",{className:"text-sm font-semibold text-gray-700 mb-2",children:"Recent Queries"}),e.jsx("div",{className:"space-y-1",children:U.slice(0,10).map((w,I)=>e.jsx("div",{onClick:()=>{c(w.query),o(w.database),B(!1)},className:`p-2 rounded text-xs cursor-pointer hover:bg-gray-100 ${w.success?"bg-green-50":"bg-red-50"}`,children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"font-mono truncate flex-1",children:[w.query.substring(0,50),"..."]}),e.jsx("span",{className:"text-gray-500 ml-2",children:new Date(w.timestamp).toLocaleTimeString()})]})},I))})]}),h&&e.jsxs("div",{className:"mt-4",children:[q!==null&&e.jsxs("div",{className:"mb-2 text-sm text-gray-600",children:["⚡ Executed in ",q,"ms"]}),h.error?e.jsxs("div",{className:"p-4 bg-red-50 border border-red-200 rounded-lg",children:[e.jsx("p",{className:"text-red-800 font-medium",children:"Error:"}),e.jsx("p",{className:"text-red-600 text-sm mt-1",children:h.error})]}):h.results?e.jsxs("div",{className:"border border-gray-200 rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center justify-between",children:[e.jsxs("span",{className:"text-sm font-semibold text-gray-700",children:["Results (",h.results.length," rows)"]}),h.meta&&e.jsxs("span",{className:"text-xs text-gray-500",children:[h.meta.rows_read," rows read"]})]}),e.jsx("div",{className:"overflow-x-auto max-h-96",children:h.results.length===0?e.jsx("div",{className:"p-4 text-center text-gray-500",children:"No results"}):e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsx("tr",{children:Object.keys(h.results[0]).map(w=>e.jsx("th",{className:"px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider",children:w},w))})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:h.results.slice(0,100).map((w,I)=>e.jsx("tr",{className:"hover:bg-gray-50",children:Object.values(w).map((ee,fe)=>e.jsx("td",{className:"px-4 py-2 text-xs text-gray-900 whitespace-nowrap",children:ee===null?e.jsx("span",{className:"text-gray-400 italic",children:"NULL"}):typeof ee=="object"?JSON.stringify(ee):String(ee)},fe))},I))})]})}),h.results.length>100&&e.jsxs("div",{className:"bg-gray-50 px-4 py-2 text-xs text-gray-500 text-center border-t border-gray-200",children:["Showing first 100 of ",h.results.length," results"]})]}):e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:e.jsx("pre",{className:"text-xs font-mono",children:JSON.stringify(h,null,2)})})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-slate-100 via-teal-50 to-cyan-50 rounded-xl border-2 border-teal-200/50 shadow-lg hover:shadow-xl transition-all",children:[e.jsx("div",{className:"px-6 py-5 border-b-2 border-teal-200/50 bg-gradient-to-r from-teal-100/80 to-cyan-100/80 rounded-t-xl backdrop-blur-sm",children:e.jsx("h3",{className:"text-lg font-bold text-teal-900",children:"MCP - R2 Storage Browser"})}),e.jsx("div",{className:"p-6 space-y-4",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-teal-900 mb-2",children:"Bucket"}),e.jsx("select",{value:Z,onChange:w=>oe(w.target.value),className:"w-full px-4 py-2.5 border-2 border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900",children:se.map(w=>e.jsx("option",{value:w,children:w},w))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-teal-900 mb-2",children:"Prefix (optional)"}),e.jsx("input",{type:"text",value:G,onChange:w=>$(w.target.value),className:"w-full px-4 py-2.5 border-2 border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900",placeholder:"assets/"})]}),e.jsx("button",{onClick:Te,disabled:Ne,className:"w-full px-5 py-2.5 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",children:Ne?"Loading...":"Load Objects"}),W.length>0&&e.jsx("div",{className:"mt-4 space-y-2 max-h-96 overflow-y-auto",children:W.map((w,I)=>e.jsxs("div",{className:"p-3 bg-gray-50 rounded-lg text-sm",children:[e.jsx("div",{className:"font-medium text-gray-900",children:w.key}),e.jsxs("div",{className:"text-xs text-gray-500 mt-1",children:[(w.size/1024).toFixed(2)," KB"]})]},I))})]})})]})]}),t==="workflows"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx(M,{title:"Create AI Workflow",children:e.jsxs("form",{onSubmit:Oe,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Workflow Name"}),e.jsx("input",{type:"text",value:le.name,onChange:w=>ve({...le,name:w.target.value}),required:!0,className:"input",placeholder:"Auto-respond to emails"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Trigger"}),e.jsx("input",{type:"text",value:le.trigger,onChange:w=>ve({...le,trigger:w.target.value}),required:!0,className:"input",placeholder:"email.received"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Actions (comma-separated)"}),e.jsx("input",{type:"text",value:le.actions,onChange:w=>ve({...le,actions:w.target.value}),required:!0,className:"input",placeholder:"ai.generate_response, email.send"})]}),e.jsx("button",{type:"submit",disabled:ye,className:"btn btn-primary",children:ye?"Creating...":"Create Workflow"})]})}),e.jsx(M,{title:"Active Workflows",children:e.jsx("div",{className:"space-y-3",children:ne.length===0?e.jsx("p",{className:"text-gray-600",children:"No workflows yet. Create one above."}):ne.map(w=>e.jsx("div",{className:"p-4 bg-gray-50 rounded-lg",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900",children:w.name}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Trigger: ",w.trigger]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Actions: ",w.actions.join(", ")]})]}),e.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-medium ${w.enabled?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800"}`,children:w.enabled?"Enabled":"Disabled"})]})},w.id))})})]}),t==="deploy"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx(M,{title:"Deploy Worker (.dev Launch)",children:e.jsxs("form",{onSubmit:qe,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Worker Name"}),e.jsx("input",{type:"text",value:u.name,onChange:w=>O({...u,name:w.target.value}),required:!0,className:"input",placeholder:"my-worker"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Worker Script"}),e.jsx("textarea",{value:u.script,onChange:w=>O({...u,script:w.target.value}),required:!0,rows:12,className:"input font-mono text-sm"})]}),e.jsx("button",{type:"submit",disabled:Y,className:"btn btn-primary",children:Y?"Deploying...":"Deploy Worker"})]})}),e.jsx(M,{title:"Deployed Workers",children:e.jsx("div",{className:"space-y-3",children:ge.length===0?e.jsx("p",{className:"text-gray-600",children:"No workers deployed yet."}):ge.map(w=>e.jsxs("div",{className:"p-4 bg-gray-50 rounded-lg flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900",children:w.name}),w.url&&e.jsx("a",{href:w.url,target:"_blank",rel:"noopener noreferrer",className:"text-sm text-teal-600 hover:underline",children:w.url}),e.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["Status: ",w.status]})]}),e.jsx("button",{onClick:async()=>{confirm("Delete this worker?")&&(await Rt(w.id)).success&&je(ge.filter(ee=>ee.id!==w.id))},className:"px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-lg",children:"Delete"})]},w.id))})})]})]})}function ua(){const[t,i]=a.useState([]),[s,g]=a.useState(!0),[n,x]=a.useState(!1),[r,N]=a.useState(null),[m,v]=a.useState({email:"",name:"",role:"developer"});a.useEffect(()=>{b()},[]);const b=async()=>{g(!0);try{const c=await ta();c.success&&c.data&&i(c.data)}catch(c){console.error("Error loading team members:",c)}finally{g(!1)}},k=async c=>{c.preventDefault();try{const h=await aa({user_id:`user_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,email:m.email,name:m.name,role:m.role,status:"active"});h.success?(await b(),x(!1),v({email:"",name:"",role:"developer"}),alert("Team member invited successfully!")):alert("Failed to invite member: "+h.error)}catch(h){console.error("Invite error:",h),alert("Failed to invite member")}},f=async c=>{if(c.preventDefault(),!!r)try{const h=await sa(r.id,{role:m.role,name:m.name});h.success?(await b(),N(null),v({email:"",name:"",role:"developer"}),alert("Team member updated successfully!")):alert("Failed to update member: "+h.error)}catch(h){console.error("Update error:",h),alert("Failed to update member")}},S=async(c,h)=>{if(confirm(`Remove ${h} from the team?`))try{const C=await ra(c);C.success?(await b(),alert("Team member removed successfully!")):alert("Failed to remove member: "+C.error)}catch(C){console.error("Delete error:",C),alert("Failed to remove member")}},o=c=>{switch(c){case"admin":return"bg-red-100 text-red-700";case"developer":return"bg-blue-100 text-blue-700";case"viewer":return"bg-gray-100 text-gray-700";default:return"bg-gray-100 text-gray-700"}},d=c=>{switch(c){case"active":return"bg-green-100 text-green-700";case"inactive":return"bg-gray-100 text-gray-700";case"suspended":return"bg-red-100 text-red-700";default:return"bg-gray-100 text-gray-700"}};return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-8 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-text mb-2",children:"Team"}),e.jsx("p",{className:"text-text-secondary",children:"Manage your team members and permissions."})]}),e.jsx("button",{onClick:()=>{x(!0),N(null),v({email:"",name:"",role:"developer"})},className:"btn btn-primary",children:"Invite Member"})]}),s?e.jsx(M,{children:e.jsx("div",{className:"text-center py-12",children:e.jsx("p",{className:"text-text-secondary",children:"Loading team members..."})})}):t.length===0?e.jsx(M,{children:e.jsxs("div",{className:"text-center py-12",children:[e.jsx("p",{className:"text-text-secondary mb-4",children:"No team members yet."}),e.jsx("button",{onClick:()=>x(!0),className:"btn btn-primary",children:"Invite First Member"})]})}):e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map(c=>e.jsxs(M,{children:[e.jsx("div",{className:"flex items-start justify-between mb-4",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center text-teal font-bold text-lg",children:c.name.charAt(0).toUpperCase()}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-text",children:c.name}),e.jsx("p",{className:"text-sm text-text-secondary",children:c.email})]})]})}),e.jsxs("div",{className:"space-y-2 mb-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs font-medium text-text-secondary",children:"Role:"}),e.jsx("span",{className:`text-xs px-2 py-1 rounded-full ${o(c.role)}`,children:c.role})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs font-medium text-text-secondary",children:"Status:"}),e.jsx("span",{className:`text-xs px-2 py-1 rounded-full ${d(c.status)}`,children:c.status})]}),c.last_login&&e.jsxs("div",{className:"text-xs text-text-secondary",children:["Last login: ",new Date(c.last_login).toLocaleDateString()]})]}),e.jsxs("div",{className:"flex gap-2 pt-4 border-t border-border",children:[e.jsx("button",{onClick:()=>{N(c),v({email:c.email,name:c.name,role:c.role}),x(!0)},className:"btn btn-secondary text-sm flex-1",children:"Edit"}),e.jsx("button",{onClick:()=>S(c.id,c.name),className:"btn btn-secondary text-sm text-red-600 hover:text-red-700",disabled:c.role==="admin",children:"Remove"})]})]},c.id))}),n&&e.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50",onClick:()=>x(!1),children:e.jsxs(M,{className:"max-w-md w-full mx-4",onClick:c=>c.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-xl font-bold text-text",children:r?"Edit Team Member":"Invite Team Member"}),e.jsx("button",{onClick:()=>x(!1),className:"text-text-secondary hover:text-text",children:"✕"})]}),e.jsxs("form",{onSubmit:r?f:k,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-text mb-2",children:"Name"}),e.jsx("input",{type:"text",value:m.name,onChange:c=>v({...m,name:c.target.value}),className:"input w-full",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-text mb-2",children:"Email"}),e.jsx("input",{type:"email",value:m.email,onChange:c=>v({...m,email:c.target.value}),className:"input w-full",required:!0,disabled:!!r})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-text mb-2",children:"Role"}),e.jsxs("select",{value:m.role,onChange:c=>v({...m,role:c.target.value}),className:"input w-full",required:!0,children:[e.jsx("option",{value:"viewer",children:"Viewer"}),e.jsx("option",{value:"developer",children:"Developer"}),e.jsx("option",{value:"admin",children:"Admin"})]})]}),e.jsxs("div",{className:"flex gap-2 pt-4",children:[e.jsx("button",{type:"button",onClick:()=>x(!1),className:"btn btn-secondary flex-1",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary flex-1",children:r?"Update":"Invite"})]})]})]})})]})}function ga(){const[t,i]=a.useState(null),[s,g]=a.useState(!0),[n,x]=a.useState(!1),[r,N]=a.useState("dark");a.useEffect(()=>{async function b(){const S=await Ot();S.success&&S.data&&i(S.data),g(!1)}b();const f=localStorage.getItem("dashboard-theme")||"dark";N(f),document.documentElement.setAttribute("data-theme",f)},[]);const m=b=>{N(b),localStorage.setItem("dashboard-theme",b),document.documentElement.setAttribute("data-theme",b)},v=async b=>{if(b.preventDefault(),!t)return;x(!0);const k=new FormData(b.currentTarget),f={name:k.get("name"),email:k.get("email"),role:k.get("role")};(await Qt(f)).success?(alert("Profile updated successfully!"),i({...t,...f})):alert("Failed to update profile"),x(!1)};return s?e.jsx("div",{className:"text-center py-12",children:"Loading..."}):e.jsxs("div",{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-text mb-2",children:"Settings"}),e.jsx("p",{className:"text-text-secondary",children:"Manage your account settings and preferences."})]}),e.jsx(M,{title:"Profile",children:t?e.jsxs("form",{onSubmit:v,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",style:{color:"var(--text-secondary)"},children:"Full Name"}),e.jsx("input",{type:"text",name:"name",defaultValue:t.name,className:"input",required:!0,style:{backgroundColor:"var(--bg-elevated)",borderColor:"var(--border)",color:"var(--text-primary)"}})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",style:{color:"var(--text-secondary)"},children:"Email"}),e.jsx("input",{type:"email",name:"email",defaultValue:t.email,className:"input",required:!0,style:{backgroundColor:"var(--bg-elevated)",borderColor:"var(--border)",color:"var(--text-primary)"}})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",style:{color:"var(--text-secondary)"},children:"Role"}),e.jsx("input",{type:"text",name:"role",defaultValue:t.role,className:"input",required:!0,style:{backgroundColor:"var(--bg-elevated)",borderColor:"var(--border)",color:"var(--text-primary)"}})]}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:n,style:{backgroundColor:"var(--accent)",color:"var(--bg-primary)"},children:n?"Saving...":"Save Changes"})]}):e.jsx("p",{style:{color:"var(--text-secondary)"},children:"Unable to load profile."})}),e.jsx(M,{title:"Dashboard Theme",className:"mt-6",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm",style:{color:"var(--text-secondary)"},children:"Choose your preferred dashboard theme and color scheme."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("button",{type:"button",onClick:()=>m("dark"),className:`p-4 rounded-lg border-2 transition-all ${r==="dark"?"ring-2 ring-offset-2":""}`,style:{backgroundColor:r==="dark"?"var(--accent-soft)":"var(--bg-elevated)",borderColor:r==="dark"?"var(--accent)":"var(--border)",ringColor:"var(--accent)"},children:[e.jsx("div",{className:"text-lg font-semibold mb-2",style:{color:"var(--text-primary)"},children:"Dark"}),e.jsx("div",{className:"text-sm",style:{color:"var(--text-secondary)"},children:"Default dark theme matching saas-dashboard"}),e.jsxs("div",{className:"mt-3 flex gap-2",children:[e.jsx("div",{className:"w-8 h-8 rounded",style:{backgroundColor:"#0A1628"}}),e.jsx("div",{className:"w-8 h-8 rounded",style:{backgroundColor:"#4AECDC"}})]})]}),e.jsxs("button",{type:"button",onClick:()=>m("light"),className:`p-4 rounded-lg border-2 transition-all ${r==="light"?"ring-2 ring-offset-2":""}`,style:{backgroundColor:r==="light"?"var(--accent-soft)":"var(--bg-elevated)",borderColor:r==="light"?"var(--accent)":"var(--border)",ringColor:"var(--accent)"},children:[e.jsx("div",{className:"text-lg font-semibold mb-2",style:{color:"var(--text-primary)"},children:"Light"}),e.jsx("div",{className:"text-sm",style:{color:"var(--text-secondary)"},children:"Clean light theme with teal accents"}),e.jsxs("div",{className:"mt-3 flex gap-2",children:[e.jsx("div",{className:"w-8 h-8 rounded",style:{backgroundColor:"#FFFFFF"}}),e.jsx("div",{className:"w-8 h-8 rounded",style:{backgroundColor:"#14B8A6"}})]})]}),e.jsxs("button",{type:"button",onClick:()=>m("teal-steel"),className:`p-4 rounded-lg border-2 transition-all ${r==="teal-steel"?"ring-2 ring-offset-2":""}`,style:{backgroundColor:r==="teal-steel"?"var(--accent-soft)":"var(--bg-elevated)",borderColor:r==="teal-steel"?"var(--accent)":"var(--border)",ringColor:"var(--accent)"},children:[e.jsx("div",{className:"text-lg font-semibold mb-2",style:{color:"var(--text-primary)"},children:"Teal Steel"}),e.jsx("div",{className:"text-sm",style:{color:"var(--text-secondary)"},children:"Professional teal steel theme"}),e.jsxs("div",{className:"mt-3 flex gap-2",children:[e.jsx("div",{className:"w-8 h-8 rounded",style:{backgroundColor:"#0F172A"}}),e.jsx("div",{className:"w-8 h-8 rounded",style:{backgroundColor:"#14B8A6"}})]})]})]})]})})]})}const Ie={databases:[{name:"meaux-work-db",id:"2a3a763a-92f1-4633-849e-268ddb31998f",binding:"DB"},{name:"meauxbility-api-db",id:"49b16b7d-ecb9-4cc4-b337-559f94854757",binding:"meauxxbility"},{name:"meauxstack-saas-db",id:"ee3e3adb-da99-457d-8c2c-390ff19f6435",binding:"SAAS_DB"},{name:"meauxbility-db",id:"70d4c190-9034-42df-aacc-80182fc3467a"},{name:"meauxstack-engine",id:"7e3ea1bc-edb8-4a99-81a5-a017687fd6c0"},{name:"meauxbilityorg",id:"011d1629-b5c8-49e7-8f6d-ca311ba936fe"},{name:"meauxphoto-db",id:"f1968266-1017-43f8-8572-caf2b0d63c4c"},{name:"inneranimalmedia-assets",id:"e0ec00b8-4e3c-422e-abba-70b7548c1f87"},{name:"inneranimalmedia",id:"7a4ba110-b50f-46f8-9e1c-e61e9a5995ac"},{name:"d1_automeaux",id:"48889fef-c9f9-402f-8d44-f6c4733ddd44"}],r2Buckets:["meauxbilityorgfinal","meauxstack-components","meauxbility-recordings","meauxbility-3d-models","splineicons","meaux-work-storage"]};function ba(){const[t,i]=a.useState([]),[s,g]=a.useState(!1),n=async()=>{g(!0),i([]);const m=[];m.push({name:"D1 Database Configuration",status:"success",message:`Configured ${Ie.databases.length} databases`,data:Ie.databases.map(b=>({name:b.name,hasBinding:!!b.binding}))}),i([...m]);for(const b of Ie.databases){const k=`Query ${b.name} (Tables)`;m.push({name:k,status:"pending",message:"Testing..."}),i([...m]);const f=Date.now();try{const S=await $e({database:b.name,query:"SELECT name FROM sqlite_master WHERE type='table' ORDER BY name;"}),o=Date.now()-f;if(S.success&&S.data){const d=S.data.results||[];m[m.length-1]={name:k,status:"success",message:`Found ${d.length} tables${b.binding?` (bound: ${b.binding})`:" (via API)"}`,data:d,duration:o}}else{const d=S.error||S.error||"Failed to query tables",c=S.details||S.apiErrors||null;m[m.length-1]={name:k,status:"error",message:d,data:c?{error:d,details:c}:{error:d},duration:o}}}catch(S){const o=Date.now()-f;m[m.length-1]={name:k,status:"error",message:S instanceof Error?S.message:"Unknown error",duration:o}}i([...m])}m.push({name:"R2 Bucket Configuration",status:"success",message:`Configured ${Ie.r2Buckets.length} buckets`,data:Ie.r2Buckets}),i([...m]);for(const b of Ie.r2Buckets){const k=`List R2 Objects (${b})`;m.push({name:k,status:"pending",message:"Testing..."}),i([...m]);const f=Date.now();try{const S=await ze({bucket:b,prefix:"",limit:5}),o=Date.now()-f;S.success&&S.data?m[m.length-1]={name:k,status:"success",message:`Found ${S.data.length} objects (showing first 5)`,data:S.data,duration:o}:m[m.length-1]={name:k,status:"error",message:S.error||"Failed to list objects",duration:o}}catch(S){const o=Date.now()-f;m[m.length-1]={name:k,status:"error",message:S instanceof Error?S.message:"Unknown error",duration:o}}i([...m])}m.push({name:"Test SELECT Query (meaux-work-db)",status:"pending",message:"Testing..."}),i([...m]);const v=Date.now();try{const b=await $e({database:"meaux-work-db",query:"SELECT name FROM sqlite_master WHERE type='table' LIMIT 1;"});if(b.success&&b.data&&b.data.results&&b.data.results.length>0){const k=b.data.results[0].name,f=await $e({database:"meaux-work-db",query:`SELECT COUNT(*) as count FROM ${k};`}),S=Date.now()-v;f.success&&f.data?m[m.length-1]={name:"Test SELECT Query (meaux-work-db)",status:"success",message:`Successfully queried table "${k}"`,data:f.data,duration:S}:m[m.length-1]={name:"Test SELECT Query (meaux-work-db)",status:"error",message:f.error||"Failed to execute SELECT query",duration:S}}else m[m.length-1]={name:"Test SELECT Query (meaux-work-db)",status:"error",message:"No tables found to query",duration:Date.now()-v}}catch(b){m[m.length-1]={name:"Test SELECT Query (meaux-work-db)",status:"error",message:b instanceof Error?b.message:"Unknown error",duration:Date.now()-v}}i([...m]),g(!1)},x=t.filter(m=>m.status==="success").length,r=t.filter(m=>m.status==="error").length,N=t.filter(m=>m.status==="pending").length;return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-8 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Connection Test"}),e.jsx("p",{className:"text-gray-600",children:"Verify D1, R2, and MCP connections using your actual configuration"})]}),e.jsx("button",{onClick:n,disabled:s,className:"btn btn-primary",children:s?"Testing...":"Run All Tests"})]}),t.length>0&&e.jsx("div",{className:"mb-6 p-4 bg-gray-50 rounded-lg",children:e.jsxs("div",{className:"flex gap-6",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Total Tests:"}),e.jsx("span",{className:"ml-2 font-bold text-gray-900",children:t.length})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Success:"}),e.jsx("span",{className:"ml-2 font-bold text-green-600",children:x})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Errors:"}),e.jsx("span",{className:"ml-2 font-bold text-red-600",children:r})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Pending:"}),e.jsx("span",{className:"ml-2 font-bold text-yellow-600",children:N})]})]})}),e.jsx("div",{className:"space-y-4",children:t.map((m,v)=>e.jsx(M,{title:m.name,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${m.status==="success"?"bg-green-500":m.status==="error"?"bg-red-500":"bg-yellow-500 animate-pulse"}`}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("p",{className:`font-medium ${m.status==="success"?"text-green-700":m.status==="error"?"text-red-700":"text-yellow-700"}`,children:m.message}),m.duration!==void 0&&e.jsxs("span",{className:"text-xs text-gray-500",children:["(",m.duration,"ms)"]})]}),m.data&&e.jsxs("details",{className:"mt-3",children:[e.jsx("summary",{className:"cursor-pointer text-sm text-gray-600 hover:text-gray-900",children:"View Data"}),e.jsx("pre",{className:"mt-2 p-3 bg-gray-50 rounded text-xs overflow-auto max-h-64",children:JSON.stringify(m.data,null,2)})]})]})]})},v))}),t.length===0&&e.jsxs(M,{title:"Ready to Test",children:[e.jsx("p",{className:"text-gray-600 mb-4",children:'Click "Run All Tests" to verify all D1, R2, and MCP connections using your actual configuration.'}),e.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4",children:[e.jsx("h3",{className:"font-semibold text-blue-900 mb-2",children:"Tests Included:"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-blue-800 space-y-1",children:[e.jsxs("li",{children:["D1 Database Configuration (",Ie.databases.length," databases)"]}),e.jsx("li",{children:"Query tables in each D1 database"}),e.jsxs("li",{children:["R2 Bucket Configuration (",Ie.r2Buckets.length," buckets)"]}),e.jsx("li",{children:"List objects in each R2 bucket"}),e.jsx("li",{children:"Test SELECT query execution"})]})]}),e.jsxs("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold text-green-900 mb-2",children:"Configuration:"}),e.jsxs("div",{className:"text-sm text-green-800 space-y-1",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Primary Databases:"})," meaux-work-db, meauxbility-api-db, meauxstack-saas-db"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Primary Buckets:"})," meauxbilityorgfinal, meauxstack-components, meauxbility-recordings"]})]})]})]})]})}function fa(){const t=a.useRef(null),i=a.useRef(null),[s,g]=a.useState(0),[n,x]=a.useState(0);return a.useEffect(()=>{if(!window.Stripe){const r=document.createElement("script");r.src="https://js.stripe.com/v3/",r.async=!0,document.head.appendChild(r)}if(!document.querySelector('script[src*="model-viewer"]')){const r=document.createElement("script");r.type="module",r.src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js",document.head.appendChild(r)}},[]),a.useEffect(()=>{const r=t.current;if(!r)return;const N=()=>{r.muted=!0,r.play().catch(()=>{setTimeout(N,100)})};if(N(),"IntersectionObserver"in window){const m=new IntersectionObserver(v=>{v.forEach(b=>{b.isIntersecting&&N()})},{threshold:.001});return m.observe(r),()=>m.disconnect()}},[]),a.useEffect(()=>{const r=parseInt(localStorage.getItem("donmichael_v2")||"0");g(r),x(Math.min(r/1e4*100,100))},[]),a.useEffect(()=>{const r=t.current,N=i.current;if(!r||!N)return;const m=()=>{N.classList.add("show"),setTimeout(()=>{N.classList.remove("show")},3e3)};return r.addEventListener("play",m,{once:!0}),()=>r.removeEventListener("play",m)},[]),a.useEffect(()=>{const r=t.current;if(!r)return;const N=()=>{r.requestFullscreen?r.requestFullscreen():r.webkitRequestFullscreen?r.webkitRequestFullscreen():r.msRequestFullscreen&&r.msRequestFullscreen()};return r.addEventListener("dblclick",N),()=>r.removeEventListener("dblclick",N)},[]),e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"hero-section",children:[e.jsxs("div",{className:"header-content",children:[e.jsxs("div",{className:"header-badge",children:[e.jsx("div",{className:"badge-dot"}),e.jsx("span",{className:"badge-text",children:"Athlete Spotlight"})]}),e.jsx("h1",{className:"header-title",children:"Stay Inspired. Meet the Savages."}),e.jsxs("p",{className:"header-subtitle",children:["More Options. More Access. More Life.",e.jsx("br",{}),"Built by a survivor for survivors"]})]}),e.jsxs("div",{className:"video-showcase",children:[e.jsx("div",{className:"video-floating-wrapper",children:e.jsx("div",{className:"video-aspect-container",children:e.jsxs("div",{className:"video-inner",id:"videoContainer",children:[e.jsxs("video",{ref:t,className:"video-element",id:"mainVideo",playsInline:!0,muted:!0,loop:!0,preload:"auto",controls:!0,controlsList:"nodownload",autoPlay:!0,children:[e.jsx("source",{src:"https://cdn.shopify.com/videos/c/o/v/cde0cb4af6034e6db1b3014d70526fe1.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]}),e.jsx("div",{className:"controls-hint",ref:i,id:"controlsHint",children:"Click video for controls • Double-click for fullscreen"})]})})}),e.jsxs("div",{className:"video-info",children:[e.jsx("h2",{className:"video-info-title",children:"Kaleb's Journey"}),e.jsxs("p",{className:"video-info-description",children:["See the impossible become possible. Watch Kaleb's transformation",e.jsx("br",{className:"desktop-only"}),"and discover what's next in our community."]}),e.jsxs(A,{to:"/pages/get-involved-lafayette-la",className:"cta-button",children:["Get Involved",e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M12 5l7 7-7 7",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]})]}),e.jsx("section",{className:"mbxv2-campaign",children:e.jsx("div",{className:"mbxv2-container",children:e.jsxs("div",{className:"mbxv2-campaign-layout",children:[e.jsx("div",{className:"mbxv2-campaign-image",id:"mbxv2CampaignImage",children:e.jsx("img",{src:"https://cdn.shopify.com/s/files/1/0685/1654/4672/files/img-5722.jpg?v=1754010593",alt:"DonMichael - Our first campaign recipient",loading:"lazy"})}),e.jsxs("div",{className:"mbxv2-campaign-content",children:[e.jsx("div",{className:"mbxv2-campaign-number",children:"01"}),e.jsx("h2",{className:"mbxv2-heading-2",children:"Help Fund DonMichael's New Beginning"}),e.jsxs("p",{className:"mbxv2-campaign-text",children:["Mobility challenges touch every part of life—freedom, opportunity, and dignity."," ","Our first initiative is raising ",e.jsx("strong",{children:"$10,000"})," to provide DonMichael, living with Friedreich's ataxia, a custom wheelchair that truly fits his needs."]}),e.jsx("p",{className:"mbxv2-campaign-text",children:"This isn't just equipment—it's independence, access, and the confidence to pursue life on his terms."}),e.jsxs("div",{className:"mbxv2-progress",children:[e.jsx("div",{className:"mbxv2-progress-bar",children:e.jsx("div",{className:"mbxv2-progress-fill",id:"mbxv2ProgressBar",style:{width:`${n}%`}})}),e.jsxs("div",{className:"mbxv2-progress-text",children:[e.jsxs("span",{className:"mbxv2-progress-amount",id:"mbxv2ProgressAmount",children:["$",s.toLocaleString()," raised"]}),e.jsx("span",{children:"$10,000 goal"})]})]}),e.jsxs("div",{className:"mbxv2-btn-group",children:[e.jsx("button",{className:"mbxv2-btn mbxv2-btn-primary",onClick:()=>{var r;return(r=window.openMbxv2Modal)==null?void 0:r.call(window,"donmichael")},children:"Be DonMichael's First Hero →"}),e.jsx(A,{to:"/pages/donmichael-our-first-campaign",className:"mbxv2-btn mbxv2-btn-outline",children:"Learn More"})]})]})]})})}),e.jsx("section",{className:"mbxv2-community",children:e.jsx("div",{className:"mbxv2-container",children:e.jsxs("div",{className:"mbxv2-community-layout",children:[e.jsx("div",{className:"mbxv2-community-image",id:"mbxv2CommunityImage",children:e.jsx("img",{src:"https://cdn.shopify.com/s/files/1/0685/1654/4672/files/goodfight-backpack-drive-sam-and-dp.png?v=1757703618",alt:"Community of supporters celebrating together",loading:"lazy"})}),e.jsxs("div",{className:"mbxv2-community-content",children:[e.jsx("h2",{className:"mbxv2-heading-2",children:"The Meauxbility Movement"}),e.jsx("p",{className:"mbxv2-text-lead",children:"What began as one story is now a growing network of people and partners creating more access—and more life—together."}),e.jsxs("p",{className:"mbxv2-text-body",style:{marginBottom:"2rem"},children:[e.jsx("strong",{children:"Join us."})," No one should face the hardest days alone."]}),e.jsx(A,{to:"/pages/community",className:"mbxv2-btn mbxv2-btn-primary",children:"Join Our Community"})]})]})})}),e.jsx("div",{className:"mbxv2-3d-wrapper",id:"mbxv23DWrapper",children:e.jsx("div",{className:"mbxv2-3d-model",id:"mbxv23DModel",children:e.jsx("model-viewer",{src:"https://cdn.shopify.com/3d/models/2f72b763d930043c/Helping_Hand_0820204901_texture.glb",alt:"3D helping hand model","camera-orbit":"55deg 75deg 8m","field-of-view":"35deg","disable-zoom":!0,"disable-pan":!0,"disable-tap":!0,"interaction-prompt":"none","shadow-intensity":"5",exposure:"2.2"})})}),e.jsxs("section",{className:"mbxv2-partners",children:[e.jsx("div",{className:"mbxv2-particle"}),e.jsx("div",{className:"mbxv2-particle"}),e.jsx("div",{className:"mbxv2-particle"}),e.jsx("div",{className:"mbxv2-particle"}),e.jsx("div",{className:"mbxv2-particle"}),e.jsx("div",{className:"mbxv2-particle"}),e.jsxs("div",{className:"mbxv2-container",children:[e.jsx("div",{className:"mbxv2-partners-header",children:e.jsx("h2",{className:"mbxv2-heading-2",id:"mbxv2PartnersTitle",children:"Partners & Supporters"})}),e.jsx("div",{className:"mbxv2-partners-grid",children:[{a:"rise.png",b:"deano.png",delay:0},{a:"pablito.png",b:"gff-update.png",delay:2500},{a:"w4w.png",b:"tc.png",delay:5e3},{a:"neuroelite-white.png",b:"tu.png",delay:7500},{a:"ab-white.png",b:"apex.png",delay:1e4},{a:"barr.png",b:"atf_logo.png",delay:12500}].map((r,N)=>e.jsx(va,{partner:r},N))}),e.jsx("div",{className:"mbxv2-partners-cta",children:e.jsxs(A,{to:"/pages/accessibility-partners",className:"mbxv2-partners-link",children:["View All Partners",e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]})})]})]}),e.jsx(ya,{})]})}function va({partner:t}){const[i,s]=a.useState("a"),[g,n]=a.useState(!1);a.useEffect(()=>{const r=setTimeout(()=>{n(!0),s(m=>m==="a"?"b":"a"),setTimeout(()=>n(!1),800)},t.delay),N=setInterval(()=>{n(!0),s(m=>m==="a"?"b":"a"),setTimeout(()=>n(!1),800)},15e3);return()=>{clearTimeout(r),clearInterval(N)}},[t.delay]);const x="https://cdn.shopify.com/s/files/1/0685/1654/4672/files/";return e.jsxs("div",{className:`mbxv2-partner-logo ${g?"swapping":""}`,"data-state":i,onClick:()=>{n(!0),s(r=>r==="a"?"b":"a"),setTimeout(()=>n(!1),800)},children:[e.jsx("div",{className:"logo-a",children:e.jsx("img",{src:`${x}${t.a}?v=1754533232`,alt:t.a})}),e.jsx("div",{className:"logo-b",children:e.jsx("img",{src:`${x}${t.b}?v=1754533232`,alt:t.b})})]})}function ya(){return e.jsx("style",{children:`
            :root {
                --meaux-orange: #FF6B00;
                --meaux-orange-hover: #E85D00;
                --meaux-teal: #339999;
                --meaux-deep: #051b1e;
                --meaux-ink: #0C2D31;
                --meaux-white: #ffffff;
                --meaux-gray: #f8fafb;
                --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);
                --shadow-md: 0 4px 24px rgba(0, 0, 0, 0.08);
                --shadow-lg: 0 8px 48px rgba(0, 0, 0, 0.12);
                --shadow-xl: 0 24px 64px rgba(0, 0, 0, 0.16);
                --shadow-glow: 0 0 40px rgba(255, 107, 0, 0.15);
            }

            .hero-section {
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 40px 20px;
                background: var(--meaux-white);
                position: relative;
            }

            .hero-section::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 100%;
                background: radial-gradient(circle at 30% 50%, rgba(255, 107, 0, 0.03) 0%, transparent 50%),
                            radial-gradient(circle at 70% 50%, rgba(51, 153, 153, 0.03) 0%, transparent 50%);
                animation: gradientShift 20s ease infinite;
                pointer-events: none;
            }

            @keyframes gradientShift {
                0%, 100% { opacity: 0.5; }
                50% { opacity: 1; }
            }

            .header-content {
                text-align: center;
                max-width: 800px;
                margin-bottom: 60px;
                animation: fadeInUp 0.8s ease;
                position: relative;
                z-index: 1;
            }

            .header-badge {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 20px;
                background: rgba(255, 107, 0, 0.08);
                border: 1px solid rgba(255, 107, 0, 0.2);
                border-radius: 100px;
                margin-bottom: 24px;
                animation: fadeIn 1s ease 0.2s both;
            }

            .badge-dot {
                width: 8px;
                height: 8px;
                background: var(--meaux-orange);
                border-radius: 50%;
                animation: pulse 2s ease infinite;
            }

            @keyframes pulse {
                0%, 100% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.6; transform: scale(0.9); }
            }

            .badge-text {
                font-size: 0.875rem;
                font-weight: 600;
                color: var(--meaux-orange);
                letter-spacing: 0.5px;
                text-transform: uppercase;
            }

            .header-title {
                font-size: clamp(2rem, 6vw, 3.5rem);
                font-weight: 800;
                line-height: 1.1;
                margin-bottom: 20px;
                letter-spacing: -0.02em;
                background: linear-gradient(135deg, var(--meaux-ink) 0%, var(--meaux-teal) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }

            .header-subtitle {
                font-size: clamp(1.1rem, 2vw, 1.4rem);
                color: #6b7280;
                line-height: 1.6;
                font-weight: 400;
            }

            .video-showcase {
                width: 100%;
                max-width: 1200px;
                margin: 0 auto;
                position: relative;
                animation: fadeInUp 1s ease 0.4s both;
            }

            .video-floating-wrapper {
                position: relative;
                width: 100%;
                padding: 20px;
                background: var(--meaux-white);
                border-radius: 24px;
                box-shadow: var(--shadow-lg);
                transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .video-floating-wrapper:hover {
                transform: translateY(-4px);
                box-shadow: var(--shadow-xl), var(--shadow-glow);
            }

            .video-aspect-container {
                position: relative;
                width: 100%;
                padding-bottom: 56.25%;
                background: var(--meaux-white);
                border-radius: 16px;
                overflow: hidden;
                box-shadow: var(--shadow-md);
            }

            .video-inner {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--meaux-white);
            }

            .video-element {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: contain;
                background: var(--meaux-white);
            }

            .controls-hint {
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                padding: 8px 16px;
                background: rgba(0, 0, 0, 0.8);
                color: white;
                border-radius: 8px;
                font-size: 0.875rem;
                opacity: 0;
                transition: opacity 0.3s ease;
                z-index: 5;
                pointer-events: none;
            }

            .controls-hint.show {
                animation: fadeInOut 3s ease;
            }

            @keyframes fadeInOut {
                0% { opacity: 0; }
                20% { opacity: 1; }
                80% { opacity: 1; }
                100% { opacity: 0; }
            }

            .video-info {
                margin-top: 32px;
                text-align: center;
                animation: fadeIn 1s ease 0.6s both;
            }

            .video-info-title {
                font-size: clamp(1.5rem, 3vw, 2rem);
                font-weight: 700;
                margin-bottom: 12px;
                color: var(--meaux-ink);
            }

            .video-info-description {
                font-size: 1.1rem;
                color: #6b7280;
                margin-bottom: 24px;
                line-height: 1.6;
            }

            .cta-button {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                padding: 16px 32px;
                background: var(--meaux-orange);
                color: white;
                text-decoration: none;
                border-radius: 12px;
                font-weight: 600;
                font-size: 1.05rem;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: 0 4px 14px rgba(255, 107, 0, 0.25);
            }

            .cta-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 24px rgba(255, 107, 0, 0.35);
                background: var(--meaux-orange-hover);
            }

            .cta-button svg {
                width: 20px;
                height: 20px;
                transition: transform 0.3s ease;
            }

            .cta-button:hover svg {
                transform: translateX(4px);
            }

            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }

            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            /* Campaign Section */
            .mbxv2-campaign {
                padding: 3rem 0;
                background: white;
                position: relative;
            }

            .mbxv2-container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 1.5rem;
            }

            .mbxv2-campaign-layout {
                display: grid;
                grid-template-columns: 1fr;
                gap: 2rem;
                align-items: center;
                max-width: 1100px;
                margin: 0 auto;
            }

            @media (min-width: 768px) {
                .mbxv2-campaign-layout {
                    grid-template-columns: 0.8fr 1.2fr;
                    gap: 3rem;
                }
            }

            .mbxv2-campaign-image {
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 16px 48px rgba(0,0,0,0.12);
                position: relative;
                max-width: 450px;
            }

            .mbxv2-campaign-image img {
                width: 100%;
                height: auto;
                display: block;
            }

            .mbxv2-campaign-content {
                padding: 1rem 0;
            }

            .mbxv2-campaign-number {
                font-size: 3rem;
                font-weight: 900;
                color: var(--meaux-teal);
                margin-bottom: 0.5rem;
            }

            .mbxv2-heading-2 {
                font-size: clamp(2.5rem, 6vw, 4rem);
                font-weight: 900;
                line-height: 1.1;
                letter-spacing: -0.02em;
                margin: 0;
            }

            .mbxv2-campaign-text {
                color: var(--meaux-ink);
                margin-bottom: 1rem;
                font-size: 1.375rem;
                font-weight: 500;
                line-height: 1.6;
            }

            .mbxv2-campaign-text strong {
                color: var(--meaux-orange);
                font-weight: 800;
            }

            .mbxv2-progress {
                margin: 2rem 0;
            }

            .mbxv2-progress-bar {
                height: 16px;
                background: rgba(51,153,153,0.1);
                border-radius: 999px;
                overflow: hidden;
                position: relative;
            }

            .mbxv2-progress-fill {
                height: 100%;
                background: linear-gradient(90deg, var(--meaux-teal), #2C8B8B);
                border-radius: 999px;
                transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
                position: relative;
            }

            .mbxv2-progress-fill::after {
                content: '';
                position: absolute;
                inset: 0;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                animation: mbxv2-shimmer 2s infinite;
            }

            @keyframes mbxv2-shimmer {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }

            .mbxv2-progress-text {
                display: flex;
                justify-content: space-between;
                margin-top: 0.75rem;
                font-size: 1.125rem;
                font-weight: 600;
                color: var(--meaux-ink);
            }

            .mbxv2-progress-amount {
                font-weight: 800;
                color: var(--meaux-ink);
            }

            .mbxv2-btn-group {
                display: flex;
                gap: 1rem;
                flex-wrap: wrap;
                align-items: center;
                margin-top: 2rem;
            }

            .mbxv2-btn {
                display: inline-block;
                padding: 16px 32px;
                border-radius: 12px;
                font-weight: 800;
                font-size: 18px;
                text-decoration: none;
                transition: all .2s ease;
                cursor: pointer;
                border: none;
                position: relative;
                overflow: hidden;
                background: var(--meaux-white);
            }

            .mbxv2-btn-primary {
                background: linear-gradient(135deg, var(--meaux-orange) 0%, var(--meaux-orange-hover) 100%);
                color: white;
                box-shadow: 0 8px 20px rgba(255,107,53,0.3);
            }

            .mbxv2-btn-primary:hover {
                transform: translateY(-3px);
                box-shadow: 0 12px 28px rgba(255,107,53,0.4);
            }

            .mbxv2-btn-outline {
                color: var(--meaux-orange);
                background: white;
                border: 2px solid var(--meaux-orange);
                box-shadow: 0 0 20px rgba(255,107,53,0.2);
            }

            .mbxv2-btn-outline:hover {
                transform: translateY(-2px);
                box-shadow: 0 0 30px rgba(255,107,53,0.4), 0 8px 16px rgba(255,107,53,0.2);
                border-color: var(--meaux-orange-hover);
            }

            /* Community Section */
            .mbxv2-community {
                padding: 3rem 0;
                background: linear-gradient(180deg, white 0%, #F7FAFB 100%);
                position: relative;
            }

            .mbxv2-community-layout {
                display: grid;
                grid-template-columns: 1fr;
                gap: 2rem;
                align-items: center;
                max-width: 1100px;
                margin: 0 auto;
            }

            @media (min-width: 768px) {
                .mbxv2-community-layout {
                    grid-template-columns: 1fr 1fr;
                    gap: 3rem;
                }
            }

            .mbxv2-community-image {
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 16px 48px rgba(0,0,0,0.12);
                transform: scale(1);
                transition: transform 0.8s ease;
            }

            .mbxv2-community-image.scaled {
                transform: scale(1.05);
            }

            .mbxv2-community-image img {
                width: 100%;
                height: auto;
                display: block;
            }

            .mbxv2-text-lead {
                font-size: clamp(1.5rem, 2.5vw, 1.875rem);
                font-weight: 600;
                line-height: 1.4;
                color: var(--meaux-ink);
            }

            .mbxv2-text-body {
                font-size: clamp(1.25rem, 2vw, 1.5rem);
                font-weight: 500;
                line-height: 1.6;
            }

            /* 3D Model */
            .mbxv2-3d-wrapper {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                pointer-events: none;
                z-index: 1;
                opacity: 0;
                transition: opacity 0.6s ease;
            }

            .mbxv2-3d-wrapper.active {
                opacity: 1;
            }

            .mbxv2-3d-model {
                position: absolute;
                right: 5%;
                top: 20%;
                width: 450px;
                height: 450px;
                opacity: 0.2;
                transform: translateY(0) translateZ(0);
                will-change: transform;
                transition: transform 0.1s linear;
            }

            @media (min-width: 1200px) {
                .mbxv2-3d-model {
                    width: 550px;
                    height: 550px;
                    right: 8%;
                }
            }

            .mbxv2-3d-model model-viewer {
                width: 100%;
                height: 100%;
                background: transparent;
                --poster-color: transparent;
            }

            /* Partners Section */
            .mbxv2-partners {
                padding: 3rem 0 5rem;
                background: linear-gradient(180deg, #F7FAFB 0%, rgba(51,153,153,0.05) 30%, rgba(51,153,153,0.15) 70%, var(--meaux-teal) 100%);
                position: relative;
                overflow: hidden;
            }

            .mbxv2-particle {
                position: absolute;
                width: 6px;
                height: 6px;
                background: radial-gradient(circle, rgba(51,153,153,0.8) 0%, transparent 70%);
                border-radius: 50%;
                animation: mbxv2-float 15s infinite;
                pointer-events: none;
            }

            @keyframes mbxv2-float {
                0% { transform: translateY(100vh) translateX(0) scale(0); opacity: 0; }
                10%, 90% { opacity: 0.6; }
                100% { transform: translateY(-100vh) translateX(100px) scale(1); opacity: 0; }
            }

            .mbxv2-particle:nth-child(1) { left: 10%; animation-delay: 0s; animation-duration: 13s; }
            .mbxv2-particle:nth-child(2) { left: 25%; animation-delay: 2s; animation-duration: 16s; }
            .mbxv2-particle:nth-child(3) { left: 40%; animation-delay: 4s; animation-duration: 14s; }
            .mbxv2-particle:nth-child(4) { left: 60%; animation-delay: 1s; animation-duration: 18s; }
            .mbxv2-particle:nth-child(5) { left: 75%; animation-delay: 3s; animation-duration: 15s; }
            .mbxv2-particle:nth-child(6) { left: 90%; animation-delay: 5s; animation-duration: 12s; }

            .mbxv2-partners-header {
                text-align: center;
                margin-bottom: 3rem;
                position: relative;
                z-index: 2;
            }

            .mbxv2-partners-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 3rem 2rem;
                position: relative;
                z-index: 2;
                max-width: 1000px;
                margin: 0 auto;
            }

            @media (max-width: 768px) {
                .mbxv2-partners-grid {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 2rem 1.5rem;
                }
            }

            .mbxv2-partner-logo {
                position: relative;
                height: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: transform 0.3s ease;
            }

            .mbxv2-partner-logo:hover {
                transform: translateY(-8px) scale(1.05);
            }

            .mbxv2-partner-logo .logo-a,
            .mbxv2-partner-logo .logo-b {
                position: absolute;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .mbxv2-partner-logo img {
                max-width: 180px;
                max-height: 80px;
                width: auto;
                height: auto;
                object-fit: contain;
                filter: drop-shadow(0 4px 8px rgba(0,0,0,0.15));
            }

            .mbxv2-partner-logo .logo-b {
                opacity: 0;
                transform: scale(0.85) rotateY(180deg);
            }

            .mbxv2-partner-logo[data-state="b"] .logo-a {
                opacity: 0;
                transform: scale(0.85) rotateY(-180deg);
            }

            .mbxv2-partner-logo[data-state="b"] .logo-b {
                opacity: 1;
                transform: scale(1) rotateY(0);
            }

            .mbxv2-partner-logo.swapping .logo-a,
            .mbxv2-partner-logo.swapping .logo-b {
                transition-duration: 0.8s;
            }

            .mbxv2-partners-cta {
                text-align: center;
                margin-top: 3rem;
                position: relative;
                z-index: 2;
            }

            .mbxv2-partners-link {
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                color: white;
                font-size: 1.125rem;
                font-weight: 800;
                text-decoration: none;
                padding: 16px 32px;
                background: linear-gradient(135deg, #8b5cf6 0%, #9b6cf8 100%);
                border-radius: 12px;
                transition: all 0.3s ease;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }

            .mbxv2-partners-link:hover {
                transform: translateY(-2px) scale(1.02);
                box-shadow: 0 0 30px rgba(139,92,246,0.6);
            }

            @media (max-width: 768px) {
                .hero-section {
                    padding: 30px 16px;
                    min-height: auto;
                }
                .header-content {
                    margin-bottom: 40px;
                }
                .header-title {
                    font-size: 2rem;
                }
                .header-subtitle {
                    font-size: 1.05rem;
                }
                .video-floating-wrapper {
                    padding: 12px;
                    border-radius: 16px;
                }
                .video-aspect-container {
                    border-radius: 12px;
                }
                .video-info {
                    margin-top: 24px;
                    padding: 0 16px;
                }
                .cta-button {
                    width: 100%;
                    justify-content: center;
                    padding: 14px 28px;
                }
            }

            @media (max-width: 480px) {
                .header-badge {
                    font-size: 0.75rem;
                    padding: 6px 16px;
                }
                .video-floating-wrapper {
                    padding: 8px;
                }
            }

            @media (prefers-reduced-motion: reduce) {
                * {
                    animation-duration: 0.01ms !important;
                    transition-duration: 0.01ms !important;
                }
            }

            .desktop-only {
                display: block;
            }

            @media (max-width: 768px) {
                .desktop-only {
                    display: none;
                }
            }
        `})}function it(){return a.useEffect(()=>{const t=`
            (function(){
                const root = document.getElementById('meaux-journey-hero');
                if(!root) return;
                const frames = Array.from(root.querySelectorAll('.mjh-frame'));
                const frame1 = document.getElementById('mjh-frame-1');
                const img1 = document.getElementById('mjh-img-1');
                const images = Array.from(root.querySelectorAll('.mjh-img'));
                const kickers = Array.from(root.querySelectorAll('.mjh-kicker'));
                const titles = Array.from(root.querySelectorAll('.mjh-title'));
                const bodies = Array.from(root.querySelectorAll('.mjh-body'));
                const ctas = Array.from(root.querySelectorAll('.story-cta'));
                const quotes = Array.from(root.querySelectorAll('.quote-display'));
                const secondaryTitle = root.querySelector('.secondary-title');
                const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                
                const img2 = document.getElementById('mjh-img-2');
                if (img2) {
                    const lqipSVG = encodeURIComponent(
                        "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 48' preserveAspectRatio='xMidYMid slice'>"
                        + "<defs><linearGradient id='g' x1='0' y1='0' x2='0' y2='1'>"
                        + "<stop offset='0%' stop-color='#dfe9ea'/>"
                        + "<stop offset='100%' stop-color='#b6cacc'/>"
                        + "</linearGradient></defs>"
                        + "<rect width='32' height='48' fill='url(#g)'/>"
                        + "</svg>"
                    );
                    img2.style.backgroundImage = "url('data:image/svg+xml;charset=utf-8," + lqipSVG + "')";
                    img2.addEventListener('load', () => {
                        img2.classList.remove('lqip');
                        setTimeout(()=>{ img2.style.backgroundImage = 'none'; }, 320);
                    }, { once:true });
                }
                
                const revealObserver = new IntersectionObserver((entries)=>{
                    entries.forEach(e=>{
                        if(!e.isIntersecting) return;
                        const el = e.target;
                        if (el.classList.contains('mjh-frame')) el.classList.add('reveal');
                        if (el.classList.contains('quote-display')) el.classList.add('reveal');
                        if (el.classList.contains('secondary-title')) {
                            el.classList.add('reveal');
                            el.querySelectorAll('.word').forEach((w: any)=>{ w.style.opacity='1'; w.style.transform='translateY(0)'});
                        }
                        if (el.classList.contains('mjh-kicker') ||
                            el.classList.contains('mjh-body') ||
                            el.classList.contains('story-cta') ||
                            el.classList.contains('mjh-title')) {
                            el.style.opacity = '1';
                            el.style.transform = 'translateY(0)';
                            if (el.classList.contains('mjh-title')) {
                                el.querySelectorAll('.word').forEach((w: any,i: number)=>{
                                    w.style.opacity='1';
                                    w.style.transform='translateY(0)';
                                    w.style.transitionDelay = (i*60)+'ms';
                                });
                            }
                        }
                        revealObserver.unobserve(el);
                    });
                }, {threshold:.35, rootMargin:'0px 0px -10% 0px'});
                
                [...frames, ...kickers, ...titles, ...bodies, ...ctas, ...quotes, secondaryTitle].forEach((el: any)=>{
                    if (el) revealObserver.observe(el);
                });
                
                if (frame1 && !prefersReduced) {
                    const exitObserver = new IntersectionObserver((entries)=>{
                        entries.forEach(e=>{
                            const rect = e.target.getBoundingClientRect();
                            const leavingUp = rect.bottom < (window.innerHeight * 0.12);
                            const mostlyOut = e.intersectionRatio < 0.2 && rect.top < 0;
                            if (leavingUp || mostlyOut) {
                                frame1.classList.add('morph-out');
                            } else {
                                frame1.classList.remove('morph-out');
                            }
                        });
                    }, {threshold:[0,0.2,0.4,0.8,1]});
                    exitObserver.observe(frame1);
                }
                
                let raf: number;
                function onScroll(){
                    if (prefersReduced) return;
                    if (raf) cancelAnimationFrame(raf);
                    raf = requestAnimationFrame(()=>{
                        images.forEach((img: any)=>{
                            const rect = img.parentElement.getBoundingClientRect();
                            const vh = Math.max(window.innerHeight, document.documentElement.clientHeight);
                            const center = rect.top + rect.height/2;
                            const delta = (center - vh/2) / (vh/2);
                            const p = Math.max(-1, Math.min(1, delta));
                            const baseDrift = window.innerWidth < 768 ? 12 : 18;
                            const baseRot = window.innerWidth < 768 ? 0.35 : 0.6;
                            const baseScale = window.innerWidth < 768 ? 0.04 : 0.06;
                            const y = p * -baseDrift;
                            const rot = p * baseRot;
                            const scale = 1.0 + Math.abs(p) * baseScale;
                            img.style.setProperty('--imgY', y.toFixed(2)+'px');
                            img.style.setProperty('--imgRot', rot.toFixed(3)+'deg');
                            img.style.setProperty('--imgScale', scale.toFixed(3));
                        });
                    });
                }
                onScroll();
                window.addEventListener('scroll', onScroll, {passive:true});
                window.addEventListener('resize', onScroll, {passive:true});
            })();
        `,i=`
            (function() {
                const WINK_INTERVAL = 15000;
                const WINK_DURATION = 600;
                const grid = document.getElementById('partnersGrid');
                if (!grid) return;
                const logos = Array.from(grid.querySelectorAll('.logo'));
                const reduceMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
                if (reduceMotion) return;
                logos.forEach((logo: any, index: number) => {
                    const delay = index * 2500;
                    setTimeout(() => {
                        winkLogo(logo);
                        setInterval(() => { winkLogo(logo); }, WINK_INTERVAL);
                    }, delay);
                });
                function winkLogo(logo: any) {
                    const currentState = logo.getAttribute('data-state');
                    const newState = currentState === 'a' ? 'b' : 'a';
                    logo.classList.add('winking');
                    setTimeout(() => { logo.setAttribute('data-state', newState); }, 50);
                    setTimeout(() => { logo.classList.remove('winking'); }, WINK_DURATION);
                }
                logos.forEach((logo: any) => {
                    logo.addEventListener('mouseenter', () => {
                        if (!logo.classList.contains('winking')) { winkLogo(logo); }
                    });
                });
            })();
        `,s=`
            (function () {
                const section = document.querySelector('.mvf-symphony');
                if (!section || (section as any).dataset.initialized) return;
                (section as any).dataset.initialized = '1';
                const isCoarse = window.matchMedia('(pointer:coarse)').matches;
                const updateProgress = () => {
                    const scrolled = window.scrollY;
                    const height = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
                    const progress = Math.min(scrolled / height, 1);
                    (section as HTMLElement).style.setProperty('--progress', String(progress));
                };
                const handleParallax = () => {
                    const scrolled = window.scrollY;
                    section.querySelectorAll('.meaux-vision-text').forEach((item: any, index: number) => {
                        const base = isCoarse ? 0.03 : 0.1;
                        const speed = 0.5 + (index * 0.1);
                        const yPos = -(scrolled * speed * base);
                        item.style.setProperty('--parallax-offset', yPos + 'px');
                    });
                };
                const observerOptions = { root: null, rootMargin: '0px', threshold: [0.25, 0.4, 0.55, 0.7] };
                const itemObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
                            entry.target.classList.add('in-view');
                            const fallable = entry.target.querySelector('.mvf-fallable.dramatic');
                            if (fallable) {
                                const trigger = parseFloat((fallable as any).dataset.fallTrigger || '0.55');
                                if (entry.intersectionRatio >= trigger && !fallable.classList.contains('falling')) {
                                    fallable.classList.add('falling');
                                }
                            }
                        }
                    });
                }, observerOptions);
                section.querySelectorAll('.meaux-vision-item').forEach((item: any) => itemObserver.observe(item));
                section.querySelectorAll('.meaux-vision-visual img').forEach((img: any) => {
                    const skeleton = img.previousElementSibling;
                    if (img.complete) { skeleton?.classList.add('loaded'); }
                    else { img.addEventListener('load', () => setTimeout(() => skeleton?.classList.add('loaded'), 100)); }
                });
                let ticking = false;
                const raf = (fn: () => void) => { if (!ticking) { requestAnimationFrame(() => { fn(); ticking = false; }); ticking = true; } };
                window.addEventListener('scroll', () => raf(() => { updateProgress(); handleParallax(); }), { passive: true });
                document.addEventListener('visibilitychange', () => {
                    if (document.hidden) section.classList.add('paused');
                    else section.classList.remove('paused');
                });
                updateProgress(); handleParallax();
            })();
        `,g=document.createElement("script");g.textContent=t,document.body.appendChild(g);const n=document.createElement("script");n.textContent=i,document.body.appendChild(n);const x=document.createElement("script");return x.textContent=s,document.body.appendChild(x),()=>{g.remove(),n.remove(),x.remove()}},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
                *{margin:0;padding:0;box-sizing:border-box}
                #meaux-journey-hero{
                    --orange:#FF7619;
                    --orange-vivid:#ff6000;
                    --orange-light:#ff9854;
                    --teal:#0a4f4f;
                    --ink:#0b1f24;
                    --muted:#546a70;
                    --white:#fff;
                    --radius:22px;
                    --shadow:0 18px 48px rgba(0,0,0,.22);
                    --dur:900ms;
                    --ease:cubic-bezier(.2,.7,.2,1);
                    --stickyTop:clamp(56px,8vh,120px);
                    --contentMax:1240px;
                    --gutter:clamp(16px,3vw,28px);
                }
                .mjh-section{
                    position:relative;
                    background:
                        radial-gradient(ellipse 1600px 1000px at -10% -5%,
                            rgba(255,96,0,.45) 0%,
                            rgba(255,118,25,.35) 15%,
                            rgba(255,118,25,.22) 28%,
                            rgba(255,152,84,.12) 42%,
                            rgba(255,182,134,.08) 58%,
                            rgba(255,200,154,.04) 70%,
                            transparent 85%),
                        radial-gradient(ellipse 900px 700px at 16% 22%,
                            rgba(255,118,25,.20) 0%,
                            rgba(255,152,84,.12) 28%,
                            transparent 58%),
                        radial-gradient(circle 700px at 90% 90%,
                            rgba(255,118,25,.08) 0%,
                            transparent 48%),
                        radial-gradient(ellipse 1200px 800px at 50% 50%,
                            rgba(51,153,153,.06) 0%,
                            transparent 45%),
                        linear-gradient(180deg, #ffffff 0%, #fafbfc 100%);
                    color:var(--ink);
                    padding:8vh var(--gutter) 10vh;
                    overflow:hidden;
                }
                .mjh-section::before{
                    content:"";
                    position:absolute;top:-15%;left:-10%;width:50%;height:50%;
                    background:radial-gradient(circle,rgba(255,96,0,.12) 0%,transparent 70%);
                    border-radius:40% 60% 70% 30%/40% 50% 60% 50%;
                    animation:float 25s ease-in-out infinite;
                    pointer-events:none;
                }
                @keyframes float{0%,100%{transform:translate(0,0) rotate(0) scale(1)}33%{transform:translate(30px,20px) rotate(120deg) scale(1.08)}66%{transform:translate(-20px,-10px) rotate(240deg) scale(.96)}}
                .mjh-wrap{max-width:var(--contentMax);margin:0 auto;position:relative;z-index:1}
                .mjh-pair{display:grid;gap:var(--gutter);grid-template-columns:1fr;align-items:start;padding-block:clamp(40px,8vh,96px)}
                @media(min-width:980px){
                    .mjh-pair{grid-template-columns:1fr 1fr;gap:clamp(28px,4vw,56px)}
                    .mjh-pair.pair-1 .mjh-media{order:1}
                    .mjh-pair.pair-1 .mjh-content{order:2}
                    .mjh-pair.pair-2 .mjh-media{order:2}
                    .mjh-pair.pair-2 .mjh-content{order:1}
                }
                @media(max-width:979.98px){
                    .mjh-pair .mjh-media{order:1}
                    .mjh-pair .mjh-content{order:2}
                }
                .mjh-media{position:relative;height:78vh;min-height:520px}
                @media(min-width:980px){ .mjh-media{position:sticky;top:var(--stickyTop)} }
                .mjh-frame{
                    position:relative;width:100%;height:100%;
                    border-radius:var(--radius);overflow:hidden;
                    box-shadow:var(--shadow);background:#071014;isolation:isolate;
                    clip-path:inset(18% round calc(var(--radius) * 1.2));
                    transition:
                        clip-path var(--dur) var(--ease),
                        box-shadow var(--dur) var(--ease),
                        transform 900ms cubic-bezier(.19,1,.22,1),
                        opacity 600ms var(--ease),
                        border-radius 900ms var(--ease);
                }
                .mjh-frame.reveal{
                    clip-path:inset(0 round var(--radius));
                    box-shadow:0 22px 60px rgba(0,0,0,.25);
                    transform:translateZ(0) scale(1.0);
                    opacity:1;
                }
                .mjh-frame.morph-out{
                    border-radius:42% 58% 50% 48%/46% 52% 56% 48%;
                    transform:translateY(-10px) rotate(-1.2deg) scale(.985);
                    opacity:.92;
                    clip-path:inset(-4% round 46% 52% 56% 48%);
                    box-shadow:0 18px 48px rgba(0,0,0,.18);
                }
                .mjh-frame::before{
                    content:"";position:absolute;inset:-2px;border-radius:inherit;pointer-events:none;opacity:.0;
                    background:
                        conic-gradient(from 210deg at 50% 50%,
                            rgba(255,118,25,.0) 0 20%,
                            rgba(255,118,25,.35) 30%,
                            rgba(255,152,84,.25) 40%,
                            rgba(255,118,25,.0) 60%,
                            rgba(255,118,25,.0) 100%);
                    filter:blur(14px);
                    transition:opacity 800ms var(--ease);
                }
                .mjh-frame.reveal::before{opacity:.9}
                .mjh-img{
                    position:absolute;inset:0;width:100%;height:100%;object-fit:cover;
                    will-change:transform, filter, opacity, background-image;
                    transform: translateY(var(--imgY,0px)) rotate(var(--imgRot,0deg)) scale(var(--imgScale,1.06));
                    transition: transform 900ms cubic-bezier(.19,1,.22,1), filter 600ms var(--ease), opacity 600ms var(--ease), background-image 0s linear 300ms;
                    background-position:center;background-repeat:no-repeat;background-size:cover;
                }
                .mjh-img.lqip{
                    filter: blur(14px);
                    opacity: .85;
                    transform: translateY(var(--imgY,0px)) rotate(var(--imgRot,0deg)) scale(calc(var(--imgScale,1.06) + .02));
                }
                .mjh-frame::after{
                    content:"";position:absolute;inset:0;pointer-events:none;mix-blend:multiply;opacity:.04;
                    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='.3'/%3E%3C/svg%3E");
                    background-size:120px 120px;
                }
                .mjh-content{display:grid;align-content:center;gap:24px}
                .mjh-kicker{font-size:.92rem;letter-spacing:.12em;text-transform:uppercase;color:var(--orange);font-weight:800;opacity:0;transform:translateY(20px);transition:all 600ms var(--ease)}
                .mjh-title{font-size:clamp(32px,5vw,56px);line-height:1.1;font-weight:900;letter-spacing:-.02em;margin-bottom:10px}
                .mjh-title .word{display:inline-block;opacity:0;transform:translateY(18px);transition:transform 600ms var(--ease),opacity 600ms var(--ease)}
                .mjh-title .accent-orange{color:var(--orange)}
                .mjh-title .accent-teal{color:var(--teal)}
                .mjh-body{color:#1a2d31;font-size:clamp(17px,1.55vw,19px);line-height:1.8;max-width:64ch;font-weight:500;opacity:0;transform:translateY(18px);transition:all 700ms var(--ease) 80ms;text-shadow:0 1px 2px rgba(255,255,255,0.8)}
                .story-cta{margin-top:20px;opacity:0;transform:translateY(18px);transition:all 700ms var(--ease) 120ms}
                .story-link{display:inline-block;position:relative;color:var(--orange);font-size:1.1rem;font-weight:700;text-decoration:none;padding:12px 0;transition:color .3s ease}
                .story-link::after{content:"→";display:inline-block;margin-left:8px;transition:transform .3s ease}
                .story-link::before{content:"";position:absolute;bottom:10px;left:0;width:0;height:2px;background:linear-gradient(90deg,var(--orange),var(--orange-light));transition:width .3s ease}
                .story-link:hover::after{transform:translateX(5px)}
                .story-link:hover::before{width:100%}
                .quote-display{position:relative;margin:40px 0;padding:0;font-size:clamp(24px,3vw,36px);line-height:1.4;font-weight:400;color:#0c1f24;font-style:italic;opacity:0;transform:translateY(30px);transition:all 800ms var(--ease) 140ms;max-width:28ch;text-shadow:0 1px 3px rgba(255,255,255,0.9)}
                .quote-display.reveal{opacity:1;transform:translateY(0)}
                .quote-display .quote-mark{position:absolute;top:-20px;left:-30px;font-size:80px;color:rgba(255,118,25,.15);font-family:Georgia,serif}
                .quote-display strong{color:var(--orange);font-weight:700}
                .quote-cite{display:block;margin-top:16px;font-size:1rem;color:var(--orange);font-weight:600;font-style:normal;opacity:.0;transition:opacity 600ms var(--ease) 300ms}
                .quote-display.reveal .quote-cite{opacity:1}
                @media(min-width:980px){
                    .quote-1{align-self:center; transform:translateY(30px) translateX(-6vw);}
                    .quote-1.reveal{transform:translateY(0) translateX(-6vw);}
                    .quote-2{align-self:flex-start; margin-top:8vh; transform:translateY(40px);}
                    .quote-2.reveal{transform:translateY(0);}
                }
                .secondary-title{font-size:clamp(28px,4vw,48px);line-height:1.2;font-weight:900;color:var(--teal);text-align:center;margin:60px 0 40px;opacity:0;transform:translateY(30px);transition:all 700ms var(--ease)}
                .secondary-title.reveal{opacity:1;transform:translateY(0)}
                .secondary-title .word{display:inline-block;opacity:0;transform:translateY(16px);transition:transform 600ms var(--ease),opacity 600ms var(--ease)}
                .secondary-title.reveal .word{opacity:1;transform:translateY(0)}
                .secondary-title.reveal .word:nth-child(1){transition-delay:.06s}
                .secondary-title.reveal .word:nth-child(2){transition-delay:.12s}
                .secondary-title.reveal .word:nth-child(3){transition-delay:.18s}
                .secondary-title.reveal .word:nth-child(4){transition-delay:.24s}
                @media (prefers-reduced-motion:reduce){
                    *,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}
                    .mjh-img{transform:none!important;filter:none!important}
                    .mjh-frame{clip-path:unset!important}
                    .mjh-frame.morph-out{transform:none!important;border-radius:var(--radius)!important;clip-path:none!important;opacity:1!important}
                }
                @media(max-width:768px){
                    .mjh-title{font-size:clamp(28px,8vw,40px)}
                    .quote-display{font-size:clamp(20px,5vw,28px);max-width:32ch}
                    .quote-display .quote-mark{font-size:60px;left:-20px}
                }
            `}}),e.jsx("section",{id:"meaux-journey-hero",className:"mjh-section","aria-label":"Journey Hero",children:e.jsxs("div",{className:"mjh-wrap",children:[e.jsxs("div",{className:"mjh-pair pair-1",id:"mjh-pair-1",children:[e.jsx("div",{className:"mjh-media",children:e.jsx("figure",{className:"mjh-frame",id:"mjh-frame-1","aria-labelledby":"mjh-title-1",children:e.jsx("img",{className:"mjh-img",id:"mjh-img-1",src:"https://cdn.shopify.com/s/files/1/0685/1654/4672/files/TINYYYY_SAM_HOSPITAL.jpg?v=1756620941",alt:"Early recovery in the hospital — the starting line",loading:"eager",fetchPriority:"high"})})}),e.jsxs("div",{className:"mjh-content",children:[e.jsx("span",{className:"mjh-kicker",children:"My Journey"}),e.jsxs("h1",{className:"mjh-title",id:"mjh-title-1",children:[e.jsx("span",{className:"word",children:"Turning"}),e.jsx("span",{className:"word accent-orange",children:"Pain"}),e.jsx("span",{className:"word",children:"into"}),e.jsx("span",{className:"word",children:"Purpose"})]}),e.jsx("p",{className:"mjh-body",children:"Eight years ago, a motorcycle accident left me paralyzed from the chest down. Doctors said I'd never walk again. But I discovered something they didn't account for: the power of refusing to accept limits. Through experimental treatments, countless hours of training, and support from unexpected heroes, I went from complete paralysis to taking steps they said were impossible. Now I'm building the resource I desperately needed—a bridge between survivors and the treatments that can change everything."}),e.jsx("div",{className:"story-cta",children:e.jsx("a",{href:"/our-story",className:"story-link",children:"Read Sam's Story"})}),e.jsxs("div",{className:"quote-display quote-1",children:[e.jsx("span",{className:"quote-mark",children:'"'}),"Near-death taught me the math of living:",e.jsx("br",{}),e.jsx("strong",{children:"More Options + More Access = More Life"}),e.jsx("cite",{className:"quote-cite",children:"— Sam Primeaux"})]})]})]}),e.jsxs("div",{className:"secondary-title",children:[e.jsx("span",{className:"word",children:"and"}),e.jsx("span",{className:"word",children:"Purpose"}),e.jsx("span",{className:"word",children:"into"}),e.jsx("span",{className:"word accent-teal",children:"More Life"})]}),e.jsxs("div",{className:"mjh-pair pair-2",id:"mjh-pair-2",children:[e.jsxs("div",{className:"mjh-media",children:[e.jsx("figure",{className:"mjh-frame","aria-labelledby":"mjh-title-2",children:e.jsx("img",{className:"mjh-img lqip",id:"mjh-img-2",src:"https://imagedelivery.net/g7wf09fCONpnidkRnR_5vw/photoroom-20231106-050738_1/public",alt:"Current progress — standing/walking with assistance",loading:"lazy",decoding:"async"})}),e.jsx("figure",{className:"mjh-frame",style:{marginTop:"1rem"},children:e.jsx("img",{className:"mjh-img lqip",src:"https://imagedelivery.net/g7wf09fCONpnidkRnR_5vw/dsc06919_7183904c-7e62-4901-b517-596f0fd857c8/public",alt:"Recovery journey and community support",loading:"lazy",decoding:"async"})})]}),e.jsxs("div",{className:"mjh-content",children:[e.jsx("span",{className:"mjh-kicker",children:"The Mission"}),e.jsxs("h2",{className:"mjh-title",id:"mjh-title-2",children:[e.jsx("span",{className:"word",children:"From"}),e.jsx("span",{className:"word",children:"Near-Death"}),e.jsx("span",{className:"word",children:"to"}),e.jsx("span",{className:"word accent-orange",children:"Now"})]}),e.jsx("p",{className:"mjh-body",children:'Pain became my compass, pointing toward purpose. Every setback taught me to build better systems. Every breakthrough proved that "impossible" is just uninformed. Meauxbility exists because no one should navigate recovery alone in the dark, searching for answers that already exist.'}),e.jsxs("div",{className:"quote-display quote-2",children:[e.jsx("span",{className:"quote-mark",children:'"'}),"What stands in the way becomes the way—",e.jsx("br",{}),e.jsx("strong",{children:"when you keep moving forward"}),e.jsx("cite",{className:"quote-cite",children:"— Marcus Aurelius, adapted"})]})]})]})]})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
                #meaux-partners {
                    --teal: #339999;
                    --teal-light: #4ABAB8;
                    --teal-glow: rgba(74, 186, 184, 0.3);
                    --teal-mid: #2C8B8B;
                    --teal-dark: #237373;
                    --orange: #FF6B35;
                    --orange-bright: #FF7A00;
                    --text-dark: #0C2D31;
                    --white: #FFFFFF;
                    --max-width: 1440px;
                    --gap: clamp(24px, 4vw, 48px);
                    --row-gap: clamp(28px, 5vw, 64px);
                    --logo-w: clamp(152px, 21vw, 264px);
                    --logo-h: clamp(50px, 7.2vw, 82px);
                    position: relative;
                    width: 100vw;
                    overflow: hidden;
                    background: linear-gradient(
                        180deg,
                        rgba(255,255,255,0) 0%,
                        rgba(51,153,153,0.02) 8%,
                        rgba(51,153,153,0.06) 18%,
                        rgba(51,153,153,0.14) 32%,
                        rgba(51,153,153,0.26) 48%,
                        rgba(51,153,153,0.42) 65%,
                        rgba(51,153,153,0.65) 82%,
                        rgba(51,153,153,0.88) 94%,
                        #339999 100%
                    );
                    padding: clamp(48px, 6vw, 96px) 0 clamp(100px, 12vw, 160px);
                    margin-bottom: -2px;
                }
                #meaux-partners::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: 
                        radial-gradient(circle at 25% 40%, rgba(74,186,184,0.08) 0%, transparent 40%),
                        radial-gradient(circle at 75% 60%, rgba(255,107,53,0.04) 0%, transparent 35%);
                    mix-blend-mode: multiply;
                    opacity: 0.7;
                    animation: floatMesh 30s ease-in-out infinite;
                    pointer-events: none;
                }
                @keyframes floatMesh {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-20px, -10px) scale(1.05); }
                }
                .wave-transition {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 120px;
                    overflow: hidden;
                    z-index: 1;
                }
                .wave-transition svg {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 120px;
                    will-change: transform;
                }
                .wave-path-1 { animation: waveMotion1 20s ease-in-out infinite; }
                .wave-path-2 { animation: waveMotion2 15s ease-in-out infinite; }
                .wave-path-3 { animation: waveMotion3 25s ease-in-out infinite; }
                @keyframes waveMotion1 { 0%, 100% { transform: translateX(0) scaleY(1); } 50% { transform: translateX(50px) scaleY(1.1); } }
                @keyframes waveMotion2 { 0%, 100% { transform: translateX(0) scaleY(1); } 50% { transform: translateX(-30px) scaleY(0.9); } }
                @keyframes waveMotion3 { 0%, 100% { transform: translateX(0) scaleY(1); } 33% { transform: translateX(40px) scaleY(1.05); } 66% { transform: translateX(-40px) scaleY(0.95); } }
                #meaux-partners .wrap {
                    max-width: var(--max-width);
                    margin: 0 auto;
                    padding: 0 var(--gap);
                    text-align: center;
                    position: relative;
                    z-index: 2;
                }
                #meaux-partners h3 {
                    font-size: clamp(3rem, 6vw, 5rem);
                    font-weight: 800;
                    line-height: 1.1;
                    margin: 0 auto 2rem;
                    color: var(--text-dark);
                    font-family: 'Inter', system-ui, sans-serif;
                    position: relative;
                    display: inline-block;
                    cursor: pointer;
                    transition: color 0.4s ease, transform 0.4s ease;
                    text-shadow: 0 4px 15px rgba(31, 151, 169, 0.3);
                    letter-spacing: -0.02em;
                }
                #meaux-partners h3::after {
                    content: '';
                    position: absolute;
                    bottom: -8px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 4px;
                    background: var(--orange);
                    transition: width 0.6s ease;
                    border-radius: 2px;
                }
                #meaux-partners h3:hover {
                    color: var(--teal-light);
                    transform: scale(1.02);
                }
                #meaux-partners h3:hover::after { width: 100%; }
                #meaux-partners .grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: var(--row-gap) var(--gap);
                    align-items: center;
                    justify-items: center;
                    margin: clamp(32px, 4vw, 56px) 0;
                    position: relative;
                }
                #meaux-partners .logo {
                    position: relative;
                    width: var(--logo-w);
                    height: var(--logo-h);
                    display: inline-block;
                    cursor: pointer;
                    transform: translateY(0);
                    transition: transform 0.3s ease;
                }
                #meaux-partners .logo:hover {
                    transform: translateY(-4px) scale(1.03);
                }
                #meaux-partners .logo > * {
                    position: absolute;
                    inset: 0;
                    display: grid;
                    place-items: center;
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }
                #meaux-partners .mask {
                    width: 100%;
                    height: 100%;
                    background: transparent;
                    background-image: var(--src);
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: contain;
                    filter: 
                        drop-shadow(0 2px 4px rgba(74, 186, 184, 0.3))
                        drop-shadow(0 0 12px rgba(74, 186, 184, 0.15))
                        brightness(1.05);
                    will-change: filter;
                }
                #meaux-partners .logo:nth-child(1) .mask { animation: radiateGlow1 8s ease-in-out infinite; }
                #meaux-partners .logo:nth-child(2) .mask { animation: radiateGlow2 10s ease-in-out infinite; }
                #meaux-partners .logo:nth-child(3) .mask { animation: radiateGlow3 12s ease-in-out infinite; }
                #meaux-partners .logo:nth-child(4) .mask { animation: radiateGlow4 14s ease-in-out infinite; }
                #meaux-partners .logo:nth-child(5) .mask { animation: radiateGlow5 16s ease-in-out infinite; }
                #meaux-partners .logo:nth-child(6) .mask { animation: radiateGlow6 18s ease-in-out infinite; }
                @keyframes radiateGlow1 {
                    0%, 100% { 
                        filter: 
                            drop-shadow(0 2px 4px rgba(74, 186, 184, 0.3))
                            drop-shadow(0 0 12px rgba(74, 186, 184, 0.15))
                            brightness(1.05);
                    }
                    50% { 
                        filter: 
                            drop-shadow(0 2px 6px rgba(74, 186, 184, 0.4))
                            drop-shadow(0 0 24px rgba(74, 186, 184, 0.25))
                            brightness(1.08);
                    }
                }
                @keyframes radiateGlow2 {
                    0%, 100% { 
                        filter: 
                            drop-shadow(0 2px 4px rgba(74, 186, 184, 0.3))
                            drop-shadow(0 0 12px rgba(74, 186, 184, 0.15))
                            brightness(1.05);
                    }
                    50% { 
                        filter: 
                            drop-shadow(0 2px 6px rgba(74, 186, 184, 0.4))
                            drop-shadow(0 0 24px rgba(74, 186, 184, 0.25))
                            brightness(1.08);
                    }
                }
                @keyframes radiateGlow3 {
                    0%, 100% { 
                        filter: 
                            drop-shadow(0 2px 4px rgba(74, 186, 184, 0.3))
                            drop-shadow(0 0 12px rgba(74, 186, 184, 0.15))
                            brightness(1.05);
                    }
                    50% { 
                        filter: 
                            drop-shadow(0 2px 6px rgba(74, 186, 184, 0.4))
                            drop-shadow(0 0 24px rgba(74, 186, 184, 0.25))
                            brightness(1.08);
                    }
                }
                @keyframes radiateGlow4 {
                    0%, 100% { 
                        filter: 
                            drop-shadow(0 2px 4px rgba(74, 186, 184, 0.3))
                            drop-shadow(0 0 12px rgba(74, 186, 184, 0.15))
                            brightness(1.05);
                    }
                    50% { 
                        filter: 
                            drop-shadow(0 2px 6px rgba(74, 186, 184, 0.4))
                            drop-shadow(0 0 24px rgba(74, 186, 184, 0.25))
                            brightness(1.08);
                    }
                }
                @keyframes radiateGlow5 {
                    0%, 100% { 
                        filter: 
                            drop-shadow(0 2px 4px rgba(74, 186, 184, 0.3))
                            drop-shadow(0 0 12px rgba(74, 186, 184, 0.15))
                            brightness(1.05);
                    }
                    50% { 
                        filter: 
                            drop-shadow(0 2px 6px rgba(74, 186, 184, 0.4))
                            drop-shadow(0 0 24px rgba(74, 186, 184, 0.25))
                            brightness(1.08);
                    }
                }
                @keyframes radiateGlow6 {
                    0%, 100% { 
                        filter: 
                            drop-shadow(0 2px 4px rgba(74, 186, 184, 0.3))
                            drop-shadow(0 0 12px rgba(74, 186, 184, 0.15))
                            brightness(1.05);
                    }
                    50% { 
                        filter: 
                            drop-shadow(0 2px 6px rgba(74, 186, 184, 0.4))
                            drop-shadow(0 0 24px rgba(74, 186, 184, 0.25))
                            brightness(1.08);
                    }
                }
                #meaux-partners .logo:hover .mask {
                    filter: 
                        drop-shadow(0 2px 8px rgba(74, 186, 184, 0.5))
                        drop-shadow(0 0 30px rgba(74, 186, 184, 0.3))
                        brightness(1.1);
                }
                #meaux-partners .img-fallback { display: none !important; }
                #meaux-partners .logo .a {
                    opacity: 1;
                    transform: scaleY(1);
                }
                #meaux-partners .logo .b {
                    opacity: 0;
                    transform: scaleY(0.05);
                }
                #meaux-partners .logo.winking .a {
                    opacity: 0;
                    transform: scaleY(0.05);
                }
                #meaux-partners .logo.winking .b {
                    opacity: 1;
                    transform: scaleY(1);
                }
                #meaux-partners .logo[data-state="b"] .a {
                    opacity: 0;
                    transform: scaleY(0.05);
                }
                #meaux-partners .logo[data-state="b"] .b {
                    opacity: 1;
                    transform: scaleY(1);
                }
                #meaux-partners .cta {
                    display: inline-flex;
                    gap: 0.75rem;
                    align-items: center;
                    font: 700 clamp(15px, 1.8vw, 18px)/1.35 'Inter', system-ui, sans-serif;
                    text-decoration: none;
                    margin-top: 24px;
                    color: var(--white);
                    background: linear-gradient(135deg, 
                        rgba(255, 107, 53, 0.65) 0%, 
                        rgba(255, 122, 0, 0.55) 100%);
                    border: 2px solid rgba(255, 107, 53, 0.85);
                    padding: 14px 32px;
                    border-radius: 14px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 
                        0 4px 24px rgba(255, 107, 53, 0.35),
                        0 0 30px rgba(255, 107, 53, 0.2),
                        inset 0 1px 2px rgba(255, 255, 255, 0.2),
                        inset 0 -1px 2px rgba(0, 0, 0, 0.1);
                    text-transform: uppercase;
                    letter-spacing: 0.6px;
                    position: relative;
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
                }
                #meaux-partners .cta:hover {
                    transform: translateY(-2px);
                    background: linear-gradient(135deg, 
                        rgba(255, 107, 53, 0.75) 0%, 
                        rgba(255, 122, 0, 0.65) 100%);
                    border-color: rgba(255, 122, 0, 0.95);
                    box-shadow: 
                        0 6px 32px rgba(255, 107, 53, 0.45),
                        0 0 45px rgba(255, 107, 53, 0.3),
                        inset 0 1px 3px rgba(255, 255, 255, 0.3);
                }
                #meaux-partners .cta:active { transform: translateY(0); }
                #meaux-partners .cta span { position: relative; z-index: 1; }
                #meaux-partners .cta svg {
                    width: 20px;
                    height: 20px;
                    stroke: currentColor;
                    stroke-width: 2.5;
                    position: relative;
                    z-index: 1;
                    transition: transform 0.3s ease;
                }
                #meaux-partners .cta:hover svg { transform: translateX(4px); }
                @media (max-width: 900px) {
                    #meaux-partners .grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 32px 28px;
                    }
                }
                @media (max-width: 520px) {
                    #meaux-partners .grid {
                        grid-template-columns: 1fr;
                        gap: 28px;
                    }
                    #meaux-partners {
                        --logo-w: clamp(180px, 65vw, 260px);
                        --logo-h: clamp(56px, 15vw, 85px);
                        padding-bottom: clamp(100px, 15vw, 160px);
                    }
                    #meaux-partners h3 {
                        font-size: clamp(2.5rem, 8vw, 3.5rem);
                    }
                    #meaux-partners .cta {
                        padding: 12px 24px;
                        font-size: 14px;
                    }
                }
                @media (prefers-reduced-motion: reduce) {
                    #meaux-partners * {
                        animation: none !important;
                        transition: opacity 0.2s ease !important;
                    }
                    .wave-path-1, .wave-path-2, .wave-path-3 { animation: none !important; }
                }
            `}}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
                .mvf-symphony {
                    --ink:#0c1f24; --body:#1a2d31; --muted:#2b3d41; --edge:rgba(12,45,49,.08);
                    --glass:rgba(255,255,255,.96); --orange:#FF7619; --orange-glow:rgba(255,118,25,.6);
                    --symphony-delay:.4s; --stagger:.15s; --hover-speed:.35s; --scroll-speed:.8s;
                    font-family:'Inter', system-ui, sans-serif;
                    width:100%; min-height:100vh;
                    padding:clamp(80px,12vw,160px) clamp(20px,5vw,60px) clamp(60px,10vw,120px);
                    background:
                        linear-gradient(180deg,#ffffff 0%,#f9fcfc 20%,#f0f8f8 38%,#e6f4f4 58%,#daf1f1 75%,#cfeced 88%,#c5e8e9 100%),
                        radial-gradient(ellipse 1400px 900px at 95% 5%,
                            rgba(255,118,25,0.08) 0%,
                            rgba(255,152,84,0.04) 25%,
            transparent 50%),
            radial-gradient(ellipse 1000px 700px at 5% 95%,
            rgba(51,153,153,0.06) 0%,
            rgba(74,186,184,0.03) 30%,
            transparent 55%),
            radial-gradient(ellipse 800px 600px at 50% 50%,
            rgba(255,118,25,0.02) 0%,
            transparent 40%);
            color:var(--ink);
            position:relative; isolation:isolate; overflow-x:hidden;
                }
            .mvf-symphony::before{
                content:""; position:absolute; inset:0; opacity:.015; pointer-events:none; z-index:1;
            background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
                }
            .scroll-progress{
                position:fixed; top:0; left:0; width:100%; height:3px; z-index:100;
            background:linear-gradient(90deg,var(--orange) 0%, #ff9547 100%);
            transform-origin:left; transform:scaleX(var(--progress,0));
                }
            .meaux-vision-container{max - width:1440px; margin:0 auto; position:relative; z-index:2; }
            .meaux-vision-title{
                margin:0 auto clamp(40px,7vw,80px); max-width:80ch; font-weight:700;
            font-size:clamp(20px,2.2vw,24px); line-height:1.8; color:var(--body);
            text-align:center; text-wrap:balance; opacity:0; animation:titleReveal 1s ease-out var(--symphony-delay) forwards;
                }
            @keyframes titleReveal{
                0 % { opacity: 0; transform: translateY(40px) scale(.95) }
                    50%{transform:translateY(-5px) scale(1.01)}
            100%{opacity:1; transform:translateY(0) scale(1)}
                }
            .meaux-vision-item{
                position:relative; display:grid;
            grid-template-columns:minmax(380px,1fr) minmax(380px,1fr);
            gap:clamp(60px,8vw,120px); align-items:center;
            margin-bottom:clamp(100px,12vw,180px); padding:clamp(40px,5vw,60px) 0;
            opacity:0; transform:translateY(60px) scale(.98);
            animation:itemSymphony .8s cubic-bezier(.34,1.56,.64,1) forwards;
            animation-delay:calc(var(--symphony-delay) + var(--stagger) * var(--index,0));
            will-change:transform, opacity;
                }
            @keyframes itemSymphony{
                0 % { opacity: 0; transform: translateY(60px) scale(.98) rotate(.5deg) }
                    50%{transform:translateY(-10px) scale(1.02) rotate(-.2deg)}
            100%{opacity:1; transform:translateY(0) scale(1) rotate(0)}
                }
            .meaux-vision-item:nth-child(2){--index:1}
            .meaux-vision-item:nth-child(3){--index:2}
            .meaux-vision-item:nth-child(4){--index:3}
            .meaux-vision-item:nth-child(5){--index:4}
            .meaux-vision-item:nth-child(even) .meaux-vision-text{order:2}
            .meaux-vision-item:nth-child(even) .meaux-vision-visual{order:1}
            .meaux-vision-text{position:relative; z-index:2; padding:20px; }
            .core-value-title{
                display:inline-block; margin:0 0 12px; font-weight:800; letter-spacing:.1em; text-transform:uppercase;
            font-size:clamp(13px,1.5vw,15px); color:var(--orange); opacity:0;
            animation:eyebrowSlide .6s ease-out calc(var(--symphony-delay) + var(--stagger) * var(--index,0) + .2s) forwards;
                }
            @keyframes eyebrowSlide{from{opacity:0; transform:translateX(-20px)} to{opacity:1; transform:translateX(0)} }
            .meaux-vision-heading{
                font - weight:900; letter-spacing:-.03em; line-height:1.1;
            font-size:clamp(32px,4.5vw,48px); margin:0 0 20px; color:#0a1a1f; position:relative; display:inline-block; text-shadow:0 2px 4px rgba(255,255,255,0.9);
                }
            .meaux-vision-heading .u{position:relative; display:inline-block}
            .meaux-vision-heading .u::after{
                content:""; position:absolute; left:-5%; right:-5%; bottom:-8px; height:4px; border-radius:2px;
            background:linear-gradient(90deg,transparent,var(--orange),transparent);
            transform:scaleX(0); transform-origin:center; transition:transform .6s cubic-bezier(.16,1,.3,1);
                }
            .meaux-vision-item.in-view .u::after{
                transform:scaleX(1); box-shadow:0 0 20px var(--orange-glow),0 0 40px rgba(255,118,25,.3),0 0 60px rgba(255,118,25,.1);
            animation:sparkPulse 2s ease-in-out infinite;
                }
            @keyframes sparkPulse{0 %, 100 % { opacity: 1 }50%{opacity:.8; box-shadow:0 0 30px var(--orange-glow),0 0 60px rgba(255,118,25,.4)}}
            .meaux-vision-desc{font - weight:500; line-height:1.75; color:#0c1f24; font-size:clamp(18px,2vw,21px); margin:0 0 16px; max-width:65ch; text-shadow:0 1px 2px rgba(255,255,255,0.8); }
            .meaux-vision-subdesc{font - weight:400; line-height:1.7; color:#1a2d31; font-size:clamp(16px,1.8vw,19px); margin:0 0 20px; max-width:65ch; text-shadow:0 1px 2px rgba(255,255,255,0.7); }
            .value-definition{
                background:linear-gradient(135deg, rgba(255,255,255,.98), rgba(255,255,255,.92));
            border:1px solid rgba(255,118,25,.20); border-radius:16px; padding:18px 24px; margin-top:20px;
            font-style:italic; color:#0c1f24; backdrop-filter:blur(10px);
            box-shadow:0 4px 20px rgba(16,24,40,.12), 0 0 40px rgba(255,118,25,.08);
            transition:all var(--hover-speed) cubic-bezier(.34,1.56,.64,1);
                }
            .value-definition strong{color:#0a1a1f; font-weight:700; font-style:normal; text-shadow:0 1px 2px rgba(255,255,255,0.9); }
            .meaux-vision-visual{
                height:clamp(380px,45vw,520px); border-radius:24px; overflow:hidden;
            background:linear-gradient(135deg,#e9f4f4,#daf1f1);
            position:relative; box-shadow:0 10px 40px rgba(12,45,49,.15),0 2px 10px rgba(12,45,49,.08);
            transform:translateZ(0); transition:transform var(--hover-speed) cubic-bezier(.34,1.56,.64,1);
            will-change:transform;
                }
            .meaux-vision-visual::before{
                content:""; position:absolute; inset:0; background:linear-gradient(135deg,transparent,rgba(255,118,25,.1));
            opacity:0; transition:opacity var(--hover-speed) ease; z-index:1;
                }
            .meaux-vision-visual img{width:100%; height:100%; object-fit:cover; display:block; transition:transform var(--hover-speed) ease }
            @media (hover:hover) and (pointer:fine){
                    .meaux - vision - visual:hover{transform:translateY(-8px) scale(1.02) rotateX(2deg); box-shadow:0 20px 60px rgba(12,45,49,.2),0 10px 30px rgba(12,45,49,.12),0 0 60px rgba(255,118,25,.08) }
            .meaux-vision-visual:hover::before{opacity:1 }
            .meaux-vision-visual:hover img{transform:scale(1.08) rotate(.5deg) }
            .meaux-vision-item:hover .meaux-vision-text::before{transform:rotate(calc(var(--bg-rot,-6deg) + 5deg)) scale(1.15) translateY(var(--parallax-offset,0)); opacity:.15; }
                }
            .meaux-vision-text::before{
                content:""; position:absolute; z-index:-1; pointer-events:none;
            width:var(--bg-icon-size, clamp(280px, 36vw, 640px)); aspect-ratio:1;
            left:var(--bg-x,-10%); top:var(--bg-y,-20%);
            background-image:var(--bg-icon-src); background-size:contain; background-repeat:no-repeat; background-position:center;
            opacity:.08; filter:blur(.5px); transform:rotate(var(--bg-rot,-6deg)) scale(1) translateY(var(--parallax-offset,0));
            transition:all 1s cubic-bezier(.16,1,.3,1); animation:iconBreathe 4s ease-in-out infinite;
                }
            @keyframes iconBreathe{0 %, 100 % { transform: rotate(var(--bg-rot,-6deg)) scale(1) translateY(var(--parallax-offset,0))}50%{transform:rotate(calc(var(--bg-rot,-6deg) + 2deg)) scale(1.05) translateY(var(--parallax-offset,0))}}
            .meaux-vision-item.in-view .meaux-vision-text::before{opacity:.12; transform:rotate(var(--bg-rot,-6deg)) scale(1.08) translateY(var(--parallax-offset,0)) }
            @keyframes iconFallDramatic{
                0 % { transform: translateY(-10px) rotate(calc(var(--bg-rot,-6deg) - 6deg)) scale(1.05); opacity:.12; }
            12%  {transform:translateY(-30px) rotate(calc(var(--bg-rot,-6deg) + 4deg))  scale(1.12); opacity:.18; }
            28%  {transform:translateY(0)     rotate(calc(var(--bg-rot,-6deg) - 2deg))  scale(1.10); }
            60%  {transform:translateY(70vh)  rotate(calc(var(--bg-rot,-6deg) + 160deg)) scale(.9); opacity:.12; }
            78%  {transform:translateY(80vh)  rotate(calc(var(--bg-rot,-6deg) + 190deg)) scale(.82); opacity:.08; }
            100% {transform:translateY(92vh)  rotate(calc(var(--bg-rot,-6deg) + 210deg)) scale(.75); opacity:0; }
                }
            .mvf-fallable.dramatic.falling::before{
                animation: iconFallDramatic 2.6s cubic-bezier(.2,.7,.15,1) forwards;
            will-change: transform, opacity;
                }
            .skeleton-loader{position:absolute; inset:0; background:linear-gradient(90deg,#f0f8f8 25%,#e6f4f4 50%,#f0f8f8 75%); background-size:200% 100%; animation:skeletonWave 1.5s infinite; border-radius:inherit; z-index:10; opacity:1; transition:opacity .3s ease; }
            .skeleton-loader.loaded{opacity:0; pointer-events:none; }
            @keyframes skeletonWave{0 % { background- position:200% 0}100%{background - position:-200% 0}}
            .mvf-symphony *:focus-visible{outline:3px solid var(--orange); outline-offset:4px; border-radius:4px; }
            @media (max-width:900px){
                .mvf-symphony{padding:clamp(60px,10vw,100px) clamp(16px,4vw,32px); }
                .meaux-vision-item{grid-template-columns:1fr; gap:40px; margin-bottom:clamp(60px,10vw,100px); text-align:center; }
            .meaux-vision-item:nth-child(even) .meaux-vision-text{order:1; }
            .meaux-vision-item:nth-child(even) .meaux-vision-visual{order:2; }
            .meaux-vision-visual{height:clamp(300px,55vw,400px); }
            .meaux-vision-text::before{--bg - icon - size:clamp(200px,50vw,400px); opacity:.06; }
            @keyframes itemSymphony{from{opacity:0; transform:translateY(40px)} to{opacity:1; transform:translateY(0)} }
                }
            @media (prefers-reduced-motion: reduce){
                .mvf-symphony *,
                .mvf-symphony *::before,
                .mvf-symphony *::after {
                    animation-duration:.01ms !important;
                    animation-iteration-count:1 !important;
                    transition-duration:.01ms !important;
                    scroll-behavior:auto !important;
                }
                .scroll-progress{display:none; }
            }
            .mvf-symphony.paused *,
            .mvf-symphony.paused *::before,
            .mvf-symphony.paused *::after {
                animation-play-state:paused !important;
            }
            `}}),e.jsxs("section",{className:"mvf-symphony","aria-label":"About Meauxbility",role:"region",children:[e.jsx("div",{className:"scroll-progress",role:"progressbar","aria-label":"Page scroll progress"}),e.jsxs("div",{className:"meaux-vision-container",children:[e.jsx("h1",{className:"meaux-vision-title",children:"Empowering those with spinal cord injuries and mobility challenges to reclaim independence through resources, community, and unwavering support."}),e.jsxs("div",{className:"meaux-vision-item",children:[e.jsxs("div",{className:"meaux-vision-text",style:{"--bg-icon-src":"url('https://cdn.shopify.com/s/files/1/0685/1654/4672/files/5.png?v=1753332352')","--bg-x":"-8%","--bg-y":"-18%","--bg-rot":"-8deg"},children:[e.jsx("span",{className:"core-value-title",children:"Our Mission is Simple"}),e.jsx("h2",{className:"meaux-vision-heading",children:e.jsx("span",{className:"u",children:"Meauxbility Empowers"})}),e.jsxs("p",{className:"meaux-vision-desc",children:[e.jsx("strong",{children:"Those battling spinal cord injuries and mobility challenges"})," by providing resources, community, and opportunities that restore independence and create a better quality of life."]})]}),e.jsxs("div",{className:"meaux-vision-visual",children:[e.jsx("div",{className:"skeleton-loader"}),e.jsx("img",{src:"https://cdn.shopify.com/s/files/1/0685/1654/4672/files/dsc06919_7183904c-7e62-4901-b517-596f0fd857c8.jpg?v=1754012436",alt:"Community support in action",loading:"lazy",decoding:"async"})]})]}),e.jsxs("div",{className:"meaux-vision-item",children:[e.jsxs("div",{className:"meaux-vision-text",style:{"--bg-icon-src":"url('https://cdn.shopify.com/s/files/1/0685/1654/4672/files/2_a09bc551-dc4d-4cf9-9d3b-a2ba81c2ba0c.png?v=1753332353')","--bg-x":"-6%","--bg-y":"-15%","--bg-rot":"-4deg"},children:[e.jsx("span",{className:"core-value-title",children:"Our Vision"}),e.jsx("h2",{className:"meaux-vision-heading",children:e.jsx("span",{className:"u",children:"A Future Without Limits"})}),e.jsx("p",{className:"meaux-vision-desc",children:"Where people of all abilities have equal access to resources, opportunities, and the fullness of life."}),e.jsx("div",{className:"value-definition",children:e.jsx("strong",{children:"More Options + More Access = More Life."})})]}),e.jsxs("div",{className:"meaux-vision-visual",children:[e.jsx("div",{className:"skeleton-loader"}),e.jsx("img",{src:"https://cdn.shopify.com/s/files/1/0685/1654/4672/files/filmin_apex_legday.jpg?v=1756392888",alt:"Vision of inclusive access and opportunity",loading:"lazy",decoding:"async"})]})]}),e.jsxs("div",{className:"meaux-vision-item",children:[e.jsxs("div",{className:"meaux-vision-text",style:{"--bg-icon-src":"url('https://cdn.shopify.com/s/files/1/0685/1654/4672/files/4.png?v=1753332353')","--bg-x":"-9%","--bg-y":"-20%","--bg-rot":"-10deg"},children:[e.jsx("span",{className:"core-value-title",children:"Built by Experience"}),e.jsx("h2",{className:"meaux-vision-heading",children:e.jsx("span",{className:"u",children:"Driven by Results"})}),e.jsxs("p",{className:"meaux-vision-desc",children:["A motorcycle accident in 2017 left our founder, ",e.jsx("strong",{children:"Sam Primeaux"}),", paralyzed from the chest down. Through faith, grit, and the support of his community, Sam reclaimed his independence—and turned that journey into a movement."]})]}),e.jsxs("div",{className:"meaux-vision-visual",children:[e.jsx("div",{className:"skeleton-loader"}),e.jsx("img",{src:"https://cdn.shopify.com/s/files/1/0685/1654/4672/files/dsc06873_6d712985-ee71-46fd-a8f5-7a79590659b0.jpg?v=1754010593",alt:"Founder story and recovery journey",loading:"lazy",decoding:"async"})]})]}),e.jsxs("div",{className:"meaux-vision-item",children:[e.jsxs("div",{className:"meaux-vision-text mvf-fallable dramatic","data-fall-trigger":"0.55",style:{"--bg-icon-src":"url('https://cdn.shopify.com/s/files/1/0685/1654/4672/files/6.png?v=1753332353')","--bg-x":"-7%","--bg-y":"-16%","--bg-rot":"-6deg"},children:[e.jsx("span",{className:"core-value-title",children:"Empowerment"}),e.jsx("h2",{className:"meaux-vision-heading",children:e.jsx("span",{className:"u",children:"Obstacles into Opportunity"})}),e.jsxs("p",{className:"meaux-vision-desc",children:["Today we combine ",e.jsx("strong",{children:"funding, mentorship, and a practical recovery playbook"})," so people with mobility challenges can accelerate their progress toward freedom."]}),e.jsx("p",{className:"meaux-vision-subdesc",children:"We believe recovery shouldn't depend on wealth—everyone deserves more options, more access, and more life."})]}),e.jsxs("div",{className:"meaux-vision-visual",children:[e.jsx("div",{className:"skeleton-loader"}),e.jsx("img",{src:"https://cdn.shopify.com/s/files/1/0685/1654/4672/files/group-keep.jpg?v=1754251966",alt:"Turning challenges into progress",loading:"lazy",decoding:"async"})]})]}),e.jsxs("div",{className:"meaux-vision-item",children:[e.jsxs("div",{className:"meaux-vision-text",style:{"--bg-icon-src":"url('https://cdn.shopify.com/s/files/1/0685/1654/4672/files/3_c666d932-e895-4620-928e-20762c2be381.png?v=1753332353')","--bg-x":"-8%","--bg-y":"-18%","--bg-rot":"-6deg"},children:[e.jsx("span",{className:"core-value-title",children:"Community"}),e.jsx("h2",{className:"meaux-vision-heading",children:e.jsx("span",{className:"u",children:"The Meauxbility Movement"})}),e.jsx("p",{className:"meaux-vision-desc",children:"What began as one story is now a growing network of people and partners creating more access—and more life—together."}),e.jsx("p",{className:"meaux-vision-subdesc",children:"No one should face life's hardest challenges alone."}),e.jsxs("div",{className:"value-definition",children:[e.jsx("strong",{children:"Join us."})," Belonging, encouragement, and shared strength start here."]})]}),e.jsxs("div",{className:"meaux-vision-visual",children:[e.jsx("div",{className:"skeleton-loader"}),e.jsx("img",{src:"https://cdn.shopify.com/s/files/1/0685/1654/4672/files/img-6190.jpg?v=1754567058",alt:"Community standing together",loading:"lazy",decoding:"async"})]})]})]})]}),e.jsxs("section",{id:"meaux-partners","aria-labelledby":"meaux-partners-h",children:[e.jsx("div",{className:"wave-transition",children:e.jsxs("svg",{viewBox:"0 0 1440 120",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{className:"wave-path-1",d:"M0,40 C240,80 480,20 720,40 C960,60 1200,20 1440,40 L1440,120 L0,120 Z",fill:"#339999",opacity:"0.5"}),e.jsx("path",{className:"wave-path-2",d:"M0,60 C240,90 480,30 720,60 C960,90 1200,30 1440,60 L1440,120 L0,120 Z",fill:"#339999",opacity:"0.7"}),e.jsx("path",{className:"wave-path-3",d:"M0,80 C240,100 480,60 720,80 C960,100 1200,60 1440,80 L1440,120 L0,120 Z",fill:"#339999",opacity:"1"})]})}),e.jsxs("div",{className:"wrap",children:[e.jsx("h3",{id:"meaux-partners-h",children:"Partners"}),e.jsxs("div",{className:"grid",id:"partnersGrid",children:[e.jsxs("a",{className:"logo",href:"/pages/accessibility-partners","aria-label":"Rise and Deano","data-state":"a",children:[e.jsxs("div",{className:"a",children:[e.jsx("span",{className:"mask",style:{"--src":"url('https://cdn.shopify.com/s/files/1/0685/1654/4672/files/rise.png?v=1754533232')"}}),e.jsx("img",{className:"img-fallback",alt:"Rise",src:"https://cdn.shopify.com/s/files/1/0685/1654/4672/files/rise.png?v=1754533232"})]}),e.jsxs("div",{className:"b",children:[e.jsx("span",{className:"mask",style:{"--src":"url('https://cdn.shopify.com/s/files/1/0685/1654/4672/files/deano.png?v=1754533232')"}}),e.jsx("img",{className:"img-fallback",alt:"Deano",src:"https://cdn.shopify.com/s/files/1/0685/1654/4672/files/deano.png?v=1754533232"})]})]}),e.jsxs("a",{className:"logo",href:"/pages/accessibility-partners","aria-label":"Pablito and GFF","data-state":"a",children:[e.jsxs("div",{className:"a",children:[e.jsx("span",{className:"mask",style:{"--src":"url('https://cdn.shopify.com/s/files/1/0685/1654/4672/files/pablito.png?v=1754533232')"}}),e.jsx("img",{className:"img-fallback",alt:"Pablito",src:"https://cdn.shopify.com/s/files/1/0685/1654/4672/files/pablito.png?v=1754533232"})]}),e.jsxs("div",{className:"b",children:[e.jsx("span",{className:"mask",style:{"--src":"url('https://cdn.shopify.com/s/files/1/0685/1654/4672/files/gff-update.png?v=1754533232')"}}),e.jsx("img",{className:"img-fallback",alt:"GFF",src:"https://cdn.shopify.com/s/files/1/0685/1654/4672/files/gff-update.png?v=1754533232"})]})]}),e.jsxs("a",{className:"logo",href:"/pages/accessibility-partners","aria-label":"W4W and TC","data-state":"a",children:[e.jsxs("div",{className:"a",children:[e.jsx("span",{className:"mask",style:{"--src":"url('https://cdn.shopify.com/s/files/1/0685/1654/4672/files/w4w.png?v=1754533232')"}}),e.jsx("img",{className:"img-fallback",alt:"W4W",src:"https://cdn.shopify.com/s/files/1/0685/1654/4672/files/w4w.png?v=1754533232"})]}),e.jsxs("div",{className:"b",children:[e.jsx("span",{className:"mask",style:{"--src":"url('https://cdn.shopify.com/s/files/1/0685/1654/4672/files/tc.png?v=1754533232')"}}),e.jsx("img",{className:"img-fallback",alt:"TC",src:"https://cdn.shopify.com/s/files/1/0685/1654/4672/files/tc.png?v=1754533232"})]})]}),e.jsxs("a",{className:"logo",href:"/pages/accessibility-partners","aria-label":"NeuroElite and TU","data-state":"a",children:[e.jsxs("div",{className:"a",children:[e.jsx("span",{className:"mask",style:{"--src":"url('https://cdn.shopify.com/s/files/1/0685/1654/4672/files/neuroelite-white.png?v=1754533232')"}}),e.jsx("img",{className:"img-fallback",alt:"NeuroElite",src:"https://cdn.shopify.com/s/files/1/0685/1654/4672/files/neuroelite-white.png?v=1754533232"})]}),e.jsxs("div",{className:"b",children:[e.jsx("span",{className:"mask",style:{"--src":"url('https://cdn.shopify.com/s/files/1/0685/1654/4672/files/tu.png?v=1754533232')"}}),e.jsx("img",{className:"img-fallback",alt:"TU",src:"https://cdn.shopify.com/s/files/1/0685/1654/4672/files/tu.png?v=1754533232"})]})]}),e.jsxs("a",{className:"logo",href:"/pages/accessibility-partners","aria-label":"AB and Apex","data-state":"a",children:[e.jsxs("div",{className:"a",children:[e.jsx("span",{className:"mask",style:{"--src":"url('https://cdn.shopify.com/s/files/1/0685/1654/4672/files/ab-white.png?v=1754533232')"}}),e.jsx("img",{className:"img-fallback",alt:"AB",src:"https://cdn.shopify.com/s/files/1/0685/1654/4672/files/ab-white.png?v=1754533232"})]}),e.jsxs("div",{className:"b",children:[e.jsx("span",{className:"mask",style:{"--src":"url('https://cdn.shopify.com/s/files/1/0685/1654/4672/files/apex.png?v=1754533232')"}}),e.jsx("img",{className:"img-fallback",alt:"Apex",src:"https://cdn.shopify.com/s/files/1/0685/1654/4672/files/apex.png?v=1754533232"})]})]}),e.jsxs("a",{className:"logo",href:"/pages/accessibility-partners","aria-label":"Barr and ATF","data-state":"a",children:[e.jsxs("div",{className:"a",children:[e.jsx("span",{className:"mask",style:{"--src":"url('https://cdn.shopify.com/s/files/1/0685/1654/4672/files/barr.png?v=1753371101')"}}),e.jsx("img",{className:"img-fallback",alt:"Barr",src:"https://cdn.shopify.com/s/files/1/0685/1654/4672/files/barr.png?v=1753371101"})]}),e.jsxs("div",{className:"b",children:[e.jsx("span",{className:"mask",style:{"--src":"url('https://cdn.shopify.com/s/files/1/0685/1654/4672/files/atf_logo.png?v=1753212782')"}}),e.jsx("img",{className:"img-fallback",alt:"ATF",src:"https://cdn.shopify.com/s/files/1/0685/1654/4672/files/atf_logo.png?v=1753212782"})]})]})]}),e.jsxs("a",{className:"cta",href:"/pages/accessibility-partners",children:[e.jsx("span",{children:"View All Partners"}),e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]})]})}function ja(){var f,S;const[t,i]=a.useState(!1),[s,g]=a.useState(null),[n,x]=a.useState(null);a.useEffect(()=>{const o=d=>{d.key==="Escape"&&t&&b()};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[t]),a.useEffect(()=>{t&&s==="application"&&n&&setTimeout(()=>{const o=document.getElementById("program");o&&(n==="inneranimal"?o.value="InnerAnimal Fund":n==="meauxlife"&&(o.value="Meaux Life Fund"))},100)},[t,s,n]);const r={inneranimal:{title:"InnerAnimal Fund - Recovery Grant Program",body:`
                <strong>What grants cover</strong><br>
                Therapy sessions, travel support, adaptive needs, and rehabilitation services.<br><br>
                <strong>Eligibility</strong><br>
                SCI verification, income information, treatment plan documentation.<br><br>
                <strong>Process</strong><br>
                Apply → Review → Decision → Disbursement (typically 2-4 weeks).
            `},meauxlife:{title:"Meaux Life Fund - Equipment & Technology",body:`
                <strong>Covered equipment</strong><br>
                Wheelchairs, seating systems, smart assists, safety modifications, home adaptations.<br><br>
                <strong>Evaluation criteria</strong><br>
                Fit quality, usage potential, functional independence improvements.<br><br>
                <strong>Support process</strong><br>
                Assessment → Quote review → Approval → Equipment delivery.
            `},overview:{title:"Programs Overview",body:`
                <strong>Two focused programs:</strong> InnerAnimal Fund (Recovery Grants) and Meaux Life Fund (Equipment & Technology).<br><br>
                Built on transparent eligibility, clear timelines, and measurable outcomes — "proof, not theory."
            `}},N=[{name:"fullName",label:"Full Name",type:"text",required:!0},{name:"email",label:"Email Address",type:"email",required:!0},{name:"phone",label:"Phone Number",type:"tel",required:!0},{name:"program",label:"Program Interest",type:"select",options:["InnerAnimal Fund","Meaux Life Fund","Both Programs"],required:!0},{name:"situation",label:"Describe your current situation",type:"textarea",required:!0},{name:"supportType",label:"What specific support are you requesting?",type:"textarea",required:!0}],m=o=>{g(o),i(!0),document.body.style.overflow="hidden"},v=o=>{g("application"),x(o||null),i(!0),document.body.style.overflow="hidden"},b=()=>{i(!1),g(null),x(null),document.body.style.overflow=""},k=async o=>{o.preventDefault();const d=o.currentTarget,c=new FormData(d),h=d.querySelector(".wwdpp_form_submit");if(!h)return;const C=h.textContent||"Submit Application";h.textContent="Submitting...",h.disabled=!0;try{const y={};for(const[te,T]of c.entries())y[te]=T.toString();if(y.timestamp=new Date().toISOString(),y.source="WWDPP Programs Page",(await fetch("https://www.meauxbility.org/api/programs/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)})).ok)alert("Application submitted successfully! We'll review your application and get back to you within 48 hours."),b(),d.reset();else throw new Error("Submission failed")}catch(y){console.error("Error submitting application:",y),alert("There was an error submitting your application. Please try again or contact us directly at hey@meauxbility.com")}finally{h.textContent=C,h.disabled=!1}};return e.jsxs(e.Fragment,{children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
                :root {
                    --wwdpp-orange: #FF6B00;
                    --wwdpp-orange-hover: #FF8A33;
                    --wwdpp-teal: #339999;
                    --wwdpp-teal-hover: #4AB3B3;
                    --wwdpp-deep: #051b1e;
                    --wwdpp-dark: #0a2427;
                    --wwdpp-teal-steel: #1a4a52;
                    --wwdpp-metallic: #2a6b75;
                    --wwdpp-light-teal: #4aabb8;
                    --wwdpp-surface: #ffffff;
                    --wwdpp-surface-2: #f8fafb;
                    --wwdpp-ink: #0C2D31;
                    --wwdpp-ink-light: #173E45;
                    --wwdpp-success: #21c48c;
                    --wwdpp-border: rgba(255,255,255,.18);
                    --wwdpp-glass: rgba(255,255,255,.08);
                    --wwdpp-glass-light: rgba(255,255,255,.16);
                    --wwdpp-radius: 16px;
                    --wwdpp-ease: cubic-bezier(.2,.8,.2,1);
                    --wwdpp-trans: all .3s var(--wwdpp-ease);
                    --wwdpp-hero-grad: linear-gradient(135deg, var(--wwdpp-deep) 0%, var(--wwdpp-teal-steel) 100%);
                }

                .wwdpp_hero {
                    width: 100%;
                    min-height: 60vh;
                    padding: 80px 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    background:
                        radial-gradient(60rem 60rem at 20% 80%, rgba(31,151,169,.12) 0%, transparent 60%),
                        radial-gradient(40rem 40rem at 80% 20%, rgba(255,107,0,.12) 0%, transparent 55%);
                }

                .wwdpp_hero h1 {
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 900;
                    line-height: 1.2;
                    margin: 0 auto 20px;
                    color: var(--wwdpp-surface);
                    letter-spacing: -0.02em;
                    text-shadow: 0 10px 28px rgba(0,0,0,.25);
                }

                .wwdpp_hero p {
                    font-size: clamp(1rem, 2vw, 1.25rem);
                    color: var(--wwdpp-surface);
                    opacity: 0.9;
                    max-width: 760px;
                    margin: 0 auto 40px;
                    line-height: 1.7;
                }

                .wwdpp_cta {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .wwdpp_btn {
                    border: none;
                    border-radius: 12px;
                    cursor: pointer;
                    min-height: 44px;
                    padding: 12px 18px;
                    font-weight: 800;
                    letter-spacing: .06em;
                    text-transform: uppercase;
                    transition: var(--wwdpp-trans);
                    text-decoration: none;
                    display: inline-block;
                    text-align: center;
                    backdrop-filter: blur(18px);
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                }

                .wwdpp_btn_primary {
                    color: #fff;
                    background: rgba(255,107,0,0.2);
                    border: 1px solid rgba(255,107,0,0.4);
                }

                .wwdpp_btn_primary:hover {
                    background: rgba(255,107,0,0.3);
                    border-color: rgba(255,107,0,0.6);
                    transform: translateY(2px);
                }

                .wwdpp_btn_secondary {
                    color: #fff;
                    background: rgba(51,153,153,0.2);
                    border: 1px solid rgba(51,153,153,0.4);
                }

                .wwdpp_btn_secondary:hover {
                    background: rgba(51,153,153,0.3);
                    border-color: rgba(51,153,153,0.6);
                    transform: translateY(2px);
                }

                .wwdpp_section {
                    width: 100%;
                    padding: 80px 20px;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .wwdpp_section h2 {
                    font-size: clamp(1.6rem, 4vw, 2.4rem);
                    font-weight: 900;
                    letter-spacing: -0.01em;
                    margin-bottom: 10px;
                    text-align: center;
                    color: var(--wwdpp-surface);
                }

                .wwdpp_section p {
                    color: var(--wwdpp-surface);
                    opacity: 0.9;
                    max-width: 820px;
                    margin: 0 auto 40px;
                    text-align: center;
                    font-size: clamp(1rem, 2vw, 1.1rem);
                }

                .wwdpp_grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    gap: 24px;
                    margin: 0 auto;
                }

                .wwdpp_card {
                    background: var(--wwdpp-glass);
                    border: 1px solid var(--wwdpp-border);
                    border-radius: var(--wwdpp-radius);
                    padding: 24px;
                    position: relative;
                    overflow: hidden;
                    backdrop-filter: blur(18px);
                    transition: var(--wwdpp-trans);
                    cursor: pointer;
                }

                .wwdpp_card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 24px 48px rgba(0,0,0,.18);
                }

                .wwdpp_card::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.08), transparent);
                    transform: translateX(-100%) translateY(-100%) rotate(45deg);
                    transition: transform 0.8s var(--wwdpp-ease);
                    pointer-events: none;
                    z-index: 1;
                }

                .wwdpp_card:hover::before {
                    transform: translateX(100%) translateY(100%) rotate(45deg);
                }

                .wwdpp_badge {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    font-size: 0.8rem;
                    padding: 6px 12px;
                    border-radius: 999px;
                    background: linear-gradient(135deg, var(--wwdpp-teal), var(--wwdpp-teal-hover));
                    border: 1px solid var(--wwdpp-border);
                    z-index: 3;
                }

                .wwdpp_card h3 {
                    font-size: 1.5rem;
                    font-weight: 800;
                    margin-bottom: 8px;
                    color: var(--wwdpp-surface);
                    position: relative;
                    z-index: 2;
                }

                .wwdpp_meta {
                    color: var(--wwdpp-surface);
                    opacity: 0.8;
                    font-weight: 600;
                    margin-bottom: 16px;
                    position: relative;
                    z-index: 2;
                }

                .wwdpp_card p {
                    color: var(--wwdpp-surface);
                    opacity: 0.9;
                    margin-bottom: 20px;
                    position: relative;
                    z-index: 2;
                    text-align: left;
                }

                .wwdpp_card_actions {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                    position: relative;
                    z-index: 2;
                }

                .wwdpp_steps {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 20px;
                    margin: 40px 0;
                }

                .wwdpp_step {
                    background: var(--wwdpp-glass);
                    border: 1px solid var(--wwdpp-border);
                    border-radius: 14px;
                    padding: 20px;
                    backdrop-filter: blur(18px);
                }

                .wwdpp_step strong {
                    display: block;
                    margin-bottom: 8px;
                    color: var(--wwdpp-surface);
                    font-weight: 800;
                }

                .wwdpp_step span {
                    color: var(--wwdpp-surface);
                    opacity: 0.8;
                }

                .wwdpp_checklist {
                    list-style: none;
                    display: grid;
                    gap: 12px;
                    margin-top: 12px;
                    padding: 0;
                }

                .wwdpp_checklist li {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    color: var(--wwdpp-surface);
                    opacity: 0.9;
                }

                .wwdpp_dot {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    display: inline-grid;
                    place-items: center;
                    background: var(--wwdpp-surface);
                    color: var(--wwdpp-teal);
                    font-weight: 900;
                    font-size: 0.8rem;
                    flex-shrink: 0;
                }

                .wwdpp_faq {
                    max-width: 900px;
                    margin: 0 auto;
                }

                .wwdpp_faq_item {
                    border: 1px solid var(--wwdpp-border);
                    background: var(--wwdpp-glass);
                    border-radius: 14px;
                    margin-bottom: 12px;
                    overflow: hidden;
                    backdrop-filter: blur(18px);
                }

                .wwdpp_faq_q {
                    width: 100%;
                    text-align: left;
                    color: var(--wwdpp-surface);
                    font-weight: 700;
                    padding: 16px 20px;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    transition: background 0.2s var(--wwdpp-ease);
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                }

                .wwdpp_faq_q:hover {
                    background: var(--wwdpp-glass-light);
                }

                .wwdpp_faq_a {
                    padding: 0 20px 16px;
                    color: var(--wwdpp-surface);
                    opacity: 0.9;
                    display: none;
                }

                .wwdpp_faq_item[open] .wwdpp_faq_a {
                    display: block;
                }

                .wwdpp_modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    backdrop-filter: blur(8px);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s ease;
                    padding: 20px;
                }

                .wwdpp_modal_active {
                    opacity: 1;
                    visibility: visible;
                }

                .wwdpp_modal_card {
                    max-width: 600px;
                    width: 100%;
                    max-height: 85vh;
                    background: var(--wwdpp-glass);
                    border: 1px solid var(--wwdpp-border);
                    border-radius: 20px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                    position: relative;
                    transform: scale(0.9) translateY(20px);
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    backdrop-filter: blur(18px);
                }

                .wwdpp_modal_active .wwdpp_modal_card {
                    transform: scale(1) translateY(0);
                }

                .wwdpp_modal_close {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: none;
                    border: none;
                    cursor: pointer;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10;
                    padding: 8px;
                    border-radius: 8px;
                    transition: background 0.3s ease;
                    color: var(--wwdpp-surface);
                    font-size: 24px;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                }

                .wwdpp_modal_close:hover {
                    background: var(--wwdpp-glass-light);
                }

                .wwdpp_modal_title {
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: var(--wwdpp-surface);
                    margin-bottom: 8px;
                    padding: 30px 30px 0;
                }

                .wwdpp_modal_body {
                    padding: 20px 30px 30px;
                    color: var(--wwdpp-surface);
                    opacity: 0.9;
                    line-height: 1.6;
                    max-height: 70vh;
                    overflow-y: auto;
                }

                .wwdpp_form_group {
                    margin-bottom: 20px;
                }

                .wwdpp_form_label {
                    display: block;
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: var(--wwdpp-surface);
                    margin-bottom: 8px;
                }

                .wwdpp_form_input,
                .wwdpp_form_textarea,
                .wwdpp_form_select {
                    width: 100%;
                    padding: 12px 16px;
                    background: rgba(255,255,255,0.1);
                    border: 1px solid var(--wwdpp-border);
                    border-radius: 10px;
                    color: var(--wwdpp-surface);
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    backdrop-filter: blur(10px);
                }

                .wwdpp_form_input:focus,
                .wwdpp_form_textarea:focus,
                .wwdpp_form_select:focus {
                    outline: none;
                    border-color: var(--wwdpp-teal);
                    box-shadow: 0 0 0 3px rgba(51,153,153,0.1);
                }

                .wwdpp_form_textarea {
                    min-height: 120px;
                    resize: vertical;
                }

                .wwdpp_form_submit {
                    background: var(--wwdpp-orange);
                    color: white;
                    border: none;
                    padding: 16px 32px;
                    border-radius: 10px;
                    font-size: 1.1rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    width: 100%;
                    margin-top: 30px;
                    box-shadow: 0 4px 15px rgba(255, 107, 0, 0.3);
                }

                .wwdpp_form_submit:hover {
                    background: var(--wwdpp-orange-hover);
                    transform: translateY(-2px);
                }

                .wwdpp_form_submit:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                    transform: none;
                }

                @media (max-width: 768px) {
                    .wwdpp_hero {
                        padding: 60px 20px;
                    }
                    .wwdpp_grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                    .wwdpp_steps {
                        grid-template-columns: 1fr;
                        gap: 16px;
                    }
                    .wwdpp_cta {
                        gap: 8px;
                    }
                    .wwdpp_btn {
                        flex: 1;
                        min-width: 140px;
                    }
                }

                @media (max-width: 480px) {
                    .wwdpp_hero h1 {
                        font-size: 2rem;
                    }
                    .wwdpp_card {
                        padding: 20px;
                    }
                    .wwdpp_btn {
                        min-height: 48px;
                        padding: 14px 20px;
                        font-size: 0.9rem;
                    }
                }
            `}}),e.jsxs("div",{style:{background:"var(--wwdpp-hero-grad)",minHeight:"100vh",paddingTop:"72px"},children:[e.jsxs("section",{className:"wwdpp_hero",children:[e.jsx("h1",{children:"Programs — What We Do"}),e.jsx("p",{children:"From recovery grants to equipment funds, Meauxbility turns access into outcomes — built on your Teal-Steel brand system and component patterns."}),e.jsxs("div",{className:"wwdpp_cta",children:[e.jsx("button",{className:"wwdpp_btn wwdpp_btn_primary",onClick:()=>v(),children:"Apply for Support"}),e.jsx("button",{className:"wwdpp_btn wwdpp_btn_secondary",onClick:()=>m("overview"),children:"Explore Programs"})]})]}),e.jsxs("section",{className:"wwdpp_section",id:"wwdpp_programs",children:[e.jsx("h2",{children:"Our Programs"}),e.jsx("p",{children:"Two focused programs designed to provide comprehensive support for SCI survivors."}),e.jsxs("div",{className:"wwdpp_grid",children:[e.jsxs("div",{className:"wwdpp_card",children:[e.jsx("span",{className:"wwdpp_badge",children:"Open"}),e.jsx("h3",{children:"InnerAnimal Fund"}),e.jsx("div",{className:"wwdpp_meta",children:"Recovery Grant Program — Covers therapies, travel, and critical recovery costs"}),e.jsx("p",{children:"Financial support for SCI survivors to access proven treatments and rehabilitation services. Includes guidance on documentation and timelines."}),e.jsxs("div",{className:"wwdpp_card_actions",children:[e.jsx("button",{className:"wwdpp_btn wwdpp_btn_primary",onClick:()=>m("inneranimal"),children:"Details"}),e.jsx("button",{className:"wwdpp_btn wwdpp_btn_secondary",onClick:()=>v("inneranimal"),children:"Apply Now"})]})]}),e.jsxs("div",{className:"wwdpp_card",children:[e.jsx("span",{className:"wwdpp_badge",children:"Active"}),e.jsx("h3",{children:"Meaux Life Fund"}),e.jsx("div",{className:"wwdpp_meta",children:"Equipment & Technology — Custom wheelchairs, assistive tech, home adaptations"}),e.jsx("p",{children:"Allocations for essential equipment and adaptive technology that immediately improve independence and safety for daily living."}),e.jsxs("div",{className:"wwdpp_card_actions",children:[e.jsx("button",{className:"wwdpp_btn wwdpp_btn_primary",onClick:()=>m("meauxlife"),children:"Details"}),e.jsx("button",{className:"wwdpp_btn wwdpp_btn_secondary",onClick:()=>v("meauxlife"),children:"Apply Now"})]})]})]})]}),e.jsxs("section",{className:"wwdpp_section",id:"wwdpp_apply",children:[e.jsx("h2",{children:"How to Apply"}),e.jsx("p",{children:"Clear, transparent steps. Expect honest timelines and real support."}),e.jsxs("div",{className:"wwdpp_steps",children:[e.jsxs("div",{className:"wwdpp_step",children:[e.jsx("strong",{children:"1) Check Eligibility"}),e.jsx("span",{children:"SCI verification, residency, and program fit"})]}),e.jsxs("div",{className:"wwdpp_step",children:[e.jsx("strong",{children:"2) Prepare Documents"}),e.jsx("span",{children:"Medical note, invoices/quotes, income snapshot"})]}),e.jsxs("div",{className:"wwdpp_step",children:[e.jsx("strong",{children:"3) Submit Application"}),e.jsx("span",{children:"Online form with details and preferences"})]}),e.jsxs("div",{className:"wwdpp_step",children:[e.jsx("strong",{children:"4) Review & Follow-ups"}),e.jsx("span",{children:"We may request clarifications or updates"})]}),e.jsxs("div",{className:"wwdpp_step",children:[e.jsx("strong",{children:"5) Decision"}),e.jsx("span",{children:"Notification with next steps and timeline"})]}),e.jsxs("div",{className:"wwdpp_step",children:[e.jsx("strong",{children:"6) Disbursement & Support"}),e.jsx("span",{children:"Funds/equipment + community onboarding"})]})]}),e.jsxs("div",{className:"wwdpp_grid",children:[e.jsxs("div",{className:"wwdpp_card",children:[e.jsx("h3",{children:"Eligibility Checklist"}),e.jsxs("ul",{className:"wwdpp_checklist",children:[e.jsxs("li",{children:[e.jsx("span",{className:"wwdpp_dot",children:"✓"}),e.jsx("span",{children:"Documented SCI (or qualifying diagnosis)"})]}),e.jsxs("li",{children:[e.jsx("span",{className:"wwdpp_dot",children:"✓"}),e.jsx("span",{children:"Defined need (therapy, equipment, sponsorship)"})]}),e.jsxs("li",{children:[e.jsx("span",{className:"wwdpp_dot",children:"✓"}),e.jsx("span",{children:"Quote/estimate or care plan attached"})]}),e.jsxs("li",{children:[e.jsx("span",{className:"wwdpp_dot",children:"✓"}),e.jsx("span",{children:"Willing to share impact updates"})]})]})]}),e.jsxs("div",{className:"wwdpp_card",children:[e.jsx("h3",{children:"Required Documents"}),e.jsxs("ul",{className:"wwdpp_checklist",children:[e.jsxs("li",{children:[e.jsx("span",{className:"wwdpp_dot",children:"✓"}),e.jsx("span",{children:"Physician/therapist letter (as applicable)"})]}),e.jsxs("li",{children:[e.jsx("span",{className:"wwdpp_dot",children:"✓"}),e.jsx("span",{children:"Invoice/quote for services or equipment"})]}),e.jsxs("li",{children:[e.jsx("span",{className:"wwdpp_dot",children:"✓"}),e.jsx("span",{children:"Income statement (confidential)"})]}),e.jsxs("li",{children:[e.jsx("span",{className:"wwdpp_dot",children:"✓"}),e.jsx("span",{children:"Short personal statement (goals & timeline)"})]})]})]})]})]}),e.jsxs("section",{className:"wwdpp_section",children:[e.jsx("h2",{children:"Programs FAQ"}),e.jsxs("div",{className:"wwdpp_faq",children:[e.jsxs("details",{className:"wwdpp_faq_item",children:[e.jsx("summary",{className:"wwdpp_faq_q",children:"How long does review take?"}),e.jsx("div",{className:"wwdpp_faq_a",children:"Typical window is 2–4 weeks depending on volume and documentation completeness."})]}),e.jsxs("details",{className:"wwdpp_faq_item",children:[e.jsx("summary",{className:"wwdpp_faq_q",children:"Can I apply to multiple programs?"}),e.jsx("div",{className:"wwdpp_faq_a",children:"Yes. Indicate priorities in your application — we'll route to the best fit."})]}),e.jsxs("details",{className:"wwdpp_faq_item",children:[e.jsx("summary",{className:"wwdpp_faq_q",children:"Are funds paid to me or the provider?"}),e.jsx("div",{className:"wwdpp_faq_a",children:"Usually directly to providers/equipment vendors. Exceptions are explained on award."})]}),e.jsxs("details",{className:"wwdpp_faq_item",children:[e.jsx("summary",{className:"wwdpp_faq_q",children:"Do you support outside the U.S.?"}),e.jsx("div",{className:"wwdpp_faq_a",children:"We're building global capacity; some programs are already accessible internationally."})]})]})]})]}),e.jsx("div",{className:`wwdpp_modal ${t?"wwdpp_modal_active":""}`,id:"wwdpp_modal",onClick:o=>{o.target===o.currentTarget&&b()},children:e.jsxs("div",{className:"wwdpp_modal_card",children:[e.jsx("button",{className:"wwdpp_modal_close",onClick:b,children:"×"}),e.jsx("h3",{className:"wwdpp_modal_title",id:"wwdpp_modal_title",children:s==="application"?"Application Form":((f=r[s||""])==null?void 0:f.title)||"Title"}),e.jsx("div",{className:"wwdpp_modal_body",id:"wwdpp_modal_body",children:s==="application"?e.jsxs("form",{onSubmit:k,children:[e.jsx("p",{style:{marginBottom:"20px",opacity:.8},children:"Please fill out the form below to apply for support."}),N.map(o=>{var d;return e.jsxs("div",{className:"wwdpp_form_group",children:[e.jsx("label",{className:"wwdpp_form_label",htmlFor:o.name,children:o.label}),o.type==="textarea"?e.jsx("textarea",{className:"wwdpp_form_textarea",id:o.name,name:o.name,required:o.required}):o.type==="select"?e.jsxs("select",{className:"wwdpp_form_select",id:o.name,name:o.name,required:o.required,children:[e.jsxs("option",{value:"",children:["Select ",o.label]}),(d=o.options)==null?void 0:d.map(c=>e.jsx("option",{value:c,children:c},c))]}):e.jsx("input",{className:"wwdpp_form_input",type:o.type,id:o.name,name:o.name,required:o.required})]},o.name)}),e.jsx("button",{type:"submit",className:"wwdpp_form_submit",children:"Submit Application"})]}):e.jsx("div",{dangerouslySetInnerHTML:{__html:((S=r[s||""])==null?void 0:S.body)||""}})})]})})]})}function wa(){return e.jsxs("div",{className:"max-w-4xl mx-auto py-12 px-6",children:[e.jsx("h1",{className:"text-4xl font-bold text-text mb-6",children:"Community"}),e.jsx("p",{className:"text-text-secondary text-lg leading-relaxed",children:"Content for Community page will be displayed here."})]})}function nt(){return e.jsxs(e.Fragment,{children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
                .resources-page {
                    min-height: 100vh;
                    background: linear-gradient(180deg, #ffffff 0%, #f9fcfc 25%, #f0f8f8 45%, #e6f4f4 65%, #daf1f1 80%, #cfeced 92%, #c5e8e9 100%);
                    padding: 80px 20px;
                }
                .resources-container {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .resources-hero {
                    text-align: center;
                    margin-bottom: 60px;
                }
                .resources-hero h1 {
                    font-size: clamp(32px, 5vw, 48px);
                    font-weight: 900;
                    color: #0c2d31;
                    margin-bottom: 16px;
                }
                .resources-hero p {
                    font-size: clamp(18px, 2vw, 22px);
                    color: #2b3d41;
                    max-width: 700px;
                    margin: 0 auto;
                }
                .resources-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 32px;
                    margin-bottom: 60px;
                }
                .resource-card {
                    background: rgba(255,255,255,0.95);
                    border-radius: 20px;
                    padding: 32px;
                    box-shadow: 0 10px 40px rgba(12,45,49,0.15);
                    transition: all 0.3s ease;
                }
                .resource-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 16px 48px rgba(12,45,49,0.2);
                }
                .resource-icon {
                    font-size: 48px;
                    margin-bottom: 16px;
                }
                .resource-card h3 {
                    font-size: 24px;
                    font-weight: 800;
                    color: #0c2d31;
                    margin-bottom: 12px;
                }
                .resource-card p {
                    color: #2b3d41;
                    line-height: 1.7;
                    margin-bottom: 20px;
                }
                .resource-link {
                    display: inline-block;
                    padding: 12px 24px;
                    background: linear-gradient(135deg, #339999 0%, #2C8B8B 100%);
                    color: #fff;
                    border-radius: 10px;
                    font-weight: 700;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                .resource-link:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(51,153,153,0.4);
                }
            `}}),e.jsx("div",{className:"resources-page",children:e.jsxs("div",{className:"resources-container",children:[e.jsxs("div",{className:"resources-hero",children:[e.jsx("h1",{children:"Resources & Information"}),e.jsx("p",{children:"Comprehensive resources for individuals with spinal cord injuries, mobility challenges, and their families. Find grants, programs, equipment, and support services."})]}),e.jsxs("div",{className:"resources-grid",children:[e.jsxs("div",{className:"resource-card",children:[e.jsx("div",{className:"resource-icon",children:"💰"}),e.jsx("h3",{children:"Grant Programs"}),e.jsx("p",{children:"Access funding opportunities for adaptive equipment, home modifications, and recovery support. Learn about eligibility requirements and application processes."}),e.jsx("a",{href:"/pages/apply-for-funding",className:"resource-link",children:"Apply for Funding"})]}),e.jsxs("div",{className:"resource-card",children:[e.jsx("div",{className:"resource-icon",children:"🛠️"}),e.jsx("h3",{children:"Equipment Resources"}),e.jsx("p",{children:"Information about wheelchairs, mobility aids, adaptive technology, and equipment loan programs. Find the right tools for your needs."}),e.jsx("a",{href:"/pages/equipment-resources",className:"resource-link",children:"Explore Equipment"})]}),e.jsxs("div",{className:"resource-card",children:[e.jsx("div",{className:"resource-icon",children:"🏥"}),e.jsx("h3",{children:"Medical & Rehabilitation"}),e.jsx("p",{children:"Connect with rehabilitation centers, specialists, and medical resources. Find providers who understand spinal cord injury recovery."}),e.jsx("a",{href:"/pages/medical-resources",className:"resource-link",children:"Find Providers"})]}),e.jsxs("div",{className:"resource-card",children:[e.jsx("div",{className:"resource-icon",children:"📚"}),e.jsx("h3",{children:"Educational Resources"}),e.jsx("p",{children:"Learn about spinal cord injuries, recovery processes, adaptive techniques, and living with mobility challenges. Access guides and educational materials."}),e.jsx("a",{href:"/pages/education",className:"resource-link",children:"Learn More"})]}),e.jsxs("div",{className:"resource-card",children:[e.jsx("div",{className:"resource-icon",children:"🤝"}),e.jsx("h3",{children:"Support Groups"}),e.jsx("p",{children:"Connect with others who understand your journey. Find local and online support groups, peer mentors, and community connections."}),e.jsx("a",{href:"/pages/community",className:"resource-link",children:"Join Community"})]}),e.jsxs("div",{className:"resource-card",children:[e.jsx("div",{className:"resource-icon",children:"🏛️"}),e.jsx("h3",{children:"Legal & Advocacy"}),e.jsx("p",{children:"Information about disability rights, accessibility laws, insurance, and legal resources. Know your rights and access advocacy support."}),e.jsx("a",{href:"/pages/legal-resources",className:"resource-link",children:"Learn Rights"})]}),e.jsxs("div",{className:"resource-card",children:[e.jsx("div",{className:"resource-icon",children:"💼"}),e.jsx("h3",{children:"Employment Resources"}),e.jsx("p",{children:"Find job opportunities, career counseling, workplace accommodations, and employment support services for individuals with disabilities."}),e.jsx("a",{href:"/pages/employment",className:"resource-link",children:"Find Jobs"})]}),e.jsxs("div",{className:"resource-card",children:[e.jsx("div",{className:"resource-icon",children:"🏠"}),e.jsx("h3",{children:"Housing & Accessibility"}),e.jsx("p",{children:"Resources for accessible housing, home modifications, independent living, and housing assistance programs."}),e.jsx("a",{href:"/pages/housing",className:"resource-link",children:"Explore Housing"})]}),e.jsxs("div",{className:"resource-card",children:[e.jsx("div",{className:"resource-icon",children:"🚗"}),e.jsx("h3",{children:"Transportation"}),e.jsx("p",{children:"Information about accessible transportation options, vehicle modifications, paratransit services, and transportation grants."}),e.jsx("a",{href:"/pages/transportation",className:"resource-link",children:"Find Options"})]})]}),e.jsxs("div",{style:{background:"rgba(255,255,255,0.95)",borderRadius:"20px",padding:"40px",boxShadow:"0 10px 40px rgba(12,45,49,0.15)",textAlign:"center"},children:[e.jsx("h2",{style:{fontSize:"32px",fontWeight:800,color:"#0c2d31",marginBottom:"16px"},children:"Need Help Finding Resources?"}),e.jsx("p",{style:{fontSize:"18px",color:"#2b3d41",marginBottom:"24px",maxWidth:"600px",margin:"0 auto 24px"},children:"Our team is here to help you navigate available resources and find the support you need. Reach out for personalized assistance."}),e.jsx("a",{href:"/pages/contact",style:{display:"inline-block",padding:"14px 32px",background:"linear-gradient(135deg, #FF6B35 0%, #E85D00 100%)",color:"#fff",borderRadius:"12px",fontWeight:700,textDecoration:"none",transition:"all 0.3s ease"},children:"Contact Us"})]})]})})]})}function ot(){return a.useEffect(()=>{const t=`
            (function () {
                const section = document.querySelector('.mvf-symphony');
                if (!section || (section as any).dataset.initialized) return;
                (section as any).dataset.initialized = '1';
                const isCoarse = window.matchMedia('(pointer:coarse)').matches;
                const updateProgress = () => {
                    const scrolled = window.scrollY;
                    const height = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
                    const progress = Math.min(scrolled / height, 1);
                    (section as HTMLElement).style.setProperty('--progress', String(progress));
                };
                const handleParallax = () => {
                    const scrolled = window.scrollY;
                    section.querySelectorAll('.meaux-vision-text').forEach((item: any, index: number) => {
                        const base = isCoarse ? 0.03 : 0.1;
                        const speed = 0.5 + (index * 0.1);
                        const yPos = -(scrolled * speed * base);
                        item.style.setProperty('--parallax-offset', yPos + 'px');
                    });
                };
                const observerOptions = { root: null, rootMargin: '0px', threshold: [0.25, 0.4, 0.55, 0.7] };
                const itemObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
                            entry.target.classList.add('in-view');
                            const fallable = entry.target.querySelector('.mvf-fallable.dramatic');
                            if (fallable) {
                                const trigger = parseFloat((fallable as any).dataset.fallTrigger || '0.55');
                                if (entry.intersectionRatio >= trigger && !fallable.classList.contains('falling')) {
                                    fallable.classList.add('falling');
                                }
                            }
                        }
                    });
                }, observerOptions);
                section.querySelectorAll('.meaux-vision-item').forEach((item: any) => itemObserver.observe(item));
                section.querySelectorAll('.meaux-vision-visual img').forEach((img: any) => {
                    const skeleton = img.previousElementSibling;
                    if (img.complete) { skeleton?.classList.add('loaded'); }
                    else { img.addEventListener('load', () => setTimeout(() => skeleton?.classList.add('loaded'), 100)); }
                });
                let ticking = false;
                const raf = (fn: () => void) => { if (!ticking) { requestAnimationFrame(() => { fn(); ticking = false; }); ticking = true; } };
                window.addEventListener('scroll', () => raf(() => { updateProgress(); handleParallax(); }), { passive: true });
                document.addEventListener('visibilitychange', () => {
                    if (document.hidden) section.classList.add('paused');
                    else section.classList.remove('paused');
                });
                updateProgress(); handleParallax();
            })();
        `,i=document.createElement("script");return i.textContent=t,document.body.appendChild(i),()=>{i.remove()}},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
                .mvf-symphony, .mvf-symphony * { box-sizing: border-box; }
                .mvf-symphony {
                    --ink:#0c2d31; --body:#2b3d41; --muted:#4a5d62; --edge:rgba(12,45,49,.08);
                    --glass:rgba(255,255,255,.96); --orange:#FF7619; --orange-glow:rgba(255,118,25,.6);
                    --symphony-delay:.4s; --stagger:.15s; --hover-speed:.35s; --scroll-speed:.8s;
                    font-family:'Inter', system-ui, sans-serif;
                    width:100%; min-height:100vh;
                    padding:clamp(80px,12vw,160px) clamp(20px,5vw,60px) clamp(60px,10vw,120px);
                    background:
                        linear-gradient(180deg,#ffffff 0%,#f9fcfc 25%,#f0f8f8 45%,#e6f4f4 65%,#daf1f1 80%,#cfeced 92%,#c5e8e9 100%),
                        radial-gradient(ellipse at top right, rgba(255,118,25,0.03) 0%, transparent 40%),
                        radial-gradient(ellipse at bottom left, rgba(31,151,169,0.02) 0%, transparent 40%);
                    color:var(--ink);
                    position:relative; isolation:isolate; overflow-x:hidden;
                }
                .mvf-symphony::before{
                    content:""; position:absolute; inset:0; opacity:.015; pointer-events:none; z-index:1;
                    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
                }
                .scroll-progress{
                    position:fixed; top:0; left:0; width:100%; height:3px; z-index:100;
                    background:linear-gradient(90deg,var(--orange) 0%, #ff9547 100%);
                    transform-origin:left; transform:scaleX(var(--progress,0));
                }
                .meaux-vision-container{ max-width:1440px; margin:0 auto; position:relative; z-index:2; }
                .meaux-vision-title{
                    margin:0 auto clamp(40px,7vw,80px); max-width:80ch; font-weight:700;
                    font-size:clamp(20px,2.2vw,24px); line-height:1.8; color:var(--body);
                    text-align:center; text-wrap:balance; opacity:0; animation:titleReveal 1s ease-out var(--symphony-delay) forwards;
                }
                @keyframes titleReveal{
                    0%{opacity:0; transform:translateY(40px) scale(.95)}
                    50%{transform:translateY(-5px) scale(1.01)}
                    100%{opacity:1; transform:translateY(0) scale(1)}
                }
                .meaux-vision-item{
                    position:relative; display:grid;
                    grid-template-columns:minmax(380px,1fr) minmax(380px,1fr);
                    gap:clamp(60px,8vw,120px); align-items:center;
                    margin-bottom:clamp(100px,12vw,180px); padding:clamp(40px,5vw,60px) 0;
                    opacity:0; transform:translateY(60px) scale(.98);
                    animation:itemSymphony .8s cubic-bezier(.34,1.56,.64,1) forwards;
                    animation-delay:calc(var(--symphony-delay) + var(--stagger) * var(--index,0));
                    will-change:transform, opacity;
                }
                @keyframes itemSymphony{
                    0%{opacity:0; transform:translateY(60px) scale(.98) rotate(.5deg)}
                    50%{transform:translateY(-10px) scale(1.02) rotate(-.2deg)}
                    100%{opacity:1; transform:translateY(0) scale(1) rotate(0)}
                }
                .meaux-vision-item:nth-child(2){--index:1}
                .meaux-vision-item:nth-child(3){--index:2}
                .meaux-vision-item:nth-child(4){--index:3}
                .meaux-vision-item:nth-child(5){--index:4}
                .meaux-vision-item:nth-child(even) .meaux-vision-text{order:2}
                .meaux-vision-item:nth-child(even) .meaux-vision-visual{order:1}
                .meaux-vision-text{ position:relative; z-index:2; padding:20px; }
                .core-value-title{
                    display:inline-block; margin:0 0 12px; font-weight:800; letter-spacing:.1em; text-transform:uppercase;
                    font-size:clamp(13px,1.5vw,15px); color:var(--orange); opacity:0;
                    animation:eyebrowSlide .6s ease-out calc(var(--symphony-delay) + var(--stagger) * var(--index,0) + .2s) forwards;
                }
                @keyframes eyebrowSlide{ from{opacity:0; transform:translateX(-20px)} to{opacity:1; transform:translateX(0)} }
                .meaux-vision-heading{
                    font-weight:900; letter-spacing:-.03em; line-height:1.1;
                    font-size:clamp(32px,4.5vw,48px); margin:0 0 20px; color:var(--ink); position:relative; display:inline-block;
                }
                .meaux-vision-heading .u{position:relative; display:inline-block}
                .meaux-vision-heading .u::after{
                    content:""; position:absolute; left:-5%; right:-5%; bottom:-8px; height:4px; border-radius:2px;
                    background:linear-gradient(90deg,transparent,var(--orange),transparent);
                    transform:scaleX(0); transform-origin:center; transition:transform .6s cubic-bezier(.16,1,.3,1);
                }
                .meaux-vision-item.in-view .u::after{
                    transform:scaleX(1); box-shadow:0 0 20px var(--orange-glow),0 0 40px rgba(255,118,25,.3),0 0 60px rgba(255,118,25,.1);
                    animation:sparkPulse 2s ease-in-out infinite;
                }
                @keyframes sparkPulse{0%,100%{opacity:1}50%{opacity:.8; box-shadow:0 0 30px var(--orange-glow),0 0 60px rgba(255,118,25,.4)}}
                .meaux-vision-desc{ font-weight:500; line-height:1.75; color:var(--body); font-size:clamp(18px,2vw,21px); margin:0 0 16px; max-width:65ch; }
                .meaux-vision-subdesc{ font-weight:400; line-height:1.7; color:var(--muted); font-size:clamp(16px,1.8vw,19px); margin:0 0 20px; max-width:65ch; }
                .value-definition{
                    background:linear-gradient(135deg, rgba(255,255,255,.95), rgba(255,255,255,.85));
                    border:1px solid rgba(255,118,25,.15); border-radius:16px; padding:18px 24px; margin-top:20px;
                    font-style:italic; color:var(--body); backdrop-filter:blur(10px);
                    box-shadow:0 4px 20px rgba(16,24,40,.08), 0 0 40px rgba(255,118,25,.05);
                    transition:all var(--hover-speed) cubic-bezier(.34,1.56,.64,1);
                }
                .value-definition strong{ color:var(--ink); font-weight:700; font-style:normal; }
                .meaux-vision-visual{
                    height:clamp(380px,45vw,520px); border-radius:24px; overflow:hidden;
                    background:linear-gradient(135deg,#e9f4f4,#daf1f1);
                    position:relative; box-shadow:0 10px 40px rgba(12,45,49,.15),0 2px 10px rgba(12,45,49,.08);
                    transform:translateZ(0); transition:transform var(--hover-speed) cubic-bezier(.34,1.56,.64,1);
                    will-change:transform;
                }
                .meaux-vision-visual::before{
                    content:""; position:absolute; inset:0; background:linear-gradient(135deg,transparent,rgba(255,118,25,.1));
                    opacity:0; transition:opacity var(--hover-speed) ease; z-index:1;
                }
                .meaux-vision-visual img{ width:100%; height:100%; object-fit:cover; display:block; transition:transform var(--hover-speed) ease }
                @media (hover:hover) and (pointer:fine){
                    .meaux-vision-visual:hover{ transform:translateY(-8px) scale(1.02) rotateX(2deg); box-shadow:0 20px 60px rgba(12,45,49,.2),0 10px 30px rgba(12,45,49,.12),0 0 60px rgba(255,118,25,.08) }
                    .meaux-vision-visual:hover::before{ opacity:1 }
                    .meaux-vision-visual:hover img{ transform:scale(1.08) rotate(.5deg) }
                    .meaux-vision-item:hover .meaux-vision-text::before{ transform:rotate(calc(var(--bg-rot,-6deg) + 5deg)) scale(1.15) translateY(var(--parallax-offset,0)); opacity:.15; }
                }
                .meaux-vision-text::before{
                    content:""; position:absolute; z-index:-1; pointer-events:none;
                    width:var(--bg-icon-size, clamp(280px, 36vw, 640px)); aspect-ratio:1;
                    left:var(--bg-x,-10%); top:var(--bg-y,-20%);
                    background-image:var(--bg-icon-src); background-size:contain; background-repeat:no-repeat; background-position:center;
                    opacity:.08; filter:blur(.5px); transform:rotate(var(--bg-rot,-6deg)) scale(1) translateY(var(--parallax-offset,0));
                    transition:all 1s cubic-bezier(.16,1,.3,1); animation:iconBreathe 4s ease-in-out infinite;
                }
                @keyframes iconBreathe{0%,100%{transform:rotate(var(--bg-rot,-6deg)) scale(1) translateY(var(--parallax-offset,0))}50%{transform:rotate(calc(var(--bg-rot,-6deg) + 2deg)) scale(1.05) translateY(var(--parallax-offset,0))}}
                .meaux-vision-item.in-view .meaux-vision-text::before{ opacity:.12; transform:rotate(var(--bg-rot,-6deg)) scale(1.08) translateY(var(--parallax-offset,0)) }
                @keyframes iconFallDramatic{
                    0%   { transform:translateY(-10px) rotate(calc(var(--bg-rot,-6deg) - 6deg)) scale(1.05); opacity:.12; }
                    12%  { transform:translateY(-30px) rotate(calc(var(--bg-rot,-6deg) + 4deg))  scale(1.12); opacity:.18; }
                    28%  { transform:translateY(0)     rotate(calc(var(--bg-rot,-6deg) - 2deg))  scale(1.10); }
                    60%  { transform:translateY(70vh)  rotate(calc(var(--bg-rot,-6deg) + 160deg)) scale(.9); opacity:.12; }
                    78%  { transform:translateY(80vh)  rotate(calc(var(--bg-rot,-6deg) + 190deg)) scale(.82); opacity:.08; }
                    100% { transform:translateY(92vh)  rotate(calc(var(--bg-rot,-6deg) + 210deg)) scale(.75); opacity:0; }
                }
                .mvf-fallable.dramatic.falling::before{
                    animation: iconFallDramatic 2.6s cubic-bezier(.2,.7,.15,1) forwards;
                    will-change: transform, opacity;
                }
                .skeleton-loader{ position:absolute; inset:0; background:linear-gradient(90deg,#f0f8f8 25%,#e6f4f4 50%,#f0f8f8 75%); background-size:200% 100%; animation:skeletonWave 1.5s infinite; border-radius:inherit; z-index:10; opacity:1; transition:opacity .3s ease; }
                .skeleton-loader.loaded{ opacity:0; pointer-events:none; }
                @keyframes skeletonWave{0%{background-position:200% 0}100%{background-position:-200% 0}}
                .mvf-symphony *:focus-visible{ outline:3px solid var(--orange); outline-offset:4px; border-radius:4px; }
                @media (max-width:900px){
                    .mvf-symphony{ padding:clamp(60px,10vw,100px) clamp(16px,4vw,32px); }
                    .meaux-vision-item{ grid-template-columns:1fr; gap:40px; margin-bottom:clamp(60px,10vw,100px); text-align:center; }
                    .meaux-vision-item:nth-child(even) .meaux-vision-text{ order:1; }
                    .meaux-vision-item:nth-child(even) .meaux-vision-visual{ order:2; }
                    .meaux-vision-visual{ height:clamp(300px,55vw,400px); }
                    .meaux-vision-text::before{ --bg-icon-size:clamp(200px,50vw,400px); opacity:.06; }
                    @keyframes itemSymphony{ from{opacity:0; transform:translateY(40px)} to{opacity:1; transform:translateY(0)} }
                }
                @media (prefers-reduced-motion: reduce){
                    .mvf-symphony *, .mvf-symphony *::before, .mvf-symphony *::after{
                        animation-duration:.01ms !important; animation-iteration-count:1 !important; transition-duration:.01ms !important; scroll-behavior:auto !important;
                    }
                    .scroll-progress{ display:none; }
                }
                .mvf-symphony.paused *, .mvf-symphony.paused *::before, .mvf-symphony.paused *::after{ animation-play-state:paused !important; }
            `}}),e.jsxs("section",{className:"mvf-symphony","aria-label":"About Meauxbility",role:"region",children:[e.jsx("div",{className:"scroll-progress",role:"progressbar","aria-label":"Page scroll progress"}),e.jsxs("div",{className:"meaux-vision-container",children:[e.jsx("h1",{className:"meaux-vision-title",children:"Empowering those with spinal cord injuries and mobility challenges to reclaim independence through resources, community, and unwavering support."}),e.jsxs("div",{className:"meaux-vision-item",children:[e.jsxs("div",{className:"meaux-vision-text",style:{"--bg-icon-src":"url('https://imagedelivery.net/g7wf09fCONpnidkRnR_5vw/5/public')","--bg-x":"-8%","--bg-y":"-18%","--bg-rot":"-8deg"},children:[e.jsx("span",{className:"core-value-title",children:"Our Mission is Simple"}),e.jsx("h2",{className:"meaux-vision-heading",children:e.jsx("span",{className:"u",children:"Meauxbility Empowers"})}),e.jsxs("p",{className:"meaux-vision-desc",children:[e.jsx("strong",{children:"Those battling spinal cord injuries and mobility challenges"})," by providing resources, community, and opportunities that restore independence and create a better quality of life."]})]}),e.jsxs("div",{className:"meaux-vision-visual",children:[e.jsx("div",{className:"skeleton-loader"}),e.jsx("img",{src:"https://imagedelivery.net/g7wf09fCONpnidkRnR_5vw/dsc06919_7183904c-7e62-4901-b517-596f0fd857c8/public",alt:"Community support in action",loading:"lazy",decoding:"async"})]})]}),e.jsxs("div",{className:"meaux-vision-item",children:[e.jsxs("div",{className:"meaux-vision-text",style:{"--bg-icon-src":"url('https://imagedelivery.net/g7wf09fCONpnidkRnR_5vw/2_a09bc551-dc4d-4cf9-9d3b-a2ba81c2ba0c/public')","--bg-x":"-6%","--bg-y":"-15%","--bg-rot":"-4deg"},children:[e.jsx("span",{className:"core-value-title",children:"Our Vision"}),e.jsx("h2",{className:"meaux-vision-heading",children:e.jsx("span",{className:"u",children:"A Future Without Limits"})}),e.jsx("p",{className:"meaux-vision-desc",children:"Where people of all abilities have equal access to resources, opportunities, and the fullness of life."}),e.jsx("div",{className:"value-definition",children:e.jsx("strong",{children:"More Options + More Access = More Life."})})]}),e.jsxs("div",{className:"meaux-vision-visual",children:[e.jsx("div",{className:"skeleton-loader"}),e.jsx("img",{src:"https://imagedelivery.net/g7wf09fCONpnidkRnR_5vw/filmin_apex_legday/public",alt:"Vision of inclusive access and opportunity",loading:"lazy",decoding:"async"})]})]}),e.jsxs("div",{className:"meaux-vision-item",children:[e.jsxs("div",{className:"meaux-vision-text",style:{"--bg-icon-src":"url('https://imagedelivery.net/g7wf09fCONpnidkRnR_5vw/4/public')","--bg-x":"-9%","--bg-y":"-20%","--bg-rot":"-10deg"},children:[e.jsx("span",{className:"core-value-title",children:"Built by Experience"}),e.jsx("h2",{className:"meaux-vision-heading",children:e.jsx("span",{className:"u",children:"Driven by Results"})}),e.jsxs("p",{className:"meaux-vision-desc",children:["A motorcycle accident in 2017 left our founder, ",e.jsx("strong",{children:"Sam Primeaux"}),", paralyzed from the chest down. Through faith, grit, and the support of his community, Sam reclaimed his independence—and turned that journey into a movement."]})]}),e.jsxs("div",{className:"meaux-vision-visual",children:[e.jsx("div",{className:"skeleton-loader"}),e.jsx("img",{src:"https://imagedelivery.net/g7wf09fCONpnidkRnR_5vw/dsc06873_6d712985-ee71-46fd-a8f5-7a79590659b0/public",alt:"Founder story and recovery journey",loading:"lazy",decoding:"async"})]})]}),e.jsxs("div",{className:"meaux-vision-item",children:[e.jsxs("div",{className:"meaux-vision-text mvf-fallable dramatic","data-fall-trigger":"0.55",style:{"--bg-icon-src":"url('https://imagedelivery.net/g7wf09fCONpnidkRnR_5vw/6/public')","--bg-x":"-7%","--bg-y":"-16%","--bg-rot":"-6deg"},children:[e.jsx("span",{className:"core-value-title",children:"Empowerment"}),e.jsx("h2",{className:"meaux-vision-heading",children:e.jsx("span",{className:"u",children:"Obstacles into Opportunity"})}),e.jsxs("p",{className:"meaux-vision-desc",children:["Today we combine ",e.jsx("strong",{children:"funding, mentorship, and a practical recovery playbook"})," so people with mobility challenges can accelerate their progress toward freedom."]}),e.jsx("p",{className:"meaux-vision-subdesc",children:"We believe recovery shouldn't depend on wealth—everyone deserves more options, more access, and more life."})]}),e.jsxs("div",{className:"meaux-vision-visual",children:[e.jsx("div",{className:"skeleton-loader"}),e.jsx("img",{src:"https://imagedelivery.net/g7wf09fCONpnidkRnR_5vw/group-keep/public",alt:"Turning challenges into progress",loading:"lazy",decoding:"async"})]})]}),e.jsxs("div",{className:"meaux-vision-item",children:[e.jsxs("div",{className:"meaux-vision-text",style:{"--bg-icon-src":"url('https://imagedelivery.net/g7wf09fCONpnidkRnR_5vw/3_c666d932-e895-4620-928e-20762c2be381/public')","--bg-x":"-8%","--bg-y":"-18%","--bg-rot":"-6deg"},children:[e.jsx("span",{className:"core-value-title",children:"Community"}),e.jsx("h2",{className:"meaux-vision-heading",children:e.jsx("span",{className:"u",children:"The Meauxbility Movement"})}),e.jsx("p",{className:"meaux-vision-desc",children:"What began as one story is now a growing network of people and partners creating more access—and more life—together."}),e.jsx("p",{className:"meaux-vision-subdesc",children:"No one should face life's hardest challenges alone."}),e.jsxs("div",{className:"value-definition",children:[e.jsx("strong",{children:"Join us."})," Belonging, encouragement, and shared strength start here."]})]}),e.jsxs("div",{className:"meaux-vision-visual",children:[e.jsx("div",{className:"skeleton-loader"}),e.jsx("img",{src:"https://imagedelivery.net/g7wf09fCONpnidkRnR_5vw/img-6190/public",alt:"Community standing together",loading:"lazy",decoding:"async"})]})]})]})]})]})}function Na(){const[t,i]=a.useState(250),[s,g]=a.useState("one_time"),[n,x]=a.useState({firstName:"",lastName:"",email:""}),[r,N]=a.useState({}),[m,v]=a.useState(!1),[b,k]=a.useState(!1),f=a.useRef(null),S=a.useRef(null),o=a.useRef(null);a.useEffect(()=>{if(!window.Stripe&&typeof window<"u"){const c=document.createElement("script");c.src="https://js.stripe.com/v3/",c.async=!0,c.onload=()=>{window.Stripe&&(f.current=window.Stripe("pk_live_51S4R0SRW56Pm3uYI8EKbysm1ok4peVXSD6G17HtFy8BDuG9Carn8Ry7iPVzulMBtdEFcz5pFvXpE04CIgn8PY6WS00aXOqMYEI"))},document.head.appendChild(c)}else window.Stripe&&(f.current=window.Stripe("pk_live_51S4R0SRW56Pm3uYI8EKbysm1ok4peVXSD6G17HtFy8BDuG9Carn8Ry7iPVzulMBtdEFcz5pFvXpE04CIgn8PY6WS00aXOqMYEI"))},[]),a.useEffect(()=>{if(f.current&&S.current){o.current&&(o.current.unmount(),o.current=null);const c=setTimeout(()=>{if(f.current&&S.current){const h=f.current.elements();o.current=h.create("card",{style:{base:{fontSize:"16px",color:"#ffffff","::placeholder":{color:"rgba(255,255,255,0.5)"}},invalid:{color:"#EF4444"}}}),o.current.mount(S.current),o.current.on("change",C=>{const y=document.getElementById("mbxCardErr");y&&(C.error?(y.textContent=C.error.message,y.classList.add("show")):(y.textContent="",y.classList.remove("show")))})}},100);return()=>{clearTimeout(c),o.current&&(o.current.unmount(),o.current=null)}}},[]);const d=async()=>{const c={};if(n.firstName.trim()||(c.firstName="Required"),n.lastName.trim()||(c.lastName="Required"),n.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)||(c.email="Valid email required"):c.email="Required",N(c),!(Object.keys(c).length>0)){v(!0);try{const C=window.location.hostname==="localhost"||window.location.search.includes("test=true")?"/api/test/donations/create-payment-intent":"/api/donations/create-payment-intent",E=await(await fetch(C,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:t,frequency:s,fund:"general",donorInfo:{firstName:n.firstName,lastName:n.lastName,email:n.email}})})).json();if(!E.success)throw new Error(E.error||"Payment setup failed");const{clientSecret:U}=E;if(f.current&&o.current){const{error:te,paymentIntent:T}=await f.current.confirmCardPayment(U,{payment_method:{card:o.current,billing_details:{name:`${n.firstName} ${n.lastName}`,email:n.email}}});if(te)throw new Error(te.message);T.status==="succeeded"&&(k(!0),setTimeout(()=>{k(!1),x({firstName:"",lastName:"",email:""}),i(250)},5e3))}}catch(h){alert(`Payment failed: ${h instanceof Error?h.message:"Unknown error"}`)}finally{v(!1)}}};return e.jsxs(e.Fragment,{children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
                .donate-page {
                    min-height: 100vh;
                    background: linear-gradient(180deg, #ffffff 0%, #f9fcfc 25%, #f0f8f8 45%, #e6f4f4 65%, #daf1f1 80%, #cfeced 92%, #c5e8e9 100%);
                    padding: 80px 20px;
                }
                .donate-container {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .donate-header {
                    text-align: center;
                    margin-bottom: 60px;
                }
                .donate-header h1 {
                    font-size: clamp(32px, 5vw, 48px);
                    font-weight: 900;
                    color: #0c2d31;
                    margin-bottom: 16px;
                }
                .donate-header p {
                    font-size: clamp(18px, 2vw, 22px);
                    color: #2b3d41;
                    max-width: 700px;
                    margin: 0 auto;
                }
                .mbx-donate-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 40px;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .mbx-donate-options, .mbx-donor-info {
                    background: rgba(255,255,255,0.95);
                    border-radius: 20px;
                    padding: 32px;
                    box-shadow: 0 10px 40px rgba(12,45,49,0.15);
                }
                .mbx-option-title {
                    font-size: 24px;
                    font-weight: 800;
                    color: #0c2d31;
                    margin-bottom: 24px;
                }
                .mbx-frequency-toggle {
                    display: flex;
                    gap: 12px;
                    margin-bottom: 24px;
                }
                .mbx-frequency-btn {
                    flex: 1;
                    padding: 12px 24px;
                    border: 2px solid #339999;
                    background: transparent;
                    color: #339999;
                    border-radius: 10px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .mbx-frequency-btn.active {
                    background: #339999;
                    color: #fff;
                }
                .mbx-amount-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 12px;
                    margin-bottom: 16px;
                }
                .mbx-amount-btn {
                    padding: 16px;
                    border: 2px solid #339999;
                    background: transparent;
                    color: #339999;
                    border-radius: 10px;
                    font-weight: 700;
                    font-size: 18px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .mbx-amount-btn.selected {
                    background: #339999;
                    color: #fff;
                    transform: scale(1.05);
                }
                .mbx-custom-amount {
                    width: 100%;
                    padding: 16px;
                    border: 2px solid #339999;
                    border-radius: 10px;
                    font-size: 18px;
                    margin-bottom: 16px;
                }
                .mbx-form-group {
                    margin-bottom: 20px;
                }
                .mbx-form-group label {
                    display: block;
                    color: #0c2d31;
                    margin-bottom: 8px;
                    font-weight: 600;
                    font-size: 14px;
                }
                .mbx-form-input {
                    width: 100%;
                    padding: 14px;
                    border: 2px solid #339999;
                    border-radius: 10px;
                    font-size: 16px;
                    background: #fff;
                    color: #0c2d31;
                }
                #mbx-card-element {
                    padding: 14px;
                    border: 2px solid #339999;
                    border-radius: 10px;
                    background: #fff;
                    min-height: 50px;
                }
                .mbx-error {
                    color: #EF4444;
                    font-size: 12px;
                    margin-top: 4px;
                    display: none;
                }
                .mbx-error.show {
                    display: block;
                }
                .mbx-donate-submit {
                    width: 100%;
                    padding: 18px;
                    background: linear-gradient(135deg, #FF6B35 0%, #E85D00 100%);
                    color: #fff;
                    border: none;
                    border-radius: 12px;
                    font-weight: 800;
                    font-size: 18px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin-top: 24px;
                }
                .mbx-donate-submit:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(255,107,53,0.4);
                }
                .mbx-donate-submit:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
                .mbx-success-message {
                    text-align: center;
                    padding: 40px;
                    background: linear-gradient(135deg, #10B981 0%, #059669 100%);
                    color: #fff;
                    border-radius: 20px;
                    margin-bottom: 24px;
                }
                @media (max-width: 900px) {
                    .mbx-donate-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}}),e.jsx("div",{className:"donate-page",children:e.jsxs("div",{className:"donate-container",children:[e.jsxs("div",{className:"donate-header",children:[e.jsx("h1",{children:"Support Meauxbility"}),e.jsx("p",{children:"Every dollar transforms lives. Your donation helps provide resources, community, and opportunities for those with spinal cord injuries and mobility challenges."})]}),b&&e.jsxs("div",{className:"mbx-success-message",children:[e.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"✅"}),e.jsx("div",{style:{fontWeight:800,fontSize:"24px",marginBottom:"0.5rem"},children:"Thank You!"}),e.jsx("div",{style:{fontSize:"16px"},children:"Your donation has been processed successfully."})]}),e.jsxs("div",{className:"mbx-donate-grid",children:[e.jsxs("div",{className:"mbx-donate-options",children:[e.jsx("h3",{className:"mbx-option-title",children:"Choose Your Gift"}),e.jsxs("div",{className:"mbx-frequency-toggle",children:[e.jsx("button",{className:`mbx-frequency-btn ${s==="one_time"?"active":""}`,onClick:()=>g("one_time"),children:"One Time"}),e.jsx("button",{className:`mbx-frequency-btn ${s==="monthly"?"active":""}`,onClick:()=>g("monthly"),children:"Monthly"})]}),e.jsx("div",{className:"mbx-amount-grid",children:[25,50,100,250,500,1e3].map(c=>e.jsxs("button",{className:`mbx-amount-btn ${t===c?"selected":""}`,onClick:()=>i(c),children:["$",c===1e3?"1k":c]},c))}),e.jsx("input",{type:"number",className:"mbx-custom-amount",placeholder:"Custom amount",min:"1",onChange:c=>{const h=c.target.value;h&&parseFloat(h)>0&&i(parseFloat(h))}})]}),e.jsxs("div",{className:"mbx-donor-info",children:[e.jsx("h3",{className:"mbx-option-title",children:"Your Information"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"20px"},children:[e.jsxs("div",{className:"mbx-form-group",children:[e.jsx("label",{children:"First Name"}),e.jsx("input",{type:"text",className:"mbx-form-input",required:!0,value:n.firstName,onChange:c=>x({...n,firstName:c.target.value})}),r.firstName&&e.jsx("div",{className:"mbx-error show",children:r.firstName})]}),e.jsxs("div",{className:"mbx-form-group",children:[e.jsx("label",{children:"Last Name"}),e.jsx("input",{type:"text",className:"mbx-form-input",required:!0,value:n.lastName,onChange:c=>x({...n,lastName:c.target.value})}),r.lastName&&e.jsx("div",{className:"mbx-error show",children:r.lastName})]})]}),e.jsxs("div",{className:"mbx-form-group",children:[e.jsx("label",{children:"Email"}),e.jsx("input",{type:"email",className:"mbx-form-input",required:!0,value:n.email,onChange:c=>x({...n,email:c.target.value})}),r.email&&e.jsx("div",{className:"mbx-error show",children:r.email})]}),e.jsxs("div",{className:"mbx-form-group",children:[e.jsx("label",{children:"Card Information"}),e.jsx("div",{id:"mbx-card-element",ref:S}),e.jsx("div",{className:"mbx-error",id:"mbxCardErr"})]}),e.jsx("button",{className:"mbx-donate-submit",onClick:d,disabled:m,children:m?"Processing...":`Donate $${t} ${s==="monthly"?"/month":""}`}),e.jsx("div",{style:{textAlign:"center",marginTop:"24px",color:"#64748B",fontSize:"14px"},children:"🔒 Secure & tax-deductible • EIN: 33-4214907"})]})]})]})})]})}function lt(){return a.useEffect(()=>{const t=`
            (function() {
                // Ken Burns effect
                let kenBurnsTriggered = false;
                function updateKenBurns() {
                    const container = document.getElementById('kenBurnsContainer');
                    if (!container) return;
                    const containerRect = container.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    const triggerPoint = windowHeight * 0.7;
                    if (containerRect.top < triggerPoint && containerRect.bottom > 0 && !kenBurnsTriggered) {
                        container.classList.add('zoomed');
                        kenBurnsTriggered = true;
                    }
                }
                
                // Badge reveal
                function updateBadgeReveal() {
                    const badge = document.getElementById('badgeReveal');
                    const imageContainer = document.getElementById('kenBurnsContainer');
                    if (badge && imageContainer) {
                        const imageBottom = imageContainer.getBoundingClientRect().bottom;
                        const windowHeight = window.innerHeight;
                        if (imageBottom < windowHeight * 0.6) {
                            badge.classList.add('visible');
                        }
                    }
                }
                
                // Scroll reveal
                function updateScrollReveal() {
                    const reveals = document.querySelectorAll('.reveal');
                    reveals.forEach(element => {
                        const elementTop = element.getBoundingClientRect().top;
                        const windowHeight = window.innerHeight;
                        const revealPoint = windowHeight * 0.85;
                        if (elementTop < revealPoint) {
                            element.classList.add('visible');
                        }
                    });
                }
                
                // Unified scroll handler
                function handleScroll() {
                    updateKenBurns();
                    updateBadgeReveal();
                    updateScrollReveal();
                }
                
                let scrollTimeout;
                window.addEventListener('scroll', function() {
                    if (scrollTimeout) window.cancelAnimationFrame(scrollTimeout);
                    scrollTimeout = window.requestAnimationFrame(handleScroll);
                }, { passive: true });
                
                // Modal functions
                window.openSponsorModal = function(sponsorId) {
                    const modal = document.getElementById(sponsorId + 'Modal');
                    if (modal) {
                        modal.classList.add('active');
                        document.body.style.overflow = 'hidden';
                    }
                };
                
                window.closeSponsorModal = function(sponsorId) {
                    const modal = document.getElementById(sponsorId + 'Modal');
                    if (modal) {
                        modal.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                };
                
                window.openProjectInquiryModal = function() {
                    const modal = document.getElementById('projectInquiryModal');
                    if (modal) {
                        modal.classList.add('active');
                        document.body.style.overflow = 'hidden';
                    }
                };
                
                window.closeProjectInquiryModal = function() {
                    const modal = document.getElementById('projectInquiryModal');
                    if (modal) {
                        modal.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                };
                
                window.openSpeakingModal = function() {
                    const modal = document.getElementById('speakingModal');
                    if (modal) {
                        modal.classList.add('active');
                        document.body.style.overflow = 'hidden';
                    }
                };
                
                window.closeSpeakingModal = function() {
                    const modal = document.getElementById('speakingModal');
                    if (modal) {
                        modal.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                };
                
                // Form submissions
                const projectForm = document.getElementById('projectInquiryForm');
                if (projectForm) {
                    projectForm.addEventListener('submit', function(e) {
                        e.preventDefault();
                        const formData = {
                            name: document.getElementById('projectName')?.value || '',
                            email: document.getElementById('projectEmail')?.value || '',
                            service: document.getElementById('projectService')?.value || '',
                            budget: document.getElementById('projectBudget')?.value || 'Not specified',
                            message: document.getElementById('projectMessage')?.value || ''
                        };
                        const subject = encodeURIComponent(\`Project Inquiry: \${formData.service}\`);
                        const body = encodeURIComponent(\`Name: \${formData.name}\\nEmail: \${formData.email}\\nService: \${formData.service}\\nBudget: \${formData.budget}\\n\\nProject Details:\\n\${formData.message}\`);
                        window.location.href = \`mailto:info@inneranimals.com?subject=\${subject}&body=\${body}\`;
                        const success = document.getElementById('projectSuccess');
                        if (success) success.classList.add('show');
                        setTimeout(() => {
                            projectForm.reset();
                            if (success) success.classList.remove('show');
                            window.closeProjectInquiryModal();
                        }, 3000);
                    });
                }
                
                const speakingForm = document.getElementById('speakingForm');
                if (speakingForm) {
                    speakingForm.addEventListener('submit', function(e) {
                        e.preventDefault();
                        const formData = {
                            name: document.getElementById('speakingName')?.value || '',
                            email: document.getElementById('speakingEmail')?.value || '',
                            organization: document.getElementById('speakingOrg')?.value || '',
                            phone: document.getElementById('speakingPhone')?.value || 'Not provided',
                            eventType: document.getElementById('speakingEventType')?.value || '',
                            eventDate: document.getElementById('speakingDate')?.value || 'TBD',
                            audienceSize: document.getElementById('speakingAudience')?.value || 'Not specified',
                            message: document.getElementById('speakingMessage')?.value || ''
                        };
                        const subject = encodeURIComponent(\`Speaking Request: \${formData.eventType} - \${formData.organization}\`);
                        const body = encodeURIComponent(\`Name: \${formData.name}\\nEmail: \${formData.email}\\nOrganization: \${formData.organization}\\nPhone: \${formData.phone}\\nEvent Type: \${formData.eventType}\\nEvent Date: \${formData.eventDate}\\nExpected Audience: \${formData.audienceSize}\\n\\nEvent Details:\\n\${formData.message}\`);
                        window.location.href = \`mailto:info@inneranimals.com?subject=\${subject}&body=\${body}\`;
                        const success = document.getElementById('speakingSuccess');
                        if (success) success.classList.add('show');
                        setTimeout(() => {
                            speakingForm.reset();
                            if (success) success.classList.remove('show');
                            window.closeSpeakingModal();
                        }, 3000);
                    });
                }
                
                // Initial checks
                handleScroll();
            })();
        `,i=document.createElement("script");return i.textContent=t,document.body.appendChild(i),()=>{i.remove()}},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
                *{box-sizing:border-box;margin:0;padding:0}
                body{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;line-height:1.6;color:#1a2528;background:linear-gradient(180deg,#e8ecef 0%,#fff 50%,#f5f7f9 100%);scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
                :root{--teal:#1F97A9;--teal-light:#3AAFBF;--teal-dark:#176B78;--orange:#FF7619;--orange-bright:#FF8C3A;--platinum:#e8ecef;--platinum-light:#f5f7f9;--white:#fff;--text-dark:#2c3e45;--text-muted:#5a6c78;--text-light:#1a2528;--border-light:rgba(0,0,0,.06);--shadow-soft:0 4px 20px rgba(0,0,0,.06);--shadow-medium:0 8px 32px rgba(0,0,0,.12);--radius-sm:12px;--radius-md:16px;--radius-lg:24px;--radius-xl:32px}
                .sam-hero-section{background:linear-gradient(180deg,#e8ecef 0%,#fff 100%);padding:6rem 0 4rem;width:100%;min-height:90vh;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden}
                .sam-hero-section::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 20% 20%,rgba(31,151,169,.03) 0%,transparent 50%),radial-gradient(circle at 80% 80%,rgba(255,118,25,.02) 0%,transparent 50%);pointer-events:none}
                .hero-container{width:100%;max-width:1400px;margin:0 auto;padding:0 3rem;position:relative;z-index:2}
                .hero-primary{padding-top:2rem;display:flex;flex-direction:column;gap:4rem}
                .hero-title-section{text-align:center;max-width:1000px;margin:0 auto;animation:titleEntrance 1s ease-out forwards}
                @keyframes titleEntrance{from{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}
                .hero-main-title{font-family:'Montserrat',sans-serif;font-size:clamp(2.8rem,7vw,6rem);font-weight:900;line-height:1.1;margin-bottom:2rem;letter-spacing:-.02em}
                .hero-title-line-1{display:block;color:#2c3e45;text-shadow:0 2px 20px rgba(31,151,169,.15)}
                .hero-title-line-2{display:block;background:linear-gradient(135deg,#FF7619 0%,#FF8C3A 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;filter:drop-shadow(0 2px 15px rgba(255,118,25,.2))}
                .hero-tagline{font-size:clamp(1.1rem,2.2vw,1.6rem);color:#5a6c78;line-height:1.7;max-width:800px;margin:0 auto;font-weight:400}
                .hero-tagline strong{color:#2c3e45;font-weight:700}
                .ken-burns-container{position:relative;width:100%;max-width:1200px;margin:0 auto;border-radius:32px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.15);background:#f5f5f5;animation:imageEntrance 1.2s ease-out .3s forwards;opacity:0;aspect-ratio:16/9}
                @keyframes imageEntrance{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
                .ken-burns-inner{position:absolute;inset:0;overflow:hidden}
                .ken-burns-image{position:absolute;top:0;left:0;width:110%;height:110%;object-fit:cover;object-position:center;transform-origin:center center;transition:transform .6s cubic-bezier(.19,1,.22,1);will-change:transform;filter:brightness(.96) contrast(1.05) saturate(1.02)}
                .ken-burns-container.zoomed .ken-burns-image{transform:scale(1.15) translate(2%,1%);filter:brightness(1) contrast(1.08) saturate(1.05)}
                .image-frame{position:absolute;inset:0;border:3px solid rgba(255,255,255,.8);border-radius:32px;pointer-events:none;z-index:2;box-shadow:inset 0 0 20px rgba(0,0,0,.05)}
                .hero-badge-reveal{text-align:center;margin-top:3rem;opacity:0;transform:translateY(20px);transition:opacity .8s ease,transform .8s ease}
                .hero-badge-reveal.visible{opacity:1;transform:translateY(0)}
                .impact-badge{display:inline-block;font-family:'Montserrat',sans-serif;font-size:clamp(.9rem,1.8vw,1.15rem);font-weight:800;letter-spacing:.15em;color:#FF7619;background:rgba(255,118,25,.08);backdrop-filter:blur(10px);padding:14px 32px;border-radius:12px;border:2px solid rgba(255,118,25,.25);text-shadow:0 2px 8px rgba(255,118,25,.2);box-shadow:0 4px 20px rgba(255,118,25,.12)}
                .content-container{width:100%;max-width:1200px;margin:0 auto;padding:0 3rem}
                .section-header{text-align:center;margin-bottom:4rem}
                .section-kicker{display:inline-block;font-size:.85rem;font-weight:800;letter-spacing:.12em;color:#1F97A9;background:rgba(31,151,169,.08);padding:8px 18px;border-radius:12px;margin-bottom:1rem;border:1px solid rgba(31,151,169,.15);text-transform:uppercase}
                .section-title{font-size:clamp(2.5rem,5vw,3.5rem);font-weight:800;color:#2c3e45;margin-bottom:1rem;letter-spacing:-.02em}
                .section-subtitle{font-size:clamp(1.1rem,2vw,1.3rem);color:#5a6c78;max-width:700px;margin:0 auto;line-height:1.7}
                .quick-facts-section{background:#fff;padding:5rem 0}
                .quick-facts-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:2rem}
                .fact-card{background:#f5f7f9;padding:2.5rem 2rem;border-radius:24px;text-align:center;border:1px solid rgba(0,0,0,.06);transition:all .3s ease}
                .fact-card:hover{transform:translateY(-4px);box-shadow:0 8px 32px rgba(0,0,0,.12)}
                .fact-icon{font-size:3rem;margin-bottom:1rem}
                .fact-label{font-size:.85rem;text-transform:uppercase;letter-spacing:.1em;color:#5a6c78;margin-bottom:.5rem;font-weight:600}
                .fact-value{font-size:1.2rem;font-weight:700;color:#2c3e45}
                .story-section{background:#f5f7f9;padding:8rem 0}
                .story-content{max-width:900px;margin:0 auto}
                .story-block{background:#fff;padding:3.5rem 3rem;border-radius:24px;margin-bottom:3rem;border:1px solid rgba(0,0,0,.06);box-shadow:0 4px 20px rgba(0,0,0,.06)}
                .story-heading{font-size:clamp(1.8rem,3vw,2.2rem);font-weight:700;color:#1F97A9;margin-bottom:1.5rem}
                .story-text{font-size:1.1rem;line-height:1.8;color:#5a6c78;margin-bottom:1.5rem}
                .story-text strong{color:#2c3e45;font-weight:600}
                .story-quote{background:linear-gradient(135deg,rgba(31,151,169,.05),rgba(31,151,169,.02));border-left:4px solid #1F97A9;padding:2rem 2rem 2rem 3rem;margin:2rem 0;border-radius:12px;position:relative}
                .quote-mark{position:absolute;top:1rem;left:1rem;font-size:4rem;font-weight:900;color:#1F97A9;opacity:.2;line-height:1}
                .quote-text{font-size:1.15rem;font-style:italic;color:#2c3e45;line-height:1.7;margin:0;position:relative;z-index:1}
                .highlight-box{background:linear-gradient(135deg,rgba(255,118,25,.08),rgba(255,118,25,.03));border:2px solid rgba(255,118,25,.2);border-radius:16px;padding:2rem;margin:2rem 0}
                .highlight-title{font-size:1.3rem;font-weight:700;color:#FF7619;margin-bottom:1rem}
                .highlight-list{list-style:none;padding:0;margin:0}
                .highlight-list li{font-size:1.1rem;color:#2c3e45;margin-bottom:.8rem;line-height:1.6}
                .timeline-section{background:#fff;padding:8rem 0}
                .timeline{max-width:800px;margin:0 auto;position:relative}
                .timeline::before{content:'';position:absolute;left:20px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,#1F97A9,#FF7619)}
                .timeline-item{display:flex;gap:2rem;margin-bottom:3rem;position:relative}
                .timeline-marker{flex-shrink:0;width:42px;height:42px;display:flex;align-items:center;justify-content:center;position:relative;z-index:2}
                .timeline-dot{width:16px;height:16px;border-radius:50%;background:#1F97A9;border:4px solid #fff;box-shadow:0 0 0 2px #1F97A9}
                .timeline-content{flex:1;background:#f5f7f9;padding:2rem;border-radius:16px;border:1px solid rgba(0,0,0,.06)}
                .timeline-date{font-size:.9rem;font-weight:700;color:#FF7619;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.5rem}
                .timeline-title{font-size:1.4rem;font-weight:700;color:#2c3e45;margin-bottom:.8rem}
                .timeline-text{font-size:1.05rem;color:#5a6c78;line-height:1.6}
                .digital-work-section{background:#f5f7f9;padding:8rem 0}
                .hero-content{background:#fff;border-radius:24px;box-shadow:0 8px 32px rgba(0,0,0,.12);padding:clamp(3rem,5vw,5rem);display:flex;align-items:center;gap:clamp(3rem,5vw,5rem)}
                .hero-text{flex:1;max-width:60%}
                .work-kicker{display:inline-flex;align-items:center;gap:10px;font-size:.85rem;font-weight:800;letter-spacing:.12em;color:#1F97A9;background:rgba(31,151,169,.06);padding:10px 18px;border-radius:12px;margin-bottom:2rem;border:1px solid rgba(31,151,169,.12)}
                .hero-title{font-size:clamp(2.5rem,5vw,4rem);font-weight:800;line-height:1.1;margin-bottom:2rem;letter-spacing:-.02em}
                .title-line-1{display:block;color:#1F97A9;font-style:italic}
                .title-line-2{display:block;color:#FF7619;font-style:italic}
                .hero-subtitle{font-size:1.2rem;color:#5a6c78;line-height:1.8;margin-bottom:2.5rem}
                .hero-subtitle strong{color:#2c3e45;font-weight:600}
                .stats-micro{display:flex;gap:3rem;flex-wrap:wrap;margin-top:2.5rem}
                .stat-micro{display:flex;flex-direction:column;gap:6px}
                .stat-number{font-size:clamp(2rem,3vw,2.8rem);font-weight:900;background:linear-gradient(135deg,#1F97A9 0%,#3AAFBF 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1}
                .stat-label{font-size:.8rem;color:#5a6c78;text-transform:uppercase;letter-spacing:.08em;font-weight:600}
                .hero-image{flex:0 0 auto;max-width:360px;width:100%}
                .image-card{background:#fff;border-radius:24px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.06);transition:transform .4s ease;cursor:pointer;position:relative}
                .image-card:hover{transform:translateY(-8px)}
                .image-card img{width:100%;height:auto;display:block}
                .image-badge{position:absolute;bottom:16px;left:16px;right:16px;background:rgba(26,37,40,.92);backdrop-filter:blur(12px);padding:12px 18px;border-radius:12px;text-align:center}
                .image-badge span{font-size:.9rem;font-weight:700;color:#fff;letter-spacing:.06em;text-transform:uppercase}
                .sponsors-section{background:#fff;padding:8rem 0;position:relative;overflow:hidden}
                .sponsors-section::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 30% 50%,rgba(31,151,169,.03) 0%,transparent 60%);pointer-events:none}
                .sponsors-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:2rem;max-width:1200px;margin:0 auto}
                .sponsor-card{background:rgba(255,255,255,.7);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(31,151,169,.12);border-radius:24px;padding:2.5rem 2rem;transition:all .4s cubic-bezier(.4,0,.2,1);cursor:pointer;position:relative;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.04),inset 0 1px 0 rgba(255,255,255,.8)}
                .sponsor-card:hover{transform:translateY(-8px);border-color:#1F97A9;box-shadow:0 12px 40px rgba(31,151,169,.15),inset 0 1px 0 rgba(255,255,255,.9)}
                .sponsor-icon{font-size:3rem;margin-bottom:1rem;display:block}
                .sponsor-name{font-size:1.4rem;font-weight:700;color:#2c3e45;margin-bottom:.5rem;line-height:1.3}
                .sponsor-description{font-size:1.05rem;color:#5a6c78;line-height:1.6;margin-bottom:1.5rem}
                .sponsor-impact{display:flex;align-items:center;gap:.8rem;padding:12px 16px;background:rgba(31,151,169,.06);border-radius:12px;margin-bottom:1.5rem;border:1px solid rgba(31,151,169,.1)}
                .impact-label{font-size:.85rem;font-weight:700;color:#1F97A9;text-transform:uppercase;letter-spacing:.08em}
                .impact-value{font-size:.95rem;font-weight:600;color:#2c3e45}
                .sponsor-cta{display:inline-flex;align-items:center;gap:.6rem;padding:12px 24px;background:linear-gradient(135deg,#1F97A9,#3AAFBF);color:#fff;border:none;border-radius:12px;font-size:.95rem;font-weight:600;cursor:pointer;transition:all .3s ease;box-shadow:0 4px 12px rgba(31,151,169,.2);text-decoration:none}
                .sponsor-cta:hover{transform:translateX(4px);box-shadow:0 6px 20px rgba(31,151,169,.3);background:linear-gradient(135deg,#3AAFBF,#1F97A9)}
                .press-section{background:#f5f7f9;padding:8rem 0}
                .press-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2.5rem;max-width:1200px;margin:0 auto}
                .press-card{background:#f5f7f9;padding:2.5rem 2rem;border-radius:24px;border:1px solid rgba(0,0,0,.06);transition:all .3s ease;text-decoration:none;color:inherit;display:flex;flex-direction:column}
                .press-card:hover{transform:translateY(-6px);box-shadow:0 8px 32px rgba(0,0,0,.12);border-color:#1F97A9}
                .press-icon{font-size:3rem;margin-bottom:1.5rem}
                .press-title{font-size:1.4rem;font-weight:700;color:#1F97A9;margin-bottom:1rem}
                .press-excerpt{font-size:1.05rem;color:#5a6c78;line-height:1.6;margin-bottom:1.5rem;flex-grow:1}
                .press-date{font-size:.85rem;color:#FF7619;font-weight:600;text-transform:uppercase;letter-spacing:.08em}
                .press-cta-link{display:inline-flex;align-items:center;gap:.5rem;color:#1F97A9;font-weight:600;font-size:.95rem;transition:all .3s ease;margin-top:1rem}
                .mission-section{background:#f5f7f9;padding:8rem 0}
                .mission-content{max-width:1000px;margin:0 auto;background:#fff;padding:4rem 3.5rem;border-radius:24px;box-shadow:0 8px 32px rgba(0,0,0,.12)}
                .mission-description{font-size:1.2rem;line-height:1.8;color:#5a6c78;margin-bottom:3rem}
                .mission-goals{display:grid;gap:2rem}
                .goal-item{display:flex;gap:1.5rem;align-items:flex-start;padding:1.5rem;background:#f5f7f9;border-radius:16px;border:1px solid rgba(0,0,0,.06)}
                .goal-icon{font-size:2.5rem;flex-shrink:0}
                .goal-text strong{display:block;font-size:1.2rem;color:#2c3e45;margin-bottom:.5rem}
                .goal-text p{font-size:1.05rem;color:#5a6c78;line-height:1.6;margin:0}
                .cta-section{background:linear-gradient(135deg,#176B78,#1F97A9);padding:8rem 0;text-align:center;color:#fff}
                .cta-title{font-size:clamp(2.5rem,5vw,3.5rem);font-weight:900;margin-bottom:1.5rem;text-shadow:0 4px 20px rgba(0,0,0,.2)}
                .cta-text{font-size:1.3rem;line-height:1.7;margin-bottom:3rem;opacity:.95}
                .cta-buttons{display:flex;gap:1.5rem;justify-content:center;flex-wrap:wrap;margin-bottom:3rem}
                .btn{display:inline-flex;align-items:center;gap:.8rem;padding:1.2rem 2.5rem;border-radius:12px;font-size:1.1rem;font-weight:700;text-decoration:none;transition:all .3s ease;border:2px solid transparent;cursor:pointer}
                .btn-primary{background:#FF7619;color:#fff;box-shadow:0 8px 24px rgba(255,118,25,.3)}
                .btn-primary:hover{background:#FF8C3A;transform:translateY(-2px);box-shadow:0 12px 32px rgba(255,118,25,.4)}
                .btn-secondary{background:transparent;color:#fff;border-color:#fff}
                .btn-secondary:hover{background:#fff;color:#1F97A9;transform:translateY(-2px)}
                .social-links{display:flex;gap:1.5rem;justify-content:center}
                .social-link{width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;color:#fff;transition:all .3s ease;text-decoration:none}
                .social-link:hover{background:#fff;color:#1F97A9;transform:translateY(-4px)}
                .reveal{opacity:0;transform:translateY(30px);transition:opacity .8s ease,transform .8s ease}
                .reveal.visible{opacity:1;transform:translateY(0)}
                .sponsor-modal,.inquiry-modal{position:fixed;inset:0;z-index:9999;display:none;align-items:center;justify-content:center;padding:2rem;opacity:0;transition:opacity .3s ease}
                .sponsor-modal.active,.inquiry-modal.active{display:flex;opacity:1}
                .modal-backdrop,.inquiry-modal-backdrop{position:absolute;inset:0;background:rgba(26,37,40,.75);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);animation:fadeIn .3s ease}
                @keyframes fadeIn{from{opacity:0}to{opacity:1}}
                .modal-content,.inquiry-modal-content{position:relative;max-width:700px;width:100%;max-height:85vh;overflow-y:auto;border-radius:32px;animation:modalSlideUp .4s cubic-bezier(.4,0,.2,1);z-index:2;background:rgba(255,255,255,.95);backdrop-filter:blur(20px) saturate(150%);-webkit-backdrop-filter:blur(20px) saturate(150%);border:2px solid rgba(31,151,169,.15);box-shadow:0 24px 80px rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.9);padding:3rem 2.5rem}
                @keyframes modalSlideUp{from{opacity:0;transform:translateY(40px) scale(.95)}to{opacity:1;transform:translateY(0) scale(1)}}
                .modal-close,.inquiry-modal-close{position:absolute;top:1.5rem;right:1.5rem;width:40px;height:40px;border-radius:50%;background:rgba(31,151,169,.08);border:1px solid rgba(31,151,169,.15);color:#1F97A9;cursor:pointer;transition:all .3s ease;display:flex;align-items:center;justify-content:center;z-index:3}
                .modal-close:hover,.inquiry-modal-close:hover{background:#1F97A9;color:#fff;transform:rotate(90deg)}
                .modal-header,.inquiry-modal-header{text-align:center;margin-bottom:2.5rem;padding-bottom:2rem;border-bottom:1px solid rgba(31,151,169,.1)}
                .modal-icon{font-size:4rem;margin-bottom:1rem}
                .modal-title,.inquiry-modal-title{font-size:2rem;font-weight:800;color:#1F97A9;margin-bottom:.5rem}
                .modal-subtitle,.inquiry-modal-subtitle{font-size:1.1rem;color:#5a6c78;font-weight:500}
                .inquiry-badge{display:inline-block;background:rgba(255,118,25,.1);border:1px solid rgba(255,118,25,.3);color:#FF7619;padding:8px 18px;border-radius:12px;font-size:.8rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;margin-bottom:1.5rem}
                .inquiry-form{display:flex;flex-direction:column;gap:1.5rem}
                .inquiry-form-row{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem}
                .inquiry-label{font-size:.85rem;font-weight:700;color:#2c3e45;margin-bottom:.6rem;text-transform:uppercase;letter-spacing:.05em}
                .inquiry-required{color:#FF7619;margin-left:2px}
                .inquiry-input,.inquiry-select,.inquiry-textarea{width:100%;padding:12px 16px;background:rgba(255,255,255,.6);border:2px solid rgba(31,151,169,.15);border-radius:12px;color:#2c3e45;font-size:.95rem;font-family:inherit;outline:none;transition:all .3s ease}
                .inquiry-input:focus,.inquiry-select:focus,.inquiry-textarea:focus{border-color:#1F97A9;background:rgba(255,255,255,.8);box-shadow:0 0 0 3px rgba(31,151,169,.1)}
                .inquiry-select{cursor:pointer;appearance:none;background-image:url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%235a6c78' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;padding-right:40px}
                .inquiry-textarea{resize:vertical;min-height:120px;line-height:1.6}
                .inquiry-submit{width:100%;padding:14px 24px;background:linear-gradient(135deg,#1F97A9,#3AAFBF);border:none;border-radius:12px;color:#fff;font-size:1rem;font-weight:700;cursor:pointer;transition:all .3s ease;text-transform:uppercase;letter-spacing:.5px;font-family:inherit;box-shadow:0 6px 20px rgba(31,151,169,.25);margin-top:.5rem}
                .inquiry-submit:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(31,151,169,.35);background:linear-gradient(135deg,#3AAFBF,#1F97A9)}
                .inquiry-success{display:none;align-items:center;justify-content:center;gap:.8rem;background:rgba(33,196,140,.1);border:2px solid #21c48c;border-radius:12px;padding:1rem 1.5rem;margin-top:1rem;text-align:center;color:#21c48c;font-weight:600}
                .inquiry-success.show{display:flex}
                @media(max-width:968px){.content-container,.hero-container{padding:0 2rem}.hero-content{flex-direction:column;text-align:center}.hero-text{max-width:100%}.stats-micro{justify-content:center}.work-kicker{margin:0 auto 2rem}.hero-image{max-width:340px;margin:0 auto}.story-block{padding:2.5rem 2rem}.mission-content{padding:3rem 2rem}.cta-buttons{flex-direction:column;align-items:center}.btn{width:100%;max-width:320px;justify-content:center}.sponsors-grid{grid-template-columns:1fr;gap:1.5rem}}
                @media(max-width:768px){.content-container,.hero-container{padding:0 1.5rem}.sam-hero-section{padding:4rem 0 3rem}.quick-facts-grid{grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.5rem}.story-section,.timeline-section,.digital-work-section,.press-section,.mission-section,.cta-section,.sponsors-section{padding:5rem 0}.timeline::before{left:10px}.timeline-marker{width:32px;height:32px}.press-grid{grid-template-columns:1fr;gap:2rem}.sponsor-modal,.inquiry-modal{padding:1rem}.modal-content,.inquiry-modal-content{max-height:90vh}.inquiry-form-row{grid-template-columns:1fr}}
                @media(max-width:480px){.fact-card{padding:2rem 1.5rem}.story-block{padding:2rem 1.5rem}.story-quote{padding:1.5rem 1.5rem 1.5rem 2.5rem}.social-links{gap:1rem}.social-link{width:42px;height:42px}.sponsor-card{padding:2rem 1.5rem}.modal-content,.inquiry-modal-content{padding:2rem 1.5rem}.modal-icon{font-size:3rem}.modal-title,.inquiry-modal-title{font-size:1.6rem}.sponsor-cta,.modal-cta-button{width:100%;justify-content:center}.inquiry-modal-content{padding:2rem 1.5rem}.inquiry-modal-title{font-size:1.6rem}.inquiry-modal-subtitle{font-size:.95rem}.inquiry-modal-close{top:1rem;right:1rem;width:36px;height:36px}.inquiry-submit{padding:12px 20px;font-size:.9rem}.btn{padding:12px 24px;font-size:.95rem}}
                @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}
            `}}),e.jsx("section",{className:"sam-hero-section",children:e.jsxs("div",{className:"hero-container hero-primary",children:[e.jsxs("div",{className:"hero-title-section",children:[e.jsxs("h1",{className:"hero-main-title",children:[e.jsx("span",{className:"hero-title-line-1",children:"Sam Primeaux"}),e.jsx("span",{className:"hero-title-line-2",children:"Redefining Impossible"})]}),e.jsxs("p",{className:"hero-tagline",children:["From complete paralysis to standing at 14,115 feet.",e.jsx("strong",{children:" This isn't a comeback story—it's a revolution."})]})]}),e.jsxs("div",{className:"ken-burns-container",id:"kenBurnsContainer",children:[e.jsx("div",{className:"ken-burns-inner",children:e.jsx("img",{src:"https://cdn.shopify.com/s/files/1/0685/1654/4672/files/sam-smile-pikes-peak.jpg?v=1754025762",alt:"Sam Primeaux standing in front of his wheelchair at Pikes Peak summit - defying paralysis since 2017",className:"ken-burns-image",id:"kenBurnsImage"})}),e.jsx("div",{className:"image-frame"})]}),e.jsx("div",{className:"hero-badge-reveal",id:"badgeReveal",children:e.jsx("span",{className:"impact-badge",children:"PARALYZED 2017 • STANDING 2024"})})]})}),e.jsx("section",{className:"quick-facts-section",children:e.jsx("div",{className:"content-container",children:e.jsxs("div",{className:"quick-facts-grid",children:[e.jsxs("div",{className:"fact-card",children:[e.jsx("div",{className:"fact-icon",children:"📅"}),e.jsx("div",{className:"fact-label",children:"Born"}),e.jsx("div",{className:"fact-value",children:"November 3, 1999"})]}),e.jsxs("div",{className:"fact-card",children:[e.jsx("div",{className:"fact-icon",children:"🏍️"}),e.jsx("div",{className:"fact-label",children:"Day of Injury"}),e.jsx("div",{className:"fact-value",children:"June 22, 2017"})]}),e.jsxs("div",{className:"fact-card",children:[e.jsx("div",{className:"fact-icon",children:"🏥"}),e.jsx("div",{className:"fact-label",children:"Pathology"}),e.jsx("div",{className:"fact-value",children:"T4 Spinal Cord Injury (ASIA A)"})]}),e.jsxs("div",{className:"fact-card",children:[e.jsx("div",{className:"fact-icon",children:"📍"}),e.jsx("div",{className:"fact-label",children:"Location"}),e.jsx("div",{className:"fact-value",children:"Lafayette, Louisiana"})]})]})})}),e.jsx("section",{className:"story-section",children:e.jsxs("div",{className:"content-container",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("span",{className:"section-kicker",children:"The Journey"}),e.jsx("h2",{className:"section-title",children:"A Life Forever Changed"}),e.jsx("p",{className:"section-subtitle",children:"One rainy night. One accident. One decision to never give up."})]}),e.jsxs("div",{className:"story-content",children:[e.jsxs("div",{className:"story-block reveal",children:[e.jsx("h3",{className:"story-heading",children:"The Accident"}),e.jsx("p",{className:"story-text",children:"Growing up in Lafayette, Louisiana, Sam spent his days outdoors—exploring, playing sports, and living life to the fullest. On June 22, 2017, fresh out of high school graduation, everything changed."}),e.jsx("p",{className:"story-text",children:"Riding home one rainy evening on his motorcycle, Sam encountered a car that cut out in front of him to make a turn. The driver didn't see him. Sam slid 10-20 feet before colliding with the truck, diving over it like a swimmer into a pool—only to smack the asphalt head-first."}),e.jsxs("div",{className:"story-quote",children:[e.jsx("div",{className:"quote-mark",children:'"'}),e.jsx("p",{className:"quote-text",children:"I had a full face helmet—it shattered the jaw piece. Three of my vertebrae shattered together. My pelvis shattered. My sternum cracked. My spinal cord was punctured, causing a leak of spinal fluid."})]}),e.jsxs("p",{className:"story-text",children:["The diagnosis: ",e.jsx("strong",{children:"T4 Spinal Cord Injury (ASIA A). Paralyzed from the chest down."})," What doctors called permanent, Sam saw as temporary."]})]}),e.jsxs("div",{className:"story-block reveal",children:[e.jsx("h3",{className:"story-heading",children:"The Dark Days"}),e.jsx("p",{className:"story-text",children:`"It completely crushed me," Sam recalls. "I wasn't in the best mental space before the accident, so this just made me feel like I was on my own. I was a free bird—just graduated, about to work full-time and build a life for myself. And that just stopped me dead in my tracks."`}),e.jsx("p",{className:"story-text",children:"After 6-8 months of physical therapy with little to no progress, Sam's insurance company dropped him. Medical professionals threw in the towel. The system said he was done. But Sam wasn't listening to the system anymore."}),e.jsxs("div",{className:"story-quote",children:[e.jsx("div",{className:"quote-mark",children:'"'}),e.jsx("p",{className:"quote-text",children:"My insurance company, the medical professionals—they were all throwing in the towel. Why should I keep fighting? But someone told me: whenever you let someone set your limits, that's when you're limited."})]})]}),e.jsxs("div",{className:"story-block reveal",children:[e.jsx("h3",{className:"story-heading",children:"The Turning Point"}),e.jsx("p",{className:"story-text",children:"Rather than accept defeat, Sam trained religiously. He learned everything he could about health and fitness, building the parts of his body he could control to operate in this new life. Three years post-injury, Sam discovered stem cell therapy and found a way to access treatment at Rejuv Medical in Minnesota."}),e.jsxs("p",{className:"story-text",children:["To fund his treatments, Sam launched ",e.jsx("strong",{children:"Inner Animal"}),"—a brand built on hope, motivation, and the belief that everyone has an untapped power within them."]}),e.jsxs("div",{className:"story-quote",children:[e.jsx("div",{className:"quote-mark",children:'"'}),e.jsx("p",{className:"quote-text",children:"Fashion is not my strong suit, but inspiring people is. Inner Animal is a symbol of hope, a symbol of motivation—something to fire you up. I want people to put on my products and feel stronger, understanding that they have something within them that, if unleashed, can do amazing things."})]})]}),e.jsxs("div",{className:"story-block reveal",children:[e.jsx("h3",{className:"story-heading",children:"The Breakthroughs"}),e.jsxs("p",{className:"story-text",children:["A physical therapist noticed Sam's progress and began training him ",e.jsx("strong",{children:"once a week for FREE"}),". Together, they made enough gains for insurance to start covering PT twice a week—plus the therapist's weekly session."]}),e.jsxs("p",{className:"story-text",children:["Then came the game-changer: ",e.jsx("strong",{children:"Dustin Poirier's Good Fight Foundation"})," sponsored Sam's third round of stem cells. The results were nothing short of extraordinary."]}),e.jsxs("div",{className:"highlight-box",children:[e.jsx("h4",{className:"highlight-title",children:"Post-Treatment 3 Results (First Week):"}),e.jsxs("ul",{className:"highlight-list",children:[e.jsxs("li",{children:["✅ Learned to ",e.jsx("strong",{children:"crawl backwards"})]}),e.jsxs("li",{children:["✅ Learned to ",e.jsx("strong",{children:"walk backwards"})]}),e.jsxs("li",{children:["✅ Walked ",e.jsx("strong",{children:"615 feet in 40 minutes"})," on an EVA walker (personal record)"]})]})]})]}),e.jsxs("div",{className:"story-block reveal",children:[e.jsx("h3",{className:"story-heading",children:"Conquering Pikes Peak"}),e.jsxs("p",{className:"story-text",children:[`When asked about his rehab goals, Sam doesn't say "walk" or "stand" or "run." He says: `,e.jsx("strong",{children:`"Let's shoot for a lot further beyond."`})]}),e.jsxs("p",{className:"story-text",children:["His milestone? ",e.jsx("strong",{children:"Climb Pikes Peak"}),"—a 14,115-foot mountain in Colorado. Not typical for someone in a wheelchair, but typical has never been Sam's style."]}),e.jsx("p",{className:"story-text",children:"And he did it. Standing at the summit, wheelchair nearby, Sam proved that the only limits that exist are the ones we accept."})]})]})]})}),e.jsx("section",{className:"timeline-section",children:e.jsxs("div",{className:"content-container",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("span",{className:"section-kicker",children:"The Timeline"}),e.jsx("h2",{className:"section-title",children:"From Tragedy to Triumph"}),e.jsx("p",{className:"section-subtitle",children:"8+ years of relentless determination"})]}),e.jsxs("div",{className:"timeline",children:[e.jsxs("div",{className:"timeline-item reveal",children:[e.jsx("div",{className:"timeline-marker",children:e.jsx("div",{className:"timeline-dot"})}),e.jsxs("div",{className:"timeline-content",children:[e.jsx("div",{className:"timeline-date",children:"June 22, 2017"}),e.jsx("h4",{className:"timeline-title",children:"The Accident"}),e.jsx("p",{className:"timeline-text",children:"Motorcycle collision results in T4 spinal cord injury. Paralyzed from chest down."})]})]}),e.jsxs("div",{className:"timeline-item reveal",children:[e.jsx("div",{className:"timeline-marker",children:e.jsx("div",{className:"timeline-dot"})}),e.jsxs("div",{className:"timeline-content",children:[e.jsx("div",{className:"timeline-date",children:"2017-2018"}),e.jsx("h4",{className:"timeline-title",children:"Insurance Drops Coverage"}),e.jsx("p",{className:"timeline-text",children:"After 6-8 months of PT with minimal progress, insurance discontinues coverage."})]})]}),e.jsxs("div",{className:"timeline-item reveal",children:[e.jsx("div",{className:"timeline-marker",children:e.jsx("div",{className:"timeline-dot"})}),e.jsxs("div",{className:"timeline-content",children:[e.jsx("div",{className:"timeline-date",children:"2020"}),e.jsx("h4",{className:"timeline-title",children:"First Stem Cell Treatment"}),e.jsx("p",{className:"timeline-text",children:"Receives first stem cell treatment at Rejuv Medical. Launches Inner Animal brand."})]})]}),e.jsxs("div",{className:"timeline-item reveal",children:[e.jsx("div",{className:"timeline-marker",children:e.jsx("div",{className:"timeline-dot"})}),e.jsxs("div",{className:"timeline-content",children:[e.jsx("div",{className:"timeline-date",children:"2023"}),e.jsx("h4",{className:"timeline-title",children:"Good Fight Foundation Sponsorship"}),e.jsx("p",{className:"timeline-text",children:"Dustin Poirier's Good Fight Foundation sponsors third stem cell treatment. Results are extraordinary."})]})]}),e.jsxs("div",{className:"timeline-item reveal",children:[e.jsx("div",{className:"timeline-marker",children:e.jsx("div",{className:"timeline-dot"})}),e.jsxs("div",{className:"timeline-content",children:[e.jsx("div",{className:"timeline-date",children:"2024"}),e.jsx("h4",{className:"timeline-title",children:"Summit of Pikes Peak"}),e.jsx("p",{className:"timeline-text",children:"Stands at 14,115 feet. Conquers the mountain. Proves impossible is just an opinion."})]})]})]})]})}),e.jsx("section",{className:"digital-work-section",children:e.jsx("div",{className:"content-container",children:e.jsxs("div",{className:"hero-content",children:[e.jsxs("div",{className:"hero-text",children:[e.jsxs("div",{className:"work-kicker",children:[e.jsx("span",{className:"kicker-icon",children:"⚡"}),e.jsx("span",{children:"DIGITAL INNOVATOR"})]}),e.jsxs("h2",{className:"hero-title",children:[e.jsx("span",{className:"title-line-1",children:"Turning Ideas"}),e.jsx("span",{className:"title-line-2",children:"Into Digital Impact"})]}),e.jsxs("p",{className:"hero-subtitle",children:["When you've learned to rewire paralyzed nerves, building digital systems is second nature. Sam brings the same relentless innovation to ",e.jsx("strong",{children:"viral content"}),", ",e.jsx("strong",{children:"web development"}),", and ",e.jsx("strong",{children:"motivational speaking"})," that got him standing again."]}),e.jsxs("div",{className:"stats-micro",children:[e.jsxs("div",{className:"stat-micro",children:[e.jsx("span",{className:"stat-number",children:"8+"}),e.jsx("span",{className:"stat-label",children:"Years Defying Odds"})]}),e.jsxs("div",{className:"stat-micro",children:[e.jsx("span",{className:"stat-number",children:"33K+"}),e.jsx("span",{className:"stat-label",children:"Community Strong"})]}),e.jsxs("div",{className:"stat-micro",children:[e.jsx("span",{className:"stat-number",children:"∞"}),e.jsx("span",{className:"stat-label",children:"Possible"})]})]})]}),e.jsx("div",{className:"hero-image",children:e.jsxs("div",{className:"image-card",children:[e.jsx("img",{src:"https://cdn.shopify.com/s/files/1/0685/1654/4672/files/sam_smile_stand_train_unique.jpg?v=1754338529",alt:"Sam Primeaux - Digital Success Expert",loading:"lazy"}),e.jsx("div",{className:"image-badge",children:e.jsx("span",{children:"CEO • Developer • Speaker"})})]})})]})})}),e.jsx("section",{className:"sponsors-section",children:e.jsxs("div",{className:"content-container",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("span",{className:"section-kicker",children:"Supported By"}),e.jsx("h2",{className:"section-title",children:"Partners in Recovery"}),e.jsx("p",{className:"section-subtitle",children:"Organizations that made the impossible possible"})]}),e.jsxs("div",{className:"sponsors-grid",children:[e.jsxs("div",{className:"sponsor-card glassmorphic reveal","data-sponsor":"goodfight",children:[e.jsxs("div",{className:"sponsor-logo-area",children:[e.jsx("div",{className:"sponsor-icon",children:"🥊"}),e.jsx("h4",{className:"sponsor-name",children:"Good Fight Foundation"})]}),e.jsx("p",{className:"sponsor-description",children:"Sponsored Sam's 3rd stem cell treatment, leading to breakthrough results including learning to crawl and walk backwards."}),e.jsxs("div",{className:"sponsor-impact",children:[e.jsx("span",{className:"impact-label",children:"Impact:"}),e.jsx("span",{className:"impact-value",children:"Stem Cell Treatment #3"})]}),e.jsxs("button",{className:"sponsor-cta",onClick:()=>{var t;return(t=window.openSponsorModal)==null?void 0:t.call(window,"goodfight")},children:[e.jsx("span",{children:"Read Full Story"}),e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M6 3L11 8L6 13",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})]})]}),e.jsxs("div",{className:"sponsor-card glassmorphic reveal","data-sponsor":"motion",children:[e.jsxs("div",{className:"sponsor-logo-area",children:[e.jsx("div",{className:"sponsor-icon",children:"♿"}),e.jsx("h4",{className:"sponsor-name",children:"Motion Composites"})]}),e.jsx("p",{className:"sponsor-description",children:"Wishes for Wheels Program winner. Received custom APEX Carbon Fiber wheelchair that transformed daily mobility."}),e.jsxs("div",{className:"sponsor-impact",children:[e.jsx("span",{className:"impact-label",children:"Impact:"}),e.jsx("span",{className:"impact-value",children:"APEX C Carbon Wheelchair"})]}),e.jsxs("button",{className:"sponsor-cta",onClick:()=>{var t;return(t=window.openSponsorModal)==null?void 0:t.call(window,"motion")},children:[e.jsx("span",{children:"Read Full Story"}),e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M6 3L11 8L6 13",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})]})]})]})]})}),e.jsx("section",{className:"press-section",children:e.jsxs("div",{className:"content-container",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("span",{className:"section-kicker",children:"As Featured In"}),e.jsx("h2",{className:"section-title",children:"Press & Recognition"})]}),e.jsxs("div",{className:"press-grid",children:[e.jsxs("a",{href:"https://www.katc.com/news/local-lafayette-man-beat-the-odds-after-life-altering-incident",target:"_blank",rel:"noopener",className:"press-card glassmorphic reveal",children:[e.jsx("div",{className:"press-icon",children:"📺"}),e.jsx("h4",{className:"press-title",children:"KATC News"}),e.jsx("p",{className:"press-excerpt",children:'"Lafayette Man Beats the Odds After Life-Altering Incident"'}),e.jsx("span",{className:"press-date",children:"August 14, 2023"}),e.jsxs("div",{className:"press-cta-link",children:[e.jsx("span",{children:"Read Article"}),e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:e.jsx("path",{d:"M5 2L10 7L5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})]})]}),e.jsxs("a",{href:"https://www.motioncomposites.com/en_us/community/blog/motion-composites/wishes-for-wheels-winner-sam-primeaux",target:"_blank",rel:"noopener",className:"press-card glassmorphic reveal",children:[e.jsx("div",{className:"press-icon",children:"♿"}),e.jsx("h4",{className:"press-title",children:"Motion Composites"}),e.jsx("p",{className:"press-excerpt",children:'"Wishes for Wheels Winner – Sam Primeaux" | Full interview on receiving APEX C Carbon wheelchair'}),e.jsx("span",{className:"press-date",children:"May 9, 2025"}),e.jsxs("div",{className:"press-cta-link",children:[e.jsx("span",{children:"Read Interview"}),e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:e.jsx("path",{d:"M5 2L10 7L5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})]})]})]})]})}),e.jsx("section",{className:"mission-section",children:e.jsx("div",{className:"content-container",children:e.jsx("div",{className:"mission-content reveal",children:e.jsxs("div",{className:"mission-text",children:[e.jsx("span",{className:"section-kicker",children:"The Mission"}),e.jsx("h2",{className:"section-title",children:"Helping Others Rise"}),e.jsx("p",{className:"mission-description",children:`Sam's journey isn't just about personal recovery—it's about creating pathways for others. Through Inner Animal, speaking engagements, and digital platforms, Sam is building resources and inspiration for anyone facing their own "impossible."`}),e.jsxs("div",{className:"mission-goals",children:[e.jsxs("div",{className:"goal-item",children:[e.jsx("div",{className:"goal-icon",children:"🎯"}),e.jsxs("div",{className:"goal-text",children:[e.jsx("strong",{children:"Full Recovery"}),e.jsx("p",{children:"Continue stem cell treatments and intensive training to achieve complete recovery"})]})]}),e.jsxs("div",{className:"goal-item",children:[e.jsx("div",{className:"goal-icon",children:"🌍"}),e.jsxs("div",{className:"goal-text",children:[e.jsx("strong",{children:"Inspire Globally"}),e.jsx("p",{children:"Help other SCI survivors know where to start and what's possible"})]})]})]})]})})})}),e.jsx("section",{className:"cta-section",children:e.jsx("div",{className:"content-container",children:e.jsxs("div",{className:"cta-content reveal",children:[e.jsx("h2",{className:"cta-title",children:"Ready to Witness the Impossible?"}),e.jsx("p",{className:"cta-text",children:"Follow Sam's journey, book him for speaking engagements, or start a project that creates real impact."}),e.jsxs("div",{className:"cta-buttons",children:[e.jsxs("button",{onClick:()=>{var t;return(t=window.openProjectInquiryModal)==null?void 0:t.call(window)},className:"btn btn-primary",children:[e.jsx("span",{children:"Start a Project"}),e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:e.jsx("path",{d:"M7 3L14 10L7 17",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]}),e.jsx("button",{onClick:()=>{var t;return(t=window.openSpeakingModal)==null?void 0:t.call(window)},className:"btn btn-secondary",children:"Book Speaking Engagement"})]}),e.jsxs("div",{className:"social-links",children:[e.jsx("a",{href:"#",className:"social-link","aria-label":"Instagram",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})}),e.jsx("a",{href:"#",className:"social-link","aria-label":"YouTube",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})})})]})]})})}),e.jsxs("div",{id:"goodfightModal",className:"sponsor-modal",children:[e.jsx("div",{className:"modal-backdrop",onClick:()=>{var t;return(t=window.closeSponsorModal)==null?void 0:t.call(window,"goodfight")}}),e.jsxs("div",{className:"modal-content glassmorphic-modal",children:[e.jsx("button",{className:"modal-close",onClick:()=>{var t;return(t=window.closeSponsorModal)==null?void 0:t.call(window,"goodfight")},"aria-label":"Close modal",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}),e.jsxs("div",{className:"modal-header",children:[e.jsx("div",{className:"modal-icon",children:"🥊"}),e.jsx("h3",{className:"modal-title",children:"Good Fight Foundation"}),e.jsx("p",{className:"modal-subtitle",children:"Sponsored by UFC Fighter Dustin Poirier"})]}),e.jsxs("div",{className:"modal-body",children:[e.jsx("p",{children:"After funding the first two rounds of stem cell treatments through community support and his Inner Animal brand, Sam received an incredible gift from Dustin Poirier's Good Fight Foundation—full sponsorship of his third stem cell treatment."}),e.jsx("p",{children:"The results were nothing short of extraordinary. Within the first week post-treatment, Sam achieved breakthroughs that shocked even his medical team."})]})]})]}),e.jsxs("div",{id:"projectInquiryModal",className:"inquiry-modal",children:[e.jsx("div",{className:"inquiry-modal-backdrop",onClick:()=>{var t;return(t=window.closeProjectInquiryModal)==null?void 0:t.call(window)}}),e.jsxs("div",{className:"inquiry-modal-content glassmorphic-modal",children:[e.jsx("button",{className:"inquiry-modal-close",onClick:()=>{var t;return(t=window.closeProjectInquiryModal)==null?void 0:t.call(window)},"aria-label":"Close modal",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}),e.jsxs("div",{className:"inquiry-modal-header",children:[e.jsx("div",{className:"inquiry-badge",children:"Let's Build"}),e.jsx("h3",{className:"inquiry-modal-title",children:"Start Your Project"}),e.jsx("p",{className:"inquiry-modal-subtitle",children:"Transform your vision into reality with proven strategies and authentic storytelling"})]}),e.jsxs("form",{id:"projectInquiryForm",className:"inquiry-form",children:[e.jsxs("div",{className:"inquiry-form-row",children:[e.jsxs("div",{className:"inquiry-form-group",children:[e.jsxs("label",{className:"inquiry-label",htmlFor:"projectName",children:["Name ",e.jsx("span",{className:"inquiry-required",children:"*"})]}),e.jsx("input",{type:"text",id:"projectName",name:"name",className:"inquiry-input",required:!0,placeholder:"Your name"})]}),e.jsxs("div",{className:"inquiry-form-group",children:[e.jsxs("label",{className:"inquiry-label",htmlFor:"projectEmail",children:["Email ",e.jsx("span",{className:"inquiry-required",children:"*"})]}),e.jsx("input",{type:"email",id:"projectEmail",name:"email",className:"inquiry-input",required:!0,placeholder:"your@email.com"})]})]}),e.jsxs("div",{className:"inquiry-form-group",children:[e.jsxs("label",{className:"inquiry-label",htmlFor:"projectService",children:["Service Type ",e.jsx("span",{className:"inquiry-required",children:"*"})]}),e.jsxs("select",{id:"projectService",name:"service",className:"inquiry-select",required:!0,children:[e.jsx("option",{value:"",children:"Select a service..."}),e.jsx("option",{value:"website-dev",children:"Website Development"}),e.jsx("option",{value:"content-creation",children:"Content Creation & Strategy"}),e.jsx("option",{value:"custom",children:"Custom Project"})]})]}),e.jsxs("div",{className:"inquiry-form-group",children:[e.jsxs("label",{className:"inquiry-label",htmlFor:"projectMessage",children:["Project Details ",e.jsx("span",{className:"inquiry-required",children:"*"})]}),e.jsx("textarea",{id:"projectMessage",name:"message",className:"inquiry-textarea",required:!0,placeholder:"Describe your project vision, goals, timeline, and any specific requirements..."})]}),e.jsx("button",{type:"submit",className:"inquiry-submit",children:"Send Inquiry"}),e.jsxs("div",{className:"inquiry-success",id:"projectSuccess",children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M20 6L9 17L4 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),e.jsx("strong",{children:"Message sent!"})," I'll respond within 24 hours."]})]})]})]}),e.jsxs("div",{id:"speakingModal",className:"inquiry-modal",children:[e.jsx("div",{className:"inquiry-modal-backdrop",onClick:()=>{var t;return(t=window.closeSpeakingModal)==null?void 0:t.call(window)}}),e.jsxs("div",{className:"inquiry-modal-content glassmorphic-modal",children:[e.jsx("button",{className:"inquiry-modal-close",onClick:()=>{var t;return(t=window.closeSpeakingModal)==null?void 0:t.call(window)},"aria-label":"Close modal",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}),e.jsxs("div",{className:"inquiry-modal-header",children:[e.jsx("div",{className:"inquiry-badge",children:"Speaking"}),e.jsx("h3",{className:"inquiry-modal-title",children:"Book Sam to Speak"}),e.jsx("p",{className:"inquiry-modal-subtitle",children:"Inspire your audience with a story of resilience, determination, and redefining impossible"})]}),e.jsxs("form",{id:"speakingForm",className:"inquiry-form",children:[e.jsxs("div",{className:"inquiry-form-row",children:[e.jsxs("div",{className:"inquiry-form-group",children:[e.jsxs("label",{className:"inquiry-label",htmlFor:"speakingName",children:["Name ",e.jsx("span",{className:"inquiry-required",children:"*"})]}),e.jsx("input",{type:"text",id:"speakingName",name:"name",className:"inquiry-input",required:!0,placeholder:"Your name"})]}),e.jsxs("div",{className:"inquiry-form-group",children:[e.jsxs("label",{className:"inquiry-label",htmlFor:"speakingEmail",children:["Email ",e.jsx("span",{className:"inquiry-required",children:"*"})]}),e.jsx("input",{type:"email",id:"speakingEmail",name:"email",className:"inquiry-input",required:!0,placeholder:"your@email.com"})]})]}),e.jsxs("div",{className:"inquiry-form-group",children:[e.jsxs("label",{className:"inquiry-label",htmlFor:"speakingMessage",children:["Event Details ",e.jsx("span",{className:"inquiry-required",children:"*"})]}),e.jsx("textarea",{id:"speakingMessage",name:"message",className:"inquiry-textarea",required:!0,placeholder:"Tell me about your event..."})]}),e.jsx("button",{type:"submit",className:"inquiry-submit",children:"Send Speaking Request"}),e.jsxs("div",{className:"inquiry-success",id:"speakingSuccess",children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M20 6L9 17L4 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),e.jsx("strong",{children:"Request sent!"})," I'll respond within 24 hours."]})]})]})]})]})}function ka(){const[t,i]=a.useState("colors"),[s,g]=a.useState([]),[n,x]=a.useState(!1),[r,N]=a.useState(null),[m,v]=a.useState(null);a.useEffect(()=>{b()},[]);const b=async()=>{x(!0);try{const f=await ze({bucket:"meauxstack-components",prefix:"brand-components/",limit:100});f.success&&f.data&&g(f.data)}catch(f){console.error("Error loading brand components:",f)}finally{x(!1)}},k=async f=>{N(f);try{const S=await Ve("meauxstack-components",f.key);S.success&&S.data?v(S.data.url):v(`https://pub-9620c51e7d0540779d7f42106fee9743.r2.dev/meauxstack-components/${f.key}`)}catch(S){console.error("Error getting preview URL:",S),v(`https://pub-9620c51e7d0540779d7f42106fee9743.r2.dev/meauxstack-components/${f.key}`)}};return e.jsxs(e.Fragment,{children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
                .mbx-brand-library {
                    --teal: #339999;
                    --teal-mid: #2C8B8B;
                    --teal-dark: #237373;
                    --orange: #FF6B35;
                    --orange-dark: #E85D00;
                    --ink: #0C2D31;
                    --body: #1a2d31;
                    --muted: #2b3d41;
                    --white: #FFFFFF;
                    --glass: rgba(255,255,255,.96);
                    --border: rgba(51,153,153,.15);
                    --shadow: 0 4px 20px rgba(12,45,49,.08);
                    --radius: 16px;
                    --transition: all .3s cubic-bezier(.4,0,.2,1);
                    font-family: 'Inter', system-ui, sans-serif;
                    min-height: 100vh;
                    background: linear-gradient(180deg, #ffffff 0%, #f9fcfc 20%, #f0f8f8 40%, #e6f4f4 60%, #daf1f1 80%, #c5e8e9 100%);
                    padding: clamp(100px, 12vw, 140px) clamp(20px, 5vw, 60px) clamp(80px, 10vw, 120px);
                    color: var(--ink);
                }

                .mbx-brand-hero {
                    max-width: 1440px;
                    margin: 0 auto clamp(60px, 8vw, 100px);
                    text-align: center;
                }

                .mbx-brand-hero h1 {
                    font-size: clamp(3rem, 6vw, 5.5rem);
                    font-weight: 900;
                    letter-spacing: -0.03em;
                    line-height: 1.1;
                    margin: 0 0 24px;
                    background: linear-gradient(135deg, var(--teal) 0%, var(--orange) 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .mbx-brand-hero p {
                    font-size: clamp(1.1rem, 2vw, 1.4rem);
                    line-height: 1.7;
                    color: var(--body);
                    max-width: 800px;
                    margin: 0 auto;
                }

                .mbx-brand-nav {
                    max-width: 1440px;
                    margin: 0 auto clamp(40px, 6vw, 60px);
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                    justify-content: center;
                    padding: 0 clamp(20px, 5vw, 60px);
                }

                .mbx-brand-nav-btn {
                    padding: 12px 24px;
                    background: var(--glass);
                    border: 2px solid var(--border);
                    border-radius: 12px;
                    color: var(--body);
                    font-weight: 600;
                    font-size: 15px;
                    cursor: pointer;
                    transition: var(--transition);
                    backdrop-filter: blur(10px);
                }

                .mbx-brand-nav-btn:hover {
                    border-color: var(--teal);
                    color: var(--teal);
                    transform: translateY(-2px);
                    box-shadow: var(--shadow);
                }

                .mbx-brand-nav-btn.active {
                    background: linear-gradient(135deg, var(--teal) 0%, var(--teal-mid) 100%);
                    border-color: var(--teal);
                    color: var(--white);
                    box-shadow: 0 4px 16px rgba(51,153,153,.3);
                }

                .mbx-brand-section {
                    max-width: 1440px;
                    margin: 0 auto;
                    background: var(--glass);
                    border: 2px solid var(--border);
                    border-radius: var(--radius);
                    padding: clamp(40px, 6vw, 60px);
                    backdrop-filter: blur(20px);
                    box-shadow: var(--shadow);
                    margin-bottom: clamp(40px, 6vw, 60px);
                }

                .mbx-brand-section h2 {
                    font-size: clamp(2rem, 4vw, 3rem);
                    font-weight: 800;
                    letter-spacing: -0.02em;
                    margin: 0 0 32px;
                    color: var(--ink);
                }

                .mbx-color-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 24px;
                    margin: 32px 0;
                }

                .mbx-color-card {
                    background: var(--white);
                    border: 2px solid var(--border);
                    border-radius: 12px;
                    padding: 24px;
                    text-align: center;
                    transition: var(--transition);
                }

                .mbx-color-card:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow);
                    border-color: var(--teal);
                }

                .mbx-color-swatch {
                    width: 100%;
                    height: 120px;
                    border-radius: 8px;
                    margin-bottom: 16px;
                    box-shadow: 0 2px 8px rgba(0,0,0,.1);
                }

                .mbx-color-name {
                    font-weight: 700;
                    font-size: 18px;
                    margin-bottom: 8px;
                    color: var(--ink);
                }

                .mbx-color-hex {
                    font-family: 'Monaco', 'Courier New', monospace;
                    font-size: 14px;
                    color: var(--muted);
                    background: #f5f5f5;
                    padding: 4px 8px;
                    border-radius: 4px;
                    display: inline-block;
                }

                .mbx-typography-sample {
                    margin: 32px 0;
                    padding: 24px;
                    background: var(--white);
                    border-radius: 12px;
                    border: 1px solid var(--border);
                }

                .mbx-typography-sample h1,
                .mbx-typography-sample h2,
                .mbx-typography-sample h3,
                .mbx-typography-sample p {
                    margin: 0 0 16px;
                }

                .mbx-typography-sample h1 {
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 900;
                    letter-spacing: -0.03em;
                    line-height: 1.1;
                    color: var(--ink);
                }

                .mbx-typography-sample h2 {
                    font-size: clamp(2rem, 4vw, 3rem);
                    font-weight: 800;
                    letter-spacing: -0.02em;
                    line-height: 1.2;
                    color: var(--ink);
                }

                .mbx-typography-sample h3 {
                    font-size: clamp(1.5rem, 3vw, 2rem);
                    font-weight: 700;
                    letter-spacing: -0.01em;
                    line-height: 1.3;
                    color: var(--ink);
                }

                .mbx-typography-sample p {
                    font-size: clamp(1rem, 1.8vw, 1.2rem);
                    line-height: 1.7;
                    color: var(--body);
                    font-weight: 400;
                }

                .mbx-button-showcase {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 16px;
                    margin: 32px 0;
                }

                .mbx-btn-sample {
                    padding: 14px 28px;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 15px;
                    cursor: pointer;
                    transition: var(--transition);
                    border: none;
                    letter-spacing: 0.4px;
                }

                .mbx-btn-primary {
                    background: var(--orange);
                    color: var(--white);
                    box-shadow: 0 4px 16px rgba(255,107,53,.3);
                }

                .mbx-btn-primary:hover {
                    background: var(--orange-dark);
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(255,107,53,.4);
                }

                .mbx-btn-secondary {
                    background: var(--teal);
                    color: var(--white);
                    box-shadow: 0 4px 16px rgba(51,153,153,.3);
                }

                .mbx-btn-secondary:hover {
                    background: var(--teal-mid);
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(51,153,153,.4);
                }

                .mbx-btn-outline {
                    background: transparent;
                    color: var(--teal);
                    border: 2px solid var(--teal);
                }

                .mbx-btn-outline:hover {
                    background: var(--teal);
                    color: var(--white);
                }

                .mbx-component-carousel {
                    margin: 32px 0;
                    position: relative;
                }

                .mbx-carousel-container {
                    display: flex;
                    gap: 20px;
                    overflow-x: auto;
                    padding: 20px 0;
                    scroll-behavior: smooth;
                    scrollbar-width: thin;
                    scrollbar-color: var(--teal) transparent;
                }

                .mbx-carousel-container::-webkit-scrollbar {
                    height: 8px;
                }

                .mbx-carousel-container::-webkit-scrollbar-track {
                    background: transparent;
                }

                .mbx-carousel-container::-webkit-scrollbar-thumb {
                    background: var(--teal);
                    border-radius: 4px;
                }

                .mbx-component-card {
                    min-width: 280px;
                    max-width: 280px;
                    background: var(--white);
                    border: 2px solid var(--border);
                    border-radius: 12px;
                    padding: 20px;
                    cursor: pointer;
                    transition: var(--transition);
                }

                .mbx-component-card:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow);
                    border-color: var(--teal);
                }

                .mbx-component-preview {
                    width: 100%;
                    height: 180px;
                    background: #f5f5f5;
                    border-radius: 8px;
                    margin-bottom: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }

                .mbx-component-preview img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .mbx-component-name {
                    font-weight: 700;
                    font-size: 16px;
                    color: var(--ink);
                    margin-bottom: 8px;
                }

                .mbx-component-desc {
                    font-size: 14px;
                    color: var(--muted);
                    line-height: 1.5;
                }

                .mbx-preview-modal {
                    position: fixed;
                    inset: 0;
                    background: rgba(0,0,0,.85);
                    backdrop-filter: blur(10px);
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 40px;
                    opacity: 0;
                    visibility: hidden;
                    transition: var(--transition);
                }

                .mbx-preview-modal.active {
                    opacity: 1;
                    visibility: visible;
                }

                .mbx-preview-content {
                    max-width: 90vw;
                    max-height: 90vh;
                    background: var(--white);
                    border-radius: var(--radius);
                    padding: 40px;
                    overflow: auto;
                    position: relative;
                    transform: scale(0.9);
                    transition: var(--transition);
                }

                .mbx-preview-modal.active .mbx-preview-content {
                    transform: scale(1);
                }

                .mbx-preview-close {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: var(--teal);
                    color: var(--white);
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    transition: var(--transition);
                }

                .mbx-preview-close:hover {
                    background: var(--teal-dark);
                    transform: rotate(90deg);
                }

                .mbx-preview-iframe {
                    width: 100%;
                    min-height: 600px;
                    border: 2px solid var(--border);
                    border-radius: 8px;
                }

                @media (max-width: 768px) {
                    .mbx-brand-nav {
                        justify-content: flex-start;
                        overflow-x: auto;
                        padding-bottom: 10px;
                    }

                    .mbx-color-grid {
                        grid-template-columns: 1fr;
                    }

                    .mbx-component-card {
                        min-width: 240px;
                        max-width: 240px;
                    }

                    .mbx-preview-content {
                        padding: 20px;
                    }
                }
            `}}),e.jsxs("div",{className:"mbx-brand-library",children:[e.jsxs("div",{className:"mbx-brand-hero",children:[e.jsx("h1",{children:"Meauxbility Brand Library"}),e.jsx("p",{children:"Your centralized source of truth for the Meauxbility brand. Use this guide to maintain consistency across all communications, designs, and digital experiences."})]}),e.jsxs("div",{className:"mbx-brand-nav",children:[e.jsx("button",{className:`mbx-brand-nav-btn ${t==="colors"?"active":""}`,onClick:()=>i("colors"),children:"Colors"}),e.jsx("button",{className:`mbx-brand-nav-btn ${t==="typography"?"active":""}`,onClick:()=>i("typography"),children:"Typography"}),e.jsx("button",{className:`mbx-brand-nav-btn ${t==="buttons"?"active":""}`,onClick:()=>i("buttons"),children:"Buttons"}),e.jsx("button",{className:`mbx-brand-nav-btn ${t==="components"?"active":""}`,onClick:()=>i("components"),children:"Components"}),e.jsx("button",{className:`mbx-brand-nav-btn ${t==="guidelines"?"active":""}`,onClick:()=>i("guidelines"),children:"Guidelines"})]}),t==="colors"&&e.jsxs("div",{className:"mbx-brand-section",children:[e.jsx("h2",{children:"Brand Colors"}),e.jsx("p",{style:{fontSize:"18px",lineHeight:"1.7",color:"var(--body)",marginBottom:"32px"},children:"Our color palette reflects our mission: teal for accessibility and trust, orange for energy and action. Use these colors consistently across all brand touchpoints."}),e.jsxs("div",{className:"mbx-color-grid",children:[e.jsxs("div",{className:"mbx-color-card",children:[e.jsx("div",{className:"mbx-color-swatch",style:{background:"#339999"}}),e.jsx("div",{className:"mbx-color-name",children:"Primary Teal"}),e.jsx("div",{className:"mbx-color-hex",children:"#339999"})]}),e.jsxs("div",{className:"mbx-color-card",children:[e.jsx("div",{className:"mbx-color-swatch",style:{background:"#2C8B8B"}}),e.jsx("div",{className:"mbx-color-name",children:"Teal Mid"}),e.jsx("div",{className:"mbx-color-hex",children:"#2C8B8B"})]}),e.jsxs("div",{className:"mbx-color-card",children:[e.jsx("div",{className:"mbx-color-swatch",style:{background:"#237373"}}),e.jsx("div",{className:"mbx-color-name",children:"Teal Dark"}),e.jsx("div",{className:"mbx-color-hex",children:"#237373"})]}),e.jsxs("div",{className:"mbx-color-card",children:[e.jsx("div",{className:"mbx-color-swatch",style:{background:"#FF6B35"}}),e.jsx("div",{className:"mbx-color-name",children:"Primary Orange"}),e.jsx("div",{className:"mbx-color-hex",children:"#FF6B35"})]}),e.jsxs("div",{className:"mbx-color-card",children:[e.jsx("div",{className:"mbx-color-swatch",style:{background:"#E85D00"}}),e.jsx("div",{className:"mbx-color-name",children:"Orange Dark"}),e.jsx("div",{className:"mbx-color-hex",children:"#E85D00"})]}),e.jsxs("div",{className:"mbx-color-card",children:[e.jsx("div",{className:"mbx-color-swatch",style:{background:"#0C2D31"}}),e.jsx("div",{className:"mbx-color-name",children:"Ink"}),e.jsx("div",{className:"mbx-color-hex",children:"#0C2D31"})]}),e.jsxs("div",{className:"mbx-color-card",children:[e.jsx("div",{className:"mbx-color-swatch",style:{background:"#1a2d31"}}),e.jsx("div",{className:"mbx-color-name",children:"Body Text"}),e.jsx("div",{className:"mbx-color-hex",children:"#1a2d31"})]}),e.jsxs("div",{className:"mbx-color-card",children:[e.jsx("div",{className:"mbx-color-swatch",style:{background:"#2b3d41"}}),e.jsx("div",{className:"mbx-color-name",children:"Muted"}),e.jsx("div",{className:"mbx-color-hex",children:"#2b3d41"})]})]})]}),t==="typography"&&e.jsxs("div",{className:"mbx-brand-section",children:[e.jsx("h2",{children:"Typography"}),e.jsx("p",{style:{fontSize:"18px",lineHeight:"1.7",color:"var(--body)",marginBottom:"32px"},children:"Inter is our primary typeface, chosen for its excellent readability and accessibility. Use these type scales consistently across all communications."}),e.jsxs("div",{className:"mbx-typography-sample",children:[e.jsx("h1",{children:"Heading 1 - Bold & Impactful"}),e.jsx("h2",{children:"Heading 2 - Section Titles"}),e.jsx("h3",{children:"Heading 3 - Subsection Headers"}),e.jsx("p",{children:"Body text should be clear and readable. Use a line-height of 1.7-1.8 for optimal readability. This ensures comfortable reading for all users, including those with visual impairments or reading difficulties."})]}),e.jsxs("div",{style:{marginTop:"32px",padding:"24px",background:"#f5f5f5",borderRadius:"12px"},children:[e.jsx("h3",{style:{marginTop:0},children:"Typography Guidelines"}),e.jsxs("ul",{style:{lineHeight:"1.8",color:"var(--body)"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Font Family:"})," 'Inter', system-ui, sans-serif"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Headings:"})," Font-weight 700-900, letter-spacing -0.02em to -0.03em"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Body:"})," Font-weight 400-500, line-height 1.7-1.8"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Sizes:"})," Use clamp() for responsive sizing"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Contrast:"})," WCAG AA minimum (4.5:1 for text)"]})]})]})]}),t==="buttons"&&e.jsxs("div",{className:"mbx-brand-section",children:[e.jsx("h2",{children:"Buttons & CTAs"}),e.jsx("p",{style:{fontSize:"18px",lineHeight:"1.7",color:"var(--body)",marginBottom:"32px"},children:"Our buttons use semi-glow effects and semi-rectangular shapes. No gradients—solid colors with hover effects for clarity and accessibility."}),e.jsxs("div",{className:"mbx-button-showcase",children:[e.jsx("button",{className:"mbx-btn-sample mbx-btn-primary",children:"Primary CTA"}),e.jsx("button",{className:"mbx-btn-sample mbx-btn-secondary",children:"Secondary CTA"}),e.jsx("button",{className:"mbx-btn-sample mbx-btn-outline",children:"Outline Button"})]}),e.jsxs("div",{style:{marginTop:"32px",padding:"24px",background:"#f5f5f5",borderRadius:"12px"},children:[e.jsx("h3",{style:{marginTop:0},children:"Button Guidelines"}),e.jsxs("ul",{style:{lineHeight:"1.8",color:"var(--body)"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Style:"})," Semi-glow, semi-rectangular"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Colors:"})," Teal or Orange only"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No Gradients:"})," Solid colors with hover effects"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Shadow:"})," Subtle glow effect (0 4px 16px rgba(color, .3))"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Hover:"})," Lift effect (translateY(-2px)) + enhanced glow"]})]})]})]}),t==="components"&&e.jsxs("div",{className:"mbx-brand-section",children:[e.jsx("h2",{children:"Brand Components"}),e.jsx("p",{style:{fontSize:"18px",lineHeight:"1.7",color:"var(--body)",marginBottom:"32px"},children:"Browse our library of reusable brand components. Click any component to preview it in full detail."}),n?e.jsx("div",{style:{textAlign:"center",padding:"60px",color:"var(--muted)"},children:"Loading components..."}):s.length===0?e.jsx("div",{style:{textAlign:"center",padding:"60px",color:"var(--muted)"},children:e.jsxs("p",{children:["No components found. Upload components to the ",e.jsx("code",{children:"meauxstack-components/brand-components/"})," bucket to see them here."]})}):e.jsx("div",{className:"mbx-component-carousel",children:e.jsx("div",{className:"mbx-carousel-container",children:s.map(f=>{var S;return e.jsxs("div",{className:"mbx-component-card",onClick:()=>k(f),children:[e.jsx("div",{className:"mbx-component-preview",children:f.key.endsWith(".png")||f.key.endsWith(".jpg")||f.key.endsWith(".webp")?e.jsx("img",{src:`https://pub-9620c51e7d0540779d7f42106fee9743.r2.dev/meauxstack-components/${f.key}`,alt:f.key}):e.jsx("div",{style:{color:"var(--muted)",fontSize:"48px"},children:"📦"})}),e.jsx("div",{className:"mbx-component-name",children:((S=f.key.split("/").pop())==null?void 0:S.replace(/\.(html|png|jpg|webp)$/,""))||f.key}),e.jsx("div",{className:"mbx-component-desc",children:f.size?`${(f.size/1024).toFixed(1)} KB`:"Component"})]},f.key)})})})]}),t==="guidelines"&&e.jsxs("div",{className:"mbx-brand-section",children:[e.jsx("h2",{children:"Brand Guidelines"}),e.jsxs("div",{style:{lineHeight:"1.8",color:"var(--body)"},children:[e.jsx("h3",{style:{marginTop:"0",marginBottom:"24px"},children:"Design Principles"}),e.jsxs("ul",{style:{marginBottom:"32px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Accessibility First:"})," All designs must meet WCAG AA standards"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Consistency:"})," Use brand colors and typography consistently"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Clarity:"})," Clear, readable text with proper contrast"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mobile-First:"})," All designs must be responsive"]})]}),e.jsx("h3",{style:{marginBottom:"24px"},children:"What to Avoid"}),e.jsxs("ul",{style:{marginBottom:"32px"},children:[e.jsx("li",{children:"❌ Orange gradient animations"}),e.jsx("li",{children:"❌ Multicolor gradient titles"}),e.jsx("li",{children:"❌ Scroll popup modals"}),e.jsx("li",{children:"❌ Non-brand colors"}),e.jsx("li",{children:"❌ Low contrast text"})]}),e.jsx("h3",{style:{marginBottom:"24px"},children:"What to Use"}),e.jsxs("ul",{style:{marginBottom:"32px"},children:[e.jsx("li",{children:"✅ Glassmorphic effects (preferred over glow cards)"}),e.jsx("li",{children:"✅ Scroll-controlled animations (not ambient floating)"}),e.jsx("li",{children:"✅ Semi-glow CTAs with solid colors"}),e.jsx("li",{children:"✅ Brand colors only (teal/orange)"}),e.jsx("li",{children:"✅ Title animations used sparingly"})]}),e.jsx("h3",{style:{marginBottom:"24px"},children:"Asset Organization"}),e.jsx("p",{style:{marginBottom:"16px"},children:"All brand assets should be organized in R2 buckets:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"meauxstack-components/brand-components/"})," - Reusable components"]}),e.jsxs("li",{children:[e.jsx("code",{children:"meauxbility-assets/"})," - General brand assets"]}),e.jsxs("li",{children:[e.jsx("code",{children:"meauxstack-components/app-icons/"})," - App icons"]})]})]})]}),r&&m&&e.jsx("div",{className:`mbx-preview-modal ${r?"active":""}`,onClick:()=>{N(null),v(null)},children:e.jsxs("div",{className:"mbx-preview-content",onClick:f=>f.stopPropagation(),children:[e.jsx("button",{className:"mbx-preview-close",onClick:()=>{N(null),v(null)},children:"×"}),e.jsx("h2",{style:{marginTop:0,marginBottom:"24px"},children:r.key.split("/").pop()}),m.endsWith(".html")?e.jsx("iframe",{src:m,className:"mbx-preview-iframe",title:"Component Preview",sandbox:"allow-scripts allow-same-origin"}):e.jsx("img",{src:m,alt:"Component Preview",style:{width:"100%",borderRadius:"8px"}})]})})]})]})}function Sa(){return e.jsxs(e.Fragment,{children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
                .nonprofit-page {
                    min-height: 100vh;
                    background: linear-gradient(180deg, #ffffff 0%, #f9fcfc 25%, #f0f8f8 45%, #e6f4f4 65%, #daf1f1 80%, #cfeced 92%, #c5e8e9 100%);
                    padding: 80px 20px;
                }
                .nonprofit-container {
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .nonprofit-hero {
                    text-align: center;
                    margin-bottom: 60px;
                }
                .nonprofit-hero h1 {
                    font-size: clamp(32px, 5vw, 48px);
                    font-weight: 900;
                    color: #0c2d31;
                    margin-bottom: 16px;
                }
                .nonprofit-hero p {
                    font-size: clamp(18px, 2vw, 22px);
                    color: #2b3d41;
                    max-width: 700px;
                    margin: 0 auto;
                }
                .info-section {
                    background: rgba(255,255,255,0.95);
                    border-radius: 20px;
                    padding: 40px;
                    box-shadow: 0 10px 40px rgba(12,45,49,0.15);
                    margin-bottom: 32px;
                }
                .info-section h2 {
                    font-size: 28px;
                    font-weight: 800;
                    color: #0c2d31;
                    margin-bottom: 20px;
                }
                .info-section p {
                    color: #2b3d41;
                    line-height: 1.8;
                    margin-bottom: 16px;
                }
                .info-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 24px;
                    margin-top: 24px;
                }
                .info-card {
                    background: #f9fcfc;
                    border: 2px solid #339999;
                    border-radius: 12px;
                    padding: 24px;
                }
                .info-card h3 {
                    font-size: 20px;
                    font-weight: 700;
                    color: #339999;
                    margin-bottom: 12px;
                }
                .info-card p {
                    color: #2b3d41;
                    line-height: 1.7;
                    margin: 0;
                }
                .highlight-box {
                    background: linear-gradient(135deg, rgba(51,153,153,0.1) 0%, rgba(255,107,53,0.1) 100%);
                    border: 2px solid #339999;
                    border-radius: 16px;
                    padding: 32px;
                    margin: 32px 0;
                }
                .highlight-box h3 {
                    font-size: 24px;
                    font-weight: 800;
                    color: #0c2d31;
                    margin-bottom: 16px;
                }
                .highlight-box p {
                    color: #2b3d41;
                    line-height: 1.8;
                    font-size: 18px;
                }
            `}}),e.jsx("div",{className:"nonprofit-page",children:e.jsxs("div",{className:"nonprofit-container",children:[e.jsxs("div",{className:"nonprofit-hero",children:[e.jsx("h1",{children:"501(c)(3) Non-Profit Information"}),e.jsx("p",{children:"Meauxbility is a registered 501(c)(3) tax-exempt organization dedicated to empowering individuals with spinal cord injuries and mobility challenges."})]}),e.jsxs("div",{className:"info-section",children:[e.jsx("h2",{children:"Tax-Exempt Status"}),e.jsx("p",{children:"Meauxbility is recognized by the Internal Revenue Service (IRS) as a tax-exempt organization under Section 501(c)(3) of the Internal Revenue Code. This means that donations made to Meauxbility are tax-deductible to the extent allowed by law."}),e.jsxs("div",{className:"info-grid",children:[e.jsxs("div",{className:"info-card",children:[e.jsx("h3",{children:"EIN Number"}),e.jsx("p",{children:"33-4214907"})]}),e.jsxs("div",{className:"info-card",children:[e.jsx("h3",{children:"Tax Status"}),e.jsx("p",{children:"501(c)(3) Public Charity"})]}),e.jsxs("div",{className:"info-card",children:[e.jsx("h3",{children:"Tax-Deductible"}),e.jsx("p",{children:"Yes - All donations are tax-deductible"})]})]})]}),e.jsxs("div",{className:"info-section",children:[e.jsx("h2",{children:"Our Mission"}),e.jsx("p",{children:"Meauxbility empowers those battling spinal cord injuries and mobility challenges by providing resources, community, and opportunities that restore independence and create a better quality of life."}),e.jsx("p",{children:"We believe that recovery shouldn't depend on wealth—everyone deserves more options, more access, and more life. Through funding, mentorship, and a practical recovery playbook, we help people with mobility challenges accelerate their progress toward freedom."})]}),e.jsxs("div",{className:"info-section",children:[e.jsx("h2",{children:"Financial Transparency"}),e.jsx("p",{children:"As a 501(c)(3) organization, Meauxbility is committed to financial transparency and accountability. We operate with the highest standards of integrity and stewardship of donor funds."}),e.jsxs("div",{className:"highlight-box",children:[e.jsx("h3",{children:"How Your Donations Are Used"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Program Services (85%):"})," Direct support for individuals, grants, equipment, and recovery programs."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Administrative (10%):"})," Essential operational costs, staff, and organizational management."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Fundraising (5%):"})," Outreach, awareness campaigns, and donor engagement activities."]})]})]}),e.jsxs("div",{className:"info-section",children:[e.jsx("h2",{children:"Donation Receipts"}),e.jsx("p",{children:"All donors receive an official tax receipt via email immediately after their donation is processed. This receipt includes:"}),e.jsxs("ul",{style:{color:"#2b3d41",lineHeight:"1.8",marginLeft:"24px"},children:[e.jsx("li",{children:"Donation amount"}),e.jsx("li",{children:"Date of donation"}),e.jsx("li",{children:"Meauxbility's EIN: 33-4214907"}),e.jsx("li",{children:"Tax-deductible status confirmation"})]}),e.jsx("p",{style:{marginTop:"20px"},children:"Please keep your receipt for tax purposes. Consult with a tax professional for specific advice on your tax situation."})]}),e.jsxs("div",{className:"info-section",children:[e.jsx("h2",{children:"Annual Reports & Filings"}),e.jsx("p",{children:"Meauxbility files annual returns (Form 990) with the IRS as required by law. These documents are publicly available and demonstrate our commitment to transparency and accountability."}),e.jsxs("p",{children:["For questions about our financials or to request copies of our annual reports, please contact us at ",e.jsx("a",{href:"mailto:info@meauxbility.org",style:{color:"#339999",fontWeight:600},children:"info@meauxbility.org"}),"."]})]}),e.jsxs("div",{className:"info-section",children:[e.jsx("h2",{children:"Contact Information"}),e.jsxs("div",{className:"info-grid",children:[e.jsxs("div",{className:"info-card",children:[e.jsx("h3",{children:"Email"}),e.jsx("p",{children:"info@meauxbility.org"})]}),e.jsxs("div",{className:"info-card",children:[e.jsx("h3",{children:"Website"}),e.jsx("p",{children:"www.meauxbility.org"})]}),e.jsxs("div",{className:"info-card",children:[e.jsx("h3",{children:"Legal Name"}),e.jsx("p",{children:"Meauxbility"})]})]})]}),e.jsxs("div",{style:{background:"rgba(255,255,255,0.95)",borderRadius:"20px",padding:"40px",boxShadow:"0 10px 40px rgba(12,45,49,0.15)",textAlign:"center",marginTop:"40px"},children:[e.jsx("h2",{style:{fontSize:"32px",fontWeight:800,color:"#0c2d31",marginBottom:"16px"},children:"Support Our Mission"}),e.jsx("p",{style:{fontSize:"18px",color:"#2b3d41",marginBottom:"24px",maxWidth:"600px",margin:"0 auto 24px"},children:"Your tax-deductible donation helps us provide resources, community, and opportunities for those with spinal cord injuries and mobility challenges."}),e.jsx("a",{href:"/pages/donate",style:{display:"inline-block",padding:"14px 32px",background:"linear-gradient(135deg, #FF6B35 0%, #E85D00 100%)",color:"#fff",borderRadius:"12px",fontWeight:700,textDecoration:"none",transition:"all 0.3s ease"},children:"Donate Now"})]})]})})]})}function Ca(){const[t,i]=a.useState({firstName:"",lastName:"",email:"",phone:"",address:"",city:"",state:"",zip:"",dateOfInjury:"",injuryType:"",fundingAmount:"",fundingPurpose:"",currentSituation:"",previousFunding:"",additionalInfo:""}),[s,g]=a.useState({}),[n,x]=a.useState(!1),[r,N]=a.useState(!1),m=async v=>{v.preventDefault();const b={};if(t.firstName.trim()||(b.firstName="Required"),t.lastName.trim()||(b.lastName="Required"),t.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)||(b.email="Valid email required"):b.email="Required",t.phone.trim()||(b.phone="Required"),t.fundingPurpose.trim()||(b.fundingPurpose="Required"),t.currentSituation.trim()||(b.currentSituation="Required"),g(b),!(Object.keys(b).length>0)){x(!0);try{const f=await(await fetch("/api/programs/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...t,applicationType:"funding",timestamp:new Date().toISOString()})})).json();f.success?(N(!0),i({firstName:"",lastName:"",email:"",phone:"",address:"",city:"",state:"",zip:"",dateOfInjury:"",injuryType:"",fundingAmount:"",fundingPurpose:"",currentSituation:"",previousFunding:"",additionalInfo:""})):alert(f.error||"Application submission failed. Please try again.")}catch(k){console.error("Application error:",k),alert("Application submission failed. Please try again.")}finally{x(!1)}}};return e.jsxs(e.Fragment,{children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
                .funding-page {
                    min-height: 100vh;
                    background: linear-gradient(180deg, #ffffff 0%, #f9fcfc 25%, #f0f8f8 45%, #e6f4f4 65%, #daf1f1 80%, #cfeced 92%, #c5e8e9 100%);
                    padding: 80px 20px;
                }
                .funding-container {
                    max-width: 900px;
                    margin: 0 auto;
                }
                .funding-hero {
                    text-align: center;
                    margin-bottom: 60px;
                }
                .funding-hero h1 {
                    font-size: clamp(32px, 5vw, 48px);
                    font-weight: 900;
                    color: #0c2d31;
                    margin-bottom: 16px;
                }
                .funding-hero p {
                    font-size: clamp(18px, 2vw, 22px);
                    color: #2b3d41;
                    max-width: 700px;
                    margin: 0 auto;
                }
                .funding-form {
                    background: rgba(255,255,255,0.95);
                    border-radius: 20px;
                    padding: 40px;
                    box-shadow: 0 10px 40px rgba(12,45,49,0.15);
                }
                .form-section {
                    margin-bottom: 32px;
                }
                .form-section h3 {
                    font-size: 24px;
                    font-weight: 800;
                    color: #0c2d31;
                    margin-bottom: 20px;
                    padding-bottom: 12px;
                    border-bottom: 2px solid #339999;
                }
                .form-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 20px;
                    margin-bottom: 20px;
                }
                .form-group {
                    margin-bottom: 20px;
                }
                .form-group label {
                    display: block;
                    color: #0c2d31;
                    margin-bottom: 8px;
                    font-weight: 600;
                    font-size: 14px;
                }
                .form-group input,
                .form-group select,
                .form-group textarea {
                    width: 100%;
                    padding: 14px;
                    border: 2px solid #339999;
                    border-radius: 10px;
                    font-size: 16px;
                    background: #fff;
                    color: #0c2d31;
                    font-family: inherit;
                }
                .form-group textarea {
                    min-height: 120px;
                    resize: vertical;
                }
                .form-group .error {
                    color: #EF4444;
                    font-size: 12px;
                    margin-top: 4px;
                }
                .submit-btn {
                    width: 100%;
                    padding: 18px;
                    background: linear-gradient(135deg, #FF6B35 0%, #E85D00 100%);
                    color: #fff;
                    border: none;
                    border-radius: 12px;
                    font-weight: 800;
                    font-size: 18px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin-top: 24px;
                }
                .submit-btn:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(255,107,53,0.4);
                }
                .submit-btn:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
                .success-message {
                    text-align: center;
                    padding: 40px;
                    background: linear-gradient(135deg, #10B981 0%, #059669 100%);
                    color: #fff;
                    border-radius: 20px;
                    margin-bottom: 24px;
                }
            `}}),e.jsx("div",{className:"funding-page",children:e.jsxs("div",{className:"funding-container",children:[e.jsxs("div",{className:"funding-hero",children:[e.jsx("h1",{children:"Apply for Funding"}),e.jsx("p",{children:"Apply for financial assistance to support your recovery journey. We provide grants for adaptive equipment, home modifications, medical expenses, and recovery support."})]}),r&&e.jsxs("div",{className:"success-message",children:[e.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"✅"}),e.jsx("div",{style:{fontWeight:800,fontSize:"24px",marginBottom:"0.5rem"},children:"Application Submitted!"}),e.jsx("div",{style:{fontSize:"16px"},children:"Thank you for your application. Our team will review it and contact you within 5-7 business days."})]}),e.jsxs("form",{className:"funding-form",onSubmit:m,children:[e.jsxs("div",{className:"form-section",children:[e.jsx("h3",{children:"Personal Information"}),e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"First Name *"}),e.jsx("input",{type:"text",required:!0,value:t.firstName,onChange:v=>i({...t,firstName:v.target.value})}),s.firstName&&e.jsx("div",{className:"error",children:s.firstName})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Last Name *"}),e.jsx("input",{type:"text",required:!0,value:t.lastName,onChange:v=>i({...t,lastName:v.target.value})}),s.lastName&&e.jsx("div",{className:"error",children:s.lastName})]})]}),e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Email Address *"}),e.jsx("input",{type:"email",required:!0,value:t.email,onChange:v=>i({...t,email:v.target.value})}),s.email&&e.jsx("div",{className:"error",children:s.email})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Phone Number *"}),e.jsx("input",{type:"tel",required:!0,value:t.phone,onChange:v=>i({...t,phone:v.target.value})}),s.phone&&e.jsx("div",{className:"error",children:s.phone})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Street Address"}),e.jsx("input",{type:"text",value:t.address,onChange:v=>i({...t,address:v.target.value})})]}),e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"City"}),e.jsx("input",{type:"text",value:t.city,onChange:v=>i({...t,city:v.target.value})})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"State"}),e.jsx("input",{type:"text",value:t.state,onChange:v=>i({...t,state:v.target.value})})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"ZIP Code"}),e.jsx("input",{type:"text",value:t.zip,onChange:v=>i({...t,zip:v.target.value})})]})]})]}),e.jsxs("div",{className:"form-section",children:[e.jsx("h3",{children:"Injury Information"}),e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Date of Injury"}),e.jsx("input",{type:"date",value:t.dateOfInjury,onChange:v=>i({...t,dateOfInjury:v.target.value})})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Type of Injury"}),e.jsxs("select",{value:t.injuryType,onChange:v=>i({...t,injuryType:v.target.value}),children:[e.jsx("option",{value:"",children:"Select..."}),e.jsx("option",{value:"spinal-cord",children:"Spinal Cord Injury"}),e.jsx("option",{value:"mobility",children:"Mobility Challenge"}),e.jsx("option",{value:"other",children:"Other"})]})]})]})]}),e.jsxs("div",{className:"form-section",children:[e.jsx("h3",{children:"Funding Request"}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Requested Funding Amount"}),e.jsx("input",{type:"number",min:"0",placeholder:"$0.00",value:t.fundingAmount,onChange:v=>i({...t,fundingAmount:v.target.value})})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Purpose of Funding *"}),e.jsx("textarea",{required:!0,placeholder:"Please describe what the funding will be used for (e.g., adaptive equipment, home modifications, medical expenses, etc.)",value:t.fundingPurpose,onChange:v=>i({...t,fundingPurpose:v.target.value})}),s.fundingPurpose&&e.jsx("div",{className:"error",children:s.fundingPurpose})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Current Situation *"}),e.jsx("textarea",{required:!0,placeholder:"Please describe your current situation and how this funding would help you",value:t.currentSituation,onChange:v=>i({...t,currentSituation:v.target.value})}),s.currentSituation&&e.jsx("div",{className:"error",children:s.currentSituation})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Previous Funding Sources"}),e.jsx("textarea",{placeholder:"Have you received funding from other sources? If so, please list them.",value:t.previousFunding,onChange:v=>i({...t,previousFunding:v.target.value})})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Additional Information"}),e.jsx("textarea",{placeholder:"Any additional information you'd like to share",value:t.additionalInfo,onChange:v=>i({...t,additionalInfo:v.target.value})})]})]}),e.jsx("button",{type:"submit",className:"submit-btn",disabled:n,children:n?"Submitting...":"Submit Application"})]})]})})]})}function Ea(){const[t,i]=a.useState([]),[s,g]=a.useState("meauxbility-assets"),[n,x]=a.useState(""),[r,N]=a.useState([]),[m,v]=a.useState(!1),[b,k]=a.useState("masonry"),[f,S]=a.useState("name"),[o,d]=a.useState(null),[c,h]=a.useState(null),[C,y]=a.useState(""),[E,U]=a.useState(1),[te]=a.useState(100);a.useEffect(()=>{T()},[]),a.useEffect(()=>{s&&j()},[s,n,f,E]);const T=async()=>{const _=await Ue();if(_.success&&_.data){const Z=_.data.map(W=>typeof W=="string"?W:W.name);i(Z);const oe=Z.filter(W=>W.includes("photo")||W.includes("image")||W.includes("asset")||W.includes("media"));oe.length>0&&g(oe[0])}},j=async()=>{var _;v(!0);try{const Z=await ze({bucket:s,prefix:n||void 0,limit:1e3});if(Z.success&&Z.data){let W=[...Z.data.filter(re=>{const G=re.key.toLowerCase();return G.endsWith(".jpg")||G.endsWith(".jpeg")||G.endsWith(".png")||G.endsWith(".webp")||G.endsWith(".gif")||G.endsWith(".svg")})];f==="name"?W.sort((re,G)=>re.key.localeCompare(G.key)):f==="date"&&((_=Z.data[0])!=null&&_.uploaded)?W.sort((re,G)=>{const $=new Date(re.uploaded||0).getTime();return new Date(G.uploaded||0).getTime()-$}):f==="size"&&W.sort((re,G)=>(G.size||0)-(re.size||0)),C&&(W=W.filter(re=>re.key.toLowerCase().includes(C.toLowerCase()))),N(W)}}catch(Z){console.error("Error loading photos:",Z)}finally{v(!1)}},F=async _=>{d(_);try{const Z=await Ve(s,_.key);if(Z.success&&Z.data)h(Z.data.url);else{const W={"meauxbility-assets":"https://pub-a6ccfa18f4024671a73b323662647ab2.r2.dev","meauxstack-components":"https://pub-9620c51e7d0540779d7f42106fee9743.r2.dev",meauxbilityorgfinal:"https://pub-b2c86021de114066bc2eefa2e0ee3250.r2.dev"}[s]||"https://pub-ede6590ac0d2fb7daf155b35653457b2.r2.dev";h(`${W}/${s}/${_.key}`)}}catch(Z){console.error("Error getting photo URL:",Z)}},B=_=>{if(_===0)return"0 B";const Z=1024,oe=["B","KB","MB","GB"],W=Math.floor(Math.log(_)/Math.log(Z));return Math.round(_/Math.pow(Z,W)*100)/100+" "+oe[W]},q=_=>`${{"meauxbility-assets":"https://pub-a6ccfa18f4024671a73b323662647ab2.r2.dev","meauxstack-components":"https://pub-9620c51e7d0540779d7f42106fee9743.r2.dev",meauxbilityorgfinal:"https://pub-b2c86021de114066bc2eefa2e0ee3250.r2.dev"}[s]||"https://pub-ede6590ac0d2fb7daf155b35653457b2.r2.dev"}/${s}/${_.key}`,ae=r.slice((E-1)*te,E*te),se=Math.ceil(r.length/te);return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Photo Gallery"}),e.jsx("p",{className:"text-gray-600",children:"Browse and manage your entire photo library"})]}),e.jsxs(M,{children:[e.jsxs("div",{className:"flex flex-col lg:flex-row gap-4 mb-6",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Bucket"}),e.jsx("select",{value:s,onChange:_=>{g(_.target.value),U(1)},className:"input",children:t.map(_=>e.jsx("option",{value:_,children:_},_))})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Path/Folder"}),e.jsx("input",{type:"text",value:n,onChange:_=>{x(_.target.value),U(1)},className:"input",placeholder:"photos/ or leave empty"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Search"}),e.jsx("input",{type:"text",value:C,onChange:_=>{y(_.target.value),U(1)},className:"input",placeholder:"Search by filename..."})]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>k("grid"),className:`px-4 py-2 rounded-lg font-semibold transition-all ${b==="grid"?"bg-teal-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"Grid"}),e.jsx("button",{onClick:()=>k("masonry"),className:`px-4 py-2 rounded-lg font-semibold transition-all ${b==="masonry"?"bg-teal-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"Masonry"}),e.jsx("button",{onClick:()=>k("list"),className:`px-4 py-2 rounded-lg font-semibold transition-all ${b==="list"?"bg-teal-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"List"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("label",{className:"text-sm font-semibold text-gray-700",children:"Sort by:"}),e.jsxs("select",{value:f,onChange:_=>S(_.target.value),className:"input",style:{width:"auto",minWidth:"120px"},children:[e.jsx("option",{value:"name",children:"Name"}),e.jsx("option",{value:"date",children:"Date"}),e.jsx("option",{value:"size",children:"Size"})]})]})]}),m?e.jsx("div",{className:"text-center py-12 text-gray-600",children:"Loading photos..."}):r.length===0?e.jsxs("div",{className:"text-center py-12 text-gray-600",children:[e.jsx("p",{children:"No photos found in this bucket."}),e.jsx("p",{className:"text-sm mt-2",children:"Try selecting a different bucket or path."})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-4 text-sm text-gray-600",children:["Showing ",ae.length," of ",r.length," photos"]}),b==="grid"&&e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4",children:ae.map(_=>e.jsx("div",{className:"relative aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1",onClick:()=>F(_),children:e.jsx("img",{src:q(_),alt:_.key.split("/").pop(),className:"w-full h-full object-cover",loading:"lazy"})},_.key))}),b==="masonry"&&e.jsx("div",{className:"columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4",children:ae.map(_=>e.jsx("div",{className:"mb-4 break-inside-avoid bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all",onClick:()=>F(_),children:e.jsx("img",{src:q(_),alt:_.key.split("/").pop(),className:"w-full h-auto",loading:"lazy"})},_.key))}),b==="list"&&e.jsx("div",{className:"space-y-2",children:ae.map(_=>e.jsxs("div",{className:"flex items-center gap-4 p-4 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:border-teal-500 hover:shadow-md transition-all",onClick:()=>F(_),children:[e.jsx("img",{src:q(_),alt:_.key,className:"w-24 h-24 object-cover rounded-lg flex-shrink-0"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"font-semibold text-gray-900 truncate",children:_.key.split("/").pop()}),e.jsxs("div",{className:"text-sm text-gray-600 mt-1",children:[_.size?B(_.size):"Unknown size",_.uploaded&&` • ${new Date(_.uploaded).toLocaleDateString()}`]}),e.jsx("div",{className:"text-xs text-gray-500 mt-1 font-mono truncate",children:_.key})]})]},_.key))}),se>1&&e.jsxs("div",{className:"flex justify-center gap-2 mt-8",children:[e.jsx("button",{onClick:()=>U(_=>Math.max(1,_-1)),disabled:E===1,className:"px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200",children:"Previous"}),e.jsxs("span",{className:"px-4 py-2 text-gray-700 font-semibold",children:["Page ",E," of ",se]}),e.jsx("button",{onClick:()=>U(_=>Math.min(se,_+1)),disabled:E===se,className:"px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200",children:"Next"})]})]})]}),o&&c&&e.jsx("div",{className:`fixed inset-0 bg-black bg-opacity-95 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all ${o?"opacity-100 visible":"opacity-0 invisible"}`,onClick:()=>{d(null),h(null)},children:e.jsxs("div",{className:"relative max-w-[90vw] max-h-[90vh] transform transition-transform",onClick:_=>_.stopPropagation(),children:[e.jsx("button",{className:"absolute -top-12 right-0 w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl hover:bg-orange-500 transition-all hover:rotate-90",onClick:()=>{d(null),h(null)},children:"×"}),e.jsx("img",{src:c,alt:o.key,className:"max-w-full max-h-[90vh] object-contain rounded-lg"}),e.jsxs("div",{className:"absolute -bottom-12 left-0 right-0 text-center text-white",children:[e.jsx("div",{className:"font-semibold",children:o.key.split("/").pop()}),o.size&&e.jsx("div",{className:"text-sm mt-1",children:B(o.size)})]})]})})]})}function Ta(){var je;const[t,i]=a.useState([]),[s,g]=a.useState([]),[n,x]=a.useState(!0),[r,N]=a.useState(null),[m,v]=a.useState("masonry"),[b,k]=a.useState("date-desc"),[f,S]=a.useState(""),[o,d]=a.useState(null),[c,h]=a.useState("large"),[C,y]=a.useState(1),[E,U]=a.useState(0),[te]=a.useState(50),[T,j]=a.useState(!1),[F,B]=a.useState(0),[q,ae]=a.useState({total:0,thisMonth:0,thisWeek:0,byType:{}}),[se,_]=a.useState(new Set),[Z,oe]=a.useState(!1),[W,re]=a.useState(!1),G=a.useCallback(async()=>{x(!0),N(null);try{const u=await ia(C,te);u.success&&u.data?(i(u.data.images),U(u.data.pagination.total_count),$(u.data.images)):N(u.error||"Failed to load images")}catch(u){N(u instanceof Error?u.message:"Unknown error")}finally{x(!1)}},[C,te]);a.useEffect(()=>{G()},[G]),a.useEffect(()=>{let u=[...t];if(f){const O=f.toLowerCase();u=u.filter(Y=>{var ue;return((ue=Y.filename)==null?void 0:ue.toLowerCase().includes(O))||Y.id.toLowerCase().includes(O)||Object.values(Y.meta||{}).some(de=>de==null?void 0:de.toLowerCase().includes(O))})}u.sort((O,Y)=>{switch(b){case"date-desc":return new Date(Y.uploaded).getTime()-new Date(O.uploaded).getTime();case"date-asc":return new Date(O.uploaded).getTime()-new Date(Y.uploaded).getTime();case"name-asc":return(O.filename||O.id).localeCompare(Y.filename||Y.id);case"name-desc":return(Y.filename||Y.id).localeCompare(O.filename||O.id);default:return 0}}),g(u)},[t,f,b]);const $=u=>{const O=new Date,Y=new Date(O.getTime()-7*24*60*60*1e3),ue=new Date(O.getTime()-30*24*60*60*1e3),de={};let Fe=0,Me=0;u.forEach(Ce=>{var pe,Te;const Ee=new Date(Ce.uploaded);Ee>=Y&&Fe++,Ee>=ue&&Me++;const be=((Te=(pe=Ce.filename)==null?void 0:pe.split(".").pop())==null?void 0:Te.toLowerCase())||"unknown";de[be]=(de[be]||0)+1}),ae({total:u.length,thisMonth:Me,thisWeek:Fe,byType:de})},Ne=async u=>{j(!0),B(0);const O=Array.from(u);let Y=0;for(const ue of O)try{const de={file:ue,metadata:{originalName:ue.name,uploadedBy:"dashboard",uploadedAt:new Date().toISOString()}};await Gt(de),Y++,B(Math.round(Y/O.length*100))}catch(de){console.error("Upload error:",de)}j(!1),oe(!1),G()},me=u=>{u.preventDefault(),u.stopPropagation(),u.type==="dragenter"||u.type==="dragover"?re(!0):u.type==="dragleave"&&re(!1)},ne=u=>{u.preventDefault(),u.stopPropagation(),re(!1),u.dataTransfer.files&&u.dataTransfer.files[0]&&Ne(u.dataTransfer.files)},Se=async u=>{if(confirm("Are you sure you want to delete this image?"))try{await rt(u),G(),d(null)}catch(O){console.error("Delete error:",O)}},le=async()=>{if(confirm(`Delete ${se.size} selected images?`)){for(const u of se)await rt(u);_(new Set),G()}},ve=(u,O)=>{O.stopPropagation();const Y=new Set(se);Y.has(u)?Y.delete(u):Y.add(u),_(Y)},ye=u=>{navigator.clipboard.writeText(u)},ce=u=>new Date(u).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),ge=Math.ceil(E/te);return e.jsxs("div",{className:"min-h-screen",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"text-3xl font-bold text-text mb-2 flex items-center gap-3",children:[e.jsx("span",{className:"text-4xl",children:"🖼️"}),"Image Library"]}),e.jsxs("p",{className:"text-text-secondary",children:["Cloudflare Images • ",E.toLocaleString()," images stored"]})]}),e.jsxs("button",{onClick:()=>oe(!0),className:"px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2",children:[e.jsx("span",{className:"text-xl",children:"⬆️"}),"Upload Images"]})]}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-6",children:[e.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 border border-slate-700",children:[e.jsx("div",{className:"text-3xl font-bold text-white",children:q.total.toLocaleString()}),e.jsx("div",{className:"text-slate-400 text-sm",children:"Total Images"})]}),e.jsxs("div",{className:"bg-gradient-to-br from-teal-800 to-teal-900 rounded-xl p-4 border border-teal-700",children:[e.jsx("div",{className:"text-3xl font-bold text-white",children:q.thisWeek}),e.jsx("div",{className:"text-teal-300 text-sm",children:"This Week"})]}),e.jsxs("div",{className:"bg-gradient-to-br from-cyan-800 to-cyan-900 rounded-xl p-4 border border-cyan-700",children:[e.jsx("div",{className:"text-3xl font-bold text-white",children:q.thisMonth}),e.jsx("div",{className:"text-cyan-300 text-sm",children:"This Month"})]}),e.jsxs("div",{className:"bg-gradient-to-br from-purple-800 to-purple-900 rounded-xl p-4 border border-purple-700",children:[e.jsx("div",{className:"text-3xl font-bold text-white",children:Object.keys(q.byType).length}),e.jsx("div",{className:"text-purple-300 text-sm",children:"File Types"})]})]})]}),e.jsxs(M,{className:"mb-6",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row gap-4",children:[e.jsx("div",{className:"flex-1",children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",placeholder:"Search images by name, ID, or metadata...",value:f,onChange:u=>S(u.target.value),className:"w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"}),e.jsx("span",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",children:"🔍"})]})}),e.jsx("div",{className:"w-full lg:w-48",children:e.jsxs("select",{value:b,onChange:u=>k(u.target.value),className:"w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-teal-500",children:[e.jsx("option",{value:"date-desc",children:"Newest First"}),e.jsx("option",{value:"date-asc",children:"Oldest First"}),e.jsx("option",{value:"name-asc",children:"Name A-Z"}),e.jsx("option",{value:"name-desc",children:"Name Z-A"})]})}),e.jsx("div",{className:"flex gap-2",children:["grid","masonry","list","details"].map(u=>e.jsxs("button",{onClick:()=>v(u),className:`px-4 py-3 rounded-xl font-semibold transition-all capitalize ${m===u?"bg-teal-600 text-white shadow-lg":"bg-slate-700 text-slate-300 hover:bg-slate-600"}`,children:[u==="grid"&&"⊞",u==="masonry"&&"⧈",u==="list"&&"☰",u==="details"&&"⊡"]},u))})]}),se.size>0&&e.jsxs("div",{className:"mt-4 flex items-center gap-4 p-4 bg-slate-700/50 rounded-xl",children:[e.jsxs("span",{className:"text-white font-semibold",children:[se.size," selected"]}),e.jsx("button",{onClick:le,className:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all",children:"🗑️ Delete Selected"}),e.jsx("button",{onClick:()=>_(new Set),className:"px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-500 transition-all",children:"Clear Selection"})]})]}),n&&e.jsxs("div",{className:"text-center py-12",children:[e.jsx("div",{className:"inline-block animate-spin text-4xl mb-4",children:"⟳"}),e.jsx("p",{className:"text-text-secondary",children:"Loading images..."})]}),r&&e.jsxs("div",{className:"bg-red-900/20 border border-red-500 rounded-xl p-6 text-center",children:[e.jsxs("p",{className:"text-red-400 mb-4",children:["❌ ",r]}),e.jsx("button",{onClick:G,className:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700",children:"Retry"})]}),!n&&!r&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-4 text-text-secondary",children:["Showing ",s.length," of ",E," images"]}),m==="grid"&&e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4",children:s.map(u=>e.jsxs("div",{className:`relative aspect-square bg-slate-800 rounded-xl overflow-hidden cursor-pointer group transition-all hover:shadow-2xl hover:-translate-y-1 ${se.has(u.id)?"ring-2 ring-teal-500":""}`,onClick:()=>d(u),children:[e.jsx("img",{src:Ae(u.id,"thumbnail"),alt:u.filename||u.id,className:"w-full h-full object-cover",loading:"lazy"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity",children:e.jsx("div",{className:"absolute bottom-2 left-2 right-2",children:e.jsx("div",{className:"text-white text-xs font-medium truncate",children:u.filename||u.id.slice(0,12)})})}),e.jsx("button",{onClick:O=>ve(u.id,O),className:`absolute top-2 left-2 w-6 h-6 rounded-md flex items-center justify-center transition-all ${se.has(u.id)?"bg-teal-500 text-white":"bg-black/50 text-white opacity-0 group-hover:opacity-100"}`,children:"✓"})]},u.id))}),m==="masonry"&&e.jsx("div",{className:"columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4",children:s.map(u=>e.jsxs("div",{className:`mb-4 break-inside-avoid bg-slate-800 rounded-xl overflow-hidden cursor-pointer group transition-all hover:shadow-2xl ${se.has(u.id)?"ring-2 ring-teal-500":""}`,onClick:()=>d(u),children:[e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:Ae(u.id,"small"),alt:u.filename||u.id,className:"w-full h-auto",loading:"lazy"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"}),e.jsx("button",{onClick:O=>ve(u.id,O),className:`absolute top-2 left-2 w-6 h-6 rounded-md flex items-center justify-center transition-all ${se.has(u.id)?"bg-teal-500 text-white":"bg-black/50 text-white opacity-0 group-hover:opacity-100"}`,children:"✓"})]}),e.jsxs("div",{className:"p-3",children:[e.jsx("div",{className:"text-white text-sm font-medium truncate",children:u.filename||u.id.slice(0,20)}),e.jsx("div",{className:"text-slate-400 text-xs mt-1",children:ce(u.uploaded)})]})]},u.id))}),m==="list"&&e.jsx("div",{className:"space-y-2",children:s.map(u=>{var O;return e.jsxs("div",{className:`flex items-center gap-4 p-4 bg-slate-800 rounded-xl cursor-pointer hover:bg-slate-700 transition-all ${se.has(u.id)?"ring-2 ring-teal-500":""}`,onClick:()=>d(u),children:[e.jsx("button",{onClick:Y=>ve(u.id,Y),className:`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${se.has(u.id)?"bg-teal-500 text-white":"bg-slate-600 text-slate-400"}`,children:"✓"}),e.jsx("img",{src:Ae(u.id,"thumbnail"),alt:u.filename||u.id,className:"w-16 h-16 object-cover rounded-lg flex-shrink-0",loading:"lazy"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"text-white font-semibold truncate",children:u.filename||u.id}),e.jsx("div",{className:"text-slate-400 text-sm mt-1",children:ce(u.uploaded)})]}),e.jsxs("div",{className:"text-right text-sm text-slate-400",children:[e.jsxs("div",{className:"font-mono text-xs",children:[u.id.slice(0,12),"..."]}),e.jsxs("div",{className:"mt-1",children:[((O=u.variants)==null?void 0:O.length)||0," variants"]})]})]},u.id)})}),m==="details"&&e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map(u=>{var O;return e.jsxs("div",{className:`bg-slate-800 rounded-xl overflow-hidden cursor-pointer group transition-all hover:shadow-2xl ${se.has(u.id)?"ring-2 ring-teal-500":""}`,onClick:()=>d(u),children:[e.jsxs("div",{className:"relative aspect-video",children:[e.jsx("img",{src:Ae(u.id,"medium"),alt:u.filename||u.id,className:"w-full h-full object-cover",loading:"lazy"}),e.jsx("button",{onClick:Y=>ve(u.id,Y),className:`absolute top-3 left-3 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${se.has(u.id)?"bg-teal-500 text-white":"bg-black/50 text-white opacity-0 group-hover:opacity-100"}`,children:"✓"})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("div",{className:"text-white font-semibold truncate mb-2",children:u.filename||u.id}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-slate-500",children:"Uploaded"}),e.jsx("div",{className:"text-slate-300",children:ce(u.uploaded)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-slate-500",children:"Variants"}),e.jsx("div",{className:"text-slate-300",children:((O=u.variants)==null?void 0:O.length)||0})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"text-slate-500",children:"ID"}),e.jsx("div",{className:"text-slate-300 font-mono text-xs truncate",children:u.id})]})]})]})]},u.id)})}),ge>1&&e.jsxs("div",{className:"flex justify-center gap-4 mt-8",children:[e.jsx("button",{onClick:()=>y(u=>Math.max(1,u-1)),disabled:C===1,className:"px-6 py-3 bg-slate-700 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-600 transition-all",children:"← Previous"}),e.jsxs("span",{className:"px-6 py-3 text-text font-semibold",children:["Page ",C," of ",ge]}),e.jsx("button",{onClick:()=>y(u=>Math.min(ge,u+1)),disabled:C===ge,className:"px-6 py-3 bg-slate-700 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-600 transition-all",children:"Next →"})]})]}),Z&&e.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",onClick:()=>!T&&oe(!1),children:e.jsxs("div",{className:`bg-slate-900 rounded-2xl p-8 max-w-lg w-full transition-all ${W?"ring-4 ring-teal-500":""}`,onClick:u=>u.stopPropagation(),onDragEnter:me,onDragLeave:me,onDragOver:me,onDrop:ne,children:[e.jsx("h2",{className:"text-2xl font-bold text-white mb-6",children:"Upload Images"}),T?e.jsxs("div",{className:"text-center py-8",children:[e.jsx("div",{className:"text-4xl mb-4",children:"⬆️"}),e.jsx("div",{className:"text-white font-semibold mb-4",children:"Uploading..."}),e.jsx("div",{className:"w-full bg-slate-700 rounded-full h-3",children:e.jsx("div",{className:"bg-gradient-to-r from-teal-500 to-cyan-500 h-3 rounded-full transition-all",style:{width:`${F}%`}})}),e.jsxs("div",{className:"text-slate-400 mt-2",children:[F,"%"]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`border-2 border-dashed rounded-xl p-12 text-center transition-all ${W?"border-teal-500 bg-teal-500/10":"border-slate-600 hover:border-teal-500"}`,children:[e.jsx("div",{className:"text-5xl mb-4",children:"📸"}),e.jsx("p",{className:"text-white font-semibold mb-2",children:"Drag & drop images here"}),e.jsx("p",{className:"text-slate-400 text-sm mb-4",children:"or click to select files"}),e.jsx("input",{type:"file",multiple:!0,accept:"image/*",onChange:u=>u.target.files&&Ne(u.target.files),className:"hidden",id:"file-upload"}),e.jsx("label",{htmlFor:"file-upload",className:"inline-block px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold cursor-pointer hover:bg-teal-700 transition-all",children:"Select Files"})]}),e.jsx("p",{className:"text-slate-500 text-sm text-center mt-4",children:"Supports: JPG, PNG, GIF, WEBP, SVG • Max 10MB per file"})]})]})}),o&&e.jsx("div",{className:"fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4",onClick:()=>d(null),children:e.jsxs("div",{className:"max-w-6xl w-full max-h-[90vh] flex flex-col lg:flex-row gap-6 bg-slate-900 rounded-2xl overflow-hidden",onClick:u=>u.stopPropagation(),children:[e.jsxs("div",{className:"flex-1 relative min-h-[300px] lg:min-h-0 bg-slate-800 flex items-center justify-center",children:[e.jsx("img",{src:Ae(o.id,c),alt:o.filename||o.id,className:"max-w-full max-h-[60vh] lg:max-h-[80vh] object-contain"}),e.jsx("button",{className:"absolute top-4 right-4 w-10 h-10 bg-slate-700 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xl transition-all",onClick:()=>d(null),children:"×"})]}),e.jsxs("div",{className:"w-full lg:w-80 p-6 overflow-y-auto",children:[e.jsx("h3",{className:"text-xl font-bold text-white mb-4 truncate",children:o.filename||"Untitled"}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{className:"text-slate-400 text-sm block mb-2",children:"View Size"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:Object.keys(Ke.variants).map(u=>e.jsx("button",{onClick:()=>h(u),className:`px-3 py-1.5 rounded-lg text-sm font-medium capitalize transition-all ${c===u?"bg-teal-600 text-white":"bg-slate-700 text-slate-300 hover:bg-slate-600"}`,children:u},u))})]}),e.jsxs("div",{className:"space-y-4 mb-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-slate-400 text-sm block mb-1",children:"Image ID"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("code",{className:"text-white text-sm font-mono bg-slate-800 px-3 py-2 rounded-lg flex-1 truncate",children:o.id}),e.jsx("button",{onClick:()=>ye(o.id),className:"px-3 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all",title:"Copy ID",children:"📋"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-slate-400 text-sm block mb-1",children:"Uploaded"}),e.jsx("div",{className:"text-white",children:ce(o.uploaded)})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-slate-400 text-sm block mb-1",children:"Delivery URL"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"text",readOnly:!0,value:Ae(o.id,c),className:"text-white text-sm font-mono bg-slate-800 px-3 py-2 rounded-lg flex-1 truncate"}),e.jsx("button",{onClick:()=>ye(Ae(o.id,c)),className:"px-3 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all",title:"Copy URL",children:"📋"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-slate-400 text-sm block mb-1",children:"Available Variants"}),e.jsx("div",{className:"text-white text-sm",children:((je=o.variants)==null?void 0:je.join(", "))||"Default"})]}),o.meta&&Object.keys(o.meta).length>0&&e.jsxs("div",{children:[e.jsx("label",{className:"text-slate-400 text-sm block mb-1",children:"Metadata"}),e.jsx("div",{className:"bg-slate-800 rounded-lg p-3 space-y-1",children:Object.entries(o.meta).map(([u,O])=>e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsxs("span",{className:"text-slate-400",children:[u,":"]}),e.jsx("span",{className:"text-white",children:O})]},u))})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("a",{href:Ae(o.id,"public"),target:"_blank",rel:"noopener noreferrer",className:"w-full px-4 py-3 bg-teal-600 text-white rounded-xl font-semibold text-center block hover:bg-teal-700 transition-all",children:"🔗 Open Original"}),e.jsx("button",{onClick:()=>Se(o.id),className:"w-full px-4 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all",children:"🗑️ Delete Image"})]})]})]})})]})}function _a(){const[t,i]=a.useState([]),[s,g]=a.useState(!1),[n,x]=a.useState([]),[r,N]=a.useState([]),[m,v]=a.useState(!1),[b]=a.useState([{id:"main-site",name:"Main Site (meauxbility.org)",type:"site",path:"/Users/samprimeaux/Downloads/meauxbility-react",status:"active",previewUrl:"https://www.meauxbility.org"},{id:"about-page",name:"About Page",type:"page",path:"/pages/about",status:"active",previewUrl:"https://www.meauxbility.org/about"},{id:"programs-page",name:"Programs Page",type:"page",path:"/pages/mobility-grants-programs",status:"active",previewUrl:"https://www.meauxbility.org/pages/mobility-grants-programs"},{id:"community-page",name:"Community Page",type:"page",path:"/pages/community",status:"active",previewUrl:"https://www.meauxbility.org/pages/community"},{id:"resources-page",name:"Resources Page",type:"page",path:"/pages/resources",status:"active",previewUrl:"https://www.meauxbility.org/pages/resources"},{id:"get-involved-page",name:"Get Involved Page",type:"page",path:"/pages/get-involved",status:"active",previewUrl:"https://www.meauxbility.org/pages/get-involved"},{id:"donate-page",name:"Donate Page",type:"page",path:"/pages/donate",status:"active",previewUrl:"https://www.meauxbility.org/pages/donate"},{id:"branding-page",name:"Branding Library",type:"page",path:"/pages/meauxbility-branding",status:"active",previewUrl:"https://www.meauxbility.org/pages/meauxbility-branding"}]);a.useEffect(()=>{k()},[]);const k=async()=>{v(!0);try{let d=await We();if(!d.success||!d.data){const h=await(await fetch("/api/cloudflare/workers")).json();h.success&&h.data&&(d={success:!0,data:h.data})}if(d.success&&d.data){const c=[...d.data].sort((h,C)=>{const y=h.modified_on||h.created_on||0;return(C.modified_on||C.created_on||0)-y}).slice(0,25);N(c)}}catch(d){console.error("Error loading workers:",d)}finally{v(!1)}},f=d=>{i(c=>c.includes(d)?c.filter(h=>h!==d):[...c,d])},S=async()=>{if(t.length===0){alert("Please select at least one project to deploy");return}g(!0),x([]);const d=c=>{x(h=>[...h,`${new Date().toLocaleTimeString()}: ${c}`])};try{if(d(`Starting deployment of ${t.length} project(s)...`),t.includes("main-site")){d("Deploying main site...");try{const C=await(await fetch("/api/deploy/main-site",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({project:"main-site",rebuild:!0})})).json();C.success?(d("✅ Main site deployed successfully"),d(`   URL: ${C.url||"https://www.meauxbility.org"}`)):d(`❌ Main site deployment failed: ${C.error||"Unknown error"}`)}catch(h){d(`❌ Deployment error: ${h instanceof Error?h.message:"Unknown error"}`)}}const c=t.filter(h=>h!=="main-site");for(const h of c){const C=b.find(y=>y.id===h);C&&(d(`Deploying ${C.name}...`),d(`✅ ${C.name} queued for deployment`))}d("🎉 Deployment complete!"),i([])}catch(c){d(`❌ Deployment error: ${c instanceof Error?c.message:"Unknown error"}`)}finally{g(!1)}},o=async d=>{g(!0),x([]);const c=h=>{x(C=>[...C,`${new Date().toLocaleTimeString()}: ${h}`])};try{const h=b.find(C=>C.id===d);if(!h)return;c(`Quick deploying ${h.name}...`),c(d==="main-site"?"✅ Main site deployment started":`✅ ${h.name} deployment queued`),c("🎉 Quick deployment complete!")}catch(h){c(`❌ Error: ${h instanceof Error?h.message:"Unknown error"}`)}finally{g(!1)}};return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Rapid Deployments"}),e.jsx("p",{className:"text-gray-600",children:"Deploy projects and pages with one click"})]}),e.jsxs(M,{title:"Main Site & Previews",className:"mb-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:[e.jsxs("div",{className:"p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg border-2 border-teal-200",children:[e.jsx("h3",{className:"font-bold text-teal-900 mb-2",children:"🌐 Production Site"}),e.jsx("p",{className:"text-sm text-gray-700 mb-3",children:"Live production environment"}),e.jsx("a",{href:"https://www.meauxbility.org",target:"_blank",rel:"noopener noreferrer",className:"text-teal-600 hover:text-teal-700 font-semibold text-sm",children:"View Live →"})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border-2 border-orange-200",children:[e.jsx("h3",{className:"font-bold text-orange-900 mb-2",children:"👁️ Preview Mode"}),e.jsx("p",{className:"text-sm text-gray-700 mb-3",children:"Preview changes before going live"}),e.jsx("a",{href:"https://www.meauxbility.org?preview=true",target:"_blank",rel:"noopener noreferrer",className:"text-orange-600 hover:text-orange-700 font-semibold text-sm",children:"Open Preview →"})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200",children:[e.jsx("h3",{className:"font-bold text-purple-900 mb-2",children:"🔧 .dev Projects"}),e.jsx("p",{className:"text-sm text-gray-700 mb-3",children:"Preview your worker builds"}),e.jsx("button",{onClick:()=>k(),className:"text-purple-600 hover:text-purple-700 font-semibold text-sm",children:"View Workers →"})]})]}),m?e.jsx("div",{className:"text-center py-4 text-gray-600",children:"Loading workers..."}):r.length>0?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"text-sm text-gray-600 mb-4",children:["Showing ",r.length," most recently deployed workers"]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",children:r.map(d=>{const c=d.url||(d.environment==="dev"?`https://${d.name}.dev.meauxbility.org`:`https://${d.name}.meauxbility.org`),h=d.modified_on?new Date(d.modified_on*1e3).toLocaleDateString():d.created_on?new Date(d.created_on*1e3).toLocaleDateString():d.created_at?new Date(d.created_at).toLocaleDateString():"Unknown";return e.jsxs("div",{className:"p-3 bg-white border-2 border-gray-200 rounded-lg hover:border-teal-400 cursor-pointer transition-all",onClick:()=>window.open(c,"_blank"),children:[e.jsx("div",{className:"text-2xl mb-2",children:d.environment==="dev"?"🔨":"🔧"}),e.jsx("div",{className:"font-semibold text-sm text-gray-900 truncate",children:d.name}),e.jsx("div",{className:"text-xs text-gray-500 mt-1 truncate",children:c.replace("https://","")}),e.jsx("div",{className:"text-xs text-gray-400 mt-1",children:h}),d.environment==="dev"&&e.jsx("div",{className:"text-xs text-teal-600 mt-1 font-semibold",children:".dev"})]},d.id)})})]}):e.jsx("div",{className:"text-center py-4 text-gray-600",children:"No workers found"})]}),e.jsxs(M,{title:"Deployment Projects",className:"mb-6",children:[e.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[e.jsx("div",{children:e.jsx("p",{className:"text-sm text-gray-600",children:"Select projects to deploy. Main site rebuilds everything, individual pages deploy specific routes."})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>i(b.map(d=>d.id)),className:"px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all",children:"Select All"}),e.jsx("button",{onClick:()=>i([]),className:"px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all",children:"Clear"})]})]}),e.jsx("div",{className:"space-y-2",children:b.map(d=>e.jsx("div",{className:`p-4 border-2 rounded-lg transition-all ${t.includes(d.id)?"border-teal-500 bg-teal-50":"border-gray-200 bg-white hover:border-gray-300"}`,children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3 flex-1",children:[e.jsx("input",{type:"checkbox",checked:t.includes(d.id),onChange:()=>f(d.id),className:"w-5 h-5 text-teal-600 rounded focus:ring-teal-500"}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h3",{className:"font-semibold text-gray-900",children:d.name}),e.jsx("span",{className:`px-2 py-0.5 text-xs font-semibold rounded ${d.type==="site"?"bg-blue-100 text-blue-700":d.type==="worker"?"bg-purple-100 text-purple-700":"bg-gray-100 text-gray-700"}`,children:d.type})]}),e.jsx("p",{className:"text-sm text-gray-600 mt-1",children:d.path}),d.previewUrl&&e.jsx("a",{href:d.previewUrl,target:"_blank",rel:"noopener noreferrer",className:"text-xs text-teal-600 hover:text-teal-700 mt-1 inline-block",children:"Preview →"})]})]}),e.jsx("button",{onClick:()=>o(d.id),disabled:s,className:"px-4 py-2 text-sm font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all",children:"Quick Deploy"})]})},d.id))}),e.jsx("div",{className:"mt-6 pt-6 border-t-2 border-gray-200",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"font-semibold text-gray-900",children:[t.length," project(s) selected"]}),e.jsx("p",{className:"text-sm text-gray-600 mt-1",children:t.includes("main-site")?"Main site deployment will rebuild everything":"Individual pages will be deployed"})]}),e.jsx("button",{onClick:S,disabled:s||t.length===0,className:"px-6 py-3 text-base font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg hover:from-teal-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl",children:s?"Deploying...":`🚀 Deploy ${t.length} Project(s)`})]})})]}),n.length>0&&e.jsx(M,{title:"Deployment Log",className:"mb-6",children:e.jsx("div",{className:"bg-gray-900 text-green-400 font-mono text-sm p-4 rounded-lg max-h-96 overflow-y-auto",children:n.map((d,c)=>e.jsx("div",{className:"mb-1",children:d},c))})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(M,{title:"💡 Deployment Tips",children:e.jsxs("ul",{className:"space-y-2 text-sm text-gray-700",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Main Site:"})," Rebuilds entire site, use for major updates"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Individual Pages:"})," Faster, use for single page updates"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Quick Deploy:"})," One-click deployment for single projects"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Preview:"})," Always preview before deploying to production"]})]})}),e.jsx(M,{title:"🔒 Security",children:e.jsxs("ul",{className:"space-y-2 text-sm text-gray-700",children:[e.jsx("li",{children:"• All deployments require authentication"}),e.jsx("li",{children:"• Deployment logs are tracked"}),e.jsx("li",{children:"• Zero Trust protects dashboard access"}),e.jsx("li",{children:"• OAuth provides additional user authentication"})]})})]})]})}const Ge="",ct={html:"📄",worker:"🔧",content:"📷",client:"👤",system:"⚙️"},za={low:"#6B7280",medium:"#F59E0B",high:"#EF4444",urgent:"#DC2626"};function Fa(){const[t,i]=a.useState(null),[s,g]=a.useState(!0),[n,x]=a.useState(null),[r,N]=a.useState(!1),[m,v]=a.useState("backlog"),[b,k]=a.useState({title:"",description:"",category:"html",priority:"medium",assignee_id:"sam",client_name:"",project_url:""});a.useEffect(()=>{f()},[]);const f=async()=>{g(!0);try{const E=await(await fetch(`${Ge}/api/kanban/board?board_id=main`)).json();E.success&&i(E.data)}catch(y){console.error("Error loading board:",y)}g(!1)},S=y=>{x(y)},o=y=>{y.preventDefault()},d=async y=>{if(!n||n.column_id===y){x(null);return}try{await fetch(`${Ge}/api/kanban/tasks/move`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({task_id:n.id,column_id:y,position:0})}),await f()}catch(E){console.error("Error moving task:",E)}x(null)},c=async()=>{if(b.title.trim())try{await fetch(`${Ge}/api/kanban/tasks`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...b,column_id:m,board_id:"main"})}),N(!1),k({title:"",description:"",category:"html",priority:"medium",assignee_id:"sam",client_name:"",project_url:""}),await f()}catch(y){console.error("Error creating task:",y)}},h=async y=>{if(confirm("Delete this task?"))try{await fetch(`${Ge}/api/kanban/tasks?id=${y}`,{method:"DELETE"}),await f()}catch(E){console.error("Error deleting task:",E)}},C=y=>{v(y),N(!0)};return s?e.jsx("div",{className:"flex items-center justify-center h-96",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"}),e.jsx("p",{style:{color:"var(--text-secondary)"},children:"Loading Kanban board..."})]})}):e.jsxs("div",{className:"h-full",children:[e.jsxs("div",{className:"mb-6 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"text-3xl font-bold mb-2",style:{color:"var(--text-primary)"},children:["📋 ",(t==null?void 0:t.name)||"Kanban Board"]}),e.jsx("p",{style:{color:"var(--text-secondary)"},children:"Drag and drop tasks between columns to update status"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>C("backlog"),className:"px-4 py-2 rounded-lg font-semibold transition-all",style:{backgroundColor:"var(--accent)",color:"var(--bg-primary)"},children:"+ New Task"}),e.jsx("button",{onClick:f,className:"px-4 py-2 rounded-lg font-semibold transition-all",style:{backgroundColor:"var(--bg-secondary)",color:"var(--text-primary)",border:"1px solid var(--border)"},children:"↻ Refresh"})]})]}),e.jsx("div",{className:"flex gap-4 mb-6 flex-wrap",children:Object.entries(ct).map(([y,E])=>e.jsxs("div",{className:"flex items-center gap-2 px-3 py-1 rounded-full text-sm",style:{backgroundColor:"var(--bg-secondary)"},children:[e.jsx("span",{children:E}),e.jsx("span",{style:{color:"var(--text-secondary)"},children:y.charAt(0).toUpperCase()+y.slice(1)})]},y))}),e.jsx("div",{className:"flex gap-4 overflow-x-auto pb-4",style:{minHeight:"600px"},children:t==null?void 0:t.columns.map(y=>e.jsxs("div",{className:"flex-shrink-0 w-80 rounded-xl p-4",style:{backgroundColor:"var(--bg-secondary)",border:"1px solid var(--border)"},onDragOver:o,onDrop:()=>d(y.id),children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full",style:{backgroundColor:y.color}}),e.jsx("h3",{className:"font-semibold",style:{color:"var(--text-primary)"},children:y.name}),e.jsx("span",{className:"text-sm px-2 py-0.5 rounded-full",style:{backgroundColor:"var(--bg-hover)",color:"var(--text-secondary)"},children:y.tasks.length})]}),e.jsx("button",{onClick:()=>C(y.id),className:"w-6 h-6 flex items-center justify-center rounded hover:bg-opacity-80 transition-all",style:{backgroundColor:"var(--bg-hover)",color:"var(--text-secondary)"},children:"+"})]}),e.jsxs("div",{className:"space-y-3",children:[y.tasks.map(E=>e.jsxs("div",{draggable:!0,onDragStart:()=>S(E),className:`p-4 rounded-lg cursor-move transition-all hover:shadow-lg ${(n==null?void 0:n.id)===E.id?"opacity-50":""}`,style:{backgroundColor:"var(--bg-primary)",border:"1px solid var(--border)",borderLeft:`4px solid ${za[E.priority]}`},children:[e.jsxs("div",{className:"flex items-start justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-lg",children:ct[E.category]}),e.jsx("span",{className:"font-medium",style:{color:"var(--text-primary)"},children:E.title})]}),e.jsx("button",{onClick:()=>h(E.id),className:"text-sm opacity-50 hover:opacity-100 transition-all",style:{color:"var(--text-secondary)"},children:"×"})]}),E.description&&e.jsxs("p",{className:"text-sm mb-2",style:{color:"var(--text-secondary)"},children:[E.description.substring(0,100),"..."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 text-xs",children:[E.assignee_name&&e.jsxs("span",{className:"px-2 py-1 rounded-full",style:{backgroundColor:"var(--bg-hover)",color:"var(--text-secondary)"},children:["👤 ",E.assignee_name]}),E.client_name&&e.jsxs("span",{className:"px-2 py-1 rounded-full",style:{backgroundColor:"var(--accent-soft)",color:"var(--accent)"},children:["🏢 ",E.client_name]}),E.project_url&&e.jsx("a",{href:E.project_url,target:"_blank",rel:"noopener noreferrer",className:"px-2 py-1 rounded-full hover:underline",style:{backgroundColor:"var(--bg-hover)",color:"var(--accent)"},onClick:U=>U.stopPropagation(),children:"🔗 View"})]}),E.todos&&E.todos.length>0&&e.jsx("div",{className:"mt-3 pt-3 border-t",style:{borderColor:"var(--border)"},children:e.jsxs("div",{className:"text-xs",style:{color:"var(--text-secondary)"},children:["✓ ",E.todos.filter(U=>U.completed).length,"/",E.todos.length," completed"]})})]},E.id)),y.tasks.length===0&&e.jsx("div",{className:"p-4 rounded-lg border-2 border-dashed text-center",style:{borderColor:"var(--border)",color:"var(--text-muted)"},children:"Drop tasks here"})]})]},y.id))}),r&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",style:{backgroundColor:"rgba(0,0,0,0.8)"},children:e.jsxs("div",{className:"w-full max-w-md rounded-xl p-6",style:{backgroundColor:"var(--bg-secondary)"},children:[e.jsx("h2",{className:"text-xl font-bold mb-4",style:{color:"var(--text-primary)"},children:"New Task"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",style:{color:"var(--text-secondary)"},children:"Title"}),e.jsx("input",{type:"text",value:b.title,onChange:y=>k({...b,title:y.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--bg-primary)",color:"var(--text-primary)",border:"1px solid var(--border)"},placeholder:"Task title..."})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",style:{color:"var(--text-secondary)"},children:"Description"}),e.jsx("textarea",{value:b.description,onChange:y=>k({...b,description:y.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--bg-primary)",color:"var(--text-primary)",border:"1px solid var(--border)"},rows:3,placeholder:"Task description..."})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",style:{color:"var(--text-secondary)"},children:"Category"}),e.jsxs("select",{value:b.category,onChange:y=>k({...b,category:y.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--bg-primary)",color:"var(--text-primary)",border:"1px solid var(--border)"},children:[e.jsx("option",{value:"html",children:"📄 HTML"}),e.jsx("option",{value:"worker",children:"🔧 Worker"}),e.jsx("option",{value:"content",children:"📷 Content"}),e.jsx("option",{value:"client",children:"👤 Client"}),e.jsx("option",{value:"system",children:"⚙️ System"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",style:{color:"var(--text-secondary)"},children:"Priority"}),e.jsxs("select",{value:b.priority,onChange:y=>k({...b,priority:y.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--bg-primary)",color:"var(--text-primary)",border:"1px solid var(--border)"},children:[e.jsx("option",{value:"low",children:"Low"}),e.jsx("option",{value:"medium",children:"Medium"}),e.jsx("option",{value:"high",children:"High"}),e.jsx("option",{value:"urgent",children:"Urgent"})]})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",style:{color:"var(--text-secondary)"},children:"Assignee"}),e.jsxs("select",{value:b.assignee_id,onChange:y=>k({...b,assignee_id:y.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--bg-primary)",color:"var(--text-primary)",border:"1px solid var(--border)"},children:[e.jsx("option",{value:"sam",children:"Sam Primeaux"}),e.jsx("option",{value:"connor",children:"Connor McNeely"}),e.jsx("option",{value:"fred",children:"Fred Williams"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",style:{color:"var(--text-secondary)"},children:"Project URL (optional)"}),e.jsx("input",{type:"url",value:b.project_url,onChange:y=>k({...b,project_url:y.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--bg-primary)",color:"var(--text-primary)",border:"1px solid var(--border)"},placeholder:"https://..."})]})]}),e.jsxs("div",{className:"flex gap-3 mt-6",children:[e.jsx("button",{onClick:()=>N(!1),className:"flex-1 px-4 py-2 rounded-lg font-semibold",style:{backgroundColor:"var(--bg-hover)",color:"var(--text-secondary)"},children:"Cancel"}),e.jsx("button",{onClick:c,className:"flex-1 px-4 py-2 rounded-lg font-semibold",style:{backgroundColor:"var(--accent)",color:"var(--bg-primary)"},children:"Create Task"})]})]})})]})}function Ma(){const t=ft(),[i,s]=a.useState(!0),[g,n]=a.useState(null);a.useEffect(()=>{x()},[]);const x=async()=>{var N;try{const m=await X("/api/auth/me");if(m.success&&((N=m.data)!=null&&N.authenticated)){t("/dashboard",{replace:!0});return}}catch(m){console.error("Auth check failed:",m)}finally{s(!1)}},r=()=>{window.location.href="/api/auth/google"};return i?e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"Checking authentication..."})]})}):e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 px-4",children:e.jsxs("div",{className:"max-w-md w-full bg-white rounded-2xl shadow-xl p-8",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Welcome Back"}),e.jsx("p",{className:"text-gray-600",children:"Sign in to access your dashboard"})]}),g&&e.jsx("div",{className:"mb-6 p-4 bg-red-50 border border-red-200 rounded-lg",children:e.jsx("p",{className:"text-sm text-red-600",children:g})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("button",{onClick:r,className:"w-full flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-gray-300 rounded-xl hover:border-gray-400 hover:shadow-md transition-all font-semibold text-gray-700",children:[e.jsxs("svg",{className:"w-6 h-6",viewBox:"0 0 24 24",children:[e.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),e.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),e.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),e.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Sign in with Google"]}),e.jsxs("div",{className:"relative my-6",children:[e.jsx("div",{className:"absolute inset-0 flex items-center",children:e.jsx("div",{className:"w-full border-t border-gray-300"})}),e.jsx("div",{className:"relative flex justify-center text-sm",children:e.jsx("span",{className:"px-2 bg-white text-gray-500",children:"Or continue with email"})})]}),e.jsxs("form",{onSubmit:async N=>{N.preventDefault(),n(null);const m=new FormData(N.currentTarget),v=m.get("email"),b=m.get("password");try{const k=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:v,password:b}),credentials:"include"}),f=await k.json();k.ok&&f.success?t("/dashboard",{replace:!0}):n(f.error||"Login failed")}catch{n("Network error. Please try again.")}},className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email"}),e.jsx("input",{id:"email",name:"email",type:"email",required:!0,className:"w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500",placeholder:"you@example.com"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700 mb-2",children:"Password"}),e.jsx("input",{id:"password",name:"password",type:"password",required:!0,className:"w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500",placeholder:"••••••••"})]}),e.jsx("button",{type:"submit",className:"w-full px-6 py-4 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-all font-semibold shadow-md hover:shadow-lg",children:"Sign In"})]})]}),e.jsx("div",{className:"mt-6 text-center text-sm text-gray-600",children:e.jsxs("p",{children:["Don't have an account?"," ",e.jsx("a",{href:"/pages/get-involved",className:"text-teal-600 hover:text-teal-700 font-semibold",children:"Contact us"})]})})]})})}function Da(){return e.jsx(vt,{children:e.jsxs(yt,{children:[e.jsx(H,{path:"/auth/login",element:e.jsx(Ma,{})}),e.jsx(H,{path:"/",element:e.jsx(J,{publicLayout:!0,children:e.jsx(fa,{})})}),e.jsx(H,{path:"/about",element:e.jsx(J,{publicLayout:!0,children:e.jsx(it,{})})}),e.jsx(H,{path:"/pages/about-us",element:e.jsx(J,{publicLayout:!0,children:e.jsx(it,{})})}),e.jsx(H,{path:"/pages/mobility-grants-programs",element:e.jsx(J,{publicLayout:!0,children:e.jsx(ja,{})})}),e.jsx(H,{path:"/pages/community",element:e.jsx(J,{publicLayout:!0,children:e.jsx(wa,{})})}),e.jsx(H,{path:"/pages/resources",element:e.jsx(J,{publicLayout:!0,children:e.jsx(nt,{})})}),e.jsx(H,{path:"/pages/resources-and-information",element:e.jsx(J,{publicLayout:!0,children:e.jsx(nt,{})})}),e.jsx(H,{path:"/connect",element:e.jsx(J,{publicLayout:!0,children:e.jsx(ot,{})})}),e.jsx(H,{path:"/pages/get-involved",element:e.jsx(J,{publicLayout:!0,children:e.jsx(ot,{})})}),e.jsx(H,{path:"/pages/donate",element:e.jsx(J,{publicLayout:!0,children:e.jsx(Na,{})})}),e.jsx(H,{path:"/pages/meauxbility-branding",element:e.jsx(J,{publicLayout:!0,children:e.jsx(ka,{})})}),e.jsx(H,{path:"/pages/non-profit-information",element:e.jsx(J,{publicLayout:!0,children:e.jsx(Sa,{})})}),e.jsx(H,{path:"/pages/apply-for-funding",element:e.jsx(J,{publicLayout:!0,children:e.jsx(Ca,{})})}),e.jsx(H,{path:"/sam-primeaux",element:e.jsx(J,{publicLayout:!0,children:e.jsx(lt,{})})}),e.jsx(H,{path:"/sam",element:e.jsx(J,{publicLayout:!0,children:e.jsx(lt,{})})}),e.jsx(H,{path:"/dashboard",element:e.jsx(J,{children:e.jsx(na,{})})}),e.jsx(H,{path:"/dashboard/analytics",element:e.jsx(J,{children:e.jsx(oa,{})})}),e.jsx(H,{path:"/dashboard/projects",element:e.jsx(J,{children:e.jsx(la,{})})}),e.jsx(H,{path:"/dashboard/communications",element:e.jsx(J,{children:e.jsx(ca,{})})}),e.jsx(H,{path:"/dashboard/content",element:e.jsx(J,{children:e.jsx(da,{})})}),e.jsx(H,{path:"/dashboard/storage",element:e.jsx(J,{children:e.jsx(ma,{})})}),e.jsx(H,{path:"/dashboard/finance",element:e.jsx(J,{children:e.jsx(pa,{})})}),e.jsx(H,{path:"/dashboard/calendar",element:e.jsx(J,{children:e.jsx(xa,{})})}),e.jsx(H,{path:"/dashboard/developer",element:e.jsx(J,{children:e.jsx(ha,{})})}),e.jsx(H,{path:"/dashboard/connection-test",element:e.jsx(J,{children:e.jsx(ba,{})})}),e.jsx(H,{path:"/dashboard/team",element:e.jsx(J,{children:e.jsx(ua,{})})}),e.jsx(H,{path:"/dashboard/photo-gallery",element:e.jsx(J,{children:e.jsx(Ea,{})})}),e.jsx(H,{path:"/dashboard/image-library",element:e.jsx(J,{children:e.jsx(Ta,{})})}),e.jsx(H,{path:"/dashboard/deployments",element:e.jsx(J,{children:e.jsx(_a,{})})}),e.jsx(H,{path:"/dashboard/kanban",element:e.jsx(J,{children:e.jsx(Fa,{})})}),e.jsx(H,{path:"/dashboard/settings",element:e.jsx(J,{children:e.jsx(ga,{})})})]})})}const La=localStorage.getItem("dashboard-theme")||"dark";document.documentElement.setAttribute("data-theme",La);Qe.createRoot(document.getElementById("root")).render(e.jsx(jt.StrictMode,{children:e.jsx(Da,{})}));
