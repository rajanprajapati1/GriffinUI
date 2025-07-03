import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o}from"./index-BlmOqGMO.js";import{d as c,l as L}from"./styled-components.browser.esm-B51KuXqp.js";import{C as Me}from"./Calendar-DU0hjEnd.js";import"./index-yBjzXJbu.js";const Te=c.div`
  position: relative;
  width: 100%;
`,je=c.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  padding: 0 0.75rem;
  background-color: white;
  border: 1px solid ${e=>e.error?"#ef4444":"#d1d5db"};
  border-radius: 0.375rem;
  transition: all 0.2s;
  
  ${e=>e.focused&&L`
    border-color: ${e.error?"#ef4444":"#3b82f6"};
    box-shadow: 0 0 0 2px ${e.error?"rgba(239, 68, 68, 0.2)":"rgba(59, 130, 246, 0.2)"};
  `}
  
  ${e=>e.disabled&&L`
    background-color: #f3f4f6;
    opacity: 0.6;
    cursor: not-allowed;
  `}
`,Ve=c.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 0.875rem;
  color: #1f2937;
  
  &::placeholder {
    color: #9ca3af;
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`,ke=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  margin-left: 0.5rem;
`,Ie=c.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 0;
  margin-left: 0.5rem;
  
  &:hover {
    color: #ef4444;
  }
`,We=c.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  z-index: 10;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 0.5rem;
`,Ee=c.div`
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: ${e=>e.error?"#ef4444":"#6b7280"};
`,Oe=(e,r)=>{const s=e.getDate().toString().padStart(2,"0"),a=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getFullYear();return r.replace("dd",s).replace("MM",a).replace("yyyy",n.toString()).replace("yy",n.toString().slice(-2))},qe=(e,r)=>{try{const s=r.indexOf("dd"),a=r.indexOf("MM"),n=r.indexOf("yyyy")!==-1?r.indexOf("yyyy"):r.indexOf("yy"),d=r.indexOf("yyyy")!==-1?4:2,i=Number.parseInt(e.substring(s,s+2)),j=Number.parseInt(e.substring(a,a+2))-1;let p=Number.parseInt(e.substring(n,n+d));if(d===2){const V=new Date().getFullYear();p=Math.floor(V/100)*100+p}const m=new Date(p,j,i);return isNaN(m.getTime())?null:m}catch{return null}},T=({value:e,onChange:r,placeholder:s="Select date",disabled:a=!1,readOnly:n=!1,clearable:d=!0,format:i="MM/dd/yyyy",minDate:j,maxDate:p,disabledDates:m=[],className:V,error:k=!1,helperText:q})=>{const[N,f]=o.useState(""),[I,W]=o.useState(!1),[De,P]=o.useState(!1),E=o.useRef(null),O=o.useRef(null);o.useEffect(()=>{f(e?Oe(e,i):"")},[e,i]),o.useEffect(()=>{const l=u=>{E.current&&!E.current.contains(u.target)&&W(!1)};return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[]);const xe=l=>{const u=l.target.value;if(f(u),u.length===i.length){const F=qe(u,i);F&&r&&r(F)}},we=()=>{!a&&!n&&P(!0)},be=()=>{P(!1)},Se=()=>{!a&&!n&&(W(!I),!I&&O.current&&O.current.focus())},ve=l=>{r&&r(l),W(!1)},Ce=l=>{l.stopPropagation(),f(""),r&&r(void 0)};return t.jsxs(Te,{ref:E,className:V,children:[t.jsxs(je,{focused:De,disabled:a,error:k,onClick:Se,children:[t.jsx(Ve,{ref:O,value:N,onChange:xe,onFocus:we,onBlur:be,placeholder:s,disabled:a,readOnly:n}),d&&N&&!a&&!n&&t.jsx(Ie,{onClick:Ce,children:t.jsx(Pe,{})}),t.jsx(ke,{children:t.jsx(Ne,{})})]}),I&&t.jsx(We,{children:t.jsx(Me,{value:e,onChange:ve,minDate:j,disabledDates:m})}),q&&t.jsx(Ee,{error:k,children:q})]})},Ne=()=>t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M5 1V3M11 1V3M2 6H14M4 3H12C13.1046 3 14 3.89543 14 5V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V5C2 3.89543 2.89543 3 4 3Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Pe=()=>t.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M3 3L11 11M3 11L11 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});T.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{value:{required:!1,tsType:{name:"Date"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select date"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},format:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"MM/dd/yyyy"',computed:!1}},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"string"},description:""},disabledDates:{required:!1,tsType:{name:"Array",elements:[{name:"Date"}],raw:"Date[]"},description:"",defaultValue:{value:"[]",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:""}}};const $e={title:"Components/New/DatePicker",component:T,tags:["autodocs"],argTypes:{placeholder:{control:"text",defaultValue:"Select date"},disabled:{control:"boolean",defaultValue:!1},readOnly:{control:"boolean",defaultValue:!1},clearable:{control:"boolean",defaultValue:!0},format:{control:"text",defaultValue:"MM/dd/yyyy"},error:{control:"boolean",defaultValue:!1},helperText:{control:"text",defaultValue:""}}},g={args:{placeholder:"Select a date"}},y={args:{value:new Date(2024,5,15)}},h={args:{disabled:!0,value:new Date}},D={args:{readOnly:!0,value:new Date}},x={args:{value:new Date,clearable:!0}},w={args:{format:"dd-MM-yyyy"}},b={args:{minDate:new Date(2024,0,1),maxDate:new Date(2024,11,31)}},S={args:{disabledDates:[new Date(2024,5,10),new Date(2024,5,11),new Date(2024,5,12)]}},v={args:{error:!0,helperText:"Please select a valid date"}},C={render:()=>{const[e,r]=o.useState(new Date);return t.jsxs("div",{style:{maxWidth:"300px"},children:[t.jsx(T,{value:e,onChange:r}),t.jsxs("p",{style:{marginTop:"1rem",fontSize:"0.875rem"},children:["Selected Date: ",e?e.toDateString():"None"]})]})}},M={render:()=>{const[e,r]=o.useState(new Date),[s,a]=o.useState(!1),n=d=>{d<new Date?a(!0):a(!1),r(d)};return t.jsxs("div",{style:{maxWidth:"300px"},children:[t.jsx(T,{value:e,onChange:n,placeholder:"Choose future date",format:"yyyy-MM-dd",error:s,helperText:s?"Please select a future date":"Select any date in the future",minDate:new Date,clearable:!0}),t.jsxs("p",{style:{marginTop:"1rem",fontSize:"0.875rem"},children:["Selected Date: ",e?e.toISOString().split("T")[0]:"None"]})]})}};var z,B,R;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select a date'
  }
}`,...(R=(B=g.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var $,H,_;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    value: new Date(2024, 5, 15) // June 15, 2024
  }
}`,...(_=(H=y.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var Y,J,A;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: new Date()
  }
}`,...(A=(J=h.parameters)==null?void 0:J.docs)==null?void 0:A.source}}};var Z,G,K;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    value: new Date()
  }
}`,...(K=(G=D.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,U,X;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    value: new Date(),
    clearable: true
  }
}`,...(X=(U=x.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var ee,te,re;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    format: 'dd-MM-yyyy'
  }
}`,...(re=(te=w.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,ne,se;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    minDate: new Date(2024, 0, 1),
    // Jan 1, 2024
    maxDate: new Date(2024, 11, 31) // Dec 31, 2024
  }
}`,...(se=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,le,de;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    disabledDates: [new Date(2024, 5, 10), new Date(2024, 5, 11), new Date(2024, 5, 12)]
  }
}`,...(de=(le=S.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,ie,ue;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    error: true,
    helperText: 'Please select a valid date'
  }
}`,...(ue=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var pe,me,fe;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <div style={{
      maxWidth: '300px'
    }}>\r
        <DatePicker value={date} onChange={setDate} />\r
        <p style={{
        marginTop: '1rem',
        fontSize: '0.875rem'
      }}>\r
          Selected Date: {date ? date.toDateString() : 'None'}\r
        </p>\r
      </div>;
  }
}`,...(fe=(me=C.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var ge,ye,he;M.parameters={...M.parameters,docs:{...(ge=M.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [error, setError] = useState(false);
    const handleDateChange = (selectedDate: Date) => {
      if (selectedDate < new Date()) {
        setError(true);
      } else {
        setError(false);
      }
      setDate(selectedDate);
    };
    return <div style={{
      maxWidth: '300px'
    }}>\r
        <DatePicker value={date} onChange={handleDateChange} placeholder="Choose future date" format="yyyy-MM-dd" error={error} helperText={error ? 'Please select a future date' : 'Select any date in the future'} minDate={new Date()} clearable />\r
        <p style={{
        marginTop: '1rem',
        fontSize: '0.875rem'
      }}>\r
          Selected Date: {date ? date.toISOString().split('T')[0] : 'None'}\r
        </p>\r
      </div>;
  }
}`,...(he=(ye=M.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};const He=["Default","WithInitialValue","Disabled","ReadOnly","WithClearButton","WithCustomFormat","WithMinMaxDates","WithDisabledDates","WithErrorState","ControlledExample","FullCustomExample"];export{C as ControlledExample,g as Default,h as Disabled,M as FullCustomExample,D as ReadOnly,x as WithClearButton,w as WithCustomFormat,S as WithDisabledDates,v as WithErrorState,y as WithInitialValue,b as WithMinMaxDates,He as __namedExportsOrder,$e as default};
