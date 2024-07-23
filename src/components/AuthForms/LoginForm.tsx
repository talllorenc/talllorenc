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
import { HomeButton } from "../ui/HomeButton";
import { authenticate } from "@/lib/actions";
import { FormErrors } from "./FormErrors";
import { Spinner } from "@nextui-org/react";

const basicSchema = yup.object().shape({
  email: yup.string().required("*required").email("*invalid format"),
  password: yup.string().required("*required"),
});

export function LoginForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      try {
        const error = await authenticate(values);

        if (error) {
          setErrorMessage(error);
        } else {
          router.push("/");
        }
      } catch (error) {
        setErrorMessage("An unexpected error occurred");
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

      {errorMessage && <FormErrors message={errorMessage || ""} />}

      <button
        type="submit"
        className="flex items-center justify-center bg-[#f31260] text-white font-bold hover:shadow-buttonRedBrick shadow-buttonRed transition-all duration-200 gap-2 rounded-md py-2 mt-2"
      >
        ENTER
        <FaArrowRight />
      </button>

      <div className="flex flex-col items-center gap-4">
        <p className="text-neutral-500 dark:text-neutral-400 text-center mt-4">
          Still no account?
          <Link className="underline hover:text-[#f31260]" href="/register">
            Register
          </Link>
        </p>

        <HomeButton />
      </div>
    </form>
  );
}
