"use client";

import * as yup from "yup";
import { FormikHelpers, useFormik } from "formik";
import { useRouter } from "next/navigation";
import { IRegisterUser } from "@/types/AuthForms";
import { FaArrowRight, FaInfoCircle } from "react-icons/fa";
import Link from "next/link";
import AuthSocials from "../AuthSocials/AuthSocials";
import Input from "../ui/Input";
import HomeButton from "../ui/HomeButton";
import { useState } from "react";
import { Spinner } from "@nextui-org/react";
import { register } from "../../lib/actions";
import FormErrors from "./FormErrors";

const loginRules = /^[A-Za-z0-9]+$/;
const passwordRules = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/;

const basicSchema = yup.object().shape({
  email: yup.string().required("*required").email("*invalid format"),
  name: yup
    .string()
    .required("*required")
    .min(5, "*invalid format")
    .matches(loginRules, { message: "*invalid format" }),
  password: yup
    .string()
    .min(6, "*invalid format")
    .matches(passwordRules, {
      message: "*invalid format",
    })
    .required("*required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "*passwords don't match")
    .required("*required"),
});

const RegisterForm = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    values,
    handleChange,
    touched,
    handleBlur,
    handleSubmit,
    errors,
    isValid,
  } = useFormik<IRegisterUser>({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit: async (
      values: IRegisterUser,
      { resetForm }: FormikHelpers<IRegisterUser>
    ) => {
      setLoading(true);
      setErrorMessage(null);
      try {
        const res = await register(values);

        if (!res) {
          setErrorMessage("An unexpected error occurred");
          return;
        }

        router.push("/login");
      } catch (error: any) {
        setErrorMessage(error.message || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-1 w-full mx-auto"
    >
      {loading && (
        <div className="absolute inset-0 bg-gray-500 bg-opacity-70 flex justify-center items-center z-10">
          <Spinner size="lg" color="danger" />
        </div>
      )}

      <div className="flex flex-col gap-2 text-center md:text-left">
        <h2 className="text-xl font-bold">TALLLORENC | Sign up</h2>
        <p className="text-neutral-500 dark:text-neutral-400">
          Please provide all the necessary information
        </p>
      </div>

      <AuthSocials />

      <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
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
        <Input
          id="name"
          label="Name"
          type="name"
          placeholder=" "
          error={errors.name}
          touched={touched.name}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-neutral-500 mt-1">
          <FaInfoCircle className="text-green-500" />
          <p className="text-sm dark:text-neutral-400">
            6 characters, 1 uppercase letter, !@#$%^&*
          </p>
        </div>
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder=" "
          error={errors.password}
          touched={touched.password}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>

      <Input
        id="confirmPassword"
        label="Confirm password"
        type="Password"
        placeholder=" "
        error={errors.confirmPassword}
        touched={touched.confirmPassword}
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      {errorMessage && <FormErrors message={errorMessage || ""} />}

      <button
        type="submit"
        className="flex items-center justify-center bg-[#f31260] text-white font-bold hover:shadow-buttonRedBrick shadow-buttonRed transition-all duration-200 gap-2 rounded-md py-2 mt-2"
      >
        JOIN
        <FaArrowRight />
      </button>

      <div className="flex flex-col items-center gap-4">
        <p className="text-neutral-500 dark:text-neutral-400 text-center mt-4">
          Already have an account?
          <Link className="underline hover:text-[#f31260]" href="/login">
            Login
          </Link>
        </p>

        <HomeButton />
      </div>
    </form>
  );
};

export default RegisterForm;
