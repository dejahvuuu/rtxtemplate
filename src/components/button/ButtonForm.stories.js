import React from 'react';

import Button from './ButtonForm';
import { withDesign } from 'storybook-addon-designs';

export default {
  component: Button,
  title: 'Form/ButtonBase',
  parameters: {
    componentSubtitle: 'Displays a form button',
  },
  decorators: [withDesign],
};

const Template = (args) => <Button {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  enabled: true,
  text: 'Iniciar sesión',
  className: 'btn-primary btn-large',
  type: 'submit',
};

Enabled.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
  },
};
// https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File
// https://www.figma.com/file/8LRD10F5QIU8HtI9L287a5/Untitled?node-id=0%3A1
export const Disabled = Template.bind({});
Disabled.args = {
  ...Enabled.args,
  enabled: false,
};
