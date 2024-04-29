/* eslint-disable jsx-a11y/label-has-associated-control */
import "./Checkbox.scss";

import { useFormContext } from "react-hook-form";

import RenderRichContentfulText from "../../RenderRichContentfulText";

const Checkbox = ({ name, label, labelExtended, required }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const labelPrepared = (labelExtended && <RenderRichContentfulText content={labelExtended} />) || label || name;
  const labelExtendedNew = {
    __html: labelPrepared
  };
  const validations = {
    ...(required && { required })
  };

  return (
    <div className={cx("n-checkbox", { "n-checkbox--error": errors[name] })} role='button' tabIndex={0}>
      <label htmlFor={name} id={name} className='body-2' dangerouslySetInnerHTML={labelExtendedNew} />

      <input id={name} type='checkbox' {...register(name, validations)} />
    </div>
  );
};



Checkbox.defaultProps = {
  label: undefined,
  labelExtended: undefined,
  required: undefined
};

export default Checkbox;
