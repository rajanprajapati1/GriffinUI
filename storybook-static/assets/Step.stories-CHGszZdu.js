import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as r}from"./Step-BdGNYYbA.js";import{d as f}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";const i=f.div`
  display: flex;
  align-items: center;
  width: 100%;
`,E={title:"Components/ui/Step",component:r,tags:["autodocs"],argTypes:{label:{control:"text"},subLabel:{control:"text"},index:{control:{type:"number",min:0}},isActive:{control:"boolean"},isCompleted:{control:"boolean"},isLast:{control:"boolean"},isError:{control:"boolean"},disabled:{control:"boolean"}}},t={args:{label:"Step 1",index:0,isActive:!0,isCompleted:!1,isLast:!1},render:s=>e.jsxs(i,{children:[e.jsx(r,{...s}),e.jsx(r,{label:"Step 2",index:1}),e.jsx(r,{label:"Step 3",index:2,isLast:!0})]})},a={args:{label:"Step 1",index:0,isCompleted:!0,isLast:!1},render:s=>e.jsxs(i,{children:[e.jsx(r,{...s}),e.jsx(r,{label:"Step 2",index:1,isActive:!0}),e.jsx(r,{label:"Step 3",index:2,isLast:!0})]})},p={args:{label:"Step 2",index:1,isError:!0,isLast:!1},render:s=>e.jsxs(i,{children:[e.jsx(r,{label:"Step 1",index:0,isCompleted:!0}),e.jsx(r,{...s}),e.jsx(r,{label:"Step 3",index:2,isLast:!0})]})},l={args:{label:"Review",subLabel:"Verify details",index:2,icon:e.jsx("span",{children:"⭐"}),isActive:!0,isLast:!0},render:s=>e.jsxs(i,{children:[e.jsx(r,{label:"Step 1",index:0,isCompleted:!0}),e.jsx(r,{label:"Step 2",index:1,isCompleted:!0}),e.jsx(r,{...s})]})};var o,n,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Step 1',
    index: 0,
    isActive: true,
    isCompleted: false,
    isLast: false
  },
  render: args => <StepsWrapper>\r
      <Step {...args} />\r
      <Step label="Step 2" index={1} />\r
      <Step label="Step 3" index={2} isLast />\r
    </StepsWrapper>
}`,...(d=(n=t.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var c,S,x;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Step 1',
    index: 0,
    isCompleted: true,
    isLast: false
  },
  render: args => <StepsWrapper>\r
      <Step {...args} />\r
      <Step label="Step 2" index={1} isActive />\r
      <Step label="Step 3" index={2} isLast />\r
    </StepsWrapper>
}`,...(x=(S=a.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var m,b,u;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Step 2',
    index: 1,
    isError: true,
    isLast: false
  },
  render: args => <StepsWrapper>\r
      <Step label="Step 1" index={0} isCompleted />\r
      <Step {...args} />\r
      <Step label="Step 3" index={2} isLast />\r
    </StepsWrapper>
}`,...(u=(b=p.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var g,L,j;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Review',
    subLabel: 'Verify details',
    index: 2,
    icon: <span>⭐</span>,
    isActive: true,
    isLast: true
  },
  render: args => <StepsWrapper>\r
      <Step label="Step 1" index={0} isCompleted />\r
      <Step label="Step 2" index={1} isCompleted />\r
      <Step {...args} />\r
    </StepsWrapper>
}`,...(j=(L=l.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};const y=["Default","CompletedStep","ErrorStep","WithSubLabelAndIcon"];export{a as CompletedStep,t as Default,p as ErrorStep,l as WithSubLabelAndIcon,y as __namedExportsOrder,E as default};
