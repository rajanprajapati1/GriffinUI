import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{d as r,l as p}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";const z=e=>{switch(e){case"circle":return"50%";case"rounded":return"12px";default:return"0px"}},$=e=>{switch(e){case"zoom":return p`
        transform: scale(1.05);
      `;case"fade":default:return p`
        opacity: 1;
      `}},V=r.div`
  position: relative;
  overflow: hidden;
  border-radius: ${e=>e.borderRadius};
  aspect-ratio: ${e=>e.aspectRatio||"16/9"};
  box-shadow: ${e=>e.elevation?`0px ${e.elevation}px ${e.elevation*2}px rgba(0,0,0,0.1)`:"none"};
  border: ${e=>e.borderColor?`1px solid ${e.borderColor}`:"none"};
`,_=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,Z=r.div`
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 2;

  ${V}:hover & {
    ${e=>$(e.effect)}
  }
`,B=r.div`
  width: 100%;
  height: 100%;

  video,
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,F=r.div`
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color: white;
  pointer-events: none;
  opacity: 0.8;
`,q=({baseSrc:e,previewSrc:n,previewType:c="image",alt:l="",hoverEffect:I="fade",variant:T="rounded",elevation:E=4,aspectRatio:R="16/9",borderColor:j,showPlayIcon:C=!0})=>{const d=!!n;return o.jsxs(V,{borderRadius:z(T),elevation:E,aspectRatio:R,borderColor:j,children:[o.jsx(_,{src:e,alt:l}),d&&o.jsx(Z,{effect:I,children:o.jsx(B,{children:c==="video"?o.jsx("video",{src:n,muted:!0,loop:!0,autoPlay:!0}):o.jsx("img",{src:n,alt:l+" preview"})})}),d&&c==="video"&&C&&o.jsx(F,{children:"▶"})]})};q.__docgenInfo={description:"",methods:[],displayName:"FlashView",props:{baseSrc:{required:!0,tsType:{name:"string"},description:""},previewSrc:{required:!1,tsType:{name:"string"},description:""},previewType:{required:!1,tsType:{name:"union",raw:"'image' | 'video'",elements:[{name:"literal",value:"'image'"},{name:"literal",value:"'video'"}]},description:"",defaultValue:{value:"'image'",computed:!1}},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},hoverEffect:{required:!1,tsType:{name:"union",raw:"'fade' | 'zoom'",elements:[{name:"literal",value:"'fade'"},{name:"literal",value:"'zoom'"}]},description:"",defaultValue:{value:"'fade'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'rounded' | 'square' | 'circle'",elements:[{name:"literal",value:"'rounded'"},{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}]},description:"",defaultValue:{value:"'rounded'",computed:!1}},elevation:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},aspectRatio:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'16/9'",computed:!1}},borderColor:{required:!1,tsType:{name:"string"},description:""},showPlayIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const N={title:"Components/ui/FlashView",component:q,tags:["autodocs"],argTypes:{hoverEffect:{control:"select",options:["fade","zoom"]},variant:{control:"select",options:["rounded","square","circle"]},previewType:{control:"select",options:["image","video"]},elevation:{control:{type:"range",min:0,max:24,step:1}},aspectRatio:{control:"text"},borderColor:{control:"color"},showPlayIcon:{control:"boolean"}}},t={args:{baseSrc:"https://picsum.photos/id/237/400/300",previewSrc:"https://picsum.photos/id/238/400/300",alt:"Sample Image",hoverEffect:"fade",variant:"rounded",elevation:6,aspectRatio:"4/3",borderColor:"#3b82f6"}},a={args:{baseSrc:"https://picsum.photos/id/239/400/300",previewSrc:"https://picsum.photos/id/240/400/300",alt:"Zoom Image",hoverEffect:"zoom",variant:"square",elevation:12,aspectRatio:"16/9"}},s={args:{baseSrc:"https://picsum.photos/id/241/400/300",previewSrc:"https://www.w3schools.com/html/mov_bbb.mp4",previewType:"video",alt:"Video Preview",hoverEffect:"fade",variant:"rounded",showPlayIcon:!0,elevation:10}},i={args:{baseSrc:"https://picsum.photos/id/242/400/400",previewSrc:"https://picsum.photos/id/243/400/400",alt:"Circular Image",hoverEffect:"fade",variant:"circle",aspectRatio:"1/1",elevation:4}};var u,m,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    baseSrc: 'https://picsum.photos/id/237/400/300',
    previewSrc: 'https://picsum.photos/id/238/400/300',
    alt: 'Sample Image',
    hoverEffect: 'fade',
    variant: 'rounded',
    elevation: 6,
    aspectRatio: '4/3',
    borderColor: '#3b82f6'
  }
}`,...(v=(m=t.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var f,h,w;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    baseSrc: 'https://picsum.photos/id/239/400/300',
    previewSrc: 'https://picsum.photos/id/240/400/300',
    alt: 'Zoom Image',
    hoverEffect: 'zoom',
    variant: 'square',
    elevation: 12,
    aspectRatio: '16/9'
  }
}`,...(w=(h=a.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var g,b,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    baseSrc: 'https://picsum.photos/id/241/400/300',
    previewSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    previewType: 'video',
    alt: 'Video Preview',
    hoverEffect: 'fade',
    variant: 'rounded',
    showPlayIcon: true,
    elevation: 10
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,S,P;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    baseSrc: 'https://picsum.photos/id/242/400/400',
    previewSrc: 'https://picsum.photos/id/243/400/400',
    alt: 'Circular Image',
    hoverEffect: 'fade',
    variant: 'circle',
    aspectRatio: '1/1',
    elevation: 4
  }
}`,...(P=(S=i.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};const W=["ImagePreview","ZoomPreview","VideoPreview","CircleVariant"];export{i as CircleVariant,t as ImagePreview,s as VideoPreview,a as ZoomPreview,W as __namedExportsOrder,N as default};
