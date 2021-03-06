import React from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Paper } from '@material-ui/core';

const messages = [
	{
		id: 1,
		primary: "“I'll be in the neighbourhood this week. Let's grab a bite to eat“",
		secondary: '— Brunch this week?',
		// person: '/static/images/avatar/5.jpg',
	},
	{
		id: 2,
		primary: `“Do you have a suggestion for a good present for John on his work
        anniversary. I am really confused & would love your thoughts on it.“`,
		secondary: '— Birthday Gift',
		// person: '/static/images/avatar/1.jpg',
	},
	{
		id: 3,
		primary: '“I am try out this new BBQ recipe, I think this might be amazing“',
		secondary: '— Recipe to try',
		// person: '/static/images/avatar/2.jpg',
	},
	{
		id: 4,
		primary: '“I have the tickets to the ReactConf for this year.“',
		secondary: '— Yes!',
		// person: '/static/images/avatar/3.jpg',
	},
	{
		id: 5,
		primary: '“My appointment for the doctor was rescheduled for next Saturday.“',
		secondary: "— Doctor's Appointment",
		// person: '/static/images/avatar/4.jpg',
	},
	{
		id: 6,
		primary: `“Menus that are generated by the bottom app bar (such as a bottom
            navigation drawer or overflow menu) open as bottom sheets at a higher elevation
            than the bar.“`,
		secondary: '— Discussion',
		// person: '/static/images/avatar/5.jpg',
	},
	{
		id: 7,
		primary: `“Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.“`,
		secondary: '— Summer BBQ',
		// person: '/static/images/avatar/1.jpg',
	},
];

const useStyles = makeStyles(theme => ({
	list: {
		marginBottom: '2rem',
		[theme.breakpoints.up('sm')]: {
			display: 'flex',
			flexWrap: 'wrap',
		},
	},
	listItem: {
		marginBottom: '2rem',
		[theme.breakpoints.up('sm')]: {
			width: '50%',
			alignItems: 'stretch',
		},
	},
	listItemAvatar: {
		marginRight: '2rem',
		largeAvatar: {
			width: theme.spacing(7),
			height: theme.spacing(7),
		},
	},
	largeAvatar: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
	listItemText: {
		position: 'relative',
		padding: '2rem',
		borderRadius: '5px',
		backgroundColor: '#cecece',
		'&:before': {
			top: '20px',
			left: '-15px',
			content: '""',
			borderStyle: 'solid',
			borderColor: 'transparent #cecece',
			borderWidth: '0 15px 15px 0',
			position: 'absolute',
		},
	},
}));

export default function Testimonial() {
	const classes = useStyles();

	return (
		<Paper square>
			<List className={classes.list}>
				{messages.map(({ id, primary, secondary, person }) => (
					<React.Fragment key={id}>
						<ListItem className={classes.listItem} alignItems='flex-start'>
							<ListItemAvatar className={classes.listItemAvatar}>
								<Avatar className={classes.largeAvatar} alt='Profile Picture' src={person} />
							</ListItemAvatar>
							<ListItemText
								className={classes.listItemText}
								primary={primary}
								primaryTypographyProps={{ gutterBottom: true, component: 'blockquote' }}
								secondary={secondary}
								secondaryTypographyProps={{ component: 'cite' }}
							/>
						</ListItem>
					</React.Fragment>
				))}
			</List>
		</Paper>
	);
}
