import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{r as u,R as P}from"./index-BlmOqGMO.js";import{d as k}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const z=k.div`
  position: fixed;
  inset: 0;
  z-index: 998;
  background: transparent;
`,B=k.div`
  position: absolute;
  top: ${e=>e.top}px;
  left: ${e=>e.left}px;
  z-index: 999;
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, ${e=>e.elevation*.02});
  border-radius: 8px;
  padding: 0.75rem 1rem;
  min-width: 200px;
`,h=({open:e,onClose:a,anchorRef:n,placement:i="bottom",children:v,offset:l=8,withArrow:O=!1,elevation:C=12})=>{const m=u.useRef(null),[b,q]=P.useState({top:0,left:0});return u.useEffect(()=>{const r=()=>{const c=n.current,x=m.current;if(c&&x){const t=c.getBoundingClientRect(),s=x.getBoundingClientRect();let d=0,p=0;switch(i){case"top":d=t.top-s.height-l,p=t.left+(t.width-s.width)/2;break;case"bottom":d=t.bottom+l,p=t.left+(t.width-s.width)/2;break;case"left":d=t.top+(t.height-s.height)/2,p=t.left-s.width-l;break;case"right":d=t.top+(t.height-s.height)/2,p=t.right+l;break}q({top:d,left:p})}};return e&&(r(),window.addEventListener("resize",r),window.addEventListener("scroll",r)),()=>{window.removeEventListener("resize",r),window.removeEventListener("scroll",r)}},[e,n,i,l]),u.useEffect(()=>{const r=c=>{m.current&&!m.current.contains(c.target)&&n.current&&!n.current.contains(c.target)&&a()};return e&&document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[e,a,n]),e?o.jsxs(o.Fragment,{children:[o.jsx(z,{onClick:a}),o.jsx(B,{ref:m,top:b.top,left:b.left,elevation:C,children:v})]}):null};h.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},anchorRef:{required:!0,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLElement>",elements:[{name:"HTMLElement"}]},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'bottom'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},withArrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},elevation:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"12",computed:!1}}}};const $={title:"Components/ui/Popover",component:h,tags:["autodocs"],argTypes:{placement:{control:"select",options:["top","bottom","left","right"]},offset:{control:{type:"number",min:0,max:50,step:2}},elevation:{control:{type:"range",min:0,max:24}}}},L={render:e=>{const a=u.useRef(null),[n,i]=u.useState(!0);return o.jsxs("div",{style:{padding:"100px"},children:[o.jsx("button",{ref:a,onClick:()=>i(v=>!v),children:"Toggle Popover"}),o.jsx(h,{...e,open:n,onClose:()=>i(!1),anchorRef:a,children:o.jsxs("div",{style:{padding:"0.5rem 0"},children:[o.jsx("strong",{children:"Popover Content"}),o.jsxs("p",{style:{margin:0,fontSize:"0.875rem"},children:["Positioned at ",o.jsx("em",{children:e.placement})]})]})})]})}},f={...L,args:{placement:"bottom",offset:8,elevation:12}},g={...L,args:{placement:"top",offset:10,elevation:16}};var w,R,T;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Template,
  args: {
    placement: 'bottom',
    offset: 8,
    elevation: 12
  }
}`,...(T=(R=f.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var y,j,E;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Template,
  args: {
    placement: 'top',
    offset: 10,
    elevation: 16
  }
}`,...(E=(j=g.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};const A=["Default","TopLeftRightBottom"];export{f as Default,g as TopLeftRightBottom,A as __namedExportsOrder,$ as default};
