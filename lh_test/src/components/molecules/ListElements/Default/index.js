import React from 'react';
import PropTypes from 'prop-types';
import styles from './Default.module.css';

// Atoms
import {
  Text
} from '../../../atoms';

const Default = ({
  img, title, subTitle, content
}) => (
  <div className={styles.wrapper}>
    <img
      width="75"
      height="75"
      src={img}
      alt={title}
    />
    <div className={styles.wrapperText}>
      <Text variante="title">{title}</Text>
      { subTitle && <Text>{subTitle}</Text>}
      { content && <Text variante="info">{content}</Text>}
    </div>
  </div>
);

Default.defaultProps = {
  content: '',
  subTitle: ''
};

Default.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  content: PropTypes.string
};

export default Default;
