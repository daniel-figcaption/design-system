import Cta from '../Cta';
import '../Cta.scss';
import defineCtaComponent from '../lib/defineCtaComponent';
import { TBaseCta } from '../lib/types';

export type TCtaLinkComponent = TBaseCta<{
  url: string;
  openInNewTab?: boolean;
  aAttributes?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}>;

const CtaLink: TCtaLinkComponent = defineCtaComponent(({
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
});

export default CtaLink;
