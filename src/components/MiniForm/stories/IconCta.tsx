import type { StoryObj } from '@storybook/react';
import Component from '../MiniForm';
import Textbox from '@src/components/Control/FullControl/Textbox/Textbox';
import IconCtaButton from '@src/components/IconCta/IconCtaButton/IconCtaButton';

export const props: React.ComponentProps<typeof Component> = {
  control: (
    <Textbox className="c-mini-form__control" type="search" />
  ),
  hiddenControlLabel: 'Search keywords',
  cta: (
    <IconCtaButton className="c-mini-form__icon-cta" variant="primary" hiddenLabel="Search" icon="search" buttonType="submit" />
  ),
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
