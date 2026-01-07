"use client";
import React, { useContext, createContext, useState } from "react";
import ToastMessage from "../Components/Toast/toast";
import { error } from "console";

interface ToastContextType {
  isPostCreated: boolean;
  setIsPostCreated: (value: boolean) => void;
  setToast: (message: string, type: "success" | "error" | "info") => void;
  isTostOpen: boolean;
  setIsPostEdited: (value: boolean) => void;
  setIsMessageSent: (value: boolean) => void;
}
const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [isTostOpen, setIsTostOpen] = useState(false);
  const [isPostCreated, setIsPostCreated] = useState(false);
  const [isPostEdited, setIsPostEdited] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [toastData, setToastData] = useState<{
    message: string;
    type: "success" | "error" | "info";
  }>();

  const setToast = (message: string, type: "success" | "error" | "info") => {
    setToastData({ message, type });
    setIsTostOpen(true);
  };
  console.log("From toast context, ispost created", isPostCreated);

  return (
    <>
      <ToastContext.Provider
        value={{
          isPostCreated,
          setIsPostCreated,
          isTostOpen,
          setToast,
          setIsPostEdited,
          setIsMessageSent,
        }}
      >
        {children}
        {isTostOpen &&
          (isPostCreated || isPostEdited || isMessageSent) &&
          toastData && (
            <div className="fixed bottom-4 right-2">
              <ToastMessage
                message={toastData?.message}
                type={toastData?.type}
                onClose={() => setIsTostOpen(false)}
              ></ToastMessage>
            </div>
          )}
      </ToastContext.Provider>
    </>
  );
}

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("Provide must not be empty");
  return context;
};
