import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default ({ children, ...rest }: ButtonProps) => (
  <Container {...rest}>{children}</Container>
);
