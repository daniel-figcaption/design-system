import type { StoryObj } from '@storybook/react';
import Component from '../IconCtaSet';
import IconCtaButton from '@src/components/IconCta/IconCtaButton/IconCtaButton';

export const props: React.ComponentProps<typeof Component> = {
  children: [
    <IconCtaButton
      icon="chevron-left" 
      variant="secondary-outlined"
      hiddenLabel="Previous"
      size="sm"
      iconNudgeX="left"
      iconRelativeSize="lg"
    />,
    <IconCtaButton
      icon="chevron-right" 
      variant="secondary-outlined"
      hiddenLabel="Next"
      size="sm"
      iconNudgeX="right"
      iconRelativeSize="lg"
    />,
  ],
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
