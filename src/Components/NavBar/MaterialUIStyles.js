import { makeStyles } from "@material-ui/core";

const bottomNavStyles = makeStyles(
  {
    root: {
      width: 500,
      backgroundColor: "transparent"
    }
  },
  { name: "MuiBottomNavigation" }
);

const bottomNavActStyles = makeStyles(
  {
    root: {
      "&:hover": {
        paddingTop: "30px"
      },
      "&$selected": {
        color: "#000"
      }
    },
    selected: {}
  },
  { name: "MuiBottomNavigationAction" }
);

export { bottomNavStyles, bottomNavActStyles };
