import {
  Box,
  Button,
  CardActions,
  CardContent,
  Container,
  IconButton,
  Typography,
} from '@material-ui/core';
import React from 'react';
import Product_card from './Product_card';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import EcoIcon from '@material-ui/icons/Eco';
const products = [
  {
    id: 1,
    name: 'Lemon Dang',
    url: 'https://www.metrotarkari.com/Media/lemon_dang.jpg',
  },
  {
    id: 2,
    name: 'Lemon Dang',
    url: 'https://www.metrotarkari.com/Media/lemon_dang.jpg',
  },
  {
    id: 3,
    name: 'Lemon Dang',
    url: 'https://www.metrotarkari.com/Media/lemon_dang.jpg',
  },
  {
    id: 4,
    name: 'Lemon Dang',
    url: 'https://www.metrotarkari.com/Media/lemon_dang.jpg',
  },
];
const useStyles = makeStyles({
  root: {
    maxWidth: 340,
    margin: 20,
    borderBottom: '5px solid #00c853',
    '&:first-child': {
      margin: '20px 20px 20px 0',
    },
    '&:last-child': {
      margin: '20px 0 20px 20px',
    },
  },
  media: {
    height: 140,
  },
  maintitle: {
    margin: '40px 0 0 0',
    textAlign: 'center',
    '& h4': {
      fontWeight: 800,
      '& span': {
        display: 'block',
        fontSize: 12,
        '&:nth-child(2)': {
          fontSize: 16,
        },
        '&::before': {
          content: '""',
          width: 100,
          verticalAlign: 'middle',
          marginRight: 15,
          height: 1,
          background: 'green',
          display: 'inline-block',
        },
        '&::after': {
          content: '""',
          width: 100,
          verticalAlign: 'middle',
          marginLeft: 15,
          height: 1,
          background: 'green',
          display: 'inline-block',
        },
      },
    },
  },
  custom_Btn: {
    marginLeft: 'auto!important',
  },
});
const Product = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <div className={classes.maintitle}>
          <Typography variant="h4" color="primary">
            Products
            <span>
              <EcoIcon />
              <EcoIcon />
              <EcoIcon />
            </span>
          </Typography>
        </div>
        <Box display="flex">
          {products.map((product, index) => (
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={product.url}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <Button
                  className={classes.custom_Btn}
                  size="small"
                  color="primary"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Product;
