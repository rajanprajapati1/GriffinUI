import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as k}from"./index-BlmOqGMO.js";import{d as n}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const R=n.div`
  font-family: 'Inter', sans-serif;
`,C=n.p`
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
`,E=n.div`
  display: flex;
  flex-direction: ${({direction:e})=>e};
  gap: 1rem;
`,S=n.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.5:1};
  font-size: 0.95rem;
  transition: all 0.2s ease;
`,G=n.input.attrs({type:"radio"})`
  display: none;
`,_=n.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${({error:e})=>e?"#ef4444":"#cbd5e1"};
  background-color: ${({checked:e})=>e?"#6366f1":"transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all ease;

  ${S}:hover & {
    border-color: ${({error:e})=>e?"#ef4444":"#6366f1"};
  }

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    display: ${({checked:e})=>e?"block":"none"};
  }
`,z=n.p`
  font-size: 0.75rem;
  margin-top: 0.35rem;
  color: ${({error:e})=>e?"#ef4444":"#6b7280"};
`,c=({label:e,options:p,value:t,onChange:u,direction:$="column",error:m,helperText:b})=>a.jsxs(R,{children:[e&&a.jsx(C,{children:e}),a.jsx(E,{direction:$,children:p.map(r=>a.jsxs(S,{disabled:r.disabled,children:[a.jsx(G,{name:e,value:r.value,checked:t===r.value,onChange:()=>u(r.value),disabled:r.disabled}),a.jsx(_,{checked:t===r.value,error:m}),r.label]},r.value))}),b&&a.jsx(z,{error:m,children:b})]});c.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: string;\r
  disabled?: boolean;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"RadioOption[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:"",defaultValue:{value:"'column'",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""}}};const H=[{label:"Option 1",value:"option1"},{label:"Option 2 (Disabled)",value:"option2",disabled:!0},{label:"Option 3",value:"option3"}],A={title:"Components/ui/RadioGroup",component:c,tags:["autodocs"],argTypes:{label:{control:"text"},direction:{control:{type:"radio"},options:["row","column"]},error:{control:"boolean"},helperText:{control:"text"}}},d={render:e=>{const[p,t]=k.useState(e.value||"");return a.jsx(c,{...e,value:p,onChange:u=>t(u)})}},o={...d,args:{label:"Select an option",options:H,value:"option1",direction:"column",helperText:"Choose one option",error:!1}},s={...d,args:{...o.args,direction:"row"}},i={...d,args:{...o.args,error:!0,helperText:"You must select an option"}},l={...d,args:{label:"Disabled options example",options:[{label:"Enabled Option",value:"enabled"},{label:"Disabled Option",value:"disabled",disabled:!0}],value:"enabled"}};var g,f,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Template,
  args: {
    label: 'Select an option',
    options: optionsDefault,
    value: 'option1',
    direction: 'column',
    helperText: 'Choose one option',
    error: false
  }
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var x,h,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Default.args,
    direction: 'row'
  }
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var T,w,D;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Default.args,
    error: true,
    helperText: 'You must select an option'
  }
}`,...(D=(w=i.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var j,O,q;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Template,
  args: {
    label: 'Disabled options example',
    options: [{
      label: 'Enabled Option',
      value: 'enabled'
    }, {
      label: 'Disabled Option',
      value: 'disabled',
      disabled: true
    }],
    value: 'enabled'
  }
}`,...(q=(O=l.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const N=["Default","RowDirection","ErrorState","DisabledOptions"];export{o as Default,l as DisabledOptions,i as ErrorState,s as RowDirection,N as __namedExportsOrder,A as default};
