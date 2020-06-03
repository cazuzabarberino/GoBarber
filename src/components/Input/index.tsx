import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";
import { IconBaseProps } from "react-icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export default ({ icon: Icon, ...rest }: InputProps) => (
  <Container>
    {Icon && <Icon size={20} />}
    <input {...rest} />
  </Container>
);
