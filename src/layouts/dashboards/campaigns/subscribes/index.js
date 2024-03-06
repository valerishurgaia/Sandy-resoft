import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import SalesTable from "examples/Tables/SalesTable";
import subscribersTableData from "layouts/dashboards/campaigns/subscribes/data/subscribersTableData";
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

      <Card sx={{ width: "100%" }}>


        {/*<MDBox display="flex">*/}
        {/*  <MDTypography variant="h6" sx={{ mt: 2, mb: 1, ml: 2 }}>*/}
        {/*    campaign*/}
        {/*  </MDTypography>*/}
        {/*</MDBox>*/}



        <MDBox p={2} display={"flex"} flexDirection={"column"}>
          <Grid container>
          <SalesTable rows={subscribersTableData} shadow={false} />
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

export default SubscriberLists;






