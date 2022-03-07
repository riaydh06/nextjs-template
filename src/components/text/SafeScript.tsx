import PropTypes from 'prop-types';
import { FC } from 'react';

const SafeScript: FC<ISafeScript> = ({ type, content, src }) => {
  return type === 'src' ? (
    <script async src={src}></script>
  ) : (
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{ __html: content }}
    ></script>
  );
};

export default SafeScript;
