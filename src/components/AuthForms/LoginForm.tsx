"use client";

import SubmitButton from "@/components/ui/SubmitButton";
import { FaCaretRight, FaEnvelope, FaUnlock } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../ui/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Auth from "@/services/auth.service";
import { ILoginUser } from "@/types/AuthForms";
import FormErrors from "./FormErrors";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const mutation = useMutation({
    mutationFn: (regObj: {
      email: string;
      password: string;
    }) => Auth.signIn(regObj),
    onSuccess: () => {
      setIsLoading(false);
      setServerError(null);
      router.push("/");
    },
    onError: (error: any) => {
      setIsLoading(false);
      setServerError(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    },
    onMutate: () => {
      setIsLoading(true);
    },
  });

  const { values, handleChange, touched, handleBlur, handleSubmit, errors } =
    useFormik<ILoginUser>({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema,
      onSubmit: async (values) => {
        setServerError(null);
        mutation.mutate(values);
      },
    });

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Input
        id="email"
        label="Email address"
        type="email"
        placeholder="address@gmail.com"
        icon={<FaEnvelope />}
        error={errors.email}
        touched={touched.email}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Input
        id="password"
        label="Password"
        type="password"
        placeholder="******"
        icon={<FaUnlock />}
        error={errors.password}
        touched={touched.password}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <SubmitButton
        text="Log in"
        icon={<FaCaretRight />}
        buttonColor="#F31260"
        isDisabled={isLoading}
      />

      {serverError && <FormErrors message={serverError} />}
    </form>
  );
};

export default LoginForm;
