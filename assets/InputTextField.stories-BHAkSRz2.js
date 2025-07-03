import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as H}from"./index-BlmOqGMO.js";import{d as i,l as N}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const z=i.div`
  display: flex;
  flex-direction: column;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
`,A=i.label`
  font-weight: 500;
  margin-bottom: 0.35rem;
  color: #374151;
`,M=i.input`
  padding: 0.625rem 0.75rem;
  font-size: 1rem;
  border: 1px solid ${({error:e})=>e?"#dc2626":"#d1d5db"};
  border-radius: 0.5rem;
  background-color: ${({disabled:e})=>e?"#f3f4f6":"#fff"};
  color: #111827;
  outline: none;
  transition: 0.2s;

  &:focus {
    border-color: ${({error:e})=>e?"#dc2626":"#6366f1"};
    box-shadow: 0 0 0 2px ${({error:e})=>e?"#fecaca":"#c7d2fe"};
  }

  ${({disabled:e})=>e&&N`
      pointer-events: none;
      opacity: 0.6;
    `}
`,P=i.span`
  font-size: 0.75rem;
  color: ${({error:e})=>e?"#dc2626":"#6b7280"};
  margin-top: 0.25rem;
`,c=({label:e,placeholder:d,value:p,onChange:I,type:$="text",fullWidth:D,error:m,helperText:u,disabled:C})=>r.jsxs(z,{fullWidth:D,children:[e&&r.jsx(A,{children:e}),r.jsx(M,{type:$,placeholder:d,value:p,onChange:_=>I(_.target.value),error:m,disabled:C}),u&&r.jsx(P,{error:m,children:u})]});c.__docgenInfo={description:"",methods:[],displayName:"InputTextField",props:{label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: string) => void",signature:{arguments:[{type:{name:"string"},name:"val"}],return:{name:"void"}}},description:""},type:{required:!1,tsType:{name:"union",raw:"'text' | 'email' | 'password' | 'number'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'email'"},{name:"literal",value:"'password'"},{name:"literal",value:"'number'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const O={title:"Components/ui/InputField",component:c,tags:["autodocs"],argTypes:{type:{control:"radio",options:["text","email","password","number"]},error:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"}}},a={render:e=>{const[d,p]=H.useState(e.value??"");return r.jsx(c,{...e,value:d,onChange:p})}},t={...a,args:{label:"Full Name",placeholder:"Enter your name",type:"text",value:""}},o={...a,args:{label:"Email Address",placeholder:"e.g., john@example.com",value:"",type:"email",error:!0,helperText:"Invalid email format"}},s={...a,args:{label:"Username",placeholder:"Disabled input",value:"johndoe123",disabled:!0}},n={...a,args:{label:"Password",placeholder:"Enter a strong password",type:"password",helperText:"Must be at least 8 characters"}},l={...a,args:{label:"Search",placeholder:"Search something...",fullWidth:!0}};var h,g,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template,
  args: {
    label: 'Full Name',
    placeholder: 'Enter your name',
    type: 'text',
    value: ''
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,x,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Template,
  args: {
    label: 'Email Address',
    placeholder: 'e.g., john@example.com',
    value: '',
    type: 'email',
    error: true,
    helperText: 'Invalid email format'
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var T,v,w;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Template,
  args: {
    label: 'Username',
    placeholder: 'Disabled input',
    value: 'johndoe123',
    disabled: true
  }
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var j,E,S;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Template,
  args: {
    label: 'Password',
    placeholder: 'Enter a strong password',
    type: 'password',
    helperText: 'Must be at least 8 characters'
  }
}`,...(S=(E=n.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var W,q,F;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...Template,
  args: {
    label: 'Search',
    placeholder: 'Search something...',
    fullWidth: true
  }
}`,...(F=(q=l.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};const R=["Default","WithError","Disabled","WithHelperText","FullWidth"];export{t as Default,s as Disabled,l as FullWidth,o as WithError,n as WithHelperText,R as __namedExportsOrder,O as default};
