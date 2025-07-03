import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as m,R as u}from"./index-BlmOqGMO.js";import{l as C,d as h,m as q}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const I=u.createContext({open:!1,setOpen:()=>{},position:{x:0,y:0},setPosition:()=>{}}),y=u.createContext({open:!1,setOpen:()=>{}}),G=q`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,X=h.div`
  min-width: 220px;
  background-color: white;
  border-radius: 0.375rem;
  padding: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 50;
  animation: ${G} 0.1s ease-out;
  
  ${n=>n.align==="center"&&C`
    transform-origin: center;
  `}
  
  ${n=>n.align==="start"&&C`
    transform-origin: top left;
  `}
  
  ${n=>n.align==="end"&&C`
    transform-origin: top right;
  `}
`,Y=h.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  cursor: pointer;
  user-select: none;
  
  ${n=>!n.disabled&&C`
    &:hover {
      background-color: #f3f4f6;
    }
    
    &:active {
      background-color: #e5e7eb;
    }
  `}
  
  ${n=>n.disabled&&C`
    color: #9ca3af;
    cursor: not-allowed;
  `}
`,J=h.div`
  height: 1px;
  margin: 0.5rem 0;
  background-color: #e5e7eb;
`,K=h(Y)`
  justify-content: space-between;
  
  ${n=>n.isOpen&&C`
    background-color: #f3f4f6;
  `}
`,Q=h.div`
  margin-left: 0.5rem;
`,U=h(X)`
  position: absolute;
  top: 0;
  left: 100%;
  margin-left: 0.5rem;
`,Z=({children:n,className:l})=>{const[o,i]=m.useState(!1),[s,c]=m.useState({x:0,y:0});return e.jsx(I.Provider,{value:{open:o,setOpen:i,position:s,setPosition:c},children:e.jsx("div",{className:l,children:n})})},ee=({children:n,asChild:l=!1,disabled:o=!1,className:i})=>{const{setOpen:s,setPosition:c}=u.useContext(I),g=r=>{o||(r.preventDefault(),s(!0),c({x:r.clientX,y:r.clientY}))};if(l&&u.isValidElement(n)){const r=n;return u.cloneElement(r,{onContextMenu:a=>{var x,d;g(a),(d=(x=r.props).onContextMenu)==null||d.call(x,a)},className:`${r.props.className||""} ${i||""}`.trim()||void 0})}return e.jsx("div",{onContextMenu:g,className:i,children:n})},te=({children:n,className:l,align:o="start",sideOffset:i=0})=>{const{open:s,setOpen:c,position:g}=u.useContext(I),r=m.useRef(null);return m.useEffect(()=>{const a=d=>{r.current&&!r.current.contains(d.target)&&c(!1)},x=d=>{d.key==="Escape"&&c(!1)};return s&&(document.addEventListener("mousedown",a),document.addEventListener("keydown",x)),()=>{document.removeEventListener("mousedown",a),document.removeEventListener("keydown",x)}},[s,c]),m.useEffect(()=>{if(s&&r.current){const a=r.current.getBoundingClientRect(),x=window.innerWidth,d=window.innerHeight;let{x:v,y:R}=g;v+a.width>x&&(v=x-a.width-10),R+a.height>d&&(R=d-a.height-10),r.current.style.position="fixed",r.current.style.top=`${R+i}px`,r.current.style.left=`${v}px`}},[s,g,i]),s?e.jsx(X,{ref:r,className:l,align:o,role:"menu",children:n}):null},ne=({children:n,onSelect:l,disabled:o=!1,className:i})=>{const{setOpen:s}=u.useContext(I),c=()=>{o||(l&&l(),s(!1))};return e.jsx(Y,{onClick:c,disabled:o,className:i,role:"menuitem",children:n})},re=({className:n})=>e.jsx(J,{className:n,role:"separator"}),oe=({children:n,className:l})=>{const[o,i]=m.useState(!1);return e.jsx(y.Provider,{value:{open:o,setOpen:i},children:e.jsx("div",{className:l,children:n})})},ie=({children:n,className:l,disabled:o=!1})=>{const{open:i,setOpen:s}=u.useContext(y),c=()=>{o||s(!0)};return e.jsxs(K,{onMouseEnter:c,disabled:o,isOpen:i,className:l,children:[n,e.jsx(Q,{children:e.jsx(le,{})})]})},se=({children:n,className:l,sideOffset:o=0})=>{const{open:i}=u.useContext(y),s=m.useRef(null);return i?e.jsx(U,{ref:s,className:l,style:{marginLeft:`${o}px`},role:"menu",children:n}):null},le=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6 12L10 8L6 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),t={Root:Z,Trigger:ee,Content:te,Item:ne,Separator:re,Sub:oe,SubTrigger:ie,SubContent:se},xe={title:"Components/New/ContextMenu",component:t.Root,tags:["autodocs"]},p={render:()=>e.jsxs("div",{style:{padding:"2rem"},children:["Right-click anywhere to open the context menu.",e.jsxs(t.Root,{children:[e.jsx(t.Trigger,{children:e.jsx("div",{style:{width:"100%",height:"150px",border:"2px dashed #ccc",marginTop:"1rem",borderRadius:"0.5rem"},children:"Right-click here"})}),e.jsxs(t.Content,{align:"start",children:[e.jsx(t.Item,{onSelect:()=>alert("New File"),children:"New File"}),e.jsx(t.Item,{onSelect:()=>alert("Open"),children:"Open"}),e.jsx(t.Separator,{}),e.jsx(t.Item,{onSelect:()=>alert("Copy"),children:"Copy"}),e.jsx(t.Item,{onSelect:()=>alert("Paste"),children:"Paste"})]})]})]})},M={render:()=>e.jsx("div",{style:{padding:"2rem"},children:e.jsxs(t.Root,{children:[e.jsx(t.Trigger,{children:e.jsx("div",{style:{width:"100%",height:"150px",border:"2px dashed #ccc",marginTop:"1rem",borderRadius:"0.5rem"},children:"Right-click here"})}),e.jsxs(t.Content,{align:"start",children:[e.jsx(t.Item,{onSelect:()=>alert("Cut"),children:"Cut"}),e.jsxs(t.Sub,{children:[e.jsx(t.SubTrigger,{children:"More Actions"}),e.jsxs(t.SubContent,{sideOffset:8,children:[e.jsx(t.Item,{onSelect:()=>alert("Save As"),children:"Save As..."}),e.jsx(t.Item,{onSelect:()=>alert("Export"),children:"Export"})]})]}),e.jsx(t.Separator,{}),e.jsx(t.Item,{onSelect:()=>alert("Exit"),children:"Exit"})]})]})})},S={render:()=>e.jsx("div",{style:{padding:"2rem"},children:e.jsxs(t.Root,{children:[e.jsx(t.Trigger,{children:e.jsx("div",{style:{width:"100%",height:"150px",border:"2px dashed #ccc",marginTop:"1rem",borderRadius:"0.5rem"},children:"Right-click here"})}),e.jsxs(t.Content,{align:"start",children:[e.jsx(t.Item,{onSelect:()=>alert("Enabled item"),children:"Enabled Item"}),e.jsx(t.Item,{disabled:!0,onSelect:()=>alert("This should not trigger"),children:"Disabled Item"}),e.jsx(t.Separator,{}),e.jsx(t.Item,{onSelect:()=>alert("Another enabled item"),children:"Another Enabled Item"})]})]})})},f={render:()=>e.jsx("div",{style:{padding:"2rem",textAlign:"center"},children:e.jsxs(t.Root,{children:[e.jsx(t.Trigger,{children:e.jsx("button",{children:"Right-click me"})}),e.jsxs(t.Content,{align:"center",sideOffset:10,children:[e.jsx(t.Item,{onSelect:()=>alert("Align center menu"),children:"Centered Action"}),e.jsx(t.Item,{onSelect:()=>alert("Another action"),children:"Another Action"})]})]})})},b={render:()=>e.jsx("div",{style:{padding:"2rem",textAlign:"center"},children:e.jsxs(t.Root,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx("button",{style:{padding:"0.75rem 1.5rem",fontSize:"1rem"},children:"Right-click me (asChild)"})}),e.jsxs(t.Content,{children:[e.jsx(t.Item,{onSelect:()=>alert("Action 1"),children:"Action One"}),e.jsx(t.Item,{onSelect:()=>alert("Action 2"),children:"Action Two"})]})]})})},j={render:()=>e.jsx("div",{style:{padding:"2rem"},children:e.jsxs(t.Root,{children:[e.jsx(t.Trigger,{children:e.jsx("div",{style:{width:"100%",height:"150px",border:"2px dashed #ccc",marginTop:"1rem",borderRadius:"0.5rem",backgroundColor:"#f9fafb"},children:"Right-click for custom menu"})}),e.jsxs(t.Content,{align:"end",sideOffset:12,children:[e.jsx(t.Item,{onSelect:()=>alert("Edit"),children:"Edit"}),e.jsx(t.Item,{onSelect:()=>alert("Duplicate"),children:"Duplicate"}),e.jsx(t.Separator,{}),e.jsxs(t.Sub,{children:[e.jsx(t.SubTrigger,{children:"Delete Options"}),e.jsxs(t.SubContent,{sideOffset:8,children:[e.jsx(t.Item,{onSelect:()=>alert("Soft Delete"),children:"Soft Delete"}),e.jsx(t.Item,{onSelect:()=>alert("Hard Delete"),children:"Hard Delete"})]})]}),e.jsx(t.Separator,{}),e.jsx(t.Item,{onSelect:()=>alert("Cancel"),disabled:!0,children:"Cancel (disabled)"})]})]})})};var T,w,A;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>\r
      Right-click anywhere to open the context menu.\r
      <ContextMenu.Root>\r
        <ContextMenu.Trigger>\r
          <div style={{
          width: '100%',
          height: '150px',
          border: '2px dashed #ccc',
          marginTop: '1rem',
          borderRadius: '0.5rem'
        }}>\r
            Right-click here\r
          </div>\r
        </ContextMenu.Trigger>\r
        <ContextMenu.Content align="start">\r
          <ContextMenu.Item onSelect={() => alert('New File')}>New File</ContextMenu.Item>\r
          <ContextMenu.Item onSelect={() => alert('Open')}>Open</ContextMenu.Item>\r
          <ContextMenu.Separator />\r
          <ContextMenu.Item onSelect={() => alert('Copy')}>Copy</ContextMenu.Item>\r
          <ContextMenu.Item onSelect={() => alert('Paste')}>Paste</ContextMenu.Item>\r
        </ContextMenu.Content>\r
      </ContextMenu.Root>\r
    </div>
}`,...(A=(w=p.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var E,k,O;M.parameters={...M.parameters,docs:{...(E=M.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>\r
      <ContextMenu.Root>\r
        <ContextMenu.Trigger>\r
          <div style={{
          width: '100%',
          height: '150px',
          border: '2px dashed #ccc',
          marginTop: '1rem',
          borderRadius: '0.5rem'
        }}>\r
            Right-click here\r
          </div>\r
        </ContextMenu.Trigger>\r
        <ContextMenu.Content align="start">\r
          <ContextMenu.Item onSelect={() => alert('Cut')}>Cut</ContextMenu.Item>\r
          <ContextMenu.Sub>\r
            <ContextMenu.SubTrigger>More Actions</ContextMenu.SubTrigger>\r
            <ContextMenu.SubContent sideOffset={8}>\r
              <ContextMenu.Item onSelect={() => alert('Save As')}>Save As...</ContextMenu.Item>\r
              <ContextMenu.Item onSelect={() => alert('Export')}>Export</ContextMenu.Item>\r
            </ContextMenu.SubContent>\r
          </ContextMenu.Sub>\r
          <ContextMenu.Separator />\r
          <ContextMenu.Item onSelect={() => alert('Exit')}>Exit</ContextMenu.Item>\r
        </ContextMenu.Content>\r
      </ContextMenu.Root>\r
    </div>
}`,...(O=(k=M.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var D,$,L;S.parameters={...S.parameters,docs:{...(D=S.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>\r
      <ContextMenu.Root>\r
        <ContextMenu.Trigger>\r
          <div style={{
          width: '100%',
          height: '150px',
          border: '2px dashed #ccc',
          marginTop: '1rem',
          borderRadius: '0.5rem'
        }}>\r
            Right-click here\r
          </div>\r
        </ContextMenu.Trigger>\r
        <ContextMenu.Content align="start">\r
          <ContextMenu.Item onSelect={() => alert('Enabled item')}>Enabled Item</ContextMenu.Item>\r
          <ContextMenu.Item disabled onSelect={() => alert('This should not trigger')}>\r
            Disabled Item\r
          </ContextMenu.Item>\r
          <ContextMenu.Separator />\r
          <ContextMenu.Item onSelect={() => alert('Another enabled item')}>Another Enabled Item</ContextMenu.Item>\r
        </ContextMenu.Content>\r
      </ContextMenu.Root>\r
    </div>
}`,...(L=($=S.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var P,W,F;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem',
    textAlign: 'center'
  }}>\r
      <ContextMenu.Root>\r
        <ContextMenu.Trigger>\r
          <button>Right-click me</button>\r
        </ContextMenu.Trigger>\r
        <ContextMenu.Content align="center" sideOffset={10}>\r
          <ContextMenu.Item onSelect={() => alert('Align center menu')}>Centered Action</ContextMenu.Item>\r
          <ContextMenu.Item onSelect={() => alert('Another action')}>Another Action</ContextMenu.Item>\r
        </ContextMenu.Content>\r
      </ContextMenu.Root>\r
    </div>
}`,...(F=(W=f.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var H,N,z;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem',
    textAlign: 'center'
  }}>\r
      <ContextMenu.Root>\r
        <ContextMenu.Trigger asChild>\r
          <button style={{
          padding: '0.75rem 1.5rem',
          fontSize: '1rem'
        }}>\r
            Right-click me (asChild)\r
          </button>\r
        </ContextMenu.Trigger>\r
        <ContextMenu.Content>\r
          <ContextMenu.Item onSelect={() => alert('Action 1')}>Action One</ContextMenu.Item>\r
          <ContextMenu.Item onSelect={() => alert('Action 2')}>Action Two</ContextMenu.Item>\r
        </ContextMenu.Content>\r
      </ContextMenu.Root>\r
    </div>
}`,...(z=(N=b.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var B,_,V;j.parameters={...j.parameters,docs:{...(B=j.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>\r
      <ContextMenu.Root>\r
        <ContextMenu.Trigger>\r
          <div style={{
          width: '100%',
          height: '150px',
          border: '2px dashed #ccc',
          marginTop: '1rem',
          borderRadius: '0.5rem',
          backgroundColor: '#f9fafb'
        }}>\r
            Right-click for custom menu\r
          </div>\r
        </ContextMenu.Trigger>\r
        <ContextMenu.Content align="end" sideOffset={12}>\r
          <ContextMenu.Item onSelect={() => alert('Edit')}>Edit</ContextMenu.Item>\r
          <ContextMenu.Item onSelect={() => alert('Duplicate')}>Duplicate</ContextMenu.Item>\r
          <ContextMenu.Separator />\r
          <ContextMenu.Sub>\r
            <ContextMenu.SubTrigger>Delete Options</ContextMenu.SubTrigger>\r
            <ContextMenu.SubContent sideOffset={8}>\r
              <ContextMenu.Item onSelect={() => alert('Soft Delete')}>Soft Delete</ContextMenu.Item>\r
              <ContextMenu.Item onSelect={() => alert('Hard Delete')}>Hard Delete</ContextMenu.Item>\r
            </ContextMenu.SubContent>\r
          </ContextMenu.Sub>\r
          <ContextMenu.Separator />\r
          <ContextMenu.Item onSelect={() => alert('Cancel')} disabled>\r
            Cancel (disabled)\r
          </ContextMenu.Item>\r
        </ContextMenu.Content>\r
      </ContextMenu.Root>\r
    </div>
}`,...(V=(_=j.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};const me=["Default","WithSubmenu","WithDisabledItems","CenterAligned","WithAsChild","FullCustomExample"];export{f as CenterAligned,p as Default,j as FullCustomExample,b as WithAsChild,S as WithDisabledItems,M as WithSubmenu,me as __namedExportsOrder,xe as default};
