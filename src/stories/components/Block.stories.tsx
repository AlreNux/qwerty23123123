import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Block } from '../../components/Block';

export default {
    title: 'components/Block',
    component: Block,
} as ComponentMeta<typeof Block>;

const Template: ComponentStory<typeof Block> = arguments_ => <Block {...arguments_} />;

export const MainSmall = Template.bind({});
MainSmall.args = {
    theme: 'small',
};

export const MainMedium = Template.bind({});
MainMedium.args = {
    theme: 'medium',
};
