import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as s}from"./index-BlmOqGMO.js";import{l as r,d as h,m as M}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const ee=M`
  from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
`,ne=M`
  from { opacity: 0; transform: translateX(-50%) scale(0.8); }
  to { opacity: 1; transform: translateX(-50%) scale(1); }
`,oe=M`
  0% { opacity: 0; transform: translateX(-50%) scale(0.3); }
  50% { opacity: 1; transform: translateX(-50%) scale(1.05); }
  70% { transform: translateX(-50%) scale(0.9); }
  100% { opacity: 1; transform: translateX(-50%) scale(1); }
`,re=M`
  0% { transform: translateX(-50%) scale(1); }
  50% { transform: translateX(-50%) scale(1.05); }
  100% { transform: translateX(-50%) scale(1); }
`,ie=h.div`
  position: relative;
  display: inline-block;
  
  ${e=>e.interactive&&r`
    cursor: pointer;
  `}
`,se=h.div`
  position: absolute;
  z-index: 9999;
  pointer-events: ${e=>e.$visible?"auto":"none"};
  visibility: ${e=>e.$visible?"visible":"hidden"};
  opacity: ${e=>e.$visible?1:0};
  max-width: ${e=>e.$maxWidth}px;
  word-wrap: break-word;
  white-space: ${e=>e.$multiline?"normal":"nowrap"};
  
  // Size variants
  ${e=>{switch(e.$size){case"xs":return r`
          padding: 4px 6px;
          font-size: 10px;
          line-height: 1.2;
        `;case"sm":return r`
          padding: 6px 8px;
          font-size: 12px;
          line-height: 1.3;
        `;case"md":return r`
          padding: 8px 12px;
          font-size: 14px;
          line-height: 1.4;
        `;case"lg":return r`
          padding: 10px 14px;
          font-size: 16px;
          line-height: 1.5;
        `;case"xl":return r`
          padding: 12px 16px;
          font-size: 18px;
          line-height: 1.5;
        `;default:return r`
          padding: 8px 12px;
          font-size: 14px;
          line-height: 1.4;
        `}}}
  
  // Color variants
  ${e=>{switch(e.$variant){case"dark":return r`
          background: #1a1a1a;
          color: #ffffff;
          border: 1px solid #333;
        `;case"light":return r`
          background: #ffffff;
          color: #333333;
          border: 1px solid #e2e8f0;
        `;case"success":return r`
          background: #10b981;
          color: #ffffff;
          border: 1px solid #059669;
        `;case"warning":return r`
          background: #f59e0b;
          color: #ffffff;
          border: 1px solid #d97706;
        `;case"error":return r`
          background: #ef4444;
          color: #ffffff;
          border: 1px solid #dc2626;
        `;case"info":return r`
          background: #3b82f6;
          color: #ffffff;
          border: 1px solid #2563eb;
        `;case"primary":return r`
          background: #8b5cf6;
          color: #ffffff;
          border: 1px solid #7c3aed;
        `;case"secondary":return r`
          background: #6b7280;
          color: #ffffff;
          border: 1px solid #4b5563;
        `;default:return r`
          background: #374151;
          color: #ffffff;
          border: 1px solid #4b5563;
        `}}}
  
  // Border radius
  border-radius: ${e=>e.$rounded?"8px":"4px"};
  
  // Shadow
  ${e=>e.$shadow&&r`
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  `}
  
  // Positioning
  ${e=>{const i=e.$offset;switch(e.$position){case"top":return r`
          bottom: calc(100% + ${i}px);
          left: 50%;
          transform: translateX(-50%);
        `;case"bottom":return r`
          top: calc(100% + ${i}px);
          left: 50%;
          transform: translateX(-50%);
        `;case"left":return r`
          right: calc(100% + ${i}px);
          top: 50%;
          transform: translateY(-50%);
        `;case"right":return r`
          left: calc(100% + ${i}px);
          top: 50%;
          transform: translateY(-50%);
        `;case"top-left":return r`
          bottom: calc(100% + ${i}px);
          right: 0;
        `;case"top-right":return r`
          bottom: calc(100% + ${i}px);
          left: 0;
        `;case"bottom-left":return r`
          top: calc(100% + ${i}px);
          right: 0;
        `;case"bottom-right":return r`
          top: calc(100% + ${i}px);
          left: 0;
        `;default:return r`
          bottom: calc(100% + ${i}px);
          left: 50%;
          transform: translateX(-50%);
        `}}}
  
  // Animations
  ${e=>{if(!e.$visible)return"";switch(e.$animation){case"fade":return r`
          animation: ${ee} 0.2s ease-out;
        `;case"slide":return r`
          animation: ${ne} 0.3s ease-out;
        `;case"bounce":return r`
          animation: ${oe} 0.4s ease-out;
        `;case"pulse":return r`
          animation: ${re} 0.3s ease-out;
        `;default:return r`
          transition: opacity 0.2s ease-out;
        `}}}
`,ae=h.div`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  
  ${e=>{const a=(()=>{switch(e.$variant){case"dark":return"#1a1a1a";case"light":return"#ffffff";case"success":return"#10b981";case"warning":return"#f59e0b";case"error":return"#ef4444";case"info":return"#3b82f6";case"primary":return"#8b5cf6";case"secondary":return"#6b7280";default:return"#374151"}})();switch(e.$position){case"top":return r`
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 6px 6px 0 6px;
          border-color: ${a} transparent transparent transparent;
        `;case"bottom":return r`
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 0 6px 6px 6px;
          border-color: transparent transparent ${a} transparent;
        `;case"left":return r`
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border-width: 6px 0 6px 6px;
          border-color: transparent transparent transparent ${a};
        `;case"right":return r`
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          border-width: 6px 6px 6px 0;
          border-color: transparent ${a} transparent transparent;
        `;default:return r`
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 6px 6px 0 6px;
          border-color: ${a} transparent transparent transparent;
        `}}}
`,le=h.div`
  font-weight: 600;
  margin-bottom: 4px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 4px;
`,ce=h.div`
  // Rich content styling
  p {
    margin: 0 0 8px 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  ul, ol {
    margin: 0;
    padding-left: 16px;
  }
  
  strong {
    font-weight: 600;
  }
  
  em {
    font-style: italic;
  }
  
  code {
    background: rgba(255, 255, 255, 0.1);
    padding: 2px 4px;
    border-radius: 2px;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.9em;
  }
`,n=({content:e,title:i,children:a,position:E="top",offset:Lt=8,followCursor:B=!1,trigger:c="hover",delay:X=0,duration:F=0,disabled:It=!1,visible:W,variant:A="default",size:Mt="md",animation:Wt="fade",arrow:Vt=!0,rounded:Dt=!1,shadow:qt=!0,maxWidth:Et=250,interactive:Bt=!1,multiline:Xt=!1,rich:Ft=!1,onShow:d,onHide:u,onClick:V,className:At,style:Ht,contentStyle:Nt})=>{const[Yt,y]=s.useState(!1),[de,_t]=s.useState({x:0,y:0}),D=s.useRef(null),Ot=s.useRef(null),p=s.useRef(null),m=s.useRef(null),f=W!==void 0?W:Yt,q=()=>{It||(m.current&&clearTimeout(m.current),X>0?p.current=setTimeout(()=>{y(!0),d==null||d()},X):(y(!0),d==null||d()))},g=()=>{p.current&&clearTimeout(p.current),F>0?m.current=setTimeout(()=>{y(!1),u==null||u()},F):(y(!1),u==null||u())},Ut=b=>{B&&_t({x:b.clientX,y:b.clientY})},Gt=()=>{c==="hover"&&q()},Jt=()=>{c==="hover"&&g()},Kt=()=>{c==="click"&&(f?g():q()),V==null||V()},Qt=()=>{c==="focus"&&q()},Zt=()=>{c==="focus"&&g()};return s.useEffect(()=>()=>{p.current&&clearTimeout(p.current),m.current&&clearTimeout(m.current)},[]),s.useEffect(()=>{if(c==="click"&&f){const b=te=>{D.current&&!D.current.contains(te.target)&&g()};return document.addEventListener("mousedown",b),()=>document.removeEventListener("mousedown",b)}},[c,f]),!e&&!i?t.jsx(t.Fragment,{children:a}):t.jsxs(ie,{ref:D,className:At,style:Ht,interactive:Bt,onMouseEnter:Gt,onMouseLeave:Jt,onMouseMove:Ut,onClick:Kt,onFocus:Qt,onBlur:Zt,children:[a,(f||W!==void 0)&&t.jsxs(se,{ref:Ot,$position:E,$variant:A,$size:Mt,$animation:Wt,$visible:f,$maxWidth:Et,$rounded:Dt,$shadow:qt,$multiline:Xt,$offset:Lt,style:Nt,children:[i&&t.jsx(le,{children:i}),t.jsx(ce,{children:Ft?t.jsx("div",{dangerouslySetInnerHTML:{__html:e}}):e}),Vt&&!B&&t.jsx(ae,{$position:E,$variant:A})]})]})},l={minimal:e=>({position:"top",variant:"default",...e}),info:e=>({variant:"info",...e}),success:e=>({variant:"success",...e}),warning:e=>({variant:"warning",...e}),error:e=>({variant:"error",...e}),clickable:e=>({trigger:"click",interactive:!0,...e}),rich:e=>({rich:!0,multiline:!0,maxWidth:350,...e}),deluxe:e=>({shadow:!0,rounded:!0,animation:"bounce",size:"lg",...e})};n.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},followCursor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},trigger:{required:!1,tsType:{name:"union",raw:"'hover' | 'click' | 'focus' | 'manual'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'click'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'manual'"}]},description:"",defaultValue:{value:"'hover'",computed:!1}},delay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visible:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'dark' | 'light' | 'success' | 'warning' | 'error' | 'info' | 'primary' | 'secondary'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},animation:{required:!1,tsType:{name:"union",raw:"'fade' | 'slide' | 'bounce' | 'pulse' | 'none'",elements:[{name:"literal",value:"'fade'"},{name:"literal",value:"'slide'"},{name:"literal",value:"'bounce'"},{name:"literal",value:"'pulse'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'fade'",computed:!1}},arrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},rounded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},shadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},maxWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"250",computed:!1}},interactive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},multiline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},rich:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onShow:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHide:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},contentStyle:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const be={title:"Components/UI/Tooltip",component:n,tags:["autodocs"],parameters:{docs:{description:{component:`
A comprehensive tooltip component with extensive customization options including:
- Multiple positions and triggers
- Various color variants and sizes
- Rich content support
- Interactive tooltips
- Follow cursor functionality
- Custom animations
        `}}},argTypes:{content:{control:"text",description:"Content to display in the tooltip"},title:{control:"text",description:"Optional title for the tooltip"},position:{control:"select",options:["top","bottom","left","right","top-left","top-right","bottom-left","bottom-right"],description:"Position of the tooltip relative to the trigger element"},trigger:{control:"select",options:["hover","click","focus","manual"],description:"How the tooltip is triggered"},variant:{control:"select",options:["default","dark","light","success","warning","error","info","primary","secondary"],description:"Visual variant of the tooltip"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Size of the tooltip"},animation:{control:"select",options:["fade","slide","bounce","pulse","none"],description:"Animation when showing/hiding the tooltip"},delay:{control:{type:"number",min:0,max:2e3,step:100},description:"Delay before showing tooltip (ms)"},duration:{control:{type:"number",min:0,max:5e3,step:100},description:"Duration before auto-hiding tooltip (ms)"},offset:{control:{type:"number",min:0,max:50,step:2},description:"Distance between tooltip and trigger element"},maxWidth:{control:{type:"number",min:100,max:500,step:10},description:"Maximum width of the tooltip"},arrow:{control:"boolean",description:"Show arrow pointing to trigger element"},shadow:{control:"boolean",description:"Add drop shadow to tooltip"},rounded:{control:"boolean",description:"Use rounded corners"},multiline:{control:"boolean",description:"Allow multiline content"},interactive:{control:"boolean",description:"Allow interaction with tooltip content"},followCursor:{control:"boolean",description:"Tooltip follows cursor movement"},disabled:{control:"boolean",description:"Disable the tooltip"}}},x={args:{content:"This is a tooltip!",position:"top",variant:"default",size:"md",animation:"fade",arrow:!0,shadow:!0},render:e=>t.jsx("div",{style:{padding:"4rem",display:"flex",justifyContent:"center"},children:t.jsx(n,{...e,children:t.jsx("button",{style:{padding:"12px 24px",fontSize:"16px",background:"#007bff",color:"white",border:"none",borderRadius:"6px",cursor:"pointer"},children:"Hover me"})})})},v={args:{title:"Tooltip Title",content:"This tooltip has both a title and content description.",variant:"info"},render:e=>t.jsx("div",{style:{padding:"4rem",display:"flex",justifyContent:"center"},children:t.jsx(n,{...e,children:t.jsx("span",{style:{textDecoration:"underline",cursor:"pointer",fontSize:"18px",color:"#007bff"},children:"Hover for titled tooltip"})})})},T={render:()=>t.jsxs("div",{style:{padding:"6rem",display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"3rem",placeItems:"center"},children:[t.jsx(n,{content:"Top Left",position:"top-left",children:t.jsx("button",{style:o,children:"Top Left"})}),t.jsx(n,{content:"Top",position:"top",children:t.jsx("button",{style:o,children:"Top"})}),t.jsx(n,{content:"Top Right",position:"top-right",children:t.jsx("button",{style:o,children:"Top Right"})}),t.jsx(n,{content:"Left",position:"left",children:t.jsx("button",{style:o,children:"Left"})}),t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px",fontWeight:"bold"},children:"Center"}),t.jsx(n,{content:"Right",position:"right",children:t.jsx("button",{style:o,children:"Right"})}),t.jsx(n,{content:"Bottom Left",position:"bottom-left",children:t.jsx("button",{style:o,children:"Bottom Left"})}),t.jsx(n,{content:"Bottom",position:"bottom",children:t.jsx("button",{style:o,children:"Bottom"})}),t.jsx(n,{content:"Bottom Right",position:"bottom-right",children:t.jsx("button",{style:o,children:"Bottom Right"})})]})},j={render:()=>t.jsxs("div",{style:{padding:"4rem",display:"flex",gap:"1rem",flexWrap:"wrap",justifyContent:"center"},children:[t.jsx(n,{content:"Default variant",variant:"default",children:t.jsx("button",{style:o,children:"Default"})}),t.jsx(n,{content:"Dark variant",variant:"dark",children:t.jsx("button",{style:o,children:"Dark"})}),t.jsx(n,{content:"Light variant",variant:"light",children:t.jsx("button",{style:o,children:"Light"})}),t.jsx(n,{content:"Success message",variant:"success",children:t.jsx("button",{style:o,children:"Success"})}),t.jsx(n,{content:"Warning message",variant:"warning",children:t.jsx("button",{style:o,children:"Warning"})}),t.jsx(n,{content:"Error message",variant:"error",children:t.jsx("button",{style:o,children:"Error"})}),t.jsx(n,{content:"Information",variant:"info",children:t.jsx("button",{style:o,children:"Info"})}),t.jsx(n,{content:"Primary action",variant:"primary",children:t.jsx("button",{style:o,children:"Primary"})}),t.jsx(n,{content:"Secondary action",variant:"secondary",children:t.jsx("button",{style:o,children:"Secondary"})})]})},w={render:()=>t.jsxs("div",{style:{padding:"4rem",display:"flex",gap:"2rem",alignItems:"center",justifyContent:"center"},children:[t.jsx(n,{content:"Extra small",size:"xs",children:t.jsx("button",{style:o,children:"XS"})}),t.jsx(n,{content:"Small size",size:"sm",children:t.jsx("button",{style:o,children:"SM"})}),t.jsx(n,{content:"Medium size",size:"md",children:t.jsx("button",{style:o,children:"MD"})}),t.jsx(n,{content:"Large size tooltip",size:"lg",children:t.jsx("button",{style:o,children:"LG"})}),t.jsx(n,{content:"Extra large tooltip content",size:"xl",children:t.jsx("button",{style:o,children:"XL"})})]})},S={render:()=>t.jsxs("div",{style:{padding:"4rem",display:"flex",gap:"2rem",justifyContent:"center"},children:[t.jsx(n,{content:"Fade animation",animation:"fade",children:t.jsx("button",{style:o,children:"Fade"})}),t.jsx(n,{content:"Slide animation",animation:"slide",children:t.jsx("button",{style:o,children:"Slide"})}),t.jsx(n,{content:"Bounce animation",animation:"bounce",children:t.jsx("button",{style:o,children:"Bounce"})}),t.jsx(n,{content:"Pulse animation",animation:"pulse",children:t.jsx("button",{style:o,children:"Pulse"})}),t.jsx(n,{content:"No animation",animation:"none",children:t.jsx("button",{style:o,children:"None"})})]})},C={render:()=>t.jsxs("div",{style:{padding:"4rem",display:"flex",gap:"2rem",justifyContent:"center"},children:[t.jsx(n,{content:"Hover to see tooltip",trigger:"hover",children:t.jsx("button",{style:o,children:"Hover"})}),t.jsx(n,{content:"Click to toggle tooltip",trigger:"click",children:t.jsx("button",{style:o,children:"Click"})}),t.jsx(n,{content:"Focus to see tooltip",trigger:"focus",children:t.jsx("button",{style:o,children:"Focus"})})]})},k={render:()=>t.jsx("div",{style:{padding:"4rem",display:"flex",justifyContent:"center"},children:t.jsx(n,{content:t.jsxs("div",{children:[t.jsx("p",{children:"This tooltip is interactive!"}),t.jsx("button",{style:{padding:"4px 8px",margin:"4px 0",background:"#fff",color:"#333",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},onClick:()=>alert("Button clicked!"),children:"Click me"})]}),interactive:!0,trigger:"click",multiline:!0,variant:"light",children:t.jsx("button",{style:o,children:"Interactive Tooltip"})})})},$={render:()=>t.jsx("div",{style:{padding:"4rem",display:"flex",justifyContent:"center"},children:t.jsx(n,{content:`
          <strong>Rich HTML Content</strong><br/>
          <em>This supports HTML formatting</em><br/>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
          </ul>
          <code>console.log('code example')</code>
        `,rich:!0,multiline:!0,maxWidth:300,variant:"dark",children:t.jsx("button",{style:o,children:"Rich Content"})})})},z={render:()=>t.jsx("div",{style:{padding:"4rem",display:"flex",justifyContent:"center"},children:t.jsx(n,{content:"I follow your cursor!",followCursor:!0,variant:"primary",children:t.jsx("div",{style:{width:"200px",height:"100px",background:"linear-gradient(45deg, #ff6b6b, #4ecdc4)",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold",cursor:"pointer"},children:"Move mouse over me"})})})},R={render:()=>{const[e,i]=s.useState(!1);return t.jsxs("div",{style:{padding:"4rem",display:"flex",gap:"2rem",justifyContent:"center",alignItems:"center"},children:[t.jsx("button",{style:o,onClick:()=>i(!e),children:"Toggle Tooltip"}),t.jsx(n,{content:"This is a controlled tooltip",visible:e,trigger:"manual",variant:"success",children:t.jsx("div",{style:{padding:"16px",background:"#f0f0f0",borderRadius:"8px",border:"2px dashed #ccc"},children:"Target Element"})})]})}},P={render:()=>t.jsxs("div",{style:{padding:"4rem",display:"flex",gap:"2rem",flexWrap:"wrap",justifyContent:"center"},children:[t.jsx(n,{...l.info({content:"Info preset"}),children:t.jsx("button",{style:o,children:"Info Preset"})}),t.jsx(n,{...l.success({content:"Success preset"}),children:t.jsx("button",{style:o,children:"Success Preset"})}),t.jsx(n,{...l.warning({content:"Warning preset"}),children:t.jsx("button",{style:o,children:"Warning Preset"})}),t.jsx(n,{...l.error({content:"Error preset"}),children:t.jsx("button",{style:o,children:"Error Preset"})}),t.jsx(n,{...l.clickable({content:"Click me to toggle"}),children:t.jsx("button",{style:o,children:"Clickable Preset"})}),t.jsx(n,{...l.rich({content:"<strong>Rich</strong> <em>content</em> preset with <code>HTML</code>"}),children:t.jsx("button",{style:o,children:"Rich Preset"})}),t.jsx(n,{...l.minimal({content:"Minimal preset"}),children:t.jsx("button",{style:o,children:"Minimal Preset"})}),t.jsx(n,{...l.deluxe({content:"Deluxe preset with all features"}),children:t.jsx("button",{style:o,children:"Deluxe Preset"})})]})},L={render:()=>t.jsxs("div",{style:{padding:"4rem",display:"flex",gap:"2rem",flexWrap:"wrap",justifyContent:"center"},children:[t.jsx(n,{content:"Delayed tooltip with custom timing",delay:1e3,duration:3e3,variant:"warning",onShow:()=>console.log("Tooltip shown!"),onHide:()=>console.log("Tooltip hidden!"),children:t.jsx("button",{style:o,children:"Delayed (1s)"})}),t.jsx(n,{content:"This tooltip has no arrow and custom offset",arrow:!1,offset:20,variant:"dark",children:t.jsx("button",{style:o,children:"No Arrow"})}),t.jsx(n,{content:"Rounded corners with extra shadow",rounded:!0,shadow:!0,variant:"primary",children:t.jsx("button",{style:o,children:"Rounded"})}),t.jsx(n,{content:"This is a very long tooltip text that demonstrates the multiline capability and max width settings working together to create readable content",multiline:!0,maxWidth:200,variant:"info",children:t.jsx("button",{style:o,children:"Multiline"})})]})},I={args:{content:"Customize me with the controls!",position:"top",variant:"default",size:"md",animation:"fade",trigger:"hover",arrow:!0,shadow:!0,rounded:!1,multiline:!1,interactive:!1,followCursor:!1,disabled:!1,delay:0,duration:0,offset:8,maxWidth:250},render:e=>t.jsx("div",{style:{padding:"6rem",display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px"},children:t.jsx(n,{...e,children:t.jsx("button",{style:{...o,background:e.disabled?"#ccc":"#007bff",cursor:e.disabled?"not-allowed":"pointer"},children:e.disabled?"Disabled":"Test Element"})})})},o={padding:"10px 16px",fontSize:"14px",background:"#007bff",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",transition:"all 0.2s ease",fontWeight:"500"};var H,N,Y;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    content: 'This is a tooltip!',
    position: 'top',
    variant: 'default',
    size: 'md',
    animation: 'fade',
    arrow: true,
    shadow: true
  },
  render: args => <div style={{
    padding: '4rem',
    display: 'flex',
    justifyContent: 'center'
  }}>\r
      <Tooltip {...args}>\r
        <button style={{
        padding: '12px 24px',
        fontSize: '16px',
        background: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}>\r
          Hover me\r
        </button>\r
      </Tooltip>\r
    </div>
}`,...(Y=(N=x.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var _,O,U;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Tooltip Title',
    content: 'This tooltip has both a title and content description.',
    variant: 'info'
  },
  render: args => <div style={{
    padding: '4rem',
    display: 'flex',
    justifyContent: 'center'
  }}>\r
      <Tooltip {...args}>\r
        <span style={{
        textDecoration: 'underline',
        cursor: 'pointer',
        fontSize: '18px',
        color: '#007bff'
      }}>\r
          Hover for titled tooltip\r
        </span>\r
      </Tooltip>\r
    </div>
}`,...(U=(O=v.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var G,J,K;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '6rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '3rem',
    placeItems: 'center'
  }}>\r
      <Tooltip content="Top Left" position="top-left">\r
        <button style={buttonStyle}>Top Left</button>\r
      </Tooltip>\r
      <Tooltip content="Top" position="top">\r
        <button style={buttonStyle}>Top</button>\r
      </Tooltip>\r
      <Tooltip content="Top Right" position="top-right">\r
        <button style={buttonStyle}>Top Right</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Left" position="left">\r
        <button style={buttonStyle}>Left</button>\r
      </Tooltip>\r
      <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
      fontWeight: 'bold'
    }}>\r
        Center\r
      </div>\r
      <Tooltip content="Right" position="right">\r
        <button style={buttonStyle}>Right</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Bottom Left" position="bottom-left">\r
        <button style={buttonStyle}>Bottom Left</button>\r
      </Tooltip>\r
      <Tooltip content="Bottom" position="bottom">\r
        <button style={buttonStyle}>Bottom</button>\r
      </Tooltip>\r
      <Tooltip content="Bottom Right" position="bottom-right">\r
        <button style={buttonStyle}>Bottom Right</button>\r
      </Tooltip>\r
    </div>
}`,...(K=(J=T.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Z,tt;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '4rem',
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>\r
      <Tooltip content="Default variant" variant="default">\r
        <button style={buttonStyle}>Default</button>\r
      </Tooltip>\r
      <Tooltip content="Dark variant" variant="dark">\r
        <button style={buttonStyle}>Dark</button>\r
      </Tooltip>\r
      <Tooltip content="Light variant" variant="light">\r
        <button style={buttonStyle}>Light</button>\r
      </Tooltip>\r
      <Tooltip content="Success message" variant="success">\r
        <button style={buttonStyle}>Success</button>\r
      </Tooltip>\r
      <Tooltip content="Warning message" variant="warning">\r
        <button style={buttonStyle}>Warning</button>\r
      </Tooltip>\r
      <Tooltip content="Error message" variant="error">\r
        <button style={buttonStyle}>Error</button>\r
      </Tooltip>\r
      <Tooltip content="Information" variant="info">\r
        <button style={buttonStyle}>Info</button>\r
      </Tooltip>\r
      <Tooltip content="Primary action" variant="primary">\r
        <button style={buttonStyle}>Primary</button>\r
      </Tooltip>\r
      <Tooltip content="Secondary action" variant="secondary">\r
        <button style={buttonStyle}>Secondary</button>\r
      </Tooltip>\r
    </div>
}`,...(tt=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:tt.source}}};var et,nt,ot;w.parameters={...w.parameters,docs:{...(et=w.parameters)==null?void 0:et.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '4rem',
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    justifyContent: 'center'
  }}>\r
      <Tooltip content="Extra small" size="xs">\r
        <button style={buttonStyle}>XS</button>\r
      </Tooltip>\r
      <Tooltip content="Small size" size="sm">\r
        <button style={buttonStyle}>SM</button>\r
      </Tooltip>\r
      <Tooltip content="Medium size" size="md">\r
        <button style={buttonStyle}>MD</button>\r
      </Tooltip>\r
      <Tooltip content="Large size tooltip" size="lg">\r
        <button style={buttonStyle}>LG</button>\r
      </Tooltip>\r
      <Tooltip content="Extra large tooltip content" size="xl">\r
        <button style={buttonStyle}>XL</button>\r
      </Tooltip>\r
    </div>
}`,...(ot=(nt=w.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var rt,it,st;S.parameters={...S.parameters,docs:{...(rt=S.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '4rem',
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center'
  }}>\r
      <Tooltip content="Fade animation" animation="fade">\r
        <button style={buttonStyle}>Fade</button>\r
      </Tooltip>\r
      <Tooltip content="Slide animation" animation="slide">\r
        <button style={buttonStyle}>Slide</button>\r
      </Tooltip>\r
      <Tooltip content="Bounce animation" animation="bounce">\r
        <button style={buttonStyle}>Bounce</button>\r
      </Tooltip>\r
      <Tooltip content="Pulse animation" animation="pulse">\r
        <button style={buttonStyle}>Pulse</button>\r
      </Tooltip>\r
      <Tooltip content="No animation" animation="none">\r
        <button style={buttonStyle}>None</button>\r
      </Tooltip>\r
    </div>
}`,...(st=(it=S.parameters)==null?void 0:it.docs)==null?void 0:st.source}}};var at,lt,ct;C.parameters={...C.parameters,docs:{...(at=C.parameters)==null?void 0:at.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '4rem',
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center'
  }}>\r
      <Tooltip content="Hover to see tooltip" trigger="hover">\r
        <button style={buttonStyle}>Hover</button>\r
      </Tooltip>\r
      <Tooltip content="Click to toggle tooltip" trigger="click">\r
        <button style={buttonStyle}>Click</button>\r
      </Tooltip>\r
      <Tooltip content="Focus to see tooltip" trigger="focus">\r
        <button style={buttonStyle}>Focus</button>\r
      </Tooltip>\r
    </div>
}`,...(ct=(lt=C.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};var dt,ut,pt;k.parameters={...k.parameters,docs:{...(dt=k.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '4rem',
    display: 'flex',
    justifyContent: 'center'
  }}>\r
      <Tooltip content={<div>\r
            <p>This tooltip is interactive!</p>\r
            <button style={{
        padding: '4px 8px',
        margin: '4px 0',
        background: '#fff',
        color: '#333',
        border: '1px solid #ccc',
        borderRadius: '4px',
        cursor: 'pointer'
      }} onClick={() => alert('Button clicked!')}>\r
              Click me\r
            </button>\r
          </div>} interactive trigger="click" multiline variant="light">\r
        <button style={buttonStyle}>Interactive Tooltip</button>\r
      </Tooltip>\r
    </div>
}`,...(pt=(ut=k.parameters)==null?void 0:ut.docs)==null?void 0:pt.source}}};var mt,ft,bt;$.parameters={...$.parameters,docs:{...(mt=$.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '4rem',
    display: 'flex',
    justifyContent: 'center'
  }}>\r
      <Tooltip content={\`
          <strong>Rich HTML Content</strong><br/>
          <em>This supports HTML formatting</em><br/>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
          </ul>
          <code>console.log('code example')</code>
        \`} rich multiline maxWidth={300} variant="dark">\r
        <button style={buttonStyle}>Rich Content</button>\r
      </Tooltip>\r
    </div>
}`,...(bt=(ft=$.parameters)==null?void 0:ft.docs)==null?void 0:bt.source}}};var ht,yt,gt;z.parameters={...z.parameters,docs:{...(ht=z.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '4rem',
    display: 'flex',
    justifyContent: 'center'
  }}>\r
      <Tooltip content="I follow your cursor!" followCursor variant="primary">\r
        <div style={{
        width: '200px',
        height: '100px',
        background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>\r
          Move mouse over me\r
        </div>\r
      </Tooltip>\r
    </div>
}`,...(gt=(yt=z.parameters)==null?void 0:yt.docs)==null?void 0:gt.source}}};var xt,vt,Tt;R.parameters={...R.parameters,docs:{...(xt=R.parameters)==null?void 0:xt.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = useState(false);
    return <div style={{
      padding: '4rem',
      display: 'flex',
      gap: '2rem',
      justifyContent: 'center',
      alignItems: 'center'
    }}>\r
        <button style={buttonStyle} onClick={() => setVisible(!visible)}>\r
          Toggle Tooltip\r
        </button>\r
        \r
        <Tooltip content="This is a controlled tooltip" visible={visible} trigger="manual" variant="success">\r
          <div style={{
          padding: '16px',
          background: '#f0f0f0',
          borderRadius: '8px',
          border: '2px dashed #ccc'
        }}>\r
            Target Element\r
          </div>\r
        </Tooltip>\r
      </div>;
  }
}`,...(Tt=(vt=R.parameters)==null?void 0:vt.docs)==null?void 0:Tt.source}}};var jt,wt,St;P.parameters={...P.parameters,docs:{...(jt=P.parameters)==null?void 0:jt.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '4rem',
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>\r
      <Tooltip {...TooltipPresets.info({
      content: 'Info preset'
    })}>\r
        <button style={buttonStyle}>Info Preset</button>\r
      </Tooltip>\r
      \r
      <Tooltip {...TooltipPresets.success({
      content: 'Success preset'
    })}>\r
        <button style={buttonStyle}>Success Preset</button>\r
      </Tooltip>\r
      \r
      <Tooltip {...TooltipPresets.warning({
      content: 'Warning preset'
    })}>\r
        <button style={buttonStyle}>Warning Preset</button>\r
      </Tooltip>\r
      \r
      <Tooltip {...TooltipPresets.error({
      content: 'Error preset'
    })}>\r
        <button style={buttonStyle}>Error Preset</button>\r
      </Tooltip>\r
      \r
      <Tooltip {...TooltipPresets.clickable({
      content: 'Click me to toggle'
    })}>\r
        <button style={buttonStyle}>Clickable Preset</button>\r
      </Tooltip>\r
      \r
      <Tooltip {...TooltipPresets.rich({
      content: '<strong>Rich</strong> <em>content</em> preset with <code>HTML</code>'
    })}>\r
        <button style={buttonStyle}>Rich Preset</button>\r
      </Tooltip>\r
      \r
      <Tooltip {...TooltipPresets.minimal({
      content: 'Minimal preset'
    })}>\r
        <button style={buttonStyle}>Minimal Preset</button>\r
      </Tooltip>\r
      \r
      <Tooltip {...TooltipPresets.deluxe({
      content: 'Deluxe preset with all features'
    })}>\r
        <button style={buttonStyle}>Deluxe Preset</button>\r
      </Tooltip>\r
    </div>
}`,...(St=(wt=P.parameters)==null?void 0:wt.docs)==null?void 0:St.source}}};var Ct,kt,$t;L.parameters={...L.parameters,docs:{...(Ct=L.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '4rem',
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>\r
      <Tooltip content="Delayed tooltip with custom timing" delay={1000} duration={3000} variant="warning" onShow={() => console.log('Tooltip shown!')} onHide={() => console.log('Tooltip hidden!')}>\r
        <button style={buttonStyle}>Delayed (1s)</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="This tooltip has no arrow and custom offset" arrow={false} offset={20} variant="dark">\r
        <button style={buttonStyle}>No Arrow</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Rounded corners with extra shadow" rounded shadow variant="primary">\r
        <button style={buttonStyle}>Rounded</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="This is a very long tooltip text that demonstrates the multiline capability and max width settings working together to create readable content" multiline maxWidth={200} variant="info">\r
        <button style={buttonStyle}>Multiline</button>\r
      </Tooltip>\r
    </div>
}`,...($t=(kt=L.parameters)==null?void 0:kt.docs)==null?void 0:$t.source}}};var zt,Rt,Pt;I.parameters={...I.parameters,docs:{...(zt=I.parameters)==null?void 0:zt.docs,source:{originalSource:`{
  args: {
    content: 'Customize me with the controls!',
    position: 'top',
    variant: 'default',
    size: 'md',
    animation: 'fade',
    trigger: 'hover',
    arrow: true,
    shadow: true,
    rounded: false,
    multiline: false,
    interactive: false,
    followCursor: false,
    disabled: false,
    delay: 0,
    duration: 0,
    offset: 8,
    maxWidth: 250
  },
  render: args => <div style={{
    padding: '6rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '200px'
  }}>\r
      <Tooltip {...args}>\r
        <button style={{
        ...buttonStyle,
        background: args.disabled ? '#ccc' : '#007bff',
        cursor: args.disabled ? 'not-allowed' : 'pointer'
      }}>\r
          {args.disabled ? 'Disabled' : 'Test Element'}\r
        </button>\r
      </Tooltip>\r
    </div>
}`,...(Pt=(Rt=I.parameters)==null?void 0:Rt.docs)==null?void 0:Pt.source}}};const he=["Default","WithTitle","AllPositions","ColorVariants","SizeVariants","AnimationVariants","TriggerTypes","InteractiveTooltip","RichContent","FollowCursor","ControlledTooltip","PresetExamples","AdvancedFeatures","Playground"];export{L as AdvancedFeatures,T as AllPositions,S as AnimationVariants,j as ColorVariants,R as ControlledTooltip,x as Default,z as FollowCursor,k as InteractiveTooltip,I as Playground,P as PresetExamples,$ as RichContent,w as SizeVariants,C as TriggerTypes,v as WithTitle,he as __namedExportsOrder,be as default};
