import React from 'react';
import ProductListItem from './ProductListItem';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Card/ProductListItem',
  decorators: [withKnobs],
};

const Template = (args) => <ProductListItem {...args} />;
export const Standard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Standard.args = {
  name: 'Standard Coffee',
  price: '2.50',
  //label: 'Button',
};

/*
export const standard = () => (
  <ProductListItem
    name={text('Name', 'Standard Coffee')}
    price={text('price', '2.50')}
    onAddToCart={action('Add to cart clicked')}
    imageUrl={text(
      'imageUrl',
      'https://source.unsplash.com/tNALoIZhqVM/200x100/'
    )}
    isSoldOut
  />
);
*/
