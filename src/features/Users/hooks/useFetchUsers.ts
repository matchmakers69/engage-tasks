import { User } from "api/types";
import { getUsers } from "api/UsersApiClient";
import { useEffect, useState } from "react";

export const useFetchUsers = () => {
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);
  const [loadingUsersError, setLoadingUsersError] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const handleCall = async () => {
      try {
        const res = await getUsers();

        setUsers(res);
      } catch (error: unknown) {
        setLoadingUsersError("Something went wrong");
      } finally {
        setIsLoadingUsers(false);
      }
    };

    handleCall();
  }, []);

  return { isLoadingUsers, loadingUsersError, users };
};
