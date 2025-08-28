import Cta, { TProps as TCtaProps } from '../Cta';
import '../Cta.scss';

export type TProps = TCtaProps & {
  url: string;
  openInNewTab?: boolean;
  aAttributes?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
};

const CtaLink: React.FC<TProps> = ({
  url,
  openInNewTab,
  aAttributes,
  ...props
}) => {
  return (
    <Cta 
      as="a"
      {...props}
      ctaProps={{
        href: url,
        target: openInNewTab ? '_blank' : undefined,
        rel: openInNewTab ? 'noopener noreferrer' : undefined,
        ...aAttributes,
      }}
    />
  );
};

export default CtaLink;
