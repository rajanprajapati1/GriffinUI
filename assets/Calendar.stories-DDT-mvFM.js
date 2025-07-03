import{j as u}from"./jsx-runtime-Cf8x2fCZ.js";import{r as J}from"./index-BlmOqGMO.js";import{C as D}from"./Calendar-DU0hjEnd.js";import"./index-yBjzXJbu.js";import"./styled-components.browser.esm-B51KuXqp.js";const B={title:"Components/New/Calendar",component:D,tags:["autodocs"],argTypes:{value:{control:"date",description:"Selected date"},minDate:{control:"date",description:"Minimum selectable date"},maxDate:{control:"date",description:"Maximum selectable date"},disabledDates:{control:"object",description:"Array of disabled dates"},showOutsideDays:{control:"boolean",defaultValue:!0},weekStartsOn:{control:{type:"number",min:0,max:6,step:1},defaultValue:0}}},s={args:{showOutsideDays:!0,weekStartsOn:0}},r={render:()=>{const[e,l]=J.useState(new Date(2024,5,15));return u.jsx(D,{value:e,onChange:a=>l(a)})}},n={args:{minDate:new Date(2024,4,1),maxDate:new Date(2024,6,31)}},o={render:()=>{const e=[new Date(2024,5,1),new Date(2024,5,4),new Date(2024,5,7)];return u.jsx(D,{disabledDates:e})}},d={args:{weekStartsOn:1}},c={args:{showOutsideDays:!1}},i={render:()=>{const[e,l]=J.useState(new Date),a=[],V=new Date;for(let t=1;t<=5;t++){const m=new Date;m.setDate(V.getDate()+t),a.push(m)}return u.jsx(D,{value:e,onChange:t=>l(t),disabledDates:a,minDate:new Date(2024,0,1),maxDate:new Date(2024,11,31),showOutsideDays:!1,weekStartsOn:1})}};var p,w,S;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    showOutsideDays: true,
    weekStartsOn: 0
  }
}`,...(S=(w=s.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var g,y,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [selectedDate, setSelectedDate] = useState(new Date(2024, 5, 15)); // June 15, 2024
    return <Calendar value={selectedDate} onChange={date => setSelectedDate(date)} />;
  }
}`,...(h=(y=r.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var O,b,x;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    minDate: new Date(2024, 4, 1),
    // May 1, 2024
    maxDate: new Date(2024, 6, 31) // July 31, 2024
  }
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var f,C,k;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const disabledDates = [new Date(2024, 5, 1), new Date(2024, 5, 4), new Date(2024, 5, 7)];
    return <Calendar disabledDates={disabledDates} />;
  }
}`,...(k=(C=o.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var M,W,j;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    weekStartsOn: 1
  }
}`,...(j=(W=d.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var v,A,E;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    showOutsideDays: false
  }
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var z,F,H;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const disabledDates = [];
    const today = new Date();
    for (let i = 1; i <= 5; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);
      disabledDates.push(d);
    }
    return <Calendar value={selectedDate} onChange={date => setSelectedDate(date)} disabledDates={disabledDates} minDate={new Date(2024, 0, 1)} maxDate={new Date(2024, 11, 31)} showOutsideDays={false} weekStartsOn={1} />;
  }
}`,...(H=(F=i.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};const G=["Default","WithSelectedDate","WithMinAndMaxDate","WithDisabledDates","WeekStartsOnMonday","HideOutsideDays","FullyCustomized"];export{s as Default,i as FullyCustomized,c as HideOutsideDays,d as WeekStartsOnMonday,o as WithDisabledDates,n as WithMinAndMaxDate,r as WithSelectedDate,G as __namedExportsOrder,B as default};
