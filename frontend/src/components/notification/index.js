import { notification } from "antd";

const notificationSuccess = (message) => {
  notification.success({
    message,
  });
};

const notificationError = (message) => {
  notification.error({
    message,
  });
};

export { notificationSuccess, notificationError };
