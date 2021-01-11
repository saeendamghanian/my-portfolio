import React from 'react';
import { Avatar, Box, Button, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

const services = [
	{
		id: 1,
		title: 'Lizard',
		content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
		icon: <PhoneIphoneIcon fontSize='large' />,
	},
	{
		id: 2,
		title: 'Lizard',
		content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
		icon: <PhoneIphoneIcon fontSize='large' />,
	},
	{
		id: 3,
		title: 'Lizard',
		content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
		icon: <PhoneIphoneIcon fontSize='large' />,
	},
	{
		id: 4,
		title: 'Lizard',
		content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
		icon: <PhoneIphoneIcon fontSize='large' />,
	},
	{
		id: 5,
		title: 'Lizard',
		content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
		icon: <PhoneIphoneIcon fontSize='large' />,
	},
	{
		id: 6,
		title: 'Lizard',
		content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
		icon: <PhoneIphoneIcon fontSize='large' />,
	},
	{
		id: 7,
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
		<Box className={classes.box}>
			{services.map(({ id, title, content, icon }) => (
				<Card key={id} className={classes.card} display='flex'>
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
	);
}
