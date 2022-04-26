import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import RenderProps from "./RenderProps";

export default {
    title: "RenderProps",
    component: RenderProps,
} as ComponentMeta<typeof RenderProps>;

const Template: ComponentStory<typeof RenderProps> = (args) => (
    <RenderProps />
);

export const Default = Template.bind({});
Default.args = {};
