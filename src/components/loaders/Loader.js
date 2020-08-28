import React, { Fragment } from 'react';
import classnames from 'classnames';
import styles from './Loader.module.scss';

const Loader = ({ size = 50 }) => (
  <Fragment>
    <div
      className={classnames(
        styles['loader-root'],
        styles[`loader-root--${size}`],
      )}
    >
      <div
        className={classnames(
          'spinner-border',
          styles['loader-spinner'],
          styles[`loader-spinner--${size}`],
        )}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
    <div className={styles['loader-backdrop']}></div>
  </Fragment>
);

export default Loader;
