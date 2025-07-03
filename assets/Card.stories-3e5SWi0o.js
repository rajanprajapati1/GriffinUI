import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{l as s,d}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";const B=r=>{const a={0:"none",1:"0 1px 3px rgba(0,0,0,0.12)",2:"0 2px 4px rgba(0,0,0,0.14)",3:"0 3px 6px rgba(0,0,0,0.16)",4:"0 4px 8px rgba(0,0,0,0.18)",6:"0 6px 12px rgba(0,0,0,0.20)",8:"0 8px 16px rgba(0,0,0,0.22)",12:"0 12px 24px rgba(0,0,0,0.24)",16:"0 16px 32px rgba(0,0,0,0.26)",24:"0 24px 48px rgba(0,0,0,0.30)"};return a[r]||a[1]},N=d.div`
  background-color: white;
  border-radius: ${r=>r.rounded||"0.75rem"};
  padding: ${r=>r.padding||"1rem"};
  width: ${r=>r.fullWidth?"100%":"auto"};
  transition: box-shadow 0.3s ease, border 0.3s ease;
  ${r=>r.variant==="outlined"?s`
          border: 1px solid #e0e0e0;
          box-shadow: none;
        `:s`
          border: none;
          box-shadow: ${B(r.elevation||1)};
        `}
`,b=({children:r,variant:a="elevated",elevation:C=1,padding:j,rounded:w,fullWidth:y=!1,className:W})=>e.jsx(N,{variant:a,elevation:C,padding:j,rounded:w,fullWidth:y,className:W,children:r});b.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'elevated' | 'outlined'",elements:[{name:"literal",value:"'elevated'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'elevated'",computed:!1}},elevation:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 24",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"24"}]},description:"",defaultValue:{value:"1",computed:!1}},padding:{required:!1,tsType:{name:"string"},description:""},rounded:{required:!1,tsType:{name:"string"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const l=d.button`
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1d4ed8;
  }
`,E=d.img`
  width: 100%;
  border-radius: 0.75rem 0.75rem 0 0;
  object-fit: cover;
`,i=d.div`
  padding: 1rem;
`,R={title:"Components/ui/Card",component:b,tags:["autodocs"],argTypes:{variant:{control:"inline-radio",options:["elevated","outlined"]},elevation:{control:{type:"select"},options:[0,1,2,3,4,6,8,12,16,24]},padding:{control:"text"},rounded:{control:"text"},fullWidth:{control:"boolean"}}},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(E,{src:"https://picsum.photos/seed/picsum/200/300",alt:"Nature"}),e.jsxs(i,{children:[e.jsx("h3",{children:"Beautiful Nature"}),e.jsx("p",{children:"Experience the serene beauty of untouched landscapes."}),e.jsx(l,{children:"Explore"})]})]}),variant:"elevated",elevation:4,padding:"0",rounded:"1rem",fullWidth:!1}},n={args:{children:e.jsxs(i,{children:[e.jsx("h3",{children:"Upgrade Your Plan"}),e.jsx("p",{children:"Get more features and priority support with our premium plan."}),e.jsx(l,{children:"Upgrade Now"})]}),variant:"outlined",elevation:0,padding:"1.5rem",rounded:"0.75rem",fullWidth:!1}},o={args:{children:e.jsxs(i,{children:[e.jsx("h3",{children:"Welcome Back!"}),e.jsx("p",{children:"Your dashboard is ready to explore."}),e.jsx(l,{children:"Go to Dashboard"})]}),variant:"elevated",elevation:12,padding:"2rem",rounded:"1rem",fullWidth:!0}};var u,p,c;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: <>\r
        <Img src="https://picsum.photos/seed/picsum/200/300" alt="Nature" />\r
        <CardContent>\r
          <h3>Beautiful Nature</h3>\r
          <p>Experience the serene beauty of untouched landscapes.</p>\r
          <Button>Explore</Button>\r
        </CardContent>\r
      </>,
    variant: 'elevated',
    elevation: 4,
    padding: '0',
    rounded: '1rem',
    fullWidth: false
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,h,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <CardContent>\r
        <h3>Upgrade Your Plan</h3>\r
        <p>Get more features and priority support with our premium plan.</p>\r
        <Button>Upgrade Now</Button>\r
      </CardContent>,
    variant: 'outlined',
    elevation: 0,
    padding: '1.5rem',
    rounded: '0.75rem',
    fullWidth: false
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,v,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: <CardContent>\r
        <h3>Welcome Back!</h3>\r
        <p>Your dashboard is ready to explore.</p>\r
        <Button>Go to Dashboard</Button>\r
      </CardContent>,
    variant: 'elevated',
    elevation: 12,
    padding: '2rem',
    rounded: '1rem',
    fullWidth: true
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const S=["ImageCard","OutlinedActionCard","FullWidthElevatedCard"];export{o as FullWidthElevatedCard,t as ImageCard,n as OutlinedActionCard,S as __namedExportsOrder,R as default};
