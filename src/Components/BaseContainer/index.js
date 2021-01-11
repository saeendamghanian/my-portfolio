import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	container: {
		paddingBlock: '2rem',
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
}));

export default function BaseContainer(props) {
	const classes = useStyles();
	const { title, rest } = props;

	return (
		<Container className={classes.container} component='section' maxWidth='lg'>
			<Typography className={classes.titleTypo} variant='h4' component='h2'>
				{title.split(' ')[0]} <strong>{title.split(' ')[1]}</strong>
			</Typography>
			{rest}
		</Container>
	);
}
