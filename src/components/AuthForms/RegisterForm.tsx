"use client";

import * as yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { IRegisterUser } from "@/types/AuthForms";
import { FaArrowRight, FaInfoCircle } from "react-icons/fa";
import Link from "next/link";
import { AuthSocials } from "../AuthSocials/AuthSocials";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Input } from "../ui/Input";

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

export function RegisterForm() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (regObj: {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    }) => {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        regObj
      );
      return response.data;
    },
    onSuccess: () => {
      router.push("/");
    },
    onError: (error) => {
      console.error("Registration error:", error);
    },
  });

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
      name: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit: async (values: IRegisterUser, { resetForm }) => {
      try {
        mutation.mutate(values);
      } catch (error: any) {}
    },
  });
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-1 border-2 border-nautal-500 rounded-xl p-8"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">TALLLORENC | Sign up</h2>
        <p className="text-neutral-500">
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
          <p className="text-sm">6 characters, 1 uppercase letter, !@#$%^&*</p>
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
          type="confirmPassword"
          placeholder=" "
          error={errors.confirmPassword}
          touched={touched.confirmPassword}
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />

      <button
        type="submit"
        className="flex items-center justify-center bg-[#F19CBB] text-white font-bold hover:shadow-buttonPinkBrick shadow-buttonBlack transition-all duration-200 gap-2 rounded-md py-2 mt-2"
      >
        JOIN
        <FaArrowRight />
      </button>

      <p className="text-neutral-500 text-center mt-4">
        Already have an account?{" "}
        <Link className="underline hover:text-[#F19CBB]" href="/login">
          Login
        </Link>
      </p>
    </form>
  );
}
