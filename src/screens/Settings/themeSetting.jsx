import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Divider, Card, CardMedia } from "@material-ui/core";
import { red, grey } from "@material-ui/core/colors";

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
    maxHeight: "100%",
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  card: {
    maxWidth: 345
  }
}));

const handleStoreThemeCookie=(e)=>{
  localStorage.setItem('backGroundImage',e.target.src);
}




export default function ThemeSettings() {
  const classes = useStyles();
    useEffect(() => {
    // console.log("bg image from local storage", localStorage.getItem('backGroundImage'))
    // console.log("dfgdjfg")
    });
  
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item></Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid>
                <Typography variant="h6">Choose Theme</Typography>
                <br />
              </Grid>

              <Grid container spacing={5}>
                <Grid item>
                  <Card className={classes.card}>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                    //   height="440"
                      image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                      title="Contemplative Reptile"
                      style={{height:"150px", cursor:"pointer"}}
                      onClick={handleStoreThemeCookie}
                    />
                  </Card>
                </Grid>

                <Grid item>
                  <Card className={classes.card}>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                    //   height="440"
                      image="http://getwallpapers.com/wallpaper/full/d/c/1/425500.jpg"
                      title="Contemplative Reptile"
                      style={{height:"150px", cursor:"pointer"}}
                      onClick={handleStoreThemeCookie}
                    />
                  </Card>
                </Grid>

                <Grid item>
                  <Card className={classes.card}>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                    //   height="440"
                      image="https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Fern-leaves-landscapes-hd-wallpapers-PIC-WPB005204.jpg"
                      title="Contemplative Reptile"
                      style={{height:"150px", cursor:"pointer"}}
                      onClick={handleStoreThemeCookie}
                    />
                  </Card>
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
