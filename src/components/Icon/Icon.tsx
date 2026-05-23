import "./Icon.scss";
import clsx from 'clsx';
import { TBaseComponent } from '../lib/types';
import { TIconName } from './lib/types';
import getIconComponentByName from "./lib/getIconComponentByName";
import defineComponent from "../lib/defineComponent";

export type TIconComponent = TBaseComponent<{
  iconName: TIconName;
  relativeSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
}>;

const Icon: TIconComponent = defineComponent(({ 
  iconName, 
  relativeSize = 'base', 
  className 
}) => {
  const IconSvg = getIconComponentByName(iconName);

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

  return <IconSvg className={allClasses} aria-hidden="true" />;
});

export default Icon;
