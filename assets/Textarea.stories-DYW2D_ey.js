import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as l}from"./index-BlmOqGMO.js";import{d as x,l as i}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const W={sm:i`
    font-size: 0.8rem;
    padding: 0.4rem 0.6rem;
  `,md:i`
    font-size: 1rem;
    padding: 0.6rem 0.75rem;
  `,lg:i`
    font-size: 1.125rem;
    padding: 0.75rem 1rem;
  `},_={outline:i`
    border: 1px solid #d1d5db;
    background-color: white;
  `,filled:i`
    background-color: #f3f4f6;
    border: 1px solid transparent;
  `,unstyled:i`
    border: none;
    background: none;
    padding: 0;
  `},I=x.label`
  display: block;
  font-weight: 600;
  margin-bottom: 4px;
`,N=x.textarea`
  width: 100%;
  border-radius: 8px;
  outline: none;
  resize: vertical;
  ${e=>W[e.size]}
  ${e=>_[e.variant]}
  ${e=>e.error&&i`
      border-color: #dc2626 !important;
    `}

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,B=x.p`
  font-size: 0.75rem;
  margin-top: 4px;
  color: ${({error:e})=>e?"#dc2626":"#6b7280"};
`,s=({label:e,value:n,onChange:r,placeholder:o,helperText:d,error:u=!1,disabled:a=!1,size:F="md",variant:U="outline",autoResize:h=!1,rows:$=4,ref:k})=>t.jsxs("div",{children:[e&&t.jsx(I,{children:e}),t.jsx(N,{rows:h?1:$,value:n,onChange:r,placeholder:o,size:F,variant:U,error:u,disabled:a,style:h?{resize:"none",overflow:"hidden"}:void 0,ref:k}),d&&t.jsx(B,{error:u,children:d})]});s.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{label:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"e"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'outline' | 'filled' | 'unstyled'",elements:[{name:"literal",value:"'outline'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'unstyled'"}]},description:"",defaultValue:{value:"'outline'",computed:!1}},autoResize:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},rows:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},ref:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},description:""}}};const Q={title:"Components/ui/Textarea",component:s,tags:["autodocs"],argTypes:{label:{control:"text"},value:{control:"text"},placeholder:{control:"text"},helperText:{control:"text"},error:{control:"boolean"},disabled:{control:"boolean"},size:{control:"radio",options:["sm","md","lg"]},variant:{control:"select",options:["outline","filled","unstyled"]},autoResize:{control:"boolean"},rows:{control:{type:"number",min:1,max:20}}}},c={args:{label:"Description",placeholder:"Type something...",size:"md",variant:"outline",rows:4,autoResize:!1}},m={args:{label:"Description",placeholder:"Type something...",error:!0,helperText:"This field is required.",size:"md",variant:"outline",rows:4}},p={args:{label:"Description",value:"Disabled textarea",disabled:!0,size:"md",variant:"outline",rows:4}},g={render:()=>{const[e,n]=l.useState(""),[r,o]=l.useState(""),[d,u]=l.useState("");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:400},children:[t.jsx(s,{label:"Small",placeholder:"Small size",size:"sm",value:e,onChange:a=>n(a.target.value),rows:3}),t.jsx(s,{label:"Medium",placeholder:"Medium size",size:"md",value:r,onChange:a=>o(a.target.value),rows:4}),t.jsx(s,{label:"Large",placeholder:"Large size",size:"lg",value:d,onChange:a=>u(a.target.value),rows:5})]})}},f={render:()=>{const[e,n]=l.useState(""),[r,o]=l.useState(""),[d,u]=l.useState("");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:400},children:[t.jsx(s,{label:"Outline Variant",variant:"outline",placeholder:"Outline style",value:e,onChange:a=>n(a.target.value),rows:4}),t.jsx(s,{label:"Filled Variant",variant:"filled",placeholder:"Filled style",value:r,onChange:a=>o(a.target.value),rows:4}),t.jsx(s,{label:"Unstyled Variant",variant:"unstyled",placeholder:"Unstyled style",value:d,onChange:a=>u(a.target.value),rows:4})]})}},v={render:()=>{const[e,n]=l.useState(""),r=l.useRef(null);return l.useEffect(()=>{r.current&&(r.current.style.height="auto",r.current.style.height=`${r.current.scrollHeight}px`)},[e]),t.jsx(s,{label:"Auto-resizing Textarea",placeholder:"Start typing...",value:e,onChange:o=>n(o.target.value),autoResize:!0,rows:1,ref:r})}};var y,b,V;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Type something...',
    size: 'md',
    variant: 'outline',
    rows: 4,
    autoResize: false
  }
}`,...(V=(b=c.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};var T,z,S;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Type something...',
    error: true,
    helperText: 'This field is required.',
    size: 'md',
    variant: 'outline',
    rows: 4
  }
}`,...(S=(z=m.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var w,R,C;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    value: 'Disabled textarea',
    disabled: true,
    size: 'md',
    variant: 'outline',
    rows: 4
  }
}`,...(C=(R=p.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var j,D,E;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
        <Textarea label="Small" placeholder="Small size" size="sm" value={smVal} onChange={e => setSmVal(e.target.value)} rows={3} />\r
        <Textarea label="Medium" placeholder="Medium size" size="md" value={mdVal} onChange={e => setMdVal(e.target.value)} rows={4} />\r
        <Textarea label="Large" placeholder="Large size" size="lg" value={lgVal} onChange={e => setLgVal(e.target.value)} rows={5} />\r
      </div>;
  }
}`,...(E=(D=g.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var q,L,M;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
        <Textarea label="Outline Variant" variant="outline" placeholder="Outline style" value={outlineVal} onChange={e => setOutlineVal(e.target.value)} rows={4} />\r
        <Textarea label="Filled Variant" variant="filled" placeholder="Filled style" value={filledVal} onChange={e => setFilledVal(e.target.value)} rows={4} />\r
        <Textarea label="Unstyled Variant" variant="unstyled" placeholder="Unstyled style" value={unstyledVal} onChange={e => setUnstyledVal(e.target.value)} rows={4} />\r
      </div>;
  }
}`,...(M=(L=f.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var A,O,H;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = \`\${textareaRef.current.scrollHeight}px\`;
      }
    }, [value]);
    return <Textarea label="Auto-resizing Textarea" placeholder="Start typing..." value={value} onChange={e => setValue(e.target.value)} autoResize={true} rows={1} ref={textareaRef} />;
  }
}`,...(H=(O=v.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};const X=["Default","ErrorState","Disabled","Sizes","Variants","AutoResize"];export{v as AutoResize,c as Default,p as Disabled,m as ErrorState,g as Sizes,f as Variants,X as __namedExportsOrder,Q as default};
