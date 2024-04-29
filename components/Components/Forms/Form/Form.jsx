"use client";
import "./Form.scss";

import PageContext from "@/contexts/PageContext";
import Constants from "@/constants";
import { useContext, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import Notification from "./Components/Notification";
import getNotificationProperties from "./helpers/getNotificationProperties";

const Form = ({ options, children, onSubmit, onError, successNotification, errorNotification, showNotification, focusOn, className }) => {
  const language = "en";
  const methods = useForm(options);

  const {
    formState: { isSubmitting, isSubmitted, isSubmitSuccessful, errors },
    setError,
    setFocus,
    watch
  } = methods;

  const LoadingImg = (
    <img src='../../../../../static/images/intive-loading.png' objectFit='contain' placeholder='none' alt='loading image' />
  );

  const shouldShowNotification =
    showNotification &&
    (isSubmitting ||
      (isSubmitted && isSubmitSuccessful) ||
      ((errors[Constants.FORMS.ERRORS.SUBMIT] || errors[Constants.FORMS.ERRORS.ROOT]) && isSubmitted && !isSubmitSuccessful));

  const handleSubmit = async values => {
    try {
      await onSubmit(values);
    } catch (e) {
      console.error(e);

      if (e.response?.status > 200) {
        setError("root.serverError", {
          type: e.response.statusCode
        });
      } else {
        setError("root.random", {
          type: "random"
        });
      }
    }
  };

  const handleError = e => {
    onError(e);
  };

  const handleReset = () => methods.reset();

  const notificationProps = getNotificationProperties(
    successNotification,
    errorNotification,
    isSubmitting,
    isSubmitSuccessful,
    isSubmitted,
    language
  );

  useEffect(() => {
    if (focusOn) {
      setFocus(focusOn);
    }
  }, [setFocus]);

  useEffect(() => {
    let subscription;

    if (options && options.modeSubmit === "onChange") {
      subscription = watch(methods.handleSubmit(handleSubmit, handleError));
    }

    return () => subscription && subscription.unsubscribe();
  }, [watch]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit, handleError)} className={className} noValidate>
        {shouldShowNotification && <Notification iconAsStaticImage={LoadingImg} onReset={handleReset} {...notificationProps} />}

        {children}
      </form>
    </FormProvider>
  );
};

Form.defaultProps = {
  options: undefined,
  onError: () => {},
  successNotification: undefined,
  errorNotification: undefined,
  showNotification: true,
  focusOn: undefined,
  className: undefined
};

export default Form;
