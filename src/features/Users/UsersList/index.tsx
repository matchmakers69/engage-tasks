import { User } from "api/types";
import UserItem from "../UserItem";

type IUsersListProps = {
  users: User[];
};

const UsersList = ({ users }: IUsersListProps) => {
  return (
    <>
      <div data-testid="users-list-wrapper" className="grid-container">
        <div className="row">
          {users.map((user) => (
            <UserItem
              key={user.id}
              first_name={user.first_name}
              last_name={user.last_name}
              email={user.email}
              job_title={user.job_title}
              bio={user.bio}
              image={user.image}
              reference={user.reference}
              username={user.username}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default UsersList;
