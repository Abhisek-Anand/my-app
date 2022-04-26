import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Controller2 from "./Controller2";

export default {
    title: 'Controller - useController',
    component: Controller2
} as ComponentMeta<typeof Controller2>;

const Template: ComponentStory<typeof Controller2> = (args) => <Controller2 />;

export const Default = Template.bind({});

Default.args = {};