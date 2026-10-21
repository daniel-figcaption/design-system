import type { StoryObj } from '@storybook/react';
import Component from '../Notice';

export const props: React.ComponentProps<typeof Component> = {
  priority: 'normal',
  title: 'Precautions',
  children: (
    <>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis viverra lorem vitae varius. Nullam pharetra maximus sapien at rhoncus.</p>
      <p>Nam ultrices risus risus, accumsan laoreet dui varius id. Cras sit amet molestie lectus. Fusce scelerisque lorem ac libero mollis rutrum. Integer tortor lacus, mollis sed consequat sed, placerat sit amet justo.</p>
      <p>Sed vestibulum quis neque vitae venenatis. Pellentesque consectetur fringilla diam, <strong>in ultricies nulla porttitor non</strong>.</p>
    </>
  ),
};

const Story: StoryObj<typeof Component> = {
  args: props,
  argTypes: {
    children: {
      control: false,
    },
  },
};

export default Story;
