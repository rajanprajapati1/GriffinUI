import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as l,r as g}from"./index-BlmOqGMO.js";import{d as i,l as M,m as H}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const b=l.createContext({activeMenu:null,setActiveMenu:()=>{}}),h=l.createContext({open:!1,setOpen:()=>{},value:""}),W=l.createContext({value:void 0,onValueChange:void 0}),R=l.createContext({open:!1,setOpen:()=>{}}),B=H`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,U=i.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 0.375rem;
  border: 1px solid #e5e7eb;
  padding: 0.25rem;
`,_=i.div`
  position: relative;
`,X=i.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  border: none;
  background-color: ${r=>r.active?"#f3f4f6":"transparent"};
  color: #374151;
  cursor: pointer;
  
  &:hover {
    background-color: #f3f4f6;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
  }
`,z=i.div`
  position: absolute;
  top: 100%;
  min-width: 220px;
  background-color: white;
  border-radius: 0.375rem;
  padding: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 50;
  animation: ${B} 0.1s ease-out;
  
  ${r=>r.align==="center"&&M`
    left: 50%;
    transform: translateX(-50%);
  `}
  
  ${r=>r.align==="start"&&M`
    left: 0;
  `}
  
  ${r=>r.align==="end"&&M`
    right: 0;
  `}
`,I=i.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  cursor: pointer;
  user-select: none;
  
  ${r=>!r.disabled&&M`
    &:hover {
      background-color: #f3f4f6;
    }
    
    &:active {
      background-color: #e5e7eb;
    }
  `}
  
  ${r=>r.disabled&&M`
    color: #9ca3af;
    cursor: not-allowed;
  `}
`,q=i.div`
  height: 1px;
  margin: 0.5rem 0;
  background-color: #e5e7eb;
`,J=i.div`
  margin: 0.25rem 0;
`,K=i(I)`
  justify-content: space-between;
`,Q=i.div`
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
`,Y=i(I)`
  justify-content: space-between;
`,Z=i.div`
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
`,ee=i(I)`
  justify-content: space-between;
  
  ${r=>r.isOpen&&M`
    background-color: #f3f4f6;
  `}
`,ne=i.div`
  margin-left: 0.5rem;
`,re=i(z)`
  position: absolute;
  top: 0;
  left: 100%;
  margin-left: 0.5rem;
`,oe=({children:r,className:o})=>{const[t,a]=g.useState(null);return e.jsx(b.Provider,{value:{activeMenu:t,setActiveMenu:a},children:e.jsx(U,{className:o,role:"menubar",children:r})})},te=({children:r,value:o,className:t})=>{const{activeMenu:a,setActiveMenu:s}=l.useContext(b),[u,c]=g.useState(!1);return g.useEffect(()=>{a!==o&&c(!1)},[a,o]),e.jsx(h.Provider,{value:{open:u,setOpen:c,value:o},children:e.jsx(_,{className:t,role:"none",children:r})})},ae=({children:r,className:o})=>{const{activeMenu:t,setActiveMenu:a}=l.useContext(b),{open:s,setOpen:u,value:c}=l.useContext(h),d=()=>{t===c?(a(null),u(!1)):(a(c),u(!0))};return e.jsx(X,{onClick:d,active:s,className:o,role:"menuitem","aria-expanded":s,"aria-haspopup":"true",children:r})},le=({children:r,align:o="start",sideOffset:t=8,className:a})=>{const{open:s,setOpen:u}=l.useContext(h),{setActiveMenu:c}=l.useContext(b),d=g.useRef(null);return g.useEffect(()=>{const m=f=>{d.current&&!d.current.contains(f.target)&&(u(!1),c(null))},p=f=>{f.key==="Escape"&&(u(!1),c(null))};return s&&(document.addEventListener("mousedown",m),document.addEventListener("keydown",p)),()=>{document.removeEventListener("mousedown",m),document.removeEventListener("keydown",p)}},[s,u,c]),s?e.jsx(z,{ref:d,align:o,className:a,style:{marginTop:`${t}px`},role:"menu",children:r}):null},ue=({children:r,onSelect:o,disabled:t=!1,className:a})=>{const{setOpen:s}=l.useContext(h),{setActiveMenu:u}=l.useContext(b),c=()=>{t||(o&&o(),s(!1),u(null))};return e.jsx(I,{onClick:c,disabled:t,className:a,role:"menuitem",children:r})},se=({className:r})=>e.jsx(q,{className:r,role:"separator"}),ce=({children:r,className:o})=>e.jsx(J,{className:o,role:"group",children:r}),ie=({children:r,checked:o=!1,onCheckedChange:t,disabled:a=!1,className:s})=>{const{setOpen:u}=l.useContext(h),{setActiveMenu:c}=l.useContext(b),d=()=>{a||(t&&t(!o),u(!1),c(null))};return e.jsxs(K,{onClick:d,disabled:a,className:s,role:"menuitemcheckbox","aria-checked":o,children:[r,e.jsx(Q,{checked:o,children:o&&e.jsx(he,{})})]})},de=({children:r,value:o,onValueChange:t,className:a})=>e.jsx(W.Provider,{value:{value:o,onValueChange:t},children:e.jsx("div",{className:a,role:"radiogroup",children:r})}),be=({children:r,value:o,disabled:t=!1,className:a})=>{const{setOpen:s}=l.useContext(h),{setActiveMenu:u}=l.useContext(b),{value:c,onValueChange:d}=l.useContext(W),m=c===o,p=()=>{t||(d&&d(o),s(!1),u(null))};return e.jsxs(Y,{onClick:p,disabled:t,className:a,role:"menuitemradio","aria-checked":m,children:[r,e.jsx(Z,{checked:m,children:m&&e.jsx(pe,{})})]})},me=({children:r,className:o})=>{const[t,a]=g.useState(!1);return e.jsx(R.Provider,{value:{open:t,setOpen:a},children:e.jsx("div",{className:o,children:r})})},Me=({children:r,className:o,disabled:t=!1})=>{const{open:a,setOpen:s}=l.useContext(R),u=()=>{t||s(!0)};return e.jsxs(ee,{onMouseEnter:u,disabled:t,isOpen:a,className:o,role:"menuitem","aria-haspopup":"true","aria-expanded":a,children:[r,e.jsx(ne,{children:e.jsx(xe,{})})]})},ge=({children:r,className:o,sideOffset:t=0})=>{const{open:a}=l.useContext(R);return a?e.jsx(re,{className:o,style:{marginLeft:`${t}px`},role:"menu",children:r}):null},he=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13.3334 4L6.00008 11.3333L2.66675 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),pe=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{cx:"8",cy:"8",r:"4",fill:"currentColor"})}),xe=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6 12L10 8L6 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),n={Root:oe,Menu:te,Trigger:ae,Content:le,Item:ue,Separator:se,Group:ce,CheckboxItem:ie,RadioGroup:de,RadioItem:be,SubMenu:me,SubTrigger:Me,SubContent:ge},Ie={title:"Components/New/Menubar",component:n.Root,subcomponents:{Menu:n.Menu,Trigger:n.Trigger,Content:n.Content,Item:n.Item,Separator:n.Separator,Group:n.Group,CheckboxItem:n.CheckboxItem,RadioGroup:n.RadioGroup,RadioItem:n.RadioItem,SubMenu:n.SubMenu,SubTrigger:n.SubTrigger,SubContent:n.SubContent},tags:["autodocs"]},x={render:()=>e.jsxs(n.Root,{children:[e.jsxs(n.Menu,{value:"file",children:[e.jsx(n.Trigger,{children:"File"}),e.jsxs(n.Content,{children:[e.jsx(n.Item,{onSelect:()=>console.log("New File"),children:"New File"}),e.jsx(n.Item,{onSelect:()=>console.log("Open"),children:"Open"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{onSelect:()=>console.log("Save"),children:"Save"}),e.jsx(n.Item,{onSelect:()=>console.log("Save As"),children:"Save As..."})]})]}),e.jsxs(n.Menu,{value:"edit",children:[e.jsx(n.Trigger,{children:"Edit"}),e.jsxs(n.Content,{children:[e.jsx(n.Item,{onSelect:()=>console.log("Cut"),children:"Cut"}),e.jsx(n.Item,{onSelect:()=>console.log("Copy"),children:"Copy"}),e.jsx(n.Item,{onSelect:()=>console.log("Paste"),children:"Paste"})]})]}),e.jsxs(n.Menu,{value:"help",children:[e.jsx(n.Trigger,{children:"Help"}),e.jsx(n.Content,{children:e.jsx(n.Item,{onSelect:()=>console.log("About"),children:"About"})})]})]})},C={render:()=>e.jsx(n.Root,{children:e.jsxs(n.Menu,{value:"view",children:[e.jsx(n.Trigger,{children:"View"}),e.jsxs(n.Content,{children:[e.jsx(n.CheckboxItem,{checked:!0,onCheckedChange:r=>console.log(`Show Grid: ${r}`),children:"Show Grid"}),e.jsx(n.CheckboxItem,{checked:!1,onCheckedChange:r=>console.log(`Snap to Grid: ${r}`),children:"Snap to Grid"})]})]})})},j={render:()=>e.jsx(n.Root,{children:e.jsxs(n.Menu,{value:"theme",children:[e.jsx(n.Trigger,{children:"Theme"}),e.jsx(n.Content,{children:e.jsxs(n.RadioGroup,{value:"light",onValueChange:r=>console.log(`Theme changed to: ${r}`),children:[e.jsx(n.RadioItem,{value:"light",children:"Light"}),e.jsx(n.RadioItem,{value:"dark",children:"Dark"}),e.jsx(n.RadioItem,{value:"system",children:"System"})]})})]})})},S={render:()=>e.jsx(n.Root,{children:e.jsxs(n.Menu,{value:"file",children:[e.jsx(n.Trigger,{children:"File"}),e.jsxs(n.Content,{children:[e.jsx(n.Item,{onSelect:()=>console.log("New File"),children:"New File"}),e.jsx(n.Item,{onSelect:()=>console.log("Open"),children:"Open"}),e.jsxs(n.SubMenu,{children:[e.jsx(n.SubTrigger,{children:"Open Recent"}),e.jsxs(n.SubContent,{children:[e.jsx(n.Item,{onSelect:()=>console.log("Open Recent File 1"),children:"File 1"}),e.jsx(n.Item,{onSelect:()=>console.log("Open Recent File 2"),children:"File 2"})]})]}),e.jsx(n.Separator,{}),e.jsx(n.Item,{onSelect:()=>console.log("Exit"),children:"Exit"})]})]})})},v={render:()=>e.jsxs(n.Root,{style:{marginBottom:"2rem"},children:[e.jsxs(n.Menu,{value:"file",children:[e.jsx(n.Trigger,{children:"File"}),e.jsxs(n.Content,{children:[e.jsx(n.Item,{onSelect:()=>console.log("New Project"),children:"New Project"}),e.jsx(n.Item,{onSelect:()=>console.log("Open Project"),children:"Open Project"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{onSelect:()=>console.log("Save Project"),children:"Save"})]})]}),e.jsxs(n.Menu,{value:"edit",children:[e.jsx(n.Trigger,{children:"Edit"}),e.jsxs(n.Content,{children:[e.jsx(n.Item,{onSelect:()=>console.log("Undo"),children:"Undo"}),e.jsx(n.Item,{onSelect:()=>console.log("Redo"),children:"Redo"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{onSelect:()=>console.log("Preferences"),children:"Preferences"})]})]}),e.jsxs(n.Menu,{value:"view",children:[e.jsx(n.Trigger,{children:"View"}),e.jsxs(n.Content,{children:[e.jsxs(n.RadioGroup,{value:"default",onValueChange:r=>console.log(`Layout: ${r}`),children:[e.jsx(n.RadioItem,{value:"default",children:"Default Layout"}),e.jsx(n.RadioItem,{value:"vertical",children:"Vertical Layout"}),e.jsx(n.RadioItem,{value:"horizontal",children:"Horizontal Layout"})]}),e.jsx(n.Separator,{}),e.jsx(n.CheckboxItem,{checked:!0,onCheckedChange:r=>console.log(`Show Toolbar: ${r}`),children:"Show Toolbar"})]})]}),e.jsxs(n.Menu,{value:"help",children:[e.jsx(n.Trigger,{children:"Help"}),e.jsxs(n.Content,{children:[e.jsx(n.Item,{onSelect:()=>console.log("Documentation"),children:"Documentation"}),e.jsx(n.Item,{onSelect:()=>console.log("Support"),children:"Support"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{onSelect:()=>console.log("About App"),children:"About"})]})]})]})};var k,w,T;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Menubar.Root>\r
      <Menubar.Menu value="file">\r
        <Menubar.Trigger>File</Menubar.Trigger>\r
        <Menubar.Content>\r
          <Menubar.Item onSelect={() => console.log('New File')}>New File</Menubar.Item>\r
          <Menubar.Item onSelect={() => console.log('Open')}>Open</Menubar.Item>\r
          <Menubar.Separator />\r
          <Menubar.Item onSelect={() => console.log('Save')}>Save</Menubar.Item>\r
          <Menubar.Item onSelect={() => console.log('Save As')}>Save As...</Menubar.Item>\r
        </Menubar.Content>\r
      </Menubar.Menu>\r
\r
      <Menubar.Menu value="edit">\r
        <Menubar.Trigger>Edit</Menubar.Trigger>\r
        <Menubar.Content>\r
          <Menubar.Item onSelect={() => console.log('Cut')}>Cut</Menubar.Item>\r
          <Menubar.Item onSelect={() => console.log('Copy')}>Copy</Menubar.Item>\r
          <Menubar.Item onSelect={() => console.log('Paste')}>Paste</Menubar.Item>\r
        </Menubar.Content>\r
      </Menubar.Menu>\r
\r
      <Menubar.Menu value="help">\r
        <Menubar.Trigger>Help</Menubar.Trigger>\r
        <Menubar.Content>\r
          <Menubar.Item onSelect={() => console.log('About')}>About</Menubar.Item>\r
        </Menubar.Content>\r
      </Menubar.Menu>\r
    </Menubar.Root>
}`,...(T=(w=x.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var y,O,G;C.parameters={...C.parameters,docs:{...(y=C.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Menubar.Root>\r
      <Menubar.Menu value="view">\r
        <Menubar.Trigger>View</Menubar.Trigger>\r
        <Menubar.Content>\r
          <Menubar.CheckboxItem checked={true} onCheckedChange={checked => console.log(\`Show Grid: \${checked}\`)}>\r
            Show Grid\r
          </Menubar.CheckboxItem>\r
          <Menubar.CheckboxItem checked={false} onCheckedChange={checked => console.log(\`Snap to Grid: \${checked}\`)}>\r
            Snap to Grid\r
          </Menubar.CheckboxItem>\r
        </Menubar.Content>\r
      </Menubar.Menu>\r
    </Menubar.Root>
}`,...(G=(O=C.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var F,E,L;j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Menubar.Root>\r
      <Menubar.Menu value="theme">\r
        <Menubar.Trigger>Theme</Menubar.Trigger>\r
        <Menubar.Content>\r
          <Menubar.RadioGroup value="light" onValueChange={value => console.log(\`Theme changed to: \${value}\`)}>\r
            <Menubar.RadioItem value="light">Light</Menubar.RadioItem>\r
            <Menubar.RadioItem value="dark">Dark</Menubar.RadioItem>\r
            <Menubar.RadioItem value="system">System</Menubar.RadioItem>\r
          </Menubar.RadioGroup>\r
        </Menubar.Content>\r
      </Menubar.Menu>\r
    </Menubar.Root>
}`,...(L=(E=j.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var A,P,$;S.parameters={...S.parameters,docs:{...(A=S.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Menubar.Root>\r
      <Menubar.Menu value="file">\r
        <Menubar.Trigger>File</Menubar.Trigger>\r
        <Menubar.Content>\r
          <Menubar.Item onSelect={() => console.log('New File')}>New File</Menubar.Item>\r
          <Menubar.Item onSelect={() => console.log('Open')}>Open</Menubar.Item>\r
\r
          <Menubar.SubMenu>\r
            <Menubar.SubTrigger>Open Recent</Menubar.SubTrigger>\r
            <Menubar.SubContent>\r
              <Menubar.Item onSelect={() => console.log('Open Recent File 1')}>File 1</Menubar.Item>\r
              <Menubar.Item onSelect={() => console.log('Open Recent File 2')}>File 2</Menubar.Item>\r
            </Menubar.SubContent>\r
          </Menubar.SubMenu>\r
\r
          <Menubar.Separator />\r
\r
          <Menubar.Item onSelect={() => console.log('Exit')}>Exit</Menubar.Item>\r
        </Menubar.Content>\r
      </Menubar.Menu>\r
    </Menubar.Root>
}`,...($=(P=S.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var N,V,D;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Menubar.Root style={{
    marginBottom: '2rem'
  }}>\r
      <Menubar.Menu value="file">\r
        <Menubar.Trigger>File</Menubar.Trigger>\r
        <Menubar.Content>\r
          <Menubar.Item onSelect={() => console.log('New Project')}>\r
            New Project\r
          </Menubar.Item>\r
          <Menubar.Item onSelect={() => console.log('Open Project')}>\r
            Open Project\r
          </Menubar.Item>\r
          <Menubar.Separator />\r
          <Menubar.Item onSelect={() => console.log('Save Project')}>\r
            Save\r
          </Menubar.Item>\r
        </Menubar.Content>\r
      </Menubar.Menu>\r
\r
      <Menubar.Menu value="edit">\r
        <Menubar.Trigger>Edit</Menubar.Trigger>\r
        <Menubar.Content>\r
          <Menubar.Item onSelect={() => console.log('Undo')}>Undo</Menubar.Item>\r
          <Menubar.Item onSelect={() => console.log('Redo')}>Redo</Menubar.Item>\r
          <Menubar.Separator />\r
          <Menubar.Item onSelect={() => console.log('Preferences')}>\r
            Preferences\r
          </Menubar.Item>\r
        </Menubar.Content>\r
      </Menubar.Menu>\r
\r
      <Menubar.Menu value="view">\r
        <Menubar.Trigger>View</Menubar.Trigger>\r
        <Menubar.Content>\r
          <Menubar.RadioGroup value="default" onValueChange={val => console.log(\`Layout: \${val}\`)}>\r
            <Menubar.RadioItem value="default">Default Layout</Menubar.RadioItem>\r
            <Menubar.RadioItem value="vertical">Vertical Layout</Menubar.RadioItem>\r
            <Menubar.RadioItem value="horizontal">Horizontal Layout</Menubar.RadioItem>\r
          </Menubar.RadioGroup>\r
\r
          <Menubar.Separator />\r
\r
          <Menubar.CheckboxItem checked={true} onCheckedChange={checked => console.log(\`Show Toolbar: \${checked}\`)}>\r
            Show Toolbar\r
          </Menubar.CheckboxItem>\r
        </Menubar.Content>\r
      </Menubar.Menu>\r
\r
      <Menubar.Menu value="help">\r
        <Menubar.Trigger>Help</Menubar.Trigger>\r
        <Menubar.Content>\r
          <Menubar.Item onSelect={() => console.log('Documentation')}>\r
            Documentation\r
          </Menubar.Item>\r
          <Menubar.Item onSelect={() => console.log('Support')}>\r
            Support\r
          </Menubar.Item>\r
          <Menubar.Separator />\r
          <Menubar.Item onSelect={() => console.log('About App')}>\r
            About\r
          </Menubar.Item>\r
        </Menubar.Content>\r
      </Menubar.Menu>\r
    </Menubar.Root>
}`,...(D=(V=v.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};const fe=["Default","WithCheckboxes","WithRadioGroup","WithSubMenus","FullCustomExample"];export{x as Default,v as FullCustomExample,C as WithCheckboxes,j as WithRadioGroup,S as WithSubMenus,fe as __namedExportsOrder,Ie as default};
