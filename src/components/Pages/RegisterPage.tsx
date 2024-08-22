import RegisterForm from "../AuthForms/RegisterForm";
import SotialsAuth from "../SotialsAuth/SotialsAuth";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div
      className="flex flex-col max-w-md mx-auto rounded-xl overflow-hidden text-black border-neutral-200 shadow-buttonDark"
    >
      <div className="flex flex-col gap-8 bg-white p-8 border-b border-neutral-200">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-lg font-bold">Create your account</p>
          <p className="text-neutral-500">
            Welcome! Please fill in the details to get started.
          </p>
        </div>

        <SotialsAuth />

        <RegisterForm />
      </div>

      <div className="flex items-center justify-center bg-neutral-100 p-4">
        <span className="text-neutral-500 text-center">
          Already have an account?
          <Link
            href="/sign-in"
            className="font-medium ml-2 hover:underline text-black"
          >
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default RegisterPage;
