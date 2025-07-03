import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as c,r as b}from"./index-BlmOqGMO.js";import{d as g}from"./styled-components.browser.esm-B51KuXqp.js";import{S as i}from"./Step-BdGNYYbA.js";import"./index-yBjzXJbu.js";const x=g.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,o=({activeStep:r=0,children:n})=>e.jsx(x,{children:c.Children.map(n,(s,t)=>c.cloneElement(s,{index:t,isActive:t===r,isCompleted:t<r,isLast:t===c.Children.count(n)-1}))});o.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{activeStep:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const h=g.div`
  width: 100%;
  padding: 2rem;
`,T={title:"Components/ui/Stepper",component:o,tags:["autodocs"],argTypes:{activeStep:{control:{type:"number",min:0}}}},a={args:{activeStep:1},render:r=>e.jsx(h,{children:e.jsxs(o,{activeStep:r.activeStep,children:[e.jsx(i,{label:"Step One"}),e.jsx(i,{label:"Step Two"}),e.jsx(i,{label:"Step Three",isLast:!0})]})})},p={render:()=>{const[r,n]=b.useState(0),s=["Login","Shipping Address","Payment","Review Order"];return e.jsxs(h,{children:[e.jsx(o,{activeStep:r,children:s.map(t=>e.jsx(i,{label:t},t))}),e.jsxs("div",{style:{marginTop:"1rem"},children:[e.jsx("button",{onClick:()=>n(t=>Math.max(0,t-1)),disabled:r===0,style:{marginRight:"0.5rem"},children:"Previous"}),e.jsx("button",{onClick:()=>n(t=>Math.min(s.length-1,t+1)),disabled:r===s.length-1,children:"Next"})]})]})}};var l,d,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    activeStep: 1
  },
  render: args => <Container>\r
      <Stepper activeStep={args.activeStep}>\r
        <Step label="Step One" />\r
        <Step label="Step Two" />\r
        <Step label="Step Three" isLast />\r
      </Stepper>\r
    </Container>
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var S,u,v;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Login', 'Shipping Address', 'Payment', 'Review Order'];
    return <Container>\r
        <Stepper activeStep={activeStep}>\r
          {steps.map(label => <Step key={label} label={label} />)}\r
        </Stepper>\r
        <div style={{
        marginTop: '1rem'
      }}>\r
          <button onClick={() => setActiveStep(s => Math.max(0, s - 1))} disabled={activeStep === 0} style={{
          marginRight: '0.5rem'
        }}>\r
            Previous\r
          </button>\r
          <button onClick={() => setActiveStep(s => Math.min(steps.length - 1, s + 1))} disabled={activeStep === steps.length - 1}>\r
            Next\r
          </button>\r
        </div>\r
      </Container>;
  }
}`,...(v=(u=p.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const A=["Default","InteractiveStepper"];export{a as Default,p as InteractiveStepper,A as __namedExportsOrder,T as default};
