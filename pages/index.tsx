import { GetStaticProps } from 'next';
import React, { FC, ReactElement } from 'react';
import { View } from 'vcc-ui';
import carListingsData from '../public/api/cars';
import Carousel from '../src/components/CarListingsCarousel';
import Filter from '../src/components/Filter';
import useCars from '../src/hooks/useCars';
import { ICarLiting } from '../src/types/Listing';

interface IHomePageProps {
  carListingsData: ICarLiting[];
}
const HomePage: FC<IHomePageProps> = ({ carListingsData }): ReactElement => {
  const { carListings, loading, filterCarListingsByBodyType } =
    useCars(carListingsData);
  return (
    <React.StrictMode>
      <div className='container'>
        <View spacing={'2'}>
          <Filter
            carListings={carListingsData}
            filterCarListingsByBodyType={filterCarListingsByBodyType}
            loading={loading}
          />
          <Carousel carListings={carListings} />
        </View>
      </div>
    </React.StrictMode>
  );
};

export const getStaticProps: GetStaticProps<IHomePageProps> = async () => {
  return { props: { carListingsData } };
};

export default HomePage;
