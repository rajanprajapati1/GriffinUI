import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as l,R as v}from"./index-BlmOqGMO.js";import{d as N,l as C,m as F}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const O=v.createContext({open:!1,setOpen:()=>{}}),_=F`
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,L=N.div`
  position: relative;
  display: inline-block;
`,B=N.div`
  position: absolute;
  min-width: 220px;
  background-color: white;
  border-radius: 0.375rem;
  padding: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 50;
  animation: ${_} 0.15s ease-out;
  
  ${t=>t.align==="center"&&C`
    left: 50%;
    transform: translateX(-50%);
  `}
  
  ${t=>t.align==="start"&&C`
    left: 0;
  `}
  
  ${t=>t.align==="end"&&C`
    right: 0;
  `}
`,G=({children:t,className:a,openDelay:i=300,closeDelay:s=200})=>{const[d,y]=l.useState(!1),o=l.useRef(null),n=l.useRef(null),X=()=>{n.current&&(clearTimeout(n.current),n.current=null),!d&&!o.current&&(o.current=setTimeout(()=>{y(!0),o.current=null},i))},q=()=>{o.current&&(clearTimeout(o.current),o.current=null),d&&!n.current&&(n.current=setTimeout(()=>{y(!1),n.current=null},s))};return l.useEffect(()=>()=>{o.current&&clearTimeout(o.current),n.current&&clearTimeout(n.current)},[]),e.jsx(O.Provider,{value:{open:d,setOpen:y},children:e.jsx(L,{className:a,onMouseEnter:X,onMouseLeave:q,children:t})})},K=({children:t,asChild:a=!1,className:i})=>{if(a&&v.isValidElement(t)){const s=t;return v.cloneElement(s,{className:`${s.props.className||""} ${i||""}`.trim()||void 0})}return e.jsx("div",{className:i,children:t})},Q=({children:t,align:a="center",sideOffset:i=8,className:s})=>{const{open:d}=v.useContext(O);return d?e.jsx(B,{align:a,className:s,style:{top:`${i}px`},children:t}):null},r={Root:G,Trigger:K,Content:Q},te={title:"Components/New/HoverCard",component:r.Root,tags:["autodocs"],argTypes:{openDelay:{control:{type:"number",min:0,max:2e3},defaultValue:300},closeDelay:{control:{type:"number",min:0,max:2e3},defaultValue:200}}},c={args:{openDelay:300,closeDelay:200},render:()=>e.jsx("div",{style:{padding:"2rem",textAlign:"center"},children:e.jsxs(r.Root,{children:[e.jsx(r.Trigger,{children:e.jsx("span",{style:{color:"#3b82f6",cursor:"pointer",textDecoration:"underline"},children:"Hover me"})}),e.jsx(r.Content,{align:"center",children:e.jsx("div",{style:{maxWidth:"250px"},children:"This is a basic hover card. It appears after a short delay."})})]})})},p={render:()=>e.jsx("div",{style:{padding:"2rem",textAlign:"center"},children:e.jsxs(r.Root,{children:[e.jsx(r.Trigger,{children:e.jsx("span",{style:{color:"#3b82f6",cursor:"pointer",textDecoration:"underline"},children:"Hover me (start)"})}),e.jsx(r.Content,{align:"start",children:e.jsx("div",{style:{maxWidth:"250px"},children:"This hover card is aligned to the start of the trigger element."})})]})})},g={render:()=>e.jsx("div",{style:{padding:"2rem",textAlign:"center"},children:e.jsxs(r.Root,{children:[e.jsx(r.Trigger,{children:e.jsx("span",{style:{color:"#3b82f6",cursor:"pointer",textDecoration:"underline"},children:"Hover me (end)"})}),e.jsx(r.Content,{align:"end",children:e.jsx("div",{style:{maxWidth:"250px"},children:"This hover card is aligned to the end of the trigger element."})})]})})},m={args:{openDelay:0,closeDelay:0},render:t=>e.jsx("div",{style:{padding:"2rem",textAlign:"center"},children:e.jsxs(r.Root,{...t,children:[e.jsx(r.Trigger,{children:e.jsx("span",{style:{color:"#3b82f6",cursor:"pointer",textDecoration:"underline"},children:"Hover me (no delay)"})}),e.jsx(r.Content,{align:"center",children:e.jsx("div",{style:{maxWidth:"250px"},children:"This hover card opens instantly without any delay."})})]})})},h={render:()=>e.jsx("div",{style:{padding:"2rem",textAlign:"center"},children:e.jsxs(r.Root,{children:[e.jsx(r.Trigger,{asChild:!0,children:e.jsx("button",{style:{padding:"0.5rem 1rem",fontSize:"1rem",cursor:"pointer"},children:"Hover Me (asChild)"})}),e.jsx(r.Content,{align:"center",children:e.jsxs("div",{style:{maxWidth:"250px"},children:["This hover card uses ",e.jsx("code",{children:"asChild"})," to wrap a button."]})})]})})},x={render:()=>e.jsx("div",{style:{padding:"2rem",textAlign:"center"},children:e.jsxs(r.Root,{children:[e.jsx(r.Trigger,{children:e.jsx("span",{style:{color:"#3b82f6",cursor:"pointer",textDecoration:"underline"},children:"Product Preview"})}),e.jsx(r.Content,{align:"center",style:{width:"300px"},children:e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx("img",{src:"https://via.placeholder.com/64 ",alt:"Product preview",style:{width:"64px",height:"64px",borderRadius:"0.375rem"}}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 0.25rem",fontWeight:"bold"},children:"Premium Widget"}),e.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"#4b5563"},children:"A high-quality product that boosts performance by 300%."})]})]})})]})})},u={args:{openDelay:500,closeDelay:300},render:t=>e.jsx("div",{style:{padding:"2rem",textAlign:"center"},children:e.jsxs(r.Root,{...t,children:[e.jsx(r.Trigger,{asChild:!0,children:e.jsx("a",{href:"#",style:{color:"#3b82f6",textDecoration:"underline",cursor:"pointer"},children:"Hover for User Info"})}),e.jsx(r.Content,{align:"center",style:{boxShadow:"0 15px 25px rgba(0, 0, 0, 0.1)"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem",maxWidth:"300px"},children:[e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx("img",{src:"https://via.placeholder.com/64 ",alt:"User Avatar",style:{width:"64px",height:"64px",borderRadius:"9999px"}}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 0.25rem",fontWeight:"bold"},children:"Jane Doe"}),e.jsx("p",{style:{margin:0,fontSize:"0.875rem",color:"#6b7280"},children:"Senior Product Designer"})]})]}),e.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"#4b5563"},children:"Jane has 8 years of experience in UI/UX design and leads our design team."}),e.jsx("div",{style:{marginTop:"0.5rem",textAlign:"right"},children:e.jsx("button",{style:{background:"#3b82f6",color:"white",border:"none",borderRadius:"0.375rem",padding:"0.5rem 1rem",cursor:"pointer",fontSize:"0.875rem"},children:"View Profile"})})]})})]})})};var f,b,j;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    openDelay: 300,
    closeDelay: 200
  },
  render: () => <div style={{
    padding: '2rem',
    textAlign: 'center'
  }}>\r
      <HoverCard.Root>\r
        <HoverCard.Trigger>\r
          <span style={{
          color: '#3b82f6',
          cursor: 'pointer',
          textDecoration: 'underline'
        }}>Hover me</span>\r
        </HoverCard.Trigger>\r
        <HoverCard.Content align="center">\r
          <div style={{
          maxWidth: '250px'
        }}>\r
            This is a basic hover card. It appears after a short delay.\r
          </div>\r
        </HoverCard.Content>\r
      </HoverCard.Root>\r
    </div>
}`,...(j=(b=c.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var H,T,R;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem',
    textAlign: 'center'
  }}>\r
      <HoverCard.Root>\r
        <HoverCard.Trigger>\r
          <span style={{
          color: '#3b82f6',
          cursor: 'pointer',
          textDecoration: 'underline'
        }}>Hover me (start)</span>\r
        </HoverCard.Trigger>\r
        <HoverCard.Content align="start">\r
          <div style={{
          maxWidth: '250px'
        }}>\r
            This hover card is aligned to the start of the trigger element.\r
          </div>\r
        </HoverCard.Content>\r
      </HoverCard.Root>\r
    </div>
}`,...(R=(T=p.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var D,A,w;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem',
    textAlign: 'center'
  }}>\r
      <HoverCard.Root>\r
        <HoverCard.Trigger>\r
          <span style={{
          color: '#3b82f6',
          cursor: 'pointer',
          textDecoration: 'underline'
        }}>Hover me (end)</span>\r
        </HoverCard.Trigger>\r
        <HoverCard.Content align="end">\r
          <div style={{
          maxWidth: '250px'
        }}>\r
            This hover card is aligned to the end of the trigger element.\r
          </div>\r
        </HoverCard.Content>\r
      </HoverCard.Root>\r
    </div>
}`,...(w=(A=g.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var S,W,P;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    openDelay: 0,
    closeDelay: 0
  },
  render: args => <div style={{
    padding: '2rem',
    textAlign: 'center'
  }}>\r
      <HoverCard.Root {...args}>\r
        <HoverCard.Trigger>\r
          <span style={{
          color: '#3b82f6',
          cursor: 'pointer',
          textDecoration: 'underline'
        }}>Hover me (no delay)</span>\r
        </HoverCard.Trigger>\r
        <HoverCard.Content align="center">\r
          <div style={{
          maxWidth: '250px'
        }}>\r
            This hover card opens instantly without any delay.\r
          </div>\r
        </HoverCard.Content>\r
      </HoverCard.Root>\r
    </div>
}`,...(P=(W=m.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var z,E,I;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem',
    textAlign: 'center'
  }}>\r
      <HoverCard.Root>\r
        <HoverCard.Trigger asChild>\r
          <button style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          cursor: 'pointer'
        }}>\r
            Hover Me (asChild)\r
          </button>\r
        </HoverCard.Trigger>\r
        <HoverCard.Content align="center">\r
          <div style={{
          maxWidth: '250px'
        }}>\r
            This hover card uses <code>asChild</code> to wrap a button.\r
          </div>\r
        </HoverCard.Content>\r
      </HoverCard.Root>\r
    </div>
}`,...(I=(E=h.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var U,$,V;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem',
    textAlign: 'center'
  }}>\r
      <HoverCard.Root>\r
        <HoverCard.Trigger>\r
          <span style={{
          color: '#3b82f6',
          cursor: 'pointer',
          textDecoration: 'underline'
        }}>Product Preview</span>\r
        </HoverCard.Trigger>\r
        <HoverCard.Content align="center" style={{
        width: '300px'
      }}>\r
          <div style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center'
        }}>\r
            <img src="https://via.placeholder.com/64 " alt="Product preview" style={{
            width: '64px',
            height: '64px',
            borderRadius: '0.375rem'
          }} />\r
            <div>\r
              <h3 style={{
              margin: '0 0 0.25rem',
              fontWeight: 'bold'
            }}>Premium Widget</h3>\r
              <p style={{
              margin: 0,
              fontSize: '0.9rem',
              color: '#4b5563'
            }}>\r
                A high-quality product that boosts performance by 300%.\r
              </p>\r
            </div>\r
          </div>\r
        </HoverCard.Content>\r
      </HoverCard.Root>\r
    </div>
}`,...(V=($=x.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var k,J,M;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    openDelay: 500,
    closeDelay: 300
  },
  render: args => <div style={{
    padding: '2rem',
    textAlign: 'center'
  }}>\r
      <HoverCard.Root {...args}>\r
        <HoverCard.Trigger asChild>\r
          <a href="#" style={{
          color: '#3b82f6',
          textDecoration: 'underline',
          cursor: 'pointer'
        }}>\r
            Hover for User Info\r
          </a>\r
        </HoverCard.Trigger>\r
        <HoverCard.Content align="center" style={{
        boxShadow: '0 15px 25px rgba(0, 0, 0, 0.1)'
      }}>\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          maxWidth: '300px'
        }}>\r
            <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center'
          }}>\r
              <img src="https://via.placeholder.com/64 " alt="User Avatar" style={{
              width: '64px',
              height: '64px',
              borderRadius: '9999px'
            }} />\r
              <div>\r
                <h3 style={{
                margin: '0 0 0.25rem',
                fontWeight: 'bold'
              }}>Jane Doe</h3>\r
                <p style={{
                margin: 0,
                fontSize: '0.875rem',
                color: '#6b7280'
              }}>Senior Product Designer</p>\r
              </div>\r
            </div>\r
            <p style={{
            margin: 0,
            fontSize: '0.9rem',
            color: '#4b5563'
          }}>\r
              Jane has 8 years of experience in UI/UX design and leads our design team.\r
            </p>\r
            <div style={{
            marginTop: '0.5rem',
            textAlign: 'right'
          }}>\r
              <button style={{
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '0.375rem',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              fontSize: '0.875rem'
            }}>\r
                View Profile\r
              </button>\r
            </div>\r
          </div>\r
        </HoverCard.Content>\r
      </HoverCard.Root>\r
    </div>
}`,...(M=(J=u.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};const oe=["Default","AlignStart","AlignEnd","NoDelay","WithAsChild","WithComplexContent","FullCustomExample"];export{g as AlignEnd,p as AlignStart,c as Default,u as FullCustomExample,m as NoDelay,h as WithAsChild,x as WithComplexContent,oe as __namedExportsOrder,te as default};
