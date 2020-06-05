import React, { createContext, useCallback, useContext, useState } from "react";
import ToastContainer from "../components/ToastContainer";
import { uuid } from "uuidv4";

export interface ToastMessage {
  type?: "success" | "error" | "info";
  title: string;
  description?: string;
  id: string;
}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, "id">): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback((message: Omit<ToastMessage, "id">) => {
    const id = uuid();

    const toast = {
      id,
      ...message,
    };

    setMessages((msgs) => [...msgs, toast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((msg) => msg.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}

export { ToastProvider, useToast };
