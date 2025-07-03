import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as C,R as p}from"./index-BlmOqGMO.js";import{d as i,l as d,m as u}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const v=p.createContext({open:!1,setOpen:()=>{}}),_=u`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,J=u`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`,w=u`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`,K=u`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`,Q=u`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`,Z=i.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  z-index: 1000;
  animation: ${_} 0.2s ease-out;
`,ee=r=>{switch(r){case"top":return d`
        top: 0;
        left: 0;
        right: 0;
        animation: ${J} 0.3s ease-out;
      `;case"right":return d`
        top: 0;
        right: 0;
        bottom: 0;
        animation: ${w} 0.3s ease-out;
      `;case"bottom":return d`
        bottom: 0;
        left: 0;
        right: 0;
        animation: ${K} 0.3s ease-out;
      `;case"left":return d`
        top: 0;
        left: 0;
        bottom: 0;
        animation: ${Q} 0.3s ease-out;
      `;default:return d`
        top: 0;
        right: 0;
        bottom: 0;
        animation: ${w} 0.3s ease-out;
      `}},te=(r,o)=>{const n=o==="top"||o==="bottom";switch(r){case"sm":return n?"15rem":"20rem";case"md":return n?"25rem":"30rem";case"lg":return n?"35rem":"40rem";case"xl":return n?"45rem":"50rem";case"full":return"100%";default:return n?"25rem":"30rem"}},re=i.div`
  position: fixed;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  
  ${r=>ee(r.side)}
  
  ${r=>{const o=te(r.size,r.side);return r.side==="top"||r.side==="bottom"?d`
        height: ${o};
        max-height: 80vh;
      `:d`
        width: ${o};
        max-width: 80vw;
      `}}
`,oe=i.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  color: #6b7280;
  
  &:hover {
    background-color: #f3f4f6;
  }
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 1rem;
    height: 2px;
    background-color: currentColor;
    transform: rotate(45deg);
  }
  
  &::after {
    transform: rotate(-45deg);
  }
`,ne=i.div`
  padding: 1.5rem 1.5rem 0.5rem;
`,se=i.div`
  padding: 1rem 1.5rem 1.5rem;
  margin-top: auto;
`,ie=i.h2`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`,le=i.p`
  margin: 0;
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.5;
`,de=i.div`
  padding: 1rem 1.5rem;
  overflow-y: auto;
  flex: 1;
`,ae=({children:r,className:o})=>{const[n,h]=C.useState(!1);return e.jsx(v.Provider,{value:{open:n,setOpen:h},children:e.jsx("div",{className:o,children:r})})},he=({children:r,asChild:o=!1,className:n})=>{const{setOpen:h}=p.useContext(v),s=()=>{h(!0)};if(o&&p.isValidElement(r)){const c=r;return p.cloneElement(c,{onClick:m=>{var l,a;s(),(a=(l=c.props).onClick)==null||a.call(l,m)},className:`${c.props.className||""} ${n||""}`.trim()||void 0})}return e.jsx("div",{onClick:s,className:n,style:{cursor:"pointer"},children:r})},ce=({children:r,side:o="right",size:n="md",className:h,onClose:s,showCloseButton:c=!0})=>{const{open:m,setOpen:l}=p.useContext(v),a=C.useRef(null);return C.useEffect(()=>{const B=T=>{T.key==="Escape"&&(l(!1),s&&s())},k=T=>{a.current&&!a.current.contains(T.target)&&(l(!1),s&&s())};return m&&(document.addEventListener("keydown",B),document.addEventListener("mousedown",k)),()=>{document.removeEventListener("keydown",B),document.removeEventListener("mousedown",k)}},[m,l,s]),m?e.jsx(Z,{children:e.jsxs(re,{ref:a,side:o,size:n,className:h,children:[c&&e.jsx(oe,{onClick:()=>{l(!1),s&&s()}}),r]})}):null},me=({children:r,className:o})=>e.jsx(ne,{className:o,children:r}),pe=({children:r,className:o})=>e.jsx(se,{className:o,children:r}),ue=({children:r,className:o})=>e.jsx(ie,{className:o,children:r}),ge=({children:r,className:o})=>e.jsx(le,{className:o,children:r}),Se=({children:r,className:o})=>e.jsx(de,{className:o,children:r}),t={Root:ae,Trigger:he,Content:ce,Header:me,Footer:pe,Title:ue,Description:ge,Body:Se},je={title:"Components/New/Sheet",component:t.Root,tags:["autodocs"],argTypes:{side:{control:{type:"radio",options:["top","right","bottom","left"]},defaultValue:"right"},size:{control:{type:"radio",options:["sm","md","lg","xl","full"]},defaultValue:"md"},showCloseButton:{control:"boolean",defaultValue:!0}}},g={render:()=>e.jsx("div",{style:{padding:"2rem"},children:e.jsxs(t.Root,{children:[e.jsx(t.Trigger,{children:"Open Sheet"}),e.jsxs(t.Content,{side:"right",size:"md",children:[e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Default Sheet"}),e.jsx(t.Description,{children:"This is a basic sheet panel on the right."})]}),e.jsxs(t.Body,{children:[e.jsx("p",{children:"Sheet content goes here."}),e.jsx("p",{children:"You can add any kind of content like forms, lists, or buttons."})]}),e.jsxs(t.Footer,{children:[e.jsx("button",{style:{padding:"0.5rem 1rem",marginRight:"1rem"},children:"Cancel"}),e.jsx("button",{style:{padding:"0.5rem 1rem",background:"#3b82f6",color:"white"},children:"Save"})]})]})]})})},S={render:()=>e.jsx("div",{style:{padding:"2rem"},children:e.jsxs(t.Root,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx("button",{children:"Open Top Sheet"})}),e.jsxs(t.Content,{side:"top",size:"full",showCloseButton:!1,children:[e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Top Sheet"}),e.jsx(t.Description,{children:"This sheet opens from the top and has no close button."})]}),e.jsx(t.Body,{children:e.jsx("p",{children:"This could be used for full-screen mobile actions or alerts."})})]})]})})},x={render:()=>e.jsx("div",{style:{padding:"2rem"},children:e.jsxs(t.Root,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx("button",{style:{marginBottom:"1rem"},children:"Open Left Panel"})}),e.jsxs(t.Content,{side:"left",size:"lg",children:[e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Sidebar Menu"}),e.jsx(t.Description,{children:"Use this space for navigation or filters."})]}),e.jsx(t.Body,{children:e.jsxs("ul",{style:{listStyle:"none",paddingLeft:0},children:[e.jsx("li",{style:{padding:"0.75rem 0"},children:"Dashboard"}),e.jsx("li",{style:{padding:"0.75rem 0"},children:"Settings"}),e.jsx("li",{style:{padding:"0.75rem 0"},children:"Profile"})]})}),e.jsx(t.Footer,{children:e.jsx("button",{style:{padding:"0.5rem 1rem",background:"#ef4444",color:"white"},children:"Logout"})})]})]})})},f={render:()=>e.jsx("div",{style:{padding:"2rem"},children:e.jsxs(t.Root,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx("button",{children:"Open Bottom Sheet"})}),e.jsxs(t.Content,{side:"bottom",size:"sm",children:[e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Mobile Bottom Sheet"}),e.jsx(t.Description,{children:"Great for small popups or quick actions."})]}),e.jsx(t.Body,{children:e.jsx("p",{children:"This mimics mobile-style bottom sheets."})}),e.jsx(t.Footer,{children:e.jsx("button",{style:{padding:"0.5rem 1rem",background:"#3b82f6",color:"white"},children:"Confirm"})})]})]})})},b={render:()=>e.jsx("div",{style:{padding:"2rem"},children:e.jsxs(t.Root,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx("button",{children:"Open Full Width Sheet"})}),e.jsxs(t.Content,{side:"right",size:"full",children:[e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Full Width Panel"}),e.jsx(t.Description,{children:"This sheet takes up the entire screen width."})]}),e.jsxs(t.Body,{children:[e.jsx("h3",{style:{margin:"0 0 1rem 0"},children:"Full Screen Content"}),e.jsx("p",{style:{marginBottom:"1rem"},children:"You can use this for large forms, media previews, or settings panels."}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx("button",{style:{padding:"0.5rem 1rem",background:"#3b82f6",color:"white"},children:"Primary Action"}),e.jsx("button",{style:{padding:"0.5rem 1rem",background:"#f3f4f6",color:"#111827"},children:"Secondary"})]})]}),e.jsx(t.Footer,{children:e.jsx("button",{style:{padding:"0.5rem 1rem",background:"#ef4444",color:"white"},children:"Delete"})})]})]})})},y={render:()=>{const[r,o]=C.useState(!1);return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("button",{onClick:()=>o(!0),children:"Open via External State"}),e.jsx(t.Root,{children:e.jsxs(t.Content,{side:"right",size:"md",open:r,onClose:()=>o(!1),showCloseButton:!0,children:[e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Controlled Sheet"}),e.jsx(t.Description,{children:"This sheet uses external state to manage visibility."})]}),e.jsx(t.Body,{children:e.jsx("p",{children:"You can open/close this sheet using both internal and external logic."})}),e.jsx(t.Footer,{children:e.jsx("button",{onClick:()=>o(!1),style:{padding:"0.5rem 1rem"},children:"Cancel"})})]})})]})}},j={render:()=>e.jsx("div",{style:{padding:"2rem"},children:e.jsxs(t.Root,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx("button",{style:{marginBottom:"1rem"},children:"Open Settings"})}),e.jsxs(t.Content,{side:"right",size:"xl",children:[e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"User Preferences"}),e.jsx(t.Description,{children:"Adjust your account settings below"})]}),e.jsxs(t.Body,{children:[e.jsxs("section",{style:{marginBottom:"1.5rem"},children:[e.jsx("h4",{style:{fontWeight:"600",marginBottom:"0.5rem"},children:"Theme"}),e.jsxs("select",{style:{width:"100%",padding:"0.5rem",borderRadius:"0.375rem",border:"1px solid #d1d5db"},children:[e.jsx("option",{children:"Light"}),e.jsx("option",{children:"Dark"}),e.jsx("option",{children:"System"})]})]}),e.jsxs("section",{style:{marginBottom:"1.5rem"},children:[e.jsx("h4",{style:{fontWeight:"600",marginBottom:"0.5rem"},children:"Notifications"}),e.jsxs("label",{style:{display:"block",marginBottom:"0.5rem"},children:[e.jsx("input",{type:"checkbox"})," Email Notifications"]}),e.jsxs("label",{style:{display:"block",marginBottom:"0.5rem"},children:[e.jsx("input",{type:"checkbox"})," Push Notifications"]})]}),e.jsxs("section",{children:[e.jsx("h4",{style:{fontWeight:"600",marginBottom:"0.5rem"},children:"Language"}),e.jsxs("select",{style:{width:"100%",padding:"0.5rem",borderRadius:"0.375rem",border:"1px solid #d1d5db"},children:[e.jsx("option",{children:"English"}),e.jsx("option",{children:"Spanish"}),e.jsx("option",{children:"French"})]})]})]}),e.jsx(t.Footer,{children:e.jsx("button",{onClick:()=>alert("Saved preferences"),style:{padding:"0.5rem 1rem",background:"#3b82f6",color:"white",border:"none",borderRadius:"0.375rem"},children:"Save Changes"})})]})]})})};var R,D,F;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>\r
      <Sheet.Root>\r
        <Sheet.Trigger>Open Sheet</Sheet.Trigger>\r
        <Sheet.Content side="right" size="md">\r
          <Sheet.Header>\r
            <Sheet.Title>Default Sheet</Sheet.Title>\r
            <Sheet.Description>This is a basic sheet panel on the right.</Sheet.Description>\r
          </Sheet.Header>\r
          <Sheet.Body>\r
            <p>Sheet content goes here.</p>\r
            <p>You can add any kind of content like forms, lists, or buttons.</p>\r
          </Sheet.Body>\r
          <Sheet.Footer>\r
            <button style={{
            padding: '0.5rem 1rem',
            marginRight: '1rem'
          }}>Cancel</button>\r
            <button style={{
            padding: '0.5rem 1rem',
            background: '#3b82f6',
            color: 'white'
          }}>Save</button>\r
          </Sheet.Footer>\r
        </Sheet.Content>\r
      </Sheet.Root>\r
    </div>
}`,...(F=(D=g.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var O,H,z;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>\r
      <Sheet.Root>\r
        <Sheet.Trigger asChild>\r
          <button>Open Top Sheet</button>\r
        </Sheet.Trigger>\r
        <Sheet.Content side="top" size="full" showCloseButton={false}>\r
          <Sheet.Header>\r
            <Sheet.Title>Top Sheet</Sheet.Title>\r
            <Sheet.Description>This sheet opens from the top and has no close button.</Sheet.Description>\r
          </Sheet.Header>\r
          <Sheet.Body>\r
            <p>This could be used for full-screen mobile actions or alerts.</p>\r
          </Sheet.Body>\r
        </Sheet.Content>\r
      </Sheet.Root>\r
    </div>
}`,...(z=(H=S.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var E,L,P;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>\r
      <Sheet.Root>\r
        <Sheet.Trigger asChild>\r
          <button style={{
          marginBottom: '1rem'
        }}>Open Left Panel</button>\r
        </Sheet.Trigger>\r
        <Sheet.Content side="left" size="lg">\r
          <Sheet.Header>\r
            <Sheet.Title>Sidebar Menu</Sheet.Title>\r
            <Sheet.Description>Use this space for navigation or filters.</Sheet.Description>\r
          </Sheet.Header>\r
          <Sheet.Body>\r
            <ul style={{
            listStyle: 'none',
            paddingLeft: 0
          }}>\r
              <li style={{
              padding: '0.75rem 0'
            }}>Dashboard</li>\r
              <li style={{
              padding: '0.75rem 0'
            }}>Settings</li>\r
              <li style={{
              padding: '0.75rem 0'
            }}>Profile</li>\r
            </ul>\r
          </Sheet.Body>\r
          <Sheet.Footer>\r
            <button style={{
            padding: '0.5rem 1rem',
            background: '#ef4444',
            color: 'white'
          }}>Logout</button>\r
          </Sheet.Footer>\r
        </Sheet.Content>\r
      </Sheet.Root>\r
    </div>
}`,...(P=(L=x.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var W,$,N;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>\r
      <Sheet.Root>\r
        <Sheet.Trigger asChild>\r
          <button>Open Bottom Sheet</button>\r
        </Sheet.Trigger>\r
        <Sheet.Content side="bottom" size="sm">\r
          <Sheet.Header>\r
            <Sheet.Title>Mobile Bottom Sheet</Sheet.Title>\r
            <Sheet.Description>Great for small popups or quick actions.</Sheet.Description>\r
          </Sheet.Header>\r
          <Sheet.Body>\r
            <p>This mimics mobile-style bottom sheets.</p>\r
          </Sheet.Body>\r
          <Sheet.Footer>\r
            <button style={{
            padding: '0.5rem 1rem',
            background: '#3b82f6',
            color: 'white'
          }}>Confirm</button>\r
          </Sheet.Footer>\r
        </Sheet.Content>\r
      </Sheet.Root>\r
    </div>
}`,...(N=($=f.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var Y,V,I;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>\r
      <Sheet.Root>\r
        <Sheet.Trigger asChild>\r
          <button>Open Full Width Sheet</button>\r
        </Sheet.Trigger>\r
        <Sheet.Content side="right" size="full">\r
          <Sheet.Header>\r
            <Sheet.Title>Full Width Panel</Sheet.Title>\r
            <Sheet.Description>This sheet takes up the entire screen width.</Sheet.Description>\r
          </Sheet.Header>\r
          <Sheet.Body>\r
            <h3 style={{
            margin: '0 0 1rem 0'
          }}>Full Screen Content</h3>\r
            <p style={{
            marginBottom: '1rem'
          }}>You can use this for large forms, media previews, or settings panels.</p>\r
            <div style={{
            display: 'flex',
            gap: '1rem'
          }}>\r
              <button style={{
              padding: '0.5rem 1rem',
              background: '#3b82f6',
              color: 'white'
            }}>Primary Action</button>\r
              <button style={{
              padding: '0.5rem 1rem',
              background: '#f3f4f6',
              color: '#111827'
            }}>Secondary</button>\r
            </div>\r
          </Sheet.Body>\r
          <Sheet.Footer>\r
            <button style={{
            padding: '0.5rem 1rem',
            background: '#ef4444',
            color: 'white'
          }}>Delete</button>\r
          </Sheet.Footer>\r
        </Sheet.Content>\r
      </Sheet.Root>\r
    </div>
}`,...(I=(V=b.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var A,M,U;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div style={{
      padding: '2rem'
    }}>\r
        <button onClick={() => setOpen(true)}>Open via External State</button>\r
\r
        <Sheet.Root>\r
          <Sheet.Content side="right" size="md" open={open} onClose={() => setOpen(false)} showCloseButton>\r
            <Sheet.Header>\r
              <Sheet.Title>Controlled Sheet</Sheet.Title>\r
              <Sheet.Description>This sheet uses external state to manage visibility.</Sheet.Description>\r
            </Sheet.Header>\r
            <Sheet.Body>\r
              <p>You can open/close this sheet using both internal and external logic.</p>\r
            </Sheet.Body>\r
            <Sheet.Footer>\r
              <button onClick={() => setOpen(false)} style={{
              padding: '0.5rem 1rem'
            }}>\r
                Cancel\r
              </button>\r
            </Sheet.Footer>\r
          </Sheet.Content>\r
        </Sheet.Root>\r
      </div>;
  }
}`,...(U=(M=y.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var X,q,G;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>\r
      <Sheet.Root>\r
        <Sheet.Trigger asChild>\r
          <button style={{
          marginBottom: '1rem'
        }}>Open Settings</button>\r
        </Sheet.Trigger>\r
        <Sheet.Content side="right" size="xl">\r
          <Sheet.Header>\r
            <Sheet.Title>User Preferences</Sheet.Title>\r
            <Sheet.Description>Adjust your account settings below</Sheet.Description>\r
          </Sheet.Header>\r
          <Sheet.Body>\r
            <section style={{
            marginBottom: '1.5rem'
          }}>\r
              <h4 style={{
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>Theme</h4>\r
              <select style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '0.375rem',
              border: '1px solid #d1d5db'
            }}>\r
                <option>Light</option>\r
                <option>Dark</option>\r
                <option>System</option>\r
              </select>\r
            </section>\r
\r
            <section style={{
            marginBottom: '1.5rem'
          }}>\r
              <h4 style={{
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>Notifications</h4>\r
              <label style={{
              display: 'block',
              marginBottom: '0.5rem'
            }}>\r
                <input type="checkbox" /> Email Notifications\r
              </label>\r
              <label style={{
              display: 'block',
              marginBottom: '0.5rem'
            }}>\r
                <input type="checkbox" /> Push Notifications\r
              </label>\r
            </section>\r
\r
            <section>\r
              <h4 style={{
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>Language</h4>\r
              <select style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '0.375rem',
              border: '1px solid #d1d5db'
            }}>\r
                <option>English</option>\r
                <option>Spanish</option>\r
                <option>French</option>\r
              </select>\r
            </section>\r
          </Sheet.Body>\r
          <Sheet.Footer>\r
            <button onClick={() => alert('Saved preferences')} style={{
            padding: '0.5rem 1rem',
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '0.375rem'
          }}>\r
              Save Changes\r
            </button>\r
          </Sheet.Footer>\r
        </Sheet.Content>\r
      </Sheet.Root>\r
    </div>
}`,...(G=(q=j.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const Ce=["Default","TopSheetNoClose","LeftSheetWithCustomTrigger","BottomSheet","FullWidthSheet","ControlledSheetExample","FullCustomExample"];export{f as BottomSheet,y as ControlledSheetExample,g as Default,j as FullCustomExample,b as FullWidthSheet,x as LeftSheetWithCustomTrigger,S as TopSheetNoClose,Ce as __namedExportsOrder,je as default};
