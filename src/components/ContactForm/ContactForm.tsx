"use client";

import emailjs from "@emailjs/browser";
import * as yup from "yup";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import Input from "../ui/Input";
import { FaCaretRight, FaEnvelope, FaInfoCircle, FaUser } from "react-icons/fa";
import { Button, Spinner } from "@nextui-org/react";
import SubmitButton from "../ui/SubmitButton";
import FormSuccess from "../AuthForms/FormSuccess";
import FormErrors from "../AuthForms/FormErrors";

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

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { values, handleChange, touched, handleBlur, handleSubmit, errors } =
    useFormik({
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
              "service_677owqj",
              "template_q1gdp1x",
              formRef.current!,
              "aKZuUw2Oseva1iRsh"
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
    <form
      onSubmit={handleSubmit}
      method="POST"
      id="contactForm"
      ref={formRef}
      className="flex flex-col gap-4"
    >
      <Input
        id="name"
        label="Your name"
        type="text"
        placeholder="my name"
        icon={<FaUser />}
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
        placeholder="address@gmail.com"
        icon={<FaUser />}
        error={errors.email}
        touched={touched.email}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <div className="flex flex-col gap-1">
        <Input
          id="message"
          label="Message"
          type="message"
          placeholder="Hello, A.L."
          icon={<FaEnvelope />}
          error={errors.message}
          touched={touched.message}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-200 mt-1">
          <FaInfoCircle className="text-green-500" />
          <p className="text-sm">
            5 characters minimum, 100 characters maximum
          </p>
        </div>
      </div>

      <SubmitButton
        text="Send"
        icon={<FaCaretRight />}
        isDisabled={sending}
        buttonColor="#F31260"
      />

      <div className="flex items-center justify-center text-center mt-8">
        {success && !sending ? (
          <FormSuccess message="The message has been sent successfully" />
        ) : null}
        {error && !sending ? (
          <FormErrors message="The message has not been sent, please try again later" />
        ) : null}
      </div>
    </form>
  );
};

export default ContactForm;
