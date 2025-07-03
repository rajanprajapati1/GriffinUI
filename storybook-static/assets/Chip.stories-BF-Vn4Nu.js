import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{d as N,l as r}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";const M={default:{filled:r`
      background: #f3f4f6;
      color: #374151;
    `,outlined:r`
      border: 1px solid #d1d5db;
      color: #374151;
    `},primary:{filled:r`
      background: #3b82f6;
      color: white;
    `,outlined:r`
      border: 1px solid #3b82f6;
      color: #3b82f6;
    `},success:{filled:r`
      background: #10b981;
      color: white;
    `,outlined:r`
      border: 1px solid #10b981;
      color: #10b981;
    `},error:{filled:r`
      background: #ef4444;
      color: white;
    `,outlined:r`
      border: 1px solid #ef4444;
      color: #ef4444;
    `},warning:{filled:r`
      background: #f59e0b;
      color: white;
    `,outlined:r`
      border: 1px solid #f59e0b;
      color: #f59e0b;
    `}},$={sm:r`
    font-size: 0.75rem;
    padding: 0.2rem 0.5rem;
  `,md:r`
    font-size: 0.875rem;
    padding: 0.3rem 0.75rem;
  `,lg:r`
    font-size: 1rem;
    padding: 0.4rem 1rem;
  `},H=N.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 999px;
  font-weight: 500;
  cursor: default;
  ${a=>M[a.color][a.variant]}
  ${a=>$[a.size]}
`,B=N.span`
  margin-left: 4px;
  cursor: pointer;
  font-size: 0.9em;

  &:hover {
    opacity: 0.8;
  }
`,u=({label:a,avatar:t,startIcon:E,endIcon:O,onDelete:p,variant:_="filled",color:V="default",size:F="md",className:L})=>e.jsxs(H,{variant:_,color:V,size:F,className:L,children:[t,E,a,O,p&&e.jsx(B,{onClick:p,children:e.jsx("span",{children:"×"})})]});u.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'success' | 'error' | 'warning'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},avatar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const G=e.jsx("img",{src:"https://i.pravatar.cc/24",alt:"avatar",style:{borderRadius:"50%",width:24,height:24}}),J=e.jsx("svg",{width:"16",height:"16",fill:"currentColor",style:{display:"inline-block",verticalAlign:"middle"},xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8 0L6 6H0l5 4-2 6 7-5 7 5-2-6 5-4h-6L8 0z"})}),K=e.jsxs("svg",{width:"16",height:"16",fill:"currentColor",style:{display:"inline-block",verticalAlign:"middle"},xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"8",cy:"8",r:"7",stroke:"currentColor",strokeWidth:"1",fill:"none"}),e.jsx("path",{d:"M6 8l2 2 4-4",stroke:"currentColor",strokeWidth:"1.5",fill:"none"})]}),Y={title:"Components/ui/Chip",component:u,tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"inline-radio",options:["filled","outlined"]},color:{control:"select",options:["default","primary","success","error","warning"]},size:{control:"inline-radio",options:["sm","md","lg"]},onDelete:{action:"delete clicked"}}},l={args:{label:"Default Chip"}},s={args:{label:"Outlined Chip",variant:"outlined"}},o={render:a=>e.jsx(e.Fragment,{children:["default","primary","success","error","warning"].map(t=>e.jsx(u,{...a,color:t},t))}),args:{label:"Colorful"}},n={render:a=>e.jsx(e.Fragment,{children:["sm","md","lg"].map(t=>e.jsx(u,{...a,size:t},t))}),args:{label:"Sized Chip"}},i={args:{label:"Deletable",onDelete:()=>alert("Delete clicked!")}},c={args:{label:"With Avatar",avatar:G}},d={args:{label:"With Icons",startIcon:J,endIcon:K}};var m,g,f;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Default Chip'
  }
}`,...(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,b,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Outlined Chip',
    variant: 'outlined'
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,x,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <>\r
      {['default', 'primary', 'success', 'error', 'warning'].map(color => <Chip key={color} {...args} color={color as any} />)}\r
    </>,
  args: {
    label: 'Colorful'
  }
}`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var C,S,k;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <>\r
      {['sm', 'md', 'lg'].map(size => <Chip key={size} {...args} size={size as any} />)}\r
    </>,
  args: {
    label: 'Sized Chip'
  }
}`,...(k=(S=n.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var z,I,j;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Deletable',
    onDelete: () => alert('Delete clicked!')
  }
}`,...(j=(I=i.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var D,R,W;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'With Avatar',
    avatar: Avatar
  }
}`,...(W=(R=c.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var A,T,q;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'With Icons',
    startIcon: StartIcon,
    endIcon: EndIcon
  }
}`,...(q=(T=d.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const Z=["Default","Outlined","Colors","Sizes","WithDelete","WithAvatar","WithStartAndEndIcons"];export{o as Colors,l as Default,s as Outlined,n as Sizes,c as WithAvatar,i as WithDelete,d as WithStartAndEndIcons,Z as __namedExportsOrder,Y as default};
