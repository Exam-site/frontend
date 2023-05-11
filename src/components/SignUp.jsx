import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import img from "../assets/logo.png";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import InputBox from "./InputBox";
import { InputLabel, MenuItem, Select } from "@mui/material";

export default function SignUp() {
  
  // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

  const adminSchema = yup.object().shape({
    Name: yup.string().required("Required"),
    rollnumber: yup.string().required("Required"),
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        { message: "Invalid email" }
      ),
    phno: yup.string().max(10).required("Required "),
    dob: yup
      .date()
      .test("age-limit", "you should be above 15", (dt) => {
        console.log(dt);
        return new Date().getFullYear() - dt.getFullYear() > 15;
      })
      .required(),
    branch:yup.string().required("Required ") ,
    year: yup.string().required("Required "),
    sem:yup.string().required("Required ")
   });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(adminSchema),
  });
  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
    toast.success("user created successfully");
  };
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sri Venkateswara University
        </Typography>

        <img src={img} alt="logo" height="70px" width="70px" />
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputBox
                type="text"
                controlname="rollnumber"
                errors={errors.rollnumber}
                isRequired="true"
                label="Roll Number"
                isautoFocused="true"
                form={register}
              />
            </Grid>
            <Grid item xs={12}>
              <InputBox
                controlname="Name"
                errors={errors.Name}
                isRequired="true"
                label="Name"
                form={register}
              />
            </Grid>

            <Grid item xs={12}>
              <InputBox
                controlname="email"
                errors={errors.email}
                isRequired="true"
                label="Email"
                form={register}
              />
            </Grid>
            <Grid item xs={12}>
              <InputBox
                controlname="phno"
                errors={errors.phno}
                isRequired="true"
                type="number"
                label="Phone No"
                form={register}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <InputLabel>Date of Birth</InputLabel>
            </Grid>

            <Grid item xs={12} md={6}>
              <InputBox
                controlname="dob"
                errors={errors.dob}
                isRequired
                label=""
                type={"date"}
                form={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": {
                      borderColor: "#ffffff",
                    },
                  },
                  '& .MuiMenu-list':{
                    backgroundColor:'#222222'
                  }
                }}
                select
                label="Branch"
                {...register('branch')}
                id='branch'
                  error={errors.branch?true:false}
                  fullWidth
              >
                <MenuItem  value={10}>CSE</MenuItem>
                <MenuItem value={20}>ECE</MenuItem>
                <MenuItem value={30}>EEE</MenuItem>
                <MenuItem value={30}>MECH</MenuItem>
                <MenuItem value={30}>CIVIL</MenuItem>
                <MenuItem value={30}>CHEMICAL</MenuItem>
              </TextField>
              <Typography variant="inherit" color="#ff0000">
                {errors.branch?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": {
                      borderColor: "#ffffff",
                    },
                  },
                }}
                label="studying year"
                fullWidth
                select
                id='year'
                {...register('year')}
                error={errors.year?true:false}

              >
                <MenuItem value={10}>I year</MenuItem>
                <MenuItem value={20}>II year</MenuItem>
                <MenuItem value={30}>III year</MenuItem>
                <MenuItem value={30}>Final year</MenuItem>
              </TextField>
              <Typography variant="inherit" color="#ff0000">
                {errors.year?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": {
                      borderColor: "#ffffff",
                    },
                  },
                }}
                label="Semester"
                select
                fullWidth
                id='sem'
                error={errors.sem?true:false}

                {...register('sem')}
              >
                <MenuItem value={10}>I SEM</MenuItem>
                <MenuItem value={20}>II SEM</MenuItem>
              </TextField>
              <Typography variant="inherit" color="#ff0000">
                {errors.sem?.message}
              </Typography>
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
              <Link
                href="#"
                variant="body2"
                onClick={() => {
                  navigate("/SignIn");
                }}
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
