import type { StoryObj } from '@storybook/react';
import Component from '../Accordion';
import AccordionSection from '../AccordionSection/AccordionSection';
import RichText from '@src/components/RichText/RichText';

export const props: React.ComponentProps<typeof Component> = {
  allowMultipleExpanded: true,
  children: [
    (
      <AccordionSection heading="Where are you located?" isDefaultOpen={true}>
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
      </AccordionSection>
    ),
    (
      <AccordionSection heading="Are your products eco-friendly?">
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
      </AccordionSection>
    ),
    (
      <AccordionSection heading="Where are your products sold in Canada?">
        <RichText>
          <p>
            Aenean et euismod nulla, at laoreet massa. <a href="#x">Curabitur sagittis</a>, ex in condimentum suscipit. 
          </p>
        </RichText>
      </AccordionSection>
    ),
  ]
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
