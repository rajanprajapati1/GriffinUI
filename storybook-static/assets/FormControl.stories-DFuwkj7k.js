import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{d as n}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";const N=n.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1rem;
`,I=n.label`
  font-weight: 500;
  color: #374151;
`,R=n.span`
  font-size: 0.75rem;
  color: ${({error:r})=>r?"#dc2626":"#6b7280"};
`,j=({label:r,error:E,helperText:i,children:q})=>e.jsxs(N,{children:[r&&e.jsx(I,{children:r}),q,i&&e.jsx(R,{error:E,children:i})]});j.__docgenInfo={description:"",methods:[],displayName:"FormControl",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const l=({placeholder:r="Enter value"})=>e.jsx("input",{type:"text",placeholder:r,style:{padding:"0.5rem",borderRadius:"4px",border:"1px solid #d1d5db",fontSize:"1rem"}}),W={title:"Components/ui/FormControl",component:j,tags:["autodocs"],argTypes:{label:{control:"text"},helperText:{control:"text"},error:{control:"boolean"}}},o={args:{label:"Username",helperText:"Enter your unique username.",error:!1,children:e.jsx(l,{})}},a={args:{label:"Email",helperText:"Please enter a valid email address.",error:!0,children:e.jsx(l,{placeholder:"email@example.com"})}},s={args:{label:"First Name",error:!1,children:e.jsx(l,{placeholder:"John"})}},t={args:{helperText:"This field is required.",error:!0,children:e.jsx(l,{})}};var c,d,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    helperText: 'Enter your unique username.',
    error: false,
    children: <MockInput />
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    helperText: 'Please enter a valid email address.',
    error: true,
    children: <MockInput placeholder="email@example.com" />
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,g,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    error: false,
    children: <MockInput placeholder="John" />
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,T,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    helperText: 'This field is required.',
    error: true,
    children: <MockInput />
  }
}`,...(y=(T=t.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const v=["Default","WithError","NoHelperText","WithoutLabel"];export{o as Default,s as NoHelperText,a as WithError,t as WithoutLabel,v as __namedExportsOrder,W as default};
