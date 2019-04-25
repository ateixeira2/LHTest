import React from 'react';
import PropTypes from 'prop-types';
import styles from './Text.module.css';

const Text = ({ variante, children }) => <span className={styles[variante]}>{children}</span>;

Text.defaultProps = {
  variante: 'default'
};

Text.propTypes = {
  variante: PropTypes.oneOf(['default', 'title', 'info']),
  children: PropTypes.string.isRequired
};

export default Text;
