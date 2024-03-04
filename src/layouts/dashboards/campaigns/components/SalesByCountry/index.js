import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import SalesTable from "examples/Tables/SalesTable";

// Data
import salesTableData from "layouts/dashboards/campaigns/components/SalesByCountry/data/salesTableData";

import pen from "assets/images/icons/pen-line.png";
import button from "assets/images/button/button.png"
import plus from "assets/images/icons/plus-circle.png";
import arrow from "assets/images/icons/angle-down-small.png";
import { useState } from "react";

import linkImg from "assets/images/icons/link-alt.png";
import edit from "assets/images/icons/edit.png";
import noteText from "assets/images/icons/note-text.png"

 function SalesByCountry() {
   const [showContent, setShowContent] = useState(false);
  return (

    <>
      <MDBox>
        <h3>
          ActRight <img src={pen} alt="Pen" style={{ cursor: "pointer" }} />
        </h3>


        {/*<img src={button} style={{width:"250px", height:"50px", cursor:"pointer", marginTop:"22px", marginBottom:"20px"  }} />*/}

        <button style={{
          border: "1px solid white",
          borderRadius: "12px",
          width: "270px",
          height: "40px",
          color: "#364868",
          backgroundColor: "white",
          textAlign:"center",
          marginTop:"22px",
          marginBottom:"20px",
          cursor:"pointer",
          display:"flex",
          alignItems : "center",
        }}
        onClick={() => setShowContent(!showContent)}
        >
          <img style={{cursor:"pointer", alignItems:"center", justifyContent:"center",marginLeft:"9px"
          }} src={plus} alt="Plus" />
          <h4 style={{flexDirection:"row", textAlign:"center",marginLeft:"7px"
          }} > Create & Send New Campaign</h4>
          <img style={{cursor:"pointer", textAlign:"center",marginLeft:"4px"
          }} src={arrow} alt="Arrow" />
        </button>

        {showContent && (
          <div style={{width:"270px", backgroundColor:"white", borderRadius:"20px", marginTop:"0px", marginBottom:"10px", }} >
            <div>
            <img style={{display:"flex", flexDirection:"column"}} src={edit} />
            <p style={{ fontSize: "14px", margin: "12px" }}>Create new campaign</p>
            </div>
            <div>
            <img src={noteText}/>
            <p style={{ fontSize: "14px", margin: "12px" }}>Import HTML file</p>
            </div>
            <div>
            <img src={linkImg} />
            <p style={{ fontSize: "14px", margin: "12px" }}>import from URL</p>
            </div>
          </div>
        )}
      </MDBox>

      <Card sx={{ width: "100%" }}>


        {/*<MDBox display="flex">*/}
        {/*  <MDTypography variant="h6" sx={{ mt: 2, mb: 1, ml: 2 }}>*/}
        {/*    campaign*/}
        {/*  </MDTypography>*/}
        {/*</MDBox>*/}



        <MDBox p={2} display={"flex"} flexDirection={"column"}>
          <Grid container>
          <SalesTable rows={salesTableData} shadow={false} />
        </Grid>
      </MDBox>

    </Card>

    <MDBox>
      <div style={{ display: "flex", flexDirection: "row", marginTop:"30px", marginBottom:"100px"}}>
        <div style={{cursor:"pointer", backgroundColor: "#364868", color:"white", borderRadius: "50%", width: "40px", height: "40px", textAlign:"center", textJustify:"center",marginRight:"7px"}}>1</div>
        <div style={{ cursor:"pointer", border: "1px solid grey", color:"grey", borderRadius: "50%", width: "40px", height: "40px", textAlign:"center", textJustify:"center",marginRight:"7px"}} >2</div>
        <div style={{cursor:"pointer", border: "1px solid grey", color:"grey", borderRadius: "50%", width: "40px", height: "40px", textAlign:"center", textJustify:"center",marginRight:"7px"}} >{">"}</div>
      </div>
    </MDBox>
    </>
  );
}

export default SalesByCountry;
