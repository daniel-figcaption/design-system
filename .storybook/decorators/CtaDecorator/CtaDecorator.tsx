import type { Decorator } from '@storybook/react';
import "./CtaDecorator.scss";

const CtaDecorator: Decorator = (Story) => (
  <div className="sb-cta-decorator">
    <Story />
  </div>
);

export default CtaDecorator;
