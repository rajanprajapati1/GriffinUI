import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as m}from"./index-BlmOqGMO.js";import{d as i}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const B=i.img`
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height||"auto"};
  object-fit: cover;
  border-radius: ${e=>e.borderRadius||"8px"};
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`,T=i.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`,q=i.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
`,F=i.button`
  position: absolute;
  top: 24px;
  right: 32px;
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  z-index: 10000;

  &:hover {
    opacity: 0.8;
  }
`,R=({src:e,alt:p="",width:S,height:E,borderRadius:z})=>{const[d,r]=m.useState(!1),u=l=>{l.key==="Escape"&&r(!1)};return m.useEffect(()=>(d?document.addEventListener("keydown",u):document.removeEventListener("keydown",u),()=>{document.removeEventListener("keydown",u)}),[d]),t.jsxs(t.Fragment,{children:[t.jsx(B,{src:e,alt:p,width:S,height:E,borderRadius:z,onClick:()=>r(!0)}),d&&t.jsxs(T,{onClick:()=>r(!1),children:[t.jsx(F,{onClick:()=>r(!1),children:"×"}),t.jsx(q,{src:e,alt:p,onClick:l=>l.stopPropagation()})]})]})};R.__docgenInfo={description:"",methods:[],displayName:"ImageViewer",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},width:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},borderRadius:{required:!1,tsType:{name:"string"},description:""}}};const O={title:"Components/ui/ImageViewer",component:R,tags:["autodocs"],argTypes:{src:{control:"text"},alt:{control:"text"},width:{control:"text"},height:{control:"text"},borderRadius:{control:"text"}}},c="https://picsum.photos/id/1011/600/400",s={args:{src:c,alt:"Beautiful landscape"}},o={args:{src:c,alt:"Custom sized image",width:"300px",height:"200px"}},a={args:{src:c,alt:"Rounded corners image",width:"250px",height:"180px",borderRadius:"16px"}},n={args:{src:c,alt:"Click to view fullscreen",width:"100%",height:"auto"}};var g,h,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    src: defaultImage,
    alt: 'Beautiful landscape'
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,w,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    src: defaultImage,
    alt: 'Custom sized image',
    width: '300px',
    height: '200px'
  }
}`,...(b=(w=o.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var y,v,k;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    src: defaultImage,
    alt: 'Rounded corners image',
    width: '250px',
    height: '180px',
    borderRadius: '16px'
  }
}`,...(k=(v=a.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var C,j,I;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    src: defaultImage,
    alt: 'Click to view fullscreen',
    width: '100%',
    height: 'auto'
  }
}`,...(I=(j=n.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const $=["Default","CustomSize","WithBorderRadius","FullScreenBehavior"];export{o as CustomSize,s as Default,n as FullScreenBehavior,a as WithBorderRadius,$ as __namedExportsOrder,O as default};
