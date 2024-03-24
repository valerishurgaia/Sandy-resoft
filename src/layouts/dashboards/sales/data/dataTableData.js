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

// Sales dashboard components
import ProductCell from "layouts/dashboards/sales/components/ProductCell";
import RefundsCell from "layouts/dashboards/sales/components/RefundsCell";
import DefaultCell from "layouts/dashboards/sales/components/DefaultCell";

// Images
import nikeV22 from "assets/images/ecommerce/blue-shoe.jpeg";
import businessKit from "assets/images/ecommerce/black-mug.jpeg";
import blackChair from "assets/images/ecommerce/black-chair.jpeg";
import wirelessCharger from "assets/images/ecommerce/bang-sound.jpeg";
import tripKit from "assets/images/ecommerce/photo-tools.jpeg";

const dataTableData = {
  columns: [
    { Header: "Link(URL)", accessor: "link", width: "55%" },
    { Header: "Unique", accessor: "unique",  align: "center"},
    { Header: "Total", accessor: "total", align: "center" },
    { Header: "Export", accessor: "export", align: "center" },
    { Header: "Import", accessor: "import", align: "center" },
  ],

  rows: [
    {
      link: <DefaultCell>https://sendy.innonde.net/w/HpxSwVceVNy892e4JPBEm0g</DefaultCell>,
      unique: <DefaultCell>15</DefaultCell>,
      total: <DefaultCell>23</DefaultCell>,
      export: <RefundsCell icon={{ color: "light", name: "download" }} />,
      import: <RefundsCell icon={{ color: "light", name: "add" }} />,
    },
    {
      link: <DefaultCell>https://sendy.innonde.net/w/HpxSwVceVNy892e4JPBEm0g</DefaultCell>,
      unique: <DefaultCell>20</DefaultCell>,
      total: <DefaultCell>34</DefaultCell>,
      export: <RefundsCell icon={{ color: "light", name: "download" }} />,
      import: <RefundsCell icon={{ color: "light", name: "add" }} />,
    },
    {
      link: <DefaultCell>https://sendy.innonde.net/w/HpxSwVceVNy892e4JPBEm0g</DefaultCell>,
      unique: <DefaultCell>34</DefaultCell>,
      total: <DefaultCell>56</DefaultCell>,
      export: <RefundsCell icon={{ color: "light", name: "download" }} />,
      import: <RefundsCell icon={{ color: "light", name: "add" }} />,
    },
  ],
};

export default dataTableData;
