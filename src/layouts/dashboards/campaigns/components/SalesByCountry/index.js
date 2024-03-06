import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import SalesTable from "examples/Tables/SalesTable";

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
    </DashboardLayout>
    
    </>
  );
}

export default SalesByCountry;






