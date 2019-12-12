import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Divider, Dialog, DialogActions } from "@material-ui/core";
import { SketchPicker } from "react-color";

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

export default function SideBarColorSettings({
  handleChangeColor,
color
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = e => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelectColor = e => {
    setOpen(false);
  };

  // const handleChangeColor = color => {
  //   console.log("hamsi", color.hex);
  //   setSelectedColor(color.hex);
  // };

  return (
    <div className={classes.root}>
      <Grid>
        <br />

        <Grid>Color:</Grid>
        <Grid xs={2} >
          
          <button
            onClick={handleClickOpen}
            style={{ backgroundColor: color }}
            className="colorbox"
          ></button>
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
              <SketchPicker color={color} onChange={handleChangeColor} />
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button
                 // onClick={handleSelectColor.selectedColor}
                  color="primary"
                  autoFocus
                  onClick={handleClose} 
                >
                  Select
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </Grid>
      <br />

      <br />
    </div>
  );
}

