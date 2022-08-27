// Button.stories.js|jsx|ts|tsx

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'button',
  },
  argsTypes: {
    variant: {
      description:
        'Propriedade responsável por exibir variantes do nosso botão',
      theme: {
        control: 'select',
        options: ['primary', 'secondary', 'outlined', 'disabled'],
      },
    },
    children: {
      description:
        'Propriedade que será fornecida uma string contendo o nome do nosso botão',
      type: { name: 'string', required: true },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const Outlined = Template.bind({});
Object.assign(Outlined, {
  args: { variant: 'outlined' },
});

export const Disabled = Template.bind({});
Object.assign(Disabled, {
  args: { variant: 'disabled' },
});
