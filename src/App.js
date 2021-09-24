import React from 'react';
import { createTheme, makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { theme } from './globalClasses/theme';
import { Typography } from '@material-ui/core';
import Header from './components/Header';
import HomeSlider from './components/HomeSlider';
import Product from './components/Product/Product';
import Footer from './components/Footer';
const useStyles = makeStyles(() => ({
  root: {
    color: theme?.status?.danger,
    '&$checked': {
      color: theme?.status?.danger,
    },
  },
  checked: {},
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <HomeSlider />
      <Product />
      <Typography color="primary" variant="h1">
        this is a react app
      </Typography>
      <Checkbox
        defaultChecked
        classes={{
          root: classes.root,
          checked: classes.checked,
        }}
      />
      <Footer />
    </>
  );
}

export default App;
