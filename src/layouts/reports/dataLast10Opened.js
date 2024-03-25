import DefaultCell from "layouts/dashboards/sales/components/DefaultCell";
import BadgeCell from "layouts/dashboards/sales/components/BadgeCell";
import MDBadge from "components/MDBox";

const dataLast10Data = {
  columns: [
    { Header: "Name", accessor: "name",  align: "start", width: "30%"},
    { Header: "Email", accessor: "email", align: "start", width: "30%" },
    { Header: "List", accessor: "list", align: "start", width: "30%" },
    { Header: "Status", accessor: "status", align: "center", width: "10%" },
  ],
  rows: [
    {
      name: <DefaultCell>Floyd</DefaultCell>,
      email: <DefaultCell>dmhall345@gmail.com</DefaultCell>,
      list: <DefaultCell>Innonde Master List</DefaultCell>,
      status: <BadgeCell badgeContent="Subscribed" size="xl" color="success"/>
    },
    {
        name: <DefaultCell>Floyd</DefaultCell>,
        email: <DefaultCell>dmhall345@gmail.com</DefaultCell>,
        list: <DefaultCell>Innonde Master List</DefaultCell>,
        status: <BadgeCell badgeContent="Subscribed" size="xl" color="success"/>
      },
      {
        name: <DefaultCell>Floyd</DefaultCell>,
        email: <DefaultCell>dmhall345@gmail.com</DefaultCell>,
        list: <DefaultCell>Innonde Master List</DefaultCell>,
        status: <BadgeCell badgeContent="Subscribed" size="xl" color="success"/>
      },
  ],
};

export default dataLast10Data;
