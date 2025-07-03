import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as j}from"./index-BlmOqGMO.js";import{d as n}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const W=n.div`
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid #e5e7eb;
`,w=n.div`
  border-bottom: 1px solid #e5e7eb;
  &:last-child {
    border-bottom: none;
  }
`,O=n.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-weight: 600;
  font-size: 1rem;
  background: #fff;
  color: #111827;
  cursor: ${r=>r.disabled?"not-allowed":"pointer"};
  opacity: ${r=>r.disabled?.5:1};
  border: none;
  outline: none;
`,C=n.span`
  display: inline-block;
  width: 0.6rem;
  height: 0.6rem;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: ${r=>r.isOpen?"rotate(225deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,T=n.div`
  max-height: ${r=>r.isOpen?"1000px":"0"};
  overflow: hidden;
  padding: ${r=>r.isOpen?"1rem":"0 1rem"};
  transition: all 0.3s ease;
  font-size: 0.95rem;
  color: #4b5563;
`,y=({title:r,children:f,defaultOpen:b=!1,disabled:c=!1,iconOpen:d,iconClosed:a})=>{const[t,x]=j.useState(b),A=()=>{c||x(!t)},g=()=>d&&a?t?d:a:e.jsx(C,{isOpen:t});return e.jsxs(w,{children:[e.jsxs(O,{onClick:A,isOpen:t,disabled:c,children:[r,g()]}),e.jsx(T,{isOpen:t,children:f})]})},o={Item:y,Wrapper:W},S={title:"Components/ui/Accordion",component:o.Wrapper,tags:["autodocs"]},s={render:()=>e.jsxs(o.Wrapper,{children:[e.jsx(o.Item,{title:"Item 1",children:"This is the content of Accordion Item 1."}),e.jsx(o.Item,{title:"Item 2",defaultOpen:!0,children:"This item is open by default."}),e.jsx(o.Item,{title:"Item 3",disabled:!0,children:"This item is disabled."})]})},i={render:()=>e.jsx(o.Wrapper,{children:e.jsx(o.Item,{title:"Item with custom icons",iconOpen:e.jsx("span",{children:"🔽"}),iconClosed:e.jsx("span",{children:"▶️"}),children:"This item has custom open/close icons."})})};var m,p,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Accordion.Wrapper>\r
      <Accordion.Item title="Item 1">\r
        This is the content of Accordion Item 1.\r
      </Accordion.Item>\r
      <Accordion.Item title="Item 2" defaultOpen>\r
        This item is open by default.\r
      </Accordion.Item>\r
      <Accordion.Item title="Item 3" disabled>\r
        This item is disabled.\r
      </Accordion.Item>\r
    </Accordion.Wrapper>
}`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var h,u,I;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Accordion.Wrapper>\r
      <Accordion.Item title="Item with custom icons" iconOpen={<span>🔽</span>} iconClosed={<span>▶️</span>}>\r
        This item has custom open/close icons.\r
      </Accordion.Item>\r
    </Accordion.Wrapper>
}`,...(I=(u=i.parameters)==null?void 0:u.docs)==null?void 0:I.source}}};const z=["Basic","WithCustomIcons"];export{s as Basic,i as WithCustomIcons,z as __namedExportsOrder,S as default};
