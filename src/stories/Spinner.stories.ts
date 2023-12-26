import {Spinner} from '../Main/Spinner/Spinner';
import {Meta, StoryObj} from '@storybook/react';
import {SpinDirection} from '../Main/Main';

const meta: Meta<typeof Spinner> = {
  component: Spinner,
}

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    direction: SpinDirection.Right
  }
}
export const Stopped: Story = {
  args: {
    direction: SpinDirection.Stop
  }
}
export const Left: Story = {
  args: {
    direction: SpinDirection.Left
  }
}
