import type { Decorator } from '@storybook/react';
import "./LogoDecorator.scss";

const LogoDecorator: Decorator = (Story) => (
  <div className="sb-logo-decorator">
    <Story />
  </div>
);

export default LogoDecorator;
