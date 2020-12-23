import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Box, Button, Card, CardActions, CardContent, Container, Typography } from '@material-ui/core';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

const services = [
	{
		title: 'Lizard',
		content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
		icon: <PhoneIphoneIcon fontSize='large' />,
	},
	{
		title: 'Lizard',
		content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
		icon: <PhoneIphoneIcon fontSize='large' />,
	},
	{
		title: 'Lizard',
		content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
		icon: <PhoneIphoneIcon fontSize='large' />,
	},
	{
		title: 'Lizard',
		content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
		icon: <PhoneIphoneIcon fontSize='large' />,
	},
	{
		title: 'Lizard',
		content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
		icon: <PhoneIphoneIcon fontSize='large' />,
	},
	{
		title: 'Lizard',
		content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
		icon: <PhoneIphoneIcon fontSize='large' />,
	},
	{
		title: 'Lizard',
		content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
		icon: <PhoneIphoneIcon fontSize='large' />,
	},
];

const useStyles = makeStyles(theme => ({
	card: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingBlock: '2rem',
		[theme.breakpoints.up('sm')]: {
			width: '50%',
		},
		[theme.breakpoints.up('md')]: {
			width: '33%',
		},
	},
	container: {
		paddingBlock: '5rem',
	},
	titleTypo: {
		position: 'relative',
		padding: '1.5rem',
		'&:before': {
			position: 'absolute',
			content: '""',
			top: 0,
			left: '50%',
			width: '50px',
			height: '2px',
			background: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
			transform: 'translateX(-50%)',
		},
	},
	box: {
		[theme.breakpoints.up('sm')]: {
			display: 'flex',
			flexWrap: 'wrap',
		},
	},
	largeAvatar: {
		width: theme.spacing(12),
		height: theme.spacing(12),
		backgroundColor: '#57d131',
	},
}));

export default function MyServices() {
	const classes = useStyles();

	return (
		<Container className={classes.container} component='section' maxWidth='lg'>
			<Typography className={classes.titleTypo} variant='h4' component='h2'>
				My <strong>Services</strong>
			</Typography>
			<Box className={classes.box}>
				{services.map(({ title, content, icon }) => (
					<Card className={classes.card} display='flex'>
						<Avatar className={classes.largeAvatar} alt='Profile Picture'>
							{icon}
						</Avatar>
						<CardContent>
							<Typography gutterBottom variant='body2' component='h5'>
								{title}
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
								{content}
							</Typography>
						</CardContent>
						<CardActions>
							<Button size='small' color='primary'>
								Learn More
							</Button>
						</CardActions>
					</Card>
				))}
			</Box>
		</Container>
	);
}
