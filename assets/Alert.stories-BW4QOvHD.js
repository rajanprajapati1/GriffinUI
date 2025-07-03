import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{d,l as c}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";const W={success:{bg:"#d1fae5",color:"#065f46",border:"#10b981"},info:{bg:"#dbeafe",color:"#1e3a8a",border:"#3b82f6"},warning:{bg:"#fef3c7",color:"#92400e",border:"#f59e0b"},error:{bg:"#fee2e2",color:"#991b1b",border:"#ef4444"}},$=(t,l)=>{const e=W[t];switch(l){case"filled":return c`
        background-color: ${e.bg};
        color: ${e.color};
        border: none;
      `;case"outlined":return c`
        background-color: transparent;
        color: ${e.color};
        border: 1px solid ${e.border};
      `;default:return c`
        background-color: #f9fafb;
        color: ${e.color};
        border-left: 4px solid ${e.border};
      `}},q=d.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  line-height: 1.5;
  position: relative;
  gap: 0.75rem;
  ${t=>$(t.type,t.variant)}
`,E=d.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
`,N=d.button`
  background: none;
  border: none;
  color: inherit;
  position: absolute;
  top: 0.5rem;
  right: 0.75rem;
  font-size: 1rem;
  cursor: pointer;
`,A=({type:t="info",variant:l="standard",title:e,children:I,onClose:u,icon:p})=>r.jsxs(q,{type:t,variant:l,children:[p&&r.jsx("span",{children:p}),r.jsxs("div",{children:[e&&r.jsx(E,{children:e}),r.jsx("div",{children:I})]}),u&&r.jsx(N,{onClick:u,children:"×"})]});A.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{type:{required:!1,tsType:{name:"union",raw:"'success' | 'info' | 'warning' | 'error'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'standard'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'standard'"}]},description:"",defaultValue:{value:"'standard'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const F={title:"Components/ui/Alert",component:A,tags:["autodocs"],argTypes:{type:{control:"select",options:["success","info","warning","error"]},variant:{control:"select",options:["filled","outlined","standard"]},title:{control:"text"},children:{control:"text"},onClose:{action:"closed"},icon:{control:!1}}},a={args:{type:"info",variant:"standard",title:"Heads up!",children:"This is an informational alert."}},o={args:{type:"success",variant:"filled",title:"Success!",children:"Your operation was successful."}},n={args:{type:"warning",variant:"outlined",title:"Be careful!",children:"There might be some issues to check."}},s={args:{type:"error",variant:"standard",title:"Error!",children:"Something went wrong.",onClose:()=>alert("Alert closed!")}},i={args:{type:"success",variant:"standard",title:"Custom Icon",children:"This alert uses a custom icon.",icon:r.jsx("span",{role:"img","aria-label":"check",children:"✅"})}};var m,f,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: 'info',
    variant: 'standard',
    title: 'Heads up!',
    children: 'This is an informational alert.'
  }
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,b,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'success',
    variant: 'filled',
    title: 'Success!',
    children: 'Your operation was successful.'
  }
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,w,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    variant: 'outlined',
    title: 'Be careful!',
    children: 'There might be some issues to check.'
  }
}`,...(x=(w=n.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var S,T,C;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: 'error',
    variant: 'standard',
    title: 'Error!',
    children: 'Something went wrong.',
    onClose: () => alert('Alert closed!')
  }
}`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var j,k,R;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    type: 'success',
    variant: 'standard',
    title: 'Custom Icon',
    children: 'This alert uses a custom icon.',
    icon: <span role="img" aria-label="check">✅</span>
  }
}`,...(R=(k=i.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};const H=["InfoStandard","SuccessFilled","WarningOutlined","ErrorWithClose","WithCustomIcon"];export{s as ErrorWithClose,a as InfoStandard,o as SuccessFilled,n as WarningOutlined,i as WithCustomIcon,H as __namedExportsOrder,F as default};
