import type { Decorator } from '@storybook/react';
import "./SectionDecorator.scss";

/*
 * Wider than a form field without being full-width. Used for sectional content.
 */

const SectionDecorator: Decorator = (Story) => (
  <div className="sb-section-decorator">
    <Story />
  </div>
);

export default SectionDecorator;
