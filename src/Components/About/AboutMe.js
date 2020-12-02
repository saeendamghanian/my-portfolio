import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  aboutMe: {
    paddingLeft: '2rem',
  },
  h2: {
    fontSize: '1.5rem',
  },
}));

const AboutMe = () => {
  const classes = useStyles();

  return (
    <Container className={classes.aboutMe}>
      <Typography variant='h2' className={classes.h2} align='left'>
        About ME
      </Typography>
      <Typography variant='body1' align='left'>
        Tempor deserunt adipisicing incididunt amet commodo adipisicing dolore fugiat veniam nostrud esse. Mollit consequat eu ullamco et ipsum commodo ullamco
        minim consequat reprehenderit enim qui deserunt fugiat. Cillum adipisicing duis adipisicing occaecat officia magna duis exercitation consectetur ut
        proident duis aliqua. Eu reprehenderit ad proident velit Lorem culpa nostrud. Culpa excepteur officia veniam id mollit occaecat ad laboris.
      </Typography>
    </Container>
  );
};

export default AboutMe;
