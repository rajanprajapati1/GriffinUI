import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as a,R as x}from"./index-BlmOqGMO.js";import{d as c,m as re,l as N}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const I=x.createContext({search:"",setSearch:()=>{},value:"",setValue:()=>{},activeIndex:-1,setActiveIndex:()=>{},filtered:!1,shouldFilter:!0,loop:!0,itemCount:0,setItemCount:()=>{}}),ae=re`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,me=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  animation: ${ae} 0.2s ease-out;
`,se=c.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e5e7eb;
`,de=c.div`
  display: flex;
  margin-right: 0.75rem;
  color: #9ca3af;
`,le=c.input`
  width: 100%;
  background: transparent;
  border: none;
  font-size: 0.95rem;
  outline: none;
  color: #111827;
  
  &::placeholder {
    color: #9ca3af;
  }
`,ie=c.div`
  max-height: 300px;
  overflow-y: auto;
  padding: 0.5rem 0;
`,ce=c.div`
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,ue=c.div`
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,pe=c.div`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  
  ${t=>t.active&&N`
    background-color: #f3f4f6;
  `}
  
  ${t=>!t.disabled&&N`
    &:hover {
      background-color: #f3f4f6;
    }
  `}
  
  ${t=>t.disabled&&N`
    opacity: 0.5;
    cursor: not-allowed;
  `}
`,he=c.div`
  height: 1px;
  background-color: #e5e7eb;
  margin: 0.5rem 0;
`,Ce=c.div`
  padding: 1rem;
  text-align: center;
  color: #6b7280;
  font-size: 0.875rem;
`,xe=({children:t,className:n,label:r,shouldFilter:d=!0,loop:i=!0})=>{const[l,u]=a.useState(""),[p,m]=a.useState(""),[s,v]=a.useState(-1),[f,g]=a.useState(0);return e.jsx(I.Provider,{value:{search:l,setSearch:u,value:p,setValue:m,activeIndex:s,setActiveIndex:v,filtered:l.length>0,shouldFilter:d,loop:i,itemCount:f,setItemCount:g},children:e.jsx(me,{className:n,role:"dialog","aria-label":r,children:t})})},Ie=({placeholder:t="Type a command or search...",value:n,onValueChange:r,className:d,autoFocus:i=!1})=>{const{setSearch:l}=x.useContext(I),u=a.useRef(null);a.useEffect(()=>{i&&u.current&&u.current.focus()},[i]);const p=m=>{const s=m.target.value;r&&r(s),l(s)};return e.jsxs(se,{className:d,children:[e.jsx(de,{children:e.jsx(we,{})}),e.jsx(le,{ref:u,placeholder:t,value:n,onChange:p,autoComplete:"off",autoCorrect:"off",spellCheck:"false","aria-autocomplete":"list"})]})},ve=({children:t,className:n})=>{const{activeIndex:r,setActiveIndex:d,loop:i,itemCount:l}=x.useContext(I),u=a.useRef(null);return a.useEffect(()=>{const p=m=>{l!==0&&(m.key==="ArrowDown"?(m.preventDefault(),d(s=>s===l-1?i?0:s:s+1)):m.key==="ArrowUp"&&(m.preventDefault(),d(s=>s<=0?i?l-1:0:s-1)))};return window.addEventListener("keydown",p),()=>{window.removeEventListener("keydown",p)}},[l,i,d]),e.jsx(ie,{ref:u,className:n,children:t})},fe=({children:t,heading:n,className:r})=>e.jsxs(ce,{className:r,children:[n&&e.jsx(ue,{children:n}),t]}),ge=({children:t,value:n,onSelect:r,disabled:d=!1,className:i})=>{const{search:l,setSearch:u,setValue:p,activeIndex:m,setActiveIndex:s,filtered:v,shouldFilter:f,itemCount:g,setItemCount:R}=x.useContext(I),G=a.useRef(null),[Y,k]=a.useState(!0),[h,ee]=a.useState(-1);a.useEffect(()=>(R(C=>C+1),ee(g),()=>{R(C=>C-1)}),[g,R]),a.useEffect(()=>{if(f&&v&&n){const C=n.toLowerCase(),ne=l.toLowerCase();k(C.includes(ne))}else k(!0)},[f,v,l,n]),a.useEffect(()=>{m===h&&G.current&&G.current.scrollIntoView({behavior:"smooth",block:"nearest"})},[m,h]);const oe=()=>{d||(r&&n&&r(n),p(n||""),u(""))},te=()=>{d||s(h)};return Y?e.jsx(pe,{ref:G,active:m===h,disabled:d,onClick:oe,onMouseEnter:te,className:i,role:"option","aria-selected":m===h,"aria-disabled":d,children:t}):null},je=({className:t})=>e.jsx(he,{className:t,role:"separator"}),Se=({children:t,className:n})=>{const{filtered:r}=x.useContext(I);return r?e.jsx(Ce,{className:n,children:t}):null},we=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M7.25 12.5C10.1495 12.5 12.5 10.1495 12.5 7.25C12.5 4.35051 10.1495 2 7.25 2C4.35051 2 2 4.35051 2 7.25C2 10.1495 4.35051 12.5 7.25 12.5Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M10.9624 10.9625L13.9999 14.0001",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),o={Root:xe,Input:Ie,List:ve,Group:fe,Item:ge,Separator:je,Empty:Se},Re={title:"Components/New/Command",component:o.Root,tags:["autodocs"],argTypes:{shouldFilter:{control:"boolean",defaultValue:!0},loop:{control:"boolean",defaultValue:!0}}},j={render:()=>e.jsxs(o.Root,{children:[e.jsx(o.Input,{placeholder:"Type a command..."}),e.jsxs(o.List,{children:[e.jsxs(o.Group,{heading:"Actions",children:[e.jsx(o.Item,{value:"create",children:"Create New Project"}),e.jsx(o.Item,{value:"edit",children:"Edit Selected"}),e.jsx(o.Item,{value:"delete",children:"Delete Selected"})]}),e.jsx(o.Separator,{}),e.jsxs(o.Group,{heading:"Navigation",children:[e.jsx(o.Item,{value:"dashboard",children:"Go to Dashboard"}),e.jsx(o.Item,{value:"settings",children:"Open Settings"})]}),e.jsx(o.Empty,{children:"No results found."})]})]})},S={render:()=>{const[t,n]=a.useState("");return e.jsxs(o.Root,{children:[e.jsx(o.Input,{placeholder:"Search...",value:t,onValueChange:n}),e.jsxs(o.List,{children:[e.jsx(o.Item,{value:"apple",children:"Apple"}),e.jsx(o.Item,{value:"banana",children:"Banana"}),e.jsx(o.Item,{value:"cherry",children:"Cherry"}),e.jsx(o.Empty,{children:"No fruits found."})]})]})}},w={args:{shouldFilter:!1},render:t=>e.jsxs(o.Root,{...t,children:[e.jsx(o.Input,{placeholder:"All items shown"}),e.jsxs(o.List,{children:[e.jsx(o.Item,{value:"one",children:"One"}),e.jsx(o.Item,{value:"two",children:"Two"}),e.jsx(o.Item,{value:"three",children:"Three"})]})]})},y={args:{loop:!1},render:t=>e.jsxs(o.Root,{...t,children:[e.jsx(o.Input,{placeholder:"Arrow keys won't loop"}),e.jsxs(o.List,{children:[e.jsx(o.Item,{value:"up",children:"Up"}),e.jsx(o.Item,{value:"middle",children:"Middle"}),e.jsx(o.Item,{value:"down",children:"Down"})]})]})},b={render:()=>{const[t,n]=a.useState("");return e.jsxs(o.Root,{children:[e.jsx(o.Input,{placeholder:"Select an option",autoFocus:!0}),e.jsxs(o.List,{children:[e.jsx(o.Item,{onSelect:r=>n(r),value:"option1",children:"Option One"}),e.jsx(o.Item,{onSelect:r=>n(r),value:"option2",children:"Option Two"}),e.jsx(o.Item,{onSelect:r=>n(r),value:"option3",children:"Option Three"}),e.jsx(o.Empty,{children:"No options matched."})]}),e.jsxs("div",{style:{padding:"1rem",fontSize:"0.9rem",color:"#6b7280"},children:["Selected: ",t||"None"]})]})}},L={render:()=>e.jsxs(o.Root,{label:"Main Command Palette",children:[e.jsx(o.Input,{placeholder:"Grouped commands..."}),e.jsxs(o.List,{children:[e.jsxs(o.Group,{heading:"System",children:[e.jsx(o.Item,{value:"restart",children:"Restart"}),e.jsx(o.Item,{value:"shutdown",children:"Shutdown"})]}),e.jsx(o.Separator,{}),e.jsxs(o.Group,{heading:"User",children:[e.jsx(o.Item,{value:"login",children:"Login"}),e.jsx(o.Item,{value:"logout",children:"Logout"})]}),e.jsx(o.Empty,{children:"No commands match your search."})]})]})},E={render:()=>e.jsxs(o.Root,{children:[e.jsx(o.Input,{placeholder:"Search actions or navigate...",autoFocus:!0}),e.jsxs(o.List,{children:[e.jsxs(o.Group,{heading:"Actions",children:[e.jsx(o.Item,{value:"newFile",children:"New File"}),e.jsx(o.Item,{value:"save",children:"Save"}),e.jsx(o.Item,{value:"saveAs",children:"Save As..."})]}),e.jsx(o.Separator,{}),e.jsxs(o.Group,{heading:"Navigation",children:[e.jsx(o.Item,{value:"home",children:"Home"}),e.jsx(o.Item,{value:"settings",children:"Settings"}),e.jsx(o.Item,{value:"help",children:"Help"})]}),e.jsx(o.Separator,{}),e.jsx(o.Group,{heading:"Other",children:e.jsx(o.Item,{value:"exit",disabled:!0,children:"Exit (disabled)"})}),e.jsx(o.Empty,{children:"No results found."})]})]})};var A,V,F;j.parameters={...j.parameters,docs:{...(A=j.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Command.Root>\r
      <Command.Input placeholder="Type a command..." />\r
      <Command.List>\r
        <Command.Group heading="Actions">\r
          <Command.Item value="create">Create New Project</Command.Item>\r
          <Command.Item value="edit">Edit Selected</Command.Item>\r
          <Command.Item value="delete">Delete Selected</Command.Item>\r
        </Command.Group>\r
        <Command.Separator />\r
        <Command.Group heading="Navigation">\r
          <Command.Item value="dashboard">Go to Dashboard</Command.Item>\r
          <Command.Item value="settings">Open Settings</Command.Item>\r
        </Command.Group>\r
        <Command.Empty>No results found.</Command.Empty>\r
      </Command.List>\r
    </Command.Root>
}`,...(F=(V=j.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var O,D,T;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [inputValue, setInputValue] = useState('');
    return <Command.Root>\r
        <Command.Input placeholder="Search..." value={inputValue} onValueChange={setInputValue} />\r
        <Command.List>\r
          <Command.Item value="apple">Apple</Command.Item>\r
          <Command.Item value="banana">Banana</Command.Item>\r
          <Command.Item value="cherry">Cherry</Command.Item>\r
          <Command.Empty>No fruits found.</Command.Empty>\r
        </Command.List>\r
      </Command.Root>;
  }
}`,...(T=(D=S.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var M,z,H;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    shouldFilter: false
  },
  render: args => <Command.Root {...args}>\r
      <Command.Input placeholder="All items shown" />\r
      <Command.List>\r
        <Command.Item value="one">One</Command.Item>\r
        <Command.Item value="two">Two</Command.Item>\r
        <Command.Item value="three">Three</Command.Item>\r
      </Command.List>\r
    </Command.Root>
}`,...(H=(z=w.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var P,U,W;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    loop: false
  },
  render: args => <Command.Root {...args}>\r
      <Command.Input placeholder="Arrow keys won't loop" />\r
      <Command.List>\r
        <Command.Item value="up">Up</Command.Item>\r
        <Command.Item value="middle">Middle</Command.Item>\r
        <Command.Item value="down">Down</Command.Item>\r
      </Command.List>\r
    </Command.Root>
}`,...(W=(U=y.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var $,B,K;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState("");
    return <Command.Root>\r
        <Command.Input placeholder="Select an option" autoFocus />\r
        <Command.List>\r
          <Command.Item onSelect={value => setSelected(value)} value="option1">\r
            Option One\r
          </Command.Item>\r
          <Command.Item onSelect={value => setSelected(value)} value="option2">\r
            Option Two\r
          </Command.Item>\r
          <Command.Item onSelect={value => setSelected(value)} value="option3">\r
            Option Three\r
          </Command.Item>\r
          <Command.Empty>No options matched.</Command.Empty>\r
        </Command.List>\r
        <div style={{
        padding: "1rem",
        fontSize: "0.9rem",
        color: "#6b7280"
      }}>\r
          Selected: {selected || "None"}\r
        </div>\r
      </Command.Root>;
  }
}`,...(K=(B=b.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var _,Z,q;L.parameters={...L.parameters,docs:{...(_=L.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Command.Root label="Main Command Palette">\r
      <Command.Input placeholder="Grouped commands..." />\r
      <Command.List>\r
        <Command.Group heading="System">\r
          <Command.Item value="restart">Restart</Command.Item>\r
          <Command.Item value="shutdown">Shutdown</Command.Item>\r
        </Command.Group>\r
        <Command.Separator />\r
        <Command.Group heading="User">\r
          <Command.Item value="login">Login</Command.Item>\r
          <Command.Item value="logout">Logout</Command.Item>\r
        </Command.Group>\r
        <Command.Empty>No commands match your search.</Command.Empty>\r
      </Command.List>\r
    </Command.Root>
}`,...(q=(Z=L.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var J,Q,X;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Command.Root>\r
      <Command.Input placeholder="Search actions or navigate..." autoFocus />\r
      <Command.List>\r
        <Command.Group heading="Actions">\r
          <Command.Item value="newFile">New File</Command.Item>\r
          <Command.Item value="save">Save</Command.Item>\r
          <Command.Item value="saveAs">Save As...</Command.Item>\r
        </Command.Group>\r
        <Command.Separator />\r
        <Command.Group heading="Navigation">\r
          <Command.Item value="home">Home</Command.Item>\r
          <Command.Item value="settings">Settings</Command.Item>\r
          <Command.Item value="help">Help</Command.Item>\r
        </Command.Group>\r
        <Command.Separator />\r
        <Command.Group heading="Other">\r
          <Command.Item value="exit" disabled>\r
            Exit (disabled)\r
          </Command.Item>\r
        </Command.Group>\r
        <Command.Empty>No results found.</Command.Empty>\r
      </Command.List>\r
    </Command.Root>
}`,...(X=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Ge=["Default","ControlledInput","NoFiltering","NoKeyboardLoop","DynamicSelection","GroupedWithSeparator","FullCustomExample"];export{S as ControlledInput,j as Default,b as DynamicSelection,E as FullCustomExample,L as GroupedWithSeparator,w as NoFiltering,y as NoKeyboardLoop,Ge as __namedExportsOrder,Re as default};
