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

const horizontalBarChartData = {
  labels: ["16-20", "21-25", "26-30", "31-36", "36-42", "42+"],
  datasets: [
    {
      label: "Activity",
      data: [10, 37, 25, 20, 20, 15],
      colors: [
        { label: "16-20", color: "info" },
        { label: "21-25", color: "primary" },
        { label: "26-30", color: "dark" },
        { label: "31-36", color: "secondary" },
        { label: "36-42", color: "primary" },
        { label: "42+", color: "info" }
      ]
    },
  ],
};

export default horizontalBarChartData;
