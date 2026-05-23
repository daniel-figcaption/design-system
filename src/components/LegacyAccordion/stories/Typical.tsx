import type { StoryObj } from '@storybook/react';
import Component from '../LegacyAccordion';
import LegacyAccordionSection from '../LegacyAccordionSection/LegacyAccordionSection';
import RichText from '@src/components/RichText/RichText';

export const props: React.ComponentProps<typeof Component> = {
  allowMultipleExpanded: true,
  children: [
    (
      <LegacyAccordionSection heading="Where are you located?" isExpanded={true}>
        <RichText>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Duis at pulvinar arcu, sit amet viverra libero. 
            Aenean et euismod nulla, at laoreet massa. Curabitur sagittis, ex in condimentum suscipit. 
          </p>
          <p>
            Nulla lacinia nibh et neque volutpat tincidunt nec nec libero. 
            Etiam id pulvinar nulla, quis placerat dui. Nulla tempus diam eget tortor rutrum, et gravida purus varius. 
            Suspendisse vehicula nisl ligula, nec aliquet enim euismod id.
          </p>
        </RichText>
      </LegacyAccordionSection>
    ),
    (
      <LegacyAccordionSection heading="Are your products eco-friendly?">
        <RichText>
          <p>
            Aenean et euismod nulla, at laoreet massa. Curabitur sagittis, ex in condimentum suscipit. 
          </p>
          <ol>
            <li>Nulla lacinia nibh et neque volutpat tincidunt nec nec libero. </li>
            <li>Etiam id pulvinar nulla, quis placerat dui. Nulla tempus diam eget tortor rutrum, et gravida purus varius.</li> 
            <li>Suspendisse vehicula nisl ligula, nec aliquet enim euismod id.</li>
          </ol>
        </RichText>
      </LegacyAccordionSection>
    ),
    (
      <LegacyAccordionSection heading="Where are your products sold in Canada?">
        <RichText>
          <p>
            Aenean et euismod nulla, at laoreet massa. <a href="#x">Curabitur sagittis</a>, ex in condimentum suscipit. 
          </p>
        </RichText>
      </LegacyAccordionSection>
    ),
  ]
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
