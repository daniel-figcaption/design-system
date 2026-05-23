import IconCta from '../IconCta';
import '../IconCta.scss';
import defineIconCtaComponent from '../lib/defineIconCtaComponent';
import { TBaseIconCta } from '../lib/types';

export type TIconCtaButtonComponent = TBaseIconCta<{
  buttonType?: 'button' | 'submit' | 'reset';
  buttonAttributes?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}>;

const IconCtaButton: TIconCtaButtonComponent = defineIconCtaComponent(({
  buttonType = 'button',
  buttonAttributes,
  ...props
}) => {
  return (
    <IconCta 
      as="button"
      {...props}
      ctaProps={{
        type: buttonType,
        ...buttonAttributes,      
      }}
    />
  );
});

export default IconCtaButton;
