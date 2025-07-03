import{j as x}from"./jsx-runtime-Cf8x2fCZ.js";import{d as h,m as b}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";const f=b`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`,k=h.div`
  display: inline-block;
  background-color: #e5e7eb;
  border-radius: ${({radius:e,rounded:g})=>g?"9999px":typeof e=="number"?`${e}px`:e||"4px"};
  width: ${({width:e="100%"})=>typeof e=="number"?`${e}px`:e};
  height: ${({height:e="1rem"})=>typeof e=="number"?`${e}px`:e};
  background-image: linear-gradient(
    90deg,
    #e5e7eb 0px,
    #f3f4f6 40px,
    #e5e7eb 80px
  );
  background-size: 1000px 100%;
  animation: ${f} 1.5s infinite linear;
`,l=e=>x.jsx(k,{...e});l.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},radius:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},rounded:{required:!1,tsType:{name:"boolean"},description:""}}};const T={title:"Components/ui/Skeleton",component:l,tags:["autodocs"],argTypes:{width:{control:"text"},height:{control:"text"},rounded:{control:"boolean"}}},r={args:{width:"100px",height:"20px",rounded:!0}},n={args:{width:"50px",height:"50px",rounded:!0}},t={args:{width:"200px",height:"100px",rounded:!1}};var o,s,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    width: '100px',
    height: '20px',
    rounded: true
  }
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var i,p,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    width: '50px',
    height: '50px',
    rounded: true
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    width: '200px',
    height: '100px',
    rounded: false
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const q=["Default","Circle","Rectangular"];export{n as Circle,r as Default,t as Rectangular,q as __namedExportsOrder,T as default};
