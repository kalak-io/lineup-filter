import type { Meta, StoryObj } from '@storybook/vue3';

import Dropdown from '../src/Dropdown.vue';

const meta = {
    title: 'Base/Dropdown',
    component: Dropdown,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
      size: { control: 'select', options: ['small', 'medium', 'large'] },
    },
  } satisfies Meta<typeof Dropdown>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Large: Story = {
    args: {
      size: 'large',
    },
  };

  export const Medium: Story = {
    args: {
      size: 'medium',
    },
  };

  export const Small: Story = {
    args: {
      size: 'small',
    },
  };
