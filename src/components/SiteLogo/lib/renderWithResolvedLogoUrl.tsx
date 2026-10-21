import { Meta } from '@storybook/react';
import resolveStorybookImageUrl from './resolveStorybookLogoUrl';
import SiteLogo from '../SiteLogo';

const renderWithResolvedLogoUrl: Meta<typeof SiteLogo>['render'] = (args) => {
  const transformedArgs = {
    ...args,
    imageUrl: resolveStorybookImageUrl(args.imageUrl),
  };
  return (
    <SiteLogo {...transformedArgs} />
  );
};

export default renderWithResolvedLogoUrl;
