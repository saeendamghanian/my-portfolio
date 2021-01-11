import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box, Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import img from '../../images/p1.jpg';
import { CSSTransition } from 'react-transition-group';
import './index.css';

const portfolios = [
	{
		id: 1,
		title: 'Square Box Mockup',
		category: 'MOCKUP',
		label: '',
	},
	{
		id: 2,
		title: 'Product Box Package Mockup',
		category: 'MOCKUP',
		label: '',
	},
	{
		id: 3,
		title: 'Packaging Brand',
		category: 'PACKAGING',
		label: '',
	},
	{
		id: 4,
		title: 'Creative Package Design',
		category: 'PACKAGING',
		label: '',
	},
	{
		id: 5,
		title: 'Isometric 3D Extrusion',
		category: 'TYPOGRAPHY',
		label: '',
	},
	{
		id: 6,
		title: 'White Space Photography',
		category: 'PHOTOGRAPHY',
		label: '',
	},
];

const useStyles = makeStyles(theme => ({
	bottomNavigation: {
		backgroundColor: 'transparent',
		[theme.breakpoints.only('xs')]: {
			flexWrap: 'wrap',
		},
	},
	bottomNavigationAction: {
		[theme.breakpoints.up('sm')]: {
			flex: 0,
			paddingRight: '2rem',
			paddingLeft: '2rem',
			minWidth: '15%',
		},
	},
	cards: {
		[theme.breakpoints.up('sm')]: {
			display: 'flex',
			flexWrap: 'wrap',
		},
	},
	card: {
		padding: '2rem',
		[theme.breakpoints.up('sm')]: {
			width: '50%',
		},
		[theme.breakpoints.up('md')]: {
			width: '33%',
		},
	},
	zoomIn: {
		opacity: 1,
		transform: 'translate3d(0px, 0px, 0px)',
		transitionProperty: 'opacity, transform',
		transitionDuration: '0.4s',
		transitionDelay: '0ms',
	},
	zoomOut: {
		opacity: 0,
		transform: 'scale(0.001)',
		transitionProperty: 'opacity, transform',
		transitionDuration: '0.4s',
		transitionDelay: '0ms',
	},
}));

export default function FeaturedPortfolio() {
	const classes = useStyles();
	const [value, setValue] = React.useState('ALL');
	const [checked, setChecked] = React.useState(true);

	const zoomtoggle = () => {
		setChecked(prev => !prev);
	};

	const handleChange = (event, newValue) => {
		setValue(newValue);
		zoomtoggle();
	};

	React.useEffect(zoomtoggle, [value]);

	return (
		<Box>
			<BottomNavigation className={classes.bottomNavigation} value={value} onChange={handleChange} showLabels>
				<BottomNavigationAction className={classes.bottomNavigationAction} label='All' value='ALL' />
				<BottomNavigationAction className={classes.bottomNavigationAction} label='Packaging' value='PACKAGING' />
				<BottomNavigationAction className={classes.bottomNavigationAction} label='Mockup' value='MOCKUP' />
				<BottomNavigationAction className={classes.bottomNavigationAction} label='Typography' value='TYPOGRAPHY' />
				<BottomNavigationAction className={classes.bottomNavigationAction} label='Photography' value='PHOTOGRAPHY' />
			</BottomNavigation>
			<Box className={classes.cards}>
				{portfolios
					.filter(({ category }) => (value === 'ALL' ? true : category === value))
					.map(({ id, title, category }) => (
						<CSSTransition classNames='alert' in={checked} timeout={300}>
							<Card className={classes.card}>
								<CardActionArea>
									<CardMedia component='img' alt='Contemplative Reptile' image={img} title='Contemplative Reptile' />
									<CardContent>
										<Typography gutterBottom variant='h5' component='h2'>
											{title}
										</Typography>
										<Typography variant='body2' color='textSecondary' component='p'>
											{category}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</CSSTransition>
					))}
			</Box>
		</Box>
	);
}
