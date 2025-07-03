import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as _}from"./index-BlmOqGMO.js";import{d as i}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const W=i.label`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 1rem;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.6:1};
  user-select: none;
`,E=i.input.attrs({type:"checkbox"})`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
`,z=i.span`
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 4px;
  display: inline-block;
  background: ${({checked:e})=>e?"#6366f1":"white"};
  border: 2px solid ${({error:e})=>e?"#dc2626":"#d1d5db"};
  transition: all 0.2s;

  ${E}:focus + & {
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }

  &::after {
    content: '';
    display: ${({checked:e})=>e?"block":"none"};
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin: 2px auto;
  }
`,A=i.p`
  font-size: 0.75rem;
  color: ${({error:e})=>e?"#dc2626":"#6b7280"};
  margin: 4px 0 0 1.75rem;
`,u=({label:e,checked:t,onChange:p,disabled:a,error:h,helperText:m})=>r.jsxs("div",{children:[r.jsxs(W,{disabled:a,children:[r.jsx(E,{checked:t,onChange:H=>p(H.target.checked),disabled:a}),r.jsx(z,{checked:t,error:h}),e&&r.jsx("span",{children:e})]}),m&&r.jsx(A,{error:h,children:m})]});u.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""}}};const O={title:"Components/ui/Checkbox",component:u,tags:["autodocs"],argTypes:{label:{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"},helperText:{control:"text"}}},o=e=>{const[t,p]=_.useState(e.checked??!1);return r.jsx(u,{...e,checked:t,onChange:a=>p(a)})},s={render:e=>r.jsx(o,{...e}),args:{label:"Accept terms and conditions",checked:!1,disabled:!1,error:!1,helperText:""}},n={render:e=>r.jsx(o,{...e}),args:{...s.args,checked:!0}},c={render:e=>r.jsx(o,{...e}),args:{...s.args,disabled:!0}},d={render:e=>r.jsx(o,{...e}),args:{...s.args,error:!0,helperText:"You must accept terms to proceed"}},l={render:e=>r.jsx(o,{...e}),args:{label:"Subscribe to newsletter",checked:!0,disabled:!0,helperText:"This option is not available"}};var b,x,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <ControlledCheckbox {...args} />,
  args: {
    label: 'Accept terms and conditions',
    checked: false,
    disabled: false,
    error: false,
    helperText: ''
  }
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var k,f,C;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <ControlledCheckbox {...args} />,
  args: {
    ...Default.args,
    checked: true
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var T,y,j;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <ControlledCheckbox {...args} />,
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(j=(y=c.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var w,S,D;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <ControlledCheckbox {...args} />,
  args: {
    ...Default.args,
    error: true,
    helperText: 'You must accept terms to proceed'
  }
}`,...(D=(S=d.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var $,q,v;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => <ControlledCheckbox {...args} />,
  args: {
    label: 'Subscribe to newsletter',
    checked: true,
    disabled: true,
    helperText: 'This option is not available'
  }
}`,...(v=(q=l.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};const R=["Default","Checked","Disabled","ErrorState","DisabledCheckedWithHelperText"];export{n as Checked,s as Default,c as Disabled,l as DisabledCheckedWithHelperText,d as ErrorState,R as __namedExportsOrder,O as default};
