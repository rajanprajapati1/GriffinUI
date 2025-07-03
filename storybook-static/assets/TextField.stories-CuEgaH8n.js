import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as i}from"./index-BlmOqGMO.js";import{d as c,l as r}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const k={sm:r`
    font-size: 0.8rem;
    padding: 0.4rem 0.6rem;
  `,md:r`
    font-size: 1rem;
    padding: 0.6rem 0.75rem;
  `,lg:r`
    font-size: 1.125rem;
    padding: 0.75rem 1rem;
  `},H={outline:r`
    border: 1px solid #d1d5db;
    background-color: white;
  `,filled:r`
    background-color: #f3f4f6;
    border: 1px solid transparent;
  `,unstyled:r`
    border: none;
    background: none;
    padding: 0;
  `},Y=c.label`
  display: block;
  font-weight: 600;
  margin-bottom: 4px;
`,A=c.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  opacity: ${({disabled:e})=>e?.6:1};
`,B=c.input`
  width: 100%;
  border-radius: 8px;
  outline: none;
  ${e=>k[e.size]}
  ${e=>H[e.variant]}
  ${e=>e.error&&r`
      border-color: #dc2626 !important;
    `}

  ${e=>e.hasIcon&&r`
      padding-left: 2.5rem;
    `}

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }

  &:disabled {
    cursor: not-allowed;
  }
`,b=c.span`
  position: absolute;
  top: 50%;
  ${({position:e})=>e==="left"?"left: 0.75rem;":"right: 0.75rem;"}
  transform: translateY(-50%);
  pointer-events: none;
  display: flex;
  align-items: center;
`,G=c.p`
  font-size: 0.75rem;
  margin-top: 4px;
  color: ${({error:e})=>e?"#dc2626":"#6b7280"};
`,t=({label:e,value:n,onChange:s,placeholder:u,helperText:o,error:d=!1,disabled:l=!1,size:W="md",variant:$="outline",iconLeft:x,iconRight:y,type:_="text"})=>a.jsxs("div",{children:[e&&a.jsx(Y,{children:e}),a.jsxs(A,{disabled:l,children:[x&&a.jsx(b,{position:"left",children:x}),a.jsx(B,{type:_,value:n,onChange:s,placeholder:u,size:W,variant:$,error:d,hasIcon:!!x,disabled:l}),y&&a.jsx(b,{position:"right",children:y})]}),o&&a.jsx(G,{error:d,children:o})]});t.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{label:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'outline' | 'filled' | 'unstyled'",elements:[{name:"literal",value:"'outline'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'unstyled'"}]},description:"",defaultValue:{value:"'outline'",computed:!1}},iconLeft:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconRight:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'text'",computed:!1}}}};const X={title:"Components/ui/TextField",component:t,tags:["autodocs"],argTypes:{label:{control:"text"},value:{control:"text"},placeholder:{control:"text"},helperText:{control:"text"},error:{control:"boolean"},disabled:{control:"boolean"},size:{control:"radio",options:["sm","md","lg"]},variant:{control:"select",options:["outline","filled","unstyled"]},type:{control:"text"},iconLeft:{control:!1},iconRight:{control:!1}}},m={args:{label:"Name",placeholder:"Enter your name",size:"md",variant:"outline"}},p={args:{label:"Email",placeholder:"Enter your email",error:!0,helperText:"Invalid email address",size:"md",variant:"outline"}},g={args:{label:"Username",value:"disabled_user",disabled:!0,size:"md",variant:"outline"}},v={render:()=>{const[e,n]=i.useState(""),[s,u]=i.useState(""),[o,d]=i.useState("");return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:400},children:[a.jsx(t,{label:"Small",placeholder:"Small size",size:"sm",value:e,onChange:l=>n(l.target.value)}),a.jsx(t,{label:"Medium",placeholder:"Medium size",size:"md",value:s,onChange:l=>u(l.target.value)}),a.jsx(t,{label:"Large",placeholder:"Large size",size:"lg",value:o,onChange:l=>d(l.target.value)})]})}},h={render:()=>{const[e,n]=i.useState(""),[s,u]=i.useState(""),[o,d]=i.useState("");return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:400},children:[a.jsx(t,{label:"Outline Variant",variant:"outline",placeholder:"Outline style",value:e,onChange:l=>n(l.target.value)}),a.jsx(t,{label:"Filled Variant",variant:"filled",placeholder:"Filled style",value:s,onChange:l=>u(l.target.value)}),a.jsx(t,{label:"Unstyled Variant",variant:"unstyled",placeholder:"Unstyled style",value:o,onChange:l=>d(l.target.value)})]})}},f={render:()=>{const[e,n]=i.useState("");return a.jsx(t,{label:"Search",placeholder:"Search here",value:e,onChange:s=>n(s.target.value),iconLeft:a.jsx("span",{role:"img","aria-label":"search",children:"🔍"}),iconRight:a.jsx("span",{role:"img","aria-label":"clear",children:"❌"}),size:"md",variant:"outline"})}};var V,S,z;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
    size: 'md',
    variant: 'outline'
  }
}`,...(z=(S=m.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var T,j,C;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    error: true,
    helperText: 'Invalid email address',
    size: 'md',
    variant: 'outline'
  }
}`,...(C=(j=p.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var E,F,R;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    value: 'disabled_user',
    disabled: true,
    size: 'md',
    variant: 'outline'
  }
}`,...(R=(F=g.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var L,q,w;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [smVal, setSmVal] = useState('');
    const [mdVal, setMdVal] = useState('');
    const [lgVal, setLgVal] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      maxWidth: 400
    }}>\r
        <TextField label="Small" placeholder="Small size" size="sm" value={smVal} onChange={e => setSmVal(e.target.value)} />\r
        <TextField label="Medium" placeholder="Medium size" size="md" value={mdVal} onChange={e => setMdVal(e.target.value)} />\r
        <TextField label="Large" placeholder="Large size" size="lg" value={lgVal} onChange={e => setLgVal(e.target.value)} />\r
      </div>;
  }
}`,...(w=(q=v.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var I,M,U;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [outlineVal, setOutlineVal] = useState('');
    const [filledVal, setFilledVal] = useState('');
    const [unstyledVal, setUnstyledVal] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      maxWidth: 400
    }}>\r
        <TextField label="Outline Variant" variant="outline" placeholder="Outline style" value={outlineVal} onChange={e => setOutlineVal(e.target.value)} />\r
        <TextField label="Filled Variant" variant="filled" placeholder="Filled style" value={filledVal} onChange={e => setFilledVal(e.target.value)} />\r
        <TextField label="Unstyled Variant" variant="unstyled" placeholder="Unstyled style" value={unstyledVal} onChange={e => setUnstyledVal(e.target.value)} />\r
      </div>;
  }
}`,...(U=(M=h.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var D,O,N;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <TextField label="Search" placeholder="Search here" value={value} onChange={e => setValue(e.target.value)} iconLeft={<span role="img" aria-label="search">🔍</span>} iconRight={<span role="img" aria-label="clear">❌</span>} size="md" variant="outline" />;
  }
}`,...(N=(O=f.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};const Z=["Default","ErrorState","Disabled","Sizes","Variants","WithEmojis"];export{m as Default,g as Disabled,p as ErrorState,v as Sizes,h as Variants,f as WithEmojis,Z as __namedExportsOrder,X as default};
