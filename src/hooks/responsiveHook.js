import { useState, useEffect, useRef, useCallback } from 'react';

import { DEVICE_SIZES_VALUE, DEVICE_TYPE } from '@constants/responsive';

const mobileOnly = () => window.innerWidth < DEVICE_SIZES_VALUE.MOBILE;
const tabletOnly = () =>
  window.innerWidth > DEVICE_SIZES_VALUE.MOBILE &&
  window.innerWidth < DEVICE_SIZES_VALUE.DESKTOP;

const upToTablet = () => window.innerWidth < DEVICE_SIZES_VALUE.DESKTOP;

const desktopOnly = () => window.innerWidth > DEVICE_SIZES_VALUE.DESKTOP;

const findViewType = (deviceType) => {
  switch (deviceType) {
    case DEVICE_TYPE.MOBILE_ONLY:
      return mobileOnly();

    case DEVICE_TYPE.TABLET_ONLY:
      return tabletOnly();

    case DEVICE_TYPE.UP_TO_TABLET:
      return upToTablet();

    case DEVICE_TYPE.DESKTOP_ONLY:
      return desktopOnly();

    default:
      return false;
  }
};

export const useView = (type) => {
  const isInit = useRef(true);
  const [isTypeFound, setIsTypeFound] = useState(false);

  const handleResize = useCallback(() => {
    setIsTypeFound(findViewType(type));
  }, [type]);

  useEffect(() => {
    // To avoid window undefined error in SSR
    if (process.browser) {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [handleResize]);

  useEffect(() => {
    // will Skip this after first render
    if (isInit && isInit.current) {
      setIsTypeFound(findViewType(type));
      isInit.current = false;
    }
  }, [isInit, type]);

  return isTypeFound;
};
