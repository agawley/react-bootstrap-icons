import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PatchQuestionFll = forwardRef(({ color, size, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm1.602-2.027c-.05.386-.218.627-.554.627-.377 0-.585-.317-.585-.745v-.11c0-.727.307-1.208.926-1.641.614-.44.822-.762.822-1.325 0-.638-.42-1.084-1.03-1.084-.55 0-.916.323-1.074.914-.109.364-.292.51-.564.51C6.203 6.12 6 5.873 6 5.48c0-.251.045-.468.139-.69.307-.798 1.079-1.29 2.099-1.29 1.341 0 2.262.902 2.262 2.227 0 .896-.376 1.511-1.05 1.986-.648.445-.806.726-.846 1.26z"
      />
    </svg>
  );
});

PatchQuestionFll.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PatchQuestionFll.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default PatchQuestionFll;