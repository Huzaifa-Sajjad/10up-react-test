import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';

const LearnMore = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, [router]);
  return <div>Nothing here yet chose an ID</div>;
};

export default LearnMore;
