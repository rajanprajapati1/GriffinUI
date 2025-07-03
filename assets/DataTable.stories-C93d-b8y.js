import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as u,R as _}from"./index-BlmOqGMO.js";import{d as c,l as $}from"./styled-components.browser.esm-B51KuXqp.js";import"./index-yBjzXJbu.js";const ye=c.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
`,Se=c.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
`,Re=c.thead`
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
`,M=c.th`
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: 600;
  color: #374151;
  white-space: nowrap;
  ${a=>a.width&&`width: ${a.width};`}
  
  ${a=>a.sortable&&$`
    cursor: pointer;
    user-select: none;
    
    &:hover {
      background-color: #f3f4f6;
    }
  `}
`,xe=c.tbody`
  & tr:nth-child(even) {
    background-color: #f9fafb;
  }
`,ve=c.tr`
  border-bottom: 1px solid #e5e7eb;
  
  &:last-child {
    border-bottom: none;
  }
  
  ${a=>a.clickable&&$`
    cursor: pointer;
    
    &:hover {
      background-color: #f3f4f6;
    }
  `}
  
  ${a=>a.selected&&$`
    background-color: #eff6ff !important;
  `}
`,F=c.td`
  padding: 0.75rem 1rem;
  color: #4b5563;
`,ke=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-top: 1px solid #e5e7eb;
  background-color: #f9fafb;
`,Te=c.div`
  font-size: 0.875rem;
  color: #6b7280;
`,je=c.div`
  display: flex;
  gap: 0.25rem;
`,P=c.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem;
  border: 1px solid #e5e7eb;
  background-color: ${a=>a.active?"#3b82f6":"white"};
  color: ${a=>a.active?"white":"#4b5563"};
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover:not(:disabled) {
    background-color: ${a=>a.active?"#2563eb":"#f3f4f6"};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,H=c.input.attrs({type:"checkbox"})`
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #d1d5db;
  cursor: pointer;
`;function y({data:a,columns:d,pagination:i=!1,pageSize:m=10,sortable:f=!1,selectable:b=!1,onRowClick:w,onSelectionChange:p,className:o}){const[l,S]=u.useState(1),[n,fe]=u.useState({key:null,direction:null}),[R,W]=u.useState([]),V=_.useMemo(()=>{const e=[...a];return n.key&&n.direction&&e.sort((t,s)=>{const g=n.key,A=t[g],q=s[g];return A===q?0:n.direction==="asc"?A>q?1:-1:A<q?1:-1}),e},[a,n]),x=_.useMemo(()=>{if(!i)return V;const e=(l-1)*m;return V.slice(e,e+m)},[V,i,l,m]),B=Math.ceil(a.length/m),pe=e=>{if(!f||!e.sortable)return;const t=typeof e.accessor=="function"?null:e.accessor;if(!t)return;let s="asc";n.key===t&&(n.direction==="asc"?s="desc":n.direction==="desc"&&(s=null)),fe({key:t,direction:s})},K=e=>{S(e)},ge=(e,t)=>{let s;t?s=[...R,e]:s=R.filter(g=>g!==e),W(s),p&&p(s)},be=e=>{const s=e.target.checked?[...x]:[];W(s),p&&p(s)},I=e=>R.some(t=>JSON.stringify(t)===JSON.stringify(e)),we=e=>{if(!f||!e.sortable||typeof e.accessor=="function")return null;const t=e.accessor;return n.key!==t?r.jsx("span",{style:{marginLeft:"0.5rem",opacity:.3},children:"↕"}):r.jsx("span",{style:{marginLeft:"0.5rem"},children:n.direction==="asc"?"↑":n.direction==="desc"?"↓":"↕"})};return r.jsx("div",{className:o,children:r.jsxs(ye,{children:[r.jsxs(Se,{children:[r.jsx(Re,{children:r.jsxs("tr",{children:[b&&r.jsx(M,{width:"40px",children:r.jsx(H,{checked:R.length===x.length&&x.length>0,onChange:be})}),d.map((e,t)=>r.jsxs(M,{width:e.width,sortable:f&&e.sortable!==!1&&typeof e.accessor!="function",onClick:()=>pe(e),children:[e.header,we(e)]},t))]})}),r.jsx(xe,{children:x.map((e,t)=>r.jsxs(ve,{clickable:!!w,selected:I(e),onClick:()=>w&&w(e),children:[b&&r.jsx(F,{onClick:s=>s.stopPropagation(),children:r.jsx(H,{checked:I(e),onChange:s=>ge(e,s.target.checked)})}),d.map((s,g)=>r.jsx(F,{children:s.cell?s.cell(e):typeof s.accessor=="function"?s.accessor(e):e[s.accessor]},g))]},t))})]}),i&&B>1&&r.jsxs(ke,{children:[r.jsxs(Te,{children:["Showing ",(l-1)*m+1," to ",Math.min(l*m,a.length)," of"," ",a.length," entries"]}),r.jsxs(je,{children:[r.jsx(P,{onClick:()=>K(l-1),disabled:l===1,children:"←"}),Array.from({length:B},(e,t)=>t+1).map(e=>r.jsx(P,{active:e===l,onClick:()=>K(e),children:e},e)),r.jsx(P,{onClick:()=>K(l+1),disabled:l===B,children:"→"})]})]})]})})}y.__docgenInfo={description:"",methods:[],displayName:"DataTable",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  header: string
  accessor: keyof T | ((row: T) => React.ReactNode)
  width?: string
  sortable?: boolean
  cell?: (row: T) => React.ReactNode
}`,signature:{properties:[{key:"header",value:{name:"string",required:!0}},{key:"accessor",value:{name:"union",raw:"keyof T | ((row: T) => React.ReactNode)",elements:[{name:"T"},{name:"unknown"}],required:!0}},{key:"width",value:{name:"string",required:!1}},{key:"sortable",value:{name:"boolean",required:!1}},{key:"cell",value:{name:"signature",type:"function",raw:"(row: T) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}}]}}],raw:"Column<T>[]"},description:""},pagination:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},pageSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},sortable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T) => void",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"void"}}},description:""},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedRows: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"selectedRows"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},rowKey:{required:!0,tsType:{name:"T"},description:""}}};const Ve={title:"Components/New/DataTable",component:y,tags:["autodocs"],argTypes:{pagination:{control:"boolean",defaultValue:!0},pageSize:{control:{type:"number",min:1,max:100},defaultValue:5},sortable:{control:"boolean",defaultValue:!0},selectable:{control:"boolean",defaultValue:!0}}},h=[{id:1,name:"Alice Johnson",email:"alice@example.com",role:"Admin",status:"Active"},{id:2,name:"Bob Smith",email:"bob@example.com",role:"Editor",status:"Active"},{id:3,name:"Charlie Brown",email:"charlie@example.com",role:"Viewer",status:"Inactive"},{id:4,name:"Dana White",email:"dana@example.com",role:"Admin",status:"Active"},{id:5,name:"Ethan Hunt",email:"ethan@example.com",role:"Editor",status:"Inactive"},{id:6,name:"Fiona Carter",email:"fiona@example.com",role:"Viewer",status:"Active"}],v={args:{columns:[{header:"Name",accessor:"name"},{header:"Email",accessor:"email"},{header:"Role",accessor:"role"},{header:"Status",accessor:"status"}],data:h,rowKey:"id"}},k={args:{columns:[{header:"Name",accessor:"name",cell:a=>r.jsx("strong",{children:a.name})},{header:"Email",accessor:"email",cell:a=>r.jsx("a",{href:`mailto:${a.email}`,style:{color:"#3b82f6"},children:a.email})},{header:"Role",accessor:"role"},{header:"Status",accessor:"status",cell:a=>r.jsx("span",{style:{color:a.status==="Active"?"#10b981":"#ef4444",fontWeight:600},children:a.status})}],data:h,rowKey:"id"}},T={args:{pagination:!1,columns:[{header:"Name",accessor:"name"},{header:"Email",accessor:"email"},{header:"Role",accessor:"role"},{header:"Status",accessor:"status"}],data:h,rowKey:"id"}},j={args:{sortable:!1,columns:[{header:"Name",accessor:"name"},{header:"Email",accessor:"email"},{header:"Role",accessor:"role"},{header:"Status",accessor:"status"}],data:h,rowKey:"id"}},C={args:{selectable:!1,columns:[{header:"Name",accessor:"name"},{header:"Email",accessor:"email"},{header:"Role",accessor:"role"},{header:"Status",accessor:"status"}],data:h,rowKey:"id"}},D={render:()=>{const[a,d]=u.useState(null);return r.jsxs("div",{children:[a&&r.jsxs("div",{style:{marginBottom:"1rem",padding:"0.75rem",backgroundColor:"#eff6ff",borderRadius:"0.5rem"},children:["Selected: ",r.jsx("strong",{children:a.name})]}),r.jsx(y,{columns:[{header:"Name",accessor:"name"},{header:"Email",accessor:"email"},{header:"Role",accessor:"role"},{header:"Status",accessor:"status"}],data:h,rowKey:"id",onRowClick:i=>d(i)})]})}},N={render:()=>{const[a,d]=u.useState([]);return r.jsxs("div",{children:[r.jsxs("div",{style:{marginBottom:"1rem"},children:[r.jsx("strong",{children:"Selected:"})," ",a.length," row(s)"]}),r.jsx(y,{columns:[{header:"Name",accessor:"name"},{header:"Email",accessor:"email"},{header:"Role",accessor:"role"},{header:"Status",accessor:"status"}],data:h,rowKey:"id",selectedRows:a,onSelectionChange:d})]})}},E={render:()=>{const[a,d]=u.useState([]),[i,m]=u.useState(null),[f,b]=u.useState("asc"),w=[...h].sort((o,l)=>{if(!i)return 0;const S=o[i],n=l[i];return S>n?f==="asc"?1:-1:S<n?f==="asc"?-1:1:0}),p=o=>{o.accessor===i?b(f==="asc"?"desc":"asc"):(m(o.accessor),b("asc"))};return r.jsx(y,{columns:[{header:"Name",accessor:"name",sortable:!0,width:"200px"},{header:"Email",accessor:"email",cell:o=>r.jsx("a",{href:`mailto:${o.email}`,style:{color:"#3b82f6"},children:o.email})},{header:"Role",accessor:"role",sortable:!0},{header:"Status",accessor:"status",cell:o=>r.jsx("span",{style:{color:o.status==="Active"?"#10b981":"#ef4444",fontWeight:600},children:o.status})}],data:w,rowKey:"id",sortable:!0,onSort:o=>{o.key&&p({accessor:o.key})},selectedRows:a,onSelectionChange:d,pageSize:3,pagination:!0})}};var J,O,z;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    columns: [{
      header: 'Name',
      accessor: 'name'
    }, {
      header: 'Email',
      accessor: 'email'
    }, {
      header: 'Role',
      accessor: 'role'
    }, {
      header: 'Status',
      accessor: 'status'
    }],
    data: sampleData,
    rowKey: 'id'
  }
}`,...(z=(O=v.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var L,G,Q;k.parameters={...k.parameters,docs:{...(L=k.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    columns: [{
      header: 'Name',
      accessor: 'name',
      cell: row => <strong>{row.name}</strong>
    }, {
      header: 'Email',
      accessor: 'email',
      cell: row => <a href={\`mailto:\${row.email}\`} style={{
        color: '#3b82f6'
      }}>\r
            {row.email}\r
          </a>
    }, {
      header: 'Role',
      accessor: 'role'
    }, {
      header: 'Status',
      accessor: 'status',
      cell: row => <span style={{
        color: row.status === 'Active' ? '#10b981' : '#ef4444',
        fontWeight: 600
      }}>\r
            {row.status}\r
          </span>
    }],
    data: sampleData,
    rowKey: 'id'
  }
}`,...(Q=(G=k.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var U,X,Y;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    pagination: false,
    columns: [{
      header: 'Name',
      accessor: 'name'
    }, {
      header: 'Email',
      accessor: 'email'
    }, {
      header: 'Role',
      accessor: 'role'
    }, {
      header: 'Status',
      accessor: 'status'
    }],
    data: sampleData,
    rowKey: 'id'
  }
}`,...(Y=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    sortable: false,
    columns: [{
      header: 'Name',
      accessor: 'name'
    }, {
      header: 'Email',
      accessor: 'email'
    }, {
      header: 'Role',
      accessor: 'role'
    }, {
      header: 'Status',
      accessor: 'status'
    }],
    data: sampleData,
    rowKey: 'id'
  }
}`,...(ae=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,se,te;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    selectable: false,
    columns: [{
      header: 'Name',
      accessor: 'name'
    }, {
      header: 'Email',
      accessor: 'email'
    }, {
      header: 'Role',
      accessor: 'role'
    }, {
      header: 'Status',
      accessor: 'status'
    }],
    data: sampleData,
    rowKey: 'id'
  }
}`,...(te=(se=C.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var oe,ne,ce;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const [selectedRow, setSelectedRow] = useState<Person | null>(null);
    return <div>\r
        {selectedRow && <div style={{
        marginBottom: '1rem',
        padding: '0.75rem',
        backgroundColor: '#eff6ff',
        borderRadius: '0.5rem'
      }}>\r
            Selected: <strong>{selectedRow.name}</strong>\r
          </div>}\r
        <DataTable columns={[{
        header: 'Name',
        accessor: 'name'
      }, {
        header: 'Email',
        accessor: 'email'
      }, {
        header: 'Role',
        accessor: 'role'
      }, {
        header: 'Status',
        accessor: 'status'
      }]} data={sampleData} rowKey="id" onRowClick={row => setSelectedRow(row)} />\r
      </div>;
  }
}`,...(ce=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var le,ie,de;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [selectedRows, setSelectedRows] = useState<Person[]>([]);
    return <div>\r
        <div style={{
        marginBottom: '1rem'
      }}>\r
          <strong>Selected:</strong> {selectedRows.length} row(s)\r
        </div>\r
        <DataTable columns={[{
        header: 'Name',
        accessor: 'name'
      }, {
        header: 'Email',
        accessor: 'email'
      }, {
        header: 'Role',
        accessor: 'role'
      }, {
        header: 'Status',
        accessor: 'status'
      }]} data={sampleData} rowKey="id" selectedRows={selectedRows} onSelectionChange={setSelectedRows} />\r
      </div>;
  }
}`,...(de=(ie=N.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var me,ue,he;E.parameters={...E.parameters,docs:{...(me=E.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const [selectedRows, setSelectedRows] = useState<Person[]>([]);
    const [sortBy, setSortBy] = useState<'name' | 'role' | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const sortedData = [...sampleData].sort((a, b) => {
      if (!sortBy) return 0;
      const aValue = a[sortBy];
      const bValue = b[sortBy];
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      return 0;
    });
    const handleSort = (column: any) => {
      if (column.accessor === sortBy) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      } else {
        setSortBy(column.accessor);
        setSortDirection('asc');
      }
    };
    return <DataTable columns={[{
      header: 'Name',
      accessor: 'name',
      sortable: true,
      width: '200px'
    }, {
      header: 'Email',
      accessor: 'email',
      cell: row => <a href={\`mailto:\${row.email}\`} style={{
        color: '#3b82f6'
      }}>\r
                {row.email}\r
              </a>
    }, {
      header: 'Role',
      accessor: 'role',
      sortable: true
    }, {
      header: 'Status',
      accessor: 'status',
      cell: row => <span style={{
        color: row.status === 'Active' ? '#10b981' : '#ef4444',
        fontWeight: 600
      }}>\r
                {row.status}\r
              </span>
    }]} data={sortedData} rowKey="id" sortable onSort={config => {
      if (config.key) {
        handleSort({
          accessor: config.key
        });
      }
    }} selectedRows={selectedRows} onSelectionChange={setSelectedRows} pageSize={3} pagination />;
  }
}`,...(he=(ue=E.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};const Be=["Default","WithCustomCells","NoPagination","NoSorting","NoSelection","WithRowClick","WithControlledSelection","FullCustomExample"];export{v as Default,E as FullCustomExample,T as NoPagination,C as NoSelection,j as NoSorting,N as WithControlledSelection,k as WithCustomCells,D as WithRowClick,Be as __namedExportsOrder,Ve as default};
