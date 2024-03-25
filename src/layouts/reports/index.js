import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import ChartComponent from "./ChartComponent";
import ActivityCard from "./ActivityCard";
import LinkActivity from "./LinkActivity";
import LastOpened from "./LastOpened";
import LastUnsubscribed from "./LastUnsubscribed";
import LastBounced from "./LastBounced";
import LastMarkedSpam from "./LastMarkedSpam";
import Footer from "examples/Footer";

function Reports() {
return (
  <DashboardLayout>
    <DashboardNavbar/>
    <MDBox display="flex" flexDirection='column' pt={2}>
    <MDBox display="flex" pt={2} pb={4}>
      <MDTypography variant="h4" fontWeight={'regular'} >
        ActRight
      </MDTypography>
      <Tooltip title="Edit" placement="bottom">
        <MDTypography variant="body1" sx={{ cursor: "pointer", mx: 1 }}>
          <Icon color="inherit">edit</Icon>
        </MDTypography>
      </Tooltip>
    </MDBox>
      <MDTypography variant="h4" fontWeight={'regular'}  pb={1}>Campaign report</MDTypography>
      <MDBox display="flex" pt={2}>
        <MDTypography variant="subtitle2" fontWeight={'regular'}>
          Campaign title: Not set
        </MDTypography>
        <Tooltip title="Edit" placement="bottom">
          <MDTypography sx={{ cursor: "pointer", mx: 1 }}>
            <Icon color="inherit">edit</Icon>
          </MDTypography>
        </Tooltip>
      </MDBox>
      <MDTypography variant="heading3" fontWeight={'regular'} >Subject: Client Showcase: The Mark Westman Legal Defense Fund</MDTypography>
    </MDBox>
    <MDBox py={4}>
    <Card>
      <MDBox display="flex" flexDirection="column" px={3} py={2} gap={1}>
      <MDTypography variant="button" color="secondary" fontWeight='regular'>Send to</MDTypography>
      <MDTypography variant="button" color="secondary" fontWeight='regular'>From</MDTypography>
     <MDTypography variant="button" color="secondary" fontWeight='regular'>To</MDTypography>
      </MDBox>
    </Card>
    </MDBox>
    <MDBox mb={2}>
   <ChartComponent />
    <ActivityCard/>
    <LinkActivity/>
    <LastOpened/>
    <LastUnsubscribed/>
    <LastBounced />
    <LastMarkedSpam />
    </MDBox>
    <Footer />
  </DashboardLayout>
)
}

export default Reports;