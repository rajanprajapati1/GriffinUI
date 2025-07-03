import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as W}from"./index-BlmOqGMO.js";import{d as a,m as F}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const R=F`
  from { opacity: 0 }
  to { opacity: 1 }
`,S=F`
  from { transform: scale(0.9); opacity: 0 }
  to { transform: scale(1); opacity: 1 }
`,z=a.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  animation: ${R} 0.3s ease;
  z-index: 999;
`,I=a.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,_=(n=12)=>`0 4px 20px rgba(0, 0, 0, ${.1+Math.min(Math.max(n,0),24)*.02})`,N=a.div`
  background: #fff;
  border-radius: 12px;
  width: ${({fullWidth:n})=>n?"100%":"auto"};
  max-width: ${({maxWidth:n})=>n||"500px"};
  padding: 1.5rem;
  box-shadow: ${({elevation:n})=>_(n)};
  animation: ${S} 0.25s ease;
`,p=a.div`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`,u=a.div`
  font-size: 0.95rem;
  color: #444;
  margin-bottom: 1.5rem;
`,g=a.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`,f=({open:n,onClose:t,children:s,disableBackdropClick:i=!1,disableEscapeKeyDown:h=!1,fullWidth:K,maxWidth:A,elevation:q=12})=>{const O=r=>{!i&&r.target===r.currentTarget&&t()};return W.useEffect(()=>{const r=$=>{!h&&$.key==="Escape"&&t()};return n&&document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[n,t,h]),n?e.jsxs(e.Fragment,{children:[e.jsx(z,{}),e.jsx(I,{onClick:O,children:e.jsx(N,{fullWidth:K,maxWidth:A,elevation:q,children:s})})]}):null};f.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disableBackdropClick:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disableEscapeKeyDown:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},maxWidth:{required:!1,tsType:{name:"string"},description:""},elevation:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"12",computed:!1}}}};const H={title:"Components/ui/Dialog",component:f,tags:["autodocs"],argTypes:{open:{control:"boolean"},disableBackdropClick:{control:"boolean"},disableEscapeKeyDown:{control:"boolean"},fullWidth:{control:"boolean"},maxWidth:{control:"text"},elevation:{control:{type:"range",min:0,max:24,step:1}},onClose:{action:"closed"}}},m=n=>{const[t,s]=W.useState(n.open??!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>s(!0),children:"Open Dialog"}),e.jsx(f,{...n,open:t,onClose:()=>{var i;s(!1),(i=n.onClose)==null||i.call(n)},children:n.children})]})},o={render:n=>e.jsx(m,{...n,children:e.jsxs(e.Fragment,{children:[e.jsx(p,{children:"Dialog Title"}),e.jsx(u,{children:"This is some dialog content."}),e.jsxs(g,{children:[e.jsx("button",{onClick:n.onClose,children:"Cancel"}),e.jsx("button",{onClick:n.onClose,children:"OK"})]})]})}),args:{open:!1,disableBackdropClick:!1,disableEscapeKeyDown:!1,fullWidth:!1,maxWidth:"500px",elevation:12}},l={render:n=>e.jsx(m,{...n,children:e.jsxs(e.Fragment,{children:[e.jsx(p,{children:"Full Width Dialog"}),e.jsx(u,{children:"Dialog stretches full width."}),e.jsx(g,{children:e.jsx("button",{onClick:n.onClose,children:"Close"})})]})}),args:{...o.args,fullWidth:!0}},c={render:n=>e.jsx(m,{...n,children:e.jsxs(e.Fragment,{children:[e.jsx(p,{children:"Can't Close by Clicking Backdrop"}),e.jsx(u,{children:"Backdrop click is disabled."}),e.jsx(g,{children:e.jsx("button",{onClick:n.onClose,children:"Close"})})]})}),args:{...o.args,disableBackdropClick:!0}},d={render:n=>e.jsx(m,{...n,children:e.jsxs(e.Fragment,{children:[e.jsx(p,{children:"Can't Close with Escape"}),e.jsx(u,{children:"Escape key closing is disabled."}),e.jsx(g,{children:e.jsx("button",{onClick:n.onClose,children:"Close"})})]})}),args:{...o.args,disableEscapeKeyDown:!0}};var C,x,D;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <ControlledDialog {...args} children={<>\r
        <DialogTitle>Dialog Title</DialogTitle>\r
        <DialogContent>This is some dialog content.</DialogContent>\r
        <DialogActions>\r
          <button onClick={args.onClose}>Cancel</button>\r
          <button onClick={args.onClose}>OK</button>\r
        </DialogActions>\r
      </>} />,
  args: {
    open: false,
    disableBackdropClick: false,
    disableEscapeKeyDown: false,
    fullWidth: false,
    maxWidth: '500px',
    elevation: 12
  }
}`,...(D=(x=o.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var b,k,j;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <ControlledDialog {...args} children={<>\r
        <DialogTitle>Full Width Dialog</DialogTitle>\r
        <DialogContent>Dialog stretches full width.</DialogContent>\r
        <DialogActions>\r
          <button onClick={args.onClose}>Close</button>\r
        </DialogActions>\r
      </>} />,
  args: {
    ...Default.args,
    fullWidth: true
  }
}`,...(j=(k=l.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var y,T,v;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <ControlledDialog {...args} children={<>\r
        <DialogTitle>Can't Close by Clicking Backdrop</DialogTitle>\r
        <DialogContent>Backdrop click is disabled.</DialogContent>\r
        <DialogActions>\r
          <button onClick={args.onClose}>Close</button>\r
        </DialogActions>\r
      </>} />,
  args: {
    ...Default.args,
    disableBackdropClick: true
  }
}`,...(v=(T=c.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var w,E,B;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <ControlledDialog {...args} children={<>\r
        <DialogTitle>Can't Close with Escape</DialogTitle>\r
        <DialogContent>Escape key closing is disabled.</DialogContent>\r
        <DialogActions>\r
          <button onClick={args.onClose}>Close</button>\r
        </DialogActions>\r
      </>} />,
  args: {
    ...Default.args,
    disableEscapeKeyDown: true
  }
}`,...(B=(E=d.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};const J=["Default","FullWidth","DisableBackdropClick","DisableEscapeKeyDown"];export{o as Default,c as DisableBackdropClick,d as DisableEscapeKeyDown,l as FullWidth,J as __namedExportsOrder,H as default};
