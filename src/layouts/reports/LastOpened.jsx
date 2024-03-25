import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";
import DataTable from "../../examples/Tables/DataTable";
import MDButton from "../../components/MDButton";
import Icon from "@mui/material/Icon";
import dataLast10Opened from "./dataLast10Opened";

function LastOpened() {
  return (
    <Grid container spacing={3} mt={2}>
      <Grid item xs={12}>
        <Card>
          <MDBox pt={3} px={3} display="flex" alignItems="center">
            <MDTypography variant="h6" fontWeight="medium">
              Last 10 Opened
            </MDTypography>
            <MDButton iconOnly>
              <Icon>download</Icon>
            </MDButton>
            <MDButton color="dark" size="small" iconOnly>
              <Icon>add</Icon>
            </MDButton>
          </MDBox>
          <MDBox py={1}>
            <DataTable
              table={dataLast10Opened}
              entriesPerPage={false}
              showTotalEntries={false}
              isSorted={false}
              noEndBorder
            />
          </MDBox>
        </Card>
      </Grid>
    </Grid>
  )
}
export default LastOpened;