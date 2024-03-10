import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import rows from "layouts/dashboards/campaigns/subscribes/data/subscribersTableData";
import plus from "assets/images/icons/plus-circle.svg";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";



function SubscriberLists() {
  
  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />

        <MDBox display="flex" pt={2}>
          <MDTypography variant="h4" pl={3}>
           subscriber lists
          </MDTypography>

        </MDBox>

        <MDBox>
          <button
            style={{
              border: "1px solid white",
              borderRadius: "12px",
              width: "121px",
              height: "40px",
              color: "#364868",
              backgroundColor: "white",
              textAlign: "center",
              marginTop: "22px",
              marginBottom: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "9px",
              }}
              src={plus}
              alt="Plus"
            />
            <p style={{ flexDirection: "row", textAlign: "center", marginLeft: "7px" }}>
             Add new lists
            </p>
          
          </button>

        </MDBox>


<MDBox>  
<table style={{ backgroundColor: 'white', borderRadius: '20px', borderCollapse: 'collapse', width: '100%'  }}>
  <thead  >
    <tr  style={{ borderBottom: '1px solid #F0F2F5', fontSize:"18px" }}>
      <th>ID</th>
      <th align="left">List</th>
      <th align="right">Active</th>
      <th align="right">Segs</th>
      <th align="right">ARs</th>
      <th align="right">Unsubscribed</th>
      <th align="right">Bounced</th>
      <th align="right">Hide</th>
      <th align="right">Edit</th>
      <th align="right">Delete</th>
    </tr>
  </thead>
  <tbody>
    {rows.map((row) => (
      <tr key={row.ID} style={{ borderBottom: '1px solid #F0F2F5' }} >
        <td scope="row">
          <div
            style={{
              border: '1px solid #CBCBCB',
              color: '#CBCBCB',
              display: 'inline-block',
              padding: '2px 4px',
              borderRadius: '10px',
              margin: '20px',
              fontSize:"18px"
            }}
          >
            {row.ID}
          </div>
        </td>
        <td align="left" style={{ fontSize:"18px"}} >{row.List}</td>
        <td align="center">
          <div
            style={{
              background: '#4CAF50',
              display: 'inline-block',
              padding: '4px',
              borderRadius: '30px',
              color: 'white',
              fontSize:"14px"
            }}
          >
            {row.Active}
          </div>
        </td>
        <td align="center">
          <div
            style={{
              border: '1px solid #7B809A',
              display: 'inline-block',
              padding: '4px',
              borderRadius: '10px',
              backgroundColor: row.Active > 0 ? '#364868' : 'transparent',
              color: row.Active > 0 ? 'white' : 'black',
              fontSize:"14px"
            }}
          >
            {row.Segs}
          </div>
        </td>
        <td align="center">
          <div
            style={{
              border: '1px solid #7B809A',
              display: 'inline-block',
              padding: '4px',
              borderRadius: '10px',
              fontSize:"14px"
            }}
          >
            {row.ARs}
          </div>
        </td>
        <td align="center">
          <div
            style={{
              border: '1px solid #7B809A',
              display: 'inline-block',
              padding: '4px',
              borderRadius: '10px',
              fontSize:"14px"
            }}
          >
            {row.Unsubscribed}
          </div>
        </td>
        <td align="center">
          <div
            style={{
              border: '1px solid #7B809A',
              display: 'inline-block',
              padding: '4px',
              borderRadius: '10px',
              fontSize:"14px"
            }}
          >
            {row.Bounced}
          </div>
        </td>
        <td align="right"> {row.Hide}</td>
        <td align="right">{row.Edit}</td>
        <td align="center">
  <div style={{ marginRight: "20px" }}>
    {row.Delete}
  </div>
  </td>
      </tr>
    ))}
  </tbody>
</table>
    </MDBox>



    <MDBox>
      <div style={{ display: "flex", flexDirection: "row", marginTop:"30px", marginBottom:"100px"}}>
        <div style={{cursor:"pointer", backgroundColor: "#364868", color:"white", borderRadius: "50%", width: "40px", height: "40px", textAlign:"center", textJustify:"center",marginRight:"7px"}}>1</div>
        <div style={{ cursor:"pointer", border: "1px solid grey", color:"grey", borderRadius: "50%", width: "40px", height: "40px", textAlign:"center", textJustify:"center",marginRight:"7px"}} >2</div>
        <div style={{cursor:"pointer", border: "1px solid grey", color:"grey", borderRadius: "50%", width: "40px", height: "40px", textAlign:"center", textJustify:"center",marginRight:"7px"}} >{">"}</div>
      </div>
    </MDBox>
    </DashboardLayout>
    
    </>
  );
}

export default SubscriberLists;