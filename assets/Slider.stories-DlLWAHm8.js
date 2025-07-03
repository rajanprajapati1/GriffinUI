import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as b,R as H}from"./index-BlmOqGMO.js";import{d as p,l as o}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const c={sm:{trackSize:4,thumbSize:14,markSize:4},md:{trackSize:6,thumbSize:20,markSize:6},lg:{trackSize:8,thumbSize:24,markSize:8}},xe=p.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  touch-action: none;
  
  ${e=>e.orientation==="vertical"&&o`
    height: 200px;
    width: auto;
    flex-direction: column;
  `}
`,ye=p.div`
  position: relative;
  border-radius: 9999px;
  background-color: #e5e7eb;
  
  ${e=>e.orientation==="horizontal"?o`
        width: 100%;
        height: ${c[e.size].trackSize}px;
      `:o`
        height: 100%;
        width: ${c[e.size].trackSize}px;
      `}
  
  ${e=>e.disabled&&o`
    opacity: 0.6;
  `}
`,we=p.div`
  position: absolute;
  border-radius: 9999px;
  background-color: ${e=>e.color};
  
  ${e=>e.orientation==="horizontal"?o`
        height: 100%;
        left: 0;
        width: ${e.percent}%;
      `:o`
        width: 100%;
        bottom: 0;
        height: ${e.percent}%;
      `}
  
  ${e=>e.disabled&&o`
    opacity: 0.6;
  `}
`,Ve=p.div`
  position: absolute;
  border-radius: 50%;
  background-color: white;
  border: 2px solid ${e=>e.color};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.1s, box-shadow 0.1s;
  
  ${e=>e.orientation==="horizontal"?o`
        top: 50%;
        transform: translate(-50%, -50%);
        width: ${c[e.size].thumbSize}px;
        height: ${c[e.size].thumbSize}px;
      `:o`
        left: 50%;
        transform: translate(-50%, 50%);
        width: ${c[e.size].thumbSize}px;
        height: ${c[e.size].thumbSize}px;
      `}
  
  ${e=>!e.disabled&&o`
    &:hover {
      transform: ${e.orientation==="horizontal"?"translate(-50%, -50%) scale(1.1)":"translate(-50%, 50%) scale(1.1)"};
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    }
  `}
  
  ${e=>e.focused&&o`
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  `}
  
  ${e=>e.disabled&&o`
    cursor: not-allowed;
    opacity: 0.6;
  `}
`,N=p.div`
  font-size: 0.875rem;
  color: #4b5563;
  margin: ${e=>e.orientation==="horizontal"?"0 0 0.5rem 0":"0.5rem 0 0 0"};
`,Se=p.div`
  position: absolute;
  
  ${e=>e.orientation==="horizontal"?o`
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      `:o`
        top: 0;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      `}
`,ke=p.div`
  position: absolute;
  border-radius: 50%;
  background-color: ${e=>e.active?e.color:"#e5e7eb"};
  
  ${e=>e.orientation==="horizontal"?o`
        width: ${c[e.size].markSize}px;
        height: ${c[e.size].markSize}px;
        transform: translate(-50%, -50%);
      `:o`
        width: ${c[e.size].markSize}px;
        height: ${c[e.size].markSize}px;
        transform: translate(-50%, 50%);
      `}
`,$e=p.div`
  position: absolute;
  font-size: 0.75rem;
  color: #6b7280;
  white-space: nowrap;
  
  ${e=>e.orientation==="horizontal"?o`
        top: 100%;
        transform: translateX(-50%);
        margin-top: 0.5rem;
      `:o`
        left: 100%;
        transform: translateY(50%);
        margin-left: 0.5rem;
      `}
`,z=({value:e,defaultValue:T=0,min:l=0,max:d=100,step:h=1,disabled:m=!1,orientation:t="horizontal",size:q="md",color:D="#3b82f6",showValue:R=!1,valuePrefix:L="",valueSuffix:A="",marks:g=!1,onChange:x,onChangeEnd:v,className:ce})=>{const[de,E]=b.useState(T),[je,y]=b.useState(!1),[me,I]=b.useState(!1),C=b.useRef(null),fe=b.useRef(null),s=e!==void 0?e:de,F=(s-l)/(d-l)*100,pe=H.useMemo(()=>{if(!g)return[];if(Array.isArray(g))return g;const a=Math.floor((d-l)/h),n=[];for(let i=0;i<=a;i++){const u=l+i*h;n.push({value:u})}return n},[g,l,d,h]),f=a=>{if(!C.current||m)return;const n=C.current.getBoundingClientRect();let i;t==="horizontal"?i=(a-n.left)/n.width:i=1-(a-n.top)/n.height,i=Math.max(0,Math.min(1,i));let u=l+i*(d-l);u=Math.round(u/h)*h,u=Math.max(l,Math.min(d,u)),u!==s&&(E(u),x&&x(u))},he=a=>{m||(a.preventDefault(),y(!0),f(t==="horizontal"?a.clientX:a.clientY),document.addEventListener("mousemove",X),document.addEventListener("mouseup",Y))},X=a=>{f(t==="horizontal"?a.clientX:a.clientY)},Y=()=>{y(!1),document.removeEventListener("mousemove",X),document.removeEventListener("mouseup",Y),v&&v(s)},ve=a=>{m||(y(!0),f(t==="horizontal"?a.touches[0].clientX:a.touches[0].clientY))},be=a=>{f(t==="horizontal"?a.touches[0].clientX:a.touches[0].clientY)},ge=()=>{y(!1),v&&v(s)},ze=a=>{if(m)return;let n=s;switch(a.key){case"ArrowRight":case"ArrowUp":n=Math.min(d,s+h);break;case"ArrowLeft":case"ArrowDown":n=Math.max(l,s-h);break;case"Home":n=l;break;case"End":n=d;break;default:return}n!==s&&(E(n),x&&x(n),v&&v(n))};return r.jsxs("div",{className:ce,children:[R&&t==="horizontal"&&r.jsxs(N,{orientation:t,children:[L,s,A]}),r.jsxs(xe,{orientation:t,children:[R&&t==="vertical"&&r.jsxs(N,{orientation:t,children:[L,s,A]}),r.jsxs(ye,{ref:C,orientation:t,size:q,disabled:m,onMouseDown:he,onTouchStart:ve,onTouchMove:be,onTouchEnd:ge,children:[r.jsx(we,{orientation:t,percent:F,color:D,disabled:m}),g&&r.jsx(Se,{orientation:t,children:pe.map((a,n)=>{const i=(a.value-l)/(d-l)*100,u=a.value<=s;return r.jsxs(H.Fragment,{children:[r.jsx(ke,{orientation:t,active:u,size:q,color:D,style:{[t==="horizontal"?"left":"bottom"]:`${i}%`}}),a.label&&r.jsx($e,{orientation:t,style:{[t==="horizontal"?"left":"bottom"]:`${i}%`},children:a.label})]},n)})})]}),r.jsx(Ve,{ref:fe,orientation:t,size:q,color:D,disabled:m,focused:me,style:{[t==="horizontal"?"left":"bottom"]:`${F}%`},onFocus:()=>I(!0),onBlur:()=>I(!1),onKeyDown:ze,tabIndex:m?-1:0,role:"slider","aria-valuemin":l,"aria-valuemax":d,"aria-valuenow":s,"aria-orientation":t,"aria-disabled":m})]})]})};z.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#3b82f6"',computed:!1}},showValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},valuePrefix:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},valueSuffix:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},marks:{required:!1,tsType:{name:"union",raw:"boolean | { value: number; label?: string }[]",elements:[{name:"boolean"},{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: number; label?: string }",signature:{properties:[{key:"value",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!1}}]}}],raw:"{ value: number; label?: string }[]"}]},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},onChangeEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Ce={title:"Components/New/Slider",component:z,tags:["autodocs"],argTypes:{min:{control:{type:"number"},defaultValue:0},max:{control:{type:"number"},defaultValue:100},step:{control:{type:"number"},defaultValue:1},size:{control:{type:"radio",options:["sm","md","lg"]},defaultValue:"md"},orientation:{control:{type:"radio",options:["horizontal","vertical"]},defaultValue:"horizontal"},color:{control:"color",defaultValue:"#3b82f6"},showValue:{control:"boolean",defaultValue:!0},marks:{control:{type:"boolean"},defaultValue:!0},disabled:{control:"boolean",defaultValue:!1}}},w={args:{min:0,max:100,step:1,size:"md",orientation:"horizontal",color:"#3b82f6",showValue:!0,marks:!0}},V={args:{min:0,max:100,step:5,orientation:"vertical",size:"md",color:"#10b981",showValue:!0,marks:!0},render:e=>r.jsx("div",{style:{height:"300px",display:"flex",justifyContent:"center",alignItems:"center"},children:r.jsx(z,{...e})})},S={args:{min:0,max:100,step:10,size:"lg",orientation:"horizontal",color:"#ef4444",valuePrefix:"$",valueSuffix:"/hr",marks:[{value:0,label:"0"},{value:25,label:"25"},{value:50,label:"50"},{value:75,label:"75"},{value:100,label:"100"}],showValue:!0}},k={render:()=>{const[e,T]=b.useState(50);return r.jsxs("div",{style:{width:"100%",padding:"2rem"},children:[r.jsxs("p",{style:{marginBottom:"1rem"},children:["Current Value: ",r.jsx("strong",{children:e})]}),r.jsx(z,{value:e,min:0,max:100,step:5,orientation:"horizontal",size:"md",color:"#3b82f6",onChange:l=>T(l)})]})}},$={args:{min:0,max:100,step:1,size:"md",orientation:"horizontal",color:"#3b82f6",disabled:!0,showValue:!0,marks:!0}},j={args:{min:0,max:100,step:1,orientation:"horizontal",size:"sm",color:"#8b5cf6",showValue:!1,marks:!1}},M={args:{min:0,max:100,step:10,orientation:"vertical",size:"lg",color:"#f59e0b",valuePrefix:"",valueSuffix:"%",marks:[{value:0,label:"Low"},{value:50,label:"Mid"},{value:100,label:"High"}],showValue:!0},render:e=>r.jsx("div",{style:{height:"300px",display:"flex",justifyContent:"center",alignItems:"center"},children:r.jsx(z,{...e})})};var P,B,_;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    size: 'md',
    orientation: 'horizontal',
    color: '#3b82f6',
    showValue: true,
    marks: true
  }
}`,...(_=(B=w.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var K,U,W;V.parameters={...V.parameters,docs:{...(K=V.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 5,
    orientation: 'vertical',
    size: 'md',
    color: '#10b981',
    showValue: true,
    marks: true
  },
  render: args => {
    return <div style={{
      height: '300px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>\r
        <Slider {...args} />\r
      </div>;
  }
}`,...(W=(U=V.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var O,G,J;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 10,
    size: 'lg',
    orientation: 'horizontal',
    color: '#ef4444',
    valuePrefix: '$',
    valueSuffix: '/hr',
    marks: [{
      value: 0,
      label: '0'
    }, {
      value: 25,
      label: '25'
    }, {
      value: 50,
      label: '50'
    }, {
      value: 75,
      label: '75'
    }, {
      value: 100,
      label: '100'
    }],
    showValue: true
  }
}`,...(J=(G=S.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,Z,ee;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(50);
    return <div style={{
      width: '100%',
      padding: '2rem'
    }}>\r
        <p style={{
        marginBottom: '1rem'
      }}>Current Value: <strong>{value}</strong></p>\r
        <Slider value={value} min={0} max={100} step={5} orientation="horizontal" size="md" color="#3b82f6" onChange={newValue => setValue(newValue)} />\r
      </div>;
  }
}`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,re;$.parameters={...$.parameters,docs:{...(ae=$.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    size: 'md',
    orientation: 'horizontal',
    color: '#3b82f6',
    disabled: true,
    showValue: true,
    marks: true
  }
}`,...(re=(te=$.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ne,oe,le;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    orientation: 'horizontal',
    size: 'sm',
    color: '#8b5cf6',
    showValue: false,
    marks: false
  }
}`,...(le=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var se,ie,ue;M.parameters={...M.parameters,docs:{...(se=M.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 10,
    orientation: 'vertical',
    size: 'lg',
    color: '#f59e0b',
    valuePrefix: '',
    valueSuffix: '%',
    marks: [{
      value: 0,
      label: 'Low'
    }, {
      value: 50,
      label: 'Mid'
    }, {
      value: 100,
      label: 'High'
    }],
    showValue: true
  },
  render: args => {
    return <div style={{
      height: '300px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>\r
        <Slider {...args} />\r
      </div>;
  }
}`,...(ue=(ie=M.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};const Re=["DefaultHorizontal","VerticalSlider","WithCustomLabels","ControlledExample","DisabledState","MinimalNoMarks","FullVerticalCustom"];export{k as ControlledExample,w as DefaultHorizontal,$ as DisabledState,M as FullVerticalCustom,j as MinimalNoMarks,V as VerticalSlider,S as WithCustomLabels,Re as __namedExportsOrder,Ce as default};
