"use client";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactInputs, contactEmail } from "../../utils/data/contacts";
import { toast } from "react-toastify";

const schema = yup.object({
  name: yup.string().optional(),
  email: yup.string().email().required(),
  company: yup.string().optional(),
  message: yup.string().required(),
});

type FormData = yup.InferType<typeof schema>;

const Contact = () => {
  const url = "https://formspree.io/f/mqkwlgye";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        toast.success("Message sent successfully");
      })
      .catch(() => {
        toast.error("Message failed to send");
      })
      .finally(() => {
        reset();
      });
  };

  return (
    <div
      className="flex flex-col items-center py-12 min-h-screen justify-center bg-white dark:bg-[#111111]"
      id="contact"
    >
      <div className="flex flex-col items-center pb-6 mb-10 w-full px-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#040c2c] dark:text-slate-300 animate__animated animate__fadeInDown animate__faster">
            Contact
          </h2>
          <p className="text-sm sm:text-lg font-sans text-slate-500 dark:text-slate-400 mt-1 animate__animated animate__fadeIn" style={{ animationDelay: "0.2s" }}>
            Let&apos;s get in touch
          </p>
          <div className="mt-4 h-px w-24 bg-linear-to-r from-transparent via-slate-400 to-transparent dark:via-slate-500" />
          <p className="mt-4 max-w-md mx-auto text-sm font-sans text-slate-600 dark:text-slate-400 text-center leading-relaxed px-2">
            Use the form to send a message, or email me at{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 underline underline-offset-2 decoration-slate-300 dark:decoration-slate-600 hover:decoration-blue-500 transition-colors"
            >
              {contactEmail}
            </a>
            . I read both.
          </p>
      </div>

      <div className="w-full max-w-lg px-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700 rounded-lg p-8 shadow-xs"
        >
          {contactInputs.map((input: any) => (
            <div className="flex flex-col mb-5" key={input.name}>
              <label className="mb-1.5 text-sm font-medium font-sans text-slate-700 dark:text-slate-200">
                {input.label}
              </label>
              {input.name === "message" ? (
                <textarea
                  rows={4}
                  placeholder="I want to discuss about a great opportunity"
                  {...register("message")}
                  className="font-sans text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-hidden transition-colors"
                />
              ) : (
                <input
                  placeholder={input.placeholder}
                  {...register(input.name)}
                  className="font-sans text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-hidden transition-colors"
                />
              )}
              {errors[input.name as keyof typeof errors] && (
                <p className="mt-1 text-xs text-rose-600 dark:text-rose-400 font-sans">
                  {(errors[input.name as keyof typeof errors] as any)?.message}
                </p>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full mt-2 text-sm font-medium font-sans bg-slate-800 hover:bg-slate-700 active:bg-slate-900 text-white py-2.5 px-6 rounded-md transition-colors"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
