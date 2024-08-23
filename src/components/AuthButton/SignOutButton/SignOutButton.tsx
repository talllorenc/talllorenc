"use client";

import { FaSignOutAlt } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "@/services/auth.service";
import { useState } from "react";
import Spinner from "@/components/ui/Spinner";

const SignOutButton = () => {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { mutate: signOut } = useMutation({
    mutationFn: logout,
    onMutate: () => {
      setIsLoading(true);
    },
    onSettled: () => {
      queryClient.clear();
      setIsLoading(false);
      window.location.href = "/sign-in";
    },
  });

  const handleSignOut = () => {
    signOut();
  };

  return (
    <button
      className={`flex items-center justify-center w-full p-4 text-red-500 hover:bg-red-100 transition-all duration-200 ${
        isLoading ? "cursor-not-allowed opacity-80" : "cursor-pointer"
      }`}
      onClick={handleSignOut}
      disabled={isLoading}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex items-center gap-2">
          <p>Sign out</p>
          <FaSignOutAlt />
        </div>
      )}
    </button>
  );
};

export default SignOutButton;
