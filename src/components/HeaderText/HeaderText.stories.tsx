import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeaderText } from './HeaderText';
import Color from 'color';

export default {
  title: 'Example/HeaderText',
  component: HeaderText,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof HeaderText>;

const Template: ComponentStory<typeof HeaderText> = (args) => <HeaderText {...args} />;

export const Large = Template.bind({});
Large.args = {
  label: 'Jane Doe',
  color: "rgba(25, 189, 25, 1)",
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Jane lol',
  
};

export const Small = Template.bind({});
Small.args = {
  label: 'Jane lol',
 
};
