import React from 'react';

export const FooterComponent = () => {

  const classes = {
    footer: 'h-44 w-full bg-blue-400 absolute left-0 bottom-0 text-white flex justify-between',
    informationWrapper: 'flex w-5/12 justify-around items-center',
    networksWrapper: 'flex text-center justify-center items-center w-2/6',
    informationHeading: 'uppercase text-xs mb-5'
  };

  return (
    <div className={classes.footer}>
      <div className={classes.informationWrapper}>
        <div>
          <div className={classes.informationHeading}>About you!</div>
          <div>Some info</div>
        </div>
        <div>
          <div className={classes.informationHeading}>Dynamic part</div>
          <div>yyyy-mm-dd</div>
          <div>HH:MM</div>
        </div>
        <div>
          <div className={classes.informationHeading}>Contact</div>
          <div>phone or email</div>
        </div>
      </div>
      <div className={classes.networksWrapper}>
        <p>inst</p>
        <p>tweet</p>
        <p>facebook</p>
      </div>
    </div>
  );
};