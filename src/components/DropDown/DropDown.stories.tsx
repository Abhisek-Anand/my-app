import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DropDown } from './DropDown';

export default {
  title: 'Example/DropDown',
  component: DropDown,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => <DropDown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
    size: "medium",
    
  };
  
  export const Secondary = Template.bind({});
  Secondary.args = {
    label: 'Button',
    size: "medium"
  };
  
  export const Large = Template.bind({});
  Large.args = {
    size: 'large',
    label: 'Button',
  };
  
  export const Small = Template.bind({});
  Small.args = {
    size: 'small',
    label: 'Button',
  };
  
