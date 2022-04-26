import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import RenderProps2 from "./RenderProps2";

export default {
    title: 'Render Props Sample 2',
    component: RenderProps2
} as ComponentMeta<typeof RenderProps2>;

const Template: ComponentStory<typeof RenderProps2> = (args) => <RenderProps2 />;

export const Default = Template.bind({});

Default.args = {};
