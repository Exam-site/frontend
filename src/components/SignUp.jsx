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
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import {toast }from 'react-toastify';
import InputBox from './InputBox';





export default function SignUp() {
  const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const adminSchema = yup.object().shape({
  firstName:yup.string().required("Required"),
  lastName:yup.string().required("Required"),
  email: yup.string().matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,{message:'Invalid email'}),
  password:yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message:
        "Please enter a strong password:Such that it contains atleast one uppercase one lowercase one special character and one number"
    })
    .required("Required ")
});
const {
  register,
  control,
  handleSubmit,
  formState: { errors }
} = useForm({
  resolver: yupResolver(adminSchema)
});
const onSubmit = data => {
  console.log(JSON.stringify(data, null, 2));
  toast.success('user created successfully')
};
    const navigate=useNavigate()
  

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
            Admin Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <InputBox
                controlname='firstName'
                errors={errors.firstName}
                isRequired='true'
                isautoFocused='true'
                label='First Name'
                form={register}/>
              </Grid>
              <Grid item xs={12} sm={6}>
              <InputBox
                controlname='lastName'
                errors={errors.lastName}
                isRequired='true'
                label="Last Name"
                form={register}/>
              </Grid>
              <Grid item xs={12}>
              <InputBox
                controlname='email'
                errors={errors.email}
                isRequired='true'
                label='Email'
                form={register}/>
                </Grid>
              <Grid item xs={12}>
              <InputBox
                controlname='password'
                errors={errors.password}
                isRequired='true'
                type='password'
                label='Password'
                form={register}/>
                </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="secondary"
              onClick={handleSubmit(onSubmit)}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" onClick={()=>{navigate("/SignIn")}}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}