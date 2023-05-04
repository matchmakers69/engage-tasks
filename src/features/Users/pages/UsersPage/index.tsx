import { useMemo } from "react";
import Content from "components/shared/Content";
import Loader from "components/shared/Loader";
import { useUsersFetchQuery } from "features/Users/hooks/useUsersFetchQuery";
import UsersList from "features/Users/UsersList";
import { FilterUsers } from "features/Users/FilterUsers";
import { useFilteredUsers } from "features/Users/hooks/useFilteredUsers";

const UsersPage = () => {
  // Example with old approach usege custom hook to fetch users

  // const { isLoadingUsers, loadingUsersError, users } = useFetchUsers();
  // if (isLoadingUsers) {
  //   return <Loader />;
  // }
  // if (!!loadingUsersError) {
  //   return <div>{loadingUsersError}</div>;
  // }

  const { data: users, isLoading, isError } = useUsersFetchQuery();
  const {
    FILTERABLE_FIELDS,
    handleFiltersChange,
    activeSearchPhrase,
    handleChangeSearchPhrase,
    activeFields,
    stringOptions,
  } = useFilteredUsers();

  const filteredUsers = useMemo(() => {
    const trimmedPhrase = activeSearchPhrase.trim();

    if (!users) {
      return [];
    }

    if (!activeFields.length || !trimmedPhrase) {
      return users;
    }

    return users.filter((user) => {
      return activeFields.some((field) => {
        const userValue = user[field.key];
        // Typeguard to make sure that filtered value is a string
        if (typeof userValue === "string") return userValue.includes(trimmedPhrase);
        return user;
      });
    });
  }, [users, activeFields, activeSearchPhrase]);

  if (isLoading) {
    return <Loader data-testid="loader" />;
  }

  if (isError) {
    return <div data-testid="error">Sorry error occured!</div>;
  }

  return (
    <>
      <Content title="Users">
        <p>This is a list of users you can read more about them.</p>
      </Content>

      <FilterUsers
        value={stringOptions}
        options={FILTERABLE_FIELDS}
        onChange={handleFiltersChange}
        activeSearchPhrase={activeSearchPhrase}
        onChangeSearchPhrase={handleChangeSearchPhrase}
      />

      {users ? <UsersList users={filteredUsers!} /> : null}
    </>
  );
};

export default UsersPage;
