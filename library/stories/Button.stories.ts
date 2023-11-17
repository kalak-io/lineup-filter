import type { Meta, StoryObj } from '@storybook/vue3';

import Button from '../src/Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Base/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Size of the button, optional, default: medium',
      control: 'select',
      type: 'string',
      options: ['small', 'medium', 'large']
    },
    showLabel: {
      description: 'Display the label',
      type: 'boolean',
      control: 'boolean'
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Basic: Story = {};

export const SmallWithLabel: Story = {
  args: {
    size: 'small'
  },
};

export const SmallWithoutLabel: Story = {
  args: {
    size: 'small',
    showLabel: false
  },
};

export const MediumWithLabel: Story = {
  args: {
    size: 'medium'
  },
};

export const MediumWithoutLabel: Story = {
  args: {
    size: 'medium',
    showLabel: false
  },
};

export const LargeWithLabel: Story = {
  args: {
    size: 'large'
  },
};

export const LargeWithoutLabel: Story = {
  args: {
    size: 'large',
    showLabel: false
  },
};
