import IconCta from '../IconCta';
import '../IconCta.scss';
import defineIconCtaComponent from '../lib/defineIconCtaComponent';
import { TBaseIconCta } from '../lib/types';

export type TIconCtaLinkComponent = TBaseIconCta<{
  url: string;
  openInNewTab?: boolean;
  aAttributes?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}>;

const IconCtaLink: TIconCtaLinkComponent = defineIconCtaComponent(({
  url,
  openInNewTab,
  aAttributes,
  ...props
}) => {
  return (
    <IconCta 
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

export default IconCtaLink;
