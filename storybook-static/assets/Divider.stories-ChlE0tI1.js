import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{d as l}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";const s=l.div`
  display: flex;
  align-items: center;
  justify-content: ${({orientation:e})=>e==="vertical"?"center":"stretch"};
  margin: ${({variant:e})=>{switch(e){case"inset":return"1rem 1rem 1rem 2.5rem";case"middle":return"1rem 4rem";default:return"1rem 0"}}};
  ${({orientation:e})=>e==="vertical"&&`
    flex-direction: column;
    height: 100px;
  `}
`,o=l.div`
  background-color: #e0e0e0;
  ${({orientation:e})=>e==="vertical"?`
    width: 1px;
    height: 100%;
  `:`
    height: 1px;
    width: 100%;
  `}
`,W=l.span`
  padding: 0 1rem;
  color: #666;
  font-size: 0.875rem;
  white-space: nowrap;
`,g=({orientation:e="horizontal",variant:z="fullWidth",text:n})=>e==="vertical"?t.jsx(s,{orientation:"vertical",children:t.jsx(o,{orientation:"vertical"})}):t.jsxs(s,{orientation:"horizontal",variant:z,children:[t.jsx(o,{orientation:"horizontal"}),n&&t.jsx(W,{children:n}),n&&t.jsx(o,{orientation:"horizontal"})]});g.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'fullWidth' | 'inset' | 'middle'",elements:[{name:"literal",value:"'fullWidth'"},{name:"literal",value:"'inset'"},{name:"literal",value:"'middle'"}]},description:"",defaultValue:{value:"'fullWidth'",computed:!1}},text:{required:!1,tsType:{name:"string"},description:""}}};const D={title:"Components/ui/Divider",component:g,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},variant:{control:"select",options:["fullWidth","inset","middle"]},text:{control:"text"}}},r={args:{orientation:"horizontal",variant:"fullWidth"}},i={args:{orientation:"vertical"}},a={args:{text:"OR",variant:"middle"}};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'fullWidth'
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  }
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var v,f,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    text: 'OR',
    variant: 'middle'
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const V=["Horizontal","Vertical","WithText"];export{r as Horizontal,i as Vertical,a as WithText,V as __namedExportsOrder,D as default};
