import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{d as m}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";const h=m.div`
  height: ${r=>r.height||"1rem"};
`,n=({height:r})=>e.jsx(h,{height:r});n.__docgenInfo={description:"",methods:[],displayName:"Spacer",props:{height:{required:!1,tsType:{name:"string"},description:""}}};const g=m.div`
  background: #f3f4f6;
  padding: 1rem;
  border: 1px dashed #9ca3af;
`,S={title:"Components/ui/Spacer",component:n,tags:["autodocs"],argTypes:{height:{control:"text",description:'Height of the spacer (e.g. "1rem", "20px")',defaultValue:"1rem"}}},a={args:{height:"1rem"},render:r=>e.jsxs(g,{children:[e.jsx("div",{children:"Above Spacer"}),e.jsx(n,{...r}),e.jsx("div",{children:"Below Spacer"})]})},s={args:{height:"3rem"},render:r=>e.jsxs(g,{children:[e.jsx("div",{children:"Above Spacer"}),e.jsx(n,{...r}),e.jsx("div",{children:"Below Spacer"})]})};var o,t,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    height: '1rem'
  },
  render: args => <Container>\r
      <div>Above Spacer</div>\r
      <Spacer {...args} />\r
      <div>Below Spacer</div>\r
    </Container>
}`,...(i=(t=a.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var d,c,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    height: '3rem'
  },
  render: args => <Container>\r
      <div>Above Spacer</div>\r
      <Spacer {...args} />\r
      <div>Below Spacer</div>\r
    </Container>
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const f=["Default","CustomHeight"];export{s as CustomHeight,a as Default,f as __namedExportsOrder,S as default};
