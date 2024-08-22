"use client";

import { FaSignOutAlt } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Auth from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Spinner from "@/components/ui/Spinner";

const SignOutButton = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [serverError, setServerError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const mutation = useMutation({
    mutationFn: () => Auth.logout(),
    onMutate: () => {
      setIsLoading(true);
    },
    onSettled: () => {
      queryClient.clear();
      setIsLoading(false);
      window.location.href = "/";
    },
  });

  const handleSignOut = () => {
    mutation.mutate();
  };

  return (
    <button
      className="flex items-center gap-4 p-4 rounded-b-xl text-red-500 hover:bg-neutral-300 transition-all duration-200"
      onClick={handleSignOut}
      disabled={isLoading}
    >
      {isLoading ? <Spinner /> : <FaSignOutAlt />}
      <p>Sign out</p>
      {serverError && <p className="text-red-500">{serverError}</p>}
    </button>
  );
};

export default SignOutButton;
