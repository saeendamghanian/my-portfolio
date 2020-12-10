import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Hidden,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  CssBaseline,
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
} from '@material-ui/core';
// import { bottomNavStyles, bottomNavActStyles } from './MaterialUIStyles';
import logo from '../../images/logo.png';
import './style.css';
import clsx from 'clsx';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

const NavBar = props => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const [state, setState] = React.useState({
    top: false,
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleDrawer = (anchor, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {['Recents', 'Favorites', 'Nearby'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  // bottomNavStyles();
  // bottomNavActStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar color='default'>
          <Toolbar className={classes.toolbar}>
            <Hidden mdUp>
              <IconButton edge='start' className={classes.menuButton} onClick={toggleDrawer('top', true)} color='inherit' aria-label='open drawer'>
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer anchor='top' open={state.top} onClose={toggleDrawer('top', false)} onOpen={toggleDrawer('top', true)}>
                {list('top')}
              </SwipeableDrawer>
            </Hidden>
            <Box component='img' className='App-logo' src={logo} alt='' />
            <Hidden smDown>
              <BottomNavigation value={value} showLabels onChange={handleChange}>
                <BottomNavigationAction label='Recents' />
                <BottomNavigationAction label='Favorites' />
                <BottomNavigationAction label='Nearby' />
              </BottomNavigation>
            </Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
};

export default NavBar;
