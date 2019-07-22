import PropTypes from 'prop-types';
import React from 'react';

export default function Footer(props) {
  return (
    <footer>
      <p className='text-center' style={{ fontSize: '10px' }}>
        {props.text}
      </p>
    </footer>
  );
}

Footer.propTypes = {
  text: PropTypes.string.isRequired
};
