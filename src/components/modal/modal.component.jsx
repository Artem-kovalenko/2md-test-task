import React from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent as EarthIcon } from 'icons/globe-americas-solid.svg';
import { CarouselComponent } from 'components/carousel';

export const Modal = ({ isShowing, hide }) => {

  const classes = {
    modalOverlay: 'fixed top-0 left-0 z-40 w-screen h-screen bg-black opacity-40',
    modalWrapper: 'flex items-center justify-center fixed top-0 left-0 z-50 w-full h-full overflow-x-hidden overflow-y-auto outline-none',
    modal: 'relative z-30 bg-white rounded-sm h-2/5 mb-44 w-1/4 s:w-2/3 sm:w-2/3 md:w-2/4',
    modalHeader: 'flex justify-between items-center h-1/4 bg-blue-light-300 py-4 pr-4 pl-8 text-blue-dark',
    modalCloseButton: 'flex items-center justify-center self-start w-6 h-6 text-xl font-light bg-white cursor-pointer rounded-full outline-none',
    modalHeaderTitle: 'font-semibold uppercase',
    modalHeaderWebsiteLink: 'font-normal text-sm',
    earthIcon: 'h-4 inline mr-2'
  };

  return isShowing ? ReactDOM.createPortal(
    <>
      <div className={classes.modalOverlay}/>
      <div className={classes.modalWrapper}>
        <div className={classes.modal}>
          <div className={classes.modalHeader}>
            <div>
              <p className={classes.modalHeaderTitle}>Gallery in modal</p>
              <div>
                <EarthIcon className={classes.earthIcon} />
                <a className={classes.modalHeaderWebsiteLink} target='_blank' href='https://picsum.photos/' rel="noreferrer" >picsum.photos</a>
              </div>
            </div>
            <button className={classes.modalCloseButton} onClick={hide}>
              <span>&times;</span>
            </button>
          </div>
          <CarouselComponent />
        </div>
      </div>
    </>, document.body
  ) : null;
};
