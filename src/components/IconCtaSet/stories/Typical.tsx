import type { StoryObj } from '@storybook/react';
import Component from '../IconCtaSet';
import IconCtaButton from '@src/components/IconCta/IconCtaButton/IconCtaButton';

export const props: React.ComponentProps<typeof Component> = {
  children: [
    (
      <IconCtaButton 
        icon="print" 
        hiddenLabel="Print" 
        variant="bare"
      />
    ),
    (
      <IconCtaButton 
        icon="share" 
        hiddenLabel="Share" 
        variant="bare"
        iconNudgeX="left"
      />
    ),
    (
      <IconCtaButton 
        icon="download-file" 
        hiddenLabel="Download" 
        variant="bare"
      />
    ),
  ],
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
