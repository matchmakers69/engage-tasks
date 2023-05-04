import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getUsers } from "api/UsersApiClient";
import { constants } from "config/constants";

export const useUsersFetchQuery = () => {
  return useQuery([constants.queryKey.users], getUsers, {
    staleTime: 2000,
    onSuccess: () => {
      toast.success("Great news! Users are here ;)");
    },
    onError: (error) => {
      // Also we could do redirect to error page
      toast.error(`Upps, someting went wrong: ${error}`);
    },
  });
};
