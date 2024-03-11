import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'; 

library.add(faPen, faTrashCan); 

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    border: "none",
  },
  th: {
    padding: '16px',
    textAlign: 'right',
    color: "#364868",
    fontSize: "14px",
    fontWeight: "700", 
    borderBottom: '1px solid #ddd',
  },
  thFirst: {
    width: '50%',
    paddingLeft: '16px',
    borderBottom: '1px solid #F0F2F5',
    textAlign: 'left',
    fontSize: "14px",
    fontWeight: "700", 
    color: "#364868",
  },
  td: {
    padding: '16px',
    textAlign: 'right',
    fontSize: "12px",
    color: "#364868",
    borderBottom: '1px solid #F0F2F5',
  },
  tdFirst: {
    width: '50%',
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
};

const initialData = [
  { id: 1, name: "dadu", preview: "dadu", use: "dadu" },
  { id: 2, name: "dadu", preview: "dadu", use: "dadu" },
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
          <th style={styles.thFirst}>Template Name</th>
          <th style={styles.th}>Preview</th>
          <th style={styles.th}>Use</th>
          <th style={styles.th}>Edit</th>
          <th style={styles.th}>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.name}>
            <td style={{ ...styles.td, ...styles.tdFirst }}>{row.name}</td>
            <td style={styles.td}>{row.preview}</td>
            <td style={styles.td}>{row.use}</td>
            <td style={styles.td}>
      <button style={styles.actionBtn}>
        <FontAwesomeIcon icon={faPen} style={{color: "#364868"}} /> 
      </button>
    </td>
    <td style={styles.td}>
      <button style={styles.actionBtn} onClick={() => handleDeleteRow(row.id)} >
        <FontAwesomeIcon icon={faTrashCan} style={{color: "#364868", marginRight: "10px"}}/> 
      </button>
    </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomTable;
