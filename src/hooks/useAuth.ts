import { useQuery } from "@tanstack/react-query";
import User from "@/services/user.service";

const useAuth = (opts = {}) => {
  const { data, ...rest } = useQuery({
    queryKey: ["user"],
    queryFn: User.getUser,
    staleTime: Infinity,
    ...opts,
  });

  return {
    user: data?.data?.user,
    ...rest,
  };
};

export default useAuth;
