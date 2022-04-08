import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchHeader } from './SearchHeader';

export default {
  title: 'Example/SearchHeader',
  component: SearchHeader,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },

} as ComponentMeta<typeof SearchHeader>;

const Template: ComponentStory<typeof SearchHeader> = (args) => <SearchHeader {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  
};
  