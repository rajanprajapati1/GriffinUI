import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as a}from"./index-BlmOqGMO.js";import{l as n,d as Ie}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const Te=a.createContext({type:"single",value:"",onValueChange:()=>{},size:"md",variant:"default"}),ye={sm:n`
    height: 2rem;
    font-size: 0.75rem;
  `,md:n`
    height: 2.5rem;
    font-size: 0.875rem;
  `,lg:n`
    height: 3rem;
    font-size: 1rem;
  `},je={default:n`
    background-color: white;
    border: 1px solid #d1d5db;
  `,outline:n`
    background-color: transparent;
    border: 1px solid #d1d5db;
  `,ghost:n`
    background-color: transparent;
    border: 1px solid transparent;
  `},be={default:n`
    background-color: ${r=>r.isSelected?"#3b82f6":"transparent"};
    color: ${r=>r.isSelected?"white":"#374151"};
    
    &:hover:not(:disabled) {
      background-color: ${r=>r.isSelected?"#2563eb":"#f3f4f6"};
    }
  `,outline:n`
    background-color: ${r=>r.isSelected?"rgba(59, 130, 246, 0.1)":"transparent"};
    color: ${r=>r.isSelected?"#3b82f6":"#374151"};
    
    &:hover:not(:disabled) {
      background-color: ${r=>r.isSelected?"rgba(59, 130, 246, 0.15)":"#f3f4f6"};
    }
  `,ghost:n`
    background-color: ${r=>r.isSelected?"rgba(59, 130, 246, 0.1)":"transparent"};
    color: ${r=>r.isSelected?"#3b82f6":"#374151"};
    
    &:hover:not(:disabled) {
      background-color: ${r=>r.isSelected?"rgba(59, 130, 246, 0.15)":"#f3f4f6"};
    }
  `},Se=Ie.div`
  display: inline-flex;
  border-radius: 0.375rem;
  overflow: hidden;
  
  ${r=>ye[r.size]}
  ${r=>je[r.variant]}
  
  ${r=>r.disabled&&n`
    opacity: 0.5;
    cursor: not-allowed;
  `}
`,Ve=Ie.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
  
  ${r=>be[r.variant]}
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
    z-index: 1;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:not(:first-child) {
    border-left: 1px solid ${r=>r.variant==="ghost"?"transparent":"#d1d5db"};
  }
`,l=({type:r,value:t,defaultValue:o=r==="single"?"":[],onValueChange:s,disabled:g=!1,size:u="md",variant:i="default",children:O,className:w})=>{const[D,c]=a.useState(o),d=t!==void 0,p=d?t:D,fe=h=>{if(r==="single"){const m=p===h?"":h;d||c(m),s&&s(m)}else{const m=Array.isArray(p)?p:[],k=m.includes(h)?m.filter(Ge=>Ge!==h):[...m,h];d||c(k),s&&s(k)}};return e.jsx(Te.Provider,{value:{type:r,value:p,onValueChange:fe,size:u,variant:i,disabled:g},children:e.jsx(Se,{size:u,variant:i,disabled:g,className:w,role:"group",children:O})})},Ce=({value:r,disabled:t=!1,children:o,className:s})=>{const{type:g,value:u,onValueChange:i,size:O,variant:w,disabled:D}=a.useContext(Te),c=g==="single"?u===r:Array.isArray(u)&&u.includes(r),d=t||D,p=()=>{d||i(r)};return e.jsx(Ve,{type:"button",size:O,variant:w,isSelected:c,disabled:d,onClick:p,"aria-pressed":c,className:s,children:o})};l.Item=Ce;l.__docgenInfo={description:"",methods:[],displayName:"ToggleGroup",props:{type:{required:!0,tsType:{name:"union",raw:'"single" | "multiple"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'}]},description:""},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"",defaultValue:{value:'type === "single" ? "" : []',computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "outline" | "ghost"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"ghost"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ke={title:"Components/New/ToggleGroup",component:l,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["single","multiple"]},size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["default","outline","ghost"]},disabled:{control:{type:"boolean"}}}},v={render:()=>e.jsxs(l,{type:"single",children:[e.jsx(l.Item,{value:"left",children:"Left"}),e.jsx(l.Item,{value:"center",children:"Center"}),e.jsx(l.Item,{value:"right",children:"Right"})]})},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("h3",{children:"Text Alignment"}),e.jsxs(l,{type:"single",defaultValue:"left",children:[e.jsx(l.Item,{value:"left",children:"Left"}),e.jsx(l.Item,{value:"center",children:"Center"}),e.jsx(l.Item,{value:"right",children:"Right"}),e.jsx(l.Item,{value:"justify",children:"Justify"})]})]})},I={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("h3",{children:"Text Formatting"}),e.jsxs(l,{type:"multiple",defaultValue:["bold"],children:[e.jsx(l.Item,{value:"bold",children:"Bold"}),e.jsx(l.Item,{value:"italic",children:"Italic"}),e.jsx(l.Item,{value:"underline",children:"Underline"}),e.jsx(l.Item,{value:"strikethrough",children:"Strike"})]})]})},T={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Small"}),e.jsxs(l,{type:"single",size:"sm",children:[e.jsx(l.Item,{value:"sm1",children:"Small"}),e.jsx(l.Item,{value:"sm2",children:"Size"}),e.jsx(l.Item,{value:"sm3",children:"Toggle"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Medium"}),e.jsxs(l,{type:"single",size:"md",children:[e.jsx(l.Item,{value:"md1",children:"Medium"}),e.jsx(l.Item,{value:"md2",children:"Size"}),e.jsx(l.Item,{value:"md3",children:"Toggle"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Large"}),e.jsxs(l,{type:"single",size:"lg",children:[e.jsx(l.Item,{value:"lg1",children:"Large"}),e.jsx(l.Item,{value:"lg2",children:"Size"}),e.jsx(l.Item,{value:"lg3",children:"Toggle"})]})]})]})},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Default"}),e.jsxs(l,{type:"single",variant:"default",defaultValue:"default2",children:[e.jsx(l.Item,{value:"default1",children:"Option 1"}),e.jsx(l.Item,{value:"default2",children:"Option 2"}),e.jsx(l.Item,{value:"default3",children:"Option 3"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Outline"}),e.jsxs(l,{type:"single",variant:"outline",defaultValue:"outline2",children:[e.jsx(l.Item,{value:"outline1",children:"Option 1"}),e.jsx(l.Item,{value:"outline2",children:"Option 2"}),e.jsx(l.Item,{value:"outline3",children:"Option 3"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Ghost"}),e.jsxs(l,{type:"single",variant:"ghost",defaultValue:"ghost2",children:[e.jsx(l.Item,{value:"ghost1",children:"Option 1"}),e.jsx(l.Item,{value:"ghost2",children:"Option 2"}),e.jsx(l.Item,{value:"ghost3",children:"Option 3"})]})]})]})},G={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Disabled Group"}),e.jsxs(l,{type:"single",disabled:!0,defaultValue:"disabled2",children:[e.jsx(l.Item,{value:"disabled1",children:"Option 1"}),e.jsx(l.Item,{value:"disabled2",children:"Option 2"}),e.jsx(l.Item,{value:"disabled3",children:"Option 3"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Individual Items Disabled"}),e.jsxs(l,{type:"single",children:[e.jsx(l.Item,{value:"item1",children:"Enabled"}),e.jsx(l.Item,{value:"item2",disabled:!0,children:"Disabled"}),e.jsx(l.Item,{value:"item3",children:"Enabled"})]})]})]})},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Text Alignment with Icons"}),e.jsxs(l,{type:"single",defaultValue:"left",children:[e.jsxs(l.Item,{value:"left",children:[e.jsx("span",{children:"⬅️"}),e.jsx("span",{style:{marginLeft:"0.5rem"},children:"Left"})]}),e.jsxs(l.Item,{value:"center",children:[e.jsx("span",{children:"↔️"}),e.jsx("span",{style:{marginLeft:"0.5rem"},children:"Center"})]}),e.jsxs(l.Item,{value:"right",children:[e.jsx("span",{children:"➡️"}),e.jsx("span",{style:{marginLeft:"0.5rem"},children:"Right"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"View Mode"}),e.jsxs(l,{type:"single",variant:"outline",defaultValue:"grid",children:[e.jsx(l.Item,{value:"list",children:"📋"}),e.jsx(l.Item,{value:"grid",children:"⚏"}),e.jsx(l.Item,{value:"card",children:"🗂️"})]})]})]})},j={render:()=>{const[r,t]=a.useState("center");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("h4",{children:"Controlled Single Selection"}),e.jsxs(l,{type:"single",value:r,onValueChange:o=>t(o),children:[e.jsx(l.Item,{value:"left",children:"Left"}),e.jsx(l.Item,{value:"center",children:"Center"}),e.jsx(l.Item,{value:"right",children:"Right"})]}),e.jsxs("p",{children:["Selected: ",r||"None"]}),e.jsx("button",{onClick:()=>t(""),children:"Clear Selection"})]})}},b={render:()=>{const[r,t]=a.useState(["bold","italic"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("h4",{children:"Controlled Multiple Selection"}),e.jsxs(l,{type:"multiple",value:r,onValueChange:o=>t(o),children:[e.jsx(l.Item,{value:"bold",children:"Bold"}),e.jsx(l.Item,{value:"italic",children:"Italic"}),e.jsx(l.Item,{value:"underline",children:"Underline"}),e.jsx(l.Item,{value:"strikethrough",children:"Strike"})]}),e.jsxs("p",{children:["Selected: ",r.length>0?r.join(", "):"None"]}),e.jsx("button",{onClick:()=>t([]),children:"Clear All"})]})}},S={render:()=>{const[r,t]=a.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("h4",{children:"Uncontrolled with Change Callback"}),e.jsxs(l,{type:"single",defaultValue:"option2",onValueChange:o=>t(`Changed to: ${o||"None"}`),children:[e.jsx(l.Item,{value:"option1",children:"Option 1"}),e.jsx(l.Item,{value:"option2",children:"Option 2"}),e.jsx(l.Item,{value:"option3",children:"Option 3"})]}),e.jsx("p",{children:r||"No changes yet"})]})}},V={render:()=>{const[r,t]=a.useState("left"),[o,s]=a.useState([]),[g,u]=a.useState("grid");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",maxWidth:"500px"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Text Editor Toolbar"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontSize:"0.875rem"},children:"Text Alignment:"}),e.jsxs(l,{type:"single",value:r,onValueChange:i=>t(i),size:"sm",children:[e.jsx(l.Item,{value:"left",children:"Left"}),e.jsx(l.Item,{value:"center",children:"Center"}),e.jsx(l.Item,{value:"right",children:"Right"}),e.jsx(l.Item,{value:"justify",children:"Justify"})]})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontSize:"0.875rem"},children:"Text Formatting:"}),e.jsxs(l,{type:"multiple",value:o,onValueChange:i=>s(i),size:"sm",variant:"outline",children:[e.jsx(l.Item,{value:"bold",children:"B"}),e.jsx(l.Item,{value:"italic",children:"I"}),e.jsx(l.Item,{value:"underline",children:"U"}),e.jsx(l.Item,{value:"strikethrough",children:"S"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"File Browser"}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontSize:"0.875rem"},children:"View Mode:"}),e.jsxs(l,{type:"single",value:g,onValueChange:i=>u(i),variant:"ghost",children:[e.jsx(l.Item,{value:"list",children:"📋 List"}),e.jsx(l.Item,{value:"grid",children:"⚏ Grid"}),e.jsx(l.Item,{value:"card",children:"🗂️ Cards"})]})]})]}),e.jsxs("div",{style:{padding:"1rem",backgroundColor:"#f8f9fa",borderRadius:"0.375rem"},children:[e.jsx("h5",{children:"Current Settings:"}),e.jsxs("ul",{style:{fontSize:"0.875rem",margin:0,paddingLeft:"1rem"},children:[e.jsxs("li",{children:["Text Alignment: ",r||"None"]}),e.jsxs("li",{children:["Text Formatting: ",o.length>0?o.join(", "):"None"]}),e.jsxs("li",{children:["View Mode: ",g||"None"]})]})]})]})}},C={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsx("h3",{children:"Size & Variant Matrix"}),["sm","md","lg"].map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("h4",{style:{margin:0},children:r.toUpperCase()}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:["default","outline","ghost"].map(t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsxs("span",{style:{minWidth:"80px",fontSize:"0.875rem"},children:[t,":"]}),e.jsxs(l,{type:"single",size:r,variant:t,defaultValue:"option2",children:[e.jsx(l.Item,{value:"option1",children:"Option 1"}),e.jsx(l.Item,{value:"option2",children:"Option 2"}),e.jsx(l.Item,{value:"option3",children:"Option 3"})]})]},t))})]},r))]})},z={args:{type:"single",size:"md",variant:"default",disabled:!1},render:r=>e.jsxs(l,{...r,children:[e.jsx(l.Item,{value:"option1",children:"Option 1"}),e.jsx(l.Item,{value:"option2",children:"Option 2"}),e.jsx(l.Item,{value:"option3",children:"Option 3"})]})};var A,L,M;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single">\r
      <ToggleGroup.Item value="left">Left</ToggleGroup.Item>\r
      <ToggleGroup.Item value="center">Center</ToggleGroup.Item>\r
      <ToggleGroup.Item value="right">Right</ToggleGroup.Item>\r
    </ToggleGroup>
}`,...(M=(L=v.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var R,N,F;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <h3>Text Alignment</h3>\r
      <ToggleGroup type="single" defaultValue="left">\r
        <ToggleGroup.Item value="left">Left</ToggleGroup.Item>\r
        <ToggleGroup.Item value="center">Center</ToggleGroup.Item>\r
        <ToggleGroup.Item value="right">Right</ToggleGroup.Item>\r
        <ToggleGroup.Item value="justify">Justify</ToggleGroup.Item>\r
      </ToggleGroup>\r
    </div>
}`,...(F=(N=x.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var $,B,U;I.parameters={...I.parameters,docs:{...($=I.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <h3>Text Formatting</h3>\r
      <ToggleGroup type="multiple" defaultValue={['bold']}>\r
        <ToggleGroup.Item value="bold">Bold</ToggleGroup.Item>\r
        <ToggleGroup.Item value="italic">Italic</ToggleGroup.Item>\r
        <ToggleGroup.Item value="underline">Underline</ToggleGroup.Item>\r
        <ToggleGroup.Item value="strikethrough">Strike</ToggleGroup.Item>\r
      </ToggleGroup>\r
    </div>
}`,...(U=(B=I.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var E,W,q;T.parameters={...T.parameters,docs:{...(E=T.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <div>\r
        <h4>Small</h4>\r
        <ToggleGroup type="single" size="sm">\r
          <ToggleGroup.Item value="sm1">Small</ToggleGroup.Item>\r
          <ToggleGroup.Item value="sm2">Size</ToggleGroup.Item>\r
          <ToggleGroup.Item value="sm3">Toggle</ToggleGroup.Item>\r
        </ToggleGroup>\r
      </div>\r
      <div>\r
        <h4>Medium</h4>\r
        <ToggleGroup type="single" size="md">\r
          <ToggleGroup.Item value="md1">Medium</ToggleGroup.Item>\r
          <ToggleGroup.Item value="md2">Size</ToggleGroup.Item>\r
          <ToggleGroup.Item value="md3">Toggle</ToggleGroup.Item>\r
        </ToggleGroup>\r
      </div>\r
      <div>\r
        <h4>Large</h4>\r
        <ToggleGroup type="single" size="lg">\r
          <ToggleGroup.Item value="lg1">Large</ToggleGroup.Item>\r
          <ToggleGroup.Item value="lg2">Size</ToggleGroup.Item>\r
          <ToggleGroup.Item value="lg3">Toggle</ToggleGroup.Item>\r
        </ToggleGroup>\r
      </div>\r
    </div>
}`,...(q=(W=T.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var J,_,P;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <div>\r
        <h4>Default</h4>\r
        <ToggleGroup type="single" variant="default" defaultValue="default2">\r
          <ToggleGroup.Item value="default1">Option 1</ToggleGroup.Item>\r
          <ToggleGroup.Item value="default2">Option 2</ToggleGroup.Item>\r
          <ToggleGroup.Item value="default3">Option 3</ToggleGroup.Item>\r
        </ToggleGroup>\r
      </div>\r
      <div>\r
        <h4>Outline</h4>\r
        <ToggleGroup type="single" variant="outline" defaultValue="outline2">\r
          <ToggleGroup.Item value="outline1">Option 1</ToggleGroup.Item>\r
          <ToggleGroup.Item value="outline2">Option 2</ToggleGroup.Item>\r
          <ToggleGroup.Item value="outline3">Option 3</ToggleGroup.Item>\r
        </ToggleGroup>\r
      </div>\r
      <div>\r
        <h4>Ghost</h4>\r
        <ToggleGroup type="single" variant="ghost" defaultValue="ghost2">\r
          <ToggleGroup.Item value="ghost1">Option 1</ToggleGroup.Item>\r
          <ToggleGroup.Item value="ghost2">Option 2</ToggleGroup.Item>\r
          <ToggleGroup.Item value="ghost3">Option 3</ToggleGroup.Item>\r
        </ToggleGroup>\r
      </div>\r
    </div>
}`,...(P=(_=f.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var H,K,Q;G.parameters={...G.parameters,docs:{...(H=G.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <div>\r
        <h4>Disabled Group</h4>\r
        <ToggleGroup type="single" disabled defaultValue="disabled2">\r
          <ToggleGroup.Item value="disabled1">Option 1</ToggleGroup.Item>\r
          <ToggleGroup.Item value="disabled2">Option 2</ToggleGroup.Item>\r
          <ToggleGroup.Item value="disabled3">Option 3</ToggleGroup.Item>\r
        </ToggleGroup>\r
      </div>\r
      <div>\r
        <h4>Individual Items Disabled</h4>\r
        <ToggleGroup type="single">\r
          <ToggleGroup.Item value="item1">Enabled</ToggleGroup.Item>\r
          <ToggleGroup.Item value="item2" disabled>Disabled</ToggleGroup.Item>\r
          <ToggleGroup.Item value="item3">Enabled</ToggleGroup.Item>\r
        </ToggleGroup>\r
      </div>\r
    </div>
}`,...(Q=(K=G.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <div>\r
        <h4>Text Alignment with Icons</h4>\r
        <ToggleGroup type="single" defaultValue="left">\r
          <ToggleGroup.Item value="left">\r
            <span>⬅️</span>\r
            <span style={{
            marginLeft: '0.5rem'
          }}>Left</span>\r
          </ToggleGroup.Item>\r
          <ToggleGroup.Item value="center">\r
            <span>↔️</span>\r
            <span style={{
            marginLeft: '0.5rem'
          }}>Center</span>\r
          </ToggleGroup.Item>\r
          <ToggleGroup.Item value="right">\r
            <span>➡️</span>\r
            <span style={{
            marginLeft: '0.5rem'
          }}>Right</span>\r
          </ToggleGroup.Item>\r
        </ToggleGroup>\r
      </div>\r
      <div>\r
        <h4>View Mode</h4>\r
        <ToggleGroup type="single" variant="outline" defaultValue="grid">\r
          <ToggleGroup.Item value="list">📋</ToggleGroup.Item>\r
          <ToggleGroup.Item value="grid">⚏</ToggleGroup.Item>\r
          <ToggleGroup.Item value="card">🗂️</ToggleGroup.Item>\r
        </ToggleGroup>\r
      </div>\r
    </div>
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,le,re;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string>('center');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>\r
        <h4>Controlled Single Selection</h4>\r
        <ToggleGroup type="single" value={value} onValueChange={newValue => setValue(newValue as string)}>\r
          <ToggleGroup.Item value="left">Left</ToggleGroup.Item>\r
          <ToggleGroup.Item value="center">Center</ToggleGroup.Item>\r
          <ToggleGroup.Item value="right">Right</ToggleGroup.Item>\r
        </ToggleGroup>\r
        <p>Selected: {value || 'None'}</p>\r
        <button onClick={() => setValue('')}>Clear Selection</button>\r
      </div>;
  }
}`,...(re=(le=j.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var te,oe,ie;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const [values, setValues] = React.useState<string[]>(['bold', 'italic']);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>\r
        <h4>Controlled Multiple Selection</h4>\r
        <ToggleGroup type="multiple" value={values} onValueChange={newValues => setValues(newValues as string[])}>\r
          <ToggleGroup.Item value="bold">Bold</ToggleGroup.Item>\r
          <ToggleGroup.Item value="italic">Italic</ToggleGroup.Item>\r
          <ToggleGroup.Item value="underline">Underline</ToggleGroup.Item>\r
          <ToggleGroup.Item value="strikethrough">Strike</ToggleGroup.Item>\r
        </ToggleGroup>\r
        <p>Selected: {values.length > 0 ? values.join(', ') : 'None'}</p>\r
        <button onClick={() => setValues([])}>Clear All</button>\r
      </div>;
  }
}`,...(ie=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ne,ae,se;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const [lastChange, setLastChange] = React.useState<string>('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>\r
        <h4>Uncontrolled with Change Callback</h4>\r
        <ToggleGroup type="single" defaultValue="option2" onValueChange={value => setLastChange(\`Changed to: \${value || 'None'}\`)}>\r
          <ToggleGroup.Item value="option1">Option 1</ToggleGroup.Item>\r
          <ToggleGroup.Item value="option2">Option 2</ToggleGroup.Item>\r
          <ToggleGroup.Item value="option3">Option 3</ToggleGroup.Item>\r
        </ToggleGroup>\r
        <p>{lastChange || 'No changes yet'}</p>\r
      </div>;
  }
}`,...(se=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ue,ge,de;V.parameters={...V.parameters,docs:{...(ue=V.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const [textAlign, setTextAlign] = React.useState<string>('left');
    const [textFormat, setTextFormat] = React.useState<string[]>([]);
    const [viewMode, setViewMode] = React.useState<string>('grid');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      maxWidth: '500px'
    }}>\r
        <div>\r
          <h4>Text Editor Toolbar</h4>\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>\r
            <div>\r
              <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontSize: '0.875rem'
            }}>\r
                Text Alignment:\r
              </label>\r
              <ToggleGroup type="single" value={textAlign} onValueChange={value => setTextAlign(value as string)} size="sm">\r
                <ToggleGroup.Item value="left">Left</ToggleGroup.Item>\r
                <ToggleGroup.Item value="center">Center</ToggleGroup.Item>\r
                <ToggleGroup.Item value="right">Right</ToggleGroup.Item>\r
                <ToggleGroup.Item value="justify">Justify</ToggleGroup.Item>\r
              </ToggleGroup>\r
            </div>\r
            <div>\r
              <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontSize: '0.875rem'
            }}>\r
                Text Formatting:\r
              </label>\r
              <ToggleGroup type="multiple" value={textFormat} onValueChange={values => setTextFormat(values as string[])} size="sm" variant="outline">\r
                <ToggleGroup.Item value="bold">B</ToggleGroup.Item>\r
                <ToggleGroup.Item value="italic">I</ToggleGroup.Item>\r
                <ToggleGroup.Item value="underline">U</ToggleGroup.Item>\r
                <ToggleGroup.Item value="strikethrough">S</ToggleGroup.Item>\r
              </ToggleGroup>\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div>\r
          <h4>File Browser</h4>\r
          <div>\r
            <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontSize: '0.875rem'
          }}>\r
              View Mode:\r
            </label>\r
            <ToggleGroup type="single" value={viewMode} onValueChange={value => setViewMode(value as string)} variant="ghost">\r
              <ToggleGroup.Item value="list">📋 List</ToggleGroup.Item>\r
              <ToggleGroup.Item value="grid">⚏ Grid</ToggleGroup.Item>\r
              <ToggleGroup.Item value="card">🗂️ Cards</ToggleGroup.Item>\r
            </ToggleGroup>\r
          </div>\r
        </div>\r
        \r
        <div style={{
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '0.375rem'
      }}>\r
          <h5>Current Settings:</h5>\r
          <ul style={{
          fontSize: '0.875rem',
          margin: 0,
          paddingLeft: '1rem'
        }}>\r
            <li>Text Alignment: {textAlign || 'None'}</li>\r
            <li>Text Formatting: {textFormat.length > 0 ? textFormat.join(', ') : 'None'}</li>\r
            <li>View Mode: {viewMode || 'None'}</li>\r
          </ul>\r
        </div>\r
      </div>;
  }
}`,...(de=(ge=V.parameters)==null?void 0:ge.docs)==null?void 0:de.source}}};var pe,me,ce;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>\r
      <h3>Size & Variant Matrix</h3>\r
      {(['sm', 'md', 'lg'] as const).map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>\r
          <h4 style={{
        margin: 0
      }}>{size.toUpperCase()}</h4>\r
          <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>\r
            {(['default', 'outline', 'ghost'] as const).map(variant => <div key={variant} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>\r
                <span style={{
            minWidth: '80px',
            fontSize: '0.875rem'
          }}>{variant}:</span>\r
                <ToggleGroup type="single" size={size} variant={variant} defaultValue="option2">\r
                  <ToggleGroup.Item value="option1">Option 1</ToggleGroup.Item>\r
                  <ToggleGroup.Item value="option2">Option 2</ToggleGroup.Item>\r
                  <ToggleGroup.Item value="option3">Option 3</ToggleGroup.Item>\r
                </ToggleGroup>\r
              </div>)}\r
          </div>\r
        </div>)}\r
    </div>
}`,...(ce=(me=C.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var he,ve,xe;z.parameters={...z.parameters,docs:{...(he=z.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    type: 'single',
    size: 'md',
    variant: 'default',
    disabled: false
  },
  render: args => <ToggleGroup {...args}>\r
      <ToggleGroup.Item value="option1">Option 1</ToggleGroup.Item>\r
      <ToggleGroup.Item value="option2">Option 2</ToggleGroup.Item>\r
      <ToggleGroup.Item value="option3">Option 3</ToggleGroup.Item>\r
    </ToggleGroup>
}`,...(xe=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};const Ae=["Default","SingleSelection","MultipleSelection","AllSizes","AllVariants","Disabled","WithIcons","ControlledSingle","ControlledMultiple","UncontrolledWithCallback","RealWorldExamples","SizeVariantMatrix","Playground"];export{T as AllSizes,f as AllVariants,b as ControlledMultiple,j as ControlledSingle,v as Default,G as Disabled,I as MultipleSelection,z as Playground,V as RealWorldExamples,x as SingleSelection,C as SizeVariantMatrix,S as UncontrolledWithCallback,y as WithIcons,Ae as __namedExportsOrder,ke as default};
