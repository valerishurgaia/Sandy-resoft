import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan,faDownload } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'; 

library.add(faPen, faTrashCan, faDownload); 

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
  },
  tdFirst: {
    textAlign: 'left',
  },
  actionBtn: {
    border: 'none',
    background: "transparent",
    cursor: 'pointer',
  },
  actionBtnIcon: {
    fontSize: '16px',
  },
  status: {
    backgroundColor:"#364868",
    color:"white",
    height:"40%",
    width:"50%",
    display: "inline-block", 
    lineHeight: "20px", 
    textAlign: "center", 
    borderRadius: "5px",
 },
 attempts:{
    display: "inline-block",
    backgroundColor:"#4CAF50",
    color:"white",
    width:"30px",
    lineHeight: "30px", 
    textAlign: "center", 
    borderRadius: "50%",
 }
};

const initialData = [
  { id: 1, email: "onetwothree@gmail.com", status: "suppressed", lastUpdate: "2 weeks ago", BlockAttempts:"4" },
  { id: 2, email: "testtest1@gmail.com", status: "suppressed", lastUpdate: "2 weeks ago", BlockAttempts:"5" },
];

function CustomTable() {
  const [data, setData] = useState(initialData);

  const handleDeleteRow = (id) => {
    setData(data.filter(row => row.id !== id));
  };

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.thFirst}>Email adress</th>
          <th style={styles.th}>status</th>
          <th style={styles.th}>Last Update</th>
          <th style={styles.th}>Block Attempts</th>
          <th style={styles.th}>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
        <tr key={row.email}>
        <td style={{ ...styles.td, ...styles.tdFirst }}>{row.email}</td>
        <td style={styles.td}><span style={styles.status}>{row.status}</span></td>
        <td style={styles.td}>{row.lastUpdate}</td>
        <td style={styles.td}><span style={styles.attempts}>{row.BlockAttempts}</span></td>
        <td style={styles.td}>
          <button style={styles.actionBtn} onClick={() => handleDeleteRow(row.id)}>
            <FontAwesomeIcon icon={faTrashCan} style={{ color: "#364868", marginRight: "10px" }} />
          </button>
        </td>
      </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomTable;
