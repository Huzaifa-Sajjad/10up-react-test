import { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import carListingsData from '../../public/api/cars';

interface IShopCarListingSingle {
  carId: string;
}

const CarListingDetails: FC<IShopCarListingSingle> = ({ carId }) => {
  return (
    <div className='container'>
      <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>
        {carId} details here
      </h2>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on carListingsData
  const paths = carListingsData.map((carListing) => ({
    params: { id: carListing.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      carId: params?.id,
    },
  };
};

export default CarListingDetails;
