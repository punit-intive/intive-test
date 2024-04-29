import __ from "@/helpers/translate";

import Constants from "@/constants";

const getNotificationProperties = (successNotification, errorNotification, isSubmitting, isSubmitSuccessful, isSubmitted, language) => {
  if (isSubmitting) {
    return {
      title: __("forms.notification.loading", language),
      message: __("forms.notification.pleaseWait", language),
      back: __("forms.notification.back", language),
      type: Constants.FORMS.NOTIFICATION_TYPES.LOADING
    };
  }

  if (isSubmitted && isSubmitSuccessful) {
    return {
      title: successNotification?.title ?? __("forms.notification.success.title", language),
      message: successNotification?.message ?? __("forms.notification.success.message", language),
      iconMaterial: successNotification?.icon ?? "done",
      fileUrl: successNotification?.fileUrl,
      back: successNotification?.back ?? __("forms.notification.back", language),
      type: Constants.FORMS.NOTIFICATION_TYPES.SUCCESS
    };
  }

  if (isSubmitted && !isSubmitSuccessful) {
    return {
      title: errorNotification?.title ?? __("forms.notification.error.title", language),
      message: errorNotification?.message ?? __("forms.notification.error.message", language),
      back: errorNotification?.back ?? __("forms.notification.back", language),
      iconMaterial: errorNotification?.icon ?? "warning",
      type: Constants.FORMS.NOTIFICATION_TYPES.ERROR
    };
  }

  return null;
};

export default getNotificationProperties;
