import React from "react";
import { Divider, Dialog, DialogActions } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { SketchPicker } from "react-color";
import { connect } from "react-redux";
import { changeSidebarColor } from './sideBarColorAction';

const mapState = state => ({
  sidBarColor: state.sideBarColor.sideBarColor
});

const actions = {
  changeSidebarColor: changeSidebarColor
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 1300,
    paddingTop: "20"
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  button: {
    margin: theme.spacing(1),
    Height: "100%"
  },
  input: {
    display: "none"
  }
}));

function SideBarColorSettings({ sidBarColor, changeSidebarColor }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelectColor = e => {
    setOpen(false);
  };

  const handleChangeColor = color => {
    changeSidebarColor(color.hex);
    
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item></Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid>
                <Typography variant="h6">Sidebar color</Typography>
                <br />
                <Grid xs={8} container sm spacing={3}>
                  <Grid xs={2}>Sidebar</Grid>
                  <Grid xs={2}>
                    <button
                      onClick={handleClickOpen}
                      style={{ backgroundColor: sidBarColor }}
                      className="colorbox"
                    ></button>
                  </Grid>
                </Grid>
                <br />
                <Grid xs={8} container sm spacing={3}>
                  <Grid xs={2}>
                    <Button
                      variant="hidden"
                      onClick={handleClickOpen}
                      className={classes.button}
                    ></Button>

                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      {/* <DialogTitle id="alert-dialog-title">"Pick Color"</DialogTitle> */}
                      <SketchPicker
                        color={"blue"}
                        onChange={handleChangeColor}
                      />
                      <DialogActions>
                        <Button onClick={handleClose} color="primary">
                          Cancel
                        </Button>
                        <Button
                          onClick={handleSelectColor}
                          color="primary"
                          autoFocus
                        >
                          Select
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Divider />
              <br />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default connect(mapState, actions)(SideBarColorSettings);
