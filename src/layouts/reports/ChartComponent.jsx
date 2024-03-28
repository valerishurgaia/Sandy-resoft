import MDBox from "../../components/MDBox";
import Grid from "@mui/material/Grid";
import PieChart from "../../examples/Charts/PieChart";
import HorizontalBarChart from "../../examples/Charts/BarCharts/HorizontalBarChart";
import horizontalBarChartData from "../pages/charts/data/horizontalBarChartData";
import MDTypography from "../../components/MDTypography";
import Tooltip from "@mui/material/Tooltip";
import MDButton from "../../components/MDButton";
import Icon from "@mui/material/Icon";
import MDBadgeDot from "../../components/MDBadgeDot";
import Card from "@mui/material/Card";
import channelChartData from "../dashboards/sales/components/ChannelsChart/data";
import salesTableData from "layouts/dashboards/sales/data/salesTableData";
import SalesTable from "examples/Tables/SalesTable"; 

function ChartComponent() {
  return (
    <MDBox mt={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={4}>
          <Card>
          <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
            <MDTypography variant="h6">Top 10 Countries</MDTypography>
            <Tooltip title="See Countries" placement="bottom" arrow>
              <MDButton variant="outlined" color="secondary" size="small" circular iconOnly>
                <Icon>priority_high</Icon>
              </MDButton>
            </Tooltip>
          </MDBox>
          <MDBox mt={4}>
            <Grid container alignItems="center" direction="column">
              <Grid item xs={7}>
                <PieChart chart={channelChartData} height="12.5rem" />
              </Grid>
              <Grid item xs={5}>
                <MDBox display="flex" pr={1} my={4}>
                  <MDBox>
                    <MDBadgeDot color="info" size="sm" badgeContent="France" />
                  </MDBox>
                  <MDBox>
                    <MDBadgeDot color="primary" size="sm" badgeContent="UK" />
                  </MDBox>
                  <MDBox>
                    <MDBadgeDot color="dark" size="sm" badgeContent="Brazil" />
                  </MDBox>
                  <MDBox>
                    <MDBadgeDot color="secondary" size="sm" badgeContent="Mexico" />
                  </MDBox>
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card>
            <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
              <MDTypography variant="h6">Activity</MDTypography>
              <Tooltip title="See Activity" placement="bottom" arrow>
                <MDButton variant="outlined" color="secondary" size="small" circular iconOnly>
                  <Icon>priority_high</Icon>
                </MDButton>
              </Tooltip>
            </MDBox>
            <Grid>
              <HorizontalBarChart chart={horizontalBarChartData} />
          </Grid>
  
            {/* <Grid container direction="column">
              <Grid item xs={12} lg={8}>
                <HorizontalBarChart chart={horizontalBarChartData} height="17.5rem"  />
              </Grid>
              <Grid item xs={5}>
                <MDBox display="flex" px={2} py={1} >
                  <MDBox>
                    <MDBadgeDot color="info" size="sm" badgeContent="Recipients" />
                  </MDBox>
                  <MDBox>
                    <MDBadgeDot color="primary" size="sm" badgeContent="Opened" />
                  </MDBox>
                  <MDBox>
                    <MDBadgeDot color="dark" size="sm" badgeContent="Unopened" />
                  </MDBox>
                  <MDBox>
                    <MDBadgeDot color="secondary" size="sm" badgeContent="Clicked" />
                  </MDBox>
                  <MDBox>
                    <MDBadgeDot color="secondary" size="sm" badgeContent="Unsubscrubed" />
                  </MDBox>
                  <MDBox>
                    <MDBadgeDot color="secondary" size="sm" badgeContent="Bounced" />
                  </MDBox>
                  <MDBox>
                    <MDBadgeDot color="secondary" size="sm" badgeContent="Marked as spam" />
                  </MDBox>
                </MDBox>
              </Grid>
            </Grid> */}
          </Card>
        </Grid>
      </Grid>
    </MDBox>
  )
}
export default ChartComponent;