import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as i}from"./index-BlmOqGMO.js";import{d as p,l as c}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const U={sm:c`
    height: 2rem;
    min-width: 2rem;
    font-size: 0.75rem;
  `,md:c`
    height: 2.5rem;
    min-width: 2.5rem;
    font-size: 0.875rem;
  `,lg:c`
    height: 3rem;
    min-width: 3rem;
    font-size: 1rem;
  `},ee={rounded:c`
    border-radius: 0.375rem;
  `,square:c`
    border-radius: 0;
  `,circle:c`
    border-radius: 9999px;
  `},re=p.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`,ne=p.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.25rem;
`,u=p.li`
  margin: 0;
`,m=p.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  border: 1px solid ${e=>e.active?"#3b82f6":"#d1d5db"};
  background-color: ${e=>e.active?e.variant==="outline"?"white":"#3b82f6":e.variant==="outline"?"white":"#f3f4f6"};
  color: ${e=>e.active?e.variant==="outline"?"#3b82f6":"white":(e.variant==="outline","#4b5563")};
  cursor: pointer;
  transition: all 0.2s;
  
  ${e=>U[e.size]}
  ${e=>ee[e.shape]}
  
  &:hover:not(:disabled) {
    background-color: ${e=>e.active?e.variant==="outline"?"#eff6ff":"#2563eb":e.variant==="outline"?"#f3f4f6":"#e5e7eb"};
    border-color: ${e=>e.active?"#2563eb":"#9ca3af"};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,te=p.span`
  display: flex;
  align-items: center;
  justify-content: center;
  ${e=>U[e.size]}
  padding: 0 0.5rem;
  color: #6b7280;
`,s=({currentPage:e,totalPages:n,onPageChange:t,siblingCount:L=1,showFirstLast:P=!0,showPrevNext:q=!0,size:o="md",variant:g="outline",shape:d="rounded",className:X})=>{const Y=(a,l)=>{const h=l-a+1;return Array.from({length:h},(z,S)=>a+S)},y=(()=>{const a=[],l=Math.max(e-L,1),h=Math.min(e+L,n),z=l>2,S=h<n-1;P&&z&&(a.push(1),a.push("ellipsis"));const Z=Y(l,h);return a.push(...Z),P&&S&&(a.push("ellipsis"),a.push(n)),a})();return r.jsx(re,{className:X,"aria-label":"Pagination",children:r.jsxs(ne,{children:[q&&r.jsx(u,{children:r.jsx(m,{size:o,variant:g,shape:d,onClick:()=>t(e-1),disabled:e===1,"aria-label":"Previous page",children:r.jsx(ae,{})})}),P&&!y.includes(1)&&r.jsx(u,{children:r.jsx(m,{size:o,variant:g,shape:d,onClick:()=>t(1),active:e===1,children:"1"})}),y.map((a,l)=>a==="ellipsis"?r.jsx(u,{children:r.jsx(te,{size:o,children:"..."})},`ellipsis-${l}`):r.jsx(u,{children:r.jsx(m,{size:o,variant:g,shape:d,onClick:()=>t(a),active:e===a,children:a})},a)),P&&!y.includes(n)&&r.jsx(u,{children:r.jsx(m,{size:o,variant:g,shape:d,onClick:()=>t(n),active:e===n,children:n})}),q&&r.jsx(u,{children:r.jsx(m,{size:o,variant:g,shape:d,onClick:()=>t(e+1),disabled:e===n,"aria-label":"Next page",children:r.jsx(se,{})})})]})})},ae=()=>r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M10 12L6 8L10 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),se=()=>r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M6 12L10 8L6 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});s.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},siblingCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},showFirstLast:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showPrevNext:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"outline" | "filled"',elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"filled"'}]},description:"",defaultValue:{value:'"outline"',computed:!1}},shape:{required:!1,tsType:{name:"union",raw:'"rounded" | "square" | "circle"',elements:[{name:"literal",value:'"rounded"'},{name:"literal",value:'"square"'},{name:"literal",value:'"circle"'}]},description:"",defaultValue:{value:'"rounded"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const ge={title:"Components/New/Pagination",component:s,tags:["autodocs"],argTypes:{currentPage:{control:{type:"number",min:1},defaultValue:1},totalPages:{control:{type:"number",min:1},defaultValue:10},siblingCount:{control:{type:"number",min:0,max:5},defaultValue:1},showFirstLast:{control:"boolean",defaultValue:!0},showPrevNext:{control:"boolean",defaultValue:!0},size:{control:{type:"radio",options:["sm","md","lg"]},defaultValue:"md"},variant:{control:{type:"radio",options:["outline","filled"]},defaultValue:"outline"},shape:{control:{type:"radio",options:["rounded","square","circle"]},defaultValue:"rounded"}}},f={args:{currentPage:3,totalPages:10,siblingCount:1,showFirstLast:!0,showPrevNext:!0,size:"md",variant:"outline",shape:"rounded"},render:e=>{const[n,t]=i.useState(e.currentPage);return r.jsx(s,{...e,currentPage:n,onPageChange:t})}},v={args:{currentPage:2,totalPages:5,size:"sm",variant:"outline",shape:"rounded"},render:e=>{const[n,t]=i.useState(e.currentPage);return r.jsx(s,{...e,currentPage:n,onPageChange:t})}},x={args:{currentPage:5,totalPages:20,siblingCount:2,variant:"filled",shape:"circle",size:"lg"},render:e=>{const[n,t]=i.useState(e.currentPage);return r.jsx(s,{...e,currentPage:n,onPageChange:t})}},b={args:{currentPage:1,totalPages:7,showFirstLast:!1,showPrevNext:!0,variant:"outline",shape:"square",size:"md"},render:e=>{const[n,t]=i.useState(e.currentPage);return r.jsx(s,{...e,currentPage:n,onPageChange:t})}},w={args:{currentPage:5,totalPages:50,siblingCount:2,size:"md",variant:"outline",shape:"rounded"},render:e=>{const[n,t]=i.useState(e.currentPage);return r.jsx(s,{...e,currentPage:n,onPageChange:t})}},C={render:()=>{const[e,n]=i.useState(1);return r.jsxs("div",{style:{padding:"2rem"},children:[r.jsxs("p",{style:{marginBottom:"1rem"},children:["Current Page: ",r.jsx("strong",{children:e})]}),r.jsx(s,{currentPage:e,totalPages:15,onPageChange:n,siblingCount:1,showFirstLast:!0,showPrevNext:!0,size:"md",variant:"outline",shape:"rounded"})]})}},j={args:{currentPage:3,totalPages:10,siblingCount:2,showFirstLast:!0,showPrevNext:!0,size:"lg",variant:"filled",shape:"circle"},render:e=>{const[n,t]=i.useState(e.currentPage);return r.jsx(s,{...e,currentPage:n,onPageChange:t})}};var k,N,V;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    currentPage: 3,
    totalPages: 10,
    siblingCount: 1,
    showFirstLast: true,
    showPrevNext: true,
    size: 'md',
    variant: 'outline',
    shape: 'rounded'
  },
  render: args => {
    const [page, setPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  }
}`,...(V=(N=f.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var E,F,T;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    currentPage: 2,
    totalPages: 5,
    size: 'sm',
    variant: 'outline',
    shape: 'rounded'
  },
  render: args => {
    const [page, setPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  }
}`,...(T=(F=v.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var I,$,M;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    totalPages: 20,
    siblingCount: 2,
    variant: 'filled',
    shape: 'circle',
    size: 'lg'
  },
  render: args => {
    const [page, setPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  }
}`,...(M=($=x.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var B,_,W;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 7,
    showFirstLast: false,
    showPrevNext: true,
    variant: 'outline',
    shape: 'square',
    size: 'md'
  },
  render: args => {
    const [page, setPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  }
}`,...(W=(_=b.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var O,R,D;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    totalPages: 50,
    siblingCount: 2,
    size: 'md',
    variant: 'outline',
    shape: 'rounded'
  },
  render: args => {
    const [page, setPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  }
}`,...(D=(R=w.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var A,G,H;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 15;
    return <div style={{
      padding: '2rem'
    }}>\r
        <p style={{
        marginBottom: '1rem'
      }}>Current Page: <strong>{currentPage}</strong></p>\r
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} siblingCount={1} showFirstLast={true} showPrevNext={true} size="md" variant="outline" shape="rounded" />\r
      </div>;
  }
}`,...(H=(G=C.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    currentPage: 3,
    totalPages: 10,
    siblingCount: 2,
    showFirstLast: true,
    showPrevNext: true,
    size: 'lg',
    variant: 'filled',
    shape: 'circle'
  },
  render: args => {
    const [page, setPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  }
}`,...(Q=(K=j.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const de=["Default","SmallOutline","LargeFilled","MinimalSquare","WithEllipsis","ControlledExample","FullCustomExample"];export{C as ControlledExample,f as Default,j as FullCustomExample,x as LargeFilled,b as MinimalSquare,v as SmallOutline,w as WithEllipsis,de as __namedExportsOrder,ge as default};
