import type { StoryObj } from '@storybook/react';
import Component, { TProps } from '../Field';
import Textarea from '@src/components/Controls/Textarea/Textarea';

export const props: TProps = {
  label: 'Comments',
  control: (
    <Textarea
      rows={5}
      textareaAttributes={{
        id: 'field_comments',
      }}
    />
  ),
  controlId: 'field_comments',
  helpText: 'Comments will appear publicly and anonymously.',
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
