import type { Decorator } from '@storybook/react';
import "./FieldDecorator.scss";

const FieldDecorator: Decorator = (Story) => (
  <div className="sb-field-decorator">
    <Story />
  </div>
);

export default FieldDecorator;
