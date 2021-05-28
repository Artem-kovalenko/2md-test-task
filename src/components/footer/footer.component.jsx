import React from 'react';
// import { ReactComponent as InstagramIcon } from 'icons/instagram.svg';

export const FooterComponent = () => {

  const classes = {
    footer: 'h-48 w-full bg-blue-400 absolute left-0 bottom-0 text-white flex justify-between',
    informationWrapper: 'flex w-3/6 justify-around pt-16',
    networksWrapper: 'flex text-center justify-center items-center w-2/6',
    informationHeading: 'uppercase text-xs mb-5',
    informationText: 'text-sm'
  };

  const currentDate = new Date().toISOString().slice(0, 10);
  const currentTime = new Date().toTimeString().slice(0, 5);

  return (
    <div className={classes.footer}>
      <div className={classes.informationWrapper}>
        <div>
          <p className={classes.informationHeading}>About you!</p>
          <p className={classes.informationText}>Some info</p>
        </div>
        <div>
          <p className={classes.informationHeading}>Dynamic part</p>
          <p className={classes.informationText}>Date: {currentDate}</p>
          <p className={classes.informationText}>Time: {currentTime}</p>
        </div>
        <div>
          <p className={classes.informationHeading}>Contact</p>
          <p className={classes.informationText}>Email: artemdev0109@gmail.com</p>
          <p className={classes.informationText}>Phone: +380972344881</p>
        </div>
      </div>
      <div className={classes.networksWrapper}>
        {/*<InstagramIcon/>*/}
        <p>inst</p>
        <p>tweet</p>
        <p>facebook</p>
      </div>
    </div>
  );
};