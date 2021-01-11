import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Check } from '@material-ui/icons';
import { Stepper, Step, StepLabel, StepConnector, Typography, Tooltip, Fade, Box } from '@material-ui/core';

const ColorlibConnector = withStyles({
	alternativeLabel: {
		top: 22,
	},
	active: {
		'& $line': {
			backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
		},
	},
	completed: {
		'& $line': {
			backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
		},
	},
	line: {
		height: 3,
		border: 0,
		backgroundColor: '#eaeaf0',
		borderRadius: 1,
	},
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
	root: {
		backgroundColor: '#ccc',
		zIndex: 1,
		color: '#fff',
		width: 30,
		height: 30,
		display: 'flex',
		borderRadius: '50%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	active: {
		backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
		// boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
	},
	completed: {
		backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
	},
});

function ColorlibStepIcon(props) {
	const classes = useColorlibStepIconStyles();
	const { active, completed } = props;

	return (
		<div
			className={clsx(classes.root, {
				[classes.active]: active,
				[classes.completed]: completed,
			})}
		>
			{active || completed ? <Check /> : <div />}
		</div>
	);
}

ColorlibStepIcon.propTypes = {
	/**
	 * Whether this step is active.
	 */
	active: PropTypes.bool,
	/**
	 * Mark the step as completed. Is passed to child components.
	 */
	completed: PropTypes.bool,
	/**
	 * The label displayed in the step icon.
	 */
	icon: PropTypes.node,
};

const useStyles = makeStyles(theme => ({
	mySkillsContainer: {
		width: '100vw',
		paddingTop: '4rem',
		[theme.breakpoints.up('sm')]: {
			display: 'flex',
		},
		[theme.breakpoints.down('md')]: {
			paddingLeft: '1rem',
			paddingRight: '1rem',
		},
		[theme.breakpoints.up('md')]: {
			width: '60vw',
			margin: '0 auto',
		},
	},
	button: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	labelContainer: {
		paddingBottom: '1rem',
	},
	stepperTypo: {
		paddingTop: '2rem',
		paddingLeft: '2rem',
	},
	titleContainer: {
		position: 'relative',
		paddingTop: '2rem',
		[theme.breakpoints.up('sm')]: {
			width: '35%',
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
	stepper: {
		paddingTop: '1rem',
	},
	stepperContainer: {
		[theme.breakpoints.up('sm')]: {
			width: '100%',
		},
	},
}));

// const theme = createMuiTheme({
//     overrides: {
//         MuiStepLabel: {
//             root: {
//                 '&$alternativeLabel': {
//                     flexDirection: "column-reverse",
//                 },
//             },
//         }
//     }
// })

function getSteps() {
	return [
		{
			id: 1,
			step: 'Beginner',
		},
		{
			id: 2,
			step: 'Intermediate',
		},
		{
			id: 3,
			step: 'Professional',
		},
	];
}

function getSkills() {
	return [
		{ id: 1, skill: 'HTML5', level: 2 },
		{ id: 2, skill: 'CSS3', level: 2 },
		{ id: 3, skilll: 'JavaScript', level: 1 },
	];
}

export default function MySkills() {
	const classes = useStyles();
	const steps = getSteps();
	const skills = getSkills();

	const stepsElement = steps.map(({ id, step }) => (
		<Tooltip key={id} TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title={step} arrow>
			<Step>
				<StepLabel /* classes={{ labelContainer: classes.labelContainer }} */ StepIconComponent={ColorlibStepIcon}></StepLabel>
			</Step>
		</Tooltip>
	));

	const skillsElement = skills.map(({ id, skill, level }) => (
		/* <ThemeProvider theme={theme}> */
		<Box key={id}>
			<Typography classes={{ root: classes.stepperTypo }} variant='body2' component='h3' align='left'>
				{skill}
			</Typography>
			<Stepper classes={{ root: classes.stepper }} activeStep={level} connector={<ColorlibConnector />}>
				{stepsElement}
			</Stepper>
		</Box>
		/* </ThemeProvider> */
	));

	return (
		<Box className={classes.mySkillsContainer}>
			<Box className={classes.titleContainer}>
				<Typography className={classes.titleTypo} variant='h4' component='h2' align='left'>
					My <strong>Skills</strong>
				</Typography>
			</Box>
			<Box className={classes.stepperContainer}>{skillsElement}</Box>
		</Box>
	);
}
