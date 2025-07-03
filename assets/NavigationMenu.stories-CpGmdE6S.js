import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as u,R as o}from"./index-BlmOqGMO.js";import{d as s,l as G,m as Q}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const c=o.createContext({activeItem:null,setActiveItem:()=>{},indicatorPosition:null,setIndicatorPosition:()=>{}}),f=o.createContext({open:!1,setOpen:()=>{},value:null}),z=Q`
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,U=s.nav`
  position: relative;
  z-index: 10;
`,Y=s.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: white;
  border-radius: 0.5rem;
`,_=s.li`
  position: relative;
`,q=s.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4b5563;
  background-color: transparent;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    color: #111827;
    background-color: #f3f4f6;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
  }
`,J=s.div`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  animation: ${z} 0.2s ease;
`,K=s.a`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${i=>i.active?"#3b82f6":"#4b5563"};
  background-color: ${i=>i.active?"#eff6ff":"transparent"};
  border-radius: 0.25rem;
  text-decoration: none;
  transition: all 0.2s;
  
  &:hover {
    color: ${i=>i.active?"#2563eb":"#111827"};
    background-color: ${i=>i.active?"#dbeafe":"#f3f4f6"};
  }
`,X=s.div`
  position: relative;
  width: 100%;
  height: var(--radix-navigation-menu-viewport-height);
  overflow: hidden;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: width, height 0.3s ease;
`,Z=s.div`
  position: absolute;
  height: 2px;
  bottom: 0;
  background-color: #3b82f6;
  transition: all 0.2s ease;
  
  ${i=>i.position&&G`
    left: ${i.position.left}px;
    width: ${i.position.width}px;
  `}
`,ee=({children:i,className:t})=>{const[a,r]=u.useState(null),[v,g]=u.useState(null);return e.jsx(c.Provider,{value:{activeItem:a,setActiveItem:r,indicatorPosition:v,setIndicatorPosition:g},children:e.jsx(U,{className:t,children:i})})},ne=({children:i,className:t})=>e.jsx(Y,{className:t,children:i}),ie=({children:i,value:t="",className:a})=>{const{activeItem:r,setActiveItem:v}=o.useContext(c),[g,L]=u.useState(!1),d=u.useRef(null),{setIndicatorPosition:p}=o.useContext(c);return u.useEffect(()=>{var k;if(r===t&&d.current){const j=d.current.getBoundingClientRect(),O=((k=d.current.parentElement)==null?void 0:k.getBoundingClientRect())||{left:0};p({left:j.left-O.left,width:j.width})}},[r,t,p]),u.useEffect(()=>{L(r===t)},[r,t]),e.jsx(f.Provider,{value:{open:g,setOpen:L,value:t},children:e.jsx(_,{ref:d,className:a,children:i})})},te=({children:i,className:t})=>{const{setActiveItem:a}=o.useContext(c),{value:r}=o.useContext(f),v=()=>{a(g=>g===r?null:r)};return e.jsx(q,{onClick:v,className:t,children:i})},re=({children:i,className:t})=>{const{open:a}=o.useContext(f);return a?e.jsx(J,{className:t,children:i}):null},ae=({children:i,href:t="#",active:a=!1,className:r})=>e.jsx(K,{href:t,active:a,className:r,children:i}),oe=({className:i})=>e.jsx(X,{className:i}),se=({className:i})=>{const{indicatorPosition:t}=o.useContext(c);return e.jsx(Z,{position:t,className:i})},n={Root:ee,List:ne,Item:ie,Trigger:te,Content:re,Link:ae,Viewport:oe,Indicator:se},de={title:"Components/New/NavigationMenu",component:n.Root,tags:["autodocs"]},l={render:()=>e.jsx("div",{style:{padding:"2rem",textAlign:"center"},children:e.jsxs(n.Root,{children:[e.jsxs(n.List,{children:[e.jsxs(n.Item,{value:"home",children:[e.jsx(n.Trigger,{children:"Home"}),e.jsxs(n.Content,{children:[e.jsx(n.Link,{href:"#",children:"Dashboard"}),e.jsx(n.Link,{href:"#",children:"Analytics"})]})]}),e.jsxs(n.Item,{value:"products",children:[e.jsx(n.Trigger,{children:"Products"}),e.jsxs(n.Content,{children:[e.jsx(n.Link,{href:"#",children:"All Products"}),e.jsx(n.Link,{href:"#",children:"New Arrivals"})]})]}),e.jsxs(n.Item,{value:"about",children:[e.jsx(n.Trigger,{children:"About"}),e.jsxs(n.Content,{children:[e.jsx(n.Link,{href:"#",children:"Our Story"}),e.jsx(n.Link,{href:"#",children:"Team"})]})]}),e.jsx(n.Indicator,{})]}),e.jsx(n.Viewport,{})]})})},h={render:()=>e.jsx("div",{style:{padding:"2rem",textAlign:"center"},children:e.jsx(n.Root,{children:e.jsxs(n.List,{children:[e.jsx(n.Item,{value:"dashboard",children:e.jsx(n.Link,{active:!0,href:"#",children:"Dashboard"})}),e.jsx(n.Item,{value:"settings",children:e.jsx(n.Link,{href:"#",children:"Settings"})}),e.jsx(n.Item,{value:"profile",children:e.jsx(n.Link,{href:"#",children:"Profile"})})]})})})},N={render:()=>e.jsx("div",{style:{padding:"2rem",textAlign:"center"},children:e.jsxs(n.Root,{children:[e.jsxs(n.List,{children:[e.jsxs(n.Item,{value:"docs",children:[e.jsx(n.Trigger,{children:"Documentation"}),e.jsxs(n.Content,{children:[e.jsx(n.Link,{href:"#",children:"Getting Started"}),e.jsx(n.Link,{href:"#",children:"Guides"}),e.jsx(n.Link,{href:"#",children:"API Reference"})]})]}),e.jsxs(n.Item,{value:"support",children:[e.jsx(n.Trigger,{children:"Support"}),e.jsxs(n.Content,{children:[e.jsx(n.Link,{href:"#",children:"FAQ"}),e.jsx(n.Link,{href:"#",children:"Contact"})]})]}),e.jsxs(n.Item,{value:"account",children:[e.jsx(n.Trigger,{children:"Account"}),e.jsxs(n.Content,{children:[e.jsx(n.Link,{href:"#",children:"Profile"}),e.jsx(n.Link,{href:"#",children:"Billing"}),e.jsx(n.Link,{href:"#",children:"Logout"})]})]}),e.jsx(n.Indicator,{})]}),e.jsx(n.Viewport,{})]})})},M={render:()=>e.jsx("div",{style:{padding:"1rem",background:"#f9fafb"},children:e.jsxs(n.Root,{children:[e.jsxs(n.List,{children:[e.jsx(n.Item,{value:"home",children:e.jsx(n.Link,{active:!0,href:"#",children:"Home"})}),e.jsxs(n.Item,{value:"features",children:[e.jsx(n.Trigger,{children:"Features"}),e.jsxs(n.Content,{children:[e.jsx(n.Link,{href:"#",children:"Pricing"}),e.jsx(n.Link,{href:"#",children:"Enterprise"})]})]}),e.jsxs(n.Item,{value:"company",children:[e.jsx(n.Trigger,{children:"Company"}),e.jsxs(n.Content,{children:[e.jsx(n.Link,{href:"#",children:"About Us"}),e.jsx(n.Link,{href:"#",children:"Careers"}),e.jsx(n.Link,{href:"#",children:"News"})]})]}),e.jsx(n.Item,{value:"contact",children:e.jsx(n.Link,{href:"#",children:"Contact"})}),e.jsx(n.Indicator,{})]}),e.jsx(n.Viewport,{})]})})},m={render:()=>e.jsx("div",{style:{padding:"0.5rem 1rem",background:"#ffffff",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:e.jsx(n.Root,{children:e.jsxs(n.List,{children:[e.jsx(n.Item,{value:"home",children:e.jsx(n.Link,{active:!0,href:"#",children:"Home"})}),e.jsxs(n.Item,{value:"services",children:[e.jsx(n.Trigger,{children:"Services"}),e.jsxs(n.Content,{children:[e.jsx(n.Link,{href:"#",children:"Consulting"}),e.jsx(n.Link,{href:"#",children:"Development"})]})]}),e.jsx(n.Item,{value:"contact",children:e.jsx(n.Link,{href:"#",children:"Contact"})})]})})})},x={render:()=>e.jsx("div",{style:{padding:"1rem 2rem",background:"#ffffff",borderRadius:"0.5rem",margin:"2rem auto",maxWidth:"800px"},children:e.jsxs(n.Root,{children:[e.jsxs(n.List,{children:[e.jsx(n.Item,{value:"dashboard",children:e.jsx(n.Link,{active:!0,href:"#",children:"Dashboard"})}),e.jsxs(n.Item,{value:"projects",children:[e.jsx(n.Trigger,{children:"Projects"}),e.jsxs(n.Content,{children:[e.jsx(n.Link,{href:"#",children:"All Projects"}),e.jsx(n.Link,{href:"#",children:"Create New"})]})]}),e.jsxs(n.Item,{value:"team",children:[e.jsx(n.Trigger,{children:"Team"}),e.jsxs(n.Content,{children:[e.jsx(n.Link,{href:"#",children:"Members"}),e.jsx(n.Link,{href:"#",children:"Invite"})]})]}),e.jsxs(n.Item,{value:"settings",children:[e.jsx(n.Trigger,{children:"Settings"}),e.jsxs(n.Content,{children:[e.jsx(n.Link,{href:"#",children:"Preferences"}),e.jsx(n.Link,{href:"#",children:"Integrations"}),e.jsx(n.Link,{href:"#",children:"Security"})]})]}),e.jsxs(n.Item,{value:"help",children:[e.jsx(n.Trigger,{children:"Help"}),e.jsxs(n.Content,{children:[e.jsx(n.Link,{href:"#",children:"FAQ"}),e.jsx(n.Link,{href:"#",children:"Support"})]})]}),e.jsx(n.Indicator,{})]}),e.jsx(n.Viewport,{})]})})};var I,C,b;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem',
    textAlign: 'center'
  }}>\r
      <NavigationMenu.Root>\r
        <NavigationMenu.List>\r
          <NavigationMenu.Item value="home">\r
            <NavigationMenu.Trigger>Home</NavigationMenu.Trigger>\r
            <NavigationMenu.Content>\r
              <NavigationMenu.Link href="#">Dashboard</NavigationMenu.Link>\r
              <NavigationMenu.Link href="#">Analytics</NavigationMenu.Link>\r
            </NavigationMenu.Content>\r
          </NavigationMenu.Item>\r
\r
          <NavigationMenu.Item value="products">\r
            <NavigationMenu.Trigger>Products</NavigationMenu.Trigger>\r
            <NavigationMenu.Content>\r
              <NavigationMenu.Link href="#">All Products</NavigationMenu.Link>\r
              <NavigationMenu.Link href="#">New Arrivals</NavigationMenu.Link>\r
            </NavigationMenu.Content>\r
          </NavigationMenu.Item>\r
\r
          <NavigationMenu.Item value="about">\r
            <NavigationMenu.Trigger>About</NavigationMenu.Trigger>\r
            <NavigationMenu.Content>\r
              <NavigationMenu.Link href="#">Our Story</NavigationMenu.Link>\r
              <NavigationMenu.Link href="#">Team</NavigationMenu.Link>\r
            </NavigationMenu.Content>\r
          </NavigationMenu.Item>\r
\r
          <NavigationMenu.Indicator />\r
        </NavigationMenu.List>\r
        <NavigationMenu.Viewport />\r
      </NavigationMenu.Root>\r
    </div>
}`,...(b=(C=l.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var T,w,R;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem',
    textAlign: 'center'
  }}>\r
      <NavigationMenu.Root>\r
        <NavigationMenu.List>\r
          <NavigationMenu.Item value="dashboard">\r
            <NavigationMenu.Link active={true} href="#">\r
              Dashboard\r
            </NavigationMenu.Link>\r
          </NavigationMenu.Item>\r
\r
          <NavigationMenu.Item value="settings">\r
            <NavigationMenu.Link href="#">Settings</NavigationMenu.Link>\r
          </NavigationMenu.Item>\r
\r
          <NavigationMenu.Item value="profile">\r
            <NavigationMenu.Link href="#">Profile</NavigationMenu.Link>\r
          </NavigationMenu.Item>\r
        </NavigationMenu.List>\r
      </NavigationMenu.Root>\r
    </div>
}`,...(R=(w=h.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var A,y,S;N.parameters={...N.parameters,docs:{...(A=N.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem',
    textAlign: 'center'
  }}>\r
      <NavigationMenu.Root>\r
        <NavigationMenu.List>\r
          <NavigationMenu.Item value="docs">\r
            <NavigationMenu.Trigger>Documentation</NavigationMenu.Trigger>\r
            <NavigationMenu.Content>\r
              <NavigationMenu.Link href="#">Getting Started</NavigationMenu.Link>\r
              <NavigationMenu.Link href="#">Guides</NavigationMenu.Link>\r
              <NavigationMenu.Link href="#">API Reference</NavigationMenu.Link>\r
            </NavigationMenu.Content>\r
          </NavigationMenu.Item>\r
\r
          <NavigationMenu.Item value="support">\r
            <NavigationMenu.Trigger>Support</NavigationMenu.Trigger>\r
            <NavigationMenu.Content>\r
              <NavigationMenu.Link href="#">FAQ</NavigationMenu.Link>\r
              <NavigationMenu.Link href="#">Contact</NavigationMenu.Link>\r
            </NavigationMenu.Content>\r
          </NavigationMenu.Item>\r
\r
          <NavigationMenu.Item value="account">\r
            <NavigationMenu.Trigger>Account</NavigationMenu.Trigger>\r
            <NavigationMenu.Content>\r
              <NavigationMenu.Link href="#">Profile</NavigationMenu.Link>\r
              <NavigationMenu.Link href="#">Billing</NavigationMenu.Link>\r
              <NavigationMenu.Link href="#">Logout</NavigationMenu.Link>\r
            </NavigationMenu.Content>\r
          </NavigationMenu.Item>\r
\r
          <NavigationMenu.Indicator />\r
        </NavigationMenu.List>\r
        <NavigationMenu.Viewport />\r
      </NavigationMenu.Root>\r
    </div>
}`,...(S=(y=N.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var P,D,E;M.parameters={...M.parameters,docs:{...(P=M.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '1rem',
    background: '#f9fafb'
  }}>\r
      <NavigationMenu.Root>\r
        <NavigationMenu.List>\r
          <NavigationMenu.Item value="home">\r
            <NavigationMenu.Link active href="#">\r
              Home\r
            </NavigationMenu.Link>\r
          </NavigationMenu.Item>\r
\r
          <NavigationMenu.Item value="features">\r
            <NavigationMenu.Trigger>Features</NavigationMenu.Trigger>\r
            <NavigationMenu.Content>\r
              <NavigationMenu.Link href="#">Pricing</NavigationMenu.Link>\r
              <NavigationMenu.Link href="#">Enterprise</NavigationMenu.Link>\r
            </NavigationMenu.Content>\r
          </NavigationMenu.Item>\r
\r
          <NavigationMenu.Item value="company">\r
            <NavigationMenu.Trigger>Company</NavigationMenu.Trigger>\r
            <NavigationMenu.Content>\r
              <NavigationMenu.Link href="#">About Us</NavigationMenu.Link>\r
              <NavigationMenu.Link href="#">Careers</NavigationMenu.Link>\r
              <NavigationMenu.Link href="#">News</NavigationMenu.Link>\r
            </NavigationMenu.Content>\r
          </NavigationMenu.Item>\r
\r
          <NavigationMenu.Item value="contact">\r
            <NavigationMenu.Link href="#">Contact</NavigationMenu.Link>\r
          </NavigationMenu.Item>\r
\r
          <NavigationMenu.Indicator />\r
        </NavigationMenu.List>\r
        <NavigationMenu.Viewport />\r
      </NavigationMenu.Root>\r
    </div>
}`,...(E=(D=M.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var V,F,H;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '0.5rem 1rem',
    background: '#ffffff',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
  }}>\r
      <NavigationMenu.Root>\r
        <NavigationMenu.List>\r
          <NavigationMenu.Item value="home">\r
            <NavigationMenu.Link active href="#">\r
              Home\r
            </NavigationMenu.Link>\r
          </NavigationMenu.Item>\r
\r
          <NavigationMenu.Item value="services">\r
            <NavigationMenu.Trigger>Services</NavigationMenu.Trigger>\r
            <NavigationMenu.Content>\r
              <NavigationMenu.Link href="#">Consulting</NavigationMenu.Link>\r
              <NavigationMenu.Link href="#">Development</NavigationMenu.Link>\r
            </NavigationMenu.Content>\r
          </NavigationMenu.Item>\r
\r
          <NavigationMenu.Item value="contact">\r
            <NavigationMenu.Link href="#">Contact</NavigationMenu.Link>\r
          </NavigationMenu.Item>\r
        </NavigationMenu.List>\r
      </NavigationMenu.Root>\r
    </div>
}`,...(H=(F=m.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var $,B,W;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '1rem 2rem',
    background: '#ffffff',
    borderRadius: '0.5rem',
    margin: '2rem auto',
    maxWidth: '800px'
  }}>\r
      <NavigationMenu.Root>\r
        <NavigationMenu.List>\r
          <NavigationMenu.Item value="dashboard">\r
            <NavigationMenu.Link active href="#">\r
              Dashboard\r
            </NavigationMenu.Link>\r
          </NavigationMenu.Item>\r
\r
          <NavigationMenu.Item value="projects">\r
            <NavigationMenu.Trigger>Projects</NavigationMenu.Trigger>\r
            <NavigationMenu.Content>\r
              <NavigationMenu.Link href="#">All Projects</NavigationMenu.Link>\r
              <NavigationMenu.Link href="#">Create New</NavigationMenu.Link>\r
            </NavigationMenu.Content>\r
          </NavigationMenu.Item>\r
\r
          <NavigationMenu.Item value="team">\r
            <NavigationMenu.Trigger>Team</NavigationMenu.Trigger>\r
            <NavigationMenu.Content>\r
              <NavigationMenu.Link href="#">Members</NavigationMenu.Link>\r
              <NavigationMenu.Link href="#">Invite</NavigationMenu.Link>\r
            </NavigationMenu.Content>\r
          </NavigationMenu.Item>\r
\r
          <NavigationMenu.Item value="settings">\r
            <NavigationMenu.Trigger>Settings</NavigationMenu.Trigger>\r
            <NavigationMenu.Content>\r
              <NavigationMenu.Link href="#">Preferences</NavigationMenu.Link>\r
              <NavigationMenu.Link href="#">Integrations</NavigationMenu.Link>\r
              <NavigationMenu.Link href="#">Security</NavigationMenu.Link>\r
            </NavigationMenu.Content>\r
          </NavigationMenu.Item>\r
\r
          <NavigationMenu.Item value="help">\r
            <NavigationMenu.Trigger>Help</NavigationMenu.Trigger>\r
            <NavigationMenu.Content>\r
              <NavigationMenu.Link href="#">FAQ</NavigationMenu.Link>\r
              <NavigationMenu.Link href="#">Support</NavigationMenu.Link>\r
            </NavigationMenu.Content>\r
          </NavigationMenu.Item>\r
\r
          <NavigationMenu.Indicator />\r
        </NavigationMenu.List>\r
        <NavigationMenu.Viewport />\r
      </NavigationMenu.Root>\r
    </div>
}`,...(W=(B=x.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};const le=["Default","WithActiveLink","WithDropdowns","FullHeaderExample","MinimalTopBar","FullCustomExample"];export{l as Default,x as FullCustomExample,M as FullHeaderExample,m as MinimalTopBar,h as WithActiveLink,N as WithDropdowns,le as __namedExportsOrder,de as default};
