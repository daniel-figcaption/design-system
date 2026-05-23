import type { StoryObj } from '@storybook/react';
import Component from '../CtaSet';
import CtaButton from '@src/components/Cta/CtaButton/CtaButton';

export const props: React.ComponentProps<typeof Component> = {
  children: [
    <CtaButton label="Save & publish" />,
    <CtaButton label="Save" variant="primary-outlined"  />,
    <CtaButton label="Cancel" variant="link"  />,
  ],
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
