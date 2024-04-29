import "./SubmitButton.scss";

const SubmitButton = ({ readyForSending, submitText }) => (
  <button className='request-form__input-submit' type='submit' disabled={!readyForSending}>
    {submitText}
  </button>
);


export default SubmitButton;
