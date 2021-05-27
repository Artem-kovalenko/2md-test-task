import React from 'react';

export const MainPageComponent = () => {

  const classes = {
    mainPageWrapper: 'flex justify-center items-center h-5/6',
    contentWrapper: 'flex h-80 w-2/5 bg-blue-50',
    leftBlock: 'bg-blue-300 w-1/4', // #7fc4fd;
    rightBlock: 'pl-14 flex w-3/4 flex-col justify-center items-start',
    title: 'text-blue-400 text-3xl',
    descriptionWrapper: 'my-3.5',
    descriptionText: 'text-blue-400 text-sm', // #2699fb
    buttonsWrapper: 'flex mt-3.5',
    moreButton: 'mr-7 text-xs uppercase border-2 border-solid border-blue-200 cursor-pointer py-2.5 w-36 text-center rounded-md text-blue-400 font-semibold', // border-#c2e3fd text-#0089ff;
    galleryButton: 'bg-blue-400 text-xs uppercase border-2 border-solid border-blue-400 cursor-pointer py-2.5 w-36 text-center rounded-md text-white font-semibold'
  };

  return (
    <div className={classes.mainPageWrapper}>
      <div className={classes.contentWrapper}>
        <div className={classes.leftBlock}/>
        <div className={classes.rightBlock}>
          <div className={classes.title}>This is main page title.</div>
          <div className={classes.descriptionWrapper}>
            <p className={classes.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className={classes.descriptionText}>Maecenas eget dapibus...</p>
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
