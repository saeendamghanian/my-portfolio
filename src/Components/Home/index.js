import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import bg from "./image_1.jpg";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    height: "800px",
  },
});

const Home = () => {
  const classes = useStyles();
  return <Box component="section" className={classes.root}></Box>;
};

export default Home;
