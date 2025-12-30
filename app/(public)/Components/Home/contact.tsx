"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../Resualble_Components/Button";
import { error } from "console";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

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
        setSending(false);
      }
    } catch (error) {
      alert("Error send failed");
    }
  };

  return (
    <>
      <div
        className=" flex flex-wrap max-w-4/5 gray-900 items-center m-auto text-white p-4 mb-10 relative shadow-2xl shadow-gray-700 rounded-2xl "
        id="contactArea"
      >
        <h1 className="text-blue-700 font-bold text-2xl">Get In Touch</h1>
        <div className="flex flex-col justify-center  md:flex-row lg:flex-row text-white">
          <p className="m-6">
            I'm always open to new opportunities, collaborations, and intriguing
            challenges. Whether you have a project idea, a job offer, or just
            want to discuss the latest in tech, I'd love to hear from you.
          </p>
          <p className="m-6">
            The quickest way to start a conversation is through the message box
            on the right. Alternatively, you can find my direct contact details
            below, and I aim to respond within 24 hours. Let's connect!
          </p>

          <form
            id="message-box"
            className="mx-auto max-w-4xl w-full p-5 mb-3 bg-white rounded-2xl z-10"
          >
            <h1 className="text-blue-700 font-bold text-2xl">Message</h1>
            <div id="name" className="relative flex  mt-4 flex-col">
              <input
                type="text"
                className={`border rounded-2xl border-black text-black p-2 pl-9 relative outline-0 w-full placeholder:text-gray-700  ${
                  errors.name ? "border-red-500" : "border-black"
                }`}
                placeholder="Enter your name"
                {...register("name", validationRules.name)}
              />
              <img
                className="absolute top-1 left-1"
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
                alt="user-male-circle"
              />
              <ErrorMessage errors={errors} name="name" />
              <div id="email" className="relative flex flex-col mt-4">
                <input
                  type="text"
                  className={`border rounded-2xl border-black text-black p-2 pl-9 outline-0 w-full placeholder:text-gray-700 ${
                    errors.email ? "border-red-500" : "border-black"
                  }`}
                  placeholder="@gmail.com"
                  {...register("email", validationRules.email)}
                />
                <img
                  className="absolute top-1 left-1 "
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-filled/50/circled-envelope.png"
                  alt="user-email-circle"
                />
                <ErrorMessage errors={errors} name="email" />
              </div>
            </div>
            <textarea
              id="user-message"
              placeholder="Type message here"
              className={`border rounded-2xl border-black  p-3 outline-0 w-full mt-4 text-black ${
                errors.message ? "border-red-500" : "border-black"
              }`}
              rows={5}
              {...register("message", validationRules.message)}
            ></textarea>
            <ErrorMessage errors={errors} name="message" />
            <Button
              variant="primary"
              className="w-full mt-3 bg-lime-500"
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
              <div className=" fixed inset-0  z-100 text-black bg-black/50  flex justify-center items-center w-full    backdrop-blur-sm px-4 overflow-hidden">
                <div className="bg-white p-4 rounded-2xl ">
                  <div className="flex flex-col gap-1">
                    <Check className="m-auto bg-lime-400 rounded-full w-10 h-10"></Check>
                    <p className="pb-4 px-6">Message Sent Successfully</p>
                    <span className="flex ">
                      <Button
                        variant="danger"
                        className="flex-1 mt-4"
                        onClick={() => {
                          setDialog(false);
                        }}
                      >
                        Close
                      </Button>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
        <div className=" bg-linear-to-r from-lime-900 to-lime-400 rounded-2xl max-w-7xl   w-full h-2/4 bottom-0  flex gap-50  md:absolute right-0">
          <div id="contactIndo" className="">
            <div id="details" className="md:mt-16 text-[12px] text-bold">
              <div
                id="email"
                className="flex gap-5 items-center ml-2 mt-6 font-bold"
              >
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/new-post.png"
                  alt="new-post"
                />
                <p>ashok@contact.com</p>
              </div>

              <div
                id="phone"
                className="flex gap-5 items-center ml-2 mt-6 font-bold"
              >
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/phone-disconnected.png"
                  alt="new-post"
                />
                <p>+977 9700000000</p>
              </div>

              <div
                id="phone"
                className="flex gap-5 items-center ml-2 mt-6 font-bold"
              >
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/marker.png"
                  alt="new-post"
                />
                <p>Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
          <div
            id="socialLinks"
            className="absolute flex flex-col right-10 bottom-5 md:absolute z-100 md:top-15 md:right-1/2 md:bottom-0 md: md:flex gap-4 mt-3 md:flex-col "
          >
            <Link href="https://www.linkedin.com/in/ashok-bhattarai-5a2644330/">
              <Image
                src="./icons8-linkedin.svg"
                alt="linkedin"
                className="w-9 h-9 transition-transform duration-200 ease-in-out hover:scale-125"
                width={12}
                height={12}
              />
            </Link>
            <Link href="https://www.instagram.com/_ashokbhattarai/">
              <Image
                src="./icons8-instagram.svg"
                alt="Instagram"
                className="w-9 h-9 transition-transform duration-200 ease-in-out hover:scale-125"
                width={12}
                height={12}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/ashok-bhattarai-5a2644330/">
              <Image
                src="./icons8-youtube.svg"
                alt="Youtube"
                className="w-9 h-9 transition-transform duration-200 ease-in-out hover:scale-125"
                height={9}
                width={9}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
