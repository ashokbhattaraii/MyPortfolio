"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../Resualble_Components/Button";
import { error } from "console";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { useToast } from "@/app/(admin)/admin/Context/ToastContext";
export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const validationRules = {
    name: {
      required: "Please fill the name",
      minLength: {
        value: 2,
        message: "Name must be of atleast 2 characters",
      },
    },
    email: {
      required: "Invalid email format",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email format.",
      },
    },

    message: {
      required: "Enter your message",
      minLength: {
        value: 5,
        message: "At least one line",
      },
    },
  };

  const ErrorMessage = ({ errors, name }: { errors: any; name: string }) => {
    if (!errors?.[name]) return null;

    return <p className="text-red-500 mt-2">{errors[name].message}</p>;
  };
  const [isSending, setSending] = useState(false);
  const [successDialog, setDialog] = useState(false);

  const { setIsMessageSent, setToast } = useToast();

  const onSubmit = async (data: any) => {
    try {
      setSending(true);
      const req = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" },
      });
      if (req.ok) {
        setDialog(true);
        reset();
        setToast("Message Sent Successfully", "success");
        setIsMessageSent(true);
        setSending(false);
      }
    } catch (error) {
      alert("Error send failed");
    }
  };

  return (
    <>
      <div
        className="flex flex-wrap w-full max-w-7xl bg-[#2B2A2A] items-center m-auto text-white p-4 sm:p-6 md:p-8 mb-10 relative shadow-2xl shadow-gray-700 rounded-xl sm:rounded-2xl mx-4 sm:mx-auto"
        id="contactArea"
      >
        <h1 className="text-blue-600 font-bold text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-center md:text-left w-full">
          Get In Touch
        </h1>
        <div className="flex flex-col justify-center md:flex-row lg:flex-row text-white gap-4 sm:gap-6 w-full">
          <div className="flex flex-col gap-3 sm:gap-4 flex-1">
            <p className="text-sm sm:text-base leading-relaxed">
              I'm always open to new opportunities, collaborations, and
              intriguing challenges. Whether you have a project idea, a job
              offer, or just want to discuss the latest in tech, I'd love to
              hear from you.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              The quickest way to start a conversation is through the message
              box below. Alternatively, you can find my direct contact details
              below, and I aim to respond within 24 hours. Let's connect!
            </p>
          </div>

          <form
            id="message-box"
            className="w-full md:max-w-lg lg:max-w-xl mx-auto md:mx-0 p-4 sm:p-5 mb-3 bg-white rounded-xl sm:rounded-2xl z-10 flex-1"
          >
            <h1 className="text-blue-600 font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">
              Message
            </h1>
            <div id="name" className="relative flex mt-3 sm:mt-4 flex-col">
              <input
                type="text"
                className={`border rounded-xl sm:rounded-2xl border-black text-black text-sm sm:text-base p-2 sm:p-2.5 pl-8 sm:pl-9 relative outline-0 w-full placeholder:text-gray-700 ${
                  errors.name ? "border-red-500" : "border-black"
                }`}
                placeholder="Enter your name"
                {...register("name", validationRules.name)}
              />
              <img
                className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2"
                width="20"
                height="20"
                src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
                alt="user-male-circle"
              />
              <ErrorMessage errors={errors} name="name" />
              <div id="email" className="relative flex flex-col mt-3 sm:mt-4">
                <input
                  type="text"
                  className={`border rounded-xl sm:rounded-2xl border-black text-black text-sm sm:text-base p-2 sm:p-2.5 pl-8 sm:pl-9 outline-0 w-full placeholder:text-gray-700 ${
                    errors.email ? "border-red-500" : "border-black"
                  }`}
                  placeholder="@gmail.com"
                  {...register("email", validationRules.email)}
                />
                <img
                  className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2"
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-filled/50/circled-envelope.png"
                  alt="user-email-circle"
                />
                <ErrorMessage errors={errors} name="email" />
              </div>
            </div>
            <textarea
              id="user-message"
              placeholder="Type message here"
              className={`border rounded-xl sm:rounded-2xl border-black text-sm sm:text-base p-3 outline-0 w-full mt-3 sm:mt-4 text-black ${
                errors.message ? "border-red-500" : "border-black"
              }`}
              rows={4}
              {...register("message", validationRules.message)}
            />
            <ErrorMessage errors={errors} name="message" />
            <Button
              variant="primary"
              className="w-full mt-3 sm:mt-4 bg-blue-600 text-white text-sm sm:text-base py-2.5 sm:py-3"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              {isSending ? (
                <>
                  <div className="flex justify-center items-center font-bold">
                    <p className="flex">
                      Sending
                      <span className="flex ml-1">
                        <span className="animate-bounce [animation-delay:-0.3s]">
                          .
                        </span>
                        <span className="animate-bounce [animation-delay:-0.15s]">
                          .
                        </span>
                        <span className="animate-bounce">.</span>
                      </span>
                    </p>
                  </div>
                </>
              ) : (
                "Send Message"
              )}
            </Button>
            {successDialog && (
              <div className="fixed inset-0 z-100 text-black bg-black/50 flex justify-center items-center w-full backdrop-blur-sm px-4 overflow-hidden">
                <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl w-full max-w-xs sm:max-w-sm">
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <Check className="m-auto bg-blue-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 p-1.5 sm:p-2"></Check>
                    <p className="pb-3 sm:pb-4 px-4 sm:px-6 text-[#2B2A2A] text-sm sm:text-base text-center">
                      Message Sent Successfully
                    </p>
                    <Button
                      variant="danger"
                      className="w-full mt-2 sm:mt-4 text-sm sm:text-base py-2 sm:py-2.5"
                      onClick={() => {
                        setDialog(false);
                      }}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
        <div className="bg-gradient-to-r from-[#5A7ACD] to-[#5A7ACD]/70 rounded-xl sm:rounded-2xl w-full mt-4 sm:mt-6 md:mt-0 relative md:absolute md:right-0 md:bottom-0 text-white p-4 sm:p-6 md:p-8">
          <div id="contactIndo" className="w-full">
            <div
              id="details"
              className="mt-4 sm:mt-8 md:mt-16 space-y-4 sm:space-y-6"
            >
              <div
                id="email"
                className="flex gap-3 sm:gap-5 items-center font-bold text-sm sm:text-base"
              >
                <img
                  width="24"
                  height="24"
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/new-post.png"
                  alt="new-post"
                />
                <p className="break-all sm:break-normal">ashok@contact.com</p>
              </div>

              <div
                id="phone"
                className="flex gap-3 sm:gap-5 items-center font-bold text-sm sm:text-base"
              >
                <img
                  width="24"
                  height="24"
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/phone-disconnected.png"
                  alt="phone"
                />
                <p>+977 9700000000</p>
              </div>

              <div
                id="location"
                className="flex gap-3 sm:gap-5 items-center font-bold text-sm sm:text-base"
              >
                <img
                  width="24"
                  height="24"
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/marker.png"
                  alt="location"
                />
                <p>Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
          <div
            id="socialLinks"
            className="flex flex-row md:flex-col justify-center md:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-0 md:absolute md:top-15 md:right-1/2 md:bottom-0 z-100"
          >
            <Link href="https://www.linkedin.com/in/ashok-bhattarai-5a2644330/">
              <Image
                src="./icons8-linkedin.svg"
                alt="linkedin"
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 transition-transform duration-200 ease-in-out hover:scale-125"
                width={36}
                height={36}
              />
            </Link>
            <Link href="https://www.instagram.com/_ashokbhattarai/">
              <Image
                src="./icons8-instagram.svg"
                alt="Instagram"
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 transition-transform duration-200 ease-in-out hover:scale-125"
                width={36}
                height={36}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/ashok-bhattarai-5a2644330/">
              <Image
                src="./icons8-youtube.svg"
                alt="Youtube"
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 transition-transform duration-200 ease-in-out hover:scale-125"
                width={36}
                height={36}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
