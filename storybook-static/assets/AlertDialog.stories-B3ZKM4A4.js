import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as C,R as i}from"./index-BlmOqGMO.js";import{d as l,l as d,m as W}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const Y=W`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,z=l.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,L=l.div`
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 100%;
  max-width: 28rem;
  padding: 1.5rem;
  animation: ${Y} 0.2s ease-out;
  position: relative;
  max-height: 85vh;
  overflow-y: auto;
`,P=l.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
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
  
  &::before, &::after {
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
`,G=l.h2`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`,M=l.p`
  margin: 0.5rem 0 1.5rem 0;
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.5;
`,_=l.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1.5rem;
`,$=l.button`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${t=>{switch(t.variant){case"destructive":return d`
          background-color: #ef4444;
          color: white;
          border: none;
          &:hover {
            background-color: #dc2626;
          }
        `;case"outline":return d`
          background-color: transparent;
          color: #111827;
          border: 1px solid #d1d5db;
          &:hover {
            background-color: #f3f4f6;
            border-color: #9ca3af;
          }
        `;case"ghost":return d`
          background-color: transparent;
          color: #111827;
          border: none;
          &:hover {
            background-color: #f3f4f6;
          }
        `;default:return d`
          background-color: #3b82f6;
          color: white;
          border: none;
          &:hover {
            background-color: #2563eb;
          }
        `}}}
`,q=l.button`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.875rem;
  background-color: transparent;
  color: #111827;
  border: 1px solid #d1d5db;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f3f4f6;
    border-color: #9ca3af;
  }
`,s=i.createContext({open:!1,setOpen:()=>{}}),H=({children:t})=>{const[o,n]=C.useState(!1);return e.jsx(s.Provider,{value:{open:o,setOpen:n},children:t})},J=({children:t,asChild:o=!1})=>{const{setOpen:n}=i.useContext(s);return o?i.cloneElement(t,{onClick:()=>n(!0)}):e.jsx("div",{onClick:()=>n(!0),children:t})},K=({children:t,onClose:o,showCloseButton:n=!0})=>{const{open:a,setOpen:c}=i.useContext(s),p=C.useRef(null);return C.useEffect(()=>{const f=h=>{h.key==="Escape"&&(c(!1),o&&o())},x=h=>{p.current&&!p.current.contains(h.target)&&(c(!1),o&&o())};return a&&(document.addEventListener("keydown",f),document.addEventListener("mousedown",x)),()=>{document.removeEventListener("keydown",f),document.removeEventListener("mousedown",x)}},[a,c,o]),a?e.jsx(z,{children:e.jsxs(L,{ref:p,children:[n&&e.jsx(P,{onClick:()=>{c(!1),o&&o()}}),t]})}):null},Q=({children:t})=>e.jsx(G,{children:t}),U=({children:t})=>e.jsx(M,{children:t}),V=({children:t})=>e.jsx(_,{children:t}),X=({children:t,onClick:o,variant:n="default"})=>{const{setOpen:a}=i.useContext(s);return e.jsx($,{variant:n,onClick:()=>{a(!1),o&&o()},children:t})},Z=({children:t,onClick:o})=>{const{setOpen:n}=i.useContext(s);return e.jsx(q,{onClick:()=>{n(!1),o&&o()},children:t})},r={Root:H,Trigger:J,Content:K,Title:Q,Description:U,Footer:V,Action:X,Cancel:Z},ne={title:"Components/New/AlertDialog",component:r.Root,tags:["autodocs"]},g={render:()=>e.jsxs(r.Root,{children:[e.jsx(r.Trigger,{children:"Open Dialog"}),e.jsxs(r.Content,{children:[e.jsx(r.Title,{children:"Confirm Action"}),e.jsx(r.Description,{children:"Are you sure you want to proceed with this action? This cannot be undone."}),e.jsxs(r.Footer,{children:[e.jsx(r.Cancel,{children:"Cancel"}),e.jsx(r.Action,{onClick:()=>alert("Confirmed!"),children:"Continue"})]})]})]})},u={render:()=>e.jsxs(r.Root,{children:[e.jsx(r.Trigger,{children:"Open Dialog"}),e.jsxs(r.Content,{showCloseButton:!0,children:[e.jsx(r.Title,{children:"Are You Sure?"}),e.jsx(r.Description,{children:"This action will permanently delete your account. Please confirm."}),e.jsxs(r.Footer,{children:[e.jsx(r.Cancel,{onClick:()=>alert("Canceled"),children:"No, Go Back"}),e.jsx(r.Action,{variant:"destructive",onClick:()=>alert("Account deleted"),children:"Yes, Delete Account"})]})]})]})},D={render:()=>e.jsxs(r.Root,{children:[e.jsx(r.Trigger,{children:"Open Dialog (No Close)"}),e.jsxs(r.Content,{showCloseButton:!1,children:[e.jsx(r.Title,{children:"Important Notice"}),e.jsx(r.Description,{children:"This dialog does not have a close button. You can only close it using the footer buttons."}),e.jsx(r.Footer,{children:e.jsx(r.Cancel,{children:"Dismiss"})})]})]})},m={render:()=>e.jsxs(r.Root,{children:[e.jsx(r.Trigger,{children:"Delete Item"}),e.jsxs(r.Content,{children:[e.jsx(r.Title,{children:"Delete Confirmation"}),e.jsx(r.Description,{children:"This will delete the selected item permanently. Are you sure?"}),e.jsxs(r.Footer,{children:[e.jsx(r.Cancel,{children:"Cancel"}),e.jsx(r.Action,{variant:"destructive",onClick:()=>alert("Item deleted"),children:"Delete"})]})]})]})},A={render:()=>e.jsxs(r.Root,{children:[e.jsx(r.Trigger,{asChild:!0,children:e.jsx("button",{style:{padding:"0.5rem 1rem",backgroundColor:"#3b82f6",color:"white"},children:"Click Me"})}),e.jsxs(r.Content,{children:[e.jsx(r.Title,{children:"Custom Trigger Example"}),e.jsxs(r.Description,{children:["This dialog was opened using a custom trigger element via ",e.jsx("code",{children:"asChild"}),"."]}),e.jsx(r.Footer,{children:e.jsx(r.Cancel,{children:"Close"})})]})]})};var b,j,T;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <AlertDialog.Root>\r
      <AlertDialog.Trigger>Open Dialog</AlertDialog.Trigger>\r
      <AlertDialog.Content>\r
        <AlertDialog.Title>Confirm Action</AlertDialog.Title>\r
        <AlertDialog.Description>\r
          Are you sure you want to proceed with this action? This cannot be undone.\r
        </AlertDialog.Description>\r
        <AlertDialog.Footer>\r
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>\r
          <AlertDialog.Action onClick={() => alert('Confirmed!')}>Continue</AlertDialog.Action>\r
        </AlertDialog.Footer>\r
      </AlertDialog.Content>\r
    </AlertDialog.Root>
}`,...(T=(j=g.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var v,k,w;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <AlertDialog.Root>\r
      <AlertDialog.Trigger>Open Dialog</AlertDialog.Trigger>\r
      <AlertDialog.Content showCloseButton={true}>\r
        <AlertDialog.Title>Are You Sure?</AlertDialog.Title>\r
        <AlertDialog.Description>\r
          This action will permanently delete your account. Please confirm.\r
        </AlertDialog.Description>\r
        <AlertDialog.Footer>\r
          <AlertDialog.Cancel onClick={() => alert('Canceled')}>No, Go Back</AlertDialog.Cancel>\r
          <AlertDialog.Action variant="destructive" onClick={() => alert('Account deleted')}>\r
            Yes, Delete Account\r
          </AlertDialog.Action>\r
        </AlertDialog.Footer>\r
      </AlertDialog.Content>\r
    </AlertDialog.Root>
}`,...(w=(k=u.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var y,R,F;D.parameters={...D.parameters,docs:{...(y=D.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <AlertDialog.Root>\r
      <AlertDialog.Trigger>Open Dialog (No Close)</AlertDialog.Trigger>\r
      <AlertDialog.Content showCloseButton={false}>\r
        <AlertDialog.Title>Important Notice</AlertDialog.Title>\r
        <AlertDialog.Description>\r
          This dialog does not have a close button. You can only close it using the footer buttons.\r
        </AlertDialog.Description>\r
        <AlertDialog.Footer>\r
          <AlertDialog.Cancel>Dismiss</AlertDialog.Cancel>\r
        </AlertDialog.Footer>\r
      </AlertDialog.Content>\r
    </AlertDialog.Root>
}`,...(F=(R=D.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var O,B,E;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <AlertDialog.Root>\r
      <AlertDialog.Trigger>Delete Item</AlertDialog.Trigger>\r
      <AlertDialog.Content>\r
        <AlertDialog.Title>Delete Confirmation</AlertDialog.Title>\r
        <AlertDialog.Description>\r
          This will delete the selected item permanently. Are you sure?\r
        </AlertDialog.Description>\r
        <AlertDialog.Footer>\r
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>\r
          <AlertDialog.Action variant="destructive" onClick={() => alert('Item deleted')}>\r
            Delete\r
          </AlertDialog.Action>\r
        </AlertDialog.Footer>\r
      </AlertDialog.Content>\r
    </AlertDialog.Root>
}`,...(E=(B=m.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var S,I,N;A.parameters={...A.parameters,docs:{...(S=A.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <AlertDialog.Root>\r
      <AlertDialog.Trigger asChild>\r
        <button style={{
        padding: '0.5rem 1rem',
        backgroundColor: '#3b82f6',
        color: 'white'
      }}>\r
          Click Me\r
        </button>\r
      </AlertDialog.Trigger>\r
      <AlertDialog.Content>\r
        <AlertDialog.Title>Custom Trigger Example</AlertDialog.Title>\r
        <AlertDialog.Description>\r
          This dialog was opened using a custom trigger element via <code>asChild</code>.\r
        </AlertDialog.Description>\r
        <AlertDialog.Footer>\r
          <AlertDialog.Cancel>Close</AlertDialog.Cancel>\r
        </AlertDialog.Footer>\r
      </AlertDialog.Content>\r
    </AlertDialog.Root>
}`,...(N=(I=A.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};const le=["Default","WithCustomTitleAndCloseButton","WithoutCloseButton","DestructiveAction","WithCustomTrigger"];export{g as Default,m as DestructiveAction,u as WithCustomTitleAndCloseButton,A as WithCustomTrigger,D as WithoutCloseButton,le as __namedExportsOrder,ne as default};
