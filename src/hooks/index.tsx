import { AuthProvider } from "./Auth";
import { ToastProvider } from "./Toast";
import React from "react";

const Provider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
};

export default Provider;
