import * as React from 'react';
import "./MiniForm.scss";
import clsx from 'clsx';
import useControlWithId from '../Control/lib/hooks/useControlWithId';
import { TBaseComponent } from '../lib/types';
import defineComponent from '../lib/defineComponent';
import FullControlBrand from '../Control/FullControl/FullControlBrand';
import assertAsOneOfBase from '../lib/assertAsOneOfBase';

export type TMiniFormComponent = TBaseComponent<{
  control: React.ReactElement; // TElement<TBaseFullControl>
  hiddenControlLabel: string;
  cta: React.ReactElement;
}>;

const MiniForm: TMiniFormComponent = defineComponent(({ 
  control: controlJsx,
  hiddenControlLabel,
  cta,
  className,
}) => {
  const control = assertAsOneOfBase(controlJsx, FullControlBrand);
  const [controlWithId, controlId] = useControlWithId(control);

  const allClasses = clsx(
    'c-mini-form', 
    className,
  );

  return (
    <form className={allClasses}>
      <div className="c-mini-form__field">
        <label className="u-visually-hidden" htmlFor={controlId}>{hiddenControlLabel}</label>
        {controlWithId}
      </div>
      <div className="c-mini-form__cta-wrap">
        {cta}
      </div>
    </form>
  );
});

export default MiniForm;
