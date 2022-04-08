import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Footer } from './Footer';

export default {
  title: 'Example/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;
  
  export const Primary = Template.bind({});
  Primary.args = {
    footerText: "Primary Footer: ",
    primary: true,
    link: "www.primary.link",
    linkText: "www.primary.link",
    size: "medium"
  };
  
  export const Secondary = Template.bind({});
  Secondary.args = {
    footerText: "Secondary Footer",
    primary: false,
    size: "medium"
  };