import MDBox from "../../components/MDBox";
import Grid from "@mui/material/Grid";
import PieChart from "../../examples/Charts/PieChart";
import pieChartData from "../pages/charts/data/pieChartData";
import HorizontalBarChart from "../../examples/Charts/BarCharts/HorizontalBarChart";
import horizontalBarChartData from "../pages/charts/data/horizontalBarChartData";

function ChartComponent() {
  return (
    <MDBox>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <PieChart
            title="Top 10 Countries"
            height="20rem"
            chart={pieChartData}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <HorizontalBarChart
            title="Activity"
            height="20rem"
            chart={horizontalBarChartData}
          />
        </Grid>
      </Grid>
    </MDBox>
  )
}
export default ChartComponent;