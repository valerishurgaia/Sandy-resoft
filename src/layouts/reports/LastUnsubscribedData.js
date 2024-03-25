import DefaultCell from "layouts/dashboards/sales/components/DefaultCell";
import BadgeCell from "layouts/dashboards/sales/components/BadgeCell";


const dataLastUnsubscribed = {
  columns: [
    { Header: "Name", accessor: "name",  align: "start", width: "30%"},
    { Header: "Email", accessor: "email", align: "start", width: "30%" },
    { Header: "List", accessor: "list", align: "start", width: "30%" },
    { Header: "Date", accessor: "date", align: "start", width: "30%" },
    { Header: "Status", accessor: "status", align: "center", width: "10%" },
  ],
  rows: [
    {
      name: <DefaultCell>Floyd</DefaultCell>,
      email: <DefaultCell>dmhall345@gmail.com</DefaultCell>,
      list: <DefaultCell>Innonde Master List</DefaultCell>,
      date: <DefaultCell>Dec 19, 2023, 10:28AM</DefaultCell>,
      status: <BadgeCell badgeContent="Unsubscribed" size="xl" color="error"/>
    },
    {
        name: <DefaultCell>Floyd</DefaultCell>,
        email: <DefaultCell>dmhall345@gmail.com</DefaultCell>,
        list: <DefaultCell>Innonde Master List</DefaultCell>,
        date: <DefaultCell>Dec 19, 2023, 10:28AM</DefaultCell>,
        status: <BadgeCell badgeContent="Unsubscribed" size="xl" color="error"/>
      },
      {
        name: <DefaultCell>Floyd</DefaultCell>,
        email: <DefaultCell>dmhall345@gmail.com</DefaultCell>,
        list: <DefaultCell>Innonde Master List</DefaultCell>,
        date: <DefaultCell>Dec 19, 2023, 10:28AM</DefaultCell>,
        status: <BadgeCell badgeContent="Unsubscribed" size="xl" color="error"/>
      },
  ],
};

export default dataLastUnsubscribed;