import clsx from "clsx";
import Cta from "../Cta/Cta";
import "./CtaSet.scss";

export type TProps = {
  ctas: React.ReactElement<React.ComponentProps<typeof Cta>>[];
  className?: string;
};

const CtaSet: React.FC<TProps> = ({
  ctas,
  className,
}) => {
  const allClasses = clsx(
    'o-cta-set',
    className,
  );

  return (
    <ul className={allClasses}>
      {ctas.map((cta, i) => (
        <li key={i} className="o-cta-set__item">
          {cta}
        </li>
      ))}
    </ul>
  );
};

export default CtaSet;
