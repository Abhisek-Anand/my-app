import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Image } from './Image';

export default {
  title: 'Example/Image',
  component: Image,
  parameters: {
    layout: 'fullscreen',
  },
  
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Primary = Template.bind({});

