import{j as g}from"./jsx-runtime-Cf8x2fCZ.js";import{d as v,l as r}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";const b=e=>{switch(e){case"secondary":return r`
        background-color: #6c757d;
        color: white;

        &:hover:not(:disabled) {
          background-color: #5a6268;
        }
      `;case"tertiary":return r`
        background-color: #f8f9fa;
        color: #212529;

        &:hover:not(:disabled) {
          background-color: #e2e6ea;
        }
      `;default:return r`
        background-color: #6366f1;
        color: white;

        &:hover:not(:disabled) {
          background-color: #4f46e5;
        }
      `}},h=e=>{switch(e){case"sm":return r`
        padding: 0.25rem 0.75rem;
        font-size: 0.875rem;
      `;case"lg":return r`
        padding: 0.75rem 1.5rem;
        font-size: 1.125rem;
      `;default:return r`
        padding: 0.5rem 1.25rem;
        font-size: 1rem;
      `}},S=v.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.15s ease;
  width: ${({fullWidth:e})=>e?"100%":"auto"};

  ${e=>b(e.variant)}
  ${e=>h(e.size)}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:active:not(:disabled) {
    transform: scale(0.97);
  }
`,m=({children:e,variant:p="primary",size:y="md",fullWidth:f=!1,loading:o=!1,...n})=>g.jsx(S,{variant:p,size:y,fullWidth:f,disabled:n.disabled||o,...n,children:o?"Loading...":e});m.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const z={title:"Components/ui/Button",component:m,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"]}}},a={args:{children:"Primary Button",variant:"primary"}},t={args:{children:"Secondary Button",variant:"secondary"}};var s,i,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    variant: 'primary'
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,c,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    variant: 'secondary'
  }
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const T=["Primary","Secondary"];export{a as Primary,t as Secondary,T as __namedExportsOrder,z as default};
