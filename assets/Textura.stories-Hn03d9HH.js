import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{l as r,d as q}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";const D={h1:r`font-size: 2.5rem; font-weight: 700; line-height: 1.2;`,h2:r`font-size: 2rem; font-weight: 600; line-height: 1.3;`,h3:r`font-size: 1.75rem; font-weight: 600; line-height: 1.35;`,h4:r`font-size: 1.5rem; font-weight: 500; line-height: 1.4;`,h5:r`font-size: 1.25rem; font-weight: 500; line-height: 1.5;`,h6:r`font-size: 1rem; font-weight: 500; line-height: 1.6;`,subtitle1:r`font-size: 1rem; font-weight: 400;`,subtitle2:r`font-size: 0.875rem; font-weight: 400;`,body1:r`font-size: 1rem; font-weight: 400;`,body2:r`font-size: 0.875rem; font-weight: 400;`,caption:r`font-size: 0.75rem; font-weight: 400;`,overline:r`font-size: 0.75rem; font-weight: 500; text-transform: uppercase; letter-spacing: 1px;`},R=q.p`
  margin: 0;
  color: ${({color:a})=>a||"inherit"};
  text-align: ${({align:a})=>a||"inherit"};
  ${({variant:a})=>a&&D[a]}
  ${({gutterBottom:a})=>a&&r`margin-bottom: 0.35em;`}
  ${({noWrap:a})=>a&&r`white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`}
  ${({paragraph:a})=>a&&r`margin-bottom: 1em;`}
`,t=({as:a,children:W,...C})=>e.jsx(R,{as:a,...C,children:W});t.__docgenInfo={description:"",methods:[],displayName:"Textura",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'\r
| 'subtitle1' | 'subtitle2'\r
| 'body1' | 'body2'\r
| 'caption' | 'overline'`,elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'subtitle1'"},{name:"literal",value:"'subtitle2'"},{name:"literal",value:"'body1'"},{name:"literal",value:"'body2'"},{name:"literal",value:"'caption'"},{name:"literal",value:"'overline'"}]},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center' | 'justify' | 'inherit'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"},{name:"literal",value:"'justify'"},{name:"literal",value:"'inherit'"}]},description:""},gutterBottom:{required:!1,tsType:{name:"boolean"},description:""},noWrap:{required:!1,tsType:{name:"boolean"},description:""},paragraph:{required:!1,tsType:{name:"boolean"},description:""},color:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},as:{required:!1,tsType:{name:"T"},description:""}}};const A={title:"Components/ui/Textura",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","overline"]},align:{control:"radio",options:["left","right","center","justify","inherit"]},gutterBottom:{control:"boolean"},noWrap:{control:"boolean"},paragraph:{control:"boolean"},color:{control:"color"},children:{control:"text"},as:{control:"select",options:["p","span","div","h1","h2","h3","h4","h5","h6"]}},args:{variant:"body1",align:"inherit",gutterBottom:!1,noWrap:!1,paragraph:!1,color:"inherit",children:"The quick brown fox jumps over the lazy dog.",as:"p"}},i={},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[e.jsx(t,{variant:"h1",children:"Heading 1 - h1"}),e.jsx(t,{variant:"h2",children:"Heading 2 - h2"}),e.jsx(t,{variant:"h3",children:"Heading 3 - h3"}),e.jsx(t,{variant:"h4",children:"Heading 4 - h4"}),e.jsx(t,{variant:"h5",children:"Heading 5 - h5"}),e.jsx(t,{variant:"h6",children:"Heading 6 - h6"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",maxWidth:500},children:[e.jsx(t,{variant:"subtitle1",children:"Subtitle 1"}),e.jsx(t,{variant:"subtitle2",children:"Subtitle 2"}),e.jsx(t,{variant:"body1",children:"Body 1 - default body text"}),e.jsx(t,{variant:"body2",children:"Body 2 - smaller body text"}),e.jsx(t,{variant:"caption",children:"Caption text"}),e.jsx(t,{variant:"overline",children:"Overline text"})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:400},children:[e.jsx(t,{align:"left",gutterBottom:!0,children:"Left aligned text"}),e.jsx(t,{align:"center",gutterBottom:!0,children:"Center aligned text"}),e.jsx(t,{align:"right",gutterBottom:!0,children:"Right aligned text"}),e.jsx(t,{align:"justify",gutterBottom:!0,children:"Justified text — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate."})]})},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{noWrap:!0,style:{maxWidth:200,border:"1px solid #ddd",padding:"0.5rem"},children:"This is a very long text that will not wrap but instead show an ellipsis at the end"}),e.jsx(t,{paragraph:!0,children:"This text is a paragraph with margin-bottom applied. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."})]})},d={args:{variant:"h4",children:"Colored text",color:"#6366f1"}};var u,h,c;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(c=(h=i.parameters)==null?void 0:h.docs)==null?void 0:c.source}}};var m,p,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  }}>\r
      <Textura variant="h1">Heading 1 - h1</Textura>\r
      <Textura variant="h2">Heading 2 - h2</Textura>\r
      <Textura variant="h3">Heading 3 - h3</Textura>\r
      <Textura variant="h4">Heading 4 - h4</Textura>\r
      <Textura variant="h5">Heading 5 - h5</Textura>\r
      <Textura variant="h6">Heading 6 - h6</Textura>\r
    </div>
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var x,f,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    maxWidth: 500
  }}>\r
      <Textura variant="subtitle1">Subtitle 1</Textura>\r
      <Textura variant="subtitle2">Subtitle 2</Textura>\r
      <Textura variant="body1">Body 1 - default body text</Textura>\r
      <Textura variant="body2">Body 2 - smaller body text</Textura>\r
      <Textura variant="caption">Caption text</Textura>\r
      <Textura variant="overline">Overline text</Textura>\r
    </div>
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var T,y,b;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: 400
  }}>\r
      <Textura align="left" gutterBottom>\r
        Left aligned text\r
      </Textura>\r
      <Textura align="center" gutterBottom>\r
        Center aligned text\r
      </Textura>\r
      <Textura align="right" gutterBottom>\r
        Right aligned text\r
      </Textura>\r
      <Textura align="justify" gutterBottom>\r
        Justified text — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent\r
        vulputate.\r
      </Textura>\r
    </div>
}`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var j,w,S;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <>\r
      <Textura noWrap style={{
      maxWidth: 200,
      border: '1px solid #ddd',
      padding: '0.5rem'
    }}>\r
        This is a very long text that will not wrap but instead show an ellipsis at the end\r
      </Textura>\r
      <Textura paragraph>\r
        This text is a paragraph with margin-bottom applied. Lorem ipsum dolor sit amet,\r
        consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.\r
      </Textura>\r
    </>
}`,...(S=(w=s.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var B,H,z;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'h4',
    children: 'Colored text',
    color: '#6366f1' // Indigo
  }
}`,...(z=(H=d.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};const I=["Default","Headings","VariantsShowcase","TextAlignment","NoWrapAndParagraph","CustomColors"];export{d as CustomColors,i as Default,n as Headings,s as NoWrapAndParagraph,l as TextAlignment,o as VariantsShowcase,I as __namedExportsOrder,A as default};
