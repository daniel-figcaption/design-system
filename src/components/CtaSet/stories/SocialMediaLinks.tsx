import type { StoryObj } from '@storybook/react';
import Component from '../CtaSet';
import CtaLink from '@src/components/Cta/CtaLink/CtaLink';

export const props: React.ComponentProps<typeof Component> = {
  children: [
    <CtaLink
      label="Facebook"
      variant="link"
      icon="facebook" 
      size="xs"
      url="#facebook"
    />,
    <CtaLink
      label="Instagram"
      variant="link"
      icon="instagram" 
      size="xs"
      url="#instagram"
    />,
    <CtaLink
      label="LinkedIn"
      variant="link"
      icon="linkedin" 
      size="xs"
      url="#linkedin"
    />,
  ],
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
