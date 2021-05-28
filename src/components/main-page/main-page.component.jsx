import React from 'react';

export const MainPageComponent = () => {

  const classes = {
    mainPageWrapper: 'flex justify-center items-center h-5/6',
    contentWrapper: 'flex max-h-screen w-2/5 bg-blue-50',
    leftBlock: 'flex items-center bg-blue-300 w-1/4', // #7fc4fd;
    rightBlock: 'px-14 py-20 flex w-3/4 flex-col justify-center items-start',
    title: 'text-blue-400 text-3xl',
    descriptionWrapper: 'my-3.5',
    descriptionText: 'text-blue-400 text-sm', // #2699fb
    buttonsWrapper: 'flex mt-3.5',
    moreButton: 'mr-7 text-xs uppercase border-2 border-solid border-blue-200 cursor-pointer py-2.5 w-36 text-center rounded-md text-blue-400 font-semibold', // border-#c2e3fd text-#0089ff;
    galleryButton: 'bg-blue-400 text-xs uppercase border-2 border-solid border-blue-400 cursor-pointer py-2.5 w-36 text-center rounded-md text-white font-semibold'
  };
  // .hexagon {
  //     position: relative;
  //     width: 300px;
  //     height: 173.21px;
  //     background-color: #64C7CC;
  //     margin: 86.60px 0;
  //   }
  //
  // .hexagon:before,
  // .hexagon:after {
  //     content: "";
  //     position: absolute;
  //     width: 0;
  //     border-left: 150px solid transparent;
  //     border-right: 150px solid transparent;
  //   }
  //
  // .hexagon:before {
  //     bottom: 100%;
  //     border-bottom: 86.60px solid #64C7CC;
  //   }
  //
  // .hexagon:after {
  //     top: 100%;
  //     width: 0;
  //     border-top: 86.60px solid #64C7CC;
  //   }
  return (
    <div className={classes.mainPageWrapper}>
      <div className={classes.contentWrapper}>
        <div className={classes.leftBlock}>
          <div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div className={classes.rightBlock}>
          <div className={classes.title}>This is main page title.</div>
          <div className={classes.descriptionWrapper}>
            <p className={classes.descriptionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula ligula quis dolor bibendum
              consequat. Aenean sed magna dolor. Donec vestibulum, nibh quis dignissim condimentum, ligula purus
              porta sem, et lobortis leo felis ut enim. Nullam egestas, diam sed condimentum efficitur, lorem lorem
              blandit tellus, finibus fermentum lectus erat eget metus. Phasellus sit amet metus sit amet ex
              porttitor blandit eu eu justo. Mauris at nibh risus. Nunc at urna eget nisi porttitor egestas quis ut
              urna. Morbi felis urna, dignissim sed risus sit amet, malesuada ullamcorper dui.
              Suspendisse sed varius lorem. Nullam interdum convallis purus, id vestibulum quam tempor vel. Integer
              mattis turpis eget massa hendrerit scelerisque. Nullam molestie mi ac elit consectetur, id ullamcorper
              eros gravida. Cras sit amet tellus sit amet dolor mollis venenatis et eget sapien

            </p>
          </div>
          <div className={classes.buttonsWrapper}>
            <div className={classes.moreButton}>More</div>
            <div className={classes.galleryButton}>Show Gallery</div>
          </div>
        </div>
      </div>
    </div>
  );
};
