import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as u}from"./index-BlmOqGMO.js";import{d as m,l as c,m as j}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const $={primary:"#3b82f6",success:"#10b981",error:"#ef4444",warning:"#f59e0b",neutral:"#9ca3af"},I=j`
  0% {
    left: -40%;
    width: 40%;
  }
  50% {
    left: 20%;
    width: 60%;
  }
  100% {
    left: 100%;
    width: 80%;
  }
`,T=m.div`
  background-color: #e5e7eb;
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: ${e=>e.radius}px;
  height: ${e=>e.height}px;
`,q=m.div`
  background-color: ${e=>e.color};
  height: 100%;
  transition: width 0.3s ease;
  ${e=>e.variant==="indeterminate"&&c`
      position: absolute;
      width: 40%;
      animation: ${I} 1.2s infinite ease-in-out;
    `}
  ${e=>e.variant==="determinate"&&c`
      width: ${e.width}%;
    `}
`,B=m.div`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #374151;
`,a=({value:e=0,color:o="primary",height:l=8,radius:t=6,variant:P="determinate",label:d})=>r.jsxs(r.Fragment,{children:[r.jsx(T,{height:l,radius:t,children:r.jsx(q,{width:Math.min(Math.max(e,0),100),color:$[o],variant:P})}),d&&r.jsx(B,{children:d})]});a.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'success' | 'error' | 'warning' | 'neutral'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},radius:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'determinate' | 'indeterminate'",elements:[{name:"literal",value:"'determinate'"},{name:"literal",value:"'indeterminate'"}]},description:"",defaultValue:{value:"'determinate'",computed:!1}}}};const _={title:"Components/ui/ProgressBar",component:a,tags:["autodocs"],argTypes:{value:{control:{type:"number",min:0,max:100,step:1}},color:{control:"select",options:["primary","success","error","warning","neutral"]},height:{control:{type:"number",min:4,max:20,step:1}},radius:{control:{type:"number",min:0,max:20,step:1}},variant:{control:"radio",options:["determinate","indeterminate"]},label:{control:"text"}}},n={render:e=>r.jsx(a,{...e}),args:{value:60,color:"primary",height:8,radius:6,variant:"determinate",label:"Progress: 60%"}},s={render:e=>r.jsx(a,{...e}),args:{variant:"indeterminate",color:"success",height:8,radius:6,label:"Loading..."}},i={render:()=>{const[e,o]=u.useState(0);return u.useEffect(()=>{const l=setInterval(()=>{o(t=>t>=100?0:t+5)},500);return()=>clearInterval(l)},[]),r.jsx(a,{value:e,color:"warning",height:12,radius:8,variant:"determinate",label:`Progress: ${e}%`})}};var p,g,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <ProgressBar {...args} />,
  args: {
    value: 60,
    color: 'primary',
    height: 8,
    radius: 6,
    variant: 'determinate',
    label: 'Progress: 60%'
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,v,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <ProgressBar {...args} />,
  args: {
    variant: 'indeterminate',
    color: 'success',
    height: 8,
    radius: 6,
    label: 'Loading...'
  }
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,y,w;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress(old => {
          if (old >= 100) return 0;
          return old + 5;
        });
      }, 500);
      return () => clearInterval(timer);
    }, []);
    return <ProgressBar value={progress} color="warning" height={12} radius={8} variant="determinate" label={\`Progress: \${progress}%\`} />;
  }
}`,...(w=(y=i.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const A=["Determinate","Indeterminate","AnimatedDeterminate"];export{i as AnimatedDeterminate,n as Determinate,s as Indeterminate,A as __namedExportsOrder,_ as default};
