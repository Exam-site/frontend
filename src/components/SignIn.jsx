
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




export default function SignIn() {
  const navigate=useNavigate()
  

      
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
            Admin Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            
            <TextField 
            sx={{
              "& .MuiOutlinedInput-root":{
                "& > fieldset": {
                  borderColor: "#ffffff",
                 }
              }
              
            }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              bordercolor="#ffffff"
            />
            <TextField
              sx={{
              "& .MuiOutlinedInput-root":{
                "& > fieldset": {
                  borderColor: "#ffffff",
                  }
              }

              }}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color='secondary'
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