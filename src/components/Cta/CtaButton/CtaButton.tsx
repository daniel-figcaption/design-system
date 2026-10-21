import Cta from '../Cta/Cta';
import defineCtaComponent from '../shared/defineCtaComponent';
import { TBaseCta } from '../shared/types';
import { TCtaButtonButtonType } from './lib/types';

export type TCtaButtonComponent = TBaseCta<{
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  buttonType?: TCtaButtonButtonType;
  buttonAttributes?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}>;

const CtaButton: TCtaButtonComponent = defineCtaComponent(({
  onClick,
  buttonType = 'button',
  buttonAttributes,
  ...props
}) => {
  return (
    <Cta 
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

export default CtaButton;
