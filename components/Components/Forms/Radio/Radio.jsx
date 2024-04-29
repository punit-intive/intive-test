import "./Radio.scss";

import { guuid } from "@/helpers/common";
import { useFormContext } from "react-hook-form";

import RenderRichContentfulText from "../../RenderRichContentfulText";

const Radio = ({ name, label, labelExtended, value, required, onChange }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const labelPrepared = (labelExtended && <RenderRichContentfulText content={labelExtended} />) || label || name;

  const validations = {
    ...(required && { required })
  };

  const id = guuid();

  return (
    <label id={id} htmlFor={id} className={cx("n-radio", "body-2", { "n-radio--error": errors[name] })}>
      <input id={id} name={name} type='radio' value={value} {...register(name, validations)} onChange={onChange} />

      {labelPrepared}
    </label>
  );
};


export default Radio;
