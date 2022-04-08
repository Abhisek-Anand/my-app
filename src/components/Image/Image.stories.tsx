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
Primary.args = {
    height:"20rem",
    width:"20rem",
    alt: 'Button',
    src: "https://source.unsplash.com/random",
  };
  
  export const Secondary = Template.bind({});
  Secondary.args = {
    alt: 'Button',
  };
  
  export const Large = Template.bind({});
  Large.args = {
    size: 'large',
    alt: 'Button',
  };
  
  export const Small = Template.bind({});
  Small.args = {
    size: 'small',
   };
