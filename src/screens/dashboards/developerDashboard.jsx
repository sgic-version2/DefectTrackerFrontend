import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import BarChart from "../../components/charts/bar";
import Doughtnut from "./../../components/charts/doughNut";
import LineChart from "../../components/charts/line";
import Radar from "../../components/charts/radar";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Segment } from "semantic-ui-react";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const DeveloperDashboard = () => {
  const [state, setState] = React.useState({
    BarChart: true,
    DoughnutChart: true,
    RadarChart: true,
    LineChart: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.BarChart}
                  onChange={handleChange("BarChart")}
                  value="BarChart"
                  color="primary"
                />
              }
              label="Bar Chart"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.DoughnutChart}
                  onChange={handleChange("DoughnutChart")}
                  value="DoughnutChart"
                  color="primary"
                />
              }
              label="Doughnut Chart"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.RadarChart}
                  onChange={handleChange("RadarChart")}
                  value="RadarChart"
                  color="primary"
                />
              }
              label="RadarChart"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.LineChart}
                  onChange={handleChange("LineChart")}
                  value="LineChart"
                  color="primary"
                />
              }
              label="LineChart"
            />
          </FormGroup>
        </Grid>
        <Grid container spacing={2}>
          {state.BarChart && (
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <BarChart />
              </Paper>
            </Grid>
          )}

          {state.DoughnutChart && (
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Doughtnut />
              </Paper>
            </Grid>
          )}

          {state.RadarChart && (
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Radar />
              </Paper>
            </Grid>
          )}

          {state.LineChart && (
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <LineChart />
              </Paper>
            </Grid>
          )}
        </Grid>
      </Paper>
    </div>
  );
};

export default DeveloperDashboard;
