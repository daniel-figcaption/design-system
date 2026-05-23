import Cta from '../Cta';
import '../Cta.scss';
import defineCtaComponent from '../lib/defineCtaComponent';
import { TBaseCta } from '../lib/types';

export type TCtaButtonComponent = TBaseCta<{
  buttonType?: 'button' | 'submit' | 'reset';
  buttonAttributes?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}>;

const CtaButton: TCtaButtonComponent = defineCtaComponent(({
  buttonType = 'button',
  buttonAttributes,
  ...props
}) => {
  return (
    <Cta 
      as="button"
      {...props}
      ctaProps={{
        type: buttonType,
        ...buttonAttributes,
      }}
    />
  );
});

export default CtaButton;
