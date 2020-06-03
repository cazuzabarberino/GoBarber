import React from "react";
import { Container } from "./styles";

interface ToolTipsProps {
  title: string;
  className?: string;
}

const ToolTip: React.FC<ToolTipsProps> = ({ title, children, className }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default ToolTip;
