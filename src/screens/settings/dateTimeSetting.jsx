import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Divider, Select, MenuItem} from '@material-ui/core';
import * as moment from 'moment';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, withStyles } from '@material-ui/core/styles';

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

const BootstrapInput = withStyles(theme => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);

  
  export default function DateTimeSetting() {
      const handleChangeTime=(e)=>{
          setTFormat(e.target.value)
          console.log(tFormat)
       }

       const handleChangeDate=(e)=>{
        setDFormat(e.target.value)
        console.log(dFormat)
     }
     const handleChangeFullDate=(e)=>{
        setFullFormat(e.target.value)
     }
      
const [tFormat, setTFormat] = useState("--");
const [dFormat, setDFormat] = useState("--")
const [fullFormat, setFullFormat] = useState("--")


  const classes = useStyles();

  return (
    <div className={classes.root}>
       
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
        <Grid spacing={2}>
            <Typography variant="h6">Date and Time formats</Typography>
            <br/>
            <Grid xs={8} container sm spacing={3}>
                <Grid  xs={2}>Time Format</Grid>
                <Grid  xs={2}>
                <Select
         value={tFormat}
          onChange={handleChangeTime}
          input={<BootstrapInput name="age" id="age-customized-select" />}
        >

          <MenuItem value={'HH:mm'}>HH:mm</MenuItem>
          <MenuItem value={'h:mm a'}>h:mm a</MenuItem>
        </Select>
                </Grid>
                <Grid  xs={2}>{tFormat ==='HH:mm' ? moment().format("h:mm a") : moment().format("HH:mm")}</Grid>
                <Grid  xs={2}>

                    </Grid>
        </Grid>
            <br/>
        <Grid xs={8} container sm spacing={3}>
                <Grid  xs={2}>Date Format</Grid>
                <Grid  xs={2}>
                <Select
         value={dFormat}
          onChange={handleChangeDate}
          input={<BootstrapInput name="age" id="age-customized-select" />}
        >
          <MenuItem value={'YYYY MM DD'}>YYYY MM DD</MenuItem>
          <MenuItem value={'DD MM YYYY'}>DD MM YYYY</MenuItem>
        </Select>
                </Grid>
                <Grid  xs={2}>{dFormat === 'YYYY MM DD' ? moment().format('YYYY MM DD') : moment().format('DD MM YYYY')}</Grid>

        </Grid>

        <br/>
        <Grid xs={8} container sm spacing={3}>
                <Grid  xs={2}>Day Format</Grid>
                <Grid  xs={2}>
                <Select
         value={fullFormat}
          onChange={handleChangeFullDate}
          input={<BootstrapInput name="age" id="age-customized-select" />}
        >
          <MenuItem value={'MMMM Do YYYY, h:mm:ss a'}>MMMM Do YYYY, h:mm:ss a</MenuItem>
          <MenuItem value={'DD MM YYYY'}>DD MM YYYY</MenuItem>
        </Select>
                </Grid>
                <Grid  xs={2}>{fullFormat === 'MMMM Do YYYY, h:mm:ss a' ? moment().format('MMMM Do YYYY, h:mm:ss a') : moment().format('DD MM YYYY')}</Grid>

        </Grid>
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
