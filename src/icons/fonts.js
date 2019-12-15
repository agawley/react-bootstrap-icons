import React from 'react';
import PropTypes from 'prop-types';

const Fonts = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path d="M14.258 5H5.747l-.082 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V5.602l.43.013c1.935.062 2.434.301 2.694 1.846h.479L14.258 5z" />
    </svg>
  );
};

Fonts.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Fonts.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Fonts;