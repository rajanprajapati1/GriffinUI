import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as $}from"./index-BlmOqGMO.js";import{d as p,l as a,m as i}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const R=i`
  from { opacity: 0 }
  to { opacity: 1 }
`,S={left:i`from { transform: translateX(-100%); } to { transform: translateX(0); }`,right:i`from { transform: translateX(100%); } to { transform: translateX(0); }`,top:i`from { transform: translateY(-100%); } to { transform: translateY(0); }`,bottom:i`from { transform: translateY(100%); } to { transform: translateY(0); }`},B=p.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  animation: ${R} 0.3s ease;
  z-index: 998;
`,L=p.div`
  position: fixed;
  z-index: 999;
  ${e=>e.anchor==="left"&&a`
      top: 0;
      left: 0;
      height: 100%;
    `}
  ${e=>e.anchor==="right"&&a`
      top: 0;
      right: 0;
      height: 100%;
    `}
  ${e=>e.anchor==="top"&&a`
      top: 0;
      left: 0;
      width: 100%;
    `}
  ${e=>e.anchor==="bottom"&&a`
      bottom: 0;
      left: 0;
      width: 100%;
    `}
`,O=(e=12)=>`0 4px 20px rgba(0, 0, 0, ${.1+Math.min(Math.max(e,0),24)*.02})`,X=p.div`
  background: #fff;
  box-shadow: ${({elevation:e})=>O(e)};
  animation: ${({anchor:e})=>S[e]} 0.3s ease forwards;
  ${({anchor:e,width:t,height:o})=>e==="left"||e==="right"?a`
          width: ${t||"300px"};
          height: 100%;
        `:a`
          height: ${o||"300px"};
          width: 100%;
        `}
  display: flex;
  flex-direction: column;
  position: relative;
`,Y=p.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
`,m=({open:e,onClose:t,children:o,anchor:s="right",width:k,height:q,showCloseIcon:E=!0,elevation:A=12})=>($.useEffect(()=>{const u=N=>{N.key==="Escape"&&t()};return e&&document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[e,t]),e?r.jsxs(r.Fragment,{children:[r.jsx(B,{onClick:t}),r.jsx(L,{anchor:s,children:r.jsxs(X,{anchor:s,width:k,height:q,elevation:A,children:[E&&r.jsx(Y,{onClick:t,children:"×"}),o]})})]}):null);m.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},anchor:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'top' | 'bottom'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},width:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},showCloseIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},elevation:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"12",computed:!1}}}};const M={title:"Components/ui/Drawer",component:m,tags:["autodocs"],argTypes:{open:{control:"boolean"},anchor:{control:"select",options:["left","right","top","bottom"]},width:{control:"text"},height:{control:"text"},showCloseIcon:{control:"boolean"},elevation:{control:{type:"range",min:0,max:24,step:1}},onClose:{action:"closed"}}},h=e=>{const[t,o]=$.useState(e.open??!1);return r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>o(!0),children:"Open Drawer"}),r.jsx(m,{...e,open:t,onClose:()=>{var s;o(!1),(s=e.onClose)==null||s.call(e)},children:e.children})]})},n={render:e=>r.jsx(h,{...e,children:r.jsx("div",{style:{padding:20},children:"This is the drawer content."})}),args:{open:!1,anchor:"right",width:"300px",height:"300px",showCloseIcon:!0,elevation:12}},l={render:e=>r.jsx(h,{...e,children:r.jsx("div",{style:{padding:20},children:"Drawer anchored left"})}),args:{...n.args,anchor:"left"}},d={render:e=>r.jsx(h,{...e,children:r.jsx("div",{style:{padding:20},children:"Drawer anchored top"})}),args:{...n.args,anchor:"top",height:"200px"}},c={render:e=>r.jsx(h,{...e,children:r.jsx("div",{style:{padding:20},children:"Drawer anchored bottom, no close icon"})}),args:{...n.args,anchor:"bottom",height:"250px",showCloseIcon:!1}};var f,g,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <ControlledDrawer {...args} children={<div style={{
    padding: 20
  }}>This is the drawer content.</div>} />,
  args: {
    open: false,
    anchor: 'right',
    width: '300px',
    height: '300px',
    showCloseIcon: true,
    elevation: 12
  }
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var w,v,b;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <ControlledDrawer {...args} children={<div style={{
    padding: 20
  }}>Drawer anchored left</div>} />,
  args: {
    ...Default.args,
    anchor: 'left'
  }
}`,...(b=(v=l.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var y,D,C;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <ControlledDrawer {...args} children={<div style={{
    padding: 20
  }}>Drawer anchored top</div>} />,
  args: {
    ...Default.args,
    anchor: 'top',
    height: '200px'
  }
}`,...(C=(D=d.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var j,T,I;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <ControlledDrawer {...args} children={<div style={{
    padding: 20
  }}>Drawer anchored bottom, no close icon</div>} />,
  args: {
    ...Default.args,
    anchor: 'bottom',
    height: '250px',
    showCloseIcon: false
  }
}`,...(I=(T=c.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};const K=["Default","LeftAnchor","TopAnchor","BottomAnchorNoCloseIcon"];export{c as BottomAnchorNoCloseIcon,n as Default,l as LeftAnchor,d as TopAnchor,K as __namedExportsOrder,M as default};
