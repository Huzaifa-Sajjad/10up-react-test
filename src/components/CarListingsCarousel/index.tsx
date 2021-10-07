import { FC, ReactElement, useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { ICarLiting } from '../../types/Listing';
import ItemCard from '../ItemCard';
import CustomButtonGroup from './components/CustomButtonGroup';
import responsiveStyles from './carListingsCarousel.styles';
import 'react-multi-carousel/lib/styles.css';

interface CarListingsCarouselProps {
  carListings: ICarLiting[];
}

const CarListingsCarousel: FC<CarListingsCarouselProps> = ({
  carListings,
}): ReactElement => {
  const [screenWidth, setScreenWidth] = useState(0);

  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className='react-multi-carousel-container'>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={screenWidth < 576 ? true : false}
        renderDotsOutside={true}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<CustomButtonGroup />}
        responsive={responsiveStyles}
        ssr={true}
        infinite={false}
        autoPlay={false}
        customTransition='all 2s'
        transitionDuration={1000}
      >
        {carListings.map((carListing) => (
          <ItemCard key={carListing.id} carListing={carListing} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarListingsCarousel;
