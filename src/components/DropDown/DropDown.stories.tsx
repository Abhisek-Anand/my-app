import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DropDown from "./DropDown";

export default {
    title: "Example/DropDown",
    component: DropDown,
    parameters: {
        layout: "fullscreen",
    },
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => (
    <DropDown {...args} />
);

export const Default = Template.bind({});

Default.args = {
    options: [1, 2, 3, 4, 5],
};
