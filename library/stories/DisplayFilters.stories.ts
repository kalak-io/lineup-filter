import type { Meta, StoryObj } from '@storybook/vue3';

import DisplayFilters from '../src/DisplayFilters.vue';

const meta = {
  title: 'Main/DisplayFilters',
  component: DisplayFilters,
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Size of the elements, optional, default: medium',
      control: 'select',
      type: 'string',
      options: ["small", 'medium', 'large']
    }
  }
} satisfies Meta<typeof DisplayFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
