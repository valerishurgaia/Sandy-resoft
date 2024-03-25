// Importing necessary dependencies
import PropTypes from "prop-types";
import MDBadge from "components/MDBadge";
import MDBox from "components/MDBox"; // I'm assuming MDBox is a wrapper component for layout purposes

// Defining the BadgeCell component
function BadgeCell({ badgeContent, color, size }) {
  return (
    <MDBox display="flex" justifyContent="center" alignItems="center" px={2}>
      <MDBadge badgeContent={badgeContent} color={color} size={size} />
    </MDBox>
  );
}

// Typechecking props for the BadgeCell
BadgeCell.propTypes = {
  badgeContent: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["default", "primary", "secondary", "error", "warning", "info", "success"]).isRequired,
  size: PropTypes.oneOf(["md", "lg"]).isRequired,
};

export default BadgeCell;
