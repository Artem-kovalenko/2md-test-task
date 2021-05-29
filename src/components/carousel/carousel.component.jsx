import React from 'react';

export const CarouselComponent = () => {

  const classes = {
    carouselWrapper: 'relative h-3/4 ',
    arrowsWrapper: 'flex justify-between absolute top-32 ',
    arrow: 'border-2 rounded-xl border-gray-400 border-solid h-12 w-12 flex justify-center items-center font-bold text-xm cursor-pointer text-gray-400',
    carouselText: 'absolute bottom-0'
  };

  return (
    <div className={classes.carouselWrapper}>
      <div className={classes.arrowsWrapper}>
        <div className={classes.arrow}> &#60; </div>
        <div></div>
        <div className={classes.arrow}> &#62; </div>
      </div>
      <div className={classes.carouselText}>
            Photo`s Author Name
      </div>
    </div>
  );
};