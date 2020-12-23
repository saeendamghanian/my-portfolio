import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@material-ui/core';
import bg from '../../images/image_1.jpg';

const useStyles = makeStyles(theme => ({
	card: {
		[theme.breakpoints.down('sm')]: {
			padding: '0 .5rem',
		},
		[theme.breakpoints.up('sm')]: {
			padding: '0 2rem',
		},
		[theme.breakpoints.up('md')]: {
			display: 'flex',
			flexDirection: 'row',
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
		position: 'relative',
		textAlign: 'justify',
		paddingLeft: 0,
		[theme.breakpoints.down('sm')]: {
			padding: '1rem 0',
		},
	},
	contentContainer: {
		[theme.breakpoints.down('sm')]: {
			paddingTop: '3rem',
		},
		[theme.breakpoints.up('md')]: {
			paddingLeft: '3rem',
		},
	},
	titleTypo: {
		'&:before': {
			position: 'absolute',
			content: '""',
			top: 0,
			left: 0,
			width: '50px',
			height: '2px',
			background: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
		},
	},
}));

export default function AboutMe() {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<Box>
				<CardMedia className={classes.cardMedia} component='img' alt='' height='440' image={bg} title='' />
			</Box>
			<Box className={classes.contentContainer}>
				<CardContent className={classes.cardContent}>
					<Typography className={classes.titleTypo} gutterBottom variant='h4' component='h2'>
						About <strong>Me</strong>
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
				<CardActions>
					<Button variant='contained' size='small' color='secondary'>
						Share
					</Button>
					<Button variant='contained' size='small' color='secondary'>
						Learn More
					</Button>
				</CardActions>
			</Box>
		</Card>
	);
}
