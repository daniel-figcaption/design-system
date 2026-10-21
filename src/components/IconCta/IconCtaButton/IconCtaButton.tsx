import IconCta from '../IconCta/IconCta';
import defineIconCtaComponent from '../shared/defineIconCtaComponent';
import { TBaseIconCta } from '../shared/types';
import { TIconCtaButtonButtonType } from './lib/types';

export type TIconCtaButtonComponent = TBaseIconCta<{
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  buttonType?: TIconCtaButtonButtonType;
  buttonAttributes?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}>;

const IconCtaButton: TIconCtaButtonComponent = defineIconCtaComponent(({
  onClick,
  buttonType = 'button',
  buttonAttributes,
  ...props
}) => {
  return (
    <IconCta 
      as="button"
      onClick={onClick}
      {...props}
      ctaProps={{
        type: buttonType,
        ...buttonAttributes,      
      }}
    />
  );
});

export default IconCtaButton;
