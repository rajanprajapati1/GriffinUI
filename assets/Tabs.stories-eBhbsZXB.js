import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as b}from"./index-BlmOqGMO.js";import{d as n}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const f=n.div`
  width: 100%;
  font-family: 'Inter', sans-serif;
`,v=n.div`
  display: flex;
  border-bottom: 2px solid #e5e7eb;
`,g=n.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  border-bottom: 2px solid
    ${({active:e})=>e?"#6366f1":"transparent"};
  color: ${({active:e})=>e?"#4338ca":"#6b7280"};
  transition: all 0.2s ease;

  &:hover {
    color: ${({active:e})=>e?"#4338ca":"#374151"};
  }
`,x=n.div`
  padding: 1rem 0;
`,u=({tabs:e,defaultValue:m})=>{var s,i;const[o,p]=b.useState(m||((s=e[0])==null?void 0:s.value));return t.jsxs(f,{children:[t.jsx(v,{children:e.map(a=>t.jsx(g,{active:o===a.value,onClick:()=>p(a.value),children:a.label},a.value))}),t.jsx(x,{children:(i=e.find(a=>a.value===o))==null?void 0:i.content})]})};u.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: string;\r
  content: React.ReactNode;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}],raw:"TabItem[]"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"Components/ui/Tabs",component:u,tags:["autodocs"]},h=[{label:"Home",value:"home",content:t.jsx("div",{className:"text-gray-700",children:"Welcome to the Home tab!"})},{label:"Profile",value:"profile",content:t.jsx("div",{className:"text-gray-700",children:"Here is your profile info."})},{label:"Settings",value:"settings",content:t.jsx("div",{className:"text-gray-700",children:"Adjust your settings here."})}],r={args:{tabs:h,defaultValue:"home"}};var l,c,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    tabs: tabItems,
    defaultValue: 'home'
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const k=["Default"];export{r as Default,k as __namedExportsOrder,R as default};
