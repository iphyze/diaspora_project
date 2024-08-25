import React from 'react'
import HomeIndex from './HomeIndex';
import HomeSectionTwo from './HomeSectionTwo';
import HomeSectionThree from './HomeSectionThree';
import HomeSectionFour from './HomeSectionFour';
import HomeSectionFive from './HomeSectionFive';

const HomeAll = () => {
  return (
    <React.Fragment>
        <HomeIndex />
        <HomeSectionTwo />
        <HomeSectionThree />
        <HomeSectionFour />
        <HomeSectionFive />
    </React.Fragment>
  )
}

export default HomeAll;