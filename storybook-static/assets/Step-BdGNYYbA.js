import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{d as s,l as p}from"./styled-components.browser.esm-B51KuXqp.js";const f=s.div`
  display: flex;
  align-items: center;
`,m=s.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({completed:e,error:i})=>e?"#10b981":i?"#ef4444":"#e5e7eb"};
  color: ${({completed:e,error:i})=>e||i?"#fff":"#374151"};
  border: ${({active:e})=>e?"2px solid #3b82f6":"2px solid transparent"};
`,x=s.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
`,b=s.div`
  font-weight: 600;
`,u=s.div`
  font-size: 0.75rem;
  color: #6b7280;
`,y=s.div`
  flex: 1;
  height: 2px;
  background-color: #d1d5db;
  margin: 0 0.5rem;
  ${({isLast:e})=>e&&p`
      display: none;
    `}
`,h=({label:e,subLabel:i,icon:o,index:t,isActive:d,isCompleted:n,isLast:a,isError:l,disabled:g})=>{const c=o||n?r.jsx("span",{style:{fontSize:"14px"},children:n?"✔️":t+1}):t+1;return r.jsxs(r.Fragment,{children:[r.jsxs(f,{children:[r.jsx(m,{active:d,completed:n,error:l,children:c}),r.jsxs(x,{children:[r.jsx(b,{children:e}),i&&r.jsx(u,{children:i})]})]}),r.jsx(y,{isLast:a})]})};h.__docgenInfo={description:"",methods:[],displayName:"Step",props:{label:{required:!0,tsType:{name:"string"},description:""},subLabel:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},index:{required:!1,tsType:{name:"number"},description:""},isActive:{required:!1,tsType:{name:"boolean"},description:""},isCompleted:{required:!1,tsType:{name:"boolean"},description:""},isLast:{required:!1,tsType:{name:"boolean"},description:""},isError:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};export{h as S};
