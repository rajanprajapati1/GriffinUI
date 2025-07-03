import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as m}from"./index-BlmOqGMO.js";import{d as s}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const G=s.div`
  position: relative;
  width: ${e=>e.width};
  height: ${e=>e.height};
  overflow: hidden;
`,H=s.div`
  display: flex;
  transition: transform ${e=>e.transitionDuration}ms ease-in-out;
  transform: translateX(${e=>-e.currentIndex*100}%);
`,J=s.div`
  min-width: 100%;
  height: 100%;
`,y=s.button`
  position: absolute;
  top: 50%;
  ${e=>e.direction==="left"?"left: 10px;":"right: 10px;"}
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  z-index: 10;
`,K=s.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  position: absolute;
  bottom: 10px;
  width: 100%;
`,M=s.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: ${e=>e.active?"#111827":"#d1d5db"};
  cursor: pointer;
`,z=({children:e,autoPlay:h=!0,interval:f=3e3,showDots:L=!0,showArrows:O=!0,loop:g=!0,transitionDuration:W=500,width:X="100%",height:Y="300px"})=>{const[r,a]=m.useState(0),p=m.useRef(null),x=e.length,w=()=>{r===x-1?a(g?0:r):a(r+1)},B=()=>{a(r===0?g?x-1:r:r-1)};return m.useEffect(()=>(h&&(p.current=setTimeout(()=>{w()},f)),()=>{p.current&&clearTimeout(p.current)}),[r,h,f]),t.jsxs(G,{width:X,height:Y,children:[O&&t.jsxs(t.Fragment,{children:[t.jsx(y,{direction:"left",onClick:B,children:"←"}),t.jsx(y,{direction:"right",onClick:w,children:"→"})]}),t.jsx(H,{currentIndex:r,transitionDuration:W,children:e.map((b,n)=>t.jsx(J,{children:b},n))}),L&&t.jsx(K,{children:e.map((b,n)=>t.jsx(M,{active:n===r,onClick:()=>a(n)},n))})]})};z.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:""},autoPlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},interval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},showDots:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showArrows:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},transitionDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"500",computed:!1}},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'100%'",computed:!1}},height:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'300px'",computed:!1}}}};const re={title:"Components/ui/Carousel",component:z,tags:["autodocs"],argTypes:{autoPlay:{control:"boolean"},interval:{control:"number"},showDots:{control:"boolean"},showArrows:{control:"boolean"},loop:{control:"boolean"},transitionDuration:{control:"number"},width:{control:"text"},height:{control:"text"}}},Q=[t.jsx("img",{src:"https://picsum.photos/seed/1/600/300",alt:"Slide 1",style:{width:"100%",height:"100%",objectFit:"cover"}}),t.jsx("img",{src:"https://picsum.photos/seed/2/600/300",alt:"Slide 2",style:{width:"100%",height:"100%",objectFit:"cover"}}),t.jsx("img",{src:"https://picsum.photos/seed/3/600/300",alt:"Slide 3",style:{width:"100%",height:"100%",objectFit:"cover"}})],o={args:{children:Q,autoPlay:!0,interval:3e3,showDots:!0,showArrows:!0,loop:!0,transitionDuration:500,width:"600px",height:"300px"}},i={args:{...o.args,autoPlay:!1}},l={args:{...o.args,showArrows:!1}},u={args:{...o.args,showDots:!1}},c={args:{...o.args,width:"800px",height:"400px"}},d={args:{...o.args,loop:!1}};var v,D,j;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: slides,
    autoPlay: true,
    interval: 3000,
    showDots: true,
    showArrows: true,
    loop: true,
    transitionDuration: 500,
    width: '600px',
    height: '300px'
  }
}`,...(j=(D=o.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var S,C,A;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    autoPlay: false
  }
}`,...(A=(C=i.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var N,T,q;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showArrows: false
  }
}`,...(q=(T=l.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var R,V,P;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showDots: false
  }
}`,...(P=(V=u.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var $,k,_;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: '800px',
    height: '400px'
  }
}`,...(_=(k=c.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var E,F,I;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loop: false
  }
}`,...(I=(F=d.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};const oe=["Default","NoAutoPlay","NoArrows","NoDots","CustomSize","NoLoop"];export{c as CustomSize,o as Default,l as NoArrows,i as NoAutoPlay,u as NoDots,d as NoLoop,oe as __namedExportsOrder,re as default};
