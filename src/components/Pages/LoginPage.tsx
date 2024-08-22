import LoginForm from "@/components/AuthForms/LoginForm";
import SotialsAuth from "../SotialsAuth/SotialsAuth";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div
      className="flex flex-col max-w-md mx-auto rounded-xl overflow-hidden border border-neutral-500 dark:border-neutral-200 shadow-buttonDark"
    >
      <div className="flex flex-col gap-8 p-8 border-b border-neutral-500 dark:border-neutral-200">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-lg font-bold">Sign in to 404TryLater</p>
          <p className="text-neutral-500 dark:text-neutral-200">
            Welcome back! Please sign in to continue
          </p>
        </div>

        <SotialsAuth />

        <LoginForm />
      </div>

      <div className="flex items-center justify-center p-4">
        <span className="text-neutral-500 dark:text-neutral-200 text-center">
          Don’t have an account?
          <Link
            href="/sign-up"
            className="font-medium ml-2 hover:underline text-black dark:text-white"
          >
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
