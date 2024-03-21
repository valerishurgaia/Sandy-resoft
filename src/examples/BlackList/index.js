import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import MDButton from "components/MDButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CustomTable  from "../BlackList/BlackListData"
import TableButton from "layouts/applications/data-tables/pagination";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';

function BlackList() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox >
        <MDBox display="flex" mb={2}>
          <MDTypography variant="h3">BlackList</MDTypography>
        </MDBox>


        <div style={{display : "flex",padding : "5px",background : "#F8F9FA",borderRadius : "10px", width:"22%"}}>
            <button style={{background: "white", border: "1px", padding: "10px 20px 10px 20px", borderRadius: "10px", boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)"}}>Suppresion List</button>
            <button style={{background : "transparent",border : "1px",padding : "10px 20px 10px 20px",borderRadius : "10px", }}>Blocked Domains</button>
        </div>
</MDBox>
        <MDBox display="flex" mb={2}>
          <MDTypography variant="h4">Suppression List</MDTypography>
        </MDBox>

        <MDBox display="flex" >
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
            marginRight:"8px"
          }}
        >
          <Icon>
            <AddCircleIcon />
          </Icon>
          Create a new template
        </MDButton>

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
            marginRight:"8px"
          }}
        >
          <Icon>
          <FontAwesomeIcon icon="fa-solid fa-download" style={{ color: "#364868",  }} />
          </Icon>
        Export
        </MDButton>
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
            marginRight:"8px"
          }}
        >
         <FontAwesomeIcon icon={faTrashCan} style={{ color: "#364868",  }} />
          Delete All
        </MDButton>
</MDBox>

<MDBox>
        <MDBox my={4}>
          <Card>
              <CustomTable />
              </Card>
              </MDBox>
        <TableButton text={1} />
        <TableButton icon={faChevronRight} />
      </MDBox>
      <Footer/>
    </DashboardLayout>
  );
}

export default BlackList;
