import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Default from './index';

const stories = storiesOf('Default', module);

stories.add('Default', () => {
  const subTitle = text('subTitle', 'subTitle text');
  const content = text('content', 'content text');

  return (
    <Default
      img="https://media.leshabitues.fr/shop/25/pic_641e57c79d03f0e0027a35a3858ba28a.jpg"
      title="title"
      subTitle={subTitle}
      content={content}
    />
  );
});

export default stories;
