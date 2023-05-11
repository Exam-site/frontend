import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import colgImg from '../assets/college1.jpg' 
import { fontSize } from '@mui/system';
import { useNavigate } from 'react-router-dom';

export default function SignInSide() {
    const navigate=useNavigate()
     return (
      <Grid container component="main" sx={{ height: '100vh' ,width:'100vw' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://storage.googleapis.com/ezap-prod/colleges/521/sri-venkateswara-university-tirupati-campus.jpg)',
            backgroundRepeat: 'no-repeat',
           
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
         >
            
         </Grid>
        
        <Grid item xs={12} sm={15} md={3} component={Paper} elevation={6} square sx={{backgroundColor:'#222222'}}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
              <Button
                type="button"
                fullWidth
                variant="contained"
                color='secondary'
                sx={{ mt: 3, mb: 2  }}
                onClick={()=>{navigate('/SignIn')}}
              >
                User Login
              </Button>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color='secondary'
                sx={{ mt: 3, mb: 2 }}
                onClick={()=>{navigate('/SignInadmin')}}
              >
                Admin Login
              </Button>
              
              
          </Box>
        </Grid>
      </Grid>
  );
}
