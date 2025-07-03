import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as W}from"./index-BlmOqGMO.js";import{d as s}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const k=s.label`
  font-weight: 600;
  margin-bottom: 4px;
  display: inline-block;
`,P=s.div`
  position: relative;
  opacity: ${({disabled:e})=>e?.6:1};
`,V=s.select`
  width: 100%;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  background-color: white;
  border: 1px solid ${({error:e})=>e?"#dc2626":"#d1d5db"};
  font-size: 1rem;
  appearance: none;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }

  &:disabled {
    cursor: not-allowed;
  }
`,_=s.p`
  font-size: 0.75rem;
  margin-top: 4px;
  color: ${({error:e})=>e?"#dc2626":"#6b7280"};
`,z=s.span`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 1rem;
`,u=({label:e,options:c,value:d,onChange:a,placeholder:O="Select...",helperText:m,error:g,disabled:b})=>r.jsxs("div",{children:[e&&r.jsx(k,{children:e}),r.jsxs(P,{disabled:b,children:[r.jsxs(V,{value:d,onChange:o=>a==null?void 0:a(o.target.value),disabled:b,error:g,children:[r.jsx("option",{value:"",disabled:!0,children:O}),c.map(o=>r.jsx("option",{value:o.value,children:o.label},o.value))]}),r.jsx(z,{children:"▾"})]}),m&&r.jsx(_,{error:g,children:m})]});u.__docgenInfo={description:"",methods:[],displayName:"Select",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: string;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Option[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select...'",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const L={title:"Components/ui/Select",component:u,tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},value:{control:"text"},error:{control:"boolean"},disabled:{control:"boolean"},helperText:{control:"text"}}},C=[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],p={render:e=>{const[c,d]=W.useState(e.value||"");return r.jsx(u,{...e,value:c,onChange:a=>d(a),options:C})}},t={...p,args:{label:"Choose an option",placeholder:"Select...",helperText:"Please select one option",error:!1,disabled:!1,value:""}},n={...p,args:{...t.args,error:!0,helperText:"This field is required"}},l={...p,args:{...t.args,disabled:!0,value:"option2"}},i={...p,args:{...t.args,value:"option3"}};var f,v,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Template,
  args: {
    label: 'Choose an option',
    placeholder: 'Select...',
    helperText: 'Please select one option',
    error: false,
    disabled: false,
    value: ''
  }
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var x,T,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Default.args,
    error: true,
    helperText: 'This field is required'
  }
}`,...(y=(T=n.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var S,j,q;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Default.args,
    disabled: true,
    value: 'option2'
  }
}`,...(q=(j=l.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var w,D,E;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Default.args,
    value: 'option3'
  }
}`,...(E=(D=i.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const N=["Default","WithError","Disabled","WithPreselectedValue"];export{t as Default,l as Disabled,n as WithError,i as WithPreselectedValue,N as __namedExportsOrder,L as default};
