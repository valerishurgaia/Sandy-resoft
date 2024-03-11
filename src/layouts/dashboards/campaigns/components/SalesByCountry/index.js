// import Card from "@mui/material/Card";
// import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import SalesTable from "examples/Tables/SalesTable";

import salesTableData from "layouts/dashboards/campaigns/components/SalesByCountry/data/salesTableData";


import plus from "assets/images/icons/plus-circle.svg";
import arrow from "assets/images/icons/angle-down-small.svg";
import { useState } from "react";

 import linkImg from "assets/images/icons/link-alt.svg";
 import edit from "assets/images/icons/edit.svg"; 
 import noteText from "assets/images/icons/note-text.svg";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

function SalesByCountry() {
  const [showContent, setShowContent] = useState(false);
  const [arrowRotation, setArrowRotation] = useState(0);

  const toggleContent = () => {
    setShowContent(!showContent);
    setArrowRotation(arrowRotation + 180);
  };

  const [rows, setRows] = useState(salesTableData);
  
  const handleDelete = (index) => {
    console.log("shemodis")
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);

};

  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />

        <MDBox display="flex" pt={2}>
          <MDTypography variant="h4" pl={3}>
            ActRight
          </MDTypography>
          <Tooltip title="Edit" placement="bottom">
            <MDTypography variant="body1" sx={{ cursor: "pointer", mx: 1 }}>
              <Icon color="inherit">edit</Icon>
            </MDTypography>
          </Tooltip>
        </MDBox>

        <MDBox>
          <button
            style={{
              border: "1px solid white",
              borderRadius: "12px",
              width: "270px",
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
            onClick={toggleContent}
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
            <h4 style={{ flexDirection: "row", textAlign: "center", marginLeft: "7px" }}>
              Create & Send New Campaign
            </h4>
            <img
              style={{
                cursor: "pointer",
                textAlign: "center",
                marginLeft: "7px",
                transition: "transform 0.5s ease",
                transform: `rotate(${arrowRotation}deg)`,
              }}
              src={arrow}
              alt="Arrow"
            />
          </button>

          {showContent && (
            <div
              style={{
                width: "270px",
                alignContent: "center",
                backgroundColor: "white",
                borderRadius: "20px",
                marginBottom: "10px",
                maxHeight: showContent ? "300px" : "0px",
                overflow: "hidden",
                transition: "max-height 0.5s ease",
                zIndex: 7,
                position:"absolute",
              }}
            >
              <div style={{ 
                display: "flex", marginLeft: "10px", cursor: "pointer" }}>
                <img style={{ marginTop: "10px" }} src={edit} alt="Edit" />
                <p style={{ fontSize: "14px", marginTop: "10px", marginLeft: "10px" }}>
                  Create new campaign
                </p>
              </div>
              <div style={{ display: "flex", marginLeft: "10px", cursor: "pointer" }}>
                <img style={{ marginTop: "10px" }} src={noteText} alt="Note" />
                <p style={{ fontSize: "14px", marginTop: "10px", marginLeft: "10px" }}>
                  Import HTML file
                </p>
              </div>
              <div style={{ display: "flex", marginLeft: "10px", cursor: "pointer" }}>
                <img style={{ marginTop: "10px", marginBottom: "10px" }} src={linkImg} alt="Link" />
                <p style={{ fontSize: "14px", marginTop: "10px", marginBottom: "10px", marginLeft: "10px" }}>
                  Import from URL
                </p>
              </div>
            </div>
          )}
        </MDBox>



        <MDBox>  
<table style={{ backgroundColor: 'white', borderRadius: '20px', borderCollapse: 'collapse', width: '100%'}}>
  <thead  >
    <tr  style={{ borderBottom: '1px solid #F0F2F5', fontSize:"18px", margin:"20px"}}>
      <th>Campaign</th>
      <th align="left"></th>
      <th align="right">Recipients</th>
      <th align="right">Sent</th>
      <th align="right">Unique Opens</th>
      <th align="right">Unique Clicks</th>
      <th align="right">Duplicate</th>
      <th align="right" style={{padding:"20px"}} >Delete</th>
    </tr>
  </thead>
  <tbody>
    {rows.map((salesTableData, index) => (
      <tr key={salesTableData.ID} style={{ borderBottom: '1px solid #F0F2F5' }} >
        <td scope="row">
          <div
            style={{
              display: 'inline-block',
              padding: '2px 4px',
              borderRadius: '10px',
              margin: '20px',
              fontSize:"18px",
              backgroundColor: salesTableData.status === "sent" ? '#4CAF50' : 'transparent',
              color: salesTableData.status === "sent" ? 'white' : '#CBCBCB',
              border: salesTableData.status === "sent" ? "none" : "1px solid #CBCBCB",
              width: "50px",
              textAlign:"center"
            }}
          >
            {salesTableData.status}
          </div>
        </td>
        <td align="left" style={{ fontSize:"14px"}} >{salesTableData.paragraph}</td>
        <td align="center">
          <div
            style={{
              display: 'inline-block',
              padding: '4px',
              fontSize:"14px"
            }}
          >
            {salesTableData.recipients}
          </div>
        </td>
        <td align="center">
          <div
            style={{
              display: 'inline-block',
              padding: '4px', 
              fontSize:"14px"
            }}
          >
            {salesTableData.sent}
          </div>
        </td>
        <td align="center">
          <div
            style={{
              display: 'flex',
              padding: '4px',
              borderRadius: '10px',
              fontSize:"14px",
              flexDirection:"column"
            }}
          >
             <span style={{ 
              backgroundColor:'#4CAF50',
               color:"white",
                width:"35%", 
                borderRadius:"5px"
                }}
                >
                  {salesTableData.uniqueOpen[0]}
                  </span>  
                  {salesTableData.uniqueOpen[1]}
          </div>
        </td>
        <td align="center">
          <div
            style={{
              display: 'flex',
              padding: '4px',
              borderRadius: '10px',
              fontSize:"14px",
            }}
          >
             <span 
             style={{ 
              backgroundColor: salesTableData.uniqueClicks[0] === '' ? 'transparent' : '#364868',
               color:"white", 
               width:"35%",
                borderRadius:"5px"
                }}
                >
                  {salesTableData.uniqueClicks[0]}
                  </span>
                   {salesTableData.uniqueClicks[1]}
          </div>
        </td>
        <td align="center">
          <div
            style={{
              display: 'inline-block',
              padding: '4px',
              borderRadius: '10px',
              fontSize:"14px",
             
            }}
          >
            {salesTableData.dublicate}
          </div>
        </td>
        <td align="center">
  <div style={{ marginRight: "20px" }}>
      <button style={{backgroundColor:"white", border:"none", cursor:"pointer" }}  onClick={() => handleDelete(index)}> {salesTableData.delete} </button> 

  </div>
</td>
      </tr>
    ))}
  </tbody>
</table>
    </MDBox>


    <MDBox>
      <div style={{ display: "flex", flexDirection: "row", marginTop:"30px", marginBottom:"100px"}}>
        <button style={{cursor:"pointer", backgroundColor: "#364868", color:"white", borderRadius: "50%", width: "40px", height: "40px", textAlign:"center", textJustify:"center",marginRight:"7px"}}>1</button>
        <button style={{ cursor:"pointer", border: "1px solid grey", color:"grey", borderRadius: "50%", width: "40px", height: "40px", textAlign:"center", textJustify:"center",marginRight:"7px"}} >2</button>
        <button style={{cursor:"pointer", border: "1px solid grey", color:"grey", borderRadius: "50%", width: "40px", height: "40px", textAlign:"center", textJustify:"center",marginRight:"7px"}} >{">"}</button>
      </div>
    </MDBox>
    </DashboardLayout>
    
    </>
  );
}

export default SalesByCountry;