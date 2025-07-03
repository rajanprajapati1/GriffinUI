import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{R as j}from"./index-BlmOqGMO.js";import{d as n}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const C=n.nav`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #4b5563;
`,k=n.span`
  display: inline-flex;
  align-items: center;
  font-weight: ${e=>e.isCurrent?600:400};
  color: ${e=>e.isCurrent?"#111827":e.isLink?"#2563eb":"#4b5563"};
  cursor: ${e=>e.isLink?"pointer":"default"};

  &:hover {
    text-decoration: ${e=>e.isLink?"underline":"none"};
  }
`,q=n.span`
  margin: 0 0.5rem;
  color: #9ca3af;
`,h=({items:e,separator:x="/",className:R})=>a.jsx(C,{"aria-label":"breadcrumbs",className:R,children:e.map((r,l)=>a.jsxs(j.Fragment,{children:[l>0&&a.jsx(q,{children:x}),a.jsxs(k,{isLink:!!r.href&&!r.current,isCurrent:r.current,as:r.href&&!r.current?"a":"span",href:r.href,children:[r.icon&&a.jsx("span",{style:{marginRight:4},children:r.icon}),r.label]})]},l))});h.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  href?: string;\r
  icon?: React.ReactNode;\r
  current?: boolean;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"current",value:{name:"boolean",required:!1}}]}}],raw:"BreadcrumbItem[]"},description:""},separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'/'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const w={title:"Components/ui/Breadcrumbs",component:h,tags:["autodocs"],argTypes:{separator:{control:"text"},items:{control:!1}}},y=[{label:"Home",href:"/",icon:a.jsx("span",{role:"img","aria-label":"house",children:"🏠"})},{label:"Category",href:"/category"},{label:"Subcategory",href:"/category/subcategory"},{label:"Current Page",current:!0}],s={args:{items:y,separator:"/"}},t={args:{items:y,separator:">"}},o={args:{items:[{label:"Dashboard",href:"/",icon:a.jsx("span",{role:"img","aria-label":"dashboard",children:"📊"})},{label:"Reports",href:"/reports",icon:a.jsx("span",{role:"img","aria-label":"report",children:"📄"})},{label:"2025 Q2",current:!0,icon:a.jsx("span",{role:"img","aria-label":"calendar",children:"📅"})}],separator:"→"}};var c,i,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    separator: '/'
  }
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,d,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    separator: '>'
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var b,g,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Dashboard',
      href: '/',
      icon: <span role="img" aria-label="dashboard">📊</span>
    }, {
      label: 'Reports',
      href: '/reports',
      icon: <span role="img" aria-label="report">📄</span>
    }, {
      label: '2025 Q2',
      current: true,
      icon: <span role="img" aria-label="calendar">📅</span>
    }],
    separator: '→'
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const B=["Default","CustomSeparator","WithIcons"];export{t as CustomSeparator,s as Default,o as WithIcons,B as __namedExportsOrder,w as default};
