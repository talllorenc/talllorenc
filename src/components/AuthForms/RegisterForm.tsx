"use client";

import Button from "@/components/ui/SubmitButton";
import {
  FaUser,
  FaCaretRight,
  FaEnvelope,
  FaUnlock,
  FaLock,
} from "react-icons/fa";
import Input from "../ui/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Auth from "@/services/auth.service";
import { IRegisterUser } from "@/types/AuthForms";
import FormErrors from "./FormErrors";
import FormSuccess from "./FormSuccess";

const loginRules = /^[A-Za-z0-9]+$/;
const passwordRules = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/;

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Invalid format"),
  username: Yup.string()
    .required("Username is required")
    .min(5, "Min 5 characters")
    .matches(loginRules, { message: "Only latin characters" }),
  password: Yup.string()
    .min(6, "Min 6 characters")
    .matches(passwordRules, {
      message:
        "Password must contain at least one uppercase letter and one special character",
    })
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords don't match")
    .required("Confirm password is required"),
});

const RegisterForm = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const mutation = useMutation({
    mutationFn: (regObj: {
      username: string;
      email: string;
      password: string;
      confirmPassword: string;
    }) => Auth.signUp(regObj),
    onSuccess: () => {
      setIsLoading(false);
      setServerError(null);
      setSuccessMessage(
        "Registration successful. Please check your email to verify your account."
      );
      resetForm();
      setTimeout(() => {
        router.push("/sign-in");
      }, 3000);
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

  const {
    values,
    handleChange,
    touched,
    handleBlur,
    handleSubmit,
    errors,
    resetForm,
  } = useFormik<IRegisterUser>({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
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
        id="username"
        label="Username"
        type="text"
        placeholder="username"
        icon={<FaUser />}
        error={errors.username}
        touched={touched.username}
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
      />
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
      <Input
        id="confirmPassword"
        label="Confirm password"
        type="password"
        placeholder="******"
        icon={<FaLock />}
        error={errors.confirmPassword}
        touched={touched.confirmPassword}
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Button
        text="Sign up"
        gradient={["#434343", "#000000"]}
        textColor="white"
        icon={<FaCaretRight />}
        isDisabled={isLoading}
      />

      {serverError && <FormErrors message={serverError} />}
      {successMessage && <FormSuccess message={successMessage} />}
    </form>
  );
};

export default RegisterForm;
