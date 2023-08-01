import React, {Suspense} from 'react';
import SkeletonHome from '../../Skeleton/SkeletonHome';
import {Helmet} from 'react-helmet-async'

// lazy routing
const ComingSoon = React.lazy(() => import('../ComingSoon/ComingSoon')) 
const RecentUpdates = React.lazy(() => import('../RecentUpdates/RecentUpdates')) 
const Popular = React.lazy(() => import('../Popular/Popular')) 
const CarouselSection = React.lazy(() => import('../CarouselSection/CarouselSection'))
const MostRecommended = React.lazy(() => import('../MostRecommended/MostRecommended'))
const MostRead = React.lazy(() => import('../MostRead/MostRead'))
const OnGoingRelease = React.lazy(() => import ('../OngoingRelease/OnGoingRelease'))

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Manga Swipe - Home</title>
        <link rel="canonical" href="/" />
        <meta name="description" content="website for reading latest manga" />
      </Helmet>
      <Suspense fallback={<SkeletonHome />}>
        <CarouselSection />
        <RecentUpdates />
        <ComingSoon />
        <Popular />
        <MostRead />
        <MostRecommended />
        <OnGoingRelease />
      </Suspense>
    </>
  );
};

export default Home;