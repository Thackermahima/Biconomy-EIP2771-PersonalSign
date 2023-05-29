import React from "react";
import { AppBar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const useStyles = makeStyles((theme) => ({
    nav: {
      height: "70px",
      boxShadow: "none",
      background: "inherit",
      marginBottom: "40px",
      borderBottom: "2px solid black",
      "@media (max-width:1100px)": {
        padding: "0 20px",
      },
    },
    flexContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "auto",
      padding: 0,
      maxWidth: 1080,
      width: "100%",
    },
    logo: {
      height: "25px",
      marginTop: 2
    },
  }));
const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" classes={{ root: classes.nav }}>
      <div className={classes.flexContainer}>
        {/* <NavLink to="/"> */}
          {/* <img src="img/logo.svg" alt="logo" className={classes.logo} /> */}
        {/* </NavLink> */}
        <ConnectButton />
      </div>
    </AppBar>
  );
};



export default Navbar;