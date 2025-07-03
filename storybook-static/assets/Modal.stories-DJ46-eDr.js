import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as q}from"./index-BlmOqGMO.js";import{d as p,m as B}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const _=B`
  from { opacity: 0 }
  to { opacity: 1 }
`,I=B`
  from { transform: scale(0.95); opacity: 0 }
  to { transform: scale(1); opacity: 1 }
`,N=p.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  animation: ${_} 0.3s ease;
  z-index: 999;
`,O=(e=1)=>`0 4px 20px rgba(0, 0, 0, ${.1+Math.min(Math.max(e,0),24)*.02})`,A=p.div`
  position: fixed;
  z-index: 1000;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: ${({centered:e})=>e?"center":"flex-start"};
  padding: 2rem;
  overflow: auto;
`,L=p.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: ${({elevation:e})=>O(e)};
  animation: ${I} 0.25s ease;
  width: ${({fullWidth:e,width:a})=>e?"100%":a||"auto"};
  max-width: ${({maxWidth:e})=>e||"600px"};
  margin-top: 5rem;
`,u=({open:e,onClose:a,children:r,disableBackdropClick:D=!1,disableEscapeKeyDown:m=!1,elevation:S=12,fullWidth:$,width:z,maxWidth:R,centered:F=!0})=>{const K=o=>{!D&&o.target===o.currentTarget&&a()};return q.useEffect(()=>{const o=V=>{!m&&V.key==="Escape"&&a()};return e&&document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[e,m,a]),e?t.jsxs(t.Fragment,{children:[t.jsx(N,{}),t.jsx(A,{centered:F,onClick:K,children:t.jsx(L,{elevation:S,width:z,maxWidth:R,fullWidth:$,children:r})})]}):null};u.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disableBackdropClick:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disableEscapeKeyDown:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},elevation:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"12",computed:!1}},width:{required:!1,tsType:{name:"string"},description:""},maxWidth:{required:!1,tsType:{name:"string"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},centered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Q={title:"Components/ui/Modal",component:u,tags:["autodocs"],argTypes:{elevation:{control:{type:"range",min:0,max:24}},fullWidth:{control:"boolean"},centered:{control:"boolean"},disableBackdropClick:{control:"boolean"},disableEscapeKeyDown:{control:"boolean"},width:{control:"text"},maxWidth:{control:"text"}}},n={render:e=>{const[a,r]=q.useState(!0);return t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(u,{...e,open:a,onClose:()=>r(!1),children:[t.jsx("h2",{style:{marginTop:0},children:"Modal Title"}),t.jsx("p",{children:"This is the modal content. Customize me via props!"}),t.jsx("button",{onClick:()=>r(!1),children:"Close"})]})]})}},s={...n,args:{}},i={...n,args:{elevation:16,centered:!0}},d={...n,args:{fullWidth:!0,maxWidth:"700px"}},c={...n,args:{width:"400px",maxWidth:"500px",elevation:8}},l={...n,args:{disableBackdropClick:!0,disableEscapeKeyDown:!0}};var f,x,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Template,
  args: {}
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,b,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Template,
  args: {
    elevation: 16,
    centered: true
  }
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,k,T;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Template,
  args: {
    fullWidth: true,
    maxWidth: '700px'
  }
}`,...(T=(k=d.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var W,w,C;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...Template,
  args: {
    width: '400px',
    maxWidth: '500px',
    elevation: 8
  }
}`,...(C=(w=c.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var E,j,M;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Template,
  args: {
    disableBackdropClick: true,
    disableEscapeKeyDown: true
  }
}`,...(M=(j=l.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};const U=["Default","CenteredWithElevation","FullWidthWithMaxWidth","CustomSize","DisableBackdropAndEscape"];export{i as CenteredWithElevation,c as CustomSize,s as Default,l as DisableBackdropAndEscape,d as FullWidthWithMaxWidth,U as __namedExportsOrder,Q as default};
