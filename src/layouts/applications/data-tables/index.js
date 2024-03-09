/**
=========================================================
* Material Dashboard 2 PRO React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import MDButton from "components/MDButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CustomTable from "layouts/applications/data-tables/all-template-table";

function DataTables() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox p={2}>
        <MDBox display="flex" mb={2}>
          <MDTypography variant="h4">ActRight</MDTypography>
          <Tooltip title="Edit" placement="bottom">
            <MDTypography variant="body1" sx={{ cursor: "pointer", mx: 1 }}>
              <Icon color="inherit">edit</Icon>
            </MDTypography>
          </Tooltip>
        </MDBox>
        <MDButton
          variant="contained"
          size="large"
          sx={{
            display: "flex",
            fontSize: "14px",
            padding: "10px",
            fontWeight: "400",
            textTransform: "unset",
            boxShadow: "4px 4px 4px 0px #0000004D",
            color: "#364868",
            gap: "8px",
          }}
        >
          <Icon>
            <AddCircleIcon />
          </Icon>
          Create a new template
        </MDButton>
        <MDBox my={4}>
          <Card>
              <CustomTable />
              </Card>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default DataTables;
