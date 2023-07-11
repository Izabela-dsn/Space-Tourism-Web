import type { Meta, StoryObj } from '@storybook/react';

import Menu from './Menu';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Component/Menu',
  component: Menu,
  tags: ['autodocs']
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const MenuDefault: Story = {
    
};