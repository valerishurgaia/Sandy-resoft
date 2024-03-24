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
              <MDBadge badgeContent="2.37%" size="sx" color="success"/>
              <MDTypography variant="caption"> Opened</MDTypography>
              <MDBadge color="light" badgeContent="1437 unique / opened 2076 times" />
            </MDBox>
            <MDBox display={"flex"} alignItems={'center'} gap={1}>
              <MDBadge badgeContent=".76659" color="secondary"/>
              <MDTypography variant="caption"> Not Opened </MDTypography>
            </MDBox>
            <MDBox display={"flex"} alignItems={'center'} gap={1}>
              <MDBadge badgeContent="0.0976%" color="light"/>
              <MDTypography variant="caption"> Clicked a link </MDTypography>
              <MDBadge badgeContent="27 unique clicks" color="light" />
            </MDBox>
          </MDBox>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <MDBox display="flex" flexDirection="column" px={3} py={2} gap={1}>
            <MDBox display={"flex"} alignItems={'center'} gap={1}>
              <MDBadge badgeContent="0.0786%" size="sx" color="error" />
              <MDTypography variant="caption"> Opened</MDTypography>
              <MDBadge color="light"  badgeContent="55 unsubscribed" />
            </MDBox>
            <MDBox display={"flex"} alignItems={'center'} gap={1}>
              <MDBadge badgeContent="0%" color="dark"  />
              <MDTypography variant="caption"> Bounced </MDTypography>
              <MDBadge color="light" badgeContent="0 bounced" />
            </MDBox>
            <MDBox display={"flex"} alignItems={'center'} gap={1}>
              <MDBadge badgeContent="0%" color="dark"/>
              <MDTypography variant="caption"> Clicked a link </MDTypography>
              <MDBadge color="light" badgeContent="0 marked as a spam" />
            </MDBox>
          </MDBox>
        </Card>
      </Grid>
    </Grid>
  </MDBox>
)
}
export default ActivityCard;