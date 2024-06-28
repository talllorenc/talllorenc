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
       
      } catch (error) {
        console.log(error);  
      }
    },
  });
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-1 border-2 border-nautal-500 rounded-xl p-8"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">TALLLORENC | Sign in</h2>
        <p className="text-neutral-500">
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
        className="flex items-center justify-center bg-[#F19CBB] text-white font-bold hover:shadow-buttonPinkBrick shadow-buttonBlack transition-all duration-200 gap-2 rounded-md py-2 mt-2"
      >
        ENTER
        <FaArrowRight />
      </button>

      <p className="text-neutral-500 text-center mt-4">
        Still no account?{" "}
        <Link className="underline hover:text-[#F19CBB]" href="/register">
          Register
        </Link>
      </p>
    </form>
  );
}
