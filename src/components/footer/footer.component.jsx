import React from 'react';
import { ReactComponent as InstagramIcon } from 'icons/instagram-brands.svg';
import { ReactComponent as FacebookIcon } from 'icons/facebook-f-brands.svg';
import { ReactComponent as TwitterIcon } from 'icons/twitter-brands.svg';

export const FooterComponent = () => {

  const classes = {
    footer: 'h-48 s:h-40 w-full bg-blue-dark absolute left-0 bottom-0 text-white flex justify-between pt-16 pr-16 s:pt-8 s:pr-2 s:pl-2',
    informationWrapper: 'flex w-3/6 md:w-9/12 sm:w-9/12 s:w-9/12 justify-around',
    networksWrapper: 'flex justify-around items-start w-44 s:w-24',
    informationHeading: 'uppercase text-xs mb-5',
    informationText: 'text-sm s:text-xs',
    footerIcon: 'h-5 s:h-4'
  };

  const currentDate = new Date().toISOString().slice(0, 10);
  const currentTime = new Date().toTimeString().slice(0, 5);

  return (
    <div className={classes.footer}>
      <div className={classes.informationWrapper}>
        <div>
          <p className={classes.informationHeading}>About you!</p>
          <p className={classes.informationText}>Artem, 19 y.o, From Ukraine, JS Developer.</p>
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
        <InstagramIcon className={classes.footerIcon}/>
        <TwitterIcon className={classes.footerIcon}/>
        <FacebookIcon className={classes.footerIcon}/>
      </div>
    </div>
  );
};