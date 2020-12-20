import React from 'react';
import { Box, createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import AboutMe from './AboutMe';
import MySkills from './MySkills';

const useStyles = makeStyles({
	root: {
		padding: '5rem 0',
	},
});

const customeTheme = createMuiTheme({
	overrides: {
		MuiPaper: {
			root: {
				backgroundColor: 'transparent',
			},
			elevation1: {
				boxShadow: 'none',
			},
			rounded: {
				borderRadius: 0,
			},
		},
	},
});

const About = () => {
	const classes = useStyles();
	return (
		<ThemeProvider theme={customeTheme}>
			<Box component='section' className={classes.root}>
				<AboutMe />
				<MySkills />
			</Box>
		</ThemeProvider>
	);
};

export default About;
