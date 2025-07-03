import{j as w}from"./jsx-runtime-Cf8x2fCZ.js";import{d as b,l as r}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";const h=e=>{switch(e){case"success":return r`
        background-color: #bbf7d0;
        color: #065f46;
      `;case"warning":return r`
        background-color: #fef08a;
        color: #92400e;
      `;case"error":return r`
        background-color: #fecaca;
        color: #991b1b;
      `;default:return r`
        background-color: #e5e7eb;
        color: #374151;
      `}},S=e=>{switch(e){case"sm":return r`
        font-size: 0.75rem;
        padding: 0.125rem 0.5rem;
      `;case"lg":return r`
        font-size: 1rem;
        padding: 0.5rem 1rem;
      `;default:return r`
        font-size: 0.875rem;
        padding: 0.25rem 0.75rem;
      `}},v=b.span`
  display: inline-block;
  border-radius: 9999px;
  font-weight: 600;
  ${e=>h(e.color)}
  ${e=>S(e.size)}
`,p=({children:e,color:f="default",size:z="md"})=>w.jsx(v,{color:f,size:z,children:e});p.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},color:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const R={title:"Components/ui/Badge",component:p,tags:["autodocs"],argTypes:{color:{control:"select",options:["default","success","warning","error"]},size:{control:"select",options:["sm","md","lg"]}}},a={args:{children:"Default Badge",color:"default",size:"md"}},s={args:{children:"Success",color:"success",size:"md"}},o={args:{children:"Warning",color:"warning",size:"lg"}};var n,t,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: 'Default Badge',
    color: 'default',
    size: 'md'
  }
}`,...(c=(t=a.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var l,d,i;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Success',
    color: 'success',
    size: 'md'
  }
}`,...(i=(d=s.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var u,m,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Warning',
    color: 'warning',
    size: 'lg'
  }
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const D=["Default","Success","LargeWarning"];export{a as Default,o as LargeWarning,s as Success,D as __namedExportsOrder,R as default};
