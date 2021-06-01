import React, {useState} from 'react';
import clsx from 'clsx';
import { useModal } from 'hooks';
import { Modal } from 'components/modal';


export const MainPageComponent = () => {

  const classes = {
    mainPageWrapper: 'flex justify-center items-center h-5/6 ',
    contentWrapper: 'relative flex max-h-screen w-2/5 lg:w-3/5 md:w-9/12 sm:w-9/12 bg-blue-light-100 s:h-screen s:w-screen',
    leftBlock: 'flex items-center bg-blue-light-500 w-1/4 s:w-1/6',
    rightBlock: 'px-14 py-20 s:px-6 flex w-3/4 flex-col justify-center items-start',
    title: 'text-blue-dark text-3xl s:text-2xl',
    descriptionWrapper: 'my-3.5',
    descriptionText: 'text-blue-dark text-sm transition-height ease-in-out duration-500 overflow-hidden',
    buttonsWrapper: 'flex mt-3.5 sm:flex-col sm:w-full sm:items-center ',
    moreButton: 'mr-7 sm:mr-0 sm:mb-3 text-xs s:text-2xs uppercase border-2 border-solid border-blue-light-300 cursor-pointer py-2.5 w-36 s:w-28 text-center rounded-md text-blue-dark font-semibold', // border-#c2e3fd text-#0089ff;
    galleryButton: 'bg-blue-dark text-xs s:text-2xs uppercase border-2 border-solid border-blue-dark cursor-pointer py-2.5 w-36 s:w-28 text-center rounded-md text-white font-semibold',
    triangle: 'w-0 h-0 absolute transform origin-top border-solid border-l-58 border-l-transparent border-r-58 border-r-transparent border-b-100',
    hexagon: 'absolute top-2/4 -left-12 s:hidden transform scale-80',
  };

  const { isShowing, toggle } = useModal();

  const [isShowText, setIsShowText] = useState(false);
  const toggleShowText = () => {
    setIsShowText(!isShowText);
  };

  return (
    <>
      <div className={classes.mainPageWrapper}>
        <div className={classes.contentWrapper}>
          <div className={classes.hexagon}>
            <div className={clsx(classes.triangle, 'rotate-60 border-b-blue-dark')}/>
            <div className={clsx(classes.triangle, 'rotate-120 border-b-blue-light-300')}/>
            <div className={clsx(classes.triangle, 'rotate-180 border-b-blue-light-300')}/>
            <div className={clsx(classes.triangle, 'rotate-240 border-b-blue-dark')}/>
            <div className={clsx(classes.triangle, 'rotate-300 border-b-blue-light-300')}/>
            <div className={clsx(classes.triangle, 'rotate-360 border-b-blue-light-300')}/>
          </div>
          <div className={classes.leftBlock}>
          </div>
          <div className={classes.rightBlock}>
            <div className={classes.title}>This is main page title.</div>
            <div className={classes.descriptionWrapper}>
              <div className={clsx(classes.descriptionText, isShowText ? 'max-h-96' : 'max-h-10')}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula ligula quis dolor bibendum
                  consequat. Aenean sed magna  dolor. Donec vestibulum, nibh quis dignissim condimentum, ligula purus
                  porta sem, et lobortis leo felis ut enim. Nullam egestas, diam sed condimentum efficitur, lorem lorem
                  blandit tellus, finibus fermentum lectus erat eget metus. Phasellus sit amet metus sit amet ex
                  porttitor blandit eu eu justo. Mauris at nibh risus. Nunc at urna eget nisi porttitor egestas quis ut
                  urna. Morbi felis urna, dignissim sed risus sit amet, malesuada ullamcorper dui.
                  Suspendisse sed varius lorem. Nullam interdum convallis purus, id vestibulum quam tempor vel. Integer
                  mattis turpis eget massa hendrerit scelerisque. Nullam molestie mi ac elit consectetur, id ullamcorper
                  eros gravida. Cras sit amet tellus sit amet dolor mollis venenatis et eget sapien
              </div>
            </div>
            <div className={classes.buttonsWrapper}>
              <div
                className={classes.moreButton}
                onClick={toggleShowText}
              >
                  More
              </div>
              <div
                className={classes.galleryButton}
                onClick={toggle}
              >
                  Show Gallery
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isShowing={isShowing} hide={toggle} />
    </>
  );
};
