import type { StoryObj } from '@storybook/react';
import Component from '../Field';
import Textarea from '@src/components/Control/FullControl/Textarea/Textarea';

export const props: React.ComponentProps<typeof Component> = {
  label: 'Comments',
  children: (
    <Textarea
      rows={5}
      valueElAttrs={{
        id: 'field_comments',
      }}
    />
  ),
  helpText: 'Comments will appear publicly and anonymously.',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
