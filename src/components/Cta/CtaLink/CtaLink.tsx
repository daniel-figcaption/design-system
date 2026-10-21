import Cta from '../Cta/Cta';
import defineCtaComponent from '../shared/defineCtaComponent';
import { TBaseCta } from '../shared/types';

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
