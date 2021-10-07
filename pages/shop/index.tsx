import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';

const Shop = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, [router]);
  return <div>Nothing here yet chose an ID</div>;
};

export default Shop;
