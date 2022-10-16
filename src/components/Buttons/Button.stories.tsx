import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} >Click Me</Button>;

export const Default = Template.bind({})
Default.args = {
  disabled: false,
  onClick: () => {
    alert('clicked')
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
