import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as T}from"./index-BlmOqGMO.js";import{d as fe,l}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const he={sm:l`
    height: 2rem;
    padding: 0 0.75rem;
    font-size: 0.75rem;
  `,md:l`
    height: 2.5rem;
    padding: 0 1rem;
    font-size: 0.875rem;
  `,lg:l`
    height: 3rem;
    padding: 0 1.5rem;
    font-size: 1rem;
  `},ve={default:l`
    background-color: ${s=>s.isPressed?"#3b82f6":"white"};
    color: ${s=>s.isPressed?"white":"#374151"};
    border: 1px solid ${s=>s.isPressed?"#3b82f6":"#d1d5db"};
    
    &:hover:not(:disabled) {
      background-color: ${s=>s.isPressed?"#2563eb":"#f3f4f6"};
      border-color: ${s=>s.isPressed?"#2563eb":"#9ca3af"};
    }
  `,outline:l`
    background-color: transparent;
    color: ${s=>s.isPressed?"#3b82f6":"#374151"};
    border: 1px solid ${s=>s.isPressed?"#3b82f6":"#d1d5db"};
    
    &:hover:not(:disabled) {
      background-color: ${s=>s.isPressed?"rgba(59, 130, 246, 0.1)":"#f3f4f6"};
    }
  `,ghost:l`
    background-color: ${s=>s.isPressed?"rgba(59, 130, 246, 0.1)":"transparent"};
    color: ${s=>s.isPressed?"#3b82f6":"#374151"};
    border: 1px solid transparent;
    
    &:hover:not(:disabled) {
      background-color: ${s=>s.isPressed?"rgba(59, 130, 246, 0.15)":"#f3f4f6"};
    }
  `},xe=fe.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  
  ${s=>he[s.size]}
  ${s=>ve[s.variant]}
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,r=({pressed:s,defaultPressed:a=!1,onPressedChange:t,disabled:n=!1,size:oe="md",variant:ce="default",children:ge,className:pe})=>{const[j,ue]=T.useState(a),S=s!==void 0,b=S?s:j,me=()=>{n||(S||ue(!j),t&&t(!b))};return e.jsx(xe,{type:"button",size:oe,variant:ce,isPressed:b,disabled:n,onClick:me,"aria-pressed":b,className:pe,children:ge})};r.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{pressed:{required:!1,tsType:{name:"boolean"},description:""},defaultPressed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onPressedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(pressed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"pressed"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "outline" | "ghost"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"ghost"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Se={title:"Components/New/Toggle",component:r,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["default","outline","ghost"]},pressed:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},i={render:()=>e.jsx(r,{children:"Toggle Button"})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(r,{variant:"default",children:"Default"}),e.jsx(r,{variant:"outline",children:"Outline"}),e.jsx(r,{variant:"ghost",children:"Ghost"})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(r,{pressed:!1,children:"Not Pressed"}),e.jsx(r,{pressed:!0,children:"Pressed"})]})},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(r,{variant:"default",pressed:!0,children:"Default Pressed"}),e.jsx(r,{variant:"outline",pressed:!0,children:"Outline Pressed"}),e.jsx(r,{variant:"ghost",pressed:!0,children:"Ghost Pressed"})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(r,{disabled:!0,children:"Disabled"}),e.jsx(r,{disabled:!0,pressed:!0,children:"Disabled Pressed"})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(r,{variant:"default",disabled:!0,children:"Default Disabled"}),e.jsx(r,{variant:"outline",disabled:!0,children:"Outline Disabled"}),e.jsx(r,{variant:"ghost",disabled:!0,children:"Ghost Disabled"})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsxs(r,{children:[e.jsx("span",{children:"🔔"}),e.jsx("span",{style:{marginLeft:"0.5rem"},children:"Notifications"})]}),e.jsxs(r,{pressed:!0,children:[e.jsx("span",{children:"❤️"}),e.jsx("span",{style:{marginLeft:"0.5rem"},children:"Favorite"})]}),e.jsxs(r,{variant:"outline",children:[e.jsx("span",{children:"🌙"}),e.jsx("span",{style:{marginLeft:"0.5rem"},children:"Dark Mode"})]})]})},f={render:()=>{const[s,a]=T.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{pressed:s,onPressedChange:a,children:"Controlled Toggle"}),e.jsxs("p",{children:["State: ",s?"Pressed":"Not Pressed"]})]})}},h={render:()=>{const[s,a]=T.useState(null);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{defaultPressed:!1,onPressedChange:t=>a(t),children:"Uncontrolled Toggle"}),e.jsxs("p",{children:["Last change: ",s===null?"None":s?"Pressed":"Not Pressed"]})]})}},v={render:()=>{const[s,a]=T.useState({notifications:!1,darkMode:!0,autoSave:!1});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"300px"},children:[e.jsx("h3",{children:"Settings"}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{children:"Notifications"}),e.jsx(r,{pressed:s.notifications,onPressedChange:t=>a(n=>({...n,notifications:t})),size:"sm",children:s.notifications?"On":"Off"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{children:"Dark Mode"}),e.jsx(r,{pressed:s.darkMode,onPressedChange:t=>a(n=>({...n,darkMode:t})),variant:"outline",size:"sm",children:s.darkMode?"🌙":"☀️"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{children:"Auto Save"}),e.jsx(r,{pressed:s.autoSave,onPressedChange:t=>a(n=>({...n,autoSave:t})),variant:"ghost",size:"sm",children:s.autoSave?"On":"Off"})]})]})}},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("h3",{children:"Size & Variant Matrix"}),["sm","md","lg"].map(s=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsxs("span",{style:{minWidth:"60px",fontSize:"0.875rem"},children:[s,":"]}),e.jsx(r,{size:s,variant:"default",children:"Default"}),e.jsx(r,{size:s,variant:"outline",children:"Outline"}),e.jsx(r,{size:s,variant:"ghost",children:"Ghost"})]},s))]})},y={args:{children:"Toggle Button",size:"md",variant:"default",pressed:!1,disabled:!1}};var P,D,z;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Toggle>\r
      Toggle Button\r
    </Toggle>
}`,...(z=(D=i.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var I,C,k;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>\r
      <Toggle size="sm">Small</Toggle>\r
      <Toggle size="md">Medium</Toggle>\r
      <Toggle size="lg">Large</Toggle>\r
    </div>
}`,...(k=(C=d.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var M,N,O;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>\r
      <Toggle variant="default">Default</Toggle>\r
      <Toggle variant="outline">Outline</Toggle>\r
      <Toggle variant="ghost">Ghost</Toggle>\r
    </div>
}`,...(O=(N=o.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var w,V,L;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>\r
      <Toggle pressed={false}>Not Pressed</Toggle>\r
      <Toggle pressed={true}>Pressed</Toggle>\r
    </div>
}`,...(L=(V=c.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var $,R,q;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>\r
      <Toggle variant="default" pressed={true}>Default Pressed</Toggle>\r
      <Toggle variant="outline" pressed={true}>Outline Pressed</Toggle>\r
      <Toggle variant="ghost" pressed={true}>Ghost Pressed</Toggle>\r
    </div>
}`,...(q=(R=g.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var A,G,W;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>\r
      <Toggle disabled>Disabled</Toggle>\r
      <Toggle disabled pressed={true}>Disabled Pressed</Toggle>\r
    </div>
}`,...(W=(G=p.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var B,U,_;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>\r
      <Toggle variant="default" disabled>Default Disabled</Toggle>\r
      <Toggle variant="outline" disabled>Outline Disabled</Toggle>\r
      <Toggle variant="ghost" disabled>Ghost Disabled</Toggle>\r
    </div>
}`,...(_=(U=u.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var E,F,H;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>\r
      <Toggle>\r
        <span>🔔</span>\r
        <span style={{
        marginLeft: '0.5rem'
      }}>Notifications</span>\r
      </Toggle>\r
      <Toggle pressed={true}>\r
        <span>❤️</span>\r
        <span style={{
        marginLeft: '0.5rem'
      }}>Favorite</span>\r
      </Toggle>\r
      <Toggle variant="outline">\r
        <span>🌙</span>\r
        <span style={{
        marginLeft: '0.5rem'
      }}>Dark Mode</span>\r
      </Toggle>\r
    </div>
}`,...(H=(F=m.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [pressed, setPressed] = React.useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>\r
        <Toggle pressed={pressed} onPressedChange={setPressed}>\r
          Controlled Toggle\r
        </Toggle>\r
        <p>State: {pressed ? 'Pressed' : 'Not Pressed'}</p>\r
      </div>;
  }
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [lastState, setLastState] = React.useState<boolean | null>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>\r
        <Toggle defaultPressed={false} onPressedChange={pressed => setLastState(pressed)}>\r
          Uncontrolled Toggle\r
        </Toggle>\r
        <p>Last change: {lastState === null ? 'None' : lastState ? 'Pressed' : 'Not Pressed'}</p>\r
      </div>;
  }
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,se,re;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [settings, setSettings] = React.useState({
      notifications: false,
      darkMode: true,
      autoSave: false
    });
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      maxWidth: '300px'
    }}>\r
        <h3>Settings</h3>\r
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>\r
          <span>Notifications</span>\r
          <Toggle pressed={settings.notifications} onPressedChange={pressed => setSettings(prev => ({
          ...prev,
          notifications: pressed
        }))} size="sm">\r
            {settings.notifications ? 'On' : 'Off'}\r
          </Toggle>\r
        </div>\r
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>\r
          <span>Dark Mode</span>\r
          <Toggle pressed={settings.darkMode} onPressedChange={pressed => setSettings(prev => ({
          ...prev,
          darkMode: pressed
        }))} variant="outline" size="sm">\r
            {settings.darkMode ? '🌙' : '☀️'}\r
          </Toggle>\r
        </div>\r
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>\r
          <span>Auto Save</span>\r
          <Toggle pressed={settings.autoSave} onPressedChange={pressed => setSettings(prev => ({
          ...prev,
          autoSave: pressed
        }))} variant="ghost" size="sm">\r
            {settings.autoSave ? 'On' : 'Off'}\r
          </Toggle>\r
        </div>\r
      </div>;
  }
}`,...(re=(se=v.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var te,ae,ne;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <h3>Size & Variant Matrix</h3>\r
      {(['sm', 'md', 'lg'] as const).map(size => <div key={size} style={{
      display: 'flex',
      gap: '1rem',
      alignItems: 'center'
    }}>\r
          <span style={{
        minWidth: '60px',
        fontSize: '0.875rem'
      }}>{size}:</span>\r
          <Toggle size={size} variant="default">Default</Toggle>\r
          <Toggle size={size} variant="outline">Outline</Toggle>\r
          <Toggle size={size} variant="ghost">Ghost</Toggle>\r
        </div>)}\r
    </div>
}`,...(ne=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var le,ie,de;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    children: 'Toggle Button',
    size: 'md',
    variant: 'default',
    pressed: false,
    disabled: false
  }
}`,...(de=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};const Pe=["Default","AllSizes","AllVariants","PressedStates","PressedVariants","Disabled","DisabledVariants","WithIcons","ControlledToggle","UncontrolledToggle","Interactive","SizeAndVariantMatrix","Playground"];export{d as AllSizes,o as AllVariants,f as ControlledToggle,i as Default,p as Disabled,u as DisabledVariants,v as Interactive,y as Playground,c as PressedStates,g as PressedVariants,x as SizeAndVariantMatrix,h as UncontrolledToggle,m as WithIcons,Pe as __namedExportsOrder,Se as default};
