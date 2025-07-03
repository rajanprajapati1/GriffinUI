import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as d,R as K}from"./index-BlmOqGMO.js";import{l as s,d as b}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const Q=b.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  ${n=>n.direction==="vertical"&&s`
    flex-direction: column;
  `}
`,k=b.div`
  overflow: auto;
  
  ${n=>n.direction==="horizontal"?s`
        width: ${n.size};
        height: 100%;
      `:s`
        width: 100%;
        height: ${n.size};
      `}
`,O=b.div`
  background-color: #e5e7eb;
  position: relative;
  
  ${n=>n.direction==="horizontal"?s`
        width: 4px;
        height: 100%;
        cursor: col-resize;
        
        &:hover {
          background-color: #d1d5db;
        }
        
        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: -3px;
          right: -3px;
          bottom: 0;
          z-index: 10;
        }
      `:s`
        width: 100%;
        height: 4px;
        cursor: row-resize;
        
        &:hover {
          background-color: #d1d5db;
        }
        
        &::after {
          content: '';
          position: absolute;
          top: -3px;
          left: 0;
          right: 0;
          bottom: -3px;
          z-index: 10;
        }
      `}
`,Z=K.createContext({direction:"horizontal",firstPaneSize:"50%",secondPaneSize:"50%"}),r=({children:n,direction:i="horizontal",defaultSplit:l=50,minSize:x=10,maxSize:U=90,className:X,onDragEnd:y})=>{const[S,Y]=d.useState(`${l}%`),[z,G]=d.useState(`${100-l}%`),[c,P]=d.useState(!1),v=d.useRef(null),C=()=>{P(!0),document.body.style.cursor=i==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"},j=a=>{if(!v.current||!c)return;const o=v.current.getBoundingClientRect();let t;i==="horizontal"?t=(a-o.left)/o.width*100:t=(a-o.top)/o.height*100,t=Math.max(x,Math.min(U,t)),Y(`${t}%`),G(`${100-t}%`)},J=()=>{if(c&&(P(!1),document.body.style.cursor="",document.body.style.userSelect="",y)){const a=Number.parseFloat(S);y(a)}};return d.useEffect(()=>{const a=t=>{j(i==="horizontal"?t.clientX:t.clientY)},o=()=>{J()};return c&&(document.addEventListener("mousemove",a),document.addEventListener("mouseup",o)),()=>{document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",o)}},[c,i]),e.jsx(Z.Provider,{value:{direction:i,firstPaneSize:S,secondPaneSize:z},children:e.jsxs(Q,{ref:v,direction:i,className:X,children:[e.jsx(k,{size:S,isFirst:!0,direction:i,children:n[0]}),e.jsx(O,{direction:i,onMouseDown:C,onTouchStart:C}),e.jsx(k,{size:z,isFirst:!1,direction:i,children:n[1]})]})})},ee=({children:n,className:i})=>e.jsx("div",{className:i,children:n}),ne=({direction:n,className:i})=>e.jsx(O,{direction:n,className:i});r.Pane=ee;r.Divider=ne;r.__docgenInfo={description:"",methods:[{name:"Pane",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",optional:!1,type:null}],returns:null},{name:"Divider",docblock:null,modifiers:["static"],params:[{name:"{ direction, className }",optional:!1,type:null}],returns:null}],displayName:"SplitPaneComponent",props:{direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},defaultSplit:{defaultValue:{value:"50",computed:!1},required:!1},minSize:{defaultValue:{value:"10",computed:!1},required:!1},maxSize:{defaultValue:{value:"90",computed:!1},required:!1}}};const oe={title:"Components/New/SplitPane",component:r,tags:["autodocs"],argTypes:{direction:{control:{type:"radio",options:["horizontal","vertical"]},defaultValue:"horizontal"},defaultSplit:{control:{type:"number",min:10,max:90},defaultValue:50},minSize:{control:{type:"number",min:5,max:45},defaultValue:10},maxSize:{control:{type:"number",min:55,max:95},defaultValue:90}}},p={args:{direction:"horizontal",defaultSplit:50,minSize:10,maxSize:90},render:n=>e.jsx("div",{style:{height:"300px"},children:e.jsxs(r,{...n,children:[e.jsx("div",{style:{padding:"1rem",backgroundColor:"#f9fafb"},children:"Left Pane"}),e.jsx("div",{style:{padding:"1rem",backgroundColor:"#f3f4f6"},children:"Right Pane"})]})})},m={args:{direction:"vertical",defaultSplit:40,minSize:15,maxSize:85},render:n=>e.jsx("div",{style:{width:"100%",height:"400px"},children:e.jsxs(r,{...n,children:[e.jsx("div",{style:{padding:"1rem",backgroundColor:"#f9fafb"},children:"Top Pane"}),e.jsx("div",{style:{padding:"1rem",backgroundColor:"#f3f4f6"},children:"Bottom Pane"})]})})},f={args:{direction:"horizontal",defaultSplit:50,minSize:20,maxSize:80},render:()=>{const[n,i]=d.useState(50),l=x=>{i(x)};return e.jsxs("div",{style:{height:"300px"},children:[e.jsxs("div",{style:{marginBottom:"0.5rem",textAlign:"center"},children:["Left Pane: ",n.toFixed(0),"% | Right Pane: ",(100-n).toFixed(0),"%"]}),e.jsxs(r,{defaultSplit:50,onDragEnd:l,children:[e.jsx("div",{style:{padding:"1rem",backgroundColor:"#f9fafb"},children:"Left Pane"}),e.jsx("div",{style:{padding:"1rem",backgroundColor:"#f3f4f6"},children:"Right Pane"})]})]})}},u={args:{direction:"horizontal",defaultSplit:60,minSize:20,maxSize:80},render:n=>e.jsx("div",{style:{height:"300px"},children:e.jsxs(r,{...n,children:[e.jsx("div",{style:{padding:"1rem",backgroundColor:"#f9fafb"},children:"Left Pane"}),e.jsx(r.Divider,{style:{backgroundColor:"#3b82f6",width:"6px",cursor:"col-resize"}}),e.jsx("div",{style:{padding:"1rem",backgroundColor:"#f3f4f6"},children:"Right Pane"})]})})},g={args:{direction:"vertical",defaultSplit:30,minSize:15,maxSize:70},render:n=>e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsxs(r,{...n,children:[e.jsx(r.Pane,{style:{padding:"0",backgroundColor:"#ffffff"},children:e.jsxs("div",{style:{height:"100%",borderRight:"1px solid #e5e7eb",padding:"1rem"},children:[e.jsx("h3",{style:{margin:"0 0 1rem 0",fontSize:"1rem",fontWeight:"500"},children:"Code Editor"}),e.jsxs("pre",{style:{margin:0,fontFamily:"monospace",fontSize:"0.9rem",backgroundColor:"#f9fafb",padding:"1rem"},children:["function example() ","{","  ",'console.log("Hello World")',"}"]})]})}),e.jsx(r.Divider,{style:{backgroundColor:"#ef4444",width:"6px",cursor:"row-resize"}}),e.jsx(r.Pane,{style:{padding:"0",backgroundColor:"#f9fafb"},children:e.jsxs("div",{style:{height:"100%",padding:"1rem",backgroundColor:"#f3f4f6"},children:[e.jsx("h3",{style:{margin:"0 0 1rem 0",fontSize:"1rem",fontWeight:"500"},children:"Preview"}),e.jsx("p",{children:"This pane updates in real-time as you resize the split."})]})})]})})},h={args:{direction:"horizontal",defaultSplit:40,minSize:10,maxSize:80},render:n=>e.jsx("div",{style:{height:"400px",border:"1px solid #e5e7eb",borderRadius:"0.5rem",overflow:"hidden"},children:e.jsxs(r,{...n,children:[e.jsxs(r.Pane,{style:{padding:"1rem",backgroundColor:"#f9fafb",borderRight:"1px solid #e5e7eb"},children:[e.jsx("h3",{style:{margin:"0 0 1rem 0"},children:"Documentation"}),e.jsx("p",{style:{margin:"0 0 0.5rem 0"},children:"Left Pane Content"}),e.jsx("p",{children:"Resize this pane by dragging the divider between them."})]}),e.jsx(r.Divider,{style:{backgroundColor:"#3b82f6",width:"4px",cursor:"col-resize"}}),e.jsxs(r.Pane,{style:{padding:"1rem",backgroundColor:"#f3f4f6"},children:[e.jsx("h3",{style:{margin:"0 0 1rem 0"},children:"Live Preview"}),e.jsx("div",{style:{border:"1px dashed #d1d5db",padding:"1rem",backgroundColor:"#f9fafb"},children:"This right pane dynamically resizes when you drag."})]})]})})};var w,D,R;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    defaultSplit: 50,
    minSize: 10,
    maxSize: 90
  },
  render: args => <div style={{
    height: '300px'
  }}>\r
      <SplitPane {...args}>\r
        <div style={{
        padding: '1rem',
        backgroundColor: '#f9fafb'
      }}>Left Pane</div>\r
        <div style={{
        padding: '1rem',
        backgroundColor: '#f3f4f6'
      }}>Right Pane</div>\r
      </SplitPane>\r
    </div>
}`,...(R=(D=p.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var L,E,F;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
    defaultSplit: 40,
    minSize: 15,
    maxSize: 85
  },
  render: args => <div style={{
    width: '100%',
    height: '400px'
  }}>\r
      <SplitPane {...args}>\r
        <div style={{
        padding: '1rem',
        backgroundColor: '#f9fafb'
      }}>Top Pane</div>\r
        <div style={{
        padding: '1rem',
        backgroundColor: '#f3f4f6'
      }}>Bottom Pane</div>\r
      </SplitPane>\r
    </div>
}`,...(F=(E=m.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var V,W,$;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    defaultSplit: 50,
    minSize: 20,
    maxSize: 80
  },
  render: () => {
    const [firstSize, setFirstSize] = useState(50);
    const handleDragEnd = (size: number) => {
      setFirstSize(size);
    };
    return <div style={{
      height: '300px'
    }}>\r
        <div style={{
        marginBottom: '0.5rem',
        textAlign: 'center'
      }}>\r
          Left Pane: {firstSize.toFixed(0)}% | Right Pane: {(100 - firstSize).toFixed(0)}%\r
        </div>\r
        <SplitPane defaultSplit={50} onDragEnd={handleDragEnd}>\r
          <div style={{
          padding: '1rem',
          backgroundColor: '#f9fafb'
        }}>Left Pane</div>\r
          <div style={{
          padding: '1rem',
          backgroundColor: '#f3f4f6'
        }}>Right Pane</div>\r
        </SplitPane>\r
      </div>;
  }
}`,...($=(W=f.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var M,T,B;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    defaultSplit: 60,
    minSize: 20,
    maxSize: 80
  },
  render: args => <div style={{
    height: '300px'
  }}>\r
      <SplitPane {...args}>\r
        <div style={{
        padding: '1rem',
        backgroundColor: '#f9fafb'
      }}>Left Pane</div>\r
        <SplitPane.Divider style={{
        backgroundColor: '#3b82f6',
        width: '6px',
        cursor: 'col-resize'
      }} />\r
        <div style={{
        padding: '1rem',
        backgroundColor: '#f3f4f6'
      }}>Right Pane</div>\r
      </SplitPane>\r
    </div>
}`,...(B=(T=u.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var N,q,H;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
    defaultSplit: 30,
    minSize: 15,
    maxSize: 70
  },
  render: args => <div style={{
    width: '100%',
    height: '300px'
  }}>\r
      <SplitPane {...args}>\r
        <SplitPane.Pane style={{
        padding: '0',
        backgroundColor: '#ffffff'
      }}>\r
          <div style={{
          height: '100%',
          borderRight: '1px solid #e5e7eb',
          padding: '1rem'
        }}>\r
            <h3 style={{
            margin: '0 0 1rem 0',
            fontSize: '1rem',
            fontWeight: '500'
          }}>Code Editor</h3>\r
            <pre style={{
            margin: 0,
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            backgroundColor: '#f9fafb',
            padding: '1rem'
          }}>\r
              function example() {'{'}\r
              {'  '}console.log("Hello World")\r
              {'}'}\r
            </pre>\r
          </div>\r
        </SplitPane.Pane>\r
        <SplitPane.Divider style={{
        backgroundColor: '#ef4444',
        width: '6px',
        cursor: 'row-resize'
      }} />\r
        <SplitPane.Pane style={{
        padding: '0',
        backgroundColor: '#f9fafb'
      }}>\r
          <div style={{
          height: '100%',
          padding: '1rem',
          backgroundColor: '#f3f4f6'
        }}>\r
            <h3 style={{
            margin: '0 0 1rem 0',
            fontSize: '1rem',
            fontWeight: '500'
          }}>Preview</h3>\r
            <p>This pane updates in real-time as you resize the split.</p>\r
          </div>\r
        </SplitPane.Pane>\r
      </SplitPane>\r
    </div>
}`,...(H=(q=g.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var _,A,I;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    defaultSplit: 40,
    minSize: 10,
    maxSize: 80
  },
  render: args => <div style={{
    height: '400px',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    overflow: 'hidden'
  }}>\r
      <SplitPane {...args}>\r
        <SplitPane.Pane style={{
        padding: '1rem',
        backgroundColor: '#f9fafb',
        borderRight: '1px solid #e5e7eb'
      }}>\r
          <h3 style={{
          margin: '0 0 1rem 0'
        }}>Documentation</h3>\r
          <p style={{
          margin: '0 0 0.5rem 0'
        }}>Left Pane Content</p>\r
          <p>Resize this pane by dragging the divider between them.</p>\r
        </SplitPane.Pane>\r
        <SplitPane.Divider style={{
        backgroundColor: '#3b82f6',
        width: '4px',
        cursor: 'col-resize'
      }} />\r
        <SplitPane.Pane style={{
        padding: '1rem',
        backgroundColor: '#f3f4f6'
      }}>\r
          <h3 style={{
          margin: '0 0 1rem 0'
        }}>Live Preview</h3>\r
          <div style={{
          border: '1px dashed #d1d5db',
          padding: '1rem',
          backgroundColor: '#f9fafb'
        }}>\r
            This right pane dynamically resizes when you drag.\r
          </div>\r
        </SplitPane.Pane>\r
      </SplitPane>\r
    </div>
}`,...(I=(A=h.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};const de=["DefaultHorizontal","VerticalLayout","ControlledWithSizeDisplay","WithCustomDivider","MinimalPanes","FullCustomExample"];export{f as ControlledWithSizeDisplay,p as DefaultHorizontal,h as FullCustomExample,g as MinimalPanes,m as VerticalLayout,u as WithCustomDivider,de as __namedExportsOrder,oe as default};
