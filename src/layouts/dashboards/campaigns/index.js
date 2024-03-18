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

// @mui material co</Grid>mponents
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Images
import Autocomplete from "@mui/material/Autocomplete";
import selectData from "layouts/pages/account/settings/components/BasicInfo/data/selectData";
import MDButton from "components/MDButton";
import { styled } from "@mui/system";
import { InputLabel } from "@mui/material";
import MDInput from "components/MDInput/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faItalic, faBold, faUnderline } from "@fortawesome/free-solid-svg-icons";
import { RadioGroup, Radio, FormControlLabel, FormControl, FormLabel } from "@material-ui/core";

const FormsField = styled(TextField)`
  background-color: #ffffff;
  width: 100%;
`;

const TranspFormField = styled(TextField)`
  background-color: transparent;
  width: 120px;
  font-size: 18px;
`;

const FormsLabel = styled(InputLabel)`
  color: #364868;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 10px;
  overflow: visible;
`;

const FileInput = styled(TextField)`
  border: none !important;
`;

function Campaigns() {
  return (
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
      <MDBox display="flex" py={3}>
        <MDBox component="form" pb={3} px={3} flex="1">
          <Grid container flexDirection={"column"} gap="20px">
            <Grid item>
              <FormsLabel>Subject</FormsLabel>
              <FormsField variant="outlined" placeholder="Subject of this email" />
            </Grid>
            <Grid item>
              <FormsLabel>From name</FormsLabel>
              <FormsField variant="outlined" placeholder="Brooklyn Alice" />
            </Grid>
            <Grid item>
              <FormsLabel>From email</FormsLabel>
              <FormsField
                variant="outlined"
                placeholder="Brooklynal@example.com"
                inputProps={{ type: "email" }}
              />
            </Grid>
            <Grid item>
              <FormsLabel>Reply to email</FormsLabel>
              <FormsField placeholder="Brooklynal@example.com" inputProps={{ type: "email" }} />
            </Grid>
            <Grid item>
              <FormsLabel>Plain text version</FormsLabel>
              <FormsField multiline rows={10} />
            </Grid>
            <Grid item>
              <FormsLabel>Query string</FormsLabel>
              <FormsField placeholder="eg. utm_source=newsletter&utm_medium" />
            </Grid>
            <Grid item>
              <FormsLabel>Web Version Language</FormsLabel>
              <Autocomplete
                defaultValue="Don't translate"
                options={selectData.skills}
                size="large"
                renderInput={(params) => (
                  <FormsField {...params} InputLabelProps={{ shrink: true }} />
                )}
              />
            </Grid>
            <Grid item>
              <FormsLabel>Attachments</FormsLabel>
              <FileInput
                accept="image/*"
                type="file"
                sx={{
                  border: "none",
                }}
              />
            </Grid>
            <Grid item>
              <FormControl component="fieldset">
                <FormLabel component="legend">Track opens:</FormLabel>
                <RadioGroup row aria-label="track opens" name="trackOpens">
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                  <FormControlLabel value="anonymously" control={<Radio />} label="Anonymously" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item>
            <FormControl component="fieldset">
                <FormLabel component="legend">Track clicks:</FormLabel>
                <RadioGroup row aria-label="track clicks" name="trackClicks">
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                  <FormControlLabel value="anonymously" control={<Radio />} label="Anonymously" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox display="flex" flexDirection="column" flex="2">
          <MDBox display="flex" alignItems="center" justifyContent="space-between">
            <FormsLabel>HTML Code</FormsLabel>
            <Autocomplete
              defaultValue="Styles"
              options={selectData.skills}
              size="small"
              renderInput={(params) => (
                <TranspFormField {...params} InputLabelProps={{ shrink: true }} />
              )}
            />
            <MDBox display="flex" alignItems="center" gap={4}>
              <FontAwesomeIcon icon={faItalic} />
              <FontAwesomeIcon icon={faBold} />
              <FontAwesomeIcon icon={faUnderline} />
            </MDBox>
          </MDBox>
          <MDButton
            variant="contained"
            size="large"
            sx={{
              width: "228px",
              fontSize: "14px",
              padding: "10px 3px",
              fontWeight: "400",
              textTransform: "unset",
              boxShadow: "4px 4px 4px 0px #0000004D",
              color: "#364868",
              marginTop: "10px",
            }}
          >
            Save and switch to HTML editor
          </MDButton>
          <FormsField
            multiline
            rows={24}
            sx={{
              marginTop: "25px",
            }}
          />
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Campaigns;
