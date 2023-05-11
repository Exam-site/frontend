
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import img from '../assets/logo.png';
import { Formik } from 'formik';
import { number } from 'prop-types';
import * as yup from "yup";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputBox from './InputBox';
import PropTypes from 'prop-types';
import {toast }from 'react-toastify';





export default function SignIn({isadminlogin}) {
  const navigate=useNavigate()
  const studentSchema = yup.object().shape({
    rollnumber:yup.string().max(8).required("Required"),
    dob:yup.string().required("Required ")
    });
  
  const adminSchema = yup.object().shape({
    email: yup.string().matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,{message:'Invalid email'}),
    password:yup.string().required("Required ")
    });
    const {
      register,
      control,
      handleSubmit,
      formState: { errors }
    } = useForm({
      resolver: yupResolver(isadminlogin?adminSchema:studentSchema)
    });
    const onSubmit = data => {
      console.log(JSON.stringify(data, null, 2));
      toast.success('Signed In Successfully!')
    };
  

  return (
    
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        
       
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

            
          }}
        >
          <Typography component="h1" variant="h5">
            Sri Venkateswara University
          </Typography>
          
          
          <img src={img} alt="logo" height='70px' width='70px' />

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={2}>
          
          <Grid item xs={12}>

          <InputBox
                controlname={ isadminlogin?'email':'rollnumber'}
                errors={isadminlogin? errors.email:errors.rollnumber}
                isRequired
                type={isadminlogin?'email':'text'}
                label={isadminlogin?'Email':'Roll Number'}
                form={register}/>
                </Grid>
              <Grid item xs={12}>

            <InputBox
                controlname={ isadminlogin?'password':'dob'}
                errors={isadminlogin? errors.password:errors.dob}
                isRequired
                type={isadminlogin?'password':'date'}
                label={isadminlogin?'Password':''}
                form={register}/>
</Grid>   </Grid>         
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color='secondary'
              onClick={handleSubmit(onSubmit)}

            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={()=>{navigate("/SignUp")}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}
SignIn.propTypes={
  isadminlogin: PropTypes.bool
}
SignIn.defaultProps={
  isadminlogin:false
}