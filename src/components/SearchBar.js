import { Box, Button, Container, Link } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import SearchIcon from '@material-ui/icons/Search';
import { theme } from '../globalClasses/theme';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
const useStyles = makeStyles(() => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '65ch',
    },
  },
  mainHeader: {
    padding: '1em 0',
  },
  imageContainer: {
    width: 60,
    borderRadius: '50%',
  },
  btnLinks: {
    color: '#fff',
    fontWeight: 600,
    marginLeft: 30,
    marginRight: 30,
  },
  MainForm: {
    marginLeft: 30,
  },
  form_area: {
    position: 'relative',
    width: '70ch',
    '& > div': {
      width: '100%',
    },
  },
  search_btn: {
    top: 0,
    background: theme?.palette?.primary,
    height: 56,
    borderRadius: '0 5px 5px 0',
    right: 0,
    width: 'fit-content',
    position: 'absolute',
  },
  search_icon: {
    color: '#ddd',
  },
  linkItems: {
    '& > a': {
      marginLeft: 30,
      fontSize: 24,
    },
  },
  GuestSignup: {
    fontWeight: 600,
    '&:hover': {
      background: '#00c853',
      color: '#fff',
      boxShadow:
        ' 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);',
    },
  },
}));
const SearchBar = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.mainHeader}>
        <Container>
          <div>
            <Box display="flex" alignItems="center">
              <Box>
                <img
                  className={classes.imageContainer}
                  src="https://www.pngitem.com/pimgs/m/287-2874878_smart-farm-icon-png-png-download-icon-for.png"
                  alt=""
                />
              </Box>
              <Box flexGrow={1} className={classes.MainForm}>
                <form className={classes.root} noValidate autoComplete="off">
                  <div className={classes.form_area}>
                    <TextField
                      id="outlined-basic"
                      label="Search Your Product.."
                      variant="outlined"
                    />
                    <Button className={classes.search_btn}>
                      <SearchIcon className={classes.search_icon} />
                    </Button>
                  </div>
                </form>
              </Box>
              <Box
                className={classes.linkItems}
                display="flex"
                alignItems="center"
              >
                <Link href="#">
                  <FavoriteBorderIcon />
                </Link>
                <Link href="#">
                  <AiOutlineShoppingCart />
                </Link>
                <Button
                  className={classes.btnLinks}
                  variant="contained"
                  color="primary"
                >
                  Login
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.GuestSignup}
                >
                  Guest Signup
                </Button>
              </Box>
            </Box>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SearchBar;
