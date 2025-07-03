import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{l as T,d as w}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";const i={xs:"24px",sm:"32px",md:"40px",lg:"56px",xl:"72px"},I={circle:"50%",rounded:"12px",square:"0"},W=w.div`
  width: ${e=>i[e.size]};
  height: ${e=>i[e.size]};
  border-radius: ${e=>I[e.variant]};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e5e7eb;
  font-weight: 600;
  color: #374151;
  font-size: 1rem;
  user-select: none;

  ${e=>e.variant==="circle"&&T`
      font-size: 0.875rem;
    `}
`,N=w.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,q=({src:e,alt:z,size:y="md",variant:R="circle",children:S,icon:n,shadow:j,border:A})=>o.jsx(W,{size:y,variant:R,style:{boxShadow:j?"0 2px 6px rgba(0, 0, 0, 0.1)":void 0,border:A?"2px solid #d1d5db":void 0},children:e?o.jsx(N,{src:e,alt:z}):n||S});q.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'circle' | 'rounded' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'square'"}]},description:"",defaultValue:{value:"'circle'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},shadow:{required:!1,tsType:{name:"boolean"},description:""},border:{required:!1,tsType:{name:"boolean"},description:""}}};const E={title:"Components/ui/Avatar",component:q,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},variant:{control:"select",options:["circle","rounded","square"]},src:{control:"text"},alt:{control:"text"},shadow:{control:"boolean"},border:{control:"boolean"},icon:{control:!1},children:{control:"text"}}},r={args:{size:"md",variant:"circle",children:"AB"}},a={args:{size:"lg",variant:"circle",src:"https://randomuser.me/api/portraits/women/44.jpg",alt:"User avatar"}},t={args:{size:"xl",variant:"rounded",shadow:!0,border:!0,children:"JS"}},s={args:{size:"sm",variant:"square",icon:o.jsx("span",{role:"img","aria-label":"robot",children:"🤖"})}};var l,c,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'circle',
    children: 'AB'
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    variant: 'circle',
    src: 'https://randomuser.me/api/portraits/women/44.jpg',
    alt: 'User avatar'
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,v,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'xl',
    variant: 'rounded',
    shadow: true,
    border: true,
    children: 'JS'
  }
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var x,f,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    variant: 'square',
    icon: <span role="img" aria-label="robot">🤖</span>
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const J=["Default","WithImage","RoundedWithShadowAndBorder","SquareWithIcon"];export{r as Default,t as RoundedWithShadowAndBorder,s as SquareWithIcon,a as WithImage,J as __namedExportsOrder,E as default};
