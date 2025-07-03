import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{d as o}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";const b=o.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
`,r=({children:t,className:l})=>e.jsx(b,{className:l,children:t});r.__docgenInfo={description:"",methods:[],displayName:"Timeline",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const R=o.li`
  display: flex;
  position: relative;
  padding: 1rem 0;
`,k=o.div`
  flex: 0 0 120px;
  text-align: right;
  font-size: 0.875rem;
  color: #6b7280;
  padding-right: 1rem;
`,D=o.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({color:t})=>t==="primary"?"#3b82f6":t==="success"?"#10b981":t==="error"?"#ef4444":t==="warning"?"#f59e0b":"#9ca3af"};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`,N=o.span`
  position: absolute;
  top: 14px;
  left: 128px;
  width: 2px;
  height: calc(100% - 14px);
  background: ${({type:t})=>t==="dashed"?"repeating-linear-gradient(#d1d5db, #d1d5db 4px, transparent 4px, transparent 8px)":t==="solid"?"#d1d5db":"transparent"};
`,q=o.div`
  position: relative;
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`,S=o.div`
  padding-left: 1rem;
  flex: 1;
`,n=({color:t="default",dotContent:l,oppositeContent:d,children:j,connector:v="solid"})=>e.jsxs(R,{children:[d&&e.jsx(k,{children:d}),e.jsxs(q,{children:[e.jsx(D,{color:t,children:l}),e.jsx(N,{type:v})]}),e.jsx(S,{children:j})]});n.__docgenInfo={description:"",methods:[],displayName:"TimelineItem",props:{color:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'success' | 'error' | 'warning'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},dotContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},oppositeContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},connector:{required:!1,tsType:{name:"union",raw:"'solid' | 'dashed' | 'none'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}}}};const O={title:"Components/ui/Timeline",component:r,tags:["autodocs"],argTypes:{}},i={render:()=>e.jsxs(r,{children:[e.jsx(n,{color:"primary",oppositeContent:"09:00 AM",dotContent:"🚀",connector:"solid",children:"Project kickoff meeting with the team to align goals and milestones."}),e.jsx(n,{color:"success",oppositeContent:"12:00 PM",dotContent:"📝",connector:"dashed",children:"Draft initial design concepts and wireframes."}),e.jsx(n,{color:"warning",oppositeContent:"03:00 PM",dotContent:"⚠️",connector:"solid",children:"Review feedback from stakeholders and prioritize changes."}),e.jsx(n,{color:"error",oppositeContent:"05:00 PM",dotContent:"❌",connector:"none",children:"Finalize report and submit to management."})]})},s={render:()=>e.jsxs(r,{children:[e.jsx(n,{oppositeContent:"Day 1",dotContent:"🌟",connector:"solid",children:"Kickoff & brainstorming session."}),e.jsx(n,{oppositeContent:"Day 2",dotContent:"🔧",connector:"solid",color:"primary",children:"Development sprint starts."}),e.jsx(n,{oppositeContent:"Day 3",dotContent:"🧪",connector:"solid",color:"success",children:"Testing & quality assurance."}),e.jsx(n,{oppositeContent:"Day 4",dotContent:"🎉",connector:"none",color:"warning",children:"Launch day celebration."})]})},a={render:()=>e.jsxs(r,{children:[e.jsx(n,{dotContent:"✔️",color:"success",connector:"solid",children:"Task completed successfully."}),e.jsx(n,{dotContent:e.jsx("span",{style:{fontWeight:"bold"},children:"!"}),color:"warning",connector:"dashed",children:"Important warning to check."}),e.jsx(n,{dotContent:e.jsx("span",{children:"🚧"}),color:"error",connector:"solid",children:"Work in progress."}),e.jsx(n,{dotContent:e.jsx("span",{children:"⏳"}),connector:"none",children:"Awaiting approval."})]})},c={render:()=>e.jsxs(r,{children:[e.jsx(n,{dotContent:"1",color:"primary",connector:"solid",children:"First step with solid connector."}),e.jsx(n,{dotContent:"2",color:"success",connector:"dashed",children:"Second step with dashed connector."}),e.jsx(n,{dotContent:"3",color:"warning",connector:"none",children:"Third step without connector."})]})};var m,p,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Timeline>\r
      <TimelineItem color="primary" oppositeContent="09:00 AM" dotContent="🚀" connector="solid">\r
        Project kickoff meeting with the team to align goals and milestones.\r
      </TimelineItem>\r
      <TimelineItem color="success" oppositeContent="12:00 PM" dotContent="📝" connector="dashed">\r
        Draft initial design concepts and wireframes.\r
      </TimelineItem>\r
      <TimelineItem color="warning" oppositeContent="03:00 PM" dotContent="⚠️" connector="solid">\r
        Review feedback from stakeholders and prioritize changes.\r
      </TimelineItem>\r
      <TimelineItem color="error" oppositeContent="05:00 PM" dotContent="❌" connector="none">\r
        Finalize report and submit to management.\r
      </TimelineItem>\r
    </Timeline>
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,g,C;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Timeline>\r
      <TimelineItem oppositeContent="Day 1" dotContent="🌟" connector="solid">\r
        Kickoff & brainstorming session.\r
      </TimelineItem>\r
      <TimelineItem oppositeContent="Day 2" dotContent="🔧" connector="solid" color="primary">\r
        Development sprint starts.\r
      </TimelineItem>\r
      <TimelineItem oppositeContent="Day 3" dotContent="🧪" connector="solid" color="success">\r
        Testing & quality assurance.\r
      </TimelineItem>\r
      <TimelineItem oppositeContent="Day 4" dotContent="🎉" connector="none" color="warning">\r
        Launch day celebration.\r
      </TimelineItem>\r
    </Timeline>
}`,...(C=(g=s.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var T,f,x;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Timeline>\r
      <TimelineItem dotContent="✔️" color="success" connector="solid">\r
        Task completed successfully.\r
      </TimelineItem>\r
      <TimelineItem dotContent={<span style={{
      fontWeight: 'bold'
    }}>!</span>} color="warning" connector="dashed">\r
        Important warning to check.\r
      </TimelineItem>\r
      <TimelineItem dotContent={<span>🚧</span>} color="error" connector="solid">\r
        Work in progress.\r
      </TimelineItem>\r
      <TimelineItem dotContent={<span>⏳</span>} connector="none">\r
        Awaiting approval.\r
      </TimelineItem>\r
    </Timeline>
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,I,w;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Timeline>\r
      <TimelineItem dotContent="1" color="primary" connector="solid">\r
        First step with solid connector.\r
      </TimelineItem>\r
      <TimelineItem dotContent="2" color="success" connector="dashed">\r
        Second step with dashed connector.\r
      </TimelineItem>\r
      <TimelineItem dotContent="3" color="warning" connector="none">\r
        Third step without connector.\r
      </TimelineItem>\r
    </Timeline>
}`,...(w=(I=c.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const _=["Default","WithOppositeContentOnly","DotContentVariations","CustomConnectorStyles"];export{c as CustomConnectorStyles,i as Default,a as DotContentVariations,s as WithOppositeContentOnly,_ as __namedExportsOrder,O as default};
