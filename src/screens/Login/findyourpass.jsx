import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { message } from 'antd';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center"></Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '90%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [state, setstate] = useState({
    password: '',
    confirmpassword:''
  })
 
  const handleSubmit = () => {
    window.location.href = "/defect/company"
  };
  const handlePassword = (e) => {
    setstate({
      password: e.target.value
    })
  }
  const handleConfirmPassword = event => {
    setstate({
      confirmpassword: event.target.value
    })
  
    if(state.password === state.confirmpassword) {
      message.info('success');
      console.log("hgj");
      
    }else{
      message.error('error');
    }
  
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        <Typography component="h1" variant="h5">
          Enter New Password
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userdetails"
            name="password"
            label="New password"
            type="password"
            autoFocus
            value={state.password}
            onChange={handlePassword}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userdetails"
            name="confirmpassword"
            label="Confirm new password"
            type="password"
            autoFocus
            value={state.confirmpassword}
            onChange={handleConfirmPassword}
          />


          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >

            submit
          </Button>

        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}