// Button.stories.js|jsx|ts|tsx

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'button',
  },
};

export const Primary = (args) => <Button {...args} variant="primary" />;
export const Secondary = (args) => <Button {...args} variant="secondary" />;
export const Outlined = (args) => <Button {...args} variant="outlined" />;
export const Disabled = (args) => <Button {...args} variant="disabled" />;
