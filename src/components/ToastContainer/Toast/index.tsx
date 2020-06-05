import React, { useEffect } from "react";
import { Toast } from "./styles";
import { ToastMessage, useToast } from "../../../hooks/Toast";
import {
  FiAlertCircle,
  FiInfo,
  FiCheckCircle,
  FiXCircle,
} from "react-icons/fi";

interface Props {
  message: ToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

export default ({ message, style }: Props) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => removeToast(message.id), 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <Toast
      style={style}
      type={message.type}
      hasDescription={!!message.description}
    >
      {icons[message.type || "info"]}
      <div>
        <strong>{message.title}</strong>
        {!!message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)}>
        <FiXCircle />
      </button>
    </Toast>
  );
};
