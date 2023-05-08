import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider ,} from '@mui/material/styles';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2"
    }
  },
});
const themeDark = createTheme({
  palette: {
    primary:{
      main:'#ffffff',
    },
    secondary:{
      main:'#f5ef56',

    },
    background: {
      default: "#222222",
    },
    text:{
      primary:'#ffffff',
      secondary:'#ffffff',
    }
  },
  // components: {
  //   MuiTextField: {
  //     styleOverrides: {
  //       root: sx({
  //         "& .MuiOutlinedInput-root": {
  //           "& > fieldset": {
  //             borderColor: "orange",
  //           },
  //         },
  //       }),
  //     },
  //   },
  // }
});




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme = { themeDark }>
    <ToastContainer ></ToastContainer>
    <BrowserRouter>

      <App />
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);