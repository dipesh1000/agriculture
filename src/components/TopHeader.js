import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { theme } from '../globalClasses/theme';
import { Container, Link } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  customToolBar: {
    minHeight: 35,
  },
  customLinks: {
    color: '#fff',
  },
  top_menu_flex: {
    color: '#fff',
  },
  top_menu_flex: {
    width: '100%',
  },
  site_description: {
    color: '#fff',
  },
}));
const TopHeader = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" elevation={0}>
        <Container>
          <Box display="flex" className={classes.top_menu_flex}>
            <Box p={1} flexGrow={1}>
              <Typography className={classes.site_description}>
                Buy Quality Product | Organic Product
              </Typography>
            </Box>
            <Box p={1}>
              <Link href="#" className={classes.customLinks}>
                <FacebookIcon />
              </Link>
            </Box>
            <Box p={1}>
              <Link href="#" className={classes.customLinks}>
                <TwitterIcon />
              </Link>
            </Box>
            <Box p={1}>
              <Link href="#" className={classes.customLinks}>
                <YouTubeIcon />
              </Link>
            </Box>
          </Box>
        </Container>
      </AppBar>
    </>
  );
};

export default TopHeader;
