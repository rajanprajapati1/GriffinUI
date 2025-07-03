import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{r as f}from"./index-BlmOqGMO.js";import{d as M}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const k=M.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
`,W=M.span`
  display: inline-flex;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  svg {
    width: 100%;
    height: 100%;
    fill: ${({filled:e})=>e?"#facc15":"#e5e7eb"};
    transition: fill 0.2s ease;
  }
`,h=n.jsx("svg",{viewBox:"0 0 24 24",children:n.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})}),v=({value:e,defaultValue:c=0,max:m=5,readOnly:t=!1,onChange:a,icon:s=h,emptyIcon:N=h,size:_=24})=>{const[x,y]=f.useState(null),[E,B]=f.useState(c),g=e!==void 0,D=()=>g?e:E,$=p=>{t||(g||B(p+1),a==null||a(p+1))};return n.jsx(k,{children:Array.from({length:m}).map((p,r)=>{const V=x!==null?r<x+1:r<D();return n.jsx(W,{filled:V,size:_,onClick:()=>$(r),onMouseEnter:()=>!t&&y(r),onMouseLeave:()=>y(null),children:V?s:N},r)})})};v.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{value:{required:!1,tsType:{name:"number"},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:`<svg viewBox="0 0 24 24">\r
  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />\r
</svg>`,computed:!1}},emptyIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:`<svg viewBox="0 0 24 24">\r
  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />\r
</svg>`,computed:!1}},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"24",computed:!1}}}};const J={title:"Components/ui/Rating",component:v,tags:["autodocs"],argTypes:{value:{control:{type:"number",min:0,max:10,step:1}},defaultValue:{control:{type:"number",min:0,max:10,step:1}},max:{control:{type:"number",min:1,max:10,step:1}},readOnly:{control:"boolean"},size:{control:{type:"number",min:12,max:48,step:1}}}},d={render:e=>{const[c,m]=f.useState(e.value??e.defaultValue??0),t=e.value!==void 0;return n.jsx(v,{...e,value:t?e.value:c,onChange:a=>{var s;t||m(a),(s=e.onChange)==null||s.call(e,a)}})}},l={...d,args:{defaultValue:3,max:5,size:24,readOnly:!1}},o={...d,args:{value:4,max:5,size:32,readOnly:!1}},u={...d,args:{value:2,max:5,readOnly:!0,size:24}},i={...d,args:{defaultValue:3,max:7,size:48}};var z,L,R;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...Template,
  args: {
    defaultValue: 3,
    max: 5,
    size: 24,
    readOnly: false
  }
}`,...(R=(L=l.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var T,b,O;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Template,
  args: {
    value: 4,
    max: 5,
    size: 32,
    readOnly: false
  }
}`,...(O=(b=o.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};var S,q,w;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Template,
  args: {
    value: 2,
    max: 5,
    readOnly: true,
    size: 24
  }
}`,...(w=(q=u.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var j,C,I;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Template,
  args: {
    defaultValue: 3,
    max: 7,
    size: 48
  }
}`,...(I=(C=i.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const K=["Default","Controlled","ReadOnly","LargeSize"];export{o as Controlled,l as Default,i as LargeSize,u as ReadOnly,K as __namedExportsOrder,J as default};
