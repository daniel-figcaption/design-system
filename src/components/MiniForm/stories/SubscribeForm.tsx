import type { StoryObj } from '@storybook/react';
import Component from '../MiniForm';
import Textbox from '@src/components/Control/FullControl/Textbox/Textbox';
import CtaButton from '@src/components/Cta/CtaButton/CtaButton';

export const props: React.ComponentProps<typeof Component> = {
  control: (
    <Textbox className="c-mini-form__control" type="email" valueElAttrs={{
      placeholder: 'Enter your email address'
    }} />
  ),
  hiddenControlLabel: 'Email address',
  cta: (
    <CtaButton 
      className="c-mini-form__cta" 
      variant="secondary" 
      label="Sign up" 
      icon="arrow-right" 
      iconPosition="after" 
      buttonType="submit" 
    />
  ),
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
