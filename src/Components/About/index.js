import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import AboutMe from './AboutMe';

const useStyles = makeStyles({
  root: {
    padding: '5rem 0',
  }
});

  const About = () => {
    const classes = useStyles();
  return (
    <Box component='section' className={classes.root}>
      <AboutMe />
    </Box>
  );
};

export default About;
