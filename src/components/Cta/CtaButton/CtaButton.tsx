import Cta, { TProps as TCtaProps } from '../Cta';
import '../Cta.scss';

export type TProps = TCtaProps & {
  buttonType?: 'button' | 'submit' | 'reset';
  buttonAttributes?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

const CtaButton: React.FC<TProps> = ({
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
};

export default CtaButton;
