"use client";
import { useContext, useState, createContext, useTransition } from "react";
import { deletePost } from "@/app/actions/blogActions";
import ToastMessage from "../Components/Toast/toast";
import { useRouter } from "next/navigation";
import { AlertTriangle, X } from "lucide-react";

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
          <div className="fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-sm z-50 px-4">
            <div
              className="bg-gray-900 border border-gray-800 rounded-2xl max-w-md w-full shadow-2xl overflow-hidden
              animate-in fade-in zoom-in duration-200"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        Delete Post
                      </h2>
                      <p className="text-sm text-gray-400 mt-1">
                        This action cannot be undone
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsModelOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  Are you sure you want to delete this post? This will
                  permanently remove the post and all its content.
                </p>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleConfirmDelete}
                    disabled={isPending}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-3 
                      rounded-xl transition-all duration-200 hover:scale-105 disabled:opacity-50 
                      disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isPending ? "Deleting..." : "Delete"}
                  </button>
                  <button
                    onClick={() => setIsModelOpen(false)}
                    disabled={isPending}
                    className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-4 py-3 
                      rounded-xl transition-all duration-200 hover:scale-105 disabled:opacity-50"
                  >
                    Cancel
                  </button>
                </div>
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
