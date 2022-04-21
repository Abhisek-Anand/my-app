import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Cat } from './Cat';

export default {
  title: 'Example/Cat',
  component: Cat,
  parameters: {
  
    layout: 'fullscreen',
  },
  
} as ComponentMeta<typeof Cat>;

const Template: ComponentStory<typeof Cat> = (args) => <Cat {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    
  };
  
