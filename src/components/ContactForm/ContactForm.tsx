"use client";

import emailjs from "@emailjs/browser";
import * as yup from "yup";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import { Input } from "../ui/Input";
import { FaInfoCircle } from "react-icons/fa";
import { Spinner } from "@nextui-org/react";

const basicSchema = yup.object().shape({
  email: yup.string().required("*required").email("*invalid format"),
  name: yup
    .string()
    .required("*required")
    .min(5, "*invalid format")
    .max(15, "*invalid format"),
  message: yup
    .string()
    .required("*required")
    .min(5, "*invalid format")
    .max(100, "*invalid format"),
});

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    values,
    handleChange,
    touched,
    handleBlur,
    handleSubmit,
    errors,
    isValid,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: basicSchema,
    onSubmit: async (values, { resetForm }) => {
      setSending(true);

      try {
        emailjs
          .sendForm(
            process.env.EMAIL_JS_SERVICE_ID!,
            process.env.EMAIL_JS_TEMPLATE_ID!,
            formRef.current!,
            process.env.EMAIL_JS_ID!
          )
          .then(
            (result) => {
              setSending(false);
              setError(false);
              setSuccess(true);
              resetForm();
            },
            (error) => {
              setSending(false);
              setError(true);
              setSuccess(false);
            }
          );
      } catch (error) {
        setSending(false);
        setError(true);
        setSuccess(false);
      }
    },
  });

  return (
    <form onSubmit={handleSubmit} method="POST" id="contactForm" ref={formRef} className="max-w-xl mx-auto">
      <div className="flex flex-col gap-2 text-center md:text-left mb-8">
        <h2 className="text-xl font-bold">TALLLORENC | Contact</h2>
        <p className="text-neutral-500 dark:text-neutral-400">
          Please provide all the necessary information
        </p>
      </div>

      <Input
        id="name"
        label="Your name"
        type="text"
        placeholder=" "
        error={errors.name}
        touched={touched.name}
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <Input
        id="email"
        label="Email address"
        type="email"
        placeholder=" "
        error={errors.email}
        touched={touched.email}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-neutral-500 mt-1">
          <FaInfoCircle className="text-green-500" />
          <p className="text-sm dark:text-neutral-400">
            5 characters minimum, 100 characters maximum
          </p>
        </div>
        <Input
          id="message"
          label="Message"
          type="message"
          placeholder=" "
          error={errors.message}
          touched={touched.message}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>

      <button className="ml-auto flex items-center justify-center bg-[#f31260] text-white font-bold hover:shadow-buttonRedBrick shadow-buttonRed transition-all duration-200 rounded-md py-2 px-8">
        {sending ? (
          <Spinner color="default" size="sm" labelColor="foreground" />
        ) : (
          "Send"
        )}
      </button>

      <div className="flex items-center justify-center text-center mt-8">
        {success && !sending ? (
          <p className="flex gap-1 items-center text-green-600 dark:text-green-500 py-1 px-2 w-fit text-lg rounded-md bg-green-100 dark:bg-green-950 border border-green-600 dark:border-green-500">
            The message has been sent successfully
          </p>
        ) : null}
        {error && !sending ? (
          <p className="flex gap-1 items-center text-red-600 dark:text-red-500 py-1 px-2 w-fit text-lg rounded-md bg-red-100 dark:bg-red-950 border border-red-600 dark:border-red-500">
            The message has not been sent, please try again later
          </p>
        ) : null}
      </div>
    </form>
  );
}
