import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import bg from '../../images/image_1.jpg';
import { Box } from '@material-ui/core';

const useStyles = makeStyles( (theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      padding: '0 2rem',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '0 2rem',
    },
    [theme.breakpoints.up('md')]: {
      display: "flex",
      flexDirection: "row",
      alignItems: 'center',
      maxWidth: '70%',
      margin: '0 auto',
      padding: '0',
    },
  },
  cardMedia: {
    // maxWidth: "90%",
    // margin: '3rem auto 1rem auto',
    [theme.breakpoints.up('md')]: {
      // maxWidth: "55%",
      // margin: '3rem auto 1rem auto',
      height: 'auto',
    },
  },
  cardContent: {
    textAlign: 'justify',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem 0',
    }
  },
  boxContainer: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: '2rem',
    },
  },
}));

const AboutMe = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Box>
        <CardMedia className={classes.cardMedia}
          component="img"
          alt=""
          height="440"
          image={bg}
          title=""
        />
      </Box>
      <Box className={classes.boxContainer}>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default AboutMe;
