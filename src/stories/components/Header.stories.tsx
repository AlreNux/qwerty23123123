import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '../../components/Header';
import '../../index.css';

export default {
    title: 'components/Header',
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = arguments_ => <Header />;
