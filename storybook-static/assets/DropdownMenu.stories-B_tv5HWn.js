import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as h,R as c}from"./index-BlmOqGMO.js";import{d as l,l as g,m as H}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const w=c.createContext({open:!1,setOpen:()=>{}}),q=c.createContext({value:void 0,onValueChange:void 0}),J=H`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,K=l.div`
  position: relative;
  display: inline-block;
`,Q=l.div`
  position: absolute;
  min-width: 220px;
  background-color: white;
  border-radius: 0.375rem;
  padding: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 50;
  animation: ${J} 0.1s ease-out;
  
  ${n=>n.align==="center"&&g`
    left: 50%;
    transform: translateX(-50%);
  `}
  
  ${n=>n.align==="start"&&g`
    left: 0;
  `}
  
  ${n=>n.align==="end"&&g`
    right: 0;
  `}
`,v=l.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  cursor: pointer;
  user-select: none;
  
  ${n=>!n.disabled&&g`
    &:hover {
      background-color: #f3f4f6;
    }
    
    &:active {
      background-color: #e5e7eb;
    }
  `}
  
  ${n=>n.disabled&&g`
    color: #9ca3af;
    cursor: not-allowed;
  `}
`,U=l.div`
  height: 1px;
  margin: 0.5rem 0;
  background-color: #e5e7eb;
`,Y=l.div`
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
`,Z=l.div`
  margin: 0.25rem 0;
`,ee=l(v)`
  justify-content: space-between;
`,oe=l.div`
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
`,ne=l(v)`
  justify-content: space-between;
`,re=l.div`
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
`,te=({children:n,className:r})=>{const[t,d]=h.useState(!1);return e.jsx(w.Provider,{value:{open:t,setOpen:d},children:e.jsx(K,{className:r,children:n})})},de=({children:n,asChild:r=!1,className:t})=>{const{open:d,setOpen:a}=c.useContext(w),i=()=>{a(!d)};if(r&&c.isValidElement(n)){const s=n;return c.cloneElement(s,{onClick:u=>{var p,m;i(),(m=(p=s.props).onClick)==null||m.call(p,u)},"aria-expanded":d,className:`${s.props.className||""} ${t||""}`.trim()||void 0})}return e.jsx("div",{onClick:i,"aria-expanded":d,className:t,style:{cursor:"pointer"},children:n})},ie=({children:n,align:r="end",sideOffset:t=8,className:d})=>{const{open:a,setOpen:i}=c.useContext(w),s=h.useRef(null);return h.useEffect(()=>{const u=m=>{s.current&&!s.current.contains(m.target)&&i(!1)},p=m=>{m.key==="Escape"&&i(!1)};return a&&(document.addEventListener("mousedown",u),document.addEventListener("keydown",p)),()=>{document.removeEventListener("mousedown",u),document.removeEventListener("keydown",p)}},[a,i]),a?e.jsx(Q,{ref:s,align:r,className:d,style:{top:`${t}px`},children:n}):null},se=({children:n,onSelect:r,disabled:t=!1,className:d})=>{const{setOpen:a}=c.useContext(w),i=()=>{t||(r&&r(),a(!1))};return e.jsx(v,{onClick:i,disabled:t,className:d,role:"menuitem",children:n})},ae=({className:n})=>e.jsx(U,{className:n,role:"separator"}),ce=({children:n,className:r})=>e.jsx(Y,{className:r,children:n}),le=({children:n,className:r})=>e.jsx(Z,{className:r,role:"group",children:n}),ue=({children:n,checked:r=!1,onCheckedChange:t,disabled:d=!1,className:a})=>{const{setOpen:i}=c.useContext(w),s=()=>{d||(t&&t(!r),i(!1))};return e.jsxs(ee,{onClick:s,disabled:d,className:a,role:"menuitemcheckbox","aria-checked":r,children:[n,e.jsx(oe,{checked:r,children:r&&e.jsx(he,{})})]})},pe=({children:n,value:r,onValueChange:t,className:d})=>e.jsx(q.Provider,{value:{value:r,onValueChange:t},children:e.jsx("div",{className:d,role:"radiogroup",children:n})}),me=({children:n,value:r,disabled:t=!1,className:d})=>{const{setOpen:a}=c.useContext(w),{value:i,onValueChange:s}=c.useContext(q),u=i===r,p=()=>{t||(s&&s(r),a(!1))};return e.jsxs(ne,{onClick:p,disabled:t,className:d,role:"menuitemradio","aria-checked":u,children:[n,e.jsx(re,{checked:u,children:u&&e.jsx(we,{})})]})},he=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13.3334 4L6.00008 11.3333L2.66675 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),we=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{cx:"8",cy:"8",r:"4",fill:"currentColor"})}),o={Root:te,Trigger:de,Content:ie,Item:se,Separator:ae,Label:ce,Group:le,CheckboxItem:ue,RadioGroup:pe,RadioItem:me},Ce={title:"Components/New/DropdownMenu",component:o.Root,tags:["autodocs"]},x={render:()=>e.jsx("div",{style:{padding:"2rem"},children:e.jsxs(o.Root,{children:[e.jsx(o.Trigger,{children:"Open Menu"}),e.jsxs(o.Content,{align:"end",children:[e.jsx(o.Item,{onSelect:()=>alert("New File"),children:"New File"}),e.jsx(o.Item,{onSelect:()=>alert("Open"),children:"Open"}),e.jsx(o.Separator,{}),e.jsx(o.Item,{onSelect:()=>alert("Save"),children:"Save"}),e.jsx(o.Item,{onSelect:()=>alert("Save As"),children:"Save As..."})]})]})})},D={render:()=>e.jsx("div",{style:{padding:"2rem"},children:e.jsxs(o.Root,{children:[e.jsx(o.Trigger,{children:"View Options"}),e.jsxs(o.Content,{align:"end",children:[e.jsx(o.CheckboxItem,{checked:!0,onCheckedChange:n=>alert(`Show Grid: ${n}`),children:"Show Grid"}),e.jsx(o.CheckboxItem,{checked:!1,onCheckedChange:n=>alert(`Snap to Grid: ${n}`),children:"Snap to Grid"}),e.jsx(o.CheckboxItem,{checked:!0,onCheckedChange:n=>alert(`Auto Align: ${n}`),children:"Auto Align"})]})]})})},M={render:()=>{const[n,r]=h.useState("option1");return e.jsx("div",{style:{padding:"2rem"},children:e.jsxs(o.Root,{children:[e.jsx(o.Trigger,{children:"Select Theme"}),e.jsx(o.Content,{align:"end",children:e.jsxs(o.RadioGroup,{value:n,onValueChange:r,children:[e.jsx(o.RadioItem,{value:"option1",children:"Light Mode"}),e.jsx(o.RadioItem,{value:"option2",children:"Dark Mode"}),e.jsx(o.RadioItem,{value:"option3",children:"System Default"})]})})]})})}},C={render:()=>e.jsx("div",{style:{padding:"2rem"},children:e.jsxs(o.Root,{children:[e.jsx(o.Trigger,{children:"File Actions"}),e.jsxs(o.Content,{align:"start",children:[e.jsxs(o.Group,{children:[e.jsx(o.Label,{children:"General"}),e.jsx(o.Item,{children:"New File"}),e.jsx(o.Item,{children:"Open"})]}),e.jsx(o.Separator,{}),e.jsxs(o.Group,{children:[e.jsx(o.Label,{children:"Export"}),e.jsx(o.Item,{children:"As PDF"}),e.jsx(o.Item,{children:"As DOCX"})]}),e.jsx(o.Separator,{}),e.jsx(o.Item,{onSelect:()=>alert("Exit"),children:"Exit"})]})]})})},j={render:()=>e.jsx("div",{style:{padding:"2rem"},children:e.jsxs(o.Root,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx("button",{style:{padding:"0.5rem 1rem",fontSize:"1rem"},children:"Custom Trigger Button"})}),e.jsxs(o.Content,{align:"end",children:[e.jsx(o.Item,{onSelect:()=>alert("Action 1"),children:"Action One"}),e.jsx(o.Item,{onSelect:()=>alert("Action 2"),children:"Action Two"})]})]})})},I={render:()=>e.jsx("div",{style:{padding:"2rem"},children:e.jsxs(o.Root,{children:[e.jsx(o.Trigger,{children:"More Actions"}),e.jsxs(o.Content,{align:"end",children:[e.jsx(o.Item,{onSelect:()=>alert("Enabled item"),children:"Enabled Item"}),e.jsx(o.Item,{disabled:!0,onSelect:()=>alert("This should not trigger"),children:"Disabled Item"}),e.jsx(o.Separator,{}),e.jsx(o.Item,{onSelect:()=>alert("Another enabled item"),children:"Another Enabled Item"})]})]})})},S={render:()=>{const[n,r]=h.useState("light"),[t,d]=h.useState(!0);return e.jsx("div",{style:{padding:"2rem"},children:e.jsxs(o.Root,{children:[e.jsx(o.Trigger,{children:"Settings"}),e.jsxs(o.Content,{align:"end",children:[e.jsxs(o.Group,{children:[e.jsx(o.Label,{children:"Appearance"}),e.jsxs(o.RadioGroup,{value:n,onValueChange:r,children:[e.jsx(o.RadioItem,{value:"light",children:"Light Mode"}),e.jsx(o.RadioItem,{value:"dark",children:"Dark Mode"}),e.jsx(o.RadioItem,{value:"system",children:"System"})]})]}),e.jsx(o.Separator,{}),e.jsxs(o.Group,{children:[e.jsx(o.Label,{children:"Preferences"}),e.jsx(o.CheckboxItem,{checked:t,onCheckedChange:d,children:"Enable Notifications"})]}),e.jsx(o.Separator,{}),e.jsx(o.Item,{onSelect:()=>alert("Logout clicked"),children:"Logout"})]})]})})}};var f,b,k;x.parameters={...x.parameters,docs:{...(f=x.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>\r
      <DropdownMenu.Root>\r
        <DropdownMenu.Trigger>Open Menu</DropdownMenu.Trigger>\r
        <DropdownMenu.Content align="end">\r
          <DropdownMenu.Item onSelect={() => alert('New File')}>New File</DropdownMenu.Item>\r
          <DropdownMenu.Item onSelect={() => alert('Open')}>Open</DropdownMenu.Item>\r
          <DropdownMenu.Separator />\r
          <DropdownMenu.Item onSelect={() => alert('Save')}>Save</DropdownMenu.Item>\r
          <DropdownMenu.Item onSelect={() => alert('Save As')}>Save As...</DropdownMenu.Item>\r
        </DropdownMenu.Content>\r
      </DropdownMenu.Root>\r
    </div>
}`,...(k=(b=x.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var R,y,A;D.parameters={...D.parameters,docs:{...(R=D.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>\r
      <DropdownMenu.Root>\r
        <DropdownMenu.Trigger>View Options</DropdownMenu.Trigger>\r
        <DropdownMenu.Content align="end">\r
          <DropdownMenu.CheckboxItem checked={true} onCheckedChange={checked => alert(\`Show Grid: \${checked}\`)}>\r
            Show Grid\r
          </DropdownMenu.CheckboxItem>\r
          <DropdownMenu.CheckboxItem checked={false} onCheckedChange={checked => alert(\`Snap to Grid: \${checked}\`)}>\r
            Snap to Grid\r
          </DropdownMenu.CheckboxItem>\r
          <DropdownMenu.CheckboxItem checked={true} onCheckedChange={checked => alert(\`Auto Align: \${checked}\`)}>\r
            Auto Align\r
          </DropdownMenu.CheckboxItem>\r
        </DropdownMenu.Content>\r
      </DropdownMenu.Root>\r
    </div>
}`,...(A=(y=D.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var G,T,L;M.parameters={...M.parameters,docs:{...(G=M.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string>('option1');
    return <div style={{
      padding: '2rem'
    }}>\r
        <DropdownMenu.Root>\r
          <DropdownMenu.Trigger>Select Theme</DropdownMenu.Trigger>\r
          <DropdownMenu.Content align="end">\r
            <DropdownMenu.RadioGroup value={selected} onValueChange={setSelected}>\r
              <DropdownMenu.RadioItem value="option1">Light Mode</DropdownMenu.RadioItem>\r
              <DropdownMenu.RadioItem value="option2">Dark Mode</DropdownMenu.RadioItem>\r
              <DropdownMenu.RadioItem value="option3">System Default</DropdownMenu.RadioItem>\r
            </DropdownMenu.RadioGroup>\r
          </DropdownMenu.Content>\r
        </DropdownMenu.Root>\r
      </div>;
  }
}`,...(L=(T=M.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var E,O,$;C.parameters={...C.parameters,docs:{...(E=C.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>\r
      <DropdownMenu.Root>\r
        <DropdownMenu.Trigger>File Actions</DropdownMenu.Trigger>\r
        <DropdownMenu.Content align="start">\r
          <DropdownMenu.Group>\r
            <DropdownMenu.Label>General</DropdownMenu.Label>\r
            <DropdownMenu.Item>New File</DropdownMenu.Item>\r
            <DropdownMenu.Item>Open</DropdownMenu.Item>\r
          </DropdownMenu.Group>\r
\r
          <DropdownMenu.Separator />\r
\r
          <DropdownMenu.Group>\r
            <DropdownMenu.Label>Export</DropdownMenu.Label>\r
            <DropdownMenu.Item>As PDF</DropdownMenu.Item>\r
            <DropdownMenu.Item>As DOCX</DropdownMenu.Item>\r
          </DropdownMenu.Group>\r
\r
          <DropdownMenu.Separator />\r
\r
          <DropdownMenu.Item onSelect={() => alert('Exit')}>Exit</DropdownMenu.Item>\r
        </DropdownMenu.Content>\r
      </DropdownMenu.Root>\r
    </div>
}`,...($=(O=C.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var N,F,W;j.parameters={...j.parameters,docs:{...(N=j.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>\r
      <DropdownMenu.Root>\r
        <DropdownMenu.Trigger asChild>\r
          <button style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem'
        }}>Custom Trigger Button</button>\r
        </DropdownMenu.Trigger>\r
        <DropdownMenu.Content align="end">\r
          <DropdownMenu.Item onSelect={() => alert('Action 1')}>Action One</DropdownMenu.Item>\r
          <DropdownMenu.Item onSelect={() => alert('Action 2')}>Action Two</DropdownMenu.Item>\r
        </DropdownMenu.Content>\r
      </DropdownMenu.Root>\r
    </div>
}`,...(W=(F=j.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var V,P,z;I.parameters={...I.parameters,docs:{...(V=I.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem'
  }}>\r
      <DropdownMenu.Root>\r
        <DropdownMenu.Trigger>More Actions</DropdownMenu.Trigger>\r
        <DropdownMenu.Content align="end">\r
          <DropdownMenu.Item onSelect={() => alert('Enabled item')}>Enabled Item</DropdownMenu.Item>\r
          <DropdownMenu.Item disabled onSelect={() => alert('This should not trigger')}>\r
            Disabled Item\r
          </DropdownMenu.Item>\r
          <DropdownMenu.Separator />\r
          <DropdownMenu.Item onSelect={() => alert('Another enabled item')}>Another Enabled Item</DropdownMenu.Item>\r
        </DropdownMenu.Content>\r
      </DropdownMenu.Root>\r
    </div>
}`,...(z=(P=I.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var B,X,_;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [theme, setTheme] = useState<string>('light');
    const [notifications, setNotifications] = useState<boolean>(true);
    return <div style={{
      padding: '2rem'
    }}>\r
        <DropdownMenu.Root>\r
          <DropdownMenu.Trigger>Settings</DropdownMenu.Trigger>\r
          <DropdownMenu.Content align="end">\r
            <DropdownMenu.Group>\r
              <DropdownMenu.Label>Appearance</DropdownMenu.Label>\r
              <DropdownMenu.RadioGroup value={theme} onValueChange={setTheme}>\r
                <DropdownMenu.RadioItem value="light">Light Mode</DropdownMenu.RadioItem>\r
                <DropdownMenu.RadioItem value="dark">Dark Mode</DropdownMenu.RadioItem>\r
                <DropdownMenu.RadioItem value="system">System</DropdownMenu.RadioItem>\r
              </DropdownMenu.RadioGroup>\r
            </DropdownMenu.Group>\r
\r
            <DropdownMenu.Separator />\r
\r
            <DropdownMenu.Group>\r
              <DropdownMenu.Label>Preferences</DropdownMenu.Label>\r
              <DropdownMenu.CheckboxItem checked={notifications} onCheckedChange={setNotifications}>\r
                Enable Notifications\r
              </DropdownMenu.CheckboxItem>\r
            </DropdownMenu.Group>\r
\r
            <DropdownMenu.Separator />\r
\r
            <DropdownMenu.Item onSelect={() => alert('Logout clicked')}>Logout</DropdownMenu.Item>\r
          </DropdownMenu.Content>\r
        </DropdownMenu.Root>\r
      </div>;
  }
}`,...(_=(X=S.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};const je=["Default","WithCheckboxes","WithRadioGroup","WithGroupsAndLabels","WithAsChildTrigger","WithDisabledItems","FullCustomExample"];export{x as Default,S as FullCustomExample,j as WithAsChildTrigger,D as WithCheckboxes,I as WithDisabledItems,C as WithGroupsAndLabels,M as WithRadioGroup,je as __namedExportsOrder,Ce as default};
