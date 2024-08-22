"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Spinner from "../ui/Spinner";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import LinkButton from "../ui/LinkButton";

const VerifyEmailPageContent = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const token = searchParams.get("token") || "";

  return (
    <div>Verify page</div>
    // <div className="flex items-center justify-center p-4 max-w-md mx-auto">
    //   <div className="border border-neutral-600 p-8 rounded-xl">
    //     {isLoading ? (
    //       <div className="flex gap-2 items-center font-bold">
    //         <p>Your mail is being verified. Please wait!</p>
    //         <Spinner />
    //       </div>
    //     ) : (
    //       <div className="flex flex-col gap-4 justify-center items-center text-center">
    //         <div>
    //           <span>
    //             {isSuccess ? (
    //               <div className="flex gap-4 items-center font-bold text-green-600 dark:text-green-500 text-center">
    //                 <FaCheckCircle />
    //                 <p>Email verified</p>
    //               </div>
    //             ) : (
    //               <div className="flex gap-4 items-center font-bold text-red-600 dark:text-red-500">
    //                 <FaExclamationTriangle />
    //                 <p>Invalid link</p>
    //               </div>
    //             )}
    //           </span>
    //         </div>
    //         {isError ? (
    //           <div>
    //             <p>
    //               The link is either invalid or expired. Please log in to the
    //               portal to get a new link
    //             </p>
    //             <LinkButton href="/sign-in" text="Log in" />
    //           </div>
    //         ) : (
    //           <div className="flex flex-col ">
    //             <p>
    //               The email has been successfully confirmed. You can log in to
    //               the portal to continue working
    //             </p>
    //             <LinkButton href="/sign-in" text="Log in" />
    //           </div>
    //         )}
    //         <Link href="/">Back to home</Link>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};

const VerifyEmailPage = () => (
  <Suspense fallback={<div>Loading page...</div>}>
    <VerifyEmailPageContent />
  </Suspense>
);

export default VerifyEmailPage;
