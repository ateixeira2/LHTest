import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import Text from './index';

const stories = storiesOf('Text', module);

stories.add('Text', () => {
  const variantes = select('variante', ['default', 'title', 'info'], 'default');
  const children = text('children', 'Text component');

  return (<Text variante={variantes}>{children}</Text>);
});

export default stories;
