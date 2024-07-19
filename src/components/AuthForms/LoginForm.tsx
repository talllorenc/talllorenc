"use client";

import * as yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { ILoginUser } from "@/types/AuthForms";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { AuthSocials } from "../AuthSocials/AuthSocials";
import { Input } from "../ui/Input";
import { useState } from "react";
import { signIn } from "next-auth/react";

const basicSchema = yup.object().shape({
  email: yup.string().required("*required").email("*invalid format"),
  password: yup.string().required("*required"),
});

export function LoginForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    values,
    handleChange,
    touched,
    handleBlur,
    handleSubmit,
    errors,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit: async (values: ILoginUser) => {
      try {
        const result = await signIn("credentials", {
          email: values.email,
          password: values.password,
        });

        if (result?.error) {
          setErrorMessage(result.error);
        } else {
          router.push("/"); 
        }
      } catch (error) {
        console.log(error);
        setErrorMessage("An unexpected error occurred");
      }
    },
  });
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-1 max-w-xl mx-auto"
    >
      <div className="flex flex-col gap-2 text-center md:text-left">
        <h2 className="text-xl font-bold">TALLLORENC | Sign in</h2>
        <p className="text-neutral-500 dark:text-neutral-400">
          Please provide all the necessary information
        </p>
      </div>

      <AuthSocials />

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

      {errorMessage && <div className="text-red-500 mb-2">{errorMessage}</div>}

      <button
        type="submit"
        className="flex items-center justify-center bg-[#f31260] text-white font-bold hover:shadow-buttonRedBrick shadow-buttonRed transition-all duration-200 gap-2 rounded-md py-2 mt-2"
      >
        ENTER
        <FaArrowRight />
      </button>

      <p className="text-neutral-500 dark:text-neutral-400 text-center mt-4">
        Still no account?{" "}
        <Link className="underline hover:text-[#f31260]" href="/register">
          Register
        </Link>
      </p>
    </form>
  );
}
