import PropTypes from 'prop-types';

const SafeScript = ({ type, content, src }) => {
  return type === 'src' ? (
    <script async src={src}></script>
  ) : (
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{ __html: content }}
    ></script>
  );
};

SafeScript.propTypes = {
  content: PropTypes.string,
};

export default SafeScript;
