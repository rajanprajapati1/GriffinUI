import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as d,R as g}from"./index-BlmOqGMO.js";import{d as z}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const T=g.createContext({open:!1,setOpen:()=>{}}),V=z.div`
  width: 100%;
`,Y=z.div`
  overflow: hidden;
  height: ${n=>n.open?`${n.height}px`:"0"};
  transition: height 0.2s ease-in-out;
`,_=({children:n,defaultOpen:r=!1,open:l,onOpenChange:t,className:p})=>{const[a,s]=d.useState(r),c=l!==void 0,i=c?l:a,C=u=>{if(c||s(u),t){const N=typeof u=="function"?u(i):u;t(N)}};return e.jsx(T.Provider,{value:{open:i,setOpen:C},children:e.jsx(V,{className:p,children:n})})},F=({children:n,asChild:r=!1,className:l})=>{const{open:t,setOpen:p}=g.useContext(T),a=()=>{p(!t)};if(r&&g.isValidElement(n)){const s=n;return g.cloneElement(s,{onClick:c=>{var i,C;a(),(C=(i=s.props).onClick)==null||C.call(i,c)},"aria-expanded":t,className:`${s.props.className||""} ${l||""}`.trim()||void 0})}return e.jsx("div",{onClick:a,"aria-expanded":t,className:l,style:{cursor:"pointer"},children:n})},I=({children:n,className:r})=>{const{open:l}=g.useContext(T),t=d.useRef(null),[p,a]=d.useState(0);return d.useEffect(()=>{if(t.current){const s=new ResizeObserver(c=>{for(const i of c)a(i.contentRect.height)});return s.observe(t.current),()=>{s.disconnect()}}},[]),e.jsx(Y,{open:l,height:p,className:r,children:e.jsx("div",{ref:t,children:n})})},o={Root:_,Trigger:F,Content:I},G={title:"Components/New/Collapsible",component:o.Root,tags:["autodocs"],argTypes:{defaultOpen:{control:"boolean",description:"Initial open state if uncontrolled"},open:{control:"boolean",description:"Controlled open state"},onOpenChange:{action:"onOpenChange",table:{disable:!0}}}},h={render:()=>e.jsxs(o.Root,{children:[e.jsx(o.Trigger,{children:"Toggle Me"}),e.jsx(o.Content,{children:e.jsx("div",{style:{padding:"1rem",backgroundColor:"#f3f4f6"},children:"This content smoothly expands and collapses."})})]})},b={render:()=>{const[n,r]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>r(!n),children:"Toggle via External Button"}),e.jsxs(o.Root,{open:n,onOpenChange:r,children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx("span",{style:{display:"block",marginTop:"0.5rem",cursor:"pointer",color:"#3b82f6"},children:"Toggle Collapsible"})}),e.jsx(o.Content,{children:e.jsx("div",{style:{padding:"1rem",backgroundColor:"#f3f4f6"},children:"This collapsible is controlled by external state."})})]})]})}},m={render:()=>e.jsxs(o.Root,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx("button",{style:{margin:"1rem 0",padding:"0.5rem 1rem",border:"1px solid #ccc",borderRadius:"0.375rem"},children:"Click to Expand"})}),e.jsx(o.Content,{children:e.jsxs("div",{style:{padding:"1rem",backgroundColor:"#f9fafb"},children:["You can use any custom element as the trigger with ",e.jsx("code",{children:"asChild"}),"."]})})]})},f={args:{defaultOpen:!0},render:n=>e.jsxs(o.Root,{...n,children:[e.jsx(o.Trigger,{children:"Default Open"}),e.jsx(o.Content,{children:e.jsx("div",{style:{padding:"1rem",backgroundColor:"#f3f4f6"},children:"This collapsible starts open by default."})})]})},x={render:()=>{const[n,r]=d.useState(!1);return e.jsxs(o.Root,{children:[e.jsx(o.Trigger,{children:"Toggle Section"}),e.jsx(o.Content,{children:e.jsxs("div",{style:{padding:"1rem",backgroundColor:"#f3f4f6"},children:[e.jsx("p",{children:"This section has dynamic content that changes height."}),e.jsx("button",{onClick:()=>r(!n),style:{marginBottom:"0.5rem"},children:n?"Hide Details":"Show More"}),n&&e.jsx("p",{children:"This part appears or disappears based on user interaction inside the collapsible content."})]})})]})}};var j,y,R;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Collapsible.Root>\r
      <Collapsible.Trigger>Toggle Me</Collapsible.Trigger>\r
      <Collapsible.Content>\r
        <div style={{
        padding: '1rem',
        backgroundColor: '#f3f4f6'
      }}>\r
          This content smoothly expands and collapses.\r
        </div>\r
      </Collapsible.Content>\r
    </Collapsible.Root>
}`,...(R=(y=h.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var v,k,O;b.parameters={...b.parameters,docs:{...(v=b.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <button onClick={() => setOpen(!open)}>Toggle via External Button</button>\r
        <Collapsible.Root open={open} onOpenChange={setOpen}>\r
          <Collapsible.Trigger asChild>\r
            <span style={{
            display: 'block',
            marginTop: '0.5rem',
            cursor: 'pointer',
            color: '#3b82f6'
          }}>\r
              Toggle Collapsible\r
            </span>\r
          </Collapsible.Trigger>\r
          <Collapsible.Content>\r
            <div style={{
            padding: '1rem',
            backgroundColor: '#f3f4f6'
          }}>\r
              This collapsible is controlled by external state.\r
            </div>\r
          </Collapsible.Content>\r
        </Collapsible.Root>\r
      </>;
  }
}`,...(O=(k=b.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var S,w,M;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Collapsible.Root>\r
      <Collapsible.Trigger asChild>\r
        <button style={{
        margin: '1rem 0',
        padding: '0.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '0.375rem'
      }}>\r
          Click to Expand\r
        </button>\r
      </Collapsible.Trigger>\r
      <Collapsible.Content>\r
        <div style={{
        padding: '1rem',
        backgroundColor: '#f9fafb'
      }}>\r
          You can use any custom element as the trigger with <code>asChild</code>.\r
        </div>\r
      </Collapsible.Content>\r
    </Collapsible.Root>
}`,...(M=(w=m.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var D,E,B;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  },
  render: args => <Collapsible.Root {...args}>\r
      <Collapsible.Trigger>Default Open</Collapsible.Trigger>\r
      <Collapsible.Content>\r
        <div style={{
        padding: '1rem',
        backgroundColor: '#f3f4f6'
      }}>\r
          This collapsible starts open by default.\r
        </div>\r
      </Collapsible.Content>\r
    </Collapsible.Root>
}`,...(B=(E=f.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var W,$,H;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [showMore, setShowMore] = useState(false);
    return <Collapsible.Root>\r
        <Collapsible.Trigger>Toggle Section</Collapsible.Trigger>\r
        <Collapsible.Content>\r
          <div style={{
          padding: '1rem',
          backgroundColor: '#f3f4f6'
        }}>\r
            <p>This section has dynamic content that changes height.</p>\r
            <button onClick={() => setShowMore(!showMore)} style={{
            marginBottom: '0.5rem'
          }}>\r
              {showMore ? 'Hide Details' : 'Show More'}\r
            </button>\r
            {showMore && <p>This part appears or disappears based on user interaction inside the collapsible content.</p>}\r
          </div>\r
        </Collapsible.Content>\r
      </Collapsible.Root>;
  }
}`,...(H=($=x.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};const J=["Default","Controlled","WithCustomTrigger","DefaultOpen","WithDynamicContent"];export{b as Controlled,h as Default,f as DefaultOpen,m as WithCustomTrigger,x as WithDynamicContent,J as __namedExportsOrder,G as default};
