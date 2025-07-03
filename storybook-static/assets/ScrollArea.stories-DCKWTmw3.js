import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o}from"./index-BlmOqGMO.js";import{d as n,l as x}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const K=n.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,Q=n.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`,C=n.div`
  position: absolute;
  background-color: ${t=>t.trackColor};
  border-radius: ${t=>t.radius}px;
  transition: opacity 0.15s ease;
  opacity: ${t=>t.visible?1:0};
  
  ${t=>t.orientation==="vertical"?x`
          top: 0;
          right: 0;
          width: ${t.size}px;
          height: 100%;
        `:x`
          bottom: 0;
          left: 0;
          width: 100%;
          height: ${t.size}px;
        `}
`,k=n.div`
  position: absolute;
  background-color: ${t=>t.color};
  border-radius: ${t=>t.radius}px;
  
  ${t=>t.orientation==="vertical"?x`
          top: ${t.position}px;
          right: 0;
          width: 100%;
          height: ${t.size}px;
        `:x`
          bottom: 0;
          left: ${t.position}px;
          width: ${t.size}px;
          height: 100%;
        `}
`,g=({children:t,className:M,type:l="hover",scrollHideDelay:_=600,orientation:r="vertical",scrollbarSize:y=8,scrollbarRadius:u=4,scrollbarThumbColor:d="rgba(0, 0, 0, 0.3)",scrollbarTrackColor:I="rgba(0, 0, 0, 0.05)"})=>{const[w,j]=o.useState(l==="always"),[T,D]=o.useState(0),[q,U]=o.useState(0),[V,O]=o.useState(0),[$,B]=o.useState(0),m=o.useRef(null),i=o.useRef(null),F=()=>{(l==="auto"||l==="hover"||l==="scroll")&&(j(!0),l==="hover"&&i.current&&(clearTimeout(i.current),i.current=null))},G=()=>{l==="hover"&&(i.current&&clearTimeout(i.current),i.current=setTimeout(()=>{j(!1),i.current=null},_))},h=()=>{if(!m.current)return;const{scrollTop:s,scrollHeight:H,clientHeight:p,scrollLeft:J,scrollWidth:R,clientWidth:v}=m.current;if(r==="vertical"||r==="both"){const S=p,c=Math.max(20,p/H*p),z=s/(H-p)*(S-c);U(c),D(z)}if(r==="horizontal"||r==="both"){const S=v,c=Math.max(20,v/R*v),z=J/(R-v)*(S-c);B(c),O(z)}};return o.useEffect(()=>{const s=m.current;if(s)return h(),s.addEventListener("scroll",h),()=>{s.removeEventListener("scroll",h)}},[r]),o.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]),e.jsxs(K,{className:M,onMouseEnter:F,onMouseLeave:G,children:[e.jsx(Q,{ref:m,onScroll:h,children:t}),(r==="vertical"||r==="both")&&e.jsx(C,{orientation:"vertical",size:y,radius:u,thumbColor:d,trackColor:I,visible:w,thumbPosition:T,thumbSize:q,children:e.jsx(k,{orientation:"vertical",position:T,size:q,color:d,radius:u})}),(r==="horizontal"||r==="both")&&e.jsx(C,{orientation:"horizontal",size:y,radius:u,thumbColor:d,trackColor:I,visible:w,thumbPosition:V,thumbSize:$,children:e.jsx(k,{orientation:"horizontal",position:V,size:$,color:d,radius:u})})]})};g.__docgenInfo={description:"",methods:[],displayName:"ScrollArea",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"auto" | "always" | "scroll" | "hover"',elements:[{name:"literal",value:'"auto"'},{name:"literal",value:'"always"'},{name:"literal",value:'"scroll"'},{name:"literal",value:'"hover"'}]},description:"",defaultValue:{value:'"hover"',computed:!1}},scrollHideDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"600",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal" | "both"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'},{name:"literal",value:'"both"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}},scrollbarSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},scrollbarRadius:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},scrollbarThumbColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"rgba(0, 0, 0, 0.3)"',computed:!1}},scrollbarTrackColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"rgba(0, 0, 0, 0.05)"',computed:!1}}}};const ie={title:"Components/New/ScrollArea",component:g,tags:["autodocs"],argTypes:{type:{control:{type:"radio",options:["auto","always","scroll","hover"]},defaultValue:"hover"},orientation:{control:{type:"radio",options:["vertical","horizontal","both"]},defaultValue:"vertical"},scrollbarSize:{control:{type:"number"},defaultValue:8},scrollbarRadius:{control:{type:"number"},defaultValue:4}}},b={args:{type:"hover",orientation:"vertical",scrollbarSize:8,scrollbarRadius:4},render:t=>e.jsx("div",{style:{width:"300px",height:"200px",margin:"2rem auto"},children:e.jsx(g,{...t,children:e.jsxs(X,{children:[e.jsx("p",{children:"This is scrollable content."}),e.jsx("p",{children:"Scroll vertically to see the hidden scrollbar."}),e.jsx("p",{children:"It appears on hover and fades out after a short delay."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),e.jsx("p",{children:"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsx("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),e.jsx("p",{children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})})})},f={args:{type:"always",orientation:"horizontal",scrollbarSize:8,scrollbarRadius:4},render:t=>e.jsx("div",{style:{width:"100%",maxWidth:"600px",margin:"2rem auto",whiteSpace:"nowrap"},children:e.jsx(g,{...t,children:e.jsxs(Y,{children:[e.jsx(a,{children:"Item 1"}),e.jsx(a,{children:"Item 2"}),e.jsx(a,{children:"Item 3"}),e.jsx(a,{children:"Item 4"}),e.jsx(a,{children:"Item 5"}),e.jsx(a,{children:"Item 6"}),e.jsx(a,{children:"Item 7"}),e.jsx(a,{children:"Item 8"})]})})})},X=n.div`
  padding: 1rem;
  line-height: 1.5;
`,Y=n.div`
  display: inline-flex;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
`,a=n.div`
  min-width: 150px;
  padding: 1rem;
  background-color: #eff6ff;
  border-radius: 0.5rem;
  text-align: center;
  flex-shrink: 0;
`;var E,P,A;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: 'hover',
    orientation: 'vertical',
    scrollbarSize: 8,
    scrollbarRadius: 4
  },
  render: args => <div style={{
    width: '300px',
    height: '200px',
    margin: '2rem auto'
  }}>\r
      <ScrollArea {...args}>\r
        <Content>\r
          <p>This is scrollable content.</p>\r
          <p>Scroll vertically to see the hidden scrollbar.</p>\r
          <p>It appears on hover and fades out after a short delay.</p>\r
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\r
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r
        </Content>\r
      </ScrollArea>\r
    </div>
}`,...(A=(P=b.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var L,W,N;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: 'always',
    orientation: 'horizontal',
    scrollbarSize: 8,
    scrollbarRadius: 4
  },
  render: args => <div style={{
    width: '100%',
    maxWidth: '600px',
    margin: '2rem auto',
    whiteSpace: 'nowrap'
  }}>\r
      <ScrollArea {...args}>\r
        <HorizontalContent>\r
          <Item>Item 1</Item>\r
          <Item>Item 2</Item>\r
          <Item>Item 3</Item>\r
          <Item>Item 4</Item>\r
          <Item>Item 5</Item>\r
          <Item>Item 6</Item>\r
          <Item>Item 7</Item>\r
          <Item>Item 8</Item>\r
        </HorizontalContent>\r
      </ScrollArea>\r
    </div>
}`,...(N=(W=f.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};const oe=["VerticalScroll","HorizontalScroll"];export{f as HorizontalScroll,b as VerticalScroll,oe as __namedExportsOrder,ie as default};
