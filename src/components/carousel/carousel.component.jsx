import React, {useEffect, useState} from 'react';
import clsx from 'clsx';

export const CarouselComponent = () => {

  const classes = {
    carouselWrapper: 'relative h-3/4 ',
    arrowsWrapper: 'flex justify-between absolute top-32 w-full px-4',
    arrow: 'border-2 active:border-blue-dark active:text-blue-dark rounded-xl border-gray-400 border-solid h-12 w-12 flex justify-center items-center font-bold text-xm cursor-pointer text-gray-400 bg-white',
    carouselText: 'absolute bottom-4 left-4 text-blue-dark text-sm rounded border-2 border-solid border-blue-light-300 w-38 p-1 bg-white',
    carouselImage: 'object-cover h-full w-full'
  };

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?limit=10')
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevSlide = () => {
    let index = activeIndex;
    let length = images.length;
    if(index < 1) {
      index = length - 1;
    } else {
      index--;
    }
    setActiveIndex(index);
  };
  const goToNextSlide = () => {
    let index = activeIndex;
    let length = images.length;
    if(index === length - 1) {
      index = 0;
    } else {
      index++;
    }
    setActiveIndex(index);
  };

  return (
    <div className={classes.carouselWrapper}>
      {
        images.map((image, index) =>
          <>
            <img className={clsx(classes.carouselImage, index === activeIndex ? 'block' : 'hidden')} src={image.download_url} alt="img_err"/>
            <div className={clsx(classes.carouselText, index === activeIndex ? 'block' : 'hidden')}> {image.author} </div>
          </>
        )
      }
      <div className={classes.arrowsWrapper}>
        <div className={classes.arrow} onClick={() => goToPrevSlide()}> &#60; </div>
        <div className={classes.arrow} onClick={() => goToNextSlide()}> &#62; </div>
      </div>
    </div>
  );
};