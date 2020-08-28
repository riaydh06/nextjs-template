import React from 'react';
import classnames from 'classnames';
import { bool } from 'prop-types';

const BaseDialog = ({ isOpen, children }) => {
  const getClassNames = classnames('modal', 'fade', {
    'show backdrop d-block': isOpen,
  });
  const getDialogClassName = classnames('modal-custom-dialog');
  return (
    <div className={getClassNames} tabIndex="-1" role="dialog">
      <div className={getDialogClassName}>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

BaseDialog.defaultProps = {
  isOpen: bool.isRequired,
};

export default BaseDialog;
