import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as s}from"./index-BlmOqGMO.js";import{d as h}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const se=h.div`
  position: relative;
  overflow: hidden;
`,H=h.div`
  position: absolute;
  
  ${t=>{switch(t.direction){case"horizontal":return`
          top: 0;
          right: 0;
          width: 5px;
          height: 100%;
          cursor: ew-resize;
        `;case"vertical":return`
          bottom: 0;
          left: 0;
          width: 100%;
          height: 5px;
          cursor: ns-resize;
        `;case"both":return`
          bottom: 0;
          right: 0;
          width: 10px;
          height: 10px;
          cursor: nwse-resize;
        `;case"top":return`
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          cursor: ns-resize;
        `;case"right":return`
          top: 0;
          right: 0;
          width: 5px;
          height: 100%;
          cursor: ew-resize;
        `;case"bottom":return`
          bottom: 0;
          left: 0;
          width: 100%;
          height: 5px;
          cursor: ns-resize;
        `;case"left":return`
          top: 0;
          left: 0;
          width: 5px;
          height: 100%;
          cursor: ew-resize;
        `;case"topLeft":return`
          top: 0;
          left: 0;
          width: 10px;
          height: 10px;
          cursor: nwse-resize;
        `;case"topRight":return`
          top: 0;
          right: 0;
          width: 10px;
          height: 10px;
          cursor: nesw-resize;
        `;case"bottomLeft":return`
          bottom: 0;
          left: 0;
          width: 10px;
          height: 10px;
          cursor: nesw-resize;
        `;case"bottomRight":return`
          bottom: 0;
          right: 0;
          width: 10px;
          height: 10px;
          cursor: nwse-resize;
        `;default:return""}}}
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`,n=({children:t,direction:r="both",minWidth:y=100,minHeight:Q=100,maxWidth:Z=Number.POSITIVE_INFINITY,maxHeight:ee=Number.POSITIVE_INFINITY,defaultSize:o={},onResize:j,className:te})=>{const l=s.useRef(null),[a,W]=s.useState({width:o.width||"auto",height:o.height||"auto"}),[ie,S]=s.useState(!1),[C,re]=s.useState({x:0,y:0}),[g,ne]=s.useState({width:0,height:0});s.useEffect(()=>{if(l.current&&(o.width||o.height)){const{width:i,height:d}=l.current.getBoundingClientRect();W({width:o.width||i,height:o.height||d})}},[o]);const R=(i,d)=>{if(i.preventDefault(),l.current){const{width:m,height:u}=l.current.getBoundingClientRect();S(!0),re({x:i.clientX,y:i.clientY}),ne({width:m,height:u}),document.addEventListener("mousemove",B),document.addEventListener("mouseup",M)}},B=i=>{if(!ie)return;let d=g.width,m=g.height;if(r==="horizontal"||r==="both"){const u=i.clientX-C.x;d=Math.max(y,Math.min(Z,g.width+u))}if(r==="vertical"||r==="both"){const u=i.clientY-C.y;m=Math.max(Q,Math.min(ee,g.height+u))}W({width:d,height:m}),j&&j({width:d,height:m})},M=()=>{S(!1),document.removeEventListener("mousemove",B),document.removeEventListener("mouseup",M)};return e.jsxs(se,{ref:l,className:te,style:{width:typeof a.width=="number"?`${a.width}px`:a.width,height:typeof a.height=="number"?`${a.height}px`:a.height},children:[t,r==="horizontal"&&e.jsx(H,{direction:"horizontal",onMouseDown:i=>R(i)}),r==="vertical"&&e.jsx(H,{direction:"vertical",onMouseDown:i=>R(i)}),r==="both"&&e.jsx(H,{direction:"both",onMouseDown:i=>R(i)})]})};n.__docgenInfo={description:"",methods:[],displayName:"Resizable",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},direction:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical" | "both"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'},{name:"literal",value:'"both"'}]},description:"",defaultValue:{value:'"both"',computed:!1}},minWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},minHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},maxWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"Number.POSITIVE_INFINITY",computed:!0}},maxHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"Number.POSITIVE_INFINITY",computed:!0}},defaultSize:{required:!1,tsType:{name:"signature",type:"object",raw:"{ width?: number | string; height?: number | string }",signature:{properties:[{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"height",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}},description:"",defaultValue:{value:"{}",computed:!1}},onResize:{required:!1,tsType:{name:"signature",type:"function",raw:"(size: { width: number; height: number }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ width: number; height: number }",signature:{properties:[{key:"width",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}}]}},name:"size"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ce={title:"Components/New/Resizable",component:n,tags:["autodocs"],argTypes:{direction:{control:{type:"radio",options:["horizontal","vertical","both"]},defaultValue:"both"},minWidth:{control:{type:"number"},defaultValue:100},minHeight:{control:{type:"number"},defaultValue:100},maxWidth:{control:{type:"number"},defaultValue:500},maxHeight:{control:{type:"number"},defaultValue:400},defaultSize:{control:!1},onResize:{action:"onResize",table:{disable:!0}}}},p={args:{direction:"horizontal",minWidth:100,maxWidth:300},render:t=>e.jsx("div",{style:{width:"100%",padding:"2rem"},children:e.jsx(n,{...t,defaultSize:{width:200,height:150},children:e.jsx(c,{children:"Resize Me Horizontally"})})})},x={args:{direction:"vertical",minHeight:100,maxHeight:300},render:t=>e.jsx("div",{style:{width:"100%",padding:"2rem"},children:e.jsx(n,{...t,defaultSize:{width:200,height:150},children:e.jsx(c,{children:"Resize Me Vertically"})})})},b={args:{direction:"both",minWidth:100,minHeight:100,maxWidth:400,maxHeight:300},render:t=>e.jsx("div",{style:{width:"100%",padding:"2rem"},children:e.jsx(n,{...t,defaultSize:{width:200,height:150},children:e.jsx(c,{children:"Resize Me (Both)"})})})},z={args:{direction:"both",minWidth:100,minHeight:100,maxWidth:400,maxHeight:300},render:()=>{const[t,r]=s.useState({width:200,height:150});return e.jsx("div",{style:{width:"100%",padding:"2rem"},children:e.jsx(n,{direction:"both",defaultSize:{width:200,height:150},onResize:y=>r(y),minWidth:100,minHeight:100,maxWidth:400,maxHeight:300,children:e.jsxs(c,{children:["Width: ",t.width,"px",e.jsx("br",{}),"Height: ",t.height,"px"]})})})}},w={args:{direction:"horizontal",minWidth:100,maxWidth:300},render:t=>e.jsx("div",{style:{width:"100%",padding:"2rem"},children:e.jsx(n,{...t,defaultSize:{width:200,height:80},children:e.jsx(oe,{children:"Drag to resize horizontally"})})})},f={render:()=>e.jsx("div",{style:{width:"100%",padding:"2rem"},children:e.jsx(n,{direction:"both",defaultSize:{width:200,height:150},minWidth:100,minHeight:100,maxWidth:400,maxHeight:300,children:e.jsxs(c,{style:{position:"relative",height:"100%"},children:[e.jsx("p",{children:"Custom Handle Example"}),e.jsx(de,{onMouseDown:t=>{t.stopPropagation()},children:"⇘"})]})})})},v={render:()=>{const[t,r]=s.useState({width:250,height:200});return e.jsx("div",{style:{width:"100%",padding:"2rem",display:"flex",justifyContent:"center"},children:e.jsx(n,{direction:"both",defaultSize:{width:250,height:200},minWidth:150,minHeight:100,maxWidth:600,maxHeight:400,onResize:r,children:e.jsxs(ae,{style:{width:t.width,height:t.height},children:[e.jsx("h4",{children:"Resizable Box"}),e.jsxs("p",{children:["Width: ",t.width,"px"]}),e.jsxs("p",{children:["Height: ",t.height,"px"]}),e.jsx("small",{children:"Resize me by dragging the edges!"})]})})})}},c=h.div`
  background-color: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  user-select: none;
`,oe=h.div`
  background-color: #f0fdf4;
  border: 1px dashed #bbf7d0;
  padding: 1rem;
  text-align: center;
  font-size: 0.85rem;
  user-select: none;
`,ae=h.div`
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
`,de=h.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20px;
  height: 20px;
  cursor: nwse-resize;
  background-color: #3b82f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  user-select: none;
  z-index: 10;

  &:hover {
    background-color: #2563eb;
  }
`;var I,V,T;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    minWidth: 100,
    maxWidth: 300
  },
  render: args => {
    return <div style={{
      width: '100%',
      padding: '2rem'
    }}>\r
        <Resizable {...args} defaultSize={{
        width: 200,
        height: 150
      }}>\r
          <ContentBox>Resize Me Horizontally</ContentBox>\r
        </Resizable>\r
      </div>;
  }
}`,...(T=(V=p.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var N,E,D;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
    minHeight: 100,
    maxHeight: 300
  },
  render: args => {
    return <div style={{
      width: '100%',
      padding: '2rem'
    }}>\r
        <Resizable {...args} defaultSize={{
        width: 200,
        height: 150
      }}>\r
          <ContentBox>Resize Me Vertically</ContentBox>\r
        </Resizable>\r
      </div>;
  }
}`,...(D=(E=x.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var q,k,P;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    direction: 'both',
    minWidth: 100,
    minHeight: 100,
    maxWidth: 400,
    maxHeight: 300
  },
  render: args => {
    return <div style={{
      width: '100%',
      padding: '2rem'
    }}>\r
        <Resizable {...args} defaultSize={{
        width: 200,
        height: 150
      }}>\r
          <ContentBox>Resize Me (Both)</ContentBox>\r
        </Resizable>\r
      </div>;
  }
}`,...(P=(k=b.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var _,Y,F;z.parameters={...z.parameters,docs:{...(_=z.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    direction: 'both',
    minWidth: 100,
    minHeight: 100,
    maxWidth: 400,
    maxHeight: 300
  },
  render: () => {
    const [dimensions, setDimensions] = useState({
      width: 200,
      height: 150
    });
    return <div style={{
      width: '100%',
      padding: '2rem'
    }}>\r
        <Resizable direction="both" defaultSize={{
        width: 200,
        height: 150
      }} onResize={size => setDimensions(size)} minWidth={100} minHeight={100} maxWidth={400} maxHeight={300}>\r
          <ContentBox>\r
            Width: {dimensions.width}px<br />\r
            Height: {dimensions.height}px\r
          </ContentBox>\r
        </Resizable>\r
      </div>;
  }
}`,...(F=(Y=z.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};var L,O,X;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    minWidth: 100,
    maxWidth: 300
  },
  render: args => {
    return <div style={{
      width: '100%',
      padding: '2rem'
    }}>\r
        <Resizable {...args} defaultSize={{
        width: 200,
        height: 80
      }}>\r
          <MinimalBox>Drag to resize horizontally</MinimalBox>\r
        </Resizable>\r
      </div>;
  }
}`,...(X=(O=w.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};var $,A,U;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      width: '100%',
      padding: '2rem'
    }}>\r
        <Resizable direction="both" defaultSize={{
        width: 200,
        height: 150
      }} minWidth={100} minHeight={100} maxWidth={400} maxHeight={300}>\r
          <ContentBox style={{
          position: 'relative',
          height: '100%'
        }}>\r
            <p>Custom Handle Example</p>\r
            <CustomHandle onMouseDown={e => {
            e.stopPropagation();
            // Add custom resize logic here if needed
          }}>\r
              ⇘\r
            </CustomHandle>\r
          </ContentBox>\r
        </Resizable>\r
      </div>;
  }
}`,...(U=(A=f.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var G,J,K;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [size, setSize] = useState({
      width: 250,
      height: 200
    });
    return <div style={{
      width: '100%',
      padding: '2rem',
      display: 'flex',
      justifyContent: 'center'
    }}>\r
        <Resizable direction="both" defaultSize={{
        width: 250,
        height: 200
      }} minWidth={150} minHeight={100} maxWidth={600} maxHeight={400} onResize={setSize}>\r
          <CustomResizableBox style={{
          width: size.width,
          height: size.height
        }}>\r
            <h4>Resizable Box</h4>\r
            <p>Width: {size.width}px</p>\r
            <p>Height: {size.height}px</p>\r
            <small>Resize me by dragging the edges!</small>\r
          </CustomResizableBox>\r
        </Resizable>\r
      </div>;
  }
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const ge=["Horizontal","Vertical","BothDirections","ControlledResize","MinimalResizable","WithCustomHandle","FullCustomExample"];export{b as BothDirections,z as ControlledResize,v as FullCustomExample,p as Horizontal,w as MinimalResizable,x as Vertical,f as WithCustomHandle,ge as __namedExportsOrder,ce as default};
