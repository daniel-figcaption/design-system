import * as React from 'react';
import "./Icon.scss";
import clsx from 'clsx';

const icons = import.meta.glob<true, string, React.FC<React.SVGProps<SVGSVGElement>>>('../../assets/icons/*.svg', {
  eager: true,
  import: 'default',
  query: '?react',
});

export const iconNames = Object.keys(icons).map(path =>
  path.match(/([^/]+)\.svg$/)?.[1]
) as string[];

export type TIconName = typeof iconNames[number];

export type TIconRelativeSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';

export type TProps = {
  iconName: TIconName;
  relativeSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  className?: string;
};

const Icon: React.FC<TProps> = ({ 
  iconName, 
  relativeSize = 'base', 
  className 
}) => {
  const IconSvg = icons[`../../assets/icons/${iconName}.svg`];

  if (!IconSvg) {
    console.warn(`Icon "${iconName}" not found.`);
    return null;
  }

  const allClasses = clsx(
    'c-icon',
    {
      'c-icon--xs': relativeSize === 'xs',
      'c-icon--sm': relativeSize === 'sm',
      'c-icon--lg': relativeSize === 'lg',
      'c-icon--xl': relativeSize === 'xl',
    },
    className,
  );

  console.log('...', IconSvg);

  return <IconSvg className={allClasses} />;
};

export default Icon;
