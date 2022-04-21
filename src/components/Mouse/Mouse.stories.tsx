import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Mouse } from './Mouse';

export default {
  title: 'Example/Mouse',
  component: Mouse,
  parameters: {
  
    layout: 'fullscreen',
  },
  
} as ComponentMeta<typeof Mouse>;

const Template: ComponentStory<typeof Mouse> = (args) => <Mouse {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    
  };
  
