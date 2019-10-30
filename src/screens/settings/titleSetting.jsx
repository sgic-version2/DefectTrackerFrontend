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

export default function TitleSettings() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>



        
      

        <Grid>
            <Typography variant="subtitle2">Title</Typography>
            <br/>
            <Typography variant="subtitle2">Title appear in your browser tap and when switching application. Change your title in General configuration > Edit Setting</Typography>

        </Grid>

        <Grid>
        <FormControlLabel
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange('checkedB')}
            value="checkedB"
            color="primary"
          />
        }
        label="Show on dashboard sidebar"
      />
        </Grid>
        <Grid>
        When enabled, the title will appear below the logo.
        </Grid>

        <Grid>
            <Link>Update</Link>
        </Grid>

        <br/>
        <Divider/>
        <br/>
        
        

              
              

            </Grid>
          </Grid>
        </Grid>

      </Paper>
    </div>
  );
}
