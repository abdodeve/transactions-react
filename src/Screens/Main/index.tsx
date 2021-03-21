import React from "react";
import { makeStyles } from "@material-ui/core";
import Routes from "./../../Navigation/Routes";
import NavbarDrawer from "./NavBar";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
}));

const MainScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavbarDrawer>
        <Routes />
      </NavbarDrawer>
    </div>
  );
};

export default MainScreen;
