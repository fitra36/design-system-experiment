import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import BookmarkIcon from '@/components/icons/BookmarkIcon';

import Button from './index';

export default {
  title: 'Components/Buttons/Button',
  component: Button,
  argTypes: {
    children: {
      control: { type: 'text' },
      defaultValue: 'Button',
    },
    appearance: {
      options: ['primary', 'default'],
      control: 'radio',
      defaultValue: 'default',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    loading: {
      control: 'boolean',
      defaultValue: false,
    },
    icon: {
      control: false,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <BookmarkIcon />,
};
