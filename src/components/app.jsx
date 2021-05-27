import React from 'react';
import { MainPageComponent } from 'components/main-page';
import { FooterComponent } from 'components/footer';

export const App = () => {
  const classes = {
    appWrapper: 'relative h-screen font-serif'
  };
  return (
    <div className={classes.appWrapper}>
      <MainPageComponent/>
      <FooterComponent/>
    </div>
  );
};