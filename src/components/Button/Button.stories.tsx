import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
    title: "Example/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: "Button",
};

export const SubmitButton = Template.bind({});
SubmitButton.args = {
    backgroundColor: "rgba(25, 189, 25, 1)",
    size: "small",
    label: "Submit",
};

export const ResetButton = Template.bind({});
ResetButton.args = {
    backgroundColor: "red",
    size: "small",
    label: "Reset",
};
