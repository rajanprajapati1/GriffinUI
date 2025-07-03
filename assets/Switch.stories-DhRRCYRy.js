import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{r as h}from"./index-BlmOqGMO.js";import{d as m}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const n={sm:{width:32,height:18,circle:14},md:{width:44,height:24,circle:20},lg:{width:56,height:32,circle:28}},y=m.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`,v=m.div`
  width: ${({size:e})=>n[e].width}px;
  height: ${({size:e})=>n[e].height}px;
  background-color: ${({checked:e})=>e?"#4f46e5":"#d1d5db"};
  border-radius: 9999px;
  position: relative;
  transition: background-color 0.2s;
  opacity: ${({disabled:e})=>e?.6:1};
`,j=m.div`
  width: ${({size:e})=>n[e].circle}px;
  height: ${({size:e})=>n[e].circle}px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(${({checked:e,size:t})=>e?n[t].width-n[t].circle-4:4}px);
  transition: transform 0.2s;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
`,z=m.span`
  font-size: 0.875rem;
  color: #374151;
`,r=({checked:e,onChange:t,disabled:a,size:c="md",label:d})=>s.jsxs(y,{children:[s.jsx(v,{checked:e,size:c,disabled:a,onClick:()=>!a&&t(!e),children:s.jsx(j,{checked:e,size:c})}),d&&s.jsx(z,{children:d})]});r.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""}}};const q={title:"Components/ui/Switch",component:r,tags:["autodocs"],argTypes:{size:{control:"radio",options:["sm","md","lg"]},checked:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"}}},o={args:{checked:!1,size:"md",label:"Enable feature",disabled:!1},render:e=>{const[t,a]=h.useState(e.checked);return s.jsx(r,{...e,checked:t,onChange:c=>a(c)})}},i={render:()=>{const[e,t]=h.useState(!1),[a,c]=h.useState(!0),[d,w]=h.useState(!1);return s.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},children:[s.jsx(r,{checked:e,onChange:t,size:"sm",label:"Small"}),s.jsx(r,{checked:a,onChange:c,size:"md",label:"Medium"}),s.jsx(r,{checked:d,onChange:w,size:"lg",label:"Large"})]})}},l={args:{checked:!0,disabled:!0,label:"Disabled switch"},render:e=>s.jsx(r,{...e,onChange:()=>{}})};var u,p,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    checked: false,
    size: 'md',
    label: 'Enable feature',
    disabled: false
  },
  render: args => {
    const [checked, setChecked] = useState(args.checked);
    return <Switch {...args} checked={checked} onChange={val => setChecked(val)} />;
  }
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var k,b,C;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [smChecked, setSmChecked] = useState(false);
    const [mdChecked, setMdChecked] = useState(true);
    const [lgChecked, setLgChecked] = useState(false);
    return <div style={{
      display: 'flex',
      gap: '2rem',
      alignItems: 'center'
    }}>\r
        <Switch checked={smChecked} onChange={setSmChecked} size="sm" label="Small" />\r
        <Switch checked={mdChecked} onChange={setMdChecked} size="md" label="Medium" />\r
        <Switch checked={lgChecked} onChange={setLgChecked} size="lg" label="Large" />\r
      </div>;
  }
}`,...(C=(b=i.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var f,x,S;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true,
    label: 'Disabled switch'
  },
  render: args => <Switch {...args} onChange={() => {}} />
}`,...(S=(x=l.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const E=["Default","Sizes","Disabled"];export{o as Default,l as Disabled,i as Sizes,E as __namedExportsOrder,q as default};
