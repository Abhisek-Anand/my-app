import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Colors from '../../stories/assets/colors.svg';
import StackAlt from '../../stories/assets/stackalt.svg';

import { Image } from './Image';

export default {
  title: 'Example/Image',
  component: Image,
  parameters: {
    layout: 'fullscreen',
  },
  
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Source = Template.bind({});
Source.args = {
    src: Colors,
    altText: ''
}

export const AltText = Template.bind({});
AltText.args = {
    src: StackAlt,
    altText: 'Stack of colors'
}