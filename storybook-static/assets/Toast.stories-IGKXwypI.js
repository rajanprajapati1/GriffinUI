import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{R as P,r as I}from"./index-BlmOqGMO.js";import{m as c,d as b,l as u}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const z=P.createContext({toasts:[],addToast:()=>"",removeToast:()=>{},updateToast:()=>{}}),dt={top:c`
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  `,"top-right":c`
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  `,"top-left":c`
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  `,bottom:c`
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  `,"bottom-right":c`
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  `,"bottom-left":c`
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  `},pt={top:c`
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-100%);
    }
  `,"top-right":c`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  `,"top-left":c`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  `,bottom:c`
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(100%);
    }
  `,"bottom-right":c`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  `,"bottom-left":c`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  `},ut=e=>{switch(e){case"top":return u`
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);
      `;case"top-right":return u`
        top: 1rem;
        right: 1rem;
      `;case"top-left":return u`
        top: 1rem;
        left: 1rem;
      `;case"bottom":return u`
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
      `;case"bottom-right":return u`
        bottom: 1rem;
        right: 1rem;
      `;case"bottom-left":return u`
        bottom: 1rem;
        left: 1rem;
      `;default:return u`
        top: 1rem;
        right: 1rem;
      `}},mt=b.div`
  position: fixed;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 420px;
  
  ${e=>ut(e.position)}
`,ht=b.div`
  display: flex;
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  animation: ${e=>e.closing?pt[e.position]:dt[e.position]} 0.2s ease-out;
  
  ${e=>{switch(e.variant){case"success":return u`
          border-left: 4px solid #10b981;
        `;case"warning":return u`
          border-left: 4px solid #f59e0b;
        `;case"error":return u`
          border-left: 4px solid #ef4444;
        `;default:return u`
          border-left: 4px solid #3b82f6;
        `}}}
`,bt=b.div`
  flex: 1;
`,gt=b.div`
  font-weight: 600;
  font-size: 0.875rem;
  color: #111827;
  margin-bottom: 0.25rem;
`,ft=b.div`
  font-size: 0.875rem;
  color: #4b5563;
`,vt=b.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`,xt=b.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  
  &:hover {
    color: #374151;
  }
`,Tt=({children:e,swipeDirection:r="right",swipeThreshold:i=50})=>{const[d,s]=I.useState([]),l=a=>{const o=Math.random().toString(36).substring(2,9);return s(p=>[...p,{...a,id:o,closing:!1}]),o},m=a=>{s(o=>o.map(p=>p.id===a?{...p,closing:!0}:p)),setTimeout(()=>{s(o=>o.filter(p=>p.id!==a))},200)},g=(a,o)=>{s(p=>p.map(h=>h.id===a?{...h,...o}:h))};return I.useEffect(()=>{d.forEach(a=>{if(a.duration!==Number.POSITIVE_INFINITY&&!a.closing){const o=setTimeout(()=>{m(a.id)},a.duration||5e3);return()=>clearTimeout(o)}})},[d]),t.jsxs(z.Provider,{value:{toasts:d,addToast:l,removeToast:m,updateToast:g},children:[e,Object.keys(dt).map(a=>t.jsx(mt,{position:a,children:d.filter(o=>o.position===a).map(o=>t.jsxs(ht,{variant:o.variant||"default",position:a,closing:o.closing,children:[t.jsxs(bt,{children:[o.title&&t.jsx(gt,{children:o.title}),o.description&&t.jsx(ft,{children:o.description})]}),o.action&&t.jsx(vt,{children:o.action}),t.jsx(xt,{onClick:()=>m(o.id),children:t.jsx(wt,{})})]},o.id))},a))]})},yt=({open:e,onOpenChange:r,title:i,description:d,action:s,variant:l="default",duration:m=5e3,position:g="top-right",className:a})=>{const{addToast:o,removeToast:p}=P.useContext(z),[h,W]=I.useState(null);return I.useEffect(()=>{if(e&&!h){const ct=o({title:i,description:d,action:s,variant:l,duration:m,position:g});W(ct)}else!e&&h&&(p(h),W(null))},[e,h,i,d,s,l,m,g]),null},wt=()=>t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4 4L12 12M4 12L12 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),f=()=>{const e=P.useContext(z);if(!e)throw new Error("useToast must be used within a ToastProvider");return{toast:r=>{const i=e.addToast(r);return{id:i,update:d=>e.updateToast(i,d),dismiss:()=>e.removeToast(i)}}}},D=e=>t.jsx(yt,{...e});D.Provider=Tt;D.__docgenInfo={description:"",methods:[{name:"Provider",docblock:null,modifiers:["static"],params:[{name:'{ children, swipeDirection = "right", swipeThreshold = 50 }',optional:!1,type:null}],returns:null}],displayName:"ToastWithProvider"};const Rt={title:"Components/New/Toast",component:D,tags:["autodocs"],decorators:[e=>t.jsx(D.Provider,{children:t.jsx(e,{})})],argTypes:{variant:{control:{type:"select"},options:["default","success","warning","error"]},position:{control:{type:"select"},options:["top","top-right","top-left","bottom","bottom-right","bottom-left"]},duration:{control:{type:"number"}}}},n=({variant:e="default",position:r="top-right",title:i="Toast Title",description:d="This is a toast message description.",withAction:s=!1,duration:l=5e3})=>{const{toast:m}=f(),g=()=>{m({title:i,description:d,variant:e,position:r,duration:l,action:s?t.jsx("button",{style:{backgroundColor:"#3b82f6",color:"white",border:"none",padding:"0.25rem 0.75rem",borderRadius:"0.25rem",fontSize:"0.875rem",cursor:"pointer"},onClick:()=>alert("Action clicked!"),children:"Action"}):void 0})};return t.jsx("button",{onClick:g,style:{backgroundColor:"#3b82f6",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"0.375rem",cursor:"pointer"},children:"Show Toast"})},v={render:()=>t.jsx(n,{})},x={render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[t.jsx(n,{variant:"default",title:"Default Toast"}),t.jsx(n,{variant:"success",title:"Success Toast",description:"Operation completed successfully!"}),t.jsx(n,{variant:"warning",title:"Warning Toast",description:"Please check your input."}),t.jsx(n,{variant:"error",title:"Error Toast",description:"Something went wrong!"})]})},T={render:()=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem",maxWidth:"600px"},children:[t.jsx(n,{position:"top-left",title:"Top Left"}),t.jsx(n,{position:"top",title:"Top Center"}),t.jsx(n,{position:"top-right",title:"Top Right"}),t.jsx(n,{position:"bottom-left",title:"Bottom Left"}),t.jsx(n,{position:"bottom",title:"Bottom Center"}),t.jsx(n,{position:"bottom-right",title:"Bottom Right"})]})},y={render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[t.jsx(n,{variant:"default",title:"Confirmation Required",description:"Are you sure you want to proceed?",withAction:!0}),t.jsx(n,{variant:"success",title:"File Uploaded",description:"Your file has been uploaded successfully.",withAction:!0}),t.jsx(n,{variant:"error",title:"Upload Failed",description:"Failed to upload file. Please try again.",withAction:!0})]})},w={render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[t.jsx(n,{duration:1e3,title:"Quick Toast",description:"This disappears in 1 second"}),t.jsx(n,{duration:3e3,title:"Medium Toast",description:"This disappears in 3 seconds"}),t.jsx(n,{duration:1e4,title:"Long Toast",description:"This disappears in 10 seconds"}),t.jsx(n,{duration:Number.POSITIVE_INFINITY,title:"Persistent Toast",description:"This stays until manually closed"})]})},C={render:()=>{const{toast:e}=f(),r=()=>{e({title:"First Toast",description:"This is the first toast",variant:"default",position:"top-right"}),setTimeout(()=>{e({title:"Second Toast",description:"This is the second toast",variant:"success",position:"top-right"})},500),setTimeout(()=>{e({title:"Third Toast",description:"This is the third toast",variant:"warning",position:"top-right"})},1e3)};return t.jsx("button",{onClick:r,style:{backgroundColor:"#3b82f6",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"0.375rem",cursor:"pointer"},children:"Show Multiple Toasts"})}},j={render:()=>{const{toast:e}=f(),r=()=>{const i=e({title:"Loading...",description:"Please wait while we process your request",variant:"default",duration:Number.POSITIVE_INFINITY});setTimeout(()=>{i.update({title:"Success!",description:"Your request has been processed successfully",variant:"success",duration:3e3})},2e3)};return t.jsx("button",{onClick:r,style:{backgroundColor:"#3b82f6",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"0.375rem",cursor:"pointer"},children:"Show Updatable Toast"})}},S={render:()=>{const{toast:e}=f(),[r,i]=P.useState({variant:"default",position:"top-right",duration:5e3,title:"Interactive Toast",description:"This toast can be customized"}),d=()=>{e({title:r.title,description:r.description,variant:r.variant,position:r.position,duration:r.duration,action:t.jsx("button",{style:{backgroundColor:"#10b981",color:"white",border:"none",padding:"0.25rem 0.75rem",borderRadius:"0.25rem",fontSize:"0.875rem",cursor:"pointer"},onClick:()=>alert("Custom action!"),children:"Custom"})})};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"400px"},children:[t.jsx("h3",{children:"Toast Customizer"}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontSize:"0.875rem"},children:"Variant:"}),t.jsxs("select",{value:r.variant,onChange:s=>i(l=>({...l,variant:s.target.value})),style:{width:"100%",padding:"0.5rem",borderRadius:"0.25rem",border:"1px solid #d1d5db"},children:[t.jsx("option",{value:"default",children:"Default"}),t.jsx("option",{value:"success",children:"Success"}),t.jsx("option",{value:"warning",children:"Warning"}),t.jsx("option",{value:"error",children:"Error"})]})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontSize:"0.875rem"},children:"Position:"}),t.jsxs("select",{value:r.position,onChange:s=>i(l=>({...l,position:s.target.value})),style:{width:"100%",padding:"0.5rem",borderRadius:"0.25rem",border:"1px solid #d1d5db"},children:[t.jsx("option",{value:"top",children:"Top"}),t.jsx("option",{value:"top-right",children:"Top Right"}),t.jsx("option",{value:"top-left",children:"Top Left"}),t.jsx("option",{value:"bottom",children:"Bottom"}),t.jsx("option",{value:"bottom-right",children:"Bottom Right"}),t.jsx("option",{value:"bottom-left",children:"Bottom Left"})]})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontSize:"0.875rem"},children:"Duration (ms):"}),t.jsx("input",{type:"number",value:r.duration,onChange:s=>i(l=>({...l,duration:Number(s.target.value)})),style:{width:"100%",padding:"0.5rem",borderRadius:"0.25rem",border:"1px solid #d1d5db"}})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontSize:"0.875rem"},children:"Title:"}),t.jsx("input",{type:"text",value:r.title,onChange:s=>i(l=>({...l,title:s.target.value})),style:{width:"100%",padding:"0.5rem",borderRadius:"0.25rem",border:"1px solid #d1d5db"}})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontSize:"0.875rem"},children:"Description:"}),t.jsx("textarea",{value:r.description,onChange:s=>i(l=>({...l,description:s.target.value})),style:{width:"100%",padding:"0.5rem",borderRadius:"0.25rem",border:"1px solid #d1d5db",minHeight:"80px"}})]}),t.jsx("button",{onClick:d,style:{backgroundColor:"#3b82f6",color:"white",border:"none",padding:"0.75rem 1rem",borderRadius:"0.375rem",cursor:"pointer",fontSize:"1rem"},children:"Show Custom Toast"})]})}},k={render:()=>{const{toast:e}=f(),r=[{label:"File Upload Success",action:()=>e({title:"Upload Complete",description:'Your file "document.pdf" has been uploaded successfully.',variant:"success",position:"top-right",action:t.jsx("button",{style:{backgroundColor:"#10b981",color:"white",border:"none",padding:"0.25rem 0.75rem",borderRadius:"0.25rem",fontSize:"0.875rem",cursor:"pointer"},onClick:()=>alert("View file"),children:"View"})})},{label:"Connection Error",action:()=>e({title:"Connection Failed",description:"Unable to connect to the server. Please check your internet connection.",variant:"error",position:"top-right",duration:8e3,action:t.jsx("button",{style:{backgroundColor:"#ef4444",color:"white",border:"none",padding:"0.25rem 0.75rem",borderRadius:"0.25rem",fontSize:"0.875rem",cursor:"pointer"},onClick:()=>alert("Retry connection"),children:"Retry"})})},{label:"Form Validation Warning",action:()=>e({title:"Validation Warning",description:"Some fields are missing required information. Please review your form.",variant:"warning",position:"top",duration:6e3})},{label:"Auto-save Notification",action:()=>e({title:"Draft Saved",description:"Your changes have been automatically saved.",variant:"default",position:"bottom-right",duration:2e3})},{label:"Confirmation Required",action:()=>e({title:"Delete Confirmation",description:"Are you sure you want to delete this item? This action cannot be undone.",variant:"error",position:"top",duration:Number.POSITIVE_INFINITY,action:t.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[t.jsx("button",{style:{backgroundColor:"#ef4444",color:"white",border:"none",padding:"0.25rem 0.75rem",borderRadius:"0.25rem",fontSize:"0.875rem",cursor:"pointer"},onClick:()=>alert("Item deleted"),children:"Delete"}),t.jsx("button",{style:{backgroundColor:"#6b7280",color:"white",border:"none",padding:"0.25rem 0.75rem",borderRadius:"0.25rem",fontSize:"0.875rem",cursor:"pointer"},onClick:()=>alert("Cancelled"),children:"Cancel"})]})})}];return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"400px"},children:[t.jsx("h3",{children:"Real World Examples"}),r.map((i,d)=>t.jsx("button",{onClick:i.action,style:{backgroundColor:"#f3f4f6",color:"#374151",border:"1px solid #d1d5db",padding:"0.75rem 1rem",borderRadius:"0.375rem",cursor:"pointer",textAlign:"left"},children:i.label},d))]})}},R={args:{variant:"default",position:"top-right",duration:5e3},render:e=>t.jsx(n,{variant:e.variant,position:e.position,duration:e.duration,title:"Playground Toast",description:"This toast can be customized using the controls"})};var N,B,E;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <ToastDemo />
}`,...(E=(B=v.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var A,Y,F;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>\r
      <ToastDemo variant="default" title="Default Toast" />\r
      <ToastDemo variant="success" title="Success Toast" description="Operation completed successfully!" />\r
      <ToastDemo variant="warning" title="Warning Toast" description="Please check your input." />\r
      <ToastDemo variant="error" title="Error Toast" description="Something went wrong!" />\r
    </div>
}`,...(F=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};var V,X,U;T.parameters={...T.parameters,docs:{...(V=T.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    maxWidth: '600px'
  }}>\r
      <ToastDemo position="top-left" title="Top Left" />\r
      <ToastDemo position="top" title="Top Center" />\r
      <ToastDemo position="top-right" title="Top Right" />\r
      <ToastDemo position="bottom-left" title="Bottom Left" />\r
      <ToastDemo position="bottom" title="Bottom Center" />\r
      <ToastDemo position="bottom-right" title="Bottom Right" />\r
    </div>
}`,...(U=(X=T.parameters)==null?void 0:X.docs)==null?void 0:U.source}}};var L,O,M;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>\r
      <ToastDemo variant="default" title="Confirmation Required" description="Are you sure you want to proceed?" withAction={true} />\r
      <ToastDemo variant="success" title="File Uploaded" description="Your file has been uploaded successfully." withAction={true} />\r
      <ToastDemo variant="error" title="Upload Failed" description="Failed to upload file. Please try again." withAction={true} />\r
    </div>
}`,...(M=(O=y.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var _,q,$;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>\r
      <ToastDemo duration={1000} title="Quick Toast" description="This disappears in 1 second" />\r
      <ToastDemo duration={3000} title="Medium Toast" description="This disappears in 3 seconds" />\r
      <ToastDemo duration={10000} title="Long Toast" description="This disappears in 10 seconds" />\r
      <ToastDemo duration={Number.POSITIVE_INFINITY} title="Persistent Toast" description="This stays until manually closed" />\r
    </div>
}`,...($=(q=w.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var H,Q,G;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const {
      toast
    } = useToast();
    const showMultipleToasts = () => {
      toast({
        title: 'First Toast',
        description: 'This is the first toast',
        variant: 'default',
        position: 'top-right'
      });
      setTimeout(() => {
        toast({
          title: 'Second Toast',
          description: 'This is the second toast',
          variant: 'success',
          position: 'top-right'
        });
      }, 500);
      setTimeout(() => {
        toast({
          title: 'Third Toast',
          description: 'This is the third toast',
          variant: 'warning',
          position: 'top-right'
        });
      }, 1000);
    };
    return <button onClick={showMultipleToasts} style={{
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '0.375rem',
      cursor: 'pointer'
    }}>\r
        Show Multiple Toasts\r
      </button>;
  }
}`,...(G=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:G.source}}};var J,K,Z;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const {
      toast
    } = useToast();
    const showUpdatableToast = () => {
      const toastInstance = toast({
        title: 'Loading...',
        description: 'Please wait while we process your request',
        variant: 'default',
        duration: Number.POSITIVE_INFINITY
      });
      setTimeout(() => {
        toastInstance.update({
          title: 'Success!',
          description: 'Your request has been processed successfully',
          variant: 'success',
          duration: 3000
        });
      }, 2000);
    };
    return <button onClick={showUpdatableToast} style={{
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '0.375rem',
      cursor: 'pointer'
    }}>\r
        Show Updatable Toast\r
      </button>;
  }
}`,...(Z=(K=j.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var tt,et,ot;S.parameters={...S.parameters,docs:{...(tt=S.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  render: () => {
    const {
      toast
    } = useToast();
    const [settings, setSettings] = React.useState({
      variant: 'default' as 'default' | 'success' | 'warning' | 'error',
      position: 'top-right' as 'top' | 'top-right' | 'top-left' | 'bottom' | 'bottom-right' | 'bottom-left',
      duration: 5000,
      title: 'Interactive Toast',
      description: 'This toast can be customized'
    });
    const showCustomToast = () => {
      toast({
        title: settings.title,
        description: settings.description,
        variant: settings.variant,
        position: settings.position,
        duration: settings.duration,
        action: <button style={{
          backgroundColor: '#10b981',
          color: 'white',
          border: 'none',
          padding: '0.25rem 0.75rem',
          borderRadius: '0.25rem',
          fontSize: '0.875rem',
          cursor: 'pointer'
        }} onClick={() => alert('Custom action!')}>\r
            Custom\r
          </button>
      });
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      maxWidth: '400px'
    }}>\r
        <h3>Toast Customizer</h3>\r
        \r
        <div>\r
          <label style={{
          display: 'block',
          marginBottom: '0.5rem',
          fontSize: '0.875rem'
        }}>\r
            Variant:\r
          </label>\r
          <select value={settings.variant} onChange={e => setSettings(prev => ({
          ...prev,
          variant: e.target.value as any
        }))} style={{
          width: '100%',
          padding: '0.5rem',
          borderRadius: '0.25rem',
          border: '1px solid #d1d5db'
        }}>\r
            <option value="default">Default</option>\r
            <option value="success">Success</option>\r
            <option value="warning">Warning</option>\r
            <option value="error">Error</option>\r
          </select>\r
        </div>\r
\r
        <div>\r
          <label style={{
          display: 'block',
          marginBottom: '0.5rem',
          fontSize: '0.875rem'
        }}>\r
            Position:\r
          </label>\r
          <select value={settings.position} onChange={e => setSettings(prev => ({
          ...prev,
          position: e.target.value as any
        }))} style={{
          width: '100%',
          padding: '0.5rem',
          borderRadius: '0.25rem',
          border: '1px solid #d1d5db'
        }}>\r
            <option value="top">Top</option>\r
            <option value="top-right">Top Right</option>\r
            <option value="top-left">Top Left</option>\r
            <option value="bottom">Bottom</option>\r
            <option value="bottom-right">Bottom Right</option>\r
            <option value="bottom-left">Bottom Left</option>\r
          </select>\r
        </div>\r
\r
        <div>\r
          <label style={{
          display: 'block',
          marginBottom: '0.5rem',
          fontSize: '0.875rem'
        }}>\r
            Duration (ms):\r
          </label>\r
          <input type="number" value={settings.duration} onChange={e => setSettings(prev => ({
          ...prev,
          duration: Number(e.target.value)
        }))} style={{
          width: '100%',
          padding: '0.5rem',
          borderRadius: '0.25rem',
          border: '1px solid #d1d5db'
        }} />\r
        </div>\r
\r
        <div>\r
          <label style={{
          display: 'block',
          marginBottom: '0.5rem',
          fontSize: '0.875rem'
        }}>\r
            Title:\r
          </label>\r
          <input type="text" value={settings.title} onChange={e => setSettings(prev => ({
          ...prev,
          title: e.target.value
        }))} style={{
          width: '100%',
          padding: '0.5rem',
          borderRadius: '0.25rem',
          border: '1px solid #d1d5db'
        }} />\r
        </div>\r
\r
        <div>\r
          <label style={{
          display: 'block',
          marginBottom: '0.5rem',
          fontSize: '0.875rem'
        }}>\r
            Description:\r
          </label>\r
          <textarea value={settings.description} onChange={e => setSettings(prev => ({
          ...prev,
          description: e.target.value
        }))} style={{
          width: '100%',
          padding: '0.5rem',
          borderRadius: '0.25rem',
          border: '1px solid #d1d5db',
          minHeight: '80px'
        }} />\r
        </div>\r
\r
        <button onClick={showCustomToast} style={{
        backgroundColor: '#3b82f6',
        color: 'white',
        border: 'none',
        padding: '0.75rem 1rem',
        borderRadius: '0.375rem',
        cursor: 'pointer',
        fontSize: '1rem'
      }}>\r
          Show Custom Toast\r
        </button>\r
      </div>;
  }
}`,...(ot=(et=S.parameters)==null?void 0:et.docs)==null?void 0:ot.source}}};var rt,it,st;k.parameters={...k.parameters,docs:{...(rt=k.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  render: () => {
    const {
      toast
    } = useToast();
    const examples = [{
      label: 'File Upload Success',
      action: () => toast({
        title: 'Upload Complete',
        description: 'Your file "document.pdf" has been uploaded successfully.',
        variant: 'success',
        position: 'top-right',
        action: <button style={{
          backgroundColor: '#10b981',
          color: 'white',
          border: 'none',
          padding: '0.25rem 0.75rem',
          borderRadius: '0.25rem',
          fontSize: '0.875rem',
          cursor: 'pointer'
        }} onClick={() => alert('View file')}>\r
              View\r
            </button>
      })
    }, {
      label: 'Connection Error',
      action: () => toast({
        title: 'Connection Failed',
        description: 'Unable to connect to the server. Please check your internet connection.',
        variant: 'error',
        position: 'top-right',
        duration: 8000,
        action: <button style={{
          backgroundColor: '#ef4444',
          color: 'white',
          border: 'none',
          padding: '0.25rem 0.75rem',
          borderRadius: '0.25rem',
          fontSize: '0.875rem',
          cursor: 'pointer'
        }} onClick={() => alert('Retry connection')}>\r
              Retry\r
            </button>
      })
    }, {
      label: 'Form Validation Warning',
      action: () => toast({
        title: 'Validation Warning',
        description: 'Some fields are missing required information. Please review your form.',
        variant: 'warning',
        position: 'top',
        duration: 6000
      })
    }, {
      label: 'Auto-save Notification',
      action: () => toast({
        title: 'Draft Saved',
        description: 'Your changes have been automatically saved.',
        variant: 'default',
        position: 'bottom-right',
        duration: 2000
      })
    }, {
      label: 'Confirmation Required',
      action: () => toast({
        title: 'Delete Confirmation',
        description: 'Are you sure you want to delete this item? This action cannot be undone.',
        variant: 'error',
        position: 'top',
        duration: Number.POSITIVE_INFINITY,
        action: <div style={{
          display: 'flex',
          gap: '0.5rem'
        }}>\r
              <button style={{
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            padding: '0.25rem 0.75rem',
            borderRadius: '0.25rem',
            fontSize: '0.875rem',
            cursor: 'pointer'
          }} onClick={() => alert('Item deleted')}>\r
                Delete\r
              </button>\r
              <button style={{
            backgroundColor: '#6b7280',
            color: 'white',
            border: 'none',
            padding: '0.25rem 0.75rem',
            borderRadius: '0.25rem',
            fontSize: '0.875rem',
            cursor: 'pointer'
          }} onClick={() => alert('Cancelled')}>\r
                Cancel\r
              </button>\r
            </div>
      })
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      maxWidth: '400px'
    }}>\r
        <h3>Real World Examples</h3>\r
        {examples.map((example, index) => <button key={index} onClick={example.action} style={{
        backgroundColor: '#f3f4f6',
        color: '#374151',
        border: '1px solid #d1d5db',
        padding: '0.75rem 1rem',
        borderRadius: '0.375rem',
        cursor: 'pointer',
        textAlign: 'left'
      }}>\r
            {example.label}\r
          </button>)}\r
      </div>;
  }
}`,...(st=(it=k.parameters)==null?void 0:it.docs)==null?void 0:st.source}}};var nt,at,lt;R.parameters={...R.parameters,docs:{...(nt=R.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    position: 'top-right',
    duration: 5000
  },
  render: args => <ToastDemo variant={args.variant} position={args.position} duration={args.duration} title="Playground Toast" description="This toast can be customized using the controls" />
}`,...(lt=(at=R.parameters)==null?void 0:at.docs)==null?void 0:lt.source}}};const It=["Default","AllVariants","AllPositions","WithActions","CustomDurations","MultipleToasts","UpdateableToast","InteractiveDemo","RealWorldExamples","Playground"];export{T as AllPositions,x as AllVariants,w as CustomDurations,v as Default,S as InteractiveDemo,C as MultipleToasts,R as Playground,k as RealWorldExamples,j as UpdateableToast,y as WithActions,It as __namedExportsOrder,Rt as default};
