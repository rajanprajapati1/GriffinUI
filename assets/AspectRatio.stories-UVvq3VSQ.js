import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{d as b}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";const w=b.div`
  position: relative;
  width: 100%;
  
  &::before {
    content: "";
    display: block;
    padding-bottom: ${n=>`${1/n.ratio*100}%`};
  }
`,C=b.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`,x=({ratio:n=16/9,children:v,className:j})=>e.jsx(w,{ratio:n,className:j,children:e.jsx(C,{children:v})});x.__docgenInfo={description:"",methods:[],displayName:"AspectRatio",props:{ratio:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"16 / 9",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const I={title:"Components/New/AspectRatio",component:x,tags:["autodocs"],argTypes:{ratio:{control:{type:"number",min:.1,step:.1},description:"The aspect ratio of the container (e.g., 16 / 9)",defaultValue:16/9},children:{control:!1,description:"Content inside the aspect ratio container"}}},t={args:{ratio:16/9,children:e.jsx("img",{src:"https://picsum.photos/200/300 ",alt:"Example image",style:{width:"100%",height:"100%",objectFit:"cover"}})}},r={args:{ratio:1,children:e.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"#3b82f6",color:"white",display:"flex",justifyContent:"center",alignItems:"center"},children:"1:1 Square"})}},o={args:{ratio:4/5,children:e.jsx("img",{src:"https://picsum.photos/200/300 ",alt:"Portrait image",style:{width:"100%",height:"100%",objectFit:"cover"}})}},i={args:{ratio:3/4,children:e.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(to bottom, #00000080, #000000aa), url(https://picsum.photos/200/300 )",backgroundSize:"cover",backgroundPosition:"center",color:"white",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"1.5rem",fontWeight:"bold",textAlign:"center"},children:"Custom Content Inside"})}};var s,a,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    ratio: 16 / 9,
    children: <img src="https://picsum.photos/200/300 " alt="Example image" style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }} />
  }
}`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var d,l,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ratio: 1,
    children: <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#3b82f6',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>\r
        1:1 Square\r
      </div>
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,h,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ratio: 4 / 5,
    children: <img src="https://picsum.photos/200/300 " alt="Portrait image" style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }} />
  }
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,f,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ratio: 3 / 4,
    children: <div style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to bottom, #00000080, #000000aa), url(https://picsum.photos/200/300 )',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textAlign: 'center'
    }}>\r
        Custom Content Inside\r
      </div>
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const T=["Default","Square","Portrait","WithTextOverlay"];export{t as Default,o as Portrait,r as Square,i as WithTextOverlay,T as __namedExportsOrder,I as default};
