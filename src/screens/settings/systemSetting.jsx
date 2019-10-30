import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { Divider, FormControlLabel, Checkbox } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1300,
    paddingTop:'20',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function SystemSettings() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" >
          User Interface
          </Link>
          <Link color="inherit" href="/getting-started/installation/" >
          Look and feel
          </Link>
        </Breadcrumbs>
        <br/>
        
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item >
              <Typography variant="h6" component="h2">
              System Setting 
              </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" style={{ cursor: 'pointer' }}>
                  Logo
                </Typography>
              </Grid>
          <Grid item>
          <img src="https://png.pngtree.com/element_origin_min_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg" alt="Smiley face" height="42" width="42"/>
              </Grid>

        
        <Grid item xs={3}>
          <Link>Reset to default</Link>
        <Grid>
          <Typography variant="subtitle2">We Suggest a logo size of 368px width by 64px height</Typography>
        </Grid>
        <br/>

        <Grid>
          <Typography variant="h6">Upload a file</Typography>
        </Grid>

        <Grid>
        <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          Upload
        </Button>
      </label>
        </Grid>
        </Grid>
        <Divider/>
        <br/>

        
        

              
              

            </Grid>
          </Grid>
        </Grid>

      </Paper>
    </div>
  );
}
