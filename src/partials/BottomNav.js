import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';



const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

const BottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}>
      <BottomNavigationAction label="Home"  icon={HomeIcon} />
      {/**<BottomNavigationAction label="Favorites" value="favorites" icon={FavoriteIcon} />*/}
      <BottomNavigationAction label="Hire Artisan" icon={PersonAddIcon} />
      <BottomNavigationAction label="More" icon={MoreHorizIcon} />
    </BottomNavigation>
  );
}


export default BottomNav;