import MDBox from "../../components/MDBox";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBadge from "../../components/MDBadge";
import MDTypography from "../../components/MDTypography";

function ActivityCard() {
return (
  <MDBox mt={4}>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card>
          <MDBox display="flex" flexDirection="column" px={3} py={2} gap={1}>
            <MDBox display={"flex"} alignItems={'center'} gap={1}>
              <MDBadge badgeContent="2.37%" size="sx" container/>
              <MDTypography variant="caption"> Opened</MDTypography>
              <MDBadge variant="contained" color="#f0f2f5" badgeContent="1437 unique / opened 2076 times" />
            </MDBox>
            <MDBox display={"flex"} alignItems={'center'} gap={1}>
              <MDBadge badgeContent=".76659" container />
              <MDTypography variant="caption"> Not Opened </MDTypography>
            </MDBox>
            <MDBox display={"flex"} alignItems={'center'} gap={1}>
              <MDBadge badgeContent="0.0976%" container/>
              <MDTypography variant="caption"> Clicked a link </MDTypography>
              <MDBadge variant="contained" badgeContent="27 unique clicks" />
            </MDBox>
          </MDBox>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <MDBox display="flex" flexDirection="column" px={3} py={2} gap={1}>
            <MDBox display={"flex"} alignItems={'center'} gap={1}>
              <MDBadge badgeContent="0.0786%" size="sx" container sx={{ Color: '#EB001B'}} />
              <MDTypography variant="caption"> Opened</MDTypography>
              <MDBadge variant="contained" color="#f0f2f5" badgeContent="55 unsubscribed" />
            </MDBox>
            <MDBox display={"flex"} alignItems={'center'} gap={1}>
              <MDBadge badgeContent="0%" container />
              <MDTypography variant="caption"> Bounced </MDTypography>
              <MDBadge variant="contained" badgeContent="0 bounced" />
            </MDBox>
            <MDBox display={"flex"} alignItems={'center'} gap={1}>
              <MDBadge badgeContent="0%" container/>
              <MDTypography variant="caption"> Clicked a link </MDTypography>
              <MDBadge variant="contained" badgeContent="0 marked as a spam" />
            </MDBox>
          </MDBox>
        </Card>
      </Grid>
    </Grid>
  </MDBox>
)
}
export default ActivityCard;