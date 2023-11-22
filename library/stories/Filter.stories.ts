import type { Meta, StoryObj } from '@storybook/vue3';

import Filter from '../src/Filter.vue';

const meta = {
  title: 'Main/Filter',
  component: Filter,
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Size of the elements, optional, default: medium',
      control: 'select',
      type: 'string',
      options: ["small", 'medium', 'large']
    }
  }
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
