import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as O}from"./index-BlmOqGMO.js";import{d as s,l as r}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const A={sm:r`
    font-size: 0.8rem;
    padding: 0.4rem 0.6rem;
  `,md:r`
    font-size: 1rem;
    padding: 0.6rem 0.75rem;
  `,lg:r`
    font-size: 1.125rem;
    padding: 0.75rem 1rem;
  `},B={outline:r`
    border: 1px solid #d1d5db;
    background-color: white;
  `,filled:r`
    background-color: #f3f4f6;
    border: 1px solid transparent;
  `,unstyled:r`
    border: none;
    background: none;
    padding: 0;
  `},G=s.label`
  display: block;
  font-weight: 600;
  margin-bottom: 4px;
`,J=s.div`
  display: flex;
  align-items: center;
  position: relative;
  opacity: ${({disabled:e})=>e?.6:1};
`,K=s.input`
  width: 100%;
  border-radius: 8px;
  outline: none;
  ${e=>A[e.size]}
  ${e=>B[e.variant]}
  ${e=>e.error&&r`
      border-color: #dc2626 !important;
    `}

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }

  &:disabled {
    cursor: not-allowed;
  }
`,Q=s.span`
  position: absolute;
  left: 10px;
  display: flex;
  align-items: center;
  color: #9ca3af;
`,X=s.p`
  font-size: 0.75rem;
  margin-top: 4px;
  color: ${({error:e})=>e?"#dc2626":"#6b7280"};
`,l=({label:e,placeholder:u,value:g,onChange:f,helperText:b,error:y=!1,disabled:v=!1,size:U="md",variant:_="outline",icon:h,type:P="text"})=>a.jsxs("div",{children:[e&&a.jsx(G,{children:e}),a.jsxs(J,{disabled:v,children:[h&&a.jsx(Q,{children:h}),a.jsx(K,{size:U,variant:_,error:y,disabled:v,value:g,onChange:f,placeholder:u,style:{paddingLeft:h?"2.25rem":void 0},type:P})]}),b&&a.jsx(X,{error:y,children:b})]});l.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'outline' | 'filled' | 'unstyled'",elements:[{name:"literal",value:"'outline'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'unstyled'"}]},description:"",defaultValue:{value:"'outline'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'text'",computed:!1}}}};const re={title:"Components/ui/Input",component:l,tags:["autodocs"],argTypes:{size:{control:"radio",options:["sm","md","lg"]},variant:{control:"radio",options:["outline","filled","unstyled"]},error:{control:"boolean"},disabled:{control:"boolean"}}},t={render:e=>{const[u,g]=O.useState("");return a.jsx(l,{...e,value:u,onChange:f=>g(f.target.value)})}},n={...t,args:{label:"Name",placeholder:"Enter your name"}},o={...t,args:{label:"Email",placeholder:"Invalid email",error:!0,helperText:"Please enter a valid email address"}},i={...t,args:{label:"Username",placeholder:"This field is disabled",disabled:!0}},d={...t,args:{label:"Search",placeholder:"Search...",icon:"&#128269;"}},p={...t,args:{label:"Filled Input",variant:"filled",placeholder:"Filled style"}},c={...t,args:{placeholder:"Minimal input",variant:"unstyled"}},m={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[a.jsx(l,{size:"sm",label:"Small",placeholder:"Small input"}),a.jsx(l,{size:"md",label:"Medium",placeholder:"Medium input"}),a.jsx(l,{size:"lg",label:"Large",placeholder:"Large input"})]})};var x,T,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Template,
  args: {
    label: 'Name',
    placeholder: 'Enter your name'
  }
}`,...(S=(T=n.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var I,z,E;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Template,
  args: {
    label: 'Email',
    placeholder: 'Invalid email',
    error: true,
    helperText: 'Please enter a valid email address'
  }
}`,...(E=(z=o.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var j,q,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Template,
  args: {
    label: 'Username',
    placeholder: 'This field is disabled',
    disabled: true
  }
}`,...(w=(q=i.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var L,M,R;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...Template,
  args: {
    label: 'Search',
    placeholder: 'Search...',
    icon: "&#128269;"
  }
}`,...(R=(M=d.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var V,C,D;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Template,
  args: {
    label: 'Filled Input',
    variant: 'filled',
    placeholder: 'Filled style'
  }
}`,...(D=(C=p.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var F,W,N;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Template,
  args: {
    placeholder: 'Minimal input',
    variant: 'unstyled'
  }
}`,...(N=(W=c.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var $,k,H;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Input size="sm" label="Small" placeholder="Small input" />\r
      <Input size="md" label="Medium" placeholder="Medium input" />\r
      <Input size="lg" label="Large" placeholder="Large input" />\r
    </div>
}`,...(H=(k=m.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};const le=["Default","WithError","Disabled","WithIcon","FilledVariant","Unstyled","Sizes"];export{n as Default,i as Disabled,p as FilledVariant,m as Sizes,c as Unstyled,o as WithError,d as WithIcon,le as __namedExportsOrder,re as default};
