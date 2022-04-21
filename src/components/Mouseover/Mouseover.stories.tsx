import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Mouseover } from './Mouseover';

export default {
  title: 'Example/Mouseover',
  component: Mouseover,
  parameters: {
  
    layout: 'fullscreen',
  },
  
} as ComponentMeta<typeof Mouseover>;

const Template: ComponentStory<typeof Mouseover> = (args) => <Mouseover {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    
  };
  
