import React from "react";
import { ToastMessage } from "../../hooks/Toast";
import { Container } from "./styles";
import Toast from "./Toast";
import { useTransition } from "react-spring";

interface ToastContainerProps {
  messages: ToastMessage[];
}

export default ({ messages }: ToastContainerProps) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: "-120%", opacity: 0 },
      enter: { right: "0%", opacity: 1 },
      leave: { right: "-120%", opacity: 0 },
    }
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};
