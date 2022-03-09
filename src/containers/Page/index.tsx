import React, { FC, ReactNode, useEffect } from 'react';
import classnames from 'classnames';
import { MAIN_CONTENT_ID } from '@constants';

const Page: FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const classNames = classnames({ [className]: !!className });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={classNames} id={MAIN_CONTENT_ID}>
      {children}
    </main>
  );
};

export default Page;
