import type { StoryObj } from '@storybook/react';
import Component from '../MiniForm';
import Textbox from '@src/components/Control/FullControl/Textbox/Textbox';
import CtaButton from '@src/components/Cta/CtaButton/CtaButton';

export const props: React.ComponentProps<typeof Component> = {
  control: (
    <Textbox className="c-mini-form__control" type="search" />
  ),
  hiddenControlLabel: 'Search keywords',
  cta: (
    <CtaButton className="c-mini-form__cta" label="Search" icon="search" buttonType="submit" />
  ),
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
