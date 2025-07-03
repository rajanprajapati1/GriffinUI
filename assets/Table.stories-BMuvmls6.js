import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{l as n,d as o}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";const W={sm:n`
    font-size: 0.75rem;
    
    th, td {
      padding: 0.5rem;
    }
  `,md:n`
    font-size: 0.875rem;
    
    th, td {
      padding: 0.75rem 1rem;
    }
  `,lg:n`
    font-size: 1rem;
    
    th, td {
      padding: 1rem 1.25rem;
    }
  `},F={default:n`
    border-collapse: collapse;
    
    th {
      border-bottom: 1px solid #e5e7eb;
    }
    
    tbody tr:not(:last-child) td {
      border-bottom: 1px solid #e5e7eb;
    }
  `,striped:n`
    border-collapse: collapse;
    
    th {
      border-bottom: 1px solid #e5e7eb;
    }
    
    tbody tr:not(:last-child) td {
      border-bottom: 1px solid #e5e7eb;
    }
    
    tbody tr:nth-child(even) {
      background-color: #f9fafb;
    }
  `,bordered:n`
    border-collapse: collapse;
    border: 1px solid #e5e7eb;
    
    th, td {
      border: 1px solid #e5e7eb;
    }
  `,card:n`
    border-collapse: separate;
    border-spacing: 0;
    border-radius: 0.5rem;
    border: 1px solid #e5e7eb;
    overflow: hidden;
    
    thead {
      background-color: #f9fafb;
    }
    
    th {
      border-bottom: 1px solid #e5e7eb;
    }
    
    tbody tr:not(:last-child) td {
      border-bottom: 1px solid #e5e7eb;
    }
  `},$=o.table`
  width: 100%;
  ${a=>W[a.size]}
  ${a=>F[a.variant]}
  
  ${a=>a.hoverable&&n`
    tbody tr:hover {
      background-color: #f3f4f6;
    }
  `}
`,D=o.thead`
  background-color: #f9fafb;
  
  th {
    font-weight: 600;
    color: #374151;
    text-align: left;
    white-space: nowrap;
  }
`,I=o.tbody`
  color: #4b5563;
`,L=o.tfoot`
  background-color: #f9fafb;
  font-weight: 500;
  color: #374151;
  
  td {
    border-top: 1px solid #e5e7eb;
  }
`,_=o.tr`
  ${a=>a.selected&&n`
    background-color: #eff6ff !important;
  `}
`,q=o.td`
  text-align: ${a=>a.align||"left"};
`,O=o.th`
  text-align: ${a=>a.align||"left"};
`,G=({children:a,className:r})=>e.jsx(D,{className:r,children:a}),M=({children:a,className:r})=>e.jsx(I,{className:r,children:a}),U=({children:a,className:r})=>e.jsx(L,{className:r,children:a}),K=({children:a,selected:r,className:d})=>e.jsx(_,{selected:r,className:d,children:a}),Q=({children:a,align:r,className:d})=>e.jsx(q,{align:r,className:d,children:a}),X=({children:a,align:r,className:d})=>e.jsx(O,{align:r,className:d,children:a}),l=({children:a,variant:r="default",size:d="md",hoverable:J=!1,className:V})=>e.jsx($,{variant:r,size:d,hoverable:J,className:V,children:a});l.Header=G;l.Body=M;l.Footer=U;l.Row=K;l.Cell=Q;l.Head=X;l.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",optional:!1,type:null}],returns:null},{name:"Body",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",optional:!1,type:null}],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",optional:!1,type:null}],returns:null},{name:"Row",docblock:null,modifiers:["static"],params:[{name:"{ children, selected, className }",optional:!1,type:null}],returns:null},{name:"Cell",docblock:null,modifiers:["static"],params:[{name:"{ children, align, className }",optional:!1,type:null}],returns:null},{name:"Head",docblock:null,modifiers:["static"],params:[{name:"{ children, align, className }",optional:!1,type:null}],returns:null}],displayName:"TableComponent",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},hoverable:{defaultValue:{value:"false",computed:!1},required:!1}}};const ae={title:"Components/New/Table",component:l,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:["default","striped","bordered","card"]},defaultValue:"default"},size:{control:{type:"radio",options:["sm","md","lg"]},defaultValue:"md"},hoverable:{control:"boolean",defaultValue:!1}}},s={args:{variant:"default",size:"md",hoverable:!1},render:a=>e.jsx("div",{style:{padding:"2rem"},children:e.jsxs(l,{...a,children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.Head,{children:"Name"}),e.jsx(l.Head,{children:"Email"}),e.jsx(l.Head,{align:"right",children:"Role"})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Alice Johnson"}),e.jsx(l.Cell,{children:"alice@example.com"}),e.jsx(l.Cell,{align:"right",children:"Admin"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Bob Smith"}),e.jsx(l.Cell,{children:"bob@example.com"}),e.jsx(l.Cell,{align:"right",children:"Editor"})]}),e.jsxs(l.Row,{selected:!0,children:[e.jsx(l.Cell,{children:"Charlie Brown"}),e.jsx(l.Cell,{children:"charlie@example.com"}),e.jsx(l.Cell,{align:"right",children:"Viewer"})]})]})]})})},i={args:{variant:"striped",size:"md",hoverable:!0},render:a=>e.jsx("div",{style:{padding:"2rem"},children:e.jsxs(l,{...a,children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.Head,{children:"Name"}),e.jsx(l.Head,{children:"Email"}),e.jsx(l.Head,{children:"Role"})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Alice Johnson"}),e.jsx(l.Cell,{children:"alice@example.com"}),e.jsx(l.Cell,{children:"Admin"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Bob Smith"}),e.jsx(l.Cell,{children:"bob@example.com"}),e.jsx(l.Cell,{children:"Editor"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Charlie Brown"}),e.jsx(l.Cell,{children:"charlie@example.com"}),e.jsx(l.Cell,{children:"Viewer"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Dana White"}),e.jsx(l.Cell,{children:"dana@example.com"}),e.jsx(l.Cell,{children:"Guest"})]})]})]})})},c={args:{variant:"bordered",size:"lg",hoverable:!1},render:a=>e.jsx("div",{style:{padding:"2rem"},children:e.jsxs(l,{...a,children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.Head,{children:"Name"}),e.jsx(l.Head,{children:"Email"}),e.jsx(l.Head,{children:"Department"}),e.jsx(l.Head,{align:"center",children:"Status"})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Alice Johnson"}),e.jsx(l.Cell,{children:"alice@example.com"}),e.jsx(l.Cell,{children:"Product"}),e.jsx(l.Cell,{align:"center",children:e.jsx("span",{style:{color:"#10b981"},children:"Active"})})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Bob Smith"}),e.jsx(l.Cell,{children:"bob@example.com"}),e.jsx(l.Cell,{children:"Engineering"}),e.jsx(l.Cell,{align:"center",children:e.jsx("span",{style:{color:"#ef4444"},children:"Inactive"})})]})]}),e.jsx(l.Footer,{children:e.jsxs(l.Row,{children:[e.jsx(l.Cell,{colSpan:3,children:"Total Users"}),e.jsx(l.Cell,{align:"center",children:"2"})]})})]})})},t={args:{variant:"card",size:"md",hoverable:!0},render:a=>e.jsx("div",{style:{padding:"2rem"},children:e.jsxs(l,{...a,children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.Head,{children:"Product"}),e.jsx(l.Head,{align:"right",children:"Price"}),e.jsx(l.Head,{align:"center",children:"Stock"})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Laptop Pro"}),e.jsx(l.Cell,{align:"right",children:"$1,500.00"}),e.jsx(l.Cell,{align:"center",children:"In Stock"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Wireless Mouse"}),e.jsx(l.Cell,{align:"right",children:"$79.99"}),e.jsx(l.Cell,{align:"center",children:"Out of Stock"})]})]})]})})},b={args:{variant:"striped",size:"sm",hoverable:!0},render:a=>e.jsx("div",{style:{padding:"2rem"},children:e.jsxs(l,{...a,children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.Head,{children:"Name"}),e.jsx(l.Head,{children:"Email"})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Alice Johnson"}),e.jsx(l.Cell,{children:"alice@example.com"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Bob Smith"}),e.jsx(l.Cell,{children:"bob@example.com"})]})]})]})})},T={args:{variant:"default",size:"md",hoverable:!0},render:a=>e.jsx("div",{style:{padding:"2rem"},children:e.jsxs(l,{...a,children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.Head,{children:"Name"}),e.jsx(l.Head,{children:"Email"}),e.jsx(l.Head,{children:"Role"})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Alice Johnson"}),e.jsx(l.Cell,{children:"alice@example.com"}),e.jsx(l.Cell,{children:"Admin"})]}),e.jsxs(l.Row,{selected:!0,children:[e.jsx(l.Cell,{children:"Bob Smith"}),e.jsx(l.Cell,{children:"bob@example.com"}),e.jsx(l.Cell,{children:"Editor"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Charlie Brown"}),e.jsx(l.Cell,{children:"charlie@example.com"}),e.jsx(l.Cell,{children:"Viewer"})]})]})]})})},h={args:{variant:"card",size:"lg",hoverable:!0},render:a=>e.jsx("div",{style:{padding:"2rem"},children:e.jsxs(l,{...a,children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.Head,{children:"Customer"}),e.jsx(l.Head,{children:"Email"}),e.jsx(l.Head,{children:"Plan"}),e.jsx(l.Head,{align:"center",children:"Status"}),e.jsx(l.Head,{children:"Last Active"})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Alice Johnson"}),e.jsx(l.Cell,{children:"alice@example.com"}),e.jsx(l.Cell,{children:"Pro Plan"}),e.jsx(l.Cell,{align:"center",children:e.jsx("span",{style:{color:"#10b981",fontWeight:600},children:"Active"})}),e.jsx(l.Cell,{children:"2 days ago"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Bob Smith"}),e.jsx(l.Cell,{children:"bob@example.com"}),e.jsx(l.Cell,{children:"Free Plan"}),e.jsx(l.Cell,{align:"center",children:e.jsx("span",{style:{color:"#ef4444",fontWeight:600},children:"Suspended"})}),e.jsx(l.Cell,{children:"Never"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Charlie Brown"}),e.jsx(l.Cell,{children:"charlie@example.com"}),e.jsx(l.Cell,{children:"Premium"}),e.jsx(l.Cell,{align:"center",children:e.jsx("span",{style:{color:"#10b981",fontWeight:600},children:"Active"})}),e.jsx(l.Cell,{children:"Today"})]})]})]})})};var m,C,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'md',
    hoverable: false
  },
  render: args => <div style={{
    padding: '2rem'
  }}>\r
      <Table {...args}>\r
        <Table.Header>\r
          <Table.Row>\r
            <Table.Head>Name</Table.Head>\r
            <Table.Head>Email</Table.Head>\r
            <Table.Head align="right">Role</Table.Head>\r
          </Table.Row>\r
        </Table.Header>\r
        <Table.Body>\r
          <Table.Row>\r
            <Table.Cell>Alice Johnson</Table.Cell>\r
            <Table.Cell>alice@example.com</Table.Cell>\r
            <Table.Cell align="right">Admin</Table.Cell>\r
          </Table.Row>\r
          <Table.Row>\r
            <Table.Cell>Bob Smith</Table.Cell>\r
            <Table.Cell>bob@example.com</Table.Cell>\r
            <Table.Cell align="right">Editor</Table.Cell>\r
          </Table.Row>\r
          <Table.Row selected>\r
            <Table.Cell>Charlie Brown</Table.Cell>\r
            <Table.Cell>charlie@example.com</Table.Cell>\r
            <Table.Cell align="right">Viewer</Table.Cell>\r
          </Table.Row>\r
        </Table.Body>\r
      </Table>\r
    </div>
}`,...(x=(C=s.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var p,j,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'striped',
    size: 'md',
    hoverable: true
  },
  render: args => <div style={{
    padding: '2rem'
  }}>\r
      <Table {...args}>\r
        <Table.Header>\r
          <Table.Row>\r
            <Table.Head>Name</Table.Head>\r
            <Table.Head>Email</Table.Head>\r
            <Table.Head>Role</Table.Head>\r
          </Table.Row>\r
        </Table.Header>\r
        <Table.Body>\r
          <Table.Row>\r
            <Table.Cell>Alice Johnson</Table.Cell>\r
            <Table.Cell>alice@example.com</Table.Cell>\r
            <Table.Cell>Admin</Table.Cell>\r
          </Table.Row>\r
          <Table.Row>\r
            <Table.Cell>Bob Smith</Table.Cell>\r
            <Table.Cell>bob@example.com</Table.Cell>\r
            <Table.Cell>Editor</Table.Cell>\r
          </Table.Row>\r
          <Table.Row>\r
            <Table.Cell>Charlie Brown</Table.Cell>\r
            <Table.Cell>charlie@example.com</Table.Cell>\r
            <Table.Cell>Viewer</Table.Cell>\r
          </Table.Row>\r
          <Table.Row>\r
            <Table.Cell>Dana White</Table.Cell>\r
            <Table.Cell>dana@example.com</Table.Cell>\r
            <Table.Cell>Guest</Table.Cell>\r
          </Table.Row>\r
        </Table.Body>\r
      </Table>\r
    </div>
}`,...(g=(j=i.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var u,w,H;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'bordered',
    size: 'lg',
    hoverable: false
  },
  render: args => <div style={{
    padding: '2rem'
  }}>\r
      <Table {...args}>\r
        <Table.Header>\r
          <Table.Row>\r
            <Table.Head>Name</Table.Head>\r
            <Table.Head>Email</Table.Head>\r
            <Table.Head>Department</Table.Head>\r
            <Table.Head align="center">Status</Table.Head>\r
          </Table.Row>\r
        </Table.Header>\r
        <Table.Body>\r
          <Table.Row>\r
            <Table.Cell>Alice Johnson</Table.Cell>\r
            <Table.Cell>alice@example.com</Table.Cell>\r
            <Table.Cell>Product</Table.Cell>\r
            <Table.Cell align="center">\r
              <span style={{
              color: '#10b981'
            }}>Active</span>\r
            </Table.Cell>\r
          </Table.Row>\r
          <Table.Row>\r
            <Table.Cell>Bob Smith</Table.Cell>\r
            <Table.Cell>bob@example.com</Table.Cell>\r
            <Table.Cell>Engineering</Table.Cell>\r
            <Table.Cell align="center">\r
              <span style={{
              color: '#ef4444'
            }}>Inactive</span>\r
            </Table.Cell>\r
          </Table.Row>\r
        </Table.Body>\r
        <Table.Footer>\r
          <Table.Row>\r
            <Table.Cell colSpan={3}>Total Users</Table.Cell>\r
            <Table.Cell align="center">2</Table.Cell>\r
          </Table.Row>\r
        </Table.Footer>\r
      </Table>\r
    </div>
}`,...(H=(w=c.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var R,f,y;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    size: 'md',
    hoverable: true
  },
  render: args => <div style={{
    padding: '2rem'
  }}>\r
      <Table {...args}>\r
        <Table.Header>\r
          <Table.Row>\r
            <Table.Head>Product</Table.Head>\r
            <Table.Head align="right">Price</Table.Head>\r
            <Table.Head align="center">Stock</Table.Head>\r
          </Table.Row>\r
        </Table.Header>\r
        <Table.Body>\r
          <Table.Row>\r
            <Table.Cell>Laptop Pro</Table.Cell>\r
            <Table.Cell align="right">$1,500.00</Table.Cell>\r
            <Table.Cell align="center">In Stock</Table.Cell>\r
          </Table.Row>\r
          <Table.Row>\r
            <Table.Cell>Wireless Mouse</Table.Cell>\r
            <Table.Cell align="right">$79.99</Table.Cell>\r
            <Table.Cell align="center">Out of Stock</Table.Cell>\r
          </Table.Row>\r
        </Table.Body>\r
      </Table>\r
    </div>
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,S,B;b.parameters={...b.parameters,docs:{...(v=b.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'striped',
    size: 'sm',
    hoverable: true
  },
  render: args => <div style={{
    padding: '2rem'
  }}>\r
      <Table {...args}>\r
        <Table.Header>\r
          <Table.Row>\r
            <Table.Head>Name</Table.Head>\r
            <Table.Head>Email</Table.Head>\r
          </Table.Row>\r
        </Table.Header>\r
        <Table.Body>\r
          <Table.Row>\r
            <Table.Cell>Alice Johnson</Table.Cell>\r
            <Table.Cell>alice@example.com</Table.Cell>\r
          </Table.Row>\r
          <Table.Row>\r
            <Table.Cell>Bob Smith</Table.Cell>\r
            <Table.Cell>bob@example.com</Table.Cell>\r
          </Table.Row>\r
        </Table.Body>\r
      </Table>\r
    </div>
}`,...(B=(S=b.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var A,E,z;T.parameters={...T.parameters,docs:{...(A=T.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'md',
    hoverable: true
  },
  render: args => <div style={{
    padding: '2rem'
  }}>\r
      <Table {...args}>\r
        <Table.Header>\r
          <Table.Row>\r
            <Table.Head>Name</Table.Head>\r
            <Table.Head>Email</Table.Head>\r
            <Table.Head>Role</Table.Head>\r
          </Table.Row>\r
        </Table.Header>\r
        <Table.Body>\r
          <Table.Row>\r
            <Table.Cell>Alice Johnson</Table.Cell>\r
            <Table.Cell>alice@example.com</Table.Cell>\r
            <Table.Cell>Admin</Table.Cell>\r
          </Table.Row>\r
          <Table.Row selected>\r
            <Table.Cell>Bob Smith</Table.Cell>\r
            <Table.Cell>bob@example.com</Table.Cell>\r
            <Table.Cell>Editor</Table.Cell>\r
          </Table.Row>\r
          <Table.Row>\r
            <Table.Cell>Charlie Brown</Table.Cell>\r
            <Table.Cell>charlie@example.com</Table.Cell>\r
            <Table.Cell>Viewer</Table.Cell>\r
          </Table.Row>\r
        </Table.Body>\r
      </Table>\r
    </div>
}`,...(z=(E=T.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var N,k,P;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    size: 'lg',
    hoverable: true
  },
  render: args => <div style={{
    padding: '2rem'
  }}>\r
      <Table {...args}>\r
        <Table.Header>\r
          <Table.Row>\r
            <Table.Head>Customer</Table.Head>\r
            <Table.Head>Email</Table.Head>\r
            <Table.Head>Plan</Table.Head>\r
            <Table.Head align="center">Status</Table.Head>\r
            <Table.Head>Last Active</Table.Head>\r
          </Table.Row>\r
        </Table.Header>\r
        <Table.Body>\r
          <Table.Row>\r
            <Table.Cell>Alice Johnson</Table.Cell>\r
            <Table.Cell>alice@example.com</Table.Cell>\r
            <Table.Cell>Pro Plan</Table.Cell>\r
            <Table.Cell align="center">\r
              <span style={{
              color: '#10b981',
              fontWeight: 600
            }}>Active</span>\r
            </Table.Cell>\r
            <Table.Cell>2 days ago</Table.Cell>\r
          </Table.Row>\r
          <Table.Row>\r
            <Table.Cell>Bob Smith</Table.Cell>\r
            <Table.Cell>bob@example.com</Table.Cell>\r
            <Table.Cell>Free Plan</Table.Cell>\r
            <Table.Cell align="center">\r
              <span style={{
              color: '#ef4444',
              fontWeight: 600
            }}>Suspended</span>\r
            </Table.Cell>\r
            <Table.Cell>Never</Table.Cell>\r
          </Table.Row>\r
          <Table.Row>\r
            <Table.Cell>Charlie Brown</Table.Cell>\r
            <Table.Cell>charlie@example.com</Table.Cell>\r
            <Table.Cell>Premium</Table.Cell>\r
            <Table.Cell align="center">\r
              <span style={{
              color: '#10b981',
              fontWeight: 600
            }}>Active</span>\r
            </Table.Cell>\r
            <Table.Cell>Today</Table.Cell>\r
          </Table.Row>\r
        </Table.Body>\r
      </Table>\r
    </div>
}`,...(P=(k=h.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};const re=["Default","StripedTable","BorderedTable","CardStyleTable","SmallTable","WithSelectedRow","FullCustomExample"];export{c as BorderedTable,t as CardStyleTable,s as Default,h as FullCustomExample,b as SmallTable,i as StripedTable,T as WithSelectedRow,re as __namedExportsOrder,ae as default};
