import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'; 


library.add(faTrashCan, faCopy); 

const initialData = [
  { 
    id:1,
    status: 'draft',
  paragraph: "IOF #3 Sendy 2024-01-31 “Soros Wins?” EB235152FS06 ",
  recipients: "-",
  sent: "-",
  uniqueOpen: ['', "-"], 
  uniqueClicks: ['', "-"],
},  
{
  id:2,
  status: "sent",
  paragraph: "IOF #3 Sendy 2024-01-31 “Soros Wins?” EB235152FS06 ",
  recipients: "195,549",
  sent: "3weeks ago",
  uniqueOpen: ['1.08%', "2,113 opened"],
  uniqueClicks: ['0.08%', "88 clicks"],
},
{
  id:3,
  status: "draft",
  paragraph: "IOF #3 Sendy 2024-01-31 “Soros Wins?” EB235152FS06 ",
  recipients: "195,549",
  sent: "3weeks ago",
  uniqueOpen: ['1.08%', "2,113 opened"],
  uniqueClicks: ['0.08%', "88 clicks"],
},
];

const headers = [
  { label: 'Campaign', key: 'campaign' },
  { label: '', key: 'paragraph' },
  { label: 'Recipients', key: 'recipients' },
  { label: 'Sent', key: 'sent' },
  { label: 'Unique Opens', key: 'uniqueOpens' },
  { label: 'Unique Clicks', key: 'uniqueClicks' },
  { label: 'Duplicate', key: 'duplicate' },
  { label: 'Delete', key: 'delete' }
];

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    border: "none",
  },
  th: {
    padding: '16px',
    textAlign: 'center',
    color: "#364868",
    fontSize: "14px",
    fontWeight: "700", 
    borderBottom: '1px solid #ddd',
  },
  thFirst: {
    paddingLeft: '16px',
    borderBottom: '1px solid #F0F2F5',
    textAlign: 'left',
    fontSize: "14px",
    fontWeight: "700", 
    color: "#364868",
  },
  td: {
    padding: '16px',
    textAlign: 'center',
    fontSize: "12px",
    color: "#364868",
    borderBottom: '1px solid #F0F2F5',
    alignItems:"center"
  },
  tdFirst: {
    textAlign: 'left',
  },
  actionBtn: {
    border: 'none',
    background: "transparent",
    cursor: 'pointer',
    alignItems:"center"
  },
 
  status: {
    display: 'inline-block',
    padding: '2px 4px',
    borderRadius: '10px',
    margin: '20px',
    width: "50px",
    textAlign:"center",
 },
 header:{
  color:"#7B809A",
 }

};

function CustomTable() {
  const [data, setData] = useState(initialData);


  const [rows, setRows] = useState([[1, 2, 3]]);


  const handleDeleteRow = (id) => {
    setData(prevData => prevData.filter(row => row.id !== id));
  };


const handleCopyRow = (id) => {
  const rowToCopy = data.find(row => row.id === id);
  if (rowToCopy) {
    setRows([...rows, rowToCopy]);
  }
  
}
  return (
    <table style={styles.table}>
    <thead>
  <tr>
    {headers.map(header => (
 <th key={header.key} style={header.key === 'campaign' ? { ...styles.thFirst, ...styles.header } : { ...styles.th, ...styles.header }}        >
        {header.label}
      </th>
    ))}
  </tr>
</thead>
      <tbody>
        {data.map((row,index) => 
            (
            <tr key={row.email}>
    
            <td style={{ ...styles.td, ...styles.tdFirst, ...styles.status, backgroundColor: data[index].status === "sent" ? '#4CAF50' : 'transparent', color: data[index].status === "sent" ? 'white' : '#CBCBCB',
    border: data[index].status === "sent" ? "none" : "1px solid #CBCBCB",}}>{row.status}</td>
            <td style={{ ...styles.td, ...styles.tdFirst }}>{row.paragraph}</td>
            <td style={styles.td}><span > {row.recipients}</span></td>
            <td style={styles.td}>{row.sent}</td>
            <td style={styles.td}>
              {row.uniqueOpen && row.uniqueOpen.length > 0 ? (
                <div style={{ display: 'flex', padding: '4px', borderRadius: '10px', fontSize: "12px",}}>
                  <span style={{ backgroundColor: '#4CAF50', color: "white", width: "full", borderRadius: "5px", marginRight:"5px",  textAlign:"center"}}>{row.uniqueOpen[0]}</span>
                  {row.uniqueOpen[1]}
                </div>
              ) : null}
            </td>

            <td style={styles.td}>
  {row.uniqueClicks && row.uniqueClicks.length > 0 ? (
    <div
      style={{
        display: 'flex',
        padding: '4px',
        borderRadius: '10px',
        fontSize: '12px',
      }}
    >
      <span
        style={{
          backgroundColor: row.uniqueClicks[0] === '' ? 'transparent' : '#364868',
          color: row.uniqueClicks[0] === '' ? '#364868' : 'white',
          width: "full", borderRadius: "5px",
           marginRight:"5px", 
          padding:"2px",
           textAlign:"center",
        }}
      >
        {row.uniqueClicks[0]}
      </span>
      {row.uniqueClicks[1]}
    </div>
  ) : null}
</td>

<td style={styles.td}>
              <button style={styles.actionBtn} onClick={() => handleCopyRow(row.id)}>
              <FontAwesomeIcon icon={faCopy} style={{ color: "#364868", marginRight: "10px" }} />
              </button>
            </td>

            <td style={styles.td}>
              <button style={styles.actionBtn} onClick={() => handleDeleteRow(row.id)}>
                <FontAwesomeIcon icon={faTrashCan} style={{ color: "#364868", marginRight: "10px" }} />
              </button>
            </td>
          </tr>
            )
       )}
      </tbody>
    </table>
  );
}

export default CustomTable;