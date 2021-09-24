import React from 'react';
import Slider from 'react-slick';
import image1 from '../images/farmin-1110x550.jpeg';
import image2 from '../images/slider1.jpeg';
import image3 from '../images/slider2.jpeg';
import image4 from '../images/Nepal_farmer.jpeg';
import { makeStyles } from '@material-ui/core/styles';
import { Block } from '@material-ui/icons';

const data = [
  {
    id: 1,
    url: `${image1}`,
  },
  {
    id: 2,
    url: `${image2}`,
  },
  {
    id: 3,
    url: `${image3}`,
  },
  {
    id: 4,
    url: `${image4}`,
  },
];
const useStyles = makeStyles(() => ({
  sliderBox: {
    width: '100%',
    height: 500,
    display: 'block',
    overflow: 'hidden',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
const HomeSlider = () => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {data.map(
          (sliderItem, index) => (
            console.log(sliderItem, 'From slider'),
            (
              <div>
                <div
                  className={classes.sliderBox}
                  style={{ backgroundImage: `url(${sliderItem.url})` }}
                ></div>
              </div>
            )
          )
        )}
      </Slider>
    </div>
  );
};

export default HomeSlider;
