import type { StoryObj } from '@storybook/react';
import Component from '../IconCtaSet';
import IconCtaLink from '@src/components/IconCta/IconCtaLink/IconCtaLink';

export const props: React.ComponentProps<typeof Component> = {
  children: [
    <IconCtaLink
      icon="facebook" 
      hiddenLabel="Facebook"
      size="sm"
      iconRelativeSize="sm"
      url="#facebook"
    />,
    <IconCtaLink
      icon="instagram" 
      hiddenLabel="Instagram"
      size="sm"
      iconRelativeSize="sm"
      url="#instagram"
    />,
    <IconCtaLink
      icon="linkedin" 
      hiddenLabel="LinkedIn"
      size="sm"
      iconRelativeSize="sm"
      url="#linkedin"
    />,
  ],
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
