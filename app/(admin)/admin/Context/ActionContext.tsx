"use client";
import { useContext, useState, createContext, useTransition } from "react";
export const dynamic = "force-dynamic";
import { deletePost } from "@/app/actions/blogActions";
import ToastMessage from "../Components/Toast/toast";
import { useRouter } from "next/navigation";

interface ActionContextType {
  openDeleteModel: (id: number) => void;
  isDeleting: boolean;
  postCreated: boolean;
}
const ActionContent = createContext<ActionContextType | undefined>(undefined);
export function ActionProvider({ children }: { children: React.ReactNode }) {
  const [targetId, setTargetId] = useState<number | null>(null);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isTostOpen, setIsTostOpen] = useState(false);
  const [postCreated, setPostCreated] = useState(false);
  const router = useRouter();

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "info";
  }>();
  const [isPending, startTransition] = useTransition();

  const openDeleteModel = (id: number) => {
    setTargetId(id);
    setIsModelOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (targetId === null) return;

    startTransition(async () => {
      setIsModelOpen(false);

      try {
        const result = await deletePost(Number(targetId));

        if (result && result.success === false) {
          setToast({ message: result.error, type: "error" });
          setIsTostOpen(true);
        }
        router.refresh();
      } catch (error: any) {
        if (error.message === "NEXT_REDIRECT") {
          setToast({ message: "Post Deleted Successfully", type: "success" });
          setIsTostOpen(true);
          router.refresh();
          return;
        }

        setToast({ message: "Error deleting Post", type: "error" });
        setIsTostOpen(true);
      }
    });
  };

  return (
    <ActionContent.Provider
      value={{
        openDeleteModel,
        isDeleting: isPending,
        postCreated,
      }}
    >
      <>
        {isTostOpen && toast && (
          <div className="fixed bottom-4 right-2 z-50">
            <ToastMessage
              message={toast.message}
              type={toast.type}
              onClose={() => setIsTostOpen(false)}
            />
          </div>
        )}
        {isModelOpen && (
          <div
            id="deleteDialog"
            className="fixed inset-0 flex justify-center items-center bg-slate-400  backdrop-blur-2xl "
          >
            <div className="bg-slate-400 flex-col flex justify-center items-center p-4 max-w-sm w-full shadow-2xl rounded-2xl gap-4">
              <h1 className="text-xl text-black">Are you sure?</h1>
              <div className="flex gap-4">
                <button
                  className=" bg-slate-800 px-4 py-2 rounded-2xl text-xl font-bold hover:-translate-y-2 transition-transform ease-out duration-300"
                  onClick={() => handleConfirmDelete()}
                >
                  Confirm!
                </button>
                <button
                  className=" px-4 py-2 rounded-2xl text-xl font-bold hover:-translate-y-2 transition-transform ease-out duration-300 text-black"
                  onClick={() => setIsModelOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        {children}
      </>
    </ActionContent.Provider>
  );
}

export const useGlobalActions = () => {
  const context = useContext(ActionContent);
  if (!context) throw new Error("Global actions must be used");
  return context;
};
