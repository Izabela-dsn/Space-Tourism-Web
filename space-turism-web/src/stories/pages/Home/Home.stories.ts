import type { Meta, StoryObj } from '@storybook/react';

import Home from './Home';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Page/Home',
  component: Home,
  tags: ['autodocs']
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const HomeDefault: Story = {
    
};