import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  DropDown  from './DropDown';

export default {
  title: 'Example/DropDown',
  component: DropDown,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => <DropDown {...args} />;

export const Primary = Template.bind({});
  
