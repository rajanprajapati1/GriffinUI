import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{r as w}from"./index-BlmOqGMO.js";import{d as a,l as d}from"./styled-components.browser.esm-B51KuXqp.js";const E=a.div`
  width: 100%;
  max-width: 300px;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  font-family: inherit;
`,J=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,R=a.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,P=a.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
`,Y=a.button`
  background: transparent;
  border: none;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  color: #4b5563;
  
  &:hover {
    background-color: #f3f4f6;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,_=a.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 0.5rem;
`,G=a.div`
  text-align: center;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  padding: 0.5rem 0;
`,H=a.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
`,b=a.button`
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  border: none;
  background: transparent;
  cursor: pointer;
  position: relative;
  
  ${o=>o.isToday&&d`
    &::after {
      content: '';
      position: absolute;
      bottom: 4px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: #3b82f6;
    }
  `}
  
  ${o=>o.isSelected&&d`
    background-color: #3b82f6;
    color: white;
    font-weight: 500;
    
    &:hover {
      background-color: #2563eb;
    }
  `}
  
  ${o=>!o.isSelected&&d`
    &:hover {
      background-color: #f3f4f6;
    }
  `}
  
  ${o=>o.isOutsideMonth&&d`
    color: #9ca3af;
  `}
  
  ${o=>o.isDisabled&&d`
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  `}
`,X=({value:o,onChange:v,minDate:M,maxDate:j,disabledDates:$=[],className:N,showOutsideDays:k=!0,weekStartsOn:h=0,locale:U=void 0})=>{const[i,C]=w.useState(o||new Date),[c,p]=w.useState(new Date(i));w.useEffect(()=>{o&&(C(o),p(new Date(o)))},[o]);const T=(e,t)=>new Date(e,t+1,0).getDate(),O=(e,t)=>new Date(e,t,1).getDay(),m=e=>{const t=new Date;return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()},g=e=>i&&e.getDate()===i.getDate()&&e.getMonth()===i.getMonth()&&e.getFullYear()===i.getFullYear(),u=e=>{const t=$.some(l=>e.getDate()===l.getDate()&&e.getMonth()===l.getMonth()&&e.getFullYear()===l.getFullYear()),y=M&&e<M,S=j&&e>j;return t||y||S},W=()=>{p(e=>{const t=new Date(e);return t.setMonth(t.getMonth()-1),t})},A=()=>{p(e=>{const t=new Date(e);return t.setMonth(t.getMonth()+1),t})},f=e=>{u(e)||(C(e),v&&v(e))},I=()=>{const e=c.getFullYear(),t=c.getMonth(),y=T(e,t),l=(O(e,t)-h+7)%7,q=T(e,t-1),D=[];for(let r=q-l+1;r<=q;r++){const s=new Date(e,t-1,r);D.push(n.jsx(b,{isOutsideMonth:!0,isDisabled:u(s),onClick:()=>f(s),isToday:m(s),isSelected:g(s),children:k?r:""},`prev-${r}`))}const x=[];for(let r=1;r<=y;r++){const s=new Date(e,t,r);x.push(n.jsx(b,{isDisabled:u(s),onClick:()=>f(s),isToday:m(s),isSelected:g(s),children:r},`current-${r}`))}const L=[],z=42-(D.length+x.length);for(let r=1;r<=z;r++){const s=new Date(e,t+1,r);L.push(n.jsx(b,{isOutsideMonth:!0,isDisabled:u(s),onClick:()=>f(s),isToday:m(s),isSelected:g(s),children:k?r:""},`next-${r}`))}return[...D,...x,...L]},F=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],V=[...F.slice(h),...F.slice(0,h)],B=["January","February","March","April","May","June","July","August","September","October","November","December"];return n.jsxs(E,{className:N,children:[n.jsxs(J,{children:[n.jsx(R,{children:n.jsxs(P,{children:[B[c.getMonth()]," ",c.getFullYear()]})}),n.jsxs("div",{children:[n.jsx(Y,{onClick:W,children:n.jsx(K,{})}),n.jsx(Y,{onClick:A,children:n.jsx(Q,{})})]})]}),n.jsx(_,{children:V.map(e=>n.jsx(G,{children:e},e))}),n.jsx(H,{children:I()})]})},K=()=>n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M10 12L6 8L10 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Q=()=>n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M6 12L10 8L6 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});X.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{value:{required:!1,tsType:{name:"Date"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},disabledDates:{required:!1,tsType:{name:"Array",elements:[{name:"Date"}],raw:"Date[]"},description:"",defaultValue:{value:"[]",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},showOutsideDays:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},weekStartsOn:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"",defaultValue:{value:"0",computed:!1}},locale:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"undefined",computed:!0}}}};export{X as C};
