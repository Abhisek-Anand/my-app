import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputBox } from './InputBox';

export default {
  title: 'Example/InputBox',
  component: InputBox,
  parameters: {
  
    layout: 'fullscreen',
  },
  
} as ComponentMeta<typeof InputBox>;

const Template: ComponentStory<typeof InputBox> = (args) => <InputBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Button',
    label: "Primary"
  };
  
  export const Secondary = Template.bind({});
  Secondary.args = {
    placeholder: 'Button',
    label: "Secondary"
  };
  
  export const Large = Template.bind({});
  Large.args = {
    label: "Large",
    placeholder: 'Button',
  };
  
  export const Small = Template.bind({});
  Small.args = {
      label: "Small",
    placeholder: 'small',
   };
